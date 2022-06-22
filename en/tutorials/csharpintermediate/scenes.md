# Scenes

This C# Intermediate tutorial covers the concept of Scenes in Stride. Stride allows Scenes to have an infinite amount of child scenes which on their terms also can load an infinite amount of child scenes. However, every scene loaded is unique. A scene can not be loaded twice at the same time. Both the editor and when loading scenes through code, will prevent a scene from being loaded twice at the same time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/G7OvA-9erpE " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### Loading a child scene
This script loads in a child scene by pressing a defined key. Pressing that same key again, will unload the loaded child scene. Every time we load the childscene again, we offset it a little in the Y direction to demonstrate the offsetting option for child scenes.
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\06_Scenes\LoadChildScene.cs)]

### (Re)loading a scene
We can get the top most scene in our world which is called the RootScene. If we unload that scene, we can then load in a completely new scene in order to swap or switch to a new scene. That same script can also be used to reload the same scene in case you want to restart your scene,
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\06_Scenes\LoadScene.cs)]
