# Atributos de geometria

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Os atributos **geometry** definem a forma de um material.

![ Propriedades geométricas](media/geometry-properties.png)

## Tessellation

A tessellation em tempo real usa uma característica HW da GPU para subdividir triângulos massivamente. Isso aumenta o realismo e o potencial de deformações da geometria superficial.

Você pode escolher **none**, **flat tessellation**, ou **point normal tessellation**.

| Sem melancia | Tesselação plana | Ponto normal de melancia |
| --------------  | -------------- | -------------------- 
| ![media/material-attributes-2.png](media/material-attributes-2.png) | ![media/material-attributes-3.png](media/material-attributes-3.png) | ![media/material-attributes-4.png](media/material-attributes-4.png) |

### Tesselação plana

Esta opção tessellates a malha uniformemente.

![media/material-attributes-5.png](media/material-attributes-5.png)

Nas imagens abaixo, observe como a tesselação plana adiciona triângulos extras, mas não leva em conta a curva:

| Sem melancia | Tesselação plana |
| ---------------- | ----------------- 
| ![media/material-attributes-6.png](media/material-attributes-6.png) | ![media/material-attributes-7.png](media/material-attributes-7.png) |

| Propriedade | Descrição |
| ---------------------- | ------------
| Tamanho do triângulo | O tamanho de um triângulo tesselado em unidades de espaço de tela |
| Média de bordas adjacentes | Ajuste os valores do tamanho do triângulo da média dos valores das bordas adjacentes |

### Ponto normal de melancia

Esta opção tessella a malha usando a curvatura fornecida pela malha normal.

![media/material-attributes-8.png](media/material-attributes-8.png)

As imagens abaixo mostram como ponto normal tessellation adiciona triângulos extras enquanto leva em conta a curvatura da malha:

| Sem melancia | Ponto normal de melancia |
| ---------------|  ---------------------- |
| ![media/material-attributes-6.png](media/material-attributes-6.png) | ![media/material-attributes-9.png](media/material-attributes-9.png) |

| Propriedade | Descrição |
| ---------------------- | ------------
| Tamanho do triângulo | O tamanho de um triângulo tesselado em unidades de espaço de tela |
| Média de borda adjacente | Ajuste os valores **triangle size** e **normal curvature** da média dos valores de borda adjacente |

## Deslocamento

Sob as propriedades **Displacement**, você pode especificar **displacement map**. Isso desloca a geometria da malha.

![media/material-attributes-10.png](media/material-attributes-10.png)

Dependendo da fase em que o deslocamento é aplicado, os resultados podem ser muito diferentes:

| Deslocamento com tom de vértice | Tessellation com deslocamento |
| ------| ----------------- |
| ![media/material-attributes-11.png](media/material-attributes-11.png) | ![media/material-attributes-12.png](media/material-attributes-12.png) |

| Propriedade | Descrição |
| ---------------- | ------------ 
| Mapa de deslocamento | A textura de deslocamento como um provedor de cores material [](material-maps.md) |
| Intensidade | A quantidade de deslocamento |
| Escala e Bias | Quando ativado, o valor que vem da textura é considerado um valor positivo que varia de `0.0` a `1.0` e o shader aplica uma escala para obter o intervalo -1.0 a `1.0` |
| Fase de Shader | Especifique qual estágio shader o mapa de deslocamento deve ser aplicado a: shader vértice ou shader de domínio (usado com tessellation) |

## Superfície

![media/material-attributes-14.png](media/material-attributes-14.png)

Sob as propriedades **Surface**, você pode definir um [Normal maps](../textures/normal-maps.md) para definir **macro** superfície normal. O mapa **normal** fornece perturbação per-pixel normal do normal da malha. Os mapas normais criam a aparência de colisões e recuos na malha:

| Plano | Usando um mapa normal |
| -----| ----------- 
| ![media/material-attributes-15.png](media/material-attributes-15.png) | ![media/material-attributes-16.png](media/material-attributes-16.png) |

| Propriedade | Descrição |
| ------------ | ---------------
| Mapa normal | O provedor de cores do mapa normal |
| Escala e deslocamento | Valores de interpretação da textura como valores positivos variando de `0.0` a `1.0`. O shader aplica uma escala para obter o intervalo `-1.0` a `1.0`. |
| Reconstruir Z | Se não houver nenhum componente Z na textura, reconstrua-o dos componentes X e Y. Isso assume que X<sup>2</sup> + Y<sup>2</sup> + Z<sup>2</sup> = 1 e que Z é sempre positivo, então nenhum vetor normal pode apontar para o lado traseiro da superfície. Recomendamos que você ativar esta opção, como Stride pode remover o componente Z quando você comprimir mapas normais. |

Para obter mais informações sobre mapas normais, consulte a página [normal maps](../textures/normal-maps.md).

## Micro superfície

Sob a configuração **Micro superfície**, você pode fornecer um mapa **gloss** para fornecer informações per-pixel para gloss.

![media/material-attributes-17.png](media/material-attributes-17.png)

Se você selecionar **Float**:

- um valor de `1.0` significa que a superfície é altamente brilhante (o normal grosseiro não é perturbado)
- um valor de `0.0` significa que a superfície é muito áspera (o normal grosseiro é altamente perturbado em várias direções)

As capturas de tela abaixo mostram diferentes níveis de brilho em um material:

- Diffuse = #84848484, Lambert
- Metalização especular = 1.0, GGX

| Gloss = 0,0 | 0,25 | 0,5 | 0 | 1.0 |
| ---------------- | ---- | ---- |----- | ---
| ![media/material-attributes-18.png](media/material-attributes-18.png) | ![media/material-attributes-19.png](media/material-attributes-19.png) | ![media/material-attributes-20.png](media/material-attributes-20.png) | ![media/material-attributes-21.png](media/material-attributes-21.png) | ![media/material-attributes-22.png](media/material-attributes-22.png) |

| Property | Descrição
| ---------------- | -- |
| Gloss map | The gloss map color provider
| Invert | Inverts the gloss value (por exemplo, um valor de `1.0` produz zero gloss em vez de máximo). Isso efetivamente transforma o valor do gloss em um valor **roughness**, como usado em outros motores de jogo

Se você tiver reflexos locais ativados, a cena se reflete em materiais com um valor de mapa de brilho superior ao limiar especificado nas propriedades de reflexos locais. Para mais informações, consulte [Reflexões locais](../post-effects/local-reflections.md).

## Ver também

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
   * [Atributos de Shading](shading-attributes.md)
   * [Atributos diversos](misc-attributes.md)
   * [Sombreamento de capa clara](clear-coat-shading.md)
* [Shading de cobertura clara](clear-coat-shading.md)
* [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)
* [Sombreadores personalizados](../effects-and-shaders/custom-shaders.md)
