# Layout system

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
<span class="label label-doc-audience">Designer</span>

The Xenko UI layout system is similar to Windows Presentation Foundation (WPF). For more information about the WPF layout system, see the [MSDN documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Much of the WPF documentation also applies to the Xenko layout system.

Every @'SiliconStudio.Xenko.UI.UIElement' in the Xenko UI system has a surrounding rectangle used in layouts. Xenko computes layouts according to the @'SiliconStudio.Xenko.UI.UIElement' requirement, available screen space, constraints, margins, padding, and the special behavior of @'SiliconStudio.Xenko.UI.Panels.Panel' elements (which arrange children in specific ways). 

Processing this data recursively, the layout system computes a position and size for every @'SiliconStudio.Xenko.UI.UIElement' in the UI system.

## Measure and arrange

Xenko performs the layout process recursively in two passes: [Measure](xref:SiliconStudio.Xenko.UI.UIElement.Measure(SiliconStudio.Core.Mathematics.Vector3)) and [Arrange](xref:SiliconStudio.Xenko.UI.UIElement.Arrange(SiliconStudio.Core.Mathematics.Vector3,System.Boolean)).

### Measure

In the [Measure](xref:SiliconStudio.Xenko.UI.UIElement.Measure(SiliconStudio.Core.Mathematics.Vector3)) pass, each element recursively computes its [DesiredSize](xref:SiliconStudio.Xenko.UI.UIElement#SiliconStudio_Xenko_UI_UIElement_DesiredSize) according to the properties you set, such as @'SiliconStudio.Xenko.UI.UIElement.Width', @'SiliconStudio.Xenko.UI.UIElement.Height', and @'SiliconStudio.Xenko.UI.UIElement.Margin'.

Some @'SiliconStudio.Xenko.UI.Panels.Panel' elements call [Measure](xref:SiliconStudio.Xenko.UI.UIElement.Measure(SiliconStudio.Core.Mathematics.Vector3)) recursively to determine the  [DesiredSize](xref:SiliconStudio.Xenko.UI.UIElement#SiliconStudio_Xenko_UI_UIElement_DesiredSize) of their children, and act accordingly.

### Arrange

The [Arrange](xref:SiliconStudio.Xenko.UI.UIElement.Arrange(SiliconStudio.Core.Mathematics.Vector3,System.Boolean)) pass arranges the elements, taking into account:

* @'SiliconStudio.Xenko.UI.UIElement.Margin'
* @'SiliconStudio.Xenko.UI.UIElement.Width'
* @'SiliconStudio.Xenko.UI.UIElement.Height'
* @'SiliconStudio.Xenko.UI.UIElement.HorizontalAlignment'
* @'SiliconStudio.Xenko.UI.UIElement.VerticalAlignment' 
* @'SiliconStudio.Xenko.UI.Panels.Panel'
* specific [Arrange](xref:SiliconStudio.Xenko.UI.UIElement.Arrange(SiliconStudio.Core.Mathematics.Vector3,System.Boolean)) rules

## See also

 * [MSDN WPF layout documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
 * [UI pages](ui-pages.md)
 * [UI libraries](ui-libraries.md)
 * [UI editor](ui-editor.md)
 * [Add a UI to a scene](add-a-ui-to-a-scene.md)