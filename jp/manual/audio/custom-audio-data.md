# カスタム オーディオ データ

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>

開発者独自のメカニズムを使用してオーディオを生成できます。そのためには、[DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource) のサブクラスを作成します。
実装方法の例については、[`CompressedSoundSource` のソース コード](https://github.com/SiliconStudio/stride/blob/master-1.8/sources/engine/Stride.Audio/CompressedSoundSource.cs)を参照してください。

## コード例

実行時にカスタムの [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource) を再生するには、次のコードを使用します。

```
int sampleRate = 48000;
bool mono = false;
bool spatialized = false;
DynamicSoundSource myCustomSource = new MyCustomSource(...);
AudioListener listener = Audio.AudioEngine.DefaultListener;
AudioEngine audioEngine = Audio.AudioEngine;
SoundInstance myCustomInstance = new SoundInstance(audioEngine, listener, myCustomSource, sampleRate, mono, spatialized);
await myCustomInstance.ReadyToPlay();
myCustomInstance.Play();
```

## 関連項目
* [グローバル オーディオ設定](global-audio-settings.md)
