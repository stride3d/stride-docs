# Getting a component
You can find this sample in the tutorial project: **Scenes** ->  **Getting a component** 

## Explanation
This C# basics tutorial covers how to get and remove components. Components are the of the most important concepts in Xenko. Every entity in the scene has a list of components. The transform for instance is also a component. When we make custom scripts that inherit from SyncScript or AsyncScript, they turn in to Components that we can attach to entities. Either using the editor or by code.

![Get a component](media/getting-a-component.png)

## Code
### AmmoComponent
This is the first component that we attach to an entity. In the second script, we will try to get this AmmoComponent.
[!code-csharp[AmmoComponent](...\..\..\..\xenko\samples\Tutorials\C# Basics\CSharpBasics\CSharpBasics.Game\Code\AmmoComponent.cs)]

### Getting A Component
This component script, will retrieve the AmmoComponent script above and use its public method.
[!code-csharp[GettingAComponent](..\..\..\..\xenko\samples\Tutorials\C# Basics\CSharpBasics\CSharpBasics.Game\Code\GettingAComponent.cs)]
