# UI

Xenko features a UI editor and layout system you can use to build sophisticated user interfaces. It supports 2D and 3D independently of resolution.

![UI editor](media/ui-editor.png)

Xenko uses two types of UI asset: `UIPageAsset` and `UILibraryAsset`. Their runtime counterparts are `UIPage` and `UILibrary` respectively.

To reduce the number of draw calls, Xenko draws multiple elements using a sprite batch renderer.

## Controls

Xenko features many UI control components, including:

* @'Xenko.UI.Controls.ImageElement'
* @'Xenko.UI.Controls.ContentControl'
  * @'Xenko.UI.Controls.ScrollViewer'
  * @'Xenko.UI.Controls.Button'
    * @'Xenko.UI.Controls.ToggleButton'
  * @'Xenko.UI.Controls.ContentDecorator'
* @'Xenko.UI.Controls.TextBlock'
  * @'Xenko.UI.Controls.ScrollingText'
* @'Xenko.UI.Controls.EditText' (displays soft keyboard on mobile devices)
* @'Xenko.UI.Panels.Panel'
  * @'Xenko.UI.Panels.StackPanel' (supports virtualization)
  * @'Xenko.UI.Panels.Grid'
  * @'Xenko.UI.Panels.UniformGrid'
  * @'Xenko.UI.Panels.Canvas'
* @'Xenko.UI.Controls.ScrollBar'
* @'Xenko.UI.Controls.ModalElement'

You can also create your own.

## Sample project

Without scripts, UIs are simply non-interactive images. To make them interactive, add a script.

For an example of a UI implemented in Xenko, see the **game menu UI** sample included with Xenko.

![Sample UI project](media/ui-sample-project.png)

## In this section

* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [UI editor](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)

## See also

* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)