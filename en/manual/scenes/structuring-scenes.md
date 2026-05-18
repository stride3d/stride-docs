# Structuring scenes

This page provides tips on how to properly structure your scenes.

## Organize entities into folders

In **Game Studio** you can create folders in scenes for organizing entities. When running the game, all folders are removed, with their contents being placed outside in the scene. 

## Use sub-scenes over replacing root

In Stride there are 2 ways of loading scenes: **loading it as a sub-scene** or **replacing the root**. Using the former is recommended due to many reasons:

* Having a fixed root scene allows you to have persistent entities.
* Sub-scene loading allows you to keep the scene management logic in a script attached to an entity.
* Not replacing the root allows you to load multiple sub-scenes with different parts of your world (e.g. one scene contains the player and another contains level geometry).
