# Create assets
# Создать активы

<span class="label label-doc-level">Beginner</span>
<span class=

There are two ways to create assets:
Существует два способа создания активов:

* Use the **Add asset** button in the **Asset View**
* Используйте кнопку **Добавить актив** в **Просмотре актива**.
* Drag and drop **resource files** (such as image or audio files) to the **Asset View** tab
* Перетащите **файлы ресурсов** (например, изображения или аудиофайлы) на вкладку **Просмотр ресурсов**.
 
## Use the **Add asset** button
## Используйте кнопку **Добавить актив**

 1. In the *Asset View*, click ![](media/create-and-add-assets-add-new-asset-button.png)
1. В *Просмотре активов* нажмите ![](media/create-and-add-assets-add-new-asset-button.png)

 2. Select the type of asset you want to create.
2. Выберите тип актива, который вы хотите создать.

	![Select asset type](../get-started/media/asset-creation-create-new-asset-asset-view-tab.png)
![Выберите тип ресурса](../get-started/media/asset-creation-create-new-asset-asset-view-tab.png)
 	
	Game Studio displays a list of asset templates. These are assets configured for a specific use.
Game Studio отображает список шаблонов активов.  Это активы, настроенные для конкретного использования.
	
 3. Select the right template for your asset.
3. Выберите правильный шаблон для вашего актива.

    Game Studio adds the asset to the Asset View:
Game Studio добавляет ресурс в Asset View:

	![Asset added to Asset View' tab](../get-started/media/asset-creation-asset-view-tab-procedural-model.png)
![Актив добавлен на вкладку «Просмотр активов»](../get-started/media/asset-creation-asset-view-tab-procedural-model.png)

> [!Note]
> [!Примечание]
> Some assets, such as textures, require a resource file. When you add these assets, Game Studio prompts you for a resource file.
> Для некоторых активов, таких как текстуры, требуется файл ресурсов.  Когда вы добавляете эти активы, Game Studio запрашивает у вас файл ресурсов.

## Drag and drop resource files
## Перетащите файлы ресурсов

You can drag compatible resource files directly into Game Studio to create assets from them. Game Studio is compatible with common file formats.
Вы можете перетаскивать совместимые файлы ресурсов непосредственно в Game Studio, чтобы создавать из них активы.  Game Studio совместима с распространенными форматами файлов.

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> * You can't use this method to create assets that don't use resource files (eg prefabs, materials, or scenes).
> * Вы не можете использовать этот метод для создания активов, которые не используют файлы ресурсов (например, префабы, материалы или сцены).

| Asset type                    | Compatible resource file formats    
|  Тип актива |  Совместимые форматы файлов ресурсов
|-------------------------------|----------------------------------
|--------------------------------|-----------------  ------------------
| Models, animations, skeletons | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx 
|  Модели, анимации, скелеты |  .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx
| Sprites, textures, skyboxes   | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff 
|  Спрайты, текстуры, скайбоксы |  .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff
| Audio  	                 | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc 
|  Аудио |  .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc

To create an asset by dragging and dropping a resource file:
Чтобы создать актив, перетащив файл ресурсов:

1. (Optional) If it isn't there already, move the resource file you want to use in the **Resources** folder of your project. You don't have to do this, but it's good practice to keep resource files organized and makes projects easier to share. For more information, see [Project structure](../files-and-folders/project-structure.md).
1. (Необязательно) Если его там еще нет, переместите файл ресурсов, который вы хотите использовать, в папку **Ресурсы** вашего проекта.  Вам не обязательно этого делать, но хорошей практикой является систематизация файлов ресурсов, что упрощает совместное использование проектов.  Для получения дополнительной информации см. [Структура проекта](../files-and-folders/project-structure.md).

2. Drag the resource file from Explorer to the Asset View:
2. Перетащите файл ресурсов из Explorer в Asset View:

	![Drap and drop a resource file to the Asset View](media/create-assets-drop-resource.png)
![Перетащите файл ресурсов в представление активов](media/create-assets-drop-resource.png)

3. Select the kind of asset you want to create:
3. Выберите тип актива, который вы хотите создать:
   
	![List of asset templates](media/create-assets-drag-drop-select-asset-template.png)
![Список шаблонов активов](media/create-assets-drag-drop-select-asset-template.png)

	Game Studio adds the asset to the Asset View:
Game Studio добавляет ресурс в Asset View:

	![Texture asset created](media/create-assets-drag-drop-asset-created.png)
![Текстура создана](media/create-assets-drag-drop-asset-created.png)

Game Studio automatically imports all dependencies in the resource files and creates corresponding assets. For example, you can add a model or animation resource file and Game Studio handles everything else.
Game Studio автоматически импортирует все зависимости в файлы ресурсов и создает соответствующие активы.  Например, вы можете добавить модель или файл ресурсов анимации, а Game Studio сделает все остальное.

> [!TIP]
> [!СОВЕТ]
> You can drag multiple files simultaneously. If you drop multiple files of different types at the same time, Game Studio only adds only files that match your template selection. For example, if you add an image file and a sound file, then select the audio asset template, only the sound file is added.
> Вы можете перетаскивать несколько файлов одновременно.  Если вы перетащите несколько файлов разных типов одновременно, Game Studio добавит только те файлы, которые соответствуют выбранному вами шаблону.  Например, если вы добавите файл изображения и звуковой файл, а затем выберите шаблон аудиоресурса, будет добавлен только звуковой файл.

## See also
## Смотрите также

* [Manage assets](manage-assets.md)
* [Управление активами](manage-assets.md)
* [Use assets](use-assets.md)
* [Использовать активы](use-assets.md)
