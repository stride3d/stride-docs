# Material shaders

Unlike [compute color shaders](../compute-color.md), material shaders give you greater control over a specific part of a material. You are able to utilize more [shader stages](../../shading-language/shader-stages.md) to control things such as lighting calculations.

```sdsl
// Example from the engine source
// https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceShadingDiffuseLambert.sdsl
shader MaterialSurfaceShadingDiffuseLambert<bool TIsEnergyConservative> : IMaterialSurfaceShading, Math
{
    override float3 ComputeDirectLightContribution()
    {
        var diffuseColor = streams.matDiffuseVisible;
        if (TIsEnergyConservative)
            diffuseColor *= (1 - streams.matSpecularVisible);

        return diffuseColor / PI * streams.lightColorNdotL;
    }

    override float3 ComputeEnvironmentLightContribution()
    {
        var diffuseColor = streams.matDiffuseVisible;
        if (TIsEnergyConservative)
            diffuseColor *= (1 - streams.matSpecularVisible);

        return diffuseColor * streams.envLightDiffuseColor;
    }
};
```

## Types of material shaders

Every [attribute](../../../materials/material-attributes.md) in a material has it's own shader type from which you can inherit:

| Geometry attribute | Shader base | C# interface | Example |
| :-- | :-- | :-- |
| Tesselation | `TesselationBase` | [`IMaterialTessellationFeature`](xref:Stride.Rendering.Materials.IMaterialTessellationFeature) | [`TesselationFlat.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Tessellation/TessellationFlat.sdsl) |
| Displacement | `IMaterialSurface` | [`IMaterialDisplacementFeature`](xref:Stride.Rendering.Materials.IMaterialDisplacementFeature) | [`MaterialSurfaceDisplacement.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/MaterialSurfaceDisplacement.sdsl) |
| Surface | `IMaterialSurfacePixel` | [`IMaterialSurfaceFeature`](xref:Stride.Rendering.Materials.IMaterialSurfaceFeature) | [`MaterialSurfaceNormalMap.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceNormalMap.sdsl) |
  | MicroSurface | `IMaterialSurfacePixel` | [`IMaterialMicroSurfaceFeature`](xref:Stride.Rendering.Materials.IMaterialMicroSurfaceFeature) | [`MaterialSurfaceGlossinessMap.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceGlossinessMap.sdsl) |

| Shading attribute | Shader base | C# interface | Example |
| :-- | :-- | :-- | :-- |
| Diffuse | `IMaterialSurfacePixel` | [`IMaterialDiffuseFeature`](xref:Stride.Rendering.Materials.IMaterialDiffuseFeature) | [`MaterialSurfaceDiffuse.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceDiffuse.sdsl) |
| Specular | `IMaterialSurfacePixel` | [`IMaterialSpecularFeature`](xref:Stride.Rendering.Materials.IMaterialSpecularFeature) | [`MaterialSurfaceMetalness.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceMetalness.sdsl) |
| Specular Model | `IMaterialSurfaceShading` | [`IMaterialSpecularModelFeature`](xref:Stride.Rendering.Materials.IMaterialSpecularModelFeature) | [`MaterialSurfaceShadingSpecularMicrofacet.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceShadingSpecularMicrofacet.sdsl) |
| Microfacet Specular Model Fresnel | `IMaterialSpecularMicrofacetFresnelFunction` | [`IMaterialSpecularMicrofacetFresnelFunction`](xref:Stride.Rendering.Materials.IMaterialSpecularMicrofacetFresnelFunction) | [`MaterialSpecularMicrofacetFresnelSchlick.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSpecularMicrofacetFresnelSchlick.sdsl) |
| Microfacet Specular Model Visibility | `IMaterialSpecularMicrofacetVisibilityFunction` | [`IMaterialSpecularMicrofacetVisibilityFunction`](xref:Stride.Rendering.Materials.IMaterialSpecularMicrofacetVisibilityFunction) | [`MaterialSpecularMicrofacetVisibilitySmithSchlickGGX.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSpecularMicrofacetVisibilitySmithSchlickGGX.sdsl) |
| Microfacet Specular Model Normal Distribution | `IMaterialSpecularMicrofacetNormalDistributionFunction` | [`IMaterialSpecularMicrofacetNormalDistributionFunction`](xref:Stride.Rendering.Materials.IMaterialSpecularMicrofacetNormalDistributionFunction) | [`MaterialSpecularMicrofacetNormalDistributionGGX.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSpecularMicrofacetNormalDistributionGGX.sdsl) |
| Microfacet Specular Model Environment | `IMaterialSpecularMicrofacetEnvironmentFunction` | [`IMaterialSpecularMicrofacetEnvironmentFunction`](xref:Stride.Rendering.Materials.IMaterialSpecularMicrofacetEnvironmentFunction) | [`MaterialSpecularMicrofacetEnvironmentGGXLUT.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSpecularMicrofacetEnvironmentGGXLUT.sdsl) |
| Emissive | `IMaterialSurfacePixel` | [`IMaterialEmissiveFeature`](xref:Stride.Rendering.Materials.IMaterialEmissiveFeature) | [`MaterialSurfaceEmissiveShading.sdsl`](https://github.com/stride3d/stride/blob/master/sources/engine/Stride.Rendering/Rendering/Materials/Shaders/MaterialSurfaceEmissiveShading.sdsl) |

## Making material shaders usable

Material shaders need to be wrapped in a C# class in order to become usable in the engine and in Game Studio.

1. Create a new C# script that inherits from [`MaterialFeature`](xref:Stride.Rendering.Materials.MaterialFeature) and a C# interface for the slot you want to target (see tables above).
    
    ```csharp
    using Stride.Rendering.Materials;

    // This example targets the diffuse slot, which is why
    // it inherits from IMaterialDiffuseFeature
    public class DiffuseFeatureExample : MaterialFeature, IMaterialDiffuseFeature
    {
        
    }
    ```

2. If your shader uses material-specific [streams](../../shading-language/streams.md), you will have to define them by inheriting from [`IMaterialStreamProvider`](xref:Stride.Rendering.Materials.IMaterialStreamProvider).

```csharp
public class Example : MaterialFeature, IMaterialDiffuseFeature, IMaterialStreamProvider
{
    public static readonly MaterialStreamDescriptor MyStream = new("MyName (can be anything)", "NameOfStream (e.g. matDiffuse)", MaterialKeys.NameOfFeatureValue.PropertyType);

    public IEnumerable<MaterialStreamDescriptor> GetStreams()
    {
        yield return MyStream;
    }
}
```

3. Implement the [`GenerateShader`](xref:Stride.Rendering.Materials.MaterialFeature.GenerateShader*) method.
    
    ```csharp
    public override void GenerateShader(MaterialGeneratorContext context)
    {
        // Create an effect via code
        var mixin = new ShaderMixinSource();
        mixin.Mixins.Add(new ShaderClassSource("NameOfShader"));
    
        // Register streams used by the shader (if any)
        context.UseStream(MaterialShaderStage.Pixel, MyStream.Stream);
    
        // Add the effect to context
        context.AddShaderSource(MaterialShaderStage.Pixel, mixin);
    }
    ```

## Using material shaders

After reloading Game Studio, you should see your custom material features appear in the Property grid.

TODO: IMAGE

You can also use your custom features when creating materials in code:

```csharp
var material = Material.New(StrideGame.GraphicsDevice, new()
{
    Attributes =
    {
        DiffuseModel = new MaterialDiffuseLambertModelFeature(),
        Diffuse = new MyOwnMaterialFeature()
    },
});
```

## Help wanted: expand this page

Currently this page isn't as thorough as it should be. If you are familiar with writing shaders and would like to help us expand the documentation, consider [contributing to the documentation](https://github.com/stride3d/stride-docs).
