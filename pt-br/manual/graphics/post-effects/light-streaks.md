# Estrefas de luz

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

Semelhante ao efeito [bloom](bloom.md), o efeito **light streak** usa o resultado do filtro [bright](bright-filter.md) para fazer as áreas brilhantes sangrar ao longo de uma direção. Ele cria feixes de padrão estrela do ponto de luz.

![media/light-streaks-1.png](media/light-streaks-1.png)

## Propriedades

![media/light-streaks-2.png](media/light-streaks-2.png)

| Propriedade | Descrição |
| ------------------------- | ---------------- 
| Montante | Força da mancha de luz |
| Contagem de Streak | Número de feixes emitidos por um ponto brilhante. Quanto mais manchas, maior o custo de desempenho. |
| Atenuação | Quão rápido a luz atenua ao longo de uma série (0 para atenuação imediata, 1 para nenhuma atenuação) |
| Fase | Fase (ângulo) do padrão semelhante a estrela |
| Cor Aberração Força | Força da aberração de cor ao longo das manchas. <br>![media/light-streaks-3.png](media/light-streaks-3.png) <br> Anote as faixas envolvem várias cores (amarelo, roxo, verde, rosa). |
| É Anamórfico | Simula o comportamento das lentes anamórficas, amplamente utilizadas nas produções de Hollywood. <br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> O efeito acima é alcançado usando duas sequências de luz com uma fase de 0, permitindo o modo anamorfo, e ligeiramente distorcendo o resultado de passagem brilhante horizontalmente. |

## Ver também

* [Anti-aliasing](anti-aliasing.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Oclusão ambiente](ambient-occlusion.md)
* [Floresce](bloom.md)
* [Filtro brilhante](bright-filter.md)
* [Transformações de cor](color-transforms/index.md)
* [Profundidade de campo](depth-of-field.md)
* [Flare de lente](lens-flare.md)
