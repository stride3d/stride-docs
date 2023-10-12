# Definir um dispositivo de áudio

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Você pode definir qual dispositivo de áudio o Stride utiliza. Por exemplo, você pode acessar o dispositivo de áudio do _Oculus Rift_ a partir do construtor personalizado do seu jogo.

Se você não especificar um dispositivo, o Stride usará o dispositivo de áudio padrão.

## Exemplo de código

Este código configura o dispositivo Oculus Rift em tempo de execução:

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

## Veja também
* [Configurações globais de áudio](global-audio-settings.md)