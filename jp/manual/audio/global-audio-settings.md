# グローバル オーディオ設定

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

グローバル オーディオ設定は、プロジェクト内のすべてのオーディオに適用されます。

グローバル オーディオ設定は、[AudioEngine](xref:Xenko.Audio.AudioEngine) **プロパティ** クラスにアクセスすることによって制御できます。

| プロパティ | 機能 |
|--- | --- |
| [MasterVolume](xref:Xenko.Audio.AudioEngine.MasterVolume) | マスター ボリュームを設定します。 |
| [PauseAudio](xref:Xenko.Audio.AudioEngine.PauseAudio) | すべてのオーディオを一時停止します。 |
| [ResumeAudio](xref:Xenko.Audio.AudioEngine.ResumeAudio) | すべてのオーディオを再開します。 |

[SoundInstance API](xref:Xenko.Audio.SoundInstance) を使用してサウンドを個別に制御することもできます。

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
* [SoundInstance API ドキュメント](xref:Xenko.Audio.SoundInstance)
