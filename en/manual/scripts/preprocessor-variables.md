# Preprocessor variables

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

If you're developing for multiple platforms, you often need to write custom code for each platform. In most cases, the best way to do this is to use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). Alternatively, you can use **preprocessor variables**.

> [!Warning]
> We recommend you avoid using preprocessor variables where possible, and instead use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). This is because you might miss errors in your code, as only code for your target platform is checked at compile time.

## Platforms

| Variable | Platform |
| :-- | :-- |
| STRIDE_PLATFORM_DESKTOP | Any desktop platform (Windows, Linux or Macos) |
| STRIDE_PLATFORM_MONO_MOBILE | Any mobile platform (Android or iOS) |
| STRIDE_PLATFORM_ANDROID | Android |
| STRIDE_PLATFORM_IOS | iOS |

Additionally, msbuild provides these variables:

| Variable | Platform |
| :-- | :-- |
| WINDOWS | Windows |
| MACOS | MacOS |

## Graphics APIs

| Variable | Graphics API |
| :-- | :-- |
| STRIDE_GRAPHICS_API_DIRECT3D | Direct3D 11 or 12 |
| STRIDE_GRAPHICS_API_DIRECT3D11 | Direct3D 11 |
| STRIDE_GRAPHICS_API_DIRECT3D12 | Direct3D 12 |
| STRIDE_GRAPHICS_API_VULKAN | Vulkan |
| STRIDE_GRAPHICS_API_NULL | Null |

## Example

```cs
#if STRIDE_PLATFORM_DESKTOP
    // Desktop-specific code goes here...

#elif STRIDE_PLATFORM_ANDROID
    // Android-specific code goes here...

#else
    // Other platform code goes here...

#endif
```

## See also

* [Platforms](../platforms/index.md)
* [Types of script](types-of-script/index.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
