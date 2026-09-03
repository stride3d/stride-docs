# Compute Color

Compute Color shaders are most often used with [Materials](../../materials/index.md).

```sdsl
shader Example : ComputeColor
{
    override float4 Calculate()
    {
        // Return red
        return float4(1,0,0,1);
    }
};
```

## How it works

The `Calculate` method is executed for every pixel visible on the screen.

TODO: VISUALIZATION

## Using the shader

You can assign your shader to one of the slots in a material in Game Studio, by changing the type of compute color on a feature to `Shader` and typing out the name of your shader.

TODO: IMAGE

If you're creating a material in code, you can use a shader like so:

```cs
var descriptor = new MaterialDescriptor()
{
    Attributes =
    {
        DiffuseModel = new MaterialDiffuseLambertModelFeature(),
        Diffuse = new MaterialDiffuseMapFeature(new ComputeShaderClassColor
        {
            MixinReference = "MyShader",
            // Optional generic parameters
            Generics =
            {
                new KeyValuePair<string, IComputeColorParameter>("myParameter", new ComputeColorParameterFloat() { Value = 0.3f }),
            },
            // Optional compositions
            CompositionNodes =
            {
                ["compositionA"] = new ComputeShaderClassColor("MyOtherShader"),
                ["compositionB"] = new ComputeColor(Color4.White),
            } 
        }
    }
}
```

## Exposing generics and compositions

Generic parameters and compositions can be modified in Game Studio via the Property Grid.

TODO: IMAGE

```sdsl
shader Example<float myParameter> : ComputeColor
{
    compose ComputeColor compositionA;
    compose ComputeColor compositionB;

    override float4 Compute()
    {
        return lerp(compositionA, compositionB, myParameter);
    }
};
```

> [!NOTE]
> Generic parameters and compositions are meant to be set once and never changed. Modifying them would involve recreating the material from scratch with different values.

## Exposing variables

Currently variables cannot be changed in Game Studio. They can only be changed during runtime via code.

In order for a variable to become available and modifiable in code, it has to:
1. Be wrapped in `cbuffer PerMaterial`.
2. Have the `stage` modifier.

```sdsl
shader Example : ComputeColor
{
    cbuffer PerMaterial
    {
        // This can be modified at runtime via code
        stage float intensity;
    }

    override float4 Compute()
    {
        // Yellow if intensity = 1
        // Black if intensity = 0
        return float4(intensity, intensity, 0, 1);
    }
};
```

After saving, Stride will automatically generate a new class containing keys for every variable defined in your script. For the above example, the key for `intensity` would be in `ExampleKeys.intensity`.

You can use your shader's keys with material parameters.

```csharp
public class ExampleScript : SyncScript
{
    public ModelComponent Model { get; set; }

    float time = 0f;

    public override void Update()
    {
        time += (float)Game.UpdateTime.Elapsed.TotalSeconds;
    
        var materialParameters = Model.GetMaterial(0).Passes[0].Parameters;
        materialParameters.Set(ExampleKeys, MathF.Sin(materialParameters));
    }
}
```
