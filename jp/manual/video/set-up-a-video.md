# ビデオのセットアップ
<!--
# Set up a video
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>
<span class="badge text-bg-success">デザイナー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>
-->

<p>
<video autoplay loop class="responsive-video" poster="media/video-thumbnail.jpg">
   <source src="media/video-in-game.mp4" type="video/mp4">
</video>
</p>

>[!Note]
>Stride はほとんどの主要なビデオフォーマットをサポートしていますが、それらは `.mp4` に変換されます。コンパイル時間を短縮するために、最初から `.mp4` ファイルを使用することをお勧めします。そうすれば、Stride がそれらを変換する必要がなくなります。

<!--
>[!Note]
>Stride supports most major video formats, but converts them to `.mp4`. To reduce compilation time, we recommend you use `.mp4` files so Stride doesn't have to convert them.
-->

>[!Note]
>今のところ、Stride は iOS プラットフォームではビデオをサポートしていません。

<!--
>[!Note]
>Currently, Stride doesn't support video on iOS platforms.
-->

## 1. ビデオアセットを追加する
<!--
## 1. Add a video asset
-->

ゲームでビデオを使う前に、[アセット](../game-studio/assets.md)としてインポートする必要があります。
<!--
Before you can use a video in your game, you need to import it as an [asset](../game-studio/assets.md). 
-->

1. ビデオファイルを、**エクスプローラー**から**アセットビュー**にドラッグします。

    または、**アセットビュー**で [**Add asset**] をクリックし、[**Media**] > [**Video**] を選択し、追加したいビデオを選択して [**Open**] をクリックします。

    ![Add video asset](media/add-video-asset.png)

2. ビデオがオーディオトラックを持っている場合は、ビデオとオーディオを同時にインポートするか、あるいはビデオからオーディオをインポートすることができます。

    ![Import video](media/import-from-video.png)

3. [**OK**] をクリックします。

    Stride は、ビデオをアセットとして**アセットビュー**に追加します。ビデオファイルからオーディオトラックをインポートした場合は、Stride はそれらを独立した[オーディオ](../audio/index.md)アセットとして追加します。

    ![Video and audio assets](media/video-and-audio-assets.png)

    >[!Note]
    >今のところ、アセットプレビューでビデオをプレビューすることはできません。

    ビデオアセットのプロパティの詳細については、[ビデオのプロパティ](video-properties.md)を参照してください。

<!--
1. Drag the video file from **Explorer** into the **Asset View**.

    Alternatively, in the **Asset View**, click **Add asset** and select **Media > Video**, then browse to the video you want to add and click **Open**.

    ![Add video asset](media/add-video-asset.png)

2. If the video has audio tracks, you can import these at the same time, or import just the audio from the video.

    ![Import video](media/import-from-video.png)

3. Click **OK**.

    Stride adds the video as an asset in the **Asset View**. If you imported audio tracks from the video file, Stride adds them as separate [audio assets](../audio/index.md).

    ![Video and audio assets](media/video-and-audio-assets.png)

    >[!Note]
    >Currently, you can't preview videos in the Asset Preview.

    For information about video asset properties, see [Video properties](video-properties.md).
-->

## 2. ビデオコンポーネントを追加する
<!--
## 2. Add a video component
-->

1. **シーンエディター**で、ビデオコンポーネントを追加する先となるエンティティを選択または作成します。

    >[!Tip]
    >通常は、ビデオを再生するためのテクスチャーを持つエンティティにビデオコンポーネントを追加するのが最も簡単です。そうすることで、シーンが整理しやすくなります。

2. **プロパティグリッド**で、[**Add component**] をクリックし、[**Video**] > [**Video**] を選択します。

    ![Add video component](media/add-component.png)

    Stride は、エンティティに**ビデオコンポーネント**を追加します。

    ![Video component](media/video-component.png)

3. **Video** プロパティの **Source** で、ビデオアセットを選択します。

    ![Video source](media/video-source.png)

4. **Target** プロパティで、ビデオの表示に使用するテクスチャを選択します。

    ![Video target](media/video-target.png)

    モデルは、このテクスチャーをビデオの表示に使います。

    ビデオが再生されていないときには、Stride はそのテクスチャを代わりに表示します。

<!--
1. In the **Scene Editor**, select or create an entity to add a video component to.

    >[!Tip]
    >It's usually simplest to add the component to the same entity that has the texture plays the video. This just makes it easier to organize your scene.

2. In the **Property Grid**, click **Add component** and select **Video**.

    ![Add video component](media/add-component.png)

    Stride adds a **video component** to the entity.

    ![Video component](media/video-component.png)

3. In the **Video** properties, under **Source**, select the video asset.

    ![Video source](media/video-source.png)

4. Under **Target**, select the texture you want to display the video from.

    ![Video target](media/video-target.png)

    Models that use this texture will display the video.

    When the video isn't playing in your scene, Stride displays the texture instead. 
-->

## 3. ビデオを再生するスクリプトを作成する
<!--
## 3. Create a script to play the video
-->

ビデオコンポーネントをセットアップした後に、[スクリプト](../scripts/index.md)で以下のように再生します。

```cs
myVideoComponent.Instance.Play();
```

### その他の関数
<!--
### Other functions
-->

* `LoopRange`: ループ範囲（`PlayRange` で指定した範囲内である必要があります）。
* `IsLooping`: ビデオを無限にループします。
* `SpeedFactor`: 再生速度。通常の速度は `1` です。
* `PlayState`: 現在のビデオ再生状態（`playing`, `paused`, `stopped` のいずれか)。
* `Duration`: ビデオの長さ。
* `CurrentTime`: 現在の再生時刻（ビデオの先頭から）。
* `Volume`: オーディオの音量。
* `PlayRange`: ビデオの開始時刻と終了時刻。
* `Play/Pause/Stop`: ビデオを再生、一時停止、停止します。
* `Seek`: 指定時刻に移動します。

<!--
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
-->

### サンプルスクリプト
<!--
### Example script
-->

```cs
{
    public class VideoScript : StartupScript
    {
        // Game Studioは、このスクリプトで宣言したパブリックメンバーフィールドとプロパティを表示します。
        // Game Studio displays the public member fields and properties you declare in this script

        public override void Start()
        {
            // スクリプトの初期化。
            // Initialization of the script.
            Entity.Get<VideoComponent>().Instance.Play();
        }
    }
}
```

## 4. エンティティにスクリプトを追加する
<!--
## 4. Add the script to the entity
-->

1. **シーンエディター**で、ビデオコンポーネントを持つエンティティを選択します。

2. **プロパティグリッド**で、[**Add component**] をクリックし、ビデオスクリプトを選択します。

    ![My video script](media/add-video-script.png)

    Stride は、そのスクリプトをコンポーネントとして追加します。

    **プロパティグリッド**で、コンポーネントのプロパティで[スクリプトで定義したpublic変数](../scripts/public-properties-and-fields.md)を調整することができます。
    
    ![Properties](media/video-script-properties.png)

<!--
1. In the **Scene Editor**, select the entity that has the video component.

2. In the **Property Grid**, click **Add component** and select the video script.

    ![My video script](media/add-video-script.png)

    Stride adds the script as a component.

    You can adjust [public variables you define in the script](../scripts/public-properties-and-fields.md) in the **Property Grid** under the script component properties.

    ![Properties](media/video-script-properties.png)
-->

## 関連項目
<!--
## See also
-->

* [ビデオのプロパティ](video-properties.md)

<!--
* [Video properties](video-properties.md)
-->
