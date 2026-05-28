# Create a prefab

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

In the **Asset view**, click **➕ Add asset** and select **Prefabs > Prefab**.

![](media/create-prefab-from-asset-view.png)

Game Studio creates an empty prefab asset with the default name `Prefab`. Double-click the asset to open the **Prefab editor** and add entities.

## Create a prefab from an entity

You can also create a prefab from an existing entity or entities.

1. In the **Scene editor**, select the entity or entities you want to create a prefab from.

    > [!TIP]
    > Hold Ctrl to select multiple items.

2. Right-click the selection and select **Create prefab from selection**:

    ![](media/create-prefab-from-selection.png)

Game Studio creates a prefab asset from the entity or entities you selected. You can access the new prefab from the **Asset view**.

![](media/prefab-asset.png)

> [!NOTE]
> After you create a prefab from a selection, the original selection itself **becomes a prefab**.

### Create a prefab from an existing modified prefab

You can create new prefabs from modified prefabs. For example, you can instantiate a prefab, [override one of its properties](override-prefab-properties.md), then use this modified prefab instance to create a new prefab.
