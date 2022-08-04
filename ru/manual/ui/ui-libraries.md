# UI libraries
# библиотеки пользовательского интерфейса

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**UI libraries** contain **UI elements** such as grids, buttons, sliders and so on that you can use and re-use in your [UI pages](UI-pages.md). 
**Библиотеки пользовательского интерфейса** содержат **элементы пользовательского интерфейса**, такие как сетки, кнопки, ползунки и т. д., которые вы можете использовать и повторно использовать на своих [страницах пользовательского интерфейса] (UI-pages.md).

Stride projects include a **standard library** of UI elements. You can create your own libraries of custom elements too.
Проекты Stride включают **стандартную библиотеку** элементов пользовательского интерфейса.  Вы также можете создавать свои собственные библиотеки пользовательских элементов.

![UI library](media/UI-library.png)
![Библиотека пользовательского интерфейса](media/UI-library.png)

UI libraries are similar to [prefabs](../game-studio/prefabs/index.md) in the Scene Editor; you can create your own elements, save them in a custom UI library, and then use them wherever you need across multiple UI pages. You can also nest libraries inside other libraries, just like [nested prefabs](../game-studio/prefabs/nested-prefabs.md).
Библиотеки пользовательского интерфейса аналогичны [prefabs](../game-studio/prefabs/index.md) в редакторе сцен;  вы можете создавать свои собственные элементы, сохранять их в пользовательской библиотеке пользовательского интерфейса, а затем использовать их в любом месте на нескольких страницах пользовательского интерфейса.  Вы также можете вкладывать библиотеки в другие библиотеки, как [вложенные префабы](../game-studio/prefabs/nested-prefabs.md).

At runtime, you can re-instantiate UI library roots and insert them into an existing UI tree.
Во время выполнения вы можете воссоздать корни библиотеки пользовательского интерфейса и вставить их в существующее дерево пользовательского интерфейса.

## Create a UI library
## Создать библиотеку пользовательского интерфейса

In the **Asset View**, click **Add asset > UI > UI library**.
В **Просмотре активов** нажмите **Добавить ресурс > Пользовательский интерфейс > Библиотека пользовательского интерфейса**.

![Add UI library](media/add-ui-library.png)
![Добавить библиотеку пользовательского интерфейса](media/add-ui-library.png)

Game Studio adds the UI library to the **Asset View**.
Game Studio добавляет библиотеку пользовательского интерфейса в **Asset View**.

![Added UI library](media/added-ui-library.png)
![Добавлена ​​библиотека пользовательского интерфейса](media/added-ui-library.png)

Alternatively, to create a UI library from an existing UI element:
В качестве альтернативы, чтобы создать библиотеку пользовательского интерфейса из существующего элемента пользовательского интерфейса:

1. Select the elements you want to create a UI library from.
1. Выберите элементы, из которых вы хотите создать библиотеку пользовательского интерфейса.

2. Right-click and select **Create library from selection**.
2. Щелкните правой кнопкой мыши и выберите **Создать библиотеку из выбранного**.

![Added UI library](media/create-library-from-selection.png)
![Добавлена ​​библиотека пользовательского интерфейса](media/create-library-from-selection.png)

Game Studio creates a library with a copy of the elements you selected.
Game Studio создает библиотеку с копией выбранных вами элементов.

## Assign a UI library in code
## Назначение библиотеки пользовательского интерфейса в коде

```cs
```CS
// This property can be assigned from a UI library asset in Game Studio
// Это свойство можно назначить из актива библиотеки пользовательского интерфейса в Game Studio
public UILibrary MyLibrary { get; set; }
общественный UILibrary MyLibrary { получить;  установлен;  }

public Button CreateButton()
публичная кнопка CreateButton()
{
{
    // assuming there is a root element named "MyButton" of type (or derived from) Button
// предполагается, что есть корневой элемент с именем 
    var button = MyLibrary.InstantiateElement<Button>("MyButton");
кнопка var = MyLibrary.InstantiateElement<Button>(

    // if there is no root named "MyButton" in the library or the type does not match,
// если в библиотеке нет корня с именем 
    // the previous method will return null
// предыдущий метод вернет null
    if (button != null)
если (кнопка != ноль)
    {        
{
        // attach a delegate to the Click event
// присоединяем делегата к событию Click
        someButton.Click += delegate
someButton.Click += делегат
        {
{
            // do something here...
// делаем что-нибудь здесь...
        };
};
    }
}

    return button;
кнопка возврата;
}
}
```
```

UI pages have only one root element. UI libraries can have multiple root elements.
Страницы пользовательского интерфейса имеют только один корневой элемент.  Библиотеки пользовательского интерфейса могут иметь несколько корневых элементов.

## See also
## Смотрите также

* [UI pages](ui-pages.md)
* [Страницы интерфейса](ui-pages.md)
* [UI editor](ui-editor.md)
* [редактор пользовательского интерфейса](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Добавить интерфейс к сцене](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
* [Система макетов](layout-system.md)
