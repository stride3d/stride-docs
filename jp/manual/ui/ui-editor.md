# UI editor

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Designer</span>

You can edit [UI pages](ui-pages.md) and [UI libraries](ui-libraries.md) with the **UI editor**.

To open the editor, in the **Asset View**, double-click a **UI page** or **[UI library](ui-libraries.md)**.

![Open UI editor](media/open-UI-editor.png)

The UI editor opens.

![UI editor overview](media/ui-editor-overview.png)

The UI editor comprises:

* the list of [UI libraries](ui-libraries.md) (**A**), which contain the elements (such as buttons and grids) you can add to your UI

* a visual tree of the elements in the UI page (**B**)

* a preview of the UI page as it appears in the game (**C**)

* a Property Grid (**D**) to edit the properties of your UI elements

## UI libraries

A **UI library** contains **UI elements** (such as grids, buttons, sliders and so on) that you can use and re-use in your UI pages. They work similarly to [prefabs](../game-studio/prefabs/index.md) in the Scene Editor.

![UI library](media/UI-library.png)

For more information, see [UI libraries](ui-libraries.md).

## Visual tree

The **visual tree** shows the elements in the UI page and their hierarchy. This is similar to the **Entity Tree** in the Scene Editor.

![UI asset properties](media/ui-editor-visual-tree.png)

The number in parentheses indicates the number of children an element has. Some elements, such as buttons, can only have one child.

To re-order elements in the visual tree, drag and drop them.

To move an element to a new group, right-click the element and select **Group into**. For example, to create a new grid and move an element into it, right-click the element and select **Group into > Grid**.

![Group into grid](media/group-into-grid.png)

## UI preview

The **UI preview** displays a preview of the UI as it appears at runtime. The rendering is equivalent to the rendering in the game, assuming the design resolution is the same as the UI component that uses the edited asset.

By default, the UI is a **billboard**, meaning it always faces the camera. The UI view camera is **orthographic** (see [Cameras](../graphics/cameras/index.md)). 

You can select, move, and resize elements in the preview as you do in image editing applications.

![Select an element](media/ui-editor-selecting.gif)

![Move an element](media/ui-editor-moving.gif)

![Resize an element](media/ui-editor-resizing.gif)

### Controls

| Action            | Control                              
|-------------------|--------------------------------------
| Pan               | Hold middle mouse button + move mouse
| Zoom              | Mouse wheel                    
| Speed up pan/zoom | Hold shift while panning or zooming

### Tool options

To change the color and size of the selection tools, in the **UI editor toolbar**, click ![Eye icon](media/eye-icon.png)

> [!Note]
> These options have no effect on how the UI is displayed at runtime.

![UI editor view options](media/ui-editor-view-options.png)

* **Guideline**: changes the width of the lines that indicate the distance to the margins (in pixels)

* **Highlight**: changes the width of the highlight that appears when you move your mouse over an element

* **Selection**: changes the width of the selection highlight

* **Sizing**: changes the size of the boxes at the edges of selections used to resize elements

## Add a UI element to a UI page

To add an element (such as a grid or button), drag it from the **UI library** to the UI page or the **visual tree**.

![Add UI element](media/add-ui-element.gif)

## Properties

You can view and edit element properties in the **Property Grid**.

![Property Grid!](media/element-property-grid.png)

Properties are sorted by **Appearance**, **Behavior**, **Layout** and **Misc**.

### Appearance

Commonly used properties include `BackgroundColor`, `Opacity`, `Visibility` and `ClipToBounds`.

![Appearance properties](media/appearance-properties.png)

### Behavior

Commonly used properties include whether the element responds to touch events(`CanBeHitByUser`).

![Behavior properties](media/behavior-properties.png)

### Layout

Commonly used properties include the size of the element (`Height`, `Width` and `Depth`), its alignment (`HorizontalAlignment`, `VerticalAlignment`, `DepthAlignement`) and its `Margin`.

![Layout properties](media/layout-properties.png)

### Misc

This category contains only the `Name` of the element.

![Misc properties](media/misc-properties.png)

## See also

* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)