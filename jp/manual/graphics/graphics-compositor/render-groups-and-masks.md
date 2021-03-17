# レンダーグループとレンダーマスク
<!--
# Render groups and masks
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>
-->

**レンダーグループ**と**レンダーマスク**を使って、シーンのどの部分をどの[カメラ](../cameras/index.md) でレンダリングするかを指定することができます。例えば、あるモデルを、カメラAには映るがカメラBには映らないようにすることができます。
<!--
With **render groups** and **render masks**, you can choose which parts of your scene are rendered by different [cameras](../cameras/index.md). For example, you can have a model be visible to Camera A but invisible to Camera B.
-->

## レンダーグループを設定する
<!--
## Set a render group
-->

1. シーンから、レンダーグループに追加したいコンポーネント（モデルや[UIコンポーネント](../../ui/add-a-ui-to-a-scene.md)など）を持つエンティティを選択します。

2. **プロパティグリッド**で、エンティティが属するグループを **Render group** プロパティに設定します。

    ![Select render group](media/select-render-group.png)

<!--
1. In the scene, select the entity with the component (such as a model or [UI component](../../ui/add-a-ui-to-a-scene.md)) you want to add to a render group.

2. In the **Property Grid**, next to **Render group**, select the group you want the entity to belong to.

    ![Select render group](media/select-render-group.png)
-->

## レンダーマスクを設定する
<!--
## Set a render mask
-->

**レンダーマスク**は、レンダリングするグループをフィルタリングします。
<!--
The **render mask** filters which groups are rendered.
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    すると、グラフィックスコンポジターエディターが開きます。

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. **Entry points** ノードを選択します。

    ![Entry points node](media/entry-points-node.png)

3. **プロパティグリッド**で、は、モデルをレンダリングしたいレンダラーを展開します。

4. **Render mask** の横にある [**Change values...**] をクリックし、カメラに映したいレンダーグループを選択します。

    ![Render mask](media/change-render-mask.png)

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    The Graphics Compositor Editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. Select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

3. In the **Property Grid**, expand the renderer you want to render the model.

4. Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.

    ![Render mask](media/change-render-mask.png)
-->

## 関連項目
<!--
## See also
-->

* [カメラ](../cameras/index.md)
* [カメラ スロット](../cameras/camera-slots.md)
* [グラフィックスコンポジター](index.md)
* [シーン レンダラー](scene-renderers.md)
* [レンダー テクスチャー](render-textures.md)

<!--
* [Cameras](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Graphics compositor](index.md)
* [Scene renderers](scene-renderers.md)
* [Render textures](render-textures.md)
-->
