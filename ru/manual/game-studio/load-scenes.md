# Load and unload scenes at runtime
# Загружать и выгружать сцены во время выполнения

## Loading scenes
## Загрузка сцен

You can use `UrlReference<Scene>` properties on your scripts to assign **Scene** assets then load the via code:
Вы можете использовать свойства `UrlReference<Scene>` в своих сценариях, чтобы назначить ресурсы **Scene**, а затем загрузить промежуточный код:

```cs
```CS
public UrlReference<Scene> ChildSceneUrl { get; set; }
public UrlReference<Scene> ChildSceneUrl { get;  установлен;  }

//...
//...
var childScene = Content.Load(ChildSceneUrl);
var childScene = Content.Load(ChildSceneUrl);

parentScene.Children.Add(childScene);
parentScene.Children.Add(childScene);
```
```

Alternatively you can load scenes by name. The following code loads three scenes and adds them as children:
В качестве альтернативы вы можете загружать сцены по имени.  Следующий код загружает три сцены и добавляет их в качестве дочерних:

```cs
```CS
var myChildScene0 = Content.Load<Scene>(url0);
var myChildScene0 = Content.Load<Scene>(url0);
var myChildScene1 = Content.Load<Scene>(url1);
var myChildScene1 = Content.Load<Scene>(url1);
var myChildScene2 = Content.Load<Scene>(url2);
var myChildScene2 = Content.Load<Scene>(url2);

myParentScene.Children.Add(myChildScene0);
myParentScene.Children.Add(myChildScene0);
myParentScene.Children.Add(myChildScene1);
myParentScene.Children.Add(myChildScene1);
myChildScene1.Add(myChildScene2);
myChildScene1.Добавить (myChildScene2);
```
```

>[!Note]
>[!Примечание]
>If you are not using `UrlReference` make sure all the scenes you want to load are included in the build as **root assets** (indicated with blue icons in the **Asset View**).
>Если вы не используете `UrlReference`, убедитесь, что все сцены, которые вы хотите загрузить, включены в сборку как **корневые активы** (обозначены синими значками в **Просмотре активов**).

>![Scenes included in root](media/scenes-included-in-root.png)
>![Сцены включены в корень](media/scene-included-in-root.png)

>To include a scene in the build, in the **Asset View**, right-click the scene asset and select **Include in build as root asset**.
>Чтобы включить сцену в сборку, в **Просмотре активов** щелкните правой кнопкой мыши актив сцены и выберите **Включить в сборку как корневой актив**.

>For more information about including assets in the build, see [Manage assets](manage-assets.md).
>Для получения дополнительной информации о включении ресурсов в сборку см. [Управление ресурсами](manage-assets.md).

For more information about scene hierarchies, see [Manage scenes](manage-scenes.md).
Для получения дополнительной информации об иерархии сцен см. [Управление сценами](manage-scenes.md).

## Unloading scenes
## Выгрузка сцен

Before a scene is unloaded remove it from the scene hierarchy:
Перед выгрузкой сцены удалите ее из иерархии сцен:

```cs
```CS
parentScene.Children.Remove(childScene);
parentScene.Children.Remove(childScene);

//Alternatively
//Альтернативно
childScene.Parent = null;
childScene.Parent = ноль;
```
```

Once the scene asset is no longer required make sure to unload it:
Как только актив сцены больше не требуется, обязательно выгрузите его:

```cs
```CS
Content.Unload(childScene);
Контент.Выгрузить(childScene);
```
```

## Scene streaming script
## Сценарий потоковой передачи сцены

Stride also includes a scene streaming script that uses a [trigger](../physics/triggers.md) to load scenes. 
Stride также включает скрипт потоковой передачи сцен, который использует [триггер](../physics/triggers.md) для загрузки сцен.

>[!Note]
>[!Примечание]
>The scene streaming script is included as an example. It isn't always the most appropriate way to load scenes. Feel free to modify it as much as you need.
>Сценарий потоковой передачи сцены включен в качестве примера.  Это не всегда самый подходящий способ загрузки сцен.  Не стесняйтесь изменять его столько, сколько вам нужно.

### Add a scene streaming script
### Добавить сценарий потоковой передачи сцены

To add a scene streaming script, in the **Asset View** (bottom pane by default), click **Add asset** and select **Scripts > Scene streaming**.
Чтобы добавить сценарий потоковой передачи сцены, в **Просмотре объектов** (нижняя панель по умолчанию) нажмите **Добавить ресурс** и выберите **Сценарии > Потоковая передача сцен**.

![Scene streaming script](media/scene-streaming-script.png)
![Сценарий потоковой передачи сцены](media/scene-streaming-script.png)

Game Studio adds a scene streaming script to your project assets.
Game Studio добавляет сценарий потоковой передачи сцен в активы вашего проекта.

### Use the scene streaming script
### Используйте сценарий потоковой передачи сцены

1. Create a trigger entity. When this is triggered at runtime, Stride loads the scene. For more information about creating triggers, see [Triggers](../physics/triggers.md).
1. Создайте объект-триггер.  Когда это срабатывает во время выполнения, Stride загружает сцену.  Для получения дополнительной информации о создании триггеров см. [Триггеры](../physics/triggers.md).

    How the entity is triggered is defined in the collider properties. For more information, see [Colliders](../physics/colliders.md).
Способ срабатывания объекта определяется в свойствах коллайдера.  Для получения дополнительной информации см. [Коллайдеры](../physics/colliders.md).

2. Create an entity and position it where you want the scene to load.
2. Создайте объект и поместите его туда, где вы хотите загрузить сцену.

3. With the entity selected, in the **Property Grid** (on the righy by default), click **Add component** and select the **scene streaming** script.
3. Выбрав объект, в **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите сценарий **потоковой передачи сцены**.

    ![Add script](media/add-scene-streaming-script.png)
![Добавить сценарий](media/add-scene-streaming-script.png)

    >[!Note]
>[!Примечание]
    >If the scene streaming script doesn't appear in the list of components, reload the assemblies.
>Если скрипт потоковой передачи сцены не отображается в списке компонентов, перезагрузите сборки.

    Game Studio adds the script to the entity as a component.
Game Studio добавляет скрипт в сущность как компонент.

    ![Scene streaming properties](media/scene-streaming-script-properties.png)
![Свойства потоковой передачи сцены](media/scene-streaming-script-properties.png)

4. Under **Url**, specify the scene asset you want to load.
4. В поле **URL** укажите актив сцены, который вы хотите загрузить.

5. Under **Trigger**, specify the entity you created in step 1.
5. В разделе **Триггер** укажите объект, созданный на шаге 1.

At runtime, when the trigger you created in step 1 is triggered, Stride loads the scene you specified in step 4.
Во время выполнения, когда срабатывает триггер, созданный на шаге 1, Stride загружает сцену, указанную на шаге 4.

### Scene streaming script properties
### Свойства сценария потоковой передачи сцены

![Scene streaming properties](media/scene-streaming-script-properties.png)
![Свойства потоковой передачи сцены](media/scene-streaming-script-properties.png)

| Property       | Description                                                                                                                                                                                            |
|  Недвижимость |  Описание |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|----------------|--------------------------------  --------------------------------------------------  --------------------------------------------------  --------------------------------------------------  ------------------|
| Pre Load Depth | The point (in [world units](world-units.md)) at which the scene begins to load. For example, if *2.5*, the scene begins to load when the player is 2.5 units into the trigger area                                          |
|  Глубина предварительной загрузки |  Точка (в [мировых единицах измерения](world-units.md)), с которой начинается загрузка сцены.  Например, если *2,5*, сцена начинает загружаться, когда игрок находится на 2,5 единицы в области триггера |
| Load Depth     | The point (in [world units](world-units.md)) at which the game freezes to finish loading the scene if it hasn't loaded already. For example, if *5*, the game freezes when the player is 5 units into the trigger area |
|  Глубина загрузки |  Точка (в [единицах измерения мира](world-units.md)), в которой игра зависает, чтобы закончить загрузку сцены, если она еще не загружена.  Например, если *5*, игра зависает, когда игрок находится на 5 единиц в зоне срабатывания |
| Priority       | The script priority. For more information, see [Scheduling and priorities](../scripts/scheduling-and-priorities.md)                                                                                                              |
|  Приоритет |  Приоритет сценария.  Для получения дополнительной информации см. [Расписание и приоритеты](../scripts/scheduling-and-priorities.md) |
## See also
## Смотрите также

* [Colliders](../physics/colliders.md)
* [Коллайдеры](../physics/colliders.md)
* [Triggers](../physics/triggers.md)
* [Триггеры](../physics/triggers.md)
* [Create and open a scene](create-a-scene.md)
* [Создать и открыть сцену](create-a-scene.md)
* [Navigate in the Scene Editor](navigate-in-the-scene-editor.md)
* [Навигация в редакторе сцен](navigate-in-the-scene-editor.md)
* [Manage scenes](manage-scenes.md)
* [Управление сценами](manage-scenes.md)
* [Add entities](add-entities.md)
* [Добавить сущности](add-entities.md)
* [Manage entities](manage-entities.md)
* [Управление объектами](manage-entities.md)
