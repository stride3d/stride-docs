# Distribute a game
# Раздать игру

When you're ready to publish your game, create a release build from Visual Studio, then distribute it.
Когда вы будете готовы опубликовать свою игру, создайте сборку выпуска в Visual Studio, а затем распространите ее.

## 1. Create a release build
## 1. Создайте релизную сборку

1. If you've built your game in Release mode before, in your project folder (eg *MyGame/Bin/MyPlatform/Release/*), delete the *Data* folder. This folder might contain unnecessary files, such as old versions of assets, so it's simplest to build it again from scratch.
1. Если вы уже создавали игру в режиме Release, в папке вашего проекта (например, *MyGame/Bin/MyPlatform/Release/*) удалите папку *Data*.  Эта папка может содержать ненужные файлы, например старые версии ресурсов, поэтому проще всего создать ее заново с нуля.

2. Open your project in Game Studio.
2. Откройте свой проект в Game Studio.

3. In the toolbar, click the drop-down menu and select **Visual Studio**.
3. На панели инструментов щелкните раскрывающееся меню и выберите **Visual Studio**.

    ![Open in VS](media/open-in-visual-studio.png)
![Открыть в VS](media/open-in-visual-studio.png)

    Your project opens in Visual Studio.
Ваш проект откроется в Visual Studio.

4. In Visual Studio, from the **Solution Configurations** drop-down menu, select **Release**.
4. В Visual Studio в раскрывающемся меню **Конфигурации решения** выберите **Выпуск**.

    ![Select release](media/select-release.png)
![Выбрать выпуск](media/select-release.png)

5. From the **Solution platforms** drop-down menu, select the platform you want to create a build for.
5. В раскрывающемся меню **Платформы решений** выберите платформу, для которой вы хотите создать сборку.

    ![Select platform](media/select-platform.png)
![Выберите платформу](media/select-platform.png)

    >[!Note]
>[!Примечание]
    >
>
    >You can only build for platforms you've added to your Stride project. For instructions about how to do this, see [Add or remove a platform](../platforms/add-or-remove-a-platform.md).
>Вы можете строить только для платформ, которые вы добавили в свой проект Stride.  Инструкции о том, как это сделать, см. в разделе [Добавить или удалить платформу](../platforms/add-or-remove-a-platform.md).
    >
>
    >To build for Android or iOS, you need Xamarin, which is included with Visual Studio licenses. For instructions about how to install Xamarin with Visual Studio 2017, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).
>Для сборки под Android или iOS вам понадобится Xamarin, который включен в лицензии Visual Studio.  Инструкции по установке Xamarin с Visual Studio 2017 см. на [этой странице MSDN](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

6. Under **Build**, select **Build solution**.
6. В разделе **Сборка** выберите **Создать решение**.

    ![Build solution](media/build-solution.png)
![Сборка решения](media/build-solution.png)

    Visual Studio creates a release build in your project bin folder (eg *MyGame/Bin/MyPlatform/Release*).
Visual Studio создает сборку релиза в папке bin вашего проекта (например, *MyGame/Bin/MyPlatform/Release*).

> [!Tip]
> [!Подсказка]
> You might want to rename the **Release** folder to something more descriptive (such as the title of your game).
> Возможно, вы захотите переименовать папку **Release** во что-то более описательное (например, название вашей игры).

## 2. Delete unnecessary files
## 2. Удалите ненужные файлы

In the release folder in your project bin folder (eg *MyGame/Bin/MyPlatform/Release*), you can delete the following unnecessary files:
В папке релиза в папке bin вашего проекта (например, *MyGame/Bin/MyPlatform/Release*) вы можете удалить следующие ненужные файлы:

* `.pdb` files (debug information)
* файлы `.pdb` (отладочная информация)

* `.xml` files (API documentation)
* Файлы `.xml` (документация по API)

* files that contain `vshost` in their filenames (eg `MyGame.vshost.exe` and `MyGame5.vshost.exe.manifest`) 
* файлы, имена которых содержат `vshost` (например, `MyGame.vshost.exe` и `MyGame5.vshost.exe.manifest`)

* folders other than the `x64`, `x86`, or `data` folders
* папки, отличные от папок `x64`, `x86` или `data`

* other unnecessary files, such as custom configuration files (ie files not created with Stride)
* другие ненужные файлы, такие как пользовательские файлы конфигурации (т.е. файлы, не созданные с помощью Stride)

## 3. Distribute your game
## 3. Распространяйте свою игру

After you create a release build, how you distribute it is up to you. 
После того, как вы создадите сборку выпуска, то, как вы будете распространять ее, зависит от вас.

To run games made with Stride on Windows, users need:
Для запуска игр, созданных с помощью Stride, в Windows пользователям необходимо:

* .NET 4.6.1
* .NET 4.6.1

* DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan
* DirectX11 (входит в состав Windows 10 и более поздних версий), OpenGL или Vulkan

* Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)
* Среды выполнения Visual C++ 2015 (x86 и/или x64, в зависимости от того, что вы установили в свойствах проекта в Visual Studio)

## See also
## Смотрите также

* [Add or remove a platform](../platforms/add-or-remove-a-platform.md)
* [Добавить или удалить платформу](../platforms/add-or-remove-a-platform.md)
* [Version control](version-control.md)
* [Контроль версий](version-control.md)
* [Project structure](project-structure.md)
* [Структура проекта](project-structure.md)
