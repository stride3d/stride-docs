# Effects and shaders
# Эффекты и шейдеры

Stride uses a programmable shading pipeline. You can write [custom shaders](custom-shaders.md), create @'Stride.Graphics.Effect's from them, and use them for drawing. The @'Stride.Rendering.EffectSystem' class provides an easy way to load an effect.
Stride использует программируемый конвейер затенения.  Вы можете написать [пользовательские шейдеры](custom-shaders.md), создать из них @'Stride.Graphics.Effect и использовать их для рисования.  Класс @'Stride.Rendering.EffectSystem' предоставляет простой способ загрузки эффекта.

## Load an effect
## Загрузить эффект

Use:
Использовать:

```cs
```CS
var myEffect = EffectSystem.LoadEffect("MyEffect").WaitForResult();
var myEffect = EffectSystem.LoadEffect(
```
```

You can then bind the effect as [pipeline state](../low-level-api/pipeline-state.md).
Затем вы можете привязать эффект как [состояние конвейера](../low-level-api/pipeline-state.md).

An effect also often defines a set of parameters. To set these, you need to [bind resources](../low-level-api/resources.md) before drawing.
Эффект также часто определяет набор параметров.  Чтобы установить их, вам нужно [связать ресурсы](../low-level-api/resources.md) перед рисованием.

## Shaders
## Шейдеры

Shaders are authored in the [Stride's shading language](shading-language/index.md), which is an extension of `HLSL`. They provide true composition of modular shaders via [inheritance](shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](shading-language/composition.md) and [automatic weaving of shader in-out attributes](shading-language/automatic-shader-stage-input-output.md).
Шейдеры создаются на [языке шейдеров Stride](shading-language/index.md), который является расширением `HLSL`.  Они обеспечивают настоящую композицию модульных шейдеров через [наследование](shading-language/shader-classes-mixins-and-inheritance.md), шейдерные [mixins](shading-language/composition.md) и [автоматическое вплетение шейдеров в  вне атрибутов](shading-language/automatic-shader-stage-input-output.md).

## Effects
## Последствия

[Effects](effect-language.md) in Stride use C#-like syntax to further combine shaders. They provide conditional composition of shaders to generate effect permutations.
[Эффекты](effect-language.md) в Stride используют синтаксис, подобный C#, для дальнейшего объединения шейдеров.  Они обеспечивают условную композицию шейдеров для создания перестановок эффектов.

As some platforms can't compile shaders at runtime (eg iOS, Android, etc), effect permutation files (`.sdeffectlog`) are used to enumerate all permutations ahead of time.
Поскольку некоторые платформы не могут компилировать шейдеры во время выполнения (например, iOS, Android и т. д.), файлы перестановок эффектов (`.sdeffectlog`) используются для предварительного перечисления всех перестановок.

## Target everything
## Нацельтесь на все

Stride shaders are converted automatically to the target graphics platform — either plain HLSL for Direct3D, `GLSL` for OpenGL, or `SPIR-V` for Vulkan platforms.
Шейдеры шага автоматически преобразуются в целевую графическую платформу — обычный HLSL для Direct3D, GLSL для OpenGL или SPIR-V для платформ Vulkan.

For mobile platforms, shaders are optimized by a GLSL optimizer to improve performance.
Для мобильных платформ шейдеры оптимизируются оптимизатором GLSL для повышения производительности.

## In this section
## В этой секции

* [Effect language](effect-language.md)
* [Язык эффектов] (язык эффектов.md)
* [Shading language](shading-language/index.md)
* [Язык затенения](shading-language/index.md)
    - [Shader classes, mixins and inheritance](shading-language/shader-classes-mixins-and-inheritance.md)
- [Шейдерные классы, примеси и наследование](shading-language/shader-classes-mixins-and-inheritance.md)
    - [Composition](shading-language/composition.md)
- [Композиция](shading-language/composition.md)
    - [Compile shaders](compile-shaders.md)
- [Скомпилировать шейдеры](compile-shaders.md)
    - [Templates](shading-language/templates.md)
- [Шаблоны](shading-language/templates.md)
    - [Shader stage input/output automatic management](shading-language/automatic-shader-stage-input-output.md)
- [Автоматическое управление вводом/выводом шейдерной стадии](shading-language/automatic-shader-stage-input-output.md)
* [Custom shaders](custom-shaders.md)
* [Пользовательские шейдеры] (custom-shaders.md)
