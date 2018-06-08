# Set up a video

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

<p>
<video autoplay loop class="responsive-video" poster="media/video-thumbnail.jpg">
   <source src="media/video-in-game.mp4" type="video/mp4">
</video>
</p>

>[!Note]
>Xenko supports most major video formats, but converts them to `.mp4`. To reduce compilation time, we recommend you use `.mp4` files so Xenko doesn't have to convert them.

>[!Note]
>Currently, Xenko doesn't support video on iOS platforms.

## 1. Add a video asset

Before you can use a video in your game, you need to import it as an [asset](../game-studio/assets.md). 

1. Drag the video file from **Explorer** into the **Asset View**.

    Alternatively, in the **Asset View**, click **Add asset** and select **Media > Video**, then browse to the video you want to add and click **Open**.

    ![Add video asset](media/add-video-asset.png)

2. If the video has audio tracks, you can import these at the same time, or import just the audio from the video.

    ![Import video](media/import-from-video.png)

3. Click **OK**.

    Xenko adds the video as an asset in the **Asset View**. If you imported audio tracks from the video file, Xenko adds them as separate [audio assets](../audio/index.md).

    ![Video and audio assets](media/video-and-audio-assets.png)

    >[!Note]
    >Currently, you can't preview videos in the Asset Preview.

    For information about video asset properties, see [Video properties](video-properties.md).

## 2. Add a video component

1. In the **Scene Editor**, select or create an entity to add a video component to.

    >[!Tip]
    >It's usually simplest to add the component to the same entity that has the texture plays the video. This just makes it easier to organize your scene.

2. In the **Property Grid**, click **Add component** and select **Video**.

    ![Add video component](media/add-component.png)

    Xenko adds a **video component** to the entity.

    ![Video component](media/video-component.png)

3. In the **Video** properties, under **Source**, select the video asset.

    ![Video source](media/video-source.png)

4. Under **Target**, select the texture you want to display the video from.

    ![Video target](media/video-target.png)

    Models that use this texture will display the video.

    When the video isn't playing in your scene, Xenko displays the texture instead. 

## 3. Create a script to play the video

After you set up the video component, play it from a [script](../scripts/index.md) using:

```cs
myVideoComponent.Instance.Play();
```

### Other functions

* `LoopRange`: The looping range (must be an area in the video in `PlayRange`)
* `IsLooping`: Loop the video loop infinitely
* `SpeedFactor`: Set the video play speed. `1` is normal speed.
* `PlayState`: The current video play state (`playing`, `paused` or `stopped`)
* `Duration`: The duration of the video
* `CurrentTime`: The current play time in the video
* `Volume`: The audio volume
* `PlayRange`: The video start and end time
* `Play/Pause/Stop`: Play, pause, or stop the video
* `Seek`: Seek to a given time

### Example script

```cs
{
    public class VideoScript : StartupScript
    {
        // Game Studio displays the public member fields and properties you declare in this script

        public override void Start()
        {
            // Initialization of the script.
            Entity.Get<VideoComponent>().Instance.Play();
        }
    }
}
```

## 4. Add the script to the entity

1. In the **Scene Editor**, select the entity that has the video component.

2. In the **Property Grid**, click **Add component** and select the video script.

    ![My video script](media/add-video-script.png)

    Xenko adds the script as a component.

    You can adjust [public variables you define in the script](../scripts/public-properties-and-fields.md) in the **Property Grid** under the script component properties.

    ![Properties](media/video-script-properties.png)

## See also

* [Video properties](video-properties.md)