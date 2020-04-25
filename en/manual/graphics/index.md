# Graphics

This section explains how to use Game Studio and the Stride API for graphics and rendering.

## Shaders

Shaders are authored in the [Stride's shading language](effects-and-shaders/shading-language/index.md), an extension of `HLSL`. They provide true composition of modular shaders through the use of [inheritance](effects-and-shaders/shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](effects-and-shaders/shading-language/composition.md), and [automatic weaving of shader in-out attributes](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md).

## Effects

[Effects](effects-and-shaders/effect-language.md) in Stride use C#-like syntax to combine shaders. They provide conditional composition of shaders to generate effect permutations.

## Target everything

Stride shaders are converted automatically to the target graphics platform, either plain HLSL for Direct3D, `GLSL` for OpenGL, or `SPIR-V` for Vulkan platforms.

## Advanced graphics

The graphics module provides a set of methods to display the game. Although Stride is available on multiple platforms, the whole system behaves like Direct3D 11 from the user perspective. You need a basic knowledge of the rendering pipeline to use it.

## In this section

* [Cameras](cameras/index.md)
* [Materials](materials/index.md)
* [Textures](textures/index.md)
* [Lights and shadows](lights-and-shadows/index.md)
* [Post effects](post-effects/index.md)
* [Graphics compositor](graphics-compositor/index.md)
* [Effects and shaders](effects-and-shaders/index.md)
* [Low-level API](low-level-api/index.md)
* [Rendering pipeline](rendering-pipeline/index.md)
* [Sprite fonts](sprite-fonts.md)