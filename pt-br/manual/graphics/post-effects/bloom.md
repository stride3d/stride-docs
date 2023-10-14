# Floresce

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

O efeito **bloom** leva as áreas mais brilhantes de uma imagem, estende-as e sangra-as nas áreas circundantes para simular luz brilhante esmagando a câmera.

![media/bloom-1.png](media/bloom-1.png)

Ele usa o resultado do efeito [bright filter](bright-filter.md) como entrada.

## Propriedades

![media/bloom-2.png](media/bloom-2.png)

| Propriedade | Descrição |
| -------------- | ---- 
| Radius | Raio da flor. No entanto, é importante ressaltar que valores elevados podem afetar o desempenho. |
| Montante | Montante/força da flor. |
| Rato de Sigma | Isso afeta a queda da flor. É o desvio padrão [](http://en.wikipedia.org/wiki/Standard_deviation) (sigma) usado na fórmula [Gaussian blur](http://en.wikipedia.org/wiki/Gaussian_blur) ao calcular o kernel da flor. |
| Distorção | Estica a imagem horizontal ou verticalmente. |
| Depois da imagem | Simula [afterimage (Wikipedia)](http://en.wikipedia.org/wiki/Afterimage) — o efeito de manchas brilhantes "queimando" na retina quanto mais você olha para eles, antes de desaparecer.  <p><br>![media/bloom-3.png](media/bloom-3.png) |
| Fade Out Speed | O fator pelo qual o afterimage (se habilitado) diminui em cada quadro (1 significa persistência infinita, enquanto 0 significa nenhuma persistência em tudo) |
| Sensibilidade | O quão sensível é a imagem de depois (se ativada) à luz. Quanto maior esse valor é, mais rápido o efeito é criado quando a câmera se concentra em uma luz. |
| Filtragem expandida | Inverte FXAAA e floresce, e usa um núcleo de convolução mais rico durante a borrada. Isso ajuda a reduzir o brilho temporal. |

## Ver também

* [Anti-aliasing](anti-aliasing.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Oclusão ambiente](ambient-occlusion.md)
* [Filtro brilhante](bright-filter.md)
* [Transformações de cor](color-transforms/index.md)
* [Profundidade de campo](depth-of-field.md)
* [Flare de lente](lens-flare.md)
* [Estrefas de luz](light-streaks.md)