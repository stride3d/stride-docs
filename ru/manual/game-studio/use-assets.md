# Use assets
# Использовать активы

<span class="label label-doc-level">Beginner</span>
<span class=

There are four ways to use assets:
Существует четыре способа использования активов:

* reference them in entity components
* ссылаться на них в компонентах сущности
* reference them in other assets
* ссылаться на них в других активах
* load them from code as content
* загружать их из кода как контент
* load them from code as content using `UrlReference`
* загружать их из кода как содержимое, используя `UrlReference`

## Reference assets in components
## Ссылочные активы в компонентах

Many kinds of component use assets. For example, model components use model assets.
Многие виды компонентов используют активы.  Например, компоненты модели используют активы модели.

Components that use assets have **asset docks** in the **property grid**.
Компоненты, использующие активы, имеют **доки активов** в **сетке свойств**.

![Select an asset](media/use-assets-asset-picker-dock.png)
![Выберите ресурс](media/use-assets-asset-picker-dock.png)

To add an asset to an entity component, drag the asset to the asset dock in the component properties (in the **property grid**). You can drop assets in the text field or the empty thumbnail.
Чтобы добавить актив в компонент сущности, перетащите актив в док-станцию ​​​​актива в свойствах компонента (в **сетке свойств**).  Вы можете перетаскивать активы в текстовое поле или пустую миниатюру.

![Drag and drop an asset](media/use-assets-drag-and-drop.png)
![Перетащите ресурс](media/use-assets-drag-and-drop.png)

Alternatively, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
Либо нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите актив**).

![Select an asset](media/use-assets-asset-picker.png)
![Выберите ресурс](media/use-assets-asset-picker.png)

The **Select an asset** window opens.
Откроется окно **Выберите объект**.

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> The **Select an asset** window only displays assets of types expected by the component. For example, if the component is an audio listener, the window only displays audio assets.
> Окно **Выберите актив** отображает активы только типов, ожидаемых компонентом.  Например, если компонент является прослушивателем аудио, в окне отображаются только аудиоактивы.

After you add an asset to a component, the asset dock displays its name and a thumbnail image.
После добавления ресурса к компоненту в доке ресурсов отображается его имя и эскиз.

![Asset displayed](media/asset-displayed.png)
![Отображаемый ресурс](media/asset-displayed.png)

## Reference assets in other assets
## Ссылочные активы в других активах

Assets can reference other assets. For example, a model asset might use material assets.
Активы могут ссылаться на другие активы.  Например, модельный актив может использовать материальные активы.

You can add asset references to assets the same way you add them to entity components (see above).
Вы можете добавлять ссылки на активы в активы так же, как вы добавляете их в компоненты сущности (см. выше).

## Clear a reference
## Очистить ссылку

To clear a reference to an asset, in the **asset dock**, click ![eraser](media/use-assets-eraser.png) (**Clear reference**).
Чтобы удалить ссылку на ресурс, в **доке ресурсов** нажмите ![ластик](media/use-assets-eraser.png) (**Удалить ссылку**).

![Use eraser](media/use-eraser.png)
![Использовать ластик](media/use-eraser.png)

## Examine references
## Проверить ссылки

You can see the references in a selected asset in the **References** tab. By default, this is in the bottom right of Game Studio.
Вы можете увидеть ссылки в выбранном ресурсе на вкладке **References**.  По умолчанию это находится в правом нижнем углу Game Studio.

![References tab](media/use-assets-references-tab.png)
![Вкладка «Ссылки»](media/use-assets-references-tab.png)

* The **References** tab displays the assets referenced by the selected asset.
* На вкладке **Ссылки** отображаются ресурсы, на которые ссылается выбранный ресурс.
* The **Referenced by** tab displays the assets that reference the selected asset.
* На вкладке **Ссылка на** отображаются активы, которые ссылаются на выбранный актив.

> [!Tip]
> [!Подсказка]
> If you can't see the References tab, make sure it's displayed under **View > References**.
> Если вы не видите вкладку «Ссылки», убедитесь, что она отображается в разделе **Вид > Ссылки**.

## Load assets from code
## Загрузить активы из кода

When loading in assets at runtime we speak of "Content" rather than assets. The loaded content refers to the asset and can then be used in your script.
При загрузке активов во время выполнения мы говорим о «контенте», а не об активах.  Загруженный контент относится к ресурсу и затем может использоваться в вашем скрипте.

```cs
```CS
// Load a model (replace URL with valid URL)
// Загрузите модель (замените URL-адрес действительным URL-адресом)
var model = Content.Load<Model>("AssetFolder/MyModel");
var model = Content.Load<Model>(

// Create a new entity to add to the scene
// Создаем новый объект для добавления на сцену
Entity entity = new Entity(position, "Entity Added by Script") { new ModelComponent { Model = model } };
Entity entity = new Entity(position, 

// Add a new entity to the scene
// Добавляем новый объект на сцену
SceneSystem.SceneInstance.RootScene.Entities.Add(entity);
SceneSystem.SceneInstance.RootScene.Entities.Add(entity);
```
```

> [!TIP]
> [!СОВЕТ]
> To find the asset URL, in Game Studio, move the mouse over the asset. Game Studio displays the asset URL in a tooltip.  URLs typically have the format *AssetFolder/AssetName*.
> Чтобы найти URL-адрес ресурса, в Game Studio наведите указатель мыши на ресурс.  Game Studio отображает URL-адрес актива во всплывающей подсказке.  URL-адреса обычно имеют формат *AssetFolder/AssetName*.
> [!WARNING]
> [!ВНИМАНИЕ]
> When loading assets from scripts, make sure you:
> При загрузке ресурсов из скриптов убедитесь, что вы:
>
>
> * include the asset in the build as described in [Manage assets](manage-assets.md)
> * включить актив в сборку, как описано в разделе [Управление активами](manage-assets.md)
> * make sure you add the script as a component to an entity in the scene
> * убедитесь, что вы добавили скрипт в качестве компонента объекта в сцене

### Unload unneeded assets
### Выгрузить ненужные активы

When loading content from code, you should unload content when you don't need them any more. If you don't, content stays in memory, wasting GPU.
При загрузке контента из кода вы должны выгружать контент, когда он вам больше не нужен.  Если вы этого не сделаете, контент останется в памяти, тратя ресурсы графического процессора.

To do unload an asset, use ``Content.Unload(myAsset)``.
Чтобы выгрузить актив, используйте ``Content.Unload(myAsset)``.

## Load assets from code using UrlReference
## Загрузите активы из кода, используя UrlReference

`UrlReference` allows you to reference assets in your scripts the same way you would with normal assets but they are loaded dynamically in code. Referencing an asset with a `UrlReference` causes the asset to be included in the build.
`UrlReference` позволяет вам ссылаться на активы в ваших сценариях так же, как и на обычные активы, но они загружаются динамически в коде.  Ссылка на ресурс с помощью `UrlReference` приводит к тому, что ресурс включается в сборку.

You can reference assets in your scripts using properties/fields of type `UrlReference` or `UrlReference<T>`:
Вы можете ссылаться на активы в своих сценариях, используя свойства/поля типа `UrlReference` или `UrlReference<T>`:

* `UrlReference` can be used to reference any asset. This is most useful for the "Raw asset".
* `UrlReference` можно использовать для ссылки на любой ресурс.  Это наиболее полезно для «Необработанного актива».
* `UrlReference<T>` can be used to specify the desired type. i.e. `UrlReference<Scene>`. This gives Game Studio a hint about what type of asset this `UrlReference` can be used for.
* `UrlReference<T>` можно использовать для указания желаемого типа.  то есть `UrlReference<Scene>`.  Это дает Game Studio подсказку о том, для какого типа ресурса можно использовать этот `UrlReference`.

## Examples
## Примеры

### Loading a Scene
### Загрузка сцены

Using `UrlReference<Scene>` to load the next scene.
Использование `UrlReference<Scene>` для загрузки следующей сцены.

```cs
```CS
using System.Threading.Tasks;
использование System.Threading.Tasks;
//Include the Stride.Core.Serialization namespace to use UrlReference
// Включите пространство имен Stride.Core.Serialization для использования UrlReference
using Stride.Core.Serialization;
использование Stride.Core.Serialization;
using Stride.Engine;
с помощью Stride.Engine;

namespace Examples
Примеры пространств имен
{
{
    public class UrlReferenceExample : AsyncScript
открытый класс UrlReferenceExample: AsyncScript
    {
{
        public UrlReference<Scene> NextSceneUrl { get; set; }
public UrlReference<Scene> NextSceneUrl { get;  установлен;  }

        public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
        {
{
            //...
//...
        }
}

        private async Task LoadNextScene()
частная асинхронная задача LoadNextScene()
        {
{
            //Dynamically load next scene asynchronously
//Динамически загружаем следующую сцену асинхронно
            var nextScene = await Content.LoadAsync(NextSceneUrl);
var nextScene = await Content.LoadAsync(NextSceneUrl);
            SceneSystem.SceneInstance.RootScene = nextScene;
SceneSystem.SceneInstance.RootScene = следующая сцена;
        }
}
    }
}
}
}
```
```

### Load data from a Raw asset JSON file
### Загрузить данные из JSON-файла Raw-ресурса

Use a Raw asset to store data in a JSON file and load using [Newtonsoft.Json](https://www.newtonsoft.com/json). To use `Newtonsoft.Json` you also need to add the `Newtonsoft.Json` NuGet package to the project.
Используйте ресурс Raw для хранения данных в файле JSON и загрузки с помощью [Newtonsoft.Json](https://www.newtonsoft.com/json).  Чтобы использовать Newtonsoft.Json, вам также необходимо добавить в проект NuGet-пакет Newtonsoft.Json.

```cs
```CS
//Include the Newtonsoft.Json namespace.
// Включите пространство имен Newtonsoft.Json.
using Newtonsoft.Json;
с помощью Newtonsoft.Json;
using System.IO;
с помощью System.IO;
using System.Threading.Tasks;
использование System.Threading.Tasks;
//Include the Stride.Core.Serialization namespace to use UrlReference
// Включите пространство имен Stride.Core.Serialization для использования UrlReference
using Stride.Core.Serialization;
использование Stride.Core.Serialization;
using Stride.Engine;
с помощью Stride.Engine;

namespace Examples
Примеры пространств имен
{
{
    public class UrlReferenceExample : AsyncScript
открытый класс UrlReferenceExample: AsyncScript
    {
{
        public UrlReference RawAssetUrl { get; set; }
публичный URL-адрес RawAssetUrl { получить;  установлен;  }

        public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
        {
{
            //...
//...
        }
}

        private async Task<MyDataClass> LoadMyData()
частная асинхронная задача<MyDataClass> LoadMyData()
        {
{
            //Open a StreamReader to read the content
//Открываем StreamReader для чтения содержимого
            using (var stream = Content.OpenAsStream(RawAssetUrl))
используя (var stream = Content.OpenAsStream(RawAssetUrl))
            using (var streamReader = new StreamReader(stream))
используя (var streamReader = новый StreamReader(поток))
            {
{
                //read the raw asset content
// читаем необработанное содержимое ассета
                string json = await streamReader.ReadToEndAsync();
строка json = ожидание streamReader.ReadToEndAsync();
                //Deserialize the JSON to your custom MyDataClass Type.
//Десериализуйте JSON в свой собственный тип MyDataClass.
                return JsonConvert.DeserializeObject<MyDataClass>(json);
вернуть JsonConvert.DeserializeObject<MyDataClass>(json);
            }
}
        }
}
    }
}
}
}
```
```

## See also
## Смотрите также

* [Create assets](create-assets.md)
* [Создать активы](create-assets.md)
* [Manage assets](manage-assets.md)
* [Управление активами](manage-assets.md)
