# Custom shaders
# Пользовательские шейдеры

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can write your own shaders in Visual Studio and use them in [material attributes](../materials/material-attributes.md). For example, you can write a shader to add textures to materials based on the objects' world positions, or generate noise and use it to randomize material properties.
Вы можете написать свои собственные шейдеры в Visual Studio и использовать их в [атрибутах материала](../materials/material-attributes.md).  Например, вы можете написать шейдер для добавления текстур к материалам на основе положения объектов в мире или создать шум и использовать его для рандомизации свойств материала.

As shaders are text files, you can add comments, enable and disable lines of code, and edit them like any other code file. This makes them easy to maintain and iterate.
Поскольку шейдеры представляют собой текстовые файлы, вы можете добавлять комментарии, включать и отключать строки кода и редактировать их, как и любой другой файл кода.  Это упрощает их обслуживание и итерацию.

You can also use custom shaders to create custom post effects. For more information, see [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md).
Вы также можете использовать пользовательские шейдеры для создания пользовательских пост-эффектов.  Для получения дополнительной информации см. [Пользовательские преобразования цвета](../post-effects/color-transforms/custom-color-transforms.md).

## Create a shader
## Создать шейдер

1. Make sure you have the [Stride Visual Studio extension](../../get-started/visual-studio-extension.md) installed. This is necessary to convert the shader files from SDSL ([Stride shading language](index.md)) to `.cs` files.
1. Убедитесь, что у вас установлено [Расширение Stride Visual Studio](../../get-started/visual-studio-extension.md).  Это необходимо для преобразования файлов шейдеров из SDSL ([язык шейдеров Stride](index.md)) в файлы `.cs`.

2. In Game Studio, in the toolbar, click ![Open in IDE](../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) to open your project in Visual Studio.
2. В Game Studio на панели инструментов нажмите ![Открыть в IDE](../../get-started/media/launch-your-game-ide-icon.png) (**Открыть в IDE**  ), чтобы открыть проект в Visual Studio.

3. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **Add > New item**.
3. В Visual Studio **Solution Explorer** щелкните правой кнопкой мыши проект (например, *MyGame.Game*) и выберите **Добавить > Новый элемент**.

    ![New item](media/new-item.png)
![Новый элемент](media/new-item.png)

4. Select **Class**.
4. Выберите **Класс**.

    ![Select class](media/select-class.png)
![Выберите класс](media/select-class.png)

5. In the **Name** field, specify a name with the extension **.sdsl** (eg *MyShader.sdsl*), and click **Add**.
5. В поле **Имя** укажите имя с расширением **.sdsl** (например, *MyShader.sdsl*) и нажмите **Добавить**.

    ![Select class](media/rename-file.png)
![Выберите класс](media/rename-file.png)

    The Stride Visual Studio extension automatically generates a `.cs` file from the `.sdsl` file. The Solution Explorer lists it as a child of the `.sdsl` file.
Расширение Stride Visual Studio автоматически создает файл `.cs` из файла `.sdsl`.  Обозреватель решений указывает его как дочерний файл `.sdsl`.

    ![My shader](media/my-shader.png)
![Мой шейдер](media/my-shader.png)

6. Open the `.sdsl` file, remove the existing lines, and write your shader.
6. Откройте файл `.sdsl`, удалите существующие строки и напишите свой шейдер.

    Shaders are written in Stride Shading Language (SDSL), which is based on HLSL. For more information, see [Shading language](index.md).
Шейдеры написаны на языке Stride Shading Language (SDSL), который основан на HLSL.  Для получения дополнительной информации см. [Язык затенения](index.md).

    For example, this shader creates a green color (`RGBA 0;1;0;1`):
Например, этот шейдер создает зеленый цвет (`RGBA 0;1;0;1`):

    ```cs
```CS
    namespace MyGame
пространство имен MyGame
    {
{
        shader MyShader : ComputeColor
шейдер MyShader : ComputeColor
        {
{
            override float4 Compute()
переопределить вычисление float4()
            {
{
                return float4(0, 1, 0, 1);
вернуть float4 (0, 1, 0, 1);
            }
}
        };
};
    }
}
    ```
```

    >[!Note]
>[!Примечание]
    >Make sure the shader name in the file (eg `MyShader` above) is the same as the filename.
>Убедитесь, что имя шейдера в файле (например, `MyShader` выше) совпадает с именем файла.

    >[!Note]
>[!Примечание]
    >To be accessible from the Game Studio Property Grid, the shader must inherit from `ComputeColor`.
>Чтобы быть доступным из сетки свойств Game Studio, шейдер должен наследоваться от `ComputeColor`.
    >As '`ComputeColor` always returns a float4 value, properties that take float values (eg metalness and gloss maps) use the first component (the red component) of the value returned by `ComputeColor`. 
>Поскольку '`ComputeColor` всегда возвращает значение float4, свойства, принимающие значения с плавающей запятой (например, карты металличности и блеска), используют первый компонент (красный компонент) значения, возвращаемого `ComputeColor`.

7. Save all the files in the solution (**File > Save All**).
7. Сохраните все файлы решения (**Файл > Сохранить все**).

8. In Game Studio, reload the assemblies.
8. В Game Studio перезагрузите сборки.

    ![Reload assemblies](../../particles/tutorials/media/reload-assemblies.png)
![Перезагрузить сборки](../../particles/tutorials/media/reload-assemblies.png)

    The **Asset View** lists the shader in the same directory as your scripts (eg **MyGame.Game**).
В **Asset View** список шейдеров находится в том же каталоге, что и ваши скрипты (например, **MyGame.Game**).

    ![Shader in Asset View](media/shader-in-asset-view.png)
![Shader in Asset View](media/shader-in-asset-view.png)

    >[!Note]
>[!Примечание]
    >In some situations, Game Studio incorrectly identifies the shader as a script, as in the screenshot below:
>В некоторых случаях Game Studio неправильно идентифицирует шейдер как скрипт, как на скриншоте ниже:
    
    >![Shader as script](media/shader-as-script-in-asset-view.png) 
>![Шейдер как скрипт](media/shader-as-script-in-asset-view.png)
    
    >If this happens, restart Game Studio (**File > Reload project**).
>Если это произойдет, перезапустите Game Studio (**Файл > Перезагрузить проект**).

## Use a custom shader
## Использовать собственный шейдер

You can use custom shaders in any [material attribute](../materials/material-attributes.md).
Вы можете использовать пользовательские шейдеры в любом [атрибуте материала](../materials/material-attributes.md).

1. In the **Asset View**, select the material you want to use the shader in.
1. В **Asset View** выберите материал, в котором вы хотите использовать шейдер.

2. In the **Property Grid**, next to the property you want to control with the shader, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Change**) and select **Shader**.
2. В **Сетке свойств** рядом со свойством, которым вы хотите управлять с помощью шейдера, щелкните ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (  **Изменить**) и выберите **Шейдер**.

    ![Select Shader](media/select-shader.png)
![Выбрать шейдер](media/select-shader.png)

3. In the field, type the name of your shader (eg *MyShader*).
3. В поле введите имя вашего шейдера (например, *MyShader*).

    ![Type shader](media/type-shader.png)
![Шейдер типа](media/type-shader.png)

    The property uses the shader you specify.
Свойство использует указанный вами шейдер.

> [!Tip]
> [!Подсказка]
> When you make a change to the `.sdsl` file in Visual Studio and save it, Game Studio automatically updates the project with your changes. If this doesn't happen, restart Game Studio (**File > Reload project**).
> Когда вы вносите изменения в файл `.sdsl` в Visual Studio и сохраняете его, Game Studio автоматически обновляет проект с учетом ваших изменений.  Если этого не произошло, перезапустите Game Studio (**Файл > Перезагрузить проект**).

> [!Note]
> [!Примечание]
> If you delete a shader from the project assets, to prevent errors, make sure you also remove it from the properties of materials that use it.
> Если вы удаляете шейдер из активов проекта, во избежание ошибок убедитесь, что вы также удалили его из свойств материалов, которые его используют.

## Arguments and parameters
## Аргументы и параметры

### Template arguments
### Аргументы шаблона

[Template arguments](shading-language/templates.md) (generics) don't change at runtime. However, different materials can use different instances of the shader with different values.
[Аргументы шаблона](shading-language/templates.md) (общие) не меняются во время выполнения.  Однако разные материалы могут использовать разные экземпляры шейдера с разными значениями.

When the shaders are compiled, Stride substitutes template arguments with the value you set in the Property Grid.
Когда шейдеры компилируются, Stride заменяет аргументы шаблона значением, которое вы установили в сетке свойств.

For example, the code below defines and uses the template argument `Frequency`:
Например, в приведенном ниже коде определяется и используется аргумент шаблона «Частота»:

```cs
```CS
shader ComputeColorWave<float Frequency> : ComputeColor, Texturing
шейдер ComputeColorWave<float Frequency> : ComputeColor, Texturing
{
{
    override float4 Compute()
переопределить вычисление float4()
   {           
{
        return sin((Global.Time) * 2 * 3.14 * Frequency);
return sin((Global.Time) * 2 * 3.14 * Частота);
    }
}
};
};
```
```

![Template argument](media/template-argument.png)
![Аргумент шаблона](media/template-argument.png)

### Parameters
### Параметры

Parameters can be changed at runtime.
Параметры могут быть изменены во время выполнения.

For example, the code below defines and uses the dynamic parameter `Frequency`:
Например, код ниже определяет и использует динамический параметр «Частота»:

```cs
```CS
shader ComputeColorWave: ComputeColor, Texturing
шейдер ComputeColorWave: ComputeColor, Текстурирование
{
{
	cbuffer PerMaterial
cbuffer PerMaterial
	{
{
		stage float Frequency = 1.0f;
поплавок ступени Частота = 1,0f;
	}
}
	
    override float4 Compute()
переопределить вычисление float4()
    {
{
        return sin(( Global.Time ) * 2 * 3.14 * Frequency);
return sin(( Global.Time ) * 2 * 3.14 * Частота);
    }
}
};
};
```
```

To modify the value at runtime, access and set it in the material parameter collection. For example, to change the `Frequency`, use:
Чтобы изменить значение во время выполнения, откройте и установите его в коллекции параметров материала.  Например, чтобы изменить «Частоту», используйте:

```cs
```CS
myMaterial.Passes[myPassIndex].Parameters.Set(ComputeColorWaveKeys.Frequency, MyFrequency);
myMaterial.Passes[myPassIndex].Parameters.Set(ComputeColorWaveKeys.Frequency, MyFrequency);
```
```

> [!Note]
> [!Примечание]
> `ComputeColorWaveKeys.Frequency` is generated by the Stride Visual Studio extension from the shader file.
> `ComputeColorWaveKeys.Frequency` создается расширением Stride Visual Studio из файла шейдера.

### Compositions
### Композиции

This [composition](shading-language/composition.md) lets you set the `Frequency` in the Game Studio Property Grid:
Эта [композиция] (shading-language/composition.md) позволяет вам установить «Частоту» в сетке свойств Game Studio:

```cs
```CS
shader ComputeColorWave : ComputeColor, Texturing
шейдер ComputeColorWave : ComputeColor, Текстурирование
{
{
    compose ComputeColor Frequency;
составить ComputeColor Frequency;

    override float4 Compute()
переопределить вычисление float4()
    {
{
        return sin(( Global.Time ) * 2 * 3.14 * Frequency.Compute().r);
return sin(( Global.Time ) * 2 * 3.14 * Frequency.Compute().r);
    }
}
};
};
```
```

Then you can set the value in the material properties:
Затем вы можете установить значение в свойствах материала:

![Select shader](media/use-computecolorwave-shader.png)
![Выбрать шейдер](media/use-computecolorwave-shader.png)

## Custom shader sample
## Образец пользовательского шейдера

For an example of a custom shader, see the **custom material shader** sample project included with Stride.
Пример пользовательского шейдера см. в примере проекта **настраиваемого шейдера материала**, включенном в Stride.

![Sample project](media/custom-shader-sample-project.png)
![Пример проекта](media/custom-shader-sample-project.png)

In the project, the **ComputeColorWaveNormal** shader is used in the **displacement map** and **surface** material properties.
В проекте шейдер **ComputeColorWaveNormal** используется в свойствах **карты смещения** и **поверхности** материала.

## See also
## Смотрите также

* [Shading language](shading-language/index.md)
* [Язык затенения](shading-language/index.md)
* [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md)
* [Пользовательские преобразования цвета](../post-effects/color-transforms/custom-color-transforms.md)
* [Material attributes](../materials/material-attributes.md)
* [Атрибуты материала](../materials/material-attributes.md)
* [Stride Visual Studio extension](../../get-started/visual-studio-extension.md)
* [Расширение Stride Visual Studio](../../get-started/visual-studio-extension.md)
