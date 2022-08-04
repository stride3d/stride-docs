# Импорт аудио

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Дизайн</span>

Вы можете импортировать аудиофайлы для использования в качестве **audio assets** в Вашем проекте. Вы можете импортировать типы файлов, включая .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, and .mpc.

1. Перетащите аудиофайл из Windows Explorer в **Asset View**:

    ![Перетаскивание](media/import-setup-drag-and-drop-audio-to-asset-view.gif)

    Альтернативно, в **Asset View**:

    1. Нажмите ![](media/index-audio-add-new-asset-button.png)

    2. Нажмите ![](media/index-audio-import-audio-directly-from-file.png) (**Import audio directly from file**) и выберите аудиофайл.

2. Чтобы дать аудио ассету некоторые свойства по умолчанию, выберите пресет. (Вы всегда можете [изменить свойства в Property Grid позже](audio-asset-properties.md).)

    ![Выбор типа ассета](media/import-audio-choose-asset-type.png)

    * **Sound effect**: Рекомендуется для небольших файлов, которые вы хотите воспроизвести непосредственно из памяти.

    * **Spatialized sound**: Обработать аудио ассет как [пространственный звук](spatialized-audio.md). Обратите внимание, что Stride обрабатывает аудиофайлы как моно (одноканальный) аудио. Исходный файл не изменяется.
    
    * **Music**: Рекомендуется для более крупных файлов, которые вы хотите транслировать с диска для экономии памяти.

После импорта аудиофайла вы можете выбрать его в качестве ассета в **Asset View**.

## Импорт аудио из видеофайла

Вы также можете импортировать [видеофайл](../video/index.md) и выбрать, импортировать только аудио из него.

1. В **Asset View**, нажмите **Add assett** и выберите **Media > Video**.

    ![Добавление видео ассета](../video/media/add-video-asset.png)

2. Выберите видео, из которого вы хотите импортировать аудио и нажмите **Open**.

    В качестве альтернативы перетащите файл из **Explorer** в **Asset View**.

>[!Note]
> Тут не понимаю смысл. Что значит очистить

3. Clear **Import video** and click **OK**.

    ![Import video](media/import-audio-only.png)

    Stride добавляет аудио треки из видео в **Asset View**.

## Смотрите также

* [Пространственный звук](spatialized-audio.md)
* [Не-пространственный звук](non-spatialized-audio.md)
* [Глобальные настройки звука](global-audio-settings.md)
* [Видео](../video/index.md)