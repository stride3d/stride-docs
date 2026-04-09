# Distributing

<span class="badge text-bg-primary">Beginner</span>

This page contains information about how to distribute a game made with Stride.

## Requirements

In order to run, Stride games require a user to have the following installed:

### Windows

* Windows 10 or newer
* .NET 10 Runtime (unless the game was published as [self contained](setup.md#self-contained))
* Visual C++ 2015 runtimes

### Linux

* .NET 10 Runtime (unless the game was published as [self contained](setup.md#self-contained))
* FreeType (for installation instructions, visit the [Linux page](../../platforms/linux/setup-and-requirements.md#freetype))
* OpenAL (for installation instructions, visit the [Linux page](../../platforms/linux/setup-and-requirements.md#openal))
* SDL2 (for installation instructions, visit the [Linux page](../../platforms/linux/setup-and-requirements.md#sdl2))
* FreeImage (for installation instructions, visit the [Linux page](../../platforms/linux/setup-and-requirements.md#freeimage))
* Vulkan or OpenGL (depending on the graphics API used by your game)

> [!NOTE]
> This page doesn't contain information for all platforms. If you want to expand it, consider [contributing to the documentation](../../../contributors/documentation/index.md).

## Steam and Proton

**Current status:** 🟥 doesn't work (as of 08.04.2026)

Proton is a compatibility layer used by [Steam](https://store.steampowered.com), that allows players to run games built for **Windows** on machines running **Linux**.

**Stride games aren't as well supported by Proton as games made for other engines**. It's possible that an update to Stride or the compatibility layer might break your game. To make sure it runs properly on Linux, consider **creating a native build for that platform**.

## See also

* [Cleaning up](cleaning-up.md)
