# Bibliotecas de interface

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Designer</span>

**UI bibliotecas** contêm **UI elementos** tais como grades, botões, controles deslizantes e assim por diante que você pode usar e reutilizar em suas páginas [UI](UI-pages.md).

Os projetos Stride incluem uma biblioteca padrão **** de elementos UI. Você pode criar suas próprias bibliotecas de elementos personalizados também.

![UI biblioteca](media/UI-library.png)

As bibliotecas de interface de usuário são semelhantes a [prefabs](../game-studio/prefabs/index.md) no Editor de cenas; você pode criar seus próprios elementos, salvá-los em uma biblioteca de interface de usuário personalizada e, em seguida, usá-los onde você precisar em várias páginas de interface de usuário. Você também pode aninhar bibliotecas dentro de outras bibliotecas, assim como [nested prefabs](../game-studio/prefabs/nested-prefabs.md).

No tempo de execução, você pode re-instancializar as raízes da biblioteca UI e inseri-las em uma árvore UI existente.

## Criar uma biblioteca UI

No **Asset View**, clique em **Add asset > UI > UI library**.

![ Adicionar biblioteca UI](media/add-ui-library.png)

Game Studio adiciona a biblioteca UI para o **Asset View**.

![Adicionado biblioteca UI](media/added-ui-library.png)

Alternativamente, para criar uma biblioteca UI de um elemento UI existente:

1. Selecione os elementos que deseja criar uma biblioteca de interface do usuário.

2. Clique com o botão direito e selecione **Criar biblioteca de seleção**.

![Adicionado biblioteca UI](media/create-library-from-selection.png)

Game Studio cria uma biblioteca com uma cópia dos elementos que você selecionou.

## Atribuir uma biblioteca UI em código

```cs
// Esta propriedade pode ser atribuída a partir de um ativo de biblioteca UI no Game Studio
público UILibrary MyLibrary { get; set; }

botão público Criar botão()
(
    // assumindo que há um elemento raiz chamado "MyButton" do tipo (ou derivado de) Botão
    var button = MyLibrary.InstantiateElement<Button>("MyButton");

    // se não houver raiz chamada "MyButton" na biblioteca ou o tipo não coincide,
    // o método anterior retornará null
    se (botão)
    (        
        // anexar um delegado ao evento Click
        alguma Button. - Sim. Anexo
        (
            // fazer algo aqui...
        };
    }

    botão de retorno;
}
```

As páginas de interface do usuário têm apenas um elemento raiz. As bibliotecas de interface do usuário podem ter vários elementos de raiz.

## Ver também

* [Páginas de interface](ui-pages.md)
* [Editor de UI](ui-editor.md)
* [Adicionar uma interface de usuário a uma cena](add-a-ui-to-a-scene.md)
* [Sistema de Layout](layout-system.md)