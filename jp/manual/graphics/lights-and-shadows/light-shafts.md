# ライト シャフト
<!--
# Light shafts
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<span class="label label-doc-audience">アーティスト</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Artist</span>
-->

**ライトシャフト（light shafts; 光の軸）** は目に見える光の線のことであり、**ゴッドレイ（god rays; 神の光）** とも呼ばれます。
<!--
**Light shafts**, also called **god rays**, are visible rays of light. 
-->

<video autoplay loop class="responsive-video" poster="media/lightshaft_CoS_640.jpg">
   <source src="media/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Stride のライトシャフトは[シャドウマップ](shadows.md)に基づいており、ポストエフェクトではなくレイマーチングを使用しているため、ライトが見えていなくても表示できます。影を落とすライト（[ポイント ライト](point-lights.md)、[ディレクショナル ライト](directional-lights.md)、[スポット ライト](spot-lights.md)など）であれば、ライトシャフトを落とすことができます。
<!--
Stride light shafts are based on [shadow maps](shadows.md) and use raymarching rather than post effects, so they're visible even when the light source isn't. Any light source that casts shadows (ie [point lights](point-lights.md), [directional lights](directional-lights.md) and [spot lights](spot-lights.md)) can cast light shafts.
-->

ライトシャフトを作成するには、3つのコンポーネントを併用します。**ライト**、**ライトシャフト**、**ライトシャフトバウンディングボリューム**です。
<!--
To create light shafts, use three components together: **lights**, **light shafts**, and **light shaft bounding volumes**.
-->

## 1. グラフィックスコンポジターでライトシャフトを有効化する
<!--
## 1. Enable light shafts in the graphics compositor
-->

既定では、Stride の新規プロジェクトではライトシャフトは無効です。有効にする手順は次の通りです。
<!--
By default, Stride disables light shafts in new projects. To enable them:
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)

    すると、グラフィックスコンポジターエディターが開きます。

2. **フォワードレンダラー**ノードを選択します。

    ![Select forward renderer](../../virtual-reality/media/select-forward-renderer.png)

3. **プロパティグリッド**で、**Light shafts** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**LightShafts** を選択します。

    ![Select light shafts](media/select-light-shafts.png)

4. **LightShafts** チェックボックスがオンであることを確認します。

    ![Enable light shafts](media/enable-light-shafts.png)

    グラフィックスコンポジターにの詳細については、[グラフィックス コンポジター](../graphics-compositor/index.md)を参照してください。

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.

2. Select the **forward renderer** node.

    ![Select forward renderer](../../virtual-reality/media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), next to **Light shafts**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **LightShafts**.

    ![Select light shafts](media/select-light-shafts.png)

4. Make sure the **light shafts** checkbox is selected.

    ![Enable light shafts](media/enable-light-shafts.png)

    For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.
-->

## 2. ライトシャフトコンポーネントを追加する
<!--
## 2. Add a light shaft component
-->

1. シーンから、ライトシャフトを作成したい**ライト**を持つエンティティを選択します。ライトは、影を落とせるものでなければなりません（[ポイント ライト](point-lights.md)、[ディレクショナル ライト](directional-lights.md)、[スポット ライト](spot-lights.md)など）。

2. **プロパティグリッド**で、**Light** > **Shadow** プロパティのチェックがオンになっていることを確認します。

    ![Enable light shafts](media/light-shafts-enable-shadows.png)

3. [**Add component**] をクリックし、**Light shaft** を選択します。

    ![Add light shaft component](media/add-light-shaft-component.png)

    Game Studioは、エンティティにライトシャフトを追加します。

<!--
1. In your scene, select the entity with the **light** you want to create light shafts. This must be a light that casts shadows (ie a [point light](point-lights.md), [directional light](directional-lights.md), or [spot light](spot-lights.md)).

2. In the **Property Grid**, in the **Light** component properties, make sure the **Shadow** checkbox is selected.

    ![Enable light shafts](media/light-shafts-enable-shadows.png)

3. Click **Add component** and select **Light shaft**.

    ![Add light shaft component](media/add-light-shaft-component.png)

    Game Studio adds a light shaft component to the entity.
-->

## 3. バウンディングボリュームを追加する
<!--
## 3. Add a bounding volume
-->

**ライトシャフトバウンディングボリューム**は、ライトシャフトが作られる領域を定義します。バウンディングボリュームは、ディレクショナルライトを持っているエンティティに追加することもできますが、通常は他のエンティティに追加した方が簡単です。
<!--
The **light shaft bounding volume** defines the area in which light shafts are created. You can add the bounding volume to the same entity that has the directional light, but it's usually simpler to add it to a separate entity.
-->

1. **アセットビュー**で、[**Add asset**] をクリックします。

2. **Models** 配下で、ボリュームにしたい形状を持つモデルを選択します。例えば、キューブを選択すると、ライトシャフトはキューブの領域の内部に作成されます。

    ![Cube model](media/add-cube-model.png)

    マテリアルアセットを選択するために、**Select an asset** ウィンドウが開きます。

    ![Select an asset](media/asset-picker.png)

3. モデルにマテリアルは必要ありませんので、ここでは [**Cancel**] をクリックし、マテリアルのないモデルを作成します。

4. シーンに空の**エンティティ**を追加します。後で位置を変えることができるので、最初はどこに置いても構いません。

5. エンティティを選択した状態で、**プロパティグリッド**で [**Add component**] をクリックし、**Light Shaft Bounding Volume** を選択します。

    ![Add light shaft bounding volume component](media/add-light-shaft-bounding-volume.png)

6. **ライトシャフトバウンディングボリューム**コンポーネントの **light shaft** プロパティの横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

7. **エンティティピッカー**で、ライトシャフトを作成するディレクショナルライトを選択し、[**OK**] をクリックします。

8. **ライトシャフトバウンディングボリューム**コンポーネントの **Model** プロパティの横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

9. **Select an asset** ウィンドウで、先ほど作成したモデルを選択し、[**OK**] をクリックします。

    ![Select model](media/select-procedural-model.png)

    このモデルが、ライトシャフトバウンディングボリュームの形状を定義します。

10. **トランスフォーム**コンポーネントを使って、ライトシャフトを作りたい領域をカバーするエンティティの位置とスケールを設定します。

    >[!Tip]
    >シーンエディターでライトシャフトバウンディングボリュームのナビゲーションの表示／非表示を切り替えるには、**シーンエディターツールバー** の **ギズモオプション**メニューを開き、**ライトシャフトバウンディングボリューム** チェックボックスを変更します。
    
    ![Show light shaft bounding volumes](media/show-or-hide-light-shaft-bounding-volume.png)

<!--
1. In the **Asset View**, click **Add asset**.

2. Under **Models**, select a model in the shape you want the volume to be. For example, if you use a cube, light shafts will be created in a cube-shaped area.

    ![Cube model](media/add-cube-model.png)

    The **Select an asset** window opens.

    ![Select an asset](media/asset-picker.png)

3. You don't need a material for the model, so click **Cancel** to create a model without a material.

4. In the scene, create an empty **entity**. For now, it doesn't matter where you put it; you can reposition it later.

5. With the entity selected, in the **Property Grid**, click **Add component** and select **light shaft bounding volume**.

    ![Add light shaft bounding volume component](media/add-light-shaft-bounding-volume.png)

6. In the **light shaft bounding volume** component properties, next to **light shaft**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

7. In the **entity picker**, select the entity with the directional light you want to create light shafts and click **OK**.

8. In the **light shaft bounding volume** component properties, next to **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

9. In the **Select an asset** window, select the model you created and click **OK**.

    ![Select model](media/select-procedural-model.png)

    This model defines the shape of the light shaft bounding volume.

10. Using the **transform** component, position and scale the entity to cover the area where you want to create light shafts.

    >[!Tip]
    >To show or hide navigation light shaft bounding volumes in the Scene Editor, in the **Scene Editor toolbar**, open the **gizmo options** menu and use the **Light shaft bounding volumes** checkbox.
    
    ![Show light shaft bounding volumes](media/show-or-hide-light-shaft-bounding-volume.png)
-->

## ライトシャフトのプロパティ
<!--
## Light shaft properties
-->

![Light shaft properties](media/light-shaft-properties.png)

| プロパティ                 | 説明
|---------------------------|----------
| Density                   | 密度。値が大きいほど明るい光軸になります。
| Sample count              | サンプル数。値が大きいほどきれいになりますが、GPU の負荷が大きくなります。
| Process bounding volumes separately  | オンにすると、複数のバウンディングボリュームを個別に処理します。これによりライトシャフトが重なった際の品質が保たれますが、GPU　の負荷が大きくなります。

<!--
| Property                  | Description                                               
|---------------------------|----------
| Density                   | Higher values produce brighter light shafts
| Sample count              | Higher values produce better light shafts but use more GPU 
| Process bounding volumes separately  | Preserves light shaft quality when seen through separate bounding boxes, but uses more GPU
-->

### グラフィックスコンポジターにおけるライトシャフトプロパティ
<!--
### Light shaft graphics compositor properties
-->

これらのプロパティにアクセスするには、**グラフィックスコンポジターエディター** で **フォワードレンダラー**ノードを選択し、**Light Shafts** を展開します。
<!--
To access these properties, in the **graphics compositor editor**, select the **forward renderer** node and expand **Light Shafts**.
-->

これらのプロパティは、シーン内のすべてのライトシャフトにグローバルに適用されます。
<!--
These properties apply globally to all the light shafts in the scene.
-->

![Light shaft graphics compositor properties](media/light-shaft-graphics-compositor-properties.png)

| プロパティ                               | 説明
|-----------------------------------------|--------------
| Bounding volume buffer downsample level | 値が小さいほど正確なボリュームバッファ領域を生成しますが、GPU の負荷がより大きくなります。
| Light buffer downsample level           | 値が小さいほど光軸がシャープになりますが、GPU の負荷がより大きくなります。

<!--
| Property                                | Description                                                    
|-----------------------------------------|--------------
| Bounding volume buffer downsample level | Lower values produce more precise volume buffer areas, but use more GPU
| Light buffer downsample level           | Lower values produce sharper light shafts, but use more GPU
-->

## ライトシャフトの最適化
<!--
## Optimize light shafts
-->

ライトシャフトは、暗い環境で最も効果を発揮します。ライトとライトシャフトのコンポーネントプロパティを調整することで、さまざまな結果を得ることができます。たとえば、ライトの色（**ライトコンポーネントプロパティ**）やライトシャフトの密度（**ライトシャフトコンポーネントプロパティ**）を変更することができます。
<!--
Light shafts work best in dark environments. You can adjust the light and light shaft component properties to achieve different results — for example, by changing the light color (in the **light component properties**) or the light shaft density (in the **light shaft component properties**).
-->

複数のライトシャフトが重なると、次のスクリーンショットのように、視覚的にうるさくなってしまいます。
<!--
Multiple light shafts viewed through one another can become visually noisy, as in the screenshot below:
-->

![Noisy light shafts](media/noisy-light-shafts.jpg)

この問題を軽減するには、**ライトシャフトコンポーネントプロパティ**で、**密度（density）** を減らし、**サンプル数（Sample count）** を増やします。
<!--
To reduce this effect, in the **light shaft component properties**, reduce the **density** and increase the **sample count**.
-->

![Density factor](media/density-factor.png)

また、別のバウンディングボリュームを追加した際に、個別に処理するという方法もあります。
<!--
Alternatively, add additional bounding volumes and process them separately. To do this:
-->

1. 追加のバウンディングボリュームを作成し、ライトシャフトを作成したい領域を覆うように配置します。バウンディングボリュームが重なるとライトシャフトが眩しくなるので、注意してください。

2. **ライトシャフトコンポーネントのプロパティ**で、**Process bounding volumes separately（バウンディングボリュームを個別に処理する）** が選択されていることを確認します。

<!--
1. Create additional bounding volumes and position them to cover the areas where you want to create light shafts. Make sure the bounding volumes don't overlap, as this makes light shafts extra-bright.

2. In the **light shaft component properties**, make sure **Process bounding volumes separately** is selected.
-->

![Separate bounding volume](media/separate-bounding-volumes.png)

> [!Note]
> バウンディングボリュームを個別に処理するには、より多くの GPU パワーが必要です。

<!--
> [!Note]
> Processing bounding volumes separately uses more GPU.
-->

## 関連項目
<!--
## See also
-->

* [ディレクショナル ライト](directional-lights.md)
* [シャドウ](shadows.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Directional lights](directional-lights.md)
* [Shadows](shadows.md)
* [Graphics compositor](../graphics-compositor/index.md)
-->
