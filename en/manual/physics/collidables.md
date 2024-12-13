# Collidables

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

To use physics in your project, add a **Collidables** component to an entity. 

Collidables define the type of physics objects. There are three types:

* [Static collidable](static-colliders.md): Objects that don't move (terrain, ..)
* [Body collidable](rigid-bodies.md): Moving objects, affected by gravity and collisions or Kinematics
* [Character collidable](characters.md): Colliders for basic characters (such as players, annimals, npcs, ..)

You can also: 

* Define the [shape of collidables components](colliders.md)
* make [triggers](triggers.md), and detect when objects pass through them
* constrict collider movement with [constraints](constraints.md)

## How colliders interact 

> [!WARNING]
> TODO

Colliders interact according to the table below.

|   | Kinematic objects   | Kinematic triggers   | Rigidbody colliders   | Rigidbody triggers   | Static colliders        | Static triggers   
|---|-------------|---------------------|-------------|---------------------|----------|------------------
| Kinematic objects        | Collisions           | Collisions  | Collisions and dynamic| Collisions   | Collisions    | Collisions     
| Kinematic triggers | Collisions           | Collisions   |Collisions           | Collisions     | Collisions     | Collisions   
| Rigidbody colliders          | Collisions and dynamic     | Collisions     | Collisions and dynamic     | Collisions     | Collisions and dynamic| Collisions
| Rigidbody triggers | Collisions         | Collisions  | Collisions | Collisions     | Collisions     | Collisions
| Static colliders| Collisions| Collisions| Collisions and dynamic | Collisions   | Nothing   | Nothing
|Static triggers     | Collisions     | Collisions     | Collisions     | Collisions    | Nothing    | Nothing

* "Collisions" refers to collision information and events only. This means the collision is detected in the code, but the objects don't bump into each other (no dynamic response).

* "Dynamic" means both collision information and events, plus dynamic response (ie the colliders bump into each other instead of passing through).

For example, rigidbody colliders dynamically collide with static colliders (ie bump into them). However, no objects dynamically collide with triggers; collisions are detected in the code, but objects simply pass through.

## Show colliders in the Scene Editor

> [!WARNING]
> TODO

By default, colliders are invisible in the Scene Editor. To show them:

1. In the Game Studio toolbar, in the top right, click the **Display gizmo options** icon.

   ![Display gizmo options](media/display-gizmo-options.png)

2. Select **Physics**.

    ![Display physics option](media/display-physics-option.png)

The Scene Editor displays collider shapes.

![Display physics](media/display-physics.png)

## Show colliders at runtime

You can make colliders visible at runtime, which is useful for debugging problems with physics. To do this, use:

``
this.GetSimulation().ColliderShapesRendering = true;
``

> [!Note]
> Collider shapes for infinite planes are always invisible.

### Keyboard shortcut

> [!WARNING]
> TODO

To show or hide collider shapes at runtime with a keyboard shortcut, use the **Debug physics shapes** script.

1. In the **Asset View**, click **Add asset**.

2. Select **Scripts** > **Debug physics shapes**.

    ![Add debug physics shape script](media/add-debug-physics-shapes-script.png)

3. In the Game Studio toolbar, click **Reload assemblies and update scripts**.

    ![Reload assemblies](../platforms/media/reload-assemblies.png)

4. Add the **Debug physics shapes** script as a component to an entity in the scene. It doesn't matter which entity.

    ![Add debug physics shapes script component](media/add-debug-physics-shapes-component.png)

The script binds the collider shape visibility to **Left Shift + Left Ctrl + P**, so you can turn it on and off at runtime. You can edit the script to bind a different key combination.

## See also

* [Configuration](configuration.md)
* [Static collidable](static-colliders.md)
* [Body collidable](rigid-bodies.md)
* [Character collidable](characters.md)
* [Colliders](colliders.md)
* [Physics tutorials](tutorials.md)