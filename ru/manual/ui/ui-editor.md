# UI editor
# Редактор пользовательского интерфейса

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

You can edit [UI pages](ui-pages.md) and [UI libraries](ui-libraries.md) with the **UI editor**.
Вы можете редактировать [страницы пользовательского интерфейса](ui-pages.md) и [библиотеки пользовательского интерфейса](ui-libraries.md) с помощью **редактора пользовательского интерфейса**.

To open the editor, in the **Asset View**, double-click a **UI page** or **[UI library](ui-libraries.md)**.
Чтобы открыть редактор, в **Asset View** дважды щелкните **страницу пользовательского интерфейса** или **[библиотеку пользовательского интерфейса](ui-libraries.md)**.

![Open UI editor](media/open-UI-editor.png)
![Открыть редактор пользовательского интерфейса](media/open-UI-editor.png)

The UI editor opens.
Откроется редактор пользовательского интерфейса.

![UI editor overview](media/ui-editor-overview.png)
![Обзор редактора пользовательского интерфейса](media/ui-editor-overview.png)

The UI editor comprises:
Редактор пользовательского интерфейса включает в себя:

* the list of [UI libraries](ui-libraries.md) (**A**), which contain the elements (such as buttons and grids) you can add to your UI
* список [библиотек пользовательского интерфейса](ui-libraries.md) (**A**), которые содержат элементы (такие как кнопки и сетки), которые вы можете добавить в свой пользовательский интерфейс

* a visual tree of the elements in the UI page (**B**)
* визуальное дерево элементов на странице пользовательского интерфейса (**B**)

* a preview of the UI page as it appears in the game (**C**)
* предварительный просмотр страницы пользовательского интерфейса, как она выглядит в игре (**C**)

* a Property Grid (**D**) to edit the properties of your UI elements
* Сетка свойств (**D**) для редактирования свойств ваших элементов пользовательского интерфейса

## UI libraries
## библиотеки пользовательского интерфейса

A **UI library** contains **UI elements** (such as grids, buttons, sliders and so on) that you can use and re-use in your UI pages. They work similarly to [prefabs](../game-studio/prefabs/index.md) in the Scene Editor.
**Библиотека пользовательского интерфейса** содержит **элементы пользовательского интерфейса** (такие как сетки, кнопки, ползунки и т. д.), которые вы можете использовать и повторно использовать на своих страницах пользовательского интерфейса.  Они работают аналогично [префабам](../game-studio/prefabs/index.md) в редакторе сцен.

![UI library](media/UI-library.png)
![Библиотека пользовательского интерфейса](media/UI-library.png)

For more information, see [UI libraries](ui-libraries.md).
Для получения дополнительной информации см. [Библиотеки пользовательского интерфейса](ui-libraries.md).

## Visual tree
## Визуальное дерево

The **visual tree** shows the elements in the UI page and their hierarchy. This is similar to the **Entity Tree** in the Scene Editor.
**Визуальное дерево** показывает элементы на странице пользовательского интерфейса и их иерархию.  Это похоже на **Дерево объектов** в редакторе сцен.

![UI asset properties](media/ui-editor-visual-tree.png)
![Свойства ресурса пользовательского интерфейса](media/ui-editor-visual-tree.png)

The number in parentheses indicates the number of children an element has. Some elements, such as buttons, can only have one child.
Число в скобках указывает количество дочерних элементов, которые имеет элемент.  У некоторых элементов, таких как кнопки, может быть только один дочерний элемент.

To re-order elements in the visual tree, drag and drop them.
Чтобы изменить порядок элементов в визуальном дереве, перетащите их.

To move an element to a new group, right-click the element and select **Group into**. For example, to create a new grid and move an element into it, right-click the element and select **Group into > Grid**.
Чтобы переместить элемент в новую группу, щелкните его правой кнопкой мыши и выберите **Сгруппировать в**.  Например, чтобы создать новую сетку и переместить в нее элемент, щелкните элемент правой кнопкой мыши и выберите **Сгруппировать в > Сетку**.

![Group into grid](media/group-into-grid.png)
![Группировать в сетку](media/group-into-grid.png)

## UI preview
## Предварительный просмотр пользовательского интерфейса

The **UI preview** displays a preview of the UI as it appears at runtime. The rendering is equivalent to the rendering in the game, assuming the design resolution is the same as the UI component that uses the edited asset.
**Предварительный просмотр пользовательского интерфейса** отображает предварительный просмотр пользовательского интерфейса в том виде, в котором он отображается во время выполнения.  Рендеринг эквивалентен рендерингу в игре, при условии, что разрешение дизайна такое же, как у компонента пользовательского интерфейса, использующего редактируемый ресурс.

By default, the UI is a **billboard**, meaning it always faces the camera. The UI view camera is **orthographic** (see [Cameras](../graphics/cameras/index.md)). 
По умолчанию пользовательский интерфейс представляет собой **рекламный щит**, то есть он всегда обращен к камере.  Камера просмотра пользовательского интерфейса является **орфографической** (см. [Камеры](../graphics/cameras/index.md)).

You can select, move, and resize elements in the preview as you do in image editing applications.
Вы можете выбирать, перемещать и изменять размер элементов в предварительном просмотре так же, как и в приложениях для редактирования изображений.

![Select an element](media/ui-editor-selecting.gif)
![Выберите элемент](media/ui-editor-selecting.gif)

![Move an element](media/ui-editor-moving.gif)
![Переместить элемент](media/ui-editor-moving.gif)

![Resize an element](media/ui-editor-resizing.gif)
![Изменить размер элемента](media/ui-editor-resizing.gif)

### Controls
### Элементы управления

| Action            | Control                              
|  Действие |  Контроль
|-------------------|--------------------------------------
|------------------|-----------------------------  ---------
| Pan               | Hold middle mouse button + move mouse
|  Пан |  Удерживать среднюю кнопку мыши + двигать мышью
| Zoom              | Mouse wheel                    
|  Увеличить |  Колесико мыши
| Speed up pan/zoom | Hold shift while panning or zooming
|  Ускорить панорамирование/масштабирование |  Удерживайте Shift при панорамировании или масштабировании

### Tool options
### Параметры инструмента

To change the color and size of the selection tools, in the **UI editor toolbar**, click ![Eye icon](media/eye-icon.png)
Чтобы изменить цвет и размер инструментов выделения, на **панели инструментов редактора пользовательского интерфейса** нажмите ![Значок глаза](media/eye-icon.png)

> [!Note]
> [!Примечание]
> These options have no effect on how the UI is displayed at runtime.
> Эти параметры не влияют на то, как пользовательский интерфейс отображается во время выполнения.

![UI editor view options](media/ui-editor-view-options.png)
![Параметры просмотра редактора пользовательского интерфейса](media/ui-editor-view-options.png)

* **Guideline**: changes the width of the lines that indicate the distance to the margins (in pixels)
* **Guideline**: изменяет ширину линий, указывающих расстояние до полей (в пикселях).

* **Highlight**: changes the width of the highlight that appears when you move your mouse over an element
* **Выделение**: изменяет ширину выделения, которое появляется, когда вы наводите указатель мыши на элемент.

* **Selection**: changes the width of the selection highlight
* **Выделение**: изменяет ширину выделения выделения.

* **Sizing**: changes the size of the boxes at the edges of selections used to resize elements
* **Размер**: изменяет размер полей по краям выделения, используемых для изменения размера элементов.

## Add a UI element to a UI page
## Добавить элемент пользовательского интерфейса на страницу пользовательского интерфейса

To add an element (such as a grid or button), drag it from the **UI library** to the UI page or the **visual tree**.
Чтобы добавить элемент (например, сетку или кнопку), перетащите его из **библиотеки пользовательского интерфейса** на страницу пользовательского интерфейса или в **визуальное дерево**.

![Add UI element](media/add-ui-element.gif)
![Добавить элемент пользовательского интерфейса](media/add-ui-element.gif)

## Properties
## Характеристики

You can view and edit element properties in the **Property Grid**.
Вы можете просматривать и редактировать свойства элемента в **Сетке свойств**.

![Property Grid!](media/element-property-grid.png)
![Сетка свойств!](media/element-property-grid.png)

Properties are sorted by **Appearance**, **Behavior**, **Layout** and **Misc**.
Свойства сортируются по параметрам **Внешний вид**, **Поведение**, **Макет** и **Разное**.

### Appearance
### Вид

Commonly used properties include `BackgroundColor`, `Opacity`, `Visibility` and `ClipToBounds`.
Обычно используемые свойства включают «BackgroundColor», «Opacity», «Visibility» и «ClipToBounds».

![Appearance properties](media/appearance-properties.png)
![Свойства внешнего вида](media/appearance-properties.png)

### Behavior
### Поведение

Commonly used properties include whether the element responds to touch events(`CanBeHitByUser`).
Обычно используемые свойства включают, отвечает ли элемент на события касания (`CanBeHitByUser`).

![Behavior properties](media/behavior-properties.png)
![Свойства поведения](media/behavior-properties.png)

### Layout
### Макет

Commonly used properties include the size of the element (`Height`, `Width` and `Depth`), its alignment (`HorizontalAlignment`, `VerticalAlignment`, `DepthAlignement`) and its `Margin`.
Обычно используемые свойства включают размер элемента («Height», «Width» и «Depth»), его выравнивание («HorizontalAlignment», «VerticalAlignment», «DepthAlignment») и его «Margin».

![Layout properties](media/layout-properties.png)
![Свойства макета](media/layout-properties.png)

### Misc
### Разное

This category contains only the `Name` of the element.
Эта категория содержит только `Имя` элемента.

![Misc properties](media/misc-properties.png)
![Разные свойства](media/misc-properties.png)

## See also
## Смотрите также

* [UI pages](ui-pages.md)
* [Страницы интерфейса](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [Библиотеки пользовательского интерфейса](ui-libraries.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Добавить интерфейс к сцене](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
* [Система макетов](layout-system.md)
