# Low-level API
# Низкоуровневый API

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The @'Stride.Graphics.GraphicsDevice' class is the central class for displaying your game. It's used to create resources and present images on the screen. You can access it as a member of the @'Stride.Engine.Game' and @'Stride.Engine.ScriptComponent' classes.
Класс @'Stride.Graphics.GraphicsDevice' — это центральный класс для отображения вашей игры.  Он используется для создания ресурсов и представления изображений на экране.  Вы можете получить к нему доступ как к члену классов @'Stride.Engine.Game' и @'Stride.Engine.ScriptComponent'.

Actions such as drawing, setting graphics states and using resources are recorded using @'Stride.Graphics.CommandList' objects for later execution by the device.
Такие действия, как рисование, установка графических состояний и использование ресурсов, записываются с использованием объектов @'Stride.Graphics.CommandList' для последующего выполнения устройством.

Many command lists can be filled at the same time (eg one per thread). A default command list is available as member of the @'Stride.Games.GameBase.GraphicsContext' of your @'Stride.Engine.Game'.
Одновременно можно заполнить множество списков команд (например, по одному на поток).  Список команд по умолчанию доступен как член @'Stride.Games.GameBase.GraphicsContext' вашей @'Stride.Engine.Game'.

In methods, these objects are typically provided through contexts such as @'Stride.Rendering.RenderContext' and @'Stride.Rendering.RenderDrawContext'.
В методах эти объекты обычно предоставляются через такие контексты, как @'Stride.Rendering.RenderContext' и @'Stride.Rendering.RenderDrawContext'.

Performing any drawing requires multiple steps, including:
Выполнение любого рисунка требует нескольких шагов, в том числе:

* setting textures as [render textures](textures-and-render-textures.md), clearing them, and setting viewports and scissors
* установка текстур как [текстуры рендеринга](textures-and-render-textures.md), их очистка и настройка окон просмотра и ножниц
* setting up the graphics [pipeline state](pipeline-state.md), including input description, shaders, depth-stencil, blending, rasterizer, etc
* настройка графики [состояние конвейера](pipeline-state.md), включая входное описание, шейдеры, трафарет глубины, смешивание, растеризатор и т. д.
* binding [resources](resources.md), such as constant buffers and textures
* привязка [ресурсов](resources.md), таких как константные буферы и текстуры
* [drawing vertices](draw-vertices.md) using built-in primitives or custom vertex buffers
* [отрисовка вершин](draw-vertices.md) с использованием встроенных примитивов или пользовательских буферов вершин

## In this section
## В этой секции

* [Draw vertices](draw-vertices.md)
* [Нарисовать вершины](draw-vertices.md)
* [Pipeline state](pipeline-state.md)
* [Состояние конвейера](pipeline-state.md)
* [Resources](resources.md)
* [Ресурсы](resources.md)
* [SpriteBatch](spritebatch.md)
* [SpriteBatch](spritebatch.md)
* [SpriteFont](spritefont.md)
* [SpriteFont](spritefont.md)
* [Textures and render textures](textures-and-render-textures.md)
* [Текстуры и текстуры рендеринга](textures-and-render-textures.md)
