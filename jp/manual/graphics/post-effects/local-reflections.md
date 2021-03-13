# ローカル反射
<!--
# Local reflections
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

>[!Warning]
>今のところ、ローカル反映はモバイルプラットフォームとの互換性がなく、クラッシュの原因となっています。

<!--
>[!Warning]
>Currently, local reflections aren't compatible with mobile platforms and cause crashes.
-->

>[!Note]
>深度を考慮する他のポストエフェクトと同様に、ローカル反射を有効にすると、MSAA（マルチサンプル アンチエイリアシング）が無効になります。

<!--
>[!Note]
>As with other depth-aware post effects, enabling local reflections nullifies MSAA (multisample anti-aliasing).
-->

**ローカル反射（Local reflections）** を有効にすると、光沢のある[マテリアル](../materials/index.md)にシーンが反映されます。
<!--
When **local reflections** are enabled, the scene is reflected in glossy [materials](../materials/index.md).
-->

![Local reflections](media/local-reflections.jpg)

ローカル反射は、シーンのリアリティを劇的に向上させます。ローカル反射は、明るい部分が他の面に反射するときに最も顕著に現れます。このエフェクトは、コントラストの高い暗いシーンや、反射する面やハイライトが多い状況で特に有効です。
<!--
Local reflections dramatically increase the realism of scenes. They're most obvious when they reflect bright spots onto other surfaces. The effect is especially striking in dark scenes, which have high contrast, and in conditions with lots of reflective surfaces and highlights.
-->

![Night reflections](media/night-reflections.jpg)

## ローカル反射を使う場所
<!--
## Where to use local reflections
-->

ローカル反射は、**空間的なエフェクト**であり、画面上に存在するオブジェクトのみを反映し、画面外にあるオブジェクトや他のオブジェクトに隠れているオブジェクトは反映されません。簡単に言えば、カメラがその瞬間にオブジェクトを見ることができなければ、そのオブジェクトは反映されません。
<!--
Local reflections are a **screenspace effect**, which means they only reflect objects that are already on the screen; they don't reflect objects that are offscreen or obscured by other objects. Put simply, if the camera can't see an object at that moment, then that object isn't reflected.
-->

つまり、ローカル反射は、廊下や部屋のような閉鎖された場所ではうまく機能しますが、多くのものが映り込んでいるような開放的な場所ではうまく機能しません。また、凹凸のある面では最も効果的に機能し、反射の欠陥を隠すことができますが、非常に光沢のある鏡のような面では効果が低くなります。例えば、鏡のようなものでは、映り込みが目立ちます。
<!--
This means local reflections work well in enclosed areas such as corridors and rooms, but less well in open spaces, where you'd expect more of the world to be reflected. They also work best on bumpy surfaces, which hide imperfections in reflections, and less well on very glossy, mirror-like surfaces. Missing reflections are noticeable in mirrors, for example.
-->

## アルゴリズム
<!--
## Algorithm
-->

Stride は、ローカル反射を 4 つのパスで処理します。
<!--
Stride processes local reflections in four passes:
-->

1. **raycast** パスでは、深度バッファ上でスクリーン空間のレイトレーシングを行い、交差点を見つけます。

2. **resolve** パスでは、レイ（視線）を分解し、反射色を計算します。

3. **temporal** パスでは、ヒストリーバッファを使用して、現在のフレームと直前のフレームの間を常にぼかします。これにより、反射のノイズを減らすことができますが、動く「ジッタリング」効果が発生して時々目立ちます。このステップを調整したり無効にしたりすることで、お望みの効果を生み出すことができます。

4. **combine** パスでは、エフェクトの結果とレンダリング画像とをミックスします。

<!--
1. The **raycast** pass performs screenspace ray tracing over the depth buffer to find intersections.

2. The **resolve** pass resolves the rays and calculates the reflection color.

3. The **temporal** pass uses the history buffer to blur constantly between the current and previous frames. This reduces noise in the reflection, but produces an animated "jittering" effect that is sometimes noticeable. You can adjust or disable this step to create the effect you want.

4. The **combine** pass mixes the results of the effect with the rendered image.
-->

## ローカル反射を有効にする
<!--
## Enable local reflections
-->

ローカル反射を使用するには、**グラフィックスコンポジター** でエフェクトを有効にします。
<!--
To use local reflections, enable the effect in the **graphics compositor**.
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    グラフィックスコンポジターエディターが開きます。

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

2. **Post-processing effects** ノードを選択します。

    > [!Tip]
    > Post-processing effects ノードが存在していない場合は、右クリックして [**Create**] > [**post-processing effects**] を選択し、作成してください。そして、新しい**フォワードレンダラー**ノードの **PostEffects** スロットをクリックし、**Post-processing effects** ノードまでドラッグしてください。
    
    > ![Connect nodes](media/connect-nodes.png)

3. **プロパティグリッド**で、**Local Reflections** を有効にします。

    ![Enable local reflections](media/enable-local-reflections.png)

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **post-processing effects** node.

    > [!Tip]
    > If there's no post-process effects node, right-click and select **Create > post-processing effects** to create one. On the new **forward renderer** node, on the **PostEffects** slot, click and drag a link to the **post-processing effects** node.
    
    > ![Connect nodes](media/connect-nodes.png)

3. In the **Property Grid** (on the right by default), enable **Local reflections**.

    ![Enable local reflections](media/enable-local-reflections.png)
-->

ローカル反射を有効にすると、シーンが光沢のあるマテリアルに反映されます。
**光沢しきい値（gloss threshold）**（下記参照）を使って、シーンを反映させるためにマテリアルをどの程度光沢させるかを設定できます。
<!--
After you enable local reflections, the scene is reflected in glossy materials. 
You can use the **gloss threshold** (see below) to set how glossy materials should be to reflect the scene. 
-->

## プロパティ
<!--
## Properties
-->

ローカル反射プロパティの変更は、シーン内のすべてのローカル反射に影響を与えます。
<!--
The local reflections properties affect all reflections in the scene.
-->

### Raycast プロパティ
<!--
### Raycast properties
-->

![Raycast properties](media/ray-trace-properties.png)

#### BRDF bias
<!--
#### BRDF bias
-->

映り込みの広がり度合いです。値が高いほど、より細かく、より鏡のような反射が得られます。
この設定はパフォーマンスには影響しません。既定値は `0.82` です。
<!--
The reflection spread. Higher values provide finer, more mirror-like reflections. This setting has no effect on performance. The default value is `0.82`.
-->

| BRDF: `0.6` | BRDF: `0.8` | BRDF: `1.0`  
|---------------------|---------|---------
| ![BRDF: 0.6](media/brdf-06.jpg) | ![BRDF: 0.8](media/brdf-08.jpg) | ![BRDF: 1.0](media/brdf-10.jpg)

<!--
| BRDF: `0.6` | BRDF: `0.8` | BRDF: `1.0`  
|---------------------|---------|---------
| ![BRDF: 0.6](media/brdf-06.jpg) | ![BRDF: 0.8](media/brdf-08.jpg) | ![BRDF: 1.0](media/brdf-10.jpg)
-->

#### Depth resolution
<!--
#### Depth resolution
-->

レイキャストのパフォーマンスを最適化するために、深度バッファをダウンスケールします。
Full はより良い品質を提供しますが、Half はパフォーマンスを向上させます。既定は Half です。
<!--
Downscales the depth buffer to optimize raycast performance. Full gives better quality, but half improves performance. The default is half.
-->

#### Gloss threshold
<!--
#### Gloss threshold
-->

シーンを映し込むためにマテリアルが持たなければならない光沢（gloss）の最小量です。
例えば、この値が `0.4` に設定されていると、 **gloss map** の値が `0.4` 以上のマテリアルだけがシーンを反映するようになります。既定値は `0.55` です。
<!--
The amount of gloss a material must have to reflect the scene. For example, if this value is set to `0.4`, only materials with a **gloss map** value of `0.4` or above reflect the scene. The default value is `0.55`.
-->

>[!Note]
>マテリアルの **Geometry** > **Micro Surface** プロパティで **Invert** チェックボックスが選択されている場合は、その逆になります。
例えば、反射の光沢値が `0.4` に設定されている場合、 **Gloss map** の値が `0.4` 未満のマテリアルのみがシーンを反映します。
<!--
>[!Note]
>If the **Invert** check box is selected in the material **micro surface** properties, the opposite is true. For example, if the reflections gloss value is set to `0.4`, only materials with a **gloss map** value of less than `0.4` reflect the scene.
-->

光沢の詳細については、[マテリアル：ジオメトリ属性](../materials/geometry-attributes.md)を参照してください。
<!--
For more information about gloss, see [Materials — geometry attributes](../materials/geometry-attributes.md).
-->

#### Max steps 
<!--
#### Max steps 
-->

1 ピクセルあたりに許されるレイキャストステップの最大数です。
値が大きいほど良い結果が得られますが、パフォーマンスは悪くなります。
既定値は `60` です。
<!--
The maximum number of raycast steps allowed per pixel. Higher values produce better results, but worse performance. The default value is `60`. 
-->

>[!Note]
>これは、パフォーマンスをコントロールする上で最も重要なプロパティです。

<!--
>[!Note]
>This is the most important property for controlling performance.
-->

#### Resolution
<!--
#### Resolution
-->

レイキャストの解像度です。**full** と **half** の 2 つのオプションがあります。
full は品質が向上しますが、half はパフォーマンスが向上します。既定値は half です。
<!--
The raycast resolution. There are two options: **full** and **half**. Full gives better quality, but half improves performance. The default value is half.
-->

#### Ray start bias
<!--
#### Ray start bias
-->

レイキャストの原点のオフセットです。
値を小さくすると、より正しい反射配置が得られますが、より多くのアーティファクトが発生します。
`0.03` 以下の値を推奨します。既定値は `0.01` です。
<!--
The offset of the raycast origin. Lower values produce more correct reflection placement, but produce more artifacts. We recommend values of `0.03` or lower. The default value is `0.01`.
-->

| 開始 bias: `0.01`   | 開始 bias: `0.1`
|---------------------|---------
|  ![Start bias: 0.03](media/low-ray-start-bias.jpg) |   ![Start bias: 0.1](media/high-ray-start-bias.jpg)
| 反射とボックスとの隙間が大きい（より正しい） | 反射とボックスとの隙間が小さい（正しくない）

<!--
| Start bias: `0.01` | Start bias: `0.1`
|---------------------|---------
|  ![Start bias: 0.03](media/low-ray-start-bias.jpg) |   ![Start bias: 0.1](media/high-ray-start-bias.jpg)
| Larger gap between reflection and box (more correct) | Narrower gap between reflection and box (less correct)
-->

### Resolve プロパティ
<!--
### Resolve properties
-->

![Resolve properties](media/resolve-properties.png)

#### Resolution 
<!--
#### Resolution 
-->

レイキャストの結果を使って反射色を計算します。
**full** と **half** という 2 つのオプションがあります。
full では最も良い結果が得られますが、half ではパフォーマンスが向上します。
既定値は **full** です。
<!--
Calculates reflection color using raycast results. There are two options: **full** and **half**. Full gives the best results, but half improves performance. The default value is **full**.
-->

#### Samples 
<!--
#### Samples 
-->

反射色の解決に使用される光線（ray）の数です。
値を大きくするとノイズは少なくなりますが、パフォーマンスは悪くなります。
既定値は `4` です。
<!--
The number of rays used to resolve the reflection color. Higher values produce less noise, but worse performance. The default value is `4`.
-->

#### Reduce highlights
<!--
#### Reduce highlights
-->

反射の中でも特に明るい部分の輝度を下げます。
性能には影響しません。
<!--
Reduces the brightness of particularly bright areas of reflections. This has no effect on performance.
-->

| Reduce highlights オン | Reduce highlights オフ
|---------------------|---------
|  ![Edge fade factor: 0.5](media/reduce-highlights-on.jpg) | ![Edge fade factor: 0](media/reduce-highlights-off.jpg) 

<!--
| Reduce highlights: on | Reduce highlights: off
|---------------------|---------
|  ![Edge fade factor: 0.5](media/reduce-highlights-on.jpg) | ![Edge fade factor: 0](media/reduce-highlights-off.jpg) 
-->

#### Edge fade factor
<!--
#### Edge fade factor
-->

映り込みのエッジが薄くなり始めるポイントです。
これはパフォーマンスには影響しません。
既定値は `0.1` です。
<!--
The point at which the far edges of the reflection begin to fade. This has no effect on performance. The default value is `0.1`. 
-->

| Edge fade factor: `0` | Edge fade factor: `0.5`
|---------------------|---------
|  ![Edge fade factor: 0](media/zero-edgefade.jpg) |   ![Edge fade factor: 0.5](media/half-edgefade.jpg) 

<!--
| Edge fade factor: `0` | Edge fade factor: `0.5`
|---------------------|---------
|  ![Edge fade factor: 0](media/zero-edgefade.jpg) |   ![Edge fade factor: 0.5](media/half-edgefade.jpg) 
-->

#### Use color buffer mips 
<!--
#### Use color buffer mips 
-->

入力色バッファをダウンスケールし、反射色を解決する際にぼかしたミップマップを使用します。
これにより、ざらざらした（光沢の少ない）マテリアルでの反射の遠方をぼかすことができ、よりリアルな結果が得られます。
また、ほとんどのプラットフォームでパフォーマンスが向上します。
ただし、より多くのメモリを使用するため、たとえばモバイルプラットフォームでは無効にしたほうがよいでしょう。
<!--
Downscales the input color buffer and uses blurred mipmaps when resolving the reflection color. This produces more realistic results by blurring distant parts of reflections in rough (low-gloss) materials. It also improves performance on most platforms. However, it uses more memory, so you might want to disable it on (for example) mobile platforms.
-->

### Temporal プロパティ
<!--
### Temporal properties
-->

![Temporal properties](media/temporal-properties.png)

#### Temporal effect
<!--
#### Temporal effect
-->

temporal パスを有効にします。
これにより、ノイズは減少しますが、動く「ジッタリング」効果が発生し、時々目立ちます。
既定では、temporal エフェクトは有効になっています。
<!--
Enables the temporal pass. This reduces noise, but produces an animated "jittering" effect that is sometimes noticeable. The temporal effect is enabled by default.
-->

| Temporal effect オン | Temporal effect オフ
|---------------------|---------
| ![Temporal effect enabled](media/temporal-effect-enabled.jpg)| ![Temporal effect disabled](media/temporal-effect-disabled.jpg)

<!--
| Temporal effect: on | Temporal effect: off
|---------------------|---------
| ![Temporal effect enabled](media/temporal-effect-enabled.jpg)| ![Temporal effect disabled](media/temporal-effect-disabled.jpg)
-->

>[!Note]
>temporal エフェクトを無効にした場合、他の temporal プロパティは無視されます。

<!--
>[!Note]
>If the temporal effect is disabled, the other temporal properties have no effect.
-->

#### Response
<!--
#### Response
-->

現在のフレームの反射とヒストリーバッファの間で反射がどのくらい早く合成されるかの度合いです。
低い値では反射が速くなりますが、ジッタリングが多くなります。
下の画像ではジッタリングが発生しています。
<!--
How quickly reflections blend between the reflection in the current frame and the history buffer. Lower values produce reflections faster, but with more jittering.   Note the jittering in the reflection below:
-->

![Jittering](media/response-jiterring.gif) 

ゲーム内のカメラがあまり動かない場合は、`1` に近い値を推奨します。既定値は `0.9` です。
<!--
If the camera in your game doesn't move much, we recommend values closer to `1`. The default value is `0.9`.
-->

#### Scale
<!--
#### Scale
-->

temporal エフェクトの強さを指定します。
低い値では反射が早くなりますが、ノイズが多くなります。
既定値は `4` です。
<!--
The intensity of the temporal effect. Lower values produce reflections faster, but with more noise. The default value is `4`.
-->

## 関連項目
<!--
## See also
-->

* [マテリアル](../materials/index.md)
    * [ジオメトリ属性](../materials/geometry-attributes.md)
* [ポストエフェクト](index.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Materials](../materials/index.md)
* [Materials — geometry attributes](../materials/geometry-attributes.md)
* [Post effects](index.md)
* [Graphics compositor](../graphics-compositor/index.md)
-->
