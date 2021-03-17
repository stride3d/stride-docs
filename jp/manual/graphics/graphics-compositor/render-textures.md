# レンダーテクスチャー
<!--
# Render textures
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">デザイナー</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>
-->

**レンダーテクスチャー**を使うと、カメラのビューをテクスチャーに送り、そのテクスチャーをシーン内のオブジェクトに適用することができます。例えば、防犯カメラの映像のように、同じシーン内のテレビ画面にシーンの一部を映すことができます。
<!--
With **render textures**, you can send a camera's view to a texture and use the texture on objects in your scene. For example, you can use this to display part of your scene on a TV screen in the same scene, such as security camera footage.
-->

API の詳細については、[テクスチャーとレンダーテクスチャー](../low-level-api/textures-and-render-textures.md)を参照してください。
<!--
For API details, see [Textures and render textures](../low-level-api/textures-and-render-textures.md).
-->

## 1. 追加のカメラスロットを作成する
<!--
## 1. Create an extra camera slot
-->

カメラスロットは、グラフィックスコンポジターをシーン内のカメラに結びつけるために使われます。新しいカメラを使うには、まずカメラスロットを追加する必要があります。カメラスロットの詳細については、[カメラ スロット](../cameras/camera-slots.md)を参照してください。
<!--
Camera slots link the graphics compositor to the cameras in your scene. You need to add a camera slot for a new camera to use. For more information about camera slots, see [Camera slots](../cameras/camera-slots.md).
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    すると、グラフィックスコンポジターエディターが開きます。

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. 左ペインの **Camera slots** の横にある ![緑のプラスボタン](../../game-studio/media/green-plus-icon.png)（**追加**）をクリックします。

    ![Camera slots](media/graphics-compositor-camera-slots.png)

    Game Studio は、新しいカメラスロットを追加します。

    > [!Tip]
    > カメラスロットの名前を変更するには、Camera slots 内のカメラスロットをダブルクリックして、新しい名前を入力します。
    > 
    > ![Name a camera slot](media/name-camera-slot.png)

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. On the left, under **Camera slots**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Camera slots](media/graphics-compositor-camera-slots.png)

    Game Studio adds a new camera slot.

    > [!Tip]
    > To rename a camera slot, double-click it in the list and type a new name.
    > ![Name a camera slot](media/name-camera-slot.png)
-->

## 2. カメラを作成しスロットにバインドする
<!--
## 2. Create a camera and bind it to the slot
-->

1. シーンで、カメラにするエンティティに**カメラコンポーネント**を追加します。

    ![Add camera component](media/add-camera-component.png)

2. テクスチャーにレンダリングしたい範囲がカメラに映るように、エンティティを配置します。

3. **プロパティグリッド**で、**カメラコンポーネント**にチェックを入れて有効化します。

    ![Enable camera component](media/enable-camera-component.png)

4. **カメラコンポーネント**の **Slot** プロパティで、前の手順で追加したカメラスロットを選択します。

    ![Select camera slot](media/graphics-compositor-overview-2.png)

<!--
1. In your scene, add a **camera component** to the entity you want to be your camera.

    ![Add camera component](media/add-camera-component.png)

2. Position the entity so the camera captures the area of the scene you want to render to a texture.

3. In the entity **Property Grid**, enable the **Camera** component using the checkbox.

    ![Enable camera component](media/enable-camera-component.png)

4. in the **Camera** component properties, under **Slot**, select the slot you created in the previous step.

    ![Select camera slot](media/graphics-compositor-overview-2.png)
-->

## 3. レンダーターゲットテクスチャーを作成する
<!--
## 3. Create a render target texture
-->

**アセットビュー**で、[**Add asset**] をクリックし、**Texture** > **Render target** を選択します。
<!--
In the **Asset View**, click **Add asset** and select **Texture** > **Render target**.
-->

![Add render target](media/add-render-target.png)

Game Studio は、プロジェクトのアセットに**レンダーターゲット**テクスチャーを追加します。
<!--
Game Studio adds a **render target** texture to your project assets.
-->

![Render texture](media/render-target-texture-in-asset-view.png) 

## 4. レンダーターゲットテクスチャーをシーンに配置する
<!--
## 4. Place the render target texture in the scene
-->

レンダーターゲットテクスチャーには、いろいろな使い方があります。
<!--
There are various ways you can use the render target texture.
-->

### 例 1：レンダーターゲットテクスチャーをマテリアルで使用する
<!--
### Example 1: Use the render target texture in a material
-->

1. マテリアルを選択し、**プロパティグリッド**で **Shading** > **Diffuse map** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**Texture** を選択します。

    ![Select texture](media/select-texture.png)

2. ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

3. **レンダーテクスチャー**アセットを選択して [**OK**] をクリックします。

    ![Select render frame](media/select-render-frame.png)

<!--
1. In the material properties, under **Shading**, next to **Diffuse map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.

    ![Select texture](media/select-texture.png)

2. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

3. Select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)
-->

### 例 2：レンダーターゲットテクスチャーをスプライトコンポーネントで使用する
<!--
### Example 2: Use the render target texture in a sprite component
-->

1. エンティティを作成し、テクスチャーを表示したい場所に配置します。

2. エンティティを選択した状態で、**プロパティグリッド**で [**Add component**] をクリックし、**スプライト**コンポーネントを追加します。

    ![Add sprite component](media/add-sprite-component.png)

3. スプライトコンポーネントのプロパティで、**Source** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**Texture** を選択します。

    ![Select sprite source](media/sprite-source-texture.png)

4. ![Hand icon](../../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

    すると、**Select an asset** ウィンドウが開きます。

5. **レンダーテクスチャー**アセットを選択して、[**OK**] をクリックします。

    ![Select render frame](media/select-render-frame.png)

6. テクスチャーを半透明にしたくない場合は、**Source** > **Is transparent** のチェックボックスをオフにします。

    ![Clear-is-transparent](media/clear-is-transparent.png)

<!--
1. Create an entity and position it where you want to display the texture.

2. With the entity selected, in the **Property Grid**, click **Add component** and add a **sprite** component.

    ![Add sprite component](media/add-sprite-component.png)

3. In the sprite component properties, next to **Source**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.

    ![Select sprite source](media/sprite-source-texture.png)

4. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

5. Select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)

6. If you don't want the texture to be semi-transparent, under the **Source** properties, clear the **Is transparent** checkbox.

    ![Clear-is-transparent](media/clear-is-transparent.png)
-->

## 5. グラフィックスコンポジターをセットアップする
<!--
## 5. Set up the graphics compositor
-->

レンダーテクスチャーをシーンに表示するには、少なくとも2つのレンダラーが必要です。
<!--
To display a render texture in your scene, you need at least two renderers:
-->

* メインカメラをレンダリングするレンダラー
* レンダーテクスチャーへ2番目めのカメラをレンダリングするレンダラー

<!--
* one to render your main camera
* one to render the second camera to the render texture
-->

このセクションでは、2台のカメラと2台のレンダラーを使って、これを最初から行う最も簡単な方法を説明します。お使いのパイプラインによっては、別のセットアップが必要になるかもしれません。
<!--
This page describes the simplest way to do this from scratch, using two cameras and two renderers. Depending on your pipeline, you might need to create a different setup.
-->

> [!Warning]
> 以降の手順では、Game エントリポイントの既存のレンダラーを削除します。後でパイプラインを復元したいときのために、プロジェクトのバックアップを取っておくとよいでしょう。
<!--
> [!Warning]
> These instructions involve deleting your existing renderers for the game entry point. You might want to make a backup of your project in case you want to restore your pipeline afterwards.
-->

1. グラフィックスコンポジターエディターで、**Entry points** ノードを選択します。

    ![Entry points node](media/entry-points-node.png)

2. **プロパティグリッド**で、**Game renderer** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、既存のレンダラーを削除するために **None** を選択します。

    ![Cleared game renderers](media/game-renderers-cleared.png)

3. ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**SceneRendererCollection** を選択します。

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)

    これで、エントリポイントに複数のレンダラーを設定することができるようになりました。

<!--
1. In the graphics compositor editor, select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

2. In the **Property Grid** on the right, next to **Game renderer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **None** to delete your existing renderers.

    ![Cleared game renderers](media/game-renderers-cleared.png)

3. Click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Scene renderer collection**.

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)

    This lets you set multiple renderers for the game entry point.
-->

### 1. メインカメラをレンダリングする
<!--
### 1. Render the main camera
-->

1. **Game renderer** の **Children** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**追加**）をクリックし、**Camera Renderer** を選択します。

    ![Select camera renderer](media/select-render-camera.png)

2. **Camera** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、ゲームのメインカメラを選択します。

    ![Select main camera](media/select-main-camera.png)

3. **Child** で、ゲームのメインカメラ用のレンダラーを選択します（例：**Forward renderer**)。

    ![Select forward render](media/select-main-camera-forward-renderer.png)

<!--
1. Under **Game renderer**, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.

    ![Select camera renderer](media/select-render-camera.png)

2. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select your main game camera.

    ![Select main camera](media/select-main-camera.png)

4. Next to **Child**, select the renderer for your main game camera (eg the **forward renderer**).

    ![Select forward render](media/select-main-camera-forward-renderer.png)
-->

### 2. テクスチャーをレンダリングする
<!--
### 2. Render the texture
-->

1. **Game renderer**で、**Add to Children** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**追加**）をクリックし、**Camera Renderer** を選択します。

    ![Select camera renderer](media/select-render-camera2.png)

    Game Studio は、Children のリストにカメラレンダラーを追加します。

    ![Second camera renderer](media/added-camera-renderer.png)

2. 2番目の**カメラレンダラー**を展開します。

    ![Expand second renderer](media/expand-second-camera-renderer.png)

3. **Camera** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、テクスチャーにレンダリングしたいカメラを選択します。

    ![Select texture camera](media/select-texture-camera.png)

4. **Child** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**RenderTextureSceneRenderer** を選択します。

    ![Select render texture scene renderer](media/render-texture-scene-renderer.png)

5. **RenderTextureSceneRenderer** で、**Child** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、ゲームのメインカメラ用のレンダラーを選択します（例：**Forward renderer**）。

    ![Select forward renderer](media/select-forward-renderer2.png)

6. **Render texture** の横にある ![Hand icon](../../game-studio/media/hand-icon.png) （**アセットの選択**）をクリックします。

    すると、**Select an asset** ウィンドウが開きます。

7. **レンダーテクスチャー**アセットを選択し、[**OK**] をクリックします。

    ![Select render texture](media/select-render-frame.png)

    Game Studio は、レンダラーにレンダーテクスチャーを追加します。

    ![Render texture added](media/render-texture-added.png)

<!--
1. Under **Game renderer**, next to **Add to Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.

    ![Select camera renderer](media/select-render-camera2.png)

    Game Studio adds a camera renderer to the list of children.

    ![Second camera renderer](media/added-camera-renderer.png)

2. Expand the second **camera renderer**.

    ![Expand second renderer](media/expand-second-camera-renderer.png)

3. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the camera you want to render to a texture.

    ![Select texture camera](media/select-texture-camera.png)

4. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **RenderTextureSceneRenderer**.

    ![Select render texture scene renderer](media/render-texture-scene-renderer.png)

5. Under the **RenderTextureSceneRenderer**, next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the renderer for your main game camera (eg the **forward renderer**).

    ![Select forward renderer](media/select-forward-renderer2.png)

6. Next to **Render texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

7. Select the **render texture** and click **OK**.

    ![Select render texture](media/select-render-frame.png)

    Game Studio adds the render texture to the renderer.

    ![Render texture added](media/render-texture-added.png)
-->

これで、テクスチャーにカメラをレンダリングできるようになりました。
<!--
Your game is now ready to render the camera to the texture in the scene.
-->

## レンダーマスクを設定する
<!--
## Set a render mask
-->

**レンダーマスク**を使って、レンダーテクスチャーにレンダリングされるグループ（レンダーグループ）をフィルタリングすることができます。
<!--
You can use the **render mask** to filter which groups are rendered in the render texture.
-->

**Render Mask** の横にある [**Change values...**] をクリックして、カメラに映したいレンダーグループを選択します。
<!--
Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.
-->

![Render mask](media/change-render-mask.png)

詳細については、[レンダーグループとレンダーマスク](render-groups-and-masks.md)を参照してください。
<!--
 For more information, see [Render groups and masks](render-groups-and-masks.md).
-->

## サンプル
<!--
## Sample
-->

テクスチャーにレンダリングするプロジェクトの例として、Stride に同梱されている **Animation** サンプルを参照してください。
<!--
For an example of rendering to a texture in a project, see the **Animation** sample included with Stride.
-->

## 関連項目
<!--
## See also
-->

* [カメラ](../cameras/index.md)
* [カメラ スロット](../cameras/camera-slots.md)
* [低レベル API：テクスチャーとレンダーテクスチャー](../low-level-api/textures-and-render-textures.md)
* [レンダーグループとレンダーマスク](render-groups-and-masks.md)
* [グラフィックスコンポジター](index.md)
* [シーン レンダラー](scene-renderers.md)

<!--
* [Cameras](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Low-level API – Textures and render textures](../low-level-api/textures-and-render-textures.md)
* [Render groups and masks](render-groups-and-masks.md)
* [Graphics compositor](index.md)
* [Scene renderers](scene-renderers.md)
-->
