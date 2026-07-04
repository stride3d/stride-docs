# Structuring scenes

This page provides tips on how to structure your scenes.

## Recommended scene structure

In Stride there are 2 ways of loading scenes: **loading it as a [sub-scene](sub-scenes.md)** or **replacing the root**. Using sub-scenes is recommended due to many reasons:

* Allows you to have persistent entities.
* Allows you to keep the scene management logic in a script attached to an entity.
* Allows you to load multiple sub-scenes with different parts of your world (e.g. one scene contains the player and another contains level geometry).

TODO: IMAGE

### Change the default root scene

The default scene is defined in the [Game Settings asset](../files-and-folders/game-settings/basic-properties.md). It can be found at the root of the main [project package's](../files-and-folders/project-packages/index.md) (the one that ends with `.Game`) asset folder.

TODO: IMAGE

## Folders

Scenes can have folders for entity organization in **Game Studio**.

TODO: IMAGE

Folders do not exist at runtime. When compiling, all of their contents are placed outside of them.

To create a new folder, right click in the **Entity tree** and select **Create > New folder**.

TODO: IMAGE
