# Sombras

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artista </span>

As sombras trazem informações e realismo significativos para uma cena.

| Sombras **off** | Sombras **on** |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| ![media/SceneNoShadows.png](media/SceneNoShadows.png) | ![media/SceneWithShadows.png](media/SceneWithShadows.png) |

Somente [ luzes direcionais](directional-lights.md), [ponto luzes](point-lights.md), e [spot luzes](spot-lights.md) podem lançar sombras.

## Mapas de sombra

Stride usa **shadow mapping** para renderizar sombras. Para entender mapas de sombra, imagine uma câmera no centro do sol, então você está olhando para baixo da perspectiva do sol.

![Luz e sombra](media/light-and-shadow.png)

Tudo o que o sol vê está à luz. Tudo escondido do sol (ou seja, atrás de **occluders**) está na sombra.

A partir desta perspectiva, Stride cria um **shadow map** para cada luz que lança sombras. Isso nos diz o quão longe cada pixel visível é da luz. Quando Stride torna a cena, verifica a posição de cada pixel no mapa da sombra para aprender se pode ser "visto" pela luz. Se a luz pode ver o pixel, a luz é iluminada. Se não puder, o pixel está na sombra.

Por exemplo, estes são mapas de sombra da amostra de tiro em primeira pessoa incluída em Stride, gerada por uma luz [direcional](directional-lights.md).

![FPS cena](media/fps-sample-scene.png)

![FPS cena sombra map](media/shadow-atlas-2x.png)

> [!Note]
> No entanto, é importante ressaltar que a luz direcional no exemplo acima cria quatro mapas de sombra, um para cada cascata. Para obter mais informações, consulte a página [ Luzes direcionais](directional-lights.md).

### A sombra atlas

Mapas de sombra para cada luz que lança uma sombra são salvos em uma região da textura **shadow atlas**. Você pode escolher quanto da sombra atlas cada luz usa. Quanto maior o mapa da sombra, melhor a qualidade da sombra, mas menos espaço você tem para mapas de sombra de outras fontes de luz.

| Sombra de maior qualidade (utiliza uma grande área do atlas sombra) | Sombra de baixa qualidade (utiliza uma área menor do atlas sombra) |
| ---------------------------------------------------------------- | ------------------------------------------------------------ 
| ![ Sombra de alta resolução](media/shadow-high-resolution.png) | ![ Sombra de baixa resolução ](media/shadow-low-resolution.png) |
| ![FPS cena sombra map](media/shadow-atlas-2x.png) | ![FPS cena sombra map](media/shadow-atlas-1x.png) |

Geralmente, você deve dar mais espaço a fontes de luz que lançam as sombras mais visíveis.

O tamanho de cada área no mapa da sombra depende de vários fatores:

* o `shadowMapSizeFactor` baseado no `LightShadowMap.Size` propriedade (/8, /4, /2, x1, ou x2)
* o tamanho projetado da luz no espaço de tela (`lightSize`)
   * para luzes direcionais, a luz O tamanho é igual ao máximo (screenWidth, telaHeight)
   * para luzes de ponto, a luz O tamanho é igual à projeção da esfera projetada no ponto alvo luz cone
* o `ShadowMapBaseSize` é igual a `1024`

O tamanho final do mapa da sombra é calculado assim:

```cs
// Calcular o fator de tamanho
var shadowMapSizeFinalFactor = shadowImportanceFactor * shadowMapSizeFactor;
// Multiplique o tamanho da luz projetada pelo fator de tamanho
var sombra MapSize = NextPowerOfTwo(lightSize * shadowSizeFinalFactor);
// Braçadeira para um tamanho máximo
shadowMapSize = min (shadowMapSize, ShadowMapBaseSize * shadowSizeFinalFactor);
```

Se você tiver ativado sombras em uma luz em sua cena, mas não está lançando sombras, certifique-se de que há espaço suficiente no atlas sombra para criar um mapa sombra para a luz. Para mais informações, veja [Troubleshooting — As luzes não lançam sombras](../../troubleshooting/lights-dont-cast-shadows.md).

## Ver também

* [Luzes de ponto](point-lights.md)
* [Luzes direcionais](directional-lights.md)
* [Luzes do ponto](spot-lights.md)
* [Resolução de problemas — As luzes não lançam sombras](../../troubleshooting/lights-dont-cast-shadows.md)