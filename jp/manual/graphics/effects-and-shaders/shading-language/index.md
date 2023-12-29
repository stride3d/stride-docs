# シェーディング言語
<!--
# Shading language
-->

Stride は [HLSL シェーディング言語](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx)のスーパーセットを提供し、より進化した高レベルの言語構文をもたらします。
<!--
Stride provides a superset of the [HLSL Shading language](http://msdn.microsoft.com/en-us/library/windows/desktop/bb509561%28v=vs.85%29.aspx), bringing advanced and higher level language constructions, with:
-->

- **拡張性**：クラス、継承、合成などのオブジェクト指向プログラミングの概念を使って、シェーダーを簡単に拡張できます。
- **モジュール性**：レンダリング技術に個別に焦点を当てたモジュール式シェーダーのセットなので、管理が簡単です。
- **再利用性**：シェーダー間で最大限にコードを再利用できます。

<!--
- **extensibility** to allow shaders to be extended easily using object-oriented programming concepts such as classes, inheritance, and composition
- **modularity** to provide a set modular shaders each focusing on a single rendering technique, more easily manageable
- **reusability** to maximize code reuse between shaders
-->

Stride シェーディング言語（SDSL）は、既存のシェーディング言語（HLSL, GLSL, GLSL ES）に自動的に変換されます。
<!--
Stride Shading Language (XSL) is automatically transformed to an existing shading language (HLSL, GLSL, GLSL ES).
-->

## このセクションの内容
<!--
## In this section
-->

- [シェーダークラス、ミックスイン、継承](shader-classes-mixins-and-inheritance.md)
- [コンポジション](composition.md)
- [テンプレート](templates.md)
- [シェーダーステージ入出力の自動管理](automatic-shader-stage-input-output.md)

<!--
- [Shader classes, mixins, and inheritance](shader-classes-mixins-and-inheritance.md)
- [Composition](composition.md)
- [Templates](templates.md)
- [Shader stage input/output automatic management](automatic-shader-stage-input-output.md)
-->