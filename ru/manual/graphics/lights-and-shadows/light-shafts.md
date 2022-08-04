# Light shafts
# Световые шахты

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Light shafts**, also called **god rays**, are visible rays of light. 
**Столпы света**, также называемые **божественными лучами**, представляют собой видимые лучи света.

<video autoplay loop class="responsive-video" poster="media/lightshaft_CoS_640.jpg">
<цикл автоматического воспроизведения видео class=
   <source src="media/lightshaft_CoS_640.mp4" type="video/mp4">
<source src=
</video>
</видео>

Stride light shafts are based on [shadow maps](shadows.md) and use raymarching rather than post effects, so they're visible even when the light source isn't. Any light source that casts shadows (ie [point lights](point-lights.md), [directional lights](directional-lights.md) and [spot lights](spot-lights.md)) can cast light shafts.
Световые валы шага основаны на [картах теней] (shadows.md) и используют raymarching, а не пост-эффекты, поэтому они видны, даже когда источник света не виден.  Любой источник света, который отбрасывает тени (т.е. [точечные источники света](point-lights.md), [направленные источники света](directional-lights.md) и [прожекторы](spot-lights.md)) может отбрасывать световые лучи.

To create light shafts, use three components together: **lights**, **light shafts**, and **light shaft bounding volumes**.
Чтобы создать световые валы, используйте вместе три компонента: **освещение**, **световые валы** и **ограничивающие объемы световых валов**.

## 1. Enable light shafts in the graphics compositor
## 1. Включить световые валы в графическом компоновщике

By default, Stride disables light shafts in new projects. To enable them:
По умолчанию Stride отключает световые валы в новых проектах.  Чтобы включить их:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)
![Ресурс графического компоновщика](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

2. Select the **forward renderer** node.
2. Выберите узел **forward renderer**.

    ![Select forward renderer](../../virtual-reality/media/select-forward-renderer.png)
![Выберите предварительный рендерер](../../virtual-reality/media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), next to **Light shafts**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **LightShafts**.
3. В **Сетке свойств** (по умолчанию справа) рядом с **Световыми шахтами** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon  .png) (**Заменить**) и выберите **LightShafts**.

    ![Select light shafts](media/select-light-shafts.png)
![Выберите световые валы](media/select-light-shafts.png)

4. Make sure the **light shafts** checkbox is selected.
4. Убедитесь, что установлен флажок **световые шахты**.

    ![Enable light shafts](media/enable-light-shafts.png)
![Включить световые валы](media/enable-light-shafts.png)

    For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.
Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics-compositor/index.md).

## 2. Add a light shaft component
## 2. Добавьте компонент светового вала

1. In your scene, select the entity with the **light** you want to create light shafts. This must be a light that casts shadows (ie a [point light](point-lights.md), [directional light](directional-lights.md), or [spot light](spot-lights.md)).
1. В вашей сцене выберите объект с **светом**, который вы хотите создать световыми валами.  Это должен быть источник света, отбрасывающий тени (т. е. [точечный свет](point-lights.md), [направленный свет](directional-lights.md) или [точечный свет](spot-lights.md)).

2. In the **Property Grid**, in the **Light** component properties, make sure the **Shadow** checkbox is selected.
2. Убедитесь, что в **Сетке свойств** в свойствах компонента **Свет** установлен флажок **Тень**.

    ![Enable light shafts](media/light-shafts-enable-shadows.png)
![Включить световые валы](media/light-shafts-enable-shadows.png)

3. Click **Add component** and select **Light shaft**.
3. Нажмите **Добавить компонент** и выберите **Световой вал**.

    ![Add light shaft component](media/add-light-shaft-component.png)
![Добавить компонент светового вала](media/add-light-shaft-component.png)

    Game Studio adds a light shaft component to the entity.
Game Studio добавляет к объекту компонент светового вала.

## 3. Add a bounding volume
## 3. Добавьте ограничивающий объем

The **light shaft bounding volume** defines the area in which light shafts are created. You can add the bounding volume to the same entity that has the directional light, but it's usually simpler to add it to a separate entity.
**Ограничивающий объем светового вала** определяет область, в которой создаются световые валы.  Вы можете добавить ограничивающий объем к тому же объекту, что и источник направленного света, но обычно проще добавить его к отдельному объекту.

1. In the **Asset View**, click **Add asset**.
1. В **Просмотре активов** нажмите **Добавить актив**.

2. Under **Models**, select a model in the shape you want the volume to be. For example, if you use a cube, light shafts will be created in a cube-shaped area.
2. В разделе **Модели** выберите модель нужной формы для объема.  Например, если вы используете куб, световые валы будут созданы в кубической области.

    ![Cube model](media/add-cube-model.png)
![Модель куба](media/add-cube-model.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select an asset](media/asset-picker.png)
![Выберите ресурс](media/asset-picker.png)

3. You don't need a material for the model, so click **Cancel** to create a model without a material.
3. Вам не нужен материал для модели, поэтому нажмите **Отмена**, чтобы создать модель без материала.

4. In the scene, create an empty **entity**. For now, it doesn't matter where you put it; you can reposition it later.
4. В сцене создайте пустой объект **entity**.  На данный момент не имеет значения, где вы его поместите;  вы можете изменить его положение позже.

5. With the entity selected, in the **Property Grid**, click **Add component** and select **light shaft bounding volume**.
5. Выбрав объект, в **Сетке свойств** нажмите **Добавить компонент** и выберите **ограничивающий объем светового вала**.

    ![Add light shaft bounding volume component](media/add-light-shaft-bounding-volume.png)
![Добавить компонент ограничивающего объема светового вала](media/add-light-shaft-bounding-volume.png)

6. In the **light shaft bounding volume** component properties, next to **light shaft**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
6. В свойствах компонента **ограничивающий объем светового вала** рядом с **световым валом** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**  Выберите объект**).

7. In the **entity picker**, select the entity with the directional light you want to create light shafts and click **OK**.
7. В **средстве выбора** выберите объект с направленным источником света, который вы хотите создать, и нажмите **ОК**.

8. In the **light shaft bounding volume** component properties, next to **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
8. В свойствах компонента **ограничивающий объем светового вала** рядом с **Модель** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите  имущество**).

9. In the **Select an asset** window, select the model you created and click **OK**.
9. В окне **Выберите ресурс** выберите созданную модель и нажмите **ОК**.

    ![Select model](media/select-procedural-model.png)
![Выберите модель](media/select-procedural-model.png)

    This model defines the shape of the light shaft bounding volume.
Эта модель определяет форму ограничивающего объема светового вала.

10. Using the **transform** component, position and scale the entity to cover the area where you want to create light shafts.
10. Используя компонент **transform**, расположите и масштабируйте объект так, чтобы он покрыл область, где вы хотите создать световые валы.

    >[!Tip]
>[!Подсказка]
    >To show or hide navigation light shaft bounding volumes in the Scene Editor, in the **Scene Editor toolbar**, open the **gizmo options** menu and use the **Light shaft bounding volumes** checkbox.
>Чтобы отобразить или скрыть ограничивающие объемы шахты навигационного огня в редакторе сцен, на **панели инструментов редактора сцены** откройте меню **опций гизмо** и установите флажок **Ограничивающие объемы шахты освещения**.
    
    ![Show light shaft bounding volumes](media/show-or-hide-light-shaft-bounding-volume.png)
![Показать ограничивающие объемы светового вала](media/show-or-hide-light-shaft-bounding-volume.png)

## Light shaft properties
## Свойства светового вала

![Light shaft properties](media/light-shaft-properties.png)
![Свойства светового вала](media/light-shaft-properties.png)

| Property                  | Description                                               
|  Недвижимость |  Описание
|---------------------------|----------
|---------------------------|----------
| Density                   | Higher values produce brighter light shafts
|  Плотность |  Чем выше значение, тем ярче световые валы.
| Sample count              | Higher values produce better light shafts but use more GPU 
|  Количество образцов |  Более высокие значения дают лучшие световые валы, но используют больше GPU.
| Process bounding volumes separately  | Preserves light shaft quality when seen through separate bounding boxes, but uses more GPU
|  Обрабатывать ограничивающие объемы отдельно |  Сохраняет качество светового вала при просмотре через отдельные ограничивающие рамки, но использует больше графического процессора.

### Light shaft graphics compositor properties
### Свойства графического компоновщика Light Shaft

To access these properties, in the **graphics compositor editor**, select the **forward renderer** node and expand **Light Shafts**.
Чтобы получить доступ к этим свойствам, в **редакторе графического компоновщика** выберите узел **прямой рендеринг** и разверните **Световые валы**.

These properties apply globally to all the light shafts in the scene.
Эти свойства применяются глобально ко всем световым валам в сцене.

![Light shaft graphics compositor properties](media/light-shaft-graphics-compositor-properties.png)
![Свойства графического компоновщика Light Shaft](media/light-shaft-graphics-compositor-properties.png)

| Property                                | Description                                                    
|  Недвижимость |  Описание
|-----------------------------------------|--------------
|-------------------------------------------------------|-------  -------
| Bounding volume buffer downsample level | Lower values produce more precise volume buffer areas, but use more GPU
|  Уровень понижающей дискретизации буфера ограничивающего тома |  Меньшие значения дают более точные области буфера тома, но используют больше GPU.
| Light buffer downsample level           | Lower values produce sharper light shafts, but use more GPU
|  Уровень понижения частоты светового буфера |  Более низкие значения дают более четкие световые валы, но используют больше ресурсов графического процессора.

## Optimize light shafts
## Оптимизация световых валов

Light shafts work best in dark environments. You can adjust the light and light shaft component properties to achieve different results — for example, by changing the light color (in the **light component properties**) or the light shaft density (in the **light shaft component properties**).
Световые валы лучше всего работают в темноте.  Вы можете настроить свойства источника света и компонента светового луча для достижения различных результатов, например, изменив цвет источника света (в **свойствах компонента света**) или плотность светового луча (в **свойствах компонента луча**  ).

Multiple light shafts viewed through one another can become visually noisy, as in the screenshot below:
Несколько световых валов, просматриваемых друг через друга, могут стать визуально шумными, как на снимке экрана ниже:

![Noisy light shafts](media/noisy-light-shafts.jpg)
![Шумные световые валы](media/noisy-light-shafts.jpg)

To reduce this effect, in the **light shaft component properties**, reduce the **density** and increase the **sample count**.
Чтобы уменьшить этот эффект, в **свойствах светового вала** уменьшите **плотность** и увеличьте **количество выборок**.

![Density factor](media/density-factor.png)
![Коэффициент плотности](media/density-factor.png)

Alternatively, add additional bounding volumes and process them separately. To do this:
В качестве альтернативы можно добавить дополнительные ограничивающие объемы и обрабатывать их отдельно.  Сделать это:

1. Create additional bounding volumes and position them to cover the areas where you want to create light shafts. Make sure the bounding volumes don't overlap, as this makes light shafts extra-bright.
1. Создайте дополнительные ограничивающие объемы и расположите их так, чтобы они покрывали области, в которых вы хотите создать световые валы.  Убедитесь, что ограничивающие объемы не перекрываются, так как это делает световые валы очень яркими.

2. In the **light shaft component properties**, make sure **Process bounding volumes separately** is selected.
2. Убедитесь, что в **свойствах светового вала** выбрано **обрабатывать ограничивающие объемы отдельно**.

![Separate bounding volume](media/separate-bounding-volumes.png)
![Отдельный ограничивающий объем](media/separate-bounding-volumes.png)

> [!Note]
> [!Примечание]
> Processing bounding volumes separately uses more GPU.
> Обработка ограничивающих объемов по отдельности использует больше GPU.

## See also
## Смотрите также

* [Directional lights](directional-lights.md)
* [Направленные огни](directional-lights.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
