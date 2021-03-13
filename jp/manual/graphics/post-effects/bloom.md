# ブルーム
<!--
# Bloom
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
-->

**ブルーム（bloom）** エフェクトは、画像中の最も明るい部分を拡張し、周囲ににじみ出させることで、カメラを圧倒する明るい光をシミュレートします。
<!--
The **bloom** effect takes the brightest areas of an image, extends them, and bleeds them into the surrounding areas to simulate bright light overwhelming the camera.
-->

![media/bloom-1.png](media/bloom-1.png) 

このエフェクトは、[明度フィルター](bright-filter.md)エフェクトの結果を入力として使用します。
<!--
It uses the result of the [bright filter](bright-filter.md) effect as input.
-->

## プロパティ
<!--
## Properties
-->

![media/bloom-2.png](media/bloom-2.png) 

| プロパティ      | 説明
| -------------- | ---- 
| Radius         | ブルームの半径。高い値を設定すると、パフォーマンスに影響することがあります。
| Amount         | ブルームの量／強さ。
| Sigma Ratio    | これは、ブルームの減衰に影響します。これは、ブルームのカーネルを計算する際に、[ガウスぼかし](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B7%E3%82%A2%E3%83%B3%E3%81%BC%E3%81%8B%E3%81%97)の式で使われる[標準偏差](https://ja.wikipedia.org/wiki/%E6%A8%99%E6%BA%96%E5%81%8F%E5%B7%AE)（シグマ）です。
| Distortion     | 画像を、水平または垂直方向に引き伸ばします。
| Afterimage     | 残像をシミュレートします。残像とは、明るいスポットを長く見ていると、フェードアウトする前に目に「焼き付く」現象です。<p><br>![media/bloom-3.png](media/bloom-3.png)                                                                        
| Fade Out Speed | 残像（有効な場合）が各フレームで減少する係数です。1 は無限の残像を意味し、0 は残像が全くないことを意味します。
| Sensitivity    | 残像（有効な場合）の、光に対する敏感度です。この値が高いほど、光にカメラの焦点を合わせたときの効果が早く生じます。
| Expanded filtering | FXAA とブルームを反転させ、ぼかしにはよりリッチな合成カーネルを使用します。これにより、一時的なゆらぎを抑えることができます。

<!--
| Property       | Description 
| -------------- | ---- 
| Radius         | Radius of the bloom. Note that high values can affect performance.        
| Amount         | Amount/strength of bloom. 
| Sigma Ratio    | This affects the fall-off of the bloom. It's the [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation) (sigma) used in the [Gaussian blur](http://en.wikipedia.org/wiki/Gaussian_blur) formula when calculating the kernel of the bloom. 
| Distortion     | Stretches the image horizontally or vertically.
| Afterimage     | Simulates [afterimage (Wikipedia)](http://en.wikipedia.org/wiki/Afterimage) — the effect of bright spots "burning" into the  retina the longer you look at them, before fading away.  <p><br>![media/bloom-3.png](media/bloom-3.png)                                                                        
| Fade Out Speed | The factor by which the afterimage (if enabled) decreases at each frame (1 means infinite persistence, while 0 means no persistence at all)
| Sensitivity    | How sensitive the afterimage (if enabled) is to light. The higher this value is, the faster the effect is created when the camera focuses on a light.
| Expanded filtering | Reverses FXAA and bloom, and uses a richer convolution kernel during blurring. This helps reduce temporal shimmering.
-->

## 関連項目
<!--
## See also
-->

* [アンチエイリアシング](anti-aliasing.md)
* [アンビエント オクルージョン](ambient-occlusion.md)
* [明度フィルター](bright-filter.md)
* [色変換](color-transforms/index.md)
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
-->
