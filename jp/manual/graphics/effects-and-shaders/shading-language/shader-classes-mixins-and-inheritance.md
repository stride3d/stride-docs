# シェーダークラス、ミックスイン、継承
<!--
# Shader classes, mixins and inheritance
-->

Stride シェーディング言語（SDSL）は、HLSL を拡張し、より C# の構文や概念に近いものになっています。この言語はオブジェクト指向です。
<!--
Stride Shading Language (SDSL) is an extension of HLSL, which makes it closer to C# syntax and concepts. The language is object-oriented:
-->

- シェーダークラスはコードの基礎となるものです。
- シェーダークラスにはメソッドとメンバーが含まれます。
- シェーダークラスは継承可能で、メソッドはオーバーライド可能です。
- メンバーの型をシェーダークラスにすることができます。

<!--
- shader classes are the foundation of the code
- shader classes contain methods and members
- shader classes can be inherited, methods can be overridden
- member types can be shader classes
-->

SDSL では、独自の方法で多重継承を実現しています。継承は[ミックスイン](https://ja.wikipedia.org/wiki/Mixin)で行われるので、継承の順番が重要になります。
<!--
SDSL uses an original way to handle multiple inheritance. Inheritance is performed through mixins, so the order of inheritance is crucial:
-->

- 継承の順番によってメソッドの実際の実装を定義します（最後のオーバーライド）。
- ミックスインが継承の中で何度も現れた場合は、最初に現れたものだけを考慮します（メンバーやメソッドも考慮します）。
- メソッドの直前の実装を呼び出すには、`base.<メソッド名>(<引数>)` を使います。

<!--
- the order of inheritance defines the actual implementation of a method (the last override)
- if a mixin appears several times in the inheritance, only the first occurrence is taken into account (as well as its members and methods)
- to can call the previous implementation of a method, use `base.<method name>(<arguments>)`
-->

## キーワード
<!--
## Keywords
-->

SDSL では、HLSL のキーワードに新たなキーワードを追加しています。
<!--
SDSL uses the keywords as HLSL, and adds new ones:
-->

- `stage`: メソッドとメンバーのキーワードです。このキーワードは、メソッドやメンバが一度だけ定義され、コンポジション内で同一であることを確認します。
- `stream`: メンバーのキーワードです。このメンバーは、シェーダーのすべてのステージでアクセス可能になります。詳細については、[シェーダーステージ入出力の自動管理](automatic-shader-stage-input-output.md)を参照してください。
- `streams`: シェーダーのいくつかのステージにまたがって必要とされる変数を格納するグローバル構造体のようなものです。詳細については、[シェーダーステージ入出力の自動管理](automatic-shader-stage-input-output.md)を参照してください。
- `override`: メソッドのキーワードです。このキーワードがない場合、コンパイラはエラーを返します。
- `abstract`: メソッド宣言の前で使用されます（メソッドの本体はありません）。
- `clone`: メソッドのキーワードです。シェーダークラスの継承ツリーにこのキーワードを持つメソッドが複数回現れている場合、継承の各レベルでメソッドのインスタンスを、1つではなく複数作成することを強制します。詳細については、[コンポジション](composition.md)を参照してください。
- `Input`: ジオメトリシェーダーとテッセレーションシェーダーのためのキーワードです。詳細については、[シェーダー ステージ](shader-stages.md)を参照してください。
- `Output`: ジオメトリシェーダーとテッセレーションシェーダーのためのキーワードです。詳細については、[シェーダー ステージ](shader-stages.md)を参照してください。
- `Input2`: テッセレーションシェーダーのためのキーワードです。詳細については、[シェーダー ステージ](shader-stages.md).
- `Constants`: テッセレーションシェーダーのためのキーワードです。詳細については、[シェーダー ステージ](shader-stages.md).

<!--
- `stage`: method and member keyword. This keyword makes sure the method or member is only defined once and is the same in the compositions.
- `stream`: member keyword. The member is accessible at every stage of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `streams`: sort of global structure storing variables needed across several stages of the shader. For more information, see [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `override`: method keyword. If this keyword is missing, the compilation returns an error.
- `abstract`: used in front of a method declaration (without a body).
- `clone`: method keyword. When a method appears several times in the inheritance tree of a shader class, this keyword forces the creation of multiple instances of the method at each level of the inheritance instead of one. For more information, see [Composition](composition.md).
- `Input`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Output`: for geometry and tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Input2`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).
- `Constants`: for tessellation shaders. For more information, see [Shader stages](shader-stages.md).
-->

## 抽象メソッド（abstract）
<!--
## Abstract methods
-->

SDSL では、抽象メソッドが利用できます。抽象メソッドには `abstract` キーワードを付ける必要があります。抽象メソッドは、実装しなくても、シェーダークラスから継承することができます。この場合、コンパイラはシンプルで無害な警告を出すことでしょう。ただし、コンパイルエラーを防ぐためには、最終的なシェーダーでそれを実装しなければなりません。
<!--
Abstract methods are available in SDSL. They should be prefixed with the `abstract` keyword. You can inherit from a shader class with abstract methods without having to implement them; the compiler will simply produce a harmless warning. However, you should implement it in your final shader to prevent a compilation error.
-->

## アノテーション
<!--
## Annotations
-->

HLSL と同様に、SDSL でもアノテーションが利用できます。最も役立つものをいくつか挙げます。
<!--
Like HLSL, annotations are available in SDSL. Some of the most useful ones are:
-->

- `[Color]`：float4 変数に付けます。このエフェクトパラメータのキーの型は、`Vector4` ではなく `Color4` になります。また、この変数を色として扱うよう Game Studio に指示することで、Game Studio 上で編集できるようになります。
- `[Link(...)]`：値を設定するために使用するエフェクトパラメータのキーを指定します。ただし、独立したデフォルトのキーが作成されます。
- `[Map(...)]`：値を設定するために使用するエフェクトパラメータのキーを指定します。新しいパラメーターキーは作成されません。
- `[RenameLink]`：エフェクトパラメータのキーの作成を回避します。`[Link()]` と一緒に使ってください。

<!--
- `[Color]` for float4 variables. The ParameterKey will have the type `Color4` instead of `Vector4`. It also specifies to Game Studio that this variable should be treated as a color, so you can edit it in Game Studio.
- `[Link(...)]` specifies which ParameterKey to use to set this value. However, an independent default key is still created.
- `[Map(...)]` specifies which ParameterKey to use to set this value. No new ParameterKey is created.
- `[RenameLink]` prevents the creation of a ParameterKey. It should be used with `[Link()]`.
-->

### サンプルコード：アノテーション
<!--
### Example code: annotations
-->

```cs
shader BaseShader
{
	[Color] float4 myColor;
 
	[Link("ProjectKeys.MyTextureKey")]
	[RenameLink]
	Texture2D texture;
 
	[Map("Texturing.Texture0")] Texture2D defaultTexture;
};
```

## サンプルコード：継承
<!--
## Example code: inheritance
-->

```cs
shader BaseInterface
{
	abstract float Compute();
};
 
shader BaseShader : BaseInterface
{
	float Compute()
	{
		return 1.0f;
	}
};
 
shader ShaderA : BaseShader
{
	override void Compute()
	{
		return 2.0f;
	}
};
 
shader ShaderB : BaseShader
{
	override void Compute()
	{
		float prevValue = base.Compute();
		return (5.0f + prevValue);
	}
};
```

### サンプルコード： 継承順序の重要性
<!--
### Example code: the importance of inheritance order
-->

`ShaderA` と `ShaderB` の継承順序を変えるとどうなるかに注目してください。
<!--
Notice what happens when we change the inheritance order between `ShaderA` and `ShaderB`.
-->

```cs
shader MixAB : ShaderA, ShaderB
{
};
 
shader MixBA : ShaderB, ShaderA
{
};
 
// 結果コード（イメージ表現）
// Resulting code (representation)

shader MixAB : BaseInterface, BaseShader, ShaderA, ShaderB
{
	float Compute()
	{
		// BaseShader から取得
		// code from BaseShader
		float v0 = 1.0f;
 
		// ShaderA から取得
		// code from ShaderA
		float v1 = 2.0f;
 
		// ShaderB から取得
		// code from ShaderB
		float prevValue = v1;
		float v2 = 5.0f + prevValue;
 
		return v2; // = 7.0f
	}
};

shader MixBA : BaseInterface, BaseShader, ShaderA, ShaderB
{
	float Compute()
	{
		// BaseShader から取得
		// code from BaseShader
		float v0 = 1.0f;

		// ShaderB から取得
		// code from ShaderB
		float prevValue = v0;
		float v1 = 5.0f + prevValue;
		
		// ShaderA から取得
		// code from ShaderA
		float v2 = 2.0f;

		return v2; // = 2.0f
	}
};
```

## 静的呼び出し
<!--
## Static calls
-->

シェーダーを継承せずに、そのシェーダーの変数を使ったり、メソッドを呼び出したりすることもできます。これを行うには、`<shader_name>.<変数またはメソッド名>`を使用します。これは静的呼び出しと同じように動作します。
<!--
You can also use a variable or call a method from a shader without having to inherit from it. To do this, use `<shader_name>.<variable or method_name>`. It behaves the same way as a static call. 
-->

シェーダークラスの変数を使うメソッドを静的に呼び出すと、シェーダーはコンパイルされないということに注意してください。これはシェーダーの一部だけを使用するのに便利な方法ですが、最適化ではありません。シェーダーコンパイラは、すでに不要な変数を自動的に削除しています。
<!--
Note that if you statically call a method that uses shader class variables, the shader won't compile. This is a convenient way to only use a part of a shader, but this isn't an optimization. The shader compiler already automatically removes any unnecessary variables.
-->

### サンプルコード：静的呼び出し
<!--
### Code example: static calls
-->

```cs
shader StaticClass
{
	float StaticValue;
	float StaticMethod(float a)
	{
		return 2.0f * a;
	}

	// このメソッドは a を使う
	// this method uses a
	float NonStaticMethod()
	{
		return 2.0f * StaticValue;
	}
};

// このシェーダークラスは問題ありません。
// this shader class is fine
shader CorrectStaticCallClass
{
	float Compute()
	{
		return StaticClass.StaticValue * StaticMethod(5.0f);
	}
};

// 呼び出しが静的でないため、このシェーダークラスはコンパイルされません。
// this shader class won't compile since the call is not static
shader IncorrectStaticCallClass 
{
	float Compute()
	{
		return StaticClass.NonStaticMethod();
	}
};
 
// 修正方法のひとつ
// one way to fix this
shader IncorrectStaticCallClassFixed : StaticClass
{
	float Compute()
	{
		return NonStaticMethod();
	}
};
```

## 関連項目
<!--
## See also
-->

* [エフェクト言語](../effect-language.md)
* [シェーディング言語](index.md)
    - [コンポジション](composition.md)
    - [テンプレート](templates.md)
    - [シェーダー ステージ入出力の自動管理](automatic-shader-stage-input-output.md)
	- [シェーダー ステージ](shader-stages.md)

<!--
* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Composition](composition.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)
-->