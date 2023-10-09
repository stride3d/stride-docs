# Stream audio

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programmer</span>

By default, Stride plays audio directly from memory. This is useful for short sound effects such as gunshots or footsteps.

![Non-streamed audio](media/audio-index-non-streamed-audio.png)

Alternatively, Stride can buffer audio and stream it in sequences. As soon as the first sequence is buffered, Stride plays it while buffering the following sequences in parallel. This saves a lot of memory when used for larger audio files such as background music and character dialogue.

> [!Note] 
Streaming audio increases latency unless you preload it with the ReadyToPlay task (see below).

![Streamed audio](media/audio-index-streamed-audio.png)

To stream an audio asset:

1. In the **Asset View**, select the audio asset.

2. In the **Property Grid**, select **Stream From Disk**:

    ![Audio asset properties](media/audio-asset-properties-property-grid.png)

In the script for the asset, you can configure an audio file to play once the audio engine buffers enough audio samples. To do this, use this task:

```cs
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

## See also
* [Global audio settings](global-audio-settings.md)
* [Audio asset properties](audio-asset-properties.md)
* [Spatialized audio](spatialized-audio.md)
* [Non-spatialized audio](non-spatialized-audio.md)
