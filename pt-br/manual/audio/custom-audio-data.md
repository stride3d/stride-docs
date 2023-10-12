# Dados de áudio personalizados

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Você pode gerar seus áudios usando seu próprio mecanismo. Para isso, crie uma subclasse de [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource).
Para um exemplo de implementação, consulte o código-fonte de [CompressedSoundSource](https://github.com/SiliconStudio/stride/blob/master-1.8/sources/engine/Stride.Audio/CompressedSoundSource.cs).

## Exemplo de código

Para reproduzir um [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource) personalizado em tempo de execução, utilize:

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

## Veja também
* [Configurações globais de áudio](global-audio-settings.md)