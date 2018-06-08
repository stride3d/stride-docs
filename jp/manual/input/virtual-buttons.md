# 仮想ボタン

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

制御を物理的なキーやボタンにバインドするのではなく、**仮想ボタン**にバインドすることができます。ユーザーは、物理ボタンを仮想ボタンに割り当てて、独自の制御方法を作成できます。

たとえば、ファーストパーソン シューティング ゲームを開発していて、_UseMedkit_ 関数にキーを割り当てる必要があるものとします。関数を特定のキーにバインドするのではなく、_UseMedkit_ という名前の**仮想ボタン**を作成し、それをたとえば **F** キーに割り当てることができます。プレイヤーは、好みに応じて、実行時に別のキーに仮想キーをバインドできます。

![Virtual buttons](media/index-how-virtual-buttons-work.png)

## 仮想ボタンを使用する

1. キー、ボタン、またはポインターを仮想ボタン (たとえば _MyButton_) にバインドします。
2. 仮想ボタンのリストを作成します。
3. _MyButton_ を仮想ボタンのリストに追加します。
4. 関数を _MyButton_ に割り当てます。
5. 追加の仮想ボタンを作成します。
6. 追加のボタンを同じリストに追加するか、または新しいリストを作成します。

## コード例

```cs
public override void Start()
{
    base.Start();

    // 存在しない場合は、新しい VirtualButtonConfigSet を作成する。
    Input.VirtualButtonConfigSet = Input.VirtualButtonConfigSet ?? new VirtualButtonConfigSet();

    // 「M」キー、ゲームパッドの「Start」ボタン、左マウス ボタンを、仮想ボタン「MyButton」にバインドする。
    VirtualButtonBinding b1 = new VirtualButtonBinding("MyButton", VirtualButton.Keyboard.M);
    VirtualButtonBinding b2 = new VirtualButtonBinding("MyButton", VirtualButton.GamePad.Start);
    VirtualButtonBinding b3 = new VirtualButtonBinding("MyButton", VirtualButton.Mouse.Left);

    VirtualButtonConfig c = new VirtualButtonConfig();

    c.Add(b1);
    c.Add(b2);
    c.Add(b3);

    Input.VirtualButtonConfigSet.Add(c);
}

public override void Update() {
    float button = Input.GetVirtualButton(0, "MyButton");
}
```

## 関連項目
* [ゲームパッド](gamepads.md)
* [キーボード](keyboards.md)
* [マウス](mouse.md)
* [ポインター](pointers.md)
* [入力の概要](index.md)
