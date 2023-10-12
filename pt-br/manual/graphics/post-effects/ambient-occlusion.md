# Oclusão ambiente

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

> [!Note]
> Tal como acontece com outros efeitos pós de consciência profunda, permitindo a oclusão ambiente anula MSAA (multisample anti-aliasing).

**Ambient occlusão** escurece áreas onde a luz é oclusiva por objetos opacos, como cantos e fendas. Você pode usá-lo para adicionar realismo sutil às cenas.

<p>
<video autoplay loop class="responsive-video" poster="media/occlusion-on.jpg">
   <source src="media/occlusion.mp4" type="video/mp4">
</video>
</p>

## Propriedades

![Propriedades ](media/ambient-occlusion-properties.png)

| Propriedade | Função |
|----------|---------
| Amostras | O número de pixels amostrados para determinar como é ocluído um ponto. Valores mais elevados reduzem o ruído, mas afetam o desempenho. Use com ** Contagem de blur** para encontrar um equilíbrio entre resultados e desempenho. |
| Escala de projeção | Escala o raio da amostra. Na maioria dos casos, `1` (sem escala) produz o resultado mais preciso. |
| Intensidade | A força do efeito de escurecimento em áreas oclusas |
| Bias de amostra | O ângulo em que Stride considera uma área de geometria um occluder. Em valores elevados, apenas uniões estreitas e fendas são considerados occluders. |
| Raio de amostra | Use com escala de projeto **** para controlar o raio do efeito de oclusão |
| Contagem de Blur | O número de vezes a imagem de oclusão ambiente é borrada. Números mais elevados reduzem o ruído, mas podem produzir artefatos. |
| Escala de Blur | O raio desfocado em pixels |
| Agulha de borda | Quanto o desfoque respeita as diferenças de profundidade das áreas oclusas. Os números mais baixos criam mais borrados, mas podem borrar áreas indesejáveis (ou seja, além das áreas oclusas). |
| Tamanho do amortecedor | A resolução a oclusão ambiente é calculada. O resultado é atualizado para a resolução do jogo. Tamanhos maiores produzem melhores resultados, mas usam mais memória e afetam o desempenho. |

## Ver também

* [Anti-aliasing](anti-aliasing.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Floresce](bloom.md)
* [Filtro brilhante](bright-filter.md)
* [Transformações de cor](color-transforms/index.md)
* [Profundidade de campo](depth-of-field.md)
* [Flare de lente](lens-flare.md)
* [Estrefas de luz](light-streaks.md)
* [Reflexões locais](local-reflections.md)