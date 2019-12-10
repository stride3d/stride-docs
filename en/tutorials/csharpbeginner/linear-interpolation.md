# Linear Interpolation
You can find this sample in the tutorial project: **Menu** &rarr; **Linear Iterpolation** 

## Explanation
This C# Beginner tutorial covers linear interpolation which is often shortened to 'Lerp'. Sometimes you want to gradually change a value from a start value to a target value. This process is called linear interpolation. Xenko exposes several Lerp functions for various types. Among them are Vector2, Vector3 and Vector4.

![Linear interpolation](media/lerp.png)

## Code
The example consists of a simple timer that resets after a couple seconds. When the timer starts, a start position and a randomly generated target position are stored. A box will move between these two positions. Every frame a 'Lerp value' is calculated. The lerp value is used to determined what the current position of a moving box should be. Once the timer is done, the current position will become the start position and a new target position is again randomly generated.
[!code-csharp[Lerp](..\..\..\..\xenko\samples\Tutorials\CSharpBeginner\CSharpBeginner\CSharpBeginner.Game\Code\LerpDemo.cs)]