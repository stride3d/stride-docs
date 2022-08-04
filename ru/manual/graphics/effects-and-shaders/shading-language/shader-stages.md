# Shader stages
# Этапы шейдера

The function for each stage has a predefined name, so we recommend you don't change it.
Функция для каждого этапа имеет предопределенное имя, поэтому мы рекомендуем вам не менять его.

- `HSMain` for hull shader
- `HSMain` для шейдера корпуса
- `HSConstantMain` for patch constant function
- `HSConstantMain` для постоянной функции патча
- `DSMain` for domain shader
- `DSMain` для шейдера домена
- `VSMain` for vertex shader (takes no arguments)
- `VSMain` для вершинного шейдера (не принимает аргументов)
- `GSMain` for geometry shader
- `GSMain` для шейдера геометрии
- `PSMain` for pixel shader (takes no arguments)
- `PSMain` для пиксельного шейдера (не принимает аргументов)
- `CSMain` for compute shader (takes no arguments)
- `CSMain` для вычислительного шейдера (не принимает аргументов)

These are all void methods.
Это все пустые методы.

The geometry and tessellation shaders need some kind of predefined structure as input and output. However, since Stride shaders are generic, it's impossible to know beforehand what the structure will be. As a result, these shaders use `Input` and `Output` structures that are automatically generated to fit the final shader.
Шейдеры геометрии и тесселяции нуждаются в какой-то предопределенной структуре для ввода и вывода.  Однако, поскольку шейдеры Stride являются общими, невозможно заранее знать, какой будет структура.  В результате эти шейдеры используют структуры `Input` и `Output`, которые автоматически генерируются в соответствии с окончательным шейдером.

## Vertex shader
## Вершинный шейдер

A vertex shader has to set the variable with the semantic `SV_Position`. In `ShaderBase`, it's `ShadingPosition`.
Вершинный шейдер должен установить переменную с семантикой `SV_Position`.  В `ShaderBase` это `ShadingPosition`.

For example:
Например:

```cs
```CS
override stage void VSMain()
переопределить этап VMain()
{
{
	...
...
	streams.ShadingPosition = ...;
потоки.ShadingPosition = ...;
	...
...
}
}
```
```

## Pixel shader
## Пиксельный шейдер

A pixel shader has to set the variable with the semantic `SV_Target`. In `ShaderBase`, it is `ColorTarget`.
Пиксельный шейдер должен установить переменную с семантикой `SV_Target`.  В `ShaderBase` это `ColorTarget`.

For example:
Например:

```cs
```CS
override stage void PSMain()
переопределить этап void PSMain()
{
{
	...
...
	streams.ColorTarget = ...;
потоки.ColorTarget = ...;
	...
...
}
}
```
```

## Geometry shader
## Геометрический шейдер

An example of geometry shader:
Пример шейдера геометрии:

```cs
```CS
[maxvertexcount(1)]
[maxvertexcount(1)]
void GSMain(triangle Input input[3], inout PointStream<Output> pointStream)
void GSMain(треугольник Input input[3], inout PointStream<Output> pointStream)
{
{
	...
...
	// fill the streams object
// заполняем объект потоков
	streams = input[0];
потоки = ввод [0];
 	...
...
 
	// always append streams
// всегда добавлять потоки
	pointStream.Append(streams);
pointStream.Append(потоки);
	...
...
}
}
```
```

`Input` can be used in the method body. It behaves like the streams object and contains the same members.
`Input` можно использовать в теле метода.  Он ведет себя как объект streams и содержит те же члены.

`Output` is only used in the declaration of the method. You should append the streams object to your geometry shader output stream.
`Вывод` используется только в объявлении метода.  Вы должны добавить объект streams к выходному потоку вашего шейдера геометрии.

## Tessellation shader
## Тесселяционный шейдер

An example of a tessellation shader:
Пример шейдера тесселяции:

```cs
```CS
[domain("tri")]
[домен (
[partitioning("fractional_odd")]
[разделение (
[outputtopology("triangle_cw")]
[выходная топология (
[outputcontrolpoints(3)]
[выходные контрольные точки (3)]
[patchconstantfunc("HSConstantMain")]
[patchconstantfunc(
[maxtessfactor(48.0)]
[максимальный фактор (48,0)]
void HSMain(InputPatch<Input, 3> input, out Output output, uint uCPID : SV_OutputControlPointID)
void HSMain (InputPatch<Input, 3> input, out Output output, uint uCPID: SV_OutputControlPointID)
{
{
	...
...
	output = streams;
вывод = потоки;
}
}
 
void HSConstantMain(InputPatch<Input, 3> input, const OutputPatch<Input2, 3> output, out Constants constants)
void HSConstantMain (InputPatch<Input, 3> ввод, const OutputPatch<Input2, 3> вывод, out Константы констант)
{
{
	...
...
	output = streams;
вывод = потоки;
	...
...
}
}
 
[domain("tri")]
[домен (
void DSMain(const OutputPatch<Input, 3> input, out Output output, in Constants constants, float3 f3BarycentricCoords : SV_DomainLocation)
void DSMain(const OutputPatch<Input, 3> input, out Output output, in Константы констант, float3 f3BarycentricCoords: SV_DomainLocation)
{
{
	...
...
	output = streams;
вывод = потоки;
	...
...
}
}
```
```

`Input` and `Input2` both behave like streams.
`Input` и `Input2` ведут себя как потоки.

>[!Note]
>[!Примечание]
>Don't forget to assign `output` to `streams` at the end of your stage.
> Не забудьте назначить «output» для «streams» в конце вашего этапа.

## Compute shader
## Вычислительный шейдер

An example of a compute shader:
Пример вычислительного шейдера:

```cs
```CS
[numthreads(2, 3, 5)]
[количество потоков (2, 3, 5)]
void CSMain()
недействительным CSMain()
{
{
	...
...
}
}
```
```

You can inherit from `ComputeShaderBase` and override the `Compute` method.
Вы можете наследоваться от `ComputeShaderBase` и переопределить метод `Compute`.

## See also
## Смотрите также

* [Effect language](../effect-language.md)
* [Язык эффектов](../effect-language.md)
* [Shading language index](index.md)
* [Указатель языка затенения](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
- [Шейдерные классы, примеси и наследование](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
- [Композиция](composition.md)
    - [Templates](templates.md)
- [Шаблоны](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](automatic-shader-stage-input-output.md)
