# Shading attributes
# Атрибуты затенения

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The material **shading attributes** define the color characteristics of the material and how it reacts to light.
**Атрибуты затенения** материала определяют цветовые характеристики материала и то, как он реагирует на свет.

![Shading attributes](media/shading-properties.png)
![Атрибуты затенения](media/shading-properties.png)

> [!Note]
> [!Примечание]
>To display a material, you need to select at least one shading model (diffuse, specular or emissive model) in the model attributes.
>Для отображения материала необходимо выбрать хотя бы одну модель затенения (диффузную, зеркальную или эмиссионную модель) в атрибутах модели.

## Diffuse
## Диффузный

The **diffuse** is the basic color of the material. A pure diffuse material is completely non-reflective and "flat" in appearance.
**диффузный** — это основной цвет материала.  Чистый диффузный материал совершенно не отражающий и выглядит «плоским».

![media/material-attributes-25.png](media/material-attributes-25.png) 
![media/material-attributes-25.png](media/material-attributes-25.png)

The final diffuse contribution is calculated like this:
Окончательный диффузный вклад рассчитывается следующим образом:

- the **diffuse** defines the color used by the diffuse model
- **diffuse** определяет цвет, используемый диффузной моделью

- the **diffuse model** defines which shading model is used for rendering the diffuse component (see below)
- **диффузная модель** определяет, какая модель затенения используется для рендеринга диффузного компонента (см. ниже)

Currently, the diffuse attribute supports only a **diffuse map**.
В настоящее время диффузный атрибут поддерживает только **диффузную карту**.

![media/material-attributes-23.png](media/material-attributes-23.png)
![media/material-attributes-23.png](media/material-attributes-23.png)

### Diffuse model
### Диффузная модель

The **diffuse model** determines how the diffuse material reacts to light. You can use the **Lambert** or **cel-shading**.
Модель **diffuse** определяет, как диффузный материал реагирует на свет.  Вы можете использовать **Lambert** или **cel-shading**.

#### Lambert model
#### Модель Ламберта

Under the Lambert model, light is reflected equally in all directions with an intensity following a cosine angular distribution (angle between the normal and the light):
В соответствии с моделью Ламберта свет отражается одинаково во всех направлениях с интенсивностью, следующей косинусному угловому распределению (угол между нормалью и источником света):

![media/material-attributes-24.png](media/material-attributes-24.png)
![media/material-attributes-24.png](media/material-attributes-24.png)

> [!Note]
> [!Примечание]
> A pure Lambertian material doesn't exist in reality. A material always has a little specular reflection. This effect is more visible at grazing angles (a mostly diffuse surface becomes shiny at grazing angle).
> Чистого ламбертовского материала в реальности не существует.  Материал всегда имеет небольшое зеркальное отражение.  Этот эффект более заметен при скользящих углах (в основном диффузная поверхность становится блестящей при скользящих углах).

| Property      | Description  
|  Недвижимость |  Описание
| ------------- | ----------- 
|  ------------- |  -----------
| Diffuse map   | The diffuse map color provider                                          
|  Диффузная карта |  Поставщик цвета диффузной карты
| Diffuse model | The shading model for diffuse lighting
|  Диффузная модель |  Модель затенения для рассеянного освещения

## Specular
## Зеркальный

A **specular** is a point of light reflected in a material.
**Зеркало** — это точка света, отраженная в материале.

![Specular highlight](media/specular-highlight.png)
![Зеркальный блик](media/specular-highlight.png)

The specular color can be defined using a metalness map (which uses the diffuse color as a base color), or a specular map (the specular color is defined separately from the diffuse color).
Цвет отражения можно определить с помощью карты металличности (которая использует диффузный цвет в качестве основного цвета) или карты отражения (цвет отражения определяется отдельно от диффузного цвета).

### Metalness map
### Карта металличности

The **metalness map** simplifies parametrization between the diffuse and specular color.
**Карта металличности** упрощает параметризацию между диффузным и зеркальным цветом.

By taking into into account the fact that almost all materials always have some "metalness"/reflectance in them, using the metalness map provides realistic materials with minimal parametrization.
Принимая во внимание тот факт, что почти все материалы всегда имеют некоторую «металличность»/отражательную способность, использование карты металличности обеспечивает реалистичные материалы с минимальной параметризацией.

The final specular color is calculated by mixing a fixed low-reflection color and the diffuse color.
Окончательный зеркальный цвет рассчитывается путем смешивания фиксированного цвета с низким коэффициентом отражения и диффузного цвета.

- With the metalness color at `0.0`, the effective specular color is equal to `0.02`, while the diffuse color is unchanged. The material is not metal but exhibits some reflectance and is sensitive to the Fresnel effect.
- При цвете металличности «0,0» эффективный зеркальный цвет равен «0,02», в то время как диффузный цвет не меняется.  Материал не является металлом, но обладает некоторой отражательной способностью и чувствителен к эффекту Френеля.

- With the metalness color at `1.0`, the effective specular color is equal to the diffuse color, and the diffuse color is set to `0`. The material is considered a pure metal.
- При цвете металличности «1.0» эффективный зеркальный цвет равен диффузному цвету, а диффузный цвет установлен на «0».  Материал считается чистым металлом.

    ![media/material-attributes-26.png](media/material-attributes-26.png) 
![media/material-attributes-26.png](media/material-attributes-26.png)

 The screenshots below show the result of the metalness factor on a material with the following attributes:
На приведенных ниже снимках экрана показан результат применения коэффициента металличности к материалу со следующими атрибутами:

- Gloss = `0.8`
- Глянец = `0,8`
- Diffuse = `#848484`, Lambert
- Diffuse = `# 848484`, Ламберт
- Specular GGX
- Зеркальный GGX

| Pure diffuse (no metalness)  | Metalness = `0.0`    | Metalness = `1.0` 
|  Чистый диффузный (без металличности) |  Металличность = `0.0` |  Металличность = `1.0`
| ---------------------------- | ------------------ | ---------------
|  ---------------------------- |  ------------------ |  ---------------
|  ![media/material-attributes-27.png](media/material-attributes-27.png)  | ![media/material-attributes-28.png](media/material-attributes-28.png)  | ![media/material-attributes-29.png](media/material-attributes-29.png)  |
|  ![media/material-attributes-27.png](media/material-attributes-27.png) |  ![media/material-attributes-28.png](media/material-attributes-28.png) |  ![media/material-attributes-29.png](media/material-attributes-29.png) |
| - The diffuse color is dominant | - The diffuse color is dominant   | - The diffuse color isn't visible
|  - Доминирует диффузный цвет |  - Доминирует диффузный цвет |  - Диффузный цвет не виден
| - The specular color isn't visible   | - The specular color is visible (`0.02`) | - The specular color is visible 
|  - Зеркальный цвет не виден |  - Виден зеркальный цвет (`0,02`) |  - Виден зеркальный цвет

### Specular map
### Зеркальная карта

The specular map provides more control over the actual specular color, but requires you to modify the diffuse color accordingly.
Карта бликов обеспечивает больший контроль над фактическим цветом бликов, но требует от вас соответствующего изменения диффузного цвета.

Unlike the metalness workflow, this lets you have a different specular color from the diffuse color even in low-reflection scenarios, allowing for materials with special behavior.
В отличие от рабочего процесса металличности, это позволяет вам иметь зеркальный цвет, отличный от диффузного цвета, даже в сценариях с низким коэффициентом отражения, что позволяет использовать материалы с особым поведением.

> [!Note]
> [!Примечание]
> You can combine metalness and specular workflows in the same material by adding separate [layers](material-layers.md).
> Вы можете комбинировать процессы металличности и отражения в одном материале, добавляя отдельные [слои] (material-layers.md).

## Specular model
## Зеркальная модель

A pure specular surface produces a highlight of a light in a mirror direction. In practice, a broad range of specular materials, not entirely smooth, can reflect light in multiple directions. Stride simulates this using the **microfacet** model, also known as [Cook-Torrance (academic paper)](http://www.cs.columbia.edu/~belhumeur/courses/appearance/cook-torrance.pdf).
Чистая зеркальная поверхность создает блик света в зеркальном направлении.  На практике широкий спектр зеркальных материалов, не совсем гладких, может отражать свет в нескольких направлениях.  Stride имитирует это с помощью модели **microfacet**, также известной как [Cook-Torrance (академическая статья)] (http://www.cs.columbia.edu/~belhumeur/courses/appearance/cook-torrance.pdf).  .

![media/material-attributes-33.png](media/material-attributes-33.png) 
![media/material-attributes-33.png](media/material-attributes-33.png)

The microfacet is defined by the following formula, where Rs is the resulting specular reflectance:
Микрогрань определяется по следующей формуле, где Rs — результирующий коэффициент зеркального отражения:

![media/material-attributes-34.png](media/material-attributes-34.png) 
![media/material-attributes-34.png](media/material-attributes-34.png)

| Property            | Description                                                    
|  Недвижимость |  Описание
| ------------------- | ------- 
|  ------------------- |  -------
| Fresnel             | Defines the amount of light that is reflected and transmitted. The models supported are: <br><p>**Schlick**: An approximation of the Fresnel effect (default)</br> <br><p>**Thin glass**: A simulation of light passing through glass</br>  <br><p>**None**: The material as-is with no Fresnel effect</br> 
|  Френель |  Определяет количество света, которое отражается и передается.  Поддерживаются следующие модели: <br><p>**Шлик**: аппроксимация эффекта Френеля (по умолчанию)</br> <br><p>**Тонкое стекло**: имитация прохождения света через стекло.  </br> <br><p>**Нет**: материал как есть, без эффекта Френеля</br>
| Visibility          | Defines the visibility between of the microfacets between (0, 1). Also known as the geometry attenuation - Shadowing and Masking - in the original Cook-Torrance. Stride simplifies the formula to use the visibility term instead: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br>      <br><p>and <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br>        <br><p>**Schlick GGX** (default)</br> <br><p> **Implicit**: The microsurface is always visible and generates no shadowing or masking</br> <br><p>**Cook-Torrance**</br>  <br><p>**Kelemen**</br> <br><p>**Neumann**</br> <br><p>**Smith-Beckmann**</br> <br><p>**Smith-GGX correlated**</br>  <br><p>**Schlick-Beckmann**</br> 
|  Видимость |  Определяет видимость между микрофасетами между (0, 1).  Также известный как затухание геометрии — Shadowing and Masking — в оригинальном Cook-Torrance.  Stride упрощает формулу, используя вместо этого термин видимости: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br> <br><p>  и <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br> <br><p>**Schlick GGX** (по умолчанию)<  /br> <br><p> **Неявно**: микроповерхность всегда видна и не создает тени или маскирования</br> <br><p>**Кук-Торранс**</br> <br>  <p>**Келемен**</br> <br><p>**Нейманн**</br> <br><p>**Смит-Бекманн**</br> <br><p>  **Корреляция Smith-GGX**</br> <br><p>**Schlick-Beckmann**</br>
| Normal Distribution | <br><p>Defines how the normal is distributed. The gloss attribute is used by this part of the function to modify the distribution of the normal.</br> <br><p>**GGX** (default) </br> <br><p>**Beckmann**</br>  <br><p>**Blinn-Phong**</br> 
|  Нормальное распределение |  <br><p>Определяет, как распределяется нормаль.  Атрибут gloss используется этой частью функции для изменения распределения нормалей.</br> <br><p>**GGX** (по умолчанию) </br> <br><p>**Beckmann  **</br> <br><p>**Блинн-Фонг**</br>
| Fresnel             | Defines the amount of light that is reflected and transmitted. The models supported are: <br><p>**Schlick**: An approximation of the Fresnel effect (default)</br> <br><p>**Thin glass**: A simulation of light passing through glass</br>  <br><p>**None**: The material as-is with no Fresnel effect</br> 
|  Френель |  Определяет количество света, которое отражается и передается.  Поддерживаются следующие модели: <br><p>**Шлик**: аппроксимация эффекта Френеля (по умолчанию)</br> <br><p>**Тонкое стекло**: имитация прохождения света через стекло.  </br> <br><p>**Нет**: материал как есть, без эффекта Френеля</br>
| Visibility          | Defines the visibility between of the microfacets between (0, 1). Also known as the geometry attenuation - Shadowing and Masking - in the original Cook-Torrance. Stride simplifies the formula to use the visibility term instead: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br>      <br><p>and <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br>        <br><p>**Schlick GGX** (default)</br> <br><p> **Implicit**: The microsurface is always visible and generates no shadowing or masking</br> <br><p>**Cook-Torrance**</br>  <br><p>**Kelemen**</br> <br><p>**Neumann**</br> <br><p>**Smith-Beckmann**</br> <br><p>**Smith-GGX correlated**</br>  <br><p>**Schlick-Beckmann**</br> 
|  Видимость |  Определяет видимость между микрофасетами между (0, 1).  Также известный как затухание геометрии — Shadowing and Masking — в оригинальном Cook-Torrance.  Stride упрощает формулу, используя вместо этого термин видимости: <br><p>![media/material-attributes-35.png](media/material-attributes-35.png)</br> <br><p>  и <br><p>![media/material-attributes-36.png](media/material-attributes-36.png)</br> <br><p>**Schlick GGX** (по умолчанию)<  /br> <br><p> **Неявно**: микроповерхность всегда видна и не создает тени или маскирования</br> <br><p>**Кук-Торранс**</br> <br>  <p>**Келемен**</br> <br><p>**Нейманн**</br> <br><p>**Смит-Бекманн**</br> <br><p>  **Корреляция Smith-GGX**</br> <br><p>**Schlick-Beckmann**</br>
| Normal Distribution | <br><p>Defines how the normal is distributed. The gloss attribute is used by this part of the function to modify the distribution of the normal.</br> <br><p>**GGX** (default) </br> <br><p>**Beckmann**</br>  <br><p>**Blinn-Phong**</br> 
|  Нормальное распределение |  <br><p>Определяет, как распределяется нормаль.  Атрибут gloss используется этой частью функции для изменения распределения нормалей.</br> <br><p>**GGX** (по умолчанию) </br> <br><p>**Beckmann  **</br> <br><p>**Блинн-Фонг**</br>
| Fresnel             | Defines the amount of light that is reflected and transmitted. The models supported are: <p><br>**Schlick**: An approximation of the Fresnel effect (default)</p></br> <p><br>**Thin glass**: A simulation of light passing through glass</p></br>  <p><br>**None**: The material as-is with no Fresnel effect</p></br> 
|  Френель |  Определяет количество света, которое отражается и передается.  Поддерживаются следующие модели: <p><br>**Шлик**: аппроксимация эффекта Френеля (по умолчанию)</p></br> <p><br>**Тонкое стекло**: имитация  свет, проходящий через стекло</p></br> <p><br>**Нет**: материал как есть без эффекта Френеля</p></br>
| Visibility          | Defines the visibility between of the microfacets between (0, 1). Also known as the geometry attenuation - Shadowing and Masking - in the original Cook-Torrance. Stride simplifies the formula to use the visibility term instead: <p><br>![media/material-attributes-35.png](media/material-attributes-35.png)</p></br>      <p><br>and <p><br>![media/material-attributes-36.png](media/material-attributes-36.png)</p></br>        <p><br>**Schlick GGX** (default)</p></br> <p><br> **Implicit**: The microsurface is always visible and generates no shadowing or masking</p></br> <p><br>**Cook-Torrance**</p></br>  <p><br>**Kelemen**</p></br> <p><br>**Neumann**</p></br> <p><br>**Smith-Beckmann**</p></br> <p><br>**Smith-GGX correlated**</p></br>  <p><br>**Schlick-Beckmann**</p></br> 
|  Видимость |  Определяет видимость между микрофасетами между (0, 1).  Также известный как затухание геометрии — Shadowing and Masking — в оригинальном Cook-Torrance.  Stride упрощает формулу, используя вместо этого термин видимости: <p><br>![media/material-attributes-35.png](media/material-attributes-35.png)</p></br> <p  <br>и <p><br>![media/material-attributes-36.png](media/material-attributes-36.png)</p></br> <p><br>**  Schlick GGX** (по умолчанию)</p></br> <p><br> **Неявный**: микроповерхность всегда видна и не создает затенения или маскирования</p></br> <p><  br>**Кук-Торранс**</p></br> <p><br>**Келемен**</p></br> <p><br>**Нойманн**</p  ></br> <p><br>**Смит-Бекманн**</p></br> <p><br>**Корреляция Смит-GGX**</p></br> <p  <br>**Шлик-Бекманн**</p></br>
| Normal Distribution | <p><br>Defines how the normal is distributed. The gloss attribute is used by this part of the function to modify the distribution of the normal.</p></br> <p><br>**GGX** (default) </p></br> <p><br>**Beckmann**</p></br>  <p><br>**Blinn-Phong**</p></br> 
|  Нормальное распределение |  <p><br>Определяет, как распределяется нормаль.  Атрибут блеска используется этой частью функции для изменения распределения нормали.</p></br> <p><br>**GGX** (по умолчанию) </p></br> <  p><br>**Бекманн**</p></br> <p><br>**Блинн-Фонг**</p></br>

## Emissive
## Эмиссионный

An **emissive** material is a surface that emits light.
**Излучающий** материал — это поверхность, излучающая свет.

![media/material-attributes-37.png](media/material-attributes-37.png) 
![media/material-attributes-37.png](media/material-attributes-37.png)

With HDR, a [Bloom](../post-effects/bloom.md) and a [Bright filter](../post-effects/bright-filter.md) post-processing effects, we can see the influence of an emissive material:
С HDR, эффектами постобработки [Bloom](../post-effects/bloom.md) и [Bright filter](../post-effects/bright-filter.md) мы можем увидеть влияние  эмиссионный материал:

![media/material-attributes-38.png](media/material-attributes-38.png) 
![media/material-attributes-38.png](media/material-attributes-38.png)

| Property     | Description                                                               
|  Недвижимость |  Описание
| ------------ | -------------- 
|  ------------ |  --------------
| Emissive map | The emissive map color provider      
|  Эмиссионная карта |  Поставщик цвета эмиссионной карты
| Intensity    | The factor to multiply by the color of the color provider   
|  Интенсивность |  Коэффициент для умножения на цвет поставщика цвета
| Use alpha    | Use the alpha of the emissive map as the main alpha color of the material (instead of using the alpha of the diffuse map by default)
|  Используйте альфа |  Используйте альфа-канал эмиссионной карты в качестве основного альфа-цвета материала (вместо использования альфа-канала диффузной карты по умолчанию).

## See also
## Смотрите также

* [Geometry attributes](geometry-attributes.md)
* [Атрибуты геометрии](geometry-attributes.md)
* [Misc attributes](misc-attributes.md)
* [Разные атрибуты](misc-attributes.md)
* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material layers](material-layers.md)
* [Слои материала](material-layers.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
* [Пользовательские шейдеры](../effects-and-shaders/custom-shaders.md)
