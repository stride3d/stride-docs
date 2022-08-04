# Use sprites
# Использовать спрайты

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

To add a sprite to a scene, add a **sprite component** to an entity. Afterwards, you can control the sprite with a script.
Чтобы добавить спрайт в сцену, добавьте к объекту **компонент спрайта**.  После этого вы можете управлять спрайтом с помощью скрипта.

## Add a sprite component
## Добавить компонент спрайта

1. In the **Scene Editor**, select the entity you want to add a sprite to.
1. В **Редакторе сцен** выберите объект, к которому вы хотите добавить спрайт.

    >[!Tip]
>[!Подсказка]
    >To create an entity, right-click the scene or Entity Tree and select **Empty entity**.
>Чтобы создать объект, щелкните правой кнопкой мыши сцену или дерево объектов и выберите **Пустой объект**.

2. In the **Property Grid**, click **Add component** and select **Sprite**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Спрайт**.

    ![Sprite sheet](media/SpriteEntity.png)
![Лист спрайтов](media/SpriteEntity.png)

    Game Studio adds a Sprite component to the entity.
Game Studio добавляет к объекту компонент Sprite.

3. From the **Asset View**, drag the sprite sheet to the **Source** field in the Sprite component:
3. Из **Asset View** перетащите лист спрайтов в поле **Source** в компоненте Sprite:

    <p>
<p>
        <video autoplay loop class="responsive-video" poster="media\drag-sprite-sheet-to-asset-picker.png">
<цикл автозапуска видео class=
        <source src="media\drag-sprite-sheet-to-asset-picker.mp4" type="video/mp4">
<source src=
        </video>
</видео>
    </p>
</p>

    Alternatively, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):
Либо нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**):

    ![Pick asset up](media/pick-asset-up.png)
![Поднять актив](media/pick-asset-up.png)

    Then choose a sprite sheet:
Затем выберите лист спрайтов:

    ![Select an asset](media/asset-picker.png)
![Выберите ресурс](media/asset-picker.png)

Game Studio adds the sprite to the entity.
Game Studio добавляет спрайт к сущности.

### Sprite component properties
### Свойства компонента спрайта

You can access the sprite component properties in the **Property Grid**.
Вы можете получить доступ к свойствам компонента спрайта в **Сетке свойств**.

![Sprite component properties](media/sprite-component-properties.png)
![Свойства компонента спрайта](media/sprite-component-properties.png)

| Property   | Function    
|  Недвижимость |  Функция
|------------|-----------
|------------|-----------
| Source | The source image file for the sprite
|  Источник |  Исходный файл изображения для спрайта
| Type | **Sprites** have 3D space in the scene. <br><p>**Billboards** always face the camera and appear fixed in 3D space.
|  Тип |  **Спрайты** имеют трехмерное пространство в сцене.  <br><p>**Рекламные щиты** всегда обращены к камере и выглядят зафиксированными в трехмерном пространстве.
| Color | Applies a color to the sprite
|  Цвет |  Применяет цвет к спрайту
| Intensity | The intensity by which the color is scaled (mainly used for rendering LDR sprites in HDR scenes)
|  Интенсивность |  Интенсивность, по которой масштабируется цвет (в основном используется для рендеринга спрайтов LDR в сценах HDR).
| Premultiply alpha | Premultiply color components by their alpha component
|  Предумножить альфа |  Предварительное умножение компонентов цвета на их альфа-компонент
| Ignore depth | Ignore the depth of other elements in the scene when rendering the sprite. This always places the sprite on top of previous elements. 
|  Игнорировать глубину |  Игнорируйте глубину других элементов сцены при рендеринге спрайта.  Это всегда помещает спрайт поверх предыдущих элементов.
| Alpha cutoff | Ignore pixels with low alpha values when rendering the sprite
|  Альфа-отсечка |  Игнорировать пиксели с низким значением альфа-канала при рендеринге спрайта.
| Sampler | The texture sampling method used for the sprite: Point (nearest), Linear, or Anisotropic
|  Сэмплер |  Метод выборки текстуры, используемый для спрайта: точечный (ближайший), линейный или анизотропный.
| Swizzle | How the color channels are accessed. <br><p>**Default** leaves the image unchanged (finalRGB = originalRGB) <br><p>**Normal map** uses the color channels as a [normal map](../graphics/textures/normal-maps.md) <br><p>**Grayscale (alpha)** uses only the R channel (finalRGBA = originalRRRR), so the sprite is red <br><p>**Grayscale (opaque)** is the same as **Grayscale (alpha)**, but uses a value of `1` for the alpha channel, so the sprite is opaque
|  Свизл |  Как осуществляется доступ к цветовым каналам.  <br><p>**По умолчанию** оставляет изображение без изменений (finalRGB = originalRGB) <br><p>**Карта нормалей** использует цветовые каналы как [карту нормалей](../graphics/textures/  normal-maps.md) <br><p>**Оттенки серого (альфа)** использует только канал R (finalRGBA = originalRRRR), поэтому спрайт красный <br><p>**Оттенки серого (непрозрачный)**  то же самое, что и **Оттенки серого (альфа)**, но использует значение `1` для альфа-канала, поэтому спрайт непрозрачен.
| Render group | Which render group the sprite belongs to. Cameras can render different groups. For more information, see [Render groups and render masks](../graphics-compositor/render-groups-and-masks.md).
|  Группа визуализации |  К какой группе рендеринга принадлежит спрайт.  Камеры могут отображать разные группы.  Дополнительные сведения см. в разделе [Группы рендеринга и маски рендеринга](../graphics-compositor/render-groups-and-masks.md).

## Use sprites in a script
## Использовать спрайты в скрипте

You can use scripts to render sprites at runtime. To do this, attach the script to an entity with a sprite component.
Вы можете использовать сценарии для рендеринга спрайтов во время выполнения.  Для этого прикрепите скрипт к сущности со спрайтовым компонентом.

For information about how to add scripts to entities, see [Use a script](../scripts/use-a-script.md).
Для получения информации о том, как добавлять скрипты к объектам, см. [Использование скрипта](../scripts/use-a-script.md).

### Code sample
### Пример кода

This script displays a sprite that advances to the next sprite in the index every second. After it reaches the end of the sprite index, it loops.
Этот скрипт отображает спрайт, который каждую секунду переходит к следующему спрайту в индексе.  После того, как он достигает конца индекса спрайта, он зацикливается.

```cs
```CS
using Stride.Rendering.Sprites;
использование Stride.Rendering.Sprites;

public class Animation : SyncScript
Анимация открытого класса: SyncScript
{
{
   // Declared public member fields and properties are displayed in Game Studio.
// Объявленные общедоступные поля и свойства элементов отображаются в Game Studio.
   private SpriteFromSheet sprite;
частный спрайт SpriteFromSheet;
   private DateTime lastFrame;
частный DateTime lastFrame;

   public override void Start()
публичное переопределение void Start()
   {
{
       // Initialize the script.
// Инициализируем скрипт.
       sprite = Entity.Get<SpriteComponent>().SpriteProvider as SpriteFromSheet;
sprite = Entity.Get<SpriteComponent>().SpriteProvider as SpriteFromSheet;
       lastFrame = DateTime.Now;
последний кадр = ДатаВремя.Сейчас;
   }
}

   public override void Update()
публичное переопределение void Update()
   {
{
      // Do something every new frame.
// Делать что-то в каждом новом кадре.
      if ((DateTime.Now - lastFrame) > new TimeSpan(0, 0, 1))
если ((DateTime.Now - lastFrame) > новый TimeSpan (0, 0, 1))
      {
{
         sprite.CurrentFrame += 1;
спрайт.CurrentFrame += 1;
         lastFrame = DateTime.Now;
последний кадр = ДатаВремя.Сейчас;
      }
}
   }
}
}
}
```
```

## See also
## Смотрите также

* [Import sprite sheets](import-sprite-sheets.md)
* [Импорт листов спрайтов](import-sprite-sheets.md)
* [Edit sprites](edit-sprites.md)
* [Редактировать спрайты](edit-sprites.md)
