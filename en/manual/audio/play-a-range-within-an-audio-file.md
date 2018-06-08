# Play a range within an audio asset

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

You can have Xenko play only certain portions of an audio asset. This means, for example, that you can create multiple samples from a single audio asset by specifying different ranges in different [SoundInstance](xref:SiliconStudio.Xenko.Audio.SoundInstance) objects.

![Loop points](media/audio-advanced-features-loop-points.png)

You can use the following properties, methods, and structures:

| Property, method, or structure | Function |
|---------|-----------|
| [Sound.TotalLength](xref:SiliconStudio.Xenko.Audio.Sound.TotalLength) | The total length of the [sound](xref:SiliconStudio.Xenko.Audio.Sound). |
| [SoundInstance.SetRange(PlayRange)](xref:SiliconStudio.Xenko.Audio.SoundInstance.SetRange(SiliconStudio.Xenko.Audio.PlayRange)) | Sets the time range to play within the audio asset. |
| [PlayRange](xref:SiliconStudio.Xenko.Audio.PlayRange) | Time information, including the range's starting point and length. |
| [SoundInstance.Position](xref:SiliconStudio.Xenko.Audio.SoundInstance.Position) | Gets the current play position as **TimeSpan**. |

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