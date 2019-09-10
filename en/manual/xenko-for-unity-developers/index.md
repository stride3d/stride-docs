# Xenko for Unity® developers

Xenko and Unity® both use C# and share many concepts, with a few major differences.

![Xenko for Unity® developers](media/xenko-vs-unity-opening-image.png)

## Editor

The Xenko editor is **Game Studio**. This is the equivalent of the Unity® Editor.

![Xenko and Unity®  interface comparison](media/xenko-vs-unity-interface-comparison.png)

*Unity® screenshot taken from [Calling a web-service from a Unity3D scene](http://through-the-interface.typepad.com/through_the_interface/2012/04/calling-a-web-service-from-a-unity3d-scene.html) by Kean Walmsley.*

You can customize the Game Studio layout by dragging tabs, similar to Visual Studio. 

For more information about Game Studio, see the [Game Studio](../game-studio/index.md) page.

## Terminology

Unity® and Xenko use mostly common terms, with a few differences:

| Unity®  | Xenko |
| ----- | ------- |
| Hierarchy panel | Entity Tree |
| Inspector	| Property Grid |
| Project browser |	Asset View |
| Scene view | Scene Editor |
| GameObject | Entity |
| MonoBehaviour | SyncScript, AsyncScript, StartupScript |

## Folders and files

Like Unity®, Xenko projects are stored in a directory that contains:

* the project ``.sln`` solution file, which you can open with Game Studio or any IDE such as Visual Studio

* a **MyGame.Game** folder with project source files, dependencies, resources, configurations, and binaries

    ![Package folder structure](../files-and-folders/media/folder-structure.png)

* **Assets** contains the asset files which represent elements in your game.

* **Bin** contains the compiled binaries and data. Xenko creates the folder when you build the project, with a subdirectory for each platform.

* **MyPackage.Game** contains your source code.

*	**MyPackage.Platform** contains additional code for the platforms your project supports. Game Studio creates folders for each platform (eg *MyPackage.Windows*, *MyPackage.Linux*, etc). These folders are usually small, and only contain the entry point of the program.

* **obj** contains cached files. Game Studio creates this folder when you build your project. To force a complete asset and code rebuild, delete this folder and build the project again.

* **Resources** is a suggested location for files such as images and audio files used by your assets.

Xenko and Unity® differ in the following ways:

* Xenko doesn't automatically copy resource files to your project folder when you import them into assets. You have to do this yourself. We recommend you save them in the **Resources** folder.

* Xenko doesn't require resource files and asset files to be in the same folder. You can save resource files in the Assets folder if you want, but instead we recommend you save them in the **Resources** folder. This makes sharing your project via version control easier.

For more information about project structure in Xenko, including advice about how to organize and share your files, see the [Project structure](../files-and-folders/project-structure.md) page.

### Open the project directory from Game Studio

You can open the project directory from **Project > Show in explorer** in Game Studio.

![Open project directory from Game Studio](media/xenko-vs-unity-open-project-in-windows-explorer.png)

## Game settings

Unity® saves global settings in separate assets (ie Graphics Settings, Quality Settings, Audio Manager, and so on). 

Xenko saves global settings in a single asset, the **Game Settings** asset. You can configure:

* The **default scene**
* **Rendering settings**
* **Editor settings**
* **Texture settings**
* **Physics settings**
* **Overrides**

To use the Game Settings asset, in the **Asset View**, select **GameSettings** and view its properties in the **Property Grid**.

![Game settings](media/game-settings.png)

## Scenes

Like Unity®, in Xenko you place all objects in a scene. Game Studio stores scenes as separate ``.xkscene`` assets in your project directory.

### Set the default scene

You can have multiple scenes in your project. Xenko loads the default scene at runtime.

To set the default scene:

1. In the **GameSettings** properties, next to **Default Scene**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
    
    ![Set default scene](media/xenko-vs-unity-game-settings-default-scene.png)

    The **Select an asset** window opens.

2. Select the default scene and click **OK**.

For more information about scenes, see [Scenes](../game-studio/scenes.md).

## Entities vs GameObjects

In Unity®, objects in the scene are called **GameObjects**. In Xenko, they're called **entities**.

![Entities in Xenko](media/xenko-vs-unity-entities.jpg)

Like GameObjects, entities are carriers for components such as transform components, model components, audio components, and so on. If you're used to working with GameObjects in Unity®, you should have no problem using entities in Game Studio.

## Entity components

In Xenko, you add components to entities just like you add components to GameObjects in Unity®.

To add a component to entity in Game Studio:

1. Select the entity you want to add the component to.
2. In the **Property Grid** (on the right by default), click **Add component** and select the component from the drop-down list.

    ![Add component](media/xenko-vs-unity-add-component-to-entity.png)

### Transform component

Like GameObjects in Unity®, each entity in Xenko has a [Transform component](xref:Xenko.Engine.TransformComponent) which sets its position, rotation, and scale in the world.

![Transform component](media/xenko-vs-unity-entity-transform-component.png)

Even empty entities have a Transform component, because every entity in the scene must have a position.

In Xenko, Transform components contain a LocalMatrix and a WorldMatrix that are updated in every Update frame. If you need to force an update sooner than that you can use `TranformComponent.UpdateLocalMatrix()`, `Transform.UpdateWorldMatrix()`, or `Transform.UpdateLocalFromWorld()` to do so, depending on how you need to update the matrix.

#### Local Position/Rotation/Scale
Xenko uses position, rotation, and scale to refer to the local position, rotation and scale.

| Unity®  | Xenko |
| ----- | ------- |
| `transform.localPosition` | `Transform.Position` |
| `transform.localRotation` | `Transform.Rotation` |
| `transform.localScale` | `Transform.Scale` |
| `transform.localEulerAngles` | `Transform.RotationEulerXYZ` |

#### World Position/Rotation/Scale
In comparison to Unity, many of the Transform component's properties related to its location in the world have been moved to the [WorldMatrix](xref:Xenko.Engine.TransformComponent.WorldMatrix).

| Unity®  | Xenko |
| ----- | ------- |
| `transform.position` | `Transform.WorldMatrix.TranslationVector` |
| `transform.rotation` | N/A |
| `transform.scale` | N/A |
| `transform.eulerAngles` | `Transform.WorldMatrix.DecomposeXYZ(out Vector3 rotation)` |
| `transform.scale` and `transform.position` | `Transform.WorldMatrix.Decompose(out Vector3 scale, out Vector3 translation)` |
| `transform.scale`, `transform.rotation`, and `transform.position` | `Transform.WorldMatrix.Decompose(out Vector3 scale, out Quaternion rotation, out Vector3 translation)` |

#### Transform Directions
Unlike Unity, Xenko provides a Backward, Left, and Down property.

| Unity®  | Xenko |
| ----- | ------- |
| `transform.forward` | `Transform.WorldMatrix.Forward` |
| `transform.forward * -1` | `Transform.WorldMatrix.Backward` |
| `transform.right` | `Transform.WorldMatrix.Right` |
| `transform.right * -1` | `Transform.WorldMatrix.Left` |
| `transform.up` | `Transform.WorldMatrix.Up` |
| `transform.up * -1` | `Transform.WorldMatrix.Down` |

## Assets

In Unity®, you select an asset in the **project browser** and edit its properties in the **Inspector** tab. 

Xenko is similar. You select an asset in the **Asset View** and edit its properties in the **Property Grid**.

![Asset and properties](media/asset-and-properties.png)

For certain types of asset, Game Studio also has dedicated editors:

* prefabs
* scenes
* sprite sheets
* UI pages
* UI libraries
* scripts

To open the dedicated editor for these types of asset:

* double-click the asset, or
* right-click the asset and select Edit asset, or
* select the asset and type Ctrl + Enter

The editor opens in a new tab. You can arrange the tabs how you like, or float them as separate windows, just like tabs in web browsers.

![Dedicated Xenko editors](media/xenko-vs-unity-different-editors.png)

>[!Note]
>When you modify resource files outside Game Studio, the corresponding assets update automatically in Game Studio.

### Import assets

To import an asset, drag it from Explorer to the **Asset View**. You can also click an **Add asset** button, navigate to the desired file and specify the type of asset you want to import.

As soon as you add an asset to your project, you can edit its properties in the **Property Grid**.

![Add asset](media/xenko-vs-unity-add-asset.png)

>[!Note]
> Unlike Unity®, Xenko doesn't automatically copy resource files to the project directory when you import them to projects.

### Supported file formats

Like Unity®, Xenko supports file formats including:

| Asset type  | Supported formats                                           
|------|---|
| Models, animations, skeletons | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx
| Sprites, textures, skyboxes   | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff
| Audio  	                 | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc
| Fonts | .ttf, .otf |

For more information about assets, see [Assets](../game-studio/assets.md).

> [!Note]
> * Xenko currently doesn't support movie files.

## Prefabs

Like Unity®, Xenko uses prefabs. Prefabs are "master" versions of objects that you can reuse wherever you need. When you change a prefab, every instance of the prefab changes too.

![Prefabs in Xenko](media/xenko-vs-unity-prefabs.png)

Just like with Unity®, in Xenko, you can add prefabs to other prefabs. These are called **nested prefabs**. If you modify a nested prefab, all the dependent prefabs inherit the change automatically.

For example, imagine you create a *Vehicle* prefab with acceleration, braking, steering, and so on. Then you nest the *Vehicle* prefab inside prefabs of different types of vehicles: a taxi, bus,truck, etc. If you adjust a property in the *Vehicle* prefab, the changes are inherited by all other prefabs. For example, if you increase the Acceleration property in the *Vehicle* prefab, the acceleration property in the taxi, bus and truck prefabs also increase.

For more information about using prefabs in Xenko, see [Prefabs](../game-studio/prefabs/index.md).

## Archetypes

**Archetypes** are master assets that control the properties of assets you **derive** from them. Derived assets are useful when you want to create a "remixed" version of an asset. This is similar to prefabs. 

For example, imagine we have three sphere entities that share a material asset named *Metal*. Now imagine we want to change the color of only *one* sphere, but keep its other properties the same. We could duplicate the material asset, change its color, and then apply the new asset to only one sphere. But if we later want to change a different property across *all* the spheres, we have to modify both assets. This is time-consuming and leaves room for mistakes.

The better approach is to derive a new asset from the archetype. The derived asset inherits properties from the archetype and lets you override individual properties where you need them. For example, we can derive the sphere's material asset and override its color. Then, if we change the gloss of the archetype, the gloss of all three spheres changes.

![Create derived asset](../game-studio/media/archetypes-three-spheres.png)

You can derive an asset from an archetype, then in turn derive another asset from that derived asset. This way you can create different layers of assets to keep your project organized:

```cs
Archetype
    Derived asset
        Derived asset
```

For more information about archetypes, see [Archetypes](../game-studio/archetypes.md).

## Input

Xenko supports a variety of inputs. The code samples below demonstrate the difference in input code between Xenko and Unity®.

For more information about Input in Xenko, see [Input](../input/index.md).

## Unity
```cs
void Update()
{
    // true for one frame in which the space bar was pressed
    if(Input.GetKeyDown(KeyCode.Space))
    {
        // Do something.
    }

    // true while this joystick button is down
    if (Input.GetButton("joystick button 0"))
    {
        // Do something.
    }

    float Horiz = Input.GetAxis("Horizontal");
    float Vert = Input.GetAxis("Vertical");
    //Do something else.
}
```

## Physics

Just like Unity®, Xenko has three types of collider:

* static colliders
* rigidbodies
* characters

They're controlled from scripts in slightly different ways.

### Kinematic rigidbodies

#### Unity®

```cs
public Rigidbody rigidBody;
void Start()
{
    rigidBody = GetComponent<Rigidbody>();
}

void EnableRagdoll()
{
    rigidBody.isKinematic = false;
    rigidBody.detectCollisions = true;
}

void DisableRagdoll()
{
    rigidBody.isKinematic = true;
    rigidBody.detectCollisions = false;
}
```

#### Xenko

```cs
public class KinematicX : SyncScript
{
    public RigidbodyComponent component;

    public override void Start()
    {
        // Initialization of the script.
        component = Entity.Get<RigidbodyComponent>();
    }

    public override void Update()
    {
    }

    public void EnableRagdoll()
    {
        component.IsKinematic = false;
        component.ProcessCollisions = true;
    }

    public void DisableRagdoll()
    {
        component.IsKinematic = true;
        component.ProcessCollisions = false;
    }
}
```

For more information about rigidbodies in Xenko, see [Rigidbodies](../physics/rigid-bodies.md).

### Triggers

#### Unity®

```cs
// When game object collides with the trigger.
void OnTriggerEnter(Collider Other)
{
    Other.transform.localScale = new Vector3(2.0f, 2.0f, 2.0f);
}

//When game object exits collider space.
void OnTriggerExit(Collider Other)
{
    Other.transform.localScale = new Vector3(1.0f, 1.0f, 1.0f);
}
```

#### Xenko

```cs
var trigger = Entity.Get<PhysicsComponent>();
trigger.ProcessCollisions = true;

// Start state machine.
while (Game.IsRunning)
{
    // 1. Wait for an entity to collide with the trigger.
    Collision firstCollision = await trigger.NewCollision();

    PhysicsComponent otherCollider = trigger == firstCollision.ColliderA
        ? firstCollision.ColliderB
        : firstCollision.ColliderA;
    otherCollider.Entity.Transform.Scale = new Vector3(2.0f, 2.0f, 2.0f);

    // 2. Wait for the entity to exit the trigger.
    Collision collision;

    do
    {
        collision = await trigger.CollisionEnded();
    }
    while (collision != firstCollision);

    otherCollider.Entity.Transform.Scale = new Vector3(1.0f, 1.0f, 1.0f);
}
```

For more information about triggers in Xenko, see [Triggers](../physics/triggers.md)

### Raycasting

#### Unity®

```cs
Collider FindGOCameraIsLookingAt()
{
    int distance = 50;

    // Cast a ray and set it to the mouse cursor position in the game
    Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit, distance))
    {
        // Draw invisible ray cast/vector
        Debug.DrawLine(ray.origin, hit.point);
        // Log hit area to the console
        Debug.Log(hit.point);
        return hit.collider;
    }
    return null;
}
```

#### Xenko

```cs
public static PhysicsComponent ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    sPos.Z = 0f;
    Vector4 vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    sPos.Z = 1f;
    Vector4 vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    HitResult result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
}
```
For more information about Raycasting in Xenko, see [Raycasting](../physics/raycasting.md).

## Scripts

Xenko saves scripts in a subfolder in the **MyGame.Game** folder in the project directory. 

To open a script in the Game Studio script editor, double-click it in the **Asset View**. The script editor has syntax highlighting, auto-completion, and live diagnostics.

![Xenko script editor](media/xenko-vs-unity-script-editor.png)

You can also edit scripts in other IDEs, such as Visual Studio. When you edit a script in an external IDE, Xenko reloads them automatically.

If you install the Visual Studio plug-in during the Xenko installation, you can open your project in Visual Studio from Game Studio. To do this, in the Game Studio toolbar, click **Open in IDE**.

![Open project in Visual Studio](media/xenko-vs-unity-open-project-in-visual-studio.png)

Alternatively, right-click the script in the **Asset View** and click **Open asset file**:

![Open asset file](media/xenko-vs-unity-open-asset-file.png)

### Event functions (Start, Update, Execute, etc)

In Unity®, you work with MonoBehaviours with Start(), Update(), and other methods.

Instead of MonoBehaviours, Xenko has three types of scripts: SyncScript, AsyncScript, StartupScript. For more information, see [Types of script](../scripts/types-of-script.md).

### Unity® MonoBehaviour

```cs
public class BasicMethods : MonoBehaviour
{
    void Start() { }
    void OnDestroy() { }
    void Update() { }
}
```

### Xenko SyncScript

```cs
public class BasicMethods : SyncScript
{
    public override void Start() { }
    public override void Cancel() { }        
    public override void Update() { }
}
```

### Xenko AsyncScript

```cs
public class BasicMethods : AsyncScript
{
    // Declared public member fields and properties that will appear in the game studio
    public override async Task Execute()
    {
        while(Game.IsRunning)
        {
            // Do stuff every new frame
            await Script.NextFrame();
        }
    }

    public override void Cancel()
    {
        // Cleanup of the script
    }     
}
```

### Xenko StartupScript

```cs
public class BasicMethods : StartupScript
{
    // Declared public member fields and properties that will appear in the game studio
    public override void Start()
    {
        // Initialization of the script
    }

    public override void Cancel()
    {
        // Cleanup of the script
    }     
}
```

## Script components

Like Unity®, in Xenko, you attach scripts to entities by adding them as script components.

### Create a script

To create a script, click **Add asset** button and select **Scripts**.

![Create script in Xenko](media/xenko-vs-unity-create-script.png)

In Unity®, when you create a `MonoBehaviour` script, it has two base functions: `Start()` and `Update()`. Xenko has a [SyncScript](xref:Xenko.Engine.SyncScript) that works similarly. Like `MonoBehaviour`, [SyncScript](xref:Xenko.Engine.SyncScript) has two methods:

* [Start()](xref:Xenko.Engine.StartupScript.Start) is called when it the script is loaded.

* [Update()](xref:Xenko.Engine.SyncScript.Update) is called every update.

Unlike `MonoBehaviour`, you have to use [Update()](xref:Xenko.Engine.SyncScript.Update) method in every [SyncScript](xref:Xenko.Engine.SyncScript), or your code won't work properly.

If you want your script to be a startup or asynchronous, use the corresponding script types:

* [StartupScript](xref:Xenko.Engine.StartupScript): this script has a single [Start()](xref:Xenko.Engine.StartupScript.Start) method. It initializes the scene and its content at startup.

* [AsyncScript](xref:Xenko.Engine.AsyncScript): an asynchronous script with a single method [Execute()](xref:Xenko.Engine.AsyncScript.Execute) and you can use async/await inside that method. Asynchronous scripts aren't loaded one by one like synchronous scripts. Instead, they're all loaded in parallel.

### Reload assemblies

Unlike Unity®, after you create a script, you have to reload the assemblies manually. To do this, click **Reload assemblies** in the Game Studio toolbar.

![Reload assemblies](../platforms/media/reload-assemblies.png)

### Add scripts to entities

1. In the **Entity Tree** (on the left by default), or in the scene, select the entity you want to add the script to.

    ![Select an entity](../scripts/media/select-entity.png)

2. In the **Property Grid** (on the right by default), click **Add component** and select the script you want to add.

![Add script component](../scripts/media/add-script-component.png)

In Unity®, script components are grouped under **Components > Scripts**. In Xenko, scripts are not grouped. Instead, Game Studio lists them alphabetically with other components.

For more information about adding scripts in Xenko, see [Use a script](../scripts/use-a-script.md).

## Scripting gameplay

Unity® and Xenko both use C#. However, scripting gameplay in Xenko is a little different from Unity®.

### Instantiate Entity / GameObject

In Unity®, you use `Instantiate` to create new object instances. This function makes a copy of `UnityEngine.Object` and spawns it to the scene.

#### Unity®

```cs
public GameObject CarPrefab;
public Vector3 SpawnPosition;
public Quaternion SpawnRotation;

void Start()
{
    GameObject NewGO = (GameObject)Instantiate(CarPrefab, SpawnPosition, SpawnRotation);
    NewGO.name = "NewGameObject1";
}
```

#### Xenko

In Xenko, you can instantiate **Entities** similarly to Unity® GameObjects:

```cs
// Declared public member fields and properties displayed in the Game Studio Property Grid.
public Prefab CarPrefab;
public Vector3 SpawnPosition;
public Quaternion SpawnRotation;

public override void Start()
{
    // Initialization of the script.
    List<Entity> car = CarPrefab.Instantiate();
    SceneSystem.SceneInstance.RootScene.Entities.AddRange(car);
    car[0].Transform.Position = SpawnPosition;
    car[0].Transform.Rotation = SpawnRotation;
    car[0].Name = "MyNewEntity";
}
```

### Use default values

Each class in Unity® has certain default values. If you don't override these properties in the script, the default values will be used. This works the same in Xenko:

#### Unity®

```cs
public int NewProp = 30;
public Light MyLightComp = null;

void Start()
{
    // Create the light component if we don't already have one.
    if (MyLightComp == null)
    {
        MyLightComp = gameObject.AddComponent<Light>();
        MyLightComp.intensity = 3;
    }
}
```

#### Xenko

```cs
// Declared public member fields and properties displayed in the Game Studio Property Grid.
public int NewProp = 30;
public LightComponent MyLightComponent = null;

public override void Start()
{
    // Create the light component if we don't already have one.
    if (MyLightComponent == null)
    {
        MyLightComponent = new LightComponent();
        MyLightComponent.Intensity = 3;
        Entity.Add(MyLightComponent);
    }
}
```

### Disable GameObject/entity

#### Unity®

```cs
MyGameObject.SetActive(false);
```

#### Xenko

```cs
Entity.EnableAll(false, true);
```

### Access component from GameObject/entity

#### Unity®

```cs
Light lightComponent = GetComponent<Light>();
```

#### Xenko

```cs
LightComponent lightComponent = Entity.Get<LightComponent>();
```

### Access GameObject/entity  from component

#### Unity®

```cs
GameObject ParentGO = lightComponent.gameObject;
```

#### Xenko

```cs
Entity ParentEntity = lightComponent.Entity;
```

## Log output

To see the output, in the Game Studio toolbar, under **View**, enable **Output**.

![Enable output](media/enable-output.png)

Game Studio displays in the **Output** tab (at the bottom of Game Studio by default).

![Output tab](media/output-tab.png) 


### Print debug messages

To print to the Visual Studio output, use:

```cs
System.Diagnostics.Debug.WriteLine("hello");
```

>[!Note]
>To print debug messages, you have to run the game from Visual Studio, not Game Studio. There's no way to print to the Game Studio output window.

---

Unity® is a trademark of Unity Technologies.
