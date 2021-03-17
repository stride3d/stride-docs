# グラフィックス コンポジター
<!--
# Graphics compositor
-->

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>
-->

>[!Note]
>このページは、グラフィックスパイプラインの基本を理解できていることを前提としています。

<!--
>[!Note]
>This page requires a basic understanding of graphics pipelines.
-->

**グラフィックス コンポジター**は、[シーン](../../Game-studio/scenes.md)のレンダリング方法について整理します。これを使って、レンダリングパイプラインのほぼすべての部分をカスタマイズすることができます。例えば、以下のようなことができます。
<!--
The **graphics compositor** organizes how [scenes](../../game-studio/scenes.md) are rendered. You can use it to customize almost every part of the rendering pipeline. For example, you can:
-->

- 1つまたは複数の[カメラ](../cameras/index.md)の使用
- エンティティのフィルタリング
- 異なるビューポートを持つ1つ以上の[レンダー テクスチャ](render-textures.md)へのレンダリング
- HDR または LDR レンダリングの設定
- カメラのレンダリングの前後にレンダーターゲットへ適用する[ポストエフェクト](../post-effects/index.md)
- レンダーターゲットのクリア、または深度バッファのみのクリア（例：FPS ゲームで常にレンダーターゲットの最前面にレンダリングしたり、UI をレンダリングしたりする場合など）
- スクリプト（または任意のアニメーションシステム）からのコンポジターの変更（例：ポストエフェクトの変更）

<!--
- use one or multiple [cameras](../cameras/index.md)
- filter entities
- render to one or more [render textures](render-textures.md), with different viewports
- set HDR or LDR rendering
- apply [post effects](../post-effects/index.md) to a render target, selected before or after rendering a camera
- clear a render target or clear only the depth buffer (eg to always render on top of a render target in a FPS game, or render the UI)
- modify the compositor from scripts (or any animation system), for example to modify post effects
-->

## グラフィックスコンポジターを作成する
<!--
## Create a graphics compositor
-->

Stride では、プロジェクトを新規作成するときに、グラフィックスコンポジターが含まれます。
<!--
Stride includes a graphics compositor when you create a project.
-->

別のグラフィックスコンポジターを作成する必要がある場合は、**アセットビュー**で [**Add asset**] をクリックし、[**Miscellaneous**] > [**Graphics compositor**] を選択します。
<!--
If you need to create another graphics compositor, in the **Asset View**, click **Add asset** and select **Misc > Graphics compositor**.
-->

![Add graphics compositor](media/add-graphics-compositor.png)

2つのプリセットのうちの1つを選ぶことができます。
<!--
You can choose one of two presets:
-->

* Level 10（[ポストエフェクト](../post-effects/index.md)で HDR を使用）
* Level 9（ポストエフェクトを使わない LDR を使用）

<!--
* Level 10 (HDR with [post effects](../post-effects/index.md))
* Level 9 (LDR with no post effects)
-->

## グラフィックスコンポジターを設定する
<!--
## Set the graphics compositor
-->

プロジェクトは複数のグラフィックスコンポジターを持つことができますが、同時に使用できるコンポジターは1つだけです。実行時には、[ゲームの設定](../../Game-studio/game-settings.md)で指定したグラフィックスコンポジターを使用します。
<!--
You can have multiple graphics compositors in your project, but you can only use one compositor at a time. At runtime, Stride uses the graphics compositor you specify in [Game Settings](../../game-studio/game-settings.md).
-->

![Set default scene](../../game-studio/media/game-settings-graphics-compositor.png)

実行時に、グラフィックスコンポジターをスクリプトで変更することもできます。
<!--
You can also change the graphics compositor at runtime in a script. 
-->

## グラフィックスコンポジターエディターを開く
<!--
## Open the graphics compositor editor
-->

グラフィックスコンポジターのカスタマイズは、**グラフィックスコンポジターエディター**で行います。
<!--
You customize the graphics compositor in the **graphics compositor editor**.
-->

>[!Note]
>グラフィックスコンポジターエディターは、実験的な機能です。

<!--
>[!Note]
>The graphics compositor editor is an experimental feature.
-->

**アセットビュー**で、**Graphics Compositor** アセットをダブルクリックします。
<!--
In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
-->

![Graphics Compositor asset](media/graphics-compositor-asset.png)

**グラフィックスコンポジターエディター** が開きます。
<!--
The **graphics compositor editor** opens.
-->

![Graphics Compositor editor](media/graphics-compositor-editor.png)

## ノード
<!--
## Nodes
-->

グラフィックスコンポジターエディターは、**ノード**に分かれています。**プロパティグリッド**で、各ノードのプロパティを設定することができます。
<!--
The graphics compositor editor is divided into **nodes**. You can set the properties of each node in the **Property Grid** on the right.
-->

### エンティティポイント
<!--
### Entry points
-->

**Entry Points** ノードで、各エントリポイントのパイプラインを設定することができます。
<!--
In the **Entry Points** node, you configure the pipeline for each entry point.
-->

![Entry points node](media/entry-points-node.png)

3つのエントリーポイントがあります。
<!--
There are three entry points:
-->

* ゲームをレンダリングするための "**Game**"
* Game Studio エディターをレンダリングするための "**Editor**"
* [ライト プローブ](../lights-and-shadows/light-probes.md)や[キューブマップ](../textures/skyboxes-and-backgrounds.md)などその他のものをレンダリングするための "**SingleView**"（プロパティグリッドでは **Utility** と表記）

<!--
* **Game**, to render your game
* **Editor**, to render the Game Studio editor
* **Single view** (referred to as **Utility** in the Property Grid), to render other things, such as [light probes](../lights-and-shadows/light-probes.md) and [cubemaps](../textures/skyboxes-and-backgrounds.md)
-->

各エントリーポイントには別々のレンダリングパイプラインを使用できます。例えば、Game と Editor では同じフォワードレンダラーと[ポスト エフェクト](../post-effects/index.md)を共有し、SingleView では別のフォワードレンダラーを使用する、といった具合です。
<!--
Each entry point can use a separate rendering pipeline. For example, the game and editor might share the same forward renderer and [post-processing effects](../post-effects/index.md) while your single view uses a separate forward renderer.
-->

#### エントリーポイントをレンダラーに接続する
<!--
#### Connect an entry point to a renderer
-->

1. **Entry points** ノードを選択します。

2. **プロパティグリッド**で、接続したいエントリポイント（**Editor**, **Game**, **Utility**）の横に、接続先のレンダラーを指定します。

    ![Select renderer](media/connect-entry-point.png)

<!--
1. Select the **Entry point** node.

2. In the **Property Grid**, next to the entry point you want to connect (**Editor**, **Game** or **Utility**), select the renderer you want to connect to.

    ![Select renderer](media/connect-entry-point.png)
-->

各レンダラーの情報については、[シーン レンダラー](scene-renderers.md)をご覧ください。
<!--
For information about the different renderers, see [Scene renderers](scene-renderers.md).
-->

### フォワードレンダラー
<!--
### Forward renderer
-->

一般的な設定では、**フォワードレンダラー**がシーンのほぼすべてをレンダリングします。このレンダーは、次の順序でレンダリングしていきます。
<!--
In a typical setup, the **forward renderer** renders almost everything in your scene. It renders, in order:
-->

1. 不透明オブジェクト
2. 透明オブジェクト
3. [ポスト エフェクト](../post-effects/index.md)

<!--
1. opaque objects
2. transparent objects
3. [post effects](../post-effects/index.md)
-->

フォワードレンダラーは、[バーチャル リアリティー](../../virtual-reality/index.md)のオプションを設定する場所でもあります。フォワードレンダラーのプロパティは、**Forward renderer ノード**で設定します。
<!--
The forward renderer is also where you set [virtual reality](../../virtual-reality/index.md) options. You configure the forward renderer properties in the **forward entry node**. 
-->

### デバッグレンダラー
<!--#
## Debug renderer
-->

**デバッグレンダラー**は、スクリプトがデバッグ情報を表示する際に使用します。詳細については、[デバッグ レンダラー](debug-renderers.md)を参照してください。
<!--
The **debug renderer** is used by scripts to print debug information. For more information, see [Debug renderers](debug-renderers.md).
-->

### ポストプロセスエフェクト
<!--
### Post-processing effects
-->

**Post-processing effects** ノードは、フォワードレンダラーの後ろについて、ゲームのポストエフェクトを制御します。詳細については[ポストエフェクト](../post-effects/index.md)を参照してください。
<!--
The **post-processing effects** node comes after the forward renderer and controls the post effects in your game. For more information, see [post-processing effects](../post-effects/index.md).
-->

## ノードを作成する
<!--
## Create a node
-->

ノードを作成するには、グラフィックスコンポジターエディターを右クリックして、作成するノードの種類を選択します。
<!--
To create a node, right-click the graphics compositor editor and select the type of node you want to create:
-->

![Create node](../../virtual-reality/media/create-node.png)

## 関連項目
<!--
## See also
-->

* [カメラ スロット](../cameras/camera-slots.md)
* [シーン レンダラー](scene-renderers.md)
    * [カスタム シーン レンダラー](custom-scene-renderers.md)
* [デバッグ レンダラー](debug-renderers.md)

<!--
* [Camera slots](../cameras/camera-slots.md)
* [Scene renderers](scene-renderers.md)
    * [Custom scene renders](custom-scene-renderers.md)
* [Debug renderers](debug-renderers.md)
-->
