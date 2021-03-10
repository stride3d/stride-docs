# コンポジション
<!--
# Composition
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>
-->

継承システムに加えて、SDSL は**コンポジション（composition）** の概念を導入しています。コンポジションとは、別のシェーダークラスを型とするメンバーのことです。変数と同じように定義されます。
<!--
In addition to the inheritance system, SDSL introduces the concept of **composition**. A composition is a member whose type is another shader class. It's defined the same way as variables.
-->

希望するシェーダークラスのインスタンス、または希望するシェーダークラスを継承したシェーダークラスのインスタンスを使って、構成することができます。
<!--
You can compose with an instance of the desired shader class or an instance of a shader class that inherits from the desired one.
-->

## サンプルコード
<!--
## Example code
-->

```cs
shader CompositionBase
{
	float4 Compute()
	{
		return float4(0.0);
	}
};
 
shader CompositionShaderA : CompositionBase
{
	float4 myColor;
 
	override float4 Compute()
	{
		return myColor;
	}
};
 
shader CompositionShaderB : CompositionBase
{
	float4 myColor;

	override float4 Compute()
	{
		return 0.5 * myColor;
	}
};
 
shader BaseShader
{
	CompositionBase Comp0;
	CompositionBase Comp1;
 
	float4 GetColor()
	{
		return Comp0.Compute() + Comp1.Compute();
	}
};
```

コンポジションは、それ自身のコンテキストでコンパイルされます。これは、非ステージ変数はコンポジションの内部でのみアクセス可能であることを意味しています。コンポジションの中にコンポジションを持つことも可能です。
<!--
The compositions are compiled in their own context, meaning that the non-stage variables are only accessible within the composition. It's also possible to have compositions inside compositions.
-->

## サンプルコード：ルートコンテキストにアクセスする
<!--
## Example code: access root context
-->

ルートのコンパイルコンテキストにアクセスしたい場合は、次の形式を使用します。
<!--
If you want to access the root compilation context, you can use the following format:
-->

```cs
shader CompositionShaderC : CompositionBase
{
	BaseShader rootShader = stage;
 
	float4 GetColor()
	{
		return rootShader.GetColor();
	}
};
```

これは、`CompositionShaderC` で `BaseShader` がルートコンテキストで利用可能であることを期待しているため、エラーになりやすい書き方です。
<!--
This is error-prone, since `CompositionShaderC` expects `BaseShader` to be available in the root context.
-->

## サンプルコード：コンポジションの配列
<!--
## Example code: array of compositions
-->

値の配列と同じ方法で、コンポジションの配列を作成することもできます。コンポジションがいくつあるかを事前に知る方法がないので、`foreach` 文を使って反復処理を行う必要があります。
<!--
You can also create an array of compositions the same way you use an array of values. Since there's no way to know beforehand how many compositions there are, you should iterate using a `foreach` statement.
-->

```cs
shader BaseShaderArray
{
	CompositionBase Comps[];
	
	float4 GetColor()
	{
		float4 resultColor = float4(0.0);
 
		foreach (var comp in Comps)
		{
			resultColor += comp.Compute();
		}
 
		return resultColor;
	}
};
```

## サンプルコード：ステージ（stage）の振る舞い
<!--
## Example code: stage behavior
-->

`stage` キーワードの動作は単純です。変数やメソッドのインスタンスは1つだけ生成されます。
<!--
The behavior of the `stage` keyword is straightforward: only one instance of the variable or method is produced.
-->

```cs
shader BaseShader
{
	stage float BaseStageValue;
	float NonStageValue;
};
 
shader TestShader : BaseShader
{
	BaseShader comp0;
	BaseShader comp1;
};
 
// resulting shader (representation)
shader TestShader
{
	float BaseStageValue;
	float NonStageValue;
	float comp0_NonStageValue;
	float comp1_NonStageValue;
};
```

### サンプルコード：ステージメンバーの振るまい
<!--
### Example code: stage member behavior
-->

```cs
shader BaseShader
{
	stage float BaseStageMethod()
	{
		return 1.0;
	}

	float NonStageMethod()
	{
		return 2.0;
	}
};
 
shader TestShader : BaseShader
{
	BaseShader comp0;
	BaseShader comp1;
};

// 結果のシェーダー（表現）
// resulting shader (representation)
shader TestClass
{
	float BaseStageMethod()
	{
		return 1.0;
	}

	float NonStageMethod()
	{
		return 2.0;
	}
	float comp0_NonStageMethod()
	{
		return 2.0;
	}
	float comp1_NonStageMethod()
	{
		return 2.0;
	}
};
```

コンポジションでも、ベースとなるメソッドを呼び出したり、オーバーライドしたりすることができることを覚えておいてください。オーバーライドは、コンポジションと同じ順番で行われます。
<!--
Keep in mind that even in composition, you can call for base methods, override them, and so on. Overriding happens in the same order as the compositions.
-->

この動作は、複数のコンポジションで使われるけれども計算は一度だけでいい場合（例えば、ビュー空間の法線）に便利です。
<!--
This behavior is useful when you need a value in multiple composition but you only need to compute it once (eg the normal in view space).
-->

## クローン（clone）の振る舞い
<!--
## Clone behavior
-->

`clone` キーワードには、それほど些細な仕様はありません。これは、`stage` キーワードが一意のメソッドを生成することを防ぎます。
<!--
The `clone` keyword has a less trivial behavior. It prevents the `stage` keyword to produce a unique method.
-->

```cs
shader BaseShader
{
	stage float BaseStageMethod()
	{
		return 1.0;
	}
 
	stage float BaseStageMethodNotCloned()
	{
		return 1.0;
	}
};
 
shader CompShader : BaseShader
{
	override clone float BaseStageMethod()
	{
		return 1.0 + base.BaseStageMethod();
	}
 
	override float BaseStageMethodNotCloned()
	{
		return 1.0f + base.BaseStageMethodNotCloned();
	}
};
 
shader TestShader : BaseShader
{
	CompShader comp0;
	CompShadercomp1;
};
 
// 結果のシェーダー（表現）
// resulting shader (representation)
shader TestShader
{
	// cloned method
	float base_BaseStageMethod()
	{
		return 1.0;
	}
 
	float comp0_BaseStageMethod()
	{
		return 1.0 + base_BaseStageMethod();
	}
 
	float BaseStageMethod() // in fact comp1_BaseStageMethod
	{
		return 1.0 + comp0_BaseStageMethod; // 3.0f
	}
 
	// not cloned method
	float base_BaseStageMethodNotCloned()
	{
		return 1.0f;
	}
 
	float BaseStageMethodNotCloned()
	{
		return 1.0f + base_BaseStageMethodNotCloned(); // 2.0f
	}
};
```

この動作は、単純な関数を異なるパラメーターで繰り返したい場合に便利です（例えば、別の関数の上に色を追加するなど）。
<!--
This behavior is useful when you want to repeat a simple function but with different parameters (eg adding color on top of another).
-->

## 関連項目
<!--
## See also
-->

* [エフェクト言語](../effect-language.md)
* [シェーディング言語](index.md)
    - [シェーダークラス、ミックスイン、継承](shader-classes-mixins-and-inheritance.md)
    - [テンプレート](templates.md)
    - [自動シェーダー ステージ入出力](automatic-shader-stage-input-output.md)
	- [シェーダー ステージ](shader-stages.md)

<!--
* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Templates](templates.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
	- [Shader stages](shader-stages.md)
-->