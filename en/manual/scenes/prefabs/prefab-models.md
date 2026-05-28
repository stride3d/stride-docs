# Prefab models

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Prefab models** convert prefabs to single drawcalls. This is useful for optimization, as Stride only renders the final model instead of the separate entities in the prefab. When you make changes to the prefab, Game Studio regenerates the prefab model.

## Drawbacks

Prefab models don't inherit elements such as lights, colliders, or other components — they're only models, and have to be used just like other models. For example, if you have a prefab comprising two models with physics components, the prefab model creates a single model from the two models and ignores the physics components. If you need to add components to a prefab model, add them to the prefab model itself.

Prefab models don't expose materials. This means you can't view or edit them in the prefab model asset, or in model components that use the prefab model.

## Create a prefab model

1. In the **Asset view**, select **Add asset > Model > Prefab model**.

    ![Add prefab model](media/add-prefab-model.png)

2. In the **Property grid**, assign the prefab to the **Prefab** property by clicking the **👆 Hand icon**.

    ![Prefab properties](media/prefab-model-properties.png)
