# Platforms

![Platforms](media/game-engine-system-requirements-intro-pic.png)

Stride is a cross-platform engine, which means that you can create a single game and publish it on multiple platforms.

## Supported development platforms

This is a list of all platforms that Stride supports for developing games.

* Windows 10, 11
* Linux (code-only)

> [!NOTE]
> **Game Studio** is being rewritten to be cross-platform. Currently however, it's not possible to use it outside of **Windows**.

## Supported target platforms

* Windows 10, 11
* Linux
* Android
* MacOS (currently broken)
* iOS (untested)

## Platform specific code

Each platform has it's own [project package](#) that contains the [entry point](#) and other exclusive code for that platform.

Alternatively, you can also check the current platform using [Platform.Type](xref:Stride.Core.Platform.Type).

```csharp
if (Platform.Type == PlatformType.Android)
{
    // This code will only be executed on Android
}
```

TODO: add links

> [!WARNING]
> Stride also provides [preprocessor variables](../scripts/preprocessor-variables.md) for doing this, however, it's generally advised to avoid using them.

## In this section

* [Windows](windows/index.md)
* [UWP](uwp/index.md)
    * [Xbox Live](uwp/xbox-live.md)
* [Linux](linux/index.md)
* [MacOS](macos/index.md)
* [Android](android/index.md)
* [iOS](ios/index.md)
* [Add or remove a platform](add-or-remove-a-platform.md)
* [Set the graphics platform](set-the-graphics-platform.md)
