# その他の属性
<!--
# Misc attributes
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

![Misc properties](media/misc-properties.png)

## オクルージョン（Occlusion）
<!--
## Occlusion
-->

**Occlusion** プロパティでは、**オクルージョンマップ**を設定することができます。これは既定のオクルージョン属性です。オクルージョンマップは、テクスチャーに[ベイク](https://entry.cgworld.jp/terms/%E3%83%99%E3%82%A4%E3%82%AF%E5%87%A6%E7%90%86.html)されたジオメトリ オクルージョン情報を使って、環境光と直射光を調整します。
<!--
Under the **Occlusion** properties, you can set an **occlusion map**. This is the default occlusion attribute. The occlusion map use geometry occlusion information baked into a texture to modulate the ambient and direct lighting.
-->

![media/material-attributes-39.png](media/material-attributes-39.png) 

次のスクリーンショットは、オクルージョンマップとキャビティマップの使用例です。
<!--
The screenshots below demonstrate the use of occlusion maps and cavity maps:
-->

| オクルージョンマップ | キャビティマップ   | 最終合成
| ------- | ------ | ------- 
| ![media/material-attributes-40.png](media/material-attributes-40.png)  | ![media/material-attributes-41.png](media/material-attributes-41.png)  | ![media/material-attributes-42.png](media/material-attributes-42.png)  
| 環境光の粗いオクルージョン  | 直射光のきめ細かなオクルージョン  | 結果

<!--
| Occlusion Map  | Cavity Map    | Final Composition    
| ------- | ------ | ------- 
| ![media/material-attributes-40.png](media/material-attributes-40.png)  | ![media/material-attributes-41.png](media/material-attributes-41.png)  | ![media/material-attributes-42.png](media/material-attributes-42.png)  
| Coarse occlusion of the ambient light  | Fine-grained occlusion of direct light  | Result                       
-->

| プロパティ  | 説明
| --------- | ---- 
| Occlusion Map             | マテリアル上でどれだけ環境光にアクセスできるかを決定する、オクルージョンマップのスカラープロバイダです。1.0 の場合、マテリアルが環境光によって完全に照らされていることを意味します。0.0 の場合、マテリアルが環境光によってまったく照らされていないことを意味します。
| Direct Lighting Influence | オクルージョンマップに適用され、直射光に影響を与えます。  |
| Cavity Map                | 直射光と乗算される、キャビティマップのスカラープロバイダです。これにより、直射光が入らない非常に細かい空洞を定義することができます。キャビティマップは通常、薄い凹状のキャビティに対して定義されます。
| Diffuse Cavity            | キャビティマップの拡散色への影響度を表す係数です。1.0 の場合、キャビティマップが拡散色に完全に影響を与えることを意味します。
| Specular Cavity           | キャビティマップの反射への影響度を表す係数です。1.0 の場合、キャビティマップが反射に完全に影響を与えることを意味します。

<!--
| Property  | Description 
| --------- | ---- 
| Occlusion Map             | The occlusion map scalar provider that determines how much ambient light is accessible on the material. A value of 1.0 means that the material is fully lit by ambient lighting. A value of 0.0 means that the material is not lighted by the ambient lighting 
| Direct Lighting Influence | Applies to Occlusion Map and influences direct lighting  |
| Cavity Map                | The cavity map scalar provider is multiplied with direct lighting. It lets you define very fine grained cavity where direct light can't enter. The cavity map is usually defined for thin concave cavity
| Diffuse Cavity            | A factor for diffuse lighting influence of the cavity map. A value of 1.0 means the cavity map fully influences the diffuse lighting 
| Specular Cavity           | A factor for specular lighting influence of the cavity map. A value of 1.0 means the cavity map fully influences the specular lighting       
-->

## 透明度（Transparency）
<!--
## Transparency
-->

**Transparency** プロパティで、マテリアルの透明度を変更できます。**合成（Blend）**、**加算（Additive）**、**カットオフ（Cutoff）** のいずれかを選択できます。
<!--
Under the **Transparency** properties, you can specify values that change the transparency of the material. You can coose **Blend**, **Additive**, or **Cutoff**.
-->

### 加算（Additive）

加算透過では、拡散色ならびに拡散色／発光色のアルファが考慮されます。
<!--
The additive transparency takes into account the diffuse and diffuse/emissive alpha.
-->

![media/material-attributes-47.png](media/material-attributes-47.png) 

- **Alpha** プロパティの値が 0.5 より小さい場合、反射ハイライトだけを見ることができます。マテリアル自体は全く見えません。
  
  | Alpha = 0.25   | Alpha = 0.5  
  | -------------- | -----------
  | ![media/material-attributes-48.png](media/material-attributes-48.png)  | ![media/material-attributes-49.png](media/material-attributes-49.png)  |      
  | 加算モードでは反射ハイライトのみ見ることができます。| 透過度は完全に加算されます。反射ハイライトは最大です。

- **Alpha** プロパティの値が 1.0 以下の場合, マテリアルは、拡散／発光コンポーネントで半透明になります。拡散コンポーネントにアルファ値がある場合は、透明になります。

  | Alpha = 0.75 | Alpha = 1.0 
  | -------------- | ---------------------- |
  | ![media/material-attributes-50.png](media/material-attributes-50.png)  | ![media/material-attributes-51.png](media/material-attributes-51.png)          
  | 反射ハイライト、アルファ付き拡散色、半透明拡散色         | 反射ハイライト、アルファ付き拡散色、不透明拡散色

<!--
- If the **Alpha** property is less than 0.5, only the specular highlights are visible. The material itself is completely invisible.

  | Alpha = 0.25   | Alpha = 0.5  
  | -------------- | -----------
  | ![media/material-attributes-48.png](media/material-attributes-48.png)  | ![media/material-attributes-49.png](media/material-attributes-49.png)  |      
  | We only see the specular highlight in additive mode  | Transparency is fully additive. Specular highlights at maximum

- If the **Alpha** <= 1.0, the material is semi-opaque with the diffuse/emissive component. If the diffuse component has an alpha, it's transparent.
  
  | Alpha = 0.75 | Alpha = 1.0 
  | -------------- | ---------------------- |
  | ![media/material-attributes-50.png](media/material-attributes-50.png)  | ![media/material-attributes-51.png](media/material-attributes-51.png)          
  | Specular highlights, diffuse with alpha and semi-opaque diffuse          | Specular highlights, diffuse with alpha and opaque diffuse  
-->

| プロパティ | 説明
| -------- | -----------
| Alpha    | アルファ値は次のように解釈されます。<p><br> Alpha ≦ 0.5 の場合、マテリアルは拡散色コンポーネントなしの加算モードでレンダリングされます（反射ハイライトのみ）</p></br> <p><br> Alpha ≦ 1.0 の場合、マテリアルは拡散／発光コンポーネント付きの半透明モードでレンダリングされます。拡散コンポーネントにアルファ値がある場合は、透明として表示されます</p></br>|。
| Tint     | 透明レイヤーに色彩を適用します。

<!--
| Property | Description 
| -------- | -----------
| Alpha    | The alpha value is interpreted like this:<p><br> Alpha <= 0.5, the material is rendered in additive mode without the diffuse component (only specular highlights)</p></br> <p><br>Alpha <= 1.0, the material is rendered in semi-opaque mode with the diffuse/emissive component. If the diffuse component has an alpha, it's displayed as transparent</p></br>|
| Tint     | Apply a color tint to the transparency layer
-->

### カットオフ（Cuttoff）
<!--
### Cuttoff
-->

アルファ値が **Alpha** スライダーで指定したしきい値を超えた箇所のみ、マテリアルをレンダリングします。
<!--
Renders a material when the current alpha color is above the threshold you specify with the **Alpha** slider.
-->

![media/material-attributes-43.png](media/material-attributes-43.png) 

次のスクリーンショットは、カットオフアルファ値の影響を示しています。
<!--
The following screenshots show the influence of the cutoff Alpha value.
-->

| Alpha = 0.01 | Alpha = 0.5     | Alpha = 1.0    
| -------------| --------------- | ------------ 
| ![media/material-attributes-44.png](media/material-attributes-44.png)  | ![media/material-attributes-45.png](media/material-attributes-45.png)  | ![media/material-attributes-46.png](media/material-attributes-46.png)

<!--
| Alpha = 0.01 | Alpha = 0.5     | Alpha = 1.0    
| -------------| --------------- | ------------ 
| ![media/material-attributes-44.png](media/material-attributes-44.png)  | ![media/material-attributes-45.png](media/material-attributes-45.png)  | ![media/material-attributes-46.png](media/material-attributes-46.png)
-->

### クリアコート
<!--
### Clear coat
-->

次の図は、**クリアコートシェーディング**を使って、物理ベースレンダリング（PBR）により車の塗装を再現しています。
<!--
**Clear-coat shading** uses physically-based rendering to simulate vehicle paint.
-->

![Clear coat](media/clear-coat-2.jpg)

詳細については、[クリアコートシェーディング](clear-coat-shading.md)を参照してください。
<!--
For details, see [clear-coat shading](clear-coat-shading.md).
-->

## 関連項目
<!--
## See also
-->

* [ジオメトリ属性](geometry-attributes.md)
* [シェーディング属性](shading-attributes.md)
* [クリアコートシェーディング](clear-coat-shading.md)
* [マテリアルマップ](material-maps.md)
* [マテリアルレイヤー](material-layers.md)
* [マテリアルスロット](material-slots.md)
* [開発者向けのマテリアル情報](materials-for-developers.md)
* [カスタムシェーダー](../effects-and-shaders/custom-shaders.md)

<!--
* [Geometry attributes](geometry-attributes.md)
* [Shading attributes](shading-attributes.md)
* [Clear-coat shading](clear-coat-shading.md)
* [Material maps](material-maps.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
-->
