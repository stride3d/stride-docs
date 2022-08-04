# Manage scenes
# Управление сценами

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

Scenes and entities are arranged in a hierarchy, with the **root scene** at the top. This hierarchy is displayed in the **Entity Tree** in the Scene Editor on the left.
Сцены и объекты расположены в иерархии, причем **корневая сцена** находится наверху.  Эта иерархия отображается в **Дереве сущностей** в редакторе сцен слева.

![Scene hierarchy tree](media/scene-hierarchy-tree.png)
![Дерево иерархии сцен](media/scene-hierarchy-tree.png)

The root scene contains all the scenes and entities in your game. It should contain common entities that the other scenes and entities use, such as game logic scripts.
Корневая сцена содержит все сцены и объекты в вашей игре.  Он должен содержать общие сущности, используемые другими сценами и сущностями, например сценарии игровой логики.

![Scene hierarchy diagram](media/scene-hierarchy-diagram.png)
![Диаграмма иерархии сцен](media/scene-hierarchy-diagram.png)

Scenes are kept in different folders. This means that different people can work on them without overwriting each other's work.
Сцены хранятся в разных папках.  Это означает, что над ними могут работать разные люди, не перезаписывая работу друг друга.

> [!Note]
> [!Примечание]
> When scenes load at runtime, their **child scenes aren't automatically loaded too**. You have to load child scenes in code. For more information, see [Load scenes](load-scenes.md).
> Когда сцены загружаются во время выполнения, их **дочерние сцены также не загружаются автоматически**.  Вы должны загрузить дочерние сцены в коде.  Для получения дополнительной информации см. [Загрузить сцены](load-scenes.md).

## Set parent and child scenes
## Установить родительскую и дочернюю сцены

The relationship between parent and child scenes is set on the child, not the parent. In other words, child scenes know about their parent scenes, but parent scenes don't know about their child scenes.
Связь между родительской и дочерней сценами устанавливается в дочерней, а не в родительской.  Другими словами, дочерние сцены знают о своих родительских сценах, но родительские сцены не знают о своих дочерних сценах.

There are several ways to make a scene a child of another scene:
Есть несколько способов сделать сцену дочерней по отношению к другой сцене:

* In the Scene Editor **Entity Tree** (left by default), drag the scene onto the scene you want to make its parent.
* В редакторе сцен **Дерево объектов** (оставлено по умолчанию) перетащите сцену на сцену, которую вы хотите сделать родительской.

* Drag the scene from the **Asset View** (bottom by default) onto the scene you want to make its parent in the **Entity Tree**.
* Перетащите сцену из **Asset View** (по умолчанию внизу) на сцену, которую вы хотите сделать родительской, в **Entity Tree**.

* In the scene **Property Grid** (on the right by default), next to **Parent**, specify the scene you want to be the scene's parent.
* В сцене **Сетка свойств** (по умолчанию справа) рядом с **Родительский** укажите сцену, которую вы хотите сделать родительской для сцены.

    ![Properties parent scene](media/properties-parent-scene.png)
![Свойства родительской сцены](media/properties-parent-scene.png)

## Set the default scene
## Установить сцену по умолчанию

The **default scene** is the scene Stride loads at runtime. You can set this in the [Game Settings](game-settings.md) asset.
**Сцена по умолчанию** — это сцена, которую Stride загружает во время выполнения.  Вы можете установить это в активе [Настройки игры] (game-settings.md).

1. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets folder**.
1. В **Solution Explorer** (нижняя левая панель по умолчанию) выберите **папку Assets**.

    ![Select Assets folder asset](media/select-asset-folder.png)
![Выберите ресурс папки Assets](media/select-asset-folder.png)

2. In the **Asset View** (the bottom pane by default), select the **GameSettings** asset.
2. В **Просмотре ресурсов** (нижняя панель по умолчанию) выберите ресурс **GameSettings**.

    ![Select Game Settings asset](media/select-game-settings-asset.png)
![Выберите актив настроек игры](media/select-game-settings-asset.png)

3. In the **Property Grid** (the right-hand pane by default), next to **Default Scene**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
3. В **Сетке свойств** (правая панель по умолчанию) рядом с **Сценой по умолчанию** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.  png) (**Выберите объект**).
    
    ![Set default scene](media/game-settings-default-scene.png)
![Установить сцену по умолчанию](media/game-settings-default-scene.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

2. Select the default scene and click **OK**.
2. Выберите сцену по умолчанию и нажмите **ОК**.

Stride loads this scene at runtime.
Stride загружает эту сцену во время выполнения.

For more information about the Game Settings asset, see [Game Settings](game-settings.md).
Дополнительные сведения об активе «Настройки игры» см. в разделе [Настройки игры](game-settings.md).

## Set the active scene
## Установить активную сцену

The **active scene** is the scene entities are added to when you drop them in the Scene Editor. Game Studio adds the entities as children to the active scene.
**Активная сцена** — это объекты сцены, в которые добавляются объекты, когда вы перетаскиваете их в редакторе сцен.  Game Studio добавляет объекты в активную сцену в качестве дочерних элементов.

To set the active scene, **Entity Tree** (left by default), right-click the scene and select **active scene**.
Чтобы установить активную сцену, **Дерево сущностей** (по умолчанию слева), щелкните сцену правой кнопкой мыши и выберите **активная сцена**.

![Set active scene](media/set-active-scene.png)
![Установить активную сцену](media/set-active-scene.png)

The active scene has no effect on runtime. 
Активная сцена не влияет на время выполнения.

## Lock scenes and entities
## Блокировка сцен и сущностей

You can lock scenes and entities so they can't be selected in the main window. This is useful when you have lots of things in your scene. You can still select scenes and entities in the Entity Tree.
Вы можете заблокировать сцены и объекты, чтобы их нельзя было выбрать в главном окне.  Это полезно, когда у вас много вещей в вашей сцене.  Вы по-прежнему можете выбирать сцены и объекты в дереве сущностей.

To lock or unlock a scene or entity, in the Entity Tree, click the **padlock** icon.
Чтобы заблокировать или разблокировать сцену или объект, в дереве сущностей щелкните значок **замка**.

![Padlock icon](media/lock-scene-or-entity.png)
![Значок замка](media/lock-scene-or-entity.png)

>[!Tip]
>[!Подсказка]
>When you lock a scene, all its child scenes and entities are locked too. To lock an entity along with its child entities, hold **Ctrl** and click the padlock icon.
> Когда вы блокируете сцену, все ее дочерние сцены и объекты также блокируются.  Чтобы заблокировать объект вместе с его дочерними объектами, удерживайте **Ctrl** и щелкните значок замка.

Locked items have a **gold locked padlock** icon in the Entity Tree.
Заблокированные элементы отмечены значком **золотого замка** в дереве сущностей.

![Locked entity](media/locked-entity.png)    
![Заблокированный объект](media/locked-entity.png)

## Load and unload scenes in the Scene Editor
## Загрузка и выгрузка сцен в редакторе сцен

You can load and unload scenes (with all their child scenes and entities) in the Scene Editor. Unloading scenes in the editor is useful if, for example, you want to remove clutter from your editing view, or improve editor performance.
Вы можете загружать и выгружать сцены (со всеми их дочерними сценами и объектами) в редакторе сцен.  Выгрузка сцен в редакторе полезна, если, например, вы хотите удалить беспорядок из окна редактирования или улучшить производительность редактора.

The screenshots below show a root scene with child scenes loaded and unloaded. The root scene contains entities that all the scenes use, including the [skybox](../graphics/textures/skyboxes-and-backgrounds.md), [scripts](../scripts/index.md), asteroids, and player character. The child scenes are sections of level.
На приведенных ниже снимках экрана показана корневая сцена с загруженными и выгруженными дочерними сценами.  Корневая сцена содержит объекты, которые используются во всех сценах, включая [небесный ящик](../graphics/textures/skyboxes-and-backgrounds.md), [скрипты](../scripts/index.md), астероиды и  персонаж игрока.  Дочерние сцены являются секциями уровня.

![Unloaded and loaded scenes](media/scenes-unloaded.jpg)
![Выгруженные и загруженные сцены](media/scenes-unloaded.jpg)

To load or unload a scene, in the **Scene Editor**, in the **Entity Tree** on the left, next to the scene you want to load or unload, click the **eye icon**.
Чтобы загрузить или выгрузить сцену, в **Редакторе сцен** в **Дереве объектов** слева рядом со сценой, которую вы хотите загрузить или выгрузить, щелкните **значок глаза**.

![Load scene icon](media/load-unload-scene-icon.png)
![Значок загрузки сцены](media/load-unload-scene-icon.png)

## Move a scene
## Переместить сцену

As scenes aren't entities, they don't have transform components. However, you can move a scene using its **offset** property.
Поскольку сцены не являются сущностями, они не имеют компонентов преобразования.  Однако вы можете перемещать сцену, используя ее свойство **offset**.

![Scene offset property](media/scene-offset.png)
![Свойство смещения сцены](media/scene-offset.png)

To move a scene at runtime, use:
Чтобы переместить сцену во время выполнения, используйте:

`myScene.Offset = new Vector3(x, y, z);`
`myScene.Offset = новый Vector3(x, y, z);`

Replace `myScene` with the name of the scene, and `x,y,z` with the XYZ coordinates you want to move the scene to.
Замените `myScene` на имя сцены, а `x,y,z` на координаты XYZ, в которые вы хотите переместить сцену.

## See also
## Смотрите также

* [Create and open a scene](create-a-scene.md)
* [Создать и открыть сцену](create-a-scene.md)
* [Navigate in the Scene Editor](navigate-in-the-scene-editor.md)
* [Навигация в редакторе сцен](navigate-in-the-scene-editor.md)
* [Load scenes](load-scenes.md)
* [Загрузить сцены](load-scenes.md)
* [Add entities](add-entities.md)
* [Добавить сущности](add-entities.md)
* [Manage entities](manage-entities.md)
* [Управление объектами](manage-entities.md)
