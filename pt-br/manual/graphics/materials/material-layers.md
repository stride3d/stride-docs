# Camadas de material

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Você pode combinar camadas de materiais para construir materiais mais complexos. Por exemplo, esta captura de tela mostra a mistura de um material de ferrugem (esquerda) com um material de ouro (direita):

![media/material-layers-2.png](media/material-layers-2.png)

Este diagrama mostra a definição dos materiais misturados na captura de tela acima:

![media/material-layers-3.png](media/material-layers-3.png)

## Mapas de mistura

**Blend maps** são [material maps](material-maps.md) que determinam como Game Studio mistura camadas. Por exemplo, você pode usar uma textura como um mapa de mistura:

![ Diagrama de mapas ampliados](media/blend-map-diagram.png)

![ Diagrama de mapas ampliados](media/blend-map-diagram2.png)

Note como a textura do mapa de mistura corresponde à modelagem no resultado.

Os mapas de mistura funcionam da mesma forma que qualquer outro tipo de mapa material. Para obter mais informações, consulte [Mapas importantes](material-maps.md).

## Modelos de sombra

Os materiais de mistura de Stride de forma diferente dependendo se seus modelos de sombreamento (por exemplo, modelos difusos, modelos especulares, etc) são diferentes.

Se você misturar materiais que têm modelos de sombreamento **identical**, a Stride recolhe o **attributes** dos materiais, então aplica os modelos de sombreamento a todos eles. Isso salva a GPU.

Se os materiais têm modelos de sombreamento **diferente**, a Stride aplica os modelos de sombreamento de cada material aos atributos desse material, então mistura os resultados. Isso usa mais GPU.

## Adicionar uma camada

1. Selecione o material que deseja adicionar uma camada.

2. No **Property Grid** (à direita por padrão), ao lado de **Layers**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   ![ Adicionar uma camada](media/add-a-layer.png)

   Game Studio adiciona uma camada ao material.

   ![Tipo de umidade ](media/empty-layer.png)

3. Ao lado da camada, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   A janela **Selecione um ativo** abre.

   ![ Selecione um ativo](media/material-asset-picker.png)

4. Especifique um material que deseja adicionar como uma camada e clique em **OK**.

   Game Studio adiciona o material como uma camada.

   ![ camada adicionada ](media/added-layer.png)

5. Próximo a **Blend Map**, clique em ![ Botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione o tipo de mapa de mistura que você deseja usar para misturar as camadas. Para obter mais informações sobre mapas de mistura, consulte [Mapas importantes](material-maps.md).

   ![Selecionar mapa de mistura](media/select-blend-map.png)

Game Studio combina as camadas de material usando o mapa de mistura que você especificou. Você pode adicionar tantas camadas como você precisa.

## Propriedades da camada

| Propriedade | Descrição |
| --------------- | --------------- 
| Material | O material misturado nesta camada |
| Mapa de mistura | O [blend map](material-maps.md) usado para misturar esta camada com a camada acima |
| Overrides de camada | **UV Escala**: Uma escala UV aplicada a todas as texturas UV do material da camada (excluindo o mapa de oclusão) |

## Ver também

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)