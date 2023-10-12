# Mapas de material

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Mapas importantes** calculam como os materiais são renderizados. Eles podem usar dois tipos de valores: valores de cor (RGB) ou valores escalares (single float).

Você pode usar mapas materiais para várias finalidades, incluindo mapas de brilho, mapas difusos ou mapas de mistura (para combinar camadas de material [](material-layers.md))

Os mapas materiais podem buscar valores usando um dos vários provedores:

* **Vertex stream**: um valor retirado de atributos de malha
* **Binário operador**: uma combinação de qualquer outro dois provedores
* **Float4 / Float**: um valor constante
* **Cor**: um valor de cor do hex
* **Shader**: um valor fornecido por um shader ComputeColor. Isso permite que você use valores processuais
* **Textura**: um valor amostrado de um [texture](../textures/index.md)

Para escolher o provedor, clique em ![ botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione-o no menu suspenso:

![media/material-colors-1.png](media/material-colors-1.png)

## Fluxo de vértice

Este provedor tem um valor a partir de um atributo da malha do modelo a que você aplica o material.

Tem dois modos: **Cor Vertex Stream** e ** Vertex Personalizado Stream**. Para alternar entre eles, com **Vertex Stream** selecionado como o provedor, clique em ![ botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** substituir**) e escolha o modo que você deseja usar.

![ Modo de fluxo de texto](media/vertex-stream-mode.png)

### Fluxo de vértice de cor

Toma um valor de cor da malha.

| Propriedade | Descrição |
| -------- | -----------
| Índice | O índice no fluxo nomeado |
| Canal | O canal (RGBA) para amostra do fluxo |

### Fluxo de vértice personalizado

Toma um valor do canal de malha que você especificar.

| Propriedade | Descrição |
| -------- | -----------
| Nome | Nome semântico do canal para ler dados de |
| Canal | O canal (RGBA) para amostra do fluxo |

## Operador binário

Execute uma operação binária de dois provedores de valor de cor / escalar. Você pode aninhar como muitos mapas materiais dentro de operadores binários como você precisa (incluindo outros operadores binários).

Para escolher como a operação funciona, clique em ![ botão de seta azul](~/manual/game-studio/media/blue-arrow-icon.png) (** Substituir**) e selecione no menu suspenso. As operações são semelhantes às opções ao misturar camadas no Photoshop.

![ Modo de operação](media/operation-mode.png)

`Resultado = LeftColor <operator> Cor da direita`

![media/material-colors-4.png](media/material-colors-4.png)

| Propriedade | Descrição |
| -------- | -----------
| Operador | Um operador binário (por exemplo, adicionar, multiplicar, etc) |
| Esquerda | A cor esquerda/escalar utilizada na operação |
| Certo | A cor/escalar direita usada na operação |

## Float4 / Float

Fornecido diretamente como um valor constante sobre todo o material.

No caso de valores RGB, você controla o valor RGBA com os valores X, Y, Z e W (*Float4*).

![xyzw](media/material-colors-xyzw.png)

No caso de valores escalares, você controla o valor com um controle deslizante (*Float*).

![Blend mapa slider](media/blend-map-slider.png)

## Cor

Um valor fornecido a partir de um valor hex colorido. Isso só está disponível para mapas materiais que usam valores RGB.

![media/material-colors-3.png](media/material-colors-3.png)

## Shader

Um valor fornecido por um shader ComputeColor. Isso permite que você use valores processuais.

Para um exemplo de um shader ComputeColor, veja o tutorial [materiais de peças](../../particles/tutorials/particle-materials.md).

## Textura

Amostra a cor/escalar de um [texture](../textures/index.md).

Por exemplo, as imagens abaixo demonstram como a textura muda a forma como o Stride mistura materiais.

![ Diagrama de mapas ampliados](media/blend-map-diagram.png)

![ Diagrama de mapas ampliados](media/blend-map-diagram2.png)

![media/material-colors-2.png](media/material-colors-2.png)

| Propriedade | Descrição |
| ------------------ | --------------- 
| Textura | Uma referência a uma textura |
| Canal | O canal (R, G, B, A) usado para extrair o valor escalar. Apenas válido para texturas escalares |
| Índice de Texcoord | As coordenadas de textura (u,v) para usar da malha com esta textura |
| Filtrar | O método de amostragem (ex. Linear, Point, Anisotropic, etc.) |
| Modo de endereço U / V | <p><br>Define como (u,v) as coordenadas são abordadas</p></br> <p><br> **Wrap**: Azulejos (u,v) em junções inteiras. Por exemplo, se u varia de 0,0 a 3,0, a textura repete três vezes no eixo U</p></br> <p><br>**Mirror**: Vira (u,v) em junções inteiras. Por exemplo, se u varia de 0,0 a 1.0, a textura é exibida como esperado; mas de 1.0 a 2.0, a textura é espelhada </p></br> <p><br> **Clamp**: Braçadeiras (u,v) para o intervalo (0,0, 1.0)</p></br> |
| Escala | Uma escala aplicada a (u,v) |
| Abertura | Um deslocamento aplicado a (u,v) |

## Ver também

- [Atributos de material](material-attributes.md)
- [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)