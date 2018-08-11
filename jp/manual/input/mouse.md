# マウス

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

**マウス**は、デスクトップ ゲームでよく使われる入力デバイスです。

Xenko にはマウス入力を処理する 2 つの方法があります。

* **マウスのボタンの状態**を問い合わせます。
* モバイル デバイスを対象とするクロスプラットフォーム ゲームの場合は、[PointerEvent](xref:Xenko.Input.PointerEvent) のリストを使用できます。
詳細については、「[ポインター](pointers.md)」を参照してください。

**マウス ボタンの状態**と**ポインター イベントのリスト**には、[入力マネージャー](xref:Xenko.Input.InputManager)からアクセスできます。

| クラス | プロジェクトの種類 | 使用目的 |
| --- | --- | --- |
| [InputManager](xref:Xenko.Input.InputManager) | デスクトップのみ | デスクトップ ゲームの場合、通常、複数のマウス ボタンでの入力を処理します。つまり、**マウス ボタンの状態**を使用する必要があります。 |
| [PointerEvent](xref:Xenko.Input.PointerEvent) | クロスプラットフォーム | モバイル ゲームの場合、通常、左マウス ボタンだけでポインターをシミュレートします。つまり、マウス入力をポインターのように処理できます。マウス固有のコントロールを別に作成する必要はありません。詳細については、「[ポインター](pointers.md)」を参照してください。|

これらのオプションの詳細については、「[入力](index.md)」を参照してください。

## マウスを使用できるかどうかを調べる

マウスの入力を処理する前に、[Input.HasMouse](xref:Xenko.Input.InputManager.HasMouse) を使用して、マウスが接続されているかどうかを確認します。

## マウスの位置を取得する

正規化された座標または絶対座標でマウスの位置を取得できます。

### 正規化された座標

@'Xenko.Input.InputManager.MousePosition' は、ピクセル単位の実際の画面サイズではなく、**正規化された** X、Y 座標でマウス ポインターの位置を返します。そのため、ポインターの位置は任意の解像度に合わせて調整され、異なる解像度ごとに異なるコードを作成する必要はありません。

* (0,0): ポインターは画面の左上隅にあります。
* (1,1): ポインターは画面の右下隅にあります。

### 絶対座標

[InputManager.AbsoluteMousePosition](xref:Xenko.Input.InputManager.AbsoluteMousePosition) は、X と Y の絶対座標 (ピクセル単位の実際の画面サイズ) でマウス ポインターの位置を返します。たとえば、ポインターが画面の左上隅にある場合、値は (0,0) です。ポインターが右下隅にある場合、値は画面の解像度に依存します (たとえば (1280,720))。

> [!TIP]
> 画面の実際のサイズを取得するには、[IPointerDevice.SurfaceSize](xref:Xenko.Input.IPointerDevice.SurfaceSize) にアクセスします。次に例を示します。
> ```cs
> var surfaceSize = Input.Mouse.SurfaceSize;
> ```

## マウス ボタンの状態変化を問い合わせる

マウス ボタンを使用してプロジェクトのアクションをトリガーできます。たとえば、ファーストパーソン シューティング ゲームでは、通常、左端のボタンが射撃に使用されます。

[入力マネージャー](xref:Xenko.Input.InputManager)には、マウス ボタンの状態 (_押された_、_押されている_、_放された_) を調べる複数のメソッドがあります。

| メソッド | 説明
| ------ | ---
| [HasDownMouseButtons](xref:Xenko.Input.InputManager.HasDownMouseButtons) | 1 つ以上のマウス ボタンが現在押されているかどうかを調べます。
| [HasPressedMouseButtons](xref:Xenko.Input.InputManager.HasPressedMouseButtons) | 1 つ以上のマウス ボタンが最後の更新で押されたかどうかを調べます。
| [HasReleasedMouseButtons](xref:Xenko.Input.InputManager.HasReleasedMouseButtons) | 1 つ以上のマウス ボタンが最後の更新で放されたかどうかを調べます。
| [IsMouseButtonDown (MouseButton)](xref:Xenko.Input.InputManager.IsMouseButtonDown\(Xenko.Input.MouseButton\)) | 指定されたマウス ボタンが現在押されているかどうかを調べます。
| [IsMouseButtonPressed (MouseButton)](xref:Xenko.Input.InputManager.IsMouseButtonPressed\(Xenko.Input.MouseButton\)) | 指定されたマウス ボタンが最後の更新で押されたかどうかを調べます。
| [IsMouseButtonReleased (MouseButton)](xref:Xenko.Input.InputManager.IsMouseButtonReleased\(Xenko.Input.MouseButton\)) | 指定されたマウス ボタンが最後の更新で放されたかどうかを調べます。

### マウスのデルタ

最後の更新以降のマウス位置の変化を正規化された座標で取得するには、[InputManager.MouseDelta](xref:Xenko.Input.InputManager.MouseDelta) を使用します。これを使用して、マウスの移動の速度と方向を分析できます。

### マウス ホイールのデルタ

マウス ホイールを使用してプロジェクトのアクションをトリガーできます。たとえば、ファーストパーソン シューティング ゲームでは、マウス ホイールを動かすことで、武器を切り替えたり、カメラをズームしたりする場合があります。

[InputManager.MouseWheelDelta](xref:Xenko.Input.InputManager.MouseWheelDelta) は、マウス ホイールが前方に回されると正の値を、後方に回されると負の値を返します。値 `0` は、動きがないことを示します。

## マウスの位置をロックする

プロジェクトによっては、ユーザーが画面の境界を越えてマウス カーソルを移動する必要がある場合があります。たとえば、ファーストパーソン シューティング ゲームでは、通常、カメラを 360 度回転させる必要があります。そのような場合はおそらく、マウス カーソルを非表示にする必要もあります。

以下のプロパティとメソッドを使用すると、マウスの位置をロックし、カーソルを非表示にすることができます。

| メソッド/プロパティ | 説明 |
| --- | --- |
| [LockMousePosition(Boolean)](xref:Xenko.Input.InputManager.LockMousePosition\(System.Boolean\)) | 次に [UnlockMousePosition()](xref:Xenko.Input.InputManager.UnlockMousePosition) メソッドを呼び出すまで、マウスの位置をロックします。
| [UnlockMousePosition()](xref:Xenko.Input.InputManager.UnlockMousePosition) | [LockMousePosition(Boolean)](xref:Xenko.Input.InputManager.LockMousePosition\(System.Boolean\)) イベントによってロックされたマウス位置をロック解除します。
| [IsMousePositionLocked](xref:Xenko.Input.InputManager.IsMousePositionLocked) | マウスの位置がロックされているかどうかを調べます。

> [!TIP]
> マウスの表示は、[GameWindow.IsMouseVisible](xref:Xenko.Games.GameWindow.IsMouseVisible) で取得または設定できます。

## コード例

```cs
public class MouseInputScript : SyncScript
{
	public override void Update()
	{
		// この更新で左マウス ボタンが押されている場合、処理を行う。
		if (Input.IsMouseButtonDown(MouseButton.Left))
		{   
		}
		// 最後の更新以降に中央マウス ボタンが押された場合、処理を行う。
		if (Input.IsMouseButtonPressed(MouseButton.Middle))
		{  
		}

		// マウスが X 方向に画面サイズで 0.2 単位より大きく動いた場合、処理を行う。
		if (Input.MouseDelta.X > 0.2f)
		{
		}

	}
}
```

## 関連項目

* [ポインター](pointers.md)
* [仮想ボタン](virtual-buttons.md)
* [キーボード](keyboards.md)
* [ゲームパッド](gamepads.md)
* [入力の概要](index.md)
