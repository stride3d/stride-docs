# Render textures
# Рендер текстур

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

With **render textures**, you can send a camera's view to a texture and use the texture on objects in your scene. For example, you can use this to display part of your scene on a TV screen in the same scene, such as security camera footage.
С помощью **рендеринга текстур** вы можете передать изображение с камеры в текстуру и использовать текстуру на объектах в вашей сцене.  Например, вы можете использовать это, чтобы отобразить часть вашей сцены на экране телевизора в той же сцене, например, кадры с камеры наблюдения.

For API details, see [Textures and render textures](../low-level-api/textures-and-render-textures.md).
Подробнее об API см. в разделе [Текстуры и текстуры рендеринга](../low-level-api/textures-and-render-textures.md).

## 1. Create an extra camera slot
## 1. Создайте дополнительный слот для камеры

Camera slots link the graphics compositor to the cameras in your scene. You need to add a camera slot for a new camera to use. For more information about camera slots, see [Camera slots](../cameras/camera-slots.md).
Слоты камеры связывают графический компоновщик с камерами вашей сцены.  Вам нужно добавить слот камеры для использования новой камеры.  Дополнительные сведения о слотах для камер см. в разделе [Слоты для камер](../cameras/camera-slots.md).

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)
![Редактор графического компоновщика](media/graphics-compositor-editor.png)

2. On the left, under **Camera slots**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
2. Слева в разделе **Разъемы камеры** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    ![Camera slots](media/graphics-compositor-camera-slots.png)
![Слоты для камеры](media/graphics-compositor-camera-slots.png)

    Game Studio adds a new camera slot.
Game Studio добавляет новый слот для камеры.

    > [!Tip]
> [!Подсказка]
    > To rename a camera slot, double-click it in the list and type a new name.
> Чтобы переименовать слот камеры, дважды щелкните его в списке и введите новое имя.
    > ![Name a camera slot](media/name-camera-slot.png)
> ![Назовите слот камеры](media/name-camera-slot.png)

## 2. Create a camera and bind it to the slot
## 2. Создать камеру и привязать ее к слоту

1. In your scene, add a **camera component** to the entity you want to be your camera.
1. В вашей сцене добавьте **компонент камеры** к объекту, который вы хотите использовать в качестве камеры.

    ![Add camera component](media/add-camera-component.png)
![Добавить компонент камеры](media/add-camera-component.png)

2. Position the entity so the camera captures the area of the scene you want to render to a texture.
2. Расположите объект так, чтобы камера захватила область сцены, которую вы хотите преобразовать в текстуру.

3. In the entity **Property Grid**, enable the **Camera** component using the checkbox.
3. В объекте **Сетка свойств** включите компонент **Камера**, установив флажок.

    ![Enable camera component](media/enable-camera-component.png)
![Включить компонент камеры](media/enable-camera-component.png)

4. in the **Camera** component properties, under **Slot**, select the slot you created in the previous step.
4. в свойствах компонента **Камера** в разделе **Слот** выберите слот, созданный на предыдущем шаге.

    ![Select camera slot](media/graphics-compositor-overview-2.png)
![Выберите слот для камеры](media/graphics-compositor-overview-2.png)

## 3. Create a render target texture
## 3. Создайте текстуру цели рендеринга

In the **Asset View**, click **Add asset** and select **Texture** > **Render target**.
В **Просмотре активов** нажмите **Добавить актив** и выберите **Текстура** > **Цель рендеринга**.

![Add render target](media/add-render-target.png)
![Добавить цель рендеринга](media/add-render-target.png)

Game Studio adds a **render target** texture to your project assets.
Game Studio добавляет текстуру **Render Target** к ресурсам вашего проекта.

![Render texture](media/render-target-texture-in-asset-view.png) 
![Визуализировать текстуру](media/render-target-texture-in-asset-view.png)

## 4. Place the render target texture in the scene
## 4. Поместите текстуру цели рендеринга в сцену

There are various ways you can use the render target texture.
Существуют различные способы использования целевой текстуры рендеринга.

### Example 1: Use the render target texture in a material
### Пример 1: Использование целевой текстуры рендеринга в материале

1. In the material properties, under **Shading**, next to **Diffuse map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.
1. В свойствах материала в разделе **Shading** рядом с **Diffuse map** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (  **Заменить**) и выберите **Текстура**.

    ![Select texture](media/select-texture.png)
![Выберите текстуру](media/select-texture.png)

2. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
2. Нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

3. Select the **Render texture** asset and click **OK**.
3. Выберите ресурс **Render texture** и нажмите **OK**.

    ![Select render frame](media/select-render-frame.png)
![Выбрать кадр рендеринга](media/select-render-frame.png)

### Example 2: Use the render target texture in a sprite component
### Пример 2: Использование целевой текстуры рендеринга в компоненте спрайта

1. Create an entity and position it where you want to display the texture.
1. Создайте объект и поместите его там, где вы хотите отобразить текстуру.

2. With the entity selected, in the **Property Grid**, click **Add component** and add a **sprite** component.
2. Выбрав объект, в **Сетке свойств** нажмите **Добавить компонент** и добавьте компонент **спрайт**.

    ![Add sprite component](media/add-sprite-component.png)
![Добавить компонент спрайта](media/add-sprite-component.png)

3. In the sprite component properties, next to **Source**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.
3. В свойствах компонента спрайта рядом с **Источник** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и  выберите **Текстура**.

    ![Select sprite source](media/sprite-source-texture.png)
![Выберите источник спрайта](media/sprite-source-texture.png)

4. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
4. Нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

5. Select the **Render texture** asset and click **OK**.
5. Выберите ресурс **Render texture** и нажмите **OK**.

    ![Select render frame](media/select-render-frame.png)
![Выбрать кадр рендеринга](media/select-render-frame.png)

6. If you don't want the texture to be semi-transparent, under the **Source** properties, clear the **Is transparent** checkbox.
6. Если вы не хотите, чтобы текстура была полупрозрачной, в свойствах **Источник** снимите флажок **Прозрачен**.

    ![Clear-is-transparent](media/clear-is-transparent.png)
![Clear-is-transparent](media/clear-is-transparent.png)

## 5. Set up the graphics compositor
## 5. Настройте графический компоновщик

To display a render texture in your scene, you need at least two renderers:
Чтобы отобразить текстуру рендеринга в вашей сцене, вам нужно как минимум два рендерера:

* one to render your main camera
* один для рендеринга вашей основной камеры
* one to render the second camera to the render texture
* один для рендеринга второй камеры в текстуру рендеринга

This page describes the simplest way to do this from scratch, using two cameras and two renderers. Depending on your pipeline, you might need to create a different setup.
На этой странице описан самый простой способ сделать это с нуля, используя две камеры и два модуля визуализации.  В зависимости от вашего конвейера вам может потребоваться создать другую настройку.

> [!Warning]
> [!Предупреждение]
> These instructions involve deleting your existing renderers for the game entry point. You might want to make a backup of your project in case you want to restore your pipeline afterwards.
> Эти инструкции включают удаление существующих средств визуализации для точки входа в игру.  Возможно, вы захотите сделать резервную копию своего проекта на случай, если впоследствии захотите восстановить конвейер.

1. In the graphics compositor editor, select the **Entry points** node.
1. В графическом редакторе компоновщика выберите узел **Точки входа**.

    ![Entry points node](media/entry-points-node.png)
![Узел точек входа](media/entry-points-node.png)

2. In the **Property Grid** on the right, next to **Game renderer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **None** to delete your existing renderers.
2. В **Сетке свойств** справа рядом с **Визуализатор игры** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (  **Заменить**) и выберите **Нет**, чтобы удалить существующие средства визуализации.

    ![Cleared game renderers](media/game-renderers-cleared.png)
![Очищенные игровые рендереры](media/game-renderers-cleared.png)

3. Click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Scene renderer collection**.
3. Нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **Коллекция средств визуализации**.

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)
![Выберите коллекцию средств визуализации сцены](media/select-scene-renderer-collection.png)

    This lets you set multiple renderers for the game entry point.
Это позволяет вам установить несколько рендереров для точки входа в игру.

### 1. Render the main camera
### 1. Рендер основной камеры

1. Under **Game renderer**, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.
1. В разделе **Визуализатор игры** рядом с **Дети** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**  ) и выберите **Визуализация камеры**.

    ![Select camera renderer](media/select-render-camera.png)
![Выберите средство визуализации камеры](media/select-render-camera.png)

2. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select your main game camera.
2. Рядом с **Камера** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите основную игровую камеру.

    ![Select main camera](media/select-main-camera.png)
![Выбрать основную камеру](media/select-main-camera.png)

4. Next to **Child**, select the renderer for your main game camera (eg the **forward renderer**).
4. Рядом с **Дочерний** выберите средство визуализации для вашей основной игровой камеры (например, **прямое средство визуализации**).

    ![Select forward render](media/select-main-camera-forward-renderer.png)
![Выбрать предварительный рендеринг](media/select-main-camera-forward-renderer.png)

### 2. Render the texture
### 2. Рендеринг текстуры

1. Under **Game renderer**, next to **Add to Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.
1. В разделе **Визуализатор игры** рядом с **Добавить в дочерние** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить  **) и выберите **Визуализация камеры**.

    ![Select camera renderer](media/select-render-camera2.png)
![Выберите средство визуализации камеры](media/select-render-camera2.png)

    Game Studio adds a camera renderer to the list of children.
Game Studio добавляет средство визуализации камеры в список дочерних элементов.

    ![Second camera renderer](media/added-camera-renderer.png)
![Визуализатор второй камеры](media/added-camera-renderer.png)

2. Expand the second **camera renderer**.
2. Разверните второй **обработчик камеры**.

    ![Expand second renderer](media/expand-second-camera-renderer.png)
![Развернуть второй рендерер](media/expand-second-camera-renderer.png)

3. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the camera you want to render to a texture.
3. Рядом с **Камера** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите камеру, которую хотите  визуализировать в текстуру.

    ![Select texture camera](media/select-texture-camera.png)
![Выберите текстурную камеру](media/select-texture-camera.png)

4. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **RenderTextureSceneRenderer**.
4. Рядом с **Ребенком** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите **RenderTextureSceneRenderer**  .

    ![Select render texture scene renderer](media/render-texture-scene-renderer.png)
![Выберите средство визуализации сцены текстур](media/render-texture-scene-renderer.png)

5. Under the **RenderTextureSceneRenderer**, next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the renderer for your main game camera (eg the **forward renderer**).
5. Под **RenderTextureSceneRenderer** рядом с **Child** нажмите ![кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**  ) и выберите модуль рендеринга для вашей основной игровой камеры (например, **прямой модуль рендеринга**).

    ![Select forward renderer](media/select-forward-renderer2.png)
![Выбрать передовой рендерер](media/select-forward-renderer2.png)

6. Next to **Render texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
6. Рядом с **Визуализировать текстуру** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

7. Select the **render texture** and click **OK**.
7. Выберите **рендеринг текстуры** и нажмите **ОК**.

    ![Select render texture](media/select-render-frame.png)
![Выберите текстуру рендеринга](media/select-render-frame.png)

    Game Studio adds the render texture to the renderer.
Game Studio добавляет текстуру рендеринга в средство рендеринга.

    ![Render texture added](media/render-texture-added.png)
![Добавлена ​​текстура рендеринга](media/render-texture-added.png)

Your game is now ready to render the camera to the texture in the scene.
Теперь ваша игра готова к рендерингу камеры в текстуру сцены.

## Set a render mask
## Установить маску рендеринга

You can use the **render mask** to filter which groups are rendered in the render texture.
Вы можете использовать **маску рендеринга**, чтобы отфильтровать, какие группы визуализируются в текстуре рендеринга.

Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.
Рядом с **Маской рендеринга** нажмите **Изменить значения** и выберите группы рендеринга, которые должна отображать камера.

![Render mask](media/change-render-mask.png)
![Маска рендеринга](media/change-render-mask.png)

 For more information, see [Render groups and masks](render-groups-and-masks.md).
Для получения дополнительной информации см. [Группы и маски рендеринга](render-groups-and-masks.md).

## Sample
## Образец

For an example of rendering to a texture in a project, see the **Animation** sample included with Stride.
Пример рендеринга текстуры в проекте см. в примере **анимации**, включенном в Stride.

## See also
## Смотрите также

* [Cameras](../cameras/index.md)
* [Камеры](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Слоты для камеры](../cameras/camera-slots.md)
* [Low-level API – Textures and render textures](../low-level-api/textures-and-render-textures.md)
* [Низкоуровневый API — Текстуры и текстуры рендеринга](../low-level-api/textures-and-render-textures.md)
* [Render groups and masks](render-groups-and-masks.md)
* [Группы рендеринга и маски](render-groups-and-masks.md)
* [Graphics compositor](index.md)
* [Композитор графики](index.md)
* [Scene renderers](scene-renderers.md)
* [Визуализация сцены] (scene-renderers.md)
