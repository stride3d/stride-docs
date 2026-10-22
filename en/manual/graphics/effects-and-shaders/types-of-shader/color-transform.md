# Color transform

Color transform shaders are used for post-processing rendered images. They can be assigned in the **Graphics compositor** under **PostProcessingEffects/Color Transforms**.

```sdsl
shader Example : ColorTransformShader
{
    [Color]
    float4 ColorA;
    [Color]
    float4 ColorB;

    override float4 Compute(float4 color)
    {
        float monochrome = 0.2125 * color.r + 0.7154 * color.g + 0.0721 * color.b;

        // Map monochrome value to gradient
        return lerp(ColorA, ColorB, monochrome);
    } 
};
```

## How it works

The `Compute` method is called for every pixel in the rendered texture (i.e. every pixel on the screen). The method returns a float4 representing an RGBA value, where values range from 0 to 1.

TODO: VISUALIZATION

## Useful shaders

* Texturing - by inheriting from this shader, you get access to UV position under `streams.TexCoord`.

```sdsl
shader Example : ColorTransformShader, Texturing
{
    override float4 Compute(color4 color)
    {
        return lerp(color, float4(float3(0), 1), streams.TexCoord.y);
    }
};
```

## Using the shader

Color transform shaders need to be wrapped in a C# class in order to become usable in Game Studio and in code.

```csharp
public class Example : ColorTransform
{
    // Specify which shader to use in the constructor
    public Example() : base("NameOfShader") { }

    // Define public properties
    public Color4 ColorA { get; set; } = new Color4(1f, 0f, 0f, 1f);
    public Color4 ColorB { get; set; } = new Color4(1f, 1f, 0f, 1f);

    public override void UpdateParameters(ColorTransformContext context)
    {
        // Apply C# parameters to the shader
        Parameters.Set(NameOfShaderKeys.ColorA, ColorA);
        Parameters.Set(NameOfShaderKeys.ColorB, ColorB);

        // Remember to call the base implementation
        base.UpdateParameters(context);
    }
}
```
