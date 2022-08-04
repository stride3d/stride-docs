# Virtual buttons
# Виртуальные кнопки

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Rather than bind controls to physical keys and buttons, you can bind them to **virtual buttons**. Players can then assign physical buttons to the virtual buttons, allowing them to create their own control schemes.
Вместо того, чтобы привязывать элементы управления к физическим клавишам и кнопкам, вы можете привязать их к **виртуальным кнопкам**.  Затем игроки могут назначать физические кнопки виртуальным кнопкам, что позволяет им создавать свои собственные схемы управления.

For example, imagine you develop a first-person shooter game and need to assign a key for the _UseMedkit_ function. Rather than bind the function to a particular key, you can create a **virtual button** called _UseMedkit_, then bind the virtual button to, say, the **F** key. If they want to, the player can then bind the virtual key to a different key at runtime.
Например, представьте, что вы разрабатываете шутер от первого лица и вам нужно назначить клавишу для функции _UseMedkit_.  Вместо того, чтобы привязывать функцию к определенной клавише, вы можете создать **виртуальную кнопку** под названием _UseMedkit_, а затем привязать виртуальную кнопку, скажем, к клавише **F**.  При желании игрок может привязать виртуальный ключ к другому ключу во время выполнения.

![Virtual buttons](media/index-how-virtual-buttons-work.png)
![Виртуальные кнопки](media/index-how-virtual-buttons-work.png)

## Use virtual buttons
## Использовать виртуальные кнопки

1. Bind a key, button, or pointer to a virtual button (eg _MyButton_).
1. Привяжите клавишу, кнопку или указатель к виртуальной кнопке (например, _MyButton_).
2. Create a list of virtual buttons.
2. Создайте список виртуальных кнопок.
3. Add _MyButton_ to the list of virtual buttons.
3. Добавьте _MyButton_ в список виртуальных кнопок.
4. Assign a function to _MyButton_.
4. Назначьте функцию _MyButton_.
5. Create additional virtual buttons.
5. Создайте дополнительные виртуальные кнопки.
6. Add the additional buttons to the same list, or create additional lists.
6. Добавьте дополнительные кнопки в тот же список или создайте дополнительные списки.

## Example code
## Пример кода

```cs
```CS
public override void Start()
публичное переопределение void Start()
{
{
    base.Start();
база.Старт();

    // Create a new VirtualButtonConfigSet if none exists. 
// Создаем новый VirtualButtonConfigSet, если его не существует.
    Input.VirtualButtonConfigSet = Input.VirtualButtonConfigSet ?? new VirtualButtonConfigSet();
Input.VirtualButtonConfigSet = Input.VirtualButtonConfigSet ??  новый VirtualButtonConfigSet();
    
    //Bind "M" key, GamePad "Start" button and left mouse button to a virtual button "MyButton".
//Привязываем клавишу «M», кнопку GamePad «Пуск» и левую кнопку мыши к виртуальной кнопке «MyButton».
    VirtualButtonBinding b1 = new VirtualButtonBinding("MyButton", VirtualButton.Keyboard.M);
VirtualButtonBinding b1 = new VirtualButtonBinding(
    VirtualButtonBinding b2 = new VirtualButtonBinding("MyButton", VirtualButton.GamePad.Start);
VirtualButtonBinding b2 = new VirtualButtonBinding(
    VirtualButtonBinding b3 = new VirtualButtonBinding("MyButton", VirtualButton.Mouse.Left);
VirtualButtonBinding b3 = new VirtualButtonBinding(

    VirtualButtonConfig c = new VirtualButtonConfig();
VirtualButtonConfig c = new VirtualButtonConfig();

    c.Add(b1);
в.Добавить(b1);
    c.Add(b2);
в.Добавить(b2);
    c.Add(b3);
в.Добавить(b3);

    Input.VirtualButtonConfigSet.Add(c);
Input.VirtualButtonConfigSet.Add(c);
}
}

public override void Update() {
общественное переопределение void Update() {
    float button = Input.GetVirtualButton(0, "MyButton");
Кнопка с плавающей запятой = Input.GetVirtualButton(0, 
}
}
```
```

## See also
## Смотрите также
* [Gamepads](gamepads.md)
* [Геймпады](gamepads.md)
* [Keyboard](keyboards.md)
* [Клавиатура](keyboards.md)
* [Mouse](mouse.md)
* [Мышь](mouse.md)
* [Pointers](pointers.md)
* [Указатели](pointers.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
