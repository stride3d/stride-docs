# Manage assets
# Управление активами

<span class="label label-doc-level">Beginner</span>
<span class=

This page explains how to edit and manage your assets.
На этой странице объясняется, как редактировать и управлять своими активами.

## Edit assets in the Property Grid
## Редактировать активы в сетке свойств

You can edit most assets using the **Property Grid**. By default, this is in the top-right of Game Studio.
Вы можете редактировать большинство ресурсов, используя **Сетку свойств**.  По умолчанию это находится в правом верхнем углу Game Studio.

For example, to change the color of a material asset::
Например, чтобы изменить цвет материального актива:

 1. In the **Asset View** (in the bottom by default), select the material.
1. В **Asset View** (по умолчанию внизу) выберите материал.
 
	![Select material in the Asset View](../get-started/media/edit-asset-sphere-material-asset-view-tab.png)
![Выберите материал в представлении ресурсов](../get-started/media/edit-asset-sphere-material-asset-view-tab.png)

 2. In the Property Grid, under **Shading > Diffuse**, next to **Diffuse Map**, click the **colored box**, which displays the asset color (yellow in this example).
2. В сетке свойств в разделе **Shading > Diffuse** рядом с **Diffuse Map** щелкните **цветное поле**, в котором отображается цвет актива (в данном примере желтый).
 
	The color picker opens.
Откроется палитра цветов.
 
	![Color picker and Palette](../get-started/media/edit-asset-color-picker-palette-diffuse.png)
![Палитра цветов и палитра](../get-started/media/edit-asset-color-picker-palette-diffuse.png)
	
 4. Select a new color for the asset.
4. Выберите новый цвет для актива.
	
	![Asset is now red](../get-started/media/edit-asset-color-change-selected-asset.png)
![Актив теперь красный](../get-started/media/edit-asset-color-change-selected-asset.png)

The **Asset Preview** (bottom right by default) displays asset changes in real time.
**Предварительный просмотр активов** (по умолчанию внизу справа) отображает изменения активов в режиме реального времени.

The **Asset View** indicates assets with unsaved changes with asterisks (*).
В **Просмотре активов** активы с несохраненными изменениями отмечены звездочками (*).

![Unsaved changes](../get-started/media/asset-unsaved-changes.png)
![Несохраненные изменения](../get-started/media/asset-unsaved-changes.png)

## Edit assets using dedicated editors
## Редактируйте активы с помощью специальных редакторов

Game Studio has dedicated editors for the following asset types:
В Game Studio есть специальные редакторы для следующих типов активов:

* prefabs
* сборные
* scenes
* сцены
* sprite sheets
* листы спрайтов
* UI pages
* Страницы пользовательского интерфейса
* UI libraries
* библиотеки пользовательского интерфейса
* scripts
* скрипты

For example, you edit scenes in the **Scene Editor**.
Например, вы редактируете сцены в **Редакторе сцен**.

![Scene Editor](media/manage-assets-scene-editor.png)
![Редактор сцен](media/manage-assets-scene-editor.png)

To open the dedicated editor for these types of asset:
Чтобы открыть специальный редактор для этих типов активов:

* double-click the asset, or
* дважды щелкните ресурс или
* right-click the asset and select **Edit asset**, or
* щелкните ресурс правой кнопкой мыши и выберите **Редактировать ресурс** или
* select the asset and type **Ctrl + Enter**
* выберите ресурс и нажмите **Ctrl + Enter**

## Organize assets
## Организация активов

We recommend you organize your assets into subfolders by type. This makes projects much easier to manage, especially as they become large.
Мы рекомендуем организовать ресурсы в подпапки по типу.  Это значительно упрощает управление проектами, особенно когда они становятся большими.

![Organized project](media/manage-assets-organized-project.png)
![Организованный проект](media/manage-assets-organized-project.png)

Assets are contained in the **Assets** folder of your project package. You can see the project in the **Solution Explorer** (by default shown in the bottom left).
Активы содержатся в папке **Assets** пакета вашего проекта.  Вы можете увидеть проект в **Solution Explorer** (по умолчанию отображается внизу слева).

* To create a subfolder, right-click the parent folder and select **Create subfolder**.
* Чтобы создать подпапку, щелкните правой кнопкой мыши родительскую папку и выберите **Создать подпапку**.
* To move an asset, select one or more assets in the **Asset View** and drag and drop them to the folder.
* Чтобы переместить актив, выберите один или несколько активов в **Представлении активов** и перетащите их в папку.

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> When you move an asset, Game Studio updates all references to other assets inside the asset.
> Когда вы перемещаете актив, Game Studio обновляет все ссылки на другие активы внутри актива.

> [!TIP]
> [!СОВЕТ]
> To see the URL and type of an asset, move the mouse over the asset thumbnail.
> Чтобы увидеть URL-адрес и тип ресурса, наведите указатель мыши на миниатюру ресурса.
> ![Details of new asset in Asset View tab](../get-started/media/asset-creation-solution-explorer.png)
> ![Подробности о новом активе на вкладке «Просмотр активов»](../get-started/media/asset-creation-solution-explorer.png)
 
## Include assets in the build
## Включить активы в сборку

By default, Stride doesn't include every asset when you build the game. This is because you might not need every asset at runtime — for example, if the asset is incomplete.
По умолчанию Stride не включает все активы при создании игры.  Это связано с тем, что вам может не понадобиться каждый актив во время выполнения — например, если актив неполный.

Stride only includes assets which:
Stride включает только активы, которые:

* you've specifically marked for inclusion (**root assets**), or 
* вы специально отметили для включения (**корневые активы**), или
* are **referenced** by a root asset
* на них **ссылается** корневой ресурс

Game Studio indicates whether an asset is included with a colored icon in the top-left of the asset thumbnail.
Game Studio указывает, включен ли актив, с помощью цветного значка в верхнем левом углу миниатюры актива.

Color | Status
Цвет |  Статус
------|--------
------|--------
Blue <p><br>![Blue](media/manage-assets-reference-asset.png)</p></br> | The asset is a root asset and included in the build.
Синий <p><br>![Синий](media/manage-assets-reference-asset.png)</p></br> |  Актив является корневым активом и включен в сборку.
Green <p><br>![Green](media/manage-assets-include-asset.png)</p></br> | The asset is referenced by a root asset and included in the build.
Зеленый <p><br>![Зеленый](media/manage-assets-include-asset.png)</p></br> |  На ресурс ссылается корневой ресурс, и он включается в сборку.
Gray <p><br>![Gray](media/manage-assets-exclude-asset.png)</p></br> | The asset isn't included in the build.
Серый <p><br>![Серый](media/manage-assets-exclude-asset.png)</p></br> |  Ресурс не включен в сборку.

If you plan to load an asset at runtime using scripts, make it a root asset. To do this:
Если вы планируете загружать ресурс во время выполнения с помощью скриптов, сделайте его корневым ресурсом.  Сделать это:

* click the **gray dot** in the top-left of the thumbnail, or
* нажмите **серую точку** в левом верхнем углу миниатюры или

* right-click the asset and select **Include in build as root asset**
* щелкните ресурс правой кнопкой мыши и выберите **Включить в сборку как корневой ресурс**

    ![Include in build as root asset](media/right-click-include-in-build-as-root-asset.png)
![Включить в сборку как корневой ресурс](media/right-click-include-in-build-as-root-asset.png)

## Asset View options
## Параметры просмотра активов

To change the Asset View options, click the eye icon in the Asset View toolbar.
Чтобы изменить параметры представления активов, щелкните значок глаза на панели инструментов представления активов.

![Asset View options](../get-started/media/asset-view-options.png)
![Параметры просмотра ресурсов](../get-started/media/asset-view-options.png)

You can:
Вы можете:

* display assets in the selected folder only, the selected folder and subfolder 
* отображать активы только в выбранной папке, выбранной папке и подпапке
* sort assets by name, type, unsaved changes, and modification date
* сортировать активы по имени, типу, несохраненным изменениям и дате модификации
* switch between tile view (default) and grid view
* переключение между представлением плитки (по умолчанию) и представлением сетки

## Filter assets
## Фильтр ресурсов

When browsing assets in the **Asset View** (in the bottom by default), you can filter by name, tag, type, or a combination of all three.
При просмотре активов в **Просмотре активов** (по умолчанию внизу) вы можете фильтровать по имени, тегу, типу или комбинации всех трех параметров.

The tag and name filters are "and" filters. For example, if you filter by *tag:level* and *name:knight*, the Asset View only displays assets with the tag "level" **and** the name "knight".
Фильтры тегов и имен — это фильтры «и».  Например, если вы фильтруете по *tag:level* и *name:knight*, в Asset View отображаются только активы с тегом «level» **и** именем «knight».

Type filters are "or" filters. For example, if you filter by *type:animation* and *type:texture*, the Asset View only displays assets that are animations **or** textures.
Фильтры типов — это фильтры «или».  Например, если вы фильтруете по параметрам *тип:анимация* и *тип:текстура*, в представлении активов отображаются только ресурсы, которые являются анимацией **или** текстурами.

### Add a filter
### Добавить фильтр

1. In the Asset View, type in the filter bar.
1. В представлении активов введите строку фильтра.

    Game Studio displays a list of matching filters (name, type, or tag).
Game Studio отображает список соответствующих фильтров (имя, тип или тег).

    ![add-filter.png](media/add-filter.png)
![добавить-фильтр.png](медиа/добавить-фильтр.png)

2.  To filter by name, press **Enter**.
2. Чтобы отфильтровать по имени, нажмите **Ввод**.

    To filter by a tag or type, select **tag** or **type** filters in the drop-down list.
Чтобы отфильтровать по тегу или типу, выберите фильтры **тег** или **тип** в раскрывающемся списке.

    Game Studio applies the filter and shows matching assets in the Asset View.
Game Studio применяет фильтр и показывает соответствующие активы в представлении активов.
    
You can add multiple filters. Name filters are green, tag filters are blue, and type filters are orange.
Вы можете добавить несколько фильтров.  Фильтры имен — зеленые, фильтры тегов — синие, а фильтры типов — оранжевые.

![filter-tags](media/filter-tags.png)
![фильтр-теги](media/filter-tags.png)
    
### Toggle filters on and off
### Включить и выключить фильтры

To toggle a filter on and off without removing it, click it. Disabled filters have darker colors.
Чтобы включить или выключить фильтр, не удаляя его, щелкните его.  Отключенные фильтры имеют более темные цвета.

![filter-tags](../get-started/media/disabled-filter-tags.png)
![фильтр-теги](../get-started/media/disabled-filter-tags.png)

### Remove a filter
### Удалить фильтр

To remove a filter, click the X icon in the filter tag.
Чтобы удалить фильтр, щелкните значок X в теге фильтра.

## See also
## Смотрите также

* [Create assets](create-assets.md)
* [Создать активы](create-assets.md)
* [Manage assets](manage-assets.md)
* [Управление активами](manage-assets.md)
* [Use assets](use-assets.md)
* [Использовать активы](use-assets.md)
