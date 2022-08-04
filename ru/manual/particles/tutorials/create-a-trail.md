# Tutorial: Create a trail
# Учебник: создание тропы

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This tutorial demonstrates how to use particles to create a [trail effect](../ribbons-and-trails.md) for a sword swing.
В этом туториале показано, как использовать частицы для создания [эффекта следа](../ribbons-and-trails.md) для взмаха мечом.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-9.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-9.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## 1. Create a project
## 1. Создать проект

1. In the Stride Launcher, click **Start** and select **New Game**.
1. В Stride Launcher нажмите **Пуск** и выберите **Новая игра**.

2. In the **Create a new game** dialog, under Asset Packs, select **Animated Models**. The Animated Models pack contains assets we'll be using in this example. (Note that we'll make our particle effect from scratch.)
2. В диалоговом окне **Создать новую игру** в разделе «Пакеты ресурсов» выберите **Анимированные модели**.  Пакет Animated Models содержит активы, которые мы будем использовать в этом примере.  (Обратите внимание, что мы создадим эффект частиц с нуля.)

    ![Create a new game](media/create-a-new-game.png)
![Создать новую игру](media/create-a-new-game.png)

3. Give the project a name (eg *MyTrailEffect*) and click **OK**. Game Studio loads a simple scene with a few entities.
3. Дайте проекту имя (например, *MyTrailEffect*) и нажмите **ОК**.  Game Studio загружает простую сцену с несколькими объектами.

4. We don't need the **Sphere** entity for this tutorial, so go ahead and delete it (select it and press **Delete**).
4. Нам не нужен объект **Сфера** для этого урока, поэтому удалите его (выберите его и нажмите **Удалить**).

## 2. Set up the models and animation
## 2. Настройте модели и анимацию

1. In the **Asset View**, open the **Models** folder and drag and drop the **mannequinModel** into the scene. The mannequinModel contains a skeleton asset that we'll use for our sword slash animation.
1. В **Asset View** откройте папку **Models** и перетащите **mannequinModel** в сцену.  MannequinModel содержит актив-скелет, который мы будем использовать для анимации удара мечом.

2. With the **mannequinModel** selected, in the **Property Grid**, select **Add component > Animations**. This adds an Animation component to the model.
2. Выбрав **mannequinModel**, в **Сетке свойств** выберите **Добавить компонент > Анимации**.  Это добавляет в модель компонент анимации.

    ![Add Animations](media/add-animation.png)
![Добавить анимацию](media/add-animation.png)

3. Under the **Animations** component, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
3. Под компонентом **Анимации** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    ![Add animation](media/add-new-playing-animation.png)
![Добавить анимацию](media/add-new-playing-animation.png)

4. Type a name for the animation.
4. Введите имя анимации.

5. Next to **Clip**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
5. Рядом с **Клипом** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите актив**).

    ![Select an animation asset](media/select-animation-asset.png)
![Выберите ресурс анимации](media/select-animation-asset.png)

6. Browse to the **Animations** folder, select the **Sword_R animation**, and click **OK**. This is our right-to-left slash animation.
6. Перейдите к папке **Animations**, выберите **анимацию Sword_R** и нажмите **OK**.  Это наша анимация косой черты справа налево.

    ![Select an animation asset](media/select-animation-asset-in-asset-picker.png)
![Выберите ресурс анимации](media/select-animation-asset-in-asset-picker.png)

7. To play the animation at runtime, we need to add an [animation script](../animation/animation-scripts.md). We can use the pre-built **AnimationStart** script. In the **Asset View** (bottom pane by default), click **Add asset** and choose **Script > Animation start**.
7. Чтобы проигрывать анимацию во время выполнения, нам нужно добавить [сценарий анимации](../animation/animation-scripts.md).  Мы можем использовать готовый скрипт **AnimationStart**.  В **Представлении ресурсов** (нижняя панель по умолчанию) нажмите **Добавить объект** и выберите **Сценарий > Запуск анимации**.

    ![Add animation script](../../animation/media/animations-additive-animations-animation-start.png)
![Добавить сценарий анимации](../../animation/media/animations-additive-animations-animation-start.png)

8. Specify a name for the script and click **Create script**.
8. Укажите имя сценария и нажмите **Создать сценарий**.

    ![Create script](../../animation/media/name-animation-script.png)
![Создать сценарий](../../animation/media/name-animation-script.png)

    9a. If Game Studio asks if you want to save your script, click **Save script**.
9а.  Если Game Studio спросит, хотите ли вы сохранить сценарий, нажмите **Сохранить сценарий**.

    9b. If Game Studio asks if you want to reload the assemblies, click **Reload assemblies**.
9б.  Если Game Studio спросит, хотите ли вы перезагрузить сборки, нажмите **Перезагрузить сборки**.

9. With the **mannequinModel** selected, in the **Property Grid**, click **Add component** and select the **AnimationStart** script.
9. Выбрав **mannequinModel**, в **Сетке свойств** нажмите **Добавить компонент** и выберите сценарий **AnimationStart**.

    ![Add AnimationStart script](../../animation/media/select-animation-start.png)
![Добавить скрипт AnimationStart](../../animation/media/select-animation-start.png)

    >[!Note]
>[!Примечание]
    >If the animation script isn't in the list of components, in the taskbar, save your project and click **Reload game assemblies and update scripts**.
>Если скрипта анимации нет в списке компонентов, на панели задач сохраните проект и нажмите **Перезагрузить сборки игры и обновить скрипты**.

10. Under the **Animation** component, under **Item 0**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
10. Под компонентом **Анимация** под **Элементом 0** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**  ).

    ![Select an animation asset](media/select-animation-asset.png)
![Выберите ресурс анимации](media/select-animation-asset.png)

11. Browse to the **Animations** folder and select the **Sword_R animation** again.
11. Перейдите к папке **Animations** и снова выберите **анимацию Sword_R**.

    ![Select an animation asset](media/select-animation-asset-in-asset-picker.png)
![Выберите ресурс анимации](media/select-animation-asset-in-asset-picker.png)

12. Now let's give the mannequin a weapon. In the **Asset View**, browse to the **Models** folder and drag the **SwordModel** to the mannequinModel in the Entity Tree. This makes the SwordModel a child entity of the **mannequinModel**.
12. Теперь дадим манекену оружие.  В **Asset View** перейдите в папку **Models** и перетащите **SwordModel** на mannequinModel в Entity Tree.  Это делает SwordModel дочерним объектом **mannequinModel**.

13. In the Entity Tree, expand **mannequinModel** to see its child entities, and select **SwordModel**.
13. В дереве объектов разверните **mannequinModel**, чтобы увидеть его дочерние объекты, и выберите **SwordModel**.

    ![SwordModel child entity](media/SwordModel-child-entity.png)
![дочерняя сущность SwordModel](media/SwordModel-child-entity.png)

14. With the in the **Property Grid**, click **Add component** and select **Model Node Link**. This is called a **Bone Link** in some versions of Stride.
14. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Ссылка на узел модели**.  В некоторых версиях Stride это называется **Bone Link**.

    ![Add Model Node Link](media/add-model-node-link.png)
![Добавить ссылку на узел модели](media/add-model-node-link.png)

    We can use this to link the SwordModel to a point in the mannequinModel skeleton. There's no need to specify a target, as the entity uses its parent entity (**mannequinModel**) by default.
Мы можем использовать это, чтобы связать SwordModel с точкой скелета mannequinModel.  Нет необходимости указывать цель, так как сущность по умолчанию использует свою родительскую сущность (**mannequinModel**).

    For more information, see the [Model node links](../../animation/model-node-links.md) page.
Для получения дополнительной информации см. страницу [Ссылки узлов модели](../../animation/model-node-links.md).

15. Under **Model Node Link**, in the **Node Name** (or **Bone**) field, select **weapon_bone_R**. This attaches the model to the point in the skeleton that uses a weapon in the right hand.
15. В разделе **Ссылка на узел модели** в поле **Имя узла** (или **Кость**) выберите **weapon_bone_R**.  Это прикрепляет модель к точке скелета, которая использует оружие в правой руке.

16. Let's see how everything looks so far. Click **Play** to run the game and check it out. Remember you can use the mouse and WASD keys to move the camera and see the animation from different perspectives.
16. Посмотрим, как все выглядит на данный момент.  Нажмите **Играть**, чтобы запустить игру и проверить ее.  Помните, что вы можете использовать мышь и клавиши WASD для перемещения камеры и просмотра анимации с разных точек зрения.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-1.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-1.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

We have a swinging sword animation. Next, let's add a trail effect.
У нас есть анимация размахивания мечом.  Далее давайте добавим эффект следа.

## 3. Create a basic trail
## 3. Создайте базовую тропу

First we'll build a basic trail, just to see how it looks.
Сначала мы построим базовую тропу, просто чтобы посмотреть, как она выглядит.

1. In Game Studio, select the **SwordModel**. In the **Property Grid**, click **Add component** and select **Particle System**.
1. В Game Studio выберите **SwordModel**.  В **Сетке свойств** нажмите **Добавить компонент** и выберите **Система частиц**.

    ![Add Particle System](media/add-particle-system.png)
![Добавить систему частиц](media/add-particle-system.png)

    This adds a particle system component to the model, which we'll use to build a trail effect.
Это добавит в модель компонент системы частиц, который мы будем использовать для создания эффекта следа.

2. Click **Source** to expand its properties.
2. Щелкните **Источник**, чтобы развернуть его свойства.

    ![Expand Source properties](media/expand-source-properties.png)
![Развернуть исходные свойства](media/expand-source-properties.png)

3. Next to **Emitters**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**). This adds a new particle emitter.
3. Рядом с **Излучателями** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).  Это добавляет новый эмиттер частиц.

4. Under the emitter properties, set the **Shape** to **Trail**.
4. В свойствах эмиттера установите для параметра **Shape** значение **Trail**.

    ![Set Shape to Trail](media/emitter-shape-trail.png)
![Установить форму следа](media/emitter-shape-trail.png)

5. Unfortunately, we need to make a brief detour due to a bug in Stride. Under the **Shape** properties, set the **Axis** to **Center**. (The shape should really be set to Edge, but the Edge and Center settings are reversed in the UI. This will be fixed in Stride 1.9.3.)
5. К сожалению, нам нужно сделать небольшой обход из-за ошибки в Stride.  В свойствах **Формы** установите **Ось** на **Центр**.  (На самом деле форма должна быть установлена ​​на Edge, но настройки Edge и Center в пользовательском интерфейсе меняются местами. Это будет исправлено в Stride 1.9.3.)

    ![Set Axis to Center](media/set-axis-to-center.png)
![Установить ось в центр](media/set-axis-to-center.png)

6. Next to **Spawners**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Per frame**.
6. Рядом с **Spawners** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **По кадрам*  *.

    ![Add per-frame spawner](media/add-per-frame-spawner.png)
![Добавить покадровый спаунер](media/add-per-frame-spawner.png)

    This adds a per-frame spawner to the emitter, which spawns X number of particles per frame (as opposed to, say, per second).
Это добавляет к эмиттеру покадровый спаунер, который порождает X частиц за кадр (в отличие от, скажем, в секунду).

7. Next to **Initializers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Velocity**.
7. Рядом с **Инициализаторы** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **Скорость**  .

    ![Add velocity initializer](media/add-velocity-initializer.png)
![Добавить инициализатор скорости](media/add-velocity-initializer.png)

    This adds a velocity initializer to the emitter.
Это добавляет инициализатор скорости к эмиттеру.

    At this point, you can grab the mannequin and move it around the scene to see how the particles behave. They look like a cloud of blocky smoke.
В этот момент вы можете взять манекен и перемещать его по сцене, чтобы увидеть, как ведут себя частицы.  Они выглядят как облако блочного дыма.

8. Under the velocity initializer, set both the **Velocity min** and **Velocity max** values to **0, 5, 0**.
8. В инициализаторе скорости установите значения **Velocity min** и **Velocity max** на **0, 5, 0**.

    ![Set velocity min and max](media/set-velocity-min-and-max.png)
![Установить минимальную и максимальную скорость](media/set-velocity-min-and-max.png)

    This restricts the particles to the Y axis, like an infinitely thin sheet of paper.
Это ограничивает частицы по оси Y, как бесконечно тонкий лист бумаги.

9. Next to **Initializers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Direction**.
9. Рядом с **Инициализаторами** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **Направление**  .

    ![Add direction initializer](media/add-direction-initializer.png)
![Добавить инициализатор направления](media/add-direction-initializer.png)

    This adds a direction initializer to the emitter.
Это добавляет инициализатор направления к эмиттеру.

10. Expand the direction initializer to view the properties. Set both the **Direction min** and **Direction max** to **0, 0, -1**. This aligns the trail with the direction of the swing animation.
10. Разверните инициализатор направления, чтобы просмотреть свойства.  Установите для параметров **Минимальное направление** и **Макс. направление** значение **0, 0, -1**.  Это выравнивает след с направлением анимации качания.

11. Run the game to see how the particles look with the sword-swinging animation.
11. Запустите игру, чтобы увидеть, как частицы выглядят с анимацией размахивания мечом.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-2.jpg">
<цикл автозапуска видео class=
   <source src="media/sword-slash-2.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

We have a trail, but it doesn't look too good yet. It's too long, it's a single block of color, its particles interconnect strangely, and it never disappears.
У нас есть тропа, но пока она выглядит не очень хорошо.  Он слишком длинный, это единый блок цвета, его частицы странным образом соединяются между собой, и он никогда не исчезает.

## 4. Sort the particles
## 4. Сортировка частиц

Because the particles are rendered as billboards, the segments of the trail interconnect strangely. To create a proper trail effect, we need to sort the particles into an order by adding a **spawn order initializer**.
Поскольку частицы визуализируются как рекламные щиты, сегменты следа странным образом соединяются между собой.  Чтобы создать правильный эффект следа, нам нужно отсортировать частицы по порядку, добавив **инициализатор порядка появления**.

1. In the SwordModel properties, under **Particle System > Source > Emitters**, next to **Initializers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Spawn Order**.
1. В свойствах SwordModel в разделе **Particle System > Source > Emitters** рядом с **Initializers** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon  .png) (**Добавить**) и выберите **Порядок появления**.

    >[!Note]
>[!Примечание]
    >Make sure you don't select **Spawn Order (Parent)** or **Spawn Order (Group)**.
>Убедитесь, что вы не выбрали **Порядок появления (родительский)** или **Порядок появления (группа)**.

    ![Add spawn-order initializer](media/add-spawn-order-initializer.png)
![Добавить инициализатор порядка появления](media/add-spawn-order-initializer.png)

    This adds a spawn order initializer to the emitter. It doesn't have any properties, but it gives the particles a SpawnID we can sort them by.
Это добавляет к эмиттеру инициализатор порядка появления.  У него нет никаких свойств, но он дает частицам SpawnID, по которому мы можем их сортировать.

2. Under **Emitters**, under **Sorting**, choose **ByOrder**.
2. В разделе **Излучатели** в разделе **Сортировка** выберите **По порядку**.

    ![Sort by order](media/sort-by-order.png)
![Сортировать по порядку](media/sort-by-order.png)

3. Under **Initalizers**, under the **Velocity** initializer, change both the **Velocity min** and **Velocity max** values to **0,0.5,0**.
3. В разделе **Initalizers**, под инициализатором **Velocity** измените значения **Velocity min** и **Velocity max** на **0,0,5,0**.

    ![Change velocity](media/change-velocity.png)
![Изменить скорость](media/change-velocity.png)

4. Run the game.
4. Запустите игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-3.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-3.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Now the particles move cohesively.
Теперь частицы движутся сплоченно.

## 5. Change the length
## 5. Измените длину

In the SwordModel properties, under **Particle System > Source > Emitters**, change the **Lifespan** to **0.2, 0.2**.
В свойствах SwordModel в разделе **Particle System > Source > Emitters** измените **Lifespan** на **0,2, 0,2**.

![Change emitter lifespan](media/change-emitter-lifespan.png)
![Изменить срок службы эмиттера](media/change-emitter-lifespan.png)

Move the mannequin around the scene and notice how the trails extinguish more quickly.
Перемещайте манекен по сцене и обратите внимание, как следы исчезают быстрее.

## 6. Add a texture
## 6. Добавляем текстуру

To fix the color, we'll give the particles a "swoosh" texture:
Чтобы исправить цвет, мы придадим частицам текстуру «галочки»:

![Swoosh.png texture](media/swoosh.png)
![Текстура Swoosh.png](media/swoosh.png)

1. Save the texture image above (**swoosh.png**) to disk.
1. Сохраните изображение текстуры выше (**swoosh.png**) на диск.

2. Import it into the project. To do this, in the **Asset View**, click **Add asset > Textures > Color** and select **swoosh.png**.
2. Импортируйте его в проект.  Для этого в **Просмотре активов** нажмите **Добавить актив > Текстуры > Цвет** и выберите **swoosh.png**.

    ![Add a texture](media/add-texture.png)
![Добавить текстуру](media/add-texture.png)

3. In the **SwordModel** properties, expand **Emitters > Material**. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**). Browse to the **Textures** folder and select **swoosh.png**.
3. В свойствах **SwordModel** разверните **Emitters > Material**.  Нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**).  Перейдите к папке **Textures** и выберите **swoosh.png**.

    ![Add material texture](media/add-material.png)
![Добавить текстуру материала](media/add-material.png)

4. Set the **Alpha-Add** bar to **1**, so it's 100% emissive.
4. Установите полосу **Alpha-Add** на **1**, чтобы обеспечить 100% эмиссию.

    ![Alpha add bar](media/alpha-add.png)
![Альфа-полоска добавления](media/alpha-add.png)

5. Under the **Particle emitter** properties, expand **Shape** and set **UV Coords** to **Stretched** and **UV Factor** to **1**.
5. В свойствах **Эмиттер частиц** разверните **Форма** и установите **УФ-координаты** на **Растягивание** и **УФ-фактор** на **1**.

    ![Set UV](media/UV-coords-and-factor.png)
![Установить UV](media/UV-coords-and-factor.png)

6. Expand **UV Rotate**. Under **Clockwise**, select 90 degrees. This rotates the texture 90 degrees clockwise, so the "swoosh" lines point in the right direction.
6. Разверните **УФ-поворот**.  В разделе **По часовой стрелке** выберите 90 градусов.  Это повернет текстуру на 90 градусов по часовой стрелке, поэтому линии «галочки» будут указывать в правильном направлении.

    ![Rotate material](media/rotate-material.png)
![Повернуть материал](media/rotate-material.png)

7. Run the game.
7. Запускаем игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-4.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-4.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

We're getting closer. But the trail doesn't disappear, so it looks like it's attached to the sword. We need to make the effect appear when the mannequin swings, then disappear at the end of the swing.
Мы приближаемся.  Но след не исчезает, поэтому кажется, что он привязан к мечу.  Нам нужно, чтобы эффект появлялся при раскачивании манекена, а затем исчезал в конце раскачивания.

## 7. Make the particle effect a prefab
## 7. Сделайте эффект частиц готовым

So far, we've created a particle effect by attaching it as a component to the sword. Now we're going to separate the effect from the sword and make it an independent entity we can turn on and off when we like. To do this, we'll create a prefab. For more information about prefabs, see the [prefab documentation](../../game-studio/prefabs/index.md).
До сих пор мы создавали эффект частиц, присоединяя их как компонент к мечу.  Теперь мы собираемся отделить эффект от меча и сделать его независимым объектом, который мы можем включать и выключать, когда захотим.  Для этого мы создадим префаб.  Для получения дополнительной информации о префабах см. [документацию по префабам](../../game-studio/prefabs/index.md).

1. Right-click the **SwordModel** and select **Create prefab from selection**.
1. Щелкните правой кнопкой мыши **SwordModel** и выберите **Создать префаб из выделенного**.

    ![Create prefab from selection](media/create-prefab-from-selection.png)
![Создать префаб из выделенного](media/create-prefab-from-selection.png)

    Game Studio creates a prefab from the SwordModel and adds it to the Asset View. By creating a prefab from the selection, we can quickly copy over the options we've set up so far.
Game Studio создает префаб из SwordModel и добавляет его в Asset View.  Создав префаб из выбранного, мы можем быстро скопировать параметры, которые мы настроили до сих пор.

2. We don't want the SwordModel itself to be a prefab — we just used it as a template to create the prefab from. It should be separate from our new particle effect prefab, so right-click it and select **Break link to prefab**.
2. Мы не хотим, чтобы сам SwordModel был префабом — мы просто использовали его как шаблон для создания префаба.  Он должен быть отделен от нашего нового префаба эффекта частиц, поэтому щелкните его правой кнопкой мыши и выберите **Разорвать ссылку на префаб**.

    ![Break link to prefab](media/break-link-to-prefab.png)
![Разрыв ссылки на префаб](media/break-link-to-prefab.png)

3. Because naming things properly makes everything easier, rename the prefab *SwordTrail*. To do this, in the **Asset View**, right-click the **SwordModel** prefab, select **Rename**, and type *SwordTrail*.
3. Так как правильные названия облегчают задачу, переименуйте префаб в *SwordTrail*.  Для этого в **Asset View** щелкните правой кнопкой мыши префаб **SwordModel**, выберите **Rename** и введите *SwordTrail*.

    ![Rename prefab](media/rename-prefab.png)
![Переименовать префаб](media/rename-prefab.png)

4. Double-click the **SwordTrail** prefab to open it in the Prefab Editor. This is where we'll customize the prefab.
4. Дважды щелкните префаб **SwordTrail**, чтобы открыть его в редакторе префабов.  Здесь мы будем настраивать префаб.

    ![Prefab Editor](media/prefab-editor.png)
![Редактор префабов](media/prefab-editor.png)

5. The prefab contains just one entity, SwordModel. It's not going to be a model for much longer, so let's rename this entity *SwordTrail* (the same as the prefab it belongs to).
5. Префаб содержит только одну сущность SwordModel.  Моделью она долго не будет, поэтому давайте переименуем эту сущность в *SwordTrail* (так же, как префаб, которому она принадлежит).

6. Remove the **Model** and the **Model Node Link** (or **Bone Link**) components from the **SwordTrail** entity. We don't need them any more — this prefab will just be a particle effect.
6. Удалите компоненты **Model** и **Model Node Link** (или **Bone Link**) из объекта **SwordTrail**.  Они нам больше не нужны — этот префаб будет просто эффектом частиц.

7. Likewise, under **Particle System > Source > Emitters > Initializers**, delete the **Velocity** initializer. For now, we want the prefab effect to be static.
7. Аналогичным образом в разделе **Particle System > Source > Emitters > Initializers** удалите инициализатор **Velocity**.  На данный момент мы хотим, чтобы эффект префаба был статическим.

    ![Delete velocity initializer](media/delete-velocity-initializer.png)
![Удалить инициализатор скорости](media/delete-velocity-initializer.png)

8. In the **SwordTrail** properties, under **Particle System > Source > Emitters > Spawners**, set **Loop** to **One shot** and change **Duration** to **0.2, 0.2**.
8. В свойствах **SwordTrail**, в разделе **Particle System > Source > Emitters > Spawners**, установите **Loop** на **One shot** и измените **Duration** на **0,2,  0,2**.

    ![Set the initializer loop and duration](media/initializers-loop.png)
![Установите цикл инициализации и продолжительность](media/initializers-loop.png)

9. Now we've created a separate prefab for the particle effect, we don't need to keep a particle effect on the sword model. In the main scene, select **SwordModel** and delete the **Particle System** component.
9. Теперь мы создали отдельный префаб для эффекта частиц, нам не нужно сохранять эффект частиц на модели меча.  В основной сцене выберите **SwordModel** и удалите компонент **Particle System**.

## 8. Control the effect prefab with a script
## 8. Управляйте префабом эффекта с помощью скрипта

We've created a sword trail effect prefab. Next we'll use a script to spawn the effect every time the mannequin swings and delete the effect a few frames later.
Мы создали префаб с эффектом следа меча.  Далее мы будем использовать скрипт для создания эффекта каждый раз, когда манекен качается, и удалять эффект через несколько кадров.

1. Open the project in Visual Studio. To do this, in Game Studio, click the Visual Studio icon (**Open in IDE**).
1. Откройте проект в Visual Studio.  Для этого в Game Studio щелкните значок Visual Studio (**Открыть в среде IDE**).

    ![Open Visual Studio](media/open-visual-studio.png)
![Открыть Visual Studio](media/open-visual-studio.png)

2. In Visual Studio, right-click the game project and select **Add > New item**. In the **Name** field, give your script the name *SpawnTrail*, and click **Add**.
2. В Visual Studio щелкните правой кнопкой мыши проект игры и выберите **Добавить > Новый элемент**.  В поле **Имя** дайте вашему скрипту имя *SpawnTrail* и нажмите **Добавить**.

3. Replace the script content with the code in this script: [SpawnTrail.cs](https://github.com/SiliconStudio/stride-docs/blob/master-1.9/manual/particles/tutorials/media/SpawnTrail.cs)
3. Замените содержимое скрипта кодом из этого скрипта: [SpawnTrail.cs](https://github.com/SiliconStudio/stride-docs/blob/master-1.9/manual/particles/tutorials/media/SpawnTrail.cs  )

    This is a modified version of the Prefab Instance script included in Stride. Instead of listening to events or key presses, it listens to animation changes — such as our sword swing animation.
Это модифицированная версия скрипта Prefab Instance, включенного в Stride.  Вместо того, чтобы прослушивать события или нажатия клавиш, он прослушивает изменения анимации — например, анимацию взмаха меча.

4. In the script, make sure the ``namespace`` is correct. This usually matches your Stride project name (eg *MyTrailEffect*).
4. Убедитесь, что в сценарии указано правильное пространство имен.  Обычно оно совпадает с названием вашего проекта Stride (например, *MyTrailEffect*).

    ![Namespace](media/script-namespace.png)
![Пространство имен](media/script-namespace.png)

5. Save the script and the Visual Studio project (**Ctrl + Shift + S**).
5. Сохраните сценарий и проект Visual Studio (**Ctrl + Shift + S**).

6. In Game Studio, reload the assemblies.
6. В Game Studio перезагрузите сборки.

    ![Reload assemblies](media/reload-assemblies.png)
![Перезагрузить сборки](media/reload-assemblies.png)

7. In the **MainScene**, select the **SwordModel**.
7. В **MainScene** выберите **SwordModel**.

    ![Select SwordModel](media/select-swordmodel.png)
![Выбрать модель меча](media/select-swordmodel.png)

8. In the SwordModel properties, click **Add component** and select the **SpawnTrail** script. This adds the script as a component.
8. В свойствах SwordModel нажмите **Добавить компонент** и выберите скрипт **SpawnTrail**.  Это добавляет сценарий в качестве компонента.

    ![Add script component](media/add-script-component.png)
![Добавить компонент скрипта](media/add-script-component.png)

9. Under the **SpawnTrail** component properties, next to **Source**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
9. В свойствах компонента **SpawnTrail** рядом с **Источником** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс*  *).

    ![Select a source](media/select-asset-for-script.png)
![Выберите источник](media/select-asset-for-script.png)

10. In the Entity Picker, select the **SwordTrail** prefab.
10. В средстве выбора объектов выберите префаб **SwordTrail**.

    ![Select the swordtrail prefab](media/select-swordtrail-prefab-as-asset.png)
![Выберите префаб Swordtrail](media/select-swordtrail-prefab-as-asset.png)

11. In the SpawnTrail component, in the **Animation** field, click the hand icon (**Select an asset**).     The **Select an asset** window opens.
11. В компоненте SpawnTrail в поле **Анимация** щелкните значок руки (**Выберите ресурс**).  Откроется окно **Выберите объект**.

In the left pane, select the **mannequinModel** and click **OK**.
На левой панели выберите **mannequinModel** и нажмите **OK**.

    ![Pick mannequin model in Entity Picker](media/pick-mannequin-model.png)
![Выбрать модель манекена в Entity Picker](media/pick-mannequin-model.png)

12. Run the game.
12. Запускаем игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-5.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-5.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Thanks to our script, the particle effect appears at the start of the sword swing animation and disappears at the end.
Благодаря нашему скрипту эффект частиц появляется в начале анимации взмаха меча и исчезает в конце.

## 9. Adjust the trail start time
## 9. Отрегулируйте время начала следа

1. With the **Sword_R** animation asset selected, check the swing animation in the **Asset Preview** in the bottom-right. (If the Asset Preview isn't displayed, check **View > Asset Preview**.)
1. Выбрав ассет анимации **Sword_R**, проверьте анимацию взмаха в **Предварительном просмотре ассета** в правом нижнем углу.  (Если предварительный просмотр актива не отображается, установите флажок **Просмотр > Предварительный просмотр актива**.)

    The Asset Preview shows the animation length in seconds. If you look closely, you can see the mannequin doesn't begin to swing the sword down until about 0.1 seconds into the animation. Let's set the trail effect to spawn just when the mannequin swings.
Предварительный просмотр объекта показывает продолжительность анимации в секундах.  Если вы внимательно посмотрите, то увидите, что манекен не начинает размахивать мечом примерно до 0,1 секунды анимации.  Давайте настроим эффект следа, чтобы он появлялся только тогда, когда манекен качается.

2. Select the **SwordModel**.
2. Выберите **SwordModel**.

3. In the **SpawnTrail** properties, set the **Start time** to 0.06. This means the trail effect won't spawn until 0.06 seconds into the swing animation, which looks a little more natural. Feel free to tweak this to your liking.
3. В свойствах **SpawnTrail** установите **Время начала** на 0,06.  Это означает, что эффект следа не появится до 0,06 секунды после анимации поворота, что выглядит немного более естественным.  Не стесняйтесь настраивать это по своему вкусу.

4. Run the game to see how it looks.
4. Запустите игру, чтобы посмотреть, как она выглядит.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-6.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-6.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

You might notice our trail effect looks a little jagged, creating a "spiderweb" effect. Let's make it more curved.
Вы могли заметить, что наш эффект следа выглядит немного неровным, создавая эффект «паутины».  Сделаем его более изогнутым.

## 10. Curve the trail
## 10. Изгиб тропы

1. In the **SwordTrail** prefab, on the **SwordTrail** entity, under **Particle System > Source > Emitters > Shape**, set **Smoothing** to **Best** and **Segments** to **5**.
1. В префабе **SwordTrail** объекта **SwordTrail** в разделе **Система частиц > Источник > Излучатели > Форма** установите для параметра **Сглаживание** значение **Лучшее** и **Сегменты.  ** до **5**.

    ![Smoothing and segments](media/smoothing-best.png)
![Сглаживание и сегменты](media/smoothing-best.png)

    This adds three vertices between the particles of our trail, which should be enough to create a noticeably smoother effect.
Это добавит три вершины между частицами нашего следа, которых должно быть достаточно, чтобы создать заметно более плавный эффект.

2. Run the game.
2. Запустите игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-7.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-7.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

The inner curve, at the sword hilt, is smoother. But the curve at the sword's edge is still jagged.
Внутренний изгиб у рукояти меча более плавный.  Но изгиб на лезвии меча все еще неровный.

![Smoothed and unsmoothed areas](media/smoothing.png)
![Сглаженные и несглаженные области](media/smoothing.png)

We want to smooth the effect at the sword's edge, where it's more noticeable. To do that, we'll flip the particle direction.
Мы хотим сгладить эффект на острие меча, где он более заметен.  Для этого мы изменим направление частиц.

1. Still in the **SwordTrail** prefab, in the **Transform** component properties, change the **Position** to **0, 0, -1**.
1. В префабе **SwordTrail** в свойствах компонента **Transform** измените **Position** на **0, 0, -1**.

    ![Swordtrail position](media/swordtrail-position.png)
![Положение следа меча](media/swordtrail-position.png)

    This moves the starting point of the particle effect to the tip of the sword.
Это перемещает начальную точку эффекта частиц на острие меча.

2. Run the game.
2. Запустите игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-8.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-8.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Now we have a new problem. Because we moved the particle effect to the tip of the sword, the particles are flying from the tip. We need to reverse their direction, so they move down along the sword blade to the hilt.
Теперь у нас новая проблема.  Поскольку мы переместили эффект частиц на острие меча, частицы летят от острия.  Нам нужно изменить их направление, чтобы они двигались вниз по лезвию меча до самой рукояти.

6. Under **Particle System > Source > Emitters > Initializers**, under the **Direction** initializer, change both the **Direction min** and **Direction max** to **0, 0, 1**. This inverts the trail direction.
6. В разделе **Particle System > Source > Emitters > Initializers**, под инициализатором **Direction** измените **Direction min** и **Direction max** на **0, 0, 1*.  *.  Это инвертирует направление следа.

    ![Initializer direction](media/initializer-direction.png)
![Направление инициализатора](media/initializer-direction.png)

7. Run the game.
7. Запускаем игру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-9.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/sword-slash-9.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Congratulations! You created a trail effect from scratch. How you tweak it now is up to you.
Поздравляем!  Вы создали эффект следа с нуля.  Как вы это настроите сейчас, зависит от вас.

## Sample project
## Пример проекта

Here's a more elaborate trail that combines multiple particle effects:
Вот более сложный след, который сочетает в себе несколько эффектов частиц:

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/sword-slash-10.jpg">
<цикл автозапуска видео class=
   <source src="media/sword-slash-10.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

If you'd like to see how it works, [download the project file](media/MyTrailEffect.zip) and take a look.
Если вы хотите увидеть, как это работает, [скачайте файл проекта](media/MyTrailEffect.zip) и посмотрите.

## See also
## Смотрите также

* [Tutorial: Custom particles](custom-particles.md)
* [Учебник: Пользовательские частицы](custom-particles.md)
* [Tutorial: Inheritance](inheritance.md)
* [Учебник: Наследование](inheritance.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Учебник: Лазеры и молния](lasers-and-lightning.md)
* [Particles](../index.md)
* [Частицы](../index.md)
* [Create particles](../create-particles.md)
* [Создать частицы](../create-particles.md)
* [Model node links](../../animation/model-node-links.md)
* [Ссылки на узлы модели](../../animation/model-node-links.md)
