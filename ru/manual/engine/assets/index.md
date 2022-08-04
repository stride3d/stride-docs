# Asset manager
# Менеджер активов

>[!Warning]
>[!Предупреждение]
>This section is out of date. For now, you should only use it for reference.
>Этот раздел устарел.  На данный момент вы должны использовать его только для справки.

# Assets
# Ресурсы

After creating your assets in Game Studio, @'Stride.Core.Serialization.Assets.AssetManager' is the class responsible for loading, unloading and saving assets.
После создания ресурсов в Game Studio класс @'Stride.Core.Serialization.Assets.AssetManager' отвечает за загрузку, выгрузку и сохранение ресурсов.

## Creating
## Создание

You usually create assets directly in Game Studio.
Обычно вы создаете активы непосредственно в Game Studio.

Their URL will match the name (including folder) in Game Studio.
Их URL-адрес будет соответствовать имени (включая папку) в Game Studio.

Examples of URLs:
Примеры URL-адресов:

- knight (user imports knight.fbx directly in main asset folder)
- рыцарь (пользователь импортирует knight.fbx непосредственно в папку основного актива)
- level1/room1 (user creates level1 and import room1.fbx inside)
- level1/room1 (пользователь создает level1 и импортирует room1.fbx внутрь)

For more information, see [Assets](../../game-studio/assets.md) for more details.
Дополнительные сведения см. в разделе [Активы](../../game-studio/assets.md).

## Loading
## Загрузка

Loading an asset should be done with the help of @'Stride.Core.Serialization.Assets.AssetManager' class:
Загрузка ассета должна производиться с помощью класса @'Stride.Core.Serialization.Assets.AssetManager':

```cs
```CS
// Load an asset directly from a file:
// Загружаем ассет напрямую из файла:
var texture = Content.Load<Texture>("texture1");
var texture = Content.Load<Texture>(

// Load a Scene asset
// Загружаем ассет сцены
var scene = Content.Load<Scene>("scenes/scene1");
var scene = Content.Load<Scene>(
 
// Load an Entity asset
// Загружаем актив Entity
var entity = Content.Load<Entity>("entity1");
var entity = Content.Load<Entity>(
```
```

Note that loading an asset that has already been loaded only increment the reference counter and do not reload the asset.
Обратите внимание, что загрузка уже загруженного актива только увеличивает счетчик ссылок и не перезагружает актив.

## Unloading
## Выгрузка

Unloading is also done using the AssetManager class:
Выгрузка также осуществляется с помощью класса AssetManager:

```cs
```CS
 Asset.Unload(asset);
Актив.Выгрузить(актив);
```
```


## Asset life time
## Срок службы актива

Asset load and unload are working in pairs. For each call to 'load', a corresponding call to 'unload' is expected. 
Загрузка и выгрузка активов работают парами.  Для каждого вызова load ожидается соответствующий вызов unload.

An asset is actually loaded only during the first call to 'load'. All subsequent calls only result to an asset reference increment.
Ресурс фактически загружается только во время первого вызова load.  Все последующие вызовы приводят только к приращению ссылки на актив.

An asset is actually unload only when the number of call to unload match the number of call the load.
Актив фактически выгружается только тогда, когда количество вызовов для выгрузки совпадает с количеством вызовов для загрузки.

The @'Stride.Core.Serialization.Assets.AssetManager.Get' method returns the reference to a loaded asset but does not increment the asset reference counter.
Метод @'Stride.Core.Serialization.Assets.AssetManager.Get' возвращает ссылку на загруженный ресурс, но не увеличивает счетчик ссылок на ресурс.

```cs
```CS
 var firstReference = Content.Load<Texture>("MyTexture"); // load the asset and increase the reference counter (ref count = 1)
var firstReference = Content.Load<Texture>( // загружаем ассет и увеличиваем счетчик ссылок (счетчик ссылок = 1)
 
// the texture can be used here
// здесь можно использовать текстуру
 
var secondReference = Content.Load<Texture>("MyTexture"); // only increase the reference counter (ref count = 2)
var secondReference = Content.Load<Texture>( // увеличиваем только счетчик ссылок (счетчик ссылок = 2)
 
// the texture can still be used here
// здесь можно использовать текстуру
 
Asset.Unload(firstReference); // decrease the reference counter (ref count = 1)
Актив.Выгрузить (первая ссылка);  // уменьшаем счетчик ссылок (счетчик ссылок = 1)
 
// the texture can still be used here
// здесь можно использовать текстуру
 
Asset.Get<Texture>("MyTexture"); // return the loaded asset without increasing the reference counter (ref count = 1)
Asset.Get<Текстура>( // вернуть загруженный ассет без увеличения счетчика ссылок (счётчик ссылок = 1)
 
// the texture can still be used here
// здесь можно использовать текстуру
Asset.Unload(secondReference); // decrease the reference counter and unload the asset (ref count = 0)
Актив.Выгрузить(вторая ссылка);  // уменьшаем счетчик ссылок и выгружаем ассет (счетчик ссылок = 0)
 
// The texture has been unloaded, it cannot be used here any more.
// Текстура выгружена, ее здесь больше нельзя использовать.
```
```


