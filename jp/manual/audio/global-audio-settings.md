# グローバル オーディオの設定

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>

グローバル オーディオ設定は、プロジェクト内のすべてのオーディオに適用されます。

グローバル オーディオ設定は、[AudioEngine](xref:Stride.Audio.AudioEngine) **プロパティ** クラスにアクセスすることによって制御できます。

| プロパティ | 機能 |
|--- | --- |
| [MasterVolume](xref:Stride.Audio.AudioEngine.MasterVolume) | マスター ボリュームを設定します。 |
| [PauseAudio](xref:Stride.Audio.AudioEngine.PauseAudio) | すべてのオーディオを一時停止します。 |
| [ResumeAudio](xref:Stride.Audio.AudioEngine.ResumeAudio) | すべてのオーディオを再開します。 |

[SoundInstance API](xref:Stride.Audio.SoundInstance) を使用してサウンドを個別に制御することもできます。

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
* [SoundInstance API ドキュメント](xref:Stride.Audio.SoundInstance)
