# Tela de Splash

<span class="badge text-bg-primary">Introdução</span>

A tela **splash** é a imagem (geralmente um logotipo) exibida quando seu jogo começa. Desvanece-se sobre a cor que você especificar, então desaparece.

> [!Note]
> A tela de respingo só é exibida quando o jogo é construído no modo de lançamento.

A tela de respingo padrão é o logotipo Stride.

![ tela de respingo padrão](media/StrideDefaultSplashScreen.png)

Você só pode especificar uma tela de respingo em Configurações do jogo. Se você quiser adicionar mais, você precisa implementá-los manualmente.

## Editar a tela de respingo

As configurações de tela de respingo fazem parte do ativo **Game**.

1. No **solution explorer** (o painel inferior esquerdo por padrão), selecione a pasta **Ativos**.

   ![Select Assets pasta asset](media/select-asset-folder.png)

2. No **asset view** (o painel inferior por padrão), selecione o **GameSettings** asset.

   ![Selecionar configurações de jogo asset](media/select-game-settings-asset.png)

3. Na grade **property** (o painel direito por padrão), expanda **Splash screen**.

   ![Configurações ](media/splash-screen.png)

### Propriedades da tela de Splash

| Propriedade | Descrição |
|----------|------------
| Textura | A imagem (por exemplo, logotipo da empresa) exibida como a tela de respingo. Por padrão, isso é *StrideDefaultSplashScreen*. |
| Cor | A cor da tela de respingo desaparece em cima de. Por padrão, isso é preto (*#FF000000*). |

> [!Tip]
> Além disso, você pode querer **disable streaming** nas propriedades da própria textura de tela de respingo. Isso garante que a textura é sempre carregada e exibida na mais alta qualidade. Para obter mais informações, consulte [Textures > Streaming](../graphics/textures/streaming.md).

## Ver também

* [Activos](../game-studio/game-settings.md)
* [Texturas](../graphics/textures/index.md)
