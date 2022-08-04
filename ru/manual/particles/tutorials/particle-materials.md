# Tutorial: Particle materials
# Учебник: Материалы частиц

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This tutorial demonstrates how to create custom shaders and materials for a particle system, providing functionality not available in the core engine. It focuses on shaders and rendering. For simulation, see the [custom particles tutorial](custom-particles.md).
В этом руководстве показано, как создавать собственные шейдеры и материалы для системы частиц, предоставляя функциональные возможности, недоступные в основном движке.  Основное внимание уделяется шейдерам и рендерингу.  Для моделирования см. [учебник по пользовательским частицам] (custom-particles.md).

If you're not familiar with editing particles, see [Create particles](../create-particles.md).
Если вы не знакомы с редактированием частиц, см. [Создание частиц](../create-particles.md).

Start by creating a new **Sample: Particles** project.
Начните с создания нового проекта **Sample: Particles**.

![Particles sample project](media/select-particles-sample-project.png)
![Пример проекта Particles](media/select-particles-sample-project.png)

This project contains four scenes, each demonstrating a different way to use particles: **AnimatedParticles**, **ChildParticles**, **CustomMaterials**, and **CustomParticles**.
Этот проект содержит четыре сцены, каждая из которых демонстрирует свой способ использования частиц: **AnimatedParticles**, **ChildParticles**, **CustomMaterials** и **CustomParticles**.

Open the **CustomMaterials** scene.
Откройте сцену **CustomMaterials**.

There are three particle entities in the scene: **Rad Particle System**, **Radial Particle System**, and **Two Textures Particle System**.
В сцене есть три объекта частиц: **Система частиц Rad**, **Система радиальных частиц** и **Система частиц с двумя текстурами**.

![media/particles-samples-material-1.png](media/particles-samples-material-1.png)
![media/particles-samples-material-1.png](media/particles-samples-material-1.png)

Select one of the particle entities and navigate to its source particle system, expanding the emitter in it and its material.
Выберите один из объектов частиц и перейдите к его исходной системе частиц, расширив в ней эмиттер и его материал.

## Red particle system
## Система красных частиц

The **red particle system** has a very simple customization. Since the [material maps](../../graphics/materials/material-maps.md) already provide an option to use shaders as a leaf node input, we can create a custom shader and assign it to that node.
**Система красных частиц** имеет очень простую настройку.  Поскольку [material maps](../../graphics/materials/material-maps.md) уже предоставляет возможность использовать шейдеры в качестве входных данных конечного узла, мы можем создать собственный шейдер и назначить его этому узлу.

First, create a shader (`ComputeColorRed.sdsl`) with a derived class for `ComputeColor`:
Сначала создайте шейдер (`ComputeColorRed.sdsl`) с производным классом для `ComputeColor`:

  ```cs
```CS
class ComputeColorRed : ComputeColor
класс ComputeColorRed : ComputeColor
{
{
    override float4 Compute()
переопределить вычисление float4()
    {
{
        return float4(1, 0, 0, 1);
вернуть float4(1, 0, 0, 1);
    }
}
};
};
```
```

The only thing this shader does is return the red color for pixel shading every time `Compute` is called. We'll try something more difficult later, but for now let's keep it simple.
Единственное, что делает этот шейдер, это возвращает красный цвет для затенения пикселей каждый раз, когда вызывается `Compute`.  Позже мы попробуем что-нибудь посложнее, а пока давайте не будем усложнять.

Save the file and reload the scripts in Game Studio. You should see the new shader in **Asset View**.
Сохраните файл и перезагрузите скрипты в Game Studio.  Вы должны увидеть новый шейдер в **Asset View**.

![media/particles-samples-material-2.png](media/particles-samples-material-2.png)
![media/particles-samples-material-2.png](media/particles-samples-material-2.png)

If the shader isn't there, reload the project.
Если шейдера нет, перезагрузите проект.

Once the shader is loaded, you can access it in the **Property Grid** under the **dynamic emissive material** for the particles. Choose a type of shader and, from the drop-down menu, select the shader you just added to the scene.
После загрузки шейдера вы можете получить к нему доступ в **Сетке свойств** под **динамическим испускающим материалом** для частиц.  Выберите тип шейдера и в раскрывающемся меню выберите шейдер, который вы только что добавили в сцену.

![media/particles-samples-material-3.png](media/particles-samples-material-3.png)
![media/particles-samples-material-3.png](media/particles-samples-material-3.png)

The particles are red. With Game Studio running, edit and save `ComputeColorRed.sdsl` to make them yellow.
Частицы красные.  Запустив Game Studio, отредактируйте и сохраните файл ComputeColorRed.sdsl, чтобы сделать его желтым.

  ```cs
```CS
class ComputeColorRed : ComputeColor
класс ComputeColorRed : ComputeColor
{
{
    override float4 Compute()
переопределить вычисление float4()
    {
{
        return float4(1, 1, 0, 1);
вернуть float4(1, 1, 0, 1);
    }
}
};
};
```
```

Because Stride supports dynamic shader compilation, the particles immediately turn yellow.
Поскольку Stride поддерживает динамическую компиляцию шейдеров, частицы сразу становятся желтыми.

### Radial particle system
### Радиальная система частиц

For the next shader we'll use texture coordinates expose arbitrary values to the editor.
Для следующего шейдера мы будем использовать координаты текстуры, предоставляя редактору произвольные значения.

Check `ComputeColorRadial.sdsl`.
Проверьте `ComputeColorRadial.sdsl`.

  ```cs
```CS
class ComputeColorRadial<float4 ColorCenter, float4 ColorEdge> : ComputeColor, Texturing
class ComputeColorRadial<float4 ColorCenter, float4 ColorEdge> : ComputeColor, Texturing
{
{
    override float4 Compute()
переопределить вычисление float4()
    {
{
        float radialDistance = length(streams.TexCoord - float2(0.5, 0.5)) * 2;
floatradialDistance = длина(потоки.TexCoord - float2(0.5, 0.5)) * 2;

        float4 unclamped = lerp(ColorCenter, ColorEdge, radialDistance);
float4 unclamped = lerp(ColorCenter, ColorEdge,radialDistance);

        // We want to allow the intensity to grow a lot, but cap the alpha to 1
// Мы хотим, чтобы интенсивность сильно возрастала, но ограничиваем альфа до 1
        float4 clamped = clamp(unclamped, float4(0, 0, 0, 0), float4(1000, 1000, 1000, 1));
поплавок4 зажат = зажим(незажат, поплавок4(0, 0, 0, 0), поплавок4(1000, 1000, 1000, 1));

        // Remember that we use a premultiplied alpha pipeline so all color values should be premultiplied
// Помните, что мы используем альфа-конвейер с предварительным умножением, поэтому все значения цвета должны быть предварительно умножены
        clamped.rgb *= clamped.a;
зажатый.rgb *= зажатый.a;

        return clamped;
обратка зажата;
    }
}
};
};
```
```

This is similar to `ComputeColorRed` and can be compiled and loaded the same way.
Это похоже на `ComputeColorRed` и может быть скомпилировано и загружено таким же образом.

There are several key differences. The shader now inherits from the `Texturing` shader base class as well. This allows it to use texture coordinates in from the streams. On the material side in Game Studio, we can force the texture coordinates to be streamed in case we don't use texture animation.
Есть несколько ключевых отличий.  Шейдер теперь также наследуется от базового класса шейдера `Texturing`.  Это позволяет использовать координаты текстуры из потоков.  Что касается материала, в Game Studio мы можем принудительно передавать координаты текстуры, если мы не используем анимацию текстуры.

The input values `float4 ColorCenter` and `float4 ColorEdge` in our shader are permutations. When we load the shader the Property Grid displays them under the **Generics** dictionary.
Входные значения `float4 ColorCenter` и `float4 ColorEdge` в нашем шейдере являются перестановками.  Когда мы загружаем шейдер, сетка свойств отображает их в словаре **Generics**.

![media/particles-samples-material-4.png](media/particles-samples-material-4.png)
![media/particles-samples-material-4.png](media/particles-samples-material-4.png)

The values we set here will be used by the `ComputeColorRadial` shader for the particles. The rest of the shader simply calculates a gradient color based on the distance of the shaded pixel from the center of the billboard.
Значения, которые мы устанавливаем здесь, будут использоваться шейдером `ComputeColorRadial` для частиц.  Остальная часть шейдера просто вычисляет цвет градиента на основе расстояния затененного пикселя от центра рекламного щита.

## Two-texture particle system
## Двухтекстурная система частиц

This demonstrates how to create custom materials and effects for the particles. The `DynamicColor` material supports one RGBA channel. For our sample, we'll separate the RGB and A channels, allowing them to use different texture coordinate animations and different textures and binary trees to compute the color.
Это демонстрирует, как создавать собственные материалы и эффекты для частиц.  Материал DynamicColor поддерживает один канал RGBA.  В нашем примере мы разделим каналы RGB и A, что позволит им использовать разные анимации координат текстуры, а также разные текстуры и бинарные деревья для вычисления цвета.

### Parameter keys
### Клавиши параметров

Parameter keys are used to map data and pass it to the shader. Some of them are generated, and we can define our own too.
Ключи параметров используются для сопоставления данных и передачи их шейдеру.  Некоторые из них генерируются, и мы также можем определить свои собственные.

If we define more streams in our shader (`ParticleCustomShader`), they're exported to an automatically generated class. Try adding the following to `ParticleCustomShader.sdsl`:
Если мы определяем больше потоков в нашем шейдере (`ParticleCustomShader`), они экспортируются в автоматически сгенерированный класс.  Попробуйте добавить в `ParticleCustomShader.sdsl` следующее:

  ```cs
```CS
    // -------------------------------------
// -------------------------------------
    // streams
// потоки
    // -------------------------------------
// -------------------------------------
    stage float4 SomeRandomKey;
этап float4 SomeRandomKey;
```
```

The generated .cs file should now contain:
Сгенерированный файл .cs теперь должен содержать:

  ```cs
```CS
namespace Stride.Rendering
пространство имен Stride.Rendering
{
{
    public static partial class ParticleCustomShaderKeys
общедоступный статический частичный класс ParticleCustomShaderKeys
    {
{
        public static readonly ParameterKey<Vector4> SomeRandomKey = ParameterKeys.New<Vector4>();
открытый статический только для чтения ParameterKey<Vector4> SomeRandomKey = ParameterKeys.New<Vector4>();
    }
}
}
}
```
```

We don't need this stream for now, so we can delete it.
Этот поток нам пока не нужен, поэтому мы можем его удалить.

We'll define some extra keys in `ParticleCustomMaterialKeys.cs` to use in our material and effects.
Мы определим некоторые дополнительные ключи в `ParticleCustomMaterialKeys.cs`, чтобы использовать их в нашем материале и эффектах.

  ```cs
```CS
namespace Stride.Rendering
пространство имен Stride.Rendering
{
{
    public partial class ParticleCustomShaderKeys
общедоступный частичный класс ParticleCustomShaderKeys
    {
{
        static ParticleCustomShaderKeys()
статические ParticleCustomShaderKeys()
        {
{

        }
}

        public static readonly ParameterKey<ShaderSource> BaseColor     = ParameterKeys.New<ShaderSource>();
открытый статический только для чтения ParameterKey<ShaderSource> BaseColor = ParameterKeys.New<ShaderSource>();

        public static readonly ParameterKey<Texture> EmissiveMap = ParameterKeys.New<Texture>();
public static только для чтения ParameterKey<Texture> EmissiveMap = ParameterKeys.New<Texture>();
        public static readonly ParameterKey<Color4> EmissiveValue = ParameterKeys.New<Color4>();
открытый статический только для чтения ParameterKey<Color4> EmissiveValue = ParameterKeys.New<Color4>();



        public static readonly ParameterKey<ShaderSource> BaseIntensity = ParameterKeys.New<ShaderSource>();
открытый статический только для чтения ParameterKey<ShaderSource> BaseIntensity = ParameterKeys.New<ShaderSource>();

        public static readonly ParameterKey<Texture> IntensityMap = ParameterKeys.New<Texture>();
public static только для чтения ParameterKey<Texture> IntensityMap = ParameterKeys.New<Texture>();
        public static readonly ParameterKey<float> IntensityValue = ParameterKeys.New<float>();
открытый статический только для чтения ParameterKey<float> IntensityValue = ParameterKeys.New<float>();
    }
}
}
}
```
```

As we saw above, the generated class has the same name and the namespace is `Stride.Rendering`, so we have to make our class partial and match the namespace. This has no effect on this specific sample, but will result in compilation error if your shader code auto-generates some keys.
Как мы видели выше, сгенерированный класс имеет такое же имя, а пространство имен — «Stride.Rendering», поэтому мы должны сделать наш класс частичным и соответствовать пространству имен.  Это не повлияет на этот конкретный образец, но приведет к ошибке компиляции, если ваш код шейдера автоматически сгенерирует некоторые ключи.

The rest of the code is self-explanatory. We'll need the map and value keys for shader generation later, and we'll set our generated code to the `BaseColor` and `BaseIntensity` keys respectively so the shader can use it.
Остальная часть кода говорит сама за себя.  Нам понадобятся ключи карты и значения для генерации шейдера позже, и мы установим сгенерированный код на ключи `BaseColor` и `BaseIntensity` соответственно, чтобы шейдер мог его использовать.

#### Custom Shader
#### Пользовательский шейдер

Let's look at `ParticleCustomShader.sdsl`:
Давайте посмотрим на `ParticleCustomShader.sdsl`:

  ```cs
```CS

class ParticleCustomShader : ParticleBase
класс ParticleCustomShader : ParticleBase
{
{
    // This shader can be set by the user, and it's a binary tree made up from smaller shaders
// Этот шейдер может быть установлен пользователем, и это бинарное дерево, состоящее из меньших шейдеров
    compose ComputeColor  baseColor;
составить базовый цвет ComputeColor;

    // This shader can be set by the user, and it's a binary tree made up from smaller shaders
// Этот шейдер может быть установлен пользователем, и это бинарное дерево, состоящее из меньших шейдеров
    compose ComputeColor  baseIntensity;
составить ComputeColor baseIntensity;

    // Shading of the sprite — we override the base class's Shading(), which only returns ColorScale
// Затенение спрайта — мы переопределяем Shading() базового класса, который возвращает только ColorScale
    stage override float4 Shading()
этап переопределения float4 Shading()
    {
{
        // -----------------------------------------------
// --------------------------------------------------------------
        // Base particle color RGB
// Базовый цвет частиц RGB
        // -----------------------------------------------
// --------------------------------------------------------------
        float4 finalColor = base.Shading() * baseColor.Compute();
float4 finalColor = base.Shading() * baseColor.Compute();

        // -----------------------------------------------
// --------------------------------------------------------------
        // Base particle alpha
// Базовая частица альфа
        // -----------------------------------------------
// --------------------------------------------------------------
        finalColor.a    = baseIntensity.Compute();
finalColor.a = baseIntensity.Compute();

        //  Don't forget to premultiply the alpha
// Не забудьте предварительно умножить альфу
        finalColor.rgb *= finalColor.aaa;
finalColor.rgb *= finalColor.aaa;

        return finalColor;
вернуть окончательный цвет;
    }
}
};
};
```
```

It defines two composed shaders, `baseColor` and `abseIntensity`, where we'll plug our generated shaders for RGB and A respectively. It inherits `ParticleBase` which already defines `VSMain`, `PSMain` and texturing, and uses very simple `Shading()` method.
Он определяет два составленных шейдера, `baseColor` и `abseIntensity`, где мы будем подключать наши сгенерированные шейдеры для RGB и A соответственно.  Он наследует `ParticleBase`, который уже определяет `VSMain`, `PSMain` и текстурирование, и использует очень простой метод `Shading()`.

By overriding the `Shading()` method we can define our custom behavior. Because the composed shaders we use are derived from `ComputeColor`, we can easily evaluate them using `Compute()`, which gives us the root of the compute tree for color and intensity.
Переопределяя метод `Shading()`, мы можем определить наше собственное поведение.  Поскольку составные шейдеры, которые мы используем, получены из `ComputeColor`, мы можем легко оценить их, используя `Compute()`, который дает нам корень дерева вычислений для цвета и интенсивности.

#### Custom effect
#### Пользовательский эффект

Our effect describes how to mix and compose the shaders. It's in `ParticleCustomEffect.sdfx`:
Наш эффект описывает, как смешивать и составлять шейдеры.  Он находится в `ParticleCustomEffect.sdfx`:

  ```cs
```CS
namespace Stride.Rendering
пространство имен Stride.Rendering
{
{
    partial shader ParticleCustomEffect
частичный шейдер ParticleCustomEffect
    {
{
        // Use the ParticleBaseKeys for constant attributes, defined in the game engine
// Используйте ParticleBaseKeys для постоянных атрибутов, определенных в игровом движке
        using params ParticleBaseKeys;
используя параметры ParticleBaseKeys;

        // Use the ParticleCustomShaderKeys for constant attributes, defined in this project
// Используйте ParticleCustomShaderKeys для постоянных атрибутов, определенных в этом проекте
        using params ParticleCustomShaderKeys;
используя параметры ParticleCustomShaderKeys;

        // Inherit from the ParticleBaseEffect.sdfx, defined in the game engine
// Наследуется от ParticleBaseEffect.sdfx, определенного в игровом движке
        mixin ParticleBaseEffect;
миксин ParticleBaseEffect;

        // Use the ParticleCustomShader.sdsl, defined in this project
// Используйте ParticleCustomShader.sdsl, определенный в этом проекте
        mixin ParticleCustomShader;
миксин ParticleCustomShader;

        // If the user-defined shader for the baseColor is not null use it
// Если пользовательский шейдер для baseColor не нулевой, используйте его
        if (ParticleCustomShaderKeys.BaseColor != null)
если (ParticleCustomShaderKeys.BaseColor != null)
        {
{
            mixin compose baseColor = ParticleCustomShaderKeys.BaseColor;
смесь для компоновки baseColor = ParticleCustomShaderKeys.BaseColor;
        }
}

        // If the user-defined shader for the baseIntensity (alpha) is not null use it
// Если пользовательский шейдер для baseIntensity (альфа) не нулевой, используйте его
        if (ParticleCustomShaderKeys.BaseIntensity != null)
если (ParticleCustomShaderKeys.BaseIntensity != null)
        {
{
            mixin compose baseIntensity = ParticleCustomShaderKeys.BaseIntensity;
примесь составляет baseIntensity = ParticleCustomShaderKeys.BaseIntensity;
        }
}

   };
};

}
}
```
```

`ParticleBaseKeys` and `ParticleBaseEffect` are required by the base shader which we inherit.
`ParticleBaseKeys` и `ParticleBaseEffect` требуются базовому шейдеру, который мы наследуем.

`ParticleCustomShaderKeys` provides the keys we defined earlier, where we'll plug our shaders.
`ParticleCustomShaderKeys` предоставляет ключи, которые мы определили ранее, к которым мы будем подключать наши шейдеры.

Finally, for both shaders we only need to check if there is user-defined code for it and plug it. The `baseColor` and `baseIntensity` parameters are from the shader we created earlier.
Наконец, для обоих шейдеров нам нужно только проверить, есть ли для них определяемый пользователем код, и подключить его.  Параметры `baseColor` и `baseIntensity` взяты из шейдера, который мы создали ранее.

Last, we need a material which sets all the keys and uses the newly created effect.
Наконец, нам нужен материал, который устанавливает все ключи и использует только что созданный эффект.

#### Custom particle material
#### Пользовательский материал частиц

We'll copy @'Stride.Particles.Materials.ParticleMaterialComputeColor' into `ParticleCustomMaterial.cs` in our project and customize it to use two shaders for color binary trees.
Мы скопируем @'Stride.Particles.Materials.ParticleMaterialComputeColor' в ParticleCustomMaterial.cs в нашем проекте и настроим его для использования двух шейдеров для цветных бинарных деревьев.

  ```cs
```CS
        [DataMemberIgnore]
[DataMemberIgnore]
        protected override string EffectName { get; set; } = "ParticleCustomEffect";
защищенная строка переопределения EffectName { get;  установлен;  } = 
```
```

The base class automatically tries to load the effect specified with `EffectName`. We give it the name of the effect we crated earlier.
Базовый класс автоматически пытается загрузить эффект, указанный в `EffectName`.  Мы даем ему имя эффекта, который мы создали ранее.

  ```cs
```CS
        [DataMember(300)]
[Член данных (300)]
        [Display("Alpha")]
[Отображение(
        public IComputeScalar ComputeScalar { get; set; } = new ComputeTextureScalar();
общественный IComputeScalar ComputeScalar { получить;  установлен;  } = новый ComputeTextureScalar();

        [DataMember(400)]
[Член данных (400)]
        [Display("TexCoord1")]
[Отображение(
        public UVBuilder UVBuilder1;
общедоступный UVBuilder UVBuilder1;
        private AttributeDescription texCoord1 = new AttributeDescription("TEXCOORD1");
private AttributeDescription texCoord1 = new AttributeDescription (
```
```

In addition to the already existing @'Stride.Rendering.Materials.IComputeColor', we'll use @'Stride.Rendering.Materials.IComputeScalar' for intensity, which returns a float, rather than a float4. We will also add another  @'Stride.Particles.Materials.UVBuilder' for a second texture coordinates animation.
В дополнение к уже существующему @'Stride.Rendering.Materials.IComputeColor' мы будем использовать @'Stride.Rendering.Materials.IComputeScalar' для интенсивности, которая возвращает число с плавающей запятой, а не число с плавающей запятой4.  Мы также добавим еще один @'Stride.Particles.Materials.UVBuilder' для второй анимации координат текстуры.

  ```cs
```CS
    var shaderBaseColor = ComputeColor.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.EmissiveMap, ParticleCustomShaderKeys.EmissiveValue, Color.White));
var shaderBaseColor = ComputeColor.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.EmissiveMap, ParticleCustomShaderKeys.EmissiveValue, Color.White));
    shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseColor, shaderBaseColor);
shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseColor, shaperBaseColor);

    var shaderBaseScalar = ComputeScalar.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.IntensityMap, ParticleCustomShaderKeys.IntensityValue, Color.White));
var shaderBaseScalar = ComputeScalar.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys(ParticleCustomShaderKeys.IntensityMap, ParticleCustomShaderKeys.IntensityValue, Color.White));
    shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseIntensity, shaderBaseScalar);
shaderGeneratorContext.Parameters.Set(ParticleCustomShaderKeys.BaseIntensity, shaperBaseScalar);
```
```

We load the two shaders: one for the main color and one for the intensity. These are similar to the shaders we wrote manually in the last two examples, except we generate them on the fly directly from the `ComputeColor` and `ComputeScalar` properties, which you can edit in the Property Grid. The generated code is similar to the shader code we wrote in the way that it calls `Compute()` and it returns the final result of our color or scalar compute tree.
Мы загружаем два шейдера: один для основного цвета и один для интенсивности.  Они аналогичны шейдерам, которые мы написали вручную в последних двух примерах, за исключением того, что мы генерируем их на лету непосредственно из свойств `ComputeColor` и `ComputeScalar`, которые вы можете редактировать в сетке свойств.  Сгенерированный код похож на код шейдера, который мы написали, в том, что он вызывает `Compute()` и возвращает окончательный результат нашего цветного или скалярного дерева вычислений.

After we generate the shader code, we set it to the respective key we need. Check how `ParticleCustomShaderKeys.BaseColor` is defined in `ParticleCustomShaderKeys.cs`. In the effect file we check if this key is set, and if yes, we pass it to the stream defined in our shader code.
После того, как мы сгенерировали код шейдера, мы устанавливаем для него соответствующий ключ, который нам нужен.  Проверьте, как ParticleCustomShaderKeys.BaseColor определяется в ParticleCustomShaderKeys.cs.  В файле эффекта мы проверяем, установлен ли этот ключ, и если да, то передаем его в поток, определенный в коде нашего шейдера.

## See also
## Смотрите также

* [Tutorial: Create a trail](create-a-trail.md)
* [Учебник: создание тропы](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Учебник: Пользовательские частицы](custom-particles.md)
* [Tutorial: Inheritance](inheritance.md)
* [Учебник: Наследование](inheritance.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Учебник: Лазеры и молния](lasers-and-lightning.md)
* [Particles](../index.md)
* [Частицы](../index.md)
* [Create particles](../create-particles.md)
* [Создать частицы](../create-particles.md)
