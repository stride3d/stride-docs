# Project and Unproject

This C# Intermediate tutorial covers projecting and unprojecting coordinates from 3D to 2D and vice versa.

## Explanation

When we want to 'convert' 3D coordinates to a 2D screen, we speak 'Projecting'. The other way around is called 'Unprojecting'. Both scenarios are fairly common in 3D games. 

The 3D to 2D or projecting happens for instance when you have a 3d quest marker. When the target you need to travel to is somewhere in front of you in the world, then you want to draw a 2D quest marker on screen that gives you an indication of where in the 3D world that target is located.    

From 2D to 3D is often used to convert a mouse coordinate into the looking direction of the camera. This can be used for firing a weapon or setting a target on a map when playing a strategy game.

> [!Video https://www.youtube.com/embed/r2sMWGPidis]

## Project
[!code-csharp[project](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/04_Project-UnProject/ProjectDemo.cs)]

## Unproject
[!code-csharp[unproject](../../../../stride/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/04_Project-UnProject/UnprojectDemo.cs)]