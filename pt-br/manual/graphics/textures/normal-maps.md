# Mapas normais

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Normal maps** são texturas que adicionam a aparência do detalhe da superfície, como rachaduras e colisões, sem alterar a geometria real de um modelo. Eles contêm informações sobre como as malhas devem refletir a luz, criando a ilusão de geometria muito mais complexa. Isso economiza muito poder de processamento.

| Nenhum mapa normal | Com um mapa normal |
| --------------| ----------- 
| ![media/material-attributes-15.png](../materials/media/material-attributes-15.png) | ![media/material-attributes-16.png](../materials/media/material-attributes-16.png) |

| Malha original | Malha simplificada | Malha simplificada e mapa normal |
|---------------|-----------------|---------
| ![Exemplo 1](media/normal_map_example1.jpg) | ![Example 2](media/normal_map_example2.jpg) | ![Example 3](media/normal_map_example3.jpg) |
| 4m triângulos | 500 triângulos | 500 triângulos |

*(Imagens cortesia de Paolo Cignoni, compartilhadas sob [Attribution-ShareAlike 1.0 Genérico (CC BY-SA 1.0)](https://creativecommons.org/licenses/by-sa/1.0/)*

Os mapas normais geralmente representam pequenas mudanças do vetor normal (o vetor que aponta para longe da superfície). O Stride usa a convenção mais comum: os componentes X e Y seguem o tangente e o benfeitor da superfície, e o componente Z segue o vetor normal da superfície. Isso significa que um valor de `(0, 0, 1)` coincide com o vetor normal e não representa nenhuma mudança, enquanto um valor de `(-1, 0, 0)` inclina para a "esquerda" (ou seja, valor X negativo no espaço tangente (local).

![media/material-attributes-13.png](../materials/media/material-attributes-13.png)

## Use um mapa normal

1. No **Asset View**, selecione a textura que deseja usar como um mapa normal.

   ![Selecione a textura normal do mapa](media/select-normal-map-texture.png)

2. No **Property Grid**, certifique-se de que o **type** está definido como **normal map**.

   ![Normal map](media/normal-map-expanded-properties.png)

   Isso significa que Stride assume que a textura está em espaço de cor linear e converte-a em um formato adequado para mapas normais.

3. No **Asset View**, selecione o material que deseja usar o mapa normal.

   ![Select material](media/select-material.png)

4. No **Property Grid**, sob o material **Geometry** propriedades, expanda **Surface**.

   ![Use mapas normais](media/use-normal-map.png)

5. Próximo a **Normal map**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e certifique-se de **Textura** é selecionado.

6. Ao lado de **Normal map**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![ Selecione asset](media/select-asset-texture.png)

7. Selecione a textura normal do mapa e clique em **OK**.

Para obter mais informações sobre materiais, consulte [Materials](../materials/index.md).

## Propriedades do mapa normal

Texturas de mapas normais têm duas propriedades além das propriedades de textura [common](index.md).

![Normal map textures](media/normal-map-texture-properties.png)

| Propriedade | Descrição |
|----------|---------
| Inversão Y | Tenha componentes Y positivos (pixéis verdes) enfrentam-se no espaço tangente. Esta opção depende das ferramentas que você usa para criar mapas normais. |

Para obter informações sobre propriedades normais de mapas em materiais, consulte [Materials — Geometria atributos](../materials/geometry-attributes.md).

## Ver também

* [Texturas](index.md)
* [Materiais](../materials/index.md)
* [Mapeamento normal na Wikipedia](http://en.wikipedia.org/wiki/Normal_mapping)