# SpriteBatch
# Пакет спрайтов

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

A sprite batch is a collection of sprites (2D textured planes).
Пакет спрайтов — это набор спрайтов (2D текстурированных плоскостей).

>[!Note]
>[!Примечание]
>Remember that you need to put all custom code in a [custom scene renderer](../graphics-compositor/custom-scene-renderers.md) to include it in the composition.
>Помните, что вам нужно поместить весь пользовательский код в [обработчик пользовательской сцены](../graphics-compositor/custom-scene-renderers.md), чтобы включить его в композицию.

## Create a sprite batch
## Создать пакет спрайтов

Stride offers a easy way to deal will batches of sprites through the @'Stride.Graphics.SpriteBatch' class. You can use this class to regroup, update, and display sprites efficiently.
Stride предлагает простой способ обработки пакетов спрайтов через класс @'Stride.Graphics.SpriteBatch'.  Вы можете использовать этот класс для эффективной перегруппировки, обновления и отображения спрайтов.

**Code:** Creating a sprite batch
**Код:** Создание пакета спрайтов

```cs
```CS
var spriteBatch = new SpriteBatch(GraphicsDevice);
var spriteBatch = новый пакет спрайтов (графическое устройство);
```
```

You can specify the size of your batch size. This isn't the maximum number of sprites the SpriteBatch is able to display, but the maximum number of sprites it can store before drawing.
Вы можете указать размер вашего пакета.  Это не максимальное количество спрайтов, которое SpriteBatch может отобразить, а максимальное количество спрайтов, которое он может сохранить перед отрисовкой.

**Code:** Setting the batch size
**Код:** Установка размера пакета

```cs
```CS
var spriteBatch = new SpriteBatch(GraphicsDevice, 2000);
var spriteBatch = new SpriteBatch(GraphicsDevice, 2000);
```
```

You can also set states like the ones discussed on the [Pipeline state](pipeline-state.md) page.
Вы также можете установить состояния, подобные тем, которые обсуждались на странице [Состояние конвейера](pipeline-state.md).

## Draw a sprite batch
## Нарисовать пакет спрайтов

The @'Stride.Graphics.SpriteBatch' class has multiple draw methods to set various parameters. For a list of features, see the @'Stride.Graphics.SpriteBatch' API documentation.
Класс @'Stride.Graphics.SpriteBatch' имеет несколько методов рисования для установки различных параметров.  Список функций см. в документации по API @'Stride.Graphics.SpriteBatch'.

**Code:** Drawing a sprite batch
**Код:** Рисование пакета спрайтов

```cs
```CS
// begin the sprite batch operations
// начинаем пакетные операции со спрайтами
spriteBatch.Begin(GraphicsContext, SpriteSortMode.Immediate);
spriteBatch.Begin(GraphicsContext, SpriteSortMode.Immediate);
 
// draw the sprite immediately
// сразу рисуем спрайт
spriteBatch.Draw(myTexture, new Vector2(10, 20));
spriteBatch.Draw(myTexture, новый Vector2(10, 20));
 
// end the sprite batch operations
// завершаем пакетные операции со спрайтами
spriteBatch.End();
spriteBatch.Конец();
```
```

There are five modes to draw a sprite batch. They are enumerated in the @'Stride.Graphics.SpriteSortMode' enum:
Существует пять режимов рисования пакета спрайтов.  Они перечислены в перечислении @'Stride.Graphics.SpriteSortMode':

- Deferred (default mode): the sprites are drawn at the same time at the end to reduce the drawcall overhead
- Отложенный (режим по умолчанию): спрайты отрисовываются одновременно в конце, чтобы уменьшить накладные расходы на вызовы отрисовки.
- Immediate: the sprites are draw after each each @'Stride.Graphics.SpriteBatch.Draw' call
- Немедленно: спрайты рисуются после каждого вызова @'Stride.Graphics.SpriteBatch.Draw'
- Texture: Deferred mode but sprites are sorted based on their texture to reduce effect parameters update
- Текстура: отложенный режим, но спрайты сортируются на основе их текстуры, чтобы уменьшить обновление параметров эффекта.
- BackToFront: Deferred mode with a sort based on the z-order of the sprites
- BackToFront: отложенный режим с сортировкой по z-порядку спрайтов.
- FrontToBack: Deferred mode with a sort based on the z-order of the sprites
- FrontToBack: отложенный режим с сортировкой по z-порядку спрайтов.

To set the mode, specify it in the @'Stride.Graphics.SpriteBatch.Begin' method.
Чтобы задать режим, укажите его в методе @'Stride.Graphics.SpriteBatch.Begin'.

**Code:** Deferred drawing of the sprite batch
**Код:** Отложенное рисование пакета спрайтов

```cs
```CS
// begin the sprite batch operations
// начинаем пакетные операции со спрайтами
spriteBatch.Begin(GraphicsContext); // same as spriteBatch.Begin(GraphicsContext, SpriteSortMode.Deferred);
spriteBatch.Begin(GraphicsContext);  // то же, что и spriteBatch.Begin(GraphicsContext, SpriteSortMode.Deferred);

// store the modification of the sprite
// сохраняем модификацию спрайта
spriteBatch.Draw(myTexture, new Vector2(10, 20));
spriteBatch.Draw(myTexture, новый Vector2(10, 20));

// end the sprite batch operations, draw all the sprites
// завершаем пакетные операции со спрайтами, рисуем все спрайты
spriteBatch.End();
spriteBatch.Конец();
```
```

You can set several parameters on the sprite. For example:
Вы можете установить несколько параметров спрайта.  Например:

- position
- должность
- rotation
- вращение
- scale
- шкала
- depth
- глубина
- center offset
- смещение центра
- color tint
- цветовой оттенок

For a full list, see the @'Stride.Graphics.SpriteBatch' API documentation, especially the **Draw** methods.
Полный список см. в документации по API @'Stride.Graphics.SpriteBatch', особенно методы **Draw**.

**Code:** More complex sprite batch drawing
**Код:** Более сложный пакетный рисунок спрайтов.

```cs
```CS
// begin the sprite batch operations
// начинаем пакетные операции со спрайтами
spriteBatch.Begin(GraphicsContext);
spriteBatch.Begin(GraphicsContext);
const int gridCount = 10;
const int gridCount = 10;
var textureOffset = new Vector2((float)graphicsDevice.BackBuffer.Width/gridCount, (float)graphicsDevice.BackBuffer.Height/gridCount);
var textureOffset = новый Vector2((float)graphicsDevice.BackBuffer.Width/gridCount, (float)graphicsDevice.BackBuffer.Height/gridCount);
var textureOrigin = new Vector2(myTexture.Width/2.0f, myTexture.Height/2.0f);
var textureOrigin = новый Vector2(myTexture.Width/2.0f, myTexture.Height/2.0f);

// draw 100 sprites on a 10x10 grid with a rotation of 1.2 rad and a scale of 0.5 for each of them
// рисуем 100 спрайтов на сетке 10x10 с поворотом 1,2 рад и масштабом 0,5 для каждого из них
for (int y = 0; y < gridCount; y++)
for (int y = 0; y < gridCount; y++)
{
{
    for (int x = 0; x < gridCount; x++)
for (int x = 0; x < gridCount; x++)
    {
{
        spriteBatch.Draw(UVTexture, new Vector2(x * textureOffset.X + textureOffset.X / 2.0f, y * textureOffset.Y + textureOffset.Y / 2.0f), Color.White, 1.2f, textureOrigin, 0.5f);
spriteBatch.Draw(UVTexture, новый Vector2(x * смещение текстуры.X + смещение текстуры.X/2.0f, y * смещение текстуры.Y + смещение текстуры.Y/2.0f), Color.White, 1.2f, textureOrigin, 0.5f);
    }
}
}
}
 
// end the sprite batch operations, draw all the sprites
// завершаем пакетные операции со спрайтами, рисуем все спрайты
spriteBatch.End();
spriteBatch.Конец();
```
```

## See also
## Смотрите также

* [SpriteFont](spritefont.md)
* [SpriteFont](spritefont.md)
