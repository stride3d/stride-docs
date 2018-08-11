# サウンド アセット内の範囲を再生する

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

サウンド アセットの特定部分だけを再生することができます。つまり、たとえば、異なる [SoundInstance](xref:Xenko.Audio.SoundInstance) オブジェクトで異なる範囲を指定することによって、1 つのサウンド アセットから複数のサンプルを作成できます。

![Loop points](media/audio-advanced-features-loop-points.png)

次のプロパティ、メソッド、構造体を使用できます。

| プロパティ、メソッド、構造体 | 関数 |
|---------|-----------|
| [Sound.TotalLength](xref:Xenko.Audio.Sound.TotalLength) | [サウンド](xref:Xenko.Audio.Sound)の全体の長さです。 |
| [SoundInstance.SetRange(PlayRange)](xref:Xenko.Audio.SoundInstance.SetRange(Xenko.Audio.PlayRange)) | サウンド アセット内で再生する時間の範囲を設定します。 |
| [PlayRange](xref:Xenko.Audio.PlayRange) | 範囲の開始ポイントと長さなど、時間の情報です。 |
| [SoundInstance.Position](xref:Xenko.Audio.SoundInstance.Position) | 現在の再生位置を **TimeSpan** として取得します。 |

次に例を示します。

```cs
// サンプルの長さは 5 秒とする。
var length = mySound.TotalLength;
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

## 関連項目
* [グローバル オーディオ設定](global-audio-settings.md)
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
