# Delta Time
You can find this sample in the tutorial project: **Menu** &rarr; **Delta Time** 

## Explanation
This C# Beginner tutorial covers the retrieval and usage of delta time. A games tries to update itself as often as possible. The amount of times it updates in a single second is called 'Frames Per Second' or shortened to 'FPS'. If we wanted to update a timer value, we would need a value that takes into account what the current amount of frames per second is. That is what delta time is used for. So whether your game runs 30 FPS or 120 FPS: you always want to have the same time scale.

![Delta Time](media/deltatime.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/WMGY8JOqzeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code
[!code-csharp[DeltaTime](..\..\..\..\stride\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\DeltaTimeDemo.cs)]
