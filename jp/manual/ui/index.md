# UI

Stride には、洗練されたユーザーインターフェースを構築するための UI エディターとレイアウトシステムが搭載されています。解像度には依存せず、2D と 3D に対応しています。
<!--
Stride features a UI editor and layout system you can use to build sophisticated user interfaces. It supports 2D and 3D independently of resolution.
-->

![UI editor](media/ui-editor.png)

Stride では、`UIPageAsset` と `UILibraryAsset` という 2 種類の UI アセットを使います。ランタイムでは、それぞれ `UIPage` と `UILibrary` に対応します。
<!--
Stride uses two types of UI asset: `UIPageAsset` and `UILibraryAsset`. Their runtime counterparts are `UIPage` and `UILibrary` respectively.
-->

描画の呼び出し回数を減らすために、Stride は複数の要素をスプライト バッチ レンダラーで描画します。
<!--
To reduce the number of draw calls, Stride draws multiple elements using a sprite batch renderer.
-->

## コントロール
<!--
## Controls
-->

Stride には、以下のような多くの UI コントロールコンポーネントが搭載されています。
<!--
Stride features many UI control components, including:
-->

* @'Stride.UI.Controls.ImageElement'
* @'Stride.UI.Controls.ContentControl'
  * @'Stride.UI.Controls.ScrollViewer'
  * @'Stride.UI.Controls.Button'
    * @'Stride.UI.Controls.ToggleButton'
  * @'Stride.UI.Controls.ContentDecorator'
* @'Stride.UI.Controls.TextBlock'
  * @'Stride.UI.Controls.ScrollingText'
* @'Stride.UI.Controls.EditText' (displays soft keyboard on mobile devices)
* @'Stride.UI.Panels.Panel'
  * @'Stride.UI.Panels.StackPanel' (supports virtualization)
  * @'Stride.UI.Panels.Grid'
  * @'Stride.UI.Panels.UniformGrid'
  * @'Stride.UI.Panels.Canvas'
* @'Stride.UI.Controls.ScrollBar'
* @'Stride.UI.Controls.ModalElement'

自分で作成することも可能です。
<!--
You can also create your own.
-->

## サンプルプロジェクト
<!--
## Sample project
-->

スクリプトがなければ、UI は単なる画像です。これをインタラクティブ（対話的）にするには、スクリプトを追加します。
<!--
Without scripts, UIs are simply non-interactive images. To make them interactive, add a script.
-->

Stride で実装されている UI の例として、Stride に同梱されている **game menu UI** サンプルがあります。
<!--
For an example of a UI implemented in Stride, see the **game menu UI** sample included with Stride.
-->

![Sample UI project](media/ui-sample-project.png)

## このセクションの内容
<!--
## In this section
-->

* [UI ページ](ui-pages.md)
* [UI ライブラリ](ui-libraries.md)
* [UI エディター](ui-editor.md)
* [シーンに UI を追加する](add-a-ui-to-a-scene.md)
* [レイアウト システム](layout-system.md)

<!--
* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [UI editor](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
-->

## 関連項目
<!--
## See also
-->

* [オーバーレイへの UI の表示](../virtual-reality/display-a-ui-in-an-overlay.md)

<!--
* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)
-->