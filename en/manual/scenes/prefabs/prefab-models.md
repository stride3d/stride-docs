# Prefab models

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Prefab models** convert prefabs into a consolidated model that only requires a single draw call, improving performance. When you make changes to the prefab, Game Studio regenerates the prefab model.

TODO: VISUALIZATION

## Drawbacks

* **Prefab models are only models** - they do not inherit things such as lights, colliders or components. For example, if you have a prefab comprising two models with physics components, the prefab model creates a single model from the two models and ignores the physics components. If you need to add components to a prefab model, add them to the prefab model itself.
* **Prefab models don't expose materials** - this means you can't view or edit them in the prefab model asset, or in model components that use the prefab model.

## Create a prefab model

1. In the **Asset view**, select **Add asset > Model > Prefab model**.

    TODO: IMAGE

2. In the **Property grid**, assign the prefab to the **Prefab** property by clicking the **👆 Hand icon**.

    TODO: IMAGE
