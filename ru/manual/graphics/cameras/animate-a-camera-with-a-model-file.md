# Animate a camera with a model file
# Анимируем камеру с помощью файла модели

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

Like other entities, you can [animate](../../animation/index.md) cameras using animations imported from 3D model files such as `.3ds`, `.fbx`, and `.obj`.
Как и другие объекты, вы можете [анимировать](../../animation/index.md) камеры, используя анимации, импортированные из файлов 3D-моделей, таких как `.3ds`, `.fbx` и `.obj`.

>[!Note]
>[!Примечание]
>To animate a camera using a model file, you first need to bake the animation using your modeling tool (eg Maya, 3ds Max or Blender).
>Чтобы анимировать камеру с помощью файла модели, сначала необходимо запечь анимацию с помощью инструмента моделирования (например, Maya, 3ds Max или Blender).
>Stride doesn't support cameras animated using target cameras.
>Stride не поддерживает анимации камер с помощью целевых камер.

If the camera moves independently, the simplest method is to export the camera animation as a separate file, enable the **root motion** option on the animation, then add the camera, animation, and animation script to the same entity. If the animations include FOV or near or far plane animations, the Stride camera updates accordingly. With this method, you don't need a model or a skeleton.
Если камера движется независимо, самый простой способ — экспортировать анимацию камеры в отдельный файл, включить для анимации параметр **корневого движения**, а затем добавить камеру, анимацию и сценарий анимации в один и тот же объект.  Если анимация включает в себя FOV или анимацию ближней или дальней плоскости, камера Stride обновляется соответствующим образом.  С этим методом вам не нужна модель или скелет.

If you want the camera to move in tandem with another animation — for example, if the camera is held by a cameraman character with its own model, skeleton and animation — use a [model node link](../../animation/model-node-links.md) component to link the camera entity to the cameraman's movements.
Если вы хотите, чтобы камера двигалась в тандеме с другой анимацией — например, если камеру держит персонаж-оператор со своей моделью, скелетом и анимацией — используйте [ссылка узла модели](../../animation/  model-node-links.md), чтобы связать объект камеры с движениями оператора.

## Animate a camera independently
## Независимая анимация камеры

To do this, you need the following assets in your project:
Для этого вам понадобятся следующие активы в вашем проекте:

* a [camera entity](../index.md), the camera to be animated
* a [объект камеры](../index.md), камера для анимации
* an [animation](../../animation/import-animations.md), to animate the camera (exported separately in your modeling tool)
* [animation](../../animation/import-animations.md), чтобы анимировать камеру (экспортируется отдельно в вашем инструменте моделирования)
* an [animation script](../../animation/animation-scripts.md), to play the animation
* [сценарий анимации](../../animation/animation-scripts.md), для воспроизведения анимации

1. In the **Asset View**, select the animation asset you want to use to animate the camera.
1. В **Asset View** выберите анимационный ресурс, который вы хотите использовать для анимации камеры.

    ![Select animation asset](media/select-animation1.png)
![Выбрать объект анимации](media/select-animation1.png)

    >[!Note]
>[!Примечание]
    >For instructions about how import animations, see [Import animations](../../animation/import-animations.md).
>Инструкции по импорту анимации см. в разделе [Импорт анимации](../../animation/import-animations.md).

2. In the **Property Grid**, enable **Root motion**.
2. В **Сетке свойств** включите **Корневое движение**.

    ![Enable root motion](media/enable-root-motion.png)
![Включить корневое движение](media/enable-root-motion.png)

    When root motion is enabled, Stride applies the **root node animation** to the [TransformComponent](xref:Stride.Engine.TransformComponent) of the entity you add the animation to, instead of applying it to the skeleton.
Когда корневое движение включено, Stride применяет **анимацию корневого узла** к [TransformComponent](xref:Stride.Engine.TransformComponent) объекта, к которому вы добавляете анимацию, вместо применения ее к скелету.

    >[!Note]
>[!Примечание]
    >If there is no skeleton specified in **Skeleton**, Stride always applies the animation to [TransformComponent](xref:Stride.Engine.TransformComponent), even if **root motion** is disabled.
>Если в **Skeleton** не указан скелет, Stride всегда применяет анимацию к [TransformComponent](xref:Stride.Engine.TransformComponent), даже если **корневое движение** отключено.

3. In the **Scene Editor**, select the entity that contains the camera you want to animate.
3. В **Редакторе сцен** выберите объект, содержащий камеру, которую вы хотите анимировать.

    >[!Note]
>[!Примечание]
    >For instructions about how add cameras, see [Cameras](index.md).
>Инструкции по добавлению камер см. в разделе [Камеры](index.md).

4. In the **Property Grid**, click **Add component** and select **Animations**.
4. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Анимации**.

    ![Select an entity](media/add-animations-component-to-camera.png)
![Выберите объект](media/add-animations-component-to-camera.png)

    Game Studio adds an animation component to the entity.
Game Studio добавляет к объекту компонент анимации.

    ![Animation component](media/animation-component-added-to-camera.png)
![Анимационный компонент](media/animation-component-added-to-camera.png)

5. Next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and type a name.
5. Рядом с **Анимации** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и введите имя.

    ![Add animation](media/animation-name.png)
![Добавить анимацию](media/имя-анимации.png)

    Game Studio adds an animation to the list.
Game Studio добавляет в список анимацию.

    ![Animation added](media/animation-added.png)
![Добавлена ​​анимация](media/animation-added.png)

6. Next to the animation you added, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
6. Рядом с добавленной анимацией нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select an asset](media/select-mycamera-animation.png)
![Выберите ресурс](media/select-mycamera-animation.png)

7. Select the animation you want to use to animate the camera and click **OK**.
7. Выберите анимацию, которую вы хотите использовать для анимации камеры, и нажмите **ОК**.

8. Click **Add component** and select the animation script you want to use to animate the camera.
8. Нажмите **Добавить компонент** и выберите сценарий анимации, который вы хотите использовать для анимации камеры.

    ![Add animation script](media/add-animation-script.png)
![Добавить сценарий анимации](media/add-animation-script.png)

    Game Studio adds the script to the entity as a component.
Game Studio добавляет скрипт в сущность как компонент.

    >[!Note]
>[!Примечание]
    >For instructions about how to add animation scripts, see [Animation scripts](../../animation/animation-scripts.md).
>Инструкции по добавлению сценариев анимации см. в разделе [Сценарии анимации](../../animation/animation-scripts.md).

9. Under the script component, next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
9. Под компонентом сценария рядом с **Анимации** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    ![Add animation to the list](../../animation/media/add-animation-to-list.png)
![Добавить анимацию в список](../../animation/media/add-animation-to-list.png)

10. Next to **Clip**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
10. Рядом с **Клип** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите актив**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select an asset](media/select-mycamera-animation.png)
![Выберите ресурс](media/select-mycamera-animation.png)

11. Select the animation asset you want to use to animate the camera and click **OK**.
11. Выберите анимационный ресурс, который вы хотите использовать для анимации камеры, и нажмите **ОК**.

At runtime, the camera uses the animation. If the animation includes FOV or near or far plane animations, the Stride camera updates accordingly.
Во время выполнения камера использует анимацию.  Если анимация включает в себя FOV или анимацию ближней или дальней плоскости, камера Stride обновляется соответствующим образом.

## Attach the camera to a node on another model
## Прикрепите камеру к узлу на другой модели

To move a camera in tandem with another model, create a separate entity for the camera, then use a **model node link** component to link the entity to the correct node.
Чтобы переместить камеру в тандеме с другой моделью, создайте отдельный объект для камеры, а затем используйте компонент **связь узла модели**, чтобы связать объект с правильным узлом.

To do this, you need the following assets in your project:
Для этого вам понадобятся следующие активы в вашем проекте:

* a [camera entity](../index.md), the camera you want to animate
* [объект камеры](../index.md), камера, которую вы хотите анимировать
* a [model](../../animation/index.md), to attach the camera to
* a [модель](../../animation/index.md), чтобы прикрепить камеру к
* a [skeleton](../../animation/index.md) that matches the model
* [скелет](../../animation/index.md), соответствующий модели
* an [animation](../../animation/index.md), to animate the model
* [animation](../../animation/index.md), чтобы оживить модель
* an [animation script](../../animation/animation-scripts.md), to play the animation
* [сценарий анимации](../../animation/animation-scripts.md), для воспроизведения анимации

>[!Note]
>[!Примечание]
>FOV and near or far plane animations are ignored if you use this method.
>FOV и анимация ближней или дальней плоскости игнорируются, если вы используете этот метод.

1. In the **Asset View**, select the model you want to link the camera to. Next to **Skeleton**, make sure a skeleton is specified that matches the model.
1. В **Asset View** выберите модель, к которой вы хотите привязать камеру.  Убедитесь, что рядом с **Скелетом** указан скелет, соответствующий модели.

2. Make sure the entity you want to attach the camera to has the model, animation clip, and animation script components needed to animate it.
2. Убедитесь, что у объекта, к которому вы хотите прикрепить камеру, есть модель, анимационный клип и компоненты сценария анимации, необходимые для его анимации.

    >[!Note]
>[!Примечание]
    >For instructions about how to add these, see [Animation](../../animation/index.md).
>Инструкции по их добавлению см. в разделе [Анимация](../../animation/index.md).

3. With the camera entity selected, in the **Property Grid**, click **Add component** and select **Model node link**.
3. Выбрав объект камеры, в **Сетке свойств** нажмите **Добавить компонент** и выберите **Ссылка на узел модели**.

    ![Add component](../../particles/tutorials/media/add-model-node-link.png)
![Добавить компонент](../../particles/tutorials/media/add-model-node-link.png)

    >[!Note]
>[!Примечание]
    >The [TransformComponent](xref:Stride.Engine.TransformComponent) applies an offset to the model node position. If you don't want to add an offset, make sure the [TransformComponent](xref:Stride.Engine.TransformComponent) is set to `0,0,0`.
>[TransformComponent](xref:Stride.Engine.TransformComponent) применяет смещение к положению узла модели.  Если вы не хотите добавлять смещение, убедитесь, что для параметра [TransformComponent](xref:Stride.Engine.TransformComponent) установлено значение `0,0,0`.

    Game Studio adds a model link component to the entity.
Game Studio добавляет к объекту компонент ссылки на модель.

    ![Model node link component](../../animation/media/model-node-component.png)
![Компонент ссылки узла модели](../../animation/media/model-node-component.png)

4. Next to **Target**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) and select the entity that has the model you want to link the camera to.
4. Рядом с **Цель** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) и выберите объект с моделью, с которой вы хотите связать камеру.

    ![Select an entity](../../animation/media/select-an-entity-window.png)
![Выберите объект](../../animation/media/select-an-entity-window.png)

    Alternatively, leave the **Target** field blank. In the **Entity Tree**, drag the **camera entity** you want to animate to the entity that contains the model. Stride links the entity to the model on the parent entity.
Либо оставьте поле **Цель** пустым.  В **Дереве объектов** перетащите **объект камеры**, который вы хотите анимировать, на объект, содержащий модель.  Stride связывает объект с моделью родительского объекта.

    ![Parent and child](media/parent-and-child.png)
![Родитель и дочерний элемент](media/parent-and-child.png)

5. In **Node name**, select the node you want to link the camera to.
5. В **Имя узла** выберите узел, к которому вы хотите привязать камеру.

    ![Node link](media/select-node.png)
![Ссылка на узел](media/select-node.png)

    >[!Note]
>[!Примечание]
    >The entity you link to must have a model with a skeleton, even if the model isn't visible at runtime.
> Сущность, на которую вы ссылаетесь, должна иметь модель со скелетом, даже если модель не видна во время выполнения.

At runtime, the camera uses the animation.
Во время выполнения камера использует анимацию.

## See also
## Смотрите также

* [Cameras](index.md)
* [Камеры](index.md)
* [Model node links](../../animation/model-node-links.md)
* [Ссылки на узлы модели](../../animation/model-node-links.md)
* [Animation](../../animation/index.md)
* [Анимация](../../animation/index.md)
* [Animation scripts](../../animation/animation-scripts.md)
* [Сценарии анимации](../../animation/animation-scripts.md)
