# 低レベル API
<!--
# Low-level API
-->

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>
-->

@'Stride.Graphics.GraphicsDevice' クラスは、ゲームの表示の中心となるクラスです。リソースを作成したり、画面に画像を表示したりすることに使われます。@'Stride.Engine.Game' クラスと @'Stride.Engine.ScriptComponent' クラスのメンバーです。
<!--
The @'Stride.Graphics.GraphicsDevice' class is the central class for displaying your game. It's used to create resources and present images on the screen. You can access it as a member of the @'Stride.Engine.Game' and @'Stride.Engine.ScriptComponent' classes.
-->

描画、グラフィックスの状態設定、リソースの使用などのアクションは、@'Stride.Graphics.CommandList' オブジェクトを使って記録され、後にデバイスで実行されます。
<!--
Actions such as drawing, setting graphics states and using resources are recorded using @'Stride.Graphics.CommandList' objects for later execution by the device.
-->

多くのコマンドリストを同時に記録することができます（例えば、スレッドごとに1つずつ記録する）。既定のコマンドリストは、@'Stride.Engine.Game' の @'Stride.Games.GameBase.GraphicsContext' のメンバーです。
<!--
Many command lists can be filled at the same time (eg one per thread). A default command list is available as member of the @'Stride.Games.GameBase.GraphicsContext' of your @'Stride.Engine.Game'.
-->

メソッドでは、これらのオブジェクトは通常、@'Stride.Rendering.RenderContext'や@'Stride.Rendering.RenderDrawContext'などのコンテキストを通じて提供されます。
<!--
In methods, these objects are typically provided through contexts such as @'Stride.Rendering.RenderContext' and @'Stride.Rendering.RenderDrawContext'.
-->

描画を行うには、以下のような複数のステップが必要です。
<!--
Performing any drawing requires multiple steps, including:
-->

* テクスチャーを[レンダーテクスチャー](textures-and-render-textures.md)として設定し、クリアして、ビューポートとシザーを設定する。
* グラフィックス [パイプラインステート](pipeline-state.md)の設定には、入力の記述、シェーダー、深度ステンシル、ブレンディング、ラスタライザーなどが含まれます。
* 定数バッファやテクスチャーなどの[リソース バインディング](resources.md)。
* 組込みプリミティブやカスタム頂点バッファを使った[頂点の描画](draw-vertices.md)。

<!--
* setting textures as [render textures](textures-and-render-textures.md), clearing them, and setting viewports and scissors
* setting up the graphics [pipeline state](pipeline-state.md), including input description, shaders, depth-stencil, blending, rasterizer, etc
* binding [resources](resources.md), such as constant buffers and textures
* [drawing vertices](draw-vertices.md) using built-in primitives or custom vertex buffers
-->

## このセクションの内容
<!--
## In this section
-->

* [頂点の描画](draw-vertices.md)
* [パイプライン ステート](pipeline-state.md)
* [リソース バインディング](resources.md)
* [スプライト バッチ](spritebatch.md)
* [スプライト フォント](spritefont.md)
* [テクスチャーとレンダーテクスチャー](textures-and-render-textures.md)

<!--
* [Draw vertices](draw-vertices.md)
* [Pipeline state](pipeline-state.md)
* [Resources](resources.md)
* [SpriteBatch](spritebatch.md)
* [SpriteFont](spritefont.md)
* [Textures and render textures](textures-and-render-textures.md)
-->
