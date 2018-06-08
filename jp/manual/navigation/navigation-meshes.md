# ナビゲーション メッシュ

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">レベル デザイナー</span>
<span class="label label-doc-audience">プログラマー</span>

**ナビゲーション メッシュ**は、ナビゲーション コンポーネントを持つエンティティがナビゲートできる領域を形成します。作成された各[ナビゲーション グループ](navigation-groups.md)に対して、ナビゲーション メッシュにレイヤーが作成されます。

Game Studio では、ナビゲーション メッシュはシーン内の色付きのオーバーレイとして表示されます。このオーバーレイは、そのレイヤーのナビゲーション グループ内のエンティティが移動できる場所を示します。シーンを編集すると、メッシュがリアルタイムで更新されます。

<p>
<video autoplay loop class="responsive-video" poster="media/withOutlineAE.jpg">
   <source src="media/withOutlineAE.mp4" type="video/mp4">
</video>
</p>

## ナビゲーション メッシュを作成する

1. ［Asset view］(既定では下部) で、［Add asset］>［Scenes］>［Navigation mesh］の順にクリックします。

    ![Select Game Settings asset](media/add-navigation-mesh.png)

   ［Navigation Mesh］アセットがプロジェクトに追加されます。

    ![Navigation mesh asset](media/navigation-mesh-in-asset-view.png)

2. ［Asset view］で［Navigation Mesh］を選択し、［Property grid］でこのアセットの［Navigation Mesh］を適用する**シーン**を選択します。

    ![Set navigation mesh properties](media/navigation-mesh-properties.png)

    シーンの詳細については、「[シーン](../game-studio/scenes.md)」を参照してください。

3. ［Selected groups］で ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

    新しい項目がグループのリストに追加されます。

    ![Add navigation group to navigation mesh](media/add-navigation-group-to-navigation-mesh.png)

4. ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、ドロップダウン メニューからグループを選択します。

    ![Choose navigation group](media/choose-navigation-group-in-navigation-mesh.png)

    ナビゲーション メッシュにこのグループのレイヤーが作成されます。作成方法など、グループの詳細については、「[ナビゲーション グループ](navigation-groups.md)」を参照してください。

5. ナビゲーション メッシュを使用するすべてのグループについて、ステップ 3 と 4 を繰り返します。

    >[!NOTE]
    >異なるシーンのナビゲーション メッシュを作成する場合は、別のナビゲーション メッシュ アセットを作成し、アセットの プロパティでシーンを選択します。

## ナビゲーション メッシュのプロパティ

| プロパティ                  | 説明                                                    
|---------------------------|--------------
| Scene                     | このナビゲーション メッシュが適用されるシーンです。
| Included collision groups | ナビゲーション メッシュが使用する衝突グループを設定します。既定では、メッシュはすべての衝突グループを使用します。
| Build settings            | ナビゲーション メッシュの高度な設定です。
| Groups                    | このナビゲーション メッシュを使用するグループです。

## シーン エディターでナビゲーション メッシュの表示と非表示を切り替える

シーン エディターのツールバーの**ナビゲーション可視性**メニューを使用します。

![Navigation group visibility](media/navigation-group-visibility.png)

異なるグループに属するレイヤーを表示または非表示にするには、チェックボックスを使用します。色付きのボックスは、シーン エディターに表示されるグループの色を示します。

| ナビゲーション メッシュ非表示   | ナビゲーション メッシュ表示
|--------------------------| ------------
|![Bounding box shown](media/navigation-mesh-invisible.jpg) | ![Bounding box hidden](media/navigation-mesh-visible.jpg)

これらのオプションは実行時の動作には影響しません。

## 関連項目

* [ナビゲーション グループ](navigation-groups.md)
* [ナビゲーション境界ボックス](navigation-bounding-boxes.md)
* [ナビゲーション コンポーネント](navigation-components.md)
* [動的ナビゲーション](dynamic-navigation.md)
* [シーン](../game-studio/scenes.md)
