# Semantics

> [!WARNING]
> We recommend using built-in streams instead of semantics. This page only serves as an exercise to the reader — consider skipping it, unless you want to learn more about how the shader system works.

Semantics tell the shading system to link a stream to a commonly used value. They are used to retrieve and set common data such as color target, texture coordinate or shading position.

## Recommended alternative

Semantics origin from HLSL, which uses a monolithic architecture, meaning that all shaders are a self contained package and cannot share code with each other. SDSL however allows you to use inheritance, which removes the need for semantics.

```sdsl
shader Example : ComputeColor, Texturing
{
    stage stream float2 MyTexCoord : TEXCOORD0;

    override float4 Compute()
    {
        // Using semantics (not recommended)
        return float4(streams.MyTexCoord.x, streams.MyTexCoord.y, 0, 1);

        // Using a stream inherited from Texturing (recommended)
        return float4(streams.TexCoord.x, streams.TexCoord.y, 0, 1);
    }
};
```

## Semantic syntax

Semantics are defined for stream variables using the following syntax:

```sdsl
stage stream ValueType VariableName : Semantic;
```
