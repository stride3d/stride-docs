# ジェスチャー

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>

ジェスチャとは、あらかじめ定義されている[ポインター](pointers.md) パターンです。Stride は、ジェスチャを認識して対応するイベントをトリガーできます。たとえば、戦略ゲームでは、プレイヤーは**ドラッグ** ジェスチャを使用して戦場にユニットをドラッグ アンド ドロップできます。ジェスチャでは 1 本または複数本の指を使用できます。

> [!NOTE] 
> 構成ファイルのすべての長さ、速度、エラー マージンでは、正規化された値を使用する必要があります。

## ジェスチャの認識を有効にする

ジェスチャの認識には CPU 時間が必要であるため、既定では、入力システムはジェスチャを認識しません。

ジェスチャの認識を有効にするには:

1. 認識するジェスチャの構成クラスのインスタンスを作成します。たとえば、ドラッグ ジェスチャの場合は、@'Stride.Input.GestureConfigDrag' のインスタンスを作成します。
2. クラスのパラメーターを構成します。
3. ジェスチャの構成を @'Stride.Input.InputManager.Gestures' コレクションに追加します。

> [!WARNING]
> ジェスチャの認識をアクティブにした後では、ジェスチャのパラメーターを変更できません。パラメーターを変更する必要がある場合は、@'Stride.Input.InputManager.Gestures' コレクションからジェスチャを削除し、新しいパラメーターで新しいエントリを作成する必要があります。

### ジェスチャの認識を無効にする

[InputManager.Gestures](xref:Stride.Input.InputManager.Gestures) コレクションからジェスチャを削除します。

## ジェスチャの認識

入力システムは、ジェスチャを検出すると、@'Stride.Input.GestureEvent' を [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents) のリストに追加します。イベントには、ジェスチャとその状態に関する情報が含まれます (ジェスチャの場所や使用された指の数など)。

> [!NOTE]
> 各ジェスチャには、固有のジェスチャ イベント クラスが関連付けられています (後述)。

[GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) フィールドは、どのジェスチャが認識されたかを示します。基底ジェスチャ イベントをジェスチャ固有のイベント型にキャストして、イベントに関するジェスチャ型固有の情報を取得できます。

Stride は同時に複数のジェスチャを検出できるので、イベント リストは 1 回の更新で複数の項目を格納することができます。

リストは更新のたびにクリアされるので、手動でクリアする必要はありません。

## ジェスチャを構成する

@'Stride.Input.GestureConfig' クラスでは、次のようなパラメーターを構成できます。

* ジェスチャが使用する指の数

* ジェスチャが使用するタップの回数と時間

* ジェスチャの方向

> [!NOTE]
> 各ジェスチャには、固有の構成パラメーターを含む専用の構成クラスがあります (後述)。

## ジェスチャの状態

ジェスチャは常に次の 4 つの状態のいずれかになっています。

* 開始 (Began)

* 変更 (Changed)

* 終了 (Ended)

* 発生 (Occurred)

**単独**ジェスチャ (タップ、フリック、長押し) は常に_発生_状態になっています。**連続**ジェスチャ (ドラッグ、複合) は常に、_開始_状態で開始し、何らかの_変更_状態がそれに続き、_終了_状態で終了します。

ジェスチャの現在の状態を問い合わせるには、トリガーされたジェスチャ イベントの [GestureEvent.State](xref:Stride.Input.GestureEvent.State) フィールドを使用します。

## ジェスチャの種類

Stride がサポートするジェスチャには大きく分けて次の 2 つの種類があります。

* **単独**ジェスチャ (タップ、フリック、長押し) は、1 つのイベントをトリガーします。

    * [タップ](#Tap)

    * [フリック](#Flick)

	* [長押し](#Long-press)

* **連続**ジェスチャ (ドラッグ、複合) は、ユーザーがジェスチャの方向を変更したときに一連のイベントをトリガーします。

    * [ドラッグ](#Drag)

    * [複合](#Composite)

### 単独ジェスチャ

#### <a name="Tap">タップ</a>

![Tap gesture](media/gestures_tap_gesture.png)

ユーザーは、画面に触れて、すぐに指を離します。

**構成クラス**: @'Stride.Input.GestureConfigTap'

**イベント クラス**: @'Stride.Input.GestureEventTap'

画面に触れる指の数をジェスチャの間に変えることはできません。タップに必要な指の数を設定するには、@'Stride.Input.GestureConfig.RequiredNumberOfFingers' を変更します。

> [!TIP]
> シングル タップとマルチ タップを区別するため、システムはタップ イベントでのレイテンシを使用します。これを無効にするには、[GestureConfigTap.MaximumTimeBetweenTaps](xref:Stride.Input.GestureConfigTap.MaximumTimeBetweenTaps) フィールドを **0** に設定します。

#### <a name="Flick">フリック</a>

![Flick gesture](media/gestures_flick_gesture.png)

ユーザーは、画面に触れて、すばやい直線的な移動を行った後、指を離します。

**構成クラス**: @'Stride.Input.GestureConfigFlick'

**イベント クラス**: @'Stride.Input.GestureEventFlick'

面に触れる指の数をジェスチャの間に変えることはできません。

フリック ジェスチャの最小の長さを設定するには、[GestureConfigFlick.MinimumFlickLength](xref:Stride.Input.GestureConfigFlick.MinimumFlickLength) を使用します。

フリックの方向を**上下**または**左右**に制限するには、
[GestureConfigFlick.FlickShape](xref:Stride.Input.GestureConfigFlick.FlickShape) を使用します。

#### <a name="Long-press">長押し</a>

![Long press gesture](media/gestures_long_pres_gesture.png)

ユーザーは、画面に触れて、一定の時間、指を離さずに圧力をかけ続けます (既定の時間は 1 秒です)。

**構成クラス**: [GestureConfigLongPress](xref:Stride.Input.GestureConfigLongPress)

**イベント クラス**: [GestureEventLongPress](xref:Stride.Input.GestureEventLongPress)

画面に触れる指の数をジェスチャの間に変えることはできません。

長押しジェスチャで押している最小限の時間の長さを変更するには、[GestureConfigLongPress.RequiredPressTime](xref:Stride.Input.GestureConfigLongPress.RequiredPressTime) を変更します。

### 連続ジェスチャ

#### <a name="Drag">ドラッグ</a>

![Drag gesture](media/gestures_drag_gesture.png)

ユーザーは、画面に触れて、移動を行った後、指を離します。

**構成クラス**: [GestureConfigDrag](xref:Stride.Input.GestureConfigDrag)

**イベント クラス**: [GestureEventDrag](xref:Stride.Input.GestureEventDrag)

画面に触れる指の数をジェスチャの間に変えることはできません。

短いドラッグを検出するには、[GestureConfigDrag.MinimumDragDistance](xref:Stride.Input.GestureConfigDrag.MinimumDragDistance) を小さくします。

ドラッグの方向を**上下**または**左右**に制限するには、[GestureConfigDrag.DragShape](xref:Stride.Input.GestureConfigDrag.DragShape) を使用します。

#### <a name="Composite">複合</a>

![Translation gesture](media/gestures_translation_gesture.png) ![Scale gesture](media/gestures_scale_gesture.png) ![Rotation gesture](media/gestures_rotation_gesture.png)

ユーザーは、2 本の指で画面に触れて、各指を個別に動かします。

**構成クラス**: @'Stride.Input.GestureConfigComposite'

**イベント クラス**: @'Stride.Input.GestureEventComposite'

複合ジェスチャを行うには、正確に 2 本の指で画面に触れる必要があります。システムが 3 つの基本アクションのいずれかを検出すると、複合ジェスチャがトリガーされます。
* _平行移動_: ユーザーは、2 本の指を一緒に同じ方向へ動かします。
* _拡大縮小_: ユーザーは、2 本の指を近付けるように、または離すように動かします。
* _回転_: ユーザーは、2 本の指を中心の周りに回転させます。

## コード例

### ジェスチャの認識をアクティブまたは非アクティブにする

認識するジェスチャの構成を作成するには:

```cs
// 認識するジェスチャの構成を作成する。
var singleTapConfig = new GestureConfigTap();

// タップ ジェスチャの認識を開始する。
Input.Gestures.Add(singleTapConfig);

// 認識するジェスチャの構成を作成する。
var doubleTapConfig = new GestureConfigTap(2, 1);

// ダブル タップ ジェスチャの認識を開始する。
Input.Gestures.Add(doubleTapConfig);

// タップ ジェスチャの認識を停止する。
Input.Gestures.Remove(singleTapConfig);

// すべてのジェスチャの認識を停止する。
Input.Gestures.Clear();
```

### ジェスチャを構成する

各構成クラスには、既定のジェスチャ構成に対応する、パラメーターを持たないコンストラクターがあります。頻繁に変更するパラメーターには、特別なコンストラクターを使用できます。

> [!WARNING]
> 入力システムが壊れる可能性があるため、他のフィールドを変更することはお勧めしません。ただし、必要がある場合は、対応するプロパティを使用して変更できます。

```cs
// ジェスチャの既定の構成。
var singleTapConfig = new GestureConfigTap();

// 専用のコンストラクターを使用してジェスチャの構成をカスタマイズする。
var doubleTapConfig = new GestureConfigTap(2, 2);

// 目的のプロパティに直接アクセスしてジェスチャの構成をカスタマイズする。
// 作業内容について十分に把握すること。これを変更すると入力システムが壊れる可能性がある。
var noLatencyTap = new GestureConfigTap() { MaximumTimeBetweenTaps= TimeSpan.Zero };
```

### ジェスチャ イベントにアクセスする

認識されたジェスチャによってトリガーされたイベントのリストにアクセスするには、[InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents) コレクションを使用します。このコレクションは、更新のたびに自動的に作成されます。

```cs
var currentFrameGestureEvents = Input.GestureEvents;
```

### ジェスチャの種類を識別する

[GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) フィールドを使用してジェスチャの種類を識別した後、それを適切なイベント型にキャストして、イベントに関する他の情報を取得します。

```cs
foreach( var gestureEvent in Input.GestureEvents)
{
   	// イベントがタップ ジェスチャからのものかどうかを確認する
	if (gestureEvent.Type != GestureType.Tap)
		continue;

	// 特定のタップ イベント クラスにキャストする。
	GestureEventTap  tapEvent = (GestureEventTap) gestureEvent;

    // タップ イベント固有のフィールドにアクセスする。
    log.Info("Tap position: {0}.", tapEvent.TapPosition);
}
```

### ジェスチャの状態を識別する

ジェスチャ イベントの状態を取得するには、[GestureEvent.State](xref:Stride.Input.GestureEvent.State) フィールドを使用します。

```cs
switch(compositeGestureEvent.State)
{
case GestureState.Began:
	image.ComputePreview();
	break;
case GestureState.Changed:
	image.TransformPreview(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
	break;
case GestureState.Ended:
	image.TransformRealImage(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
	break;
default:
	break;
}
```

## 関連項目

* [ポインター](pointers.md)
* [仮想ボタン](virtual-buttons.md)
* [入力の概要](index.md)
