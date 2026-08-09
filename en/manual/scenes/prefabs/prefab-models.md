# Prefab models

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Prefab models** convert prefabs into a consolidated model that only requires a single draw call, improving performance. When you make changes to the prefab, Game Studio regenerates the prefab model.

## Drawbacks

* **Prefab models can only be a model** - they do not inherit things such as lights, colliders or other components.
* **Prefab models don't expose materials** - this means you can't view or edit them in a scene.

## Create a prefab model

1. In the **Asset view**, select **Add asset > Model > Prefab model**.

    ![](media/asset-view-create-prefab-model.webp)

2. In the **Property grid**, assign the prefab to the **Prefab** property by clicking the **👆 Hand icon**.

    ![](media/property-grid-prefab-model-assign.webp)
