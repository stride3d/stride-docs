# TODO: ADD EXAMPLES OF HOW TO AVOID ISSUES I AM RAISING

# Best Practices

Tips to build a robust and maintainable CodeBase for your Stride Project

## Don't rush big systems

Before starting on larger systems, make sure it would integrate with the rest of the existing systems, would it play well with saving and reloading, with the multiplayer architecture, when the game is paused, would it leak into other scenes ...

Having this in mind ensures you avoid bugs and rewrites down the line because you hadn't thought of the above.

## Implement custom assets

Some of the systems you will build make far more sense as assets rather than entities, consider making them an asset when any of the following is true:
- It survives between multiple scenes
- It is read only
- It is not part of the definition of an entity, doesn't exist within your game world
- It should be editable within the editor, by a designer

Examples of such are:
- Player Input Configuration, defining actions in the source, assigning buttons in editor, saving and loading to disk when initializing the game
- Balance settings, tweaking constants and formulas from the editor to improve iteration when testing your game
- Mission/quest, referencing quests inside of components to unlock spots in game when they are completed, giving the ability for your designer to set those up
- Loot tables, having a list of `UrlReference<Prefab>` with a probability of drop to easily re-use across multiple mobs
- As an all-purpose robust 'key' or 'identifier' type, see [this section](#strings-as-keys-or-identifiers)

### Do not mutate Assets
To that point, make sure to only mutate assets when it makes sense to do so. Remember that a single asset may be referenced by hundreds of components and systems, those may not expect them to change at runtime. Adhering strictly to this idea also ensures that your game's state does not leak through them when loading a new session, game mode, or whatever else.
For example, let's say you have an Axe Asset which has a list of modifier, you save the game, progress for a bit then add a modifier, but end up reloading ot the previous save, the modifier will carry over to that previous game state.

### Scene quirk
The default scene the game spawns for you is the instance stored in the content manager, when running the game you mutate that very instance, meaning that if you want to retrieve the scene in its initial state, you must force the content manager to unload it, and then reload it.
This makes it a bit counterintuitive when you just want to re-spawn the current scene to roll back your changes.

## Statics, singletons and other global-like writes
We strongly advise you to make sure that the entirety of your game's state is implemented as instance properties on components inside the root scene's hierarchy. Avoid static properties and static objects.

This is essential to reduce bugs that come in when implementing all encompassing systems, like the saving system, or the multiplayer layer. Those systems can then be implemented with the expectation that everything they may care about is within the root scene, they can replace this root scene and expect the game state to be completely reset, they can serialize or monitor those entities for changes, etc.
If you do not follow this, part of your game's state will leak between play sessions, creating issues that are really hard to reproduce.

Some systems were this wouldn't make sense, in that case see #Singletons
- The functionality and variables saved by such systems persist for the duration of the program, or across all sessions
    - Saving, loading systems, meta-progression trackers, like achievements and roguelite progression
- The system is read-only
    - Multiplayer server browser or matchmaking back-end. Once you are connected it's a different story though, now you must hold a bunch of states that are only valid to this session, it should not leak to the rest of the program, and so is best left as a component on an entity in the scene.

Singletons can be entirely replaced by using your game's `ServiceRegistry` which can be accessed from any `ScriptComponent`;
```cs
public class MySingleton : IService
{
    public static IService NewInstance(IServiceRegistry r) => new MySingleton();

    public void DoStuff(){}
}

// You may now access this singleton from any of your components:
public override void Update()
{
    Services.GetOrCreate<MySingleton>().DoStuff();
}

// If you need this singleton to live inside the scene, you just have to add a couple of calls
public class MySingleton : SyncScript, IService
{
    public override void Start()
    {
        var instance = Services.GetService<MySingleton>();
        if (instance != this)
            Entity.Remove(this); // Makes sure we remove this instance if another exists already
        else if (instance is null)
            Services.AddService(this); // Register this as a service if it was added through the scene instead of through Services.GetOrCreate<MySingleton>()
    }

    public override void Cancel()
    {
        base.Cancel();
        Services.RemoveService(this); // Remove this one from the services when this component is removed from the scene
    }

    public override void Update() { }

    public static IService NewInstance(IServiceRegistry r)
    {
        var instance = new MySingleton();
        r.GetService<SceneSystem>().SceneInstance.RootScene.Entities.Add(new Entity{ instance });
        return instance;
    }
}
```

## Strings as Keys or Identifiers
This is a very popular anti-pattern, strings that are used as keys or identifiers shows up all over the place, here's a short example describing such a usage:
The quest you're implementing requires the player to gather 10 bear arses, your check for that is to loop through the list of items the player has and check that the item's name match `bear arses`.

Here's a couple of reasons why this is a bad idea:
- Hard to maintain; if your item ends up changing names because bears are banned in Freedonia, your checks will silently fail
- Fragile; your string isn't checked against anything, typos - `bear ass` wouldn't work, careful with leading or trailing whitespaces ...
- Obtuse; designers not aware of how your system work may not understand what they should input there
- Non-explicit uniqueness requirement, if your system expects those to be unique, i.e.: you are looking for a very specific "bear arse"; but you could have multiple different items all named `bear arse`
- Hard to keep track of; strings are too ubiquitous, hard to quickly retrieve all instances/usages of those to build a database for different purposes, like translations, validations ...

All of this will inevitably lead to bugs, or additional work to avoid them - time you could definitely use to take care of other, more fun parts of your game.

There are a couple ways to avoid this, one of the more robust ones is to rely on assets themselves; see [custom assets](custom-assets.md)
```cs
public class Item { }

// Now in your component ...
public Item ItemToCheck;
public int AmountRequired = 10;

public bool HasTheItem()
{
    if (Inventory.TryGetAmount(ItemToCheck, out var amount) && amount >= AmountRequired)
        return true;
    return false;
}
```
- Robust; you can change its name and its path, as long as you do not delete it or change its internal id all components referencing it will keep that reference.
- Easy to use and understand; If a component requires a specific asset you don't have an infinite amount of possibilities, you can either set it to an existing one or create a new one. It's far more foolproof too now that typos are out of the equation.
- Easy to keep track of; each type has a unique extension which you can search for in your file explorer, they exist on disk, and so can be organized into the same directory.
  - The editor's reference window lists all assets that use the selection, this greatly helps when you need to swap the identifier for another or remove it altogether, just go through all the assets that refer to it.
  - you won't need to keep a document going over each identifier you might have in game, one just has to look at the directory were they are stored in the editor.
- Easy to extend; your identifier can now be more than just that, you can attach properties to it, perhaps a description to keep more information about this key.

## Avoid writing extension methods for access shortcuts

This is specifically referring to methods of this kind:
```
static Entity GetFirstChild(this Entity Entity) => Entity.Transform.Children[0].Entity;
// Or
static void AddAsFirstChild(this Entity Entity, Entity entity) => Entity.Transform.Children.Insert(0, entity);
```

It's a double-edged sword:
- You are reducing the skill floor required for users not accustomed to the API, but you're also hindering their growth as they now rely on your shortcut instead of seeking it for themselves, making them aware of concepts and objects neighboring that one, giving them a clearer view of how all the objects fit together. What if they need to access all children, from this extension method they would not be aware that the transform component stores them, that he could just access it directly for that.
- Make sure that accessing what you are hiding is never error-prone, even more so if the name of the method does not make that obvious. You may be reducing the time wasted from typing, but you could very well increase the time you would take to debug it when it does create issues.
- It may very well be a slippery slope to introduce even more shortcuts to other properties or methods of the object you are presenting, how about creating an extension for the second child of the entity, the third ...
- Polluting intellisense; in most cases this is a non-issue, but collection types are a prime example of this. Discoverability for extension methods through intellisense is nigh-on-impossible, there are just far too many extension methods introduced by linq.
- It might imply to the user that your shortcut is somehow different compared to accessing it without the shortcut.

## static EventKeys

Do not use them, they don't generate useful stacktraces when exceptions are thrown, making debugging harder than necessary. They do not provide direct mapping between callers and callees,
Their lifetime is very complex to reason about, i.e.: we recommend making them static, but messages only make sense in the context of a scene, not across the whole process. So, if for example, some system signals the key, the whole scene unloads and reloads, the signal can still be received by systems that just came into this new scene.

## Object definition, ownership, a hierarchical idea

`.Get<MyComponent>()` must be used only for conditional logic, if the caller expects it to exist, it should be part of some definition

Yes:
```
EntityA { components for this item }
```
No:
```
EntityA
  - EntityA { components for this item }
  - ColGroup0_EntityA { some other components also related to this item }
```

Destroying an object
The above idea is helpful as it is now very obvious how your object should be destroyed when you need to do so, pick the entity your 'definition' component is on and simply remove it from the scene

One caveat that you may still fall into with this idea, is if you have another component that must be notified of when this entity is destroyed.
This can be resolved in two ways
- If that component requires this other component, you should consider merging them, strong dependencies like so imply that you should design those in some other way
- This object should be the only one aware of the former's existence, that way, you ensure that the codepath must go through that object to remove the former object




# Definition


# Destroying

Destroying or removing an entity from the world should always be as simple as `Entity.Scene = null`, or `MyComponent.Entity.Scene = null`.
Rely on overriding your script's `Cancel` method to clean things you might have set up.

Upholding this idea makes managing your objects' very straightforward, anyone would intuitively rely on scene removal for any entity or component to stop them existing/affecting the game. And with how we laid out how objects are defined through ECS, we intuitively know which entity we must remove for a component to behave


## Class imply identity, struct imply data

