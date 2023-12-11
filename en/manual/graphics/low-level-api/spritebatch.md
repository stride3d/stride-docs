# SpriteBatch

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

A sprite batch is a collection of sprites (2D textured planes).

>[!Note]
>Remember that you need to put all custom code in a [custom scene renderer](../graphics-compositor/custom-scene-renderers.md) to include it in the composition.

## Create a sprite batch

Stride offers a easy way to deal with batches of sprites through the @'Stride.Graphics.SpriteBatch' class. You can use this class to regroup, update, and display sprites efficiently.

**Code:** Creating a sprite batch

```cs
var spriteBatch = new SpriteBatch(GraphicsDevice);
```

You can specify the size of your batch size. This isn't the maximum number of sprites the SpriteBatch is able to display, but the maximum number of sprites it can store before drawing.

**Code:** Setting the batch size

```cs
var spriteBatch = new SpriteBatch(GraphicsDevice, 2000);
```

You can also set states like the ones discussed on the [Pipeline state](pipeline-state.md) page.

## Draw a sprite batch

The @'Stride.Graphics.SpriteBatch' class has multiple draw methods to set various parameters. For a list of features, see the @'Stride.Graphics.SpriteBatch' API documentation.

**Code:** Drawing a sprite batch

```cs
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext, SpriteSortMode.Immediate);
 
// draw the sprite immediately
spriteBatch.Draw(myTexture, new Vector2(10, 20));
 
// end the sprite batch operations
spriteBatch.End();
```

There are five modes to draw a sprite batch. They are enumerated in the @'Stride.Graphics.SpriteSortMode' enum:

- Deferred (default mode): the sprites are drawn at the same time at the end to reduce the drawcall overhead
- Immediate: the sprites are draw after each each @'Stride.Graphics.SpriteBatch.Draw' call
- Texture: Deferred mode but sprites are sorted based on their texture to reduce effect parameters update
- BackToFront: Deferred mode with a sort based on the z-order of the sprites
- FrontToBack: Deferred mode with a sort based on the z-order of the sprites

To set the mode, specify it in the @'Stride.Graphics.SpriteBatch.Begin' method.

**Code:** Deferred drawing of the sprite batch

```cs
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext); // same as spriteBatch.Begin(GraphicsContext, SpriteSortMode.Deferred);

// store the modification of the sprite
spriteBatch.Draw(myTexture, new Vector2(10, 20));

// end the sprite batch operations, draw all the sprites
spriteBatch.End();
```

You can set several parameters on the sprite. For example:

- position
- rotation
- scale
- depth
- center offset
- color tint

For a full list, see the @'Stride.Graphics.SpriteBatch' API documentation, especially the **Draw** methods.

**Code:** More complex sprite batch drawing

```cs
// begin the sprite batch operations
spriteBatch.Begin(GraphicsContext);
const int gridCount = 10;
var textureOffset = new Vector2((float)graphicsDevice.BackBuffer.Width/gridCount, (float)graphicsDevice.BackBuffer.Height/gridCount);
var textureOrigin = new Vector2(myTexture.Width/2.0f, myTexture.Height/2.0f);

// draw 100 sprites on a 10x10 grid with a rotation of 1.2 rad and a scale of 0.5 for each of them
for (int y = 0; y < gridCount; y++)
{
    for (int x = 0; x < gridCount; x++)
    {
        spriteBatch.Draw(UVTexture, new Vector2(x * textureOffset.X + textureOffset.X / 2.0f, y * textureOffset.Y + textureOffset.Y / 2.0f), Color.White, 1.2f, textureOrigin, 0.5f);
    }
}
 
// end the sprite batch operations, draw all the sprites
spriteBatch.End();
```

## See also

* [SpriteFont](spritefont.md)
