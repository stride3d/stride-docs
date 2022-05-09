# First person camera

## Explanation
This C# Intermediate tutorial covers the implementation of a third person camera. Since it reuses a large portion of the ![First person camera](first-person-camera.md), it is recommended that your watch that tutorial first.
This tutorial teaches about how to use raycasting to position the camera behind the player. If the player is to close any walls, the camera will be moved closer to the player. Too close to the player? We simply switch to first person mode.

<iframe width="560" height="315" src="https://www.youtube.com/embed/19u2QACzdAk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### Third person camera
[!code-csharp[firstpersoncamera](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\10_ThirdPersonCamera\ThirdPersonCamera.cs)]

### Character movement
[!code-csharp[firstpersoncamera](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\10_ThirdPersonCamera\CharacterMovement.cs)]