# Structuring scenes

This page contains features and tips for helping with structuring scenes and organization.

## Recommended scene structure

In Stride there are 2 ways of loading scenes: loading it as a [sub-scene](sub-scenes.md) or replacing the root. **Using sub-scenes is recommended** due to many reasons:

* Allows you to have persistent entities.
* Allows you to keep the scene management logic in a script attached to an entity.
* Allows you to load multiple sub-scenes with different parts of your world (e.g. one scene contains the player and another contains level geometry).

### Change the default root scene

The default scene is defined in the [Game Settings asset](../files-and-folders/game-settings/basic-properties.md). It can be found at the root of the main [project package's](../files-and-folders/project-packages/index.md) (the one that ends with `.Game`) asset folder.

TODO: IMAGE

## Folders

Scene folders are used for organizing entities in Game Studio. Unlike entities, folders do not contain components and cannot have a set transform.

TODO: IMAGE

Folders do not exist at runtime — during compilation their contents are placed in their parent (outside of the folder).

To create a new folder, right click in the **Entity tree** and select **Create > New folder**.

TODO: IMAGE
