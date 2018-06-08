# Low-level API

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

The @'SiliconStudio.Xenko.Graphics.GraphicsDevice' class is the central class for displaying your game. It's used to create resources and present images on the screen. You can access it as a member of the @'SiliconStudio.Xenko.Engine.Game' and @'SiliconStudio.Xenko.Engine.ScriptComponent' classes.

Actions such as drawing, setting graphics states and using resources are recorded using @'SiliconStudio.Xenko.Graphics.CommandList' objects for later execution by the device.

Many command lists can be filled at the same time (eg one per thread). A default command list is available as member of the @'SiliconStudio.Xenko.Games.GameBase.GraphicsContext' of your @'SiliconStudio.Xenko.Engine.Game'.

In methods, these objects are typically provided through contexts such as @'SiliconStudio.Xenko.Rendering.RenderContext' and @'SiliconStudio.Xenko.Rendering.RenderDrawContext'.

Performing any drawing requires multiple steps, including:

* setting textures as [render textures](textures-and-render-textures.md), clearing them, and setting viewports and scissors
* setting up the graphics [pipeline state](pipeline-state.md), including input description, shaders, depth-stencil, blending, rasterizer, etc
* binding [resources](resources.md), such as constant buffers and textures
* [drawing vertices](draw-vertices.md) using built-in primitives or custom vertex buffers

## In this section

* [Draw vertices](draw-vertices.md)
* [Pipeline state](pipeline-state.md)
* [Resources](resources.md)
* [SpriteBatch](spritebatch.md)
* [SpriteFont](spritefont.md)
* [Textures and render textures](textures-and-render-textures.md)