# 色変換
<!--
# Color transforms
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**色変換（color transforms）** は、実行時に連鎖的に組み合わせられるように設計された特別なエフェクトです。画像に適用される一連の色変換を定義することができます。それぞれの変換では、前工程の変換の出力を入力として使用します。実行時には、一連の変換が 1 つのシェーダーにまとめられ、1 回の描画呼び出しでレンダリングされるので、最大のパフォーマンスを得ることができます。
<!--
**Color transforms** are special effects designed to be combined in a chain at runtime. You can define a series of color transforms to apply to an image. Each transform uses the previous transform's output as its own input. At runtime, the series of transforms is squashed into one shader and rendered in a single draw call for maximum performance.
-->

また、独自の[カスタム色変換](custom-color-transforms.md)を書いて、ユニークなエフェクトを作ることもできます。
<!--
You can also write your own [custom color transforms](custom-color-transforms.md) to create unique effects.
-->

## このセクションの内容
<!--
## In this section
-->

* [フィルム グレイン](film-grain.md)
* [ガンマ補正](gamma-correction.md)
* [トーンマップ](tonemap.md)

<!--
* [Film grain](film-grain.md)
* [Gamma correction](gamma-correction.md)
* [ToneMap](tonemap.md)
-->
