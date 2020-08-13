# Preprocessor variables

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

If you're developing for multiple platforms, you often need to write custom code for each platform. In most cases, the best way to do this is to use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). Alternatively, you can use **preprocessor variables**.

> [!Warning]
> We recommend you avoid using preprocessor variables where possible, and instead use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). This is because you might miss errors in your code, as only code for your target platform is checked at compile time.

## Platforms

| Variable                               | Value                          |
| -------------------------------------- | ------------------------------ |
| STRIDE_PLATFORM_WINDOWS         | Windows (standard and RT)      |
| STRIDE_PLATFORM_WINDOWS_DESKTOP | Windows (non-RT)               |
| STRIDE_PLATFORM_WINDOWS_RT      | Windows RT                     |
| STRIDE_PLATFORM_WINDOWS_PHONE   | Windows Phone                  |
| STRIDE_PLATFORM_MONO_MOBILE     | Xamarin.iOS or Xamarin.Android |
| STRIDE_PLATFORM_ANDROID         | Xamarin.Android                |
| STRIDE_PLATFORM_IOS             | Xamarin.iOS                    |

## Graphics APIs

| Variable                                      | Value                 |
| --------------------------------------------- | --------------------- |
| STRIDE_GRAPHICS_API_DIRECT3D   | Direct3D 11           |
| STRIDE_GRAPHICS_API_OPENGL     | OpenGL (Core and ES)  |
| STRIDE_GRAPHICS_API_OPENGLCORE | OpenGL Core (Desktop) |
| STRIDE_GRAPHICS_API_OPENGLES   | OpenGL ES             |
| STRIDE_GRAPHICS_API_VULKAN     | Vulkan                |

## Example

```cs

#if STRIDE_PLATFORM_WINDOWS
    // Windows-specific code goes here...

#elif STRIDE_PLATFORM_MONO_MOBILE
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
