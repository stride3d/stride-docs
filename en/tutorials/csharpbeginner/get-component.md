# Getting a component
You can find this sample in the tutorial project: **Menu** &rarr;  **Getting a component** 

## Explanation
This C# beginner tutorial covers how to get and remove components. Components are one of the most important concepts in Stride. Every entity in the scene has a list of components. The transform for instance is also a component. When we make custom scripts that inherit from SyncScript or AsyncScript, they turn into Components that we can attach to entities. We can attach these components to entities by using the editor or we can attach them by code.

![Get a component](media/getting-a-component.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/qRZG8qXkvDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### AmmoComponent
This is the first component that we attach to an entity. In the second script, we will try to get this AmmoComponent.
[!code-csharp[AmmoComponent](..\..\..\..\stride\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\AmmoComponent.cs)]

### Getting A Component
This component script, will retrieve the AmmoComponent script above and use its public method.
[!code-csharp[GettingAComponent](..\..\..\..\stride\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\GettingAComponentDemo.cs)]
