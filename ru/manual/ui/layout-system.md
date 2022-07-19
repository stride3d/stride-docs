# Layout system

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

The Stride UI layout system is similar to Windows Presentation Foundation (WPF). For more information about the WPF layout system, see the [MSDN documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Much of the WPF documentation also applies to the Stride layout system.

Every @'Stride.UI.UIElement' in the Stride UI system has a surrounding rectangle used in layouts. Stride computes layouts according to the @'Stride.UI.UIElement' requirement, available screen space, constraints, margins, padding, and the special behavior of @'Stride.UI.Panels.Panel' elements (which arrange children in specific ways). 

Processing this data recursively, the layout system computes a position and size for every @'Stride.UI.UIElement' in the UI system.

## Measure and arrange

Stride performs the layout process recursively in two passes: [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) and [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)).

### Measure

In the [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) pass, each element recursively computes its [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) according to the properties you set, such as @'Stride.UI.UIElement.Width', @'Stride.UI.UIElement.Height', and @'Stride.UI.UIElement.Margin'.

Some @'Stride.UI.Panels.Panel' elements call [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) recursively to determine the  [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) of their children, and act accordingly.

### Arrange

The [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) pass arranges the elements, taking into account:

* @'Stride.UI.UIElement.Margin'
* @'Stride.UI.UIElement.Width'
* @'Stride.UI.UIElement.Height'
* @'Stride.UI.UIElement.HorizontalAlignment'
* @'Stride.UI.UIElement.VerticalAlignment' 
* @'Stride.UI.Panels.Panel'
* specific [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) rules

## See also

 * [MSDN WPF layout documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
 * [UI pages](ui-pages.md)
 * [UI libraries](ui-libraries.md)
 * [UI editor](ui-editor.md)
 * [Add a UI to a scene](add-a-ui-to-a-scene.md)