# Navigation components
# Компоненты навигации

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Navigation components** allow entities to use [navigation meshes](navigation-meshes.md) to find paths through the scene. Alternatively, if you enable [dynamic navigation](dynamic-navigation.md) in Game Settings, entities can generate their own navigation meshes.
**Компоненты навигации** позволяют объектам использовать [навигационные сетки](navigation-meshes.md) для поиска путей в сцене.  В качестве альтернативы, если вы включите [динамическую навигацию](dynamic-navigation.md) в настройках игры, объекты могут создавать свои собственные навигационные сетки.

# Add a navigation component
# Добавляем компонент навигации

1. Select an entity you want to use navigation.
1. Выберите объект, для которого вы хотите использовать навигацию.

2. In the **Property Grid**, click **Add component** and select **Navigation**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Навигация**.

    ![Add navigation component](media/add-navigation-component.png)
![Добавить компонент навигации](media/add-navigation-component.png)

    Game Studio adds a navigation component to the entity.
Game Studio добавляет к объекту компонент навигации.

3. Under the **Navigation** component properties, next to **Navigation mesh**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):
3. В свойствах компонента **Навигация** рядом с **Сеткой навигации** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс  **):

    ![Select an asset](media/open-asset-picker.png)
![Выберите ресурс](media/open-asset-picker.png)

	The **Select an asset** window opens.
Откроется окно **Выберите объект**.

4. Select the [navigation mesh](navigation-meshes.md) you want the entity to use and click **OK**.
4. Выберите [навигационную сетку](navigation-meshes.md), которую вы хотите использовать для объекта, и нажмите **ОК**.

    ![Choose navigation mesh](media/choose-navigation-mesh.png)
![Выбрать навигационную сетку](media/choose-navigation-mesh.png)

    Alternatively, if you want this entity to navigate dynamically by generating its own navigation mesh, leave the **Navigation mesh** field empty. For more information, see [Dynamic navigation](dynamic-navigation.md).
В качестве альтернативы, если вы хотите, чтобы этот объект динамически перемещался, создавая собственную навигационную сетку, оставьте поле **Навигационная сетка** пустым.  Для получения дополнительной информации см. [Динамическая навигация](dynamic-navigation.md).

5. Under **Group**, select the navigation group the entity should belong to. The entity uses the navigation properties you set in this group.
5. В разделе **Группа** выберите группу навигации, к которой должен принадлежать объект.  Сущность использует свойства навигации, заданные вами в этой группе.

    ![Choose navigation group](media/choose-navigation-group.png)
![Выбрать группу навигации](media/choose-navigation-group.png)

## Use navigation components in scripts
## Используйте компоненты навигации в скриптах

For example:
Например:

```cs
```CS
void Move(Vector3 from, Vector3 to)
void Move (Vector3 из, Vector3 в)
{
{
	var navigationComponent = Entity.Get<NavigationComponent>();
var navigationComponent = Entity.Get<NavigationComponent>();
	List<Vector3> path = new List<Vector3>();
Путь к списку<вектор3> = новый список<вектор3>();
	if(navigationComponent.TryFindPath(from, to, path))
if(navigationComponent.TryFindPath(от, до, путь))
	{
{
		// Follow the points in path
// Следуем точкам пути
	}
}
	else
еще
	{
{
		// A path couldn't be found using this navigation mesh
// Не удалось найти путь с помощью этой навигационной сетки
	}
}
}
}
```
```

For more information, see the [NavigationComponent API documentation](xref:Stride.Navigation.NavigationComponent).
Дополнительные сведения см. в [документации по API NavigationComponent](xref:Stride.Navigation.NavigationComponent).

## See also
## Смотрите также

* [Navigation groups](navigation-groups.md)
* [Группы навигации](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Навигационные сетки](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Ограничивающие рамки навигации](navigation-bounding-boxes.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Динамическая навигация](dynamic-navigation.md)
