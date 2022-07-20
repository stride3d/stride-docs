# Procedural animation

<span class="label label-doc-level">Сложность / Средняя</span>
<span class="label label-doc-audience">Область / Код</span>

**Procedural animation** это альтернативный метод анимации. Вместо того, чтобы создавать анимацию самостоятельно, вы можете использовать компоненты Stride для анимирования 3D моделей во время выполнения.

В некоторых случаях это создает более эффективную и эффективную анимацию.Например, представьте себе эффект уменьшения, который происходит, когда игрок стреляет в монстра с уменьшающим оружием. Вместо создания сложной сжимающийся анимации, вы можете получить доступ к сущности [TransformComponent](xref:Stride.Engine.TransformComponent) и просто масштабируйте врага до требуемого размера.

Анимация может анимировать широкий спектр компонентов, помимо костей скелета, включая:

* [TransformComponent](xref:Stride.Engine.TransformComponent)
* [LightComponent](xref:Stride.Engine.LightComponent)
* [RigidBodyComponent](xref:Stride.Physics.RigidbodyComponent)
* [Custom components](xref:Stride.Engine.EntityComponent)

Система анимации Stride работает так же, как Blender или редактор анимации Maya. Каждому кости / значению присваивается [кривая](xref:Stride.Animations.AnimationCurve), которая состоит из нескольких [точек](xref:Stride.Animations.KeyFrameData) которые интерполированы либо в линейным, кубическим или прямым алгоритмом.

## Примеры кода

### Преобразование компонента

```cs

...

public class AnimationScript : StartupScript
{
    public override void Start()
    {
        // Create an AnimationClip. Make sure you set its duration properly.
        var animationClip = new AnimationClip { Duration = TimeSpan.FromSeconds(1) };

        // Add a curves specifying the path to the transformation property.
        // - You can index components using a special syntax to their key.
        // - Properties can be qualified with a type name in parenthesis.
        // - If a type isn't serializable, its fully qualified name must be used.

        animationClip.AddCurve("[TransformComponent.Key].Rotation", CreateRotationCurve());

        // Optional: pack all animation channels into an optimized interleaved format.
        animationClip.Optimize();

        // Add an AnimationComponent to the current entity and register our custom clip.
        const string animationName = "MyCustomAnimation";
        var animationComponent = Entity.GetOrCreate<AnimationComponent>();
        animationComponent.Animations.Add(animationName, animationClip);

        // Play the animation right away and loop it.
        var playingAnimation = animationComponent.Play(animationName);
        playingAnimation.RepeatMode = AnimationRepeatMode.LoopInfinite;
        playingAnimation.TimeFactor = 0.1f; // slow down
        playingAnimation.CurrentTime = TimeSpan.FromSeconds(0.6f); // start at different time
    }

    // Set custom linear rotation curve.
    private AnimationCurve CreateRotationCurve()
    {
        return new AnimationCurve<Quaternion>
        {
            InterpolationType = AnimationCurveInterpolationType.Linear,
            KeyFrames =
            {
                CreateKeyFrame(0.00f, Quaternion.RotationX(0)),
                CreateKeyFrame(0.25f, Quaternion.RotationX(MathUtil.PiOverTwo)),
                CreateKeyFrame(0.50f, Quaternion.RotationX(MathUtil.Pi)),
                CreateKeyFrame(0.75f, Quaternion.RotationX(-MathUtil.PiOverTwo)),
                CreateKeyFrame(1.00f, Quaternion.RotationX(MathUtil.TwoPi))
            }
        };
    }

    private static KeyFrameData<T> CreateKeyFrame<T>(float keyTime, T value)
    {
        return new KeyFrameData<T>((CompressedTimeSpan)TimeSpan.FromSeconds(keyTime), value);
    }
}
```


### Light component's color

```cs

...

public class AnimationLight : StartupScript
{
    public override void Start()
    {
        // Our entity should have a light component
        var lightC = Entity.Get<LightComponent>();

        // Create an AnimationClip and store unserializable types. Make sure you set its duration properly.
        var clip = new AnimationClip { Duration = TimeSpan.FromSeconds(1) };
        var colorLightBaseName = typeof(ColorLightBase).AssemblyQualifiedName;
        var colorRgbProviderName = typeof(ColorRgbProvider).AssemblyQualifiedName;

        // Point to the path of the color property of the light component
        clip.AddCurve(
            $"[LightComponent.Key].Type.({colorLightBaseName})Color.({colorRgbProviderName})Value", 
            CreateLightColorCurve()
        );

        // Play the animation right away and loop it.
        clip.RepeatMode = AnimationRepeatMode.LoopInfinite;
        var animC = Entity.GetOrCreate<AnimationComponent>();
        animC.Animations.Add("LightCurve",clip);
        animC.Play("LightCurve");
    }
    private AnimationCurve CreateLightColorCurve()
    {
        return new AnimationCurve<Vector3>
        {
            InterpolationType = AnimationCurveInterpolationType.Linear,
            KeyFrames =
            {
                CreateKeyFrame(0.00f, Vector3.UnitX), // Make the first keyframe a red color

                CreateKeyFrame(0.50f, Vector3.UnitZ), // then blue

                CreateKeyFrame(1.00f, Vector3.UnitX), // then red again
            }
        };
    }

    private static KeyFrameData<T> CreateKeyFrame<T>(float keyTime, T value)
    {
        return new KeyFrameData<T>((CompressedTimeSpan)TimeSpan.FromSeconds(keyTime), value);
    }
}
```

>[!NOTE]
> Если вам нужно анимировать процедурную кость, вы должны использовать `NodeTransformations` поле `Skeleton`.

## Смотрите так же

* [Импорт анимации](import-animations.md)
* [Свойства анимации](animation-properties.md)
* [Настройка анимации](set-up-animations.md)
* [Предпросмотр анимации](preview-animations.md)
* [Скрипты анимации](animation-scripts.md)
* [Аддитивная анимация](additive-animation.md)
* [Процедурная анимация](procedural-animation.md)
* [Пользовательские деревья смешивания](custom-blend-trees.md)
* [Связи узлов моделей](model-node-links.md)
* [Пользовательские аттрибуты](custom-attributes.md)