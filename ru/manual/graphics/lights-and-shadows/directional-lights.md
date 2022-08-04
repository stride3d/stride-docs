# Directional lights
# Направленные огни

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Directional lights** come uniformly from one direction. They're often used for simulating large, distant light sources such as the sun, and cast shadows. By default, new scenes you create in Stride contain a directional light.
**Направленные огни** светятся равномерно с одного направления.  Они часто используются для имитации больших удаленных источников света, таких как солнце, и отбрасываемых теней.  По умолчанию новые сцены, которые вы создаете в Stride, содержат направленный свет.

![media/DirectionalLightOverview.png](media/DirectionalLightOverview.png) 
![media/DirectionalLightOverview.png](media/DirectionalLightOverview.png)

The Scene Editor shows the position of directional lights with the following icon:
Редактор сцен показывает положение направленных источников света с помощью следующего значка:

![media/DirectionalLight.png](media/DirectionalLight.png) 
![media/DirectionalLight.png](media/DirectionalLight.png)

When you select a directional light, the gizmo displays the light's main direction:
Когда вы выбираете направленный свет, гизмо отображает основное направление света:

![media/DirectionalLightSelected.png](media/DirectionalLightSelected.png) 
![media/DirectionalLightSelected.png](media/DirectionalLightSelected.png)

## Properties
## Характеристики

![media/DirectionalLightProperties.png](media/DirectionalLightProperties.png) 
![media/DirectionalLightProperties.png](media/DirectionalLightProperties.png)

| Property     | Description                                                                                    
|  Недвижимость |  Описание
| ------------ | ---------- |
|  ------------ |  ---------- |
| Color        | The color of the light (RGB)
|  Цвет |  Цвет света (RGB)
| Shadow       | See **Shadow properties** below
|  Тень |  См. **Свойства тени** ниже.
| Intensity    | The intensity of the light. The color is multiplied by this value before being sent to the shader. Note: negative values produce darkness and have unpredictable effects
|  Интенсивность |  Интенсивность света.  Цвет умножается на это значение перед отправкой в ​​шейдер.  Примечание: отрицательные значения создают темноту и имеют непредсказуемые эффекты.
| Culling Mask | Defines which entity groups are affected by this light. By default, all groups are affected
|  Отбраковочная маска |  Определяет, на какие группы объектов воздействует этот свет.  По умолчанию затрагиваются все группы

## Shadows cast by directional lights
## Тени, отбрасываемые направленным светом

Like [point lights](point-lights.md) and [spot lights](spot-lights.md), directional lights cast shadows. However, shadows cast by directional lights can spawn across a large view range, so they require special treatment to improve their realism.
Подобно [точечным источникам света](point-lights.md) и [точечным источникам света](spot-lights.md), направленные источники света отбрасывают тени.  Однако тени, отбрасываемые направленными источниками света, могут появляться в большом диапазоне обзора, поэтому для повышения их реалистичности требуется специальная обработка.

Directional lights use an additional technique, **cascaded shadow mapping**. This consists of rendering the depth of occluding objects from the point of view of the light to a texture, then rendering the scene taking the occluder information into account.
В направленном освещении используется дополнительная техника — **каскадное отображение теней**.  Он состоит из рендеринга глубины окклюзионных объектов с точки зрения света в текстуру, а затем рендеринга сцены с учетом информации о окклюдерах.

This method slices the depth range from the camera's point of view into different sections or "cascades" of different resolutions. The nearer each cascade is to the camera, the higher resolution it has, and the higher-resolution its shadows are.
Этот метод разделяет диапазон глубины с точки зрения камеры на разные секции или «каскады» с разным разрешением.  Чем ближе каждый каскад к камере, тем выше его разрешение и тем выше разрешение его теней.

![media/ShadowMappingCascades.png](media/ShadowMappingCascades.png) 
![media/ShadowMappingCascades.png](media/ShadowMappingCascades.png)

Put simply, the closer shadows are to the camera, the better quality they are. This means you can spend more memory on shadows closer to the camera, where you can see them, and less on distant shadows.
Проще говоря, чем ближе тени к камере, тем они качественнее.  Это означает, что вы можете тратить больше памяти на тени ближе к камере, где вы можете их видеть, и меньше на дальние тени.

You can have one, two, or four cascades. The more cascades you use, the more memory you save, but the lower resolution your shadows become over distance.
У вас может быть один, два или четыре каскада.  Чем больше каскадов вы используете, тем больше памяти вы экономите, но тем ниже разрешение ваших теней на расстоянии.

This an example of a shadow map generated from a directional light, using four cascades:
Это пример карты теней, созданной из направленного света с использованием четырех каскадов:

![FPS scene shadow map](media/shadow-atlas-2x.png)
![Карта теней сцены FPS](media/shadow-atlas-2x.png)

### See shadow cascades in the editor
### Посмотреть каскады теней в редакторе

In the **Property Grid**, under the **Shadow** properties, enable the **Debug** option.
В **Сетке свойств** в свойствах **Тень** включите параметр **Отладка**.

| Cascades debug off    | Cascades debug on     
|  Каскадная отладка отключена |  Каскадная отладка включена
| ---------------------- | ----------
|  ---------------------- |  ----------
| ![media/directional-lights-8.png](media/directional-lights-8.png)  | ![media/directional-lights-9.png](media/directional-lights-9.png)
|  ![медиа/направленный свет-8.png](медиа/направленный свет-8.png) |  ![media/directional-lights-9.png](media/directional-lights-9.png)

The different colors indicate the cascade for each distance range (Green: 0, Blue: 1, Purple: 2, Red: 3).
Различные цвета обозначают каскад для каждого диапазона расстояний (зеленый: 0, синий: 1, фиолетовый: 2, красный: 3).

### Directional light shadow properties
### Свойства тени направленного света

| Property            | Description             
|  Недвижимость |  Описание
| ------------------- | ------------
|  ------------------- |  ------------
| Filter              | Filtering produces **soft shadows** instead of **hard shadows**. Currently, the implemented technique is PCF (Percentage Closer Filtering)
|  Фильтр |  Фильтрация создает **мягкие тени** вместо **жестких теней**.  В настоящее время реализована технология PCF (процентная более близкая фильтрация).
| Size                | The size of the shadow map texture. For the directional light, this value is **x1** by default, as a directional light has more visual impact than lights with shorter ranges
|  Размер |  Размер текстуры карты теней.  Для направленного света это значение по умолчанию равно **x1**, так как направленный свет имеет большее визуальное воздействие, чем источники с меньшим радиусом действия.
| Cascade Count       | The number of cascades used for slicing the range of depth covered by the light. Values are 1, 2 or 4 cascades; a typical scene uses 4 cascades
|  Каскадный счет |  Количество каскадов, используемых для нарезки диапазона глубины, охватываемого светом.  Значения: 1, 2 или 4 каскада;  типичная сцена использует 4 каскада
| Stabilization mode  | <p><br>The technique used to reduce shadow map flickering. Flickering is a result of the potential aliasing introduced by the shadow map when a texel from the perspective of the light covers more space than a texel from the camera's perspective.</p></br> <p><br> **Projection snapping** tries to snap the projection matrix of the light to a texel dependent on the resolution of the shadow map texture</p></br> <p><br>**View snapping** tries to snap the target of the view matrix of the light (center of the camera view cascade frustum)</p></br> <p><br>Both projection and view snapping force the shadow matrix to cover a larger region, increasing the aliasing of the shadow map texture. Note that when using depth range camera is set to automatic, the stabilization mode is ignored</p></br>
|  Режим стабилизации |  <p><br>Техника, используемая для уменьшения мерцания карты теней.  Мерцание является результатом потенциального наложения, вызванного картой теней, когда тексель с точки зрения света покрывает больше пространства, чем тексель с точки зрения камеры.</p></br> <p><br> **Проекция  привязка** пытается привязать матрицу проекции света к текселю в зависимости от разрешения текстуры карты теней</p></br> <p><br>**привязка вида** пытается привязать цель  матрица обзора света (центр усеченного каскада обзора камеры)</p></br> <p><br>И проекция, и привязка вида заставляют матрицу тени покрывать большую область, увеличивая наложение тени  текстура карты.  Обратите внимание, что при использовании камеры с диапазоном глубины в автоматическом режиме режим стабилизации игнорируется</p></br>
| Depth Range         | How the visible depth range from the camera's perspective is calculated. This directly affects how near and how far cascades splits occur
|  Диапазон глубины |  Как рассчитывается видимый диапазон глубины с точки зрения камеры.  Это напрямую влияет на то, насколько близко и как далеко происходит расщепление каскадов.
| Blend Cascades      | Smooths the transition between cascades  
|  Смешать каскады |  Сглаживает переход между каскадами
| Partition mode      | <p><br>How the cascade split distance is determined.</p></br> <p><br> **Manual**: the split is defined manually for each cascade, in percentage of the visible depth range. A value of 0.1 for a cascade means that the cascade is rendered on the distance 0.1 * (VisibleDepthMax - VisibleDepthMin)<p><br> <p><br> **Logarithmic**: the split is automatically calculated using a logarithmic scale <p><br> The PSSM factor lets you blend from a pure logarithmic scale (0.0f) to a pure uniform scale (1.0f)<p><br>
|  Режим раздела |  <p><br>Как определяется расстояние разделения каскада.</p></br> <p><br> **Вручную**: разделение определяется вручную для каждого каскада в процентах от видимого диапазона глубины  .  Значение 0,1 для каскада означает, что каскад визуализируется на расстоянии 0,1 * (VisibleDepthMax - VisibleDepthMin)<p><br> <p><br> **Логарифмический**: разделение автоматически рассчитывается с использованием логарифмического масштаба  <p><br> Фактор PSSM позволяет переходить от чистой логарифмической шкалы (0,0f) к чистой однородной шкале (1,0f)<p><br>
| Depth Bias          | The amount of depth to add to the sampling depth to avoid the phenomenon of shadow acne
|  Смещение глубины |  Величина глубины, которую нужно добавить к глубине выборки, чтобы избежать феномена теневого акне.
| Normal Offset Scale | A factor multiplied by the depth bias toward the normal
|  Нормальная шкала смещения |  Коэффициент, умноженный на смещение глубины в сторону нормали.
| Debug               | Displays the shadow map cascades in the Scene Editor
|  Отладка |  Отображает каскады карт теней в редакторе сцен.

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
* [Light probes](light-probes.md)
* [Световые зонды](light-probes.md)
* [Light shafts](light-shafts.md)
* [Световые валы](light-shafts.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
