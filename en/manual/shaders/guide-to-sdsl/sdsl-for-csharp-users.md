# SDSL for C# users

If you are a C# programmer that wants to learn how SDSL works, this guide is meant to explain many concepts of the language using C# terminology.

## Shaders and modules

Similarly to C#, SDSL is also an object-oriented language which shares many concepts that you might be familiar with.

Defining a shader (the acquivalent of a class in C#) works the same, but uses different keywords:

| C# | Stride |
| :-- | :-- |
| `class` | `shader` |
| `static class` | `module` |

One other difference is that shader blocks (`{ }`) need to end with a semicolon (`;`).

```sdsl
shader ExampleShader
{

};

module ExampleModule
{

};
```

> [!NOTE]
> One file can only feature one module or shader that needs to match its name with the file it's defined it.

## Inheritance

In C# you typically need to extend a class (e.g. [`StartupScript`](../../scripts/types-of-script/startup-script.md)) and override its methods (e.g. [`Start`](xref:Stride.Engine.StartupScript.Start)) in order to run your code. The same is true for SDSL.

```sdsl
shader Example : ComputeColor
{
    override float4 Compute()
    {
        // Return red
        return float4(1,0,0,1);
    }
}
```

## Variables

There are some differences between variables in C# and SDSL.

| C# | SDSL |
| :-- | :-- |
| `float`, `int`, etc. | `float`, `int`, etc. |
| `Vector2`, `Vector3` | `float2`, `float3` |
| `Vector2Int`, `Vector3Int` | `int2`, `int3` |
| `Color4` | `float4` |

Note that despite being to represent them, `float3` and similar aren't vectors. This allows you to do things that aren't possible in C#:

```sdsl
// Multiplying 2 float3's in SDSL multiplies each of their components
var a = float3(3, 6, 1);
var b = float3(0, 1, 2);
var result = a * b;
```

The ecquivalent of this in C# would be:

```csharp
var a = new Vector3(3, 6, 1);
var b = new Vector3(0, 1, 2);
var result = new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
```

For more information about variables, see [Variables](../shading-language/variables.md).

## Code execution

A shader is a script that runs on thousands of threads at the same time. For example: a shader doing post-processing on your visuals runs your method for every pixel visible on the screen.

Each thread typically uses data from [streams](../shading-language/streams.md) in order to influence calculations based on the pixel coordinate, position, normal vector or other information.

If you are struggling to understand how this can be used, check out the [SDSL for beginners](sdsl-for-beginners.md) guide which shows an example of a simple gradient shader.
