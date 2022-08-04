# Аудио эмиттеры

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Разработка</span>
<span class="label label-doc-audience">Область / Дизайн</span>

[Аудио эмиттер (компонент)](xref:Stride.Audio.AudioEmitter) излучает звук, используемый для создания [пространственного звука](spatialized-audio.md). Вы можете добавить их в любую сущность.

Высота и громкость звука меняются в зависимости от [аудио слушателя](audio-listeners.md) приближения и отдаления от источника звука.

> [!Note] 
Вам нужен хотя бы один [AudioListenerComponent](xref:Stride.Audio.AudioListener) на сцене, чтобы услышать звук от аудио эмиттеров.

## 1. Настройка аудио эмитерра

1. В **Scene view**, выберие сущность, к которой хотите добавить аудио эмиттер.

    ![Select an entity](media/audio-add-audiolistener-component-select-entity.png)

2. В **Property Grid**, нажмите **Add component** и выберите **Audio Emitter**.

    ![Добавление компонента AudioEmitter](media/audio-add-audioemitter-component-select-entity.png)

    Теперь нам нужно добавить звук в эмиттер.

3.  Под **Audio Emitter**, нажмите ![зелёную кнопку плюс](~/manual/game-studio/media/green-plus-icon.png) (**Add**) и укажите имя для аудио.

    ![Add new sound entry](media/audio-play-audioemitter-component-add-new-entry.png)

4. Из **Asset View**, перетащите аудио ассет в только что добавленный компонент:

    ![Перетаскивание аудио ассета](media/audio-play-drag-and-drop-audio-asset.gif)

    В качестве альтернативы нажмите ![Иконку руки](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Выбор аудио ассета](media/audio-play-audioemitter-component-pick-an-asset.png)

    Затем выберите аудио ассет:

    ![Выбор аудио ассета](media/audio-play-audioemitter-component-add-select-audio-asset.png)

5. Повторите шаги 3 и 4, чтобы добавить столько аудио ассетов, сколько вам нужно.

6. Настройте свойства для этого аудио эмитера.

    ![Свойства аудио эмитера](media/audio-emitter-properties.png)

| Свойство           | Описание
|--------------------|-------------
| Использовать HRTF           | Включить переносную функцию, связанную с головой (HRTF). С этой включённой опцией, звук будет исходить из определенной точки в трехмерном пространстве, эмулируя бинаурального звука. Для получения дополнительной информации см. [HRTF](hrtf.md).
| Фактор направленности | Насколько направлено звук, от 0 (мин) до 1 (макс). Если установлено в 0, звук излучается со всех сторон.Вы можете управлять этим с помощью слайдера или численного значения. 
| Окружение        | Тип реверберации для аудио, имитируя реверберацию реальных сред (небольшая, средняя, большая или на открытом воздухе).

## 2. Создайте скрипт для воспроизведения аудио

Now we need to create a script to play and configure the audio asset.

1. В вашем скрипте создайте экземпляр [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) для каждого звука, который вы хотите использовать в сценарии.

   Например, скажем, у нас есть два звука, **MySound1** и **MySound2**:
   
	```cs
    // я как переводчик напоминаю что это надо делать в Start а не в Update
	AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
	AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
	AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
	```

2. Используйте следующее [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) свойства и методы воспроизведения и настройки звука:

| Свойство / метод | Описание |
|-------    |-------|
| [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping) | Зациклить аудио. Не имеет никакого эффекта, если [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget) включён.|
| [Pitch](xref:Stride.Audio.AudioEmitterSoundController.Pitch)     | Получает или устанавливает высоту звука (частоту). Использовать с осторожностью для пространственного аудио. |
| [PlayState](xref:Stride.Audio.AudioEmitterSoundController.PlayState)	| Получает текущее состояние контроллера звука. |
| [Volume](xref:Stride.Audio.AudioEmitterSoundController.Volume)	| Громкость звука. | 
| [Pause()](xref:Stride.Audio.AudioEmitterSoundController.Pause)	| Пауза. |
| [Play()](xref:Stride.Audio.AudioEmitterSoundController.Play)      | Проиграть аудио. |
| [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget)| Играет аудио один раз, затем очищает память. Полезно для коротких звуков, таких как выстрелы. Переопределяет [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping).|
| [Stop()](xref:Stride.Audio.AudioEmitterSoundController.Stop)	| Остановить аудио. |

Например:

```cs
mySound1Controller.IsLooping = true;
mySound1Controller.Pitch = 2.0f;
mySound1Controller.Volume = 0.5f;
mySound1Controller.Play();
```

Этот звук будет зацикливаться на удвоении оригинальной высоты и половины оригинальной громкости. Для получения дополнительной информации см.[AudioEmitterSoundController Stride API documentation](xref:Stride.Audio.AudioEmitterSoundController).

## 3. Добавьте скрипт в сущность с аудио эмитером

Game Studio перечисляет скрипт как компонент под **Add component**. Добавьте скрипт в сущность аудио эмитера.

1. In the **Scene view**, select an entity you want to be an audio emitter.

    ![Выбор сущности](media/audio-add-audiolistener-component-select-entity.png)

2. Нажмите **Add component** и выберите скрипт.

    ![Добавление скрипта](media/add-sound-script.png)

## Смотрите также
* [Пространственный аудио](spatialized-audio.md)
* [Аудио слушатели](audio-listeners.md)
* [Глобальные настройки звука](global-audio-settings.md)