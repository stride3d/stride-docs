# Global audio settings

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

Global audio settings apply to all the audio in your project. 

You can control the global audio settings by accessing the [AudioEngine](xref:Stride.Audio.AudioEngine) **properties** class:

| Property | Function |
|--- | --- |
| [MasterVolume](xref:Stride.Audio.AudioEngine.MasterVolume) | Sets the master volume. |
| [PauseAudio](xref:Stride.Audio.AudioEngine.PauseAudio) | Pauses all audio. |
| [ResumeAudio](xref:Stride.Audio.AudioEngine.ResumeAudio) | Resumes all audio. |

You can also control sounds individually using the [SoundInstance API](xref:Stride.Audio.SoundInstance).

## See also
* [Spatialized audio](spatialized-audio.md)
* [Non-spatialized audio](non-spatialized-audio.md)
* [SoundInstance API documentation](xref:Stride.Audio.SoundInstance)