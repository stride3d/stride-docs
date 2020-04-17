# Audio emitters

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

[Audio emitter components](xref:Stride.Audio.AudioEmitter) emit audio used to create [spatialized audio](spatialized-audio.md). You can add them to any entity.

The pitch and volume of the sound changes as the [audio listener](audio-listeners.md) moves closer to and away from the audio emitter.

> [!Note] 
You need at least one [AudioListenerComponent](xref:Stride.Audio.AudioListener) in the scene to hear audio from audio emitters.

## 1. Set up an audio emitter asset

1. In the **Scene view**, select an entity you want to be an audio emitter.

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. In the **Property Grid**, click **Add component** and select **Audio Emitter**.

    ![Add AudioEmitter Component](media/audio-add-audioemitter-component-select-entity.png)

    Now we need to add audio to the emitter.

3.  Under **Audio Emitter**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and specify a name for the audio.

    ![Add new sound entry](media/audio-play-audioemitter-component-add-new-entry.png)

4. From the **Asset View**, drag and drop an audio asset to the audio you just added:

    ![Drag and drop an audio asset](media/audio-play-drag-and-drop-audio-asset.gif)

    Alternatively, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Pick up an asset](media/audio-play-audioemitter-component-pick-an-asset.png)

    Then choose an audio asset:

    ![Select audio  asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

5. Repeat steps 3 and 4 to add as many audio assets as you need.

6. Configure the properties for this audio emitter.

    ![Audio emitter properties](media/audio-emitter-properties.png)

| Property           | Description  
|--------------------|-------------
| Use HRTF           | Enable head-related transfer function (HRTF). With this enabled, sounds appear to come from a specific point in 3D space, synthesizing binaural audio. For more information, see [HRTF](hrtf.md).
| Directional factor | How directional the audio is, from 0 (min) to 1 (max). If set to 0, the audio is emitted from all directions. You can control this with a slider or number value. 
| Environment        | The reverb type for the audio, simulating reverberation of real environments (small, medium, large, or outdoors).

## 2. Create a script to play the audio

Now we need to create a script to play and configure the audio asset.

1. In your script, instantiate [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) for each sound you want to use in the script.

   For example, say we have two sounds, **MySound1** and **MySound2**:
   
	```cs
	AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
	AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
	AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
	```

2. Use the following [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) properties and methods to play and configure the audio:

| Property / method | Description |
|-------    |-------|
| [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping) | Loops audio. Has no effect if [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget) is set to true.|
| [Pitch](xref:Stride.Audio.AudioEmitterSoundController.Pitch)     | Gets or sets sound pitch (frequency). Use with caution for spatialized audio. |
| [PlayState](xref:Stride.Audio.AudioEmitterSoundController.PlayState)	| Gets the current state of the audio emitter sound controller. |
| [Volume](xref:Stride.Audio.AudioEmitterSoundController.Volume)	| Volume of the audio. | 
| [Pause()](xref:Stride.Audio.AudioEmitterSoundController.Pause)	| Pauses audio. |
| [Play()](xref:Stride.Audio.AudioEmitterSoundController.Play)      | Plays audio. |
| [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget)| Plays audio once, then clears the memory. Useful for short sounds such as gunshots. Overrides [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping).|
| [Stop()](xref:Stride.Audio.AudioEmitterSoundController.Stop)	| Stops audio. |

For example:

```cs
mySound1Controller.IsLooping = true;
mySound1Controller.Pitch = 2.0f;
mySound1Controller.Volume = 0.5f;
mySound1Controller.Play();
```

This sound will loop at double the original pitch and half the original volume. For more information, see the [AudioEmitterSoundController Stride API documentation](xref:Stride.Audio.AudioEmitterSoundController).

## 3. Add the script to the audio emitter entity

Game Studio lists the script as a component under **Add component**. Add the script to the audio emitter entity.

1. In the **Scene view**, select an entity you want to be an audio emitter.

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. Click **Add component** and select the script.

    ![Add audio script](media/add-sound-script.png)

## See also
* [Spatialized audio](spatialized-audio.md)
* [Audio listeners](audio-listeners.md)
* [Global audio settings](global-audio-settings.md)