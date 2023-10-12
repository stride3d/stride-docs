# Profundidade de campo

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>

Por padrão, a renderização produz uma imagem muito afiada, que pode parecer artificial. ** A profundidade dos efeitos campo** simula o comportamento de uma lente de câmera real focando um objeto, deixando objetos de fundo e primeiro plano fora do foco.

![media/realworld_dof_agave_flowers.jpg](media/realworld_dof_agave_flowers.jpg)

Para criar o efeito, Stride cria várias versões da imagem original com diferentes intensidades de blur e interpola entre eles. Quanto mais camadas utilizadas, melhor a qualidade, mas ao custo de desempenho.

## Propriedades

![media/depth-of-field-2.png](media/depth-of-field-2.png)

| Propriedade | Descrição |
| ---------- | -------- 
| Tamanho | Tamanho do [bokeh (Wikipedia)](https://en.wikipedia.org/wiki/Bokeh), expresso como um fator da largura da imagem para que seja independente da resolução. Quanto maior o tamanho, pior o desempenho |
| DOF Áreas | Áreas da profundidade do campo. Existem três zonas principais definidas pela sua distância da câmera: perto da área de foco (de X a Y), área de foco interno (de Y a Z), e área de foco distante (de Z a W) |
| Técnica | A técnica afeta tanto o desempenho quanto a forma do bokeh.  <p><br>**Circular Gaussian** é rápido, mas irrealista. <p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Rómbi triplo hexagonal** é mais pesado do que gaussiano. <p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Hexagonal McIntosh** é o mais pesado. <p><br>![media/depth-of-field-5.png](media/depth-of-field-5.png) |
| Foco automático | Atualiza automaticamente as áreas DOF para que a câmera se concentre no objeto no centro da tela |

## Ver também

* [Anti-aliasing](anti-aliasing.md)
* [Fogão](fog.md)
* [Linha de produção](outline.md)
* [Oclusão ambiente](ambient-occlusion.md)
* [Floresce](bloom.md)
* [Filtro brilhante](bright-filter.md)
* [Transformações de cor](color-transforms/index.md)
* [Flare de lente](lens-flare.md)
* [Estrefas de luz](light-streaks.md)