# Tutorial: Script a trigger
# Учебник: Скрипт триггера

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

In this tutorial, we'll create a [trigger](../physics/triggers.md) that doubles the size of a ball when the ball passes through it.
В этом уроке мы создадим [триггер](../physics/triggers.md), который удваивает размер мяча, когда мяч проходит через него.

>[!Note]
>[!Примечание]
>The screenshots and videos in this tutorial were made using an earlier version of Stride, so some parts of the UI, and the default skybox and sphere, might look different from your version.
>Снимки экрана и видеоролики в этом руководстве были сделаны с использованием более ранней версии Stride, поэтому некоторые части пользовательского интерфейса, а также скайбокс и сфера по умолчанию могут отличаться от вашей версии.

## 1. Create a bouncing ball
## 1. Создайте прыгающий мяч

Follow the instructions in the [Create a bouncing ball](create-a-bouncing-ball.md) tutorial. This creates a simple scene in which a ball falls from mid-air, hits the ground, and bounces.
Следуйте инструкциям в руководстве [Создание прыгающего мяча](create-a-bouncing-ball.md).  Это создает простую сцену, в которой мяч падает из воздуха, ударяется о землю и отскакивает.

## 2. Set the restitution
## 2. Установить реституцию

For this tutorial, we'll set the restitution of both the ground and the sphere to 0.9, which makes the ball very bouncy. This makes it easier to see the effect of the trigger later, as the ball will bounce in and out of the trigger area repeatedly.
В этом уроке мы установим восстановление земли и сферы на 0,9, что сделает мяч очень упругим.  Это позволяет легче увидеть эффект триггера позже, так как мяч будет неоднократно отскакивать и выходить из области триггера.

1. Select the **Sphere** entity.
1. Выберите объект **Сфера**.

2. In the **Property Grid**, under **Rigidbody**, set the **Restitution** to *0.9*.
2. В **Сетке свойств** в разделе **Жесткое тело** установите для параметра **Восстановление** значение *0,9*.

    ![Set restitution for a sphere](media/physics-tutorials-rigidbody-restitution.png)
![Установить реституцию для сферы](media/physics-tutorials-rigidbody-restitution.png)

3. Select the **Ground** entity.
3. Выберите объект **Земля**.

4. In the **Property Grid**, under **Static Collider**, set the **Restitution** to *0.9*.
4. В **Сетке свойств** в разделе **Статический коллайдер** установите **Восстановление** на *0,9*.

    ![Set restitution for the ground](media/physics-tutorials-static-collider-restitution.png)
![Установить реституцию для земли](media/physics-tutorials-static-collider-restitution.png)

## 3. Add a trigger 
## 3. Добавляем триггер

Now we'll add a trigger between the ball and the ground, so the ball passes through it.
Теперь мы добавим триггер между мячом и землей, чтобы мяч проходил сквозь него.

1. In the **Scene Editor**, click the white plus button (**Create new entity**) and select **Empty entity**.
1. В **Редакторе сцен** нажмите белую кнопку с плюсом (**Создать новый объект**) и выберите **Пустой объект**.

    ![Create new entity](media/physics-tutorials-create-a-trigger-add-new-entity.png)
![Создать новый объект](media/physics-tutorials-create-a-trigger-add-new-entity.png)

    Game Studio adds an entity to the scene with the default name **Entity**.
Game Studio добавляет в сцену объект с именем по умолчанию **Entity**.

2. This entity will be our trigger, so rename it *Trigger* to make it easy to identify.
2. Этот объект будет нашим триггером, поэтому переименуйте его в *Trigger*, чтобы его было легко идентифицировать.

3. Since we don't need the trigger to move, we'll make it a static collider. In the **Property Grid**, click **Add component** and select **Static Collider**.
3. Поскольку нам не нужно, чтобы триггер двигался, мы сделаем его статическим коллайдером.  В **Сетке свойств** нажмите **Добавить компонент** и выберите **Статический коллайдер**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

4. In the **Property Grid**, expand the **Static Collider component** to view its properties.
4. В **Сетке свойств** разверните компонент **Статический коллайдер**, чтобы просмотреть его свойства.

5. Select the **Is Trigger** checkbox.
5. Установите флажок **Является триггером**.

    ![Check 'Is trigger'](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)
![Отметьте «Является триггером»](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)

    This makes the collider a trigger. This means objects can pass through it, but are still detected in the code.
Это делает коллайдер триггером.  Это означает, что объекты могут проходить через него, но все равно обнаруживаются в коде.

6. We need to give the trigger a shape. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Box**.
6. Нам нужно придать курку форму.  Рядом с **Фигурами коллайдера** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите **Коробка**.

    ![Add collider shape](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)
![Добавить форму коллайдера](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)

    This gives the trigger a box shape.
Это придает спусковому крючку коробчатую форму.

    ![Added trigger](media/physics-tutorials-added-trigger-area.png)
![Добавлен триггер](media/physics-tutorials-added-trigger-area.png)

7. Let's make the trigger a larger area. In the **Property Grid**, under the **Transform** component properties, set the **scale** to: *X:2, Y:2, Z:2*
7. Сделаем триггер большей площади.  В **Сетке свойств** в свойствах компонента **Преобразование** установите для **масштаба** значение: *X:2, Y:2, Z:2*.

    ![Scale a trigger](media/physics-tutorials-create-a-trigger-scale-trigger.png)
![Масштабировать триггер](media/physics-tutorials-create-a-trigger-scale-trigger.png)

    This doubles the size of the trigger.
Это удваивает размер триггера.

    ![Added trigger](media/physics-tutorials-added-trigger-doubled-area.png)
![Добавлен триггер](media/physics-tutorials-added-trigger-double-area.png)

## 4. Give the trigger a model
## 4. Дайте триггеру модель

Right now, the trigger is invisible at runtime. To better show how the trigger works, we'll make it a transparent box. This has no effect on how the trigger works; it just means we can easily see where it is at runtime.
Прямо сейчас триггер невидим во время выполнения.  Чтобы лучше показать, как работает триггер, мы сделаем его прозрачным.  Это не влияет на работу триггера;  это просто означает, что мы можем легко увидеть, где он находится во время выполнения.

1. Create a new procedural model asset. To do this, in the **Asset View**, click **Add asset**, and select **Models > Cube**.
1. Создайте новый актив процедурной модели.  Для этого в **Представлении активов** нажмите **Добавить актив** и выберите **Модели > Куб**.

    ![Add a model asset](media/physics-tutorials-create-a-trigger-add-a-model.png)
![Добавить объект модели](media/physics-tutorials-create-a-trigger-add-a-model.png)

2. Create a new empty material asset. To do this, in the **Asset View**, click **Add asset**, and select **Materials > Material**.
2. Создайте новый пустой материальный актив.  Для этого в **Представлении активов** нажмите **Добавить актив** и выберите **Материалы > Материал**.

    ![Add a material asset](media/physics-tutorials-create-a-trigger-add-a-material-asset.png)
![Добавить материальный актив](media/physics-tutorials-create-a-trigger-add-a-material-asset.png)

3. Let's rename the material to make it easy to identify. To do this, right-click, select **Rename**, and type a new name (eg *Transparent*).
3. Давайте переименуем материал, чтобы его было легко идентифицировать.  Для этого щелкните правой кнопкой мыши, выберите **Переименовать** и введите новое имя (например, *Прозрачный*).

4. Select the **Trigger** entity. In the **Property Grid**, click **Add component** and select **Model**.
4. Выберите объект **Триггер**.  В **Сетке свойств** нажмите **Добавить компонент** и выберите **Модель**.

    ![Add a model component](media/physics-tutorials-create-a-trigger-add-a-model-component.png)
![Добавить компонент модели](media/physics-tutorials-create-a-trigger-add-a-model-component.png)

    Game Studio adds a model component to the entity.
Game Studio добавляет к объекту компонент модели.

5. Under **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
5. В разделе **Модель** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**).

    ![Pick an asset up](media/physics-tutorials-pick-an-asset-up.png)
![Подобрать объект](media/physics-tutorials-pick-an-asset-up.png)

6. Select the **Cube** model we created in step 1 and click **OK**.
6. Выберите модель **Cube**, которую мы создали на шаге 1, и нажмите **OK**.

    ![Select Cube model](media/physics-tutorials-select-cube-model.png)
![Выбрать модель куба](media/physics-tutorials-select-cube-model.png)

7. In the **Property Grid**, under **Model > Materials**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
7. В **Сетке свойств** в разделе **Модель > Материалы** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс*  *).

    ![Select material](media/physics-tutorials-material-asset-picker.png)
![Выбрать материал](media/physics-tutorials-material-asset-picker.png)

8. Select the **Transparent** material we created in step 2 and click **OK**.
8. Выберите материал **Прозрачный**, который мы создали на шаге 2, и нажмите **ОК**.

    ![Select material](media/physics-tutorials-select-transparent-material.png)
![Выберите материал](media/physics-tutorials-select-transparent-material.png)

9. In the **Asset View**, select the **Transparent** material asset.
9. В **Просмотре активов** выберите материальный актив **Прозрачный**.

    ![Select material in Asset View](media/physics-tutorials-select-material-asset.png)
![Выберите материал в представлении активов](media/physics-tutorials-select-material-asset.png)

10. In the **Property Grid**, under **Misc > Transparency**, select **Blend**.
10. В **Сетке свойств** в разделе **Разное > Прозрачность** выберите **Смешивание**.

    ![Select Blend](media/physics-tutorials-set-blend.png)
![Выберите Blend](media/physics-tutorials-set-blend.png)

11. By default, the Alpha is set to 1. This makes the material completely opaque. To set it to 50% opacity, set the **Alpha** to 0.5.
11. По умолчанию Альфа установлена ​​на 1. Это делает материал полностью непрозрачным.  Чтобы установить непрозрачность 50%, установите **Альфа** на 0,5.

    ![Select Blend](media/physics-tutorials-set-blend-alpha.png)
![Выберите Blend](media/physics-tutorials-set-blend-alpha.png)

    Now the trigger area will be visible at runtime.
Теперь область триггера будет видна во время выполнения.

## 5. Position the trigger 
## 5. Расположите спусковой крючок

We need to position the trigger between the ground and the sphere, so the ball falls through it.
Нам нужно расположить курок между землей и сферой, чтобы мяч провалился сквозь нее.
    
In the **Property Grid**, under **Transform**, set the **Position** to: *X:0, Y:3, Z:0*
В **Сетке свойств** в разделе **Преобразование** установите для параметра **Положение** значение: *X:0, Y:3, Z:0*.

Now the trigger entity is between the ground and the sphere:
Теперь объект-триггер находится между землей и сферой:

![Trigger between ground and sphere](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)
![Триггер между землей и сферой](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)

## 6. Change the sphere size with script
## 6. Изменить размер сферы с помощью скрипта

If we run the project now (**F5**), the ball falls through the trigger, but nothing happens.
Если мы запустим проект сейчас (**F5**), шарик провалится через триггер, но ничего не произойдет.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-no-effect.png">
<цикл автоматического воспроизведения видео class=
   <source src="media/bouncing-ball-with-trigger-no-effect.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Let's write a script to change the size of the ball when it enters the trigger.
Напишем скрипт для изменения размера шарика при попадании в триггер.

>[!Note]
>[!Примечание]
>For more information about scripts, see [Scripts](../scripts/index.md).
>Для получения дополнительной информации о скриптах см. [Скрипты](../scripts/index.md).

1. In the **Asset View**, click **Add asset** and select **Scripts** > **Async Script**.
1. В **Просмотре активов** нажмите **Добавить актив** и выберите **Скрипты** > **Асинхронный скрипт**.

    ![Use a script](media/physics-tutorials-create-a-trigger-add-async-script.png)
![Использовать скрипт](media/physics-tutorials-create-a-trigger-add-async-script.png)

2. In the **Create a script** dialog, name your script *Trigger* and click **Create script**.
2. В диалоговом окне **Создание сценария** назовите свой сценарий *Триггер* и нажмите **Создать сценарий**.

    2a. If Game Studio asks if you want to save your script, click **Save**.
2а.  Если Game Studio спросит, хотите ли вы сохранить сценарий, нажмите **Сохранить**.
    
    2b. If Game Studio asks if you want to reload the assemblies, click **Reload**.
2б.  Если Game Studio спросит, хотите ли вы перезагрузить сборки, нажмите **Перезагрузить**.

3. Open the script, replace its content with the following code, and save the file:
3. Откройте скрипт, замените его содержимое следующим кодом и сохраните файл:

    ```cs
```CS
    using Stride.Engine;
с помощью Stride.Engine;
    using Stride.Physics;
использование Stride.Physics;
    using System.Threading.Tasks;
использование System.Threading.Tasks;
    using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;

    namespace TransformTrigger
пространство имен
    // You can use any namespace you like for this script.
// Вы можете использовать любое пространство имен для этого скрипта.
    {
{
        public class Trigger : AsyncScript
Триггер открытого класса: AsyncScript
        {
{
            public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
            {
{
                var trigger = Entity.Get<PhysicsComponent>();
var trigger = Entity.Get<PhysicsComponent>();
                trigger.ProcessCollisions = true;
триггер.ProcessCollisions = истина;

                // Start state machine
// Запустить конечный автомат
                while (Game.IsRunning)
пока (Game.IsRunning)
                {
{
                    // 1. Wait for an entity to collide with the trigger
// 1. Подождите, пока объект не столкнется с триггером
                    var firstCollision = await trigger.NewCollision();
var firstCollision = await trigger.NewCollision();

                    var otherCollider = trigger == firstCollision.ColliderA
вар otherCollider = триггер == firstCollision.ColliderA
                        ? firstCollision.ColliderB
?  firstCollision.ColliderB
                        : firstCollision.ColliderA;
: firstCollision.ColliderA;
                    otherCollider.Entity.Transform.Scale = new Vector3(2.0f, 2.0f, 2.0f);
otherCollider.Entity.Transform.Scale = новый Vector3(2.0f, 2.0f, 2.0f);

                    // 2. Wait for the entity to exit the trigger
// 2. Подождите, пока сущность выйдет из триггера
                    await firstCollision.Ended();
ожидание firstCollision.Ended();

                    otherCollider.Entity.Transform.Scale= new Vector3(1.0f, 1.0f, 1.0f);
otherCollider.Entity.Transform.Scale= новый Vector3(1.0f, 1.0f, 1.0f);
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

    This code doubles the size (scale) of any entity that enters the trigger. When the entity exits the trigger, it returns to its original size.
Этот код удваивает размер (масштаб) любого объекта, который входит в триггер.  Когда сущность выходит из триггера, она возвращается к исходному размеру.

4. Reload the assemblies.
4. Перезагрузите сборки.

## 7. Add the script
## 7. Добавляем скрипт

Finally, let's add this script to the trigger entity as a component.
Наконец, давайте добавим этот скрипт в сущность триггера в качестве компонента.

1. In **Game Studio**, select the **Trigger** entity.
1. В **Game Studio** выберите объект **Триггер**.

2. In the **Property Grid**, click **Add component** and select the **Trigger** script.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите сценарий **Триггер**.

    ![Add script component to entity](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)
![Добавить компонент скрипта в сущность](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

## 8. Run the project
## 8. Запустите проект

Run the project (**F5**) to see the trigger in action.
Запустите проект (**F5**), чтобы увидеть триггер в действии.

The ball falls through the trigger, doubles in size, exits the trigger, and returns to its normal size.
Мяч падает через спусковой крючок, удваивается в размере, выходит из спускового крючка и возвращается к своему нормальному размеру.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-scaled_first_frame.png">
<цикл автоматического воспроизведения видео class=
   <source src="media/bouncing-ball-with-trigger-scaled.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## More ideas
## Еще идеи

You can alter the script to make other changes when the sphere enters the trigger. 
Вы можете изменить сценарий, чтобы внести другие изменения, когда сфера входит в триггер.

For example, you can switch the material on the sphere entity. This script switches the material on the Sphere entity from the **Sphere Material** to the **Ground Material** and back again:
Например, вы можете переключить материал на объекте сферы.  Этот скрипт переключает материал на объекте «Сфера» с **Материала сферы** на **Материал земли** и обратно:

```cs
```CS
using Stride.Engine;
с помощью Stride.Engine;
using Stride.Physics;
использование Stride.Physics;
using System.Threading.Tasks;
использование System.Threading.Tasks;
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
using Stride.Rendering;
использование Stride.Rendering;

namespace TransformTrigger
пространство имен
// You can use any namespace you like for this script.
// Вы можете использовать любое пространство имен для этого скрипта.
{
{
    public class Trigger : AsyncScript
Триггер открытого класса: AsyncScript
    {
{
        private Material material1;
частный Материал материала1;
        private Material material2;
частный Материальный материал2;
    
        public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
        {
{
            var trigger = Entity.Get<PhysicsComponent>();
var trigger = Entity.Get<PhysicsComponent>();
            trigger.ProcessCollisions = true;
триггер.ProcessCollisions = истина;
            
            // Make sure the materials are loaded 
// Убедитесь, что материалы загружены
            material1 = Content.Load<Material>("Sphere Material");
material1 = Content.Load<Material>(
            material2 = Content.Load<Material>("Ground Material");
material2 = Content.Load<Material>(

            // Start state machine
// Запустить конечный автомат
            while (Game.IsRunning)
пока (Game.IsRunning)
            {
{
                // 1. Wait for an entity to collide with the trigger
// 1. Подождите, пока объект не столкнется с триггером
                var firstCollision = await trigger.NewCollision();
var firstCollision = await trigger.NewCollision();

                var otherCollider = trigger == firstCollision.ColliderA
вар otherCollider = триггер == firstCollision.ColliderA
                    ? firstCollision.ColliderB
?  firstCollision.ColliderB
                    : firstCollision.ColliderA;
: firstCollision.ColliderA;
                    
                // 2. Change the material on the entity
// 2. Изменяем материал на энтити
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material2;
otherCollider.Entity.Get<ModelComponent>().Materials[0] = material2;
                
                // 3. Wait for the entity to exit the trigger
// 3. Подождать, пока сущность выйдет из триггера
                await firstCollision.Ended();
ожидание firstCollision.Ended();

                // 4. Change the material back to the original one
// 4. Сменить материал обратно на исходный
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material1;
otherCollider.Entity.Get<ModelComponent>().Materials[0] = material1;
            }
}
        }
}
        
        public override void Cancel()
публичное переопределение void Cancel()
        {
{
            Content.Unload(material1);
Содержимое.Выгрузить(материал1);
            Content.Unload(material2);
Содержимое.Выгрузить(материал2);
        }
}
    }
}
}
}
```
```

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-material_first_frame.png">
<цикл автоматического воспроизведения видео class=
   <source src="media/bouncing-ball-with-trigger-material.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## See also
## Смотрите также

* [Tutorial: Create a bouncing ball](create-a-bouncing-ball.md)
* [Учебник: Создание прыгающего мяча](create-a-bouncing-ball.md)
* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Scripts](../scripts/index.md)
* [Скрипты](../scripts/index.md)
