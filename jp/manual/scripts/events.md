# イベント

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>

**イベント**は、スクリプト間の通信を容易にします。**ブロードキャスター**から**レシーバー**への 1 方向のブロードキャストとして動作します。

たとえば、プレイヤーが死ぬと発生する「ゲーム オーバー」状態がゲームにあるものとします。これを処理するには、「ゲーム オーバー」イベントを作成し、イベントをリッスンしているレシーバーがあるすべてのスクリプトにブロードキャストできます。イベントがブロードキャストされると、レシーバーは適切なスクリプトを実行して、ゲーム オーバー イベントを処理します (敵のリセット、レベル オブジェクトの置換、新しいタイマーの開始、など)。

>[!NOTE]
>イベントの処理はすべてスクリプト内で行われます。Game Studio で構成することはできません。

## イベントを作成してブロードキャストする

Stride API のブロードキャスターは [EventKey](xref:Stride.Engine.Events.EventKey) 型です。ブロードキャスターは、[Broadcast](xref:Stride.Engine.Events.EventKey#Stride_Engine_Events_EventKey_Broadcast) メソッドを使用してイベントをレシーバーにブロードキャストします。

たとえば、次のコードは「ゲーム オーバー」イベントを作成します。

```cs
public static class GlobalEvents
{
    public static EventKey GameOverEventKey = new EventKey("Global", "Game Over");

    public static void SendGameOverEvent()
    {
        GameOverEventKey.Broadcast();
    }
}
```

## レシーバーを作成する

Stride API のレシーバーは [EventReceiver](xref:Stride.Engine.Events.EventReceiver) 型です。

上で説明した「ゲーム オーバー」イベントを受け取るには、次のコードを使用します。

```cs
var gameOverListener = new EventReceiver(GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();

// または Async で
await gameOverListener.ReceiveAsync();
```

## 関連項目

* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
