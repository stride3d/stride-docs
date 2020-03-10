# Custom shaders

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

You can write your own shaders in Visual Studio and use them in [material attributes](../materials/material-attributes.md). For example, you can write a shader to add textures to materials based on the objects' world positions, or generate noise and use it to randomize material properties.

As shaders are text files, you can add comments, enable and disable lines of code, and edit them like any other code file. This makes them easy to maintain and iterate.

You can also use custom shaders to create custom post effects. For more information, see [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md).

## Create a shader

1. Make sure you have the [Xenko Visual Studio extension](../../get-started/visual-studio-extension.md) installed. This is necessary to convert the shader files from XSL ([Xenko shading language](index.md)) to `.cs` files.

2. In Game Studio, in the toolbar, click ![Open in IDE](../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) to open your project in Visual Studio.

3. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **Add > New item**.

    ![New item](media/new-item.png)

4. Select **Class**.

    ![Select class](media/select-class.png)

5. In the **Name** field, specify a name with the extension **.xksl** (eg *MyShader.xksl*), and click **Add**.

    ![Select class](media/rename-file.png)

    The Xenko Visual Studio extension automatically generates a `.cs` file from the `.xksl` file. The Solution Explorer lists it as a child of the `.xskl` file.

    ![My shader](media/my-shader.png)

6. Open the `.xksl` file, remove the existing lines, and write your shader.

    Shaders are written in Xenko Shading Language (XSL), which is based on HLSL. For more information, see [Shading language](index.md).

    For example, this shader creates a green color (`RGBA 0;1;0;1`):

    ```cs
    namespace MyGame
    {
        shader MyShader : ComputeColor
        {
            override float4 Compute()
            {
                return float4(0, 1, 0, 1);
            }
        };
    }
    ```

    >[!Note]
    >Make sure the shader name in the file (eg `MyShader` above) is the same as the filename.

    >[!Note]
    >To be accessible from the Game Studio Property Grid, the shader must inherit from `ComputeColor`.
    >As '`ComputeColor` always returns a float4 value, properties that take float values (eg metalness and gloss maps) use the first component (the red component) of the value returned by `ComputeColor`. 

7. Save all the files in the solution (**File > Save All**).

8. In Game Studio, reload the assemblies.

    ![Reload assemblies](../../particles/tutorials/media/reload-assemblies.png)

    The **Asset View** lists the shader in the same directory as your scripts (eg **MyGame.Game**).

    ![Shader in Asset View](media/shader-in-asset-view.png)

    >[!Note]
    >In some situations, Game Studio incorrectly identifies the shader as a script, as in the screenshot below:
    
    >![Shader as script](media/shader-as-script-in-asset-view.png) 
    
    >If this happens, restart Game Studio (**File > Reload project**).

## Use a custom shader

You can use custom shaders in any [material attribute](../materials/material-attributes.md).

1. In the **Asset View**, select the material you want to use the shader in.

2. In the **Property Grid**, next to the property you want to control with the shader, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Change**) and select **Shader**.

    ![Select Shader](media/select-shader.png)

3. In the field, type the name of your shader (eg *MyShader*).

    ![Type shader](media/type-shader.png)

    The property uses the shader you specify.

> [!Tip]
> When you make a change to the `.xksl` file in Visual Studio and save it, Game Studio automatically updates the project with your changes. If this doesn't happen, restart Game Studio (**File > Reload project**).

> [!Note]
> If you delete a shader from the project assets, to prevent errors, make sure you also remove it from the properties of materials that use it.

## Arguments and parameters

### Template arguments

[Template arguments](shading-language/templates.md) (generics) don't change at runtime. However, different materials can use different instances of the shader with different values.

When the shaders are compiled, Xenko substitutes template arguments with the value you set in the Property Grid.

For example, the code below defines and uses the template argument `Frequency`:

```cs
shader ComputeColorWave<float Frequency> : ComputeColor, Texturing
{
    override float4 Compute()
   {           
        return sin((Global.Time) * 2 * 3.14 * Frequency);
    }
};
```

![Template argument](media/template-argument.png)

### Parameters

Parameters can be changed at runtime.

For example, the code below defines and uses the dynamic parameter `Frequency`:

```cs
shader ComputeColorWave: ComputeColor, Texturing
{
	cbuffer PerMaterial
	{
		stage float Frequency = 1.0f;
	}
	
    override float4 Compute()
    {
        return sin(( Global.Time ) * 2 * 3.14 * Frequency);
    }
};
```

To modify the value at runtime, access and set it in the material parameter collection. For example, to change the `Frequency`, use:

```cs
myMaterial.Passes[myPassIndex].Parameters.Set(ComputeColorWaveKeys.Frequency, MyFrequency);
```

> [!Note]
> `ComputeColorWaveKeys.Frequency` is generated by the Xenko Visual Studio extension from the shader file.

### Compositions

This [composition](shading-language/composition.md) lets you set the `Frequency` in the Game Studio Property Grid:

```cs
shader ComputeColorWave : ComputeColor, Texturing
{
    compose ComputeColor Frequency;

    override float4 Compute()
    {
        return sin(( Global.Time ) * 2 * 3.14 * Frequency.Compute().r);
    }
};
```

Then you can set the value in the material properties:

![Select shader](media/use-computecolorwave-shader.png)

## Custom shader sample

For an example of a custom shader, see the **custom material shader** sample project included with Xenko.

![Sample project](media/custom-shader-sample-project.png)

In the project, the **ComputeColorWaveNormal** shader is used in the **displacement map** and **surface** material properties.

## See also

* [Shading language](shading-language/index.md)
* [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md)
* [Material attributes](../materials/material-attributes.md)
* [Xenko Visual Studio extension](../../get-started/visual-studio-extension.md)