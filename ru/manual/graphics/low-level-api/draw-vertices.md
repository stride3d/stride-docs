# Draw vertices
# Рисуем вершины

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

When loading a scene, Stride automatically handles the draw calls to display the scene throughout the entity system. This page introduces manual drawing.
При загрузке сцены Stride автоматически обрабатывает вызовы отрисовки для отображения сцены во всей системе сущностей.  На этой странице представлено ручное рисование.

## Primitives
## Примитивы

Stride provides the following set of built-in primitives:
Stride предоставляет следующий набор встроенных примитивов:

- Plane
- Самолет
- Cube
- Куб
- Sphere
- Сфера
- Geosphere
- Геосфера
- Cylinder
- Цилиндр
- Torus
- Тор
- Teapot
- Чайник

They aren't automatically created along with the @'Stride.Graphics.GraphicsDevice', so you have to instantiate them. You can do this through the @'Stride.Graphics.GeometricPrimitives.GeometricPrimitive' class.
Они не создаются автоматически вместе с @'Stride.Graphics.GraphicsDevice', поэтому их необходимо создавать.  Вы можете сделать это через класс @'Stride.Graphics.GeometricPrimitives.GeometricPrimitive'.

**Code:** Creating and using a primitive
**Код:** Создание и использование примитива

```cs
```CS
// creation
// творчество
var myCube = GeometricPrimitive.Cube.New(GraphicsDevice);
var myCube = GeometricPrimitive.Cube.New(GraphicsDevice);
var myTorus = GeometricPrimitive.Torus.New(GraphicsDevice);
var myTorus = GeometricPrimitive.Torus.New(GraphicsDevice);
 
// ...
// ...
 
// draw one on screen
// рисуем один на экране
myCube.Draw(CommandList, EffectInstance);
myCube.Draw(CommandList, EffectInstance);
```
```

They have no effect associated with them, so the user has to provide an @'Stride.Rendering.EffectInstance' when drawing. For information on loading effects, please see [Effects and shaders](../effects-and-shaders/index.md).
Они не имеют никакого связанного с ними эффекта, поэтому пользователь должен указать @'Stride.Rendering.EffectInstance' при рисовании.  Информацию о загрузке эффектов см. в разделе [Эффекты и шейдеры](../effects-and-shaders/index.md).

## Custom drawing
## Пользовательский рисунок

Outside of built-in primitives, any geometry can be drawn by creating custom vertex buffers. To create a vertex buffer, first a @'Stride.Graphics.VertexDeclaration' has to be defined. A vertex declaration describes the elements of each vertex and their layout.
Вне встроенных примитивов любую геометрию можно нарисовать, создав пользовательские буферы вершин.  Чтобы создать буфер вершин, сначала необходимо определить @'Stride.Graphics.VertexDeclaration'.  Объявление вершины описывает элементы каждой вершины и их расположение.
For details, see the @'Stride.Graphics.VertexElement' reference page.
Подробнее см. на справочной странице @'Stride.Graphics.VertexElement'.

Next, a vertex buffer can be created from an array of vertices. The vertex data type has to match the @'Stride.Graphics.VertexDeclaration'.
Затем из массива вершин можно создать буфер вершин.  Тип данных вершины должен соответствовать @'Stride.Graphics.VertexDeclaration'.

Given vertex buffer and declaration, a @'Stride.Graphics.VertexBufferBinding' can be created. 
Учитывая буфер вершин и объявление, можно создать @'Stride.Graphics.VertexBufferBinding'.

**Code:** Creating a vertex buffer
**Код:** Создание буфера вершин

```cs
```CS
// Create a vertex layout with position and texture coordinate
// Создаем топологию вершин с позицией и координатами текстуры
var layout = new VertexDeclaration(VertexElement.Position<Vector3>(), VertexElement.TextureCoordinate<Vector2>()); 
var layout = new VertexDeclaration(VertexElement.Position<Vector3>(), VertexElement.TextureCoordinate<Vector2>());
 
// Create the vertex buffer from an array of vertices
// Создаем буфер вершин из массива вершин
var vertices = new VertexPositionTexture[vertexCount];
var vertices = new VertexPositionTexture[vertexCount];
var vertexBuffer = Buffer.Vertex.New(GraphicsDevice, vertices);
var vertexBuffer = Buffer.Vertex.New(GraphicsDevice, вершины);
 
// Create a vertex buffer binding
// Создаем привязку буфера вершин
var vertexBufferBinding = new VertexBufferBinding(vertexBuffer, layout, vertexCount);
var vertexBufferBinding = new VertexBufferBinding(vertexBuffer, layout, vertexCount);
```
```

To draw the newly created vertex buffer, it has to be bound to the pipeline. The vertex layout and the @'Stride.Graphics.PrimitiveType' to draw have to be included in the [pipeline state](pipeline-state.md) object. The buffer itself can be set dynamically.
Чтобы отрисовать только что созданный буфер вершин, его необходимо привязать к конвейеру.  Макет вершин и @'Stride.Graphics.PrimitiveType' для рисования должны быть включены в объект [состояние конвейера](pipeline-state.md).  Сам буфер может быть установлен динамически.

Afterwards, the vertices are ready to be rendered using @'Stride.Graphics.CommandList.Draw(System.Int32,System.Int32)'.
После этого вершины готовы к рендерингу с помощью @'Stride.Graphics.CommandList.Draw(System.Int32,System.Int32)'.

**Code:** Binding and drawing vertex buffers
**Код:** Привязка и отрисовка буферов вершин

```cs
```CS
// Set the pipeline state
// Установить состояние конвейера
pipelineStateDescription.InputElements = vertexBufferBinding.Layout.CreateInputElements();
pipeStateDescription.InputElements = vertexBufferBinding.Layout.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
PipeStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
 
// Create and set a PipelineState object
// Создаем и устанавливаем объект PipelineState
// ...
// ...

// Bind the vertex buffer to the pipeline
// Привязываем буфер вершин к конвейеру
commandList.SetVertexBuffers(0, vertexBuffer, 0, vertexBufferBinding.Stride);
commandList.SetVertexBuffers(0, vertexBuffer, 0, vertexBufferBinding.Stride);
 
// Draw the vertices
// Рисуем вершины
commandList.Draw(vertexCount);
commandList.Draw (счетчик вершин);
```
```

It is also possible to draw indexed geometry. To use an index buffer, first create it similarly to the vertex buffer and bind it to the pipeline.
Также возможно рисовать индексированную геометрию.  Чтобы использовать индексный буфер, сначала создайте его аналогично буферу вершин и привяжите к конвейеру.
It can then be used for drawing using @'Stride.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)'.
Затем его можно использовать для рисования с помощью @'Stride.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)'.

**Code:** Drawing indexed vertices
**Код:** Рисование индексированных вершин

```cs
```CS
// Create the index buffer
// Создаем индексный буфер
var indices = new short[indexCount];
var indexes = новый шорт[indexCount];
var is32Bits = false;
вар is32Bits = ложь;
var indexBuffer = Buffer.Index.New(GraphicsDevice, indices);
var indexBuffer = Buffer.Index.New(GraphicsDevice, индексы);
 
// set the VAO
// устанавливаем VAO
commandList.SetIndexBuffer(indexBuffer, 0, is32Bits);
commandList.SetIndexBuffer (indexBuffer, 0, is32Bits);

// Draw indexed vertices
// Рисуем индексированные вершины
commandList.DrawIndexed(indexBuffer.ElementCount);
commandList.DrawIndexed(indexBuffer.ElementCount);
```
```

