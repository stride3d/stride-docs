# Create a bouncing ball
# Создаем прыгающий мяч

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

In this tutorial, we'll use the [static collider and rigidbody components](colliders.md) to create a ball bouncing on a floor.
В этом уроке мы будем использовать [статический коллайдер и компоненты твердого тела] (colliders.md) для создания мяча, прыгающего по полу.

>[!Note]
>[!Примечание]
>The screenshots and videos in this tutorial were made using an earlier version of Stride, so some parts of the UI, and the default skybox and sphere, might look different from your version.
>Снимки экрана и видеоролики в этом руководстве были сделаны с использованием более ранней версии Stride, поэтому некоторые части пользовательского интерфейса, а также скайбокс и сфера по умолчанию могут отличаться от вашей версии.

## 1. Create a new project
## 1. Создайте новый проект

Start a **New Game** project.
Начните проект **Новая игра**.

The default scene comes pre-loaded with five entities: Camera, Directional light, Skybox, Ground, and Sphere. We're going to add physics components to the **Ground** and **Sphere** entities.
Сцена по умолчанию поставляется с предварительно загруженными пятью объектами: камера, направленный свет, скайбокс, земля и сфера.  Мы собираемся добавить физические компоненты к объектам **Земля** и **Сфера**.

## 2. Add a static collider
## 2. Добавляем статический коллайдер
   
Let's begin by adding a [static collider](static-colliders.md) component to the Ground entity. A static collider is a physics object that doesn't move. Typical static colliders are walls, floors, large rocks, and so on. In this case, the static collider will give the ball something to bounce on.
Начнем с добавления компонента [статический коллайдер](static-colliders.md) к объекту Ground.  Статический коллайдер — это неподвижный физический объект.  Типичными статическими коллайдерами являются стены, полы, большие камни и так далее.  В этом случае статический коллайдер даст мячу возможность отскочить.

1. Select the **Ground** entity.
1. Выберите объект **Земля**.

2. In the **Property Grid**, click **Add component** and select **Static Collider**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Статический коллайдер**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

3. Set the [collider shape](collider-shapes.md) to match the shape of the entity. To do this, in the **Property Grid**, expand the **Static Collider component** to view its properties.
3. Установите [форму коллайдера] (collider-shapes.md), чтобы она соответствовала форме объекта.  Для этого в **Сетке свойств** разверните компонент **Статический коллайдер**, чтобы просмотреть его свойства.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Infinite Plane**.
4. Рядом с **Фигурами коллайдера** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **Бесконечная плоскость.  **.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)

    This adds a static collider to the ground, so the ball has something to bounce off.
Это добавляет к земле статический коллайдер, так что мячу есть от чего отскочить.

## 3. Add a rigidbody collider
## 3. Добавьте коллайдер с твердым телом

Next, we'll add a [rigidbody](rigid-bodies.md) component to the sphere. A rigidbody is a physics object that moves — perfect for our bouncing ball.
Далее мы добавим к сфере компонент [rigidbody](rigid-bodies.md).  Твердое тело — это физический объект, который движется — идеально подходит для нашего прыгающего мяча.

1. In the **Scene Editor**, select the **Sphere** entity.
1. В **Редакторе сцен** выберите объект **Сфера**.

2. In the **Property Grid**, click **Add component** and select **Rigidbody**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Жесткое тело**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)

3. Just like we did for the Ground entity, set the [collider shape](collider-shapes.md) to match the entity. To do this, in the **Property Grid**, expand the **Rigidbody component** to view its properties.
3. Точно так же, как мы сделали для объекта Ground, установите [форму коллайдера] (collider-shapes.md) в соответствии с объектом.  Для этого в **Сетке свойств** разверните **Компонент Rigidbody**, чтобы просмотреть его свойства.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Sphere**.
4. Рядом с **Фигурами коллайдера** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **Сфера*  *.

     ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)

## 4. Position the ball
## 4. Расположите мяч

Let's position the sphere so it starts in mid-air and falls to the ground.
Давайте поместим сферу так, чтобы она начиналась в воздухе и падала на землю.

1. Select the **Sphere** entity. 
1. Выберите объект **Сфера**.

2. In the **Property Grid**, under **Transform**, set the **Position** to: _X: 0, Y: 6, Z: 0_
2. В **Сетке свойств** в разделе **Преобразование** установите для параметра **Положение** значение: _X: 0, Y: 6, Z: 0_.

    ![Change Sphere position](media/physics-tutorials-create-a-bouncing-ball-change-sphere-position.png)
![Изменить положение сферы](media/physics-tutorials-create-a-bouncing-ball-change-sphere-position.png)

    This places the ball in mid-air above the ground.
Это помещает мяч в воздухе над землей.

## 5. Position the camera
## 5. Расположите камеру

Now we'll move the camera to give us a good view of the scene. 
Теперь мы переместим камеру, чтобы дать нам хороший обзор сцены.

1. Select the **Camera** entity. 
1. Выберите объект **Камера**.

2. In the **Property Grid**, under **Transform**, set the **Position** to: _X: -12, Y: 7, Z: 9_
2. В **Сетке свойств** в разделе **Преобразование** установите для параметра **Положение** значение: _X: -12, Y: 7, Z: 9_.

3. Set the **Rotation** to: _X: -20, Y: -50, Z: 0_
3. Установите **Вращение** на: _X: -20, Y: -50, Z: 0_

    ![Change camera position](media/physics-tutorials-create-a-bouncing-ball-change-camera-position.png)
![Изменить положение камеры](media/physics-tutorials-create-a-bouncing-ball-change-camera-position.png)

    You can see preview the camera view in the **Camera preview** in the bottom-right of the Scene Editor.
Вы можете просмотреть предварительный просмотр вида камеры в **Предварительном просмотре камеры** в правом нижнем углу редактора сцен.

    ![Camera preview](media/physics-tutorials-camera-preview.png)
![Предварительный просмотр камеры](media/physics-tutorials-camera-preview.png)

## 6. Set the restitution
## 6. Установить реституцию

Let's see what the scene looks like so far. To run the project, press **F5**.
Давайте посмотрим, как выглядит сцена на данный момент.  Чтобы запустить проект, нажмите **F5**.

![Falling ball](media/physics-tutorials-create-a-bouncing-ball-falling-ball.gif)
![Падающий мяч](media/physics-tutorials-create-a-bouncing-ball-falling-ball.gif)

The Sphere (rigidbody) responds to gravity and falls. The Ground (static collider) breaks its fall. But there's no bounce effect yet.
Сфера (твердое тело) реагирует на гравитацию и падает.  Земля (статический коллайдер) прерывает падение.  Но эффекта отскока пока нет.

To create a bounce effect, we need to change the **restitution** of the Sphere and the Ground. This simulates the [coefficient of restitution (Wikipedia)](https://en.wikipedia.org/wiki/Coefficient_of_restitution) of real-world collisions. 
Чтобы создать эффект отскока, нам нужно изменить **восстановление** Сферы и Земли.  Это имитирует [коэффициент реституции (Википедия)](https://en.wikipedia.org/wiki/Коэффициент_реституции) реальных столкновений.

* If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. 
* Если свойство восстановления сталкивающихся сущностей равно 0, сущности теряют всю энергию и немедленно прекращают движение при ударе.
* If the restitution is 1, they lose no energy and rebound with the same velocity at which they collided. 
* Если восстановление равно 1, они не теряют энергии и отскакивают с той же скоростью, с которой столкнулись.
* If the restitution is higher than 1, they gain energy and rebound with *more* velocity. 
* Если восстановление выше 1, они получают энергию и отскакивают с *большей* скоростью.

As a rule, to create realistic collisions, set the restitution between 0 and 1.
Как правило, для создания реалистичных столкновений устанавливайте реституцию от 0 до 1.

Let's set the restitution of our Sphere and Ground entities.
Давайте установим восстановление наших сущностей Sphere и Ground.

1. Select the **Sphere** entity.
1. Выберите объект **Сфера**.

2. In the **Property Grid**, under **Rigidbody**, set the **Restitution** to 0.8.
2. В **Сетке свойств** в разделе **Жесткое тело** установите для параметра **Восстановление** значение 0,8.

    ![Set restitution for a sphere](media/physics-tutorials-create-a-bouncing-ball-restitution-of-a-sphere.png)
![Установить восстановление сферы](media/physics-tutorials-create-a-bouncing-ball-restitution-of-a-sphere.png)

3. Select the **Ground** entity.
3. Выберите объект **Земля**.

4. In the **Property Grid**, under **Static Collider**, set the **Restitution** to 0.5.
4. В **Сетке свойств** в разделе **Статический коллайдер** установите **Восстановление** на 0,5.

    ![Set restitution for the ground](media/physics-tutorials-create-a-bouncing-ball-restitution-of-the-ground.png)
![Установить реституцию земли](media/physics-tutorials-create-a-bouncing-ball-restitution-of-the-ground.png)

To see how this changes the physics, run the project again (**F5**). This time, the ball bounces on the ground before coming to a stop:
Чтобы увидеть, как это меняет физику, снова запустите проект (**F5**).  На этот раз мяч отскакивает от земли, прежде чем остановиться:

![Bouncing effect](media/physics-tutorials-create-a-bouncing-ball-falling-and-bouncing-ball.gif)
![Эффект подпрыгивания](media/physics-tutorials-create-a-bouncing-ball-falling-and-bouncing-ball.gif)

Try changing the restitution of both entities to 1. This creates a ball that bounces indefinitely, losing no energy:
Попробуйте изменить восстановление обоих сущностей на 1. Это создаст мяч, который бесконечно отскакивает, не теряя энергии:

![Infinite bounce](media/physics-tutorials-create-a-bouncing-ball-infinitely-bouncing-ball.gif)
![Бесконечный отскок](media/physics-tutorials-create-a-bouncing-ball-infinite-bouncing-ball.gif)

Set the restitution to 1.1 and the ball bounces a little higher each time:
Установите реституцию на 1,1, и мяч будет отскакивать немного выше каждый раз:

![Ball bouncing higher](media/physics-tutorials-create-a-bouncing-ball-higher-and-higher.gif)
![Мяч подпрыгивает выше](media/physics-tutorials-create-a-bouncing-ball-higher-and-higher.gif)

Now we've created a bouncing ball, we can use it to learn about triggers. For more information, see the [Script a trigger](script-a-trigger.md) tutorial.
Теперь, когда мы создали прыгающий мяч, мы можем использовать его, чтобы узнать о триггерах.  Для получения дополнительной информации см. руководство [Скрипт триггера](script-a-trigger.md).

## See also
## Смотрите также

* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
* [Collider shape](collider-shapes.md)
* [Форма коллайдера](collider-shapes.md)
* [Tutorial: Script a trigger](script-a-trigger.md)
* [Учебник: Скрипт триггера](script-a-trigger.md)
