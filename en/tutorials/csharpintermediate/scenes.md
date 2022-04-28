# Scenes

## Explanation
This C# Intermediate tutorial covers loading/unloading scenes and child scenes. Levels in Stride are build using 'Scenes'. A scene is hierarchy of the objects or entities in your world. A single scene can contain an infinite amount of child scenes which can be loaded and unloaded at any point. Those child scenes can be loaded with an offset if desired.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2N6NhijZuJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Code
### Loading a child scene
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\06_Scenes\LoadChildScene.cs)]

### (Re)loading a scene

[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\06_Scenes\LoadScene.cs)]
