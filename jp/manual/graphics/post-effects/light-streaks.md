# ライトストリーク
<!--
# Light streaks
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
-->

**ライトストリーク（Light streaks）** エフェクトは、[ブルームエフェクト](bloom.md)と同様に、[明度フィルター](bright-filter.md)の結果を利用して、明るい部分をある方向に沿ってにじませるものです。光点から星型のビームが発生します。
<!--
Similar to the [bloom effect](bloom.md), the **light streak** effect uses the result of the [bright filter](bright-filter.md) to make the bright areas bleed along a direction. It creates star-pattern beams from the light point.
-->

![media/light-streaks-1.png](media/light-streaks-1.png) 

## プロパティ
<!--
## Properties
-->

![media/light-streaks-2.png](media/light-streaks-2.png) 

| プロパティ                 | 説明
| ------------------------- | ---------------- 
| Amount                    | ライトストリークの強さ。
| Streak Count              | 輝点から放たれるビームの数。数が多いほど、パフォーマンスコストが高くなります。
| Attenuation               | ストリークに沿って光が減衰する速さ（0 ならすぐに減衰し、1 ならまったく減衰しません） 。
| Phase                     | 星型パターンの位相（角度）
| Color Aberration Strength | ストリークに沿った色収差の強さ。<br>![media/light-streaks-3.png](media/light-streaks-3.png) <br>ストリークが複数の色（黄、紫、緑、ピンク）を含んでいることに注目してください。
| Is Anamorphic             | ハリウッド作品で広く使用されている[アナモルフィックレンズ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%8A%E3%83%A2%E3%83%AB%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%83%AC%E3%83%B3%E3%82%BA)をシミュレートします。<br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> この図では、位相（phase）が 0 である 2 本のライトストリークを使い、アナモルフィックモードを有効にして、明度フィルターの結果を水平方向にわずかに歪ませています。

<!--
| Property                  | Description   
| ------------------------- | ---------------- 
| Amount                    | Strength of the light streak
| Streak Count              | Number of beams emitted by a bright point. The more streaks, the higher the performance cost.
| Attenuation               | How fast the light attenuates along a streak (0 for immediate attenuation, 1 for no attenuation)  
| Phase                     | Phase (angle) of the star-like pattern
| Color Aberration Strength | Strength of the color aberration along the streaks. <br>![media/light-streaks-3.png](media/light-streaks-3.png) <br>Notice the streaks involve multiple colors (yellow, purple, green, pink).                                        
| Is Anamorphic             | Simulates the behavior of anamorphic lenses, widely used in Hollywood productions. <br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> The effect above is achieved by using two light streaks with a phase of 0, enabling anamorphic mode, and slightly distorting the bright pass result horizontally.                                                                         
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
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Outline](outline.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
-->
