# Ambient lights
# Окружающие огни

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

**Ambient lights** are uniform lights that illuminate the entire scene. Because they don't come from any specific direction or source, ambient lights illuminate everything equally, even objects in shadow or obscured by other objects. They don't cast shadows. 
**Рассеивающий свет** — это равномерное освещение, освещающее всю сцену.  Поскольку они не исходят из какого-либо определенного направления или источника, окружающий свет одинаково освещает все, даже объекты в тени или затененные другими объектами.  Они не отбрасывают тени.

Ambient lights aren't realistic light sources. Instead, they contribute to the overall brightness and aesthetic of a scene.
Окружающее освещение не является реалистичным источником света.  Вместо этого они вносят свой вклад в общую яркость и эстетику сцены.

![media/AmbientLightOverview.png](media/AmbientLightOverview.png) 
![медиа/AmbientLightOverview.png](медиа/AmbientLightOverview.png)

An example of an object lit uniformly with ambient lighting (with a pure diffuse material):
Пример объекта, равномерно освещенного окружающим освещением (с чистым диффузным материалом):

![media/AmbientLight.png](media/AmbientLight.png)
![медиа/AmbientLight.png](медиа/AmbientLight.png)

## Properties
## Характеристики

![media/AmbientLightProperties.png](media/AmbientLightProperties.png) 
![медиа/AmbientLightProperties.png](медиа/AmbientLightProperties.png)

| Property     | Description                                                               
|  Недвижимость |  Описание
| ------------ | --------------------
|  ------------ |  --------------------
| Color        | The color of the light (RGB)
|  Цвет |  Цвет света (RGB)
| Intensity    | The intensity of the light. The color is multiplied by this value before being sent to the shader. Note: negative values produce darkness and have unpredictable effects
|  Интенсивность |  Интенсивность света.  Цвет умножается на это значение перед отправкой в ​​шейдер.  Примечание: отрицательные значения создают темноту и имеют непредсказуемые эффекты.
| Culling Mask | Which entity groups are affected by the light. By default, all groups are affected
|  Отбраковочная маска |  На какие группы сущностей воздействует свет.  По умолчанию затрагиваются все группы

## See also
## Смотрите также

* [Add a light](add-a-light.md)
* [Добавить свет](add-a-light.md)
* [Point lights](point-lights.md)
* [Точечные огни](point-lights.md)
* [Directional lights](directional-lights.md)
* [Направленные огни](directional-lights.md)
* [Skybox lights](skybox-lights.md)
* [Огни скайбокса](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Прожектор](spot-lights.md)
* [Light probes](light-probes.md)
* [Световые зонды](light-probes.md)
* [Shadows](shadows.md)
* [Тени](shadows.md)
