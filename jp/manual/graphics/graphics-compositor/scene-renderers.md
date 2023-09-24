# シーン レンダラー
<!--
# Scene renderers
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">デザイナー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Designer</span>
-->

**シーンレンダラー**を使うと、レンダリングの **収集(collect)** と **描画(draw)** のフェーズをカスタマイズすることができます。これらのフェーズの詳細については、[レンダーの機能](../rendering-pipeline/render-features.md)を参照してください。
<!--
**Scene renderers** let you customize the **collect** and **draw** phases of the rendering. For more information about these stages, see [Render features](../rendering-pipeline/render-features.md). 
-->

シーンレンダラーの選択は、**Entry Points** ノードのプロパティで行います。
<!--
You select scene renderers in the **entry points** node properties.
-->

![Select renderer](media/connect-entry-point.png)

レンダラーの選択については、[グラフィックス コンポジター](index.md)を参照してください。
<!--
For more information about selecting renderers, see the [Graphics compositor](index.md) page.
-->

>[!Note]
>今のところは、**すべての**レンダラーは、カメラを持っているか、カメラを持っているレンダラーの子でなければなりません。これは、シングルステージレンダラー（UI のレンダリングなど）のように、必ずしもカメラを使用しないレンダラーでも同様です。

<!--
>>[!Note]
>Currently, **all** renderers must have a camera, or be a child of a renderer that has a camera. This applies even to renderers that don't necessarily use cameras, such as the single stage renderer (eg to render a UI).
-->

## クリアする
<!--
## Clear
-->

単色でフレームをクリアします。
<!--
Clears a frame, with a solid color.
-->

![Clear properties](media/clear-renderframe-1.png)

### プロパティ
<!--
### Properties
-->

| プロパティ     | 説明
| ------------- | ----------
| Clear flags   | クリアする対象（**Color only**, **Depth only**, **Color and depth** のいずれか）。
| Color         | 色テクスチャーのクリアに使用される色（**Clear Flags** が **Color** または **Color and depth** の場合のみ有効）。
| Depth value   | 深度テクスチャーのクリアに使用される深度値。
| Stencil value | ステンシルテクスチャーのクリアに使用されるステンシル値。

<!--
| Property      | Description              
| ------------- | ----------
| Clear flags   | <br><p>What to clear in the render frame (**Color only**, **Depth only**, or **Color and depth**)
| Color         | The color used to clear the color texture of the render frame. Only valid when **Clear Flags** is set to **Color** or **Color and depth**
| Depth value   | The depth value used to clear the depth texture of the render frame
| Stencil value | The stencil value used to clear the stencil texture of the render frame
-->

## カメラ レンダラー
<!--
## Camera renderer
-->

[カメラスロット](../cameras/camera-slots.md)のビューをレンダリングするには、@'Stride.Rendering.Compositing.SceneCameraRenderer.Child' を使用します。**レンダーカメラ**は、シーン内の[カメラ](../cameras/index.md)から、表示用の入力を受け取ります。
<!--
Uses @'Stride.Rendering.Compositing.SceneCameraRenderer.Child' to render a view from a [camera slot](../cameras/camera-slots.md). The **render camera** renderer takes the input from a [camera](../cameras/index.md) in the scene so it can be displayed somewhere.
-->

![Camera renderer properties](media/render-camera-1.png)

### プロパティ
<!--
### Properties
-->

| プロパティ     | 説明
| ------------- | ----------
| Camera        | レンダリングに使用する[カメラスロット](.../cameras/camera-slots.md)。
| Child         | カメラ用のレンダラー（フォワードレンダラーやカスタムレンダラーなど）。

<!--
| Property      | Description                                                             
| ------------- | ----------
| Camera        | Specify a [camera slot](../cameras/camera-slots.md) to render from
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
-->

## シーン レンダラー コレクション
<!--
## Scene renderer collection
-->

**シーンレンダラーコレクション**は、複数のレンダラー（カメラレンダラーやレンダーテクスチャーなど）を、順番に実行します。これにより、1つのエントリポイントに複数のレンダラーを設定することができます。このコレクションには、必要な数だけレンダラーを追加できます。
<!--
The **scene renderer collection** executes multiple renderers (eg camera renderer, render texture, etc) in sequence. This lets you set multiple renderers for an entry point. You can add as many renderers to the collection as you need.
-->

>[!Note]
>Stride は、レンダラーをリスト順に実行します。

<!--
>[!Note]
>Stride executes the renderers in list order.
-->

コレクションにレンダラーを追加するには、**Children** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**追加**）をクリックし、追加したいレンダラーを選択します。
<!--
To add a renderer to the collection, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the renderer you want to add.
-->

![Add to scene collection](media/add-renderer-to-scene-renderer-collection.png)

## フォワード レンダラー
<!--
## Forward renderer
-->

一般的な設定では、シーンのほぼすべてのレンダリングに**フォワードレンダラー**を使用します。レンダリングする順番は次の通りです。
<!--
In a typical setup, the **forward renderer** renders almost everything in your scene. It renders, in order:
-->

1. 不透明オブジェクト
2. 透明オブジェクト
3. [ポストエフェクト](../post-effects/index.md)

<!--
1. opaque objects
2. transparent objects
3. [post effects](../post-effects/index.md)
-->

フォワードレンダラーは、VRオプションを設定する場所でもあります。詳しくは、[バーチャルリアリティー](../../virtual-reality/index.md)をご覧ください。
<!--
The forward renderer is also where you set VR options. For more information, see [Virtual reality](../../virtual-reality/index.md). 
-->

フォワードレンダラーのプロパティは、**フォワードレンダラーノード**で設定します。
<!--
You configure the forward renderer properties in the **forward entry node**. 
-->

## シングルステージレンダラー
<!--
## Single stage renderer
-->

![Single stage renderer](media/single-stage-renderer.png)

## アスペクト比強制変更シーンレンダラー
<!--
## Force aspect ratio scene renderer
-->

@'Stride.Rendering.Compositing.ForceAspectRatioSceneRenderer' を使用して、アスペクト比を強制することができます。その比率が画面と異なる場合には[レターボックス](https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%BF%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9_(%E6%98%A0%E5%83%8F%E6%8A%80%E8%A1%93))が適用されます。これは、**レンダーカメラ**の前に使用します。
<!--
Uses @'Stride.Rendering.Compositing.ForceAspectRatioSceneRenderer' to force an aspect ratio and applies a letterbox if the ratio is different from the screen. Use this before the **render camera**.
-->

![Force aspect ratio](media/force-aspect-ratio-properties.png)

| プロパティ     | 説明
| ------------- | ----------
| Child         | カメラ用のレンダラー（フォワードレンダラーやカスタムレンダラーなど）
| Fixed aspect ratio | ビューに設定するアスペクト比
| Force aspect ratio | オンにすると強制アスペクト比が有効

<!--
| Property      | Description                                                             
| ------------- | ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
| Fixed aspect ratio | The aspect ratio to force the view to
| Force aspect ratio | Enable forced aspect ratio
-->

## レンダー テクスチャー
<!--
## Render texture
-->

レンダーテクスチャーにレンダリングを行い、それをシーンに表示することができます（例：防犯カメラの映像をスクリーンに表示する）。詳細については、[レンダー テクスチャー](render-textures.md)を参照してください。
<!--
Renders to a render texture, which you can display in your scene (eg to display security camera footage on a screen). For more information, see [Render textures](render-textures.md).
-->

![Render texture properties](media/render-texture-scene-renderer-properties.png)

| プロパティ     | 説明
| ------------- | ----------
| Child         | カメラ用のレンダラー（フォワードレンダラーやカスタムレンダラーなど）
| Render texture| レンダリング先のテクスチャー

<!--
| Property      | Description                                                             
| ------------- | ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
| Render texture| Specify a texture to render to
-->

## レンダー マスク
<!--
## Render mask
-->

![Render mask](media/change-render-mask.png)

**レンダーマスク**は、レンダリングするグループをフィルタリングします。これを使うと、特定のモデルだけをレンダリングすることができます。詳細については、[レンダーグループとレンダーマスク](render-groups-and-masks.md)を参照してください。
<!--
The **render mask** filters which groups are rendered. You can use it to only render particular models. For more information, see [Render groups and render masks](render-groups-and-masks.md)
-->

## 関連項目
<!--
## See also
-->

* [グラフィックス コンポジター](index.md)
* [カメラ スロット](../cameras/camera-slots.md)
* [カスタム シーン レンダラー](custom-scene-renderers.md)
* [デバッグ レンダラー](debug-renderers.md)
* [レンダーグループとレンダーマスク](render-groups-and-masks.md)

<!--
* [Graphics compositor](index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Custom scene renders](custom-scene-renderers.md)
* [Debug renderers](debug-renderers.md)
* [Render groups and render masks](render-groups-and-masks.md)
-->
