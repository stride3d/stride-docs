# オーディオ アセット プロパティ
<!--
# Audio asset properties
-->

**アセットビュー**でオーディオアセットを選択した後に、**プロパティグリッド**でプロパティを設定することができます。
<!--
After you select an audio asset in the **Asset View**, you can configure its properties in the **Property Grid**.
-->

![Audio asset properties](media/audio-asset-properties.png)

| プロパティ | 説明
|----------|----------
| **Source** | ソースのオーディオファイル（Stride はソースファイルを変更しないことに注意してください）
| **Compression Ratio** | 圧縮率を `1`（非圧縮）から `40`（最大）で指定します。圧縮率を大きくすると、メモリの使用量は最適化されますが、音質は低下します。Stride はオープンソースの [Opus/Celt](https://en.wikipedia.org/wiki/CELT) コーデックを使ってオーディオファイルを圧縮します。
|**Sample Rate** | Stride がソースファイルを[リサンプリング](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate)するサンプルレート（サンプリング周波数）。サンプルレートが高いほど高音質になります。代表的なサンプルレートは 44.1kHz（44,100Hz）、48kHz、88.2kHz、96kHz です。サンプリングレートを高くしても、もともと低品質であるオーディオファイルの品質は向上しないことに注意してください。      
| **Spatialized**  | 3Dオーディオをシミュレートします。（[空間オーディオ](spatialized-audio.md)を参照）
| **Stream From Disk** | ストリーミングはメモリを節約できるので、大きな音声ファイルを再生するときに便利です。詳しくは、[オーディオのストリーミング](stream-audio.md)を参照してください。

<!--
| Property | Description
|----------|----------
| **Source** | The source audio file (note that Stride never alters source files)
| **Compression ratio** | Set the compression rate from `1` (no compression) to `40` (maximum). Greater compression optimizes memory use, but decreases audio quality. Stride compresses audio files with the open-source [Opus/Celt](https://en.wikipedia.org/wiki/CELT) codec.
|**Sample rate** | The rate at which Stride [resamples](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate) the source file. The higher the sample rate, the higher the audio quality. Typical sample rates are 44.1 kHz (44,100 Hz), 48 kHz, 88.2 kHz, and 96 kHz. Note that high sampling rates doesn't improve the quality of low-quality audio files.       
| **Spatialized**  | Simulate 3D audio (see [spatialized audio](spatialized-audio.md))
| **Stream from disk** | Streaming is useful for larger audio files, as it saves memory. For more information, see [Stream audio](stream-audio.md).
-->

## 関連項目
<!--
## See also
-->

* [オーディオのインポート](import-audio.md)
* [グローバル オーディオの設定](global-audio-settings.md)
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)

<!--
* [Import audio](import-audio.md)
* [Global audio settings](global-audio-settings.md)
* [Spatialized audio](spatialized-audio.md)
* [Non-spatialized audio](non-spatialized-audio.md)
-->