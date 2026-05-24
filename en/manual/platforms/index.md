# Platforms

![Platforms](media/game-engine-system-requirements-intro-pic.png)

Stride is a cross-platform engine, which means that you can create a single game and publish it on multiple platforms.

## Supported development platforms

* [Windows](windows/index.md) 10, 11
* [Linux](linux/index.md) (code-only)
* [MacOS](macos/index.md) (code-only)

> [!NOTE]
> **Game Studio** is being rewritten to be cross-platform. Currently however, it's not possible to use it outside of **Windows**.

## Supported target platforms

* [Windows](windows/index.md) 10, 11
* [Linux](linux/index.md)
* [MacOS](macos/index.md)
* [Android](android/index.md)
* [iOS](ios/index.md) (untested)

## Platform specific code

Each platform has it's own [project package](../files-and-folders/project-packages/index.md) that contains the [entry point](../files-and-folders/project-packages/index.md#entry-point) and other code exclusive for that platform.

Alternatively, you can also check the current platform using [Platform.Type](xref:Stride.Core.Platform.Type).

```csharp
if (Platform.Type == PlatformType.Android)
{
    // This code will only be executed on Android
}
```

> [!WARNING]
> Stride also sets [preprocessor variables](../scripts/preprocessor-variables.md) for some platforms, however, it's generally advised to avoid using them.

## In this section

* [Windows](windows/index.md)
* [UWP](uwp/index.md)
  * [Xbox Live](uwp/xbox-live.md)
* [Linux](linux/index.md)
  * [Setup and requirements](linux/setup-and-requirements.md)
* [MacOS](macos/index.md)
* [Android](android/index.md)
* [iOS](ios/index.md)
  * [Build guide](ios/build-guide.md)
* [Add or remove a platform](add-or-remove-a-platform.md)
