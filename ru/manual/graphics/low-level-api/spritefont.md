# SpriteFont
# СпрайтШрифт

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The @'Stride.Graphics.SpriteFont' class is a convenient way to draw text. It works with the @'Stride.Graphics.SpriteBatch' class.
Класс @'Stride.Graphics.SpriteFont' — это удобный способ рисования текста.  Он работает с классом @'Stride.Graphics.SpriteBatch'.

>[!Note]
>[!Примечание]
>You need to put all custom code in a [Custom scene renderer](../graphics-compositor/custom-scene-renderers.md) to include it in the composition.
> Вам нужно поместить весь пользовательский код в [Custom scene renderer](../graphics-compositor/custom-scene-renderers.md), чтобы включить его в композицию.

## Load a spriteFont
## Загрузить шрифт спрайта

After a font asset is compiled it can be loaded as a @'Stride.Graphics.SpriteFont' instance using the @'Stride.Core.Serialization.Assets.ContentManager'. It contains all the options to display a text (bitmaps, kerning, line spacing etc).
После компиляции ресурса шрифта его можно загрузить как экземпляр @'Stride.Graphics.SpriteFont' с помощью @'Stride.Core.Serialization.Assets.ContentManager'.  Он содержит все параметры для отображения текста (растровые изображения, кернинг, межстрочный интервал и т. д.).

**Code:** Load a SpriteFont
**Код:** Загрузить SpriteFont

```cs
```CS
var myFont = Content.Load<SpriteFont>("MyFont");
var myFont = Content.Load<SpriteFont>(
```
```

## Write text on screen
## Написать текст на экране

Once the font is loaded, you can display any text with a @'Stride.Graphics.SpriteBatch'. The @'Stride.Graphics.SpriteBatch.DrawString' method performs the draw. For more information about the SpriteBatch, see the [SpriteBatch](spritebatch.md) page.
После загрузки шрифта вы можете отобразить любой текст с помощью @'Stride.Graphics.SpriteBatch'.  Метод @'Stride.Graphics.SpriteBatch.DrawString' выполняет отрисовку.  Дополнительные сведения о SpriteBatch см. на странице [SpriteBatch](spritebatch.md).

**Code:** Write text
**Код:** Написать текст

```cs
```CS
// create the SpriteBatch
// создаем SpriteBatch
var spriteBatch = new SpriteBatch(GraphicsDevice);
var spriteBatch = новый пакет спрайтов (графическое устройство);

// don't forget the begin
// не забудьте начало
spriteBatch.Begin(GraphicsContext);
spriteBatch.Begin(GraphicsContext);
 
// draw the text "Helloworld!" in red from the center of the screen
// рисуем текст  красным от центра экрана
spriteBatch.DrawString(myFont, "Helloworld!", new Vector2(0.5, 0.5), Color.Red);
spriteBatch.DrawString(myFont, 
 
// don't forget the end
// не забываем конец
spriteBatch.End();
spriteBatch.Конец();
```
```

The various overloads let you specify the text's orientation, scale, depth, origin, etc. You can also apply some @'Stride.Graphics.SpriteEffects' to the text:
Различные перегрузки позволяют указать ориентацию текста, масштаб, глубину, происхождение и т. д. Вы также можете применить к тексту некоторые @'Stride.Graphics.SpriteEffects':

- None
- Никто
- FlipHorizontally
- Отразить по горизонтали
- FlipVertically
- Отразить по вертикали
- FlipBoth
- ПеревернутьОба

**Code:** Advanced text drawing
**Код:** Расширенное рисование текста

```cs
```CS
// draw the text "Hello world!" upside-down in red from the center of the screen
// рисуем текст  вверх ногами красным от центра экрана
spriteBatch.DrawString(myFont, "Hello world!", new Vector2(0.5, 0.5), Color.Red, 0, new Vector2(0, 0), new Vector2(1,1), SpriteEffects.FlipVertically, 0);
spriteBatch.DrawString(myFont, 
```
```

## See also
## Смотрите также

* [SpriteBatch](spritebatch.md)
* [SpriteBatch](spritebatch.md)
