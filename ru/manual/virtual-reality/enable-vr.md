# Enable VR
# Включить виртуальную реальность

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This page explains how to add support for the Oculus Rift and Vive devices to your game. Stride doesn't support other VR devices yet.
На этой странице объясняется, как добавить в игру поддержку устройств Oculus Rift и Vive.  Stride пока не поддерживает другие VR-устройства.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Актив графического композитора](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

2. In the graphics compositor editor, select the **forward renderer** node.
2. В графическом редакторе компоновщика выберите узел **forward renderer**.

    ![Select forward renderer](media/select-forward-renderer.png)
![Выбрать передовой рендерер](media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), expand **VR Settings**.
3. В **Сетке свойств** (по умолчанию справа) разверните **Настройки VR**.

    ![VR settings](media/vr-settings.png)
![Настройки VR](media/vr-settings.png)

4. Next to **Required APIs**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
4. Рядом с **Необходимые API** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    Game Studio adds a new API to the list.
Game Studio добавляет в список новый API.

    ![Add VR item](media/add-vr-api.png)
![Добавить элемент виртуальной реальности](media/add-vr-api.png)

5. From the **Item** drop-down menu, select a VR API you want your game to support.
5. В раскрывающемся меню **Элемент** выберите VR API, который вы хотите поддерживать в своей игре.

    ![Add API](media/select-vr-api.png)
![Добавить API](media/select-vr-api.png)

    | API    | Description 
|  API |  Описание
    |--------| --------
|--------|  --------
    | Oculus | Supports Oculus Rift devices (best support for Oculus Rift) 
|  Окулус |  Поддерживает устройства Oculus Rift (лучшая поддержка Oculus Rift)
    | OpenVR | Supports Vive and Oculus Rift devices (best support for Vive) 
|  OpenVR |  Поддерживает устройства Vive и Oculus Rift (лучшая поддержка Vive)
    | Dummy  | Displays the game on the screen with two cameras (one per eye), instead of in the VR device. This is mainly useful for development. To display the dummy view in the Game Studio Scene Editor, make sure the editor is connected to the forward renderer.
|  Манекен |  Отображает игру на экране с двумя камерами (по одной на каждый глаз), а не на VR-устройстве.  В основном это полезно для развития.  Чтобы отобразить фиктивный вид в редакторе сцен Game Studio, убедитесь, что редактор подключен к прямому рендереру.

6. Repeat steps 4 and 5 to add as many APIs as you need.
6. Повторите шаги 4 и 5, чтобы добавить столько API, сколько вам нужно.

7. Make sure the list order is correct. When your game runs, it attempts to use the devices in the list order. For example, if the first item is Dummy, the game uses no VR device. If the last item is Dummy, the game only uses it if there is no VR device available.
7. Убедитесь, что порядок в списке правильный.  Когда ваша игра запускается, она пытается использовать устройства в порядке списка.  Например, если первым элементом является Манекен, в игре не используется устройство виртуальной реальности.  Если последним элементом является Dummy, игра использует его только в том случае, если нет доступного устройства VR.

    To change the order, change the selected VR device in each item.
Чтобы изменить порядок, измените выбранное устройство VR в каждом элементе.

    >[!Tip]
>[!Подсказка]
    >Although the OpenVR API supports both Vive and Oculus Rift devices, the Oculus API provides better support for Oculus Rift. For this reason, we recommend the following list order for most situations:
>Хотя API OpenVR поддерживает как устройства Vive, так и устройства Oculus Rift, API Oculus обеспечивает лучшую поддержку Oculus Rift.  По этой причине мы рекомендуем следующий порядок списка для большинства ситуаций:
    >
>
    >* Item 0: Oculus
>> Пункт 0: Окулус
    >
>
    >* Item 1: OpenVR
>> Пункт 1: OpenVR
    >
>
    >This means your game uses the Oculus API if an Oculus Rift device is connected, and the OpenVR API if another device (eg a Vive) is connected.
>Это означает, что ваша игра использует API Oculus, если подключено устройство Oculus Rift, и API OpenVR, если подключено другое устройство (например, Vive).

8. Enable **VRRendererSettings**.
8. Включите **VRRendererSettings**.

    ![VR renderer settings](media/vr-renderer-settings.png)
![Настройки рендерера VR](media/vr-renderer-settings.png)

Your game is now ready to use VR.
Теперь ваша игра готова к использованию VR.

>[!Note]
>[!Примечание]
>After you change APIs, you need to reload the project (**File > Reload project**) for the change to take effect at runtime.
>После изменения API необходимо перезагрузить проект (**Файл > Перезагрузить проект**), чтобы изменения вступили в силу во время выполнения.

## VR properties
## VR свойства

| Property                | Description      
|  Недвижимость |  Описание
|-------------------------|--------
|-------------------------|--------
| Ignore camera rotation  | Disable camera movement from inputs other than VR devices, helping to reduce [VR sickness](vr-sickness.md)
|  Игнорировать вращение камеры |  Отключите движение камеры от входов, отличных от устройств VR, что поможет уменьшить [болезнь виртуальной реальности] (vr-sickness.md)
| Resolution scale        | The resolution of the image displayed in the VR device. Higher resolutions produce better images, but require more GPU.
|  Шкала разрешения |  Разрешение изображения, отображаемого на устройстве VR.  Более высокое разрешение дает более качественные изображения, но требует большего количества графического процессора.

## Multisample anti-aliasing 
## Мультисэмпловое сглаживание

As aliasing artifacts are more obvious in VR, we recommend you enable **MSAA** (multisample anti-aliasing) in the forward renderer properties (above the VR settings).
Поскольку артефакты алиасинга более очевидны в виртуальной реальности, мы рекомендуем вам включить **MSAA** (мультисэмпловое сглаживание) в свойствах прямого рендеринга (над настройками VR).

![MSAA](media/MSAA.png)
![MSAA](носитель/MSAA.png)

>[!Note]
>[!Примечание]
>MSAA isn't supported for Direct3D 11 or lower.
> MSAA не поддерживается для Direct3D 11 или более ранней версии.

## Disable screen synchronization
## Отключить синхронизацию экрана

For best performance, VR games need to run at 90FPS. This means you have to turn off synchronization with your monitor. 
Для лучшей производительности VR-игры должны работать со скоростью 90 кадров в секунду.  Это означает, что вы должны отключить синхронизацию с вашим монитором.

For now, this is done in a script. We recommend you use `IsDrawDesynchronized` in `IsFixedTimeStep`.
Пока это делается в скрипте.  Мы рекомендуем вам использовать `IsDrawDesynchronized` в `IsFixedTimeStep`.

```cs
```CS
using System;
с помощью системы;
using Stride.Engine;
с помощью Stride.Engine;

namespace VRSandbox
пространство имен VRSandbox
{
{
    class VRSandboxApp
класс VRSandboxApp
    {
{
        static void Main(string[] args)
статическая пустота Main (string [] args)
        {
{
            using (var game = new Game())
используя (var game = new Game())
            {
{
                //VR needs to run at 90 fps, vsync must be disabled, draw must be not synchronized
// VR должен работать со скоростью 90 кадров в секунду, vsync должен быть отключен, отрисовка не должна быть синхронизирована
                //You might want to set physics time step to 90 fps as well if you use character controller with unregular movements, but please avoid that! use Kinematic rigidbodies when possible.
// Возможно, вы также захотите установить шаг физического времени на 90 кадров в секунду, если вы используете контроллер персонажа с нерегулярными движениями, но, пожалуйста, избегайте этого!  по возможности используйте кинематические жесткие тела.
                game.IsFixedTimeStep = true;
game.IsFixedTimeStep = true;
                game.IsDrawDesynchronized = true;
game.IsDrawDesynchronized = истина;
                game.GraphicsDeviceManager.SynchronizeWithVerticalRetrace = false;
game.GraphicsDeviceManager.SynchronizeWithVerticalRetrace = false;
                game.TargetElapsedTime = TimeSpan.FromSeconds(1 / 90.0f);
game.TargetElapsedTime = TimeSpan.FromSeconds(1/90.0f);
                game.Run();
игра.Выполнить();
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

## See also
## Смотрите также

* [VR sickness](vr-sickness.md)
* [VR болезнь](vr-sickness.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)
* [Композитор графики](../graphics/graphics-compositor/index.md)
