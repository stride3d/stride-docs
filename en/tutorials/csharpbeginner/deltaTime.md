# Deltatime
You can find this sample in the tutorial project: **Menu** -> **Delta Time** 

## Explanation
This C# Beginner tutorial covers the retrieval and usage of delta time. Games updates various times per second. This is called 'Frames Per Second' or shortened to 'FPS'. If we wanted to update a timer value, we would need a value that takes into account what the current amount of frames per second is. That is what delta time is used for. So whether your game runs 30 FPS or 120 FPS: you always want to have the same time scale.

![Delta time](media/deltatime.png)

## Code
[!code-csharp[Entity](..\..\..\..\xenko\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\DeltaTimeDemo.cs)]
