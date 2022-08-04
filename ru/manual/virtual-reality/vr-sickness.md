# Virtual reality sickness
# Болезнь виртуальной реальности

Some players experience nausea and discomfort when playing VR games. Though the causes aren't completely understood, it seems to be mainly caused by the player moving around a virtual environment while their real-world body remains still.
Некоторые игроки испытывают тошноту и дискомфорт при игре в VR-игры.  Хотя причины до конца не выяснены, кажется, что в основном это вызвано тем, что игрок перемещается по виртуальной среде, в то время как его тело в реальном мире остается неподвижным.

There may be no way to completely prevent VR sickness in every player. However, there are a few things to keep in mind to minimize it in your game. We recommend you test your game with as wide a range of players as possible.
Возможно, не существует способа полностью предотвратить болезнь виртуальной реальности у каждого игрока.  Тем не менее, есть несколько вещей, о которых следует помнить, чтобы свести его к минимуму в вашей игре.  Мы рекомендуем вам протестировать игру на как можно большем количестве игроков.

## Camera movement
## Движение камеры

In general, players should control the camera by moving their head. Moving the camera by other methods, such as gamepads or keyboards, seems to be the biggest cause of VR sickness, especially with horizontal (yaw) movement.
В общем, игрокам следует управлять камерой, двигая головой.  Перемещение камеры другими способами, такими как геймпады или клавиатуры, по-видимому, является основной причиной ухудшения виртуальной реальности, особенно при горизонтальном (рыскании) движении.

### Disable camera movement
### Отключить движение камеры

To disable camera movement from inputs other than VR devices:
Чтобы отключить движение камеры от входов, отличных от устройств VR:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Актив графического композитора](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

2. Select the **ForwardRenderer**.
2. Выберите **ForwardRenderer**.

    ![Select forward renderer](media/select-forward-renderer.png)
![Выбрать передовой рендерер](media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), expand **VR Settings**.
3. В **Сетке свойств** (по умолчанию справа) разверните **Настройки VR**.

    ![VR settings](media/vr-settings.png)
![Настройки VR](media/vr-settings.png)

4. Select **Ignore camera rotation**. 
4. Выберите **Игнорировать поворот камеры**.

    ![Ignore camera rotation](media/ignore-camera-rotation.png)
![Игнорировать вращение камеры](media/ignore-camera-rotation.png)

For more information about the graphics compositor, see the [Graphics compositor](../graphics/graphics-compositor/index.md) page.
Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics/graphics-compositor/index.md).

## Framerate
## Частота кадров

In general, the higher the framerate, the less likely players are to become sick. Framerates below 60fps seem especially likely to cause sickness.
В целом, чем выше частота кадров, тем меньше вероятность того, что игроки заболеют.  Частота кадров ниже 60 кадров в секунду кажется особенно вероятной причиной болезни.

## Vection
## Вектор

Vection is the sensation of movement caused by the environment changing. You might have experienced this in the real world; for example, if you've been on a stationary train and a nearby train moves, creating the sensation that your own train is moving in the opposite direction. This can cause sickness in VR.
Векция — это ощущение движения, вызванное изменением окружающей среды.  Вы могли испытать это в реальном мире;  например, если вы были в стоящем поезде, а ближайший поезд движется, создается ощущение, что ваш собственный поезд движется в противоположном направлении.  Это может вызвать недомогание в виртуальной реальности.

To reduce vection in your game, use simple textures and reduce the player movement speed. 
Чтобы уменьшить вектор в игре, используйте простые текстуры и уменьшите скорость передвижения игрока.

## Acceleration
## Ускорение

Acceleration can cause VR sickness. For example, if the player moves on a train that speeds up and slows down, this causes more sickness than if the train moves at a constant speed.
Ускорение может вызвать VR-болезнь.  Например, если игрок движется на поезде, который ускоряется и замедляется, это вызывает больше болезней, чем если бы поезд двигался с постоянной скоростью.

## Static point of reference
## Статическая точка отсчета

Adding a static point of reference to the player view, such as a HUD or virtual "helmet", may help reduce sickness.
Добавление статической точки отсчета к виду игрока, такой как HUD или виртуальный «шлем», может помочь уменьшить тошноту.

## See also
## Смотрите также

* [Virtual reality sickness (Wikipedia)](https://en.wikipedia.org/wiki/Virtual_reality_sickness)
* [Болезнь виртуальной реальности (Википедия)](https://en.wikipedia.org/wiki/Virtual_reality_sickness)
