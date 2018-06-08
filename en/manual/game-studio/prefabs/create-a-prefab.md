# Create a prefab

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

In the **Asset View**, click **Add asset** and select **Prefabs** > **Prefab**.

![Create a prefab from the Asset View](media/create-prefab-from-asset-view.png)

Game Studio creates an empty prefab asset with the default name *Prefab*. Double-click the asset to open the **Prefab Editor** and add entities.

## Create a prefab from an entity

You can also create a prefab from an existing entity or entities.

1. In the **Scene Editor**, select the entity or entities you want to create a prefab from.
>[!Tip]
> Hold Ctrl to select multiple items.

2. Right-click the selection and select **Create prefab from selection**:

![Create a prefab from selection](media/create-prefab-from-selection.gif)

Game Studio creates a prefab asset from the entity or entities you selected. You can access the new prefab from the **Asset View**.

![Prefab in Asset View](media/prefab-asset.png)

>[!Note]
>After you create a prefab from a selection, the original selection itself **becomes a prefab**.

### Create a prefab from an existing modified prefab

You can create new prefabs from modified prefabs. For example, you can instantiate a prefab, [override one of its properties](override-prefab-properties.md), then use this modified prefab instance to create a new prefab.

## See also

* [Prefab index](index.md)
* [Use prefabs](index.md)
* [Edit prefabs](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Prefab models](prefab-models.md)