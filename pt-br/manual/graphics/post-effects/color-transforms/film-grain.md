# Grão de filme

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

O **film granul** adiciona ruído em cada quadro para simular o grão de filmes usados em câmeras reais.

![media/film-grain-1.png](media/film-grain-1.png)

O padrão é gerado processualmente e muda em cada quadro.

Para simular o grão de filme real, o ruído deve ser mais visível em áreas de intensidade de luz média, e menos visível em áreas brilhantes ou escuras.

O padrão modifica localmente a luminância dos pixels afetados.

![media/film-grain-2.png](media/film-grain-2.png)

## Propriedades

| Propriedade | Descrição |
| ---------------- | --------------------------------------------------------------------------- |
| Montante | Montante/força do efeito |
| Tamanho do grão | Tamanho do grão |
| Animate | Quando ativado, o padrão processual muda em cada quadro |
| Fator de Luminância | Quão fortemente a luminância de pixel original é afetada pelo padrão de grão |

## Ver também

* [Correção de gama](gamma-correction.md)
* [ToneMap](tonemap.md)
* [Vignetação](vignetting.md)