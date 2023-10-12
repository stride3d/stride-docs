# Lançar um jogo

<span class="badge text-bg-primary">Introdução</span>

Esta página explica como lançar seu jogo usando Game Studio ou Visual Studio.

## Lançar um jogo de Game Studio

> [!Note]
> Game Studio não pode lançar jogos para as plataformas Windows Store ou UWP (Universal Windows Platform). Para lançar um jogo para essas plataformas, use Visual Studio (veja abaixo).

1. No **toolbar**, selecione sua plataforma de destino.

   ![ Seleção de formulários ](media/launch-your-game-game-studio-profiles.png)

   > [!Note]
   > Você só pode selecionar plataformas selecionadas no **Criar um novo jogo ** diálogo quando você criou o projeto. Para adicionar plataformas adicionais ao projeto, consulte [Adicionar ou remover uma plataforma](../platforms/add-or-remove-a-platform.md).

2. Para executar o jogo, clique em ![Play icon](media/launch-your-game-play-icon.png) na barra de ferramentas ou pressione **F5**.

   ![Game Studio jogar botão](media/game-studio-toolbar-build-button.png)

O ** janela de saída** mostra o progresso de compilação.

![ Janela de saída ](media/output-window.png)

Quando a compilação estiver concluída, seu jogo começa na plataforma selecionada.

## Lançar um jogo de Visual Studio

1. No Game Studio, na barra de ferramentas, clique em ![Open in IDE](media/launch-your-game-ide-icon.png) (**Open in IDE**) para lançar Visual Studio.

2. Na barra de ferramentas do Visual Studio, defina o projeto apropriado como o projeto de inicialização.

   ![Selecione o perfil de compilação no Visual Studio](media/launch-your-game-visual-studio-profiles.png)

   A configuração do projeto de inicialização é atualizada automaticamente.

   > [!TIP]
   > Você pode ver seus projetos no Solution Explorer à direita. As extensões de nome de arquivo do projeto identificam a plataforma (por exemplo *.Android*, *.iOS*, etc).

3. Verifique se a configuração e a plataforma correspondem corretamente ao que você espera.

4. 
   * Para iniciar o jogo sem depuração, pressione **Ctrl + F5**.

   * Para iniciar o jogo com depuração, clique em **Start** ou pressione **F5**.

      ![Visual Studio Iniciar botão](media/visual-studio-start-button.png)

## Remover fronteiras

Por padrão, o jogo é executado com bordas de janela.

| Com fronteiras | Sem fronteiras |
|---------------------------|-----------------
| ![ Com fronteiras](media/with-borders.jpg) | ![ Sem fronteiras](media/without-borders.jpg) |

Para executar o jogo sem fronteiras, use:

```cs
Game.Window.IsBorderLess = true;
```

Por exemplo:

```cs
usando Stride. Motor;

namespace MyGame
(
    classe pública MyScript : StartupScript
    (
        anula de sobreposição pública Start()
        (
            base.Start();
            Game.Window.IsBorderLess = true;
        }
    }
}
```
