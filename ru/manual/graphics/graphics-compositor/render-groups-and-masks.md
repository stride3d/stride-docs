# Render groups and masks
# Рендер групп и масок

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

With **render groups** and **render masks**, you can choose which parts of your scene are rendered by different [cameras](../cameras/index.md). For example, you can have a model be visible to Camera A but invisible to Camera B.
С помощью **групп рендеринга** и **масок рендеринга** вы можете выбрать, какие части вашей сцены будут рендериться разными [камерами](../cameras/index.md).  Например, вы можете сделать модель видимой для камеры А, но невидимой для камеры Б.

## Set a render group
## Установить группу рендеринга

1. In the scene, select the entity with the component (such as a model or [UI component](../../ui/add-a-ui-to-a-scene.md)) you want to add to a render group.
1. В сцене выберите объект с компонентом (например, моделью или [компонентом пользовательского интерфейса](../../ui/add-a-ui-to-a-scene.md)), который вы хотите добавить.  в группу рендеринга.

2. In the **Property Grid**, next to **Render group**, select the group you want the entity to belong to.
2. В **Сетке свойств** рядом с **Группой рендеринга** выберите группу, к которой должен принадлежать объект.

    ![Select render group](media/select-render-group.png)
![Выбрать группу рендеринга](media/select-render-group.png)

## Set a render mask
## Установить маску рендеринга

The **render mask** filters which groups are rendered.
**Маска рендеринга** фильтрует, какие группы рендерятся.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](media/graphics-compositor-asset.png)

    The Graphics Compositor Editor opens.
Откроется Редактор графического компоновщика.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)
![Редактор графического компоновщика](media/graphics-compositor-editor.png)

2. Select the **Entry points** node.
2. Выберите узел **Точки входа**.

    ![Entry points node](media/entry-points-node.png)
![Узел точек входа](media/entry-points-node.png)

3. In the **Property Grid**, expand the renderer you want to render the model.
3. В **Сетке свойств** разверните модуль рендеринга, который вы хотите использовать для рендеринга модели.

4. Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.
4. Рядом с **Маской рендеринга** нажмите **Изменить значения** и выберите группы рендеринга, которые должна отображать камера.

    ![Render mask](media/change-render-mask.png)
![Маска рендеринга](media/change-render-mask.png)

## See also
## Смотрите также

* [Cameras](../cameras/index.md)
* [Камеры](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Слоты для камеры](../cameras/camera-slots.md)
* [Graphics compositor](index.md)
* [Композитор графики](index.md)
* [Scene renderers](scene-renderers.md)
* [Визуализация сцены] (scene-renderers.md)
* [Render textures](render-textures.md)
* [Рендеринг текстур](render-textures.md)
