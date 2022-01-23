# VR でのシーンのプレビュー

VR デバイスでシーンをプレビューするには、エディターを [VR が有効](enable-vr.md)なレンダラーに接続します。

<p>
<video autoplay loop class="responsive-video" poster="media/vr-editor_640.jpg">
   <source src="media/vr-editor_640.mp4" type="video/mp4">
</video>
</p>

そのためには次のようにします。

1. ［Asset view］(既定では下部のペイン) で、**Graphics Compositor** アセットをダブルクリックします。

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    Graphics Compositor エディターが開きます。

    ![Graphics Compositor editor](media/graphics-compositor-VR-template.png)

2. エディター ノードに接続された**フォワード レンダー ノード**を選択します。たとえば、(Stride VR サンプル プロジェクトから取得された) 下のスクリーンショットでは、エディターは下のフォワード レンダラー ノードに接続されています。

    ![Node connections](media/node-connections.png)

3. フォワード レンダラー ノードを選択し、［Property grid］で［VRRendererSettings］を有効にします。

    ![Select editor renderer](media/enable-vr.png)

VR デバイスにシーンのプレビューが表示されます。代わりにモニターにシーンを表示するには、［VRRendererSettings］を無効にします。

## VR でシーンをプレビューするために別のレンダラーを作成する

エディターとゲーム ノードが同じフォワード レンダラーに接続されている場合、エディター専用の独立したレンダラーを作成するとよい場合があります。このようにすると、VR デバイスとモニターの間でシーンのプレビューを簡単に切り替えることができます。

>[!NOTE]
>エディターとゲーム ノードが既に異なるレンダラーを使用している場合は (VR サンプル プロジェクトのように)、以下の説明に従う必要はありません。

1. ［Asset view］(既定では下部のペイン) で、**Graphics Compositor** アセットをダブルクリックします。

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    Graphics Compositor エディターが開きます。

    ![Graphics compositor editor](media/graphics-compositor-no-editor-node.png)

2. 新しいフォワード レンダラー ノードを作成します。そのためには、Game Compositor エディターを右クリックして、［Create］>［Forward renderer］を選択します。

    ![Create forward renderer](media/create-forward-renderer.png)

3. ［Entry points］ノードを選択します。

    ![Entry points node](media/entry-points-node.png)

4. ［Property grid］の［Editor renderer］の隣で、作成したフォワード レンダラーを選択します。

    ![Select forward renderer](media/select-editor-forward-renderer.png)

    エディターがフォワード レンダラー ノードにリンクされます。

    ![Node connections](media/node-connections.png)

5. VR の設定など、VR でゲームを実行するために使用するフォワード レンダラーを同じになるように、新しいフォワード レンダラーのプロパティを設定します。

    > [!TIP]
    > プロパティを右クリックして、プロパティをコピーまたは貼り付けできます。

    > ![Copy-paste properties](media/copy-paste-properties.png)

    > [!NOTE]
    > フォワード レンダラーで VR が有効になっていることを確認します。方法については、「[VR を有効にする](enable-vr.md)」を参照してください。

VR デバイスにシーンのプレビューが表示されます。代わりにモニターにシーンを表示するには、新しいフォワード レンダラーのプロパティで［VRRendererSettings］を無効にします。

![Enable VR](media/vr-renderer-settings.png)

## 関連項目

* [VR を有効にする](enable-vr.md)
* [Graphics Compositor](../graphics/graphics-compositor/index.md)
