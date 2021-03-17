# グラフィックス
<!--
# Graphics
-->

ここでは、Game Studio と Stride API を使ったグラフィックスとレンダリングについて説明します。
<!--
This section explains how to use Game Studio and the Stride API for graphics and rendering.
-->

## シェーダー
<!--
## Shaders
-->

シェーダーは、`HLSL` を拡張した [Stride シェーディング言語](effects-and-shaders/shading-language/index.md)で設計されています。[継承](effects-and-shaders/shading-language/shader-classes-mixins-and-inheritance.md)、シェーダーの[合成](effects-and-shaders/shading-language/composition.md)、[シェーダーの入出力属性の自動管理](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md)を使用することで、モジュラー式シェーダーの真の構図を提供します。
<!--
Shaders are authored in the [Stride's shading language](effects-and-shaders/shading-language/index.md), an extension of `HLSL`. They provide true composition of modular shaders through the use of [inheritance](effects-and-shaders/shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](effects-and-shaders/shading-language/composition.md), and [automatic weaving of shader in-out attributes](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md).
-->

## エフェクト
<!--
## Effects
-->

Stride の[エフェクト](effects-and-shaders/effect-language.md)では、C# のような構文を使ってシェーダーを組み合わせています。シェーダーの条件付き合成を行い、エフェクトの組み合わせを生成します。
<!--
[Effects](effects-and-shaders/effect-language.md) in Stride use C#-like syntax to combine shaders. They provide conditional composition of shaders to generate effect permutations.
-->

## あらゆるターゲット
<!--
## Target everything
-->

Stride のシェーダーは、Direct3D ではプレーン HLSL、OpenGL では `GLSL`、Vulkan では `SPIR-V` と、ターゲットとなるグラフィックスプラットフォームに合わせて自動的に変換されます。
<!--
Stride shaders are converted automatically to the target graphics platform, either plain HLSL for Direct3D, `GLSL` for OpenGL, or `SPIR-V` for Vulkan platforms.
-->

## 高度なグラフィックス
<!--
## Advanced graphics
-->

グラフィックスモジュールは、ゲームを表示するためのメソッドの一式を提供します。
Stride はマルチプラットフォームに対応していますが、ユーザーの視点から見ると、システム全体が Direct3D 11 であるかのように動作します。
Stride を使用するには、レンダリングパイプラインの基本的な知識が必要です。
<!--
The graphics module provides a set of methods to display the game. Although Stride is available on multiple platforms, the whole system behaves like Direct3D 11 from the user perspective. You need a basic knowledge of the rendering pipeline to use it.
-->

## このセクションの内容
<!--
## In this section
-->

* [カメラ](cameras/index.md)
* [マテリアル](materials/index.md)
* [テクスチャー](textures/index.md)
* [ライトとシャドウ](lights-and-shadows/index.md)
* [ポストエフェクト](post-effects/index.md)
* [グラフィックス コンポジター](graphics-compositor/index.md)
* [エフェクトとシェーダー](effects-and-shaders/index.md)
* [低レベル API](low-level-api/index.md)
* [レンダリング パイプライン](rendering-pipeline/index.md)
* [スプライト フォント](sprite-fonts.md)
* [ボクセルコーントレーシング GI](lights-and-shadows/voxel-cone-tracing-gi.md)

<!--
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
* [Voxel Cone Tracing GI](voxel-cone-tracing-gi.md)
-->
