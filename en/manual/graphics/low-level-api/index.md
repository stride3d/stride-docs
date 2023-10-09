# Low-level API

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

The @'Stride.Graphics.GraphicsDevice' class is the central class for displaying your game. It's used to create resources and present images on the screen. You can access it as a member of the @'Stride.Engine.Game' and @'Stride.Engine.ScriptComponent' classes.

Actions such as drawing, setting graphics states and using resources are recorded using @'Stride.Graphics.CommandList' objects for later execution by the device.

Many command lists can be filled at the same time (eg one per thread). A default command list is available as member of the @'Stride.Games.GameBase.GraphicsContext' of your @'Stride.Engine.Game'.

In methods, these objects are typically provided through contexts such as @'Stride.Rendering.RenderContext' and @'Stride.Rendering.RenderDrawContext'.

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