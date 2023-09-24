# Procedural animation

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Procedural animation** is an alternative method of animation. Instead of creating animations yourself, you can use engine components to animate 3D models at runtime. 

In some cases, this creates more effective and efficient animations. For example, imagine a shrink effect that happens when the player shoots a monster with a shrink weapon. Instead of creating a complex shrinking animation, you can access the entity [TransformComponent](xref:Stride.Engine.TransformComponent) and simply scale the enemy down to the required size.

The animation can animate a wide variety of components besides Skeleton bones, including:

* [TransformComponent](xref:Stride.Engine.TransformComponent)
* [LightComponent](xref:Stride.Engine.LightComponent)
* [RigidBodyComponent](xref:Stride.Physics.RigidbodyComponent)
* [Custom components](xref:Stride.Engine.EntityComponent)

Stride's animation system works just like Blender or Maya's curve animation editor. Each bone/value is assigned a [curve](xref:Stride.Animations.AnimationCurve) composed of several [points](xref:Stride.Animations.KeyFrameData`1) that are interpolated either in linear, cubic or constant fashion.

## Code samples

### Transform component

```cs
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

```csharp
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
> If you need to animate a bone procedurally you must use the `NodeTransformations` field of the `Skeleton`.

## See also

* [Animation index](index.md)
* [Import animations](import-animations.md)
* [Animation properties](animation-properties.md)
* [Set up animations](set-up-animations.md)
* [Preview animations](preview-animations.md)
* [Animation scripts](animation-scripts.md)
* [Additive animation](additive-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [Model node links](model-node-links.md)
* [custom attributes](custom-attributes.md)