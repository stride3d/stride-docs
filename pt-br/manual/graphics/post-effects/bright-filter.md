# Filtro brilhante

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

O filtro **bright** extrai as áreas mais brilhantes de uma imagem. O filtro brilhante em si não é um efeito pós, mas seu resultado é usado mais tarde por outros efeitos, como [bloom](bloom.md), [light streaks](light-streaks.md), e [lens flare](lens-flare.md).

## Propriedades

![media/bright-filter-1.png](media/bright-filter-1.png)

| Propriedade | Descrição |
| --------- | --------- 
| Limitação | O limiar usado para determinar se uma cor passa ou falha no filtro brilhante. |
| Steepness | Aumentar a íngreme tem um efeito semelhante para aumentar o limiar, mas causa menos risco aliado. No entanto, o efeito é mais lavado para fora. Para uma melhor estabilidade temporal, se sua cena tem spreads HDR, definir a inclinação para um valor em algum lugar no meio do máximo esperado permite a filtragem suave de pontos brilhantes. Para nitidez, recomendamos que mantenha um limiar. |
| Cor | O resultado do filtro brilhante é modulado por este valor de cor, em seguida, afeta a cor de outros efeitos pós. Se definido como branco, a cor não é modificada. |

## Nesta secção

* [Anti-aliasing](anti-aliasing.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Oclusão ambiente](ambient-occlusion.md)
* [Floresce](bloom.md)
* [Transformações de cor](color-transforms/index.md)
* [Profundidade de campo](depth-of-field.md)
* [Flare de lente](lens-flare.md)
* [Estrefas de luz](light-streaks.md)