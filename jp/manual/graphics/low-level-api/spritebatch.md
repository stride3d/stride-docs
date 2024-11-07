# スプライトバッチ
<!--
# SpriteBatch
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

スプライトバッチは、スプライト（2D のテクスチャ付き平面）の集合体です。
<!--
A sprite batch is a collection of sprites (2D textured planes).
-->

>[!Note]
>カスタムコードをコンポジションに含めるには、すべてのカスタムコードを[カスタム シーン レンダラー](../graphics-compositor/custom-scene-renderers.md)に記述する必要があることを覚えておいてください。

<!--
>>[!Note]
>Remember that you need to put all custom code in a [custom scene renderer](../graphics-compositor/custom-scene-renderers.md) to include it in the composition.
-->

## スプライトバッチを作成する
<!--
## Create a sprite batch
-->

Stride では、@'Stride.Graphics.SpriteBatch' クラスを使って、スプライトのバッチを簡単に扱うことができます。このクラスで、スプライトの再編成、更新、表示を効率的に行うことができます。
<!--
Stride offers a easy way to deal will batches of sprites through the @'Stride.Graphics.SpriteBatch' class. You can use this class to regroup, update, and display sprites efficiently.
-->

**コード：** スプライトバッチを作成する
<!--
**Code:** Creating a sprite batch
-->

```cs
var spriteBatch = new SpriteBatch(GraphicsDevice);
```

スプライトの作成時に、バッチの大きさを指定することができます。これは、スプライトバッチが表示することのできるスプライトの最大数ではなく、スプライトの一括描画までに蓄えておけるスプライトの最大数を表しています。
<!--
You can specify the size of your batch size. This isn't the maximum number of sprites the SpriteBatch is able to display, but the maximum number of sprites it can store before drawing.
-->

**コード：** バッチのサイズを設定する
<!--
**Code:** Setting the batch size
-->

```cs
var spriteBatch = new SpriteBatch(GraphicsDevice, 2000);
```

また、[パイプライン ステート](pipeline-state.md)のページで説明されているように、ステートを設定することもできます。<!--
You can also set states like the ones discussed on the [Pipeline state](pipeline-state.md) page.
-->

## スプライトバッチを描画する
<!--
## Draw a sprite batch
-->

@'Stride.Graphics.SpriteBatch' クラスには、様々なパラメータを設定できる複数の描画メソッドがあります。機能の一覧については、@'Stride.Graphics.SpriteBatch' API のドキュメントを参照してください。
<!--
The @'Stride.Graphics.SpriteBatch' class has multiple draw methods to set various parameters. For a list of features, see the @'Stride.Graphics.SpriteBatch' API documentation.
-->

**コード：** スプライトバッチを描画する
<!--
**Code:** Drawing a sprite batch
-->

```cs
// スプライトバッチの操作を開始する
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext, SpriteSortMode.Immediate);
 
// スプライトを即時描画する
// draw the sprite immediately
spriteBatch.Draw(myTexture, new Vector2(10, 20));
 
// スプライトバッチの操作を終了する
// end the sprite batch operations
spriteBatch.End();
```

スプライトを一括して描画する5つのモードがあります。これらは @'Stride.Graphics.SpriteSortMode' 列挙子で定義されています。
<!--
There are five modes to draw a sprite batch. They are enumerated in the @'Stride.Graphics.SpriteSortMode' enum:
-->

- Deferred（既定）: スプライトは最後にまとめて描画されます。描画呼び出しのオーバーヘッドが削減されます。
- Immediate: @'Stride.Graphics.SpriteBatch.Draw*' を呼び出すたびに、すぐにスプライトが描画されます。
- Texture: Deffered モードですが、エフェクトパラメータの更新を減らすために、スプライトはテクスチャーに基づいてソートされます。
- BackToFront: スプライトの Z オーダーに基づいてソートを行う Deferred モードです。
- FrontToBack: スプライトの Z オーダーに基づいてソートを行う Deferred モードです。

<!--
- Deferred (default mode): the sprites are drawn at the same time at the end to reduce the drawcall overhead
- Immediate: the sprites are draw after each each @'Stride.Graphics.SpriteBatch.Draw*' call
- Texture: Deferred mode but sprites are sorted based on their texture to reduce effect parameters update
- BackToFront: Deferred mode with a sort based on the z-order of the sprites
- FrontToBack: Deferred mode with a sort based on the z-order of the sprites
-->

モードは、@'Stride.Graphics.SpriteBatch.Begin*' メソッドで指定します。
<!--
To set the mode, specify it in the @'Stride.Graphics.SpriteBatch.Begin*' method.
-->

**コード：** スプライトバッチの遅延描画
<!--
**Code:** Deferred drawing of the sprite batch
-->

```cs
// スプライトバッチの操作を開始する
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext); // same as spriteBatch.Begin(GraphicsContext, SpriteSortMode.Deferred);

// スプライトの修正を格納する（ここではまだ描画されない）
// store the modification of the sprite
spriteBatch.Draw(myTexture, new Vector2(10, 20));

// スプライトバッチの操作を終了し、すべてのスプライトを描画する
// end the sprite batch operations, draw all the sprites
spriteBatch.End();
```

スプライトには、いくつかのパラメータを設定することができます。例えば、以下のようなものです。
<!--
You can set several parameters on the sprite. For example:
-->

- position（位置）
- rotation（回転）
- scale（拡大縮小）
- depth（深度）
- center offset（中央オフセット）
- color tint（色彩）

<!--
- position
- rotation
- scale
- depth
- center offset
- color tint
-->

完全なリストについては、@'Stride.Graphics.SpriteBatch' APIドキュメント、特に **Draw** メソッドを参照してください。
<!--
For a full list, see the @'Stride.Graphics.SpriteBatch' API documentation, especially the **Draw** methods.
-->

**コード：** より複雑なスプライトバッチの描画
<!--
**Code:** More complex sprite batch drawing
-->

```cs
// スプライトバッチの操作を開始
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext);
const int gridCount = 10;
var textureOffset = new Vector2((float)graphicsDevice.BackBuffer.Width/gridCount, (float)graphicsDevice.BackBuffer.Height/gridCount);
var textureOrigin = new Vector2(myTexture.Width/2.0f, myTexture.Height/2.0f);

// 10x10 の格子状になった 100 個のすプライトを、それぞれ1.2度回転＆0.5倍スケールで描画
// draw 100 sprites on a 10x10 grid with a rotation of 1.2 rad and a scale of 0.5 for each of them
for (int y = 0; y < gridCount; y++)
{
    for (int x = 0; x < gridCount; x++)
    {
        spriteBatch.Draw(UVTexture, new Vector2(x * textureOffset.X + textureOffset.X / 2.0f, y * textureOffset.Y + textureOffset.Y / 2.0f), Color.White, 1.2f, textureOrigin, 0.5f);
    }
}

// スプライトバッチの操作を終了し、すべてのスプライトを描画 
// end the sprite batch operations, draw all the sprites
spriteBatch.End();
```

## 関連項目
<!--
## See also
-->

* [スプライト フォント](spritefont.md)

<!--
* [SpriteFont](spritefont.md)
-->