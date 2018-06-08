# Procedural animation

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

**Procedural animation** is an alternative method of animation. Instead of creating animations yourself, you can use engine components to animate 3D models at runtime. 

In some cases, this creates more effective and efficient animations. For example, imagine a shrink effect that happens when the player shoots a monster with a shrink weapon. Instead of creating a complex shrinking animation, you can access the entity [TransformComponent](xref:SiliconStudio.Xenko.Engine.TransformComponent) and simply scale the enemy down to the required size.

You can access multiple components to animate your models at runtime, including:

* [TransformComponent](xref:SiliconStudio.Xenko.Engine.TransformComponent)
* [LightComponent](xref:SiliconStudio.Xenko.Engine.LightComponent)
* [RigidBodyComponent](xref:SiliconStudio.Xenko.Physics.RigidbodyComponent)

## Code sample

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