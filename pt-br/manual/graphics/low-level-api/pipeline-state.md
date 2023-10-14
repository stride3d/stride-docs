# Estados da Pipeline

Stride dá-lhe total control sobre o estado do pipeline gráfico. Isso inclui:

- estado do rasterizer
- profundidade e estado estêncil
- estado de mistura
- efeitos
- layout de entrada
- descrição de saída

Estado é compilado em objetos @'Stride.Graphics.PipelineState' imutáveis, que descrevem todo o pipeline. Eles são então ligados usando um @'Stride.Graphics.CommandList'.

** Código:** Criar objetos de estado

```cs
// Criando objeto de estado de pipeline
var pipelineStateDescription = novo PipelineStateDescription();
var pipelineState = PipelineState.New (GraphicsDevice, ref pipelineStateDescription);
 
// Aplicando o estado ao pipeline
CommandList.SetPipelineState (pipelineState);
```

O @'Stride.Graphics.MutablePipelineState' classe deixá-lo definir estados independentemente, enquanto caching o pipeline subjacente estados.

** Código:** Estado do pipeline mutável

```cs
// Criando o objeto estado do pipeline
var mutablePipelineState = novo MutablePipelineState();

// Definir valores e reconstruir
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend
mutablePipelineState.Atualização
 
// Aplicando o estado ao pipeline
CommandList.SetPipelineState (mutablePipelineState.CurrentState);
```

# Estado do Rasterizer

O rasterizer pode ser definido usando a propriedade @'Stride.Graphics.PipelineStateDescription.RasterizerState'. Um conjunto de descrições predefinidas é realizada pela classe @'Stride.Graphics.RasterizerStates. Eles lidam com o modo de chamada, e devem ser suficientes para a maioria dos casos de uso:

- @'Stride.Graphics.RasterizerStates.CullNone': sem complicações
- @'Stride.Graphics.RasterizerStates.CullFront': capa de frente
- @'Stride.Graphics.RasterizerStates.CullBack': backface culling

** Código:** Definir o modo de chamada

```cs
pipelineStateDescription.RasterizerState = RasterizerStates.CullNone;
pipelineStateDescription.RasterizerState = RasterizerStates.CullFront;
pipelineStateDescription.RasterizerState = RasterizerStates.CullBack;
```

Você pode criar seu próprio estado personalizado. Para a lista de opções e valores padrão, consulte a documentação da API @'Stride.Graphics.RasterizerStateDescription.

** Código:** estados de rasterizador personalizados

```cs
var rasterizer Descrição do Estado = nova RasterizerStateDescription(CullMode.Front);
rasterizerStateDescription.ScissorTestEnable = true; // permite o teste de tesoura
pipelineStateDescription.RasterizerState = rasterizerStateDescription;
```

# Depth and stencil states

A propriedade @'Stride.Graphics.PipelineStateDescription.DepthStencilState contém a profundidade e os estados estencil. Um conjunto de estados comumente usados é definido pela classe @'Stride.Graphics.DepthStencilStates:

- @'Stride.Graphics.DepthStencilStates.Default': profundidade ler e escrever com uma comparação menos do que
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': leia e escreva com uma comparação maior ou igual
- @'Stride.Graphics.DepthStencilStates.DepthRead': leia apenas com uma comparação menos do que
- @'Stride.Graphics.DepthStencilStates.None': nem ler nem escrever

** Código:** Definindo o estado de profundidade

```cs
pipelineStateDescription.DepthStencilState = DepthStencilStates.Default;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
pipelineStateDescription.DepthStencilState = DepthStencilStates. Nenhum;
```

Você também pode definir a profundidade personalizada e estados estêncil. Para a lista de opções e valores padrão, consulte a documentação API do @'Stride.Graphics.DepthStencilStateDescription.

** Código:** Profundidade personalizada e estado estêncil

```cs
// teste de profundidade está habilitado, mas não escreve
var profundidadeStencilStateDescrição = novo DepthStencilStateDescription (verdade, falso);
pipelineStateDescription.DepthStencilState = profundidadeStencilStateDescription;
```

A referência do estêncil não faz parte do @'Stride.Graphics.PipelineState'. Está definido usando @'Stride.Graphics.CommandList.SetStencilReference (System.Int32)'.

** Código:** Definir a referência do estêncil

```cs
CommandList.SetStencilReference(2);
```


# Estado de mistura

O @'Stride.Graphics.PipelineStateDescription.BlendState' e @'Stride.Graphics.PipelineStateDescription.SampleMask' propriedades control blending. A classe @'Stride.Graphics.BlendStates define um conjunto de estados de mistura comumente usados:

- @'Stride.Graphics.BlendStates.Additive': resume as cores
- @'Stride.Graphics.BlendStates.AlphaBlend': resume as cores usando o alfa da fonte na cor de destino
- @'Stride.Graphics.BlendStates.NonPremultiplied': somas usando o alfa da fonte em ambas as cores
- @'Stride.Graphics.BlendStates. Opaco': substitui a cor

** Código:** Definir o estado da mistura

```cs
// Definir estados comuns de mistura
pipelineStateDescription. BlendState = BlendStates. Aditivo;
pipelineStateDescription. BlendState = BlendStates.AlphaBlend;
pipelineStateDescription. BlendState = BlendStates.NonPremultiplicado;
pipelineStateDescription. BlendState = BlendStates. Opaco;

// Defina a máscara de amostra
pipeStateDescription.SampleMask = 0xFFFFFFFF;
```

Você pode definir estados de profundidade e mistura personalizados. Para obter uma lista de opções e valores padrão, consulte a documentação da API @'Stride.Graphics.BlendStateDescription.

** Código:** Estado de mistura personalizado

```cs
// criar o objeto descrevendo o estado da mistura por alvo
var blendStateRenderTargetDescription = novo BlendStateRenderTargetDescription();
blendStateRenderTargetDescription. BlendEnable = true;
blendStateRenderTargetDescription.ColorSourceBlend = Blend.SourceColor;
// etc.

// criar o objeto blendStateDescription
var blendStateDescription = new BlendStateDescription(Blend.SourceColor, Blend.InverseSourceColor);
blendStateDescription.AlphaToCoverageAtivar = verdadeiro; // permitir a cobertura alfa
blendStateDescription.RenderTargets[0] = blendStateRenderTargetDescription;
pipelineStateDescription.BlendState = blendStateDescription;
```

O fator de mistura não faz parte do @'Stride.Graphics.PipelineState'. Está definido usando @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)'.

** Código:** Definir o fator de mistura

```cs
CommandList.SetBlendFactor(Color4.White);
```

## Efeitos

O estado do pipeline também inclui os shaders que você deseja usar para desenhar.
Ligar uma @'Stride.Graphics. Efeito para o pipeline, definir o @'Stride.Graphics.PipelineStateDescription.EffectBytecode '
e @'Stride.Graphics.PipelineStateDescription.RootSignature' propriedades do @'Stride.Graphics.PipelineStateDescription' aos valores correspondentes do efeito.

Um @'Stride.Shaders.EffectBytecode' contém os programas de shader reais. Para mais informações, consulte [Efeitos e Shaders](../effects-and-shaders/index.md).

A @'Stride.Graphics.RootSignature' descreve o número e tipo de assets esperados pelo efeito. O capítulo seguinte abrange como [ recursos combinados](resources.md) para o pipeline.

**Código:** Encerrar um efeito

```cs
var effectInstance = new EffectInstance (EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = efeitoInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = efeitoInstance.RootSignature;
```

## Layout de entrada

O estado do pipeline descreve o layout em que os vértices são enviados para o dispositivo através do @'Stride.Graphics.PipelineStateDescription.InputElements' e @'Stride.Graphics.PipelineStateDescription.PrimitiveType' propriedades.

A página [Draw vertices](draw-vertices.md) descreve como criar buffers de vértice personalizados e seus @'Stride.Graphics.VertexDeclaration' em mais detalhes.

** Código:** Definir um layout de entrada

```cs
VertexDeclaração vertexDeclaração = ...
pipelineStateDescription.InputElements = vertexDeclaration.CreateInputElements();
pipeStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
```

## Descrição da saída

A propriedade @'Stride.Graphics.PipelineStateDescription.Output' da propriedade @'Stride.Graphics.PipelineStateDescription' define o número e @'Stride.Graphics.PixelFormat' de todas as texturas de renderização limitadas.

Para obter informações sobre como ligar texturas de renderização ao pipeline, consulte [Texturas e renderizar texturas](textures-and-render-textures.md).

** Código:** Criar uma descrição de saída

```cs
renderização Descrição da saída = nova RenderOutputDescription (GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
pipelineStateDescription.Output = renderOutputDescription;
```

Você pode usar o @'Stride.Graphics.RenderOutputDescription.CaptureState (Stride.Graphics.CommandList)' para recuperar a descrição de saída último conjunto em um @'Stride.Graphics.CommandList'. Isso é especialmente útil em combinação com @'Stride.Graphics.MutablePipelineState', quando o alvo de renderização pode não ser conhecido na frente.

** Código:** Descrição da saída da captura

```cs
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.Update();
```
