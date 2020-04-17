# サウンド アセットのプロパティ
［Asset view］でサウンド アセットを選択した後は、［Property grid］でそのプロパティを構成できます。

![Sound asset properties](media/audio-asset-properties.png)

* ［Source］: ソース オーディオ ファイルを変更します。Stride によってソース ファイルが変更されることはありません。
* ［Sample Rate］: Stride がソース ファイルを[再サンプリング](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate)するレートを選択します。サンプリングル レートが高いほど、オーディオの品質が良くなります。一般的なサンプリング レートは、44.1 kHz (44,100 Hz)、48 kHz、88.2 kHz、96 kHz です。元のオーディオ ファイルが低品質の場合は、サンプリング レートを高くしても品質は改善しないことに注意してください。
* ［Compression Ratio］: 圧縮率を 1 (圧縮なし) から 40 (最大) の範囲で設定します。圧縮率を高くするとメモリの使用は最適化されますが、オーディオの品質は低下します。Stride は、オーディオ ファイルをオープン ソースの [Opus/Celt](https://en.wikipedia.org/wiki/CELT) コーデックで圧縮します。
* ［Stream From Disk］: ストリーミングは、メモリの消費を抑えることができるので大きいオーディオ ファイルに適しています。詳細については、「[オーディオをストリーミングする](stream-audio.md)」を参照してください。
* ［Spatialized］: そのサウンド アセットを[空間オーディオ](spatialized-audio.md)として指定します。

## 関連項目
* [オーディオのインポート](import-audio.md)
* [グローバル オーディオ設定](global-audio-settings.md)
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
