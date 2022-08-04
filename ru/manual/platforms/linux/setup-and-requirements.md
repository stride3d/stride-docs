# Setup and requirements
# Настройка и требования

To develop for Linux using Stride, you need a Linux PC with a graphics card that supports at least OpenGL 4.2 or Vulkan 1.0. The preferred Linux distribution for Stride is Ubuntu 16.04 or later, as this was the setup we used to develop the Linux version of Stride.
Для разработки под Linux с помощью Stride вам понадобится ПК с Linux и графическая карта, поддерживающая как минимум OpenGL 4.2 или Vulkan 1.0.  Предпочтительным дистрибутивом Linux для Stride является Ubuntu 16.04 или более поздней версии, поскольку именно эту настройку мы использовали для разработки версии Stride для Linux.

The instructions below assume you have Ubuntu 16.04 installed. You might need to adapt them according to your Linux distribution.
В приведенных ниже инструкциях предполагается, что у вас установлена ​​Ubuntu 16.04.  Возможно, вам придется адаптировать их в соответствии с вашим дистрибутивом Linux.

You will also need a Windows PC to build your projects for Linux using Game Studio.
Вам также понадобится ПК с Windows, чтобы создавать проекты для Linux с помощью Game Studio.

## Setup
## Настраивать

You need the following packages:
Вам понадобятся следующие пакеты:

* [FreeType](#freetype)
* [Свободный тип] (#свободный тип)

* [OpenAL](#openal)
* [ОткрытьAL](#открыть)

* [SDL2](#sdl2)
* [СДЛ2](#СДЛ2)

* either Mono or .NET Core (it's OK to install both)
* либо Mono, либо .NET Core (можно установить оба)

## FreeType
## Свободный тип

To render fonts, we use the [FreeType](https://www.freetype.org/) library. The minimum required version is 2.6 and can be installed via:
Для рендеринга шрифтов мы используем библиотеку [FreeType](https://www.freetype.org/).  Минимальная требуемая версия — 2.6, ее можно установить через:

```
```
sudo apt-get install libfreetype6-dev
sudo apt-get установить libfreetype6-dev
```
```

## OpenAL
## ОпенАЛ

To play sounds and music, we use the [OpenAL](https://www.openal.org/) library. It can be installed via:
Для воспроизведения звуков и музыки мы используем библиотеку [OpenAL](https://www.openal.org/).  Его можно установить через:

```
```
sudo apt-get install libopenal-dev
sudo apt-get установить libopenal-dev
```
```

## SDL2
## СДЛ2

To run games on Linux, we use the [SDL2](https://www.libsdl.org/) library which provides the ability to create windows, handle mouse, keyboard and joystick events. The minimum required version is 2.0.4 and can be installed via:
Для запуска игр в Linux мы используем библиотеку [SDL2](https://www.libsdl.org/), которая позволяет создавать окна, обрабатывать события мыши, клавиатуры и джойстика.  Минимальная требуемая версия — 2.0.4, ее можно установить через:

```
```
sudo apt-get install libsdl2-dev
sudo apt-get установить libsdl2-dev
```
```

### .NET Core
### .NET Core

For information about how to install .NET Core, see the [.NET Core instructions for Debian/Ubuntu](https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x).
Сведения об установке .NET Core см. в [инструкциях по .NET Core для Debian/Ubuntu](https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x).

Make sure version 2.1.300+ and runtime 2.1+ is installed. To check which version you have installed, type:
Убедитесь, что установлена ​​версия 2.1.300+ и среда выполнения 2.1+.  Чтобы проверить, какая версия у вас установлена, введите:

```
```
dotnet --info
дотнет --информация
```
```

## See also
## Смотрите также

* * [Create a Linux game](create-a-linux-game.md)
* * [Создать игру для Linux](create-a-linux-game.md)
