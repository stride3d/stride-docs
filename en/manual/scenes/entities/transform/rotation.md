# Rotation

In Stride, 1 unit of rotation is **1 radian**. In case you're unfamiliar with radians: `2π radians = 360 degrees`.

You can easily convert degrees to radians and vide-versa using [`MathUtil.DegreesToRadians`](xref:Stride.Core.Mathematics.MathUtil.DegreesToRadians*) and [`MathUtil.RadiansToDegrees`](xref:Stride.Core.Mathematics.MathUtil.RadiansToDegrees*)

Rotation is typically the most challenging part of working with transforms. This is due to one major problem: how do you define a rotation?

## Types of rotations

There are 2 popular ways of representing rotation: **euler angles** and **quaternions**.

### Euler angles

**Euler angles** are the simplest to explain. The idea is to store the rotation in 3 axes: X, Y and Z to imitate a gimbal. They have their own benefits and drawbacks:

* 🟩 More human readable
* 🟩 Easier to understand
* 🟥 Multiple values can have the same result
* 🟥 Prone to [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).

**Euler angles** are best used for setting the initial rotation, which is why they are used in **Game Studio**.

### Quaternions

**Quaternions** on the other hand are almost impossible to explain without going deep into mathematics. They have their own benefits and drawbacks:

* 🟩 Easier to compute
* 🟩 Have less ambiguity than euler angles
* 🟥 Difficult to understand
* 🟥 Not readable

**Quaternions** are what is used by Stride during runtime. They are meant to be used indirectly using certain utility methods.

For more information about quaternions, visit [Quaternions](quaternions.md).
