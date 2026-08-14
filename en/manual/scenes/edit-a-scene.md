# Edit a scene

Scenes are a complex asset, meaning that they require the use of a dedicated editor — the [Scene editor](../game-studio/dedicated-editors/scene-editor/index.md).

![](../game-studio/dedicated-editors/scene-editor/media/scene-editor.webp)

## Opening the Scene editor

1. Locate the scene asset in the **Asset view**.

    ![](media/asset-view-locate-scene.webp)

2. Double click the scene or right click and select **Edit asset...**

    ![](media/asset-view-open-scene.webp)

3. The Scene editor should now appear.

    ![](media/scene-editor-empty.webp)

> [!TIP]
> You can have multiple Scene editors opened and switch between them by using tabs.
>
> ![](media/scene-editor-tabs.webp)

## Navigating the Scene editor

The Scene editor consists of two components: the [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md) and the [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).

![](../game-studio/dedicated-editors/scene-editor/media/scene-editor-layout.webp)

### Entity tree

The [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md) shows the contents of a scene in a tree-like structure. It allows you to change the order of entities and their parents, as well as quickly find specific elements.

![](../game-studio/dedicated-editors/scene-editor/media/entity-tree.webp)

Selecting an element will make the **Property grid** display its properties.

![](media/entity-tree-select.webp)

For more information about other features of the Entity tree, read [Entity tree](../game-studio/dedicated-editors/scene-editor/entity-tree.md).

### Viewport

The [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md) displays a 2D or 3D preview of a scene, without running the game. It allows you to look at the environment from different angles and change the transform of entities in an intuitive and visual way.

![](../game-studio/dedicated-editors/scene-editor/media/viewport.webp)

[!INCLUDE [viewport-navigation](../../includes/scenes/viewport-navigation.md)]

Entities can be selected from the Viewport by just clicking on them.

![](media/viewport-select.webp)

For more information on how to use the Viewport, read [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).

## Modifying the scene structure

The [Entity tree](../game-studio/dedicated-editors/scene-editor/viewport.md) supports drag & drop, meaning that you can easily rearrange entities with your mouse.

[!INCLUDE [drag-and-drop-behavior-note](../../includes/scenes/drag-and-drop-behavior-note.md)]

## Editing entities

The **Property grid** displays a list of properties of the selected entities. It let's you add new components and manage their values.

![](../game-studio/panels/media/property-grid.webp)

For more information about components, visit [Components](entities/components.md).

## Transforming entities

The [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md) displays a transformation gizmo next to selected entities. You can use it to move, rotate and scale objects in a visual way by clicking on a part of the gizmo and dragging it.

![](media/viewport-transform-entities.webp)

You can also set explicit values by editing properties of an entity's transform component in the **Property grid**.

![](media/property-grid-change-transform.webp)

For more information about how to use the Viewport, visit [Viewport](../game-studio/dedicated-editors/scene-editor/viewport.md).
