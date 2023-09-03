# クリアコート シェーディング
<!--
# Clear-coat shading
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

車の塗装を再現するために、物理ベースレンダリング（PBR）を使った**クリアコートシェーディング**を使用しています。
<!--
**Clear-coat shading** uses physically-based rendering to simulate vehicle paint.
-->

![Clear coat](media/clear-coat-2.jpg)

実際の車では、下図のように、ボディに3層の塗装が施されているのが一般的です。
<!--
Real vehicles typically have three layers of paint applied to the body, as in the diagram below:
-->

![Diagram](media/paint-layers.png)

Stride では、シェーディングをシンプルにするために、**ベースコート**（オプションとしてメタルフレークを含む）と**クリアコート**のレイヤーのみをシミュレートします。カメラがマテリアルからどれだけ離れているかによって、Strideは コートのレイヤーを合成します。これにより、メタルフレークの法線マップを起因とする[視覚アーティファクト](https://en.wikipedia.org/wiki/Visual_artifact)が軽減されます（カメラがマテリアルから遠ざかると目立ってきます）。
<!--
To keep the shading simple, Stride only simulates the **base coat** (including optional metal flakes) and **clear coat** layers. Stride blends the layers depending on how far the camera is from the material. This reduces visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).
-->

クリアコートシェーディングには、[マテリアル レイヤー](material-layers.md)を使って手動でエフェクトを作ることに比べて、いくつかの利点があります。
<!--
Clear-coat shading has several advantages over creating the effect manually with [material layers](material-layers.md):
-->

* レイヤーは距離に応じて合成されます。
* パフォーマンスが向上します。
* 見た目がよくなります。

<!--
* layers are blended based on distance
* increased performance
* improved visualization
-->

## クリアコートマテリアルを追加する
<!--
## Add a clear-coat material
-->

Stride には、クリアコートマテリアルのテンプレートが含まれています。これをアセットとして追加するには、**アセットビュー**で [**Add asset**] をクリックし、[**Material**] > [**PBR material: clear coar**] を選択します。
<!--
Stride includes a clear-coat material template. To add it, in the **Asset View**, click **Add asset** and select **Material > PBR material: clear coat**.
-->

![Add clear coat](media/add-clear-coat.png)

また、自分でクリアコートのプロパティを設定することもできます。
<!--
Alternatively, to set clear-coat properties yourself:
-->

1. クリアコートシェーディングを使用したいマテリアルを選択します。

2. **プロパティグリッド**で、**Misc** プロパティの **Clear coat** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**Clear coat** を選択します。

    ![Select clear coat](media/select-clear-coat.png)

    >[!Note]
    >クリアコートシェーディングを正しく動作させるには、マテリアルの **Shading** プロパティで、**Diffuse**, **Specular**, **Specular model** を有効にする必要があります。
    
    >![Shading options](media/enable-shading-options.png)

<!--
1. Select the material you want to use clear-coat shading.

2. In the Property Grid, under the **Misc** properties, next to **Clear coat**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Clear coat**.

    ![Select clear coat](media/select-clear-coat.png)

    >[!Note]
    >For clear-coat shading to work correctly, make sure you enable **Diffuse**, **Specular** and **Specular model** under the material **Shading** properties.
    
    >![Shading options](media/enable-shading-options.png)
-->

## プロパティ
<!--
## Properties
-->

クリアコートシェーダーのプロパティは、[**Misc**] > [**Clear coat**] でアクセスできます。これらは3つのパートに分かれています。**ベースペイント**とオプションの**メタルフレーク**はベースコートをシミュレートし、**クリアコート**プロパティはクリアコートをシミュレートします。
<!--
You can access the clear-coat shader properties under **Misc > Clear coat**. They're split into three parts: the **base paint** and optional **metal flake** properties simulate the base coat, and the **clear coat** properties simulate the clear coat. 
-->

メタルフレークのプロパティは、メタリックペイントエフェクトをシミュレートします。このエフェクトを無効にするには、メタルフレークの法線マップを削除します。
<!--
The metal flake properties simulate a metallic paint effect. To disable the effect, remove the metal flake normal map.
-->

![Add clear coat](media/clear-coat-properties.png)

| プロパティ | 説明
|------------------------------|----------
| Base paint diffuse map  |  ベースペイントレイヤー（最も下のレイヤー）が使用する[ディフューズ マップ](shading-attributes.md)です。これによってレイヤーの色が決まります。
| Base paint gloss map |  ベースペイントレイヤーが使用する[グロス マップ](geometry-attributes.md)です。コヒーレントな結果を得るためには、**metal flake normal map** をマスクとして使用します。        
| Metal flakes diffuse map  |  メタルフレークレイヤー（ベースペイントの上にあるレイヤー）が使用する[ディフューズ マップ](shading-attributes.md)です。コヒーレントな結果を得るためには、ベースペイントの値に近い値を使用してください。
| Metal flakes gloss map | メタルフレークレイヤーが使用する[グロスマップ](geometry-attributes.md)です。コヒーレントな結果を得るには、**Metal flake normal map** をマスクとして使用します。
| Metal flakes metalness map | メタルフレークレイヤーが使用する[メタルネス マップ](shading-attributes.md)です。最良の結果を得るためには、高い値を使用してください。
| Metal flake normal map  | メタルフレークレイヤーが使用する[法線 マップ](../textures/normal-maps.md)です。これにより、フレークのジオメトリが形成されます。メタルフレークの法線マップ（**StrideClearCoatMetalFlakesNM**）は、Stride のアセットパッケージに含まれています。テクスチャの UV スケールが大きい場合は、下の方にある **Use random texture coordinates** を有効にすると、タイリング効果が軽減されます。メタルフレークエフェクトを無効にするには、法線マップを削除します。
| Coat gloss map  | クリアコートレイヤーで使用される[グロスマップ](geometry-attributes.md)です。この値を変更すると、さまざまな種類の塗料（マットなど）をシミュレートできます。
| Clear coat metalness map  | クリアコートレイヤーが使用する[メタルネス マップ](shading-attributes.md)です。
| Orange peel normal map  | 「オレンジの皮」を表現するためにクリアコートレイヤーが使用する[法線マップ](../textures/normal-maps.md)です。これは、異なる角度で光を反射して塗装の欠陥をシミュレートすることで、テクスチャがオレンジの皮のようにデコボコしているように見せます。オレンジピール法線マップ(**StrideClearCoatOrangePeelNM**)は、Stride のアセットパッケージに含まれています。
| Layer transition distance  | ベースペイントレイヤーからメタルフレークレイヤーに遷移する際の距離（単位：メートル）です。これにより、メタルフレークの法線マップに起因する視覚アーティファクト（カメラがマテリアルから遠ざかるにつれて目立ちやすくなります）を防ぐことができます。

<!--
| Property | Description 
|------------------------------|----------
| Base paint diffuse map  |  The [diffuse map](shading-attributes.md) used by the base paint layer (the lowest  layer). This determines the color of the layer.
| Base paint gloss map |  The [gloss map](geometry-attributes.md) used by the base paint layer. For a coherent result, use the **metal flake normal map** as a mask.         
| Metal flakes diffuse map  |  The [diffuse map](shading-attributes.md) used by the metal flake layer (the layer above the base paint). For a coherent result, use a value close to the base paint value.
| Metal flakes gloss map | The [gloss map](geometry-attributes.md) used by the metal flake layer. For a coherent result, use the **metal flake normal map** as a mask. 
| Metal flakes metalness map | The [metalness map](shading-attributes.md) used by the metal flake layer. For best results, use high values.
| Metal flake normal map  | The [normal map](../textures/normal-maps.md) used by the metal flake layer. This shapes the flake geometry. A metal flake normal map  (**StrideClearCoatMetalFlakesNM**) is included in the Stride assets package. If the texture has a high UV scale, enable **Use random texture coordinates** below to reduce tiling effects. To disable the metal flakes effect, remove the normal map.
| Coat gloss map  | The [gloss map](geometry-attributes.md) used by the clear coat layer. Change this value to simulate different kinds of paint (eg matte).
| Clear coat metalness map  | The [metalness map](shading-attributes.md) used by the clear coat layer
| Orange peel normal map  | The [normal map](../textures/normal-maps.md) used by the clear coat layer to create an "orange peel" effect. This reflects light in different angles, simulating paint imperfections whereby the texture appears bumpy, like the skin of an orange. An orange peel normal map (**StrideClearCoatOrangePeelNM**) is included in the Stride assets package.
| Layer transition distance  | The distance (in meters) at which the base paint layer transitions to the metal flake layer. This helps fight visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).
-->

## タイリングやアーティファクトを低減する
<!--
## Reduce tiling and artifacts
-->

二項演算子を使用するプロパティでは、**正規化された値**（つまり`0.0`から`1.0`の間の値）を使用する必要があります。例えば、次のスクリーンショットでは、**Left** 演算子は `0.5` という値を使用しています。
<!--
Properties that use binary operators should use **normalized values** (ie between `0.0` and `1.0`). For example, in the screenshot below, the **left** operator uses a value of `0.5`.
-->

![Binary operator](media/clear-coat-binary-operator.png)

値を `1.0` 以上に設定すると、次の画像のように、タイリングアーチファクトが発生する場合があります（グリッドパターンに着目してください）。
<!--
Values over `1.0` might produce tiling artifacts, as in the image below (note the grid pattern):
-->

![Artifact](media/clear-coat-artifact1.jpg)

### StrideClearCoatMetalFlakesNM
<!--
### StrideClearCoatMetalFlakesNM
-->

Stride のアセットパッケージに含まれるメタルフレーク法線マップ（**StrideClearCoatMetalFlakesNM**）のメタルフレークは、かなり大きいです。このため、以下のようにすることをお勧めします。
<!--
The metal flakes in the metal flake normal map included in the Stride assets package (**StrideClearCoatMetalFlakesNM**) are quite large. For this reason, we recommend you: 
-->

* 高い **UV スケール係数**を使用してテクスチャーをタイル状にする（それによりフレークを縮小する）。

* **Use random texture coordinates** を有効にして、明らさまなタイリング効果を防ぐ。

    ![Use random texture coordinates](media/use-random-texture-coordinates.png)

<!--
* use a high **UV scale factor** which tiles the texture (thereby shrinking the flakes) 

* enable **Use random texture coordinates**, preventing an obvious tiling effect

    ![Use random texture coordinates](media/use-random-texture-coordinates.png)
-->

>[!Note]
>**Use random texture coordinates** オプションは、コストがかかるため、モバイルプラットフォームでの使用はお勧めできません。

<!--
>[!Note]
>The **Use random texture coordinates** option is costly, so we don't recommend you use it for mobile platforms.
-->

また、より小さなメタルフレークで密度の高い法線マップを使用する方法もあります。
<!--
Alternatively, use a normal map with a higher density of smaller metal flakes.
-->

## 関連項目
<!--
## See also
-->

* [マテリアル マップ](material-maps.md)
* [マテリアル 属性](material-attributes.md)
    * [ジオメトリ 属性](geometry-attributes.md)
    * [シェーディング 属性](shading-attributes.md)
    * [その他の属性](misc-attributes.md)
* [マテリアル レイヤー](material-layers.md)
* [マテリアル スロット](material-slots.md)
* [開発者向けのマテリアル情報](materials-for-developers.md)

<!--
* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
-->
