# Xenko 3.1 release notes

December 24th, 2018

## Highlights

### Xenko 3.1 loves NuGet!

Xenko was always a big proponent of NuGet: since first version, Xenko was distributed as a NuGet package.

However, due to limitations (hello packages.config and project.json!), we were leveraging NuGet more as a distribution medium than proper NuGet packages: Xenko 3.0 is still a monolithic single package and it would not work out of the box when referenced from Visual Studio without using Xenko Launcher and Game Studio.

Xenko 3.0 paved the way by making Xenko compatible with the new project system (game projects were referencing Xenko using a `PackageReference`).

![GitHub](media/ReleaseNotes-3.1/xenko-ref-old.png)

Today, Xenko 3.1 brings Xenko as a set of smaller NuGet package, each containing one assembly, with proper dependencies:

![GitHub](media/ReleaseNotes-3.1/xenko-ref-new.png)

As a result, it is now possible to create a game project that references only the packages you want. Here are a few examples of "core" packages:

* `Xenko.Engine`: allows you to use core engine runtime (including its dependencies)
* `Xenko.Core.Assets.CompilerApp`: compile assets at build time
* `Xenko.Core.Mathematics` or `Xenko.Graphics`: yes, if you want to make a custom project only using Xenko mathematics or graphics API without the full Xenko engine, you can!
* `Xenko.Core.Assets`, `Xenko.Presentation` or `Xenko.Quantum`: all those piece of tech being used to build Xenko tooling are also available for reuse in other projects. Nothing prevents you from generating assets on the fly too!

Then, various parts of the engine are distributed as **optional** packages:

* `Xenko.Physics`
* `Xenko.Particles`
* `Xenko.UI`
* `Xenko.SpriteStudio`
* `Xenko.Video`

If you don't reference those packages, they won't be packaged with your game either. In many situations, it results in a smaller packaged game and improved startup time.

Also, you are free to replace those functionalities with alternative libraries.

### Coming soon: Xenko assets will be packed and distributed with NuGet automatically

Coming soon in next beta, C# projects containing Xenko assets will have those assets automatically NuGet packaged in a `xenko` folder.

As a result, you will soon be able to generate NuGet package containing Xenko assets out of the box from Visual Studio and publish them on [NuGet.org](https://nuget.org) for general consumption for other Xenko users.

We can't wait to see what will come up!

### Coming soon: Full switch to .NET Standard

Soon Xenko will support .NET Standard for most of its assemblies.

Xenko games will be able to run on .NET Core for Windows (Linux is already supported).

## Changelog

### Audio

* Encode number of packets in an integer rather than a short (otherwise songs longer than a few minutes won't work) (changes)
* Fixed SoundInstance.Position to take into account play range, and be consistent for all situations: looping or not, streaming from disk or not, supports Pause (with current time) and Stop (with 0) (changes)
* Opus: also apply encoder delay and reset states on loop for sound streamed from disk (fixes [#235](https://github.com/xenko3d/xenko/issues/235)) (changes)
* Opus: ignore invalid data at beginning (due to encoder delay) & end of stream (due to packet size) (fixes [#235](https://github.com/xenko3d/xenko/issues/235)) (changes)
* SoundInstance.Position was not checking if AudioEngine was invalidated state (i.e. no audio HW) (changes)
* Various fixes so that SoundInstance.SetRange() works better (changes)

### Graphics

* Added TextureOptions to Texture.Extensions2D (changes)
* Fixed geometry shader with stream out [#245](https://github.com/xenko3d/xenko/issues/245)
* Removed PreferredGraphicsPlatform from RenderingSettings (changes)
* When mixing Dispatch and Draw calls in Direct3D11 the set shaders on the native device context got mixed up. ([#249](https://github.com/xenko3d/xenko/issues/249))
* MSAA resolve of depth buffer was not working properly due to invalid depth stencil state
