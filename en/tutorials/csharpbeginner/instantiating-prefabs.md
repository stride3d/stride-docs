# Instantiating Prefabs
You can find this sample in the tutorial project: **Menu** &rarr; **Instantiating prefabs** 

## Explanation
This C# Beginner tutorial covers how to instantiate prefabs.

A prefab is a "master" version of an object that you can reuse wherever you need. When you change the prefab, every instance of the prefab changes too.

A prefab that is instantiated by code does not give you a new prefab object, but instead gives you a list of entities. As long as these entities are not added to the scene, they wont be visible and attached scripts will not be executed. 

![Instantiating Prefabs](media/instantiating-prefabs.webp)

> [!Video https://www.youtube.com/embed/19u2QACzdAk]

## Code
[!code-csharp[Instantiating Prefabs](../../../../stride/samples/Tutorials/CSharpBeginner/CSharpBeginner/CSharpBeginner.Game/Code/InstantiatingPrefabsDemo.cs)]