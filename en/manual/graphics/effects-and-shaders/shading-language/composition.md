# Composition

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

In addition to the inheritance system, SDSL introduces the concept of **composition**. A composition is a member whose type is another shader class. It's defined the same way as variables.

You can compose with an instance of the desired shader class or an instance of a shader class that inherits from the desired one.

## Example code

```cs
shader CompositionBase
{
	float4 Compute()
	{
		return float4(0.0);
	}
};
 
shader CompositionShaderA : CompositionBase
{
	float4 myColor;
 
	override float4 Compute()
	{
		return myColor;
	}
};
 
shader CompositionShaderB : CompositionBase
{
	float4 myColor;

	override float4 Compute()
	{
		return 0.5 * myColor;
	}
};
 
shader BaseShader
{
	CompositionBase Comp0;
	CompositionBase Comp1;
 
	float4 GetColor()
	{
		return Comp0.Compute() + Comp1.Compute();
	}
};
```

The compositions are compiled in their own context, meaning that the non-stage variables are only accessible within the composition. It's also possible to have compositions inside compositions.

## Example code: access root context

If you want to access the root compilation context, you can use the following format:

```cs
shader CompositionShaderC : CompositionBase
{
	BaseShader rootShader = stage;
 
	float4 GetColor()
	{
		return rootShader.GetColor();
	}
};
```

This is error-prone, since `CompositionShaderC` expects `BaseShader` to be available in the root context.

## Example code: array of compositions

You can also create an array of compositions the same way you use an array of values. Since there's no way to know beforehand how many compositions there are, you should iterate using a `foreach` statement.

```cs
shader BaseShaderArray
{
	CompositionBase Comps[];
	
	float4 GetColor()
	{
		float4 resultColor = float4(0.0);
 
		foreach (var comp in Comps)
		{
			resultColor += comp.Compute();
		}
 
		return resultColor;
	}
};
```

## Example code: stage behavior

The behavior of the `stage` keyword is straightforward: only one instance of the variable or method is produced.

```cs
shader BaseShader
{
	stage float BaseStageValue;
	float NonStageValue;
};
 
shader TestShader : BaseShader
{
	BaseShader comp0;
	BaseShader comp1;
};
 
// resulting shader (representation)
shader TestShader
{
	float BaseStageValue;
	float NonStageValue;
	float comp0_NonStageValue;
	float comp1_NonStageValue;
};
```

### Example code: stage member behavior

```cs
shader BaseShader
{
	stage float BaseStageMethod()
	{
		return 1.0;
	}

	float NonStageMethod()
	{
		return 2.0;
	}
};
 
shader TestShader : BaseShader
{
	BaseShader comp0;
	BaseShader comp1;
};
 
// resulting shader (representation)
shader TestClass
{
	float BaseStageMethod()
	{
		return 1.0;
	}

	float NonStageMethod()
	{
		return 2.0;
	}
	float comp0_NonStageMethod()
	{
		return 2.0;
	}
	float comp1_NonStageMethod()
	{
		return 2.0;
	}
};
```

Keep in mind that even in composition, you can call for base methods, override them, and so on. Overriding happens in the same order as the compositions.

This behavior is useful when you need a value in multiple composition but you only need to compute it once (eg the normal in view space).

## Clone behavior

The `clone` keyword has a less trivial behavior. It prevents the `stage` keyword to produce a unique method.

```cs
shader BaseShader
{
	stage float BaseStageMethod()
	{
		return 1.0;
	}
 
	stage float BaseStageMethodNotCloned()
	{
		return 1.0;
	}
};
 
shader CompShader : BaseShader
{
	override clone float BaseStageMethod()
	{
		return 1.0 + base.BaseStageMethod();
	}
 
	override float BaseStageMethodNotCloned()
	{
		return 1.0f + base.BaseStageMethodNotCloned();
	}
};
 
shader TestShader : BaseShader
{
	CompShader comp0;
	CompShadercomp1;
};
 
// resulting shader (representation)
shader TestShader
{
	// cloned method
	float base_BaseStageMethod()
	{
		return 1.0;
	}
 
	float comp0_BaseStageMethod()
	{
		return 1.0 + base_BaseStageMethod();
	}
 
	float BaseStageMethod() // in fact comp1_BaseStageMethod
	{
		return 1.0 + comp0_BaseStageMethod; // 3.0f
	}
 
	// not cloned method
	float base_BaseStageMethodNotCloned()
	{
		return 1.0f;
	}
 
	float BaseStageMethodNotCloned()
	{
		return 1.0f + base_BaseStageMethodNotCloned(); // 2.0f
	}
};
```

This behavior is useful when you want to repeat a simple function but with different parameters (eg adding color on top of another).

## See also

* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)