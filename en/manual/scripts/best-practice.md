# Best Practices

Tips to build a robust and maintainable CodeBase for your Stride project

## Think Twice, Implement Once

Before starting on major systems, make sure it would integrate with the rest of the existing systems; how would it behave when saving and reloading, with the multiplayer architecture, when the game is paused, would it leak into other scenes or game modes ...

Having this in mind ensures you won't write yourself into a corner, creating a system that would need to be patched up when you could have figured it out earlier with a bit of planning, best to avoid introducing any technical debt if you can help it.

A trap you may fall into is to then over design your systems, supporting features that your game will never need, convincing yourself that you could re-use that system for another game, that you could share or sell it.
The vast majority of systems in games are purpose built for that game, your next game will require other features you could not support, let alone predict. You will also acquire a significant amount of experience working on this one, seeing issues it had and wanting to rewrite a better one.

### Figuring Out Your System's Lifetime

What is the scope of the system you're writing;
- Should the same instance be used throughout the entire lifetime of the application ?
- Only while playing a game session ?
- Only for the duration of the currently loaded game session ? 
- Within a single map ?
- For a specific game mode ?
- ...

This will set some expectation as to where the system you're building should reside, how it interacts with other systems, and when it should be started and disposed ...

Some entry and exit points to manage your systems' lifetime:
- On demand by getting and setting it in the Services
- System as a [singleton script](#statics-singletons-and-other-globals) with the `Start()` and `Cancel()` 
- Through your game's `BeginRun()` and `EndRun()`
- As a component processor when associated component types are added to the scene

## Statics, Singletons and Other Globals
We strongly advise you to make sure that the entirety of your game's state is implemented as instance properties on components inside the root scene's hierarchy. Avoid static properties and static objects.

This is essential to reduce bugs that come in when implementing systems that manage the game's state, like the saving system, or the multiplayer layer.
Those systems can then be implemented with the expectation that everything they may care about is within the root scene, they can replace this root scene and expect the game state to be completely reset, they can serialize or monitor those entities for changes, etc. without the risk of your game's state leaking between play sessions and creating issues that are really hard to reproduce.

Some systems may not make sense as part of the scene when:
- The functionality and variables saved by such systems persist for the duration of the program, or across all sessions
    - Saving, loading systems, meta-progression trackers or achievements
- The system is read-only
    - Multiplayer server browser or matchmaking back-end. Once connected to a session it's a different story though, now you must hold a bunch of states that are only valid to this session, it should not leak to the rest of the program, and so is best left as a component on an entity in the scene.

Those restrictions do not prevent you from using the singleton pattern, you can use the `ServiceRegistry` which can be accessed from any `ScriptComponent`

<p class="d-inline-flex gap-1">
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Show Example
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">

```cs
// Here's a basic singleton class
public class MySingleton : IService
{
    public static IService NewInstance(IServiceRegistry r) => new MySingleton();

    public void DoStuff(){}
}

// You can create and get this singleton from any of your components:
public override void Update()
{
    Services.GetOrCreate<MySingleton>().DoStuff();
}

// Here's a singleton implementation when you need its lifetime to be limited to the scene's:
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
  </div>
</div>

## Implement Custom Assets

Some of the systems you will build make far more sense as [assets](custom-assets.md) rather than entities, consider making them an asset when any of the following is true:
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

### Do not Mutate Assets
To that point, make sure to only mutate assets when it makes sense to do so. Remember that a single asset may be referenced by hundreds of components and systems, those may not expect them to change at runtime. Adhering strictly to this idea also ensures that your game's state does not leak through them when loading a new session, game mode, or whatever else.
For example, let's say you have an Axe Asset which has a list of modifier, you save the game, progress for a bit then add a modifier, but end up reloading ot the previous save, the modifier will carry over to that previous game state.

### Scene Quirks
The default scene the game spawns for you is the instance stored in the content manager, when running the game you mutate that very instance, meaning that if you want to retrieve the scene in its initial state, you must force the content manager to unload it, and then reload it.
This makes it a bit counterintuitive when you just want to re-spawn the current scene to roll back your changes.

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
public Item ItemToCheck; // You would assign this reference in the editor
public int AmountRequired = 10;

public bool HasTheItem()
{
    if (Inventory.TryGetAmount(ItemToCheck, out var amount) && amount >= AmountRequired)
        return true;
    return false;
}
```
- Robust; you can change its name and its path, as long as you do not delete it or change its internal id, all components referencing it will keep that reference.
- Easy to use and understand; If a component requires a specific asset, you don't have an infinite amount of possibilities, you can either set it to an existing one or create a new one. It's far more foolproof too now that typos are out of the equation.
- Easy to keep track of; each type has a unique extension which you can search for in your file explorer, they exist on disk, and so can be organized into the same directory.
    - The editor's reference window lists all assets that use the selection, this greatly helps when you need to swap the identifier for another or remove it altogether, just go through all the assets that refer to it.
    - you won't need to keep a document going over each identifier you might have in game, one just has to look at the directory were they are stored in the editor.
- Easy to extend; your identifier can now be more than just that, you can attach properties to it, perhaps a description to keep more information about this key.

## Avoid Patterns with High Levels of Indirection 
Particularly when mutating the game state, [Event Keys](events.md) and async methods carry a lot of implicit complexity as they may not complete when signaled/called. When the async resumed/the event key is received, the game may not be in a state where the logic you run is still valid. Some entities might have been removed from the scene, the inventory might no longer hold the item, the player character may be incapacitated ...

This quirk also means that their execution are not part of their callers' stack, making debugging issues with them far harder to figure out.

Their lifetime is also far harder to reason about as EventKeys will carry the signal even if the scene was replaced in the meantime, while async will continue running when running outside your AsyncScript's `Execute()`

Alternatives to EventKeys
- C# events, although this requires the receivers to have a direct reference to the sender
- Components with an interface bound to a [Flexible processors](../engine/entity-component-system/flexible-processing.md). Add the processor to the service registry, call some method which goes through and call each one of the components implementing the interface of that processor

Alternatives to async
- Restructure your async into a synchronous one ... obviously !
- If you can't avoid using async ...
- Don't touch the game state, just take some input, spit out an output that gets read by a `SyncScript`
- Ensure you always leave the game state in a valid state before awaiting, and after awaiting check that it is still in a state were continuing the async method makes sense. I.e.: are we suddenly back on the main menu ?!

You may notice that those two last ones could require a ton of additional logic to support properly, this is an indication that your logic should be rethought - you're writing yourself into a corner

## Avoid Writing Shortcut Extension Methods 

This is specifically referring to methods of this kind:
```
static Entity GetFirstChild(this Entity Entity) => Entity.Transform.Children[0].Entity;
// Or
static void AddAsFirstChild(this Entity Entity, Entity entity) => Entity.Transform.Children.Insert(0, entity);
```

It's a double-edged sword:
- You are reducing the skill floor required for users not accustomed to the API, but you're also hindering their growth as they now rely on your shortcut instead of discovering the API for themselves, making them aware of concepts and objects neighboring that one, giving them a clearer view of how all the objects fit together. What if they need to access all children, from this extension method they would not be aware that the transform component stores them, that they could access it directly for that.
- Make sure that accessing what you are hiding is never error-prone, even more so if the name of the method does not make that obvious. You may be reducing the time wasted from typing, but you could very well increase the time you would take to debug it when it does create issues.
- It may very well be a slippery slope to introduce even more shortcuts to other properties or methods of the object you are presenting, how about creating an extension for the second child of the entity, the third ...
- Polluting intellisense; in most cases this is a non-issue, but collection types are a prime example of this. Discoverability for extension methods through intellisense is nigh-on-impossible, there are just far too many extension methods introduced by linq.
- It might imply to the user that your shortcut is somehow different from the source.

## Entity and Components' Lifetime

One unexpected quirk of Stride is that components and entities are expected to survive across any number of removal and re-insertion into the scene. Those objects are never truly 'destroyed', they are treated like any other c# object, they either exist or are out of scope.

Make sure that your components adhere to this rule by rolling back any effects introduced in `Start()` through `Cancel()`
This quirk provides a couple of nice benefits, a major one is that you can temporarily remove components, entities and even scenes from your game and re-introduce them whenever you need without any loss of data or complex serialization steps.

This also means that you should avoid writing any custom 'destroy' function to ensure that any part of the engine at any time can simply remove the entity from the scene and rely on your implementation of `Cancel()` to take care of anything that should occur when 'destroyed'.

### Usage of Get<MyComponent>

When using `Get<MyComponent>` ask yourself whether the function would fail to operate if that call were to return null, if that is the case, then your function is dependent on that component existing on that entity. 
This is a hard dependency, you should do everything you can to notify the rest of your codebase and designers using the editor that it this component is a requirement to avoid wasting time debugging issues related to it.

There are a couple of ways to do so, here we simply add the component directly as a parameter to the function:
```cs
// From
public void MyFunction(Entity entity)
{
    entity.Get<MyComponent>().DoSomething();
}
// To
public void MyFunction(MyComponent component)
{
    component.DoSomething();
}
```
And here we add this component as a property to set in the editor:
```cs
// From
public void MyFunction()
{
    Entity.Get<MyComponent>().DoSomething();
}

// To

// The 'required' keyword will generate a warning on build when the value is not set in the editor
public required MyComponent MyRequiredComponent { get; set; }

public void MyFunction()
{
    MyRequiredComponent.DoSomething();
}
```

A trap you may fall into after reading this is to write defensively, checking if it is null and returning in such cases even if the rest of the logic expects some sort of change.
This will more often than not force you to write far more boilerplate logic than you would have if you ensured you had a valid one in the first place.

One thing you may also consider is whether to simply merge the dependant object together, if either one of the objects are used only for the other's purpose, it may make far more sense to simply merge them instead of having two different components.


## See also

* [Scheduling and priorities](scheduling-and-priorities.md)
* [Flexible processors](../engine/entity-component-system/flexible-processing.md)
* [Custom Assets](custom-assets.md)
