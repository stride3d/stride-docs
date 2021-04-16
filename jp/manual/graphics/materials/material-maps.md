# マテリアルマップ
<!--
# Material maps
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

**マテリアルマップ**は、マテリアルがどのようにレンダリングされるかの計算に使われます。カラー（RGB）値とスカラー（単精度浮動小数点）値の 2 種類の値を使うことができます。
<!--
**Material maps** calculate how materials are rendered. They can use two kinds of values: color (RGB) values or scalar (single float) values.
-->

マテリアルマップは、グロスマップ、ディフューズマップ、ブレンドマップ（[マテリアルレイヤー](material-layers.md)を組み合わせる場合）など、いくつかの用途に使用することができます。
<!--
You can use material maps for several purposes, including gloss maps, diffuse maps, or  blend maps (for combining [material layers](material-layers.md))
-->

マテリアルマップは、いくつかのプロバイダーのうちのひとつを使って値を取得します。
<!--
Material maps can fetch values using one of several providers:
-->

* **頂点ストリーム（Vertex stream）**：メッシュの属性から得られる値。
* **二項演算（Binary operator）**: 任意の他の 2 つのプロバイダーの組み合わせ。
* **定数（Float4 / Float）**: 固定値。
* **色（Color）**: 16 進数の色値。
* **シェーダー（Shader）**: ComputeColor シェーダから得られる値。これにより、プロシージャルな値を使用することができます。
* **テクスチャー（Texture）**: [テクスチャー](../textures/index.md)からサンプリングされた値。

<!--
* **Vertex stream**: a value taken from mesh attributes
* **Binary operator**: a combination of any other two providers
* **Float4 / Float**: a constant value
* **Color**: a hex color value
* **Shader**: a value provided by a ComputeColor shader. This lets you use procedural values
* **Texture**: a value sampled from a [texture](../textures/index.md)
-->

プロバイダーを選択するには、![青い矢印ボタン](../../game-studio/media/blue-arrow-icon.png) （**置換**）をクリックして、ドロップダウンメニューから選択します。
<!--
To choose the provider, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select it from the drop-down menu:
-->

![media/material-colors-1.png](media/material-colors-1.png) 

## 頂点ストリーム（Vertex stream）
<!--
## Vertex stream
-->

このプロバイダーは、マテリアルを適用したモデルのメッシュの属性から値を取得します。
<!--
This provider takes a value from an attribute of the mesh of the model you apply the material to.
-->

**色頂点ストリーム（Color Vertex Stream）** と **カスタム頂点ストリーム（Custom Vertex Stream）** という 2 つのモードがあります。これらを切り替えるには、プロバイダーとして **Vertex Stream** を選択した状態で ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、使用したいモードを選択します。
<!--
It has two modes: **Color Vertex Stream** and **Custom Vertex Stream**. To switch between them, with **Vertex Stream** selected as the provider, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose the mode you want to use.
-->

![Vertex stream mode](media/vertex-stream-mode.png)

### 色頂点ストリーム（Color vertex stream）
<!--
### Color vertex stream
-->

メッシュから色の値を取得します。
<!--
Takes a color value from the mesh.
-->

| プロパティ | 説明
| -------- | -----------
| Index    | 名前付きストリームのインデックス
| Channel  | ストリームからサンプリングするチャンネル（RGBA）

<!--
| Property | Description                                      
| -------- | -----------
| Index | The index in the named stream  
| Channel  | The channel (RGBA) to sample from the stream
-->

### カスタム頂点ストリーム（Custom vertex stream）
<!--
### Custom vertex stream
-->

指定されたメッシュチャンネルから値を取得します。
<!--
Takes a value from the mesh channel you specify.
-->

| プロパティ | 説明
| -------- | -----------
| Name     | データを読み出すチャンネルのセマンティック名
| Channel  | ストリームからサンプリングするチャンネル（RGBA）

<!--
| Property | Description                                      
| -------- | -----------
| Name | Semantic name of the channel to read data from 
| Channel  | The channel (RGBA) to sample from the stream
-->

## 二項演算（Binary operator）
<!--
## Binary operator
-->

2 つの色値／スカラー値プロバイダーから値を取得して、二項演算を実行します。二項演算には、必要な数だけマテリアルマップを入れ子にすることができます（さらなる二項演算も含みます）。
<!--
Perform a binary operation from two color/scalar value providers. You can nest as many material maps inside binary operators as you need (including further binary operators).
-->

演算方法は、![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックして、ドロップダウンメニューから選択します。この操作は、Photoshop でレイヤーを合成するときのオプションに似ています。
<!--
To choose how the operation works, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select from the drop-down menu. The operations are similar to options when blending layers in Photoshop.
-->

![Operation mode](media/operation-mode.png)

`結果 = Leftの色 <演算子> Rightの色`
<!--
`Result = LeftColor  <operator> RightColor`
-->

![media/material-colors-4.png](media/material-colors-4.png)

| プロパティ | 説明
| -------- | -----------
| Operator | 二項演算子（add, multiply, など）
| Left     | 二項演算の左項となる色／スカラー
| Right    | 二項演算の右項となる色／スカラー

<!--
| Property | Description                                      
| -------- | -----------
| Operator | A binary operator (eg add, multiply, etc)     
| Left     | The left color/scalar used in the operation  
| Right    | The right color/scalar used in the operation 
-->

## 定数（Float4 / Float）
<!--
## Float4 / Float
-->

マテリアル全体に適用する定数値を直接指定します。
<!--
Provided directly as a constant value over the whole material. 
-->

色の場合は、X, Y, Z, W の値（*Float4*）で RGBA 値を指定します。
<!--
In the case of RGB values, you control the RGBA value with the X, Y, Z and W values (*Float4*).
-->

![xyzw](media/material-colors-xyzw.png)

スカラー値の場合は、スライダー（*Float*）で値を指定します。
<!--
In the case of scalar values, you control the value with a slider (*Float*).
-->

![Blend map slider](media/blend-map-slider.png)

## 色（Color）
<!--
## Color
-->

16 進数で表現される色の値です。色プロバイダーは、RGB 値を使用するマテリアルマップでのみ使用できます。
<!--
A value provided from a color hex value. This is only available for material maps that use RGB values.
-->

![media/material-colors-3.png](media/material-colors-3.png)

## シェーダー（Shader）
<!--
## Shader
-->

値は、ComputeColor シェーダーから取得されます。これにより、プロシージャルな値を使用することができます。
<!--
A value provided by a ComputeColor shader. This lets you use procedural values.
-->

ComputeColor シェーダーの例については、[チュートリアル：パーティクル マテリアル](../../particles/tutorials/particle-materials.md)を参照してください。
<!--
For an example of a ComputeColor shader, see the [Particle materials tutorial](../../particles/tutorials/particle-materials.md).
-->

## テクスチャー（Texture）
<!--
## Texture
-->

[テクスチャー](../textures/index.md)から、色／スカラーがサンプリングされます。
<!--
Sample the color/scalar from a [texture](../textures/index.md).
-->

例えば、次の画像は、テクスチャーによってマテリアルの合成結果がどのように変わるかを示しています。
<!--
For example, the images below demonstrate how the texture changes the way Stride blends materials.
-->

![Blend map diagram](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)

![media/material-colors-2.png](media/material-colors-2.png)

| プロパティ          | 説明
| ------------------ | --------------- 
| Texture            | テクスチャーへの参照。
| Channel            | スカラー値の抽出に使用されるチャンネル（R, G, B, A）。スカラー型のテクスチャーにのみ有効です。
| Texcoord Index     | このテクスチャーを使用するメッシュから取得されるテクスチャー座標（u, v）。
| Filtering          | サンプリング方法（Linear, Point, Anisotropic など) 
| Address Mode U / V | <p><br>(u, v) 座標をどのように扱うかの定義。</p></br> <p><br> **Wrap**: 整数接合点で (u, v) を繰り返します。例えば、u が 0.0 ～ 3.0 であれば、テクスチャーは U 軸方向に 3 回繰り返されます。</p></br> <p><br>**Mirror**: 正数接合点で (u, v) をミラーリングします。例えば、u が 0.0～1.0 の場合は期待通りのテクスチャーが表示されますが、1.0 ～ 2.0 ではテクスチャーがミラーリングされます。 </p></br> <p><br> **Clamp**: (u, v) を (0.0, 1.0) の範囲に留めます。</p></br>
| Scale | (u, v) に適用される拡大縮小率。
| Offset  | (u, v) に適用されるオフセット。

<!--
| Property           | Description               
| ------------------ | --------------- 
| Texture            | A reference to a texture
| Channel            | The channel (R, G, B, A) used to extract the scalar value. Only valid for scalar textures
| Texcoord Index     | The texture coordinates (u,v) to use from the mesh with this texture
| Filtering          | The sampling method (eg Linear, Point, Anisotropic, etc) 
| Address Mode U / V | <p><br>Defines how (u,v) coordinates are addressed</p></br> <p><br> **Wrap**: Tiles (u,v) at integer junctions. For example, if u ranges from 0.0 to 3.0, the texture repeats three times on the U axis</p></br> <p><br>**Mirror**: Flips (u,v) at integer junctions. For example, if u ranges from 0.0 to 1.0, the texture is displayed as expected; but from 1.0 to 2.0, the texture is mirrored </p></br> <p><br> **Clamp**: Clamps (u,v) to the range (0.0, 1.0)</p></br>
| Scale | A scale applied to (u,v) 
| Offset  | An offset applied to (u,v)
-->

## 関連項目
<!--
## See also
-->

- [マテリアル属性](material-attributes.md)
- [マテリアルレイヤー](material-layers.md)
- [マテリアルスロット](material-slots.md)
- [開発者向けのマテリアル情報](materials-for-developers.md)

<!--
- [Material attributes](material-attributes.md)
- [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
-->
