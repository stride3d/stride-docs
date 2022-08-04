# Preprocessor variables
# Переменные препроцессора

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

If you're developing for multiple platforms, you often need to write custom code for each platform. In most cases, the best way to do this is to use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). Alternatively, you can use **preprocessor variables**.
Если вы разрабатываете для нескольких платформ, вам часто приходится писать собственный код для каждой платформы.  В большинстве случаев лучший способ сделать это — использовать [Platform.Type](xref:Stride.Core.Platform.Type) и [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform).  В качестве альтернативы вы можете использовать **переменные препроцессора**.

> [!Warning]
> [!Предупреждение]
> We recommend you avoid using preprocessor variables where possible, and instead use [Platform.Type](xref:Stride.Core.Platform.Type) and [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). This is because you might miss errors in your code, as only code for your target platform is checked at compile time.
> Мы рекомендуем по возможности избегать использования переменных препроцессора и вместо этого использовать [Platform.Type](xref:Stride.Core.Platform.Type) и [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform).  Это связано с тем, что вы можете пропустить ошибки в своем коде, поскольку во время компиляции проверяется только код для вашей целевой платформы.

## Platforms
## Платформы

| Variable                               | Value                          |
|  Переменная |  Значение |
| -------------------------------------- | ------------------------------ |
|  -------------------------------------- |  ------------------------------ |
| STRIDE_PLATFORM_WINDOWS         | Windows (standard and RT)      |
|  STRIDE_PLATFORM_WINDOWS |  Windows (стандартная и RT) |
| STRIDE_PLATFORM_WINDOWS_DESKTOP | Windows (non-RT)               |
|  STRIDE_PLATFORM_WINDOWS_DESKTOP |  Windows (не RT) |
| STRIDE_PLATFORM_WINDOWS_RT      | Windows RT                     |
|  STRIDE_PLATFORM_WINDOWS_RT |  Windows РТ |
| STRIDE_PLATFORM_WINDOWS_PHONE   | Windows Phone                  |
|  STRIDE_PLATFORM_WINDOWS_PHONE |  Windows-телефон |
| STRIDE_PLATFORM_MONO_MOBILE     | Xamarin.iOS or Xamarin.Android |
|  STRIDE_PLATFORM_MONO_MOBILE |  Xamarin.iOS или Xamarin.Android |
| STRIDE_PLATFORM_ANDROID         | Xamarin.Android                |
|  STRIDE_PLATFORM_ANDROID |  Xamarin.Android |
| STRIDE_PLATFORM_IOS             | Xamarin.iOS                    |
|  STRIDE_PLATFORM_IOS |  Xamarin. iOS |

## Graphics APIs
## Графические API

| Variable                                      | Value                 |
|  Переменная |  Значение |
| --------------------------------------------- | --------------------- |
|  ------------------------------------------------------------ |  --------------------- |
| STRIDE_GRAPHICS_API_DIRECT3D   | Direct3D 11           |
|  STRIDE_GRAPHICS_API_DIRECT3D |  Direct3D 11 |
| STRIDE_GRAPHICS_API_OPENGL     | OpenGL (Core and ES)  |
|  STRIDE_GRAPHICS_API_OPENGL |  OpenGL (базовый и ES) |
| STRIDE_GRAPHICS_API_OPENGLCORE | OpenGL Core (Desktop) |
|  STRIDE_GRAPHICS_API_OPENGLCORE |  Ядро OpenGL (настольный компьютер) |
| STRIDE_GRAPHICS_API_OPENGLES   | OpenGL ES             |
|  STRIDE_GRAPHICS_API_OPENGLES |  OpenGL ES |
| STRIDE_GRAPHICS_API_VULKAN     | Vulkan                |
|  STRIDE_GRAPHICS_API_VULKAN |  Вулкан |

## Example
## Пример

```cs
```CS

#if STRIDE_PLATFORM_WINDOWS
#if STRIDE_PLATFORM_WINDOWS
    // Windows-specific code goes here...
// Здесь находится код, специфичный для Windows...

#elif STRIDE_PLATFORM_MONO_MOBILE
#elif STRIDE_PLATFORM_MONO_MOBILE
    // iOS and Android-specific code goes here...
// Здесь находится код, специфичный для iOS и Android...

#else
#еще
    // Other platform code goes here...
// Здесь находится код другой платформы...

#endif
#endif
```
```

## See also
## Смотрите также

* [Platforms](../platforms/index.md)
* [Платформы](../платформы/index.md)
* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
