# マテリアル属性
<!--
# Material attributes
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

**マテリアル属性**は、拡散色や拡散シェーディングモデルなど、マテリアルの中核となる特性を定義します。属性は、**ジオメトリ（Geometry）**、**シェーディング（Shading）**、**その他（Misc）** に分類されます。
<!--
**Material attributes** define the core characteristics of a material, such as its diffuse color, diffuse shading model, and so on. Attributes are organized into **geometry**, **shading**, and **misc**.
-->

![media/material-attributes-1.png](media/material-attributes-1.png)

属性には 2 種類あります。
<!--
There are two types of attribute:
-->

- シェーディングモデルの入力値として使用される属性（例えば、**Diffuse** 属性は、拡散シェーディングモデルで使用される色を提供します）。
- シェーディングモデルを変えることができる属性（例えば、ランバートモデルなどの拡散シェーディングモデルは、diffuse 属性の色を解釈します）。

<!--
- attributes used as input values for a shading model (for example, the **Diffuse** attribute provides only color used by the diffuse shading model)
- attributes that can change the shading model (for example, diffuse shading models, such as the lambert model, interprets the diffuse attribute color)
-->

属性は、マテリアルのレイヤーにも影響します。マテリアルがモデルマテリアルとして直接使用される場合、そのルート属性はすべて最初のレイヤーの一部とみなされます。
<!--
Attributes contribute to a layer of a material. If a material is directly used as a model material, all its root attributes are considered part of the first layer.
-->


また、[カスタム シェーダー](../effects-and-shaders/custom-shaders.md)を記述して、マテリアル属性で使用することもできます。
<!--
You can also write [custom shaders](../effects-and-shaders/custom-shaders.md) to use in material attributes.
-->

## このセクションの内容
<!--
## In this section
-->

* [ジオメトリ属性](geometry-attributes.md)
* [シェーディング属性](shading-attributes.md)
* [その他の属性](misc-attributes.md)
    * [クリアコートシェーディング](clear-coat-shading.md)

<!--
* [Geometry attributes](geometry-attributes.md)
* [Shading attributes](shading-attributes.md)
* [Misc attributes](misc-attributes.md)
    * [Clear coat shading](clear-coat-shading.md)
-->

## 関連項目
<!--
## See also
-->

* [マテリアル マップ](material-maps.md)
* [マテリアル レイヤー](material-layers.md)
* [マテリアル スロット](material-slots.md)
* [開発者向けのマテリアル情報](materials-for-developers.md)
* [カスタムシェーダー](../effects-and-shaders/custom-shaders.md)

<!--
* [Material maps](material-maps.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
-->

<!-- コピペミス？
Wikipedia is edited by volunteers; the only time and resources wasted is their own. Editors should work in the areas they find interesting and believe will help the project, whether that's as small as [[correcting grammar|Wikipedia:Comprised_of]] or as big as writing FAs. (I do both.) 

In this case, renaming the Windows article will be a trivial task if no one opposes it. I started the Talk page discussion first to 1) make sure my logic was sound 2) check I wasn't stepping on toes. I was being polite. 
-->
