# Custom color transforms
# Пользовательские преобразования цвета

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can write your own **custom color transform** effects. For example, you can create:
Вы можете написать свои собственные **пользовательские эффекты преобразования цвета**.  Например, вы можете создать:

* water droplets on the camera
* капли воды на камеру
* screen transitions (such as fade-ins and fade-outs)
* экранные переходы (например, постепенное появление и исчезновение)
* effects simulating pain or intoxication (eg by applying tints or other effects)
* эффекты, имитирующие боль или интоксикацию (например, путем применения оттенков или других эффектов)
* object outlines
* очертания объекта

To create a custom color transform, you need to write two files: an effect shader (containing the effect itself), and a C# class (to make the effect accessible in Game Studio).
Чтобы создать пользовательское преобразование цвета, вам нужно написать два файла: шейдер эффекта (содержащий сам эффект) и класс C# (чтобы сделать эффект доступным в Game Studio).

## 1. Create a shader
## 1. Создайте шейдер

1. Make sure you have the [Stride Visual Studio extension](../../../get-started/visual-studio-extension.md) installed. This is necessary to convert the shader files from XSL ([Stride shading language](../../effects-and-shaders/index.md)) to `.cs` files.
1. Убедитесь, что у вас установлено [Расширение Stride Visual Studio](../../../get-started/visual-studio-extension.md).  Это необходимо для преобразования файлов шейдеров из XSL ([язык шейдеров Stride](../../effects-and-shaders/index.md)) в файлы `.cs`.

2. In Game Studio, in the toolbar, click ![Open in IDE](../../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) to open your project in Visual Studio.
2. В Game Studio на панели инструментов нажмите ![Открыть в IDE](../../../get-started/media/launch-your-game-ide-icon.png) (**Открыть в  IDE**), чтобы открыть проект в Visual Studio.

3. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **New item**.
3. В Visual Studio **Solution Explorer** щелкните правой кнопкой мыши проект (например, *MyGame.Game*) и выберите **Новый элемент**.

    ![New item](../../effects-and-shaders/media/new-item.png)
![Новый элемент](../../effects-and-shaders/media/new-item.png)

4. Select **Class**.
4. Выберите **Класс**.

    ![Select class](../../effects-and-shaders/media/select-class.png)
![Выберите класс](../../effects-and-shaders/media/select-class.png)

5. In the **Name** field, specify a name with the extension **.sdsl** (eg *MyColorTransformShader.sdsl*), and click **Add**.
5. В поле **Имя** укажите имя с расширением **.sdsl** (например, *MyColorTransformShader.sdsl*) и нажмите **Добавить**.

    ![Create post effect](media/create-post-effect.png)
![Создать пост-эффект](media/create-post-effect.png)

    The Stride Visual Studio extension automatically generates a `.cs` file from the `.sdsl` file. The Solution Explorer lists it as a child of the `.xskl` file.
Расширение Stride Visual Studio автоматически создает файл `.cs` из файла `.sdsl`.  Обозреватель решений указывает его как дочерний элемент файла `.xskl`.

    ![My post effect](media/my-post-effect.png)
![Мой пост-эффект](media/my-post-effect.png)

6. Open the `.sdsl` file, remove the existing lines, and write your shader.
6. Откройте файл `.sdsl`, удалите существующие строки и напишите свой шейдер.

    Shaders are written in Stride Shading Language (XSL), which is based on HLSL. For more information, see [Shading language](index.md).
Шейдеры написаны на языке Stride Shading Language (XSL), который основан на HLSL.  Для получения дополнительной информации см. [Язык затенения](index.md).

    For example, the shader below multiplies the image color by the `MyColor` parameter:
Например, приведенный ниже шейдер умножает цвет изображения на параметр MyColor:

    ```cs
```CS
    shader MyColorTransformShader : ColorTransformShader
шейдер MyColorTransformShader : ColorTransformShader
    {
{
        [Color]
[Цвет]
        float4 MyColor;
поплавок4 MyColor;

        override float4 Compute(float4 color)
переопределить вычисление float4 (цвет float4)
        {
{
            return color * MyColor;
возвращаемый цвет * MyColor;
        }
}
    };
};
    ```
```
    >[!Note]
>[!Примечание]
    >Make sure the shader name in the file (eg `MyColorTransformShader` in the code above) is the same as the filename (eg *MyColorTransformShader.sdsl*).
>Убедитесь, что имя шейдера в файле (например, `MyColorTransformShader` в приведенном выше коде) совпадает с именем файла (например, *MyColorTransformShader.sdsl*).

## 2. Create a C# class
## 2. Создайте класс C#

1. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **Add > New item**.
1. В Visual Studio **Solution Explorer** щелкните правой кнопкой мыши проект (например, *MyGame.Game*) и выберите **Добавить > Новый элемент**.

    ![New item](../../effects-and-shaders/media/new-item.png)
![Новый элемент](../../effects-and-shaders/media/new-item.png)

2. Select **Class**, specify a **name** (eg *MyColorTransform.cs*), and click **Add**.
2. Выберите **Класс**, укажите **имя** (например, *MyColorTransform.cs*) и нажмите **Добавить**.

    ![Add script](media/add-script.png)
![Добавить скрипт](media/add-script.png)

    Open the file and write the class.
Откройте файл и напишите класс.

    For example, the code below creates the class `MyColorTransform`, which uses the shader and supplies a value for the color `MyColor` (defined in the shader).
Например, приведенный ниже код создает класс MyColorTransform, который использует шейдер и предоставляет значение цвета MyColor (определенного в шейдере).

    ```cs
```CS
    using Stride.Core;
с помощью Stride.Core;
    using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
    using Stride.Rendering;
использование Stride.Rendering;
    using Stride.Rendering.Images;
использование Stride.Rendering.Images;

    namespace MyGame
пространство имен MyGame
    {
{
        [DataContract("MyColorTransform")]
[Контракт Данных(
        public class MyColorTransform : ColorTransform
открытый класс MyColorTransform: ColorTransform
        {
{
            /// <inheritdoc />
/// <наследовать документ />
            public MyColorTransform() 
публичный MyColorTransform ()
                : base("MyColorTransformShader")
: база (
            {
{
            }
}

            public Color4 MyColor { get; set; }
общественность Color4 MyColor { получить;  установлен;  }

            public override void UpdateParameters(ColorTransformContext context)
public override void UpdateParameters (контекст ColorTransformContext)
            {
{
                Parameters.Set(MyColorTransformShaderKeys.MyColor, MyColor);
Параметры.Set(MyColorTransformShaderKeys.MyColor, MyColor);

                // Copy parameters to parent
// Копируем параметры в родительский
                base.UpdateParameters(context);
base.UpdateParameters(контекст);
            }
}
        }
}
    }
}
    ```
```
    >[!Note]
>[!Примечание]
    >Make sure the class name in the file (eg `MyColorTransform` in the class above) is the same as the filename (eg *MyColorTransform.cs*).
>Убедитесь, что имя класса в файле (например, `MyColorTransform` в приведенном выше классе) совпадает с именем файла (например, *MyColorTransform.cs*).

3. Save all the files in the solution (**File > Save All**).
3. Сохраните все файлы решения (**Файл > Сохранить все**).

4. In Game Studio, reload the assemblies.
4. В Game Studio перезагрузите сборки.

    ![Reload assemblies](../../../particles/tutorials/media/reload-assemblies.png)
![Перезагрузить сборки](../../../particles/tutorials/media/reload-assemblies.png)

    The **Asset View** lists the class and effect shader in the same directory as your scripts (eg **MyGame.Game**).
В **Asset View** перечислены классы и шейдеры эффектов в том же каталоге, что и ваши скрипты (например, **MyGame.Game**).

    ![Shader in Asset View](media/post-effect-shader.png)
![Шейдер в представлении объектов](media/post-effect-shader.png)

    >[!Note]
>[!Примечание]
    >In some situations, Game Studio incorrectly detects the shader as a script, as in the screenshot below:
>В некоторых случаях Game Studio неправильно определяет шейдер как скрипт, как на скриншоте ниже:

    >![Shader as script](media/broken-script-icon.png)
>![Шейдер как скрипт](media/broken-script-icon.png)
    
    >If this happens, restart Game Studio (**File > Reload project**).
>Если это произойдет, перезапустите Game Studio (**Файл > Перезагрузить проект**).

## 3. Use a custom color transform
## 3. Используйте пользовательское преобразование цвета

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](../../graphics-compositor/media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](../../graphics-compositor/media/graphics-compositor-asset.png)

    The **graphics compositor editor** opens.
Откроется **редактор графического компоновщика**.

    ![Graphics Compositor editor](../../graphics-compositor/media/graphics-compositor-editor.png)
![Редактор графического компоновщика](../../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **Post-processing effects** node.
2. Выберите узел **Эффекты постобработки**.

3. In the **Property Grid**, under **Color transforms**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Change**) and select your color transform (eg **MyColorTransform**).
3. В **Сетке свойств** в разделе **Преобразование цвета** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Изменить*  *) и выберите преобразование цвета (например, **MyColorTransform**).

    ![Add script](media/add-script-in-properties.png)
![Добавить скрипт](media/add-script-in-properties.png)

* To enable and disable the effect, use the check box next to the item.
* Для включения и выключения эффекта используйте флажок рядом с пунктом.

    ![Enable and disable custom post effect](media/enable-disable-custom-post-effect.png)
![Включить и отключить пользовательский эффект поста](media/enable-disable-custom-post-effect.png)

* To edit the public properties you specified in the class, expand the item.
* Чтобы изменить общедоступные свойства, указанные вами в классе, разверните элемент.

    ![Expand item](media/view-custom-post-fx-properties.png)
![Развернуть элемент](media/view-custom-post-fx-properties.png)

    When you adjust the properties, Game Studio updates the effect automatically.
Когда вы настраиваете свойства, Game Studio автоматически обновляет эффект.

>[!Warning]
>[!Предупреждение]
>Unfortunately, this part of Game Studio has a memory leak problem. Every time you change a value in the graphics compositor, it uses 60MB of memory. To prevent Game Studio using too much memory, we recommend you restart it after you change a property a few times. This is a known issue.
>К сожалению, в этой части Game Studio есть проблема с утечкой памяти.  Каждый раз, когда вы меняете значение в графическом компоновщике, он использует 60 МБ памяти.  Чтобы Game Studio не использовала слишком много памяти, мы рекомендуем вам перезапустить ее после того, как вы несколько раз измените свойство.  Это известная проблема.

## See also
## Смотрите также

* [Shading language](../../effects-and-shaders/index.md)
* [Язык шейдеров](../../effects-and-shaders/index.md)
* [Custom shaders](../../effects-and-shaders/custom-shaders.md)
* [Пользовательские шейдеры](../../effects-and-shaders/custom-shaders.md)
* [Graphics compositor](../../graphics-compositor/index.md)
* [Композитор графики](../../graphics-compositor/index.md)
* [Post effects](../index.md)
* [Постэффекты](../index.md)
* [Color transforms](index.md)
* [Цветовые преобразования](index.md)
* [Stride Visual Studio extension](../../../get-started/visual-studio-extension.md)
* [Расширение Stride Visual Studio](../../../get-started/visual-studio-extension.md)
