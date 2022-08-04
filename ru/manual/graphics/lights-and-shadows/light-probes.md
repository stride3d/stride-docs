# Light probes
# Световые зонды

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Light probes** capture the lighting at the position you place them. They simulate **indirect light**, the effect of light bouncing off surfaces and illuminating other surfaces. They can make a dramatic difference to the mood and appearance of your scene.
**Световые датчики** фиксируют освещение в том месте, где вы их размещаете.  Они имитируют **непрямой свет**, эффект отражения света от поверхностей и освещения других поверхностей.  Они могут кардинально изменить настроение и внешний вид вашей сцены.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/light_probes_640.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/light_probes_640.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

The screenshot below shows a [point light](point-lights.md) surrounded by light probes in the Scene Editor. The probes form 3D areas (shown in the Scene Editor by the yellow wireframe connecting the probes).
На скриншоте ниже показан [точечный источник света](point-lights.md), окруженный световыми зондами в редакторе сцен.  Датчики образуют трехмерные области (показаны в редакторе сцен желтым каркасом, соединяющим датчики).

![Cornell box](media/light-probes-cornell.png)
![Корнеллский ящик](media/light-probes-cornell.png)

Stride colors pixels within a light probe area to simulate the effect of light bouncing from nearby surfaces. To find a color for a given pixel, Stride interpolates from the lighting captured by the four surrounding light probes.
Шаг окрашивает пиксели в области датчика света, чтобы имитировать эффект отражения света от близлежащих поверхностей.  Чтобы найти цвет для данного пикселя, Stride интерполирует освещение, захваченное четырьмя датчиками окружающего света.

For example, in the screenshot below, notice how the red of the wall is reflected on the other objects. In the Scene Editor, this is also visible on the surface of the light probes themselves.
Например, на скриншоте ниже обратите внимание, как красный цвет стены отражается на других объектах.  В редакторе сцен это также видно на поверхности самих световых зондов.

![Light probes — more reflection](media/light-probes-illumination.png)
![Световые зонды — больше отражения](media/light-probes-illumination.png)

Light probes affect all objects in the area they cover, including static and dynamic objects. You don't need to enable any extra options on the entities that light probes affect.
Световые зонды воздействуют на все объекты в области, которую они охватывают, включая статические и динамические объекты.  Вам не нужно включать какие-либо дополнительные параметры для сущностей, на которые влияют световые зонды.

## 1. Enable light probes in the graphics compositor
## 1. Включить световые зонды в графическом компоновщике

Stride enables light probes by default in new projects. To make sure light probes are enabled:
Stride по умолчанию включает световые датчики в новых проектах.  Чтобы убедиться, что световые датчики включены:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)
![Ресурс графического компоновщика](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](..\graphics-compositor\media\graphics-compositor-editor.png)
![Редактор графического редактора](..\graphics-compositor\media\graphics-compositor-editor.png)

2. Select the **forward renderer** node.
2. Выберите узел **forward renderer**.

3. In the **Property Grid** (on the right by default), make sure the **Light probes** checkbox is selected.
3. Убедитесь, что в **Сетке свойств** (по умолчанию справа) установлен флажок **Световые датчики**.

    ![Enable light probes](media/enable-light-probes.png)
![Включить световые зонды](media/enable-light-probes.png)

For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.
Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics-compositor/index.md).

## 2. Create a light probe
## 2. Создайте световой зонд

Right-click the scene or Entity Tree and select **Light > Light probe**.
Щелкните правой кнопкой мыши сцену или дерево объектов и выберите **Light > Light probe**.

![Add light probe](media/add-light-probe.png)
![Добавить световой зонд](media/add-light-probe.png)

Alternatively, create an empty entity and add a **Light probe component** in the Property Grid.
Либо создайте пустой объект и добавьте **компонент светового зонда** в сетку свойств.

![Add light probe component](media/add-light-probe-component.png)
![Добавить компонент светового зонда](media/add-light-probe-component.png)

Light probes appear as spheres in the Scene Editor. Before you capture a light bounce for the first time, they have a completely black surface.
Световые зонды отображаются в виде сфер в редакторе сцен.  Прежде чем вы впервые поймаете отражение света, у них будет абсолютно черная поверхность.

![Light](media/light-probes-black.jpg)
![Свет](media/light-probes-black.jpg)

## 3. Place light probes
## 3. Разместите световые зонды

Light probes must be placed in a way that creates a **3D volume**. This means:
Световые зонды должны быть размещены таким образом, чтобы создать **трехмерный объем**.  Это означает:

* You need **at least four light probes** in the scene — enough to create the four points of a tetrahedron, as below:
* Вам нужно **как минимум четыре световых зонда** в сцене — достаточно, чтобы создать четыре вершины тетраэдра, как показано ниже:

    ![Tetrahedron](media/light-probes-tetrahedron.png)
![Тетраэдр](media/light-probes-tetrahedron.png)

* At least one light probe must be on a different plane from the rest. For example, the probes in the screenshot below won't work, as they are on a flat plane and create no volume:
* По крайней мере один световой зонд должен находиться в другой плоскости, чем остальные.  Например, щупы на скриншоте ниже работать не будут, так как находятся на плоской плоскости и не создают объема:

    ![Flat probes](media/bad-light-probe-arrangement.png)
![Плоские зонды](media/bad-light-probe-arrangement.png)

A typical method is to place light probes in a grid across your scene covering a general area, as in the screenshots below:
Типичный метод заключается в размещении световых зондов в сетке по всей сцене, покрывающей общую область, как показано на снимках экрана ниже:

![Grid layout](media/light-probes-grid-layout.jpg)
![Макет сетки](media/light-probes-grid-layout.jpg)

![Light probes in the editor](media/light-probes-in-editor.jpg)
![Световые зонды в редакторе](media/light-probes-in-editor.jpg)

>[!Tip]
>[!Подсказка]
>You can quickly duplicate light probes just like other entities. To do this, select a light probe, hold **Ctrl**, and move it with the mouse.
>Вы можете быстро дублировать световые зонды, как и другие объекты.  Для этого выберите световой зонд, зажмите **Ctrl** и переместите его мышью.

## 4. Capture lighting
## 4. Захват освещения

1. In the Scene Editor toolbar, click the **lighting options** button to open the lighting options menu.
1. На панели инструментов редактора сцен нажмите кнопку **Параметры освещения**, чтобы открыть меню параметров освещения.

    ![Lighting options](media/lighting-options-menu.png)
![Параметры освещения](media/lighting-options-menu.png)

2. Next to **Bounces**, set the number of light bounces you want to capture. 
2. Рядом с **Отражениями** установите количество отражений света, которые вы хотите зафиксировать.

    Multiple bounces simulate the effect of light bouncing between surfaces multiple times. This generally has the effect of brightening the lighting. Three or four bounces should be enough; beyond this, changes are almost unnoticeable. The number of bounces has no impact on runtime performance.
Множественные отражения имитируют эффект многократных отражений света от поверхностей.  Обычно это приводит к увеличению яркости освещения.  Трех или четырех отскоков должно быть достаточно;  кроме этого, изменения почти незаметны.  Количество отказов не влияет на производительность во время выполнения.

3. To capture the lighting, click **Compute**.
3. Чтобы зафиксировать освещение, нажмите **Вычислить**.

    You can see the lighting on the surface of the light probes in the Scene Editor.
Вы можете увидеть освещение на поверхности световых зондов в редакторе сцен.

    ![Light probe surface](media/light-probes-illumination-on-surface.png)
![Поверхность светового зонда](media/light-probes-illumination-on-surface.png)

## Reset light probes
## Сброс световых датчиков

To reset the light probes, in the **lighting options** menu, click **Reset**. This is useful after you change the lights in your scene and need to capture the lighting from scratch.
Чтобы сбросить световые датчики, в меню **параметров освещения** нажмите **Сброс**.  Это полезно после того, как вы изменили источники света в своей сцене и вам нужно захватить освещение с нуля.

![Reset light probes](media/reset-light-probes.png)
![Сбросить датчики света](media/reset-light-probes.png)

## Show and hide light probes in the Scene Editor
## Показать и скрыть световые зонды в редакторе сцен

Under the **gizmo options** in the Scene Editor toolbar, use the **Light probes** checkbox.
Под **параметрами гизмо** на панели инструментов редактора сцен установите флажок **Световые зонды**.

![Hide light probes](media/light-probes-checkbox.png)
![Скрыть световые зонды](media/light-probes-checkbox.png)

## Show and hide light probe volumes in the Scene Editor
## Отображение и скрытие объемов светового зонда в редакторе сцен

Under the **gizmo options** in the Scene Editor toolbar, use the **Light probe volumes** checkbox.
Под **опциями gizmo** на панели инструментов редактора сцен установите флажок **Light probe Volumes**.

![Hide light probe volumes](media/light-probe-volumes-checkbox.png)
![Скрыть объемы светового зонда](media/light-probe-volumes-checkbox.png)

![Light probe volumes on and off](media/light-probe-wireframe-on.jpg)
![Включение и выключение громкости светового зонда](media/light-probe-wireframe-on.jpg)

## See also
## Смотрите также

* [Add a light](add-a-light.md)
* [Добавить свет](add-a-light.md)
* [Point lights](point-lights.md)
* [Точечные огни](point-lights.md)
* [Ambient lights](ambient-lights.md)
* [Рассеивающие огни](ambient-lights.md)
* [Directional lights](directional-lights.md)
* [Направленные огни](directional-lights.md)
* [Skybox lights](skybox-lights.md)
* [Огни скайбокса](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Прожектор](spot-lights.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
