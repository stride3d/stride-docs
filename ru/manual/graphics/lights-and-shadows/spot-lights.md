# Spot lights
# Точечные светильники

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Spot lights** produce a cone of light in a specific direction. They're useful for simulating light from objects such as lampposts and flashlights. They cast shadows. You can control them with scripts or animation to create dramatic lighting effects.
**Прожектор** создает конус света в определенном направлении.  Они полезны для имитации света от таких объектов, как фонарные столбы и фонарики.  Они отбрасывают тени.  Вы можете управлять ими с помощью сценариев или анимации для создания драматических световых эффектов.

![media/SpotLightOverview.png](media/SpotLightOverview.png) 
![media/SpotLightOverview.png](media/SpotLightOverview.png)

The Scene Editor shows the position of the spot light with the following icon:
Редактор сцен показывает положение прожектора следующим значком:

![media/SpotLight.png](media/SpotLight.png) 
![медиа/SpotLight.png](медиа/SpotLight.png)

Once selected, the gizmo of the spot light displays its main direction, range and the outer cone:
После выбора гизмо прожектора отображает его основное направление, диапазон и внешний конус:

![media/SpotLightSelected.png](media/SpotLightSelected.png) 
![media/SpotLightSelected.png](media/SpotLightSelected.png)

## Properties
## Характеристики

![media/SpotLightProperties.png](media/SpotLightProperties.png)
![media/SpotLightProperties.png](media/SpotLightProperties.png)

| Property            | Description
|  Недвижимость |  Описание
| ------------------- | -----------
|  ------------------- |  -----------
| Color               | The color of the light (RGB)  
|  Цвет |  Цвет света (RGB)
| Range               | The range in [world units](../../game-studio/world-units.md). Beyond the this range, the light doesn't affect models.
|  Диапазон |  Диапазон в [мировых единицах](../../game-studio/world-units.md).  За пределами этого диапазона свет не влияет на модели.
| Angle Inner         | The inner angle of the spot cone where the light intensity influence is at one
|  Угол внутренний |  Внутренний угол конуса пятна, при котором влияние силы света равно единице
| Angle Outer         | The outer angle of the spot cone where the light intensity influence is zero
|  Угол Внешний |  Внешний угол конуса пятна, при котором влияние интенсивности света равно нулю
| Shadows             | <p><br> Cast shadows</p></br><p><br>**Filter**: Produces soft shadows instead of hard shadows via PCF (Percentage Closer Filtering) </p></br> <p><br>**Size**: The size of texture to use for shadowing mapping. Larger textures produce better shadows edges, but are much more costly. For more information, see [Shadows](shadows.md)</p></br> <p><br>For spot lights, the default value is **medium**, as a spot light has usually a medium visual impact</p></br>  
|  Тени |  <p><br> Отбрасывание теней</p></br><p><br>**Фильтр**: Создает мягкие тени вместо жестких с помощью PCF (процентно-близкая фильтрация) </p></br>  <p><br>**Размер**: размер текстуры, используемой для отображения теней.  Большие текстуры дают лучшие края теней, но стоят намного дороже.  Дополнительную информацию см. в разделе [Тени](shadows.md)</p></br> <p><br>Для точечных источников света значение по умолчанию — **средний**, так как точечные источники обычно имеют средний визуальный эффект.  влияние</p></br>
| Bias Parameters     | <p><br>These parameters are used to avoid some artifacts of the shadow map technique.</p></br> <p><br>**Depth Bias:** The amount of depth to add to the sampling depth to avoid shadow acne </p></br> <p><br>**Normal Offset Scale**: A factor multiplied by the depth bias toward the normal</p></br> 
|  Параметры смещения |  <p><br>Эти параметры используются, чтобы избежать некоторых артефактов метода карты теней.</p></br> <p><br>**Смещение глубины:** количество глубины, добавляемое к выборке.  глубины, чтобы избежать теневых прыщей </p></br> <p><br>**Нормальная шкала смещения**: коэффициент, умноженный на смещение глубины в сторону нормы</p></br>
| Intensity           | The intensity of the light. The color is multiplied by this value before being sent to the shader. Note: negative values produce darkness and have unpredictable effects
|  Интенсивность |  Интенсивность света.  Цвет умножается на это значение перед отправкой в ​​шейдер.  Примечание: отрицательные значения создают темноту и имеют непредсказуемые эффекты.
Culling Mask          | Defines which entity groups are affected by this light. By default, all groups are affected
Отбраковочная маска |  Определяет, на какие группы объектов воздействует этот свет.  По умолчанию затрагиваются все группы

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
* [Light shafts](light-shafts.md)
* [Световые валы](light-shafts.md)
* [Skybox lights](skybox-lights.md)
* [Огни скайбокса](skybox-lights.md)
* [Light probes](light-probes.md)
* [Световые зонды](light-probes.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
