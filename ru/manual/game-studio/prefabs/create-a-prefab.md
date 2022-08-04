# Create a prefab
# Создаем префаб

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

In the **Asset View**, click **Add asset** and select **Prefabs** > **Prefab**.
В **Представлении активов** нажмите **Добавить актив** и выберите **Сборные объекты** > **Сборные объекты**.

![Create a prefab from the Asset View](media/create-prefab-from-asset-view.png)
![Создать префаб из Asset View](media/create-prefab-from-asset-view.png)

Game Studio creates an empty prefab asset with the default name *Prefab*. Double-click the asset to open the **Prefab Editor** and add entities.
Game Studio создает пустой сборный ресурс с именем по умолчанию *Prefab*.  Дважды щелкните ресурс, чтобы открыть **редактор префабов** и добавить объекты.

## Create a prefab from an entity
## Создать префаб из сущности

You can also create a prefab from an existing entity or entities.
Вы также можете создать префаб из существующей сущности или сущностей.

1. In the **Scene Editor**, select the entity or entities you want to create a prefab from.
1. В **Редакторе сцен** выберите объект или объекты, из которых вы хотите создать префаб.
>[!Tip]
>[!Подсказка]
> Hold Ctrl to select multiple items.
> Удерживайте Ctrl, чтобы выбрать несколько элементов.

2. Right-click the selection and select **Create prefab from selection**:
2. Щелкните правой кнопкой мыши выделенный фрагмент и выберите **Создать префаб из выделенного**:

![Create a prefab from selection](media/create-prefab-from-selection.gif)
![Создать префаб из выделенного](media/create-prefab-from-selection.gif)

Game Studio creates a prefab asset from the entity or entities you selected. You can access the new prefab from the **Asset View**.
Game Studio создает готовый актив из выбранной вами сущности или сущностей.  Вы можете получить доступ к новому префабу из **Asset View**.

![Prefab in Asset View](media/prefab-asset.png)
![Prefab в представлении ресурсов](media/prefab-asset.png)

>[!Note]
>[!Примечание]
>After you create a prefab from a selection, the original selection itself **becomes a prefab**.
>После того, как вы создадите префаб из выделенного, само исходное выделение **становится префабом**.

### Create a prefab from an existing modified prefab
### Создать префаб из существующего модифицированного префаба

You can create new prefabs from modified prefabs. For example, you can instantiate a prefab, [override one of its properties](override-prefab-properties.md), then use this modified prefab instance to create a new prefab.
Вы можете создавать новые префабы из модифицированных префабов.  Например, вы можете создать экземпляр префаба, [переопределить одно из его свойств](override-prefab-properties.md), а затем использовать этот модифицированный экземпляр префаба для создания нового префаба.

## See also
## Смотрите также

* [Prefab index](index.md)
* [Индекс префаба](index.md)
* [Use prefabs](use-prefabs.md)
* [Использовать префабы](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Редактировать префабы](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
