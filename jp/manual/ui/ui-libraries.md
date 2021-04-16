# UI ライブラリ
<!--
# UI libraries
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">デザイナー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Designer</span>
-->

**UI ライブラリ**には、グリッド、ボタン、スライダーなどの **UI エレメント**が含まれており、[UI ページ](UI-pages.md)で利用・再利用することができます。
<!--
**UI libraries** contain **UI elements** such as grids, buttons, sliders and so on that you can use and re-use in your [UI pages](UI-pages.md). 
-->

Stride プロジェクトは、UI エレメントの**標準ライブラリ**が含まれています。
カスタムエレメントを使って、独自のライブラリを作ることもできます。
<!--
Stride projects include a **standard library** of UI elements. You can create your own libraries of custom elements too.
-->

![UI library](media/UI-library.png)

UI ライブラリは、シーンエディターの[プレハブ](../game-studio/prefabs/index.md)に似ています。独自のエレメントを作成し、カスタム UI ライブラリに保存し、複数の UI ページで必要なところに使用することができます。また、[入れ子になったプレハブ](../Game-studio/prefabs/nested-prefabs.md)のように、他のライブラリの中にライブラリを入れ子にすることもできます。
<!--
UI libraries are similar to [prefabs](../game-studio/prefabs/index.md) in the Scene Editor; you can create your own elements, save them in a custom UI library, and then use them wherever you need across multiple UI pages. You can also nest libraries inside other libraries, just like [nested prefabs](../game-studio/prefabs/nested-prefabs.md).
-->

実行時に、UI ライブラリのルートを再構築して、既存の UI ツリーに挿入することもできます。
<!--
At runtime, you can re-instantiate UI library roots and insert them into an existing UI tree.
-->

## UI ライブラリを作成する
<!--
## Create a UI library
-->

**アセットビュー**で、[**Add asset**] > [**UI**] > [**UI library**] をクリックします。
<!--
In the **Asset View**, click **Add asset > UI > UI library**.
-->

![Add UI library](media/add-ui-library.png)

Game Studio は、UI ライブラリを**アセットビュー**に追加します。
<!--
Game Studio adds the UI library to the **Asset View**.
-->

![Added UI library](media/added-ui-library.png)

また、既成の UI 要素から UI ライブラリを作成することもできます。
<!--
Alternatively, to create a UI library from an existing UI element:
-->

1. UI ライブラリを作成する基にしたい要素を選択します。

2. 右クリックして、[**Create library from selection**] を選択します。

<!--
1. Select the elements you want to create a UI library from.

2. Right-click and select **Create library from selection**.
-->

![Added UI library](media/create-library-from-selection.png)

Game Studio は、選択された要素のコピーし、ライブラリを作成します。
<!--
Game Studio creates a library with a copy of the elements you selected.
-->

## UI ライブラリをコードで割り当てる
<!--
## Assign a UI library in code
-->

```cs
// このプロパティは、Game Studio の UI ライブラリアセットから割り当てることができます。
// This property can be assigned from a UI library asset in Game Studio
public UILibrary MyLibrary { get; set; }

public Button CreateButton()
{
    // "MyButton" という名前の Button 型（または Button から派生した型）のルート要素があると仮定します。
    // assuming there is a root element named "MyButton" of type (or derived from) Button
    var button = MyLibrary.InstantiateElement<Button>("MyButton");

    // "MyButton" という名前のルートがライブラリに存在しない場合、あるいは型が一致しない場合は、
    // 前述のメソッドは null を返します。
    // if there is no root named "MyButton" in the library or the type does not match,
    // the previous method will return null
    if (button != null)
    {        
        // Click イベントにデリゲートを登録します。
        // attach a delegate to the Click event
        someButton.Click += delegate
        {
            // ここで何かの作業をします。
            // do something here...
        };
    }

    return button;
}
```

UI ページには、ルート要素が 1 つかありません。
UI ライブラリは、複数のルート要素を持つことができます。
<!--
UI pages have only one root element. UI libraries can have multiple root elements.
-->

## 関連項目
<!--
## See also
-->

* [UI ページ](ui-pages.md)
* [UI エディター](ui-editor.md)
* [シーンに UI を追加する](add-a-ui-to-a-scene.md)
* [レイアウト システム](layout-system.md)

<!--
* [UI pages](ui-pages.md)
* [UI editor](ui-editor.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Layout system](layout-system.md)
-->
