# Layout system

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

The Xenko UI layout system is similar to Windows Presentation Foundation (WPF). For more information about the WPF layout system, see the [MSDN documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Much of the WPF documentation also applies to the Xenko layout system.

Every @'Xenko.UI.UIElement' in the Xenko UI system has a surrounding rectangle used in layouts. Xenko computes layouts according to the @'Xenko.UI.UIElement' requirement, available screen space, constraints, margins, padding, and the special behavior of @'Xenko.UI.Panels.Panel' elements (which arrange children in specific ways). 

Processing this data recursively, the layout system computes a position and size for every @'Xenko.UI.UIElement' in the UI system.

## Measure and arrange

Xenko performs the layout process recursively in two passes: [Measure](xref:Xenko.UI.UIElement.Measure(Xenko.Core.Mathematics.Vector3)) and [Arrange](xref:Xenko.UI.UIElement.Arrange(Xenko.Core.Mathematics.Vector3,System.Boolean)).

### Measure

In the [Measure](xref:Xenko.UI.UIElement.Measure(Xenko.Core.Mathematics.Vector3)) pass, each element recursively computes its [DesiredSize](xref:Xenko.UI.UIElement#Xenko_UI_UIElement_DesiredSize) according to the properties you set, such as @'Xenko.UI.UIElement.Width', @'Xenko.UI.UIElement.Height', and @'Xenko.UI.UIElement.Margin'.

Some @'Xenko.UI.Panels.Panel' elements call [Measure](xref:Xenko.UI.UIElement.Measure(Xenko.Core.Mathematics.Vector3)) recursively to determine the  [DesiredSize](xref:Xenko.UI.UIElement#Xenko_UI_UIElement_DesiredSize) of their children, and act accordingly.

### Arrange

The [Arrange](xref:Xenko.UI.UIElement.Arrange(Xenko.Core.Mathematics.Vector3,System.Boolean)) pass arranges the elements, taking into account:

* @'Xenko.UI.UIElement.Margin'
* @'Xenko.UI.UIElement.Width'
* @'Xenko.UI.UIElement.Height'
* @'Xenko.UI.UIElement.HorizontalAlignment'
* @'Xenko.UI.UIElement.VerticalAlignment' 
* @'Xenko.UI.Panels.Panel'
* specific [Arrange](xref:Xenko.UI.UIElement.Arrange(Xenko.Core.Mathematics.Vector3,System.Boolean)) rules

## See also

 * [MSDN WPF layout documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
 * [UI pages](ui-pages.md)
 * [UI libraries](ui-libraries.md)
 * [UI editor](ui-editor.md)
 * [Add a UI to a scene](add-a-ui-to-a-scene.md)