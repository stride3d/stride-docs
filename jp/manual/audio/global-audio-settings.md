# グローバル オーディオ設定

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

グローバル オーディオ設定は、プロジェクト内のすべてのオーディオに適用されます。

グローバル オーディオ設定は、[AudioEngine](xref:SiliconStudio.Xenko.Audio.AudioEngine) **プロパティ** クラスにアクセスすることによって制御できます。

| プロパティ | 機能 |
|--- | --- |
| [MasterVolume](xref:SiliconStudio.Xenko.Audio.AudioEngine.MasterVolume) | マスター ボリュームを設定します。 |
| [PauseAudio](xref:SiliconStudio.Xenko.Audio.AudioEngine.PauseAudio) | すべてのオーディオを一時停止します。 |
| [ResumeAudio](xref:SiliconStudio.Xenko.Audio.AudioEngine.ResumeAudio) | すべてのオーディオを再開します。 |

[SoundInstance API](xref:SiliconStudio.Xenko.Audio.SoundInstance) を使用してサウンドを個別に制御することもできます。

## 関連項目
* [空間オーディオ](spatialized-audio.md)
* [非空間オーディオ](non-spatialized-audio.md)
* [SoundInstance API ドキュメント](xref:SiliconStudio.Xenko.Audio.SoundInstance)
