# ボクセルコーントレーシング グローバルイルミネーション
<!--
# Voxel Cone Tracing Global Illumination
-->

## Howto: 既存のプロジェクトにボクセルコーントレーシング GI を設定する
<!--
## Howto: setup existing project with Voxel Cone Tracing GI
-->

### Stride.Voxels プラグインを追加する
<!--
### Reference Stride.Voxels
-->

Stride はモジュラーベースなので、`Stride.Voxels` プラグインへの参照を追加する必要があります。
<!--
Since Stride is modular based, we need to add a reference to `Stride.Voxels` plugin:
-->

1. **ソリューションエクスプローラー**でプロジェクトを右クリックします。

2. [**Add dependency...**] を選択します。

   ![Add dependency](media/voxelgi-add-dependency.png)

3. 表示されるリストから `Stride.Voxels` を選択し、[**OK**] をクリックします。

4. プロジェクトを再読み込みするかどうか聞かれることがありますが、どちらかを選んでください。どちらでも問題ありません。

<!--
1. In the **Solution Explorer**, right-click on the user project

2. Select `Add Dependency`

   ![Add dependency](media/voxelgi-add-dependency.png)

3. Select `Stride.Voxels` in the list and press `OK`

4. You might be asked if you want to reload project, choose whichever option, both are OK.
-->

### グラフィックス コンポジター
<!--
### Graphics Compositor
-->

ボクセルコーントレーシングを使うには、グラフィックスコンポジターをいくつか変更する必要があります。
<!--
Voxel Cone Tracing requires several changes to the graphics compositor.
-->

これを簡単に行えるように、Voxel GI ですぐに使えるグラフィックコンポジターをアセットテンプレートに用意してあります。
<!--
To make this easier, we prepared a graphics compositor ready to use with Voxel GI in the asset templates:
-->

1. **アセットビュー**で、![Add asset](../../game-studio/media/create-and-add-assets-add-new-asset-button.png) をクリックします。

2. 検索フィールドに、`Voxel` と入力します。

3. **Graphics Compositor (Voxel Cone Tracing)** を選択します。

   ![Create Graphics Compositor](media/voxelgi-create-graphics-compositor.png)

4. **ゲームセッティング**アセットで、**Graphics Compositor** を、新しく作成したグラフィックスコンポジターに変更します。

   ![Set Graphics Compositor](media/voxelgi-set-graphics-compositor.png)

<!--
1. In the **Asset View**, click ![](../../game-studio/media/create-and-add-assets-add-new-asset-button.png)

2. Start to type `Voxel` in the search bar

3. Select `Graphics Compositor (Voxel Cone Tracing)`

   ![Create Graphics Compositor](media/voxelgi-create-graphics-compositor.png)

4. In your `Game Settings` asset, change the graphics compositor to the newly created one:

   ![Set Graphics Compositor](media/voxelgi-set-graphics-compositor.png)
-->

### シーンをセットアップする：ボリュームとライト
<!--
### Setup scene: Volume and Light
-->

1. **シーンエクスプローラー** で ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) をクリックし、[**Light**] > [**Voxel volume**] を選択します。

2. もう一度 ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) をクリックし、[**Light**] > [**Voxel volume**] を選択します。

   この時点では、ライトが正しく設定されていないためシーンのレンダリングが（`No Voxel Volume Component selected for voxel light.` というエラーで）クラッシュすることがありますが、これは想定内です。

3. **プロパティグリッド**で、**Light** の **Volume** プロパティを、先ほど作成したエンティティに変更します。

   ![Setup light volume](media/voxelgi-setup-light-volume.png)

4. 最後に、シーンレンダラーの [**Resume**] ボタンをクリックすれば、すべての設定が完了します。

<!--
1. In the scene explorer, above the **Entity Tree**, click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon and select `Lights` then `Voxel volume`

2. Click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon again and select `Lights` then `Voxel light`

   At that point, the scene rendering will likely crash due to the light not being setup correctly (with error `No Voxel Volume Component selected for voxel light.`), but that's expected.

3. In the property grid, change the Light Volume to the previously created entity:

   ![Setup light volume](media/voxelgi-setup-light-volume.png)

4. At that point, you can click the `Resume` button in scene renderer, and everything should be setup!
-->

### 遊んでみる
<!--
### Play with it
-->

簡単なテストとして、スカイボックスライトを無効にして（ディレクショナルライトだけを残して）、シャドウエリアに行き、そこにアンビエントライトが広がるかどうかを確認してみてください。また、[エミッシブ マテリアル](../materials/shading-attributes.md#emissive)を使用することもできます。
<!--
To do a quick test, you can disable Skybox light (keep only directional light), go in shadow area and see if some ambient light spread there. You can also play with [emissive materials](../materials/shading-attributes.md#emissive).
-->

### チュートリアルビデオ
<!--
### Video tutorial
-->

これは、David Jeske 氏が YouTube に掲載したもう一つのチュートリアルです。セットアップの方法が説明されています。
<!--
Here's a youtube alternative tutorial made by David Jeske on how to set it up:
-->

<iframe width="560" height="315" src="https://www.youtube.com/embed/NEMZ_HJzJ7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
