# Draw vertices

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

When loading a scene, Xenko automatically handles the draw calls to display the scene throughout the entity system. This page introduces manual drawing.

## Primitives

Xenko provides the following set of built-in primitives:

- Plane
- Cube
- Sphere
- Geosphere
- Cylinder
- Torus
- Teapot

They aren't automatically created along with the @'Xenko.Graphics.GraphicsDevice', so you have to instantiate them. You can do this through the @'Xenko.Graphics.GeometricPrimitives.GeometricPrimitive' class.

**Code:** Creating and using a primitive

```cs
// creation
var myCube = GeometricPrimitive.Cube.New(GraphicsDevice);
var myTorus = GeometricPrimitive.Torus.New(GraphicsDevice);
 
// ...
 
// draw one on screen
myCube.Draw(CommandList, EffectInstance);
```

They have no effect associated with them, so the user has to provide an @'Xenko.Rendering.EffectInstance' when drawing. For information on loading effects, please see [Effects and shaders](../effects-and-shaders/index.md).

## Custom drawing

Outside of built-in primitives, any geometry can be drawn by creating custom vertex buffers. To create a vertex buffer, first a @'Xenko.Graphics.VertexDeclaration' has to be defined. A vertex declaration describes the elements of each vertex and their layout.
For details, see the @'Xenko.Graphics.VertexElement' reference page.

Next, a vertex buffer can be created from an array of vertices. The vertex data type has to match the @'Xenko.Graphics.VertexDeclaration'.

Given vertex buffer and declaration, a @'Xenko.Graphics.VertexBufferBinding' can be created. 

**Code:** Creating a vertex buffer

```cs
// Create a vertex layout with position and texture coordinate
var layout = new VertexDeclaration(VertexElement.Position<Vector3>(), VertexElement.TextureCoordinate<Vector2>()); 
 
// Create the vertex buffer from an array of vertices
var vertices = new VertexPositionTexture[vertexCount];
var vertexBuffer = Buffer.Vertex.New(GraphicsDevice, vertices);
 
// Create a vertex buffer binding
var vertexBufferBinding = new VertexBufferBinding(vertexBuffer, layout, vertexCount);
```

To draw the newly created vertex buffer, it has to be bound to the pipeline. The vertex layout and the @'Xenko.Graphics.PrimitiveType' to draw have to be included in the [pipeline state](pipeline-state.md) object. The buffer itself can be set dynamically.

Afterwards, the vertices are ready to be rendered using @'Xenko.Graphics.CommandList.Draw(System.Int32,System.Int32)'.

**Code:** Binding and drawing vertex buffers

```cs
// Set the pipeline state
pipelineStateDescription.InputElements = vertexBufferBinding.Layout.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
 
// Create and set a PipelineState object
// ...

// Bind the vertex buffer to the pipeline
commandList.SetVertexBuffers(0, vertexBuffer, 0, vertexBufferBinding.Stride);
 
// Draw the vertices
commandList.Draw(vertexCount);
```

It is also possible to draw indexed geometry. To use an index buffer, first create it similarly to the vertex buffer and bind it to the pipeline.
It can then be used for drawing using @'Xenko.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)'.

**Code:** Drawing indexed vertices

```cs
// Create the index buffer
var indices = new short[indexCount];
var is32Bits = false;
var indexBuffer = Buffer.Index.New(GraphicsDevice, indices);
 
// set the VAO
commandList.SetIndexBuffer(indexBuffer, 0, is32Bits);

// Draw indexed vertices
commandList.DrawIndexed(indexBuffer.ElementCount);
```

