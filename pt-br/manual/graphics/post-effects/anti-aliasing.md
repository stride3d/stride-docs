# Anti-aliasing

**Anti-aliasing** alisa bordas irregulares. Para o pós-processamento, a Stride usa anti-aliasing (FXAA), uma técnica de espaço em tela única com baixo impacto de desempenho.

![Propriedades ](media/anti-aliasing-closeup-comparison.png)

> [!Note]
> Atualmente, o pós-efeito anti-aliasing não funciona corretamente em dispositivos Android.

Stride também inclui **MSAA** (multisample anti-aliasing), mas este não é um efeito pós. Você pode ativar o MSAA nas propriedades **forward renderer**.

## Propriedades

![Propriedades ](media/anti-aliasing.png)

| Propriedade | Descrição |
| --------------    | ---- 
| Dither | A quantidade de dither. Menos dither produz melhores resultados, mas é mais lento. |
| Qualidade | A qualidade do efeito. Isso afeta diretamente o desempenho. |
| Iluminação de entrada de alfa | Recupere a luminância do canal alfa da cor de entrada. Isto é mais lento, mas mais preciso. Se desativado, o efeito usa o componente verde da cor de entrada como uma aproximação para a luminância. |

## Ver também

* [Oclusão ambiente](ambient-occlusion.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Floresce](bloom.md)
* [Filtro brilhante](bright-filter.md)
* [Transformações de cor](color-transforms/index.md)
* [Profundidade de campo](depth-of-field.md)
* [Flare de lente](lens-flare.md)
* [Estrefas de luz](light-streaks.md)