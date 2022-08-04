# Set up a video
# Настроить видео

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/video-thumbnail.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/video-in-game.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

>[!Note]
>[!Примечание]
>Stride supports most major video formats, but converts them to `.mp4`. To reduce compilation time, we recommend you use `.mp4` files so Stride doesn't have to convert them.
>Stride поддерживает большинство основных форматов видео, но конвертирует их в `.mp4`.  Чтобы сократить время компиляции, мы рекомендуем вам использовать файлы `.mp4`, чтобы Stride не преобразовывал их.

>[!Note]
>[!Примечание]
>Currently, Stride doesn't support video on iOS platforms.
>В настоящее время Stride не поддерживает видео на платформах iOS.

## 1. Add a video asset
## 1. Добавьте видеоресурс

Before you can use a video in your game, you need to import it as an [asset](../game-studio/assets.md). 
Прежде чем вы сможете использовать видео в своей игре, вам необходимо импортировать его как [актив](../game-studio/assets.md).

1. Drag the video file from **Explorer** into the **Asset View**.
1. Перетащите видеофайл из **Explorer** в **Asset View**.

    Alternatively, in the **Asset View**, click **Add asset** and select **Media > Video**, then browse to the video you want to add and click **Open**.
Либо в **Просмотре объектов** нажмите **Добавить объект** и выберите **Мультимедиа > Видео**, затем перейдите к видео, которое хотите добавить, и нажмите **Открыть**.

    ![Add video asset](media/add-video-asset.png)
![Добавить видеоресурс](media/add-video-asset.png)

2. If the video has audio tracks, you can import these at the same time, or import just the audio from the video.
2. Если в видео есть звуковые дорожки, вы можете импортировать их одновременно или импортировать только звук из видео.

    ![Import video](media/import-from-video.png)
![Импортировать видео](media/import-from-video.png)

3. Click **OK**.
3. Нажмите **ОК**.

    Stride adds the video as an asset in the **Asset View**. If you imported audio tracks from the video file, Stride adds them as separate [audio assets](../audio/index.md).
Stride добавляет видео в качестве ресурса в **Просмотр объектов**.  Если вы импортировали звуковые дорожки из видеофайла, Stride добавляет их как отдельные [аудиоресурсы](../audio/index.md).

    ![Video and audio assets](media/video-and-audio-assets.png)
![Видео- и аудиоресурсы](media/video-and-audio-assets.png)

    >[!Note]
>[!Примечание]
    >Currently, you can't preview videos in the Asset Preview.
>В настоящее время вы не можете просматривать видео в режиме предварительного просмотра объектов.

    For information about video asset properties, see [Video properties](video-properties.md).
Для получения информации о свойствах видеообъекта см. [Свойства видео](video-properties.md).

## 2. Add a video component
## 2. Добавьте видеокомпонент

1. In the **Scene Editor**, select or create an entity to add a video component to.
1. В **Редакторе сцен** выберите или создайте объект для добавления видеокомпонента.

    >[!Tip]
>[!Подсказка]
    >It's usually simplest to add the component to the same entity that has the texture plays the video. This just makes it easier to organize your scene.
>Обычно проще всего добавить компонент к тому же объекту, у которого текстура воспроизводит видео.  Это просто упрощает организацию вашей сцены.

2. In the **Property Grid**, click **Add component** and select **Video**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Видео**.

    ![Add video component](media/add-component.png)
![Добавить компонент видео](media/add-component.png)

    Stride adds a **video component** to the entity.
Stride добавляет к объекту **видеокомпонент**.

    ![Video component](media/video-component.png)
![Видеокомпонент](media/video-component.png)

3. In the **Video** properties, under **Source**, select the video asset.
3. В свойствах **Видео** в разделе **Источник** выберите видеоресурс.

    ![Video source](media/video-source.png)
![Источник видео](media/video-source.png)

4. Under **Target**, select the texture you want to display the video from.
4. В разделе **Цель** выберите текстуру, из которой вы хотите отображать видео.

    ![Video target](media/video-target.png)
![Цель видео](media/video-target.png)

    Models that use this texture will display the video.
Модели, использующие эту текстуру, будут отображать видео.

    When the video isn't playing in your scene, Stride displays the texture instead. 
Когда видео не воспроизводится в вашей сцене, Stride вместо этого отображает текстуру.

## 3. Create a script to play the video
## 3. Создайте скрипт для воспроизведения видео

After you set up the video component, play it from a [script](../scripts/index.md) using:
После того, как вы настроите компонент видео, воспроизведите его из [скрипта](../scripts/index.md), используя:

```cs
```CS
myVideoComponent.Instance.Play();
myVideoComponent.Instance.Play();
```
```

### Other functions
### Прочие функции

* `LoopRange`: The looping range (must be an area in the video in `PlayRange`)
* `LoopRange`: диапазон зацикливания (должна быть областью видео в `PlayRange`)
* `IsLooping`: Loop the video loop infinitely
* `IsLooping`: бесконечный цикл видео.
* `SpeedFactor`: Set the video play speed. `1` is normal speed.
* `SpeedFactor`: установите скорость воспроизведения видео.  «1» — нормальная скорость.
* `PlayState`: The current video play state (`playing`, `paused` or `stopped`)
* «PlayState»: текущее состояние воспроизведения видео («воспроизведение», «приостановлено» или «остановлено»).
* `Duration`: The duration of the video
* «Продолжительность»: продолжительность видео.
* `CurrentTime`: The current play time in the video
* `CurrentTime`: Текущее время воспроизведения видео.
* `Volume`: The audio volume
* «Громкость»: громкость звука
* `PlayRange`: The video start and end time
* `PlayRange`: время начала и окончания видео.
* `Play/Pause/Stop`: Play, pause, or stop the video
* `Play/Pause/Stop`: воспроизведение, пауза или остановка видео.
* `Seek`: Seek to a given time
* «Искать»: искать в заданное время

### Example script
### Пример скрипта

```cs
```CS
{
{
    public class VideoScript : StartupScript
открытый класс VideoScript : StartupScript
    {
{
        // Game Studio displays the public member fields and properties you declare in this script
// Game Studio отображает открытые поля членов и свойства, которые вы объявляете в этом скрипте

        public override void Start()
публичное переопределение void Start()
        {
{
            // Initialization of the script.
// Инициализация скрипта.
            Entity.Get<VideoComponent>().Instance.Play();
Entity.Get<VideoComponent>().Instance.Play();
        }
}
    }
}
}
}
```
```

## 4. Add the script to the entity
## 4. Добавьте скрипт в сущность

1. In the **Scene Editor**, select the entity that has the video component.
1. В **Редакторе сцен** выберите объект с видеокомпонентом.

2. In the **Property Grid**, click **Add component** and select the video script.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите сценарий видео.

    ![My video script](media/add-video-script.png)
![Мой сценарий видео](media/add-video-script.png)

    Stride adds the script as a component.
Stride добавляет скрипт в качестве компонента.

    You can adjust [public variables you define in the script](../scripts/public-properties-and-fields.md) in the **Property Grid** under the script component properties.
Вы можете настроить [общедоступные переменные, которые вы определяете в скрипте](../scripts/public-properties-and-fields.md) в **Сетке свойств** в свойствах компонента скрипта.

    ![Properties](media/video-script-properties.png)
![Свойства](media/video-script-properties.png)

## See also
## Смотрите также

* [Video properties](video-properties.md)
* [Свойства видео](video-properties.md)
