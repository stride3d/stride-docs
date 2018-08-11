# Custom scene renderers

To create a custom renderer, directly implement the @'Xenko.Rendering.Compositing.ISceneRenderer' or use a delegate through the @'Xenko.Rendering.Compositing.DelegateSceneRenderer'.

## Implement an ISceneRenderer

The @'Xenko.Rendering.Compositing.SceneRendererBase' provides a default implementation of @'Xenko.Rendering.Compositing.ISceneRenderer'. It automatically binds the output defines on the renderer to the GraphicsDevice before calling the `DrawCore` method.

```cs
[DataContract("MyCustomRenderer")]
[Display("My Custom Renderer")]
public sealed class MyCustomRenderer : SceneRendererBase
{
    // Implements the DrawCore method
    protected override void DrawCore(RenderContext context, RenderFrame output)
    {
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        // Clears the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
    }
}
```

## Use a delegate

To develop a renderer and attach it to a method directly, use @'Xenko.Rendering.Compositing.DelegateSceneRenderer':

```cs
var sceneRenderer = new DelegateSceneRenderer(
    (renderContext, frame) =>
    {
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        // Clears the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
   });
```

## See also

* [Scene renderers](scene-renderers.md)
* [Debug renderers](debug-renderers.md)