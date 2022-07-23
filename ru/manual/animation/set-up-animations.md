# Настройка анимации

<span class="label label-doc-level">Сложность / Лёгкая</span>
<span class="label label-doc-audience">Область / Дизайн</span>
<span class="label label-doc-audience">Область / Код</span>

После того как Вы [импортировали анимацию из ассетов](import-animations.md), Вам нужно добавить их в сущность и проиграть их с помощью скрипта.

## 1. Добавьте ассет анимации в сущность

1. В **Scene Editor**, выберите сущность, которую хотите анимировать.

    ![Выбор сущности](media/select-entity.png)

    >[!Note]
    >Чтобы анимировать сущность, сущность должна иметь компонент модели.

2. В **Property Grid**, нажмите **Add component** и выберите **Animations**.

    ![Выбор сущности](media/select-animation-component.png)

    Game Studio добавит компонент анимации в сущность.

3. В свойствах компонентов анимации рядом с **Animations**, нажмите ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) чтобы добавить новую анимацию в библиотеку.

4. Введите имя для анимации и нажмите Enter.

    ![Добавление анимации](media/add-animation.png)

    >[!Tip]
    >Когда вы играете в анимации, используя сценарии позже, вы используете это имя, **НЕ** имя ассета анимации.Чтобы облегчить определение анимации, мы рекомендуем вам дать свою анимацию то же имя, что и ассету анимации.
    
5. Нажмите ![иконку руки](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Выберите ассет](media/pick-asset-up.png)

    Откроется **Select an asset** окно.

6. Выберите ассет анимации, который вы хотите добавить и нажать **OK**.

    ![Выбор ассета](media/asset-picker.png)

    Game Studio добавит ассет анимации в сущность.

    ![Добавленный ассет анимации](media/animation-asset-added.png)

Вы можете добавить столько анимаций в компонент анимации, сколько вам нужно. *Property Grid* перечисляет их в алфавитном порядке.

![Список анимаций](media/animations-list.png)

## 2. Создайте скрипт, чтобы проиграть анимацию

После того, как вы добавите анимацию в сущность, вам нужно проиграть их с помощью [скрипта](../scripts/index.md).

### Пример скрипта

```cs

...

public class SimpleAnimationScript : StartupScript
{
    public override void Start()
    {
        Entity.Get<AnimationComponent>().Play("Walk");
    }
}
```

Этот сценарий ищет анимацию с именем *Walk* в компоненте анимации на объекте.

Для получения дополнительной информации о создании скриптов анимации см.[скрипты анимации](animation-scripts.md).

## 3. Добавить скрипт в сущность

1. В **Scene Editor**, выберите сущность, которую хотите анимировать.

    ![Выбор сущности](media/select-entity.png)

2. В **Property Grid**, нажмите **Add component** и выберите скрипт анимации, который вы хотите добавить.

    ![Выбор сущности](media/add-animation-script-component.png)

Game Studio добавит скрипт в качестве компонента. Вы можете настроить [публичные переменные, которые вы определяете в скрипте](../scripts/public-properties-and-fields.md) в **Property Grid** под свойствами компонентов скрипта.

![Выбор сущности](media/animations-setup3.png)

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