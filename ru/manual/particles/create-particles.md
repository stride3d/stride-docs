# Create particles
# Создаем частицы

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

To create a particle system, right-click the scene or Entity Tree, select **Particle System**, and choose a preset (**Empty**, **Simple**, **Fountain**, or **Ribbon**).
Чтобы создать систему частиц, щелкните правой кнопкой мыши сцену или дерево объектов, выберите **Система частиц** и выберите предустановку (**Пустой**, **Простой**, **Фонтан** или **Лента).  **).

![media/particles-reference-editor-1.png](media/particles-reference-editor-1.png)
![media/particles-reference-editor-1.png](media/particles-reference-editor-1.png)

Game Studio creates an entity with a **Transform** component and a **Particle System** component with your chosen preset. Particle entities are represented with a flame icon.
Game Studio создает объект с компонентом **Transform** и компонентом **Particle System** с выбранным вами пресетом.  Объекты частиц представлены значком пламени.

![media/particles-reference-editor-2.png](media/particles-reference-editor-2.png) 
![media/particles-reference-editor-2.png](media/particles-reference-editor-2.png)

Alternatively, you can add a particle component to an existing entity. With the entity selected, in the **Property Grid**, click **Add component** and select **Particle System**.
Кроме того, вы можете добавить компонент частицы к существующему объекту.  Выбрав объект, в **Сетке свойств** нажмите **Добавить компонент** и выберите **Система частиц**.

![Add Particle System](tutorials/media/add-particle-system.png)
![Добавить систему частиц](tutorials/media/add-particle-system.png)

Game Studio adds an empty particle system to the entity.
Game Studio добавляет к объекту пустую систему частиц.

## Transform component
## Преобразование компонента

All entities have a transform component. Some particle elements ignore some elements of the transform component, such as rotation or scaling. For example, the gravity force shouldn't depend on the rotation of the particle system, and always ignores rotation; however, fountain particle systems inherit the location for the purposes of initial particle velocity.
Все сущности имеют компонент преобразования.  Некоторые элементы частиц игнорируют некоторые элементы компонента преобразования, такие как вращение или масштабирование.  Например, сила гравитации не должна зависеть от вращения системы частиц и всегда игнорирует вращение;  однако системы частиц-фонтанов наследуют местоположение для целей начальной скорости частиц.

Only uniform scaling is supported. If you have a non-uniform scale on the transform component, only the X axis is used.
Поддерживается только равномерное масштабирование.  Если у вас неравномерный масштаб компонента преобразования, используется только ось X.

If you want two particle systems to share a transform component, create two particle system entities and make one a child of the other.
Если вы хотите, чтобы две системы частиц разделяли компонент трансформации, создайте две сущности системы частиц и сделайте одну дочерней для другой.

## Particle component properties
## Свойства компонента частиц

With a particle system entity selected, you can edit its properties in the **Property Grid**, just like any other entity.
Выбрав объект системы частиц, вы можете редактировать его свойства в **Сетке свойств**, как и любой другой объект.

![media/particles-reference-editor-3.png](media/particles-reference-editor-3.png)
![media/particles-reference-editor-3.png](media/particles-reference-editor-3.png)

| Property         | Description |
|  Недвижимость |  Описание |
| ---------------- | -------------
|  ---------------- |  -------------
| Editor control | This changes how Game Studio displays particles while you work on the scene. You can play, pause, and stop the particle system. You can also reset the particle effect at set intervals, which is useful for previewing one-shot effects. The editor controls don't affect how particles are displayed at runtime.
|  Управление редактором |  Это меняет то, как Game Studio отображает частицы во время работы над сценой.  Вы можете воспроизводить, приостанавливать и останавливать систему частиц.  Вы также можете сбросить эффект частиц через заданные промежутки времени, что полезно для предварительного просмотра одноразовых эффектов.  Элементы управления редактора не влияют на то, как частицы отображаются во время выполнения.
| Warm-up time  | If you set the warm-up time to a value greater than 0, the particle appears as if it's already active when it appears. This value is in seconds. For example, if you set the warm-up time to 1, the particle effect appears as if it has already been active for 1 second when it appears. This is useful, for example, if you set a fire effect warm-up time to 0, the fire appears to ignite as soon as it's rendered. If you want the fire to appear as if it's already ignited when it's rendered, increase the warm-up time.
|  Время прогрева |  Если вы установите время прогрева на значение больше 0, частица появится так, как будто она уже активна, когда она появляется.  Это значение в секундах.  Например, если вы установите время прогрева равным 1, эффект частиц появится так, как если бы он уже был активен в течение 1 секунды, когда он появляется.  Это полезно, например, если вы установите время прогрева эффекта огня на 0, огонь загорится, как только он будет визуализирован.  Если вы хотите, чтобы при рендеринге огонь выглядел так, как будто он уже загорелся, увеличьте время прогрева.
| Speed scale  | Controls the speed of the particle effect.
|  Шкала скорости |  Управляет скоростью эффекта частиц.
| Culling AABB | This creates an axis-aligned bounding box (AABB) around the particle effect. If the bounding box isn't in the camera view, Stride doesn't render the particle effect. This is useful for culling and optimization. **Rotated AABB** sets box shape in XYZ co-ordinates. **Uniform AABB** creates a cube of the scale you specify (in [world units](../game-studio/world-units.md)). To view the AABB in the Scene Editor, select **Debug Draw**.
|  Отбраковка AABB |  Это создает выровненную по оси ограничительную рамку (AABB) вокруг эффекта частиц.  Если ограничивающая рамка не находится в поле зрения камеры, Stride не отображает эффект частиц.  Это полезно для отбраковки и оптимизации.  **Повернутый AABB** задает форму прямоугольника в координатах XYZ.  **Uniform AABB** создает куб указанного вами масштаба (в [мировых единицах измерения](../game-studio/world-units.md)).  Чтобы просмотреть AABB в редакторе сцен, выберите **Отладка отрисовки**.
| Emitters | The emitters the particle system contains. The emitters are updated and drawn in the order they appear in the list, and can be re-ordered. For more information, see [Emitters](emitters.md).
|  Излучатели |  Излучатели, которые содержит система частиц.  Эмиттеры обновляются и отображаются в том порядке, в котором они появляются в списке, и их можно изменить.  Для получения дополнительной информации см. [Излучатели](emitters.md).

## See also
## Смотрите также

* [Emitters](emitters.md)
* [Излучатели](emitters.md)
* [Shapes](shapes.md)
* [Фигуры](shapes.md)
* [Materials](materials.md)
* [Материалы](materials.md)
* [Spawners](spawners.md)
* [Спаунеры](spawners.md)
* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)
* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
