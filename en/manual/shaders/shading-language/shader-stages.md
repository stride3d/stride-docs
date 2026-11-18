# Shader stages

A shader consists of multiple **stages** that compute values for different types of data. During rendering a shader goes through the stages sequentaly in order to construct the resulting image that will be displayed on the screen.

## Rendering stages

The rendering process goes through multiple stages.

1. Vertex stage - processes individual vertices.
2. Hull stage - processes patches of vertices and further sub-divides them.  
3. Domain stage - generates vertices and and triangles from sub-divided patches. 
4. Geometry stage - processes individual triangles.
5. Pixel stage - processes individual pixels

TODO: VISUALIZATION

A shader can choose to process any of these stages to achieve certain effects.

| What the shader does | Stages |
| :-- | :-- |
| Deforming geometry | Vertex stage |
| Modifying pixels | Pixel stage |
| Creating varied detail (e.g. depending on distance to the camera) | Hull stage, domain stage |

## Compute stage

The compute stage is independent from rendering and is only used for **compute shaders** (shaders that compute data).

```
shader Example : ComputeShaderBase
{

}
```

The function for each stage has a predefined name, so we recommend you don't change it.

- `HSMain` for hull shader
- `HSConstantMain` for patch constant function
- `DSMain` for domain shader
- `VSMain` for vertex shader (takes no arguments)
- `GSMain` for geometry shader
- `PSMain` for pixel shader (takes no arguments)
- `CSMain` for compute shader (takes no arguments)

These are all void methods.

The geometry and tessellation shaders need some kind of predefined structure as input and output. However, since Stride shaders are generic, it's impossible to know beforehand what the structure will be. As a result, these shaders use `Input` and `Output` structures that are automatically generated to fit the final shader.

## Vertex shader

A vertex shader has to set the variable with the semantic `SV_Position`. In `ShaderBase`, it's `ShadingPosition`.

For example:

```cs
override stage void VSMain()
{
    ...
    streams.ShadingPosition = ...;
    ...
}
```

## Pixel shader

A pixel shader has to set the variable with the semantic `SV_Target`. In `ShaderBase`, it is `ColorTarget`.

For example:

```cs
override stage void PSMain()
{
    ...
    streams.ColorTarget = ...;
    ...
}
```

## Geometry shader

An example of geometry shader:

```cs
[maxvertexcount(1)]
void GSMain(triangle Input input[3], inout PointStream<Output> pointStream)
{
    ...
    // fill the streams object
    streams = input[0];
 	...
 
    // always append streams
    pointStream.Append(streams);
    ...
}
```

`Input` can be used in the method body. It behaves like the streams object and contains the same members.

`Output` is only used in the declaration of the method. You should append the streams object to your geometry shader output stream.

## Tessellation shader

An example of a tessellation shader:

```cs
[domain("tri")]
[partitioning("fractional_odd")]
[outputtopology("triangle_cw")]
[outputcontrolpoints(3)]
[patchconstantfunc("HSConstantMain")]
[maxtessfactor(48.0)]
void HSMain(InputPatch<Input, 3> input, out Output output, uint uCPID : SV_OutputControlPointID)
{
    ...
    output = streams;
}
 
void HSConstantMain(InputPatch<Input, 3> input, const OutputPatch<Input2, 3> output, out Constants constants)
{
    ...
    output = streams;
    ...
}
 
[domain("tri")]
void DSMain(const OutputPatch<Input, 3> input, out Output output, in Constants constants, float3 f3BarycentricCoords : SV_DomainLocation)
{
    ...
    output = streams;
    ...
}
```

`Input` and `Input2` both behave like streams.

> [!NOTE]
> Don't forget to assign `output` to `streams` at the end of your stage.

## Compute shader

An example of a compute shader:

```cs
[numthreads(2, 3, 5)]
void CSMain()
{
    ...
}
```

You can inherit from `ComputeShaderBase` and override the `Compute` method.

## See also

* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
