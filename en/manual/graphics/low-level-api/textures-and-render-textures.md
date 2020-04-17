# Textures and render textures

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

Stride uses the @'Stride.Graphics.Texture' class to interact with texture objects in code.

For more information about rendering to a texture, see [Render textures](../graphics-compositor/render-textures.md).

## Load a texture

To load a texture from an asset in Stride, call this function:

```cs
// loads the texture called duck.dds (or .png etc.)
var myTexture = Content.Load<Texture>("duck");
```

This automatically generates a texture object with all its fields correctly filled.

## Create a texture

You can also create textures without any assets (eg to be used as render target). To do this, call the constructor of the @'Stride.Graphics.Texture' class. See the @'Stride.Graphics.Texture' class reference to get the full list of available options and parameters. Some texture formats might not be available on all platforms.

### Code: Create a texture

```cs
var myTexture = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource);
```

## Render textures

### Create a render target

The @'Stride.Graphics.GraphicsPresenter' class always provides a default render target and a depth buffer. They are accessible through the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' properties. The presenter is exposed by the @'Stride.Graphics.GraphicsDevice.Presenter' property of the @'Stride.Graphics.GraphicsDevice'. However, you might want to use your own buffer to perform off-screen rendering or post-processes. As a result, Stride offers a simple way to create textures that can act as render textures and a depth buffers.

### Code: Create a custom render target and depth buffer

```cs
// render target
var myRenderTarget = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource | TextureFlags.RenderTarget);
 
// writable depth buffer
var myDepthBuffer = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.D16_UNorm, TextureFlags.DepthStencil);
```

>[!Note]
>Don't forget the flag @'Stride.Graphics.TextureFlags.RenderTarget' to enable the render target behavior.
>
>Make sure the PixelFormat is correct, especially for the depth buffer. Be careful of the available formats on the target platform.

### Use a render target

Once these buffers are created, you can can easily set them as current render textures.

### Code: Use a render target

```cs
// settings the render textures
CommandList.SetRenderTargetAndViewport(myDepthBuffer, myRenderTarget);
 
// setting the default render target
CommandList.SetRenderTargetAndViewport(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);
```

>[!Note]
>Make sure both the render target and the depth buffer have the same size. Otherwise, the depth buffer isn't used.

You can set multiple render textures at the same time. See the overloads of @'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[])' and @'Stride.Graphics.CommandList.SetRenderTargetsAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture[])' method.

>[!Note]
>Only the @'Stride.Graphics.GraphicsPresenter.BackBuffer' is displayed on screen, so you need to render it to display something.

### Clear a render target

To clear render textures, call the @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' and @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Graphics.DepthStencilClearOptions,System.Single,System.Byte)' methods.

### Code: Clear the targets

```cs
CommandList.Clear(GraphicsDevice.Presenter.BackBuffer, Color.Black);
CommandList.Clear(GraphicsDevice.Presenter.DepthStencilBuffer, DepthStencilClearOptions.DepthBuffer); // only clear the depth buffer
```

>[!Note]
>Don't forget to clear the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and the @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' each frame. If you don't, you might get unexpected behavior depending on the device. If you want to keep the contents of a frame, use an intermediate render target.

## Viewport

@'Stride.Graphics.CommandList.SetRenderTargetAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture)' adjusts the current @'Stride.Graphics.Viewport' to the full size of the render target.

If you only want to render to a subset of the texture, set the render target and viewport separately using @'Stride.Graphics.CommandList.SetRenderTarget(Stride.Graphics.Texture,Stride.Graphics.Texture)' and @'Stride.Graphics.CommandList.SetViewport(Stride.Graphics.Viewport)'.

You can bind multiple viewports using @'Stride.Graphics.CommandList.SetViewports(Stride.Graphics.Viewport[])' and @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[])' overloads for use with a geometry shader.

### Code: Set the viewports

```cs
// example of a full HD buffer
CommandList.SetRenderTarget(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer); // no viewport set
 
// example of setting the viewport to have a 10-pixel border around the image in a full HD buffer (1920x1080)
var viewport = new Viewport(10, 10, 1900, 1060);
CommandList.SetViewport(viewport);
```

## Scissor

The @'Stride.Graphics.CommandList.SetScissorRectangle(Stride.Core.Mathematics.Rectangle)' and @'Stride.Graphics.CommandList.SetScissorRectangles(Stride.Core.Mathematics.Rectangle[])' methods set the scissors. Unlike the viewport, you need to provide the coordinates of the location of the vertices defining the scissor instead of its size.

### Code: Set the scissor

```cs
// example of setting the scissor to crop the image by 10 pixel around it in a full hd buffer (1920x1080)
var rectangle = new Rectangle(10, 10, 1910, 1070);
CommandList.SetScissorRectangles(rectangle);
 
var rectangles = new[] { new Rectangle(10, 10, 1900, 1060), new Rectangle(0, 0, 256, 256) };
CommandList.SetScissorRectangles(rectangles);
```

## See also

* [Render textures](../graphics-compositor/render-textures.md)
