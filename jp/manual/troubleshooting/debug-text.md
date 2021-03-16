# デバッグ テキスト
<!--
# Debug text
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>
-->

実行時に、[DebugText](xref:Stride.Engine.ScriptComponent.DebugText) クラスを使って、デバッグテキストを描画することができます。例えば、問題が発生した旨のメッセージを表示することに使うことができます。
<!--
You can print debug text at runtime with [DebugText](xref:Stride.Engine.ScriptComponent.DebugText). For example, you can use this to display a message when a problem occurs.
-->

>[!Note]
>デバッグテキストは、リリースモードでビルドした場合、自動的に無効化されます。

<!--
>[!Note]
>Debug text is automatically disabled when you build the game in release mode.
-->

スクリプトの `Update` メソッドに、以下を追加します。
<!--
In the `Update` method of your script, add:
-->

```cs
DebugText.Print("My debug text",new Int2(x: 50, y: 50));
```

ここで、`x` と `y` は、テキストを表示するピクセル座標です。
<!--
Where `x` and `y` are the pixel coordinates to display the text at.
-->

ゲームを起動すると、デバッグメッセージが表示されます。
<!--
The debug message is displayed when you run the game.
-->

![Debug text](media/my-debug-text.jpg)

デバッグテキストを隠すには、次のようにします。
<!--
To hide debug text, use:
-->

```cs
DebugText.Visible = false;
```

## サンプルスクリプト
<!--
## Example script
-->

次のスクリプトは、`MyTexture` テクスチャーが読み込まれたかどうかを確認する例です。
読み込まれていない場合には、ゲーム画面に "MyTexture not loaded." というデバッグテキストが表示されます。
<!--
The following script checks that the texture `MyTexture` is loaded. If it isn't loaded, the game displays the debug text "MyTexture not loaded".
-->

```cs
using Stride.Core.Mathematics;
using Stride.Engine;
using Stride.Graphics;

namespace MyGame
{
    public class Script : SyncScript
    {
		public Texture myTexture;

        public override void Start()
        {
           
            // Initialization of the script.
            myTexture = Content.Load<Texture>("MyTexture");
        }

        public override void Update()
        {
			if (myTexture == null)
                DebugText.Print("MyTexture not loaded", new Int2(x: 50, y: 50));
        }
    }
}
```

## 関連項目
<!--
## See also
-->

* [ロギング](logging.md)
* [スクリプト](../scripts/index.md)

<!--
* [Logging](logging.md)
* [Scripts](../scripts/index.md)
-->
