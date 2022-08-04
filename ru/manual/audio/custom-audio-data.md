# Пользовательские аудиоданные

<span class="label label-doc-level">Сложность / Сложная</span>
<span class="label label-doc-audience">Область / Разработка</span>

Вы можете генерировать аудио, используя свой собственный механизм. Для этого создайте подкласс [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource).
Вот пример того, как это реализовать, см. [CompressedSoundSource исходный код](https://github.com/SiliconStudio/stride/blob/master-1.8/sources/engine/Stride.Audio/CompressedSoundSource.cs).

## Пример кода

Что бы проигать пользовательский звук [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource) во время выполнения, используйте:

```cs
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

## Смотрите также
* [Пространственный звук](spatialized-audio.md)
* [Аудио эмитеры](audio-emitters.md)
* [Глобальные настройки звука](global-audio-settings.md)