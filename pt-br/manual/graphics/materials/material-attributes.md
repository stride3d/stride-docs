# Atributos de material

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Atributos materiais** definem as características principais de um material, como sua cor difusa, modelo de sombreamento difuso, e assim por diante. Os atributos são organizados em **geometry**, **shading** e **misc**.

![media/material-attributes-1.png](media/material-attributes-1.png)

Existem dois tipos de atributo:

- atributos usados como valores de entrada para um modelo de sombreamento (por exemplo, o atributo **Diffuse** fornece apenas cor utilizada pelo modelo de sombreamento difuso)
- atributos que podem mudar o modelo de sombreamento (por exemplo, modelos de sombreamento difusos, como o modelo lambert, interpreta a cor do atributo difuso)

Os atributos contribuem para uma camada de um material. Se um material é usado diretamente como um material de modelo, todos os seus atributos de raiz são considerados parte da primeira camada.

Você também pode escrever [ shaders custom](../effects-and-shaders/custom-shaders.md) para usar em atributos materiais.

## Nesta secção

* [Atributos de geometria](geometry-attributes.md)
* [Atributos de Shading](shading-attributes.md)
* [Atributos diversos](misc-attributes.md)
   * [Sombreamento de casaco claro](clear-coat-shading.md)

## Ver também

* [Mapas de material](material-maps.md)
* [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)
* [Sombreadores personalizados](../effects-and-shaders/custom-shaders.md)
