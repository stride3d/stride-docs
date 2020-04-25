# Materials for developers

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

This diagram shows the Material interfaces and implementation classes:

![media/materials-for-developers-1.png](media/materials-for-developers-1.png) 

- The interface @'Stride.Rendering.Materials.IMaterialDescriptor' is the root interface for a material description.
- The @'Stride.Rendering.Materials.IMaterialShaderGenerator' is the main interface used to generate a material shader of the material.
- Each attribute and layer implements this interface to modify the final material shader.
- The @'Stride.Rendering.Materials.MaterialDescriptor' is the editor-time description of the material before being compiled into a material shader.
- The @'Stride.Rendering.Material' class is the runtime material shader generated from the @'Stride.Rendering.Materials.MaterialDescriptor'

## See also

- [Material maps](material-maps.md)
- [Material attributes](material-attributes.md)
- [Material layers](material-layers.md)
* [Material slots](material-slots.md)