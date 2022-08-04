# Overlays
# Оверлеи

In VR games, you can display [textures](../graphics/textures/index.md) (including [render textures](../graphics/graphics-compositor/render-textures.md)) as overlays that appear to float in front of the player. This is especially useful for UIs.
В VR-играх вы можете отображать [текстуры](../graphics/textures/index.md) (включая [рендеринговые текстуры](../graphics/graphics-compositor/render-textures.md)) в виде наложений, которые выглядят  парить перед игроком.  Это особенно полезно для пользовательских интерфейсов.

> [!Note]
> [!Примечание]
> You can't see overlays when you don't run your game in your VR device. This is because the VR device itself creates the overlay.
> Вы не можете видеть оверлеи, если не запускаете игру на своем VR-устройстве.  Это связано с тем, что устройство VR само создает наложение.

This page explains how to add an overlay. To display a **UI** in an overlay, you need to render the UI to a render texture, and display the render texture in the overlay. For instructions, see [Display a UI in an overlay](display-a-UI-in-an-overlay.md).
На этой странице объясняется, как добавить наложение.  Чтобы отобразить **пользовательский интерфейс** в наложении, вам необходимо преобразовать пользовательский интерфейс в текстуру рендеринга и отобразить текстуру рендеринга в наложении.  Инструкции см. в разделе [Отображение пользовательского интерфейса в оверлее](display-a-UI-in-an-overlay.md).

## Add an overlay
## Добавить наложение

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Актив графического композитора](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    For more information about the graphics compositor, see the [Graphics compositor](../graphics/graphics-compositor/index.md) page.
Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics/graphics-compositor/index.md).

2. In the graphics compositor editor, select the **forward renderer** node.
2. В графическом редакторе компоновщика выберите узел **forward renderer**.

    ![Select forward renderer](media/select-forward-renderer.png)
![Выбрать передовой рендерер](media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), expand **VR Settings**.
3. В **Сетке свойств** (по умолчанию справа) разверните **Настройки VR**.

    ![VR settings](media/vr-settings.png)
![Настройки VR](media/vr-settings.png)

4. Next to **Overlays**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
4. Рядом с **Оверлеи** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    Game Studio adds a new overlay to the list.
Game Studio добавляет в список новый оверлей.

    ![Add VR item](media/add-overlay.png)
![Добавить элемент виртуальной реальности](media/add-overlay.png)

5. Next to **Texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
5. Рядом с **Текстура** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)
![Выберите текстуру рендеринга](../graphics/graphics-compositor/media/select-render-frame.png)

6. Select the texture you want to display in the overlay and click **OK**.
6. Выберите текстуру, которую вы хотите отобразить в наложении, и нажмите **ОК**.

Your game is now ready to render the UI to an overlay in your VR device.
Теперь ваша игра готова к отображению пользовательского интерфейса в оверлей на вашем VR-устройстве.

## Multiple overlays
## Несколько наложений

You can add as many overlays as you need. To add another overlay, click **Add to overlays** ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) and follow the instructions above from step 4.
Вы можете добавить столько наложений, сколько вам нужно.  Чтобы добавить еще один оверлей, нажмите **Добавить к оверлеям** ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) и следуйте приведенным выше инструкциям, начиная с шага 4.

> [!Note]
> [!Примечание]
> If overlays overlap in the user view, overlays first in the list appear on top.
> Если наложения перекрываются в пользовательском представлении, наложения, находящиеся первыми в списке, отображаются сверху.

## Overlay properties
## Свойства наложения

![Overlay properties](media/overlay-properties.png)
![Свойства наложения](media/overlay-properties.png)

| Property       | Description   
|  Недвижимость |  Описание
|----------------|------------------
|----------------|------------------
| Texture        | The texture displayed in the overlay    
|  Текстура |  Текстура, отображаемая в оверлее
| Local position | The position of the overlay relative to the user                           
|  Местное положение |  Положение оверлея относительно пользователя
| Local rotation | The rotation of the overlay relative to the user                           
|  Местное вращение |  Поворот оверлея относительно пользователя
| Surface size   | The size of the overlay in [world units](../game-studio/world-units.md)                        
|  Размер поверхности |  Размер оверлея в [единицах мира](../game-studio/world-units.md)
| Follows head   | Follow the user's head so the overlay is always in front of their view
|  Следит за головой |  Следите за головой пользователя, чтобы оверлей всегда находился перед его глазами.

## VR template
## VR-шаблон

For an example of a UI overlay implemented in a VR game, see the VR template included with Stride.
Пример наложения пользовательского интерфейса, реализованного в игре виртуальной реальности, см. в шаблоне виртуальной реальности, включенном в Stride.

![VR template](media/template-virtual-reality.png)
![Шаблон VR](media/template-virtual-reality.png)

## See also
## Смотрите также

* [Display a UI in an overlay](display-a-UI-in-an-overlay.md)
* [Отображать пользовательский интерфейс в оверлее](display-a-UI-in-an-overlay.md)
* [Render textures](../graphics/graphics-compositor/render-textures.md)
* [Рендеринг текстур](../graphics/graphics-compositor/render-textures.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)
* [Композитор графики](../graphics/graphics-compositor/index.md)
