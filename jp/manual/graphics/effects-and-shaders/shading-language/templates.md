# テンプレート
<!--
# Templates
-->

SDSL では、シェーダーのテンプレート化が可能です。多くのテンプレートシステムとは異なり、SDSL は強力な型付けされたテンプレートを要求します。利用可能な型は次のとおりです。

<!--
Shader templating is available in SDSL. Unlike many templating systems, sdsl requires strong typed templates. The available types are:
-->

- HLSL の値型（float, int, float2, float3, float4）
- 2Dテクスチャ
- サンプラーステート
- セマンティクス（変数のセマンティクスを置き換えるために使用されます）
- リンクの型（Link アノテーションを置き換えるために使用されます)

<!--
- value types from HLSL (float, int, float2, float3, float4)
- 2D textures
- sampler states
- semantics (used to replace semantics on variables)
- link types (used to replace link annotations)
-->

インスタンス化されたシェーダーは、他のシェーダーと同じように振る舞います。Value, Texture, Sampler のテンプレートパラメーターは、他の変数と同じようにアクセスできます。ただし、値を変更することはできず、変更しようとするとコンパイルエラーになります。テンプレート変数が間違って使用された場合（例：sampler をセマンティックとして使用）、コンパイルエラーになるはずです。しかし、その動作は公式には不明です。
<!--
An instantiated shader behaves the same way as any other shader. The value, texture and sampler template parameters are accessible like any other variable. However, it's impossible to modify their value; attempting to do so results in a compilation error. If a template variable is incorrectly used (eg using a sampler as a semantic), it should result in a compilation error. However, the behavior is officially unknown.
-->

**コード：** テンプレート化
<!--
**Code:** Templating
-->

```cs
shader TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
{
	[Color]
	[Link("myLink")]
	float4 myColor;
 
	stream float2 texcoord : mySemantic;
 
	float4 GetValue()
	{
		return speed * myColor * myTexture.Sample(mySampler, streams.texcoord);
	}
};

// シェーダーをインスタンス化： 
// To instantiate the shader, use:
TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
```

## 関連項目
<!--
## See also
-->

* [エフェクト言語](../effect-language.md)
* [シェーディング言語](index.md)
    - [シェーダークラス、ミックスイン、継承](shader-classes-mixins-and-inheritance.md)
    - [コンポジション](composition.md)
    - [シェーダー ステージ入出力の自動管理](automatic-shader-stage-input-output.md)

<!--
* [Effect language](../effect-language.md)
* [Shading language index](index.md)
    - [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
    - [Composition](composition.md)
    - [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
-->
