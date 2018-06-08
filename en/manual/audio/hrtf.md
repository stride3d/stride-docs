# Head-related transfer function (HRTF) audio

**Head-related transfer function (HRTF)** is an advanced way of rendering audio so that sounds appear to come from a specific point in 3D space, synthesizing binaural audio. It provides more realistic audio than standard [spatialized audio](spatialized-audio.md). For example, with HRTF, the player can hear whether a character is above or below them. This is particularly useful for [VR applications](../virtual-reality/index.md), as it increases immersion.

Players don't need special hardware to use HRTF. However, the effect works much better with headphones than speakers.

This video demonstrates the effect of HRTF audio:

<p>
<video class="embed-responsive-item" poster="media/hrtf-first-frame.jpg" controls>
   <source src="media/hrtf.mp4" type="video/mp4">
</video>
</p>

>[!Note]
>For now, you can only use HRTF on Windows 10.

## Enable HRTF

To use HRTF, first enable it globally in the **Game Settings** asset, then enable HRTF on the entities you want to use it with.

### 1. Enable HRTF globally

1. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets folder**.

    ![Select Assets folder asset](../game-studio/media/select-asset-folder.png)

2. In the **Asset View** (the bottom pane by default), select the **GameSettings** asset.

    ![Select Game Settings asset](../game-studio/media/select-game-settings-asset.png)

3. In the **Property Grid** (the right-hand pane by default), under **Audio settings**, select **HRTF support**.

    ![Audio settings](../game-studio/media/audio-settings.png)

For more information about the Game Settings asset, see [Game settings](../game-studio/game-settings.md).

### 2. Enable HRTF on the entities

1. Select the entity with the [audio emitter](audio-emitters.md) that contains the sound you want to enable for HRTF.

2. In the **Property Grid** (on the right by default), under **Audio emitter**, select **Use HRTF**.

    ![Audio emitter properties](media/audio-emitter-properties.png)

    Sounds emitted from this entity will use HRTF.

    >[!Note]
    >The HRTF option applies to every sound emitted from this audio emitter.
    
For more information about audio emitters, including the properties you can change, see [Audio emitters](audio-emitters.md).

### See also

* [Head-related transfer function (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [Spatialized audio](spatialized-audio.md)
* [Audio emitters](audio-emitters.md)
* [Audio listeners](audio-listeners.md)
* [Game settings](../game-studio/game-settings.md)