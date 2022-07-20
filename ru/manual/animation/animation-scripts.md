# Скрипты анимации

<span class="label label-doc-level">Сложность / Средняя</span>
<span class="label label-doc-audience">Область / Код</span>

Анимации контролируются с помощью скриптов.

Вы можете добавить [AnimationComponent](xref:Stride.Engine.AnimationComponent) в сущности и [настроить параметры анимации](set-up-animations.md) в Game Studio. [AnimationComponent](xref:Stride.Engine.AnimationComponent) класс предназначен для использования в основном из скриптов. 

The more useful properties include:

| Свойство | Описание
| -------- | -----------
| [Animations](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_Animations) | Получает анимацию, связанные с этим
[AnimationComponent](xref:Stride.Engine.AnimationComponent)
| [BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder) | Получает или устанавливает дерево смешивания анимации. Обратите внимание, что вы можете создавать пользовательские деревья смешивания; Для получения дополнительной информации см. [Пользовательские деревья смешивания](custom-blend-trees.md)
| [PlayingAnimations](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_PlayingAnimations) | Получает список активных анимаций.Используйте его, чтобы настроить старт анимации. Игровая анимация автоматически обновляется процессором анимации, поэтому будьте осторожны при изменении списка или сохраняют ссылку на воспроизводимую анимацию

>[!Note]
>Анимации на которые вы ссылаетесь в скрипте, должны быть добавлены в ту же сущность под [AnimationComponent](xref:Stride.Engine.AnimationComponent).

>![Анимации добавленные в компонент](media/animations-added-to-component.png)

>Для получения дополнительной информации см. [Настройка анимации](set-up-animations.md).

## Использование встроеного **AnimationStart** скрипт

Stride содержит встроенный **AnimationStart** скрипт. Вы можете использовать этот скрипт в качестве шаблона, чтобы написать свои собственные скрипты анимации.

Что бы использовать **AnimationStart** скрипт:

1. В **Asset View** (нижняя панель по умолчанию), нажмите **Add asset**.

2. Выберите **Add asset > Scripts > Animation start**.

    ![Добавление скрипта анимации](media/animations-additive-animations-animation-start.png)

3. Укажите имя скрипта и нажмите **Create script**.

    ![Создание скрипта](media/name-animation-script.png)

    3a. Если Game Studio спрашивает, хотите ли вы сохранить свой скрипт, нажмите **Save script**.
    
    3b. Если Game Studio спрашивает, хотите ли вы перезагрузить сборки, нажмите **Reload assemblies**.

4. Отредактируйте скрипт по мере необходимости и сохраните его.

## Пример скрипта анимации

Этот пример скрипта назначает простую анимацию персонажу, основанную на скорости ходьбы.

```cs

...

public class AnimationClipExample : SyncScript
{
    public float MovementSpeed { get; set; } = 0f;

    private float walkingSpeedLimit = 1.0f;

    // Assuming the script is attached to an entity which has an animation component
    private AnimationComponent animationComponent;

    public override void Start()
    {
        // Cache some variables we'll need later
        animationComponent = Entity.Get<AnimationComponent>();
        animationComponent.Play("Idle");
    }

    protected void PlayAnimation(string name)
    {
        if (!animationComponent.IsPlaying(name))
            animationComponent.Play(name);
    }

    public override void Update()
    {
        if (MovementSpeed <= 0)
        {
            PlayAnimation("Idle");
        }
        else if (MovementSpeed <= walkingSpeedLimit)
        {
            PlayAnimation("Walk");
        }
        else 
        {
            PlayAnimation("Run");
        }
    }
}

```

## Переопределение дерева смешивания анимации

Вы также можете переопределить дерево смешивания анимации и сделать все смешивание анимации в скрипте. Шаблоны *First-person shooter*, *Third-person platformer* и *Top-down RPG*, которые используют некоторые продвинутые методы, являются примерами того, как это сделать. Для получения дополнительной информации см. [Пользовательские деревья смешивания](custom-blend-trees.md).

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
