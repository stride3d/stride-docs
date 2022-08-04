# Аудио переносной функции, связанной с головой (HRTF)

**Head-related transfer function (HRTF)** — это расширенный способ воспроизведения звука, при котором кажется, что звуки исходят из определенной точки в трехмерном пространстве, синтезируя бинауральный звук. Он обеспечивает более реалистичный звук, чем стандартный [пространственный звук](spatialized-audio.md). Например, с помощью HRTF игрок может слышать, находится ли персонаж над ним или под ним. Это особенно полезно для [VR приложений](../virtual-reality/index.md), так как это увеличивает погружение.

Игрокам не нужно специальное оборудование для использования HRTF. Тем не менее, эффект работает намного лучше с наушниками, чем с динамиками.

Это видео демонстрирует эффект аудио HRTF:

<p>
<video class="embed-responsive-item" poster="media/hrtf-first-frame.jpg" controls>
   <source src="media/hrtf.mp4" type="video/mp4">
</video>
</p>

>[!Note]
>На данный момент вы можете использовать HRTF только на Windows 10.

## Включение HRTF

Чтобы использовать HRTF, сначала включите его глобально в **Game Settings** ассете, затем включите HRTF для объектов, с которыми вы хотите его использовать.

### 1. Включить HRTF глобально

1. В **Solution Explorer** (по умолчанию нижняя левая панель), выберите **Assets folder**.

    ![Выбор Assets folder asset](../game-studio/media/select-asset-folder.png)

2. В **Asset View** (нижняя панель по умолчанию), выберите **GameSettings** ассет.

    ![Выбор Game Settings ассета](../game-studio/media/select-game-settings-asset.png)

3. В **Property Grid** (правая панель по умолчанию), под **Audio settings**, выберите **HRTF support**.

    ![Аудио настройки](../game-studio/media/audio-settings.png)

Для получения дополнительной информации об ассете «Game Settings» см. [Game settings](../game-studio/game-settings.md).

### 2. Включите HRTF на сущностях

1. Выберите сущность с [аудио эмитером](audio-emitters.md) который содержит звук, который вы хотите включить для HRTF.

2. В **Property Grid** (справа по умолчанию), под **Audio emitter**, выберите **Use HRTF**.

    ![Свойства аудио эмитера](media/audio-emitter-properties.png)

    Звуки, излучаемые из этой сущности, будут использовать HRTF.

    >[!Note]
    > Параметр HRTF применяется к каждому звуку, излучаемому из этого аудио эмитера.
    
Для получения дополнительной информации об источниках звука, включая свойства, которые вы можете изменить, см. [Audio emitters](audio-emitters.md).

### Смотрите также

* [Head-related transfer function (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [Пространственный аудио](spatialized-audio.md)
* [Аудио эмитеры](audio-emitters.md)
* [Аудио слушатели](audio-listeners.md)
* [Game settings](../game-studio/game-settings.md)