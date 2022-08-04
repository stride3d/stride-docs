# Add a UI to a scene
# Добавляем пользовательский интерфейс к сцене

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

After you create a [UI page](ui-pages.md), add it to the scene as a component on an entity.
После создания [страницы пользовательского интерфейса](ui-pages.md) добавьте ее на сцену в качестве компонента объекта.

1. In the **Scene Editor**, create an empty entity. To do this, right-click the scene and select **Empty entity**.
1. В **Редакторе сцен** создайте пустой объект.  Для этого щелкните сцену правой кнопкой мыши и выберите **Пустой объект**.

    ![Create empty entity](media/create-empty-entity.png)
![Создать пустой объект](media/create-empty-entity.png)

2. In the Property Grid (on the right by default), click **Add component** and select **UI**.
2. В таблице свойств (по умолчанию справа) нажмите **Добавить компонент** и выберите **UI**.

    ![Add UI component](media/add-UI-component.png)
![Добавить компонент пользовательского интерфейса](media/add-UI-component.png)

    Game Studio adds a **UI component** to the entity.
Game Studio добавляет к объекту **компонент пользовательского интерфейса**.

    ![UI component](media/UI-component.png)
![компонент пользовательского интерфейса](media/UI-component.png)

3. Next to **Page**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
3. Рядом с **Страница** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select UI page](media/select-UI-page.png)
![Выберите страницу пользовательского интерфейса](media/select-UI-page.png)

4. Select the UI page you want to add and click **OK**.
4. Выберите страницу пользовательского интерфейса, которую хотите добавить, и нажмите **ОК**.

    For information about how to create and edit UI pages, see the [UI editor](ui-editor.md) page.
Для получения информации о том, как создавать и редактировать страницы пользовательского интерфейса, см. страницу [редактор пользовательского интерфейса](ui-editor.md).

> [!Tip]
> [!Подсказка]
> To stop the UI obscuring the rest of the scene in the editor, disable the **UI component** in the Property Grid.
> Чтобы пользовательский интерфейс не закрывал остальную часть сцены в редакторе, отключите **компонент пользовательского интерфейса** в сетке свойств.

> ![Disable UI component](media/disable-UI-component.png)
> ![Отключить компонент пользовательского интерфейса](media/disable-UI-component.png)

> Remember to enable the component again before you run the game. If you don't, Stride doesn't display the UI.
> Не забудьте снова включить компонент перед запуском игры.  Если вы этого не сделаете, Stride не отобразит пользовательский интерфейс.

### Assign a UI page to a UI page component in code
### Назначение страницы пользовательского интерфейса компоненту страницы пользовательского интерфейса в коде

You can assign a UI page to the `Page` property of a UI component.
Вы можете назначить страницу пользовательского интерфейса свойству Page компонента пользовательского интерфейса.

```cs
```CS
// This property can be assigned from a UI page asset in Game Studio
// Это свойство можно назначить из ресурса страницы пользовательского интерфейса в Game Studio
public UIPage MyPage { get; set; }
общественность UIPage MyPage { получить;  установлен;  }

protected override void LoadScene()
защищенное переопределение void LoadScene()
{
{
    InitializeUI();
ИнициализироватьUI();
}
}

public void InitializeUI()
public void InitializeUI()
{
{
    var rootElement = MyPage.RootElement;
var rootElement = MyPage.RootElement;
    // to look for a specific element in the UI page, extension methods can be used
// для поиска определенного элемента на странице пользовательского интерфейса можно использовать методы расширения
    var button = rootElement.FindVisualChildOfType<Button>("buttonOk");
var button = rootElement.FindVisualChildOfType<Button>(

    // if there's no element named "buttonOk" in the UI tree or the type doesn't match,
// если в дереве пользовательского интерфейса нет элемента с именем 
    // the previous method returns null
// предыдущий метод возвращает null
    if (button != null)
если (кнопка != ноль)
    {
{
        // attach a delegate to the Click event
// присоединяем делегата к событию Click
        button.Click += delegate
button.Click += делегировать
        {
{
            // do something here...
// делаем что-нибудь здесь...
        };
};
    }
}

    // assign the page to the UI component
// назначаем страницу компоненту пользовательского интерфейса
    var uiComponent = Entity.Get<UIComponent>();
var uiComponent = Entity.Get<UIComponent>();
    uiComponent.Page = MyPage;
uiComponent.Страница = Моя Страница;
}
}
```
```

## UI component properties
## Свойства компонента пользовательского интерфейса

| Property           | Description
|  Недвижимость |  Описание
|--------------------|----------------
|----------------------------------|----------------
| Page               | The UI page displayed by the component
|  Страница |  Страница пользовательского интерфейса, отображаемая компонентом
| Sampler		| Texture sampling method: Point (Nearest), Linear (**Default option** ), or Anisotropic
|  Сэмплер |  Метод выборки текстуры: точечный (ближайший), линейный (**параметр по умолчанию**) или анизотропный.
| Full screen        | **Note:** We recommend you use this as other stuff is broken
|  Полный экран |  **Примечание.** Мы рекомендуем вам использовать это, так как другие вещи не работают.
| Resolution         | The UI resolution in pixels
|  Разрешение |  Разрешение пользовательского интерфейса в пикселях
| Size               | Gets or sets the actual size of the UI component in world units
|  Размер |  Получает или задает фактический размер компонента пользовательского интерфейса в мировых единицах измерения.
| Resolution stretch | How the virtual resolution value should be used (`FixedWithFixedHeight`, `FixedWithAdaptableHeight`, or `FixedHeightAdaptableWidth`)
|  Разрешение стрейч |  Как следует использовать значение виртуального разрешения (`FixedWithFixedHeight`, `FixedWithAdaptableHeight` или `FixedHeightAdaptableWidth`)
| Billboard          | If selected, the UI always faces the camera. **Note:** Disabling billboard mode causes UI text errors in the current version of Stride
|  Рекламный щит |  Если выбрано, пользовательский интерфейс всегда обращен к камере.  **Примечание.** Отключение режима рекламного щита вызывает текстовые ошибки пользовательского интерфейса в текущей версии Stride.
| Snap text          | If selected, the UI text is snapped to the closest pixel
|  Привязать текст |  Если выбрано, текст пользовательского интерфейса привязывается к ближайшему пикселю.
| Fixed size         | Gets or sets the value indicating whether the UI should always be a fixed size on screen (eg a component with a height of 1 will use 0.1 of the screen). **Note:** This feature doesn't work in the current version of Stride
|  Фиксированный размер |  Получает или задает значение, указывающее, должен ли пользовательский интерфейс всегда иметь фиксированный размер на экране (например, компонент с высотой 1 будет использовать 0,1 экрана).  **Примечание.** Эта функция не работает в текущей версии Stride.
| Render group       | The [render group](../graphics/graphics-compositor/render-groups-and-masks.md) the UI uses
|  Группа визуализации |  [группа рендеринга](../graphics/graphics-compositor/render-groups-and-masks.md), которую использует пользовательский интерфейс

## UI scripts
## Скрипты пользовательского интерфейса

To make UIs interactive, you need to add a script. Without scripts, UIs are simply non-interactive images. 
Чтобы сделать пользовательский интерфейс интерактивным, вам нужно добавить скрипт.  Без сценариев пользовательский интерфейс — это просто неинтерактивные изображения.

For an example of a UI implemented in Stride, see the **game menu UI** sample included with Stride.
Пример пользовательского интерфейса, реализованного в Stride, см. в образце **UI игрового меню**, включенном в Stride.

![Sample UI project](media/ui-sample-project.png)
![Пример проекта пользовательского интерфейса](media/ui-sample-project.png)

## See also 
## Смотрите также

* [UI pages](ui-pages.md)
* [Страницы интерфейса](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [Библиотеки пользовательского интерфейса](ui-libraries.md)
* [UI editor](ui-editor.md)
* [редактор пользовательского интерфейса](ui-editor.md)
* [Layout system](layout-system.md)
* [Система макетов](layout-system.md)
* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)
* [VR — Отображение пользовательского интерфейса в оверлее](../virtual-reality/display-a-ui-in-an-overlay.md)
