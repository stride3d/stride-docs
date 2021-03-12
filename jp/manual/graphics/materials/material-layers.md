# マテリアル レイヤー
<!--
# Material layers
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

マテリアルのレイヤーを組み合わせて、より複雑なマテリアルを作ることができます。例えば、次のスクリーンショットは、錆のマテリアル（左）と金のマテリアル（右）を合成したもの（中）を示しています。
<!--
You can combine layers of materials to build more complex materials. For example, this screenshot shows the blending of a rust material (left) with a gold material (right):
-->

![media/material-layers-2.png](media/material-layers-2.png) 

次の図は、上のスクリーンショットで合成されたマテリアルの定義を示しています。
<!--
This diagram shows the definition of the materials blended in the screenshot above:
-->

![media/material-layers-3.png](media/material-layers-3.png)

## ブレンドマップ
<!--
## Blend maps
-->

**ブレンドマップ**は、Game Studio がレイヤーを合成する方法を決めるための[マテリアル マップ](material-maps.md)です。例えば、テクスチャーをブレンドマップとして使用することができます。
<!--
**Blend maps** are [material maps](material-maps.md) that determine how Game Studio blends layers. For example, you can use a texture as a blend map:
-->

![Blend map diagram](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)

ブレンドマップのテクスチャーが、合成後のパターンとどのように対応しているかに注目してください。
<!--
Note how the blend map texture corresponds to the patterning on the result.
-->

ブレンドマップは、他のマテリアルマップと同じように機能します。詳細については、[マテリアルマップ](material-maps.md)を参照してください。
<!--
Blend maps work the same way as any other kind of material map. For more information, see [Material maps](material-maps.md).
-->

## シェーディングモデル
<!--
## Shading models
-->

Stride では、マテリアルのシェーディングモデル（例：ディフューズモデル、スペキュラモデルなど）が同じであるか否かによって、マテリアルの合成方法が変わります。
<!--
Stride blends materials differently depending on whether their shading models (eg diffuse models, specular models, etc) are different.
-->

シェーディングモデルが**同じ**であるマテリアルを合成する場合、Stride はマテリアルの**属性**を収集し、そのシェーディングモデルをすべてのマテリアルに適用します。これにより、GPU を節約することができます。
<!--
If you blend materials that have **identical** shading models, Stride collects the **attributes** of the materials, then applies the shading models to all of them. This saves GPU.
-->

マテリアルが**異なる**シェーディングモデルを持っている場合、Stride は各マテリアルのシェーディングモデルをそのマテリアル属性に適用し、結果を合成します。これはより多くの GPU パワーを消費します。
<!--
If the materials have **different** shading models, Stride applies each material's shading models to that material's attributes, then blends the results. This uses more GPU.
-->

## レイヤーを追加する
<!--
## Add a layer
-->

1. レイヤーを追加したいマテリアルを選択します。

2. **プロパティグリッド**で、**Layers** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**追加**）をクリックします。

    ![Add a layer](media/add-a-layer.png)

    Game Studio は、マテリアルにレイヤーを追加します。

    ![Empty layer](media/empty-layer.png)

3. レイヤーの横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

    **Select an asset** ウィンドウが開きます。

    ![Select an asset](media/material-asset-picker.png)

4. レイヤーとして追加したいマテリアルを指定し、[**OK**] をクリックします。

    Game Studio は、マテリアルをレイヤーとして追加します。
    
    ![Added layer](media/added-layer.png)

5. **Blend Map** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（(**置換**）をクリックし、レイヤーの合成に使用したいブレンドマップの種類を選択します。ブレンドマップの詳細については、[マテリアルマップ](material-maps.md)を参照してください。

    ![Select blend map](media/select-blend-map.png)

<!--
1. Select the material you want to add a layer to.

2. In the **Property Grid** (on the right by default), next to **Layers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Add a layer](media/add-a-layer.png)

    Game Studio adds a layer to the material.

    ![Empty layer](media/empty-layer.png)

3. Next to the layer, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/material-asset-picker.png)

4. Specify a material you want to add as a layer and click **OK**.

    Game Studio adds the material as a layer.
    
    ![Added layer](media/added-layer.png)

5. Next to **Blend Map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the type of blend map you want to use to blend the layers. For more information about blend maps, see [Material maps](material-maps.md).

    ![Select blend map](media/select-blend-map.png)
-->

Game Studio では、指定したブレンドマップを使ってマテリアルレイヤーを合成します。必要な数だけレイヤーを追加することができます。
<!--
Game Studio blends the material layers using the blend map you specified. You can add as many layers as you need.
-->

## レイヤープロパティ
<!--
## Layer properties
-->

| プロパティ       | 説明
| --------------- | --------------- 
| Material        | このレイヤーに合成されているマテリアル
| Blend Map       | このレイヤーと上のレイヤーを合成するための[ブレンドマップ](material-maps.md)
| Layer Overrides | レイヤーのマテリアルの全テクスチャの UV に適用される **UV スケール**（オクルージョンマップを除く）

<!--
| Property        | Description 
| --------------- | --------------- 
| Material        | The material blended in this layer
| Blend Map       | The [blend map](material-maps.md) used to blend this layer with the layer above
| Layer Overrides |  **UV Scale**: A UV scale applied to all textures UV of the material of the layer (excluding the occlusion map)
-->

## 関連項目
<!--
## See also
-->

* [マテリアルマップ](material-maps.md)
* [マテリアル属性](material-attributes.md)
* [マテリアルスロット](material-slots.md)
* [開発者向けマテリアル](materials-for-developers.md)

<!--
* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
-->
