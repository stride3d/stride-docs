# Xenko doesn't run

If you're having trouble running Xenko, make sure you've installed all the prerequisites:

* .NET Framework 4.6.2
* Visual C++ Redistributable 2015 or 2017
* Build Tools for Visual Studio

Alternatively, uninstall Xenko, restart the Xenko installer, and install the prerequisites when prompted.

## .NET Framework 4.6.2

To check if this is installed, see **Control Panel > Programs > Programs and Features** and look for an entry containing **.NET 4.6.2**.

![Programs and features](media/programs-and-features.png)

If it's not installed, you can download it from the [Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=53345).

> [!Note]
> If you install Visual Studio, make sure you also install the .Net Framework support. Just the Visual Studio base installation isn't enough.

## Visual C++ Redistributable 2015 or 2017

To check if this is installed, see **Control Panel > Programs > Programs and Features** and look for **2015 Redistributable** or **2017 Redistributable**.

![Programs and features](media/programs-and-features-redistributable.png)

If it's not installed, you can download the 2017 Redistributable from [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (under **Other Tools and Frameworks**).

## Build Tools for Visual Studio

If you don't have Visual Studio installed, you need to install **Build Tools for Visual Studio**. You can download this from [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (under **Other Tools and Frameworks**).

> [!Note]
> Windows uses the Visual Studio installer to install the Visual C++ Redistributable and Build Tools for Visual Studio prerequisites. If you don't need Visual Studio, don't worry – it doesn't install it.
>![Installing VS build tools](../get-started/media/installing-vs-build-tools.png)

## See also

* [Install Xenko](../get-started/install-xenko.md)