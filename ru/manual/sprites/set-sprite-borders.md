# Set sprite borders
# Установить границы спрайта

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Sprite borders** are areas that don't deform when you scale the sprite. These are often useful for sprites used for [UI elements](../ui/ui-libraries.md) such as menu buttons. You can only set sprite borders for sprites set to the **UI** sheet type.
**Границы спрайта** — это области, которые не деформируются при масштабировании спрайта.  Они часто полезны для спрайтов, используемых для [элементов пользовательского интерфейса] (../ui/ui-libraries.md), таких как кнопки меню.  Вы можете установить границы спрайтов только для спрайтов, настроенных на тип листа **UI**.

| Original sprite | Scaled without borders  | Scaled with borders  |
|  Оригинальный спрайт |  Масштабируется без границ |  Масштабируется с границами |
|----------|---|---|
|----------|---|---|
|   ![Original sprite](media/original-sprite.png)       |![With border](media/sprite-stretched-no-border.png)   | ![With border](media/sprite-stretched-with-border.png)  |
|  ![Исходный спрайт](media/original-sprite.png) |![С рамкой](media/sprite-stretched-no-border.png) |  ![С рамкой](media/sprite-stretched-with-border.png) |
||Edges are deformed|Edges not deformed|
||Ребра деформированы|Ребра не деформированы|


### Set sprite borders
### Установить границы спрайта

1. In the Sprite Editor, make sure the **sheet type** is set to **UI**.
1. В редакторе спрайтов убедитесь, что для **типа листа** установлено значение **UI**.

    ![Choose UI](media/select-type-UI.png)
![Выберите интерфейс](media/select-type-UI.png)

    >[!Note]
>[!Примечание]
    >This has no effect on how the sprite is rendered at runtime, but lets you set slightly different properties, including sprite borders.
> Это не влияет на то, как спрайт отображается во время выполнения, но позволяет вам установить немного другие свойства, включая границы спрайта.

2. From the **Sprites** list, select the sprite you want to add sprite borders to.
2. В списке **Спрайты** выберите спрайт, к которому вы хотите добавить границы спрайта.

3. Make sure the texture region for the sprite is correct. For information about how to do this, see [Edit sprites](edit-sprites.md).
3. Убедитесь, что область текстуры для спрайта указана правильно.  Информацию о том, как это сделать, см. в разделе [Редактировать спрайты](edit-sprites.md).

    ![Select texture region](media/select-starbox.png)
![Выберите область текстуры](media/select-starbox.png)

4. In the Sprite Editor toolbar, select **Sprite border resize** tool.
4. На панели инструментов редактора спрайтов выберите инструмент **Изменение размера границы спрайта**.

    ![Border resize tool](media/border-resize-tool-icon.png)
![Инструмент изменения размера границы](media/border-resize-tool-icon.png)

5. Drag the sprite borders into position.
5. Перетащите границы спрайта на место.

<p>
<p>
    <video autoplay loop class="responsive-video" poster="media\adjust-sprite-border.png">
<цикл автозапуска видео class=
       <source src="media\adjust-sprite-border.mp4" type="video/mp4">
<source src=
    </video>
</видео>
</p>
</p>

>[!Note]
>[!Примечание]
>By default, the sprite borders match the sprite texture region.
>По умолчанию границы спрайта соответствуют области текстуры спрайта.

>[!TIP]
>[!СОВЕТ]
>You can zoom in and out using **Ctrl + mousewheel** to make precise selections.
>Вы можете увеличивать и уменьшать масштаб, используя **Ctrl + колесико мыши**, чтобы сделать точный выбор.

> [!TIP]
> [!СОВЕТ]
>
>
> For fine-tune control over the sprite borders, adjusting one-by-one in the **Property Grid**
> Для точной настройки границ спрайтов, настраивая их по одному в **Сетке свойств**
>
>
> ![Adjust sprite borders from Property grid](media/adjust-sprite-border-from-property-grid.png)
> ![Настроить границы спрайта из сетки свойств](media/adjust-sprite-border-from-property-grid.png)

## Lock the sprite borders
## Заблокируйте границы спрайта

By default, sprite borders move as you resize the texture region. To stop this from happening, click **Lock the sprite borders** in the toolbar.
По умолчанию границы спрайтов перемещаются при изменении размера области текстуры.  Чтобы этого не произошло, нажмите **Заблокировать границы спрайта** на панели инструментов.

![Lock icon](media/lock-icon.png)
![Значок замка](media/lock-icon.png)

>[!Note]
>[!Примечание]
>Sprite borders always stay inside the texture region.
>Границы спрайтов всегда остаются внутри области текстуры.

## See also
## Смотрите также

* [Import sprite sheets](import-sprite-sheets.md)
* [Импорт листов спрайтов](import-sprite-sheets.md)
* [Edit sprites](edit-sprites.md)
* [Редактировать спрайты](edit-sprites.md)
* [Use sprites](use-sprites.md)
* [Использовать спрайты](use-sprites.md)
* [UI](../ui/index.md)
* [UI](../ui/index.md)
