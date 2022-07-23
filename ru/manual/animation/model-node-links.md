# Связка узлов моделей

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Дизайн</span>

>[!Note]
>В некоторых версиях Stride, **Model node links** называются **Bone links**.

**model node link** компонент прикрепляет сущность к узлу скелета на другой сущности.

Например, представьте, что у вас есть две модели: рыцарь и меч. У персонажа есть анимация на меча. Вы можете использовать узел ссылки модели, чтобы поместить меч в руку рыцаря и прикрепить его к правильному узлу в рыцарском скелете, чтобы меч поворачивается с анимацией рыцаря.

<p>
<video autoplay loop class="responsive-video" poster="../particles/tutorials/media/sword-slash-1.jpg">
   <source src="../particles/tutorials/media/sword-slash-1.mp4" type="video/mp4">
</video>
</p>

## Настройка компонента связи узлов моделей

1. В **Scene Editor**, выберите сущность, которую вы хотите связать с узлом в другой сущности.

2. В **Property Grid**, нажмите **Add component** и выберите **Model node link**.

    ![Добавление компонента](../particles/tutorials/media/add-model-node-link.png)

    Game Studio добавит компонент связи узлов моделей.

    ![Компонент связи узлов моделей](media/model-node-component.png)

    Компонент имеет только два свойства: **Node name** и **Target**.

3. Далее в **Target**, нажмите ![иконку руки](~/manual/game-studio/media/hand-icon.png).

    Откроется **Select an entity** окно.

    ![Выбор сущности из списка](media/select-an-entity-window.png)

4. Выберите модель, с которой вы хотите связать объект, и нажмите **OK**.

    >[!Note]
    >Сущность, к которой вы привязываетесь, должна иметь модель со скелетом, даже если модель не видно во время выполнения.

    >[!Tip]
    >Если вы не указываете модель, Stride свяжите сущность с моделью на родительской сущности.

5. В **Node name**, выберите узел в модели, с которой вы хотите связать сущность.

    ![Выбор узла](media/select-node.png)

    После того, как вы связываете узел, дерево сущностей показывает ссылку синим рядом с именем объекта.
    
    ![Связь узлов моделей](media/model-node-link-sword-added.png)

## Смещение (Offset)

Чтобы добавить смещение в связанную сущность, используйте компонент [TransformComponent](xref:Stride.Engine.TransformComponent).

![Transform](media/transform-component.png)

>[!Note]
>Если вы не хотите добавлять смещение, убедитесь, что все значения установлены на `0,0,0`.

## Смотрите так же

* [Импорт анимации](import-animations.md)
* [Свойства анимации](animation-properties.md)
* [Настройка анимации](set-up-animations.md)
* [Предпросмотр анимации](preview-animations.md)
* [Скрипты анимации](animation-scripts.md)
* [Аддитивная анимация](additive-animation.md)
* [Процедурная анимация](procedural-animation.md)
* [Пользовательские деревья смешивания](custom-blend-trees.md)
* [Связи узлов моделей](model-node-links.md)
* [Пользовательские аттрибуты](custom-attributes.md)

For examples of how model node links are used, see:

* [Particles — Create a trail](../particles/tutorials/create-a-trail.md)
* [Cameras — Animate a camera with a model file](../graphics/cameras/animate-a-camera-with-a-model-file.md)
