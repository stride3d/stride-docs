# Setup and requirements

To develop for Linux using Stride, you need a Linux PC with a graphics card that supports Vulkan.

The instructions below assume you have Debian 12 installed.

You will also need a Windows PC to build your projects for Linux using Game Studio.

## Setup

You need the following packages:

* [FreeType](#freetype)
* [OpenAL](#openal)
* [SDL2](#sdl2)
* [FreeImage](#freeimage)

## FreeType

To render fonts, we use the [FreeType](https://www.freetype.org/) library. The minimum required version is 2.6 and can be installed via:

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

To play sounds and music, we use the [OpenAL](https://www.openal.org/) library. It can be installed via:

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

To run games on Linux, we use the [SDL2](https://www.libsdl.org/) library which provides the ability to create windows, handle mouse, keyboard and joystick events. The minimum required version is 2.0.4 and can be installed via:

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

## FreeImage

[FreeImage](https://freeimage.sourceforge.io/) is battle-tested library for loading and saving popular image file formats like BMP, PNG, JPEG etc. The minimum required version is 3.18 and can be installed via:


### [Debian / Ubuntu](#tab/ubuntu)

```bash
sudo apt install libfreeimage-dev
```

### [Fedora](#tab/fedora)

```bash
sudo dnf install freeimage-devel
```

### [Arch](#tab/arch)

Freeimage isn't available in Arch's package manager, but it can be installed by manually compiling the source code.

You can get the source code from [the freeimage website](https://freeimage.sourceforge.io/download.html) (download the source distribution).

After extracting, compile and install the package using `makepkg`.

```bash
makepkg -i
```

Alternatively, you can use a tool, such as `yay` to obtain the package from the AUR.

> [!WARNING]
> Packages listed on the AUR **are maintained by other users**, meaning that it's **possible for them to contain malicious code**. Proceed at your own risk.

```bash
yay -S freeimage
```

---

## See also

* [Create a Linux game](create-a-linux-game.md)
