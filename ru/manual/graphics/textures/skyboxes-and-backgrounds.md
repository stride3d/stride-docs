# Skyboxes and backgrounds
# Скайбоксы и фоны

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Skyboxes** are backgrounds that create the illusion of space and distance. Typical skybox backgrounds include skies, clouds, mountains, and other scenery. As skyboxes are prerendered, they require little GPU and CPU.
**Скайбоксы** — это фоны, создающие иллюзию пространства и расстояния.  Типичные фоны скайбокса включают небо, облака, горы и другие пейзажи.  Поскольку скайбоксы предварительно визуализируются, они требуют немного GPU и CPU.

You can use **cubemaps** or **360° panoramic textures** as skyboxes. You can also [use them to light the scene](../lights-and-shadows/skybox-lights.md).
В качестве скайбоксов можно использовать **кубические карты** или **панорамные текстуры на 360°**.  Вы также можете [использовать их для освещения сцены](../lights-and-shadows/skybox-lights.md).

> [!Note]
> [!Примечание]
> Currently, Stride doesn't support skydomes or local skyboxes.
> В настоящее время Stride не поддерживает скайдомы или локальные скайбоксы.

Alternatively, you can display a **2D background**, which is often useful for 2D games.
Кроме того, вы можете отобразить **2D-фон**, который часто бывает полезен для 2D-игр.

## Cubemaps
## Кубические карты

A **cubemap** is a six-sided texture. When these textures are assembled in a cube around the scene, the cubemap simulates spacious 3D surroundings.
**cubemap** — это шестисторонняя текстура.  Когда эти текстуры собраны в куб вокруг сцены, кубическая карта имитирует объемное трехмерное окружение.

![Distant planet skybox](media/cubemap-cross.jpg)
![Небесный ящик далекой планеты](media/cubemap-cross.jpg)

![Merged skybox](media/skybox-assembled.jpg)
![Объединенный скайбокс](media/skybox-assembled.jpg)

Currently, Game Studio can't convert image files to cubemaps (`.dds` files). Use another application to create a cubemap from separate image files, such as:
В настоящее время Game Studio не может преобразовывать файлы изображений в кубические карты (файлы `.dds`).  Используйте другое приложение для создания кубической карты из отдельных файлов изображений, например:

* [Nvidia conversion tool](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [Инструмент преобразования Nvidia] (https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [ATI conversion tool](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)
* [Инструмент преобразования ATI] (http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)

### Create a cubemap in Game Studio
### Создайте кубическую карту в Game Studio

You can capture a cubemap from a position in your scene.
Вы можете захватить кубическую карту из положения в вашей сцене.

1. In the **scene editor**, position the camera at the point where you want to capture the cubemap. The direction the camera faces doesn't matter, only the position.
1. В **редакторе сцен** поместите камеру в точку, где вы хотите захватить кубическую карту.  Направление камеры не имеет значения, только положение.

    Typically, you should capture cubemaps at the center of your scene to create the best all-round view.
Как правило, вы должны захватывать кубические карты в центре вашей сцены, чтобы создать наилучший круговой обзор.

2. In the scene editor toolbar, open the **Lighting options** menu.
2. На панели инструментов редактора сцен откройте меню **Опции освещения**.

    ![Lighting options](../lights-and-shadows/media/lighting-options-menu.png)
![Параметры освещения](../lights-and-shadows/media/lighting-options-menu.png)

3. Under **Cubemap**, click **Generate**.
3. В разделе **Кубическая карта** нажмите **Создать**.

4. Browse to the location on disk you want to save the cubemap, specify a name, and click **Save**.
4. Найдите место на диске, где вы хотите сохранить кубическую карту, укажите имя и нажмите **Сохранить**.

>[!Tip]
>[!Подсказка]
>We recommend you save the cubemap in your project **Resources** folder. For more information, see [Organize your files in version control](../../files-and-folders/version-control.md).
>Мы рекомендуем сохранить кубическую карту в папке **Ресурсы** вашего проекта.  Для получения дополнительной информации см. [Организация файлов в системе контроля версий](../../files-and-folders/version-control.md).

Game Studio creates a cubemap `.dds` file in the location you specified.
Game Studio создает файл кубической карты `.dds` в указанном вами месте.

## 360° panoramic textures
## Панорамные текстуры 360°

Instead of using a cubemap, you can use a **360° panoramic texture** as a 3D background.
Вместо использования кубической карты вы можете использовать **панорамную текстуру на 360°** в качестве 3D-фона.

| 360° panorama  | Appearance in game
|  Панорама 360° |  Внешний вид в игре
|----------------|-------------
|----------------|--------------
| ![Panorama texture](media/MyPanorama.jpg)  | ![Panorama in game](media/panorama-in-game.jpg)
|  ![Текстура панорамы](media/MyPanorama.jpg) |  ![Панорама в игре](media/panorama-in-game.jpg)
*Image courtesy of [Texturify](http://texturify.com)*
*Изображение предоставлено [Texturify](http://texturify.com)*

>[!Note]
>[!Примечание]
>Remember that [post effects](../post-effects/index.md) affect the appearance of your skybox. If it doesn't look how you expect, try changing your post effect settings.
>Помните, что [постэффекты](../post-effects/index.md) влияют на внешний вид вашего скайбокса.  Если это выглядит не так, как вы ожидаете, попробуйте изменить настройки пост-эффекта.

## Add a cubemap or 360° panoramic texture to the project
## Добавьте в проект кубическую карту или панорамную текстуру 360°

You add these like other color textures.
Вы добавляете их, как и другие цветные текстуры.

* In the **Asset View**, click ![Add asset](../lights-and-shadows/media/engine-skybox-add-new-asset-button.png), select **Textures** > **Color texture**, and browse to the file.
* В **Просмотре активов** нажмите ![Добавить актив](../lights-and-shadows/media/engine-skybox-add-new-asset-button.png), выберите **Текстуры** >  **Раскрасьте текстуру** и перейдите к файлу.

    ![Select texture as asset type](media/engine-skybox-select-asset-type.png)
![Выберите текстуру как тип ресурса](media/engine-skybox-select-asset-type.png)

* Alternatively, drag and drop the file from **Windows Explorer** to the **Asset View**, then select **Color texture**.
* Либо перетащите файл из **Проводника Windows** в **Просмотр активов**, затем выберите **Цвет текстуры**.

    ![Drag and drop background texture](media/drag-texture.gif)
![Перетащите фоновую текстуру](media/drag-texture.gif)

### Create a skybox
### Создать скайбокс

To create a skybox, add a cubemap or 360° panoramic texture to a **background component**.
Чтобы создать скайбокс, добавьте кубическую карту или панорамную текстуру 360° к **фоновому компоненту**.

Stride includes an entity with a background component in the project by default. Only one background can be active in a scene at a time. If there are multiple backgrounds, Stride only loads the first.
Stride по умолчанию включает в проект сущность с фоновым компонентом.  Одновременно в сцене может быть активен только один фон.  Если фонов несколько, Stride загружает только первый.

You can add background components to as many entities as you need. You might want to include more than one background, for example, if you want to switch skyboxes at runtime.
Вы можете добавить фоновые компоненты к любому количеству сущностей, которое вам нужно.  Вы можете включить более одного фона, например, если хотите переключать скайбоксы во время выполнения.

#### Add a background entity
#### Добавить фоновый объект

1. In the **Scene view**, select the entity you want to add the component to.
1. В **виде сцены** выберите объект, к которому вы хотите добавить компонент.

    This can be an empty entity. Its position in the scene doesn't matter.
Это может быть пустой объект.  Его положение в сцене не имеет значения.

2. In the **Property Grid** (on the right by default), click **Add component** and select **Background**.
2. В **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите **Фон**.

    ![Add background component](media/engine-skybox-add-background-component.png)
![Добавить фоновый компонент](media/engine-skybox-add-background-component.png)

3. Under **Texture**, select the cubemap or 360° panoramic texture you want to use in the skybox.
3. В разделе **Текстура** выберите кубическую карту или панорамную текстуру 360°, которую вы хотите использовать в скайбоксе.

    ![Background component properties](media/engine-skybox-background-component-properties.png)
![Свойства фонового компонента](media/engine-skybox-background-component-properties.png)

## Use a skybox as a light source
## Использовать скайбокс в качестве источника света

You can use a skybox to light the scene. Stride analyzes the skybox texture and generates lighting using [image-based lighting (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting). For more information, see [Skybox lights](../lights-and-shadows/skybox-lights.md).
Вы можете использовать скайбокс, чтобы осветить сцену.  Stride анализирует текстуру скайбокса и генерирует освещение, используя [освещение на основе изображения (Википедия)](https://en.wikipedia.org/wiki/Image-based_lighting).  Для получения дополнительной информации см. [Огни Skybox](../lights-and-shadows/skybox-lights.md).

## Change the skybox at runtime
## Изменить скайбокс во время выполнения

The following code changes the cubemap in a background:
Следующий код изменяет кубическую карту в фоновом режиме:

```cs
```CS
public Texture cubemapTexture;
публичная текстура cubemapTexture;
public void ChangeBackgroundParameters()
public void ChangeBackgroundParameters()
{
{
    // Get the background component from an entity
// Получаем фоновый компонент от объекта
	var background = directionalLight.Get<BackgroundComponent>();
var background = directionalLight.Get<BackgroundComponent>();

	// Replace the existing background
// Заменяем существующий фон
	background.Texture = cubemapTexture;
background.Texture = cubemapTexture;

	// Change the background intensity
// Изменяем интенсивность фона
	background.Intensity = 1.5f;
background.Intensity = 1,5f;
}
}
```
```

### Convert cubemaps to panoramas and vice versa
### Преобразование кубических карт в панорамы и наоборот

Various tools exist to convert a panoramas to cubemaps and vice versa, including: 
Существуют различные инструменты для преобразования панорам в кубические карты и наоборот, в том числе:

- [Panorama Converter](http://gonchar.me/blog/goncharposts/2150)  
- [Конвертер панорам] (http://gonchar.me/blog/goncharposts/2150)
- [Panorama to Cubemap](https://jaxry.github.io/panorama-to-cubemap/)
- [Панорама в кубическую карту] (https://jaxry.github.io/panorama-to-cubemap/)
- [Convert Cubemap to Equirectangular](https://www.360toolkit.co/convert-cubemap-to-spherical-equirectangular.html)
- [Преобразовать кубическую карту в равнопрямоугольную] (https://www.360toolkit.co/convert-cubemap-to-spherical-equirectangular.html)

## Set a 2D background
## Установить двухмерный фон

Instead of using a 3D skybox, you can display the texture as a static background. This displays the texture as a flat image that stays static no matter how you move the camera. This is often useful for 2D games.
Вместо использования 3D-скайбокса вы можете отображать текстуру как статический фон.  Это отображает текстуру в виде плоского изображения, которое остается статичным независимо от того, как вы перемещаете камеру.  Это часто полезно для 2D-игр.

To do this, in the **Background** component properties, select **2D background**.
Для этого в свойствах компонента **Фон** выберите **2D-фон**.

![Background component properties](media/is-2d.png)
![Свойства фонового компонента](media/is-2d.png)

If you enable this with a cubemap, Stride uses the first face of the cubemap as the background.
Если вы включите это с кубической картой, Stride будет использовать первую грань кубической карты в качестве фона.

## Use a video as a skybox
## Использовать видео как скайбокс

For details, see [Videos - Use a video as a skybox](../../video/use-a-video-as-a-skybox.md).
Подробности см. в [Видео — Использование видео в качестве скайбокса](../../video/use-a-video-as-a-skybox.md).

## See also
## Смотрите также

* [Skybox lights](../lights-and-shadows/skybox-lights.md)
* [Огни скайбокса](../lights-and-shadows/skybox-lights.md)
* [Lights and shadows](../lights-and-shadows/index.md)
* [Свет и тени](../lights-and-shadows/index.md)
