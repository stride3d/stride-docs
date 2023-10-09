# スプライト フォント
<!--
# SpriteFont
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

@'Stride.Graphics.SpriteFont' クラスは、テキストを描くのに便利なクラスです。@'Stride.Graphics.SpriteBatch' クラスとあわせて使用します。
<!--
The @'Stride.Graphics.SpriteFont' class is a convenient way to draw text. It works with the @'Stride.Graphics.SpriteBatch' class.
-->

>[!Note]
>カスタムコードをコンポジションに含めるには、すべてのカスタムコードを[カスタム シーン レンダラー](../graphics-compositor/custom-scene-renderers.md)に記述する必要があります。

<!--
>[!Note]
>You need to put all custom code in a [Custom scene renderer](../graphics-compositor/custom-scene-renderers.md) to include it in the composition.
-->

## スプライトフォントを読み込む
<!--
## Load a spriteFont
-->

フォントアセットをコンパイルした後は、@'Stride.Core.Serialization.Assets.ContentManager' を使って、@'Stride.Graphics.SpriteFont' インスタンスとして読み込むことができます。これは、テキストを表示するためのすべてのオプション（ビットマップ、[カーニング](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0)、行間など）を含んでいます。
<!--
After a font asset is compiled it can be loaded as a @'Stride.Graphics.SpriteFont' instance using the @'Stride.Core.Serialization.Assets.ContentManager'. It contains all the options to display a text (bitmaps, kerning, line spacing etc).
-->

**Code:** スプライトフォントを読み込む
<!--
**Code:** Load a SpriteFont
-->

```cs
var myFont = Content.Load<SpriteFont>("MyFont");
```

## 画面にテキストを書く
<!--
## Write text on screen
-->

フォントを読み込んだら、@'Stride.Graphics.SpriteBatch' で任意のテキストを表示することができます。描画を行うのは、@'Stride.Graphics.SpriteBatch.DrawString' メソッドです。スプライトバッチの詳細については、[スプライト バッチ](spritebatch.md)を参照してください。
<!--
Once the font is loaded, you can display any text with a @'Stride.Graphics.SpriteBatch'. The @'Stride.Graphics.SpriteBatch.DrawString' method performs the draw. For more information about the SpriteBatch, see the [SpriteBatch](spritebatch.md) page.
-->

**コード：** テキストを書く
<!--
**Code:** Write text
-->

```cs
// スプライトバッチを作成
// create the SpriteBatch
var spriteBatch = new SpriteBatch(GraphicsDevice);

// 開始を忘れないこと
// don't forget the begin
spriteBatch.Begin(GraphicsContext);
 
// "Helloworld!" というテキストを、赤字で画面の中央に描画
// draw the text "Helloworld!" in red from the center of the screen
spriteBatch.DrawString(myFont, "Helloworld!", new Vector2(0.5, 0.5), Color.Red);

// 終了を忘れないこと 
// don't forget the end
spriteBatch.End();
```

さまざまなオーバーロードメソッドを使って、テキストの向き、拡大率、深さ、原点などを指定できます。また、テキストに次のような @'Stride.Graphics.SpriteEffects' を適用することもできます。
<!--
The various overloads let you specify the text's orientation, scale, depth, origin, etc. You can also apply some @'Stride.Graphics.SpriteEffects' to the text:
-->

- None（なし）
- FlipHorizontally（水平方向に反転）
- FlipVertically（垂直方向に反転）
- FlipBoth（水平・垂直両方に反転）

<!--
- None
- FlipHorizontally
- FlipVertically
- FlipBoth
-->

**コード：** 高度なテキスト描画
<!--
**Code:** Advanced text drawing
-->

```cs
// "Hello world!" というテキストを、赤字で画面の中央に、上下逆さまに描く
// draw the text "Hello world!" upside-down in red from the center of the screen
spriteBatch.DrawString(myFont, "Hello world!", new Vector2(0.5, 0.5), Color.Red, 0, new Vector2(0, 0), new Vector2(1,1), SpriteEffects.FlipVertically, 0);
```

## 関連項目
<!--
## See also
-->

* [スプライト バッチ](spritebatch.md)

<!--
* [SpriteBatch](spritebatch.md)
-->