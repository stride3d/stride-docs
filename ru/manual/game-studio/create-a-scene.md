# Create and open a scene
# Создать и открыть сцену

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level Designer</span>
<span class=

When you create a new project, Game Studio creates an initial scene and populates it with basic entities such as a light, a camera, and a skybox.
Когда вы создаете новый проект, Game Studio создает исходную сцену и заполняет ее базовыми объектами, такими как источник света, камера и скайбокс.

You can create scenes like any other asset. As they are complex assets, they have a dedicated editor, the **Scene Editor**.
Вы можете создавать сцены, как и любой другой актив.  Поскольку это сложные активы, у них есть специальный редактор, **Scene Editor**.

## Create a scene
## Создать сцену

1. In the **Asset View** (by default in the bottom pane), click **Add asset** and select **Scenes**.
1. В **Просмотре активов** (по умолчанию на нижней панели) нажмите **Добавить актив** и выберите **Сцены**.

    ![Add a scene](media/add-scene.png)
![Добавить сцену](media/add-scene.png)

2. Select the appropriate **scene template**.
2. Выберите соответствующий **шаблон сцены**.

    Template | Result
Шаблон |  Результат
    ---------|--------
---------|--------
    Empty scene | An empty scene with no entities or preconfigured rendering pipeline
Пустая сцена |  Пустая сцена без сущностей или предварительно настроенного конвейера рендеринга.
    Scene with HDR pipeline | A scene containing basic entities and preconfigured for HDR rendering
Сцена с конвейером HDR |  Сцена, содержащая основные объекты и предварительно настроенная для рендеринга HDR.
    Scene with LDR pipeline | A scene containing basic entities and preconfigured for LDR rendering
Сцена с конвейером LDR |  Сцена, содержащая основные объекты и предварительно настроенная для рендеринга LDR.

## Open a scene in the Scene Editor
## Откройте сцену в редакторе сцен

In the **Asset View**:
В **Просмотре объектов**:

![Select a scene in the Asset View](media/open-scene-from-asset-view.png)
![Выберите сцену в представлении ресурсов](media/open-scene-from-asset-view.png)

* double-click the scene asset, or
* дважды щелкните объект сцены или
* right-click the asset and select **Edit asset**, or 
* щелкните ресурс правой кнопкой мыши и выберите **Редактировать ресурс** или
* select the asset and type **Ctrl + Enter**
* выберите ресурс и нажмите **Ctrl + Enter**

> [!TIP]
> [!СОВЕТ]
> You can have several scenes open simultaneously.
> Вы можете одновременно открыть несколько сцен.

## Use the Scene Editor
## Используйте редактор сцен

![Scene Editor](media/create-a-scene-default-scene-editor.png)
![Редактор сцен](media/create-a-scene-default-scene-editor.png)

The **Scene Editor tabs** (A) display the open scenes. You can switch between open scenes using the tabs.
На вкладках **Редактор сцен** (A) отображаются открытые сцены.  Вы можете переключаться между открытыми сценами с помощью вкладок.

The **Entity Tree** (B) shows the hierarchy of the entities included in the scene. The same entity hierarchy is applied at runtime. You can use the Entity Tree to browse, select, rename, and reorganize your entities.
**Дерево сущностей** (B) показывает иерархию сущностей, включенных в сцену.  Та же иерархия сущностей применяется во время выполнения.  Вы можете использовать Дерево сущностей для просмотра, выбора, переименования и реорганизации ваших сущностей.

You can use the **tool bar** (C) to modify entities and change the Scene Editor display.
Вы можете использовать **панель инструментов** (C) для изменения объектов и изменения отображения редактора сцен.

The **main window** (D) shows a simplified representation of your scene, with your entities positioned inside it. For entities that have no shape (E), Game Studio represents them with **2D gizmos**; for example, cameras are represented with camera icons.
**Главное окно** (D) показывает упрощенное представление вашей сцены с вашими объектами, расположенными внутри нее.  Для сущностей, не имеющих формы (E), Game Studio представляет их с помощью **двухмерных штуковин**;  например, камеры представлены значками камеры.

## See also
## Смотрите также

* [Navigate in the Scene Editor](navigate-in-the-scene-editor.md)
* [Навигация в редакторе сцен](navigate-in-the-scene-editor.md)
* [Manage scenes](manage-scenes.md)
* [Управление сценами](manage-scenes.md)
* [Load scenes](load-scenes.md)
* [Загрузить сцены](load-scenes.md)
* [Add entities](add-entities.md)
* [Добавить сущности](add-entities.md)
* [Manage entities](manage-entities.md)
* [Управление объектами](manage-entities.md)
