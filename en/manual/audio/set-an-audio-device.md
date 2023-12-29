# Set an audio device

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

You can set which audio device Stride uses. For example, you can access the _Oculus Rift_ audio device from your custom game constructor.

If you don't specify a device, Stride uses the default audio advice.

## Example code

This code sets the Oculus Rift device at runtime:

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

## See also
* [Global audio settings](global-audio-settings.md)