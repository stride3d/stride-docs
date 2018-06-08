# Import audio

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

You can import audio files to use as **audio assets** in your project. You can import file types including .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, and .mpc.

1. Drag and drop the audio file from Windows Explorer to the **Asset View**:

    ![Drag and drop](media/import-setup-drag-and-drop-audio-to-asset-view.gif)

    Alternatively, in the **Asset View**:

    1. Click ![](media/index-audio-add-new-asset-button.png)

    2. Click ![](media/index-audio-import-audio-directly-from-file.png) (**Import audio directly from file**) and select the audio file.

2. To give the audio asset some default properties, choose a preset. (You can always [change the properties in the Property Grid later](audio-asset-properties.md).)

    ![Choose Asset type](media/import-audio-choose-asset-type.png)

    * **Sound effect**: Recommended for smaller files that you want to play directly from memory.

    * **Spatialized sound**: Process the audio asset as [spatialized audio](spatialized-audio.md). Note that Xenko processes audio files as mono (single-channel) audio. The source file is unaffected.
    
    * **Music**: Recommended for larger files that you want to stream from disk to save memory.

After you import an audio file, you can select it as an asset in the **Asset View**.

## Import audio from a video file

You can also import a [video](../video/index.md) file and choose to import only the audio tracks from it.

1. In the **Asset View**, click **Add assett** and select **Media > Video**.

    ![Add video asset](../video/media/add-video-asset.png)

2. Browse to the video you want to import audio from and click **Open**.

    Alternatively, drag the file from **Explorer** into the **Asset View**.

3. Clear **Import video** and click **OK**.

    ![Import video](media/import-audio-only.png)

    Xenko adds the audio tracks from the video to the **Asset View**.

## See also

* [Spatialized audio](spatialized-audio.md)
* [Non-spatialized audio](non-spatialized-audio.md)
* [Global audio settings](global-audio-settings.md)
* [Video](../video/index.md)