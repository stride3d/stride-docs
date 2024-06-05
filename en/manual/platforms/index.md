# Platforms

![Platforms](media/game-engine-system-requirements-intro-pic.png)

Stride is cross-platform game engine. This means you can create your game once, then compile and deploy it on all the platforms Stride supports. The engine converts C# and shaders to the different native languages, and abstracts the concepts that differ between platforms, so you don't have to adapt your code for each platform.

## Supported platforms

* Windows 7, 8, 10
* Windows Universal Platform (UWP)
* [Linux](linux/index.md)
* Android 2.3 and later
* [iOS 8.0 and later](ios.md)

> [!TIP]
> To check which platform your project uses, add a break point to your code (eg in a script), run the project, and check the [Platform.Type](xref:Stride.Core.Platform.Type) variable.

## Supported graphics platforms

* Direct3D 9 (limited support), 10, 11, 12
* OpenGL 3, 4
* OpenGL ES 2 (limited support), 3
* Vulkan

>[!Note]
>Stride only supports MSAA (multisample anti-aliasing) for Direct3D 11 and later.
>Depending on your device's OpenGL shader compiler, Stride might not run with OpenGL ES2.

>[!Warning]
>Direct3D 9 doesn't support HDR textures. Using HDR textures with DirextX 9 will crash your game.

## Set the graphics platform

You set the graphics platform in the **Game settings** asset under **Rendering settings > Target graphics platform**.

![Select graphics platform](media/change-graphics-platform.png)

For more information, see [Set the graphics platform](set-the-graphics-platform.md).

## Preprocessor variables

Stride defines preprocessor variables if you want to write code that compiles only under a specific platform. For more information, see [Preprocessor variables](../scripts/preprocessor-variables.md).

## In this section

* [Linux](linux/index.md)
* [UWP](uwp/index.md)
    * [Xbox Live](uwp/xbox-live.md)
* [iOS](ios.md)
* [Add or remove a platform](add-or-remove-a-platform.md)
* [Set the graphics platform](set-the-graphics-platform.md)
* [Game settings](../game-studio/game-settings.md)