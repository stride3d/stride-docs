# Set up animations

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

After you [import animation assets](import-animations.md), you need add them to an entity and play them with a script.

## 1. Add animation assets to an entity

1. In the **Scene Editor**, select the entity you want to animate.

    ![Select an entity](media/select-entity.png)

    >[!Note]
    >To animate an entity, the entity must have a model component.

2. In the **Property Grid**, click **Add component** and choose **Animations**.

    ![Select an entity](media/select-animation-component.png)

    Game Studio adds an animation component to the entity.

3. In the animation component properties, next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) to add a new animation to the library.

4. Type a name for the animation and press Enter.

    ![Add animation](media/add-animation.png)

    >[!Tip]
    >When you play animations using scripts later, you use this name, **not** the name of the animation asset. To make identification easy, we recommend you give your animation the same name as the animation asset.
    
5. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Pick asset up](media/pick-asset-up.png)

    The **Select an asset** window opens.

6. Browse to the animation asset you want to add and click **OK**.

    ![Select an asset](media/asset-picker.png)

    Game Studio adds the animation asset to the entity.

    ![Animation asset added](media/animation-asset-added.png)

You can add as many animations to the animation component as you need. The Property Grid lists them in alphabetical order.

![Animations list](media/animations-list.png)

## 2. Create a script to play the animations

After you add animations to an entity, you need to play them with a [script](../scripts/index.md).

### Example script

```cs
    public class SimpleAnimationScript : StartupScript
    {
        public override void Start()
        {
            Entity.Get<AnimationComponent>().Play("Walk");
        }
    }
```

This script looks for an animation with the name *Walk* under the animation component on the entity.

For more information about creating animation scripts, see [animation scripts](animation-scripts.md).

## 3. Add the script to the entity

1. In the **Scene Editor**, select the entity you want to animate.

    ![Select an entity](media/select-entity.png)

2. In the **Property Grid**, click **Add component** and choose the animation script you want to add.

    ![Select an entity](media/add-animation-script-component.png)

Game Studio adds the script as a component. You can adjust [public variables you define in the script](../scripts/public-properties-and-fields.md) in the **Property Grid** under the script component properties.

![Select an entity](media/animations-setup3.png)

## See also

* [Animation index](index.md)
* [Import animations](import-animations.md)
* [Animation properties](animation-properties.md)
* [Preview animations](preview-animations.md)
* [Animation scripts](animation-scripts.md)
* [Additive animation](additive-animation.md)
* [Procedural animation](procedural-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [Model node links](model-node-links.md)
* [custom attributes](custom-attributes.md)