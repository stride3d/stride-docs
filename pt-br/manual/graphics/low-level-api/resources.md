# Ligação de assets

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Quando vértices [drawing](draw-vertices.md) usando um efeito [](../effects-and-shaders/index.md), os shaders esperam que certos recursos estejam disponíveis, incluindo:

- texturas e buffers
- amostradores
- buffers constantes

## Ligação automática de assets

A classe @'Stride.Rendering.EffectInstance lida com os detalhes de enumerar esses recursos de um efeito carregado, bem como encadeá-los.

Expõe o @'Stride.Graphics.RootSignature', que tem de ser definido como [pipeline state](pipeline-state.md),
e permite preencher buffers constantes e ligar recursos com base em um @'Stride.Rendering.ParameterCollection'.

**Código:** Usando um efeitoInstância

```cs
// Criar um EffectInstance e usá-lo para configurar o pipeline
var effectInstance = new EffectInstance (EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = efeitoInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = efeitoInstance.RootSignature;

// Atualizar buffers constantes e vincular recursos
efeitoInstance.Apply (context.GraphicsContext);
```

## Ligação de assets manual

Quando o código mais otimizado é necessário (por exemplo, no pipeline de renderização [), atualizações de buffer constantes e vinculação de assets podem ser feitas manualmente.](../rendering-pipeline/index.md)