# Adding a component
You can find this sample in the tutorial project: **Menu** -> **Adding a component** 

## Explanation
This C# Beginner tutorial covers how to add and remove components. In the previous tutorial we learned how we can retrieve components that are already attached to an entity through the editor. This tutorial shows that we can accomplish the same thing by code. We can add the same component several times to the same entity. We also learn how to remove all of components of the same type again.

![Add a component](media/adding-a-component.png)

## Code
### AmmoComponent
This is the AmmoComponent. We will not attach it to the entity in the editor. Instead we will add it ourselves in the AddingAComponent script.
[!code-csharp[AmmoComponent](..\..\..\..\xenko\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\AmmoComponent.cs)]

### Adding A Component
This component script, will add the AmmoComponent script to the entity. We then add another component (of the same type) before we remove all components of that type.
Finally we learn how to automatically create a component, attach it to the entity and get a reference all in 1 line of code. This only works if the entity doesn't have any components of the given attached yet.
[!code-csharp[AddingAComponent](..\..\..\..\xenko\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\AddingAComponentDemo.cs)]
