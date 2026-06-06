# Viewport

The **viewport** allows you to view and navigate your game's world.

TODO: IMAGE

## Navigating the world

You can navigate the viewport by zooming and panning the camera. You are also able to quickly focus an object, making the camera teleport itself to it.

| | Key | Description |
| :-: | :-: | :-- |
| | `Right mouse click` | Pan the camera |
| | `Scroll` | Zoom |
| | `F` | Focus on an object |

You can also move your camera around similarly to a video game.

TODO: IMAGE

| Key | Description |
| :-: | :-- |
| `W` | Move forwards |
| `A` | Move left |
| `S` | Move backwards |
| `D` | Move right |
| `Q` | Move down |
| `E` | Move up |
| `Shift` | Increase speed |

> [!TIP]
> All viewport keybinds can be changed in the settings.

## Move, rotate and skale entities

The viewport allows you to switch between 3 different transformation modes, that can be used to move, rotate and skale an entity.

| | Shortcut | Gizmo | Description |
| :-: | :-: | :-- | :-- |
| | `W` | Translation gizmo | Allows you to change an entity's position in an axis or plane. |
| | `E` | Rotation gizmo | Allows you to change an entity's rotation in an axis. |
| | `R` | Scale gizmo | Allows you to change an entity's scale in a single or all axes. |

You can also switch between these gizmo modes by pressing `Space`.

> [!TIP]
> These shortcuts can be changed in the settings.

### Gizmo coordinate system

Coordinate systems determine the direction of axes for the gizmos.

| | Coordinate system | Description |
| :-: | :-- | :-- |
| | World | Matches the world's coordinates. All axes are the same for every entity. |
| | Local | Axes are oriented in the same direction as the selected entity. |
| | Camera | Axes are oriented in the same direction as the camera. |

### Snap to grid

When moving entities, you can snap them to a grid for better precision.

| Snapping on | Snapping off |
| :-: | :-: |
| | |

Snap can be enabled by pressing the icon next to the transformation gizmos.

TODO: IMAGE

> [!NOTE]
> The icon changes based on the selected gizmo.

Keep in mind these additional keyboard shortcuts:

| Shortcut | Description |
| :-: | :-- |
| `Shift` | Temporarily toggles snap when held down. |
| `N` | Snaps the object to the grid. |

> [!TIP]
> These shortcuts can be changed in the settings.

## Miscalenious features

* Toggle material selection - allows you to select a material asset by clicking on it on a selected model.
* Show or hide selection mask - when enabled, the selection wireframe will fade out a few seconds after selecting an entity.
