# Materials for developers
# Материалы для разработчиков

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This diagram shows the Material interfaces and implementation classes:
На этой диаграмме показаны интерфейсы материалов и классы реализации:

![media/materials-for-developers-1.png](media/materials-for-developers-1.png) 
![медиа/материалы-для-разработчиков-1.png](медиа/материалы-для-разработчиков-1.png)

- The interface @'Stride.Rendering.Materials.IMaterialDescriptor' is the root interface for a material description.
- Интерфейс @'Stride.Rendering.Materials.IMaterialDescriptor' является корневым интерфейсом для описания материала.
- The @'Stride.Rendering.Materials.IMaterialShaderGenerator' is the main interface used to generate a material shader of the material.
- @'Stride.Rendering.Materials.IMaterialShaderGenerator' — это основной интерфейс, используемый для создания шейдера материала.
- Each attribute and layer implements this interface to modify the final material shader.
- Каждый атрибут и слой реализует этот интерфейс для изменения окончательного шейдера материала.
- The @'Stride.Rendering.Materials.MaterialDescriptor' is the editor-time description of the material before being compiled into a material shader.
- @'Stride.Rendering.Materials.MaterialDescriptor' — это описание материала во время редактирования перед его компиляцией в шейдер материала.
- The @'Stride.Rendering.Material' class is the runtime material shader generated from the @'Stride.Rendering.Materials.MaterialDescriptor'
- Класс @'Stride.Rendering.Material' — это шейдер материала во время выполнения, сгенерированный из @'Stride.Rendering.Materials.MaterialDescriptor'.

## See also
## Смотрите также

- [Material maps](material-maps.md)
- [Материальные карты](material-maps.md)
- [Material attributes](material-attributes.md)
- [Атрибуты материала](material-attributes.md)
- [Material layers](material-layers.md)
- [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
