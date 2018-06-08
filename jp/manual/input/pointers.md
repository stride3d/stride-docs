# ポインター

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

**ポインター**は、**指のタッチ**に対応するデバイス画面上の点です。マルチタッチ機能のあるデバイスでは、同時に複数のポインターがサポートされます。

デスクトップ プラットフォームでは、左マウス ボタンを使用してポインターをシミュレートできます。マウス入力の詳細については、「[マウス](mouse.md)」を参照してください。

## Xenko によるポインター入力の処理方法

1. ユーザーが、画面をタッチするか、左マウス ボタンをクリックします。

2. Xenko が、ポインターを作成します。

3. Xenko が、特定の指に対応するそのポインターに**ポインター ID** を割り当てます。

4. ポインターが変更されるたびに、Xenko はそのポインターで新しい**ポインター イベント**を作成します。

5. 新しい指ごとに、Xenko は新しいポインター ID で新しいポインターを作成します。

> [!NOTE]
> 各ポインター イベントには、1 つのポインターだけについての情報が含まれます。複数のポインターが同じ更新で同時に変更された場合、ポインターごとに異なるイベントが作成されます。

> [!WARNING]
> ポインターの変更の処理は、OS ごとに異なります。つまり、指の同じジェスチャでも、プラットフォームが異なると、若干異なるポインター イベント シーケンスが生成されることがあります。たとえば、Android では、指が画面にタッチしても、動いていない場合は、新しいポインター イベントは作成されません。詳細については、OS のドキュメントを参照してください。

ジェスチャの認識を有効にして、長押しやタップなどのジェスチャを検出できます。詳細については、「[ジェスチャ](gestures.md)」を参照してください。

## PointerEvent クラス

[PointerEvent](xref:SiliconStudio.Xenko.Input.PointerEvent) は、ポインターのイベントを報告します。イベントには、現在の**ポインターの位置**と時刻の情報が含まれます。**ポインター**が変更されるたびにスローされます。

最後の更新以降の**ポインター イベント**のリストには、[InputManager.PointerEvents](xref:SiliconStudio.Xenko.Input.InputManager.PointerEvents) を使用してアクセスできます。ポインター イベントは時間順に一覧表示されます。リストは更新のたびにクリアされるので、手動でクリアする必要はありません。

### ポインターの情報を取得する

以下のプロパティを使用して、イベントをトリガーしたポインターに関する情報を取得できます。

|プロパティ | 説明
|--------|-----------
|[PointerEvent.PointerId](xref:SiliconStudio.Xenko.Input.PointerEvent.PointerId) | イベントをトリガーしたポインターの ID を示します。

> [!WARNING]
> ポインターの ID は、ポインター イベントの 1 回の _Pressed->Moved->Released_ のシーケンスの間だけ有効です。
> 同じ指でも、画面にタッチするたびに ID が異なる場合があります (非常にすばやく行われた場合であっても)。

> [!WARNING]
> ポインターに ID を割り当てる方法は、OS ごとに異なります。
> ポインター ID の値と対応する指の間に関係はありません。

マウスまたはタッチによってポインター イベントがトリガーされたかどうかを確認するには、次のようにします。

```cs
bool isTriggeredByMouse = event.Pointer is IMouseDevice
```

### ポインターの位置を取得する

正規化された座標または絶対座標でポインターの位置を取得できます。

#### 正規化された座標

@'SiliconStudio.Xenko.Input.PointerEvent.Position' は、ピクセル単位の実際の画面サイズではなく、**正規化された** X および Y 座標でポインターの位置を返します。そのため、ポインターの位置は任意の解像度に合わせて調整され、異なる解像度ごとに異なるコードを作成する必要はありません。

* (0,0): ポインターは画面の左上隅にあります。
* (1,1): ポインターは画面の右下隅にあります。

#### 絶対座標

[PointerEvent.AbsolutePosition](xref:SiliconStudio.Xenko.Input.PointerEvent.AbsolutePosition) は、X と Y の絶対座標 (ピクセル単位の実際の画面サイズ) でポインターの位置を返します。たとえば、ポインターが画面の左上隅にある場合、値は (0,0) です。ポインターが右下隅にある場合、値は画面の解像度に依存します (たとえば (1280,720))。

> [!TIP]
> 画面の実際のサイズを取得するには、[IPointerDevice.SurfaceSize](xref:SiliconStudio.Xenko.Input.IPointerDevice.SurfaceSize) にアクセスします。次に例を示します。
> ```cs
> var surfaceSize = Input.Pointer.SurfaceSize;
> ```

### ポインター イベントを取得する

ポインター イベントを調べるには、[PointerEvent.EventType](xref:SiliconStudio.Xenko.Input.PointerEvent.EventType) を使用します。

5 種類のポインター イベントがあります。

* **Pressed**: 指が画面にタッチしました。
* **Moved**: 指が画面に沿って移動しました。
* **Released**: 指が画面を離れました。
* **Canceled**: ポインター シーケンスがキャンセルされました。このイベントは、たとえば電話の着信によって電話アプリが割り込まれた場合など、アプリケーションが中断されたときに発生します。

> [!NOTE]
> 1 つのポインターに対するポインター イベントのシーケンスは、常に **Pressed** イベントで開始します。その後で 1 つ以上の **Moved** イベントが発生する可能性があり、常に **Released** または **Canceled** イベントで終了します。

### デルタ値を取得する

[PointerEvent.DeltaTime](xref:SiliconStudio.Xenko.Input.PointerEvent.DeltaTime) は、前回の @'SiliconStudio.Xenko.Input.PointerEvent' からの経過時間を取得します。

正規化された座標または絶対座標でデルタ位置を取得できます。

### 正規化されたデルタ値

[PointerEvent.DeltaPosition](xref:SiliconStudio.Xenko.Input.PointerEvent.DeltaPosition) は、前回の @'SiliconStudio.Xenko.Input.PointerEvent' からの位置の変化を、**正規化された** X、Y 座標で取得します。

> [!NOTE]
> ポインター イベントのシーケンスの開始時には (つまり、**ポインターの状態**が**ダウン**のとき)、デルタ値は常に null になっています。

### 絶対デルタ値

[PointerEvent.DeltaPosition](xref:SiliconStudio.Xenko.Input.PointerEvent.AbsoluteDeltaPosition) は、前回の @'SiliconStudio.Xenko.Input.PointerEvent' からの位置の変化を、**絶対** (X,Y) 座標で取得します。

## コード例

このスクリプトは、ポインターの動きを追跡して、その位置を表示します。

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SiliconStudio.Core.Mathematics;
using SiliconStudio.Xenko.Engine;

namespace SiliconStudio.Xenko.Input.Tests
{
    public class PointerTestScript : AsyncScript
    {
        public override async Task Execute()
        {
            var pointerPositions = new Dictionary<int, Vector2>();
            while (true)
            {
                await Script.NextFrame();
                foreach (var pointerEvent in Input.PointerEvents)
                {
                    switch (pointerEvent.EventType)
                    {
                    case PointerEventType.Pressed:
                        pointerPositions［pointerEvent.PointerId］ = pointerEvent.Position;
                        break;
                    case PointerEventType.Moved:
                        pointerPositions［pointerEvent.PointerId］ = pointerEvent.Position;
                        break;
                    case PointerEventType.Released:
                    case PointerEventType.Canceled:
                        pointerPositions.Remove(pointerEvent.PointerId);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                    }
                }
                var positionsStr = pointerPositions.Values.Aggregate("", (current, pointer) => current + (pointer.ToString() + ", "));
                Log.Info("There are currently {0} pointers on the screen located at {1}", pointerPositions.Count, positionsStr);
            }
        }
    }
}
```

## 関連項目
* [ジェスチャ](gestures.md)
* [マウス](mouse.md)
* [仮想ボタン](virtual-buttons.md)
* [入力の概要](index.md)
