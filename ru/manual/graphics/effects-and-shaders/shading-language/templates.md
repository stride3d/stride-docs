# Templates
# Шаблоны

Shader templating is available in SDSL. Unlike many templating systems, sdsl requires strong typed templates. The available types are:
Шаблоны шейдеров доступны в SDSL.  В отличие от многих систем шаблонов, sdsl требует строго типизированных шаблонов.  Доступные типы:

- value types from HLSL (float, int, float2, float3, float4)
- типы значений из HLSL (float, int, float2, float3, float4)
- 2D textures
- 2D текстуры
- sampler states
- состояния сэмплера
- semantics (used to replace semantics on variables)
- семантика (используется для замены семантики переменных)
- link types (used to replace link annotations)
- типы ссылок (используются для замены аннотаций ссылок)

An instantiated shader behaves the same way as any other shader. The value, texture and sampler template parameters are accessible like any other variable. However, it's impossible to modify their value; attempting to do so results in a compilation error. If a template variable is incorrectly used (eg using a sampler as a semantic), it should result in a compilation error. However, the behavior is officially unknown.
Созданный шейдер ведет себя так же, как и любой другой шейдер.  Параметры шаблона значения, текстуры и сэмплера доступны, как и любая другая переменная.  Однако изменить их значение невозможно;  попытка сделать это приводит к ошибке компиляции.  Если переменная шаблона используется неправильно (например, использование семплера в качестве семантики), это должно привести к ошибке компиляции.  Тем не менее, поведение официально неизвестно.

**Code:** Templating
**Код:** Шаблоны

```cs
```CS
shader TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
шейдер TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
{
{
	[Color]
[Цвет]
	[Link("myLink")]
[Ссылка(
	float4 myColor;
поплавок4 мой цвет;
 
	stream float2 texcoord : mySemantic;
поток float2 texcoord: mySemantic;
 
	float4 GetValue()
float4 получить значение ()
	{
{
		return speed * myColor * myTexture.Sample(mySampler, streams.texcoord);
скорость возврата * myColor * myTexture.Sample(mySampler, streams.texcoord);
	}
}
};
};
 
// To instantiate the shader, use:
// Чтобы создать шейдер, используйте:
TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
```
```

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
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](automatic-shader-stage-input-output.md)
