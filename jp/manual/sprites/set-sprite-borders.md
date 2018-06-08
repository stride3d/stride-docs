# スプライトの境界を設定する

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

**スプライトの境界**は、スプライトを拡大縮小したときに変形しない領域です。メニュー ボタンなどの UI 要素に使用するスプライトに役に立つことがよくあります。スプライトの境界を設定できるのは、**UI** シートの種類として設定されているスプライトだけです。

| 元のスプライト | 境界のない拡大縮小  | 境界のある拡大縮小  |
|----------|---|---|
|   ![Original sprite](media/original-sprite.png)       |![With border](media/sprite-stretched-no-border.png)   | ![With border](media/sprite-stretched-with-border.png)  |

最終的な画像で、スプライトの境界によってスプライトの変形の端が止まっていることに注意してください。スプライトの内部は拡大縮小されています。

### スプライトの境界を設定する

1. スプライト エディターで、［Sheet type］を［UI］に設定します。

    ![Choose UI](media/select-type-UI.png)

    >[!NOTE]
    >この設定は実行時のスプライトのレンダリング方法には影響を与えませんが、スプライトの境界など、設定できるプロパティが少し異なります。

2. ［Sprites］の一覧から、スプライトの境界を追加するスプライトを選択します。

3. スプライトのテクスチャ領域が正しいことを確認します。詳細な方法については、「[スプライトを編集する](edit-sprites.md)」を参照してください。

    ![Select texture region](media/select-starbox.png)

4. スプライト エディターのツールバーで、［Sprite border resize］ツールを選択します。

    ![Border resize tool](media/border-resize-tool-icon.png)

5. スプライトの境界を目的の位置にドラッグします。

<p>
    <video autoplay loop class="responsive-video" poster="media\adjust-sprite-border.png">
       <source src="media\adjust-sprite-border.mp4" type="video/mp4">
    </video>
</p>

>[!NOTE]
>既定では、スプライトの境界はスプライトのテクスチャ領域と一致します。

>[!TIP]
>**Ctrl キーを押しながらマウス ホイールを回して**ズーム イン/アウトすると、正確に選択できます。

## スプライトの境界をロックする

既定では、テクスチャ領域のサイズを変更するとスプライトの境界は移動します。移動しないようにするには、ツールバーの［Lock the sprite borders］をクリックします。

![Lock icon](media/lock-icon.png)

>[!NOTE]
>スプライトの境界は、常に、テクスチャ領域の内部に留まっています。

## 関連項目

* [スプライト シートをインポートする](import-sprite-sheets.md)
* [スプライトを編集する](edit-sprites.md)
* [スプライトを使用する](use-sprites.md)
