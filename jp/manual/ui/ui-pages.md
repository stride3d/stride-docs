# UI ページ
<!--
# UI pages
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Designer</span>
-->

**UI ページ（UI Page）** は、ボタンやグリッドなどの UI 要素の集まりです。
メニュー画面やタイトル画面などのように、ゲーム中の UI パーツを構成します。
<!--
A **UI page** is a collection of UI elements, such as buttons and grids, that form a piece of UI in your game, such as a menu or title screen.
-->

![UI page](media/ui-page.png)

構成的には、UI ページはシーンエディターで言うシーンに相当し、UI 要素はシーンで言うエンティティに相当します。要素もまた、エンティティのように、親と子を持つことができます。
<!--
In terms of organization, a UI page is equivalent to a scene in the Scene Editor, and UI elements are equivalent to entities in a scene. Just like entities, elements can have parents and children.
-->

各 UI シーンは、UI エディターのタブとして個別に開かれます。UI ページの編集方法については、[UI エディター](ui-editor.md)を参照してください。
<!--
Each UI scene opens in its own tab in the UI editor. For information about how to edit UI pages, see the [UI editor](ui-editor.md) page.
-->

## UI ページを作成する
<!--
## Create a UI page
-->

**アセットビュー**で、[**Add asset**] > [**UI**] > [**UI page**] をクリックします。
<!--
In the **Asset View**, click **Add asset > UI > UI page**.
-->

![Add UI page](media/add-ui-page.png)

すると、Game Studio は、アセットビューに UI ページを追加します。
<!--
Game Studio adds the UI page to the Asset View.
-->

![Added UI page](media/added-ui-page.png)

### UI 要素を使って UI ページを作成する
<!--
### Create a UI page from a UI element
-->

1. UI エディターで、1 つまたは複数の要素を選択します。

2. 右クリックして、[**Create page from selection**] を選択します。

<!--
1. In the UI editor, select the element or elements you want to create a page from.

2. Right-click and select **Create page from selection**.
-->

![Create page from selection](media/create-page-from-selection.png)

Game Studio は、選択された要素を持ったページを生成します。
<!--
Game Studio creates a page with a copy of the elements you selected.
-->

## UI ページを開く
<!--
## Open a UI page
-->

**アセットビュー**で、 [**UI page**] アセットをダブルクリックします。
<!--
In the **Asset View**, double-click the **UI page**.
-->

![Added UI page](media/added-ui-page.png)

すると、UI ページが [UI エディター](ui-editor.md)で開かれます。
<!--
The UI page opens in the [UI editor](ui-editor.md).
-->

![UI editor overview](media/ui-editor.png)

## UI ページに UI 要素を追加する
<!--
## Add a UI element to a UI page
-->

グリッドやボタンのような要素を追加するには、それを **UI ライブラリ** から UI ページまたは**ビジュアルツリー**にドラッグします。
<!--
To add an element, such as a grid or button, drag it from the **UI library** to the UI page or the **visual tree**.
-->

![Add UI element](media/add-ui-element.gif)

UI エディターの使い方の詳細については、[UI エディター](ui-editor.md)を参照してください。
<!--
For more information about how to use the UI editor, see the [UI editor](ui-editor.md) page.
-->

## 関連項目
<!--
## See also
-->

* [UI ライブラリ](ui-libraries.md)
* [UI エディター](ui-editor.md)
* [シーンに UI を追加する](add-a-ui-to-a-scene.md)
* [レイアウト システム](layout-system.md)

<!--
* [UI libraries](ui-libraries.md)
* [UI editor](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
-->
