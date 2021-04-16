# 被写界深度
<!--
# Depth of field
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
-->

レンダリングによって生成された非常にシャープな画像が、人工的に見えることがあります。**被写界深度（DOF; Depth of field）** エフェクトは、実際のカメラレンズが物体に焦点を合わせたときの動作をシミュレートするもので、背景や前景の物体がピンボケになります。
<!--
By default, rendering produces a very sharp image, which can look artificial. **Depth of field** effects simulate the behavior of a real camera lens focusing an object, leaving background and foreground objects out of focus.
-->

![media/realworld_dof_agave_flowers.jpg](media/realworld_dof_agave_flowers.jpg) 

この効果を生み出すために、Stride はオリジナルの画像に異なる強度のぼかしを加えた複数のバージョンを作成し、それらを使って補間します。使用するバージョンの数が多ければ多いほど品質は向上しますが、パフォーマンスは低下します。
<!--
To create the effect, Stride creates several versions of the original image with different intensities of blur, and interpolates between them. The more layers used, the better the quality, but at performance cost.
-->

## プロパティ
<!--
## Properties
-->

![media/depth-of-field-2.png](media/depth-of-field-2.png)

| プロパティ  | 説明
| ---------- | -------- 
| Size       | [ボケ](https://ja.wikipedia.org/wiki/%E3%83%9C%E3%82%B1_(%E5%86%99%E7%9C%9F))の大きさを、画像幅のファクターで表したものです。解像度には依存しません。サイズが大きければ大きいほど、パフォーマンスは悪くなります。
| DOF Areas  | 被写界深度を表す領域は、カメラからの距離によって 3 つのゾーンに分かれます。近い側のフォーカス外領域（X から Y まで）、フォーカス領域（Y から Z まで）、遠い側のフォーカス外領域（Z から W まで）です。
| Technique  | このテクニックは、パフォーマンスとボケの形の両方に影響します。 <p><br>**Circular Gaussian** は高速ですが、現実的ではありません。<p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Hexagonal Triple Rhombi** は、Gaussian よりも重いです。<p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Hexagonal McIntosh** が一番重いです。<p><br>![media/depth-of-field-5.png](media/depth-of-field-5.png)   
| Auto Focus | 有効にすると、画面中央の被写体にピントを合わせて、被写界深度の領域を自動的に更新します。

<!--
| Property   | Description     
| ---------- | -------- 
| Size       | Size of the [bokeh (Wikipedia)](https://en.wikipedia.org/wiki/Bokeh), expressed as a factor of the image width so it's resolution-independent. The bigger the size, the worse the performance                                              
| DOF Areas  | Areas of the depth of field. There are three main zones defined by their distance from the camera: near out-of-focus area (from X to Y), in-focus area (from Y to Z), and far out-of-focus area (from Z to W) 
| Technique  | The technique affects both the performance and the shape of the bokeh.  <p><br>**Circular Gaussian** is fast but unrealistic. <p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Hexagonal Triple Rhombi** is heavier than Gaussian. <p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Hexagonal McIntosh** is the heaviest. <p><br>![media/depth-of-field-5.png](media/depth-of-field-5.png)   
| Auto Focus | Automatically updates the DOF areas so the camera focuses on the object at the center of the screen
-->

## 関連項目
<!--
## See also
-->

* [アンチエイリアシング](anti-aliasing.md)
* [アウトライン](outline.md)
* [アンビエント オクルージョン](ambient-occlusion.md)
* [ブルーム](bloom.md)
* [明度フィルター](bright-filter.md)
* [色変換](color-transforms/index.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Outline](outline.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
-->
