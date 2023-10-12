# Botões virtuais

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Em vez de ligar controles para chaves físicas e botões, você pode ag1>virtual botões</g>.<g id="1"> Os jogadores podem então atribuir botões físicos aos botões virtuais, permitindo-lhes criar seus próprios esquemas de controle.

Por exemplo, imagine que você desenvolva um jogo de tiro em primeira pessoa e precise atribuir uma chave para a função _UseMedkit_. Em vez de ligar a função a uma chave particular, você pode criar um botão **virtual** chamado _UseMedkit_, em seguida, ligar o botão virtual para, digamos, a tecla **F**. Se quiser, o jogador pode ligar a chave virtual a uma chave diferente no tempo de execução.

![ Botões virtuais](media/index-how-virtual-buttons-work.png)

## Use botões virtuais

1. Ligar uma chave, botão ou ponteiro para um botão virtual (por exemplo _MyButton_).
2. Crie uma lista de botões virtuais.
3. Adicione _MyButton_ à lista de botões virtuais.
4. Atribuir uma função a _MyButton_.
5. Criar botões virtuais adicionais.
6. Adicione os botões adicionais à mesma lista ou crie listas adicionais.

## Exemplo de código

```cs
anula de sobreposição pública Start()
(
    base.Start();

    // Criar um novo VirtualButtonConfig Definir se nenhuma existe. 
    Entrada.VirtualButtonConfigSet = Entrada.VirtualButtonConfigSet??? novo VirtualButtonConfigSet();
    
    //Bind "M" chave, GamePad "Start" botão e botão esquerdo do mouse para um botão virtual "MyButton".
    VirtualButtonBinding b1 = novo VirtualButtonBinding("MyButton", VirtualButton.Keyboard.M);
    VirtualButtonBinding b2 = novo VirtualButtonBinding("MyButton", VirtualButton.GamePad.Start);
    VirtualButtonBinding b3 = novo VirtualButtonBinding("MyButton", VirtualButton.Mouse.Left);

    VirtualButtonConfig c = novo VirtualButtonConfig();

    c. Adicionar(b1);
    c. Adicionar(b2);
    c. Adicionar(b3);

    Entrada.VirtualButtonConfigSet.Add(c);
}

atualização() {
    botão float = Entrada.GetVirtualButton(0, "MyButton");
}
```

## Ver também
* [Gamepads](gamepads.md)
* [Teclado](keyboards.md)
* [Mouse](mouse.md)
* [Pontos](pointers.md)
* [Visão geral da entrada](index.md)