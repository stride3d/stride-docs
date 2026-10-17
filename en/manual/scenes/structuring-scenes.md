# Structuring scenes

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Level designer</span>
<span class="badge text-bg-success">Programmer</span>

This page contains **information about features** and **tips** that can help you **properly structure your scenes** and organize them.

## Recommended scene structure

In Stride **there are 2 ways of loading scenes:** loading it as a [sub-scene](sub-scenes.md) or replacing the root. **Using sub-scenes is recommended** due to many reasons:

* They allow you to have **persistent entities**.
* They allow you to **keep the scene management logic in a script** attached to an entity.
* They allow you to load **multiple sub-scenes with different parts of your world** (e.g. one scene contains the player and another contains level geometry).

### Change the default root scene

The **default scene** is defined in the [Game Settings asset](../files-and-folders/game-settings/basic-properties.md). It can be found at the root of the main [project package's](../files-and-folders/project-packages/index.md) assets folder (the one that ends with `.Game`).

![](media/game-settings-default-scene.webp)

## Folders

**Scene folders** are used for organizing entities in **Game Studio**. Unlike entities, folders do not contain components and cannot have a set transform.

![](media/entity-tree-folders.webp)

**Folders do not exist at runtime** — during compilation, their contents are placed in their parent (outside of the folder).

To create a new folder, right click in the **Scene editor** and select **Create > Folder**.

![](media/entity-tree-create-folder.webp)

## See also

* [Sub-scenes](sub-scenes.md)
