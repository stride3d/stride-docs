# Sombreamento de capa clara

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Clear-coat shading** usa renderização física para simular a pintura do veículo.

![ Revestimento da orelha](media/clear-coat-2.jpg)

Veículos reais normalmente têm três camadas de tinta aplicada ao corpo, como no diagrama abaixo:

![Diagrama ](media/paint-layers.png)

Para manter a sombreamento simples, Stride apenas simula as camadas **base coat** (incluindo flocos de metal opcionais) e **clear coat**. Stride combina as camadas dependendo de quão longe a câmera é do material. Isso reduz os artefatos visuais causados pelo mapa normal do floco de metal (que se torna mais visível à medida que a câmera se afasta do material).

A sombreamento de capa clara tem várias vantagens sobre a criação do efeito manualmente com camadas de material [](material-layers.md):

* camadas são misturadas com base na distância
* aumento do desempenho
* visualização melhorada

## Adicionar um material de capa clara

O Stride inclui um modelo de material de capa clara. Para adicioná-lo, no **Asset View**, clique em **Add asset** e selecione **Material > PBR material: clear coat**.

![ Adicionar casaco claro](media/add-clear-coat.png)

Alternativamente, para definir propriedades de capa clara:

1. Selecione o material que você deseja usar shading de capa clara.

2. Na Grade de Propriedade, sob as propriedades **Misc**, ao lado de **Clear coat**, clique em ![ Botão de seta azul ](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e escolha **Glear coat**.

   ![Select clear coat](media/select-clear-coat.png)

   > [!Note]
   > Para a formação de capa clara para funcionar corretamente, certifique-se de **Diffuse**, **Specular** e **Specular model** sob o material **Shading** Propriedades.

   > ![Shading options](media/enable-shading-options.png)

## Propriedades

Você pode acessar as propriedades do shader de capa clara sob **Misc > Casaco claro **. Eles são divididos em três partes: as propriedades **base paint** e opcional **metal flake** simulam o revestimento básico, e as propriedades **clear coat**G4> simulam o revestimento claro.

As propriedades de floco de metal simulam um efeito de pintura metálico. Para desativar o efeito, remova o mapa normal do floco de metal.

![ Adicionar casaco claro](media/clear-coat-properties.png)

| Propriedade | Descrição |
|------------------------------|----------
| Pintura base mapa difuso | O [diffuse map](shading-attributes.md) usado pela camada de tinta base (a camada mais baixa). Isso determina a cor da camada. |
| Mapa de brilho de tinta base | O [gloss map](geometry-attributes.md) usado pela camada de tinta base. Para um resultado coerente, use o **metal flake normal map** como uma máscara. |
| Mapa difuso de flocos de metal | O [diffuse map](shading-attributes.md) usado pela camada de floco de metal (a camada acima da tinta de base). Para um resultado coerente, use um valor próximo ao valor de tinta base. |
| Mapa de brilho de flocos de metal | O mapa [gloss](geometry-attributes.md) usado pela camada de floco de metal. Para um resultado coerente, use o **metal flake normal map** como uma máscara. |
| Mapa de metalização de flocos de metal | O mapa [metalness](shading-attributes.md) usado pela camada de floco de metal. Para melhores resultados, use valores elevados. |
| Mapa normal do floco de metal | O mapa [normal](../textures/normal-maps.md) usado pela camada de floco de metal. Isso molda a geometria do floco. Um mapa normal do floco de metal (**StrideClearCoatMetalFlakesNM**) está incluído no pacote de ativos Stride. Se a textura tem uma escala UV alta, habilite **Use coordenadas de textura aleatórias** abaixo para reduzir os efeitos de nivelamento. Para desativar o efeito de flocos de metal, remova o mapa normal. |
| Mapa do brilho do revestimento | O [gloss map](geometry-attributes.md) usado pela camada de revestimento clara. Alterar esse valor para simular diferentes tipos de tinta (por exemplo, mate). |
| Mapa de metalização de revestimento claro | O [metalness map](shading-attributes.md) usado pela camada de revestimento clara |
| Laranja casca mapa normal | O mapa [normal](../textures/normal-maps.md) usado pela camada de revestimento clara para criar um efeito de casca de laranja. Isso reflete a luz em ângulos diferentes, simulando imperfeições de tinta em que a textura parece chocante, como a pele de uma laranja. Um mapa normal de casca de laranja (**StrideClearCoatOrangePeelNM**) está incluído no pacote de ativos Stride. |
| Distância de transição de camada | A distância (em metros) em que a camada de tinta base transiciona para a camada de floco de metal. Isso ajuda a combater artefatos visuais causados pelo mapa normal do floco de metal (que se torna mais visível à medida que a câmera se afasta do material). |

## Reduzir o tiling e os artefatos

Propriedades que usam operadores binários devem usar valores **normalizados** (ou seja, entre `0.0` e `1.0`). Por exemplo, na captura de tela abaixo, o operador **left** usa um valor de `0.5`.

![ Operador secundário ](media/clear-coat-binary-operator.png)

Valores sobre `1.0` podem produzir artefatos de tiling, como na imagem abaixo (note o padrão da grade):

![Artifact](media/clear-coat-artifact1.jpg)

### Peças de reposição para máquinas

Os flocos de metal no mapa normal do floco de metal incluídos no pacote de ativos Stride (**StrideClearCoatMetalFlakesNM**) são bastante volumosos. Por esta razão, recomendamos:

* usar um fator de escala **UV de alta ** que telhas a textura (reduzindo assim os flocos)

* ** Use coordenadas de textura aleatórias**, impedindo um efeito de tiling óbvio

   ![Usar coordenadas de textura aleatória](media/use-random-texture-coordinates.png)

> [!Note]
> A opção **Usar coordenadas de textura aleatórias** é cara, então não recomendamos que você use para plataformas móveis.

Alternativamente, use um mapa normal com uma densidade maior de flocos de metal menores.

## Ver também

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
   * [Atributos de geometria](geometry-attributes.md)
   * [Atributos de Shading](shading-attributes.md)
   * [Atributos diversos](misc-attributes.md)
* [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)