# Set an audio device

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

You can set which audio device Xenko uses. For example, you can access the _Oculus Rift_ audio device from your custom game constructor.

If you don't specify a device, Xenko uses the default audio advice.

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