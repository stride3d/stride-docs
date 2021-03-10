# シェーダー ステージ
<!--
# Shader stages
-->

シェーダーステージ関数にはあらかじめ定められた名前がついているので、変更しないことをお勧めします。
<!--
The function for each stage has a predefined name, so we recommend you don't change it.
-->

- `HSMain`：ハルシェーダー
- `HSConstantMain`： パッチ定数関数
- `DSMain`：ドメインシェーダー
- `VSMain`：頂点シェーダー（引数はありません）
- `GSMain`：ジオメトリシェーダー
- `PSMain`：ピクセルシェーダー（引数はありません）
- `CSMain`：コンピュートシェーダー（引数はありません）

<!--
- `HSMain` for hull shader
- `HSConstantMain` for patch constant function
- `DSMain` for domain shader
- `VSMain` for vertex shader (takes no arguments)
- `GSMain` for geometry shader
- `PSMain` for pixel shader (takes no arguments)
- `CSMain` for compute shader (takes no arguments)
-->

これらの関数の型はすべて void です。
<!--
These are all void methods.
-->

ジオメトリシェーダーとテッセレーションシェーダーは、入力と出力のために、何らかの構造体を定義する必要があります。しかし、Stride のシェーダーは一般的なものなので、どのような構造になるかを事前に知ることはできません。そのため、これらのシェーダーでは、最終的なシェーダーに合わせて自動的に生成される `Input` 構造体と `Output` 構造体を使います。
<!--
The geometry and tessellation shaders need some kind of predefined structure as input and output. However, since Stride shaders are generic, it's impossible to know beforehand what the structure will be. As a result, these shaders use `Input` and `Output` structures that are automatically generated to fit the final shader.
-->

## 頂点シェーダー
<!--
## Vertex shader
-->

頂点シェーダーは、`SV_Position` セマンティックを使って変数を設定します。
`ShaderBase` では、`ShadingPosition` がそれに当たります。
<!--
A vertex shader has to set the variable with the semantic `SV_Position`. In `ShaderBase`, it's `ShadingPosition`.
-->

例：
<!--
For example:
-->

```cs
override stage void VSMain()
{
	...
	streams.ShadingPosition = ...;
	...
}
```

## ピクセルシェーダー
<!--
## Pixel shader
-->

ピクセルシェーダーは、`SV_Target` セマンティックを使って変数を設定します。
`ShaderBase` では、`ColorTarget` がそれに当たります。
<!--
A pixel shader has to set the variable with the semantic `SV_Target`. In `ShaderBase`, it is `ColorTarget`.
-->

例：
<!--
For example:
-->

```cs
override stage void PSMain()
{
	...
	streams.ColorTarget = ...;
	...
}
```

## ジオメトリシェーダー
<!--
## Geometry shader
-->

ジオメトリシェーダーの例：
<!--
An example of geometry shader:
-->

```cs
[maxvertexcount(1)]
void GSMain(triangle Input input[3], inout PointStream<Output> pointStream)
{
	...
	// ストリームオブジェクトを充填します。
	// fill the streams object
	streams = input[0];
 	...
 
	// 常に ストリームを追加します。
	// always append streams
	pointStream.Append(streams);
	...
}
```

`Input` はメソッド本体で使うことができます。これはストリームオブジェクトと同じように動作し、同じメンバーを持っています。
<!--
`Input` can be used in the method body. It behaves like the streams object and contains the same members.
-->

`Output` はメソッドの宣言でのみ使うことができます。ストリームオブジェクトをジオメトリシェーダーの出力ストリームに追加する必要があります。
<!--
`Output` is only used in the declaration of the method. You should append the streams object to your geometry shader output stream.
-->

## テッセレーションシェーダー
<!--
## Tessellation shader
-->

テッセレーションシェーダーの例：
<!--
An example of a tessellation shader:
-->

```cs
[domain("tri")]
[partitioning("fractional_odd")]
[outputtopology("triangle_cw")]
[outputcontrolpoints(3)]
[patchconstantfunc("HSConstantMain")]
[maxtessfactor(48.0)]
void HSMain(InputPatch<Input, 3> input, out Output output, uint uCPID : SV_OutputControlPointID)
{
	...
	output = streams;
}
 
void HSConstantMain(InputPatch<Input, 3> input, const OutputPatch<Input2, 3> output, out Constants constants)
{
	...
	output = streams;
	...
}
 
[domain("tri")]
void DSMain(const OutputPatch<Input, 3> input, out Output output, in Constants constants, float3 f3BarycentricCoords : SV_DomainLocation)
{
	...
	output = streams;
	...
}
```

`Input` と `Input2` はどちらも、ストリームのように振る舞います。
<!--
`Input` and `Input2` both behave like streams.
-->

>[!Note]
>ステージの最後で、`output` を `streams` に割り当てることを忘れないでください。
<!--
>[!Note]
>Don't forget to assign `output` to `streams` at the end of your stage.
-->

## コンピュートシェーダー
<!--
## Compute shader
-->

コンピュートシェーダーの例：
<!--
An example of a compute shader:
-->

```cs
[numthreads(2, 3, 5)]
void CSMain()
{
	...
}
```

`ComputeShaderBase` を継承して、`Compute` メソッドをオーバーライドすることができます。
<!--
You can inherit from `ComputeShaderBase` and override the `Compute` method.
-->

## 関連項目
<!--
## See also
-->

* [エフェクト言語](../effect-language.md)
* [シェーディング言語](index.md)
    - [シェーダークラス、ミックスイン、継承](shader-classes-mixins-and-inheritance.md)
    - [コンポジション](composition.md)
    - [テンプレート](templates.md)
    - [シェーダー ステージ入出力の自動管理](automatic-shader-stage-input-output.md)

<!--
* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
-->
