# シェーディング属性
<!--
# Shading attributes
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

マテリアルの**シェーディング属性**は、マテリアルの色特性と、光に対する反応を定義します。
<!--
The material **shading attributes** define the color characteristics of the material and how it reacts to light.
-->

![Shading attributes](media/shading-properties.png)

> [!Note]
>マテリアルを表示するには、モデル属性で少なくとも 1 つのシェーディングモデル（拡散（diffuse）、鏡面反射（specular）、放射（emissive））を有効にする必要があります。

<!--
> [!Note]
>To display a material, you need to select at least one shading model (diffuse, specular or emissive model) in the model attributes.
-->

## 拡散（Diffuse）
<!--
## Diffuse
-->

**拡散（diffuse）** はマテリアルの基本色です。純粋な拡散マテリアルは、完全に無反射で、見た目も「フラット」です。
<!--
The **diffuse** is the basic color of the material. A pure diffuse material is completely non-reflective and "flat" in appearance.
-->

![media/material-attributes-25.png](media/material-attributes-25.png) 

最終的な拡散の度合いは、次のように計算されます。
<!--
The final diffuse contribution is calculated like this:
-->

- **Diffuse** は、拡散モデルで使われる色を定義します。

- **Diffuse model** は、拡散コンポーネント（後述）のレンダリングでどのシェーディングモデルが使われるかを定義します。

<!--
- the **diffuse** defines the color used by the diffuse model

- the **diffuse model** defines which shading model is used for rendering the diffuse component (see below)
-->

今のところ、Diffuse 属性では **拡散マップ（Diffuse Map）** だけがサポートされています。
<!--
Currently, the diffuse attribute supports only a **diffuse map**.
-->

![media/material-attributes-23.png](media/material-attributes-23.png)

### 拡散モデル（Diffuse Model）
<!--
### Diffuse model
-->

**拡散モデル（Diffuse Model）** は、拡散マテリアルが光に対してどのように反応するかを定義します。**Lambert** または **cel-shading** を設定できます。
<!--
The **diffuse model** determines how the diffuse material reacts to light. You can use the **Lambert** or **cel-shading**.
-->

#### ランバートモデル（Lambert model）
<!--
#### Lambert model
--->

ランバートモデルでは、光はすべての方向に等しく反射され、その強度はコサインの角度分布（法線と光の角度）に従います。
<!--
Under the Lambert model, light is reflected equally in all directions with an intensity following a cosine angular distribution (angle between the normal and the light):
-->

![media/material-attributes-24.png](media/material-attributes-24.png)

> [!Note]
> 純粋なランバートンマテリアルは、現実には存在しません。現実の物体は、常に若干の鏡面反射を持っています。この効果は、かすめ角でよりはっきりと現れます（拡散面の大半がかすめ角で光沢を帯びます）。

<!--
> [!Note]
> A pure Lambertian material doesn't exist in reality. A material always has a little specular reflection. This effect is more visible at grazing angles (a mostly diffuse surface becomes shiny at grazing angle).
-->

| プロパティ      | 説明
| ------------- | ----------- 
| Diffuse map   | 拡散マップカラープロバイダ
| Diffuse model | 拡散光用のシェーディングモデル

<!--
| Property      | Description  
| ------------- | ----------- 
| Diffuse map   | The diffuse map color provider                                          
| Diffuse model | The shading model for diffuse lighting
-->

## 鏡面反射（Specular）
<!--
## Specular
-->

**鏡面反射（Specular）** は、マテリアルの中で反射する光の点です。
<!--
A **specular** is a point of light reflected in a material.
-->

![Specular highlight](media/specular-highlight.png)

鏡面反射色は、メタルネスマップ（拡散色をベースカラーとする）や、鏡面反射マップ（鏡面反射色を拡散色とは別に定義する）を使って定義することができます。
<!--
The specular color can be defined using a metalness map (which uses the diffuse color as a base color), or a specular map (the specular color is defined separately from the diffuse color).
-->

### メタルネスマップ（Metalness map）
<!--
### Metalness map
-->

**メタルネスマップ（metalness map）** を使うと、拡散色と鏡面反射色のパラメーター付けが簡単になります。
<!--
The **metalness map** simplifies parametrization between the diffuse and specular color.
-->

ほとんどすべての物体には必ず「金属感（metalness）」や反射率（relrectance）があることを考慮すると、メタルネスマップを使用することで、最小限のパラメーターでリアルなマテリアルを実現できます。
<!--
By taking into into account the fact that almost all materials always have some "metalness"/reflectance in them, using the metalness map provides realistic materials with minimal parametrization.
-->

最終的な鏡面反射色は、固定された低反射（低リフレクション）色と拡散色を混ぜ合わせて算出されます。
<!--
The final specular color is calculated by mixing a fixed low-reflection color and the diffuse color.
-->

- メタルネス色を `0.0` とすると、有効な鏡面反射色は `0.02` となり、拡散色は変化しません。このマテリアルは金属ではありませんが、若干の反射率を示し、[フレネル効果](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%8D%E3%83%AB%E3%81%AE%E5%BC%8F)の影響を受けます。

- メタルネス色を `1.0` にすると、有効な鏡面反射色は拡散色と等しくなり、その拡散色は `0` になります。このマテリアルは、純粋な金属であるとみなされます。

    ![media/material-attributes-26.png](media/material-attributes-26.png) 

<!--
- With the metalness color at `0.0`, the effective specular color is equal to `0.02`, while the diffuse color is unchanged. The material is not metal but exhibits some reflectance and is sensitive to the Fresnel effect.

- With the metalness color at `1.0`, the effective specular color is equal to the diffuse color, and the diffuse color is set to `0`. The material is considered a pure metal.

    ![media/material-attributes-26.png](media/material-attributes-26.png) 
-->

次のスクリーンショットは、以下の属性を持つマテリアルのメタルネス係数の結果を示しています。

- Gloss = `0.8`
- Diffuse = `#848484`, Lambert
- Specular GGX

<!--
 The screenshots below show the result of the metalness factor on a material with the following attributes:

- Gloss = `0.8`
- Diffuse = `#848484`, Lambert
- Specular GGX
-->

| 純粋な拡散（メタルネスなし） | Metalness = `0.0`    | Metalness = `1.0` 
| ---------------------------- | ------------------ | ---------------
|  ![media/material-attributes-27.png](media/material-attributes-27.png)  | ![media/material-attributes-28.png](media/material-attributes-28.png)  | ![media/material-attributes-29.png](media/material-attributes-29.png)  |
| - T拡散色が圧倒的に強い | - 拡散色が圧倒的に強い   | - 拡散色は見えない
| - 鏡面反射色は見えない | - 鏡面反射色は見える（`0.02`） | - 鏡面反射色は見える

### スペキュラーマップ（Specular map）
<!--
### Specular map
-->

スペキュラーマップ（Specular map）を使うと、実際の鏡面反射色より細かくコントロールできますが、それに合わせて拡散色を変更する必要があります。
<!--
The specular map provides more control over the actual specular color, but requires you to modify the diffuse color accordingly.
-->

メタルネスのワークフローとは異なり、低反射（低リフレクション）の場合でも拡散色とは異なる鏡面反射色を設定することができ、特殊な挙動を持つマテリアルにも対応できます。
<!--
Unlike the metalness workflow, this lets you have a different specular color from the diffuse color even in low-reflection scenarios, allowing for materials with special behavior.
-->

> [!Note]
> 独立した[レイヤー](material-layers.md)を追加することで、メタルネスとスペキュラーのワークフローを同じマテリアルで組み合わせることができます。

<!--
> [!Note]
> You can combine metalness and specular workflows in the same material by adding separate [layers](material-layers.md).
-->

## スペキュラーモデル（Specular model）
<!--
## Specular model
-->

純粋な鏡面反射は、鏡の方向に光のハイライトを生成します。実際には、完全に滑らかではない広範囲の鏡面反射マテリアルが、複数の方向に光を反射することがあります。Stride は、Cook-Torrance として知られている**マイクロファセット（microfacet）** モデルを使って、これをシミュレートします。
<!--
A pure specular surface produces a highlight of a light in a mirror direction. In practice, a broad range of specular materials, not entirely smooth, can reflect light in multiple directions. Stride simulates this using the **microfacet** model, also known as [Cook-Torrance (academic paper)](http://www.cs.columbia.edu/~belhumeur/courses/appearance/cook-torrance.pdf).
-->

![media/material-attributes-33.png](media/material-attributes-33.png) 

マイクロファセットは次の式で定義されます。ここで、Rs は結果として得られる鏡面反射率です。
<!--
The microfacet is defined by the following formula, where Rs is the resulting specular reflectance:
-->

![media/material-attributes-34.png](media/material-attributes-34.png) 

| プロパティ           | 説明
| ------------------- | ------- 
| Fresnel             | 反射・透過する光の量の割合を定義します。サポートされるモデルは以下の通りです。<br><p>**Schlick**：[Schlick による近似値](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%8D%E3%83%AB%E3%81%AE%E5%BC%8F#%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E8%BF%91%E4%BC%BC%E5%BC%8F)（既定）</br> <br><p>**Thin glass**：薄いガラスを通過する光のシミュレーション</br> <br><p>**None**：フレネル効果のない素のマテリアル</br>
| Visibility          | マイクロファセット間の可視性を (0, 1) の範囲で定義します。また、オリジナルの Cook-Torrance の論文では幾何減衰（Shadowing と Masking）として知られています。Stride ではこの式を簡略化し、代わりに Visibility 項を使用しています。<br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br> <br><p>そして<br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br> <br><p>**Schlick GGX**（既定）：</br> <br><p>**Implicit**：マイクロファセットは常に表示され、Shadowing や Masking は発生しません。</br> <br><p>**Cook-Torrance**：</br> <br><p>**Kelemen**：</br> <br><p>**Neumann**：</br> <br><p>**Smith-Beckmann**：</br> <br><p>**Smith-GGX correlated**：</br> <br><p>**Schlick-Beckmann**：</br>
| Normal Distribution | <br><p>法線の分布の仕方を定義します。gloss 属性は、この関数のこの部分で、法線の分布を変更するために使用されます。</br> <br><p>**GGX**（既定）：</br> <br><p>**Beckmann**：</br>  <br><p>**Blinn-Phong**：</br> 

<!--
| Property            | Description                                                    
| ------------------- | ------- 
| Fresnel             | Defines the amount of light that is reflected and transmitted. The models supported are: <br><p>**Schlick**: An approximation of the Fresnel effect (default)</br> <br><p>**Thin glass**: A simulation of light passing through glass</br>  <br><p>**None**: The material as-is with no Fresnel effect</br> 
| Visibility          | Defines the visibility between of the microfacets between (0, 1). Also known as the geometry attenuation - Shadowing and Masking - in the original Cook-Torrance. Stride simplifies the formula to use the visibility term instead: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br>      <br><p>and <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br>        <br><p>**Schlick GGX** (default)</br> <br><p> **Implicit**: The microsurface is always visible and generates no shadowing or masking</br> <br><p>**Cook-Torrance**</br>  <br><p>**Kelemen**</br> <br><p>**Neumann**</br> <br><p>**Smith-Beckmann**</br> <br><p>**Smith-GGX correlated**</br>  <br><p>**Schlick-Beckmann**</br> 
| Normal Distribution | <br><p>Defines how the normal is distributed. The gloss attribute is used by this part of the function to modify the distribution of the normal.</br> <br><p>**GGX** (default) </br> <br><p>**Beckmann**</br>  <br><p>**Blinn-Phong**</br> 
-->

## 放射（Emissive）
<!--
## Emissive
-->

**放射（emissive）** マテリアルとは、光を発する表面のことです。
<!--
An **emissive** material is a surface that emits light.
-->

![media/material-attributes-37.png](media/material-attributes-37.png) 

HDR、[Bloom](../post-effects/bloom.md)、[明度フィルター](../post-effects/bright-filter.md) のポストプロセッシングエフェクトで、放射マテリアルの影響を見ることができます。
<!--
With HDR, a [Bloom](../post-effects/bloom.md) and a [Bright filter](../post-effects/bright-filter.md) post-processing effects, we can see the influence of an emissive material:
-->

![media/material-attributes-38.png](media/material-attributes-38.png) 

| プロパティ    | 説明
| ------------ | -------------- 
| Emissive map | 放射マップカラープロバイダー
| Intensity    | カラープロバイダーの色に乗じる係数
| Use alpha    | 放射マップのアルファ値をマテリアルのメインアルファ色として使用する（既定では拡散マップのアルファ値を使用する）

<!--
| Property     | Description                                                               
| ------------ | -------------- 
| Emissive map | The emissive map color provider      
| Intensity    | The factor to multiply by the color of the color provider   
| Use alpha    | Use the alpha of the emissive map as the main alpha color of the material (instead of using the alpha of the diffuse map by default)
-->

## 関連項目
<!--
## See also
-->

* [ジオメトリ属性](geometry-attributes.md)
* [その他の属性](misc-attributes.md)
* [マテリアルマップ](material-maps.md)
* [マテリアルレイヤー](material-layers.md)
* [開発者向けのマテリアル情報](materials-for-developers.md)
* [カスタムシェーダー](../effects-and-shaders/custom-shaders.md)

<!--
* [Geometry attributes](geometry-attributes.md)
* [Misc attributes](misc-attributes.md)
* [Material maps](material-maps.md)
* [Material layers](material-layers.md)
* [Materials for developers](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
-->
