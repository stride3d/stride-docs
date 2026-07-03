# Structuring scenes

This page provides tips on how to properly structure your scenes.

## Organize entities into folders

In **Game Studio** you can create folders in scenes for organizing entities. When running the game, all folders are removed, with their contents being placed outside in the scene.

TODO: IMAGE

## Use sub-scenes over replacing root

In Stride there are 2 ways of loading scenes: **loading it as a [sub-scene](sub-scenes.md)** or **replacing the root**. Using sub-scenes is recommended due to many reasons:

* Allows you to have persistent entities.
* Allows you to keep the scene management logic in a script attached to an entity.
* Allows you to load multiple sub-scenes with different parts of your world (e.g. one scene contains the player and another contains level geometry).

TODO: IMAGE
