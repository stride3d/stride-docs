# Воспроизвести диапазон в звуковом ассете

<span class="label label-doc-level">Сложность / Средняя</span>
<span class="label label-doc-audience">Область / Разработка</span>

Вы можете заставить Stride воспроизводить только определенные части аудио ассета.  Это означает, например, что вы можете создать несколько семплов из одного аудиоресурса, указав разные диапазоны в разных объектах [SoundInstance](xref:Stride.Audio.SoundInstance).

![диапазон](media/audio-advanced-features-loop-points.png)

Вы можете использовать следующие свойства, методы и структуры:

|  Свойство, метод или структура |  Функция |
|---------|-----------|
|  [Sound.TotalLength](xref:Stride.Audio.Sound.TotalLength) |  Общая длина [звука](xref:Stride.Audio.Sound).  |
|  [SoundInstance.SetRange(PlayRange)](xref:Stride.Audio.SoundInstance.SetRange(Stride.Audio.PlayRange)) |  Устанавливает диапазон для воспроизведения аудио ассета.  |
|  [PlayRange](xref:Stride.Audio.PlayRange) |  Информация о времени, включая начальную точку и длину диапазона.  |
|  [SoundInstance.Position](xref:Stride.Audio.SoundInstance.Position) |  Получает текущую позицию воспроизведения как **TimeSpan**.  |

Например:

```cs
//Assume sample length is 5 seconds.
var length = mySound.TotalLength;
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

## Смотрите также

* [Импорт аудио](import-audio.md)
* [Глобальные настройки звука](global-audio-settings.md)
* [Пространственный звук](spatialized-audio.md)
