# Skybox lights
# Огни скайбокса

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

A **skybox light** is an [ambient light](ambient-lights.md) emitted by a [skybox](../textures/skyboxes-and-backgrounds.md). Stride analyzes the skybox texture and generates lighting using [image-based lighting (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting).
**Скайбокс-свет** — это [окружающий свет](ambient-lights.md), излучаемый [скайбоксом](../textures/skyboxes-and-backgrounds.md).  Stride анализирует текстуру скайбокса и генерирует освещение, используя [освещение на основе изображения (Википедия)](https://en.wikipedia.org/wiki/Image-based_lighting).

![media/SkyboxLightOverview.png](media/SkyboxLightOverview.png)
![media/SkyboxLightOverview.png](media/SkyboxLightOverview.png)

Skybox lights are good for exterior scenes, where the skybox is visible. They're less useful for interior scenes, such as in rooms where the skybox is only visible through windows; as the skybox light nonetheless lights the entire room, this creates an unnatural effect.
Освещение скайбокса хорошо подходит для наружных сцен, где виден скайбокс.  Они менее полезны для внутренних сцен, например, в комнатах, где скайбокс виден только через окна;  поскольку свет скайбокса, тем не менее, освещает всю комнату, это создает неестественный эффект.

## How skyboxes light the scene
## Как скайбоксы освещают сцену

These images show the difference between ambient and skybox lighting on two pure diffuse [materials](../materials/index.md):
Эти изображения показывают разницу между окружающим освещением и освещением скайбокса на двух чистых диффузных [материалах] (../materials/index.md):

| Ambient lighting  | Skybox lighting     
|  Окружающее освещение |  Освещение скайбокса
| ----------------- | ----
|  ----------------- |  ----
| ![Ambient lighting](media/AmbientLight.png)  | ![Skybox lighting.png](media/SkyboxLight-MaterialPureDiffuse.png) 
|  ![Рассеивающее освещение](media/AmbientLight.png) |  ![Skybox lighting.png](media/SkyboxLight-MaterialPureDiffuse.png)
                    
These images show the effect of skybox lighting on a material with different metal and gloss properties:
На этих изображениях показано влияние освещения скайбокса на материал с различными свойствами металла и блеска:

| Material Plastic    | Metal 100% Gloss 50%     | Metal 100% Gloss 100% 
|  Материал Пластик |  Металл 100% Глянец 50% |  Металл 100% Глянец 100%
--------- | -------- | --- | -------- |
--------- |  -------- |  --- |  -------- |
 ![Material plastic](media/SkyboxLight-MaterialPlastic.png)  | ![Material 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss50.png)  | ![Metal 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss100.png)  
![Материал пластик](media/SkyboxLight-MaterialPlastic.png) |  ![Материал 100% Глянец 100%](media/SkyboxLight-MaterialMetal100Gloss50.png) |  ![Металл 100% Глянец 100%](media/SkyboxLight-MaterialMetal100Gloss100.png)

Notice how the skybox texture colors are reflected.
Обратите внимание, как отражаются цвета текстуры скайбокса.

## Set up a skybox light
## Настроить свет скайбокса

To use a skybox as a light, you need to add a skybox asset, then select it in a [Light component](xref:Stride.Engine.LightComponent).
Чтобы использовать скайбокс в качестве источника света, вам нужно добавить актив скайбокса, а затем выбрать его в [Компоненте света] (xref:Stride.Engine.LightComponent).

1. In the **Asset View**, click ![Add asset](media/engine-skybox-add-new-asset-button.png)
1. В **Просмотре ресурсов** нажмите ![Добавить ресурс](media/engine-skybox-add-new-asset-button.png)

2. Select **Miscellaneous** > **Skybox**.
2. Выберите **Разное** > **Skybox**.

    ![Choose asset type](media/engine-skybox-choose-asset-type.png)
![Выберите тип ресурса](media/engine-skybox-choose-asset-type.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

3. Choose a skybox texture from the project assets and click **OK**.
3. Выберите текстуру скайбокса из ресурсов проекта и нажмите **ОК**.
    
    ![Choose texture](media/engine-skybox-select-skybox-texture.png)
![Выберите текстуру](media/engine-skybox-select-skybox-texture.png)

	Game Studio adds the skybox asset with the texture you specified.
Game Studio добавляет ассет скайбокса с указанной вами текстурой.

4. Select the entity you want to be the skybox light.
4. Выберите объект, который вы хотите использовать в качестве источника света скайбокса.

5. In the **Property Grid** (on the right by default), click **Add component** and select [Light](xref:Stride.Engine.LightComponent).
5. В **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите [Свет](xref:Stride.Engine.LightComponent).

    ![Background component properties](media/skybox-add-light-component.png)
![Свойства фонового компонента](media/skybox-add-light-component.png)

6. In the **Light** component properties, under **Light**, select **Skybox**.
6. В свойствах компонента **Свет** в разделе **Свет** выберите **Skybox**.

    ![Light component property](media/light-component-property.png)
![Свойство светового компонента](media/light-component-property.png)

7. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):
7. Нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**):

	![No skybox asset selected](media/no-skybox-asset-selected.png)
![Не выбран ресурс скайбокса](media/no-skybox-asset-selected.png)

8. Select the skybox asset you want to use as a light source and click **OK**.
8. Выберите ассет скайбокса, который хотите использовать в качестве источника света, и нажмите **ОК**.

	![Select an asset](media/select-skybox-asset.png)
![Выберите ресурс](media/select-skybox-asset.png)

The [Light component](xref:Stride.Engine.LightComponent) uses the skybox asset to light the scene.
[Компонент света](xref:Stride.Engine.LightComponent) использует актив скайбокса для освещения сцены.

## Skybox asset properties
## Свойства объекта Skybox

When you use a skybox as a light, Stride uses it both in compressed form ([spherical harmonics (Wikipedia)](https://en.wikipedia.org/wiki/Spherical_harmonics)) and as a texture to light different kinds of material. You can control the detail of both in the skybox asset properties.
Когда вы используете скайбокс в качестве источника света, Stride использует его как в сжатой форме ([сферические гармоники (Википедия)](https://en.wikipedia.org/wiki/Spherical_harmonics)) так и в качестве текстуры для освещения различных материалов.  .  Вы можете управлять деталями обоих в свойствах актива скайбокса.

![Skybox lighting properties](media/skybox-asset-properties.png)
![Свойства освещения Skybox](media/skybox-asset-properties.png)

| Property     | Description                  
|  Недвижимость |  Описание
| ------------ | ---------- 
|  ------------ |  ----------
| Texture |  The texture to use as skybox (eg a cubemap or panoramic texture)
|  Текстура |  Текстура для использования в качестве скайбокса (например, кубическая карта или панорамная текстура)
| Specular Only      |  Use the skybox only for specular lighting
|  Только отражение |  Используйте скайбокс только для зеркального освещения
| Diffuse SH order  | The level of detail of the compressed skybox, used for diffuse lighting (dull materials). `Order5` is more detailed than `Order3`.
|  Диффузный заказ ВГ |  Уровень детализации сжатого скайбокса, используемого для рассеянного освещения (тусклые материалы).  Order5 более подробен, чем Order3.
| Specular Cubemap Size | The texture size used for specular lighting. Larger textures have more detail.
|  Зеркальный размер кубической карты |  Размер текстуры, используемый для зеркального освещения.  Большие текстуры имеют больше деталей.

## Skybox light properties
## Свойства освещения скайбокса

![media/SkyboxLightProperties.png](media/SkyboxLightProperties.png) 
![media/SkyboxLightProperties.png](media/SkyboxLightProperties.png)

| Property     | Description   
|  Недвижимость |  Описание
| ------------ | ----------
|  ------------ |  ----------
| Intensity    | The light intensity 
|  Интенсивность |  Интенсивность света
| Culling Mask | Which entity groups are affected by the light. By default, all groups are affected
|  Отбраковочная маска |  На какие группы сущностей воздействует свет.  По умолчанию затрагиваются все группы

## Example code
## Пример кода

The following code changes the skybox light and its intensity:
Следующий код изменяет свет скайбокса и его интенсивность:

```cs
```CS
public Skybox skybox;
общедоступный скайбокс Skybox;
public void ChangeSkyboxParameters()
public void ChangeSkyboxParameters()
{
{
    // Get the light component from an entity
// Получить компонент света от объекта
	var light = Entity.Get<LightComponent>();
var light = Entity.Get<LightComponent>();

	// Get the Skybox Light settings from the light component
// Получаем настройки Skybox Light из светового компонента
	var skyboxLight = light.Type as LightSkybox;
var skyboxLight = light.Type as LightSkybox;

	// Replace the existing skybox
// Заменяем существующий скайбокс
	skyboxLight.Skybox = skybox;
SkyboxLight.Skybox = скайбокс;

	// Change the skybox light intensity
// Изменяем интенсивность освещения скайбокса
	light.Intensity = 1.5f;
свет.Интенсивность = 1,5f;
}
}
```
```

## See also
## Смотрите также

* [Skyboxes and backgrounds](../textures/skyboxes-and-backgrounds.md)
* [Скайбоксы и фоны](../textures/skyboxes-and-backgrounds.md)
