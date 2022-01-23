# ビデオのプロパティ
<!--
# Video properties
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
-->

ビデオ アセットのプロパティを見るには、**アセットビュー** で選択し、**プロパティグリッド** を使います。
<!--
To view the properties of a video asset, select it in the **Asset View** and use the **Property Grid**.
-->

![Video asset properties](media/video-asset-properties.png)

| プロパティ | 説明
|-----------| -----------
| Width   | ビデオの表示幅を指定します。値は、パーセンテージまたはピクセルサイズで指定します（どちらで指定するかは **Use percentages** プロパティで指定します）。
| Height  | ビデオの表示高を指定します。値は、パーセンテージまたはピクセルサイズで指定します（どちらで指定するかは **Use percentages** プロパティで指定します）。
| Use percentages | **Width** プロパティと **Height** プロパティの値を、パーセンテージで指定します。これを有効にして高さに 100 % を指定した場合、Stride はビデオの実際の（等倍の）幅の 100 % の大きさで表示します。無効にした場合は、値をピクセル単位で指定するため、ビデオの実際のピクセル等倍サイズを越えて大きく表示することができます。
| Trimming | 有効にすると、**Start time**（開始時刻）と**End time**（終了時刻）で指定した範囲だけを表示します。
| Start time | ビデオの再生を開始する時刻（秒単位。例：`100.500`）。
| End time | ビデオの再生を停止する時刻（秒単位。例：`100.500`）。
| Force mono channel | ビデオの音声をモノラルに変換します。ビデオに[空間オーディオ](../audio/spatialized-audio.md)を使いたい場合に便利です。

<!--
|Property   | Description
|-----------| -----------
| Width   | Resize the video width. The value is in a percentage or actual pixel size depending on whether you select **Use percentages**.
| Height  | Resize the video height. The value is in a percentage or actual pixel size depending on whether you select **Use percentages**. 
| Use percentages | Use percentages for the video height and width. If enabled, and the height is set to 100%, Stride displays 100% of the video's actual width. If disabled, the height and width values use pixels, so you can stretch them beyond the video's actual size.
| Trimming | Display only the part of the video you define using the **Start** and **End** times
| Start time | The time to start playing the video from (in seconds, eg `100.500`)
| End time | The time to stop playing the video (in seconds, eg `100.500`)
| Force mono channel | Convert video audio to mono. This is useful when you want the video to use [spatialized audio](../audio/spatialized-audio.md).
-->

>[!Note]
>今のところ、アセットプレビューでビデオをプレビューすることはできません。

<!--
>>[!Note]
>Currently, you can't preview videos in the Asset Preview.
-->

## 関連項目
<!--
## See also
-->

* [ビデオのセットアップ](set-up-a-video.md)
* [ビデオをスカイボックスとして使用](use-a-video-as-a-skybox.md)

<!--
* [Set up a video](set-up-a-video.md)
* [Use a video as a skybox](use-a-video-as-a-skybox.md)
-->
