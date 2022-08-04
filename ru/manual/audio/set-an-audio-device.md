# Настройка аудио устройства

<span class="label label-doc-level">Сложность / Сложная</span>
<span class="label label-doc-audience">Область / Разработка</span>

Вы можете указать, какое звуковое устройство будет использовать Stride.  Например, вы можете получить доступ к аудиоустройству _Oculus Rift_ из собственного конструктора игр.

Если вы не укажете устройство, Stride использует аудио устройство по умолчанию.

## Пример кода

Этот код устанавливает устройство Oculus Rift во время выполнения:

```cs
namespace OculusRenderer
{
    public class OculusGame : Game
    {
        public OculusGame()
        {
            var deviceName = OculusOvr.GetAudioDeviceFullName();
            var deviceUuid = new AudioDevice { Name = deviceName };
            Audio.RequestedAudioDevice = deviceUuid;
        }
    }
}
```

## Смотрите также

* [Импорт аудио](import-audio.md)
* [Глобальные настройки звука](global-audio-settings.md)
* [Пространственный звук](spatialized-audio.md)

