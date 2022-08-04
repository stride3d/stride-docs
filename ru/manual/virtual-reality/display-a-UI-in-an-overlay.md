# Display a UI in an overlay
# Отображение пользовательского интерфейса в оверлее

This page explains how to render a UI to a texture, then display it as an overlay.
На этой странице объясняется, как преобразовать пользовательский интерфейс в текстуру, а затем отобразить ее в виде наложения.

These instructions assume you already have a UI that you want to display in the overlay. For information about creating UIs, see the [UI](../ui/index.md) section.
В этих инструкциях предполагается, что у вас уже есть пользовательский интерфейс, который вы хотите отобразить в оверлее.  Сведения о создании пользовательских интерфейсов см. в разделе [UI](../ui/index.md).

> [!Note]
> [!Примечание]
> You can't see overlays when you don't run your game in your VR device. This is because the VR device itself creates the overlay, not other hardware.
> Вы не можете видеть оверлеи, если не запускаете игру на своем VR-устройстве.  Это связано с тем, что оверлей создает само устройство VR, а не другое оборудование.

## 1. Create a render target texture
## 1. Создайте текстуру цели рендеринга

In the **Asset View**, click **Add asset** and select **Texture** > **Render target**.
В **Просмотре активов** нажмите **Добавить актив** и выберите **Текстура** > **Цель рендеринга**.

![Add render target](../graphics/graphics-compositor/media/add-render-target.png)
![Добавить цель рендеринга](../graphics/graphics-compositor/media/add-render-target.png)

Game Studio adds a **render target** texture to your project assets.
Game Studio добавляет текстуру **Render Target** к ресурсам вашего проекта.

![Render texture](../graphics/graphics-compositor/media/render-target-texture-in-asset-view.png)
![Визуализировать текстуру](../graphics/graphics-compositor/media/render-target-texture-in-asset-view.png)

In the following steps, we'll render the UI to this texture, then display it in the overlay.
В следующих шагах мы будем отображать пользовательский интерфейс для этой текстуры, а затем отображать ее в оверлее.

## 2. Add a VR overlay
## 2. Добавьте оверлей VR

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Актив графического композитора](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens. For more information about the graphics compositor, see the [Graphics compositor](../graphics/graphics-compositor/index.md) page.
Откроется редактор графического компоновщика.  Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics/graphics-compositor/index.md).

2. In the graphics compositor editor, select the **forward renderer** node.
2. В графическом редакторе компоновщика выберите узел **forward renderer**.

    ![Select forward renderer](media/select-forward-renderer.png)
![Выбрать передовой рендерер](media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), expand **VR Settings**.
3. В **Сетке свойств** (по умолчанию справа) разверните **Настройки VR**.

    ![VR settings](media/vr-settings.png)
![Настройки VR](media/vr-settings.png)

4. Next to **Overlays**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
4. Рядом с **Оверлеи** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    Game Studio adds a new overlay to the list.
Game Studio добавляет в список новый оверлей.

    ![Add VR item](media/add-overlay.png)
![Добавить элемент виртуальной реальности](media/add-overlay.png)

5. Next to **Texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
5. Рядом с **Текстура** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)
![Выберите текстуру рендеринга](../graphics/graphics-compositor/media/select-render-frame.png)

6. Select the **render texture** you created and click **OK**.
6. Выберите созданную вами **текстуру рендеринга** и нажмите **ОК**.

## 3. Set up the UI render feature
## 3. Настройте функцию рендеринга пользовательского интерфейса

1. In the graphics compositor editor, on the left, under **Render Features**, select the **UIRenderFeature**.
1. В редакторе графического компоновщика слева в разделе **Возможности рендеринга** выберите **UIRenderFeature**.

    ![Select UI render feature](media/select-UI-render-feature.png)
![Выберите функцию рендеринга пользовательского интерфейса](media/select-UI-render-feature.png)

2. In the Property Grid, make sure **SimpleGroupToRenderStageSelector** is selected.
2. В сетке свойств убедитесь, что выбран **SimpleGroupToRenderStageSelector**.

    ![Select SimpleGroupToRenderStageSelector.png](media/select-SimpleGroupToRenderStageSelector.png)
![Выберите SimpleGroupToRenderStageSelector.png](media/select-SimpleGroupToRenderStageSelector.png)

3. Under **Render Stage**, make sure **UIRenderStage** is selected.
3. В разделе **Этап рендеринга** убедитесь, что выбран **UIRenderStage**.

    ![Select UIRenderStage.png](media/select-UIRenderStage.png)
![Выберите UIRenderStage.png](media/select-UIRenderStage.png)

    This makes sure the UI is rendered in the UI render stage, which we'll use in the next step.
Это гарантирует, что пользовательский интерфейс отрисовывается на этапе рендеринга пользовательского интерфейса, который мы будем использовать на следующем шаге.

## 4. Set up the renderers
## 4. Настройте рендереры

To display an overlay, you need at least two renderers:
Для отображения оверлея необходимо как минимум два рендерера:

* one to render your main camera
* один для рендеринга вашей основной камеры
* one to render the UI to the overlay
* один для рендеринга пользовательского интерфейса в оверлей

This page describes the simplest way to do this from scratch, using two cameras and two renderers. Depending on your pipeline, you might need to create a different setup.
На этой странице описан самый простой способ сделать это с нуля, используя две камеры и два модуля визуализации.  В зависимости от вашего конвейера вам может потребоваться создать другую настройку.

> [!Warning]
> [!Предупреждение]
> These instructions involve deleting your existing renderers for the game entry point. You might want to make a backup of your project in case you want to restore your pipeline afterwards.
> Эти инструкции включают удаление существующих средств визуализации для точки входа в игру.  Возможно, вы захотите сделать резервную копию своего проекта на случай, если впоследствии захотите восстановить конвейер.

1. In the graphics compositor editor, select the **Entry points** node.
1. В графическом редакторе компоновщика выберите узел **Точки входа**.

    ![Entry points node](../graphics/graphics-compositor/media/entry-points-node.png)
![Узел точек входа](../graphics/graphics-compositor/media/entry-points-node.png)

2. In the **Property Grid** on the right, next to **Game renderer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **None** to delete your existing renderers.
2. В **Сетке свойств** справа рядом с **Визуализатор игры** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (  **Заменить**) и выберите **Нет**, чтобы удалить существующие средства визуализации.

    ![Cleared game renderers](../graphics/graphics-compositor/media/game-renderers-cleared.png)
![Очищенные игровые рендереры](../graphics/graphics-compositor/media/game-renderers-cleared.png)

3. Next to **Game rendererer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Camera Renderer**.
3. Рядом с **Визуализатор игры** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **Визуализатор камеры.  **.

    ![Select camera renderer.png](media/select-camera-renderer.png)
![Select camera renderer.png](media/select-camera-renderer.png)

    Currently, **all** renderers must have a camera, or be a child of a renderer that has a camera. This applies even to renderers that don't necessarily use cameras, such as the single stage renderer, which renders the UI. 
В настоящее время **все** средства визуализации должны иметь камеру или быть дочерними элементами средства визуализации, у которого есть камера.  Это применимо даже к модулям визуализации, которые не обязательно используют камеры, например, модуль визуализации с одним этапом, который отображает пользовательский интерфейс.
    
    For this reason, in these instructions, we'll add a game renderer with a camera, then make the two renderers children of that renderer. This makes sure both renderers have a parent with a camera.
По этой причине в этих инструкциях мы добавим модуль визуализации игры с камерой, а затем сделаем два модуля визуализации дочерними для этого модуля визуализации.  Это гарантирует, что оба рендерера имеют родителя с камерой.

4. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select your main game camera.
4. Рядом с **Камера** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите основную игровую камеру.

    ![Select main camera](media/select-main-camera.png)
![Выбрать основную камеру](media/select-main-camera.png)

5. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **SceneRendererCollection**.
5. Рядом с **Ребенок** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **SceneRendererCollection**  .

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)
![Выберите коллекцию средств визуализации сцены](media/select-scene-renderer-collection.png)

6. Next to **Children**, Click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **RenderTextureSceneRenderer**.
6. Рядом с **Дети** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **RenderTextureSceneRenderer**  .

    ![Select RenderTextureSceneRenderer](media/select-RenderTextureSceneRenderer.png)
![Выберите RenderTextureSceneRenderer](media/select-RenderTextureSceneRenderer.png)

7. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **SingleStageRenderer**. 
7. Рядом с **Дочерний** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **SingleStageRenderer**  .

    ![Select single stage renderer](media/select-single-stage-renderer.png)
![Выбрать одноэтапный рендерер](media/select-single-stage-renderer.png)

8. Next to **Render Stage**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **UIRenderStage**. This is the renderer that renders the UI.
8. Рядом с **Этап рендеринга** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **UIRenderStage*  *.  Это средство визуализации, которое отображает пользовательский интерфейс.

    ![Select UI render stage](media/select-UI-render-stage.png)
![Выберите этап рендеринга пользовательского интерфейса](media/select-UI-render-stage.png)

9. Next to **Render Texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
9. Рядом с **Render Texture** нажмите ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

10. Select the **render texture** and click **OK**.
10. Выберите **рендеринг текстуры** и нажмите **ОК**.

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)
![Выберите текстуру рендеринга](../graphics/graphics-compositor/media/select-render-frame.png)

    Game Studio adds the render texture to the renderer.
Game Studio добавляет текстуру рендеринга в средство рендеринга.

11. Under **Game renderer**, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Forward renderer**.
11. В разделе **Визуализатор игры** рядом с **Дети** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**  ) и выберите **Forward renderer**.

    ![Select forward renderer](media/overlay-select-forward-renderer.png)
![Выберите предварительный рендерер](media/overlay-select-forward-renderer.png)

Your game is now ready to render the UI to an overlay in your VR device.
Теперь ваша игра готова к отображению пользовательского интерфейса в оверлей на вашем VR-устройстве.

## VR template
## VR-шаблон

For an example of a UI overlay implemented in a VR game, see the VR template included with Stride.
Пример наложения пользовательского интерфейса, реализованного в игре виртуальной реальности, см. в шаблоне виртуальной реальности, включенном в Stride.

![VR template](media/template-virtual-reality.png)
![Шаблон VR](media/template-virtual-reality.png)

## See also
## Смотрите также

* [Overlays](overlays.md)
* [Оверлеи](overlays.md)
* [UI](../ui/index.md)
* [UI](../ui/index.md)
* [Render textures](../graphics/graphics-compositor/render-textures.md)
* [Рендеринг текстур](../graphics/graphics-compositor/render-textures.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)
* [Композитор графики](../graphics/graphics-compositor/index.md)
