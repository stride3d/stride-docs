# 法線マップ
<!--
# Normal maps
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**法線マップ（Normal maps）** は、モデルのジオメトリを変更することなく、ひび割れや凹凸などのサーフェスの詳細を追加することに使われるテクスチャーです。法線マップには、メッシュがどのように光を反射するかに関する情報が含まれており、より複雑なジオメトリであるかのような錯覚を起こします。これにより、処理能力を大幅に節約することができます。
<!--
**Normal maps** are textures that add the appearance of surface detail, such as cracks and bumps, without changing the actual geometry of a model. They contain information about how meshes should reflect light, creating the illusion of much more complex geometry. This saves lots of processing power.
-->

| 法線マップなし | 法線マップあり
| --------------| ----------- 
| ![media/material-attributes-15.png](../materials/media/material-attributes-15.png)  | ![media/material-attributes-16.png](../materials/media/material-attributes-16.png)  

<!--
| No normal map | With a normal map
| --------------| ----------- 
| ![media/material-attributes-15.png](../materials/media/material-attributes-15.png)  | ![media/material-attributes-16.png](../materials/media/material-attributes-16.png)  
-->

| オリジナルのメッシュ | 簡素化されたメッシュ | 法線マップで簡素化されたメッシュ
|---------------|-----------------|---------
| ![Example 1](media/normal_map_example1.jpg) | ![Example 2](media/normal_map_example2.jpg) | ![Example 3](media/normal_map_example3.jpg)
| 4000 個の三角形 | 500 個の三角形 | 500 個の三角形

<!--
| Original mesh | Simplified mesh | Simplified mesh and normal map 
|---------------|-----------------|---------
| ![Example 1](media/normal_map_example1.jpg) | ![Example 2](media/normal_map_example2.jpg) | ![Example 3](media/normal_map_example3.jpg)
| 4m triangles | 500 triangles | 500 triangles
-->

*(画像提供： Paolo Cignoni 氏, [Attribution-ShareAlike 1.0 Generic (CC BY-SA 1.0) ライセンス](https://creativecommons.org/licenses/by-sa/1.0/)*。
<!--
*(Images courtesy of Paolo Cignoni, shared under [Attribution-ShareAlike 1.0 Generic (CC BY-SA 1.0)](https://creativecommons.org/licenses/by-sa/1.0/)*
-->

法線マップは通常、法線ベクトル（サーフェスから離れる方向を指すベクトル）の小さな変化を表します。
Stride では、最も一般的な慣例を採用しています。
X 成分と Y 成分は、サーフェスの接線（tangent）と従接線（bitangent）に従い、Z 成分はサーフェスの法線ベクトルに従います。
つまり、値 `(0, 0, 1)` は法線ベクトルと一致していて変化がないことを表し、値 `(-1, 0, 0)` は「左」（ローカル接線空間で負の X 値）に傾いていることを表します。
<!--
Normal maps usually represent small changes of the normal vector (the vector which points away from the surface). Stride uses the most common convention: the X and Y components follow the tangent and the bitangent of the surface, and the Z component follows the normal vector of the surface. This means that a value of `(0, 0, 1)` coincides with the normal vector and represents no change, while a value of `(-1, 0, 0)` tilts to the "left" (ie negative X value in the tangent (local) space).
-->

![media/material-attributes-13.png](../materials/media/material-attributes-13.png) 

## 法線マップを使う
<!--
## Use a normal map
-->

1. **アセットビュー**で、法線マップとして使いたいテクスチャーを選択します。

    ![Select normal map texture](media/select-normal-map-texture.png)

2. **プロパティグリッド**で、**Type** プロパティが **Normal Map** に設定されていることを確認します。

    ![Normal map](media/normal-map-expanded-properties.png)

    これは、Stride がテクスチャーがリニア色空間であると仮定して、それを法線マップに適したフォーマットに変換するということを意味しています。

3. **アセットビュー**で、法線マップを適用したいマテリアルを選択します。

    ![Select material](media/select-material.png)

4. **プロパティグリッド**で、マテリアルの **Geometry** プロパティから **Surface** を展開します。

    ![Use normal maps](media/use-normal-map.png)

5. **Normal map** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**Texture** が選択されていることを確認します。

6. **Normal map** の横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

    ![Select asset](media/select-asset-texture.png)

7. 法線マップテクスチャーを選択し、[**OK**] をクリックします。

<!--
1. In the **Asset View**, select the texture you want to use as a normal map.

    ![Select normal map texture](media/select-normal-map-texture.png)

2. In the **Property Grid**, make sure the **type** is set to **normal map**.

    ![Normal map](media/normal-map-expanded-properties.png)

    This means Stride assumes the texture is in linear color space and converts it to a format suited for normal maps.

3. In the **Asset View**, select the material you want to use the normal map.

    ![Select material](media/select-material.png)

4. In the **Property Grid**, under the material **Geometry** properties, expand **Surface**.

    ![Use normal maps](media/use-normal-map.png)

5. Next to **Normal map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and make sure **Texture** is selected.

6. Next to **Normal map**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Select asset](media/select-asset-texture.png)

7. Select the normal map texture and click **OK**.
-->

マテリアルの詳細については、[マテリアル](../materials/index.md)を参照してください。
<!--
For more information about materials, see [Materials](../materials/index.md).
-->

## 法線マップのプロパティ
<!--
## Normal map properties
-->

法線マップのテクスチャには、[テクスチャの共通プロパティ](index.md)の他に、2 つのプロパティがあります。
<!--
Normal map textures have two properties in addition to the [common texture properties](index.md).
-->

![Normal map textures](media/normal-map-texture-properties.png)

| プロパティ | 説明
|----------|---------
| Invert Y | 正のY成分（緑）が接線空間で上を向いていると見なします。これは、法線マップを作成するために使用するツールによって異なります。

<!--
| Property | Description
|----------|---------
| Invert Y | Have positive Y components (green pixels) face up in tangent space. This option depends on the tools you use to create normal maps.
-->

マテリアルにおける法線マップのプロパティについては、[マテリアル：ジオメトリ属性](../materials/geometry-attributes.md)を参照してください。
<!--
For information about normal map properties in materials, see [Materials — Geometry attributes](../materials/geometry-attributes.md).
-->

## 関連項目
<!--
## See also
-->

* [テクスチャー](index.md)
* [マテリアル](../materials/index.md)
* [法線マッピング](https://ja.wikipedia.org/wiki/%E6%B3%95%E7%B7%9A%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0)

<!--
* [Textures](index.md)
* [Materials](../materials/index.md)
* [Normal mapping on Wikipedia](http://en.wikipedia.org/wiki/Normal_mapping)
-->
