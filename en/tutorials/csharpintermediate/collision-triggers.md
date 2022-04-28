# Collision triggers

## Explanation
This C# intermediate tutorial covers the use of collision triggers. It teaches about rigid bodies and how to set those up in the editor.

Rigid bodies determine how entites in our scene behave on gravity, whether they collider with other objects or in the case of this tutorial": trigger collision events in our code. We do this by setting up a collider box in our scene and letting a sphere roll through this object. The events that are triggered are then processed by the script that we will make for it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TzwGe4RzAb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### Stride editor UI pages
The code below looks for the rigidbody component that is attached to our entity. The rigidbody component contains all information we need for setting up triggers. The "IsTrigger" property determines that our collider doesn't stop other physics objects, but that it does trigger events in code (if they are set up at least).

We spawn a sphere which also has a rigidbody. This sphere has a mass and is affected by gravity. The sphere will fall down and eventually roll through our collider box. In our update loop we check if there are collisions happening. If there are collisions, we get the colliding object and print out some text on screen. Once there sphere leaves the trigger box, our update loop sees that we no longer having collisions.

Instead of a using our update loop, we can also use collision events. 
[!code-csharp[collisiontriggerdemo](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\02_Collision-Triggers\CollisionTriggerDemo.cs)]
