# Project and Unproject

## Explanation
This C# Intermediate tutorial covers projecting and unprojecting coordinates from 3D to 2Dd and visa versa. When we want to 'convert' 3D coordinates to a 2D screen, we speak 'Projecting'. The other way around is called 'Unprojecting'. Both scenarios are fairly common in 3D games. 

The 3D to 2D or projecting happens for instance when you have 3d quest marker. When the target you need to travel to is somewhere in front of you in the word, then you want to draw a 2D quest marker on screen that gives you an indication of where in the 3D world that target is located.    

From 2D to 3D is often used to convert a mouse coordinate in to the looking direction of the camera. This can used for firing a weapon or setting a target on a map when playing a strategy game.

![Linear interpolation](media/lerp.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/jBXGvLBwXqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Code

### Project
The example consists of a s
[!code-csharp[project](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\01_UI-Basics\UIByCode)]

## Unproject
The example consists of a s
[!code-csharp[unproject](..\..\..\..\stride\samples\Tutorials\CSharpIntermediate\CSharpIntermediate\CSharpIntermediate.Game\01_UI-Basics\UIByCode)]