# カスタム シーン レンダラー
<!--
# Custom scene renderers
-->

カスタムシーンレンダラーを作成するには、@'Stride.Rendering.Compositing.ISceneRenderer' を直接実装するか、@'Stride.Rendering.Compositing.DelegateSceneRenderer' によるデリゲートを使用します。
<!--
To create a custom renderer, directly implement the @'Stride.Rendering.Compositing.ISceneRenderer' or use a delegate through the @'Stride.Rendering.Compositing.DelegateSceneRenderer'.
-->

## ISceneRenderer を実装する
<!--
## Implement an ISceneRenderer
-->

@'Stride.Rendering.Compositing.SceneRendererBase' は、@'Stride.Rendering.Compositing.ISceneRenderer' のデフォルトの実装です。この実装では、`DrawCore` メソッドが呼び出される前に、レンダラーの出力定義が `RenderContext.GraphicsDevice` プロパティに自動的にバインドされます。
<!--
The @'Stride.Rendering.Compositing.SceneRendererBase' provides a default implementation of @'Stride.Rendering.Compositing.ISceneRenderer'. It automatically binds the output defines on the renderer to the GraphicsDevice before calling the `DrawCore` method.
-->

```cs
[DataContract("MyCustomRenderer")]
[Display("My Custom Renderer")]
public sealed class MyCustomRenderer : SceneRendererBase
{
    // DrawCore メソッドの実装
    // Implements the DrawCore method
    protected override void DrawCore(RenderContext context, RenderFrame output)
    {
        // グラフィックデバイスを取得
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        
        // 現在のレンダーターゲットをクリア
        // Clears the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
    }
}
```

## デリゲートを使用する
<!--
## Use a delegate
-->

レンダラーを開発し、それをメソッドに直接アタッチするには、@'Stride.Rendering.Compositing.DelegateSceneRenderer' を使用します。
<!--
To develop a renderer and attach it to a method directly, use @'Stride.Rendering.Compositing.DelegateSceneRenderer':
-->

```cs
var sceneRenderer = new DelegateSceneRenderer(
    (renderContext, frame) =>
    {
        // グラフィックデバイスを取得
        // Access to the graphics device
        var graphicsDevice = context.GraphicsDevice;
        
        // 現在のレンダーターゲットをクリア
        // Clears the currrent render target
        graphicsDevice.Clear(output.RenderTargets[0], Color.CornflowerBlue);
        // [...] 
   });
```

## 関連項目
<!--
## See also
-->

* [シーン レンダラー](scene-renderers.md)
* [デバッグ レンダラー](debug-renderers.md)

<!--
* [Scene renderers](scene-renderers.md)
* [Debug renderers](debug-renderers.md)
-->
