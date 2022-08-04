# Point lights
# Точечные светильники

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Point lights** emit light in all directions within a sphere. They're useful for simulating sources of local light, such as lamps and lightbulbs. They cast shadows.
**Точечные источники** излучают свет во всех направлениях внутри сферы.  Они полезны для имитации местных источников света, таких как лампы и лампочки.  Они отбрасывают тени.

![media/PointLightOverview.png](media/PointLightOverview.png) 
![media/PointLightOverview.png](media/PointLightOverview.png)

The Scene Editor shows the position of point lights with the following icon:
Редактор сцен показывает положение точечных источников света следующим значком:

![media/PointLight.png](media/PointLight.png) 
![медиа/PointLight.png](медиа/PointLight.png)

Once selected, the point light gizmo displays the sphere in which it projects light:
После выбора точечный световой гизмо отображает сферу, в которой он проецирует свет:

![media/PointLightSelected.png](media/PointLightSelected.png)
![media/PointLightSelected.png](media/PointLightSelected.png)

## Properties
## Характеристики

![media/PointLightProperties.png](media/PointLightProperties.png) 
![media/PointLightProperties.png](media/PointLightProperties.png)

| Property            | Description                                                        
|  Недвижимость |  Описание
| ------------------- | ------------------ 
|  ------------------- |  ------------------
| Color               | The color of the light (RGB)
|  Цвет |  Цвет света (RGB)
| Radius              | The sphere influence radius in [world units](../../game-studio/world-units.md). Beyond this range, the light doesn't affect models
|  Радиус |  Радиус влияния сферы в [мировых единицах](../../game-studio/world-units.md).  За пределами этого диапазона свет не влияет на модели.
| Shadow             | <p><br>If shadows are enabled, the light casts shadows.</p></br><p><br> **Filter:** Produces soft shadows instead of hard shadows via PCF (Percentage Closer Filtering) </p></br> <p><br>**Size:** The size of texture to use for shadowing mapping. Larger textures produce better shadows edges, but are much more costly. For more information, see [Shadows](shadows.md)</p></br>
|  Тень |  <p><br>Если тени включены, свет отбрасывает тени.</p></br><p><br> **Фильтр:** Создает мягкие тени вместо жестких с помощью PCF (процентная фильтрация)  </p></br> <p><br>**Размер:** размер текстуры, используемой для отображения теней.  Большие текстуры дают лучшие края теней, но стоят намного дороже.  Для получения дополнительной информации см. [Тени](shadows.md)</p></br>
| Bias Parameters     | <p><br>These parameters are used to avoid some artifacts of the shadow map technique.</p></br> <p><br>**Depth Bias:** The amount of depth to add to the sampling depth to avoid shadow acne</p></br> <p><br>**Normal Offset Scale**: A factor multiplied by the depth bias toward the normal </p></br>
|  Параметры смещения |  <p><br>Эти параметры используются, чтобы избежать некоторых артефактов метода карты теней.</p></br> <p><br>**Смещение глубины:** количество глубины, добавляемое к выборке.  глубину, чтобы избежать теневых прыщей</p></br> <p><br>**Нормальная шкала смещения**: коэффициент, умноженный на смещение глубины в сторону нормы </p></br>
| Intensity           | The intensity of the light. The color is multiplied by this value before being sent to the shader. Note: negative values produce darkness and have unpredictable effects
|  Интенсивность |  Интенсивность света.  Цвет умножается на это значение перед отправкой в ​​шейдер.  Примечание: отрицательные значения создают темноту и имеют непредсказуемые эффекты.
| Culling Mask        | Which entity groups are affected by this light. By default, all groups are affected
|  Отбраковочная маска |  Какие группы сущностей затронуты этим светом.  По умолчанию затрагиваются все группы

## See also
## Смотрите также

* [Add a light](add-a-light.md)
* [Добавить свет](add-a-light.md)
* [Point lights](point-lights.md)
* [Точечные огни](point-lights.md)
* [Ambient lights](ambient-lights.md)
* [Рассеивающие огни](ambient-lights.md)
* [Skybox lights](skybox-lights.md)
* [Огни скайбокса](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Прожектор](spot-lights.md)
* [Light shafts](light-shafts.md)
* [Световые валы](light-shafts.md)
* [Light probes](light-probes.md)
* [Световые зонды](light-probes.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
