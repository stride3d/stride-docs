# 明度フィルター
<!--
# Bright filter
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
-->

**明度フィルター（Bright filter）** は、画像の中で最も明るい部分を抽出します。明度フィルター自体はポストエフェクトではありませんが、その結果は、[ブルーム](bloom.md)、[ライト ストリーク](light-streaks.md)、[レンズ フレア](lens-flare.md)などのエフェクトで使用されます。
<!--
The **bright filter** extracts the brightest areas of an image. The bright filter itself isn't a post effect, but its result is used later by other effects such as [bloom](bloom.md), [light streaks](light-streaks.md), and [lens flare](lens-flare.md).
-->

## プロパティ
<!--
## Properties
-->

![media/bright-filter-1.png](media/bright-filter-1.png)

| プロパティ  | 説明
| --------- | --------- 
| Threshold | 色が明度フィルターを通過するかしないかを判断するためのしきい値です。
| Steepness | 値を増やすと Threshold を上げるのと同様の効果が得られますが、画像がギザギザにあるリスクが少なくなります。しかし、色はよりさめたものになります。シーンに HDR の広がりがある場合は、一時的な安定性を高めるために、この値を、予想される最大値の中間付近の値に設定すると、明るいスポットをスムーズにフィルタリングすることができます。鮮明さのために、Threshold を維持することをお勧めします。
| Color     | 明度フィルターの結果に、この色の値を乗じます。結果として、他のポストエフェクトの色に影響を与えます。この色値を白に設定すると、色は変更されません。

<!--
| Property  | Description     
| --------- | --------- 
| Threshold | The threshold used to determine if a color passes or fails the bright filter. 
| Steepness     | Increasing the steepness has a similar effect to increasing the threshold, but causes less aliasing risk. However, the effect is more washed out. For better temporal stability, if your scene has HDR spreads, setting the steepness to a value somewhere in the middle of the expected maximum allows for smooth filtering of bright spots. For sharpness, we recommend you keep a threshold.
| Color     | The result of the bright filter is modulated by this color value, then affects the color of other post effects. If set to white, the color isn't modified.
-->

## このセクションの内容
<!--
## In this section
-->

* [アンチエイリアシング](anti-aliasing.md)
* [アンビエント オクルージョン](ambient-occlusion.md)
* [ブルーム](bloom.md)
* [色変換](color-transforms/index.md)
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
-->
