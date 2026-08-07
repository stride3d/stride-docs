# Edit a scene

Scenes are a complex asset, meaning that they require the use of a dedicated editor — the [scene editor](../game-studio/dedicated-editors/scene-editor/index.md).

TODO: IMAGE

## Opening the scene editor

1. Locate the scene asset in the **Asset view**.

    TODO: IMAGE

2. Double click the scene or right click and select **Edit asset...**

    TODO: IMAGE

3. The scene editor should now appear.

    TODO: IMAGE


> [!TIP]
> You can have multiple opened scene editors and switch between them by using tabs.
>
> TODO: IMAGE

## Navigating the scene editor

The scene editor consists of two components: the [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md) and the [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).

TODO: IMAGE

### Entity tree

The [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md) shows the contents of a scene in a tree-like structure. It allows you to change the order of entities and their parents, as well as quickly find specific elements.

TODO: IMAGE

Selecting an elements will make the **Property grid** display its properties, if it has any.

TODO: IMAGE

For more information about other features of the Entity tree, read [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md).

### Viewport

The [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md) displays a 2D or 3D preview of a scene, without running the game. It allows you to look at the environment from different angles and change the transform of entities in an intuitive and visual way.

TODO: IMAGE

[!INCLUDE [viewport-navigation](../../includes/viewport-navigation.md)]

Entities can be selected from the viewport by just clicking on them.

TODO: IMAGE

For more information on how to use the Viewport, read [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).

## Modifying the scene structure

The entity tree supports drag & drop, meaning that you can easily rearrange entities with your mouse.

> [!NOTE]
> Keep in mind that dropping the selection between two elements will move it between them, while dropping onto an element will move the selection inside of it.
>
> TODO: VISUALIZATION

## Transforming entities

The [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md) displays a transformation gizmo next to selected entities. You can use it to move, rotate and scale objects in a visual way by clicking on a part of the gizmo and dragging it.

TODO: IMAGE

You can also set explicit values by editing properties of the transform component of an entity in the **Property grid**.

For more information about how to use the Viewport, visit [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).

## Editing entities

The **Property grid** displays a list of properties of the selected entities. It let's you add new components and manage their values.

TODO: IMAGE

For more information about components, visit [Components](entities/components.md).
