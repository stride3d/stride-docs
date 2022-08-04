# Add entities
# Добавляем сущности

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level Designer</span>
<span class=

After you create a scene, you need to add entities to your scene to build your level.
После того, как вы создадите сцену, вам нужно добавить объекты в вашу сцену, чтобы построить свой уровень.

## Create an entity from the Scene Editor
## Создайте объект из редактора сцен

1. Above the **Entity Tree**, click the ![Plus](media/add-entities-to-a-scene-plus-icon.png) icon.
1. Над **Деревом объектов** щелкните значок ![Плюс](media/add-entities-to-a-scene-plus-icon.png).

    The **Create** menu opens:
Откроется меню **Создать**:

   ![Scene Editor Create menu](media/add-entities-to-a-scene-context-menu.png)
![Меню создания редактора сцен](media/add-entities-to-a-scene-context-menu.png)

   Alternatively, right-click the **Entity Tree** or anywhere in the **scene**. If you create an entity in the scene, Game Studio adds an entity in the location you click.
Либо щелкните правой кнопкой мыши **Дерево объектов** или в любом месте **сцены**.  Если вы создаете объект на сцене, Game Studio добавляет объект в то место, где вы щелкаете.

    ![Right-click Entity Tree or scene](media/create-entity-in-scene.png)
![Щелкните правой кнопкой мыши по дереву объектов или сцене](media/create-entity-in-scene.png)

2. Select **Empty entity**, or select an entity template.
2. Выберите **Пустой объект** или выберите шаблон объекта.

   Game Studio adds an entity to the active scene and displays it in the Entity Tree:
Game Studio добавляет объект в активную сцену и отображает его в дереве объектов:

    ![New Entity in MainScen](media/add-entities-to-a-scene-empty-entity.png)
![Новый объект в MainScen](media/add-entities-to-a-scene-empty-entity.png)

>[!Tip]
>[!Подсказка]
>The **active scene** is the scene entities are added to. To set the active scene, **Entity Tree** (left by default), right-click the scene and select **active scene**.
> **активная сцена** — это объекты сцены, в которые добавляются объекты.  Чтобы установить активную сцену, **Дерево сущностей** (по умолчанию слева), щелкните сцену правой кнопкой мыши и выберите **активная сцена**.

> ![Set active scene](media/set-active-scene.png)
> ![Установить активную сцену](media/set-active-scene.png)

> The active scene has no effect on runtime. 
> Активная сцена не влияет на время выполнения.

## Create an entity from an asset
## Создать объект из актива

You can add an entity by dragging and dropping an asset from the **Asset View** to the scene.
Вы можете добавить объект, перетащив его из **Asset View** на сцену.

<video controls autoplay loop height="360" width="480">
<видео управляет циклом автоматического воспроизведения height=
   <source src="media/add-entities-to-scene-drag-and-place-entity.mp4" type="video/mp4">
<source src=
</video>
</видео>

Game Studio automatically creates an entity and adds the required component and reference based on the asset you used. For example, if you drag a model asset to the scene, Game Studio creates an entity with a model component with the model asset as its reference.
Game Studio автоматически создает объект и добавляет необходимый компонент и ссылку на основе используемого вами актива.  Например, если вы перетащите ассет модели на сцену, Game Studio создаст объект с компонентом модели с ассетом модели в качестве ссылки.

> [!NOTE]
> [!ПРИМЕЧАНИЕ]
> You can only create entities by dragging assets with corresponding components. For example, model components use model assets, so can be dragged; animations have no corresponding component, so can't be dragged.
> Вы можете создавать сущности, только перетаскивая активы с соответствующими компонентами.  Например, компоненты модели используют активы модели, поэтому их можно перетаскивать;  анимации не имеют соответствующего компонента, поэтому их нельзя перетаскивать.
   
## Set up a component
## Настроить компонент

**Components** add special properties to entities that define their purpose in your project. For example, you add lights to your scene by adding Light components to entities, add models by adding model components, and so on. An entity with no component has no purpose.
**Компоненты** добавляют специальные свойства объектам, которые определяют их назначение в вашем проекте.  Например, вы добавляете источники света в свою сцену, добавляя компоненты Light к объектам, добавляете модели, добавляя компоненты модели и так далее.  Сущность без компонента не имеет цели.

To add a component to an entity:
Чтобы добавить компонент к объекту:

1. Select the entity.
1. Выберите объект.

2. In the Property Grid, click **Add component**, and add component you want.
2. В таблице свойств щелкните **Добавить компонент** и добавьте нужный компонент.

   ![Add a component in the Property Grid](media/add-entities-to-a-scene-add-model-component.png)
![Добавить компонент в сетку свойств](media/add-entities-to-a-scene-add-model-component.png)

   Game Studio adds the component.
Game Studio добавляет компонент.

   ![New component in Property Grid](media/add-entities-to-a-scene-add-model-component-added.png)
![Новый компонент в сетке свойств](media/add-entities-to-a-scene-add-model-component-added.png)

3. **Set the properties** of your new component.
3. **Задайте свойства** вашего нового компонента.

## Duplicate an entity
## Дублировать сущность

You can duplicate an entity along with all its properties. Duplicating an entity and then modifying the properties of the new entity is often faster than creating an entity from scratch.
Вы можете дублировать объект вместе со всеми его свойствами.  Дублирование объекта и последующее изменение свойств нового объекта часто выполняется быстрее, чем создание объекта с нуля.

1. Select the entity you want to duplicate.
1. Выберите объект, который хотите дублировать.
2. Hold **Ctrl** and move the entity with the mouse.
2. Удерживая **Ctrl**, переместите объект с помощью мыши.

   The entity and all its properties are duplicated.
Сущность и все ее свойства дублируются.
   
	<video controls autoplay loop height="360" width="480">
<видео управляет циклом автоматического воспроизведения height=
	   <source src="../get-started/media/populate-scene-duplicate-entity.mp4" type="video/mp4">
<source src=
	</video>
</видео>

Alternatively, right-click the entity and select **Duplicate selected entities**.
Либо щелкните объект правой кнопкой мыши и выберите **Дублировать выбранные объекты**.

   ![Duplicate selected entities](../get-started/media/duplicate-selected-entities.png)
![Дублировать выбранные объекты](../get-started/media/duplicate-selected-entities.png)

## Rename an entity
## Переименовать сущность

1.	Select the entity and press **F2**.
1. Выберите объект и нажмите **F2**.
2.	Type a name for the entity, and then press **Enter**.
2. Введите имя объекта и нажмите **Ввод**.

   ![Renamed entity in a scene](media/add-entities-to-a-scene-renamed-entity.png)
![Переименованный объект в сцене](media/add-entities-to-a-scene-renamed-entity.png)

## See also
## Смотрите также

* [Manage scenes](manage-scenes.md)
* [Управление сценами](manage-scenes.md)
