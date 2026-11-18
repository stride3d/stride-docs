# Use a shader

There are many ways of using shaders in Stride, this page only covers a few of the most common.

## In place of material textures

You can use [compute color](types-of-shader/compute-color.md) shaders in place of textures on a material.

1. Select your material.

2. Press the arrow icon on the arrow icon next to a compute color node and select TODO: CHECK THAT.

    TODO: IMAGE

3. Enter the name of your shader that you want to use.

    TODO: IMAGE

The property grid allows you to change template parameters and define compositions.

To control shader constant variables (those defined in `cbuffer PerMaterial`), you will have to access them in-code.

```csharp
var value = 3f;
myMaterial.Passes[0].Parameters.Set(MyShaderKeys.MyVariableName, value);
```

For more information on working with compute color shaders, see [Compute color](types-of-shader/compute-color.md).

## Custom material feature

You can create your own material features and use them in an attribute slot of a material. For example: a custom diffuse shader.

Custom material feature shaders need to be wrapped in a C# class before becoming usable in Stride and Game Studio. For more information, visit [Material shaders](types-of-shader/material-shaders/index.md).

1. Select your material

2. Press the arrow icon next to a material attribute and select the C# class with your custom material feature.

## Color transforms

TODO

## Compute shaders

TODO
