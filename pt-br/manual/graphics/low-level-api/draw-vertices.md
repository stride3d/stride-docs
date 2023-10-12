# Desenho vértices

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Ao carregar uma cena, o Stride lida automaticamente com as chamadas do sorteio para exibir a cena em todo o sistema de entidade. Esta página apresenta desenho manual.

## Primitivos

Stride fornece o seguinte conjunto de primitivas embutidas:

- Avião
- Cubo
- Esfera
- Geosfera
- Cilindro
- Torus
- Teapot

Eles não são criados automaticamente junto com o @'Stride.Graphics.GraphicsDevice', então você tem que instanciá-los. Você pode fazer isso através da classe @'Stride.Graphics.GeometricPrimitives.GeometricPrimitive'.

** Código:** Criando e usando um primitivo

```cs
// criação
var myCube = GeometricPrimitive.Cube.New (GraphicsDevice);
var myTorus = GeometricPrimitive.Torus.New (GraphicsDevice);
 
//...
 
// desenhar um na tela
myCube.Draw (CommandList, EffectInstance);
```

Eles não têm nenhum efeito associado com eles, então o usuário tem que fornecer um @'Stride. Renderização. EfeitoInstância' ao desenhar. Para obter informações sobre efeitos de carregamento, consulte [Efeitos e shaders](../effects-and-shaders/index.md).

## Desenho personalizado

Fora de primitivas embutidas, qualquer geometria pode ser desenhada criando buffers de vértice personalizados. Para criar um buffer de vértice, primeiro um @'Stride.Graphics.VertexDeclaration' tem de ser definido. Uma declaração de vértice descreve os elementos de cada vértice e seu layout.
Para obter detalhes, consulte a página de referência @'Stride.Graphics.VertexElement'.

Em seguida, um buffer de vértice pode ser criado a partir de uma variedade de vértices. O tipo de dados do vértice tem de corresponder ao @'Stride.Graphics.VertexDeclaration'.

Dado tampão de vértice e declaração, um @'Stride.Graphics.VertexBufferBinding' pode ser criado.

** Código:** Criando um amortecedor de vértice

```cs
// Criar um layout de vértice com coordenada de posição e textura
var layout = novo VertexDeclaration (VertexElement.Position<Vector3>(), VertexElement.TextureCoordinate<Vector2>()); 
 
// Criar o tampão de vértice de uma variedade de vértices
vértices var = novo VertexPositionTexture[vertexCount];
var vertexBuffer = Buffer.Vertex.New (GraphicsDevice, vértices);
 
// Criar uma ligação de amortecedor de vértice
var vertexBufferBinding = novo VertexBufferBinding (vertexBuffer, layout, vérticeCount);
```

Para desenhar o tampão de vértice recém-criado, tem de ser ligado ao pipeline. O layout do vértice e o @'Stride.Graphics.PrimitiveType' para desenhar têm de ser incluídos no objeto [pipeline state](pipeline-state.md). O próprio buffer pode ser definido dinamicamente.

Depois, os vértices estão prontos para serem renderizados usando @'Stride.Graphics.CommandList.Draw(System.Int32,System.Int32)'.

** Código:** Encerramento e desenho de amortecedores de vértice

```cs
// Definir o estado do pipeline
pipelineStateDescription.InputElements = vérticeBufferBinding.Layout.CreateInputElements();
pipeStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
 
// Criar e definir um objeto PipelineState
//...

// Ligar o tampão de vértice para o pipeline
commandList.SetVertexBuffers(0, vérticeBuffer, 0, vérticeBufferBinding.Stride);
 
// Desenhe os vértices
commandList.Draw (vertexCount);
```

Também é possível desenhar geometria indexada. Para usar um buffer de índice, primeiro criá-lo de forma semelhante ao buffer de vértice e liga-lo ao pipeline.
Ele pode então ser usado para desenhar usando @'Stride.Graphics.CommandList.DrawIndexed(System.Int32,System.Int32,System.Int32)'.

**Código:** Desenho de vértices indexados

```cs
// Criar o buffer de índice
var indices = new short[indexCount];
var is32Bits = false;
var indexBuffer = Buffer.Index.New (GraphicsDevice, índices);
 
// definir o VAO
commandList.SetIndexBuffer(indexBuffer, 0, is32Bits);

// Desenho de vértices indexados
commandList.DrawIndexed(indexBuffer.ElementCount);
```

