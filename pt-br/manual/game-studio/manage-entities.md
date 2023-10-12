# Gerenciar entidades

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success"> Designer de nível </span>

Para construir os níveis de seu jogo, você precisa traduzir (mover), girar e redimensionar entidades em sua cena. Estes são conhecidos como **transformations**.

## Gizmos de transformação

Você pode selecionar os gizmos de transformação de **Scene Editor toolbar**.

![Transformação gizmo toolbox](media/manage-entities-in-scene-gizmos.png)

Alternativamente, pressione **Space** para alternar entre gizmos.

Existem três tipos de transformação gizmo:

- ![Translation gizmo icon](media/manage-entities-in-scene-translation-gizmo.png) O **translation gizmo** move entidades
- ![Rotation gizmo icon](media/manage-entities-in-scene-rotation-gizmo.png) O **rotation gizmo** gira entidades
- ![Scale gizmo icon](media/manage-entities-in-scene-scale-gizmo.png) O **scale gizmo** redimensiona entidades

Game Studio exibe o gizmo de transformação selecionado na origem da entidade.

![Gizmos de transformação na cena](media/manage-entities-transformation-gizmo.png)

### Tradução

Para selecionar o gizmo de tradução, clique no ícone ![Gizmo de tradução](media/manage-entities-in-scene-translation-gizmo.png) ícone na barra de ferramentas do Editor de cena ou pressione **W**.

A tradução gizmo move (**translates**) entidades na cena ao longo do eixo que você seleciona.

* Para mover uma entidade ao longo do eixo X, arraste-a pela seta **red**.
* Para mover uma entidade ao longo do eixo Y (para cima e para baixo), arraste-a pela seta **green**.
* Para mover a entidade ao longo do eixo Z, arraste-a pela seta **blue**.
* Para mover a entidade em 3D livre, arraste-a pela esfera central.

<video controls autoplay loop height="360" width="480">
                <source src="media/manage-entities-in-scene-translation-gizmo.mp4" type="video/mp4">
</video>

### Gizmo rotativo

Para selecionar o gizmo de rotação, clique no ícone ![Rotation gizmo](media/manage-entities-in-scene-rotation-gizmo.png) ícone na barra de ferramentas do Editor de cena ou pressione **E**.

O gizmo de rotação gira entidades na cena ao longo do eixo que você seleciona.

* Para girar uma entidade ao longo do eixo X (pitch), arraste-a pelo anel **red**.
* Para girar uma entidade ao longo do eixo Y (yaw), arraste-a pelo anel **green**.
* Para girar a entidade ao longo do eixo Z (roll), arraste-a pelo anel **blue**.

<video controls autoplay loop height="360" width="480">
                <source src="media/manage-entities-in-scene-rotation-gizmo.mp4" type="video/mp4">
</video>

### Gizmo de escala

Para selecionar o gizmo de escala, clique no ícone ![Scale gizmo](media/manage-entities-in-scene-scale-gizmo.png) ícone na barra de ferramentas do Editor de cena ou pressione **R**.

O gizmo de escala redimensiona entidades ao longo de um único eixo ("stretching" ou "squashing" eles) ou todos os eixos (fazendo-os maiores ou menores sem alterar suas proporções).

* Para redimensionar uma entidade ao longo do eixo X, arraste-a pelo anel **red**.
* Para redimensionar uma entidade ao longo do eixo Y, arraste-a pelo anel **green**.
* Para redimensionar a entidade ao longo do eixo Z, arraste-a pelo anel **blue**.
* Para redimensionar a entidade em todos os eixos, arraste-a pela esfera central.

<video controls autoplay loop height="360" width="480">
                <source src="media/manage-entities-in-scene-scale-gizmo.mp4" type="video/mp4">
</video>

> [!Note]
> A escala gizmo só funciona com o sistema de coordenadas **local** (ver abaixo). Quando você seleciona a escala gizmo, Game Studio muda para coordenadas locais.

## Alterar sistema de coordenadas gizmo

Você pode mudar como as coordenadas gizmo funcionam.

1. Selecione a entidade cujas coordenadas gizmo você deseja mudar.
2. Na barra de ferramentas do Editor de cena, selecione o sistema de coordenadas que deseja.

| Sistema de coordenação | Função |
| ------  |  ------  |
| ![Coordenadas do mundo](media/manage-entities-in-scene-wsc.png) <br><p><p>Coordenadas mundiais | Usa coordenadas mundiais para transformações. Os eixos X, Y e Z são os mesmos para cada entidade. |
| ![Coordenadas locais](media/manage-entities-in-scene-osc.png) <br><p><p>Coordenadas locais | Usa coordenadas locais para transformações. Os eixos são orientados na mesma direção que a entidade selecionada. |
| ![Coordenadas da câmara](media/manage-entities-in-scene-csc.png) <br><p><p>Coordenadas de câmera | Usa as coordenadas atuais da câmera para transformações. Os eixos são orientados na mesma direção que a câmera do editor. |

## Transformações de pressão para grade

Você pode "snap" transformações para a grade. Isso significa que o grau de transformação que você se aplica a entidades é arredondado para o múltiplo mais próximo do número que você especificar. Por exemplo, se você definir o valor de pressão de rotação para 10, as entidades giram em múltiplos de 10 (0, 10, 20, 30, etc).

Você pode alterar os valores de snap para cada gizmo na barra de ferramentas de visualização de cena. Os valores de pressão aplicam-se a todas as entidades do local. Por exemplo:

| Ícone | Função |
| --- | ---- |
| ![](media/manage-entities-in-scene-snap-translation.png) | Tradução instantânea para vários 1 |
| ![](media/manage-entities-in-scene-snap-rotation.png) | Rotação de pressão para múltiplos de 22.5 |
| ![](media/manage-entities-in-scene-snap-scale.png) | Escala de pressão para vários 1.1 |

## Ver também

* [Criar e abrir uma cena](create-a-scene.md)
* [Navegue no Editor de Cena](navigate-in-the-scene-editor.md)
* [Cenas de carga](load-scenes.md)
* [Adicionar entidades](add-entities.md)
* [Gerenciar entidades](manage-entities.md)