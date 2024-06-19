# Custom audio data

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

You can generate audio using your own mechanism. To do this, create a subclass of [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource).
For an example of how to implement this, see the [CompressedSoundSource` source code](https://github.com/Stride3d/stride/blob/master/sources/engine/Stride.Audio/CompressedSoundSource.cs).

## Example code

To play a custom [DynamicSoundSource](xref:Stride.Audio.DynamicSoundSource) at runtime, use:

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

## See also
* [Global audio settings](global-audio-settings.md)
