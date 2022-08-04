# Automatic shader stage input/output
# Автоматический ввод/вывод этапа шейдера

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

When you write a HLSL shader, you have to precisely define your vertex attributes and carefully pass them across the stage of your final shader.
Когда вы пишете шейдер на HLSL, вы должны точно определить атрибуты вершин и аккуратно передать их на этапе окончательного шейдера.

Here's an example of a simple HLSL shader that uses the color from the vertex.
Вот пример простого шейдера HLSL, в котором используется цвет вершины.

```cs
```CS
struct VS_IN
структура VS_IN
{
{
	float4 pos : POSITION;
float4 pos : ПОЛОЖЕНИЕ;
	float4 col : COLOR;
float4 col : ЦВЕТ;
};
};

struct PS_IN
структура PS_IN
{
{
	float4 pos : SV_POSITION;
float4 позиция: SV_POSITION;
	float4 col : COLOR;
float4 col : ЦВЕТ;
};
};

PS_IN VS( VS_IN input )
PS_IN VS (вход VS_IN)
{
{
	PS_IN output = (PS_IN)0;
Выход PS_IN = (PS_IN)0;

	output.pos = input.pos;
выход.поз = вход.поз;
	output.col = input.col;
выходной столбец = входной столбец;

	return output;
обратный вывод;
}
}

float4 PS( PS_IN input ) : SV_Target
float4 PS (вход PS_IN): SV_Target
{
{
	return input.col;
вернуть input.col;
}
}

technique10 Render
техника10 Рендеринг
{
{
	pass P0
пройти P0
	{
{
		SetGeometryShader( 0 );
SetGeometryShader(0);
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
SetVertexShader(CompileShader(vs_4_0, VS()));
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
}
}
```
```

Imagine you want to add a normal to your model and modify the resulting color accordingly. You have to modify the code that computes the color and adjust the intermediate structures to pass the attribute from the vertex to the pixel shader. You also have to be careful of the semantics you use.
Представьте, что вы хотите добавить нормаль к своей модели и соответствующим образом изменить полученный цвет.  Вы должны изменить код, вычисляющий цвет, и настроить промежуточные структуры для передачи атрибута из вершины в пиксельный шейдер.  Вы также должны быть осторожны с семантикой, которую вы используете.

**Code:** Modified HLSL shader
**Код:** Модифицированный шейдер HLSL

```cs
```CS
struct VS_IN
структура VS_IN
{
{
	float4 pos : POSITION;
float4 pos : ПОЛОЖЕНИЕ;
	float4 col : COLOR;
float4 col : ЦВЕТ;
	float3 normal : NORMAL;
float3 нормальный : НОРМАЛЬНЫЙ;
};
};

struct PS_IN
структура PS_IN
{
{
	float4 pos : SV_POSITION;
float4 позиция: SV_POSITION;
	float4 col : COLOR;
float4 col : ЦВЕТ;
	float3 normal : TEXCOORD0;
float3 обычный: TEXCOORD0;
};
};

PS_IN VS( VS_IN input )
PS_IN VS (вход VS_IN)
{
{
	PS_IN output = (PS_IN)0;
Выход PS_IN = (PS_IN)0;

	output.pos = input.pos;
выход.поз = вход.поз;
	output.col = input.col;
выходной столбец = входной столбец;
	output.normal = input.normal;
выход.нормальный = вход.нормальный;

	return output;
обратный вывод;
}
}

float4 PS( PS_IN input ) : SV_Target
float4 PS (вход PS_IN): SV_Target
{
{
	return input.col * max(input.normal.z, 0.0);
вернуть input.col * max(input.normal.z, 0.0);
}
}

technique10 Render
техника10 Рендеринг
{
{
	pass P0
пройти P0
	{
{
		SetGeometryShader( 0 );
SetGeometryShader(0);
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
SetVertexShader(CompileShader(vs_4_0, VS()));
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
}
}
```
```

This example is simple. Real projects have many more shaders, so a single change might mean rewriting lots of shaders, structures, and so on.
Этот пример прост.  В реальных проектах гораздо больше шейдеров, поэтому одно изменение может означать переписывание множества шейдеров, структур и т. д.

Schematically, adding a new attribute requires you to update all the stages and intermediate structures from the vertex input to the last stage you want to use the attribute in.
Схематически добавление нового атрибута требует обновления всех этапов и промежуточных структур от входа вершины до последнего этапа, в котором вы хотите использовать атрибут.

![media/hlsl_add_normal.png](media/hlsl_add_normal.png) 
![медиа/hlsl_add_normal.png](медиа/hlsl_add_normal.png)

## SDSL
## СДСЛ

SDSL has a convenient way to pass parameters across the different stages of your shader. The stream variables are:
SDSL имеет удобный способ передачи параметров на разных этапах вашего шейдера.  Переменные потока:

- variables
- переменные
- defined like any shader member, with the stream keyword
- определяется как любой элемент шейдера с помощью ключевого слова stream
- used with the stream prefix (omitting it results in a compilation error). When the stream is ambiguous (same name), you should provide the shader name in front of the variable (ie `streams.<my_shader>.<my_variable>`)
- используется с префиксом потока (опущение приводит к ошибке компиляции).  Если поток неоднозначен (то же самое имя), вы должны указать имя шейдера перед переменной (например, `streams.<my_shader>.<my_variable>`)

Streams regroup the concepts of attributes, varyings and outputs in a single concept.
Потоки перегруппировывают понятия атрибутов, вариаций и выходов в единое понятие.

- An attribute is a stream read in a vertex shader before being written to.
- Атрибут — это поток, считываемый в вершинном шейдере перед записью.
- A varying is a stream present across shader stages.
- Variant — это поток, присутствующий на этапах шейдера.
- An output is a stream assigned before being read.
- Выход представляет собой поток, назначенный перед чтением.

Think of streams as global objects that you can access everywhere without specifying as a parameter of your functions.
Думайте о потоках как о глобальных объектах, к которым вы можете получить доступ везде, не указывая их в качестве параметра ваших функций.

>[!Note]
>[!Примечание]
>You don't have to create a semantic for these variables; the compiler creates them automatically. However, keep in mind that **the variables sharing the same semantic will be merged in the final shader**. This behavior can be useful when you want to use a stream variable locally without inheriting from the shader where it was declared.
> Вам не нужно создавать семантику для этих переменных;  компилятор создает их автоматически.  Однако имейте в виду, что **переменные с одинаковой семантикой будут объединены в финальном шейдере**.  Такое поведение может быть полезно, когда вы хотите использовать потоковую переменную локально, не наследуя ее от шейдера, в котором она была объявлена.

After you declare a stream, you can access it at any stage of your shader. The shader compiler takes care of everything. The variables just have to be visible from the calling code (ie in the inheritance hierarchy) like any other variable.
После объявления потока вы можете получить к нему доступ на любом этапе вашего шейдера.  Компилятор шейдеров позаботится обо всем.  Переменные просто должны быть видны из вызывающего кода (т.е. в иерархии наследования), как и любая другая переменная.

**Code:** Stream definition and use:
**Код:** Определение и использование потока:

```cs
```CS
shader BaseShader
шейдер BaseShader
{
{
	stream float3 myVar;
поток float3 myVar;
 
	float3 Compute()
float3 Вычислить()
	{
{
		return streams.myVar;
вернуть streams.myVar;
	}
}
};
};
```
```

**Code:** Stream specification
**Код:** Спецификация потока

```cs
```CS
shader StreamShader
шейдер StreamShader
{
{
	stream float3 myVar;
поток float3 myVar;
};
};

shader ShaderA : BaseShader, StreamShader
шейдер ShaderA : BaseShader, StreamShader
{
{
	float3 Test()
Тест с плавающей запятой ()
	{
{
		return streams.BaseShader.myVar + streams.StreamShader.myVar;
вернуть streams.BaseShader.myVar + streams.StreamShader.myVar;
	}
}
}
}
```
```

### Example of SDSL shader
### Пример шейдера SDSL

Let's look at the same HLSL shader as the first example but in SDSL.
Давайте посмотрим на тот же шейдер HLSL, что и в первом примере, но в SDSL.

**Code:** Same shader in SDSL
**Код:** Тот же шейдер в SDSL

```cs
```CS
shader MyShader : ShaderBase
шейдер MyShader : ShaderBase
{
{
	stream float4 pos : POSITION;
поток float4 pos : POSITION;
	stream float4 col : COLOR;
поток float4 col : ЦВЕТ;

	override void VSMain()
переопределить недействительным VSMain()
	{
{
		streams.ShadingPosition = streams.pos;
streams.ShadingPosition = streams.pos;
	}
}

	override void PSMain()
переопределить пустоту PSMain()
	{
{
		streams.ColorTarget = streams.col;
streams.ColorTarget = streams.col;
	}
}
};
};
```
```

Now let's add the normal computation.
Теперь давайте добавим нормальное вычисление.

**Code:** Modified shader in SDSL
**Код:** Модифицированный шейдер в SDSL

```cs
```CS
shader MyShader : ShaderBase
шейдер MyShader : ShaderBase
{
{
	stream float4 pos : POSITION;
поток float4 pos : POSITION;
	stream float4 col : COLOR;
поток float4 col : ЦВЕТ;
	stream float3 normal : NORMAL;
поток float3 нормальный: НОРМАЛЬНЫЙ;

	override void VSMain()
переопределить недействительным VSMain()
	{
{
		streams.ShadingPosition = streams.pos;
streams.ShadingPosition = streams.pos;
	}
}

	override void PSMain()
переопределить пустоту PSMain()
	{
{
		streams.ColorTarget = streams.col * max(streams.normal.z, 0.0);
streams.ColorTarget = streams.col * max(streams.normal.z, 0.0);
	}
}
};
};
```
```

In SDSL, adding a new attribute is as simple as adding it to the pool of streams and using it where you want.
В SDSL добавление нового атрибута так же просто, как добавление его в пул потоков и использование его там, где вы хотите.

![media/sdsl_add_normal.png](media/sdsl_add_normal.png)
![медиа/sdsl_add_normal.png](медиа/sdsl_add_normal.png)

## See also
## Смотрите также

* [Effect language](../effect-language.md)
* [Язык эффектов](../effect-language.md)
* [Shading language index](index.md)
* [Указатель языка затенения](index.md)
    - [Shader classes, mixins and inheritance](shader-classes-mixins-and-inheritance.md)
- [Шейдерные классы, примеси и наследование](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
- [Композиция](composition.md)
    - [Templates](templates.md)
- [Шаблоны](templates.md)
	- [Shader stages](shader-stages.md)
- [Этапы шейдера](shader-stages.md)
