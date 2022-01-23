# エフェクト言語
<!--
# Effect language
-->

## C&#35; でシェーダーを作成する
<!--
## Create shaders in C&#35;
-->

@'Stride.Shaders.ShaderSource' オブジェクトを使って、シェーダーを実行時に作成することができます。シェーダーには3つのタイプがあります。
<!--
You can create a shader at runtime with @'Stride.Shaders.ShaderSource' objects. Shaders come in three types:
-->

- @'Stride.Shaders.ShaderClassSource' は一意なシェーダークラスに対応します。
- @'Stride.Shaders.ShaderMixinSource' 複数の @'Stride.Shaders.ShaderSource' をミックスし、プリプロセッサの値を設定し、コンポジションを定義します。
- @'Stride.Shaders.ShaderArraySource' はコンポジションの配列として使用されます。

<!--
- @'Stride.Shaders.ShaderClassSource' correspond to a unique shader class
- @'Stride.Shaders.ShaderMixinSource' mix several @'Stride.Shaders.ShaderSource', set preprocessor values, define compositions
- @'Stride.Shaders.ShaderArraySource' are used for arrays of compositions
-->

この方法で、実行時にシェーダーを生成することができます。しかし、プラットフォームの多くは HLSL をサポートしておらず、実行時にシェーダーをコンパイルする機能がありません。さらに、この方法ではミックスインによる再利用性の恩恵を受けることができません。
<!--
This method produces shaders at runtime. However, many platforms don't support HLSL and have no ability to compile shaders at runtime. Additionally, the approach doesn't benefit from the reusability of mixins.
-->

## Stride エフェクト（SDFX）
<!--
## Stride Effects (SDFX)
-->

シェーダーの多くは、既存のシェーダーの変種や組み合わせです。例えば、影を落とすメッシュ、影を受けるメッシュ、スキニングが必要なメッシュなどがあります。コードを再利用するには、条件に応じて使用する部分を選択するのがよいでしょう（条件の例：「スキニングが必要」）。この問題を解決するには、「ウーバー（uber; 優れた）シェーダー」と呼ばれる、プリプロセッサのパラメータセットで設定されたモノリシックなシェーダーがよく使われます。
<!--
Many shaders are variations or combinations of pre-existing shaders. For example, some meshes cast shadows, others receive them, and others need skinning. To reuse code, it's a good idea to select which parts to use through conditions (eg "Skinning required"). This is often solved by "uber shaders": monolithic shaders configured by a set of preprocessor parameters.
-->

Stride では、拡張性と再利用性を念頭に置きつつ、同様の制御を行っています。シェーダークラスで定義されたシンプルなコードブロックは、シェーダーミキサーによって混ぜ合わせることができます。このプロセスでは、より複雑なロジックを Stride エフェクトファイル（*.sdfx）に記述し、使用することができます。
<!--
Stride offers the same kind of control, keeping extensibility and reusability in mind. The simple code blocks defined by shader classes can be mixed together by a shader mixer. This process can use more complex logic, described in Stride Effect (*.sdfx) files.
-->

### 一般的な文法
<!--
### General syntax
-->

SDFXファイル（.sdfx）は、シェーダーの組み合わせを生成するために使われる小さなプログラムです。一連のパラメータ（コレクションのキーと値）を受け取り、コンパイル可能な `ShaderMixinSource` を生成します。
<!--
An .sdfx file is a small program used to generate shader permutations. It takes a set of parameters (key and value in a collection) and produces a `ShaderMixinSource` ready to be compiled.
-->

Stride エフェクトファイル（.sdfx）の例：
<!--
An example .sdfx file:
-->

```cs
using Stride.Effects.Data;

namespace StrideEffects
{
	params MyParameters
	{
		bool EnableSpecular = true;
	};
	
	effect BasicEffect
	{
		using params MaterialParameters;
		using params MyParameters;

		mixin ShaderBase;
		mixin TransformationWAndVP;
		mixin NormalVSStream;
		mixin PositionVSStream;
		mixin BRDFDiffuseBase;
		mixin BRDFSpecularBase;
		mixin LightMultiDirectionalShadingPerPixel<2>;
		mixin TransparentShading;
		mixin DiscardTransparent;

		if (MaterialParameters.AlbedoDiffuse != null)
		{
			mixin compose DiffuseColor = ComputeBRDFDiffuseLambert;
			mixin compose albedoDiffuse = MaterialParameters.AlbedoDiffuse;
		}

		if (MaterialParameters.AlbedoSpecular != null)
		{
			mixin compose SpecularColor = ComputeBRDFColorSpecularBlinnPhong;
			mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
		}
	};
}
```

### ミックスインを追加する
<!--
### Add a mixin
-->

ミックスインを追加するには、`mixin <mixin_name>` を使用します。
<!--
To add a mixin, use `mixin <mixin_name>`.
-->

### パラメーターを使う
<!--
### Use parameters
-->

構文は C# に似ていますが、以下のルールが追加されています。
<!--
The syntax is similar to C#. The following rules are added:
-->

- パラメーターキーを使用する場合は、`params <shader_name>` を使って追加します。そうしないと、キーは変数として扱われます。

- キーに隠れている値がどこでチェックされるかを記載する必要はありません。ただ、キーを使うだけです。

<!--
- When you use parameter keys, add them using `params <shader_name>`. If you don't, keys are treated as variables.

- You don't need to tell the program where to check the values behind the keys. Just use the key.
-->

```cs
using params MaterialParameters;
 
if (MaterialParameters.AlbedoDiffuse != null)
{
	mixin MaterialParameters.AlbedoDiffuse;
}
```

パラメータは、変数のように扱えます。パラメーターの値を読み書きしたり、値を比較したり、テンプレートパラメーターを設定することができます。パラメーターの中にはミックスインを格納しているものもあるので、コンポジションや継承にも利用できます。
<!--
The parameters behave like any variable. You can read and write their value, compare their values, and set template parameters. Since some parameters store mixins, they can be used for composition and inheritance, too.
-->

### カスタムパラメーター
<!--
### Custom parameters
-->

構造体定義構文を使って、独自のパラメータセットを作成することができます。
<!--
You can create your own set of parameters using a structure definition syntax. 
-->

>[!Note]
>たとえ SDFX ファイルの中で定義されているとしても、それを使う際には `using` の記述を忘れてはいけません。

<!--
>[!Note]
>Even if they're defined in the XKFX file, don't forget the `using` statement when you want to use them.
-->

```cs
params MyParameters
{
	bool EnableSpecular = true; // true is the default value
}
```

### コンポジション
<!--
### Compositions
-->

コンポジションを追加するには、以下のような構文でコンポジション変数をミックスインに割り当てます。
<!--
To add a composition, assign the composition variable to your mixin with the syntax below.
-->

```cs
// albedoSpecular は，ミックスイン内のコンポジション変数の名前です。
// albedoSpecular is the name of the composition variable in the mixin
mixin compose albedoSpecular = ComputeColorTexture;
 
or
 
mixin compose albedoSpecular = MaterialParameters.AlbedoSpecular;
```

### 部分エフェクト
<!--
### Partial effects
-->

コードをいくつかのサブミックスインに分割して他の場所で再利用するには、次の構文を使用します。
<!--
You can also break the code into sub-mixins to reuse elsewhere with the syntax below.
-->

```cs
partial effect MyPartialEffect
{
	mixin ComputeColorMultiply;
	mixin compose color1 = ComputeColorStream;
	mixin compose color2 = ComputeColorFixed;
}
 
// to use it
mixin MyPartialEffect;
mixin compose myComposition = MyPartialEffect;
```

`MyPartialEffect` ミックスインは、コード内の他のミックスインと同様に使用できます。
<!--
You can use the `MyPartialEffect` mixin like any other mixin in the code.
-->

## 関連項目
<!--
## See also
-->

* [シェーディング言語](shading-language/index.md)

<!--
* [Shading language](shading-language/index.md)
-->
