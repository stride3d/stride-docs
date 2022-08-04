# Непространственное аудио

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Разработка</span>

**Непространственный звук** звучит одинаково на протяжении всей сцены, независимо от положения объектов (например, камеры игрока).  Это стерео звук и движется по одной оси (обычно по оси X).  В отличие от [пространственного звука](spatialized-audio.md), _volume_, _pitch_ (_frequency_) и другие параметры пространственного звука не меняются.  Это полезно, например, для фоновой музыки и звуковых эффектов меню.

![Непространственное аудио](media/audio-index-non-spatialized-audio.png)

Непространственное аудио не требует [аудиоизлучателей](audio-emitters.md) или [аудиослушателей](audio-listeners.md).

## 1. Импортируйте звук и включите его в сборку

1. [Импортирование аудио](import-audio.md).

3. Убедитесь, что аудио ассет является **root asset**.  Корневые активы — это активы, которые Stride включает в сборку, чтобы их можно было использовать во время выполнения.

    В **Asset View** щелкните ассет правой кнопкой мыши и выберите **Include in build as root asset**:

    ![Включить в сборку как корневой ресурс](media/audio-include-in-build-as-root-asset.png)

    Если в пункте меню указано **Do not include in build as root asset**, этот параметр уже выбран, и вам не нужно его менять.

## 2. Создайте скрипт для воспроизведения звука

Чтобы воспроизводить непространственное аудио во время выполнения, создайте его экземпляр и определите его поведение в коде.

[SoundInstance](xref:Stride.Audio.SoundInstance) управляет звуком во время выполнения следующими свойствами:

| Свойство  | Функция |
|-------    |-------|
|  [IsLooping](xref:Stride.Audio.SoundInstance.IsLooping) |  Получает или задает зацикливание звука.  |
|  [Pan](xref:Stride.Audio.SoundInstance.Pan) |  Устанавливает баланс между левым и правым динамиками.  По умолчанию для каждого динамика значение 0,5.  |
|  [Pitch](внешняя ссылка:Stride.Audio.SoundInstance.Pitch) |  Получает или задает высоту звука (частоту).  |
|  [PlayState](xref:Stride.Audio.SoundInstance.PlayState) |  Получает состояние [SoundInstance](xref:Stride.Audio.SoundInstance).  |
|  [Position](xref:Stride.Audio.SoundInstance.Position) |  Получает текущую позицию воспроизведения аудио.  |
|  [Volume](xref:Stride.Audio.SoundInstance.Volume) |  Устанавливает громкость звука.  |

Дополнительные сведения см. в [документации по SoundInstance API](xref:Stride.Audio.SoundInstance).

> [!Note]
Если звук уже воспроизводится, Stride игнорирует все дополнительные вызовы [SoundInstance.Play](xref:Stride.Audio.SoundInstance.Play).
То же самое касается [SoundInstance.Pause](xref:Stride.Audio.SoundInstance.Pause) (когда звук уже приостановлен) или [SoundInstance.Stop](xref:Stride.Audio.SoundInstance.Stop) (когда звук  уже остановился).

Например, следующий код:

* Создает непространственное аудио
* Зацикливает звук
* Устанавливает громкость
* Воспроизводит аудио

```cs
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
```

### В качестве альтернативы Вы можете: создать скрипт с публичными переменными

Создайте общедоступную переменную для каждого аудиоресурса, который вы хотите использовать.  Вы можете использовать те же свойства, перечисленные выше.

Например:

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
## Добавляем скрипт в сущность

1. В **Scene view** выберите объект, к которому вы хотите добавить скрипт:

    ![Выбор объекта](media/audio-add-audiolistener-component-select-entity.png)

2. В **Property Grid** нажмите **Add component** и выберите свой скрипт:
 
    ![Нажмите Add component](media/audio-emitters-add-script-component.png)

    Скрипт добавится к объекту.

3. Если вы добавили в скрипт **public variables**, вам необходимо привязать их к аудио ассетам.

    Перетащите ассет из **Asset View** в каждую переменную:

    ![Перетащите аудио ассет](media/entity-audio-drag-and-drop-audio-asset-to-script-component.gif)

    Либо нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):

    ![Выбор ассета](media/audio-play-script-component-pick-an-asset.png)

    Затем выберите аудио ассет, который хотите использовать:

    ![Выбор аулио ассета](media/audio-play-audioemitter-component-add-select-audio-asset.png)

## Смотрите также

* [Импорт аудио](import-audio.md)
* [Глобальные настройки звука](global-audio-settings.md)
* [Пространственный звук](spatialized-audio.md)
