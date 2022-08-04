# Аудио слушатели

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Дизайн</span>

**Audio listener** является сущностью, которая слушает аудио, излучаемое [audio emitters](audio-emitters.md) что бы создать [Пространственный звук](spatialized-audio.md). В сцене может быть несколько слушателей аудио. Это обычно для многопользовательских игр, где каждая камера игрока является аудио слушателем.

Вам не нужно настраивать слушатели аудио. Все настройки для звуковых эффектов, включая _Volume_ и _Pitch_ (_Frequency_), настроены на аудио эмитере.

Если в сцене нет слушателя аудио, вы не услышите аудио из аудио эмитеров.

## Добавить компонент слушателя аудио в сущность

Чтобы создать аудио слушателя, прикрепите **audio listener component** к сущности. Вы можете прикрепить этот компонент к любой сущности.

1. В **Scene view**, выберите сущность, которую вы хотите использовать как аудио слушатель:

    ![Выбор сущности](media/audio-add-audiolistener-component-select-entity.png)

2. В **Property Grid**, нажмите _Add Component_ и выберите [Audio listener component](xref:Stride.Audio.AudioListener):

    ![Добавление компонента AudioListener](media/audio-add-audiolistener-component.png)

    Сущность теперь является аудио слушателем.

> [!Warning] 
На iOS вы можете создать несколько объектов с [Audio listener компонентом](xref:Stride.Audio.AudioListener) в сцене, но только один используется во время выполнения.
## Смотрите также
* [Пространственный звук](spatialized-audio.md)
* [Аудио эмитеры](audio-emitters.md)
* [Глобальные настройки звука](global-audio-settings.md)