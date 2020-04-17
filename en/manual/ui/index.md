# UI

Stride features a UI editor and layout system you can use to build sophisticated user interfaces. It supports 2D and 3D independently of resolution.

![UI editor](media/ui-editor.png)

Stride uses two types of UI asset: `UIPageAsset` and `UILibraryAsset`. Their runtime counterparts are `UIPage` and `UILibrary` respectively.

To reduce the number of draw calls, Stride draws multiple elements using a sprite batch renderer.

## Controls

Stride features many UI control components, including:

* @'Stride.UI.Controls.ImageElement'
* @'Stride.UI.Controls.ContentControl'
  * @'Stride.UI.Controls.ScrollViewer'
  * @'Stride.UI.Controls.Button'
    * @'Stride.UI.Controls.ToggleButton'
  * @'Stride.UI.Controls.ContentDecorator'
* @'Stride.UI.Controls.TextBlock'
  * @'Stride.UI.Controls.ScrollingText'
* @'Stride.UI.Controls.EditText' (displays soft keyboard on mobile devices)
* @'Stride.UI.Panels.Panel'
  * @'Stride.UI.Panels.StackPanel' (supports virtualization)
  * @'Stride.UI.Panels.Grid'
  * @'Stride.UI.Panels.UniformGrid'
  * @'Stride.UI.Panels.Canvas'
* @'Stride.UI.Controls.ScrollBar'
* @'Stride.UI.Controls.ModalElement'

You can also create your own.

## Sample project

Without scripts, UIs are simply non-interactive images. To make them interactive, add a script.

For an example of a UI implemented in Stride, see the **game menu UI** sample included with Stride.

![Sample UI project](media/ui-sample-project.png)

## In this section

* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [UI editor](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)

## See also

* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)