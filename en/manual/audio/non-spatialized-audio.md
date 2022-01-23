# Non-spatialized audio

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Non-spatialized audio** sounds the same throughout the scene, regardless of the position of entities (such as the player camera). It's stereo and moves along a single axis (usually the X-axis). Unlike [spatialized audio](spatialized-audio.md), the _volume_, _pitch_ (_frequency_), and other parameters of spatialized audio don't change. This is useful, for example, for background music and menu sound effects.

![Non-spatialized audio](media/audio-index-non-spatialized-audio.png)

Non-spatialized audio requires no [audio emitters](audio-emitters.md) or [audio listeners](audio-listeners.md).

## 1. Import audio and include it in the build

1. [Import the audio as a audio asset](import-audio.md).

2. Make sure the audio asset is a **root asset**. Root assets are assets that Stride includes in the build so they can be used at runtime.

    In the **Asset View**, right-click the asset and select **Include in build as root asset**:

    ![Include in build as root asset](media/audio-include-in-build-as-root-asset.png)

    If the menu option reads **Do not include in build as root asset**, the option is already selected and you don't need to change it.

## 2. Create a script to play audio

To play non-spatialized audio at runtime, create an instance of it and define its behavior in the code.

The [SoundInstance](xref:Stride.Audio.SoundInstance) controls audio at runtime with the following properties:

| Property  | Function |
|-------    |-------|
| [IsLooping](xref:Stride.Audio.SoundInstance.IsLooping) | Gets or sets looping of the audio. |
| [Pan](xref:Stride.Audio.SoundInstance.Pan)       | Sets the balance between left and right speakers. By default, each speaker a value of 0.5. |
| [Pitch](xref:Stride.Audio.SoundInstance.Pitch)     | Gets or sets the audio pitch (frequency). |
| [PlayState](xref:Stride.Audio.SoundInstance.PlayState)	| Gets the state of the [SoundInstance](xref:Stride.Audio.SoundInstance). |
| [Position](xref:Stride.Audio.SoundInstance.Position)	| Gets the current play position of the audio. |
| [Volume](xref:Stride.Audio.SoundInstance.Volume)	| Sets the audio volume. |

For more details, see the [SoundInstance API documentation](xref:Stride.Audio.SoundInstance).

> [!Note]
If the sound is already playing, Stride ignores all additional calls to [SoundInstance.Play](xref:Stride.Audio.SoundInstance.Play).
The same goes for [SoundInstance.Pause](xref:Stride.Audio.SoundInstance.Pause) (when a sound is already paused) and [SoundInstance.Stop](xref:Stride.Audio.SoundInstance.Stop) (when a sound is already stopped).

For example, the following code:

* instantiates non-spatialized audio
* sets the audio to loop
* sets the volume
* plays the audio

```cs
public override async Task Execute()
{
    // Load the sound
    Sound musicSound = Content.Load<Sound>("MySound");
            
    // Create a sound instance
    SoundInstance music = musicSound.CreateInstance();
            
    // Loop
    music.IsLooping = true;

    // Set the volume
    music.Volume = 0.25f;

    // Play the music
    music.Play();
}
```

### Alternative: create a script with public variables

Create a public variable for each audio asset you want to use. You can use the same properties listed above.

For example:

```cs
public class MySoundScript : SyncScript
{
    public Sound MyMusic;

    private SoundInstance musicInstance;
    public bool PlayMusic;

    public override void Start()
    {
        musicInstance = MyMusic.CreateInstance();
    }

    public override void Update()
    {
        // If music isn't playing but should be, play the music.
        if (PlayMusic & musicInstance.PlayState != PlayState.Playing)
        {
            musicInstance.Play();
        }

        // If music is playing but shouldn't be, stop the music.
        else if (!PlayMusic)
        {
            musicInstance.Stop();
        }
    }
}
```
## Add the script to the entity

1. In the **Scene view**, select the entity you want to add the script to:

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. In the **Property Grid**, click **Add component** and select your script:
 
    ![Click Add component](media/audio-emitters-add-script-component.png)

    The script is added to the entity.

3. If you added **public variables** to the script, you need to tie them to audio assets.

    Drag and drop an asset from the **Asset View** to each variable:

    ![Drag and drop an audio asset](media/entity-audio-drag-and-drop-audio-asset-to-script-component.gif)

    Alternatively, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):

    ![Pick up an asset](media/audio-play-script-component-pick-an-asset.png)

    Then choose the audio asset you want to use:

    ![Select an audio asset](media/audio-play-audioemitter-component-add-select-audio-asset.png)

## See also

* [Import audio](import-audio.md)
* [Global audio settings](global-audio-settings.md)
* [Spatialized audio](spatialized-audio.md)