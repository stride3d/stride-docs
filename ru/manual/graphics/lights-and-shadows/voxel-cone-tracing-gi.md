# Voxel Cone Tracing Global Illumination
# Воксельный конус, отслеживающий глобальное освещение

## Howto: setup existing project with Voxel Cone Tracing GI
## Howto: настроить существующий проект с Voxel Cone Tracing GI

### Reference Stride.Voxels
### Ссылка Stride.Voxels

Since Stride is modular based, we need to add a reference to `Stride.Voxels` plugin:
Поскольку Stride основан на модулях, нам нужно добавить ссылку на плагин Stride.Voxels:

1. In the **Solution Explorer**, right-click on the user project
1. В **Обозревателе решений** щелкните правой кнопкой мыши пользовательский проект.

2. Select `Add Dependency`
2. Выберите «Добавить зависимость».

   ![Add dependency](media/voxelgi-add-dependency.png)
![Добавить зависимость](media/voxelgi-add-dependency.png)

3. Select `Stride.Voxels` in the list and press `OK`
3. Выберите «Stride.Voxels» в списке и нажмите «ОК».

4. You might be asked if you want to reload project, choose whichever option, both are OK.
4. Вас могут спросить, хотите ли вы перезагрузить проект, выберите любой вариант, оба подходят.

### Graphics Compositor
### Композитор графики

Voxel Cone Tracing requires several changes to the graphics compositor.
Voxel Cone Tracing требует нескольких изменений в компоновщике графики.

To make this easier, we prepared a graphics compositor ready to use with Voxel GI in the asset templates:
Чтобы сделать это проще, мы подготовили графический компоновщик, готовый к использованию с Voxel GI в шаблонах ресурсов:

1. In the **Asset View**, click ![](../../game-studio/media/create-and-add-assets-add-new-asset-button.png)
1. В **Просмотре активов** нажмите ![](../../game-studio/media/create-and-add-assets-add-new-asset-button.png)

2. Start to type `Voxel` in the search bar
2. Начните вводить «Voxel» в строке поиска.

3. Select `Graphics Compositor (Voxel Cone Tracing)`
3. Выберите «Композитор графики (трассировка воксельного конуса)».

   ![Create Graphics Compositor](media/voxelgi-create-graphics-compositor.png)
![Создать графический компоновщик](media/voxelgi-create-graphics-compositor.png)

4. In your `Game Settings` asset, change the graphics compositor to the newly created one:
4. В ассете `Настройки игры` измените графический компоновщик на только что созданный:

   ![Set Graphics Compositor](media/voxelgi-set-graphics-compositor.png)
![Установить графический компоновщик](media/voxelgi-set-graphics-compositor.png)

### Setup scene: Volume and Light
### Сцена установки: Громкость и свет

1. In the scene explorer, above the **Entity Tree**, click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon and select `Lights` then `Voxel volume`
1. В обозревателе сцен над **Деревом объектов** щелкните значок ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png  ) и выберите «Свет», затем «Громкость вокселей».

2. Click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon again and select `Lights` then `Voxel light`
2. Щелкните значок ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) еще раз и выберите «Lights», затем «Voxel light».

   At that point, the scene rendering will likely crash due to the light not being setup correctly (with error `No Voxel Volume Component selected for voxel light.`), but that's expected.
В этот момент рендеринг сцены, скорее всего, завершится сбоем из-за неправильной настройки света (с ошибкой «Для воксельного света не выбран компонент объемного изображения»), но это ожидаемо.

3. In the property grid, change the Light Volume to the previously created entity:
3. В сетке свойств измените Light Volume на ранее созданный объект:

   ![Setup light volume](media/voxelgi-setup-light-volume.png)
![Настройка громкости света](media/voxelgi-setup-light-volume.png)

4. At that point, you can click the `Resume` button in scene renderer, and everything should be setup!
4. В этот момент вы можете нажать кнопку «Возобновить» в рендерере сцены, и все должно быть настроено!

### Play with it
### Играть с этим

To do a quick test, you can disable Skybox light (keep only directional light), go in shadow area and see if some ambient light spread there. You can also play with [emissive materials](../materials/shading-attributes.md#emissive).
Чтобы провести быстрый тест, вы можете отключить свет Skybox (оставьте только направленный свет), перейдите в область тени и посмотрите, распространяется ли туда какой-то окружающий свет.  Вы также можете поиграть с [излучающими материалами](../materials/shading-attributes.md#emissive).

### Video tutorial
### Видеоурок

Here's a youtube alternative tutorial made by David Jeske on how to set it up:
Вот альтернативный учебник YouTube, сделанный Дэвидом Джеске о том, как его настроить:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NEMZ_HJzJ7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width= -картинка
