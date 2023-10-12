# Atributos de Shading

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

O material **shading atributos** define as características de cor do material e como ele reage à luz.

![Shading atributos](media/shading-properties.png)

> [!Note]
> Para exibir um material, você precisa selecionar pelo menos um modelo de sombreamento (diffuse, modelo especular ou emissivo) nos atributos do modelo.

## Diffuse

O **diffuse** é a cor básica do material. Um material puro difuso é completamente não reflexivo e "flat" na aparência.

![media/material-attributes-25.png](media/material-attributes-25.png)

A contribuição difusa final é calculada assim:

- o **diffuse** define a cor utilizada pelo modelo difuso

- o modelo **diffuse** define qual modelo de sombreamento é usado para renderizar o componente difuso (ver abaixo)

Atualmente, o atributo difuso suporta apenas um **diffuse map**.

![media/material-attributes-23.png](media/material-attributes-23.png)

### Modelo de difuso

O modelo **diffuse** determina como o material difuso reage à luz. Você pode usar o **Lambert** ou **cel-shading**.

#### Modelo Lambert

Sob o modelo Lambert, a luz é refletida igualmente em todas as direções com uma intensidade seguindo uma distribuição angular cosina (ângulo entre o normal e a luz):

![media/material-attributes-24.png](media/material-attributes-24.png)

> [!Note]
> Um material lambertiano puro não existe na realidade. Um material sempre tem uma pequena reflexão especular. Este efeito é mais visível em ângulos de pastagem (uma superfície mais difusa torna-se brilhante em ângulo de pastagem).

| Propriedade | Descrição |
| ------------- | ----------- 
| Mapa do Diffuse | O fornecedor de cores de mapa difuso |
| Modelo de difuso | O modelo de sombreamento para iluminação difusa |

## Espectro

A **specular** é um ponto de luz refletido em um material.

![ Destaque especial](media/specular-highlight.png)

A cor especular pode ser definida usando um mapa de metalidade (que usa a cor difusa como cor de base), ou um mapa especular (a cor especular é definida separadamente da cor difusa).

### Mapa de metalurgia

O mapa de metalidade ** simplifica a parametrização entre a cor difusa e especular.**

Ao levar em conta o fato de que quase todos os materiais sempre têm alguma "metalidade" / reflexão neles, usando o mapa de metalness fornece materiais realistas com parametrização mínima.

A cor especular final é calculada misturando uma cor de baixa reflexão fixa e a cor difusa.

- Com a cor da metalidade em `0.0`, a cor especular eficaz é igual a `0.02`, enquanto a cor difusa é inalterada. O material não é metal, mas exibe alguma reflexão e é sensível ao efeito Fresnel.

- Com a cor da metalidade em `1.0`, a cor especular eficaz é igual à cor difusa, e a cor difusa é definida como `0`. O material é considerado um metal puro.

   ![media/material-attributes-26.png](media/material-attributes-26.png)

As capturas de tela abaixo mostram o resultado do fator de metalização em um material com os seguintes atributos:

- Gloss = `0.8`
- Diffuse = `#848484`, Lambert
- GGX especular

| Puro difuso (sem metalness) | Metalização = `0.0` | Metalização = `1.0` |
| ---------------------------- | ------------------ | ---------------
| ![media/material-attributes-27.png](media/material-attributes-27.png) | ![media/material-attributes-28.png](media/material-attributes-28.png) | ![media/material-attributes-29.png](media/material-attributes-29.png) |
| - Não. A cor difusa é dominante | - Não. A cor difusa é dominante | - Não. A cor difusa não é visível |
| - Não. A cor especular não é visível | - A cor especular é visível (`0.02`) | - Não. A cor especular é visível |

### Mapa especular

O mapa especular fornece mais controle sobre a cor especular real, mas exige que você modifique a cor difusa em conformidade.

Ao contrário do fluxo de trabalho de metal, isso permite que você tenha uma cor especular diferente da cor difusa mesmo em cenários de baixa reflexão, permitindo que materiais com comportamento especial.

> [!Note]
> Você pode combinar metais e fluxos de trabalho especulares no mesmo material adicionando [layers](material-layers.md).

## Modelo especular

Uma superfície especular pura produz um destaque de uma luz em uma direção de espelho. Na prática, uma ampla gama de materiais especulares, não inteiramente lisos, pode refletir a luz em várias direções. Stride simula isso usando o modelo **microfacet**, também conhecido como [Cook-Torrance (papel acadêmico)](http://www.cs.columbia.edu/~belhumeur/courses/appearance/cook-torrance.pdf).

![media/material-attributes-33.png](media/material-attributes-33.png)

A microfaceta é definida pela seguinte fórmula, onde Rs é o reflexo especular resultante:

![media/material-attributes-34.png](media/material-attributes-34.png)

| Propriedade | Descrição |
| ------------------- | ------- 
| Fresnel | Define a quantidade de luz que é refletida e transmitida. Os modelos suportados são: <br><p>**Schlick**: Uma aproximação do efeito Fresnel (padrão)</br> <br><p>**Thin glass**: Uma simulação de luz passando pelo vidro</br>  <br><p>**Nenhum **: O material como-é sem efeito de Fresnel</br> |
| Visibilidade | Define a visibilidade entre as microfacetas entre (0, 1). Também conhecido como atenuação da geometria - Sombra e Mascar - na original Cook-Torrance. Stride simplifica a fórmula para usar o termo de visibilidade em vez disso: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br>      <br><p>e <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br>        <br><p>**Schlick GGX** (padrão)</br> <br><p> **Implicit**: O microsuperfície é sempre visível e não gera sombras ou mascaramento</br> <br><p>**Cook-Torrance**</br>  <br><p>**Kelemen**</br> <br><p>**Neumann**</br> <br><p>**Smith-Beckmann**</br> <br><p>**Smith-GGX correlacionado**</br>  <br><p>**Schlick-Beckmann**</br> |
| Distribuição normal | <br><p>Define como o normal é distribuído. O atributo gloss é usado por esta parte da função para modificar a distribuição do normal.</br> <br><p>**GX** (padrão) </br> <br><p>**Beckmann**</br>  <br><p>**Blinn-Phong**</br> |
| Fresnel | Define a quantidade de luz que é refletida e transmitida. Os modelos suportados são: <br><p>**Schlick**: Uma aproximação do efeito Fresnel (padrão)</br> <br><p>**Thin glass**: Uma simulação de luz passando pelo vidro</br>  <br><p>**Nenhum **: O material como-é sem efeito de Fresnel</br> |
| Visibilidade | Define a visibilidade entre as microfacetas entre (0, 1). Também conhecido como atenuação da geometria - Sombra e Mascar - na original Cook-Torrance. Stride simplifica a fórmula para usar o termo de visibilidade em vez disso: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br>      <br><p>e <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br>        <br><p>**Schlick GGX** (padrão)</br> <br><p> **Implicit**: O microsuperfície é sempre visível e não gera sombras ou mascaramento</br> <br><p>**Cook-Torrance**</br>  <br><p>**Kelemen**</br> <br><p>**Neumann**</br> <br><p>**Smith-Beckmann**</br> <br><p>**Smith-GGX correlacionado**</br>  <br><p>**Schlick-Beckmann**</br> |
| Distribuição normal | <br><p>Define como o normal é distribuído. O atributo gloss é usado por esta parte da função para modificar a distribuição do normal.</br> <br><p>**GX** (padrão) </br> <br><p>**Beckmann**</br>  <br><p>**Blinn-Phong**</br> |
| Fresnel | Define a quantidade de luz que é refletida e transmitida. Os modelos suportados são: <p><br>**Schlick**: Uma aproximação do efeito Fresnel (padrão)</p></br> <p><br>**Thin glass**: Uma simulação de luz passando pelo vidro</p></br>  <p><br>**None**: O material como-é sem efeito de Fresnel</p></br> |
| Visibilidade | Define a visibilidade entre as microfacetas entre (0, 1). Também conhecido como atenuação da geometria - Sombra e Mascar - na original Cook-Torrance. Stride simplifica a fórmula para usar o termo de visibilidade em vez disso: <p><br>![media/material-attributes-35.png](media/material-attributes-35.png)</p></br>      <p><br>e <p><br>![media/material-attributes-36.png](media/material-attributes-36.png)</p></br>        <p><br>**Schlick GGX** (padrão)</p></br> <p><br> **Implicit**: O microsuperfície é sempre visível e não gera sombras ou mascaramento</p></br> <p><br>**Cook-Torrance**</p></br>  <p><br>**Kelemen**</p></br> <p><br>**Neumann**</p></br> <p><br>**Smith-Beckmann**</p></br> <p><br>**Smith-GGX correlacionados**</p></br>  <p><br>**Schlick-Beckmann**</p></br> |
| Distribuição normal | <p><br>Define como o normal é distribuído. O atributo gloss é usado por esta parte da função para modificar a distribuição do normal.</p></br> <p><br>**GGX** (padrão) </p></br> <p><br>**Beckmann**</p></br>  <p><br>**Blinn-Phong**</p></br> |

## Emissário

Um material **emissivo** é uma superfície que emite luz.

![media/material-attributes-37.png](media/material-attributes-37.png)

Com HDR, um [Bloom](../post-effects/bloom.md) e um [Bright filter](../post-effects/bright-filter.md) efeitos pós-processamento, podemos ver a influência de um material emissivo:

![media/material-attributes-38.png](media/material-attributes-38.png)

| Propriedade | Descrição |
| ------------ | -------------- 
| Mapa emissivo | O provedor de cores do mapa emissivo |
| Intensidade | O fator para multiplicar pela cor do fornecedor de cores |
| Usar alfa | Use o alfa do mapa emissivo como a cor alfa principal do material (em vez de usar o alfa do mapa difuso por padrão) |

## Ver também

* [Atributos de geometria](geometry-attributes.md)
* [Atributos diversos](misc-attributes.md)
* [Mapas de material](material-maps.md)
* [Camadas de material](material-layers.md)
* [Materiais para desenvolvedores](materials-for-developers.md)
* [Sombreadores personalizados](../effects-and-shaders/custom-shaders.md)
