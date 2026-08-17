# Types of rotation

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

Rotation is typically the most challenging part of working with transforms. This is due to one major problem: **how do you define rotation?**

## Ways of defining rotation

Here's a summary of all the different ways of defining rotation, their benefits and drawbacks:

| | [Yaw pitch roll](#yaw-pitch-roll) | [Euler angles](#euler-angles) | [Quaternions](#quaternions) |
| :-- | :-: | :-: | :-: |
| Human-readable | 🟩 | 🟩 | 🟥 |
| Easy to store | 🟥 | 🟩 | 🟩 |
| Easy to compute | 🟥 | 🟥 | 🟩 |
| Best used in | Simple transform manipulations | Serialization | Complex transform manipulations and computing |

### Yaw pitch roll

**Yaw pitch roll** is the easiest to explain. The idea is to store the rotation in 3 easily identifiable variables: `yaw`, `pitch` and `roll`. This approach has its benefits and drawbacks:

* 🟩 More human-readable
* 🟩 Easiest to understand
* 🟥 Difficult to store (requires 3 separate values)
* 🟥 Difficult to compute
* 🟥 Prone to [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).

**Yaw pitch roll** is available in many places during runtime as an alternative to the far-more complex [quaternions](#quaternions).

### Euler angles

**Euler angles** are also quite simple to explain. The idea is to store the rotation in 3 axes: `X`, `Y` and `Z`. This approach shares similar benefits and drawbacks with [yaw pitch roll](#yaw-pitch-roll):

* 🟩 More human-readable
* 🟩 Easy to understand
* 🟩 Easy to store (requires a single `Vector3`)
* 🟥 Difficult to compute
* 🟥 Prone to [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock).

**Euler angles** are best used for setting an entity's initial rotation and serialization, which is why they are used in **Game Studio**.

### Quaternions

Unlike the previous two, **Quaternions** are almost impossible to explain without going deep into mathematics. They have their own benefits and drawbacks:

* 🟩 Easier to compute
* 🟩 Have less ambiguity
* 🟥 Difficult to understand
* 🟥 Not readable

**Quaternions** are what is used by Stride during runtime. They can be controlled indirectly using utility methods.

## Converting between types

Converting between the three types isn't difficult. You can use the following code to fully utilize the benefits of each approach.

```csharp
// Quaternion to yaw pitch roll
myQuaternion.YawPitchRoll(out var yaw, out var pitch, out var roll);

// Yaw pitch roll to quaternion
var myQuaternion = Quaternion.RotationYawPitchRoll(yaw, pitch, roll);

// Yaw pitch roll to euler angles (notice the order of variables)
var eulerAngles = new Vector3(pitch, yaw, roll);

// Euler to yaw pitch roll (notice the order of variables)
var pitch = eulerAngles.X;
var yaw = eulerAngles.Y;
var roll = eulerAngles.Z;
```
