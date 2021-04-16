# 頂点の描画
<!--
# Draw vertices
-->

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>
-->

シーンを読み込む際、Stride は、エンティティシステムを介してシーンを表示するための描画呼び出しを自動的に処理します。このページでは、手動で描画する方法について紹介します。
<!--
When loading a scene, Stride automatically handles the draw calls to display the scene throughout the entity system. This page introduces manual drawing.
-->

## プリミティブ
<!--
## Primitives
-->

Stride には、次のような組み込みプリミティブが用意されています。
<!--
Stride provides the following set of built-in primitives:
-->

- Plane（プレーン／平面）
- Cube（キューブ／立方体）
- Sphere（スフィア／球体）
- Geosphere（ジオスフィア／天球体）
- Cylinder（シリンダー／円柱）
- Torus（トールス／円環体）
- Teapot（ティーポット／きゅうす）

<!--
- Plane
- Cube
- Sphere
- Geosphere
- Cylinder
- Torus
- Teapot
-->

これらは @'Stride.Graphics.GraphicsDevice' と一緒に自動作成されたりはしないので、手動でインスタンス化する必要があります。これは、@'Stride.Graphics.GeometricPrimitive.GeometricPrimitive' クラスで行うことができます。
<!--
They aren't automatically created along with the @'Stride.Graphics.GraphicsDevice', so you have to instantiate them. You can do this through the @'Stride.Graphics.GeometricPrimitives.GeometricPrimitive' class.
-->

**コード：** プリミティブの作成と使用
<!--
**Code:** Creating and using a primitive
-->

```cs
// 生成
// creation
var myCube = GeometricPrimitive.Cube.New(GraphicsDevice);
var myTorus = GeometricPrimitive.Torus.New(GraphicsDevice);
 
// ...

// 画面上に描画 
// draw one on screen
myCube.Draw(CommandList, EffectInstance);
```

これらは関連付けられたエフェクトを持っていないので、描画時に手動で @'Stride.Rendering.EffectInstance'を提供する必要があります。エフェクトの読み込みの詳細については、[エフェクトとシェーダー](../effects-and-shaders/index.md)を参照してください。
<!--
They have no effect associated with them, so the user has to provide an @'Stride.Rendering.EffectInstance' when drawing. For information on loading effects, please see [Effects and shaders](../effects-and-shaders/index.md).
-->

## カスタム描画
<!--
## Custom drawing
-->

組込みプリミティブの他に、カスタム頂点バッファを作成することでジオメトリを描画することができます。頂点バッファを作成するには、まず @'Stride.Graphics.VertexDeclaration' を定義する必要があります。この頂点宣言では、各頂点の要素と、そのレイアウトを記述します。
詳細については、@'Stride.Graphics.VertexElement' のリファレンスをご覧ください。
<!--
Outside of built-in primitives, any geometry can be drawn by creating custom vertex buffers. To create a vertex buffer, first a @'Stride.Graphics.VertexDeclaration' has to be defined. A vertex declaration describes the elements of each vertex and their layout.
For details, see the @'Stride.Graphics.VertexElement' reference page.
-->

次に、頂点の配列から頂点バッファを作成することができます。頂点データ型は、@'Stride.Graphics.VertexDeclaration' と一致する必要があります。
<!--
Next, a vertex buffer can be created from an array of vertices. The vertex data type has to match the @'Stride.Graphics.VertexDeclaration'.
-->

頂点バッファと頂点宣言を使って、@'Stride.Graphics.VertexBufferBinding' を作成することができます。
<!--
Given vertex buffer and declaration, a @'Stride.Graphics.VertexBufferBinding' can be created. 
-->

**コード：** 頂点バッファを作成する
<!--
**Code:** Creating a vertex buffer
-->

```cs
// 位置とテクスチャ座標を持つ頂点レイアウトの作成
// Create a vertex layout with position and texture coordinate
var layout = new VertexDeclaration(VertexElement.Position<Vector3>(), VertexElement.TextureCoordinate<Vector2>()); 

// 頂点の配列から頂点バッファの作成
// Create the vertex buffer from an array of vertices
var vertices = new VertexPositionTexture[vertexCount];
var vertexBuffer = Buffer.Vertex.New(GraphicsDevice, vertices);

// 頂点バッファバインディングの作成
// Create a vertex buffer binding
var vertexBufferBinding = new VertexBufferBinding(vertexBuffer, layout, vertexCount);
```

新しく作成した頂点バッファを描画するには、パイプラインにバインドする必要があります。描画する頂点レイアウトと @'Stride.Graphics.PrimitiveType' は、[パイプライン ステート](pipeline-state.md)オブジェクトに含まれていなければなりません。バッファ自体は動的に設定することができます。
<!--
To draw the newly created vertex buffer, it has to be bound to the pipeline. The vertex layout and the @'Stride.Graphics.PrimitiveType' to draw have to be included in the [pipeline state](pipeline-state.md) object. The buffer itself can be set dynamically.
-->

その後、@'Stride.Graphics.CommandList.Draw(System.Int32,System.Int32)' を使って、頂点のレンダリングが行えます。
<!--
Afterwards, the vertices are ready to be rendered using @'Stride.Graphics.CommandList.Draw(System.Int32,System.Int32)'.
-->

**コード：** 頂点バッファのバインドと描画
<!--
**Code:** Binding and drawing vertex buffers
-->

```cs
// パイプラインステートの設定
// Set the pipeline state
pipelineStateDescription.InputElements = vertexBufferBinding.Layout.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
 
// PipelineState オブジェクトの集合を作成
// Create and set a PipelineState object
// ...

// 頂点バッファをパイプラインにバインド
// Bind the vertex buffer to the pipeline
commandList.SetVertexBuffers(0, vertexBuffer, 0, vertexBufferBinding.Stride);

// 頂点を描画 
// Draw the vertices
commandList.Draw(vertexCount);
```

また、インデックス付きのジオメトリを描画することも可能です。インデックスバッファを使うには、まず頂点バッファと同じようにインデックスバッファを作成し、パイプラインにバインドします。
その後、@'Stride.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)' を使って描画することができます。
<!--
It is also possible to draw indexed geometry. To use an index buffer, first create it similarly to the vertex buffer and bind it to the pipeline.
It can then be used for drawing using @'Stride.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)'.
-->

**コード：** インデックス付き頂点の描画
<!--
**Code:** Drawing indexed vertices
-->

```cs
// インデックスバッファの作成
// Create the index buffer
var indices = new short[indexCount];
var is32Bits = false;
var indexBuffer = Buffer.Index.New(GraphicsDevice, indices);
 
// 頂点配列の設定
// set the VAO
commandList.SetIndexBuffer(indexBuffer, 0, is32Bits);

// インデックス付き頂点の描画
// Draw indexed vertices
commandList.DrawIndexed(indexBuffer.ElementCount);
```
