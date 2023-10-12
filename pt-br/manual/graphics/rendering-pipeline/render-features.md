# Render características

A @'Stride.Rendering.RenderFeature' é responsável por desenhar um determinado tipo de @'Stride. Renderização. RenderObject'.

## Fases do Render

Render características têm várias fases.

### Coleta

A fase **collect** determina o que precisa ser processado e renderizado. Geralmente é conduzido pelo compositor [graphics](../graphics-compositor/index.md).

A fase de recolha:

* cria visualizações de renderização e atualizá-las com os dados mais recentes, como visualização e projeção matrizes
* cria e configura etapas de renderização
* executa sinalização e classificação de visibilidade

### Extrato

A fase **extract** copia dados de estados de jogo de objetos coletados anteriormente para estruturas específicas de renderização de curta duração. Normalmente é conduzido pelo @'Stride. Renderização. RenderSystem' e @'Stride. Renderização. RenderFeature's.

Isso deve ser o mais rápido possível e evitar computações pesadas desde a atualização do jogo e scripts são bloqueados. Computações pesadas devem ser diferidas para [Prepare](#prepare).

> [!Note]
> Atualmente, o Stride não paralelo às atualizações e scripts do jogo, então eles não serão retomados até que as fases **prepare** e **draw** sejam concluídas.

Exemplo de tarefas:

* cópia de matrizes de objetos
* parâmetros do material de cópia

### Preparem-se

A fase **prepare** prepara recursos de GPU e executa computação pesada. Isso geralmente é conduzido pelo @'Stride. Renderização. RenderSystem' e @'Stride. Renderização. RenderFeature's.

Exemplo de tarefas:

* dados de iluminação de computação e estruturas
* enchendo buffers constantes e tabelas de recursos

### Desenho

A fase **draw** preenche a lista de comandos GPU.

Exemplo de tarefas:

* configurando texturas de renderização
* combinações de desenho de fase de renderização com vista de renderização.

### Exemplo

Um exemplo típico de visões e estágios criados durante a fase **collect**, usado durante a fase **draw**:

![media/render-features-draw-example.png](media/render-features-draw-example.png)

### Processadores de tubulação

** Os processadores pipeline** são classes chamadas ao criar o estado [pipeline](../low-level-api/pipeline-state.md). Isso permite que você faça coisas como permitir a mistura alfa ou renderização de wireframe em uma etapa de renderização específica.

O Stride inclui vários processadores de pipeline predefinidos. Você também pode criar seu próprio.

## Ver também

* [Oleoduto de renderização](index.md)
* [Etapas de renderização](render-stages.md)
* [Efeitos e shaders](../effects-and-shaders/index.md)
* [Compositor gráfico](../graphics-compositor/index.md)