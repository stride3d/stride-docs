# Collision trigger

## Explanation
This C# intermediate tutorial covers the use of collision triggers. It teaches about rigid bodies and how to set those up in the editor.

Rigid bodies determine how entites in our scene behave on gravity, whether they collider with other objects or in the case of this tutorial": trigger collision events in our code. We do this by setting up a collider box in our scene and letting a sphere roll through this object. The events that are triggered are then processed by the script that we will make for it.

![Collision triggers](media/collision-triggers.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/TzwGe4RzAb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
### Stride editor UI pages
The code below will look for a Page component that has been added to the current entity. On that page we search for UI elements like buttons and textfields. We than tell those UI elements what happends when we click on them, or that something needs to be done when a text value changes.
[!code-csharp[editorpages](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\02_Collision-Triggers/CollisionTriggerDemo.cs)]

### UI pages made entirely by code
This script will create everything from scratch: a UI page, a stackpanel, a button, a textfield and the interactive logic behind it.
[!code-csharp[uibycode](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\01_UI-Basics\UIByCode)]
