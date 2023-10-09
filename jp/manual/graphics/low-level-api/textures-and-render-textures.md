# テクスチャーとレンダーテクスチャー
<!--
# Textures and render textures
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

Stride では、@'Stride.Graphics.Texture' クラスを使って、コード内でテクスチャーオブジェクトを操作することができます。
<!--
Stride uses the @'Stride.Graphics.Texture' class to interact with texture objects in code.
-->

テクスチャーへのレンダリングの詳細については、[レンダーテクスチャー](../graphics-compositor/render-textures.md)を参照してください。
<!--
For more information about rendering to a texture, see [Render textures](../graphics-compositor/render-textures.md).
-->

## テクスチャーを読み込む
<!--
## Load a texture
-->

Stride のアセットからテクスチャーを読み込むには、次の関数を呼び出します。
<!--
To load a texture from an asset in Stride, call this function:
-->

```cs
// duck.dds（または.pngなど）というテクスチャーを読み込む
// loads the texture called duck.dds (or .png etc.)
var myTexture = Content.Load<Texture>("duck");
```

これによって、すべてのフィールドが適切に設定されたテクスチャーオブジェクトが自動的に生成されます。
<!--
This automatically generates a texture object with all its fields correctly filled.
-->

## テクスチャーを作成する
<!--
## Create a texture
-->

アセットを使わずにテクスチャーを作ることもできます（例：レンダーターゲットとして使用するため）。これを行うには、@'Stride.Graphics.Texture' クラスのコンストラクタを呼び出します。利用可能なオプションとパラメータの完全なリストについては、@'Stride.Graphics.Texture' クラスのリファレンスをご覧ください。一部、すべてのプラットフォームで利用できるわけではないテクスチャーフォーマットもあります。
<!--
You can also create textures without any assets (eg to be used as render target). To do this, call the constructor of the @'Stride.Graphics.Texture' class. See the @'Stride.Graphics.Texture' class reference to get the full list of available options and parameters. Some texture formats might not be available on all platforms.
-->

### コード： テクスチャーを作成する
<!--
### Code: Create a texture
-->

```cs
var myTexture = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource);
```

## レンダーテクスチャー
<!--
## Render textures
-->

### レンダーテクスチャーを作成する
<!--
### Create a render target
-->

@'Stride.Graphics.GraphicsPresenter' クラスは、常に既定のレンダーターゲットと深度バッファを提供します。これらは、@'Stride.Graphics.GraphicsPresenter.BackBuffer' プロパティおよび @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' プロパティでアクセスできます。プレゼンターは、@'Stride.Graphics.GraphicsDevice' の @'Stride.GraphicsDevice.Presenter' プロパティとして公開されています。しかし、オフスクリーンレンダリングやポストプロセスを実行するために、独自のバッファを使用したい場合があります。そのため、Stride は、レンダーテクスチャと深度バッファとして機能するテクスチャーを簡単に作成する方法を提供しています。
<!--
The @'Stride.Graphics.GraphicsPresenter' class always provides a default render target and a depth buffer. They are accessible through the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' properties. The presenter is exposed by the @'Stride.Graphics.GraphicsDevice.Presenter' property of the @'Stride.Graphics.GraphicsDevice'. However, you might want to use your own buffer to perform off-screen rendering or post-processes. As a result, Stride offers a simple way to create textures that can act as render textures and a depth buffers.
-->

### コード： カスタムのレンダーテクスチャーと深度バッファを作成する
<!--
### Code: Create a custom render target and depth buffer
-->

```cs
// レンダーターゲット
// render target
var myRenderTarget = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource | TextureFlags.RenderTarget);
 
 // 書込可能な深度バッファ
// writable depth buffer
var myDepthBuffer = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.D16_UNorm, TextureFlags.DepthStencil);
```

>[!Note]
>レンダーターゲットの動作を有効にする @'Stride.Graphics.TextureFlags.RenderTarget' フラグも忘れないでください。
>
>PixelFormat が正しいことを確認してください（特に深度バッファの場合）。ターゲットプラットフォームで利用可能なフォーマットであるかどうかに注意してください。

<!--
>[!Note]
>Don't forget the flag @'Stride.Graphics.TextureFlags.RenderTarget' to enable the render target behavior.
>
>Make sure the PixelFormat is correct, especially for the depth buffer. Be careful of the available formats on the target platform.
-->

### レンダーターゲットを使う
<!--
### Use a render target
-->

これらのバッファが作成されると、それらを、現在のレンダーテクスチャーとして簡単に設定することができます。
<!--
Once these buffers are created, you can can easily set them as current render textures.
-->

### コード：レンダーターゲットを使う
<!--
### Code: Use a render target
-->

```cs
// レンダーテクスチャーを設定する
// settings the render textures
CommandList.SetRenderTargetAndViewport(myDepthBuffer, myRenderTarget);

// 既定のレンダーターゲットを設定する 
// setting the default render target
CommandList.SetRenderTargetAndViewport(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);
```

>[!Note]
>レンダーターゲットと深度バッファのサイズが同じであることを確認してください。そうでない場合、深度バッファは使用されません。

<!--
>[!Note]
>Make sure both the render target and the depth buffer have the same size. Otherwise, the depth buffer isn't used.
-->

複数のレンダーテクスチャーを同時に設定することができます。@'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[])'と@'Stride.Graphics.CommandList.SetRenderTargetsAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture[])' メソッドのオーバーロードを参照してください。
<!--
You can set multiple render textures at the same time. See the overloads of @'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[])' and @'Stride.Graphics.CommandList.SetRenderTargetsAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture[])' method.
-->

>[!Note]
>画面に表示されるのは @'Stride.Graphics.GraphicsPresenter.BackBuffer' だけなので、何かを表示するにはそれをレンダリングする必要があります。

<!--
>[!Note]
>Only the @'Stride.Graphics.GraphicsPresenter.BackBuffer' is displayed on screen, so you need to render it to display something.
-->

### レンダーターゲットをクリアする
<!--
### Clear a render target
-->

レンダーテクスチャーをクリアするには、@'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' メソッドと @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Graphics.DepthStencilClearOptions,System.Single,System.Byte)' メソッドを呼び出します。
<!--
To clear render textures, call the @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' and @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Graphics.DepthStencilClearOptions,System.Single,System.Byte)' methods.
-->

### コード：ターゲットをクリアする
<!--
### Code: Clear the targets
-->

```cs
CommandList.Clear(GraphicsDevice.Presenter.BackBuffer, Color.Black);
CommandList.Clear(GraphicsDevice.Presenter.DepthStencilBuffer, DepthStencilClearOptions.DepthBuffer); // only clear the depth buffer 深度バッファのみクリアする
```

>[!Note]
>フレームごとに @'Stride.Graphics.GraphicsPresenter.BackBuffer' と @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' をクリアすることを忘れないでください。そうしないと、デバイスによっては予期せぬ動作をする可能性があります。フレームの内容をクリアせず維持したい場合は、中間レンダーターゲットを使用してください。

<!--
>[!Note]
>Don't forget to clear the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and the @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' each frame. If you don't, you might get unexpected behavior depending on the device. If you want to keep the contents of a frame, use an intermediate render target.
-->

## ビューポート
<!--
## Viewport
-->

@'Stride.Graphics.CommandList.SetRenderTargetAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture)' は、現在の @'Stride.Graphics.Viewport' をレンダーターゲットの全体サイズに調整します。
<!--
@'Stride.Graphics.CommandList.SetRenderTargetAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture)' adjusts the current @'Stride.Graphics.Viewport' to the full size of the render target.
-->

テクスチャーのサブセットにのみレンダリングしたい場合は、@'Stride.Graphics.CommandList.SetRenderTarget(Stride.Graphics.Texture,Stride.Graphics.Texture)' と @'Stride.Graphics.CommandList.SetViewport(Stride.Graphics.Viewport)' を使って、レンダーターゲットとビューポートを別々に設定します。
<!--
If you only want to render to a subset of the texture, set the render target and viewport separately using @'Stride.Graphics.CommandList.SetRenderTarget(Stride.Graphics.Texture,Stride.Graphics.Texture)' and @'Stride.Graphics.CommandList.SetViewport(Stride.Graphics.Viewport)'.
-->

@'Stride.Graphics.CommandList.SetViewports(Stride.Graphics.Viewport[])'と @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[])' オーバーロードを使用して、ジオメトリシェーダーで使用する複数のビューポートをバインドすることができます。
<!--
You can bind multiple viewports using @'Stride.Graphics.CommandList.SetViewports(Stride.Graphics.Viewport[])' and @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[])' overloads for use with a geometry shader.
-->

### コード：ビューポートを設定する
<!--
### Code: Set the viewports
-->

```cs
// フルHDバッファの例
// example of a full HD buffer
CommandList.SetRenderTarget(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer); // no viewport set
 
// フルHDバッファ（1920x1080）の画像の周囲に10ピクセルの境界線があるようにビューポートを設定した例
// example of setting the viewport to have a 10-pixel border around the image in a full HD buffer (1920x1080)
var viewport = new Viewport(10, 10, 1900, 1060);
CommandList.SetViewport(viewport);
```

## シザー
<!--
## Scissor
-->

@'Stride.Graphics.CommandList.SetScissorRectangle(Stride.Core.Mathematics.Rectangle)' および @'Stride.Graphics.CommandList.SetScissorRectangles(Stride.Core.Mathematics.Rectangle[])' メソッドは、シザーを設定します。ビューポートとは異なり、サイズではなく、シザーを定義する頂点の位置の座標を指定する必要があります。
<!--
The @'Stride.Graphics.CommandList.SetScissorRectangle(Stride.Core.Mathematics.Rectangle)' and @'Stride.Graphics.CommandList.SetScissorRectangles(Stride.Core.Mathematics.Rectangle[])' methods set the scissors. Unlike the viewport, you need to provide the coordinates of the location of the vertices defining the scissor instead of its size.
-->

### コード：シザーを設定する
<!--
### Code: Set the scissor
-->

```cs
// 
// フルHD（1920x1080）のバッファで、画像の周りを10ピクセルずつ切り取るようにシザーを設定した例
var rectangle = new Rectangle(10, 10, 1910, 1070);
CommandList.SetScissorRectangles(rectangle);
 
var rectangles = new[] { new Rectangle(10, 10, 1900, 1060), new Rectangle(0, 0, 256, 256) };
CommandList.SetScissorRectangles(rectangles);
```

## 関連項目
<!--
## See also
-->

* [レンダー テクスチャー](../graphics-compositor/render-textures.md)

<!--
* [Render textures](../graphics-compositor/render-textures.md)
-->
