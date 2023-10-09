# Play a range within an audio asset

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

You can have Stride play only certain portions of an audio asset. This means, for example, that you can create multiple samples from a single audio asset by specifying different ranges in different [SoundInstance](xref:Stride.Audio.SoundInstance) objects.

![Loop points](media/audio-advanced-features-loop-points.png)

You can use the following properties, methods, and structures:

| Property, method, or structure | Function |
|---------|-----------|
| [TotalLength](xref:Stride.Audio.SoundBase.TotalLength) | The total length of the [sound](xref:Stride.Audio.Sound). |
| [SoundInstance.SetRange(PlayRange)](xref:Stride.Audio.SoundInstance.SetRange(Stride.Media.PlayRange)) | Sets the time range to play within the audio asset. |
| [PlayRange](xref:Stride.Media.PlayRange) | Time information, including the range's starting point and length. |
| [SoundInstance.Position](xref:Stride.Audio.SoundInstance.Position) | Gets the current play position as **TimeSpan**. |

For example:

```cs
//Assume sample length is 5 seconds.
var length = mySound.TotalLength;
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

## See also
* [Global audio settings](global-audio-settings.md)
* [Spatialized audio](spatialized-audio.md)
* [Non-spatialized audio](non-spatialized-audio.md)