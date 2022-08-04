# Edit prefabs
# Редактировать префабы

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

You can edit prefabs in the **Prefab Editor**.
Вы можете редактировать префабы в **редакторе префабов**.

## Open the Prefab Editor ##
## Откройте редактор префабов ##

To open the Prefab Editor from the **Asset View**:
Чтобы открыть Prefab Editor из **Asset View**:

* Right-click the prefab you want to edit and select **Edit asset**:
* Щелкните правой кнопкой мыши префаб, который хотите отредактировать, и выберите **Редактировать актив**:

    ![Right-click prefab](media/edit-prefab-with-edit-asset-button.png)
![Щелкните правой кнопкой мыши префаб](media/edit-prefab-with-edit-asset-button.png)

* Alternatively, double-click the prefab you want to edit:
* Либо дважды щелкните префаб, который вы хотите отредактировать:

    ![Double-click prefab](media/open-prefab-editor.gif)
![Двойной щелчок по префабу](media/open-prefab-editor.gif)

To open the Prefab Editor from the **Scene Editor**, right-click any child of a prefab instance and select **Open prefab in editor**.
Чтобы открыть редактор префабов из **редактора сцен**, щелкните правой кнопкой мыши любой дочерний экземпляр префаба и выберите **Открыть префаб в редакторе**.

![Open prefab in editor](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)
![Открыть префаб в редакторе](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)

## Use the Prefab Editor ##
## Используйте редактор префабов ##

![Edit prefabs](media/prefab-editor.png)
![Редактировать префабы](media/prefab-editor.png)

The Prefab Editor works similarly to the Scene Editor. For example, you can:
Редактор префабов работает аналогично редактору сцен.  Например, вы можете:

* add and delete entities
* добавлять и удалять объекты
* use transformation gizmos to translate, rotate and scale entities
* используйте гизмо преобразования для перевода, вращения и масштабирования объектов
* create parent-child relations between entities
* создавать отношения родитель-потомок между сущностями
* add and modify entity components (scripts, materials, models, animations, etc)
* добавлять и изменять компоненты сущности (скрипты, материалы, модели, анимацию и т. д.)

For more information about managing entities, see [Populate a scene](../add-entities.md).
Для получения дополнительной информации об управлении объектами см. [Заполнение сцены](../add-entities.md).

![Prefab Editor](media/prefab-editor.png)
![Редактор префабов](media/prefab-editor.png)

When you edit a prefab in the Prefab Editor, the changes are applied to the instances of the prefab in the scene in **real time**.
Когда вы редактируете префаб в редакторе префабов, изменения применяются к экземплярам префаба в сцене в **реальном времени**.

This video demonstrates what happens when we make changes to the prefab. The Scene Editor is on the left, and the Prefab Editor on the right:
Это видео демонстрирует, что происходит, когда мы вносим изменения в префаб.  Редактор сцен находится слева, а редактор префабов — справа:

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/edit-prefab-and-update-instances.jpg">
<цикл автоматического воспроизведения видео class=
   <source src="media/edit-prefab-and-update-instances.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## See also
## Смотрите также

* [Prefab index](index.md)
* [Индекс префаба](index.md)
* [Create a prefab](create-a-prefab.md)
* [Создать префаб](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Использовать префабы](use-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
