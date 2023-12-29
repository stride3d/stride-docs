# シーンに UI を追加する
<!--
# Add a UI to a scene
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">デザイナー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Designer</span>
-->

[UI ページ](ui-pages.md)を作った後、それをエンティティのコンポーネントとしてシーンに追加します。
<!--
After you create a [UI page](ui-pages.md), add it to the scene as a component on an entity.
-->

1. **シーンエディター**で、空のエンティティを作成します。これを行うには、シーンを右クリックして [**Empty entity**] を選択してください。

    ![Create empty entity](media/create-empty-entity.png)

2. プロパティグリッドで、[**Add component**] をクリックし、[**UI**] を選択します。

    ![Add UI component](media/add-UI-component.png)

    Game Studio は、エンティティに **UI コンポーネント**を追加します。

    ![UI component](media/UI-component.png)

3. [**Page**] の横にある ![Hand icon](../game-studio/media/hand-icon.png)（**アセットの選択**）をクリックします。

    すると、**Select an asset** ウィンドウが開きます。

    ![Select UI page](media/select-UI-page.png)

4. 追加したい UI ページを選択し、[**OK**] をクリックします。

    UI ページの作成と編集の方法については、[UI エディター](ui-editor.md)をご覧ください。

<!--
1. In the **Scene Editor**, create an empty entity. To do this, right-click the scene and select **Empty entity**.

    ![Create empty entity](media/create-empty-entity.png)

2. In the Property Grid (on the right by default), click **Add component** and select **UI**.

    ![Add UI component](media/add-UI-component.png)

    Game Studio adds a **UI component** to the entity.

    ![UI component](media/UI-component.png)

3. Next to **Page**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select UI page](media/select-UI-page.png)

4. Select the UI page you want to add and click **OK**.

    For information about how to create and edit UI pages, see the [UI editor](ui-editor.md) page.
-->

> [!Tip]
> エディターで UI がシーンの他の部分を隠してしまうのを防ぐには、プロパティグリッドで **UIコンポーネント** を無効にします。

> ![Disable UI component](media/disable-UI-component.png)

> ゲームを実行する前に、コンポーネントを再び有効にすることを忘れないでください。そうしないと、Stride はUI を表示しません。

<!--
> [!Tip]
> To stop the UI obscuring the rest of the scene in the editor, disable the **UI component** in the Property Grid.

> ![Disable UI component](media/disable-UI-component.png)

> Remember to enable the component again before you run the game. If you don't, Stride doesn't display the UI.
-->

### コードで UI ページコンポーネントに UI ページを割り当てる
<!--
### Assign a UI page to a UI page component in code
-->

UIコ ンポーネントの `Page` プロパティに UI ページを割り当てることができます。
<!--
You can assign a UI page to the `Page` property of a UI component.
-->

```cs
// このプロパティは Game Studio で UI ページアセットから割り当てることができます。
// This property can be assigned from a UI page asset in Game Studio
public UIPage MyPage { get; set; }

protected override void LoadScene()
{
    InitializeUI();
}

public void InitializeUI()
{
    var rootElement = MyPage.RootElement;

    // UIページ内の特定の要素を探す拡張メソッドを使うことができます。
    // to look for a specific element in the UI page, extension methods can be used
    var button = rootElement.FindVisualChildOfType<Button>("buttonOk");

    // UIツリーに "buttonOk" という名前の要素がないか、またはマッチしない場合、
    // 前述のメソッドは null を返します。
    // if there's no element named "buttonOk" in the UI tree or the type doesn't match,
    // the previous method returns null
    if (button != null)
    {
        // Click イベントにデリゲートを割り当てます。
        // attach a delegate to the Click event
        button.Click += delegate
        {
            // ここで何らかの作業を行います。
            // do something here...
        };
    }

    // UI コンポーネントにページを割り当てます。
    // assign the page to the UI component
    var uiComponent = Entity.Get<UIComponent>();
    uiComponent.Page = MyPage;
}
```

## UI コンポーネントのプロパティ
<!--
## UI component properties
-->

| プロパティ          | 説明
|--------------------|----------------
| Page               | コンポーネントによって表示される UI ページ
| Full screen        | **注意：** 他のものは壊れているので、これを使うことをお勧めします。
| Resolution         | UI の解像度（ピクセル単位）
| Size               | UI コンポーネントの実サイズ（ワールド単位）
| Resolution stretch | 仮想解像度をどう解釈するか（`FixedWithFixedHeight`, `FixedWithAdaptableHeight`, `FixedHeightAdaptableWidth` のいずれか）。
| Billboard          | オンにすると、UI は常にカメラのほうを向きます。 **注意：** 現在の Stride のバージョンでは、これをオフにすると UI テキストエラーが発生します。
| Snap text          | オンにすると、UI テキストは一番近いパネルにスナップされるようになります。
| Fixed size         | オンにすると、画面上での UI のサイズを常に固定にします（例：高さが 1 のコンポーネントは、画面での高さは 0.1 になります）。**注意：** この機能は現在のバージョンの Stride では動作しません。
| Render group       | UI が使用する[レンダーグループ](../graphics/graphics-compositor/render-groups-and-masks.md)。

<!--
| Property           | Description
|--------------------|----------------
| Page               | The UI page displayed by the component
| Full screen        | **Note:** We recommend you use this as other stuff is broken
| Resolution         | The UI resolution in pixels
| Size               | Gets or sets the actual size of the UI component in world units
| Resolution stretch | How the virtual resolution value should be used (`FixedWithFixedHeight`, `FixedWithAdaptableHeight`, or `FixedHeightAdaptableWidth`)
| Billboard          | If selected, the UI always faces the camera. **Note:** Disabling billboard mode causes UI text errors in the current version of Stride
| Snap text          | If selected, the UI text is snapped to the closest pixel
| Fixed size         | Gets or sets the value indicating whether the UI should always be a fixed size on screen (eg a component with a height of 1 will use 0.1 of the screen). **Note:** This feature doesn't work in the current version of Stride
| Render group       | The [render group](../graphics/graphics-compositor/render-groups-and-masks.md) the UI uses
-->

## UI スクリプト
<!--
## UI scripts
-->

UI をインタラクティブ（対話的）なものにするには、スクリプトを追加します。スクリプトがない UI は、単なる画像です。
<!--
To make UIs interactive, you need to add a script. Without scripts, UIs are simply non-interactive images. 
-->

Stride で実装されている UI を示す例として、Stride に同梱されている **game menu UI** サンプルがあります。
<!--
For an example of a UI implemented in Stride, see the **game menu UI** sample included with Stride.
-->

![Sample UI project](media/ui-sample-project.png)

## 関連項目
<!--
## See also 
-->

* [UI ページ](ui-pages.md)
* [UI ライブラリ](ui-libraries.md)
* [UI エディター](ui-editor.md)
* [レイアウト システム](layout-system.md)
* [オーバーレイへの UI の表示](../virtual-reality/display-a-ui-in-an-overlay.md)

<!--
* [UI pages](ui-pages.md)
* [UI libraries](ui-libraries.md)
* [UI editor](ui-editor.md)
* [Layout system](layout-system.md)
* [VR — Display a UI in an overlay](../virtual-reality/display-a-ui-in-an-overlay.md)
-->
