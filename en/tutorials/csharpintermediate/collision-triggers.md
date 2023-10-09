# Collision triggers

This C# intermediate tutorial covers the use of collision triggers. It teaches about rigid bodies and how to set those up in the editor.

## Explanation

Rigid bodies determine how entities in our scene behave on gravity, whether they collide with other objects or in the case of this tutorial": trigger collision events in our code. We do this by setting up a collider box in our scene and letting a sphere roll through this object. The events that are triggered are then processed by the script that we will make for it.

> [!Video https://www.youtube.com/embed/SIy3pfoXfoQ]

## Rigidbodies and collisions
The code below looks for the rigidbody component that is attached to our entity. The rigidbody component contains all information we need for setting up triggers. The `IsTrigger` property determines that our collider doesn't stop other physics objects, but that it does trigger events in code (if they are set up at least).

We spawn a sphere which also has a rigidbody. This sphere has a mass and is affected by gravity. The sphere will fall down and eventually roll through our collider box. In our update loop we check if there are collisions happening. If there are collisions, we get the colliding object and print out some text on screen. Once the sphere leaves the trigger box, our update loop sees that we no longer have collisions.

Instead of using our update loop, we can also use collision events. 
[!code-csharp[collisiontriggerdemo](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/02_Collision-Triggers/CollisionTriggerDemo.cs)]
