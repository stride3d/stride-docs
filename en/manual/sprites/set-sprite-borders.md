# Set sprite borders

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

**Sprite borders** are areas that don't deform when you scale the sprite. These are often useful for sprites used for [UI elements](../ui/ui-libraries.md) such as menu buttons. You can only set sprite borders for sprites set to the **UI** sheet type.

| Original sprite | Scaled without borders  | Scaled with borders  |
|----------|---|---|
|   ![Original sprite](media/original-sprite.png)       |![With border](media/sprite-stretched-no-border.png)   | ![With border](media/sprite-stretched-with-border.png)  |
||Edges are deformed|Edges not deformed|


### Set sprite borders

1. In the Sprite Editor, make sure the **sheet type** is set to **UI**.

    ![Choose UI](media/select-type-UI.png)

    >[!Note]
    >This has no effect on how the sprite is rendered at runtime, but lets you set slightly different properties, including sprite borders.

2. From the **Sprites** list, select the sprite you want to add sprite borders to.

3. Make sure the texture region for the sprite is correct. For information about how to do this, see [Edit sprites](edit-sprites.md).

    ![Select texture region](media/select-starbox.png)

4. In the Sprite Editor toolbar, select **Sprite border resize** tool.

    ![Border resize tool](media/border-resize-tool-icon.png)

5. Drag the sprite borders into position.

<p>
    <video autoplay loop class="responsive-video" poster="media\adjust-sprite-border.png">
       <source src="media\adjust-sprite-border.mp4" type="video/mp4">
    </video>
</p>

>[!Note]
>By default, the sprite borders match the sprite texture region.

>[!TIP]
>You can zoom in and out using **Ctrl + mousewheel** to make precise selections.

## Lock the sprite borders

By default, sprite borders move as you resize the texture region. To stop this happening, click **Lock the sprite borders** in the toolbar.

![Lock icon](media/lock-icon.png)

>[!Note]
>Sprite borders always stay inside the texture region.

## See also

* [Import sprite sheets](import-sprite-sheets.md)
* [Edit sprites](edit-sprites.md)
* [Use sprites](use-sprites.md)
* [UI](../ui/index.md)