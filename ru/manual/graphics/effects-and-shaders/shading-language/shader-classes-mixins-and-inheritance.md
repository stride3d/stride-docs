# Shader classes, mixins and inheritance
# Классы шейдеров, примеси и наследование

Stride Shading Language (SDSL) is an extension of HLSL, which makes it closer to C# syntax and concepts. The language is object-oriented:
Stride Shading Language (SDSL) — это расширение HLSL, которое делает его ближе к синтаксису и концепциям C#.  Язык объектно-ориентирован:

- shader classes are the foundation of the code
- классы шейдеров являются основой кода
- shader classes contain methods and members
- классы шейдеров содержат методы и члены
- shader classes can be inherited, methods can be overridden
- классы шейдеров могут быть унаследованы, методы могут быть переопределены
- member types can be shader classes
- типы членов могут быть классами шейдеров

SDSL uses an original way to handle multiple inheritance. Inheritance is performed through mixins, so the order of inheritance is crucial:
SDSL использует оригинальный способ обработки множественного наследования.  Наследование осуществляется через примеси, поэтому порядок наследования имеет решающее значение:

- the order of inheritance defines the actual implementation of a method (the last override)
- порядок наследования определяет фактическую реализацию метода (последнее переопределение)
- if a mixin appears several times in the inheritance, only the first occurrence is taken into account (as well as its members and methods)
- если миксин встречается в наследовании несколько раз, то учитывается только первое вхождение (а также его члены и методы)
- to can call the previous implementation of a method, use `base.<method name>(<arguments>)`
- чтобы можно было вызвать предыдущую реализацию метода, используйте `base.<имя метода>(<аргументы>)`

## Keywords
## Ключевые слова

SDSL uses the keywords as HLSL, and adds new ones:
SDSL использует ключевые слова как HLSL и добавляет новые:

- `stage`: method and member keyword. This keyword makes sure the method or member is only defined once and is the same in the compositions.
- `стадия`: метод и ключевое слово члена.  Это ключевое слово гарантирует, что метод или член определен только один раз и одинаков в композициях.
- `stream`: member keyword. The member is accessible at every stage of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `поток`: ключевое слово члена.  Член доступен на каждом этапе шейдера.  Для получения дополнительной информации см. [Автоматический ввод/вывод этапа шейдера](automatic-shader-stage-input-output.md).
- `streams`: sort of global structure storing variables needed across several stages of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- «потоки»: своего рода глобальная структура, хранящая переменные, необходимые для нескольких этапов шейдера.  Для получения дополнительной информации см. [Автоматический ввод/вывод этапа шейдера](automatic-shader-stage-input-output.md).
- `override`: method keyword. If this keyword is missing, the compilation returns an error.
- `переопределить`: ключевое слово метода.  Если это ключевое слово отсутствует, компиляция возвращает ошибку.
- `abstract`: used in front of a method declaration (without a body).
- `abstract`: используется перед объявлением метода (без тела).
- `clone`: method keyword. When a method appears several times in the inheritance tree of a shader class, this keyword forces the creation of multiple instances of the method at each level of the inheritance instead of one. For more information, see [Composition](composition.md).
- `клон`: ключевое слово метода.  Когда метод появляется несколько раз в дереве наследования класса шейдера, это ключевое слово вызывает создание нескольких экземпляров метода на каждом уровне наследования вместо одного.  Для получения дополнительной информации см. [Композиция](composition.md).
- `Input`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- «Ввод»: для геометрических и тесселяционных шейдеров.  Для получения дополнительной информации см. [Этапы шейдера](shader-stages.md).
- `Output`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Вывод`: для шейдеров геометрии и тесселяции.  Для получения дополнительной информации см. [Этапы шейдера](shader-stages.md).
- `Input2`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Input2`: для шейдеров тесселяции.  Для получения дополнительной информации см. [Этапы шейдера](shader-stages.md).
- `Constants`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Константы`: для шейдеров тесселяции.  Для получения дополнительной информации см. [Этапы шейдера](shader-stages.md).

## Abstract methods
## Абстрактные методы

Abstract methods are available in SDSL. They should be prefixed with the `abstract` keyword. You can inherit from a shader class with abstract methods without having to implement them; the compiler will simply produce a harmless warning. However, you should implement it in your final shader to prevent a compilation error.
Абстрактные методы доступны в SDSL.  Они должны начинаться с ключевого слова «abstract».  Вы можете наследовать от класса шейдера с помощью абстрактных методов, не реализуя их;  компилятор просто выдаст безобидное предупреждение.  Однако вы должны реализовать его в своем финальном шейдере, чтобы предотвратить ошибку компиляции.

## Annotations
## Аннотации

Like HLSL, annotations are available in SDSL. Some of the most useful ones are:
Как и HLSL, аннотации доступны в SDSL.  Вот некоторые из наиболее полезных:

- `[Color]` for float4 variables. The ParameterKey will have the type `Color4` instead of `Vector4`. It also specifies to Game Studio that this variable should be treated as a color, so you can edit it in Game Studio.
- `[Цвет]` для переменных типа float4.  ParameterKey будет иметь тип Color4 вместо Vector4.  Он также указывает Game Studio, что эту переменную следует рассматривать как цвет, поэтому вы можете редактировать ее в Game Studio.
- `[Link(...)]` specifies which ParameterKey to use to set this value. However, an independent default key is still created.
- `[Link(...)]` указывает, какой ParameterKey использовать для установки этого значения.  Однако независимый ключ по умолчанию все равно создается.
- `[Map(...)]` specifies which ParameterKey to use to set this value. No new ParameterKey is created.
- `[Map(...)]` указывает, какой ParameterKey использовать для установки этого значения.  Новый ParameterKey не создается.
- `[RenameLink]` prevents the creation of a ParameterKey. It should be used with `[Link()]`.
- `[RenameLink]` предотвращает создание ParameterKey.  Его следует использовать с `[Link()]`.

### Example code: annotations
### Пример кода: аннотации

```cs
```CS
shader BaseShader
шейдер BaseShader
{
{
	[Color] float4 myColor;
[Цвет] float4 myColor;
 
	[Link("ProjectKeys.MyTextureKey")]
[Ссылка(
	[RenameLink]
[Переименовать ссылку]
	Texture2D texture;
Текстура2D текстура;
 
	[Map("Texturing.Texture0")] Texture2D defaultTexture;
[Map(
};
};
```
```

## Example code: inheritance
## Пример кода: наследование

```cs
```CS
shader BaseInterface
шейдер BaseInterface
{
{
	abstract float Compute();
абстрактный float Compute();
};
};
 
shader BaseShader : BaseInterface
шейдер BaseShader : BaseInterface
{
{
	float Compute()
плавать Вычислить ()
	{
{
		return 1.0f;
вернуть 1.0f;
	}
}
};
};
 
shader ShaderA : BaseShader
шейдер ShaderA : BaseShader
{
{
	override void Compute()
переопределить void Compute()
	{
{
		return 2.0f;
возврат 2.0f;
	}
}
};
};
 
shader ShaderB : BaseShader
шейдер ShaderB : BaseShader
{
{
	override void Compute()
переопределить void Compute()
	{
{
		float prevValue = base.Compute();
float prevValue = base.Compute();
		return (5.0f + prevValue);
возврат (5.0f + предыдущее значение);
	}
}
};
};
```
```

### Example code: the importance of inheritance order
### Пример кода: важность порядка наследования

Notice what happens when we change the inheritance order between `ShaderA` and `ShaderB`.
Обратите внимание, что происходит, когда мы меняем порядок наследования между ShaderA и ShaderB.

```cs
```CS
shader MixAB : ShaderA, ShaderB
шейдер MixAB : ShaderA, ShaderB
{
{
};
};
 
shader MixBA : ShaderB, ShaderA
шейдер MixBA: ShaderB, ShaderA
{
{
};
};
 
// Resulting code (representation)
// Результирующий код (представление)

shader MixAB : BaseInterface, BaseShader, ShaderA, ShaderB
шейдер MixAB: BaseInterface, BaseShader, ShaderA, ShaderB
{
{
	float Compute()
плавать Вычислить ()
	{
{
		// code from BaseShader
// код из BaseShader
		float v0 = 1.0f;
поплавок v0 = 1,0f;
 
		// code from ShaderA
// код из ShaderA
		float v1 = 2.0f;
поплавок v1 = 2,0f;
 
		// code from ShaderB
// код из ShaderB
		float prevValue = v1;
поплавок предыдущее значение = v1;
		float v2 = 5.0f + prevValue;
поплавок v2 = 5.0f + предыдущее значение;
 
		return v2; // = 7.0f
вернуть v2;  // = 7.0f
	}
}
};
};

shader MixBA : BaseInterface, BaseShader, ShaderA, ShaderB
шейдер MixBA: BaseInterface, BaseShader, ShaderA, ShaderB
{
{
	float Compute()
плавать Вычислить ()
	{
{
		// code from BaseShader
// код из BaseShader
		float v0 = 1.0f;
поплавок v0 = 1,0f;

		// code from ShaderB
// код из ShaderB
		float prevValue = v0;
поплавок предыдущее значение = v0;
		float v1 = 5.0f + prevValue;
поплавок v1 = 5.0f + предыдущее значение;
		
		// code from ShaderA
// код из ShaderA
		float v2 = 2.0f;
поплавок v2 = 2,0f;

		return v2; // = 2.0f
вернуть v2;  // = 2.0f
	}
}
};
};
```
```

## Static calls
## Статические вызовы

You can also use a variable or call a method from a shader without having to inherit from it. To do this, use `<shader_name>.<variable or method_name>`. It behaves the same way as a static call. 
Вы также можете использовать переменную или вызывать метод из шейдера без необходимости наследовать от него.  Для этого используйте `<имя_шейдера>.<имя_переменной или метода>`.  Он ведет себя так же, как статический вызов.

Note that if you statically call a method that uses shader class variables, the shader won't compile. This is a convenient way to only use a part of a shader, but this isn't an optimization. The shader compiler already automatically removes any unnecessary variables.
Обратите внимание, что если вы статически вызываете метод, использующий переменные класса шейдера, шейдер не будет компилироваться.  Это удобный способ использовать только часть шейдера, но это не оптимизация.  Компилятор шейдеров уже автоматически удаляет все ненужные переменные.

### Code example: static calls
### Пример кода: статические вызовы

```cs
```CS
shader StaticClass
шейдер StaticClass
{
{
	float StaticValue;
плавающее статическое значение;
	float StaticMethod(float a)
поплавок StaticMethod (поплавок a)
	{
{
		return 2.0f * a;
вернуть 2.0f * а;
	}
}
 
	// this method uses a
// этот метод использует
	float NonStaticMethod()
плавающий нестатический метод ()
	{
{
		return 2.0f * StaticValue;
вернуть 2.0f * статическое значение;
	}
}
};
};
 
// this shader class is fine
// этот класс шейдера подходит
shader CorrectStaticCallClass
шейдер CorrectStaticCallClass
{
{
	float Compute()
плавать Вычислить ()
	{
{
		return StaticClass.StaticValue * StaticMethod(5.0f);
вернуть StaticClass.StaticValue * StaticMethod(5.0f);
	}
}
};
};
 
// this shader class won't compile since the call is not static
// этот класс шейдера не будет компилироваться, так как вызов не является статическим
shader IncorrectStaticCallClass 
шейдер
{
{
	float Compute()
плавать Вычислить ()
	{
{
		return StaticClass.NonStaticMethod();
вернуть StaticClass.NonStaticMethod();
	}
}
};
};
 
// one way to fix this
// один из способов исправить это
shader IncorrectStaticCallClassFixed : StaticClass
шейдер IncorrectStaticCallClassFixed : StaticClass
{
{
	float Compute()
плавать Вычислить ()
	{
{
		return NonStaticMethod();
вернуть нестатический метод();
	}
}
};
};
```
```

## See also
## Смотрите также

* [Effect language](../effect-language.md)
* [Язык эффектов](../effect-language.md)
* [Shading language index](index.md)
* [Указатель языка затенения](index.md)
    - [Composition](composition.md)
- [Композиция](composition.md)
    - [Templates](templates.md)
- [Шаблоны](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)
- [Этапы шейдера](shader-stages.md)
