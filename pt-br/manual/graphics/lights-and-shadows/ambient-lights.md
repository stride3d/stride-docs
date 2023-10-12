# Luzes ambientais

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artista </span>

** Luzes abrangentes** são luzes uniformes que iluminam toda a cena. Porque eles não vêm de qualquer direção ou fonte específica, as luzes ambiente iluminam tudo igualmente, mesmo objetos na sombra ou obscurecidos por outros objetos. Eles não lançam sombras.

As luzes ambiente não são fontes de luz realistas. Em vez disso, eles contribuem para o brilho geral e estética de uma cena.

![media/AmbientLightOverview.png](media/AmbientLightOverview.png)

Um exemplo de um objeto iluminado uniformemente com iluminação ambiente (com um material difuso puro):

![media/AmbientLight.png](media/AmbientLight.png)

## Propriedades

![media/AmbientLightProperties.png](media/AmbientLightProperties.png)

| Propriedade | Descrição |
| ------------ | --------------------
| Cor | A cor da luz (RGB) |
| Intensidade | A intensidade da luz. A cor é multiplicada por este valor antes de ser enviado para o shader. Nota: valores negativos produzem escuridão e têm efeitos imprevisíveis |
| Máscara de Culing | Quais grupos de entidades são afetados pela luz. Por padrão, todos os grupos são afetados |

## Ver também

* [Adicionar uma luz](add-a-light.md)
* [Luzes de ponto](point-lights.md)
* [Luzes direcionais](directional-lights.md)
* [Luzes Skybox](skybox-lights.md)
* [Luzes do ponto](spot-lights.md)
* [Sondas de luz](light-probes.md)
* [Sombras](shadows.md)