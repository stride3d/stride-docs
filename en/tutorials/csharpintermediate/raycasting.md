# Raycasting

## Explanation
This C# Intermediate tutorial covers raycasting. Raycasting is an essential subject in 3d games. With raycasts we can detect if and what kinds of objects are in our line of sight. This can used for detecting enemies or how far an object really is. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/uIM6jxM7OyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### Raycast
This script send out a raycast from the weapons barrel and sends it to an endpoint a little further. We check if hit something along the way. If we do, we calculate the distance between the weapon barrel and the hit point. We than scale a laser to that distance to visualize the actual raycast. Depending on the collision group and filters, some objects are ignored.
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\03_Raycasting\RaycastDemo.cs)]


### Penetrative raycast
In our first script, the raycast returns to us as soon as it hits the first object along it path. We can also send out a raycast to an endpoint, and let it return to us when it has reach its endpoint. It gives us back a list of objects that it has hit along the way. This list can be empty but also exist out of various objects. Depending on the collision group and filters, some objects are ignored.
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\03_Raycasting\RaycastPenetratingDemo.cs)]
