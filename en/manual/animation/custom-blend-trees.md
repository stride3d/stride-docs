# Custom blend trees

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

The [AnimationComponent](xref:Stride.Engine.AnimationComponent) has the property [AnimationComponent.BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder). If you want absolute control over which animations are played, how are they blended and what weights they have, you can create a script which implements from `IBlendTreeBuilder` and assign it to the BlendTreeBuilder under your animation component.

When the animation component is updated, it calls `void BuildBlendTree(FastList<AnimationOperation> animationList)` on your script instead of updating the animations itself. This allows you to choose any combination of animation clips, speeds and blends, but is also more difficult, as all the heavy lifting is now on the script side.

The templates *First-person shooter*, *Third-person platformer* and *Top-down RPG*, included with Stride, are examples of how to use custom blend trees.

## Code sample

```cs
public class AnimationBlendTree : SyncScript, IBlendTreeBuilder
{
    /// <summary>
    /// The animation component is required
    /// </summary>
    [Display("Animation Component")]
    public AnimationComponent AnimationComponent { get; set; }

    [Display("Walk")]
    public AnimationClip AnimationWalk { get; set; }

    [Display("Run")]
    public AnimationClip AnimationRun { get; set; }

    [Display("Lerp Factor")]
    public float LerpFactor = 0.5f;

    private AnimationClipEvaluator animEvaluatorWalk;
    private AnimationClipEvaluator animEvaluatorRun;
    private double currentTime = 0;

    public override void Start()
    {
        base.Start();

        // IMPORTANT STEP
        // By setting a custom blend tree builder we can override the default behavior of the animation system.
        // Instead, BuildBlendTree(FastList<AnimationOperation> blendStack) will be called each frame.
        // We need to update the animation state in Update() and then
        // pass the new animation state (stack = blend tree) to the animation system.
        AnimationComponent.BlendTreeBuilder = this;

        // As we override the animation system, we need to create an AnimationClipEvaluator for each clip we want to use.
        animEvaluatorWalk = AnimationComponent.Blender.CreateEvaluator(AnimationWalk);
        animEvaluatorRun = AnimationComponent.Blender.CreateEvaluator(AnimationRun);
    }

    public override void Cancel()
    {
        // When the script is cancelled, don't forget to release all animation resources created in Start() - AnimationClipEvaluators
        AnimationComponent.Blender.ReleaseEvaluator(animEvaluatorWalk);
        AnimationComponent.Blender.ReleaseEvaluator(animEvaluatorRun);
    }
        
    public override void Update()
    {
        // Use DrawTime rather than UpdateTime because the animations are updated only when they are drawn.
        var time = Game.DrawTime;

        // This update function accounts for animation with different durations,
        // keeping a current time relative to the blended maximum duration.
        long blendedMaxDuration = (long)MathUtil.Lerp(AnimationWalk.Duration.Ticks, AnimationRun.Duration.Ticks, LerpFactor);

        var currentTicks = TimeSpan.FromTicks((long)(currentTime * blendedMaxDuration));

        currentTicks = blendedMaxDuration == 0
            ? TimeSpan.Zero
            : TimeSpan.FromTicks((currentTicks.Ticks + (long)(time.Elapsed.Ticks)) % blendedMaxDuration);

        currentTime = ((double)currentTicks.Ticks / (double)blendedMaxDuration);
    }

    /// BuildBlendTree is called every frame from the animation system when the AnimationComponent needs to be evaluated.
    /// It overrides the default behavior of the AnimationComponent by setting a custom blend tree.
    public void BuildBlendTree(FastList<AnimationOperation> blendStack)
    {
        var timeWalk = TimeSpan.FromTicks((long) (currentTime * AnimationWalk.Duration.Ticks));
        var timeRun  = TimeSpan.FromTicks((long) (currentTime * AnimationRun.Duration.Ticks));

        // Build the animation blend tree (stack)
        blendStack.Add(AnimationOperation.NewPush(animEvaluatorWalk, timeWalk));    // Will PUSH animation state to be evaluated at the specified Time.
        blendStack.Add(AnimationOperation.NewPush(animEvaluatorRun, timeRun));      // Will PUSH another animation state to be evaluated at the specified Time.
        blendStack.Add(AnimationOperation.NewBlend(CoreAnimationOperation.Blend, LerpFactor));   // Will POP the last two states, blend them with the factor and PUSH back the result.

        // NOTE
        // Because the blending operations are laid out in a stack you have to pack the operations in this manner.
        // In general, traversing a binary tree depth-first and adding operations as you *leave* precessed nodes should be sufficient.
        // For non-binary trees, you have to properly weight the blending factors as well

        // DONE
        // The top of the stack now contains the final state used for the animated model
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
* [Procedural animation](procedural-animation.md)
* [Model node links](model-node-links.md)
* [custom attributes](custom-attributes.md)
