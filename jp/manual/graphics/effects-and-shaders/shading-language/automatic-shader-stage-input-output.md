# シェーダーステージ入出力の自動管理
<!--
# Automatic shader stage input/output
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

HLSL シェーダーを書く際には、頂点属性を正確に定義し、最終シェーダーのステージに慎重に渡す必要があります。
<!--
When you write a HLSL shader, you have to precisely define your vertex attributes and carefully pass them across the stage of your final shader.
-->

ここでは、頂点の色を使用するシンプルな HLSL シェーダーの例を示します。
<!--
Here's an example of a simple HLSL shader that uses the color from the vertex.
-->

```cs
struct VS_IN
{
	float4 pos : POSITION;
	float4 col : COLOR;
};

struct PS_IN
{
	float4 pos : SV_POSITION;
	float4 col : COLOR;
};

PS_IN VS( VS_IN input )
{
	PS_IN output = (PS_IN)0;

	output.pos = input.pos;
	output.col = input.col;

	return output;
}

float4 PS( PS_IN input ) : SV_Target
{
	return input.col;
}

technique10 Render
{
	pass P0
	{
		SetGeometryShader( 0 );
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
```

モデルに法線を追加し、法線に応じて結果の色を変えたくなったとします。色を計算するコードを修正し、頂点シェーダーからピクセルシェーダーに属性を渡すために中間構造の調整をしなければなりません。また、使用するセマンティクスにも注意しなければなりません。
<!--
Imagine you want to add a normal to your model and modify the resulting color accordingly. You have to modify the code that computes the color and adjust the intermediate structures to pass the attribute from the vertex to the pixel shader. You also have to be careful of the semantics you use.
-->

**コード：** 修正後の HLSL シェーダー
<!--
**Code:** Modified HLSL shader
-->

```cs
struct VS_IN
{
	float4 pos : POSITION;
	float4 col : COLOR;
	float3 normal : NORMAL;
};

struct PS_IN
{
	float4 pos : SV_POSITION;
	float4 col : COLOR;
	float3 normal : TEXCOORD0;
};

PS_IN VS( VS_IN input )
{
	PS_IN output = (PS_IN)0;

	output.pos = input.pos;
	output.col = input.col;
	output.normal = input.normal;

	return output;
}

float4 PS( PS_IN input ) : SV_Target
{
	return input.col * max(input.normal.z, 0.0);
}

technique10 Render
{
	pass P0
	{
		SetGeometryShader( 0 );
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
```

この例はシンプルです。実際のプロジェクトにはもっとたくさんのシェーダーがあるので、1回の変更でたくさんのシェーダーや構造などを書き換えることになるかもしれません。
<!--
This example is simple. Real projects have many more shaders, so a single change might mean rewriting lots of shaders, structures, and so on.
-->

図式的には、新しい属性を追加する際には、頂点入力から、属性を使用する最後のステージまでのすべてのステージと中間構造を修正する必要があります。
<!--
Schematically, adding a new attribute requires you to update all the stages and intermediate structures from the vertex input to the last stage you want to use the attribute in.
-->

![media/hlsl_add_normal.png](media/hlsl_add_normal.png) 

## SDSL (Stride Shading Language)
<!--
## SDSL
-->

SDSL には、シェーダーのさまざまなステージで横断的にパラメーターを渡す便利な方法があります。ストリーム（stream）変数の概要は以下の通りです。
<!--
SDSL has a convenient way to pass parameters across the different stages of your shader. The stream variables are:
-->

- 変数です。
- 他のシェーダーメンバと同じように定義され、`stream` というキーワードを持ちます。
- stream プレフィックスと一緒に使用します（省略するとコンパイルエラーになります）。ストリームが曖昧な（同じ名前である）場合は、変数の前にシェーダー名を指定する必要があります（例: `streams.<my_shader>.<my_variable>`）。

<!--
- variables
- defined like any shader member, with the stream keyword
- used with the stream prefix (omitting it results in a compilation error). When the stream is ambiguous (same name), you should provide the shader name in front of the variable (ie `streams.<my_shader>.<my_variable>`)
-->

ストリームは、属性、変化（varying）、出力を1つの概念にまとめています。
<!--
Streams regroup the concepts of attributes, varyings and outputs in a single concept.
-->

- 属性とは、頂点シェーダーで書き込まれる前に読み込まれるストリームのことです。
- 変化とは、シェーダーステージ全体で横断的に存在するストリームのことです。
- 出力とは、読み込まれる前に割り当てられるストリームのことです。

<!--
- An attribute is a stream read in a vertex shader before being written to.
- A varying is a stream present across shader stages.
- An output is a stream assigned before being read.
-->

ストリームは、関数のパラメーターとして指定しなくてもどこからでもアクセスできるグローバルオブジェクトだと考えてください。
<!--
Think of streams as global objects that you can access everywhere without specifying as a parameter of your functions.
-->

>[!Note]
>これらの変数のセマンティックを作成する必要はありません。コンパイラが自動的に作成します。ただし、**同じセマンティックを共有する変数は最後のシェーダーでマージされる**ことに注意してください。この仕様は、ストリーム変数を宣言したシェーダーを継承せずに、ローカルで使用したい場合に便利です。

<!--
>[!Note]
>You don't have to create a semantic for these variables; the compiler creates them automatically. However, keep in mind that **the variables sharing the same semantic will be merged in the final shader**. This behavior can be useful when you want to use a stream variable locally without inheriting from the shader where it was declared.
-->

ストリームを宣言した後は、シェーダーのどの段階からでもアクセスすることができます。シェーダーコンパイラがすべてを処理してくれます。ストリーム変数は、他の変数と同じように、呼び出し元のコード（つまり継承階層の中）から見えるようにする必要があります。
<!--
After you declare a stream, you can access it at any stage of your shader. The shader compiler takes care of everything. The variables just have to be visible from the calling code (ie in the inheritance hierarchy) like any other variable.
-->

**コード：** ストリームの定義と使用
<!--
**Code:** Stream definition and use:
-->

```cs
shader BaseShader
{
	stream float3 myVar;
 
	float3 Compute()
	{
		return streams.myVar;
	}
};
```

**コード：** ストリームの仕様
<!--
**Code:** Stream specification
-->

```cs
shader StreamShader
{
	stream float3 myVar;
};

shader ShaderA : BaseShader, StreamShader
{
	float3 Test()
	{
		return streams.BaseShader.myVar + streams.StreamShader.myVar;
	}
}
```

### SDSL シェーダーの例
<!--
### Example of SDSL shader
-->

最初の例と同じ HLSL シェーダーを、SDSL で見てみましょう。
<!--
Let's look at the same HLSL shader as the first example but in SDSL.
-->

**コード：** SDSL でのシェーダー
<!--
**Code:** Same shader in SDSL
-->

```cs
shader MyShader : ShaderBase
{
	stream float4 pos : POSITION;
	stream float4 col : COLOR;

	override void VSMain()
	{
		streams.ShadingPosition = streams.pos;
	}

	override void PSMain()
	{
		streams.ColorTarget = streams.col;
	}
};
```

では、法線の計算を追加してみましょう。
<!--
Now let's add the normal computation.
-->

**コード：** 修正後の SDSL シェーダー
<!--
**Code:** Modified shader in SDSL
-->

```cs
shader MyShader : ShaderBase
{
	stream float4 pos : POSITION;
	stream float4 col : COLOR;
	stream float3 normal : NORMAL;

	override void VSMain()
	{
		streams.ShadingPosition = streams.pos;
	}

	override void PSMain()
	{
		streams.ColorTarget = streams.col * max(streams.normal.z, 0.0);
	}
};
```

SDSL では、新しい属性の追加は、ストリームのプールに追加して必要な場所で使用するだけという簡単さです。
<!--
In SDSL, adding a new attribute is as simple as adding it to the pool of streams and using it where you want.
-->

![media/sdsl_add_normal.png](media/sdsl_add_normal.png)

## 関連項目
<!--
## See also
-->

* [エフェクト言語](../effect-language.md)
* [シェーディング言語](index.md)
    - [シェーダークラス、ミックスイン、継承](shader-classes-mixins-and-inheritance.md)
    - [コンポジション](composition.md)
    - [テンプレート](templates.md)
	- [シェーダー ステージ](shader-stages.md)

<!--
* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
	- [Shader stages](shader-stages.md)
-->
