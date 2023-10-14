# Luzes direcionais

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artista </span>

** Luzes direcionais** vêm uniformemente de uma direção. Eles são frequentemente usados para simular volumosos fontes de luz distantes, como o sol, e sombras de elenco. Por padrão, novas cenas que você cria no Stride contêm uma luz direcional.

![media/DirectionalLightOverview.png](media/DirectionalLightOverview.png)

O Editor de cena mostra a posição de luzes direcionais com o seguinte ícone:

![media/DirectionalLight.png](media/DirectionalLight.png)

Quando você seleciona uma luz direcional, o gizmo exibe a direção principal da luz:

![media/DirectionalLightSelected.png](media/DirectionalLightSelected.png)

## Propriedades

![media/DirectionalLightProperties.png](media/DirectionalLightProperties.png)

| Propriedade | Descrição |
| ------------ | ---------- |
| Cor | A cor da luz (RGB) |
| Sombra | Veja as propriedades **Shadow** abaixo |
| Intensidade | A intensidade da luz. A cor é multiplicada por este valor antes de ser enviado para o shader. Nota: valores negativos produzem escuridão e têm efeitos imprevisíveis |
| Máscara de Culing | Define quais grupos de entidades são afetados por esta luz. Por padrão, todos os grupos são afetados |

## Sombras lançadas por luzes direcionais

Como [point lights](point-lights.md) e [spot lights](spot-lights.md), luzes direcionais lançam sombras. No entanto, as sombras lançadas por luzes direcionais podem espalhar-se através de uma grande gama de visão, de modo que eles exigem tratamento especial para melhorar o seu realismo.

Luzes direcionais usam uma técnica adicional, **cascaded shadow mapping**. Isso consiste em renderizar a profundidade de objetos oclusos do ponto de vista da luz para uma textura, tornando a cena levando em conta as informações do occluder.

Este método corta a faixa de profundidade do ponto de vista da câmera em diferentes seções ou "cascadas" de diferentes resoluções. Quanto mais perto cada cascata é para a câmera, maior resolução tem, e maior resolução suas sombras são.

![media/ShadowMappingCascades.png](media/ShadowMappingCascades.png)

Coloque simplesmente, as sombras mais próximas são para a câmera, a melhor qualidade que eles são. Isso significa que você pode gastar mais memória em sombras mais próximas da câmera, onde você pode vê-los, e menos em sombras distantes.

Você pode ter uma, duas ou quatro cascatas. Quanto mais cascatas você usa, mais memória você salva, mas a resolução mais baixa suas sombras se tornam à distância.

Este exemplo de um mapa de sombra gerado a partir de uma luz direcional, usando quatro cascatas:

![FPS cena sombra map](media/shadow-atlas-2x.png)

### Veja cascatas de sombra no editor

No **Property Grid**, sob as propriedades **Shadow**, ative a opção **Debug**.

| Cascades debug off | Cascades debug on |
| ---------------------- | ----------
| ![media/directional-lights-8.png](media/directional-lights-8.png) | ![media/directional-lights-9.png](media/directional-lights-9.png) |

As cores diferentes indicam a cascata para cada faixa de distância (verde: 0, Azul: 1, Roxo: 2, vermelho: 3).

### Propriedades de sombra leve direcional

| Propriedade | Descrição |
| ------------------- | ------------
| Filtro | A filtragem produz sombras **soft** em vez de sombras **hard**. Atualmente, a técnica implementada é PCF (Percentage Closer Filtering) |
| Tamanho | O tamanho da textura do mapa sombra. Para a luz direcional, este valor é **x1** por padrão, como uma luz direcional tem mais impacto visual do que luzes com intervalos mais curtos |
| Contagem de Cascata | O número de cascatas utilizadas para cortar a gama de profundidade coberta pela luz. Valores são 1, 2 ou 4 cascatas; uma cena típica usa 4 cascatas |
| Modo de estabilização | <p><br>A técnica utilizada para reduzir a cintilação do mapa de sombra. Flickering é um resultado do potencial aliasing introduzido pelo mapa sombra quando um texel da perspectiva da luz cobre mais espaço do que um texel da perspectiva da câmera.</p></br> <p><br> **Projeção snapping** tenta quebrar a matriz de projeção da luz para um texel dependente da resolução da textura do mapa sombra</p></br> <p><br>**View snapping** tenta tirar o alvo da matriz de visão da luz (centro da visão da câmera cascata frustum)</p></br> <p><br>Tanto a projeção quanto a visão que se encaixam forçam a matriz da sombra para cobrir uma região maior, aumentando o aliasing da textura do mapa da sombra. No entanto, é importante ressaltar que ao usar a câmera do intervalo de profundidade é definido como automático, o modo de estabilização é ignorado</p></br> |
| Faixa de profundidade | Como a profundidade visível varia da perspectiva da câmera é calculada. Isso afeta diretamente o quão perto e quão distantes as cascatas ocorrem |
| Misturar Cascades | Alivia a transição entre cascatas |
| Modo de partição | <p><br>Como a distância de divisão em cascata é determinada.</p></br> <p><br> **Manual**: a divisão é definida manualmente para cada cascata, em porcentagem da faixa de profundidade visível. Um valor de 0,1 para uma cascata significa que a cascata é renderizada na distância 0.1 * (VisibleDepthMax - VisibleDepthMin)<p><br> <p><br> **Logaritmic**: a divisão é calculada automaticamente usando uma escala logarítmica <p><br> O fator PSSM permite que você se misture de uma escala logarítmica pura (0.0f) a uma escala uniforme pura (1.0f)<p><br> |
| Depth Bias | A quantidade de profundidade para adicionar à profundidade de amostragem para evitar o fenômeno da acne sombra |
| Escala de Offset Normal | Um fator multiplicado pelo viés de profundidade para o normal |
| Depuração | Exibe as cascatas de mapa sombra no Editor de cena |

## Ver também

* [Adicionar uma luz](add-a-light.md)
* [Luzes de ponto](point-lights.md)
* [Luzes ambientais](ambient-lights.md)
* [Luzes Skybox](skybox-lights.md)
* [Luzes do ponto](spot-lights.md)
* [Sondas de luz](light-probes.md)
* [Eixos de luz](light-shafts.md)
* [Sombras](shadows.md)