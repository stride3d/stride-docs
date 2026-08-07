# World units

This page describes the units used by Stride for transforming entities.

## Position

In Stride, 1 unit of translation is **1 meter**.

TODO: VISUALIZATION IF YOU'RE BORED

## Rotation

In Stride, 1 unit of rotation in an axis is **1 radian**. In case you're unfamiliar with radians: `2π radians = 360 degrees`.

TODO: VISUALIZATION IF YOU'RE BORED (three circles, one showing 1 radian = howevermany degrees, one showing pi radians = 180 degrees and the last one showing 2 radians = 360 degrees)

> [!NOTE]
> **Game Studo** displays rotation in degrees.

You can easily convert degrees to radians and vice-versa using [`MathUtil.DegreesToRadians`](xref:Stride.Core.Mathematics.MathUtil.DegreesToRadians*) and [`MathUtil.RadiansToDegrees`](xref:Stride.Core.Mathematics.MathUtil.RadiansToDegrees*)

```csharp
var lookBehind = Quaternion.RotationY(MathUtil.DegreesToRadians(180f));
```
