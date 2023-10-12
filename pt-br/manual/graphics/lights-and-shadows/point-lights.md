# Luzes de ponto

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artista </span>

** As luzes do ponto** emitem luz em todas as direções dentro de uma esfera. São úteis para simular fontes de luz local, como lâmpadas e lâmpadas. Eles lançam sombras.

![media/PointLightOverview.png](media/PointLightOverview.png)

O Editor de cena mostra a posição das luzes de ponto com o seguinte ícone:

![media/PointLight.png](media/PointLight.png)

Uma vez selecionado, o ponto luz gizmo exibe a esfera em que projeta luz:

![media/PointLightSelected.png](media/PointLightSelected.png)

## Propriedades

![media/PointLightProperties.png](media/PointLightProperties.png)

| Propriedade | Descrição |
| ------------------- | ------------------ 
| Cor | A cor da luz (RGB) |
| Radius | O raio de influência da esfera em unidades do mundo [](../../game-studio/world-units.md). Além desta gama, a luz não afeta modelos |
| Sombra | <p><br>Se as sombras estiverem activadas, a luz lança sombras.</p></br><p><br> **Filter:** Produz sombras suaves em vez de sombras duras via PCF (Percentage Closer Filtering) </p></br> <p><br>**Tamanho:** O tamanho da textura a usar para mapeamento de sombra. Texturas maiores produzem melhores bordas sombras, mas são muito mais caros. Para mais informações, consulte [Shadows](shadows.md)</p></br> |
| Parâmetros de Bias | <p><br>Estes parâmetros são usados para evitar alguns artefatos da técnica de mapa sombra.</p></br> <p><br>**Depth Bias:** A quantidade de profundidade para adicionar à profundidade de amostragem para evitar acne sombra</p></br> <p><br>**Normal Offset Scale**: Um fator multiplicado pelo viés de profundidade para o normal </p></br> |
| Intensidade | A intensidade da luz. A cor é multiplicada por este valor antes de ser enviado para o shader. Nota: valores negativos produzem escuridão e têm efeitos imprevisíveis |
| Máscara de Culing | Quais grupos de entidades são afetados por esta luz. Por padrão, todos os grupos são afetados |

## Ver também

* [Adicionar uma luz](add-a-light.md)
* [Luzes de ponto](point-lights.md)
* [Luzes ambientais](ambient-lights.md)
* [Luzes Skybox](skybox-lights.md)
* [Luzes do ponto](spot-lights.md)
* [Eixos de luz](light-shafts.md)
* [Sondas de luz](light-probes.md)
* [Sombras](shadows.md)