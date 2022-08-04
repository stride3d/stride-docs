# UI
# пользовательский интерфейс

Stride features a UI editor and layout system you can use to build sophisticated user interfaces. It supports 2D and 3D independently of resolution.
В Stride есть редактор пользовательского интерфейса и система компоновки, которые можно использовать для создания сложных пользовательских интерфейсов.  Он поддерживает 2D и 3D независимо от разрешения.

![UI editor](media/ui-editor.png)
![Редактор пользовательского интерфейса](media/ui-editor.png)

Stride uses two types of UI asset: `UIPageAsset` and `UILibraryAsset`. Their runtime counterparts are `UIPage` and `UILibrary` respectively.
Stride использует два типа ресурсов пользовательского интерфейса: UIPageAsset и UILibraryAsset.  Их аналогами во время выполнения являются `UIPage` и `UILibrary` соответственно.

To reduce the number of draw calls, Stride draws multiple elements using a sprite batch renderer.
Чтобы уменьшить количество вызовов отрисовки, Stride отрисовывает несколько элементов с помощью средства пакетного рендеринга спрайтов.

## Controls
## Элементы управления

Stride features many UI control components, including:
Stride имеет множество компонентов управления пользовательским интерфейсом, в том числе:

* @'Stride.UI.Controls.ImageElement'
* @'Stride.UI.Controls.ImageElement'
* @'Stride.UI.Controls.ContentControl'
* @'Stride.UI.Controls.ContentControl'
  * @'Stride.UI.Controls.ScrollViewer'
* @'Stride.UI.Controls.ScrollViewer'
  * @'Stride.UI.Controls.Button'
* @'Stride.UI.Controls.Button'
    * @'Stride.UI.Controls.ToggleButton'
* @'Stride.UI.Controls.ToggleButton'
  * @'Stride.UI.Controls.ContentDecorator'
* @'Stride.UI.Controls.ContentDecorator'
* @'Stride.UI.Controls.TextBlock'
* @'Stride.UI.Controls.TextBlock'
  * @'Stride.UI.Controls.ScrollingText'
* @'Stride.UI.Controls.ScrollingText'
* @'Stride.UI.Controls.EditText' (displays soft keyboard on mobile devices)
* @'Stride.UI.Controls.EditText' (отображает программную клавиатуру на мобильных устройствах)
* @'Stride.UI.Panels.Panel'
* @'Stride.UI.Panels.Panel'
  * @'Stride.UI.Panels.StackPanel' (supports virtualization)
* @'Stride.UI.Panels.StackPanel' (поддерживает виртуализацию)
  * @'Stride.UI.Panels.Grid'
* @'Stride.UI.Panels.Grid'
  * @'Stride.UI.Panels.UniformGrid'
* @'Stride.UI.Panels.UniformGrid'
  * @'Stride.UI.Panels.Canvas'
* @'Stride.UI.Panels.Canvas'
* @'Stride.UI.Controls.ScrollBar'
* @'Stride.UI.Controls.ScrollBar'
* @'Stride.UI.Controls.ModalElement'
* @'Stride.UI.Controls.ModalElement'

You can also create your own.
Вы также можете создать свой собственный.

## Sample project
## Пример проекта

Without scripts, UIs are simply non-interactive images. To make them interactive, add a script.
Без сценариев пользовательский интерфейс — это просто неинтерактивные изображения.  Чтобы сделать их интерактивными, добавьте скрипт.

For an example of a UI implemented in Stride, see the **game menu UI** sample included with Stride.
Пример пользовательского интерфейса, реализованного в Stride, см. в образце **UI игрового меню**, включенном в Stride.

![Sample UI project](media/ui-sample-project.png)
![Пример проекта пользовательского интерфейса](media/ui-sample-project.png)

## In this section
## В этой секции

* [UI pages](ui-pages.md)
* [Страницы интерфейса](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [Библиотеки пользовательского интерфейса](ui-libraries.md)
* [UI editor](ui-editor.md)
* [редактор пользовательского интерфейса](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Добавить интерфейс к сцене](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
* [Система макетов](layout-system.md)

## See also
## Смотрите также

* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)
* [VR — Отображение пользовательского интерфейса в оверлее](../virtual-reality/display-a-ui-in-an-overlay.md)
