# Scene loading

Scenes loading is managed by the **content system**. Loaded scenes need to be added as a sub-scene of another scene.

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
    Entity.Scene.Children.Remove(scene);
    Content.Unload(scene);
}
```

## Reload a scene
