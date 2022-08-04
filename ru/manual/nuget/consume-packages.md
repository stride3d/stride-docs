# Consume packages
# Использовать пакеты

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

## Open your project in Visual Studio
## Откройте свой проект в Visual Studio

> [!Note]
> [!Примечание]
> Game Studio will later support adding NuGet packages directly.
> Позже Game Studio будет поддерживать прямое добавление пакетов NuGet.

First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:
Прежде всего, после сохранения всех изменений откройте проект в Visual Studio.  Это легко сделать, нажав соответствующую кнопку на панели инструментов:

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)
![Открыть проект в Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

## Add a reference
## Добавить ссылку

1. In the **Solution Explorer**, right-click on the project and click on **Manage NuGet Packages...**
1. В **Обозревателе решений** щелкните проект правой кнопкой мыши и выберите **Управление пакетами NuGet...**.

   ![Visual Studio Start button](media/manage-nuget-packages.png)
![Кнопка запуска Visual Studio](media/manage-nuget-packages.png)

2. For our example, let's use `Stride.AssetPack.BuildingBlocks` package:
2. Для нашего примера возьмем пакет Stride.AssetPack.BuildingBlocks:
   * Choose "nuget.org" or "All" as the **Package source**
* Выберите «nuget.org» или «Все» в качестве **Источника пакета**.
   * Make sure **Include prerelease** is checked (if necessary)
* Убедитесь, что установлен флажок **Включить предварительный выпуск** (при необходимости).
   * Go to the **Browse** tab
* Перейдите на вкладку **Обзор**
   * **Search** for a Stride asset package (i.e. **Stride.AssetPack.BuildingBlocks**) and select **Install**
* **Найдите** пакет ресурсов Stride (например, **Stride.AssetPack.BuildingBlocks**) и выберите **Установить**.

   ![Install package](media/install-package.png)
![Установить пакет](media/install-package.png)

3. Save the Visual Studio project.
3. Сохраните проект Visual Studio.

## Use assets in Game Studio
## Используйте ассеты в Game Studio

1. In **Game Studio**, go to the **File** menu and select **Reload project**
1. В **Game Studio** перейдите в меню **Файл** и выберите **Перезагрузить проект**.

2. You should now be able to see the referenced project and its assets in **Solution explorer**
2. Теперь вы должны увидеть указанный проект и его активы в **Обозревателе решений**.

   ![Use package](media/use-package-from-game-studio.png)
![Использовать пакет](media/use-package-from-game-studio.png)

> [!Note]
> [!Примечание]
> Those assets are readonly and as such can't be dragged and dropped into the scene. This will be fixed soon.
> Эти активы доступны только для чтения, и поэтому их нельзя перетаскивать на сцену.  Это будет исправлено в ближайшее время.
> In the meantime, you can still use the asset selector to change an existing model or material reference to one from the asset pack.
> Тем временем вы по-прежнему можете использовать селектор ресурсов, чтобы изменить существующую модель или ссылку на материал на модель из пакета ресурсов.
