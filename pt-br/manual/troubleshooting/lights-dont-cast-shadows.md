# As luzes não lançam sombras

Se você tiver ativado sombras em uma luz em sua cena, mas não está lançando sombras, certifique-se de ter espaço suficiente no atlas sombra. Você pode precisar reduzir o tamanho das sombras nas propriedades de seus componentes de luz para criar espaço.

Para mais informações sobre sombras e o atlas sombra, veja [Graphics - Shadows](../graphics/lights-and-shadows/shadows.md).

## Comparação de atlas sombra

| Tamanho: 2x | Tamanho: 1x |
| ---------------------------------------------------------------- | -------------------------------------------------------------
| ![FPS cena sombra map](../graphics/lights-and-shadows/media/shadow-atlas-2x.png) | ![FPS cena sombra map](../graphics/lights-and-shadows/media/shadow-atlas-1x.png) |
| Esta fonte de luz usa a totalidade do atlas sombra. Isso significa que outras luzes não vão lançar sombras, pois não há espaço no atlas. | Esta fonte de luz usa um quarto do atlas sombra. O resto pode ser atribuído a outras fontes de luz. |

## Reduza o tamanho da sombra

1. No Editor de cena, selecione uma entidade com uma luz que lança uma sombra.

2. Nas propriedades do componente **Light**, abaixo de **Shadow > Size**, reduza o tamanho da sombra usando o menu suspenso.

   ![media/DirectionalLightProperties.png](../graphics/lights-and-shadows/media/DirectionalLightProperties-size.png)

   Alternativamente, desabilite as sombras na luz inteiramente limpando a caixa de seleção **Shadows**.

Repita estes passos para tantas entidades leves como você precisa criar espaço no atlas sombra.

## Ver também

* [Gráficos — Sombras](../graphics/lights-and-shadows/shadows.md)
* [Gráficos — Luzes direcionais](../graphics/lights-and-shadows/directional-lights.md)