# Viewport

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Level designer</span>

The **Viewport** displays a 3D or 2D preview of a scene, without running the game. It allows you to look at the environment from different angles and change the transform of entities in an intuitive and visual way.

![](media/viewport.webp)

## Navigating the world

[!INCLUDE [viewport-navigation](../../../../includes/scenes/viewport-navigation.md)]

## Move, rotate and skale entities

The Viewport allows you to switch between 3 different **transformation modes**, that can be used to move, rotate and scale an entity.

| | Shortcut | Gizmo | Description |
| :-: | :-: | :-- | :-- |
| ![](media/transform-gizmo-translation.webp) | `W` | Translation gizmo | Allows you to change an entity's position in an axis or plane. |
| ![](media/transform-gizmo-rotation.webp) | `E` | Rotation gizmo | Allows you to change an entity's rotation in an axis. |
| ![](media/transform-gizmo-scale.webp) | `R` | Scale gizmo | Allows you to change an entity's scale in one, two or three axes. |

You can also switch between these gizmo modes by pressing `Space`.

> [!TIP]
> These shortcuts can be changed in the settings.

### Gizmo coordinate system

The **coordinate system** determines the direction of axes for the gizmos. It can be changed in the toolbar:

![](media/coordinate-space-change.webp)

| | Coordinate system | Description |
| :-: | :-- | :-- |
| ![](media/coordinate-space-world.webp) | 🌐 World | Matches the world's coordinates. All axes are the same for every entity. |
| ![](media/coordinate-space-local.webp) | 📦 Local | Axes are oriented in the same direction as the selected entity. |
| ![](media/coordinate-space-camera.webp) | 👁️ Camera | Axes are oriented in the same direction as the camera. |

### Snap to grid

When moving entities, you can snap them to a grid for better precision.

![](media/snap-to-grid.webp)

Snap can be enabled by pressing the icon next to the transformation gizmos.

![](media/snapping.webp)

> [!NOTE]
> The icon changes based on the selected gizmo.

Keep in mind these additional keyboard shortcuts:

| Shortcut | Description |
| :-: | :-- |
| `Shift` | Temporarily toggles snap when held down. |
| `N` | Snaps the object to the grid. |

## Duplicating entities

You can easily create a duplicate of an entity in the Viewport by moving it using the **translation gizmo** while holding down **Ctrl**.

![](media/duplicating-entities.webp)

> [!WARNING]
> You have to hold Ctrl **first** before using your mouse for this to work.

## Miscalenious features

* **Toggle material selection** (togglable in the toolbar) - allows you to select a material asset by clicking on it on a selected model.
* **Show or hide selection mask** (togglable in the toolbar) - when enabled, the selection wireframe will fade out a few seconds after selecting an entity.
