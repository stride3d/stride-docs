# Atributos diversos

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

![ Propriedades mínimas](media/misc-properties.png)

## Oclusão

Sob as propriedades **Oclusão**, você pode definir um mapa de oclusão **.** Este é o atributo de oclusão padrão. O mapa de oclusão usa a informação de oclusão da geometria assada em uma textura para modular a iluminação ambiente e direta.

![media/material-attributes-39.png](media/material-attributes-39.png)

As capturas de tela abaixo demonstram o uso de mapas de oclusão e mapas da cavidade:

| Mapa de Oclusão | Mapa de Cavidade | Composição final |
| ------- | ------ | ------- 
| ![media/material-attributes-40.png](media/material-attributes-40.png) | ![media/material-attributes-41.png](media/material-attributes-41.png) | ![media/material-attributes-42.png](media/material-attributes-42.png) |
| Oclusão grosseira da luz ambiente | Oclusão fina da luz direta | Resultado |

| Propriedade | Descrição |
| --------- | ---- 
| Mapa de Oclusão | O provedor de escalar de mapa de oclusão que determina o quanto a luz ambiente é acessível no material. Um valor de 1.0 significa que o material é totalmente iluminado pela iluminação ambiente. Um valor de 0,0 significa que o material não é iluminado pela iluminação ambiente |
| Iluminação direta Influência | Aplica-se ao Mapa de Oclusão e influencia a iluminação direta |
| Mapa de Cavidade | O provedor de escalar de mapa da cavidade é multiplicado com iluminação direta. Permite definir cavidade granulada muito fina onde a luz direta não pode entrar. O mapa da cavidade é geralmente definido para cavidade côncava fina |
| Cavidade de Diffuse | Um fator para a influência de iluminação difusa do mapa da cavidade. Um valor de 1.0 significa que o mapa da cavidade influencia totalmente a iluminação difusa |
| Cavidade especular | Um fator para a influência de iluminação especular do mapa da cavidade. Um valor de 1.0 significa que o mapa da cavidade influencia totalmente a iluminação especular |

## Transparência

Sob as propriedades **Transparência**, você pode especificar valores que alteram a transparência do material. Você pode coose **Blend**, **Additive**, ou **Cutoff**.

### Aditivo

A transparência aditiva leva em conta o alfa difuso e difuso/emissivo.

![media/material-attributes-47.png](media/material-attributes-47.png)

- Se a propriedade **Alpha** é inferior a 0,5, apenas os destaques especulares são visíveis. O material em si é completamente invisível.

   | Alfa = 0,25 | Alfa = 0,5 |
   | -------------- | -----------
   | ![media/material-attributes-48.png](media/material-attributes-48.png) | ![media/material-attributes-49.png](media/material-attributes-49.png) |
   | Só vemos o destaque especular no modo aditivo | A transparência é totalmente aditiva. Destaques especulares no máximo |

- Se o **Alpha** <= 1.0, o material é semi-opaco com o componente difuso/emissivo. Se o componente difuso tiver um alfa, é transparente.

   | Alfa = 0,75 | Alfa = 1.0 |
   | -------------- | ---------------------- |
   | ![media/material-attributes-50.png](media/material-attributes-50.png) | ![media/material-attributes-51.png](media/material-attributes-51.png) |
   | Destaques especulares, difuso com difuso alfa e semi-opaco | Destaques especulares, difuso com difuso alfa e opaco |

| Propriedade | Descrição |
| -------- | -----------
| Alfa | O valor alfa é interpretado assim:<p><br> Alfa <= 0,5, o material é renderizado em modo aditivo sem o componente difuso (apenas destaques especulares)</p></br> <p><br>Alpha <= 1.0, o material é renderizado em modo semi-opaco com o componente difuso/emissivo. Se o componente difuso tem um alfa, é exibido como transparente</p></br> |
| Tint | Aplicar uma tonalidade de cor na camada de transparência |

### Corte

Rende um material quando a cor alfa atual está acima do limiar que você especificar com o controle deslizante **Alpha**.

![media/material-attributes-43.png](media/material-attributes-43.png)

As capturas de tela a seguir mostram a influência do valor Alpha de corte.

| Alfa = 0,01 | Alfa = 0,5 | Alfa = 1.0 |
| -------------| --------------- | ------------ 
| ![media/material-attributes-44.png](media/material-attributes-44.png) | ![media/material-attributes-45.png](media/material-attributes-45.png) | ![media/material-attributes-46.png](media/material-attributes-46.png) |

### Brasão clara

**Clear-coat shading** usa renderização física para simular a pintura do veículo.

![ Revestimento da orelha](media/clear-coat-2.jpg)

Para detalhes, veja [clear-coat shading](clear-coat-shading.md).

## Ver também

* [Atributos de geometria](geometry-attributes.md)
* [Atributos de Shading](shading-attributes.md)
* [Sombreamento de capa clara](clear-coat-shading.md)
* [Mapas de material](material-maps.md)
* [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)
* [Sombreadores personalizados](../effects-and-shaders/custom-shaders.md)