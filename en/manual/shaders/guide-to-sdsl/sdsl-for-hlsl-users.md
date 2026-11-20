# SDSL for HLSL users

SDSL shares many similarities with HLSL, but there are some important differences to keep in mind.

## Shaders and effects

SDSL is an object-oriented shading language, meaning that **what in HLSL would typically be a single shader, can be a collection of those in Stride.** That collection is what we call an **effect**.

You can think of an effect as the generated result of SDSL, while a shader as a small building block that makes up a portion of the end result.

Effects can be created at runtime from existing shaders or in a `.sdfx` file, which provides instructions to the engine on how to mix shaders together based on provided parameters.

```sdsl
using Stride.Effects.Data;

namespace StrideEffects
{
    params MyParameters
    {
        bool EnableSpecular = true;
    };
    
    effect BasicEffect
    {
        using params MaterialParameters;
        using params MyParameters;

        mixin ShaderBase;
        mixin TransformationWAndVP;
        mixin NormalVSStream;
        mixin PositionVSStream;
        mixin BRDFDiffuseBase;
        mixin BRDFSpecularBase;
        mixin LightMultiDirectionalShadingPerPixel<2>;
        mixin TransparentShading;
        mixin DiscardTransparent;

        if (MaterialParameters.AlbedoDiffuse != null)
        {
            mixin compose DiffuseColor = ComputeBRDFDiffuseLambert;
            mixin compose albedoDiffuse = MaterialParameters.AlbedoDiffuse;
        }

        if (MaterialParameters.AlbedoSpecular != null)
        {
            mixin compose SpecularColor = ComputeBRDFColorSpecularBlinnPhong;
            mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
        }
    };
}
```

## Inheritance and modules

Unlike the monolithic structure found in HLSL, SDSL allows you to create reusable code by utilizing inheritance and/or importing.

For example: instead of creating new methods with hardcoded names (e.g. `main`, `VSMain` or `PSMain`) you inherit them from a base shader.

```sdsl
shader Example : IMaterialSurfacePixel
{
    override void Compute()
    {
        streams.matDiffuse = float4(1, 0, 0, 1);
    };
};
```

> [!TIP]
> We recommend that you extend proper methods instead of using hardcoded names to avoid unexpected behavior.

Additional methods or streams can be imported from preexisting modules.

```sdsl
shader Example : IMaterialSurfacePixel
{
    // Imports streams.TexCoord
    import Texturing;

    override void Compute()
    {
        streams.matDiffuse = float4(streams.TexCoord.x, streams.TexCoord.y, 0, 1);
    };
};
```

> [!TIP]
> We recommend importing modules over using semantics.

In the above example `Texturing` is a module, which means a shader that cannot be instantiated. Modules are typically used for creating utility methods or defining effect-wide streams.

```sdsl
module MyNoise
{
    static const float Scale = 43758.5453;

    float Hash(float2 p)
    {
        return frac(sin(dot(p, float2(12.9898, 78.233))) * Scale);
    }
};
```

## Compositions

Composition slots in SDSL allow you to assign shader instances and use their members in your code. Composition slots need to be filled out in C# or in Game Studio.

```sdsl
shader Example : ComputeColor
{
    float Blend;
    compose ComputeColor ShaderA;
    compose ComputeColor ShaderB;

    override float4 Compute()
    {
        return lerp(ShaderA.Compute(), ShaderB.Compute(), Blend);
    }
};
```

> [!NOTE]
> Composition slots in the above example would need to use the `module` modifier (making them instance-independent) in order to be assignable in a material.

## Streams

Instead of returning structs and using them as parameters in order to pass data between stages, SDSL uses **streams**.

```sdsl
shader Example : ShaderBase
{
    stream float2 myValue;

    override stage void VSMain()
    {
        streams.myValue = 0.5;
    }

    override stage void PSMain()
    {
        float4 processedValue = streams.myValue;
    }
};
```

## Keyword cheatsheet

* `shader` - defines a new shader
* `module` - defines a new module or makes a member instance-independent across an entire effect
* `compose` - defines a composition slot
* `stream` - defines a new stream
* `streams` - used to access existing streams
* `override` - indicates that a method is being overridden (required when changing inherited methods)
* `base` - a reference to the base shader

## How to write and use shaders

Writing and using shaders can differ depending on where they are meant to be used (e.g. a custom material or a post-processing effect). Make sure to visit [Types of shader](../types-of-shader/index.md) for proper instructions.
