# テクスチャー
<!--
# Textures
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**テクスチャー（Textures）** とは、主に[マテリアル](../materials/index.md)で使用される画像のことです。Strideは、マテリアルを覆う表面にテクスチャーをマッピングします。
<!--
**Textures** are images mainly used in [materials](../materials/index.md). Stride maps textures to the surfaces the material covers.
-->

テクスチャーは、マテリアルに色情報を追加することができます。
例えば、壁にレンガの模様を追加したり、テーブルに木の模様を追加したりすることができます。
テクスチャーのピクセル（**texels；テクセル**）の値は、鏡面反射マップ、メタルネスマップ、[法線マップ](normal-maps.md)など、他の計算にも使用できます。
<!--
Textures can add color information to a material — for example, to add a brick pattern to a wall or a wood pattern to a table. The values of the pixels in a texture (**texels**) can also be used for other calculations, such as in specular maps, metalness maps, or [normal maps](normal-maps.md). 
-->

マテリアルには通常、複数のテクスチャーが含まれています。例えば、マテリアルには、色テクスチャー、法線マップテクスチャー、ラフネステクスチャーが含まれている場合があります。
<!--
Materials typically contain multiple textures; for example, a material might contain a color texture, a normal map texture, and a roughness texture.
-->

テクスチャーは、マテリアル以外でも使用することができます。
例えば、UI に直接描画したり、[スプライト](./../sprites/index.md)で使ったりすることができます。
<!--
Textures can also be used outside materials; for example, you can draw them directly to the UI, or use them in [sprites](../../sprites/index.md).
-->

## サポートされるファイル形式
<!--
## Supported file types
-->

テクスチャーとして使用できるファイル形式は以下の通りです。
<!--
You can use the following file types as textures:
-->

* `.dds`
* `.jpg`
* `.jpeg`
* `.png`
* `.gif`
* `.bmp`
* `.tga`
* `.psd`
* `.tif`
* `.tiff`

> [!Note]
> * Stride は、アニメーション GIF や PNG などのアニメーション画像ファイルの場合、最初のフレームのみ読み込みます。Stride ではアニメーションは行われず、静止画像として表示されます。
> * 今のところ、Stride は動画ファイルには対応していません。

<!--
> [!Note]
> * Stride only imports the first frame of animated image files, such as animated gifs or PNGs. They don't animate in Stride; they appear as static images.
> * Stride currently doesn't support movie files.
-->

## テクスチャーを追加する
<!--
## Add a texture
-->

**アセットビュー**で、[**Add asset**] > [**Texture**] をクリックし、テクスチャーのテンプレート（**Color**, **Grayscale**, **Normal map** のいずれか）を選択します。
<!--
In the **Asset View**, click **Add asset** > **Texture**, then select a template for the texture (**color**, **grayscale** or **normal map**):
-->

![Add texture](media/add-texture.png)

> [!Note]
> レンダーターゲットはまた別の種類のテクスチャーであり、画像は使用しません。代わりに、[カメラ](../cameras/index.md)からの出力をレンダリングします。詳しくは、[レンダー ターゲット](../graphics-compositor/render-textures.md)をご覧ください。

<!--
> [!Note]
> Render targets are a different kind of texture, and don't use images. Instead, they render the output from a [camera](../cameras/index.md). For more information, see [Render targets](../graphics-compositor/render-textures.md).
-->

または、エクスプローラーからアセットビューにテクスチャーファイルをドラッグします。
<!--
Alternatively, drag the texture file from Explorer to the Asset View:
-->

![Drap and drop a resource file to the Asset View](../../get-started/media/create-assets-drop-resource.png)

次に、テクスチャーのテンプレート（**Color**, **Grayscale**, **Normal map** のいずれか）を選択します。
   
![List of asset templates](media/create-assets-drag-drop-select-asset-template.png)

Game Studio は、アセットビューにテクスチャーを追加します。

![Texture asset created](../../get-started/media/create-assets-drag-drop-asset-created.png)

## テクスチャーのプロパティ
<!--
## Texture properties
-->

以下のプロパティは、すべてのテクスチャーで共通です。
<!--
The following properties are common to all textures.
-->

![Texture properties](media/texture-properties.png)

| プロパティ        | 説明
|------------------|---------
| Width            | ゲーム内でのテクスチャの幅
| Height           | ゲーム内でのテクスチャの高さ
| Use percentages  | これを有効にすると、Width と Height を、実際のピクセルサイズに対する幅と高さの割合（パーセンテージ）と見なします。
| Type             | 画像として表示したいテクスチャーでは **Color** を、法線マップでは **Normal map** を、その他のもの（鏡面反射マップ、メタルネスマップ、ラフネスマップなど）では **Grayscale** を設定します。色テクスチャーと法線マップには追加のプロパティがあります（以下参照）。
| Generate mipmaps | これを有効にすると、テクスチャーの異なるバージョンを異なる解像度で生成し、距離に応じて選択して表示します。**ストリーミング**を使用すると、パフォーマンスが向上し、視覚的なアーティファクトが除去され、ポップインが減少しますが、より多くのメモリを使用します。カメラから常に同じ距離にあるテクスチャー（UI など）には不要です。
| Compress         | 最終的なテクスチャーを、ターゲットプラットフォームや用途に応じたフォーマットに圧縮します。詳細については、[テクスチャーの圧縮](compression.md)を参照してください。
| Stream         | 実行時に、テクスチャーを動的にストリーミングします。これにより、パフォーマンスとシーンのロード時間が改善します。スプラッシュ画面など、常にロードしておきたい重要なテクスチャーにはお勧めできません。詳細については、[ストリーミング](streaming.md)を参照してください。

<!--
| Property         | Description
|------------------|---------
| Width            | The width of the texture in-game
| Height           | The height of the texture in-game
| Use percentages    | Use percentages for width and height instead of actual pixel size
| Width            | The width of the texture in-game
| Height           | The height of the texture in-game
| Type             | Use **Color** for textures you want to display as images, **Normal map** for normal maps, and **Grayscale** to provide values for other things (eg specular maps, metalness maps, roughness maps). Color textures and normal maps have additional properties (see below).
| Generate mipmaps | Generate different versions of the texture at different resolutions to be displayed at different distances. Improves performance, removes visual artifacts, and reduces pop-in when using **streaming**, but uses more memory. Unnecessary for textures always at the same distance from the camera (such as UIs).
| Compress         | Compress the final texture to a format based on the target platform and usage. The final texture is a multiple of 4. For more information, see [Texture compression](compression.md).
| Stream         | Stream the texture dynamically at runtime. This improves performance and scene loading times. Not recommended for important textures you always want to be loaded, such as splash screens. For more information, see [Streaming](streaming.md).
-->

### 色テクスチャーのプロパティ
<!--
### Color texture properties
-->

以下のプロパティは、テクスチャーの **Type** を **Color** に設定した場合に適用されます。
<!--
The following properties apply if you set the texture **type** to **color**.
-->

![Color texture properties](media/color-texture-properties.png)

| プロパティ | 説明
|----------|---------
| sRGB sampling | テクスチャーを sRGB 形式で保存し、サンプリング時にリニア空間に変換します。明示的にリニア空間にしておく必要がない限り、すべての色テクスチャーに推奨されます。
| Color key enabled | 実行時に、**Color key color** プロパティに設定された色を透明色として使用します。これを無効にした場合、プロジェクトは代わりにテクスチャーの透明領域を使用します。
| Color key color | 実行時に透過処理に使用される色です。**Color key enabled** が選択されている場合のみ適用されます。
| Alpha | テクスチャーのアルファフォーマットです（**None**, **Mask**, **Explicit**, **Interpolated**, **Auto** のいずれか）。
| Premultiply alpha |  事前に、画像のすべての色成分にアルファ成分を乗じます。

<!--
| Property | Description
|----------|---------
| sRGB sampling | Store the texture in sRGB format and convert to linear space when sampled. Recommended for all color textures, unless they're explicitly in linear space.
| Color key enabled | Use the color set in the **Color key color** property for transparency at runtime. If disabled, the project uses transparent areas of the texture instead
| Color key color | The color used for transparency at runtime. Only applied if **Color key enabled** is selected.
| Alpha | The texture alpha format (**None**, **Mask**, **Explicit**, **Interpolated**, or **Auto**)
| Premultiply alpha |  Premultiply all color components of the images by their alpha component
-->

### 法線マップのプロパティ
<!--
### Normal map properties
-->

以下のプロパティは、テクスチャーの **Type** を **Normal Map** に設定した場合に適用されます。
<!--
The following property applies if you set the texture **type** to **normal map**.
-->

![Normal map textures](media/normal-map-texture-properties.png)

| プロパティ| 説明
|----------|---------
| Invert Y | 正のY成分（緑）が接線空間で上を向いていると見なします。これは、法線マップを作成するために使用するツールによって異なります。

<!--
| Property | Description
|----------|---------
| Invert Y | Have positive Y-component (green) face up in tangent space. This depends on the tools you use to create normal maps.
-->

法線マップの詳細については、[法線マップ](normal-maps.md)を参照してください。
<!--
For more information about normal maps, see the [Normal maps](normal-maps.md) page.
-->

## グレースケールテクスチャー
<!--
## Grayscale textures
-->

グレースケールテクスチャーは、画像の R チャンネルのみを使用します（最終のRGBA = オリジナルの RRRR）。
<!--
Grayscale texture use only the R channel of the image (finalRGBA = originalRRRR).
-->

>[!Note]
>（スプライトコンポーネントとして）シーンにテクスチャーを追加し、テクスチャータイプをグレースケールに設定した場合、モノクロではなく赤色に見えます。これは、画像がR（赤）チャンネルを使用しているためです。

<!--
>[!Note]
>If you add a texture to a scene (as a sprite component), and set the texture type to grayscale, it appears red, not monochrome. This is because the image uses the R (red) channel.
-->

> チャンネルをモノクロにするには、**スプライト**コンポーネントのプロパティで、**Type** を **Grayscale** に設定します。スプライトコンポーネントのプロパティについては、[スプライトの使用](../../sprites/use-sprites.md)を参照してください。

<!--
> To make the channel monochrome, in the **Sprite** component properties, set the **Type** as **Grayscale**. For more information about the sprite component properties, see [Use sprites](../../sprites/use-sprites.md).
-->

グレースケールのテクスチャーを使って、[マテリアルマップ](../materials/material-maps.md)に値を与えることができます。例えば、テクスチャーを **ブレンドマップ** として使用し、2 つのマテリアルレイヤーを合成することができます。
<!--
You can use grayscale textures to provide values in [material maps](../materials/material-maps.md). For example, you can use a texture as a **blend map** to blend two material layers:
-->

![Blend map diagram](../materials/media/blend-map-diagram.png)

![Blend map diagram](../materials/media/blend-map-diagram2.png)

ブレンドマップのテクスチャーが、合成結果のパターンとどのように対応しているかに注目してください。
<!--
Note how the blend map texture corresponds to the patterning on the result. 
-->

詳細については、[マテリアルマップ](../materials/material-maps.md)を参照してください。
<!--
For more information, see [Material maps](../materials/material-maps.md).
-->

### グローバル テクスチャー設定
<!--
### Global texture settings
-->

グローバルなテクスチャー設定にアクセスする方法については、[ゲームの設定](../../game-studio/game-settings.md)を参照してください。
<!--
For instructions about how to access the global texture settings, see the [Game Settings](../../game-studio/game-settings.md) page.
-->

![Texture settings](../../game-studio/media/texture-settings.png)

| プロパティ       | 説明
|-----------------|--------------
| Texture quality | テクスチャーをエンコードする際のテクスチャーの品質を指定します。**Fast** は CPU 使用率が最も低いですが、品質も最低です。ターゲットプラットフォームによっては、設定を高くするとビルドが遅くなることがあります。

<!--
| Property        | Description  
|-----------------|--------------
| Texture quality | The texture quality when encoding textures. **Fast** uses the least CPU, but has the lowest quality. Higher settings might result in slower builds, depending on the target platform.
-->

## 関連項目
<!--
## See also
-->

* [法線マップ](normal-maps.md)
* [テクスチャーの圧縮](compression.md)
    * [ストリーミング](streaming.md)
* [マテリアル](../materials/index.md)
* [スプライト](../../sprites/index.md)
* [レンダーテクスチャー](../graphics-compositor/render-textures.md)
* [スカイボックスと背景](skyboxes-and-backgrounds.md)

<!--
* [Normal maps](normal-maps.md)
* [Texture compression](compression.md)
* [Texture streaming](streaming.md)
* [Materials](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Render textures](../graphics-compositor/render-textures.md)
* [Skyboxes and backgrounds](skyboxes-and-backgrounds.md)
-->
