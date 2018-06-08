# Shader classes, mixins and inheritance

Xenko Shading Language (XKSL) is an extension of HLSL, which makes it closer to C# syntax and concepts. The language is object-oriented:

- shader classes are the foundation of the code
- shader classes contain methods and members
- shader classes can be inherited, methods can be overridden
- member types can be shader classes

XKSL uses an original way to handle multiple inheritance. Inheritance is performed through mixins, so the order of inheritance is crucial:

- the order of inheritance defines the actual implementation of a method (the last override)
- if a mixin appears several times in the inheritance, only the first occurrence is taken into account (as well as its members and methods)
- to can call the previous implementation of a method, use `base.<method name>(<arguments>)`

## Keywords

XKSL uses the keywords as HLSL, and adds new ones:

- `stage`: method and member keyword. This keyword makes sure the method or member is only defined once and is the same in the compositions.
- `stream`: member keyword. The member is accessible at every stage of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `streams`: sort of global structure storing variables needed across several stages of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `override`: method keyword. If this keyword is missing, the compilation returns an error.
- `abstract`: used in front of a method declaration (without a body).
- `clone`: method keyword. When a method appears several times in the inheritance tree of a shader class, this keyword forces the creation of multiple instances of the method at each level of the inheritance instead of one. For more information, see [Composition](composition.md).
- `Input`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Output`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Input2`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Constants`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).

## Abstract methods

Abstract methods are available in XKSL. They should be prefixed with the `abstract` keyword. You can inherit from a shader class with abstract methods without having to implement them; the compiler will simply produce a harmless warning. However, you should implement it in your final shader to prevent a compilation error.

## Annotations

Like HLSL, annotations are available in XKSL. Some of the most useful ones are:

- `[Color]` for float4 variables. The ParameterKey will have the type `Color4` instead of `Vector4`. It also specifies to Game Studio that this variable should be treated as a color, so you can edit it in Game Studio.
- `[Link(...)]` specifies which ParameterKey to use to set this value. However, an independent default key is still created.
- `[Map(...)]` specifies which ParameterKey to use to set this value. No new ParameterKey is created.
- `[RenameLink]` prevents the creation of a ParameterKey. It should be used with `[Link()]`.

### Example code: annotations

```cs
shader BaseShader
{
	[Color] float4 myColor;
 
	[Link("ProjectKeys.MyTextureKey")]
	[RenameLink]
	Texture2D texture;
 
	[Map("Texturing.Texture0")] Texture2D defaultTexture;
};
```

## Example code: inheritance

```cs
shader BaseInterface
{
	abstract float Compute();
};
 
shader BaseShader : BaseInterface
{
	float Compute()
	{
		return 1.0f;
	}
};
 
shader ShaderA : BaseShader
{
	override void Compute()
	{
		return 2.0f;
	}
};
 
shader ShaderB : BaseShader
{
	override void Compute()
	{
		float prevValue = base.Compute();
		return (5.0f + prevValue);
	}
};
```

### Example code: the importance of inheritance order

Notice what happens when we change the inheritance order between `ShaderA` and `ShaderB`.

```cs
shader MixAB : ShaderA, ShaderB
{
};
 
shader MixBA : ShaderB, ShaderA
{
};
 
// Resulting code (representation)

shader MixAB : BaseInterface, BaseShader, ShaderA, ShaderB
{
	float Compute()
	{
		// code from BaseShader
		float v0 = 1.0f;
 
		// code from ShaderA
		float v1 = 2.0f;
 
		// code from ShaderB
		float prevValue = v1;
		float v2 = 5.0f + prevValue;
 
		return v2; // = 7.0f
	}
};

shader MixBA : BaseInterface, BaseShader, ShaderA, ShaderB
{
	float Compute()
	{
		// code from BaseShader
		float v0 = 1.0f;

		// code from ShaderB
		float prevValue = v0;
		float v1 = 5.0f + prevValue;
		
		// code from ShaderA
		float v2 = 2.0f;

		return v2; // = 2.0f
	}
};
```

## Static calls

You can also use a variable or call a method from a shader without having to inherit from it. To do this, use `<shader_name>.<variable or method_name>`. It behaves the same way as a static call. 

Note that if you statically call a method that uses shader class variables, the shader won't compile. This is a convenient way to only use a part of a shader, but this isn't an optimization. The shader compiler already automatically removes any unnecessary variables.

### Code example: static calls

```cs
shader StaticClass
{
	float StaticValue;
	float StaticMethod(float a)
	{
		return 2.0f * a;
	}
 
	// this method uses a
	float NonStaticMethod()
	{
		return 2.0f * StaticValue;
	}
};
 
// this shader class is fine
shader CorrectStaticCallClass
{
	float Compute()
	{
		return StaticClass.StaticValue * StaticMethod(5.0f);
	}
};
 
// this shader class won't compile since the call is not static
shader IncorrectStaticCallClass 
{
	float Compute()
	{
		return StaticClass.NonStaticMethod();
	}
};
 
// one way to fix this
shader IncorrectStaticCallClassFixed : StaticClass
{
	float Compute()
	{
		return NonStaticMethod();
	}
};
```

## See also

* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)