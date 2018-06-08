# Preprocessor variables

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

If you're developing for multiple platforms, you often need to write custom code for each platform. In most cases, the best way to do this is to use [Platform.Type](xref:SiliconStudio.Core.Platform.Type) and [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform). Alternatively, you can use **preprocessor variables**.

> [!Warning]
> We recommend you avoid using preprocessor variables where possible, and instead use [Platform.Type](xref:SiliconStudio.Core.Platform.Type) and [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform). This is because you might miss errors in your code, as only code for your target platform is checked at compile time.

## Platforms

| Variable                               | Value                          |
| -------------------------------------- | ------------------------------ |
| SILICONSTUDIO_PLATFORM_WINDOWS         | Windows (standard and RT)      |
| SILICONSTUDIO_PLATFORM_WINDOWS_DESKTOP | Windows (non-RT)               |
| SILICONSTUDIO_PLATFORM_WINDOWS_RT      | Windows RT                     |
| SILICONSTUDIO_PLATFORM_WINDOWS_PHONE   | Windows Phone                  |
| SILICONSTUDIO_PLATFORM_MONO_MOBILE     | Xamarin.iOS or Xamarin.Android |
| SILICONSTUDIO_PLATFORM_ANDROID         | Xamarin.Android                |
| SILICONSTUDIO_PLATFORM_IOS             | Xamarin.iOS                    |

## Graphics APIs

| Variable                                      | Value                 |
| --------------------------------------------- | --------------------- |
| SILICONSTUDIO_XENKO_GRAPHICS_API_DIRECT3D   | Direct3D 11           |
| SILICONSTUDIO_XENKO_GRAPHICS_API_OPENGL     | OpenGL (Core and ES)  |
| SILICONSTUDIO_XENKO_GRAPHICS_API_OPENGLCORE | OpenGL Core (Desktop) |
| SILICONSTUDIO_XENKO_GRAPHICS_API_OPENGLES   | OpenGL ES             |
| SILICONSTUDIO_XENKO_GRAPHICS_API_VULKAN     | Vulkan                |

## Example

```cs

#if SILICONSTUDIO_PLATFORM_WINDOWS
    // Windows-specific code goes here...

#elif SILICONSTUDIO_PLATFORM_MONO_MOBILE
    // iOS and Android-specific code goes here...

#else
    // Other platform code goes here...

#endif
```

## See also

* [Platforms](../platforms/index.md)
* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)