# アンチエイリアシング
<!--
# Anti-aliasing
-->

**アンチエイリアシング（Anti-aliasing）** は、ギザギザのエッジを滑らかにします。Stride では、ポストプロセッシングで FXAA（Fast-approximate Anti-aliasing）を使用します。FXAAは、パフォーマンスへの影響が少ないシングルパスのスクリーン空間技術です。
<!--
**Anti-aliasing** smooths jagged edges. For post-processing, Stride uses fast-approximate anti-aliasing (FXAA), a single-pass screen-space technique with low performance impact.
-->

![Properties](media/anti-aliasing-closeup-comparison.png)

>[!Note]
>現在、Android デバイスでは、アンチエイリアシングのポストエフェクトが正しく動作しません。

<!--
>>[!Note]
>Currently, the anti-aliasing post-effect doesn't work correctly on Android devices.
-->

Stride には **MSAA**（マルチサンプル・アンチエイリアシング）も搭載されていますが、これはポストエフェクトではありません。MSAAは**フォワードレンダラー**のプロパティで有効にすることができます。
<!--
Stride also includes **MSAA** (multisample anti-aliasing), but this isn't a post effect. You can enable MSAA in the **forward renderer** properties.
-->

## プロパティ
<!--
## Properties
-->

![Properties](media/anti-aliasing.png)

| プロパティ         | 説明
| --------------    | ---- 
| Dither            | ディザの量。ディザを少なくすると良い結果が得られますが、速度は遅くなります。
| Quality           | エフェクトの質。パフォーマンスに直接影響します。
| Input luminance from alpha | 入力色のアルファチャンネルから輝度を取得します。処理速度は遅くなりますが、精度は高くなります。無効にすると、入力色の緑成分が輝度の近似値として使用されます。

<!--
| Property          | Description 
| --------------    | ---- 
| Dither            | The amount of dither. Less dither produces better results, but is slower.
| Quality           | The quality of the effect. This directly affects performance.
| Input luminance from alpha | Retrieve the luminance from the alpha channel of the input color. This is slower but more accurate. If disabled, the effect uses the green component of the input color as an approximation for the luminance.
-->

## 関連項目
<!--
## See also
-->

* [アンビエント オクルージョン](ambient-occlusion.md)
* [アウトライン](outline.md)
* [ブルーム](bloom.md)
* [明度フィルター](bright-filter.md)
* [色変換](color-transforms/index.md)
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)

<!--
* [Ambient occlusion](ambient-occlusion.md)
* [Outline](outline.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
-->
