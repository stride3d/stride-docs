# ガンマ補正
<!--
# Gamma correction
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

ポストエフェクトの計算は、すべて線形空間（すなわち RGB 空間）で行われます。つまり、ピクセルの色の値を 2 倍にすると、そのピクセルが発する光も 2 倍になります。これにより、正しい照明計算が保証されます。
<!--
All post effect calculations are made in a linear space (ie RGB space). This means doubling the color value of a pixel doubles the light it emits. This guarantees correct lighting calculations.
-->

しかし、現実のコンピューターモニターではこのようにはいかず、暗い色の値に対しては、本来よりもはるかに少ない光しか発しない傾向があります。このため、他のポストエフェクトを適用したあとには、画像を線形空間から sRGB 空間（またはガンマ空間）に変換するために **[ガンマ補正gamma correction](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%9E%E5%80%A4)** を行います。
<!--
However, real-world computer monitors don't behave this way: for dark color values they tend to emit much less light than they should. For this reason, after our other post effects have been applied, we apply **gamma correction** to transform our image from a linear space to a sRGB space (or gamma space). 
-->

sRGB 空間のバッファは、モニターやテレビ画面に正しく表示されます。
<!--
A buffer in the sRGB space displays correctly on a monitor or a TV screen.
-->

![media/gamma-correction-1.png](media/gamma-correction-1.png) 

ガンマ補正をされていない画像は、暗い部分が、本来の色よりも暗く見えます。
<!--
Non-gamma-corrected images have dark areas appear darker than they're supposed to.
-->

![media/gamma-correction-2.png](media/gamma-correction-2.png) 

## プロパティ
<!--
## Properties
-->

| プロパティ | 説明
| -------- | ----------------------------------------------- 
| Value    | ガンマ値。一般的には 2.2 付近です。

<!--
| Property | Description                                     |
| -------- | ----------------------------------------------- |
| Value    | Gamma value. A typical value is around 2.2. |
-->

## 関連項目
<!--
## See also
-->

* [フィルム グレイン](film-grain.md)
* [トーンマップ](tonemap.md)
* [ビネット](vignetting.md)
* [カスタム色変換](custom-color-transforms.md)

<!--
* [Gamma correction (Wikipedia)](http://en.wikipedia.org/wiki/Gamma_correction)
* [Film grain](film-grain.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)
* [Custom color transforms](custom-color-transforms.md)
-->
