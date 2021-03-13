# トーンマップ

**トーンマッピング（Tone-mapping）** は、HDRバッファを入力として、その色を、画面上に表示することができる [0, 255] の範囲に割り当て直すものです。
<!--
**Tone-mapping** takes an HDR buffer as input, and remaps its color to a [0, 255] range so we can display it on a screen.
-->

HDR 空間の色を LDR に割り当て直すには、選択する計算式によって様々な方法があります。
<!--
There are many ways to remap colors from an HDR space to an LDR, depending on the formula you choose.
-->

![media/tonemap-1.png](media/tonemap-1.png) 

Stride は、いくつかのトーンマッピングオペレーターをすぐにサポートしています。
<!--
Stride supports several tone-mapping operators out of the box:
-->

- Reinhard（古典的）
- Exponential（exp）
- Logarithmic（log）
- Drago
- Hejl-Dawson
- Mike-Day
- U2-Filmic

<!--
- Reinhard (the classic operator)
- Exponential
- Logarithmic
- Drago
- Hejl-Dawson
- Mike-Day
- U2-Filmic
-->

## 関連項目
<!--
## See also
-->

* [フィルム グレイン](film-grain.md)
* [ガンマ補正](gamma-correction.md)
* [ヴィネッティング](vignetting.md)

<!--
* [Film grain](film-grain.md)
* [Gamma correction](gamma-correction.md)
* [Vignetting](vignetting.md)
-->
