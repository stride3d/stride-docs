# Composition
# Сочинение

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

In addition to the inheritance system, SDSL introduces the concept of **composition**. A composition is a member whose type is another shader class. It's defined the same way as variables.
В дополнение к системе наследования SDSL вводит понятие **композиции**.  Композиция — это член, тип которого является другим классом шейдера.  Он определяется так же, как и переменные.

You can compose with an instance of the desired shader class or an instance of a shader class that inherits from the desired one.
Вы можете составить с экземпляром желаемого класса шейдера или экземпляром класса шейдера, который наследуется от желаемого.

## Example code
## Пример кода

```cs
```CS
shader CompositionBase
шейдер CompositionBase
{
{
	float4 Compute()
float4 Вычислить()
	{
{
		return float4(0.0);
возврат с плавающей запятой4 (0,0);
	}
}
};
};
 
shader CompositionShaderA : CompositionBase
шейдер CompositionShaderA : CompositionBase
{
{
	float4 myColor;
поплавок4 мой цвет;
 
	override float4 Compute()
переопределить вычисление float4()
	{
{
		return myColor;
вернуть мой цвет;
	}
}
};
};
 
shader CompositionShaderB : CompositionBase
шейдер CompositionShaderB : CompositionBase
{
{
	float4 myColor;
поплавок4 мой цвет;

	override float4 Compute()
переопределить вычисление float4()
	{
{
		return 0.5 * myColor;
вернуть 0,5 * мой цвет;
	}
}
};
};
 
shader BaseShader
шейдер BaseShader
{
{
	CompositionBase Comp0;
Базовая композиция Comp0;
	CompositionBase Comp1;
Базовая композиция Comp1;
 
	float4 GetColor()
float4 ПолучитьЦвет()
	{
{
		return Comp0.Compute() + Comp1.Compute();
вернуть Comp0.Compute() + Comp1.Compute();
	}
}
};
};
```
```

The compositions are compiled in their own context, meaning that the non-stage variables are only accessible within the composition. It's also possible to have compositions inside compositions.
Композиции компилируются в своем собственном контексте, а это означает, что неэтапные переменные доступны только внутри композиции.  Также возможно иметь композиции внутри композиций.

## Example code: access root context
## Пример кода: доступ к корневому контексту

If you want to access the root compilation context, you can use the following format:
Если вы хотите получить доступ к корневому контексту компиляции, вы можете использовать следующий формат:

```cs
```CS
shader CompositionShaderC : CompositionBase
шейдер CompositionShaderC : CompositionBase
{
{
	BaseShader rootShader = stage;
Базовый шейдер rootShader = этап;
 
	float4 GetColor()
float4 ПолучитьЦвет()
	{
{
		return rootShader.GetColor();
вернуть rootShader.GetColor();
	}
}
};
};
```
```

This is error-prone, since `CompositionShaderC` expects `BaseShader` to be available in the root context.
Это подвержено ошибкам, так как `CompositionShaderC` ожидает, что `BaseShader` будет доступен в корневом контексте.

## Example code: array of compositions
## Пример кода: массив композиций

You can also create an array of compositions the same way you use an array of values. Since there's no way to know beforehand how many compositions there are, you should iterate using a `foreach` statement.
Вы также можете создать массив композиций так же, как вы используете массив значений.  Так как нет никакого способа узнать заранее, сколько существует композиций, вы должны выполнить итерацию, используя оператор foreach.

```cs
```CS
shader BaseShaderArray
шейдер BaseShaderArray
{
{
	CompositionBase Comps[];
Базовые композиции[];
	
	float4 GetColor()
float4 ПолучитьЦвет()
	{
{
		float4 resultColor = float4(0.0);
float4 resultColor = float4(0.0);
 
		foreach (var comp in Comps)
foreach (var comp в Comps)
		{
{
			resultColor += comp.Compute();
resultColor += comp.Compute();
		}
}
 
		return resultColor;
вернуть результатЦвет;
	}
}
};
};
```
```

## Example code: stage behavior
## Пример кода: сценическое поведение

The behavior of the `stage` keyword is straightforward: only one instance of the variable or method is produced.
Поведение ключевого слова stage простое: создается только один экземпляр переменной или метода.

```cs
```CS
shader BaseShader
шейдер BaseShader
{
{
	stage float BaseStageValue;
поплавок этапа BaseStageValue;
	float NonStageValue;
поплавок NonStageValue;
};
};
 
shader TestShader : BaseShader
шейдер TestShader : BaseShader
{
{
	BaseShader comp0;
Базовый шейдер comp0;
	BaseShader comp1;
Базовый шейдер comp1;
};
};
 
// resulting shader (representation)
// результирующий шейдер (представление)
shader TestShader
шейдер TestShader
{
{
	float BaseStageValue;
поплавок BaseStageValue;
	float NonStageValue;
поплавок NonStageValue;
	float comp0_NonStageValue;
поплавок comp0_NonStageValue;
	float comp1_NonStageValue;
поплавок comp1_NonStageValue;
};
};
```
```

### Example code: stage member behavior
### Пример кода: поведение участника этапа

```cs
```CS
shader BaseShader
шейдер BaseShader
{
{
	stage float BaseStageMethod()
поплавок этапа BaseStageMethod()
	{
{
		return 1.0;
возврат 1.0;
	}
}

	float NonStageMethod()
поплавок NonStageMethod()
	{
{
		return 2.0;
возврат 2.0;
	}
}
};
};
 
shader TestShader : BaseShader
шейдер TestShader : BaseShader
{
{
	BaseShader comp0;
Базовый шейдер comp0;
	BaseShader comp1;
Базовый шейдер comp1;
};
};
 
// resulting shader (representation)
// результирующий шейдер (представление)
shader TestClass
шейдер TestClass
{
{
	float BaseStageMethod()
поплавок BaseStageMethod()
	{
{
		return 1.0;
возврат 1.0;
	}
}

	float NonStageMethod()
поплавок NonStageMethod()
	{
{
		return 2.0;
возврат 2.0;
	}
}
	float comp0_NonStageMethod()
поплавок comp0_NonStageMethod()
	{
{
		return 2.0;
возврат 2.0;
	}
}
	float comp1_NonStageMethod()
поплавок comp1_NonStageMethod()
	{
{
		return 2.0;
возврат 2.0;
	}
}
};
};
```
```

Keep in mind that even in composition, you can call for base methods, override them, and so on. Overriding happens in the same order as the compositions.
Имейте в виду, что даже в композиции вы можете вызывать базовые методы, переопределять их и так далее.  Переопределение происходит в том же порядке, что и композиции.

This behavior is useful when you need a value in multiple composition but you only need to compute it once (eg the normal in view space).
Такое поведение полезно, когда вам нужно значение в нескольких композициях, но вам нужно вычислить его только один раз (например, нормаль в пространстве просмотра).

## Clone behavior
## Клонирование поведения

The `clone` keyword has a less trivial behavior. It prevents the `stage` keyword to produce a unique method.
Ключевое слово `clone` имеет менее тривиальное поведение.  Он не позволяет ключевому слову `stage` создать уникальный метод.

```cs
```CS
shader BaseShader
шейдер BaseShader
{
{
	stage float BaseStageMethod()
поплавок этапа BaseStageMethod()
	{
{
		return 1.0;
возврат 1.0;
	}
}
 
	stage float BaseStageMethodNotCloned()
поплавок этапа BaseStageMethodNotCloned()
	{
{
		return 1.0;
возврат 1.0;
	}
}
};
};
 
shader CompShader : BaseShader
шейдер CompShader : BaseShader
{
{
	override clone float BaseStageMethod()
переопределить клонирование с плавающей запятой BaseStageMethod()
	{
{
		return 1.0 + base.BaseStageMethod();
вернуть 1.0 + base.BaseStageMethod();
	}
}
 
	override float BaseStageMethodNotCloned()
переопределить float BaseStageMethodNotCloned()
	{
{
		return 1.0f + base.BaseStageMethodNotCloned();
вернуть 1.0f + base.BaseStageMethodNotCloned();
	}
}
};
};
 
shader TestShader : BaseShader
шейдер TestShader : BaseShader
{
{
	CompShader comp0;
Компшейдер comp0;
	CompShadercomp1;
CompShadercomp1;
};
};
 
// resulting shader (representation)
// результирующий шейдер (представление)
shader TestShader
шейдер TestShader
{
{
	// cloned method
// клонированный метод
	float base_BaseStageMethod()
поплавок base_BaseStageMethod()
	{
{
		return 1.0;
возврат 1.0;
	}
}
 
	float comp0_BaseStageMethod()
поплавок comp0_BaseStageMethod()
	{
{
		return 1.0 + base_BaseStageMethod();
вернуть 1.0 + base_BaseStageMethod();
	}
}
 
	float BaseStageMethod() // in fact comp1_BaseStageMethod
float BaseStageMethod() // на самом деле comp1_BaseStageMethod
	{
{
		return 1.0 + comp0_BaseStageMethod; // 3.0f
вернуть 1.0 + comp0_BaseStageMethod;  // 3.0f
	}
}
 
	// not cloned method
// не клонированный метод
	float base_BaseStageMethodNotCloned()
поплавок base_BaseStageMethodNotCloned()
	{
{
		return 1.0f;
вернуть 1.0f;
	}
}
 
	float BaseStageMethodNotCloned()
поплавок BaseStageMethodNotCloned()
	{
{
		return 1.0f + base_BaseStageMethodNotCloned(); // 2.0f
вернуть 1.0f + base_BaseStageMethodNotCloned();  // 2.0f
	}
}
};
};
```
```

This behavior is useful when you want to repeat a simple function but with different parameters (eg adding color on top of another).
Такое поведение полезно, когда вы хотите повторить простую функцию, но с другими параметрами (например, добавление цвета поверх другой).

## See also
## Смотрите также

* [Effect language](../effect-language.md)
* [Язык эффектов](../effect-language.md)
* [Shading language index](index.md)
* [Указатель языка затенения](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
- [Шейдерные классы, примеси и наследование](shader-classes-mixins-and-inheritance.md)
    - [Templates](templates.md)
- [Шаблоны](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)
- [Этапы шейдера](shader-stages.md)
