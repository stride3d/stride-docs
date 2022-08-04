# Misc attributes
# Прочие атрибуты

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

![Misc properties](media/misc-properties.png)
![Разные свойства](media/misc-properties.png)

## Occlusion
## Окклюзия

Under the **Occlusion** properties, you can set an **occlusion map**. This is the default occlusion attribute. The occlusion map use geometry occlusion information baked into a texture to modulate the ambient and direct lighting.
В свойствах **Occlusion** вы можете установить **карту окклюзии**.  Это атрибут окклюзии по умолчанию.  Карта окклюзии использует информацию об окклюзии геометрии, запеченную в текстуре, для модуляции окружающего и прямого освещения.

![media/material-attributes-39.png](media/material-attributes-39.png) 
![media/material-attributes-39.png](media/material-attributes-39.png)

The screenshots below demonstrate the use of occlusion maps and cavity maps:
Скриншоты ниже демонстрируют использование карт окклюзии и карт полостей:

| Occlusion Map  | Cavity Map    | Final Composition    
|  Карта окклюзии |  Карта полости |  Окончательная композиция
| ------- | ------ | ------- 
|  ------- |  ------ |  -------
| ![media/material-attributes-40.png](media/material-attributes-40.png)  | ![media/material-attributes-41.png](media/material-attributes-41.png)  | ![media/material-attributes-42.png](media/material-attributes-42.png)  
|  ![media/material-attributes-40.png](media/material-attributes-40.png) |  ![media/material-attributes-41.png](media/material-attributes-41.png) |  ![media/material-attributes-42.png](media/material-attributes-42.png)
| Coarse occlusion of the ambient light  | Fine-grained occlusion of direct light  | Result                       
|  Грубая окклюзия окружающего света |  Мелкозернистая окклюзия прямого света |  Результат

| Property  | Description 
|  Недвижимость |  Описание
| --------- | ---- 
|  --------- |  ----
| Occlusion Map             | The occlusion map scalar provider that determines how much ambient light is accessible on the material. A value of 1.0 means that the material is fully lit by ambient lighting. A value of 0.0 means that the material is not lighted by the ambient lighting 
|  Карта окклюзии |  Скалярный провайдер карты окклюзии, который определяет, сколько окружающего света доступно на материале.  Значение 1,0 означает, что материал полностью освещен окружающим освещением.  Значение 0.0 означает, что материал не освещается окружающим освещением.
| Direct Lighting Influence | Applies to Occlusion Map and influences direct lighting  |
|  Прямое влияние освещения |  Применяется к карте окклюзии и влияет на прямое освещение |
| Cavity Map                | The cavity map scalar provider is multiplied with direct lighting. It lets you define very fine grained cavity where direct light can't enter. The cavity map is usually defined for thin concave cavity
|  Карта полости |  Скалярный провайдер карты полости умножается на прямое освещение.  Это позволяет определить очень мелкозернистую полость, в которую не может проникнуть прямой свет.  Карта полости обычно определяется для тонкой вогнутой полости.
| Diffuse Cavity            | A factor for diffuse lighting influence of the cavity map. A value of 1.0 means the cavity map fully influences the diffuse lighting 
|  Диффузная полость |  Фактор влияния диффузного освещения на карту полости.  Значение 1.0 означает, что карта полости полностью влияет на рассеянное освещение.
| Specular Cavity           | A factor for specular lighting influence of the cavity map. A value of 1.0 means the cavity map fully influences the specular lighting       
|  Зеркальная полость |  Фактор влияния зеркального освещения на карту полости.  Значение 1.0 означает, что карта полости полностью влияет на зеркальное освещение.

## Transparency
## Прозрачность

Under the **Transparency** properties, you can specify values that change the transparency of the material. You can coose **Blend**, **Additive**, or **Cutoff**.
В свойствах **Прозрачность** вы можете указать значения, которые изменяют прозрачность материала.  Вы можете выбрать **Смешивание**, **Добавка** или **Отсечка**.

### Additive
### Добавка

The additive transparency takes into account the diffuse and diffuse/emissive alpha.
Аддитивная прозрачность учитывает диффузную и диффузную/эмиссионную альфу.

![media/material-attributes-47.png](media/material-attributes-47.png) 
![media/material-attributes-47.png](media/material-attributes-47.png)

- If the **Alpha** property is less than 0.5, only the specular highlights are visible. The material itself is completely invisible.
- Если свойство **Alpha** меньше 0,5, видны только зеркальные блики.  Сам материал совершенно незаметен.
  
  | Alpha = 0.25   | Alpha = 0.5  
|  Альфа = 0,25 |  Альфа = 0,5
  | -------------- | -----------
|  -------------- |  -----------
  | ![media/material-attributes-48.png](media/material-attributes-48.png)  | ![media/material-attributes-49.png](media/material-attributes-49.png)  |      
|  ![media/material-attributes-48.png](media/material-attributes-48.png) |  ![media/material-attributes-49.png](media/material-attributes-49.png) |
  | We only see the specular highlight in additive mode  | Transparency is fully additive. Specular highlights at maximum
|  Мы видим только зеркальный блик в аддитивном режиме |  Прозрачность полностью аддитивна.  Зеркальные блики на максимуме

- If the **Alpha** <= 1.0, the material is semi-opaque with the diffuse/emissive component. If the diffuse component has an alpha, it's transparent.
- Если **Alpha** <= 1.0, материал полупрозрачный с диффузным/эмиссионным компонентом.  Если диффузный компонент имеет альфа-канал, он прозрачен.
  
  | Alpha = 0.75 | Alpha = 1.0 
|  Альфа = 0,75 |  Альфа = 1,0
  | -------------- | ---------------------- |
|  -------------- |  ---------------------- |
  | ![media/material-attributes-50.png](media/material-attributes-50.png)  | ![media/material-attributes-51.png](media/material-attributes-51.png)          
|  ![media/material-attributes-50.png](media/material-attributes-50.png) |  ![media/material-attributes-51.png](media/material-attributes-51.png)
  | Specular highlights, diffuse with alpha and semi-opaque diffuse          | Specular highlights, diffuse with alpha and opaque diffuse  
|  Зеркальные блики, диффузные с альфа-каналом и полупрозрачные диффузные |  Зеркальные блики, диффузный с альфа-каналом и непрозрачный диффузный

| Property | Description 
|  Недвижимость |  Описание
| -------- | -----------
|  -------- |  -----------
| Alpha    | The alpha value is interpreted like this:<p><br> Alpha <= 0.5, the material is rendered in additive mode without the diffuse component (only specular highlights)</p></br> <p><br>Alpha <= 1.0, the material is rendered in semi-opaque mode with the diffuse/emissive component. If the diffuse component has an alpha, it's displayed as transparent</p></br>|
|  Альфа |  Альфа-значение интерпретируется следующим образом:<p><br> Альфа <= 0,5, материал рендерится в аддитивном режиме без диффузного компонента (только зеркальные блики)</p></br> <p><br>Альфа  <= 1.0 материал рендерится в полупрозрачном режиме с диффузным/эмиссионным компонентом.  Если диффузный компонент имеет альфа-канал, он отображается как прозрачный</p></br>|
| Tint     | Apply a color tint to the transparency layer
|  оттенок |  Примените цветовой оттенок к слою с прозрачностью

### Cuttoff
### Отрезана

Renders a material when the current alpha color is above the threshold you specify with the **Alpha** slider.
Визуализирует материал, когда текущий цвет альфа-канала превышает пороговое значение, указанное с помощью ползунка **Альфа**.

![media/material-attributes-43.png](media/material-attributes-43.png) 
![media/material-attributes-43.png](media/material-attributes-43.png)

The following screenshots show the influence of the cutoff Alpha value.
На следующих снимках экрана показано влияние значения альфа-канала отсечки.

| Alpha = 0.01 | Alpha = 0.5     | Alpha = 1.0    
|  Альфа = 0,01 |  Альфа = 0,5 |  Альфа = 1,0
| -------------| --------------- | ------------ 
|  -------------|  --------------- |  ------------
| ![media/material-attributes-44.png](media/material-attributes-44.png)  | ![media/material-attributes-45.png](media/material-attributes-45.png)  | ![media/material-attributes-46.png](media/material-attributes-46.png)
|  ![media/material-attributes-44.png](media/material-attributes-44.png) |  ![media/material-attributes-45.png](media/material-attributes-45.png) |  ![media/material-attributes-46.png](media/material-attributes-46.png)

### Clear coat
### Чистое пальто

**Clear-coat shading** uses physically-based rendering to simulate vehicle paint.
**Затенение прозрачным покрытием** использует физический рендеринг для имитации окраски автомобиля.

![Clear coat](media/clear-coat-2.jpg)
![Прозрачный слой](media/clear-coat-2.jpg)

For details, see [clear-coat shading](clear-coat-shading.md).
Для получения дополнительной информации см. [затенение прозрачного покрытия](clear-coat-shading.md).

## See also
## Смотрите также

* [Geometry attributes](geometry-attributes.md)
* [Атрибуты геометрии](geometry-attributes.md)
* [Shading attributes](shading-attributes.md)
* [Атрибуты затенения](shading-attributes.md)
* [Clear-coat shading](clear-coat-shading.md)
* [Прозрачное затенение](clear-coat-shading.md)
* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material layers](material-layers.md)
* [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
* [Пользовательские шейдеры](../effects-and-shaders/custom-shaders.md)
