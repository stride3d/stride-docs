# Removing entities
You can find this sample in the tutorial project: **Menu** &rarr; **Removing entities** 

## Explanation
This C# Beginner tutorial covers how to remove existing entities from the scene and how to remove an entity that is a child of another entity. When we add entities to the Scene root we can remove that entity again by accessing the scene.Entities property. Entities that are added as children of other entities can be removed by accessing the children of an entity. 

![Cloning entities](media/removing-entity.png)

## Code
[!code-csharp[Entity](..\..\..\..\stride\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\RemoveEntitiesDemo.cs)]
