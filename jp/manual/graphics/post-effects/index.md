# ポストエフェクト
<!--
# Post effects
-->

**ポストエフェクト（Post effects）** は通常、ゲームがフレームのレンダリングを完了した後、UI が描画される前に適用されます。ポストエフェクトは、より自然でリアルな表現や、映画のようなスタイリッシュな効果など、画像の調整や装飾のために使用することができます。
<!--
**Post effects** are usually applied after your game has completed the rendering of a frame, but before the UI is drawn. You can use post effects to tune or embellish an image — for example, by producing a more natural, realistic look, or creating stylized cinematic effects.
-->

![media/post-effects-reference-1.png](media/post-effects-reference-1.png) 

ポストエフェクトは通常、画像に対して適用されます。つまり、頂点やメッシュとは関係ありません。ポストエフェクトは、各ピクセルの色の値のみ（場合によっては深さも）を扱います。
<!--
Post effects are usually applied to an image. This means they have no connection with vertices or meshes. They only work with the color values of each pixel (and sometimes their depth).
-->

一般的には、以下のような項目でポストエフェクトの設定を行います。
<!--
Typically, you set up a post effect by specifying:
-->

- 入力バッファ（色、深度など）
- 1 つ以上の出力バッファ
- レンダリングパス内でのポストエフェクトの振る舞いをカスタマイズするパラメータ－

<!--
- input buffers (eg color, depth)
- one or several output buffers
- parameters to customize the behavior of the post effect during its rendering pass
-->

Stride には定義済みのポストエフェクトがいくつか用意されています。また、[システムを拡張して独自の色変換エフェクトを作る](color-transforms/custom-color-transforms.md)こともできます。
<!--
Stride provides several predefined post effects. You can also [extend the system to create your own color transform effects](color-transforms/custom-color-transforms.md).
-->

>[!Note]
>深度を考慮したポストエフェクト（[被写界深度](depth-of-field.md)、[アンビエント オクルージョン](ambient-occlusion.md)、[ローカル反射](local-reflections.md)など）では、MSAA（マルチサンプル アンチエイリアシング）が無効になります。

<!--
>[!Note]
>Depth-aware post effects ̶  ie [depth of field](depth-of-field.md), ambient occlusion, and [local reflections](local-reflections.md) ̶  nullify MSAA (multisample anti-aliasing).
-->

## ポストエフェクトの追加と編集
<!--
## Add or edit a post effect
-->

ポストエフェクトの追加と編集は、[グラフィックス コンポジター](../graphics-compositor/index.md)で行います。
<!--
You add and edit post effects in the [graphics compositor](../graphics-compositor/index.md).
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)

    グラフィックスコンポジターエディターが開きます。

    ![Graphics Compositor editor](..\graphics-compositor\media\graphics-compositor-editor.png)

2. **Post-processing effects** ノードを選択します。

    > [!Tip]
    > Post-processing effects ノードが存在していない場合は、右クリックして [**Create**] > [**post-processing effects**] を選択し、作成してください。そして、新しい**フォワードレンダラー**ノードの **PostEffects** スロットをクリックし、**Post-processing effects** ノードまでドラッグしてください。
    > ![Connect nodes](media/connect-nodes.png)

3. **プロパティグリッド**で、使用したいポストエフェクトを有効にします。

    ![Post effect properties](media/post-effect-properties.png)

    それぞれのポストエフェクトの詳細やプロパティについては、以下のページをご覧ください。

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](..\graphics-compositor\media\graphics-compositor-editor.png)

2. Select the **Post-processing effects** node.

    > [!Tip]
    > If there's no post-process effects node, right-click and select **Create > post-processing effects** to create one. On the new **forward renderer** node, on the **PostEffects** slot, click and drag a link to the **post-processing effects** node.
    > ![Connect nodes](media/connect-nodes.png)

3. In the **Property Grid** (on the right by default), enable the post effects you want to use and configure their properties.

    ![Post effect properties](media/post-effect-properties.png)

    For details about each post effect and its properties, see the pages below.
-->

## このセクションの内容
<!--
## In this section
-->

* [アンチエイリアシング](anti-aliasing.md)
* [アンビエント オクルージョン](ambient-occlusion.md)
* [ブルーム](bloom.md)
* [明度フィルター](bright-filter.md)
* [色変換](color-transforms/index.md)
    * [フィルム グレイン](color-transforms/film-grain.md)
    * [ガンマ補正](color-transforms/gamma-correction.md)
    * [トーンマップ](color-transforms/tonemap.md)
    * [ヴィネッティング](color-transforms/vignetting.md)
    * [カスタム色変換](color-transforms/custom-color-transforms.md)
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)
* [ローカル反射](local-reflections.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
    * [Film grain](color-transforms/film-grain.md)
    * [Gamma correction](color-transforms/gamma-correction.md)
    * [ToneMap](color-transforms/tonemap.md)
    * [Vignetting](color-transforms/vignetting.md)
    * [Custom color transforms](color-transforms/custom-color-transforms.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Local reflections](local-reflections.md)
-->

## 関連項目
<!--
## See also
-->

* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Graphics compositor](../graphics-compositor/index.md)
-->