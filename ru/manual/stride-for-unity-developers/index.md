# Stride for Unity® developers
# Stride для разработчиков Unity®

Stride and Unity® both use C# and share many concepts, with a few major differences.
И Stride, и Unity® используют C# и имеют много общих концепций с несколькими существенными различиями.

![Stride for Unity® developers](media/stride-vs-unity-opening-image.png)
![Stride для разработчиков Unity®](media/stride-vs-unity-opening-image.png)

## Editor
## Редактор

The Stride editor is **Game Studio**. This is the equivalent of the Unity® Editor.
Редактор Stride — **Game Studio**.  Это эквивалент редактора Unity®.

![Stride and Unity®  interface comparison](media/stride-vs-unity-interface-comparison.png)
![Сравнение интерфейсов Stride и Unity®](media/stride-vs-unity-interface-comparison.png)

*Unity® screenshot taken from [Calling a web-service from a Unity3D scene](http://through-the-interface.typepad.com/through_the_interface/2012/04/calling-a-web-service-from-a-unity3d-scene.html) by Kean Walmsley.*
* Скриншот Unity® взят из [Вызов веб-службы из сцены Unity3D] (http://through-the-interface.typepad.com/through_the_interface/2012/04/calling-a-web-service-from-a-  unity3d-scene.html) Кин Уолмсли.*

You can customize the Game Studio layout by dragging tabs, similar to Visual Studio. 
Вы можете настроить макет Game Studio, перетаскивая вкладки, как в Visual Studio.

For more information about Game Studio, see the [Game Studio](../game-studio/index.md) page.
Дополнительные сведения об Game Studio см. на странице [Game Studio](../game-studio/index.md).

## Terminology
## Терминология

Unity® and Stride use mostly common terms, with a few differences:
Unity® и Stride используют в основном общие термины с некоторыми отличиями:

| Unity®  | Stride |
|  Юнити® |  Страйд |
| ----- | ------- |
|  ----- |  ------- |
| Hierarchy panel | Entity Tree |
|  Панель иерархии |  Дерево объектов |
| Inspector	| Property Grid |
|  инспектор |  Сетка свойств |
| Project browser |	Asset View |
|  Браузер проектов |  Просмотр активов |
| Scene view | Scene Editor |
|  Просмотр сцены |  Редактор сцен |
| GameObject | Entity |
|  Игровой объект |  Сущность |
| MonoBehaviour | SyncScript, AsyncScript, StartupScript |
|  моноповедение |  SyncScript, AsyncScript, StartupScript |

## Folders and files
## Папки и файлы

Like Unity®, Stride projects are stored in a directory that contains:
Как и Unity®, проекты Stride хранятся в каталоге, который содержит:

* the project ``.sln`` solution file, which you can open with Game Studio or any IDE such as Visual Studio
* файл решения проекта ``.sln``, который вы можете открыть с помощью Game Studio или любой IDE, такой как Visual Studio

* a **MyGame.Game** folder with project source files, dependencies, resources, configurations, and binaries
* папка **MyGame.Game** с исходными файлами проекта, зависимостями, ресурсами, конфигурациями и двоичными файлами

    ![Package folder structure](../files-and-folders/media/folder-structure.png)
![Структура папки пакета](../files-and-folders/media/folder-structure.png)

* **Assets** contains the asset files which represent elements in your game.
* **Assets** содержит файлы активов, представляющие элементы вашей игры.

* **Bin** contains the compiled binaries and data. Stride creates the folder when you build the project, with a subdirectory for each platform.
* **Bin** содержит скомпилированные двоичные файлы и данные.  Stride создает папку при сборке проекта с подкаталогом для каждой платформы.

* **MyPackage.Game** contains your source code.
* **MyPackage.Game** содержит ваш исходный код.

*	**MyPackage.Platform** contains additional code for the platforms your project supports. Game Studio creates folders for each platform (eg *MyPackage.Windows*, *MyPackage.Linux*, etc). These folders are usually small, and only contain the entry point of the program.
* **MyPackage.Platform** содержит дополнительный код для платформ, которые поддерживает ваш проект.  Game Studio создает папки для каждой платформы (например, *MyPackage.Windows*, *MyPackage.Linux* и т. д.).  Эти папки обычно небольшие и содержат только точку входа программы.

* **obj** contains cached files. Game Studio creates this folder when you build your project. To force a complete asset and code rebuild, delete this folder and build the project again.
* **obj** содержит кэшированные файлы.  Game Studio создает эту папку, когда вы создаете свой проект.  Чтобы принудительно выполнить полную перестройку ресурсов и кода, удалите эту папку и заново создайте проект.

* **Resources** is a suggested location for files such as images and audio files used by your assets.
* **Ресурсы** — рекомендуемое место для файлов, таких как изображения и аудиофайлы, которые используются вашими активами.

Stride and Unity® differ in the following ways:
Stride и Unity® различаются по следующим параметрам:

* Stride doesn't automatically copy resource files to your project folder when you import them into assets. You have to do this yourself. We recommend you save them in the **Resources** folder.
* Stride не копирует файлы ресурсов в папку вашего проекта автоматически, когда вы импортируете их в активы.  Вы должны сделать это сами.  Мы рекомендуем сохранять их в папке **Ресурсы**.

* Stride doesn't require resource files and asset files to be in the same folder. You can save resource files in the Assets folder if you want, but instead we recommend you save them in the **Resources** folder. This makes sharing your project via version control easier.
* Stride не требует, чтобы файлы ресурсов и файлы ресурсов находились в одной папке.  При желании вы можете сохранить файлы ресурсов в папке «Активы», но вместо этого мы рекомендуем сохранять их в папке **Ресурсы**.  Это упрощает совместное использование вашего проекта через систему контроля версий.

For more information about project structure in Stride, including advice about how to organize and share your files, see the [Project structure](../files-and-folders/project-structure.md) page.
Для получения дополнительной информации о структуре проекта в Stride, включая советы по организации и совместному использованию файлов, см. страницу [Структура проекта](../files-and-folders/project-structure.md).

### Open the project directory from Game Studio
### Откройте каталог проекта из Game Studio

You can open the project directory from **Project > Show in explorer** in Game Studio.
Вы можете открыть каталог проекта из **Проект > Показать в проводнике** в Game Studio.

![Open project directory from Game Studio](media/stride-vs-unity-open-project-in-windows-explorer.png)
![Открыть каталог проекта из Game Studio](media/stride-vs-unity-open-project-in-windows-explorer.png)

## Game settings
## Настройки игры

Unity® saves global settings in separate assets (ie Graphics Settings, Quality Settings, Audio Manager, and so on). 
Unity® сохраняет глобальные настройки в отдельных ресурсах (например, настройки графики, настройки качества, диспетчер аудио и т. д.).

Stride saves global settings in a single asset, the **Game Settings** asset. You can configure:
Stride сохраняет глобальные настройки в одном ресурсе — **Настройки игры**.  Вы можете настроить:

* The **default scene**
* **сцена по умолчанию**
* **Rendering settings**
* **Настройки рендеринга**
* **Editor settings**
* **Настройки редактора**
* **Texture settings**
* **Настройки текстуры**
* **Physics settings**
* **Физические настройки**
* **Overrides**
* **Переопределяет**

To use the Game Settings asset, in the **Asset View**, select **GameSettings** and view its properties in the **Property Grid**.
Чтобы использовать ресурс «Настройки игры», в **Просмотре объектов** выберите **GameSettings** и просмотрите его свойства в **Сетке свойств**.

![Game settings](media/game-settings.png)
![Настройки игры](media/game-settings.png)

## Scenes
## Сцены

Like Unity®, in Stride you place all objects in a scene. Game Studio stores scenes as separate ``.sdscene`` assets in your project directory.
Как и в Unity®, в Stride вы размещаете все объекты на сцене.  Game Studio хранит сцены как отдельные ресурсы ``.sdscene`` в каталоге вашего проекта.

### Set the default scene
### Установить сцену по умолчанию

You can have multiple scenes in your project. Stride loads the default scene at runtime.
В вашем проекте может быть несколько сцен.  Stride загружает сцену по умолчанию во время выполнения.

To set the default scene:
Чтобы установить сцену по умолчанию:

1. In the **GameSettings** properties, next to **Default Scene**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
1. В свойствах **GameSettings** рядом с **Сцена по умолчанию** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс*  *).
    
    ![Set default scene](media/stride-vs-unity-game-settings-default-scene.png)
![Установить сцену по умолчанию](media/stride-vs-unity-game-settings-default-scene.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

2. Select the default scene and click **OK**.
2. Выберите сцену по умолчанию и нажмите **ОК**.

For more information about scenes, see [Scenes](../game-studio/scenes.md).
Для получения дополнительной информации о сценах см. [Сцены](../game-studio/scenes.md).

## Entities vs GameObjects
## Сущности и игровые объекты

In Unity®, objects in the scene are called **GameObjects**. In Stride, they're called **entities**.
В Unity® объекты сцены называются **GameObjects**.  В Stride они называются **сущностями**.

![Entities in Stride](media/stride-vs-unity-entities.jpg)
![Сущности в Stride](media/stride-vs-unity-entities.jpg)

Like GameObjects, entities are carriers for components such as transform components, model components, audio components, and so on. If you're used to working with GameObjects in Unity®, you should have no problem using entities in Game Studio.
Подобно GameObjects, сущности являются носителями таких компонентов, как компоненты преобразования, компоненты модели, аудиокомпоненты и так далее.  Если вы привыкли работать с GameObjects в Unity®, у вас не должно возникнуть проблем с использованием сущностей в Game Studio.

## Entity components
## Сущностные компоненты

In Stride, you add components to entities just like you add components to GameObjects in Unity®.
В Stride вы добавляете компоненты к объектам точно так же, как вы добавляете компоненты к игровым объектам в Unity®.

To add a component to entity in Game Studio:
Чтобы добавить компонент к объекту в Game Studio:

1. Select the entity you want to add the component to.
1. Выберите сущность, к которой вы хотите добавить компонент.
2. In the **Property Grid** (on the right by default), click **Add component** and select the component from the drop-down list.
2. В **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите компонент из раскрывающегося списка.

    ![Add component](media/stride-vs-unity-add-component-to-entity.png)
![Добавить компонент](media/stride-vs-unity-add-component-to-entity.png)

### Transform component
### Преобразование компонента

Like GameObjects in Unity®, each entity in Stride has a [Transform component](xref:Stride.Engine.TransformComponent) which sets its position, rotation, and scale in the world.
Как и GameObjects в Unity®, каждый объект в Stride имеет [компонент Transform](xref:Stride.Engine.TransformComponent), который задает его положение, поворот и масштаб в мире.

![Transform component](media/stride-vs-unity-entity-transform-component.png)
![Компонент трансформации](media/stride-vs-unity-entity-transform-component.png)

Even empty entities have a Transform component, because every entity in the scene must have a position.
Даже у пустых объектов есть компонент Transform, потому что у каждого объекта в сцене должна быть позиция.

In Stride, Transform components contain a LocalMatrix and a WorldMatrix that are updated in every Update frame. If you need to force an update sooner than that you can use `TranformComponent.UpdateLocalMatrix()`, `Transform.UpdateWorldMatrix()`, or `Transform.UpdateLocalFromWorld()` to do so, depending on how you need to update the matrix.
В Stride компоненты Transform содержат LocalMatrix и WorldMatrix, которые обновляются в каждом кадре обновления.  Если вам нужно принудительно обновить матрицу раньше, вы можете использовать для этого `TranformComponent.UpdateLocalMatrix()`, `Transform.UpdateWorldMatrix()` или `Transform.UpdateLocalFromWorld()`, в зависимости от того, как вам нужно обновить матрицу.  .

#### Local Position/Rotation/Scale
#### Локальное положение/поворот/масштаб
Stride uses position, rotation, and scale to refer to the local position, rotation and scale.
Шаг использует положение, поворот и масштаб для обозначения локального положения, поворота и масштаба.

| Unity®  | Stride |
|  Юнити® |  Страйд |
| ----- | ------- |
|  ----- |  ------- |
| `transform.localPosition` | `Transform.Position` |
|  `transform.localPosition` |  `Преобразование.Позиция` |
| `transform.localRotation` | `Transform.Rotation` |
|  `transform.localRotation` |  `Преобразование.Вращение` |
| `transform.localScale` | `Transform.Scale` |
|  `transform.localScale` |  `Преобразование.Масштаб` |
| `transform.localEulerAngles` | `Transform.RotationEulerXYZ` |
|  `transform.localEulerAngles` |  `Transform.RotationEulerXYZ` |

#### World Position/Rotation/Scale
#### Мировое положение/вращение/масштаб
In comparison to Unity, many of the Transform component's properties related to its location in the world have been moved to the [WorldMatrix](xref:Stride.Engine.TransformComponent.WorldMatrix).
По сравнению с Unity многие свойства компонента Transform, связанные с его расположением в мире, были перемещены в [WorldMatrix](xref:Stride.Engine.TransformComponent.WorldMatrix).

| Unity®  | Stride |
|  Юнити® |  Страйд |
| ----- | ------- |
|  ----- |  ------- |
| `transform.position` | `Transform.WorldMatrix.TranslationVector` |
|  `преобразование.позиция` |  `Transform.WorldMatrix.TranslationVector` |
| `transform.rotation` | N/A |
|  `transform.rotation` |  Н/Д |
| `transform.scale` | N/A |
|  `transform.scale` |  Н/Д |
| `transform.eulerAngles` | `Transform.WorldMatrix.DecomposeXYZ(out Vector3 rotation)` |
|  `transform.eulerAngles` |  `Transform.WorldMatrix.DecomposeXYZ (вне вращения Vector3)` |
| `transform.scale` and `transform.position` | `Transform.WorldMatrix.Decompose(out Vector3 scale, out Vector3 translation)` |
|  `transform.scale` и `transform.position` |  `Transform.WorldMatrix.Decompose (из масштаба Vector3, из преобразования Vector3)` |
| `transform.scale`, `transform.rotation`, and `transform.position` | `Transform.WorldMatrix.Decompose(out Vector3 scale, out Quaternion rotation, out Vector3 translation)` |
|  `transform.scale`, `transform.rotation` и `transform.position` |  `Transform.WorldMatrix.Decompose (вне масштаба Vector3, вне вращения кватерниона, вне преобразования Vector3)` |

#### Transform Directions
#### Преобразование направлений
Unlike Unity, Stride provides a Backward, Left, and Down property.
В отличие от Unity, Stride предоставляет свойства Backward, Left и Down.
Note that those are matrix properties, so setting one of those is not enough to properly rotate the matrix.
Обратите внимание, что это свойства матрицы, поэтому установки одного из них недостаточно для правильного поворота матрицы.

| Unity®  | Stride |
|  Юнити® |  Страйд |
| ----- | ------- |
|  ----- |  ------- |
| `transform.forward` | `Transform.WorldMatrix.Forward` |
|  `transform.forward` |  `Transform.WorldMatrix.Forward` |
| `transform.forward * -1` | `Transform.WorldMatrix.Backward` |
|  `transform.forward * -1` |  `Transform.WorldMatrix.Backward` |
| `transform.right` | `Transform.WorldMatrix.Right` |
|  `transform.right` |  `Transform.WorldMatrix.Right` |
| `transform.right * -1` | `Transform.WorldMatrix.Left` |
|  `transform.right * -1` |  `Transform.WorldMatrix.Left` |
| `transform.up` | `Transform.WorldMatrix.Up` |
|  `transform.up` |  `Transform.WorldMatrix.Up` |
| `transform.up * -1` | `Transform.WorldMatrix.Down` |
|  `transform.up * -1` |  `Transform.WorldMatrix.Down` |

## Assets
## Ресурсы

In Unity®, you select an asset in the **project browser** and edit its properties in the **Inspector** tab. 
В Unity® вы выбираете ресурс в **браузере проекта** и редактируете его свойства на вкладке **Инспектор**.

Stride is similar. You select an asset in the **Asset View** and edit its properties in the **Property Grid**.
Страйд похож.  Вы выбираете актив в **Представлении активов** и редактируете его свойства в **Сетке свойств**.

![Asset and properties](media/asset-and-properties.png)
![Актив и свойства](media/asset-and-properties.png)

For certain types of asset, Game Studio also has dedicated editors:
Для определенных типов активов Game Studio также имеет специальных редакторов:

* prefabs
* сборные
* scenes
* сцены
* sprite sheets
* листы спрайтов
* UI pages
* Страницы пользовательского интерфейса
* UI libraries
* библиотеки пользовательского интерфейса
* scripts
* скрипты

To open the dedicated editor for these types of asset:
Чтобы открыть специальный редактор для этих типов активов:

* double-click the asset, or
* дважды щелкните ресурс или
* right-click the asset and select Edit asset, or
* щелкните ресурс правой кнопкой мыши и выберите «Редактировать ресурс» или
* select the asset and type Ctrl + Enter
* выберите актив и нажмите Ctrl + Enter

The editor opens in a new tab. You can arrange the tabs how you like, or float them as separate windows, just like tabs in web browsers.
Редактор откроется в новой вкладке.  Вы можете расположить вкладки так, как вам нравится, или разместить их как отдельные окна, как вкладки в веб-браузерах.

![Dedicated Stride editors](media/stride-vs-unity-different-editors.png)
![Выделенные редакторы Stride](media/stride-vs-unity-different-editors.png)

>[!Note]
>[!Примечание]
>When you modify resource files outside Game Studio, the corresponding assets update automatically in Game Studio.
>Когда вы изменяете файлы ресурсов вне Game Studio, соответствующие активы автоматически обновляются в Game Studio.

### Import assets
### Импорт активов

To import an asset, drag it from Explorer to the **Asset View**. You can also click an **Add asset** button, navigate to the desired file and specify the type of asset you want to import.
Чтобы импортировать актив, перетащите его из Проводника в **Представление активов**.  Вы также можете нажать кнопку **Добавить ресурс**, перейти к нужному файлу и указать тип ресурса, который хотите импортировать.

As soon as you add an asset to your project, you can edit its properties in the **Property Grid**.
Как только вы добавите ресурс в свой проект, вы сможете редактировать его свойства в **Сетке свойств**.

![Add asset](media/stride-vs-unity-add-asset.png)
![Добавить ресурс](media/stride-vs-unity-add-asset.png)

>[!Note]
>[!Примечание]
> Unlike Unity®, Stride doesn't automatically copy resource files to the project directory when you import them to projects.
> В отличие от Unity®, Stride не копирует файлы ресурсов в каталог проекта автоматически, когда вы импортируете их в проекты.

### Supported file formats
### Поддерживаемые форматы файлов

Like Unity®, Stride supports file formats including:
Как и Unity®, Stride поддерживает такие форматы файлов, как:

| Asset type  | Supported formats                                           
|  Тип актива |  Поддерживаемые форматы
|------|---|
|------|---|
| Models, animations, skeletons | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx
|  Модели, анимации, скелеты |  .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx
| Sprites, textures, skyboxes   | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff
|  Спрайты, текстуры, скайбоксы |  .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff
| Audio  	                 | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc
|  Аудио |  .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc
| Fonts | .ttf, .otf |
|  Шрифты |  .ttf, .otf |

For more information about assets, see [Assets](../game-studio/assets.md).
Для получения дополнительной информации об активах см. [Активы](../game-studio/assets.md).

> [!Note]
> [!Примечание]
> * Stride currently doesn't support movie files.
> * В настоящее время Stride не поддерживает видеофайлы.

## Prefabs
## Префабы

Like Unity®, Stride uses prefabs. Prefabs are "master" versions of objects that you can reuse wherever you need. When you change a prefab, every instance of the prefab changes too.
Как и Unity®, Stride использует сборные элементы.  Префабы — это «основные» версии объектов, которые вы можете повторно использовать везде, где вам нужно.  Когда вы меняете префаб, каждый экземпляр префаба тоже меняется.

![Prefabs in Stride](media/stride-vs-unity-prefabs.png)
![Сборные элементы в Stride](media/stride-vs-unity-prefabs.png)

Just like with Unity®, in Stride, you can add prefabs to other prefabs. These are called **nested prefabs**. If you modify a nested prefab, all the dependent prefabs inherit the change automatically.
Как и в случае с Unity®, в Stride вы можете добавлять префабы к другим префабам.  Они называются **вложенными префабами**.  Если вы измените вложенный префаб, все зависимые префабы автоматически наследуют это изменение.

For example, imagine you create a *Vehicle* prefab with acceleration, braking, steering, and so on. Then you nest the *Vehicle* prefab inside prefabs of different types of vehicles: a taxi, bus,truck, etc. If you adjust a property in the *Vehicle* prefab, the changes are inherited by all other prefabs. For example, if you increase the Acceleration property in the *Vehicle* prefab, the acceleration property in the taxi, bus and truck prefabs also increase.
Например, представьте, что вы создаете префаб *Автомобиль* с ускорением, торможением, рулевым управлением и так далее.  Затем вы вкладываете префаб *Транспортное средство* в префабы разных типов транспортных средств: такси, автобус, грузовик и т. д. Если вы настраиваете свойство в префабе *Транспортное средство*, изменения наследуются всеми другими префабами.  Например, если вы увеличиваете свойство Acceleration в префабе *Vehicle*, свойство ускорения в префабах такси, автобусов и грузовиков также увеличивается.

For more information about using prefabs in Stride, see [Prefabs](../game-studio/prefabs/index.md).
Для получения дополнительной информации об использовании префабов в Stride см. [Префабы](../game-studio/prefabs/index.md).

## Archetypes
## Архетипы

**Archetypes** are master assets that control the properties of assets you **derive** from them. Derived assets are useful when you want to create a "remixed" version of an asset. This is similar to prefabs. 
**Архетипы** – это основные активы, управляющие свойствами активов, которые вы **извлекаете** из них.  Производные активы полезны, когда вы хотите создать «переработанную» версию актива.  Это похоже на префабы.

For example, imagine we have three sphere entities that share a material asset named *Metal*. Now imagine we want to change the color of only *one* sphere, but keep its other properties the same. We could duplicate the material asset, change its color, and then apply the new asset to only one sphere. But if we later want to change a different property across *all* the spheres, we have to modify both assets. This is time-consuming and leaves room for mistakes.
Например, представьте, что у нас есть три сферических объекта, которые имеют общий материальный актив с именем *Металл*.  Теперь представьте, что мы хотим изменить цвет только *одной* сферы, но оставить другие ее свойства прежними.  Мы могли бы продублировать материальный актив, изменить его цвет, а затем применить новый актив только к одной сфере.  Но если позже мы захотим изменить другое свойство для *всех* сфер, нам придется изменить оба актива.  Это отнимает много времени и оставляет место для ошибок.

The better approach is to derive a new asset from the archetype. The derived asset inherits properties from the archetype and lets you override individual properties where you need them. For example, we can derive the sphere's material asset and override its color. Then, if we change the gloss of the archetype, the gloss of all three spheres changes.
Лучший подход — получить новый актив из архетипа.  Производный ресурс наследует свойства архетипа и позволяет вам переопределять отдельные свойства там, где они вам нужны.  Например, мы можем получить материальный актив сферы и переопределить ее цвет.  Затем, если мы изменим блеск архетипа, изменится блеск всех трех сфер.

![Create derived asset](../game-studio/media/archetypes-three-spheres.png)
![Создать производный актив](../game-studio/media/archetypes-three-spheres.png)

You can derive an asset from an archetype, then in turn derive another asset from that derived asset. This way you can create different layers of assets to keep your project organized:
Вы можете получить актив из архетипа, а затем, в свою очередь, получить другой актив из этого производного актива.  Таким образом, вы можете создавать различные слои ресурсов, чтобы ваш проект был организован:

```cs
```CS
Archetype
Архетип
    Derived asset
Производный актив
        Derived asset
Производный актив
```
```

For more information about archetypes, see [Archetypes](../game-studio/archetypes.md).
Для получения дополнительной информации об архетипах см. [Архетипы](../game-studio/archetypes.md).

## Input
## Вход

Stride supports a variety of inputs. The code samples below demonstrate the difference in input code between Stride and Unity®.
Stride поддерживает множество входных данных.  Примеры кода ниже демонстрируют разницу во входном коде между Stride и Unity®.

For more information about Input in Stride, see [Input](../input/index.md).
Дополнительные сведения о вводе в Stride см. в разделе [Ввод](../input/index.md).

#### Unity®
#### Юнити®
```cs
```CS
void Update()
пустое обновление ()
{
{
    // true for one frame in which the space bar was pressed
// true для одного кадра, в котором был нажат пробел
    if(Input.GetKeyDown(KeyCode.Space))
если (Input.GetKeyDown (KeyCode.Space))
    {
{
        // Do something.
// Сделай что-нибудь.
    }
}

    // true while this joystick button is down
// true, пока эта кнопка джойстика нажата
    if (Input.GetButton("joystick button 0"))
if (Input.GetButton(
    {
{
        // Do something.
// Сделай что-нибудь.
    }
}

    float Horiz = Input.GetAxis("Horizontal");
float Horiz = Input.GetAxis(
    float Vert = Input.GetAxis("Vertical");
float Vert = Input.GetAxis(
    //Do something else.
// Делаем что-нибудь еще.
}
}
```
```
#### Stride
#### Шаг
```cs
```CS
public override void Update()
публичное переопределение void Update()
{
{
    // true for one frame in which the space bar was pressed
// true для одного кадра, в котором был нажат пробел
    if(Input.IsKeyDown(Keys.Space))
если(Input.IsKeyDown(Keys.Space))
    {
{
        // Do something.
// Сделай что-нибудь.
    }
}

    // true while this joystick button is down
// true, пока эта кнопка джойстика нажата
    if (Input.GameControllers[0].IsButtonDown(0))
если (Input.GameControllers[0].IsButtonDown(0))
    {
{
        // Do something.
// Сделай что-нибудь.
    }
}

    float Horiz = (Input.IsKeyDown(Keys.Left) ? -1f : 0) + (Input.IsKeyDown(Keys.Right) ? 1f : 0);
float Horiz = (Input.IsKeyDown(Keys.Left) ? -1f : 0) + (Input.IsKeyDown(Keys.Right) ? 1f : 0);
    float Vert = (Input.IsKeyDown(Keys.Down) ? -1f : 0) + (Input.IsKeyDown(Keys.Up) ? 1f : 0);
float Vert = (Input.IsKeyDown(Keys.Down)? -1f: 0) + (Input.IsKeyDown(Keys.Up)? 1f: 0);
    //Do something else.
// Делаем что-нибудь еще.
}
}
```
```

## Physics
## Физика

Just like Unity®, Stride has three types of collider:
Как и в Unity®, в Stride есть три типа коллайдеров:

* static colliders
* статические коллайдеры
* rigidbodies
* твердые тела
* characters
* персонажи

They're controlled from scripts in slightly different ways.
Они управляются из скриптов немного по-разному.

### Kinematic rigidbodies
### Кинематические жесткие тела

#### Unity®
#### Юнити®

```cs
```CS
public Rigidbody rigidBody;
публичный Rigidbody RigidBody;
void Start()
пустое начало ()
{
{
    rigidBody = GetComponent<Rigidbody>();
RigidBody = GetComponent<Rigidbody>();
}
}

void EnableRagdoll()
недействительными EnableRagdoll()
{
{
    rigidBody.isKinematic = false;
hardBody.isKinematic = ложь;
    rigidBody.detectCollisions = true;
hardBody.detectCollisions = true;
}
}

void DisableRagdoll()
недействительным DisableRagdoll()
{
{
    rigidBody.isKinematic = true;
hardBody.isKinematic = истина;
    rigidBody.detectCollisions = false;
hardBody.detectCollisions = false;
}
}
```
```

#### Stride
#### Шаг

```cs
```CS
public class KinematicX : SyncScript
открытый класс KinematicX: SyncScript
{
{
    public RigidbodyComponent component;
общедоступный компонент RigidbodyComponent;

    public override void Start()
публичное переопределение void Start()
    {
{
        // Initialization of the script.
// Инициализация скрипта.
        component = Entity.Get<RigidbodyComponent>();
компонент = Entity.Get<RigidbodyComponent>();
    }
}

    public override void Update()
публичное переопределение void Update()
    {
{
    }
}

    public void EnableRagdoll()
public void EnableRagdoll()
    {
{
        component.IsKinematic = false;
компонент.IsKinematic = ложь;
        component.ProcessCollisions = true;
компонент.ProcessCollisions = истина;
    }
}

    public void DisableRagdoll()
public void DisableRagdoll()
    {
{
        component.IsKinematic = true;
компонент.IsKinematic = истина;
        component.ProcessCollisions = false;
компонент.ProcessCollisions = ложь;
    }
}
}
}
```
```

For more information about rigidbodies in Stride, see [Rigidbodies](../physics/rigid-bodies.md).
Для получения дополнительной информации о твердых телах в Stride см. [Rigidbodies](../physics/rigid-bodies.md).

### Triggers
### Триггеры

#### Unity®
#### Юнити®

```cs
```CS
// When game object collides with the trigger.
// Когда игровой объект сталкивается с триггером.
void OnTriggerEnter(Collider Other)
void OnTriggerEnter (другой коллайдер)
{
{
    Other.transform.localScale = new Vector3(2.0f, 2.0f, 2.0f);
Other.transform.localScale = новый Vector3 (2.0f, 2.0f, 2.0f);
}
}

//When game object exits collider space.
//Когда игровой объект покидает пространство коллайдера.
void OnTriggerExit(Collider Other)
void OnTriggerExit (другой коллайдер)
{
{
    Other.transform.localScale = new Vector3(1.0f, 1.0f, 1.0f);
Other.transform.localScale = новый Vector3 (1.0f, 1.0f, 1.0f);
}
}
```
```

#### Stride
#### Шаг

```cs
```CS
var trigger = Entity.Get<PhysicsComponent>();
var trigger = Entity.Get<PhysicsComponent>();
trigger.ProcessCollisions = true;
триггер.ProcessCollisions = истина;

// Start state machine.
// Запустить конечный автомат.
while (Game.IsRunning)
пока (Game.IsRunning)
{
{
    // 1. Wait for an entity to collide with the trigger.
// 1. Подождите, пока объект не столкнется с триггером.
    Collision firstCollision = await trigger.NewCollision();
Столкновение firstCollision = await trigger.NewCollision();

    PhysicsComponent otherCollider = trigger == firstCollision.ColliderA
PhysicsComponent otherCollider = trigger == firstCollision.ColliderA
        ? firstCollision.ColliderB
?  firstCollision.ColliderB
        : firstCollision.ColliderA;
: firstCollision.ColliderA;
    otherCollider.Entity.Transform.Scale = new Vector3(2.0f, 2.0f, 2.0f);
otherCollider.Entity.Transform.Scale = новый Vector3(2.0f, 2.0f, 2.0f);

    // 2. Wait for the entity to exit the trigger.
// 2. Подождите, пока сущность выйдет из триггера.
    Collision collision;
Столкновение столкновение;

    do
делать
    {
{
        collision = await trigger.CollisionEnded();
столкновение = ожидание триггера.CollisionEnded();
    }
}
    while (collision != firstCollision);
в то время как (столкновение != firstCollision);

    otherCollider.Entity.Transform.Scale = new Vector3(1.0f, 1.0f, 1.0f);
otherCollider.Entity.Transform.Scale = новый Vector3(1.0f, 1.0f, 1.0f);
}
}
```
```

For more information about triggers in Stride, see [Triggers](../physics/triggers.md)
Для получения дополнительной информации о триггерах в Stride см. [Триггеры](../physics/triggers.md)

### Raycasting
### Рейкастинг

#### Unity®
#### Юнити®

```cs
```CS
Collider FindGOCameraIsLookingAt()
Коллайдер FindGOCameraIsLookingAt()
{
{
    int distance = 50;
инт расстояние = 50;

    // Cast a ray and set it to the mouse cursor position in the game
// Создаем луч и устанавливаем его на позицию курсора мыши в игре
    Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
хит RaycastHit;
    if (Physics.Raycast(ray, out hit, distance))
if (Physics.Raycast(луч, попадание, расстояние))
    {
{
        // Draw invisible ray cast/vector
// Рисуем невидимый луч/вектор
        Debug.DrawLine(ray.origin, hit.point);
Debug.DrawLine(ray.origin, hit.point);
        // Log hit area to the console
// Записываем область попадания в консоль
        Debug.Log(hit.point);
Debug.Log(хит.точка);
        return hit.collider;
вернуть hit.collider;
    }
}
    return null;
вернуть ноль;
}
}
```
```

#### Stride
#### Шаг

```cs
```CS
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
public static bool ScreenPositionToWorldPositionRaycast (Vector2 screenPos, CameraComponent camera, Simulation Simulation)
{
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);
Матрица invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    Vector3 sPos;
Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;
sPos.Y = 1f - screenPos.Y * 2f;

    sPos.Z = 0f;
sPos.Z = 0f;
    Vector4 vectorNear = Vector3.Transform(sPos, invViewProj);
Vector4 vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;
вектор рядом /= вектор рядом.W;

    sPos.Z = 1f;
sPos.Z = 1f;
    Vector4 vectorFar = Vector3.Transform(sPos, invViewProj);
Vector4 vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;
vectorFar /= vectorFar.W;

    HitResult result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
Результат HitResult = Simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
вернуть результат. Успешно;
}
}
```
```
For more information about Raycasting in Stride, see [Raycasting](../physics/raycasting.md).
Для получения дополнительной информации о Raycasting в Stride см. [Raycasting](../physics/raycasting.md).

## Scripts
## Скрипты

Stride saves scripts in a subfolder in the **MyGame.Game** folder in the project directory. 
Stride сохраняет скрипты в подпапке папки **MyGame.Game** в каталоге проекта.

To open a script in the Game Studio script editor, double-click it in the **Asset View**. The script editor has syntax highlighting, auto-completion, and live diagnostics.
Чтобы открыть сценарий в редакторе сценариев Game Studio, дважды щелкните его в **Asset View**.  Редактор скриптов имеет подсветку синтаксиса, автодополнение и диагностику в реальном времени.

![Stride script editor](media/stride-vs-unity-script-editor.png)
![Редактор сценариев Stride](media/stride-vs-unity-script-editor.png)

You can also edit scripts in other IDEs, such as Visual Studio. When you edit a script in an external IDE, Stride reloads them automatically.
Вы также можете редактировать сценарии в других IDE, таких как Visual Studio.  Когда вы редактируете скрипт во внешней IDE, Stride автоматически перезагружает их.

If you install the Visual Studio plug-in during the Stride installation, you can open your project in Visual Studio from Game Studio. To do this, in the Game Studio toolbar, click **Open in IDE**.
Если вы устанавливаете подключаемый модуль Visual Studio во время установки Stride, вы можете открыть свой проект в Visual Studio из Game Studio.  Для этого на панели инструментов Game Studio нажмите **Открыть в IDE**.

![Open project in Visual Studio](media/stride-vs-unity-open-project-in-visual-studio.png)
![Открыть проект в Visual Studio](media/stride-vs-unity-open-project-in-visual-studio.png)

Alternatively, right-click the script in the **Asset View** and click **Open asset file**:
Либо щелкните правой кнопкой мыши сценарий в **Представлении ресурсов** и выберите **Открыть файл ресурсов**:

![Open asset file](media/stride-vs-unity-open-asset-file.png)
![Открыть файл ресурсов](media/stride-vs-unity-open-asset-file.png)

### Event functions (Start, Update, Execute, etc)
### Функции событий (запуск, обновление, выполнение и т. д.)

In Unity®, you work with MonoBehaviours with Start(), Update(), and other methods.
В Unity® вы работаете с MonoBehaviours с помощью методов Start(), Update() и других.

Instead of MonoBehaviours, Stride has three types of scripts: SyncScript, AsyncScript, StartupScript. For more information, see [Types of script](../scripts/types-of-script.md).
Вместо MonoBehaviours в Stride есть три типа скриптов: SyncScript, AsyncScript, StartupScript.  Для получения дополнительной информации см. [Типы скриптов](../scripts/types-of-script.md).

### Unity® MonoBehaviour
### Unity® MonoBehavior

```cs
```CS
public class BasicMethods : MonoBehaviour
открытый класс BasicMethods: MonoBehaviour
{
{
    void Start() { }
недействительный Старт () { }
    void OnDestroy() { }
недействительным OnDestroy () { }
    void Update() { }
пустое обновление () { }
}
}
```
```

### Stride SyncScript
### Шаг SyncScript

```cs
```CS
public class BasicMethods : SyncScript
открытый класс BasicMethods: SyncScript
{
{
    public override void Start() { }
публичное переопределение void Start() { }
    public override void Cancel() { }        
публичное переопределение void Cancel() { }
    public override void Update() { }
публичное переопределение void Update() { }
}
}
```
```

### Stride AsyncScript
### Шаг AsyncScript

```cs
```CS
public class BasicMethods : AsyncScript
открытый класс BasicMethods: AsyncScript
{
{
    // Declared public member fields and properties that will appear in the game studio
// Объявлены публичные поля-члены и свойства, которые появятся в игровой студии
    public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
    {
{
        while(Game.IsRunning)
в то время как (Game.IsRunning)
        {
{
            // Do stuff every new frame
// Делаем что-то в каждом новом кадре
            await Script.NextFrame();
ожидайте Script.NextFrame();
        }
}
    }
}

    public override void Cancel()
публичное переопределение void Cancel()
    {
{
        // Cleanup of the script
// Очистка скрипта
    }     
}
}
}
```
```

### Stride StartupScript
### Страйд StartupScript

```cs
```CS
public class BasicMethods : StartupScript
открытый класс BasicMethods: StartupScript
{
{
    // Declared public member fields and properties that will appear in the game studio
// Объявлены публичные поля-члены и свойства, которые появятся в игровой студии
    public override void Start()
публичное переопределение void Start()
    {
{
        // Initialization of the script
// Инициализация скрипта
    }
}

    public override void Cancel()
публичное переопределение void Cancel()
    {
{
        // Cleanup of the script
// Очистка скрипта
    }     
}
}
}
```
```

## Script components
## Компоненты скрипта

Like Unity®, in Stride, you attach scripts to entities by adding them as script components.
Как и в Unity®, в Stride вы прикрепляете сценарии к объектам, добавляя их как компоненты сценариев.

### Create a script
### Создать скрипт

To create a script, click **Add asset** button and select **Scripts**.
Чтобы создать скрипт, нажмите кнопку **Добавить ресурс** и выберите **Скрипты**.

![Create script in Stride](media/stride-vs-unity-create-script.png)
![Создать скрипт в Stride](media/stride-vs-unity-create-script.png)

In Unity®, when you create a `MonoBehaviour` script, it has two base functions: `Start()` and `Update()`. Stride has a [SyncScript](xref:Stride.Engine.SyncScript) that works similarly. Like `MonoBehaviour`, [SyncScript](xref:Stride.Engine.SyncScript) has two methods:
В Unity®, когда вы создаете скрипт `MonoBehaviour`, у него есть две базовые функции: `Start()` и `Update()`.  У Stride есть [SyncScript](xref:Stride.Engine.SyncScript), который работает аналогичным образом.  Как и `MonoBehaviour`, [SyncScript](xref:Stride.Engine.SyncScript) имеет два метода:

* [Start()](xref:Stride.Engine.StartupScript.Start) is called when it the script is loaded.
* [Start()](xref:Stride.Engine.StartupScript.Start) вызывается при загрузке скрипта.

* [Update()](xref:Stride.Engine.SyncScript.Update) is called every update.
* [Update()](xref:Stride.Engine.SyncScript.Update) вызывается при каждом обновлении.

Unlike `MonoBehaviour`, you have to use [Update()](xref:Stride.Engine.SyncScript.Update) method in every [SyncScript](xref:Stride.Engine.SyncScript), or your code won't work properly.
В отличие от `MonoBehaviour`, вы должны использовать метод [Update()](xref:Stride.Engine.SyncScript.Update) в каждом [SyncScript](xref:Stride.Engine.SyncScript), иначе ваш код не будет работать должным образом.

If you want your script to be a startup or asynchronous, use the corresponding script types:
Если вы хотите, чтобы ваш скрипт был стартовым или асинхронным, используйте соответствующие типы скриптов:

* [StartupScript](xref:Stride.Engine.StartupScript): this script has a single [Start()](xref:Stride.Engine.StartupScript.Start) method. It initializes the scene and its content at startup.
* [StartupScript](xref:Stride.Engine.StartupScript): этот скрипт имеет единственный метод [Start()](xref:Stride.Engine.StartupScript.Start).  Он инициализирует сцену и ее содержимое при запуске.

* [AsyncScript](xref:Stride.Engine.AsyncScript): an asynchronous script with a single method [Execute()](xref:Stride.Engine.AsyncScript.Execute) and you can use async/await inside that method. Asynchronous scripts aren't loaded one by one like synchronous scripts. Instead, they're all loaded in parallel.
* [AsyncScript](xref:Stride.Engine.AsyncScript): асинхронный скрипт с одним методом [Execute()](xref:Stride.Engine.AsyncScript.Execute), внутри которого можно использовать async/await.  Асинхронные скрипты не загружаются один за другим, как синхронные скрипты.  Вместо этого все они загружаются параллельно.

### Reload assemblies
### Перезагрузить сборки

Unlike Unity®, after you create a script, you have to reload the assemblies manually. To do this, click **Reload assemblies** in the Game Studio toolbar.
В отличие от Unity®, после создания скрипта вам придется перезагружать сборки вручную.  Для этого нажмите **Перезагрузить сборки** на панели инструментов Game Studio.

![Reload assemblies](../platforms/media/reload-assemblies.png)
![Перезагрузить сборки](../platforms/media/reload-assemblies.png)

### Add scripts to entities
### Добавление скриптов к сущностям

1. In the **Entity Tree** (on the left by default), or in the scene, select the entity you want to add the script to.
1. В **Дереве сущностей** (по умолчанию слева) или в сцене выберите сущность, к которой вы хотите добавить скрипт.

    ![Select an entity](../scripts/media/select-entity.png)
![Выберите объект](../scripts/media/select-entity.png)

2. In the **Property Grid** (on the right by default), click **Add component** and select the script you want to add.
2. В **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите скрипт, который хотите добавить.

![Add script component](../scripts/media/add-script-component.png)
![Добавить компонент скрипта](../scripts/media/add-script-component.png)

In Unity®, script components are grouped under **Components > Scripts**. In Stride, scripts are not grouped. Instead, Game Studio lists them alphabetically with other components.
В Unity® компоненты сценариев сгруппированы в разделе **Компоненты > Сценарии**.  В Stride скрипты не группируются.  Вместо этого Game Studio перечисляет их в алфавитном порядке с другими компонентами.

For more information about adding scripts in Stride, see [Use a script](../scripts/use-a-script.md).
Для получения дополнительной информации о добавлении скриптов в Stride см. [Использование скрипта](../scripts/use-a-script.md).

## Scripting gameplay
## Скриптовый геймплей

Unity® and Stride both use C#. However, scripting gameplay in Stride is a little different from Unity®.
Unity® и Stride используют C#.  Однако создание сценариев игрового процесса в Stride немного отличается от Unity®.

### Instantiate Entity / GameObject
### Создать сущность/игровой объект

In Unity®, you use `Instantiate` to create new object instances. This function makes a copy of `UnityEngine.Object` and spawns it to the scene.
В Unity® вы используете `Instantiate` для создания новых экземпляров объекта.  Эта функция создает копию UnityEngine.Object и порождает ее на сцене.

#### Unity®
#### Юнити®

```cs
```CS
public GameObject CarPrefab;
публичный GameObject CarPrefab;
public Vector3 SpawnPosition;
публичный Vector3 SpawnPosition;
public Quaternion SpawnRotation;
публичный кватернион SpawnRotation;

void Start()
пустое начало ()
{
{
    GameObject NewGO = (GameObject)Instantiate(CarPrefab, SpawnPosition, SpawnRotation);
GameObject NewGO = (GameObject)Instantiate(CarPrefab, SpawnPosition, SpawnRotation);
    NewGO.name = "NewGameObject1";
NewGO.name = 
}
}
```
```

#### Stride
#### Шаг

In Stride, you can instantiate **Entities** similarly to Unity® GameObjects:
В Stride вы можете создавать экземпляры **Entities** аналогично Unity® GameObjects:

```cs
```CS
// Declared public member fields and properties displayed in the Game Studio Property Grid.
// Объявленные общедоступные поля-члены и свойства, отображаемые в сетке свойств Game Studio.
public Prefab CarPrefab;
общественное сборное производство CarPrefab;
public Vector3 SpawnPosition;
публичный Vector3 SpawnPosition;
public Quaternion SpawnRotation;
публичный кватернион SpawnRotation;

public override void Start()
публичное переопределение void Start()
{
{
    // Initialization of the script.
// Инициализация скрипта.
    List<Entity> car = CarPrefab.Instantiate();
List<Entity> car = CarPrefab.Instantiate();
    SceneSystem.SceneInstance.RootScene.Entities.AddRange(car);
SceneSystem.SceneInstance.RootScene.Entities.AddRange(car);
    car[0].Transform.Position = SpawnPosition;
car[0].Transform.Position = SpawnPosition;
    car[0].Transform.Rotation = SpawnRotation;
car[0].Transform.Rotation = SpawnRotation;
    car[0].Name = "MyNewEntity";
car[0].Name = 
}
}
```
```

### Use default values
### Использовать значения по умолчанию

Each class in Unity® has certain default values. If you don't override these properties in the script, the default values will be used. This works the same in Stride:
Каждый класс в Unity® имеет определенные значения по умолчанию.  Если вы не переопределите эти свойства в скрипте, будут использоваться значения по умолчанию.  То же самое работает и в Stride:

#### Unity®
#### Юнити®

```cs
```CS
public int NewProp = 30;
публичный интервал NewProp = 30;
public Light MyLightComp = null;
публичный свет MyLightComp = null;

void Start()
пустое начало ()
{
{
    // Create the light component if we don't already have one.
// Создадим компонент освещения, если у нас его еще нет.
    if (MyLightComp == null)
если (MyLightComp == ноль)
    {
{
        MyLightComp = gameObject.AddComponent<Light>();
MyLightComp = gameObject.AddComponent<Light>();
        MyLightComp.intensity = 3;
MyLightComp.intensity = 3;
    }
}
}
}
```
```

#### Stride
#### Шаг

```cs
```CS
// Declared public member fields and properties displayed in the Game Studio Property Grid.
// Объявленные общедоступные поля-члены и свойства, отображаемые в сетке свойств Game Studio.
public int NewProp = 30;
публичный интервал NewProp = 30;
public LightComponent MyLightComponent = null;
общедоступный LightComponent MyLightComponent = null;

public override void Start()
публичное переопределение void Start()
{
{
    // Create the light component if we don't already have one.
// Создадим компонент освещения, если у нас его еще нет.
    if (MyLightComponent == null)
если (MyLightComponent == ноль)
    {
{
        MyLightComponent = new LightComponent();
MyLightComponent = новый LightComponent();
        MyLightComponent.Intensity = 3;
MyLightComponent.Intensity = 3;
        Entity.Add(MyLightComponent);
Сущность.Добавить(MyLightComponent);
    }
}
}
}
```
```

### Disable GameObject/entity
### Отключить GameObject/entity

#### Unity®
#### Юнити®

```cs
```CS
MyGameObject.SetActive(false);
MyGameObject.SetActive(false);
```
```

#### Stride
#### Шаг

```cs
```CS
Entity.EnableAll(false, true);
Entity.EnableAll (ложь, истина);
```
```

### Access component from GameObject/entity
### Доступ к компоненту из GameObject/entity

#### Unity®
#### Юнити®

```cs
```CS
Light lightComponent = GetComponent<Light>();
Свет lightComponent = GetComponent<Light>();
```
```

#### Stride
#### Шаг

```cs
```CS
LightComponent lightComponent = Entity.Get<LightComponent>();
LightComponent lightComponent = Entity.Get<LightComponent>();
```
```

### Access GameObject/entity  from component
### Доступ к игровому объекту/сущности из компонента

#### Unity®
#### Юнити®

```cs
```CS
GameObject ParentGO = lightComponent.gameObject;
GameObject ParentGO = lightComponent.gameObject;
```
```

#### Stride
#### Шаг

```cs
```CS
Entity ParentEntity = lightComponent.Entity;
Entity ParentEntity = lightComponent.Entity;
```
```

## Log output
## Вывод журнала

To see the output, in the Game Studio toolbar, under **View**, enable **Output**.
Чтобы увидеть вывод, на панели инструментов Game Studio в разделе **Вид** включите **Вывод**.

![Enable output](media/enable-output.png)
![Включить вывод](media/enable-output.png)

Game Studio displays in the **Output** tab (at the bottom of Game Studio by default).
Game Studio отображается на вкладке **Вывод** (по умолчанию в нижней части Game Studio).

![Output tab](media/output-tab.png) 
![Вкладка вывода](media/output-tab.png)


### Print debug messages
### Печатать отладочные сообщения

To print to the Visual Studio output, use:
Чтобы распечатать вывод Visual Studio, используйте:

```cs
```CS
System.Diagnostics.Debug.WriteLine("hello");
System.Diagnostics.Debug.WriteLine(
```
```

>[!Note]
>[!Примечание]
>To print debug messages, you have to run the game from Visual Studio, not Game Studio. There's no way to print to the Game Studio output window.
>Чтобы распечатать отладочные сообщения, вам нужно запустить игру из Visual Studio, а не из Game Studio.  Нет возможности печатать в окно вывода Game Studio.

---
---

Unity® is a trademark of Unity Technologies.
Unity® является товарным знаком Unity Technologies.
