# Setup and requirements

To develop for Linux using Stride, you need a Linux PC with a graphics card that supports at least OpenGL 4.2 or Vulkan 1.0. The preferred Linux distribution for Stride is Ubuntu 16.04 or later, as this was the setup we used to develop the Linux version of Stride.

The instructions below assume you have Ubuntu 16.04 installed. You might need to adapt them according to your Linux distribution.

You will also need a Windows PC to build your projects for Linux using Game Studio.

## Setup

You need the following packages:

* [FreeType](#freetype)
* [OpenAL](#openal)
* [SDL2](#sdl2)
* either Mono or .NET Core (it's OK to install both)

## FreeType

To render fonts, we use the [FreeType](https://www.freetype.org/) library. The minimum required version is 2.6 and can be installed via:

### [Ubuntu](#tab/freetype-ubuntu)

```bash
sudo apt-get install libfreetype6-dev
```

### [Fedora](#tab/freetype-fedora)

```bash
sudo dnf install freetype-devel
```

## OpenAL

To play sounds and music, we use the [OpenAL](https://www.openal.org/) library. It can be installed via:

### [Ubuntu](#tab/openal-ubuntu)

```bash
sudo apt-get install libopenal-dev
```

### [Fedora](#tab/openal-fedora)

```bash
sudo dnf install openal-soft-devel
```

## SDL2

To run games on Linux, we use the [SDL2](https://www.libsdl.org/) library which provides the ability to create windows, handle mouse, keyboard and joystick events. The minimum required version is 2.0.4 and can be installed via:

### [Ubuntu](#tab/sdl2-ubuntu)

```bash
sudo apt-get install libsdl2-dev
```

### [Fedora](#tab/sdl2-fedora)

```bash
sudo dnf install SDL2-devel
```

## .NET Core

For information about how to install .NET Core, see the [.NET Core instructions for Linux](https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites).

Make sure version 2.1.300+ and runtime 2.1+ is installed. To check which version you have installed, type:

```
dotnet --info
```

## See also

* [Create a Linux game](create-a-linux-game.md)
