# Custom scene renderers
# Пользовательские рендереры сцен

To create a custom renderer, directly implement the @'Stride.Rendering.Compositing.ISceneRenderer' or use a delegate through the @'Stride.Rendering.Compositing.DelegateSceneRenderer'.
Чтобы создать собственный модуль визуализации, реализуйте @'Stride.Rendering.Compositing.ISceneRenderer' напрямую или используйте делегата через @'Stride.Rendering.Compositing.DelegateSceneRenderer'.

## Implement an ISceneRenderer
## Реализация ISceneRenderer

The @'Stride.Rendering.Compositing.SceneRendererBase' provides a default implementation of @'Stride.Rendering.Compositing.ISceneRenderer'. It automatically binds the output defines on the renderer to the GraphicsDevice before calling the `DrawCore` method.
@'Stride.Rendering.Compositing.SceneRendererBase' предоставляет реализацию по умолчанию @'Stride.Rendering.Compositing.ISceneRenderer'.  Он автоматически привязывает выходные данные, определенные в средстве визуализации, к GraphicsDevice перед вызовом метода `DrawCore`.

```cs
```CS
[DataContract("MyCustomRenderer")]
[Контракт данных (
[Display("My Custom Renderer")]
[Отображение(
public sealed class MyCustomRenderer : SceneRendererBase
общедоступный закрытый класс MyCustomRenderer: SceneRendererBase
{
{
    // Implements the DrawCore method
// Реализует метод DrawCore
    protected override void DrawCore(RenderContext context, RenderDrawContext drawContext)
защищенное переопределение void DrawCore (контекст RenderContext, RenderDrawContext drawContext)
    {
{
        // Access to the graphics device
// Доступ к графическому устройству
        var graphicsDevice = drawContext.GraphicsDevice;
var GraphicsDevice = drawContext.GraphicsDevice;
        var commandList = drawContext.CommandList;
var commandList = drawContext.CommandList;
        // Clears the current render target
// Очищает текущую цель рендеринга
        commandList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
commandList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
// [...]
    }
}
}
}
```
```

## Use a delegate
## Используйте делегат

To develop a renderer and attach it to a method directly, use @'Stride.Rendering.Compositing.DelegateSceneRenderer':
Чтобы разработать средство визуализации и напрямую присоединить его к методу, используйте @'Stride.Rendering.Compositing.DelegateSceneRenderer':

```cs
```CS
var sceneRenderer = new DelegateSceneRenderer(
var sceneRenderer = новый DelegateSceneRenderer(
    (drawContext) =>
(контекст рисования) =>
    {
{
        // Access to the graphics device
// Доступ к графическому устройству
        var graphicsDevice = drawContext.GraphicsDevice;
var GraphicsDevice = drawContext.GraphicsDevice;
        var commandList = drawContext.CommandList;
var commandList = drawContext.CommandList;
        // Clears the current render target
// Очищает текущую цель рендеринга
        commandList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
commandList.Clear(commandList.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
// [...]
   });
});
```
```

## See also
## Смотрите также

* [Scene renderers](scene-renderers.md)
* [Визуализация сцены] (scene-renderers.md)
* [Debug renderers](debug-renderers.md)
* [Отладка рендереров](debug-renderers.md)
