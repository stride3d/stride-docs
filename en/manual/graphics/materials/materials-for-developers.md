# Materials for developers

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

This diagram shows the Material interfaces and implementation classes:

![media/materials-for-developers-1.png](media/materials-for-developers-1.png) 

- The interface @'Stride.Rendering.Materials.IMaterialDescriptor' is the root interface for a material description.
- The @'Stride.Rendering.Materials.IMaterialShaderGenerator' is the main interface used to generate a material shader of the material.
- Each attribute and layer implements this interface to modify the final material shader.
- The @'Stride.Rendering.Materials.MaterialDescriptor' is the editor-time description of the material before being compiled into a material shader.
- The @'Stride.Rendering.Material' class is the runtime material shader generated from the @'Stride.Rendering.Materials.MaterialDescriptor'

# Modifying parameters at runtime

The file @'Stride.Rendering.Materials.MaterialKeys' contains most material keys you might need to use, have a look through it to figure out which one you might need to get to modify the parameter you are interested in.

Let's say you have this fairly simple material
![media/runtime-param-modif-ex.png](media/runtime-param-modif-ex.png)

And you want to clone that material, but change its color to red at runtime.
Searching through the different keys contained in @'Stride.Rendering.Materials.MaterialKeys' you would find `MaterialKeys.DiffuseValue` and use it as the key to set the new color value you want:
```csharp
var clone = SerializerExtensions.Clone(MyMaterial);
clone.Passes[0].Parameters.Set(MaterialKeys.DiffuseValue, new Color4(1, 0, 0));
```

If you aren't too sure which parameter keys your material uses, the best way to figure it out would be to inspect the material's variables with a debugger. 
Here's an example of that through Rider's *Threads & Variables* window:

![media/runtime-param-modif-locals.png](media/runtime-param-modif-locals.png)

## See also

- [Material maps](material-maps.md)
- [Material attributes](material-attributes.md)
- [Material layers](material-layers.md)
- [Material slots](material-slots.md)