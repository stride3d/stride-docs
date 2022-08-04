# Graphics
# Графика

This section explains how to use Game Studio and the Stride API for graphics and rendering.
В этом разделе объясняется, как использовать Game Studio и Stride API для графики и рендеринга.

## Shaders
## Шейдеры

Shaders are authored in the [Stride's shading language](effects-and-shaders/shading-language/index.md), an extension of `HLSL`. They provide true composition of modular shaders through the use of [inheritance](effects-and-shaders/shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](effects-and-shaders/shading-language/composition.md), and [automatic weaving of shader in-out attributes](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md).
Шейдеры создаются на [языке шейдеров Stride](effects-and-shaders/shading-language/index.md), расширении HLSL.  Они обеспечивают настоящую композицию модульных шейдеров за счет использования [наследования](эффекты-и-шейдеры/язык-затенения/классы-шейдеров-примеси-и-наследование.md), шейдерных [примесей](эффекты-и-шейдеры/затенение  -language/composition.md) и [автоматическое переплетение входных и выходных атрибутов шейдера](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md).

## Effects
## Последствия

[Effects](effects-and-shaders/effect-language.md) in Stride use C#-like syntax to combine shaders. They provide conditional composition of shaders to generate effect permutations.
[Эффекты](effects-and-shaders/effect-language.md) в Stride используют синтаксис, подобный C#, для объединения шейдеров.  Они обеспечивают условную композицию шейдеров для создания перестановок эффектов.

## Target everything
## Нацельтесь на все

Stride shaders are converted automatically to the target graphics platform, either plain HLSL for Direct3D, `GLSL` for OpenGL, or `SPIR-V` for Vulkan platforms.
Шейдеры шага автоматически преобразуются в целевую графическую платформу: либо обычный HLSL для Direct3D, либо GLSL для OpenGL, либо SPIR-V для платформ Vulkan.

## Advanced graphics
## Расширенная графика

The graphics module provides a set of methods to display the game. Although Stride is available on multiple platforms, the whole system behaves like Direct3D 11 from the user perspective. You need a basic knowledge of the rendering pipeline to use it.
Графический модуль предоставляет набор методов для отображения игры.  Хотя Stride доступен на нескольких платформах, с точки зрения пользователя вся система ведет себя как Direct3D 11.  Для его использования необходимы базовые знания о конвейере рендеринга.

## In this section
## В этой секции

* [Cameras](cameras/index.md)
* [Камеры](cameras/index.md)
* [Materials](materials/index.md)
* [Материалы](материалы/index.md)
* [Textures](textures/index.md)
* [Текстуры](текстуры/index.md)
* [Lights and shadows](lights-and-shadows/index.md)
* [Свет и тени](lights-and-shadows/index.md)
* [Post effects](post-effects/index.md)
* [Постэффекты](post-effects/index.md)
* [Graphics compositor](graphics-compositor/index.md)
* [Композитор графики](graphics-compositor/index.md)
* [Effects and shaders](effects-and-shaders/index.md)
* [Эффекты и шейдеры](effects-and-shaders/index.md)
* [Low-level API](low-level-api/index.md)
* [Низкоуровневый API](low-level-api/index.md)
* [Rendering pipeline](rendering-pipeline/index.md)
* [Конвейер рендеринга](rendering-pipeline/index.md)
* [Sprite fonts](sprite-fonts.md)
* [Спрайтовые шрифты](sprite-fonts.md)
* [Voxel Cone Tracing GI](voxel-cone-tracing-gi.md)
* [Voxel Cone Tracing GI](voxel-cone-tracing-gi.md)
