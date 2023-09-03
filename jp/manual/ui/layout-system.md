# レイアウト システム
<!--
# Layout system
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>
<span class="badge text-bg-success">デザイナー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>
-->

Stride UI のレイアウトシステムは、Windows Presentation Foundation（WPF）に似ています。WPF のレイアウトシステムの詳細については、[MSDNドキュメント](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/layout)を参照してください。WPF のドキュメントの多くは、Stride のレイアウトシステムにも当てはまります。
<!--
The Stride UI layout system is similar to Windows Presentation Foundation (WPF). For more information about the WPF layout system, see the [MSDN documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout). Much of the WPF documentation also applies to the Stride layout system.
-->

Stride UI システムのすべての @'Stride.UI.UIElement' には、それを取り巻く矩形があり、レイアウトで使用されます。Stride は、@'Stride.UI.UIElement' の要件、利用可能な画面スペース、制約、マージン、余白、および @'Stride.UI.Panels.Panel' 要素の特別な動作（特定の方法で子を配置する）に従って、レイアウトを計算します。
<!--
Every @'Stride.UI.UIElement' in the Stride UI system has a surrounding rectangle used in layouts. Stride computes layouts according to the @'Stride.UI.UIElement' requirement, available screen space, constraints, margins, padding, and the special behavior of @'Stride.UI.Panels.Panel' elements (which arrange children in specific ways). 
-->

レイアウトシステムは、このデータを再帰的に処理して、UI システム内のすべての @'Stride.UI.UIElement' の位置とサイズを計算します。
<!--
Processing this data recursively, the layout system computes a position and size for every @'Stride.UI.UIElement' in the UI system.
-->

## Measure と Arrange
<!--
## Measure and arrange
-->

Stride では、レイアウトの処理を 2 つのパスで再帰的に行います。[Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) と [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) です。
<!--
Stride performs the layout process recursively in two passes: [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) and [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)).
-->

### Measure
<!--
### Measure
-->

[Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) パスでは、各要素は、@'Stride.UI.UIElement.Width', @'Stride.UI.UIElement.Height', @'Stride.UI.UIElement.Margin'などのプロパティに従って、[DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) を再帰的に計算します。 
<!--
In the [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) pass, each element recursively computes its [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) according to the properties you set, such as @'Stride.UI.UIElement.Width', @'Stride.UI.UIElement.Height', and @'Stride.UI.UIElement.Margin'.
-->

一部の @'Stride.UI.Panels.Panel' 要素は、[Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) を再帰的に呼び出して、子要素の [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) を決定し、それに従って動作します。
<!--
Some @'Stride.UI.Panels.Panel' elements call [Measure](xref:Stride.UI.UIElement.Measure(Stride.Core.Mathematics.Vector3)) recursively to determine the  [DesiredSize](xref:Stride.UI.UIElement#Stride_UI_UIElement_DesiredSize) of their children, and act accordingly.
-->

### Arrange
<!--
### Arrange
-->

[Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) パスは、以下のプロパティを考慮して、要素を配置します。
<!--
The [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) pass arranges the elements, taking into account:
-->

* @'Stride.UI.UIElement.Margin'
* @'Stride.UI.UIElement.Width'
* @'Stride.UI.UIElement.Height'
* @'Stride.UI.UIElement.HorizontalAlignment'
* @'Stride.UI.UIElement.VerticalAlignment' 
* @'Stride.UI.Panels.Panel'
* specific [Arrange](xref:Stride.UI.UIElement.Arrange(Stride.Core.Mathematics.Vector3,System.Boolean)) rules

## 関連項目
<!--
## See also
-->

 * [MSDN WPF：レイアウト](https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/layout)
 * [UI ページ](ui-pages.md)
 * [UI ライブラリ](ui-libraries.md)
 * [UI エディター](ui-editor.md)
 * [シーンに UI を追加する](add-a-ui-to-a-scene.md)

<!--
 * [MSDN WPF layout documentation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/layout)
 * [UI pages](ui-pages.md)
 * [UI libraries](ui-libraries.md)
 * [UI editor](ui-editor.md)
 * [Add a UI to a scene](add-a-ui-to-a-scene.md)
-->
