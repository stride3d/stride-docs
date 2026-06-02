# Scene loading

Scenes loading is managed by the **content system**. Loaded scenes need to be added as a sub-scene of another scene or replace the root scene.

## Load a scene

To load a scene, use `Content.Load` or `Content.LoadAsync` and add it as a sub-scene of another scene.

```csharp
public class Example : StartupScript
{
    public UrlReference<Scene> SceneToLoad { get; set; }

    public override void Start()
    {
        var scene = Content.Load(SceneToLoad);
        Entity.Scene.Children.Add(scene);
    }
}
```

The above will load a scene specified in `SceneToLoad` and add it as a sub-scene of the scene the entity is attached to.

TODO: VISUZALITAION

## Unload a scene

To unload a scene, remove it from it's parent and unload it using `Content.Unload` to properly release it from memory.

```csharp
public void UnloadScene(Scene scene)
{
    scene.Parent.Children.Remove(scene);
    Content.Unload(scene);
}
```

## Reload a scene

Scene reloading can be achieved by first **unloading a scene** and then **loading it** using the **content system**. This will make Stride reload scene data from disk, removing all changes done to it during runtime.

```csharp
public void ReloadScene(Scene scene, UrlReference<Scene> sceneUrl)
{
    var parent = scene.Parent;

    // Remove the scene from the world
    parent.Children.Remove(scene);

    // Reload from disk
    Content.Unload(sceneUrl);
    scene = Content.Load(sceneUrl);

    // Re-add the scene to the world
    parent.Children.Add(scene);
}
```
