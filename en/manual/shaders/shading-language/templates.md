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
shader TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
{
    [Color]
    [Link(myLink)]
    float4 myColor;
    
    stream float2 texcoord : mySemantic;
    
    float4 GetValue()
    {
        return speed * myColor * myTexture.Sample(mySampler, streams.texcoord);
    }
};
```

This shader could then be used in a `.sdfx` file like so:

```sdsl
effect Example
{
    mixin TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
}
```
