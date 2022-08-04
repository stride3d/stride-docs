# Dynamic navigation
# Динамическая навигация

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

If you enable **dynamic navigation**, entities with navigation components don't need a [navigation mesh](navigation-meshes.md) asset. Instead, the entities generate navigation meshes dynamically.
Если вы включите **динамическую навигацию**, объектам с компонентами навигации не нужен ресурс [навигационная сетка](navigation-meshes.md).  Вместо этого объекты динамически генерируют навигационные сетки.

> [!Note]
> [!Примечание]
> Make sure that the scenes you want the entities to navigate dynamically have [navigation bounding boxes](navigation-bounding-boxes.md).
> Убедитесь, что сцены, в которых объекты должны перемещаться динамически, имеют [граничные рамки навигации](navigation-bounding-boxes.md).

## Enable dynamic navigation
## Включить динамическую навигацию

You can enable and disable dynamic navigation in the global [game settings](../game-studio/game-settings.md) asset.
Вы можете включать и отключать динамическую навигацию в глобальном активе [настройки игры](../game-studio/game-settings.md).

1. On the entities you want to navigate dynamically, under the navigation component properties, next to **Navigation mesh**, make sure no navigation mesh is selected.
1. На объектах, по которым вы хотите осуществлять динамическую навигацию, в свойствах компонента навигации рядом с **Сетка навигации** убедитесь, что сетка навигации не выбрана.

    ![No navigation mesh selected](media/no-navigation-mesh-selected.png)
![Навигационная сетка не выбрана](media/no-navigation-mesh-selected.png)

    For more information about the navigation component, see [Navigation components](navigation-components.md).
Для получения дополнительной информации о компоненте навигации см. [Компоненты навигации](navigation-components.md).

2. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets folder**.
2. В **Solution Explorer** (нижняя левая панель по умолчанию) выберите **папку Assets**.

    ![Select Assets folder asset](media/select-asset-folder.png)
![Выберите ресурс папки Assets](media/select-asset-folder.png)

3. In the **Asset View** (the bottom pane by default), select the **Game Settings** asset.
3. В **Просмотре активов** (нижняя панель по умолчанию) выберите ресурс **Настройки игры**.

    ![Select Game Settings asset](media/select-game-settings-asset.png)
![Выберите актив настроек игры](media/select-game-settings-asset.png)

4. In the **Property Grid** (the right-hand pane by default), under **Navigation Settings**, expand **Dynamic navigation mesh**.
4. В **Сетке свойств** (правая панель по умолчанию) в разделе **Настройки навигации** разверните **Динамическая сетка навигации**.

   ![Game settings](media/expand-dynamic-navigation-mesh.png)
![Настройки игры](media/expand-dynamic-navigation-mesh.png)

5. Select the **Enable dynamic navigation** checkbox.
5. Установите флажок **Включить динамическую навигацию**.

    ![Enable dynamic navigation checkbox](media/enable-dynamic-navigation.png)
![Включить динамическую навигацию](media/enable-dynamic-navigation.png)

## Dynamic navigation mesh properties
## Свойства динамической навигационной сетки

| Property                  | Description                                                    
|  Недвижимость |  Описание
|---------------------------|--------------
|---------------------------|---------------
| Enabled                   | Enable dynamic navigation on navigation components that have no assigned navigation mesh
|  Включено |  Включить динамическую навигацию для компонентов навигации, которым не назначена навигационная сетка
| Included collision groups | The collision groups dynamically-generated navigation meshes use. By default, meshes use all collision groups
|  Включенные группы коллизий |  Группы столкновений, которые используют динамически генерируемые навигационные сетки.  По умолчанию сетки используют все группы коллизий.
| Build settings            | Advanced settings for dynamically-generated navigation meshes
|  Настройки сборки |  Расширенные настройки для динамически генерируемых навигационных сеток

## Enable and disable dynamic navigation from a script
## Включить и отключить динамическую навигацию из скрипта

Example code:
Пример кода:

```cs
```CS
// Find and enable the dynamic navigation mesh system
// Находим и включаем систему динамической навигационной сетки
dynamicNavigationMeshSystem = Game.GameSystems.OfType<DynamicNavigationMeshSystem>().FirstOrDefault();
dynamicNavigationMeshSystem = Game.GameSystems.OfType<DynamicNavigationMeshSystem>().FirstOrDefault();
dynamicNavigationMeshSystem.Enabled = true;
dynamicNavigationMeshSystem.Enabled = true;

// This stops the dynamic navigation mesh system from automatically rebuilding in the folowing cases:
// Это останавливает динамическую навигационную сетку от автоматического перестроения в следующих случаях:
//  - loading/Unloading scenes
// - загрузка/выгрузка сцен
//  - adding/removing static collider components
// - добавление/удаление статических компонентов коллайдера
//  - adding/removing navigation mesh bounding boxes
// - добавление/удаление ограничивающих прямоугольников навигационной сетки
dynamicNavigationMeshSystem.AutomaticRebuild = false;
dynamicNavigationMeshSystem.AutomaticRebuild = false;

// ...
// ...

if (/* any condition that should cause the navigation mesh to update (eg open/close door) */)
if (/* любое условие, которое должно привести к обновлению навигационной сетки (например, открыть/закрыть дверь) */)
{
{
	// Start an asynchronous rebuild of the navigation mesh
// Запускаем асинхронную перестройку навигационной сетки
	var rebuildTask = dynamicNavigationMeshSystem.Rebuild();
var rebootTask = dynamicNavigationMeshSystem.Rebuild();
	rebuildTask.ContinueWith((x) =>
перестроитьTask.ContinueWith((x) =>
	{
{
		if (x.Result.Success)
если (x.Результат.Успех)
		{
{
			// The navigation mesh is successfully rebuilt
// Навигационная сетка успешно перестроена
		}
}
	});
});
}
}
```
```

## See also
## Смотрите также

* [Navigation groups](navigation-groups.md)
* [Группы навигации](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Навигационные сетки](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Ограничивающие рамки навигации](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)
* [Компоненты навигации](navigation-components.md)
