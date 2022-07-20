# Пользовательские деревья смешивания

<span class="label label-doc-level">Сложность / Сложная</span>
<span class="label label-doc-audience">Область / Код</span>

[AnimationComponent](xref:Stride.Engine.AnimationComponent) содержит свойство [AnimationComponent.BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder). Если вам нужен абсолютный контроль над тем, какие проигрывается анимации, как они смешиваются и какие веса у них есть, вы можете создать сценарий, который наследует от `IBlendTreeBuilder` и назначьте его для `BlendTreeBuilder` под вашим компонентом анимации.

Когда компонент анимации обновляется, он вызывает `void BuildBlendTree(FastList<AnimationOperation> animationList)` на вашем сценарии вместо того, чтобы обновлять саму анимацию.Это позволяет вам выбрать любую комбинацию анимаций, скоростей и примисей, но это также сложнее, так как вся комплексность сейчас находится на стороне скрипта.

Шаблоны *First-person shooter*, *Third-person platformer* и *Top-down RPG*, примеры того, как использовать индивидуальные смешиваемые деревья.

## Пример кода

```cs

...

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
