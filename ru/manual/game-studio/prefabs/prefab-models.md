# Prefab models
# Сборные модели

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Prefab models** convert prefabs to single drawcalls. This is useful for optimization, as Stride only renders the final model instead of the separate entities in the prefab. When you make changes to the prefab, Game Studio regenerates the prefab model.
**Сборные модели** преобразуют сборные объекты в отдельные вызовы отрисовки.  Это полезно для оптимизации, так как Stride отображает только окончательную модель, а не отдельные объекты в префабе.  Когда вы вносите изменения в префаб, Game Studio регенерирует префаб-модель.

## Drawbacks
## Недостатки

Prefab models don't inherit elements such as lights, colliders, or other components — they're only models, and have to be used just like other models. For example, if you have a prefab comprising two models with physics components, the prefab model creates a single model from the two models and ignores the physics components. If you need to add components to a prefab model, add them to the prefab model itself.
Сборные модели не наследуют такие элементы, как источники света, коллайдеры или другие компоненты — это всего лишь модели, и их нужно использовать так же, как и другие модели.  Например, если у вас есть сборная модель, состоящая из двух моделей с физическими компонентами, сборная модель создает единую модель из двух моделей и игнорирует физические компоненты.  Если вам нужно добавить компоненты в сборную модель, добавьте их в саму сборную модель.

Prefab models don't expose materials. This means you can't view or edit them in the prefab model asset, or in model components that use the prefab model.
Сборные модели не обнажают материалы.  Это означает, что вы не можете просматривать или редактировать их в активе сборной модели или в компонентах модели, которые используют сборную модель.

## Create a prefab model
## Создание сборной модели

1. In the **Asset View**, select **Add asset > Model > Prefab model**.
1. В **Представлении активов** выберите **Добавить актив > Модель > Сборная модель**.

    ![Add prefab model](media/add-prefab-model.png)
![Добавить сборную модель](media/add-prefab-model.png)

2. In the Property Grid (on the right by default), next to **Prefab**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select asset**).
2. В сетке свойств (по умолчанию справа) рядом с **Prefab** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выбрать ресурс  **).

    ![Prefab properties](media/prefab-model-properties.png)
![Свойства префаба](media/prefab-model-properties.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select prefab for model](media/select-prefab-for-model.png)
![Выбрать префаб для модели](media/select-prefab-for-model.png)

3. Select the prefab you want to create a model from and click **OK**.
3. Выберите префаб, из которого вы хотите создать модель, и нажмите **ОК**.

    Game Studio adds the prefab model to the Asset View.
Game Studio добавляет сборную модель в Asset View.

    ![Prefab model added](media/prefab-model-added.png)
![Добавлена ​​сборная модель](media/prefab-model-added.png)

## See also
## Смотрите также

* [Create a prefab](create-a-prefab.md)
* [Создать префаб](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Использовать префабы](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Редактировать префабы](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Archetypes](../archetypes.md)
* [Архетипы](../archetypes.md)
