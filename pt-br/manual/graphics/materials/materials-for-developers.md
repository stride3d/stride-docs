# Materiais para desenvolvedores

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Este diagrama mostra as interfaces Material e classes de implementação:

![media/materials-for-developers-1.png](media/materials-for-developers-1.png)

- A interface @'Stride.Rendering.Materials.IMaterialDescriptor' é a interface raiz para uma descrição do material.
- O @'Stride.Rendering.Materials.IMaterialShaderGenerator' é a interface principal usada para gerar um shader material do material.
- Cada atributo e camada implementa esta interface para modificar o shader de material final.
- O @'Stride.Rendering.Materials.MaterialDescriptor' é a descrição do editor-tempo do material antes de ser compilado em um shader material.
- O @'Stride.Rendering. A classe material é o shader de material de tempo de execução gerado a partir do @'Stride.Rendering.Materials.MaterialDescriptor '

## Ver também

- [Mapas de material](material-maps.md)
- [Atributos de material](material-attributes.md)
- [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)