# Textures and render textures
# Текстуры и рендер текстуры

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Stride uses the @'Stride.Graphics.Texture' class to interact with texture objects in code.
Stride использует класс @'Stride.Graphics.Texture' для взаимодействия с объектами текстуры в коде.

For more information about rendering to a texture, see [Render textures](../graphics-compositor/render-textures.md).
Дополнительные сведения о рендеринге в текстуру см. в разделе [Визуализировать текстуры](../graphics-compositor/render-textures.md).

## Load a texture
## Загрузить текстуру

To load a texture from an asset in Stride, call this function:
Чтобы загрузить текстуру из ассета в Stride, вызовите эту функцию:

```cs
```CS
// loads the texture called duck.dds (or .png etc.)
// загружает текстуру с именем duck.dds (или .png и т. д.)
var myTexture = Content.Load<Texture>("duck");
var myTexture = Content.Load<Texture>(
```
```

This automatically generates a texture object with all its fields correctly filled.
Это автоматически генерирует объект текстуры со всеми правильно заполненными полями.

## Create a texture
## Создать текстуру

You can also create textures without any assets (eg to be used as render target). To do this, call the constructor of the @'Stride.Graphics.Texture' class. See the @'Stride.Graphics.Texture' class reference to get the full list of available options and parameters. Some texture formats might not be available on all platforms.
Вы также можете создавать текстуры без каких-либо ресурсов (например, для использования в качестве цели рендеринга).  Для этого вызовите конструктор класса @'Stride.Graphics.Texture'.  См. справочник по классу @'Stride.Graphics.Texture', чтобы получить полный список доступных опций и параметров.  Некоторые форматы текстур могут быть доступны не на всех платформах.

### Code: Create a texture
### Код: Создание текстуры

```cs
```CS
var myTexture = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource);
var myTexture = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource);
```
```

## Render textures
## Рендеринг текстур

### Create a render target
### Создание цели рендеринга

The @'Stride.Graphics.GraphicsPresenter' class always provides a default render target and a depth buffer. They are accessible through the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' properties. The presenter is exposed by the @'Stride.Graphics.GraphicsDevice.Presenter' property of the @'Stride.Graphics.GraphicsDevice'. However, you might want to use your own buffer to perform off-screen rendering or post-processes. As a result, Stride offers a simple way to create textures that can act as render textures and a depth buffers.
Класс @'Stride.Graphics.GraphicsPresenter' всегда предоставляет цель рендеринга по умолчанию и буфер глубины.  Они доступны через свойства @'Stride.Graphics.GraphicsPresenter.BackBuffer' и @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer'.  Ведущий предоставляется свойством @'Stride.Graphics.GraphicsDevice.Presenter' объекта @'Stride.Graphics.GraphicsDevice'.  Однако вы можете захотеть использовать свой собственный буфер для выполнения внеэкранного рендеринга или постобработки.  В результате Stride предлагает простой способ создания текстур, которые могут действовать как текстуры рендеринга и буферы глубины.

### Code: Create a custom render target and depth buffer
### Код: Создайте пользовательскую цель рендеринга и буфер глубины

```cs
```CS
// render target
// отображаем цель
var myRenderTarget = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource | TextureFlags.RenderTarget);
var myRenderTarget = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.R8G8B8A8_UNorm, TextureFlags.ShaderResource | TextureFlags.RenderTarget);
 
// writable depth buffer
// перезаписываемый буфер глубины
var myDepthBuffer = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.D16_UNorm, TextureFlags.DepthStencil);
var myDepthBuffer = Texture.New2D(GraphicsDevice, 512, 512, false, PixelFormat.D16_UNorm, TextureFlags.DepthStencil);
```
```

>[!Note]
>[!Примечание]
>Don't forget the flag @'Stride.Graphics.TextureFlags.RenderTarget' to enable the render target behavior.
> Не забудьте поставить флаг @'Stride.Graphics.TextureFlags.RenderTarget', чтобы включить поведение цели рендеринга.
>
>
>Make sure the PixelFormat is correct, especially for the depth buffer. Be careful of the available formats on the target platform.
> Убедитесь, что PixelFormat правильный, особенно для буфера глубины.  Будьте осторожны с доступными форматами на целевой платформе.

### Use a render target
### Использовать цель рендеринга

Once these buffers are created, you can can easily set them as current render textures.
После создания этих буферов их можно легко установить в качестве текущих текстур рендеринга.

### Code: Use a render target
### Код: Используйте цель рендеринга

```cs
```CS
// settings the render textures
// настройка текстур рендера
CommandList.SetRenderTargetAndViewport(myDepthBuffer, myRenderTarget);
CommandList.SetRenderTargetAndViewport(myDepthBuffer, myRenderTarget);
 
// setting the default render target
// установка цели рендеринга по умолчанию
CommandList.SetRenderTargetAndViewport(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);
CommandList.SetRenderTargetAndViewport(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);
```
```

>[!Note]
>[!Примечание]
>Make sure both the render target and the depth buffer have the same size. Otherwise, the depth buffer isn't used.
>Убедитесь, что цель рендеринга и буфер глубины имеют одинаковый размер.  В противном случае буфер глубины не используется.

You can set multiple render textures at the same time. See the overloads of @'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[])' and @'Stride.Graphics.CommandList.SetRenderTargetsAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture[])' method.
Вы можете установить несколько текстур рендеринга одновременно.  См. перегрузки @'Stride.Graphics.CommandList.SetRenderTargets(Stride.Graphics.Texture,Stride.Graphics.Texture[])' и @'Stride.Graphics.CommandList.SetRenderTargetsAndViewport(Stride.Graphics.Texture,Stride.Graphics.  Текстура[])».

>[!Note]
>[!Примечание]
>Only the @'Stride.Graphics.GraphicsPresenter.BackBuffer' is displayed on screen, so you need to render it to display something.
>На экране отображается только @'Stride.Graphics.GraphicsPresenter.BackBuffer', поэтому вам нужно отобразить его, чтобы отобразить что-то.

### Clear a render target
### Очистить цель рендеринга

To clear render textures, call the @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' and @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Graphics.DepthStencilClearOptions,System.Single,System.Byte)' methods.
Чтобы очистить текстуры рендеринга, вызовите @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride.Core.Mathematics.Color4)' и @'Stride.Graphics.CommandList.Clear(Stride.Graphics.Texture,Stride  .Graphics.DepthStencilClearOptions,System.Single,System.Byte).

### Code: Clear the targets
### Код: очистить цели

```cs
```CS
CommandList.Clear(GraphicsDevice.Presenter.BackBuffer, Color.Black);
CommandList.Clear(GraphicsDevice.Presenter.BackBuffer, Color.Black);
CommandList.Clear(GraphicsDevice.Presenter.DepthStencilBuffer, DepthStencilClearOptions.DepthBuffer); // only clear the depth buffer
CommandList.Clear(GraphicsDevice.Presenter.DepthStencilBuffer, DepthStencilClearOptions.DepthBuffer);  // очистить только буфер глубины
```
```

>[!Note]
>[!Примечание]
>Don't forget to clear the @'Stride.Graphics.GraphicsPresenter.BackBuffer' and the @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' each frame. If you don't, you might get unexpected behavior depending on the device. If you want to keep the contents of a frame, use an intermediate render target.
>Не забывайте очищать @'Stride.Graphics.GraphicsPresenter.BackBuffer' и @'Stride.Graphics.GraphicsPresenter.DepthStencilBuffer' в каждом кадре.  Если вы этого не сделаете, вы можете получить неожиданное поведение в зависимости от устройства.  Если вы хотите сохранить содержимое кадра, используйте промежуточную цель рендеринга.

## Viewport
## Область просмотра

@'Stride.Graphics.CommandList.SetRenderTargetAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture)' adjusts the current @'Stride.Graphics.Viewport' to the full size of the render target.
@'Stride.Graphics.CommandList.SetRenderTargetAndViewport(Stride.Graphics.Texture,Stride.Graphics.Texture)' настраивает текущий @'Stride.Graphics.Viewport' на полный размер цели рендеринга.

If you only want to render to a subset of the texture, set the render target and viewport separately using @'Stride.Graphics.CommandList.SetRenderTarget(Stride.Graphics.Texture,Stride.Graphics.Texture)' and @'Stride.Graphics.CommandList.SetViewport(Stride.Graphics.Viewport)'.
Если вы хотите отображать только подмножество текстуры, установите цель рендеринга и область просмотра отдельно, используя @'Stride.Graphics.CommandList.SetRenderTarget(Stride.Graphics.Texture,Stride.Graphics.Texture)' и @'Stride.Graphics.  .CommandList.SetViewport(Stride.Graphics.Viewport)'.

You can bind multiple viewports using @'Stride.Graphics.CommandList.SetViewports(Stride.Graphics.Viewport[])' and @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[])' overloads for use with a geometry shader.
Вы можете связать несколько видовых экранов, используя @'Stride.Graphics.CommandList.SetViewports(Stride.Graphics.Viewport[])' и @'Stride.Graphics.CommandList.SetViewports(System.Int32,Stride.Graphics.Viewport[])'.  для использования с геометрическим шейдером.

### Code: Set the viewports
### Код: Установите области просмотра

```cs
```CS
// example of a full HD buffer
// пример буфера Full HD
CommandList.SetRenderTarget(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer); // no viewport set
CommandList.SetRenderTarget(GraphicsDevice.Presenter.DepthStencilBuffer, GraphicsDevice.Presenter.BackBuffer);  // область просмотра не задана
 
// example of setting the viewport to have a 10-pixel border around the image in a full HD buffer (1920x1080)
// пример настройки области просмотра для 10-пиксельной рамки вокруг изображения в буфере Full HD (1920x1080)
var viewport = new Viewport(10, 10, 1900, 1060);
var viewport = новое окно просмотра (10, 10, 1900, 1060);
CommandList.SetViewport(viewport);
CommandList.SetViewport(окно просмотра);
```
```

## Scissor
## ножницы

The @'Stride.Graphics.CommandList.SetScissorRectangle(Stride.Core.Mathematics.Rectangle)' and @'Stride.Graphics.CommandList.SetScissorRectangles(Stride.Core.Mathematics.Rectangle[])' methods set the scissors. Unlike the viewport, you need to provide the coordinates of the location of the vertices defining the scissor instead of its size.
Методы @'Stride.Graphics.CommandList.SetScissorRectangle(Stride.Core.Mathematics.Rectangle)' и @'Stride.Graphics.CommandList.SetScissorRectangles(Stride.Core.Mathematics.Rectangle[])' устанавливают ножницы.  В отличие от вьюпорта, вам нужно предоставить координаты расположения вершин, определяющих ножницы, вместо их размера.

### Code: Set the scissor
### Код: Установите ножницы

```cs
```CS
// example of setting the scissor to crop the image by 10 pixel around it in a full hd buffer (1920x1080)
// пример установки ножниц для обрезки изображения на 10 пикселей вокруг него в буфере full hd (1920x1080)
var rectangle = new Rectangle(10, 10, 1910, 1070);
var прямоугольник = новый прямоугольник (10, 10, 1910, 1070);
CommandList.SetScissorRectangles(rectangle);
CommandList.SetScissorRectangles(прямоугольник);
 
var rectangles = new[] { new Rectangle(10, 10, 1900, 1060), new Rectangle(0, 0, 256, 256) };
var прямоугольники = новый [] { новый прямоугольник (10, 10, 1900, 1060), новый прямоугольник (0, 0, 256, 256) };
CommandList.SetScissorRectangles(rectangles);
CommandList.SetScissorRectangles(прямоугольники);
```
```

## See also
## Смотрите также

* [Render textures](../graphics-compositor/render-textures.md)
* [Рендеринг текстур](../graphics-compositor/render-textures.md)
