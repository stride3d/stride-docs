# UI エディター
<!--
# UI editor
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Designer</span>
-->

**UI エディター**を使って、[UI ページ](ui-pages.md)や [UI ライブラリ](ui-libraries.md)を編集することができます。
<!--
You can edit [UI pages](ui-pages.md) and [UI libraries](ui-libraries.md) with the **UI editor**.
-->

UI エディターを開くには、**アセットビュー**で、**UI Page** または **[UI Libraries](ui-libraries.md)** アセットをダブルクリックします。
<!--
To open the editor, in the **Asset View**, double-click a **UI page** or **[UI library](ui-libraries.md)**.
-->

![Open UI editor](media/open-UI-editor.png)

すると、UI エディターが開きます。
<!--
The UI editor opens.
-->

![UI editor overview](media/ui-editor-overview.png)

UI エディターの構成は以下の通りです。
<!--
The UI editor comprises:
-->

* [UI ライブラリ](ui-libraries.md)のリスト（**A**）。UI に追加することができる要素（ボタンやグリッドなど）が含まれます。

* UI ページの要素のビジュアルツリー（**B**）。

* ゲームで表示される UI ページのプレビュー（**C**）。

* UI 要素のプロパティを編集するためのプロパティグリッド（**D**）。

<!--
* the list of [UI libraries](ui-libraries.md) (**A**), which contain the elements (such as buttons and grids) you can add to your UI

* a visual tree of the elements in the UI page (**B**)

* a preview of the UI page as it appears in the game (**C**)

* a Property Grid (**D**) to edit the properties of your UI elements
-->

## UI ライブラリ
<!--
## UI libraries
-->

**UI ライブラリ**には、UI ページで使用し再利用できる **UI 要素**（グリッド、ボタン、スライダーなど）が含まれています。これらは、シーンエディタの[プレハブ](../game-studio/prefabs/index.md) と同様に動作します。
<!--
A **UI library** contains **UI elements** (such as grids, buttons, sliders and so on) that you can use and re-use in your UI pages. They work similarly to [prefabs](../game-studio/prefabs/index.md) in the Scene Editor.
-->

![UI library](media/UI-library.png)

詳細については、[UI ライブラリ](ui-libraries.md) を参照してください。
<!--
For more information, see [UI libraries](ui-libraries.md).
-->

## ビジュアルツリー
<!--
## Visual tree
-->

**ビジュアルツリー（Visual Tree）** は、UI ページに含まれる要素とその階層を表示します。これは、シーンエディターの**エンティティツリー**に似ています。
<!--
The **visual tree** shows the elements in the UI page and their hierarchy. This is similar to the **Entity Tree** in the Scene Editor.
-->

![UI asset properties](media/ui-editor-visual-tree.png)

かっこ内の数字は、要素が持つ子の数を示しています。ボタンなどの一部の要素は、子を 1 つしか持つことができません。
<!--
The number in parentheses indicates the number of children an element has. Some elements, such as buttons, can only have one child.
-->

ビジュアルツリーの要素の順序を変えるには、それらをドラッグ＆ドロップします。
<!--
To re-order elements in the visual tree, drag and drop them.
-->

要素を新しいグループに移動するには、要素を右クリックして[**グループ化**]を選択します。
例えば、新しいグリッドを作成してそこに要素を移動させるには、要素を右クリックして [**Group into**] > [**Grid**」を選択します。
<!--
To move an element to a new group, right-click the element and select **Group into**. For example, to create a new grid and move an element into it, right-click the element and select **Group into > Grid**.
-->

![Group into grid](media/group-into-grid.png)

## UI プレビュー
<!--
## UI preview
-->

**UI プレビュー**は、ランタイムに表示される UI のプレビューを表示します。デザインの解像度が、編集したアセットを使用する UI コンポーネントと同じであると想定して、ゲーム内のレンダリングと同等のものが表示されます。
<!--
The **UI preview** displays a preview of the UI as it appears at runtime. The rendering is equivalent to the rendering in the game, assuming the design resolution is the same as the UI component that uses the edited asset.
-->

既定では、UI は**ビルボード**であり、常にカメラに面を向けています。UI ビューカメラは**平行投影（orthographic）**です（[カメラ](../graphics/cameras/index.md)を参照）。
<!--
By default, the UI is a **billboard**, meaning it always faces the camera. The UI view camera is **orthographic** (see [Cameras](../graphics/cameras/index.md)). 
-->

プレビューでは、画像編集アプリケーションと同じように、要素の選択、移動、サイズ変更が可能です。
<!--
You can select, move, and resize elements in the preview as you do in image editing applications.
-->

![Select an element](media/ui-editor-selecting.gif)

![Move an element](media/ui-editor-moving.gif)

![Resize an element](media/ui-editor-resizing.gif)

### コントロール
<!--
### Controls
-->

| アクション         | コントロール
|-------------------|--------------------------------------
| Pan               | マウスの中ボタンを押しながらマウスを移動
| Zoom              | マウスホイール
| Speed up pan/zoom | シフトを押しながらパンやズームをする

<!--
| Action            | Control                              
|-------------------|--------------------------------------
| Pan               | Hold middle mouse button + move mouse
| Zoom              | Mouse wheel                    
| Speed up pan/zoom | Hold shift while panning or zooming
-->

### ツールオプション
<!--
### Tool options
-->

選択ツールの色とサイズを変更するには、**UI エディターのツールバー**で、 ![Eye icon](media/eye-icon.png)をクリックします。
<!--
To change the color and size of the selection tools, in the **UI editor toolbar**, click ![Eye icon](media/eye-icon.png)
-->

> [!Note]
> これらのオプションは、実行時における UI の表示には影響しません。

<!--
> [!Note]
> These options have no effect on how the UI is displayed at runtime.
-->

![UI editor view options](media/ui-editor-view-options.png)

* **Guideline**: 余白までの距離を示す線の幅を変更します（ピクセル単位）。

* **Highlight**: 要素の上にマウスを移動したときに表示されるハイライトの幅を変更します。

* **Selection**: 選択範囲のハイライトの幅を変更します。

* **Sizing**: 要素のサイズを変更するために表示される、選択範囲の端にあるボックスのサイズを変更します。

<!--
* **Guideline**: changes the width of the lines that indicate the distance to the margins (in pixels)

* **Highlight**: changes the width of the highlight that appears when you move your mouse over an element

* **Selection**: changes the width of the selection highlight

* **Sizing**: changes the size of the boxes at the edges of selections used to resize elements
-->

## UI ページに UI 要素を追加する
<!--
## Add a UI element to a UI page
-->

要素（グリッドやボタンなど）を追加するには、要素を **UI ライブラリ**から UI ページや**ビジュアルツリー**にドラッグします。
<!--
To add an element (such as a grid or button), drag it from the **UI library** to the UI page or the **visual tree**.
-->

![Add UI element](media/add-ui-element.gif)

## プロパティ
<!--
## Properties
-->

要素のプロパティは、**プロパティグリッド**で確認し編集することができます。
<!--
You can view and edit element properties in the **Property Grid**.
-->

![Property Grid!](media/element-property-grid.png)

プロパティは、**概観（Appearance）**, **振る舞い（Behavior）**, **レイアウト（Layout）**, **その他（Misc）** の順に表示されます。
<!--
Properties are sorted by **Appearance**, **Behavior**, **Layout** and **Misc**.
-->

### 概観（Appearance）
<!--
### Appearance
-->

よく使われるプロパティには、`BackgroundColor`, `Opacity`, `Visibility`, `ClipToBounds` などがあります。
<!--
Commonly used properties include `BackgroundColor`, `Opacity`, `Visibility` and `ClipToBounds`.
-->

![Appearance properties](media/appearance-properties.png)

### 振る舞い（Behavior）
<!--
### Behavior
-->

よく使われるプロパティに、`CanBeHitByUser`（要素がタッチイベントに反応するかどうか）があります。
<!--
Commonly used properties include whether the element responds to touch events(`CanBeHitByUser`).
-->

![Behavior properties](media/behavior-properties.png)

### レイアウト（Layout）
<!--
### Layout
-->

よく使われるプロパティには、要素のサイズ（`Height`, `Width`, `Depth`）、配列（`HorizontalAlignment`, `VerticalAlignment`, `DepthAlignement`）、自身の `Margin` があります。
<!--
Commonly used properties include the size of the element (`Height`, `Width` and `Depth`), its alignment (`HorizontalAlignment`, `VerticalAlignment`, `DepthAlignement`) and its `Margin`.
-->

![Layout properties](media/layout-properties.png)

### その他（Misc）
<!--
### Misc
-->

このカテゴリーには、要素の `Name`（名前）だけがあります。
<!--
This category contains only the `Name` of the element.
-->

![Misc properties](media/misc-properties.png)

## 関連項目
<!--
## See also
-->

* [UI ページ](ui-pages.md)
* [UI ライブラリ](ui-libraries.md)
* [シーンに UI を追加する](add-a-ui-to-a-scene.md)
* [レイアウト システム](layout-system.md)

<!--
* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
-->
