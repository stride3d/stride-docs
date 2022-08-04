# Create packages
# Создавать пакеты

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

## Open your project in Visual Studio
## Откройте свой проект в Visual Studio

> [!Note]
> [!Примечание]
> Game Studio will later support creating NuGet packages directly.
> Позже Game Studio будет поддерживать прямое создание пакетов NuGet.

First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:
Прежде всего, после сохранения всех изменений откройте проект в Visual Studio.  Это легко сделать, нажав соответствующую кнопку на панели инструментов:

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)
![Открыть проект в Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

A few things to look out for:
Несколько вещей, на которые следует обратить внимание:
* Delete unecessary assets (i.e. GameSettings, etc...)
* Удалите ненужные активы (например, GameSettings и т. д.)
* Delete unecessary `PackageReference`
* Удалить ненужные `PackageReference`

## Optional: Setup Package properties
## Необязательно: свойства пакета установки

1. In the **Solution Explorer**, right-click on the project and click on **Properties**.
1. В **Обозревателе решений** щелкните проект правой кнопкой мыши и выберите **Свойства**.

2. Go to the **Package** tab and edit Package version, description, URL, etc.
2. Перейдите на вкладку **Пакет** и измените версию пакета, описание, URL-адрес и т. д.

   ![Setup package properties](media/setup-package-properties.png)
![Свойства пакета установки](media/setup-package-properties.png)

## Pack
## Пакет

1. In the **Solution Explorer**, right-click on the project and click on **Pack**.
1. В **Обозревателе решений** щелкните проект правой кнопкой мыши и выберите **Упаковать**.

   ![Pack project](media/pack-project.png)
![Упаковать проект](media/pack-project.png)

2. Visual Studio will build and pack the project. The resulting `.nupkg` should be in `bin\Debug` or `bin\Release` folder, depending on your configuration.
2. Visual Studio соберет и упакует проект.  Полученный `.nupkg` должен находиться в папке `bin\Debug` или `bin\Release`, в зависимости от вашей конфигурации.

## Publish
## Опубликовать

You can now publish the `.nupkg` file on a NuGet repository such as [nuget.org](https://nuget.org).
Теперь вы можете опубликовать файл `.nupkg` в репозитории NuGet, таком как [nuget.org](https://nuget.org).

There is several ways to do that: `nuget.exe` client, `dotnet.exe` client or [nuget.org Upload Package](https://www.nuget.org/packages/manage/upload)
Это можно сделать несколькими способами: клиент `nuget.exe`, клиент `dotnet.exe` или [пакет загрузки nuget.org] (https://www.nuget.org/packages/manage/upload).

For additional information, please reference to [Publishing packages](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package) in NuGet documentation.
Дополнительные сведения см. в разделе [Публикация пакетов](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package) в документации NuGet.

Once your package is properly listed, it can now be [consumed](consume-packages.md) by other Stride users!
После того, как ваш пакет правильно указан в списке, он может быть [потреблен](consume-packages.md) другими пользователями Stride!
