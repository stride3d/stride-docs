# Materiais de partículas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Materials** define como a forma expandida deve ser renderizada. Eles definem cores, texturas e outros parâmetros.

**Materiais de peças** são versões simplificadas de [materiais usados para malhas](../graphics/materials/index.md). Há apenas um tipo de material atualmente, o material emissivo dinâmico.

## Dinâmica emissiva

Este material usa uma cor translúcida emissiva RGBA para o pixel shading. No modo de renderização HDR, os valores são usados como intensidade e podem ser superiores a 1.

![media/particles-reference-materials-1.png](media/particles-reference-materials-1.png)

| Propriedade | Descrição |
|---------------------|------------
| Alfa-Add | A renderização translúcida suporta a solução alfa, mistura aditiva ou qualquer coisa no meio. Com este parâmetro, você pode controlar o quanto as partículas em branco (0) ou aditivo (1) devem ser. |
| Culinária | Não há opções para não abraçar, cara frontal e traseiro. Partículas voltadas para a câmera sempre têm sua face frontal em direção à câmera. |
| Emissário | A cor RGBA emissiva para a partícula. Veja [Mapas importantes](../graphics/materials/material-maps.md) para uma descrição completa. |
| Coords UV | Para partículas que usam textura amostragem uv coordena animação pode ser especificado. Os dois tipos atualmente existentes são especificados abaixo. |
### Coords UV — Flipbook

A animação flipbook considera uma textura uma sequência de quadros e exibe-o um quadro de cada vez, como um flipbook.

Esta imagem é um exemplo de uma textura de animação 4x4 flipbook de uma explosão:

![media/particles-reference-materials-4.png](media/particles-reference-materials-4.png)

A animação flipbook tem as seguintes propriedades:

![media/particles-reference-materials-2.png](media/particles-reference-materials-2.png)

| Propriedade | Descrição |
|---------------------|------------
| Divisões X | O número de colunas para dividir a textura em |
| Divisão Y | O número de linhas para dividir a textura em |
| Quadro de partida | O quadro para iniciar a animação. O quadro superior esquerdo é 0 e aumenta 1 da esquerda para a direita antes de descer. |
| Velocidade de animação | O número total de quadros para mostrar a vida útil da partícula. Se Speed = X x Y, então a animação mostra quadros **all** sobre a vida útil da partícula. A velocidade é relativa; partículas com mais tempo de vida têm animação mais lenta. |

### Coords UV — Rolagem

A animação de rolagem define um retângulo inicial para o outdoor ou quad, que se move através da textura para sua posição final. Isso cria uma rolagem ou um efeito de escala da textura através da superfície do quad.

As coordenadas de textura podem ir abaixo de 0 ou acima 1. Como a textura é amostrada depende do modo de endereçamento definido nos mapas materiais [](../graphics/materials/material-maps.md). Para mais informações, consulte a documentação [MSDN](http://tinyurl.com/TextureAddressingModes).

A animação de rolagem tem as seguintes propriedades:

![media/particles-reference-materials-3.png](media/particles-reference-materials-3.png)

| Propriedade | Descrição |
|---------------------|-------------
| Quadro de início | O retângulo inicial para amostragem de textura quando a partícula primeiro desova |
| Quadro final | O último retângulo para amostragem de textura quando a partícula desaparece |

## Ver também

* [Criar partículas](create-particles.md)
* [Emitters](emitters.md)
* [Formas](shapes.md)
* [Spawners](spawners.md)
* [Iniciantes](initializers.md)
* [Atualizações](updaters.md)