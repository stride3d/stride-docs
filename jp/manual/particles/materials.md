# パーティクル マテリアル
<!--
# Particle materials
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**マテリアル（material）** は、シェイプのレンダリング方法について定義します。色、テクスチャー、その他のパラメータを定義します。
<!--
**Materials** define how the expanded shape should be rendered. They defines color, textures, and other parameters.
-->

**パーティクル マテリアル（particle material）** は、[メッシュに使われるマテリアル](../graphics/materials/index.md)の簡易版です。今のところ、Emissive Map マテリアルの 1 種類のみです。
<!--
**Particle materials** are simplified versions of [materials used for meshes](../graphics/materials/index.md). There is only one type of material currently, the Dynamic Emissive material.
-->

## エミッシブマップ（Emissive Map）
<!--
## Dynamic emissive
-->

このマテリアルでは、ピクセルシェーディングに半透明のエミッシブ色 RGBA を使用しています。HDR レンダリングモードでは、値は強度として使用され、1 よりも大きい値を取ることができます。
<!--
This material uses a translucent emissive color RGBA for the pixel shading. In HDR rendering mode, the values are used as intensity, and can be higher than 1.
-->

![media/particles-reference-materials-1.png](media/particles-reference-materials-1.png)

| プロパティ           | 説明
|---------------------|------------
| Alpha-Add           | 半透明レンダリングは、アルファブレンディング、加算ブレンディング、その中間のいずれかがサポートされています。このパラメータでは、パーティクルのアルファブレンディング（ 0 ）または加算（ 1 ）の度合いをコントロールできます。
| Culling             | カリングなし（CullNone）、フロントフェイスカリング（CullFront）、バックフェイスカリング（CullBack）のいずれかを指定します。カメラ向きパーティクルは、常にカメラに正面を向けています。
| Emissive            | パーティクルの発光色（RGBA カラー）です。完全な説明については、[マテリアルマップ](../graphics/materials/material-maps.md)を参照してください。
| UV coords           | テクスチャーサンプリングを使用するパーティクルでは、uv 座標のアニメーションを指定することができます。今のところ、以降で説明する 2 種類があります。

<!--
| Property            | Description  
|---------------------|------------
| Alpha-Add           | Translucent rendering supports alpha-blending, additive blending or anything in-between. With this parameter you can control how much alpha-blended (0) or additive (1) the particles should be.
| Culling             | There are options for no culling, front face culling and back face culling. Camera-facing particles always have their front face towards the camera.
| Emissive            | The emissive RGBA color for the particle. See [Material maps](../graphics/materials/material-maps.md) for a full description.
| UV coords           | For particles which use texture sampling uv coordinates animation can be specified. The two currently existing types are specified below.
-->

### UV 座標 > フリップブック（UV Coords > Flipbook）
<!--
### UV Coords — Flipbook
-->

フリップブック（flipbook）アニメーションは、テクスチャーをフレームの連続とみなし、[フリップブック](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%A9%E3%83%91%E3%83%A9%E3%83%9E%E3%83%B3%E3%82%AC)のように 1 フレームずつ表示します。
<!--
The flipbook animation considers a texture a sequence of frames and displays it one frame at a time, like a flipbook.
-->

次の画像は、爆発をイメージした4×4フリップブックアニメーション用のテクスチャーの例です。
<!--
This image is an example of a 4x4 flipbook animation texture of an explosion:
-->

![media/particles-reference-materials-4.png](media/particles-reference-materials-4.png)

フリップブックアニメーションには、以下のようなプロパティがあります。
<!--
The flipbook animation has the following properties:
-->

![media/particles-reference-materials-2.png](media/particles-reference-materials-2.png)

| Property            | Description    
|---------------------|------------
| X divisions         | テクスチャー分割の列の数
| Y divisions         | テクスチャー分割の行の数
| Starting frame      | アニメーションを開始するフレームを指定します。左上のフレームは 0 で、左から右に 1 ずつ増えていき、それから下に移動します。
| Animation speed     | パーティクルの生存期間中に表示するフレームの総数です。この値が X x Y である場合、アニメーションはパーティクルの生存期間中に**すべての**フレームを表示します。この速度は相対的なもので、生存期間の長いパーティクルほどアニメーションが遅くなります。

<!--
| プロパティ           | 説明
|---------------------|------------
| X divisions         | The number of columns to split the texture into
| Y divisions         | The number of rows to split the texture into
| Starting frame      | The frame to start the animation at. The top-left frame is 0 and increases by 1 from left to right before moving down.
| Animation speed     | The total number of frames to show over the particle lifetime. If Speed = X x Y, then the animation shows **all** frames over the particle lifetime. The speed is relative; particles with longer lifespans have slower animation. 
-->

### UV 座標 > スクロール（UV Coords — Scrolling）
<!--
### UV Coords — Scrolling
-->

スクロールアニメーションでは、ビルボードまたはクワッド上でのスクロール開始矩形を定義し、その矩形がテクスチャーを横切って終了位置まで移動します。これにより、クワッドのサーフェス上でテクスチャーがスクロールまたはスケーリングする効果が得られます。
<!--
The scrolling animation defines a starting rectangle for the billboard or quad, which moves across the texture to its end position. This creates a scrolling or a scaling effect of the texture across the quad's surface.
-->

テクスチャーの座標は、0 以下でも 1 以上でも構いません。
テクスチャをサンプリングする方法は、[マテリアルマップ](../graphics/materials/material-maps.md)で定義されているアドレッシングモードに依存します。詳しくは、[MSDNドキュメント](https://docs.microsoft.com/en-us/windows/win32/api/d3d12/ne-d3d12-d3d12_texture_address_mode)をご覧ください。
<!--
The texture coordinates can go below 0 or above 1. How the texture is sampled depends on the addressing mode defined in the [material maps](../graphics/materials/material-maps.md). For more information, see the [MSDN documentation](http://tinyurl.com/TextureAddressingModes).
-->

スクロールアニメーションのプロパティは以下の通りです。
<!--
The scrolling animation has the following properties:
-->

![media/particles-reference-materials-3.png](media/particles-reference-materials-3.png)

| プロパティ           | 説明
|---------------------|-------------
| Start frame         | パーティクルが放出されるときの初期テクスチャーサンプリング矩形
| End frame           | パーティクルが消滅する時の最終テクスチャーサンプリング矩形

<!--
| Property            | Description
|---------------------|-------------
| Start frame         | The initial rectangle for texture sampling when the particle first spawns
| End frame           | The last rectangle for texture sampling when the particle disappears
-->

## 関連項目
<!--
## See also
-->

* [パーティクルの作成](create-particles.md)
* [エミッター](emitters.md)
* [シェイプ](shapes.md)
* [スポナー](spawners.md)
* [イニシャライザー](initializers.md)
* [アップデーター](updaters.md)

<!--
* [Create particles](create-particles.md)
* [Emitters](emitters.md)
* [Shapes](shapes.md)
* [Spawners](spawners.md)
* [Initializers](initializers.md)
* [Updaters](updaters.md)
-->
