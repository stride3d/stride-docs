# オーバーレイ

VR ゲームでは、[テクスチャ](../graphics/textures/index.md) ([レンダー テクスチャ](../graphics/graphics-compositor/render-textures.md)を含む) をプレイヤーの正面に浮動表示されるオーバーレイとして表示できます。これは、UI に特に有効です。

> [!NOTE]
> ゲームを VR デバイスで実行していない場合は、オーバーレイを表示できません。これは、VR デバイス自体がオーバーレイを作成するためです。

ここでは、オーバーレイを追加する方法について説明します。**UI** をオーバーレイに表示するには、UI をレンダー テクスチャにレンダリングし、レンダー テクスチャをオーバーレイに表示する必要があります。方法については、「[UI をオーバーレイに表示する](display-a-UI-in-an-overlay.md)」を参照してください。

## オーバーレイを追加する

1. ［Asset view］(既定では下部のペイン) で、**Graphics Compositor** アセットをダブルクリックします。

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    Graphics Compositor エディターが開きます。

    Graphics Compositor の詳細については、「[Graphics Compositor](../graphics/graphics-compositor/index.md)」を参照してください。

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

6. オーバーレイに表示するテクスチャを選択し、［OK］をクリックします。

ゲームは、VR デバイスのオーバーレイに UI をレンダリングできる状態になりました。

## 複数のオーバーレイ

必要なだけいくつでもオーバーレイを追加できます。別のオーバーレイを追加するには、［Add to overlays］![Green plus button](~/manual/game-studio/media/green-plus-icon.png) をクリックして、上のステップ 4 以降の手順に従います。

> [!NOTE]
> オーバーレイがユーザー ビューでオーバーラップしている場合は、リストで最初にあるオーバーレイが手前に表示されます。

## オーバーレイのプロパティ

![Overlay properties](media/overlay-properties.png)

| プロパティ       | 説明   
|----------------|------------------
| Texture        | オーバーレイに表示されるテクスチャです。    
| Local position | ユーザーを基準とするオーバーレイの位置です。                           
| Local rotation | ユーザーを基準とするオーバーレイの回転です。                           
| Surface size   | ワールド単位 (メートル) でのオーバーレイのサイズです。                           
| Follows head   | ユーザーの頭部に従うので、オーバーレイは常に視野内にあります。

## VR テンプレート

VR ゲームに実装された UI オーバーレイの例については、Xenko に付属する VR テンプレートを参照してください。

![VR template](media/template-virtual-reality.png)

## 関連項目

* [UI をオーバーレイに表示する](display-a-UI-in-an-overlay.md)
* [レンダー ターゲット](../graphics/graphics-compositor/render-textures.md)
* [Graphics Compositor](../graphics/graphics-compositor/index.md)
