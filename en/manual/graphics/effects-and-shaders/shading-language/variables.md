# Variables

Similarly to C# scripts, shaders can also declare their own variables in order to store data and share it with other shaders and C# code.

## Built-in types

<!-- Taken from https://github.com/stride3d/stride/blob/master/sources/shaders/Stride.Shaders.Parsers/Parsing/SDSL/Parsers/LiteralParsers/LiteralParsers.cs -->

The list of base built in types includes `bool`, `half`, `float`, `double`, `short`, `ushort`, `int`, `uint`, `long` and `ulong`.

### Vectors

By adding a number suffix from 2 to 4 to a base built-in type, you can create a vector that holds multiple values. For example: `float4` holds four `float` values.

Here is how to define new vectors:

```sdsl
float2 position = float2(0.3, 0.2);

// Single values will automatically be converted to a vector
float4 color = 1;

// Alternatively, you can also create a vector like so:
float4 otherColor = float4(0.3);

// SDSL can automatically create vectors when needed
float2 uv = (position - 0.5) / 2;
```

Here is how to read and set individual vector values:

```sdsl
float red = color.x;
float green = color.y;
float blue = color.z;

color.a = 1;
```

### Matrices

Similarly to vectors, you can create a matrix by adding a suffix `[2-4]x[2-4]`.

Here is how to define new matrices:

```sdsl
// Initialize all matrix values with 0
int2x2 example1 = 0;

// Initialize the matrix by going over every cell in every row. The following will look like this:
// |1|2|
// |3|4|
int2x2 example2 = { 1, 2, 3, 4 };

// Initialize the matrix from vectors
int2x2 example3 =
{
    int2(1, 2),
    int2(3, 4),
};
```

Here is how to read and set individual matrix values:

```sdsl
var topRight = example2[0][1];

example2[1][1] = 5;
```

## The `var` keyword

Similarly to C#, SDSL allows you to use the `var` keyword when defining a new variable, which will automatically determine which type it should use.

```sdsl
// float
var example1 = 1.0;

// int
var example2 = 1;

// float4
var example3 = float4(1.0);
```

> [!WARNING]
> It's recommended to not use `var`, as it can create more headaches later and generally makes it less convenient to define variables. 
> 
> ```sdsl
> // Longer and less convenient
> var variable = float4(1);
> 
> // Shorter and easier to type
> float4 variable = 1;
> ```

## Shader-scope variables

Similarly to C#, you can define variables inside a shader, which can then be shared between methods and other shaders. However by default, **variables can only be changed from C# code.**

```sdsl
shader Example : ShaderBase
{
    // Shaders can read the value, but not set it
    float myVariable;
};
```

> [!NOTE]
> Depending on the context, variables might need to be differently defined to be modifiable via C#. For more infofmration, find the script which you are trying to write in [Types of shaders](../types-of-shaders/index.md).

The reason why shaders cannot modify normal variables, is because they are executed on multiple threads at once for different values (e.g. different texture positions). Having them fight over which one gets to set the value it wants is probably not what you want your shader to do.

TODO: VISUALIZATION

### How to make variables modifiable by shaders?

You can use the `stream` modifier to make a variable streamable. Streamable variables store their data for all context data the shader is computing (e.g. for every texture pixel).

```sdsl
shader Example : ComputeColor
{
    stream float myVariable;

    override float4 Compute()
    {
        streams.myVariable = 1;
        return streams.myVariable
    }
};
```

For more information, visit [Streaming](streaming.md).

### The `cbuffer` keyword

Variables defined outside of methods are put in a **constant buffer**. Despite what their name might suggest, variables from constant buffer can be adjusted, but only through C# scripts.

Shaders can use multiple constant buffers, which can be used differently depending on the context (e.g. [compute colors](../types-of-shaders/compute-color.md) require variables to be stored in a `PerMaterial` constant buffer to be modifiable through code). If no buffer is specified, the default one is used.

You can use a different constant buffer by wrapping your variables `cbuffer`

```sdsl
shader Example : ShaderBase
{
    // These go to the default constant buffer
    float4 MyColor;
    bool IsOn;

    cbuffer MyCustomBuffer
    {
        float4 MyCustomBufferColor;
        bool IsOnCustomBuffer;
    }
};
```

## Exposing variable keys to C#

All variables defined in a shader outside of methods (that aren't [streamable](streaming.md)) are exposed to C# in the form of keys. They are automatically generated when saving a `.sdsl` file and can be used directly through code.

> [!NOTE]
> Even though there is no `.cs` file, the class should be generated and available through code.

The keys class is named after the shader with a `Keys` suffix. For example: `Example.sdsl` will store its keys in the `ExampleKeys` class.

```sdsl
shader Example : ShaderBase
{
    float Intensity;
    float2 TargetPosition;
}
```

```csharp
float intensityKey = ExampleKeys.Intensity;
Vector2 targetPositionKey = ExampleKeys.TargetPosition;
```

These keys can then be used to reference and change these variables. Ways of how to do that can differ depending on the shader type, so check out [Types of shaders](../types-of-shaders/index.md) for more detailed information.

### Annotations

Annotations allow you to specify additional metadata for variables. Here are the few most important ones:
* `[Color]` for float4 variables. The ParameterKey will have the type `Color4` instead of `Vector4`. It also specifies to Game Studio that this variable should be treated as a color, so you can edit it in Game Studio.
* `[Link(...)]` specifies which ParameterKey to use to set this value. However, an independent default key is still created.
* `[Map(...)]` specifies which ParameterKey to use to set this value. No new ParameterKey is created.
* `[RenameLink]` prevents the creation of a ParameterKey. It should be used with `[Link()]`.

```sdsl
shader Example : ShaderBase
{
	[Color] float4 myColor;
 
	[Link("ProjectKeys.MyTextureKey")]
	[RenameLink]
	Texture2D texture;
 
	[Map("Texturing.Texture0")]
	Texture2D defaultTexture;
};
```
