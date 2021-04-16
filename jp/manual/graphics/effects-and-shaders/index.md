# エフェクトとシェーダー
<!--
# Effects and shaders
-->

Stride はプログラム可能なシェーディングパイプラインを使用しています。[カスタムシェーダー](custom-shaders.md)を書いて @'Stride.Graphics.Effect' を作成し、描画に使用することができます。@'Stride.Rendering.EffectSystem' クラスは、エフェクトをロードする簡単な方法を提供します。
<!--
Stride uses a programmable shading pipeline. You can write [custom shaders](custom-shaders.md), create @'Stride.Graphics.Effect's from them, and use them for drawing. The @'Stride.Rendering.EffectSystem' class provides an easy way to load an effect.
-->

## エフェクトをロードする
<!--
## Load an effect
-->

次の通りです。

```cs
var myEffect = EffectSystem.LoadEffect("MyEffect").WaitForResult();
```

その後、エフェクトを[パイプライン ステート](../low-level-api/pipeline-state.md)としてバインドすることができます。
<!--
You can then bind the effect as [pipeline state](../low-level-api/pipeline-state.md).
-->

また、たいていのエフェクトにはいくつかのパラメーターが定義されています。これらのパラメーターを設定するには、描画の前に[リソース バインディング](../low-level-api/resources.md)を行う必要があります。
<!--
An effect also often defines a set of parameters. To set these, you need to [bind resources](../low-level-api/resources.md) before drawing.
-->

## シェーダー
<!--
## Shaders
-->

シェーダーは、`HLSL` を拡張した [Stride シェーディング言語](shading-language/index.md)で記述します。
[継承](shading-language/shader-classes-mixins-and-inheritance.md)、シェーダーの[ミックスイン](shading-language/composition.md)、[シェーダー入出力の自動取り込み](shading-language/automatic-shader-stage-input-output.md)などによる、モジュール式シェーダーの真のコンポジションが提供されます。
<!--
Shaders are authored in the [Stride's shading language](shading-language/index.md), which is an extension of `HLSL`. They provide true composition of modular shaders via [inheritance](shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](shading-language/composition.md) and [automatic weaving of shader in-out attributes](shading-language/automatic-shader-stage-input-output.md).
-->

## エフェクト
<!--
## Effects
-->

Stride の[エフェクト](effect-language.md)は、C# のような構文を使って、シェーダーをさらに組み合わせることができます。シェーダーの条件付きコンポジションを使ってエフェクトの順列を生成することができます。
<!--
[Effects](effect-language.md) in Stride use C#-like syntax to further combine shaders. They provide conditional composition of shaders to generate effect permutations.
-->

すべてのプラットフォームが実行時にシェーダーをコンパイルできるわけではないため（iOS や Androidなど）、エフェクト順列ファイル（`.sdeffectlog`）を使って事前にすべての序列を列挙します。
<!--
As some platforms can't compile shaders at runtime (eg iOS, Android, etc), effect permutation files (`.sdeffectlog`) are used to enumerate all permutations ahead of time.
-->

## すべてをターゲットにする
<!--
## Target everything
-->

Stride シェーダーは、Direct3D ではプレーン `HLSL`、OpenGL では `GLSL`、Vulkan では `SPIR-V` といったように、ターゲットのグラフィックスプラットフォームに合わせて自動的に変換されます。
<!--
Stride shaders are converted automatically to the target graphics platform — either plain HLSL for Direct3D, `GLSL` for OpenGL, or `SPIR-V` for Vulkan platforms.
-->

モバイルプラットフォームでは、GLSL オプティマイザーによってシェーダーが最適化され、パフォーマンスが向上します。
<!--
For mobile platforms, shaders are optimized by a GLSL optimizer to improve performance.
-->

## このセクションの内容
<!--
## In this section
-->

* [エフェクト言語](effect-language.md)
* [シェーディング言語](shading-language/index.md)
    - [シェーダークラス、ミックスイン、継承](shading-language/shader-classes-mixins-and-inheritance.md)
    - [コンポジション](shading-language/composition.md)
    - [シェーダーのコンパイル](compile-shaders.md)
    - [テンプレート](shading-language/templates.md)
    - [シェーダー ステージ入出力の自動管理](shading-language/automatic-shader-stage-input-output.md)
* [カスタム シェーダー](custom-shaders.md)