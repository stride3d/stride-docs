# キーボード

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

**キーボード**は、デスクトップ ゲームで最も一般的な入力デバイスです。Stride にはキーボード入力を処理する 2 つの方法があります。

* **キーの状態**を問い合わせる**
* [KeyEvent](xref:Stride.Input.KeyEvent) リストを使用する

どちらにも、[input](xref:Stride.Input.InputManager) 基底クラスからアクセスできます。これらのオプションの詳細については、「[入力](index.md)」を参照してください。

## キーボードを使用できるかどうかを調べる

キーボード入力を処理する前に、[Input.HasKeyboard](xref:Stride.Input.InputManager.HasKeyboard) を使用してキーボードが接続されているかどうかを調べます。

## キーの状態を取得する

**キーの状態**と**状態の変化**を、以下のメソッドで問い合わせることができます。

| メソッド | 説明 |
| --- | --- |
| [IsKeyDown(Keys)](xref:Stride.Input.InputManager.IsKeyDown\(Stride.Input.Keys\)) | 指定したキーが**ダウン**状態かどうかを調べます。
| [IsKeyPressed(Keys)](xref:Stride.Input.InputManager.IsKeyPressed\(Stride.Input.Keys\)) | 指定したキーが最後の更新以降に**押された**かどうかを調べます。
| [IsKeyReleased(Keys)](xref:Stride.Input.InputManager.IsKeyReleased\(Stride.Input.Keys\)) | 指定したキーが最後の更新以降に**放された**かどうかを調べます。

> [!NOTE]
> Stride では、解釈済みのキーの取得はサポートされません (特殊な文字や大文字など)。

## キー イベントを取得する

場合によっては、現在_ダウン_状態になっているすべてのキー、または最後の更新以降に_押された_すべてのキーを知りたいことがあります。キー状態 API は、使用可能な各キーを個別に問い合わせる必要があるため、このような場合には適切ではありません。

代わりに、[Input](xref:Stride.Input.InputManager) 基底クラスで使用できる**キー イベント** コレクションを使用します。

| パブリック リスト | 説明 l
| ----------- | ---
| [InputManager.DownKeys](xref:Stride.Input.InputManager.DownKeys) | 最後の更新でダウン状態であったキーのリストを取得します。
| [InputManager.PressedKeys](xref:Stride.Input.InputManager.PressedKeys) | 最後の更新で押されたキーのリストを取得します。
| [InputManager.ReleasedKeys](xref:Stride.Input.InputManager.ReleasedKeys) | 最後の更新で放されたキーのリストを取得します。
| [InputManager.KeyEvents](xref:Stride.Input.InputManager.KeyEvents) | 最後の更新でのキー イベントのリストを取得します (押されたキーまたは放されたキー)。

すべての @'Stride.Input.KeyEvent' に、2 つのプロパティ @'Stride.Input.KeyEvent.Key' (影響を受けたキー) と @'Stride.Input.ButtonEvent.IsDown' (キーの新しい状態) があります。

## コード例

```cs
public class KeyboardEventsScript : SyncScript
{
	// Game Studio に表示された、パブリック メンバー変数とプロパティの宣言。

	public override void Update()
	{
		// すべての更新でアクションを実行する。
		if (Game.IsRunning)
		{
			if (Input.IsKeyDown(Keys.Left))
			{
				this.Entity.Transform.Position.X -= 0.1f;
			}
			if (Input.IsKeyDown(Keys.Right))
			{
				this.Entity.Transform.Position.X += 0.1f;
			}
		}
	}
}
```

## 関連項目

* [ゲームパッド](gamepads.md)
* [マウス](mouse.md)
* [仮想ボタン](virtual-buttons.md)
* [入力の概要](index.md)
