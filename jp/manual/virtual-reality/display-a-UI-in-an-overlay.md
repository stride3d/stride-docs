# UI をオーバーレイに表示する

ここでは、UI をテクスチャにレンダリングした後、それをオーバーレイとして表示する方法を説明します。

以下の説明では、オーバーレイで表示する UI を既に用意してあるものとします。UI の作成については、「[UI](../ui/index.md)」セクションを参照してください。

> [!NOTE]
> ゲームを VR デバイスで実行していない場合は、オーバーレイを表示できません。これは、他のハードウェアではなく VR デバイス自体がオーバーレイを作成するためです。

## 1. レンダー ターゲットのテクスチャを作成する

［Asset view］で［Add asset］をクリックし、［Texture］>［Render target］を選択します。

![Add render target](../graphics/graphics-compositor/media/add-render-target.png)

プロジェクトのアセットに**レンダー ターゲット** テクスチャが追加されます。

![Render texture](../graphics/graphics-compositor/media/render-target-texture-in-asset-view.png)

以下の手順では、UI をこのテクスチャにレンダリングした後、それをオーバーレイに表示します。

## 2. VR オーバーレイを追加する

1. ［Asset view］(既定では下部のペイン) で、**Graphics Compositor** アセットをダブルクリックします。

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    Graphics Compositor エディターが開きます。Graphics Compositor の詳細については、「[Graphics Compositor](../graphics/graphics-compositor/index.md)」を参照してください。

2. Graphics Compositor エディターで、**フォワード レンダラー** ノードを選択します。

    ![Select forward renderer](media/select-forward-renderer.png)

3. ［Property grid］(既定では右側) で、［VR Settings］を展開します。

    ![VR settings](media/vr-settings.png)

4. ［Overlays］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

    新しいオーバーレイがリストに追加されます。

    ![Add VR item](media/add-overlay.png)

5. ［Texture］の隣の ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

   ［Select an asset］ウィンドウが開きます。

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

6. 作成した**レンダー テクスチャ**を選択し、［OK］をクリックします。

## 3. UI レンダー機能をセットアップする

1. Graphics Compositor エディターの左側の［Render Features］で、［UIRenderFeature］を選択します。

    ![Select UI render feature](media/select-UI-render-feature.png)

2. ［Property grid］で、［SimpleGroupToRenderStageSelector］が選択されていることを確認します。

    ![Select SimpleGroupToRenderStageSelector.png](media/select-SimpleGroupToRenderStageSelector.png)

3. ［Render Stage］で、［UIRenderStage］が選択されていることを確認します。

    ![Select UIRenderStage.png](media/select-UIRenderStage.png)

    これにより、UI が UI レンダー ステージにレンダリングされるようになります。これを次のステップで使用します。

## 4. レンダラーをセットアップする

オーバーレイを表示するには、少なくとも 2 つのレンダラーが必要です。

* メイン カメラをレンダリングするために 1 つ
* UI をオーバーレイにレンダリングするために 1 つ

ここでは、2 つのカメラと 2 つのレンダラーを使用して最初からこれを行う最も簡単な方法を説明します。パイプラインによっては、異なるセットアップの作成が必要になる場合があります。

> [!WARNING]
> 以下の説明には、ゲーム エントリ ポイントに対する既存のレンダラーの削除が含まれます。後でパイプラインを復元する必要がある場合は、プロジェクトをバックアップしてください。

1. Graphics Compositor エディターで、**エントリ ポイント** ノードを選択します。

    ![Entry points node](../graphics/graphics-compositor/media/entry-points-node.png)

2. 右側の［Property grid］で、［Game renderer］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、［None］を選択して既存のレンダラーを削除します。

    ![Cleared game renderers](../graphics/graphics-compositor/media/game-renderers-cleared.png)

3. ［Game rendererer］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、［Camera Renderer］を選択します。

    ![Select camera renderer.png](media/select-camera-renderer.png)

    現在、**すべての**レンダラーは、カメラを持っているか、またはカメラを持っているレンダラーの子になる必要があります。これは、UI をレンダリングする単一ステージ レンダラーなど、カメラを使用する必要のないレンダラーにも適用されます。

    そのため、以下の説明では、カメラを持つゲーム レンダラーを追加した後、2 つのレンダラーをそのレンダラーの子にします。これにより、両方のレンダラーにカメラを持つ親ができます。

4. ［Camera］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、メイン ゲーム カメラを選択します。

    ![Select main camera](media/select-main-camera.png)

5. ［Child］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、［SceneRendererCollection］を選択します。

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)

6. ［Children］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックして、［RenderTextureSceneRenderer］を選択します。

    ![Select RenderTextureSceneRenderer](media/select-RenderTextureSceneRenderer.png)

7. ［Child］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、［SingleStageRenderer］を選択します。

    ![Select single stage renderer](media/select-single-stage-renderer.png)

8. ［Render Stage］の隣の ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (［Change...］) をクリックし、［UIRenderStage］を選択します。これは UI をレンダリングするレンダラーです。

    ![Select UI render stage](media/select-UI-render-stage.png)

9. ［Render Texture］の隣の ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

   ［Select an asset］ウィンドウが開きます。

10. **レンダー テクスチャ**を選択し、［OK］をクリックします。

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

    レンダー テクスチャがレンダラーに追加されます。

11. ［Game renderer］で、［Children］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックし、［Forward Renderer］を選択します。

    ![Select forward renderer](media/overlay-select-forward-renderer.png)

ゲームは、VR デバイスのオーバーレイに UI をレンダリングできる状態になりました。

## VR テンプレート

VR ゲームに実装された UI オーバーレイの例については、Stride に付属する VR テンプレートを参照してください。

![VR template](media/template-virtual-reality.png)

## 関連項目

* [オーバーレイ](overlays.md)
* [UI](../ui/index.md)
* [レンダー ターゲット](../graphics/graphics-compositor/render-textures.md)
* [Graphics Compositor](../graphics/graphics-compositor/index.md)
