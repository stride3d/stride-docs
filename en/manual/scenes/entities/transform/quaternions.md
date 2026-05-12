# Quaternions

Quaternions are a method of defining rotation that is used by Stride. They are known for being easy to compute, but more difficult to comprehend. This is why they are meant to be used indirectly by using utility methods.

## Create a quaternion

The default rotation can be acquired from a constant `Quaternion.Identity`.

```csharp
var defaultRotation = Quaternion.Identity;
```

You can create a quaternion based on an angle in a single axis by using [`Quaternion.RotationX`](xref:Stride.Core.Mathematics.Quaternion.RotationX*), [`Quaternion.RotationY`](xref:Stride.Core.Mathematics.Quaternion.RotationY*) or [`Quaternion.RotationZ`](xref:Stride.Core.Mathematics.Quaternion.RotationZ*).

```csharp
var lookingToLeft = Quaternion.RotationY(-MathF.PI/2);
```

You can create a quaternion from yaw, pitch and yaw by using [`Quaternion.RotationYawPitchRoll`](xref:(Stride.Core.Mathematics.Quaternion.RotationYawPitchRoll(System.Single, System.Single, System.Single))).

```csharp
var lookingToTopRight = Quaternion.RotationYawPitchRoll(MathF.PI / 4f, MathF.PI / 4f, 0f);
```

## Converting from euler angles

You can use [`Quaternion.RotationYawPitchRoll`](xref:(Stride.Core.Mathematics.Quaternion.RotationYawPitchRoll(System.Single, System.Single, System.Single)) to convert euler angles into a quaternion.

> [!WARNING]
> In euler angles **yaw and pitch are swapped**
> 
> ```csharp
> var eulerAngles = new Vector3(pitch, yaw, roll);
> ```

```csharp
var quaternion = Quaternion.RotationYawPitchRoll(eulerAngles.Y, eulerAngles.X, eulerAngles.Z);
```

## Converting to euler angles

You can use `Quaternion.YawPitchRoll` to convert a quaternion into euler angles.

> [!WARNING]
> In euler angles **yaw and pitch are swapped**
> 
> ```csharp
> var eulerAngles = new Vector3(pitch, yaw, roll);
> ```

```csharp
var eulerAngles = new Vector3(quaternion.YawPitchRoll.Y, quaternion.YawPitchRoll.X, quaternion.YawPitchRoll.Z);
```

## Interpolating quaternions

You can interpolate a quaternion between two others by using `Quaternion.Lerp` or `Quaternuion.Slerp`.

TODO: VISUALIZATION GRAPH

```csharp
var interpolatedQuaternion = Quaternion.Lerp(quaternion1, quaternion2, 0.5f);
```

## Decomposing quaternions

You can
