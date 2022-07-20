# Custom attributes

<span class="label label-doc-level">Сложность / Средняя</span>

Вы можете импортировать пользовательские атрибуты, созданные в инструментах моделирования, таких как Maya.

Сейчас вы можете импортировать только пользовательский **animated** аттрибуты. Атрибуты, которые не анимированы, не могут быть импортированы.

![Maya свойства](media/custom-attributes-in-maya.png)

## 1. Импортируйте пользовательских атрибутов

1. Импортировать анимацию. Для получения инструкций см. [Импортирование анимации](import-animations.md).

2. В **Asset View**, выберите анимацию.

    ![Анимация в Asset View](media/assets-in-asset-view1.png)

2. В **Property Grid**, выберите **Import custom attributes**.

    ![Пользовтельские аттрибуты](media/import-custom-attributes.png)

    Когда ассеты будут созданы, Stride импортируют пользовательские атрибуты из файла FBX.

## 2. Управляйте пользовательскими атрибутами из скриптов

Добавьте скрипт, чтобы прочитать пользовательские атрибуты и скопировать их значение в другое свойство. Это может выполнять отдельный скрипт или часть другого [скрипта анимации](animation-scripts.md).

Чтобы найти атрибут, используйте `NodeName_AttributeName`. Например, если у вас есть узел `myNode` с пользовательским атрибутом `myAttribute`, используйте `myNode_myAttribute`.

### Пример скрипта

```cs

...

public class HologramScript : SyncScript
{
    public Material MyMaterial;

    private AnimationComponent animationComponent;
    private AnimationProcessor animationProcessor;

    public override void Start()
    {
        base.Start();

        animationComponent = Entity.GetOrCreate<AnimationComponent>();
        animationProcessor = SceneSystem.SceneInstance.Processors.OfType<AnimationProcessor>().FirstOrDefault();
    }

    public override void Update()
    {
        if (animationProcessor == null || MyMaterial == null)
            return;

        // Animation result may be Null if animation hasn't been played yet.
        var animResult = animationProcessor.GetAnimationClipResult(animationComponent);
        if (animResult == null)
            return;

        // Read the value of the animated custom attribute:
        float emissiveIntensity = 0;
        unsafe
        {
            fixed (byte* structures = animResult.Data)
            {
                foreach (var channel in animResult.Channels)
                {
                    if (!channel.IsUserCustomProperty)
                        continue;

                    var structureData = (float*)(structures + channel.Offset);
                    var factor = *structureData++;
                    if (factor == 0.0f)
                        continue;

                    var value = *structureData;
                    if (channel.PropertyName == "myNode_myProperty")
                        emissiveIntensity = value;
                }
            }
        }

        // Bind the material parameter:

        MyMaterial.Passes[0].Parameters.Set(MaterialKeys.EmissiveIntensity, emissiveIntensity);
    }
}

```

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