# スクリプトの種類

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

Xenko のスクリプトの主要な種類は、**スタートアップ スクリプト**、**同期スクリプト**、**非同期スクリプト** の 3 種類です。

スクリプトを作成するときは、ニーズに最適な動作を持つスクリプトの種類から継承します。

## スタートアップ スクリプト

スタートアップ スクリプトは、実行時に追加または削除されたときにのみ実行します。主として、ゲーム要素の初期化 (キャラクターの生成など) およびシーンがアンロードされるときのゲーム要素の破棄に使用されます。初期化用の [Start](xref:Xenko.Engine.StartupScript.Start) メソッドと、[Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) メソッドを持っています。どちらのメソッドも必要に応じてオーバーライドできます。

例:

```cs
public class StartUpScriptExample : StartupScript
{
	public override void Start()
	{
		// 初期化の間の処理を行う
	}
}
```

## 同期スクリプト

同期スクリプトは、初期化された後、フレームごとに更新され、最終的にキャンセルされます (スクリプトが削除されるとき)。

* 初期化コードがある場合は、[Start](xref:Xenko.Engine.StartupScript.Start) メソッドに記述します。
* 更新を実行するコードは、[Update](xref:Xenko.Engine.SyncScript.Update) メソッドに記述します。
* キャンセルを実行するコードは、[Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) メソッドに記述します。

次のスクリプトは、無条件に、すべてのフレームで更新を実行します。

```cs
public class SampleSyncScript : SyncScript
{        
	public override void Update()
	{
		// エンティティに対する更新を実行する。このコードはすべてのフレームで実行される
	}
}
```

## 非同期スクリプト

非同期スクリプトは、1 回だけ初期化された後、シーンから削除されるときにキャンセルされます。

* 非同期コードは、[Execute](xref:"Xenko.Engine.AsyncScript.Execute") 関数に記述します。

* キャンセルを実行するコードは、[Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) メソッドに記述します。

次のスクリプトは、イベントとトリガーに応じたアクションを実行します。

```cs
public class SampleAsyncScript : AsyncScript
{        
	public override async Task Execute()
	{
		// 必要がある場合は、初期化コードをここに記述する

		while (Game.IsRunning) // ゲームが終了するまでループする (スクリプトに応じてオプション)
		{
			await MyEvent;

			// 何らかの処理を実行する

			await Script.NextFrame(); // 次のフレームを待機する (スクリプトに応じてオプション)
		}
	}
}
```

## 関連項目

* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
