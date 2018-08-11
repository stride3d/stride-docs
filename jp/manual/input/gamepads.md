# ゲームパッド

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

**ゲームパッド** (Xbox Elite ワイヤレス コントローラー、PS4 DualShock など) は、コンソールおよびデスクトップ用の一般的な入力デバイスです。

> [!NOTE]
> 現在、Xenko は Xbox Elite ゲームパッド用に最適化されています。他のコントローラーも動作しますが、予期しないボタン マッピングになる場合があります。PS4 DualShock タッチパッドなどのゲームパッド固有の機能はサポートされません。

## デジタル ボタンとアナログ ボタン

* **デジタル** ボタンには、**アップ**と**ダウン**の 2 つの状態があります。D パッド、スタート、バック、サムスティック (押す)、A、B、X、Y の各ボタンはデジタル ボタンです。

* **アナログ** ボタンは、ユーザーが押した強さに応じた値を返します。トリガーはアナログ ボタンであり、0 ～ 1 の範囲の値を返します。サムスティックはアナログ ボタンでもあり、X 軸および Y 軸の -1 ～ 1 の値を返します。

Xbox Elite コントローラーのボタンは、Xenko では次のような名前になっています。

![Xbox gamepad](media/input-gamepad-standard-gamepad.png)

## ゲームパッドの入力を処理する

### ゲームパッドが接続されていることを確認する

ゲームパッドの入力を処理する前に:

* いずれかのゲームパッドが接続されているかどうかを確認するには、[InputManager.HasGamePad](xref:Xenko.Input.InputManager.HasGamePad) を使用します。

* 接続されているゲームパッドの数を確認するには、[InputManager.GamePadCount](xref:Xenko.Input.InputManager.GamePadCount) を使用します。

* 現在のデバイスが切断されたかどうかを確認するには、[InputManager.DeviceRemoved](xref:Xenko.Input.InputManager.DeviceRemoved) イベントを使用します。

* デバイスが接続されたかどうかを確認するには、[InputManager.DeviceAdded](xref:Xenko.Input.InputManager.DeviceAdded) イベントを使用します。

### デジタル ボタン

ゲームパッドのデジタル ボタンの状態および状態変化を問い合わせるには、`GamePad` オブジェクトで以下のメソッドを使用します。

| メソッド | 機能
|--------|--------------
| [IsButtonDown(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonDown\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | ボタンが「_押されている_」状態かどうかを確認します。
| [IsButtonPressed(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonPressed\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | 前回の更新以降にユーザーがボタンを「_押した_」かどうかを確認します。
| [IsButtonReleased(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonReleased\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | 前回の更新以降にユーザーがボタンを「_放した_」かどうかを確認します。

**ボタン (GamePadButton)** は確認するゲームパッド ボタンです。

デジタル ボタンの状態は、[GamePadState.Buttons](xref:Xenko.Input.GamePadState.Buttons) を使用して取得することもできます。

> [!NOTE]
> [GamePadState.Buttons](xref:Xenko.Input.GamePadState.Buttons) フィールドは、2 進法を使用するビットマスクです。ビットマスクの値に応じて、どのボタンが*アップ*か*ダウン*かを特定できます。

ゲームパッドの状態を取得するには、[IGamePadDevice.State](xref:Xenko.Input.IGamePadDevice.State) を使用します。

### アナログ ボタン

アナログ ボタンの値を問い合わせるには、最初に
[GetGamePadByIndex(index)](xref:Xenko.Input.InputManager.GetGamePadByIndex\(System.Int32\)) を使用してゲームパッドの現在の状態を取得します。_index (整数)_ は、確認するゲームパッドのインデックスです。

> [!WARNING]
> [IGamePadDevice.State](xref:Xenko.Input.IGamePadDevice.State) によって返される値は、**現在の**更新でのゲームパッドの状態です。この値を次の更新に再使用することはできません。更新のたびに、再度問い合わせる必要があります。

トリガーとサムスティックの位置を取得するには、
[GamePadState](xref:Xenko.Input.GamePadState) のフィールドを使用します。

| フィールド | 説明
|-------|------------
| [GamePadState.LeftThumb](xref:Xenko.Input.GamePadState.LeftThumb) | 左サムスティックの X 軸/Y 軸の値です。どちらの軸も範囲は［-1.0f, 1.0f］です。 |
| [GamePadState.RightThumb](xref:Xenko.Input.GamePadState.RightThumb) | 右サムスティックの X 軸/Y 軸の値です。どちらの軸も範囲は［-1.0f, 1.0f］です。 |
| [GamePadState.LeftTrigger](xref:Xenko.Input.GamePadState.LeftTrigger) | 左トリガー アナログ コントロールの値です。1 つの軸の範囲は［0, 1.0f］です。 |
| [GamePadState.RightTrigger](xref:Xenko.Input.GamePadState.RightTrigger) | 右トリガー アナログ コントロールの値です。1 つの軸の範囲は［0, 1.0f］です。 |

サムスティックは、X 軸および Y 軸の方向に動きます。その位置は次のように表されます。

![Query thumb position](media/index-gamepad-stick-position-1.png)
![Query thumb position](media/index-gamepad-stick-position-2.png)

トリガーは X 軸の方向に動きます。その位置は次のように表されます。

![Query trigger position](media/index-gamepad-trigger-position.png)

### 振動

ゲームパッドの振動レベルを設定するには、[IGamePadDevice.SetVibration](xref:Xenko.Input.IGamePadDevice.SetVibration\(System.Single,System.Single,System.Single,System.Single\)) を使用します。

> [!NOTE]
> 現在、Xenko は Xbox ゲームパッドの振動のみをサポートします。

## コード例

```cs
using Xenko.Core.Mathematics;
using Xenko.Engine;

public class TestScript : SyncScript
{
    public override void Update()
    {
        // ゲームパッドが接続されているかどうかを確認する
        if (Input.HasGamePad)
        {
            // 接続されているゲームパッドの数を取得する
            int gamepadCount = Input.GamePadCount;

            // ゲームパッドのステータスを確認する
            foreach(var gamepad in Input.GamePads)
            {
                // アナログ サムスティックの位置を取得する
                Vector2 speed = gamepad.State.LeftThumb;
                Vector2 direction = gamepad.State.RightThumb;

                // デジタル ボタンのステータスを取得する
                if (gamepad.IsButtonDown(GamePadButton.X))
                {
                    // ユーザーがボタンを押し続けている限り、アクションを繰り返す。
                    // これは、マシンガンの連射のような連続するアクションに利用できる。
                }
                if (gamepad.IsButtonPressed(GamePadButton.A))
                {
                    // ユーザーがボタンを押し続けている場合であっても、アクションを 1 回だけトリガーする。
                    // これは、ジャンプのような 1 回限りのアクションに利用できる。
                }
            }
        }
    }
}
```

## 関連項目
* [キーボード](keyboards.md)
* [仮想ボタン](virtual-buttons.md)
* [入力の概要](index.md)
