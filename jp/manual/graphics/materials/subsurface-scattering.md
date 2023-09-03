# サブサーフェス スキャタリング
<!--
# Subsurface scattering
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
-->

マテリアルで[**サブサーフェススキャタリング（Subsurface scattering）**](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%96%E3%82%B5%E3%83%BC%E3%83%95%E3%82%A7%E3%82%B9%E3%83%BB%E3%82%B9%E3%82%AD%E3%83%A3%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0)を有効にすると、モデル内部で光が不規則な角度で反射します。これを利用して、肌、ロウソク、葉、大理石、磁器などの半透明なマテリアルをリアルに表現することができます。
<!--
When you enable **subsurface scattering** on a material, light is reflected at irregular angles inside the model. You can use this to realistically render translucent materials such as skin, wax, leaves, marble, and porcelain.
-->

下の写真は、その効果の実例を示したものです。
<!--
The photo below demonstrates a real-life example of the effect:
-->

![Photo](media/skin-subsurface-scattering-photo.jpg)

*（画像提供：Davepoo2014, [Creative Commons Attribution-Share Alike 4.0 International ライセンス](https://creativecommons.org/licenses/by-sa/4.0/deed.en)* ）
<!--
*(Image courtesy of Davepoo2014, shared under [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en))*
-->

以下のスクリーンショットでは、Stride でサブサーフェイス スキャタリングを使用してロウソクをレンダリングしています。
<!--
The screenshots below demonstrate the use of subsurface scattering in Stride to render wax:
-->

| サブサーフェス スキャタリング　オフ| サブサーフェス スキャタリング　オン
|---------------------------------|------------------------
| ![On](media/candles-ss-off.jpg) | ![Off](media/candles-ss-on.jpg)

<!--
| Subsurface scattering off       | Subsurface scattering on
|---------------------------------|------------------------
| ![On](media/candles-ss-off.jpg) | ![Off](media/candles-ss-on.jpg)
-->

2 枚目の画像では、ロウソクに光が当たることで、影がより柔らかくなっています。
<!--
The shadows are much softer in the second image, as more light passes through the candles.
-->

## サブサーフェス スキャタリングを有効にする
<!--
## Enable subsurface scattering
-->

1. サブサーフェス シェーディングを適用したいマテリアルを選択します。

2. **プロパティグリッド**で、**Shading** > **Subsurface scattering** の横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**置換**）をクリックし、**Subsurface scattering** を選択します。

    ![Enable subsurface scattering](media/enable-subsurface-scattering.png)

<!--
1. Select the material you want to use subsurface shading.

2. In the Property Grid, under **Shading**, next to **Subsurface scattering**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Subsurface scattering**.

    ![Enable subsurface scattering](media/enable-subsurface-scattering.png)
-->

## プロパティ
<!--
## Properties
-->

![Properties](media/subsurface-scattering-properties.png)

| プロパティ           | 説明
|--------------------|--------------------
| Scattering width   | 光の散乱距離。[ワールド単位](../../game-studio/world-units.md)。
| Translucency       | 光がマテリアルを透過する割合を表します。`0.0` で完全不透明、`1.0` で完全透明になります。
| Translucency map   | [グレースケールマップ](material-maps.md)を指定して、マテリアルの様々な領域がどれだけ透明であるかをコントロールします。明るい値ほど散乱が大きくなります。例えば、耳は頭頂部よりも散乱させるべきです。耳は薄いので、光が通過しやすいからです。テクスチャーには **Translucency** の値が乗じられます。
| Scattering profile | 後のレンダーパスで使用する散乱プロファイル。<p><br>**Skin:** 肌をレンダリングするために設定されたシェーダー <p><br>**Custom (skin-based):** Skin プロファイルをベースにした、カスタマイズ可能なプロファイル
| Scattering kernel  | サブサーフェス散乱のポストプロセスで使用する散乱カーネル。 <p><br>**Falloff:** 散乱光はこの色にマスクされます。例えば、ロウソクのスクリーンショットでは、光がオレンジから黄色にフェードしています。 <p><br>**Strength:** この色にフェードします。

<!--
| Property           | Function
|--------------------|--------------------
| Scattering width   | How far the light scatters in [world units](../../game-studio/world-units.md)
| Translucency       | How much light pentrates the material. `0.0` is no translucency; `1.0` is max.
| Translucency map   | Specify a [grayscale map](material-maps.md) to control how translucent different regions of the material are. Brighter values produce more scattering. For example, ears should scatter more light than the top of the head, because they're thinner and therefore light passes through them more easily. The texture is multiplied by the **Translucency** parameter.
| Scattering profile | The scattering profile to use during the forward render pass. <p><br>**Skin:** A preconfigured shader for rendering skin <p><br>**Custom (skin-based):** A profile based on the Skin profile you can customize yourself
| Scattering kernel  | The scattering kernel to use in the subsurface scattering post process. <p><br>**Falloff:** Scattered light is masked to this color. For example, in the screenshot of the candles, the light fades to an orange-yellow. <p><br>**Strength:** Fades to this color
-->

| Transluency: `0.2`                        | Transluency: `0.98`
|-------------------------------------------|--------------------
| ![On](media/candles-translucency-02.jpg)  | ![Off](media/candles-translucency-98.jpg)

<!--
| Transluency: `0.2`                        | Transluency: `0.98`
|-------------------------------------------|--------------------
| ![On](media/candles-translucency-02.jpg)  | ![Off](media/candles-translucency-98.jpg)
-->

## グラフィックスコンポジターのオプション
<!--
## Graphics compositor options
-->

**[グラフィックスコンポジターエディター](../graphics-compositor/index.md)** には、サブサーフェイス スキャタリング用の追加オプションがあります。これらのオプションは、サブサーフェイス スキャタリングを使用する**すべて**のマテリアルにグローバルに適用されます。
<!--
There are additional subsurface scattering options in the **[graphics compositor editor](../graphics-compositor/index.md)**. These options apply globally to **all** materials that use subsurface scattering.
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    すると、グラフィックスコンポジターエディターが開きます。

2. **Subsurface scattering** ノードを選択します。

    ![Select node](media/select-subsurface-scattering-node.png)

3. **プロパティグリッド**で、プロパティを編集します。

    ![Subsurface scattering blur](media/subsurface-scattering-blur-properties.png)

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

2. Select the **Subsurface scattering** node.

    ![Select node](media/select-subsurface-scattering-node.png)

3. In the **Property Grid** (on the right by default), edit the properties.

    ![Subsurface scattering blur](media/subsurface-scattering-blur-properties.png)
-->

### プロパティ
<!--
### Properties
-->

| プロパティ      | 説明
|----------------|-----------
| Follow surface | 大きな深度差での光の散乱を防ぎます。GPU のパフォーマンスに影響します。
| Passes         | ぼかし（ブラー）を実行する回数です。回数が多いほど、より滑らかな結果が得られます（ノイズやバンディングが少なくなります）。
| Jitter kernel size | アンダーサンプリングに起因するバンディングアーティファクトを低減するために、ノイズを使用します。より滑らかな効果が得られますが、技術的には正確さに欠けます（近距離では顕著になることがあります）。
| Render mode    | デバッグ用にレンダーモードを変更します。

<!--
| Property       | Function
|----------------|-----------
| Follow surface | Prevent light scattering across large depth differences. Affects GPU performance.
| Passes         | The number of times the blur is executed. More passes produce smoother results (less noise and banding).
| Jitter kernel size | Use noise to reduce banding artifacts caused by undersampling. Creates a smoother effect, but is technically less accurate (sometimes noticeable at close distances).
| Render mode    | Change the render mode for debugging purposes
-->

## 関連項目
<!--
## See also
-->

* [マテリアルマップ](material-maps.md)
* [マテリアル属性](material-attributes.md)
    * [ジオメトリ属性](geometry-attributes.md)
    * [シェーディング属性](shading-attributes.md)
    * [その他の属性](misc-attributes.md)
* [マテリアルレイヤー](material-layers.md)
* [開発者向けのマテリアル情報](materials-for-developers.md)

<!--
* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Material layers](material-layers.md)
* [Materials for developers](materials-for-developers.md)
-->
