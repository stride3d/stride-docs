# Effect language

## Create shaders in C&#35;

You can create a shader at runtime with @'Stride.Shaders.ShaderSource' objects. Shaders come in three types:

- @'Stride.Shaders.ShaderClassSource' correspond to a unique shader class
- @'Stride.Shaders.ShaderMixinSource' mix several @'Stride.Shaders.ShaderSource', set preprocessor values, define compositions
- @'Stride.Shaders.ShaderArraySource' are used for arrays of compositions

This method produces shaders at runtime. However, many platforms don't support HLSL and have no ability to compile shaders at runtime. Additionally, the approach doesn't benefit from the reusability of mixins.

## Stride Effects (XKFX)

Many shaders are variations or combinations of pre-existing shaders. For example, some meshes cast shadows, others receive them, and others need skinning. To reuse code, it's a good idea to select which parts to use through conditions (eg "Skinning required"). This is often solved by "uber shaders": monolithic shaders configured by a set of preprocessor parameters.

Stride offers the same kind of control, keeping extensibility and reusability in mind. The simple code blocks defined by shader classes can be mixed together by a shader mixer. This process can use more complex logic, described in Stride Effect (*.sdfx) files.

### General syntax

An .sdfx file is a small program used to generate shader permutations. It takes a set of parameters (key and value in a collection) and produces a `ShaderMixinSource` ready to be compiled.

An example .sdfx file:

```cs
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

### Add a mixin

To add a mixin, use `mixin <mixin_name>`.

### Use parameters

The syntax is similar to C#. The following rules are added:

- When you use parameter keys, add them using `params <shader_name>`. If you don't, keys are treated as variables.

- You don't need to tell the program where to check the values behind the keys. Just use the key.

```cs
using params MaterialParameters;
 
if (MaterialParameters.AlbedoDiffuse != null)
{
	mixin MaterialParameters.AlbedoDiffuse;
}
```

The parameters behave like any variable. You can read and write their value, compare their values, and set template parameters. Since some parameters store mixins, they can be used for composition and inheritance, too.

### Custom parameters

You can create your own set of parameters using a structure definition syntax. 

>[!Note]
>Even if they're defined in the XKFX file, don't forget the `using` statement when you want to use them.

```cs
params MyParameters
{
	bool EnableSpecular = true; // true is the default value
}
```

### Compositions

To add a composition, assign the composition variable to your mixin with the syntax below.

```cs
// albedoSpecular is the name of the composition variable in the mixin
mixin compose albedoSpecular = ComputeColorTexture;
 
or
 
mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
```

### Partial effects

You can also break the code into sub-mixins to reuse elsewhere with the syntax below.

```cs
partial effect MyPartialEffect
{
	mixin ComputeColorMultiply;
	mixin compose color1 = ComputeColorStream;
	mixin compose color2 = ComputeColorFixed;
}
 
// to use it
mixin MyPartialEffect;
mixin compose myComposition = MyPartialEffect;
```

You can use the `MyPartialEffect` mixin like any other mixin in the code.

## See also

* [Shading language](shading-language/index.md)