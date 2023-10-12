# Oleoduto de renderização

## Render características

A lógica de renderização é dividida em @'Stride. Renderização. RenderFeature's. Cada recurso de renderização processa um tipo de @'Stride. Renderização. RenderObject' (por exemplo, malhas, sprites, partículas, etc).

Stride executa recursos em fases: **collect**, **extract**, **prepare** e **draw**. Isso significa que cada passo do pipeline pode ser isolado, paralelo e otimizado separadamente.

Para mais informações, consulte [Render features](render-features.md).

## Render as vistas

Você pode renderizar cenas de vários pontos de vista, representados como @'Stride. Renderização. RenderView - por exemplo, vistas do jogador em um jogo de tela dividida, ou vistas de sombra separadas para cascatas em uma cascata de mapa [shadow](../lights-and-shadows/shadows.md).

As visualizações são um conceito de primeira classe disponível para todas as fases de renderização, permitindo o loteamento em várias visualizações.

## Etapas de renderização

@'Stride.Rendering.RenderStage seleciona o efeito [](../effects-and-shaders/index.md) e [pipeline estado](../low-level-api/pipeline-state.md) por objeto, e define a saída de um passe de renderização.

Para mais informações, consulte [Render stage](render-stages.md).

## Visibilidade

@'Stride.Rendering.RenderObject's estão registados com um @'Stride. Renderização. VisibilityGroup'. Durante a fase **collect**, as dicas do grupo de visibilidade e as filtra com base no @'Stride. Renderização. RenderView' e @'Stride. Renderização. RenderStage.

## Nesta secção

* [Render características](render-features.md)
* [Etapas de renderização](render-stages.md)