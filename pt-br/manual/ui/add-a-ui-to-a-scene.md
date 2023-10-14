# Adicionar uma interface de usuário a uma cena

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Designer</span>

Depois de criar uma página [UI](ui-pages.md), adicione-a à cena como um componente em uma entidade.

1. No **Scene Editor**, crie uma entidade vazia. Para fazer isso, clique com o botão direito do mouse na cena e selecione **Empty entity**.

   ![Criar entidade vazia](media/create-empty-entity.png)

2. Na Grade de Propriedade (à direita por padrão), clique em **Adicionar componente** e selecione **UI**.

   ![ Adicionar componente UI](media/add-UI-component.png)

   Game Studio adiciona um componente **UI** à entidade.

   ![UI componente](media/UI-component.png)

3. Ao lado de <g id="1">Page</g>, clique em <x id="2"/>Hand icon<x id="3"/>Select an asset</g>).<g id="4">

   A janela **Selecione um ativo** abre.

   ![Selecione a página UI](media/select-UI-page.png)

4. Selecione a página UI que deseja adicionar e clique em **OK**.

   Para obter informações sobre como criar e editar páginas de interface do usuário, consulte a página [UI editor](ui-editor.md).

> [!Tip]
> Para parar a interface do usuário obscurecendo o resto da cena no editor, desative o componente **UI** na Grade de Propriedade.

> ![Disable UI component](media/disable-UI-component.png)

> Lembre-se de ativar o componente novamente antes de executar o jogo. Se não o fizeres, o Stride não mostra a UI.

### Atribuir uma página UI a um componente de página UI no código

Você pode atribuir uma página UI para a propriedade `Page` de um componente UI.

```cs
// Esta propriedade pode ser atribuída a partir de um ativo de página UI no Game Studio
public UIPage MyPage { get; set; }

anulada de substituição protegida LoadScene()
(
    InicializeUI();
}

anula pública InicializeUI()
(
    raiz de var Elemento = MyPage.RootElement;
    // procurar um elemento específico na página UI, métodos de extensão podem ser usados
    botão var = rootElement.FindVisualChildOfType<Button>("buttonOk");

    // se não houver nenhum elemento chamado "buttonOk" na árvore UI ou o tipo não coincide,
    // o método anterior retorna null
    se (botão)
    (
        // anexar um delegado ao evento Click
        botão. Clique em += delegate
        (
            // fazer algo aqui...
        };
    }

    // atribuir a página ao componente UI
    var uiComponent = Entity.Get<UIComponent>();
    uiComponent. Página = MyPage;
}
```

## Propriedades do componente UI

| Propriedade | Descrição |
|--------------------|----------------
| Página | A página UI exibida pelo componente |
| Sampler | Método de amostragem de textura: Ponto (Nearest), Linear (**Opção padrão** ), ou Anisotropic |
| Tela completa | **Nota:** Recomendamos que você use isso como outras coisas estão quebradas |
| Resolução | A resolução UI em pixels |
| Tamanho | Obtém ou define o tamanho real do componente UI em unidades mundiais |
| Esticação da resolução | Como o valor de resolução virtual deve ser usado (`FixedWithFixedHeight`, `FixedWithAdaptableHeight`, ou `FixedHeightAdaptableWidth`) |
| Billboard | Se selecionado, a interface do usuário sempre enfrenta a câmera. **Nota:** Desativar o modo de outdoor causa erros de texto UI na versão atual de Stride |
| Texto instantâneo | Se selecionado, o texto da interface do usuário é snapped para o pixel mais próximo |
| Tamanho fixo | Obtém ou define o valor indicando se a interface do usuário deve sempre ser um tamanho fixo na tela (por exemplo, um componente com uma altura de 1 usará 0.1 da tela). **Nota:** Esse asset não funciona na versão atual do Stride |
| Grupo de renderização | O grupo [render](../graphics/graphics-compositor/render-groups-and-masks.md) o UI usa |

## Scripts UI

Para fazer UIs interativo, você precisa adicionar um script. Sem scripts, UIs são simplesmente imagens não interativas.

Para um exemplo de uma interface de usuário implementada no Stride, veja a amostra do menu UI</g>game incluída no Stride.<g id="1">

![Projeto de interface de usuário amplo](media/ui-sample-project.png)

## Ver também

* [Páginas de interface](ui-pages.md)
* [Bibliotecas de interface](ui-libraries.md)
* [Editor de UI](ui-editor.md)
* [Sistema de Layout](layout-system.md)
* [VR — Exibir uma interface de usuário em uma sobreposição](../virtual-reality/display-a-ui-in-an-overlay.md)