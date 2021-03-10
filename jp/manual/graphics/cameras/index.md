# カメラ
<!--
# Cameras
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
-->

**カメラ**は、シーンを切り取ってプレイヤーに表示します。カメラがないと、ゲーム内では何も見ることができません。

シーンにはカメラの数に制限はありません。

<!--
**Cameras** capture your scene and display it to the player. Without cameras, you can't see anything in your game. 

You can have an unlimited number of cameras in your scene.
-->

## Game Studio でカメラを作る
<!--
## Create a camera in Game Studio
-->

**シーンエディタ**内の何もないところを右クリックして **Camera** を選択し、さらに、作成したいカメラの種類を選択します（**Perspective**または**Orthographic**）。
<!--
In the Scene Editor, right-click and select **Camera**, then choose the kind of camera you want to create (**perspective** or **orthographic**).
-->

![Add camera](media/add-camera.png)

Game Studio は、カメラコンポーネントがアタッチされたエンティティを作成します。

あるいは、カメラにしたいエンティティを選択し、**プロパティグリッド**で [**Add component**] をクリックして **Camera** を選択します。

<!--
Game Studio creates an entity with a camera component attached.

Alternatively, select the entity you want to be a camera, and in the **Property Grid**, click **Add component** and select **Camera**.
-->

![Add a camera component](media/add-camera-component.png)

## カメラのプロパティ
<!--
## Camera properties
-->

![Camera properties](media/camera-properties.png)

| プロパティ           | 説明
|---------------------|--------------------------------------------------
| Projection          | カメラが使用する投影の種類（透視投影（Perspective）または平行投影（Orthographic）
| Field of view       | 垂直方向の視野（単位：度）。透視投影を使う場合に指定します。
| Orthographic Size   | 平行投影の高さ（幅はターゲットの比率に基づいて自動的に計算されます）。平行投影を使う場合に指定します。これには、ズームイン、ズームアウトの効果があります。
| Near Clip Plane     | カメラで見ることのできる最も近い点
| Far Clip Plane      | カメラで見ることのできる最も遠い点
| Custom aspect ratio | カスタムアスペクト比オプション。有効にしない場合は、自動的にレンダーターゲットの比率に調整されます。
| Aspect Ratio        | カスタムアスペクト比。**Custom aspect ratio**オプションを有効にした場合に指定します。
| Slot                | グラフィックスコンポジターで使用されるカメラスロット。詳細については[カメラ スロット](camera-slots.md)を参照してください。

<!--
| Property            | Description                                       
|---------------------|--------------------------------------------------
| Projection          | The type of projection used by the camera (perspective or orthographic)
| Field of view (degrees)      | The vertical field of view used for perspective projection
| Orthographic size   | The height of the orthographic projection (the orthographic width is automatically calculated based on the target ratio). This has the effect of zooming in and out
| Near clip plane     | The nearest point the camera can see
| Far clip plane      | The furthest point the camera can see
| Custom aspect ratio | Use a custom aspect ratio you specify.  Otherwise, automatically adjust the aspect ratio to the render target ratio
| Custom aspect ratio | The aspect ratio for the camera (when the **Custom aspect ratio** option is selected)
| Slot                | The camera slot used in the graphics compositor. For more information, see [Camera slots](camera-slots.md)
-->

## 透視投影カメラと平行投影カメラ
<!--
## Perspective and orthographic cameras
-->

**透視投影（perspective）カメラ**は、シーン内のオブジェクトの「実世界」の透視投影を提供します。このビューでは、カメラの近くにあるオブジェクトが大きく見えたり、同じ長さの線が現実とは異なる長さの線になって見えたりします。透視投影カメラは、三人称視点や一人称視点のゲームなど、リアルな遠近法を必要とするゲームに最もよく使用されます。
<!--
**Perspective cameras** provide a "real-world" perspective of the objects in your scene. In this view, objects close to the camera appear larger, and lines of identical lengths appear different due to foreshortening, as in reality. Perspective cameras are most used for games that require a realistic perspective, such as third-person and first-person games.
-->

**平行投影（orthographic）カメラ**では、対象物の大きさは、カメラからの距離に関わらず常に同じです。平行線が接触することはなく、消失点もありません。平行投影カメラは、戦略ゲームや [4X ゲーム](https://ja.wikipedia.org/wiki/4X)、ロールプレイングゲームなど、アイソメトリック視点のゲームに最もよく使用されます。
<!--
With **orthographic cameras**, objects are always the same size, no matter their distance from the camera. Parallel lines never touch, and there's no vanishing point. Orthographic cameras are most used for games with isometric perspectives, such as some strategy, 4X, or role-playing games.
-->

![Perspective and orthographic diagram](../../game-studio/media/perspective-orthographic-diagram.png)

| 透視投影（perspective） | 平行投影（orthographic）
|--------------|------------
| ![Perspective view](media/perspective-screenshot.png)| ![Orthographic view](media/orthographic-screenshot.png)

<!--
| Perspective  | Orthographic
|--------------|------------
| ![Perspective view](media/perspective-screenshot.png)| ![Orthographic view](media/orthographic-screenshot.png)
-->

### 視野（Field of view; 透視投影モードのみ）
<!--
### Field of view (perspective mode only)
-->

カメラが**透視投影**モードに設定されている場合、**視野（firld of view）**は、カメラの内部構造を変化させ、シーンのズームインとズームアウトを行う効果があります。高設定（90 以上）では、視野は引き伸ばされた「魚眼レンズ」のようなビューになります。デフォルト設定は 45 です。
<!--
When the camera is set to **perspective** mode, the **field of view** changes the camera frustum, and has the effect of zooming in and out of the scene. At high settings (90 and above), the field of view creates stretched "fish-eye lens" views. The default setting is 45.
-->

| 視野: 45 (既定値) | 視野: 90
|-----------------------------|------------------
| ![Default FOV](media/perspective-screenshot.png)| ![High FOV](media/90-degree-fov.png)

<!--
| Field of view: 45 (default) | Field of view: 90
|-----------------------------|------------------
| ![Default FOV](media/perspective-screenshot.png)| ![High FOV](media/90-degree-fov.png)
-->

### 平行投影サイズ（平行投影モードのみ）
<!--
### Orthographic size (orthographic mode only)
-->

カメラが**平行投影**モードに設定されている場合、**平行投影サイズ（orthographic size）**は、ズームインとズームアウトの効果があります。
<!--
When the camera is set to **orthographic** mode, the **orthographic size** has the effect of zooming in and out.
-->

| 平行投影サイズ: 10 (既定値) | 平行投影サイズ: 50
|-----------------------------|------------------
| ![Default FOV](media/orthographic-size-10.png)| ![High FOV](media/orthographic-size-50.png)

<!--
| Orthographic size: 10 (default) | Orthographic size: 50
|-----------------------------|------------------
| ![Default FOV](media/orthographic-size-10.png)| ![High FOV](media/orthographic-size-50.png)
-->

## 近面と遠面
<!--
## Near and far planes
-->

近い平面と遠い平面で、カメラの視野の始まりと終わりが決まります。
<!--
The near and far planes determine where the camera's view begins and ends.
-->

* **近面（near plane）**は、カメラが映すことのできる最も近い点です。既定値は 0.1 です。この点より手前にあるオブジェクトは描画されません。

* **遠面（far plane）**は、描画距離とも言われ、カメラが写すことのできる最も遠い点です。この点より遠くにあるオブジェクトは描画されません。既定値は 1000 です。

<!--
* The **near plane** is the closest point the camera can see. The default setting is 0.1. Objects before this point aren't drawn.

* The **far plane**, also known as the draw distance, is the furthest point the camera can see. Objects beyond this point aren't drawn. The default setting is 1000.
-->

Stride は、近面と遠面の間の領域をレンダリングします。
<!--
Stride renders the area between the near and far planes.
-->

![Camera position](../../get-started/media/camera-position.png)

| 近面 0.1 (既定値)、遠面 50  | 近面 7、遠面 1000 (既定値)
|--------------------|------------------
| ![Far plane: 50](media/far-clip-50.png) | ![Near plane: 7](media/near-clip-7.png)
| **遠面**の値が小さいと、近距離のオブジェクトは描画されません。 | **近面**の値を大きくすると、カメラに近いオブジェクトは描画されません。

<!--
| Near plane 0.1 (default); far plane: 50  | Near plane: 7; far plane 1000 (default)
|--------------------|------------------
| ![Far plane: 50](media/far-clip-50.png) | ![Near plane: 7](media/near-clip-7.png)
| With a low **far plane** value, objects in the near distance aren't drawn. | With a high **near plane** value, objects close to the camera aren't drawn.
-->

## カメラ スクリプト
<!--
## Camera scripts
-->

**カメラスクリプト**を使って、カメラを制御することができます。Stride は、FPS カメラスクリプト、横スクロールカメラスクリプト、基本的なカメラコントローラスクリプトの、3つのカメラスクリプトテンプレートを提供しています。
<!--
You can control cameras using **camera scripts**. Stride includes three camera script templates: an FPS camera script, a side-scrolling camera script, and a basic camera controller script.
-->

### Game Studio でカメラスクリプトを追加する
<!--
### Add a camera script in Game Studio
-->

1. **アセットビュー**で、[**Add asset**] > [**Scripts**] をクリックし、追加したいカメラスクリプトを選択します。

    ![Add a camera script](media/add-camera-script.png)

2. **シーンエディター**で、制御したいカメラを持つエンティティを選択します。

3. **プロパティグリッド**で、[**Add component**] をクリックし、使いたいカメラスクリプトを選択します。

    ![Add script component](media/add-camera-script-component.png)

    Game Studio は、エンティティにカメラスクリプトを追加します。

<!--
1. In the **Asset View** (in the bottom by default), click **Add asset > Scripts** and choose the camera script you want to add.

    ![Add a camera script](media/add-camera-script.png)

2. In the **Scene Editor**, select the entity with the camera you want to control.

3. In the **Property Grid** (on the right by default), click **Add component** and select the camera script you want to use.

    ![Add script component](media/add-camera-script-component.png)

    Game Studio adds the camera script to the entity.
-->

スクリプトの作り方と使い方の詳細については、[スクリプト](../../scripts/index.md)を参照してください。
<!--
For more information about how to create and use scripts, see [Scripts](../../scripts/index.md).
-->

## カメラスロット
<!--
## Camera slots
-->

**カメラスロット**は、[グラフィックスコンポジター](../graphics-compositor/index.md)をシーンのカメラにリンクします。各カメラをスロットに割り当てて、それからコンポジターが使用するスロットを定義します。これは、毎回新しいカメラを割り当てなくても、[ルートシーン](../../game-studio/manage-scenes.md)やグラフィックスコンポジターを変更することができるということを意味しています。
<!--
**Camera slots** link the [graphics compositor](index.md) to the cameras in your scene. You bind each camera to a slot, then define which slot the compositor uses. This means you can change the [root scene](../../game-studio/manage-scenes.md) or graphics compositor without having to assign new cameras each time.
-->

詳細については、[カメラ スロット](camera-slots.md)を参照してください。
<!--
For more information, see [Camera slots](camera-slots.md).
-->

## テクスチャにカメラを描画する
<!--
## Render a camera to a texture
-->

カメラのビューをテクスチャーに送り、そのテクスチャーをシーン内のオブジェクトに使用することができます。例えば、防犯カメラの映像など、同じシーン内のテレビ画面にシーンの一部を表示させることができます。詳しくは、[レンダー テクスチャー](../graphics-compositor/render-textures.md)を参照してください。
<!--
You can send a camera's view to a texture and use the texture on objects in your scene. For example, you can use this to display part of your scene on a TV screen in the same scene, such as security camera footage. For more information, see [Render textures](../graphics-compositor/render-textures.md).
-->

## 関連項目
<!--
## See also
-->

* [カメラ スロット](camera-slots.md)
* [カメラのアニメーション](animate-a-camera-with-a-model-file.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Camera slots](camera-slots.md)
* [Animate a camera](animate-a-camera-with-a-model-file.md)
* [Graphics compositor](../graphics-compositor/index.md)
-->