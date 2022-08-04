# Layout system
# Система раскладки

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

The Stride UI layout system is similar to Windows Presentation Foundation (WPF). For more information about the WPF layout system, see the [MSDN documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Much of the WPF documentation also applies to the Stride layout system.
Система компоновки пользовательского интерфейса Stride похожа на Windows Presentation Foundation (WPF).  Дополнительные сведения о системе компоновки WPF см. в [документации MSDN] (https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout).  Большая часть документации WPF также применима к системе компоновки Stride.

Every @'Stride.UI.UIElement' in the Stride UI system has a surrounding rectangle used in layouts. Stride computes layouts according to the @'Stride.UI.UIElement' requirement, available screen space, constraints, margins, padding, and the special behavior of @'Stride.UI.Panels.Panel' elements (which arrange children in specific ways). 
Каждый @'Stride.UI.UIElement' в системе пользовательского интерфейса Stride имеет окружающий прямоугольник, используемый в макетах.  Stride вычисляет макеты в соответствии с требованием @'Stride.UI.UIElement', доступным пространством на экране, ограничениями, полями, отступами и особым поведением элементов @'Stride.UI.Panels.Panel' (которые упорядочивают дочерние элементы определенным образом).  .

Processing this data recursively, the layout system computes a position and size for every @'Stride.UI.UIElement' in the UI system.
Рекурсивно обрабатывая эти данные, система компоновки вычисляет позицию и размер для каждого элемента @'Stride.UI.UIElement' в системе пользовательского интерфейса.

## Measure and arrange
## Измерить и упорядочить

Stride performs the layout process recursively in two passes: [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) and [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)).
Stride рекурсивно выполняет процесс компоновки в два прохода: [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) и [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.  Core.Mathematics.Vector3,System.Boolean)).

### Measure
### Мера

In the [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) pass, each element recursively computes its [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) according to the properties you set, such as @'Stride.UI.UIElement.Width', @'Stride.UI.UIElement.Height', and @'Stride.UI.UIElement.Margin'.
В проходе [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) каждый элемент рекурсивно вычисляет свой [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) в соответствии со свойствами  вы устанавливаете, например @'Stride.UI.UIElement.Width', @'Stride.UI.UIElement.Height' и @'Stride.UI.UIElement.Margin'.

Some @'Stride.UI.Panels.Panel' elements call [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) recursively to determine the  [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) of their children, and act accordingly.
Некоторые элементы @'Stride.UI.Panels.Panel' рекурсивно вызывают [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) для определения [DesiredSize](xref:Stride.UI.  UIElement#Stride_UI_UIElement_DesiredSize) своих дочерних элементов и действовать соответствующим образом.

### Arrange
### Договариваться

The [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) pass arranges the elements, taking into account:
Проход [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) упорядочивает элементы с учетом:

* @'Stride.UI.UIElement.Margin'
* @'Stride.UI.UIElement.Margin'
* @'Stride.UI.UIElement.Width'
* @'Stride.UI.UIElement.Width'
* @'Stride.UI.UIElement.Height'
* @'Stride.UI.UIElement.Height'
* @'Stride.UI.UIElement.HorizontalAlignment'
* @'Stride.UI.UIElement.HorizontalAlignment'
* @'Stride.UI.UIElement.VerticalAlignment' 
* @'Stride.UI.UIElement.VerticalAlignment'
* @'Stride.UI.Panels.Panel'
* @'Stride.UI.Panels.Panel'
* specific [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) rules
* специальные правила [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean))

## See also
## Смотрите также

 * [MSDN WPF layout documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
* [Документация по макету MSDN WPF] (https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
 * [UI pages](ui-pages.md)
* [Страницы интерфейса](ui-pages.md)
 * [UI libraries](ui-libraries.md)
* [Библиотеки пользовательского интерфейса](ui-libraries.md)
 * [UI editor](ui-editor.md)
* [редактор пользовательского интерфейса](ui-editor.md)
 * [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Добавить интерфейс к сцене](add-a-ui-to-a-scene.md)
