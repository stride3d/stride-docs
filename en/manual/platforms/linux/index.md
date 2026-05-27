# Linux

**Linux** is a suite of open source operating systems. It isn't a single product, but instead a base for creating custom OS's, called **distributions**. Recently, it has been growing in popularity among gamers due to devices such as the Steam Deck.

It is possible to run games built for Windows on Linux using **compatibility layers** such as Proton, which is built into Steam. This however can decrease performance, making native builds a more preferable option.

## Development support

Currently, developing games on Linux is only **partially supported**. It's not possible to run **Game Studio** (the editor) on Linux, even when using a compatibility layer, such as Wine.

However, it is still possible to code and build games natively, meaning that when in a team, some programmers could work on a project using Linux for tasks that don't require the editor.

[!INCLUDE [xplat-editor-notice](../../../includes/xplat-editor-notice.md)]

Alternatively, it is possible to create Stride games on Linux using a [code-only](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html) approach, removing the need for an editor all together.

## General support

All of Stride's features are fully supported on Linux.

## Wayland

Wayland is a communication protocol for communication between a display server and it's applications, that has gained popularity among many Linux desktop environments. Many apps however are still yet to adopt it, relying on the outdated X windowing system. They work with wayland compositors thanks to a compatibility layer "xWayland", but can't utilize modern wayland features (such as fractional scalling).

Currently, games made with Stride can only run using the X windowing system.

## In this section

* [Setup and requirements](setup-and-requirements.md)
