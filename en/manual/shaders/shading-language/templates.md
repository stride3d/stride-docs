# Templates

Shader templates let you create variations of the same shader with different base values.

```sdsl
shader Example<float Speed> : ComputeColor
{
    override float4 Compute()
    {
        return float4(float3(1 * Speed * Global.Time), 1);
    }
};
```

## Difference between templates and parameters

The most important difference is that shaders created from different template values are treated distinctly from each other, meaning that they have to be individually compiled and loaded. Think of it as having multiple `.sdsl` files containing almost identical code, aside from a few values.

TODO: VISUALIZATION

On top of that, there are other differences:

| Capability | Template values | Parameters |
| :-- | :-: | :-: |
| Can be set in Property Grid | Yes | No |
| Can be changed at runtime | No | Yes |
| Can be used to set semantics | Yes | No |
| Can be used to set links | Yes | No |

## What can be a template

* HLSL types (bool, int, float3, etc.)
* 2D textures
* sampler states
* Semantics
* Link types

## Example

```sdsl
shader TemplateShader<float Speed, Semantic MySemantic, LinkType MyLink>
{
    [Color]
    // NOTE FOR XEN: should quotes be used here?
    [Link("MyLink")]
    float4 MyColor;
    
    stream float2 Texcoord : MySemantic;
    
    float4 GetValue()
    {
        return Speed * MyColor * float4(streams.Texcoord, 0, 1);
    }
};
```

Shaders can also pass template parameters to parent shaders that they inherit and imported modules:

```sdsl
shader Example<float Speed, LinkType TextureLink, LinkType SamplerLink> : ParentShader<speed>
{
    import DynamicTexture<TextureLink, PerMaterial>;
    import DynamicSampler<SamplerLink, PerMaterial>;

    ...
};
```

This shader could then be used in a `.sdfx` file like so:

```sdsl
// NOTE FOR XEN: change this example to correctly use links in mixin
effect ExampleEffect
{
    mixin Example<1.0f, Texturing.Texture0, Texturing.Sampler0>;

    ...
};
```
