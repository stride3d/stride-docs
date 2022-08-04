# Preview a scene in VR
# Предварительный просмотр сцены в VR

To preview your scene in your VR device, connect the editor to a [VR-enabled](enable-vr.md) renderer.
Чтобы предварительно просмотреть сцену на устройстве VR, подключите редактор к рендереру [с поддержкой VR](enable-vr.md).

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/vr-editor_640.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/vr-editor_640.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

To do this:
Сделать это:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](media/graphics-compositor-VR-template.png)
![Редактор графического компоновщика](media/graphics-compositor-VR-template.png)

2. Select the **forward render node** connected to the editor node. For example, in the screenshot below (taken from the Stride VR sample project), the editor is connected to the lower forward renderer node.
2. Выберите **прямой узел рендеринга**, подключенный к узлу редактора.  Например, на снимке экрана ниже (взятом из примера проекта Stride VR) редактор подключен к нижнему переднему узлу рендеринга.

    ![Node connections](media/node-connections.png)
![Подключения узлов](media/node-connections.png)

3. With the forward renderer node selected, in the **Property Grid**, enable **VRRendererSettings**.
3. Выбрав узел прямого рендерера, в **Сетке свойств** включите **VRRendererSettings**.

    ![Select editor renderer](media/enable-vr.png)
![Выберите визуализатор редактора](media/enable-vr.png)

Your VR device displays the scene preview. To display the scene on your monitor instead, disable **VRRendererSettings**.
Ваше устройство VR отображает предварительный просмотр сцены.  Чтобы вместо этого отобразить сцену на мониторе, отключите **VRRendererSettings**.

## Create a separate renderer to preview scenes in VR
## Создайте отдельный рендерер для предпросмотра сцен в VR

If your editor and game nodes are connected to the same forward renderer, you might want to create a separate renderer dedicated to the editor. This lets you easily switch between previewing the scene in your VR device and on your monitor.
Если ваш редактор и игровые узлы подключены к одному и тому же прямому рендереру, вы можете создать отдельный рендерер, предназначенный для редактора.  Это позволяет легко переключаться между предварительным просмотром сцены на устройстве виртуальной реальности и на мониторе.

>[!Note]
>[!Примечание]
>If your editor and game nodes already use separate renderers (as in the VR sample project), you don't need to follow these instructions.
>Если ваш редактор и игровые узлы уже используют отдельные рендереры (как в примере проекта VR), вам не нужно следовать этим инструкциям.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics compositor editor](media/graphics-compositor-no-editor-node.png)
![Редактор графического компоновщика](media/graphics-compositor-no-editor-node.png)

2. Create a new forward renderer node. To do this, right-click the game compositor editor and select **Create > Forward renderer**.
2. Создайте новый узел прямого рендеринга.  Для этого щелкните правой кнопкой мыши редактор компоновщика игры и выберите **Создать > Вперед рендерер**.

    ![Create forward renderer](media/create-forward-renderer.png)
![Создать упреждающий рендерер](media/create-forward-renderer.png)

3. Select the **Entry points** node.
3. Выберите узел **Точки входа**.

    ![Entry points node](media/entry-points-node.png)
![Узел точек входа](media/entry-points-node.png)

4. In the **Property Grid**, next to **Editor renderer**, select the forward renderer you created.
4. В **Сетке свойств** рядом с **Редактор рендеринга** выберите созданный вами прямой рендерер.

    ![Select forward renderer](media/select-editor-forward-renderer.png)
![Выбрать передовой рендерер](media/select-editor-forward-renderer.png)

    Stride links the editor to the forward renderer node.
Stride связывает редактор с узлом прямого рендеринга.

    ![Node connections](media/node-connections.png)
![Подключения узлов](media/node-connections.png)

5. Set the properties of the new forward renderer so they're identical to the forward renderer you use to run the game in VR, including the VR settings.
5. Задайте свойства нового прямого рендерера, чтобы они были идентичны тому прямому рендереру, который вы используете для запуска игры в виртуальной реальности, включая настройки виртуальной реальности.

    > [!Tip]
> [!Подсказка]
    > You can right-click a property to copy or paste it.
> Вы можете щелкнуть свойство правой кнопкой мыши, чтобы скопировать или вставить его.

    > ![Copy-paste properties](media/copy-paste-properties.png)
> ![Копировать-вставить свойства](media/copy-paste-properties.png)

    > [!Note]
> [!Примечание]
    > Make sure the forward renderer has VR enabled. For instructions, see [Enable VR](enable-vr.md).
> Убедитесь, что в переднем рендерере включен VR.  Инструкции см. в разделе [Включить VR](enable-vr.md).

Stride displays the scene preview in your VR device. To display the scene on your monitor instead, disable **VRRendererSettings** in the properties of the new forward renderer.
Stride отображает предварительный просмотр сцены на вашем VR-устройстве.  Чтобы вместо этого отобразить сцену на мониторе, отключите **VRRendererSettings** в свойствах нового прямого рендерера.

![Enable VR](media/vr-renderer-settings.png)
![Включить VR](media/vr-renderer-settings.png)

## See also
## Смотрите также

* [Enable VR](enable-vr.md)
* [Включить VR](enable-vr.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)
* [Композитор графики](../graphics/graphics-compositor/index.md)
