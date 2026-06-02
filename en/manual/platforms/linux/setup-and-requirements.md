# Setup and requirements

This page describes how to setup your Linux machine in order to develop and play Stride games.

## Setup

In order to run games made for Linux, you'll need a Linux PC with a graphics card that supports Vulkan, along with the following packages:

* [FreeType](#freetype)
* [OpenAL](#openal)
* [SDL2](#sdl2)

## FreeType

To render fonts, we use the [FreeType](https://www.freetype.org/) library. The minimum required version is 2.6 and can be installed with your distribution's package manager:

### [Debian / Ubuntu](#tab/ubuntu)

```bash
sudo apt install libfreetype6-dev
```

### [Fedora](#tab/fedora)

```bash
sudo dnf install freetype-devel
```

### [Arch](#tab/arch)

```bash
sudo pacman -S freetype2
```

---

## OpenAL

To play sounds and music, we use the [OpenAL](https://www.openal.org/) library. It can be installed with your distribution's package manager:

### [Debian / Ubuntu](#tab/ubuntu)

```bash
sudo apt install libopenal-dev
```

### [Fedora](#tab/fedora)

```bash
sudo dnf install openal-soft-devel
```

### [Arch](#tab/arch)

```bash
sudo pacman -S openal
```

---

## SDL2

To run games on Linux, we use the [SDL2](https://www.libsdl.org/) library which provides the ability to create windows, handle mouse, keyboard and joystick events. The minimum required version is 2.0.4 and can be installed with your distribution's package manager:

### [Debian / Ubuntu](#tab/ubuntu)

```bash
sudo apt install libsdl2-dev
```

### [Fedora](#tab/fedora)

```bash
sudo dnf install SDL2-devel
```

### [Arch](#tab/arch)

```bash
sudo pacman -S sdl2
```

---

## See also

* [Building the game](../../files-and-folders/building-the-game/index.md)
