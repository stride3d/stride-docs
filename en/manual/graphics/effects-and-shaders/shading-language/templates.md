# Templates

Shader templating is available in XKSL. Unlike many templating systems, xksl requires strong typed templates. The available types are:

- value types from HLSL (float, int, float2, float3, float4)
- 2D textures
- sampler states
- semantics (used to replace semantics on variables)
- link types (used to replace link annotations)

An instantiated shader behaves the same way as any other shader. The value, texture and sampler template parameters are accessible like any other variable. However, it's impossible to modify their value; attempting to do so results in a compilation error. If a template variable is incorrectly used (eg using a sampler as a semantic), it should result in a compilation error. However, the behavior is officially unknown.

**Code:** Templating

```cs
shader TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
{
	[Color]
	[Link("myLink")]
	float4 myColor;
 
	stream float2 texcoord : mySemantic;
 
	float4 GetValue()
	{
		return speed * myColor * myTexture.Sample(mySampler, streams.texcoord);
	}
};
 
// To instantiate the shader, use:
TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
```

## See also

* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
