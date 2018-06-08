# Video properties

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

To view the properties of a video asset, select it in the **Asset View** and use the **Property Grid**.

![Video asset properties](media/video-asset-properties.png)

|Property   | Description
|-----------| -----------
| Width   | Resize the video width. The value is in a percentage or actual pixel size depending on whether you select **Use percentages**.
| Height  | Resize the video height. The value is in a percentage or actual pixel size depending on whether you select **Use percentages**. 
| Use percentages | Use percentages for the video height and width. If enabled, and the height is set to 100%, Xenko displays 100% of the video's actual width. If disabled, the height and width values use pixels, so you can stretch them beyond the video's actual size.
| Trimming | Display only the part of the video you define using the **Start** and **End** times
| Start time | The time to start playing the video from (in seconds, eg `100.500`)
| End time | The time to stop playing the video (in seconds, eg `100.500`)
| Force mono channel | Convert video audio to mono. This is useful when you want the video to use [spatialized audio](../audio/spatialized-audio.md).


>[!Note]
>Currently, you can't preview videos in the Asset Preview.

## See also

* [Set up a video](set-up-a-video.md)
* [Use a video as a skybox](use-a-video-as-a-skybox.md)