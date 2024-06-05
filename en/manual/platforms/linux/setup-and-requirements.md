# Setup and requirements

To develop for Linux using Stride, you need a Linux PC with a graphics card that supports at least OpenGL 4.2 or Vulkan 1.0. The preferred Linux distribution for Stride is Debian 12 or later, as this was the setup we used to develop the Linux version of Stride.

The instructions below assume you have Debian 12 installed.

You will also need a Windows PC to build your projects for Linux using Game Studio.

## Setup

You need the following packages:

* [FreeType](#freetype)
* [OpenAL](#openal)
* [SDL2](#sdl2)
* [Latest .NET](https://dotnet.microsoft.com/en-us/download)

## FreeType

To render fonts, we use the [FreeType](https://www.freetype.org/) library. The minimum required version is 2.6 and can be installed via:

### [Debian / Ubuntu](#tab/freetype-ubuntu)

```bash
sudo apt install libfreetype6-dev
```

### [Fedora](#tab/freetype-fedora)

```bash
sudo dnf install freetype-devel
```

### [Arch](#tab/freetype-arch)

```bash
sudo pacman -S freetype2
```

---

## OpenAL

To play sounds and music, we use the [OpenAL](https://www.openal.org/) library. It can be installed via:

### [Debian / Ubuntu](#tab/openal-ubuntu)

```bash
sudo apt install libopenal-dev
```

### [Fedora](#tab/openal-fedora)

```bash
sudo dnf install openal-soft-devel
```

### [Arch](#tab/openal-arch)

```bash
sudo pacman -S openal
```

---

## SDL2

To run games on Linux, we use the [SDL2](https://www.libsdl.org/) library which provides the ability to create windows, handle mouse, keyboard and joystick events. The minimum required version is 2.0.4 and can be installed via:

### [Debian / Ubuntu](#tab/sdl2-ubuntu)

```bash
sudo apt install libsdl2-dev
```

### [Fedora](#tab/sdl2-fedora)

```bash
sudo dnf install SDL2-devel
```

### [Arch](#tab/sdl2-arch)

```bash
sudo pacman -S sdl2
```

## FreeImage

FreeImage is battle-tested library for loading and saving popular image file formats like BMP, PNG, JPEG etc. The minimum required version is 3.18 and can be installed via:


### [Debian / Ubuntu](#tab/freeimage-ubuntu)

```bash
sudo apt install libfreeimage-dev
```

### [Fedora](#tab/freeimage-fedora)

```bash
sudo dnf install freeimage-devel
```

### [Arch](#tab/freeimage-arch)

```bash
sudo pacman -S freeimage
```


## See also

* [Create a Linux game](create-a-linux-game.md)
