# Stride doesn't run
# Страйд не бежит

## Prerequisites
## Предпосылки

If you're having trouble running Stride, make sure you've installed all the prerequisites:
Если у вас возникли проблемы с запуском Stride, убедитесь, что вы установили все необходимые компоненты:

* .NET Framework 4.7.2
* .NET Framework 4.7.2
* Visual C++ Redistributable 2019
* Распространяемый пакет Visual C++ 2019 г.
* Build Tools for Visual Studio
* Инструменты сборки для Visual Studio

Alternatively, uninstall Stride, restart the Stride installer, and install the prerequisites when prompted.
Либо удалите Stride, перезапустите программу установки Stride и установите необходимые компоненты при появлении запроса.

### .NET Framework 4.7.2
### .NET Framework 4.7.2

To check if this is installed, see **Control Panel > Programs > Programs and Features** and look for an entry containing **.NET 4.7.2**.
Чтобы проверить, установлено ли это, откройте **Панель управления > Программы > Программы и компоненты** и найдите запись, содержащую **.NET 4.7.2**.

![Programs and features](media/programs-and-features.png)
![Программы и функции](media/programs-and-features.png)

If it's not installed, you can download it from the [Microsoft Download Center](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer).
Если он не установлен, его можно загрузить из [Центра загрузки Microsoft] (https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer).

> [!Note]
> [!Примечание]
> If you install Visual Studio, make sure you also install the .Net Framework support. Just the Visual Studio base installation isn't enough.
> Если вы устанавливаете Visual Studio, убедитесь, что вы также установили поддержку .Net Framework.  Просто базовой установки Visual Studio недостаточно.

### Visual C++ Redistributable 2019
### Распространяемый компонент Visual C++ 2019 г.

To check if this is installed, see **Control Panel > Programs > Programs and Features** and look for **2015-2019 Redistributable**.
Чтобы проверить, установлен ли он, откройте **Панель управления > Программы > Программы и компоненты** и найдите **Распространяемый пакет 2015-2019**.

![Programs and features](media/programs-and-features-redistributable.png)
![Программы и функции](media/programs-and-features-redistributable.png)

If it's not installed, you can download the 2019 Redistributable from [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (under **Other Tools and Frameworks**).
Если он не установлен, вы можете загрузить распространяемый компонент 2019 из [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (в разделе **Другие инструменты и платформы**).


### Visual Studio (only for .NET Framework version)
### Visual Studio (только для версии .NET Framework)

If you have Visual Studio 2019 installed, you need to have the following workloads and/or components installed:
Если у вас установлена ​​Visual Studio 2019, вам необходимо установить следующие рабочие нагрузки и/или компоненты:
* **.NET desktop development**
* **Разработка рабочего стола .NET**
* **.NET core cross-platform development**, with **.NET Core 2.1 Runtime (LTS)** optional component enabled.
* **Кроссплатформенная разработка .NET core** с включенным дополнительным компонентом **.NET Core 2.1 Runtime (LTS)**.

On top of that, if you still have Visual Studio 2017 installed, it should be version 15.9+.
Кроме того, если у вас все еще установлена ​​Visual Studio 2017, она должна быть версии 15.9+.

### Build Tools for Visual Studio (only for .NET Framework version)
### Инструменты сборки для Visual Studio (только для версии .NET Framework)

If you **don't** have Visual Studio installed and don't want to install it, you need to install **Build Tools for Visual Studio**. You can download this from [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (under **Other Tools and Frameworks**).
Если у вас **не** установлена ​​Visual Studio и вы не хотите ее устанавливать, вам необходимо установить **Инструменты сборки для Visual Studio**.  Вы можете загрузить его из [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (в разделе **Другие инструменты и платформы**).

> [!Note]
> [!Примечание]
> Windows uses the Visual Studio installer to install the Visual C++ Redistributable and Build Tools for Visual Studio prerequisites. If you don't need Visual Studio, don't worry – it doesn't install it.
> Windows использует установщик Visual Studio для установки необходимых компонентов распространяемого компонента Visual C++ и инструментов сборки для Visual Studio.  Если вам не нужна Visual Studio, не волнуйтесь — она ее не устанавливает.
>![Installing VS build tools](../get-started/media/installing-vs-build-tools.png)
>![Установка инструментов сборки VS](../get-started/media/installing-vs-build-tools.png)

### .NET SDK 5.0 (only for .NET version)
### .NET SDK 5.0 (только для версии .NET)

.NET SDK 5.0 should have been installed by Stride prerequisite installer, if Visual Studio 2019 didn't do it previously.
.NET SDK 5.0 должен был быть установлен установщиком необходимых компонентов Stride, если Visual Studio 2019 не сделала этого ранее.

If for some reason you need to install it manually, you can use [this link](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-5.0.101-windows-x64-installer).
Если по какой-то причине вам необходимо установить его вручную, вы можете использовать [эту ссылку](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-5.0.101-windows-x64-installer  ).

## See also
## Смотрите также

* [Install Stride](../get-started/install-stride.md)
* [Установить Stride](../get-started/install-stride.md)
