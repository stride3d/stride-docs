# Animation scripts

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

Animations are controlled using scripts. 

You can add an [AnimationComponent](xref:Stride.Engine.AnimationComponent) to an entity and [set up its parameters](set-up-animations.md) in Game Studio. The [AnimationComponent](xref:Stride.Engine.AnimationComponent) class is designed to be used mainly from a script. 

The more useful properties include:

| Property | Description
| -------- | -----------
| [Animations](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_Animations) | Gets the animation clips associated with this [AnimationComponent](xref:Stride.Engine.AnimationComponent)
| [BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder) | Gets or sets animation blend tree builder. Note you can create custom blend trees; for more information, see [Custom blend tree](custom-blend-trees.md)
| [PlayingAnimations](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_PlayingAnimations) | Gets the list of active animations. Use it to customize your startup animations. The playing animations are updated automatically by the animation processor, so be careful when changing the list or keeping a reference to a playing animation

>[!Note]
>Animation clips you reference in scripts must be added to the same entity under the [AnimationComponent](xref:Stride.Engine.AnimationComponent).

>![Animations added to component](media/animations-added-to-component.png)

>For more information, see [Set up animations](set-up-animations.md).

## Use the pre-built **AnimationStart** script

Stride includes a pre-built **AnimationStart** script. You can use this script as a template to write your own animation scripts.

To use the **AnimationStart** script:

1. In the **Asset View** (bottom pane by default), click **Add asset**.

2. Choose **Add asset > Scripts > Animation start**.

    ![Add animation script](media/animations-additive-animations-animation-start.png)

3. Specify a name for the script and click **Create script**.

    ![Create script](media/name-animation-script.png)

    3a. If Game Studio asks if you want to save your script, click **Save script**.
    
    3b. If Game Studio asks if you want to reload the assemblies, click **Reload assemblies**.

4. Edit the script as necessary and save it.

## Example animation script

This sample script assigns a simple animation to a character based on its walking speed.

```cs
using Stride.Engine;

namespace AdditiveAnimation
{
    public class AnimationClipExample : SyncScript
    {
        public float MovementSpeed { get; set; } = 0f;

        private float walkingSpeedLimit = 1.0f;

        // Assuming the script is attached to an entity which has an animation component
        private AnimationComponent animationComponent;

        public override void Start()
        {
            // Cache some variables we'll need later
            animationComponent = Entity.Get<AnimationComponent>();
            animationComponent.Play("Idle");
        }

        protected void PlayAnimation(string name)
        {
            if (!animationComponent.IsPlaying(name))
                animationComponent.Play(name);
        }

        public override void Update()
        {
            if (MovementSpeed <= 0)
            {
                PlayAnimation("Idle");
            }
            else if (MovementSpeed <= walkingSpeedLimit)
            {
                PlayAnimation("Walk");
            }
            else 
            {
                PlayAnimation("Run");
            }
        }
    }
}
```

## Override the animation blend tree

You can also override the animation blend tree and do all animation blending in the script. The templates *First-person shooter*, *Third-person platformer* and *Top-down RPG*, which use some advanced techniques, are examples of how to do this. For more information, see [custom blend trees](custom-blend-trees.md).

## See also

* [Scripts](../scripts/index.md)
* [Animation index](index.md)
* [Import animations](import-animations.md)
* [Animation properties](animation-properties.md)
* [Set up animations](set-up-animations.md)
* [Preview animations](preview-animations.md)
* [Additive animation](additive-animation.md)
* [Procedural animation](procedural-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [Model node links](model-node-links.md)
* [custom attributes](custom-attributes.md)
