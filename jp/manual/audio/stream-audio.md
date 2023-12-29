# オーディオのストリーミング

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">デザイナー</span>
<span class="badge text-bg-success">プログラマー</span>

既定では、オーディオはメモリから直接再生されます。これは、発砲音や足音のような短いサウンド エフェクトの場合に便利です。

![Non-streamed audio](media/audio-index-non-streamed-audio.png)

もう 1 つの方法として、オーディオをバッファーに格納し、シーケンス順にストリーミングすることもできます。最初のシーケンスがバッファーに格納されると直ちに再生され、それと並行して後続のシーケンスがバッファーに格納されます。これにより、背景音楽やキャラクターのせりふのような大きいオーディオ ファイルに多くのメモリが使用されるのを回避できます。

> [!NOTE]
ReadyToPlay タスク (後述) でオーディオを事前に読み込んでおかないと、オーディオをストリーミングするときに遅延が長くなります。

![Streamed audio](media/audio-index-streamed-audio.png)

サウンド アセットをストリーミングするには:

1. ［Asset view］で、サウンド アセットを選択します。

2. ［Property grid］で、［Stream From Disk］を選択します。

    ![Sound asset properties](media/audio-asset-properties-property-grid.png)

アセットのスクリプトでは、オーディオ エンジンが十分なオーディオ サンプルをバッファーに格納したらオーディオ ファイルを再生するように構成できます。そのためには、次のタスクを使用します。

```cs
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

## 関連項目
* [グローバル オーディオ設定](global-audio-settings.md)
* [サウンド アセットのプロパティ](sound-asset-properties.md)
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
