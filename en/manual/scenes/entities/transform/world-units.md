# World units

This page describes the units used by Stride for transforming entities.

## Position

In Stride, 1 unit of translation is **1 meter**.

![](media/world-units-translation.webp)

## Rotation

In Stride, 1 unit of rotation is **1 radian**. In case you're unfamiliar with radians: `2π radians = 360 degrees`.

![](media/world-units-rotation.webp)

> [!NOTE]
> **Game Studo** displays rotation in degrees.

You can easily convert degrees to radians and vice-versa using [`MathUtil.DegreesToRadians`](xref:Stride.Core.Mathematics.MathUtil.DegreesToRadians*) and [`MathUtil.RadiansToDegrees`](xref:Stride.Core.Mathematics.MathUtil.RadiansToDegrees*)

```csharp
var lookBehind = Quaternion.RotationY(MathUtil.DegreesToRadians(180f));
```
