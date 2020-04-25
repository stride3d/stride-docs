# 入力

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

ユーザーは、ゲームパッド、マウス、キーボードなどの**入力デバイス**を使用して、ゲームやアプリケーションと対話します。すべての対話型アプリケーションは、少なくとも 1 つの入力デバイスをサポートする必要があります。

![Input devices](media/input_intro.png)

Stride は、スクリプトを使用して入力を完全に処理します。さまざまな入力の種類を処理するため、低レベルと高レベルの API があります。

* **低レベル**の API はハードウェアに近いので低遅延です。[ポインター](pointers.md)、[キーボード](keyboards.md)、[マウス](mouse.md)、[ゲームパッド](gamepads.md)、一部の[センサー](sensors.md)からの入力を速く処理できます。

* **高レベル**の API は、ユーザーのために入力を解釈するので、高遅延です。高レベルの API は、[ジェスチャ](gestures.md)と一部の[センサー](sensors.md)に使用されます。

* また、一部の[センサー](sensors.md)と[仮想ボタン](virtual-buttons.md)のための**特殊な API** もあります。

## 入力を処理する

入力は [InputManager](xref:Stride.Input.InputManager) クラスで処理します。このクラスには、スクリプトからプロパティとメソッドを使用してアクセスできます。

特定の入力デバイスが使用できるかどうかを調べるには、対応する @'Stride.Input.InputManager' プロパティを使用します。たとえば、マウスが接続されているかどうかを調べるには、[Input.HasMouse](xref:Stride.Input.InputManager.HasMouse) を使用します。

デバイスの使用可能性を調べた後、Stride で入力を処理するには 4 つの方法があります。

### 状態を問い合わせる

デジタル キーやボタンの状態 (_アップ_または_ダウン_) およびアナログ ボタンやセンサーの数値を問い合わせることができます。たとえば、@'Stride.Input.InputManager.DownKeys' は、最後の更新で_ダウン_状態であったキーのリストを取得します。

![Query key and button states](media/index-state-one-action-between-updates.png)

![Analog stick positions](media/index-state-analog-stick-position.png)

更新の間にユーザーが複数のアクションを実行する場合があります。更新の間に状態の変化がなかった場合 (最終結果が同じ)、Stride はアクションを登録しません。

![Several actions between updates](media/index-state-several-actions-between-updates.png)

### 状態の変化を問い合わせる

前回の更新以降のボタンやキーの状態の変化を問い合わせることができます。
この場合は、ボタンやキーのリストを取得するのではなく、個々のボタンとキーごとに問い合わせる必要があります。

* デジタル ボタンとキーの場合は、ボタンまたはキーが最後の更新で_押された_、_押されている_、または_放された_かどうかを問い合わせます。

    ![Query key state change](media/index-state-change-one-action-between-updates.png)

* マウスの位置およびマウス ホイールのスクロールの場合は、前回の更新以降の_デルタ値_を問い合わせます。

    ![Mouse wheel delta](media/index-state-change-mouse-wheel-scroll.png)

2 つの更新の間に、ユーザーが複数のアクションを実行している場合があります。2 つの更新の間に状態の変化がなかった場合 (最終結果が同じ)、Stride はアクションを登録しません。

### イベントのリストを問い合わせる

ポインター、ジェスチャ、キーボードの場合は、最後の更新で発生したすべてのイベントを問い合わせることができます。

![Several actions between updates](media/index-events-list-several-actions-between-updates.png)

> [!NOTE]
> 2 つの更新の間にユーザーが複数のアクションを実行した場合でも、Stride はそのすべてのイベントを登録します。

### 仮想ボタンを使用する

**仮想ボタン**を使用して入力を物理キーではなくアクションに関連付けることができ、それによってユーザーが独自のキーを定義できるようにすることができます。詳細については、「[仮想ボタン](virtual-buttons.md)」をご覧ください。

## このセクションの内容

* [ゲームパッド](gamepads.md)
* [ジェスチャ](gestures.md)
* [キーボード](keyboards.md)
* [マウス](mouse.md)
* [ポインター](pointers.md)
* [センサー](sensors.md)
* [仮想ボタン](virtual-buttons.md)
