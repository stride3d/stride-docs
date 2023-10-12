# Plataformas

![ Formulários ](media/game-engine-system-requirements-intro-pic.png)

Stride é motor de jogo multi-plataforma. Isso significa que você pode criar seu jogo uma vez, em seguida, compilar e implantá-lo em todas as plataformas que o Stride suporta. O motor converte C# e shaders para as diferentes línguas nativas, e abstrai os conceitos que diferem entre plataformas, então você não precisa adaptar seu código para cada plataforma.

## Plataformas suportadas

* Windows Desktop 7, 8, 10
* Windows Universal (UWP)
* [Linux (Ubuntu)](linux/index.md)
* Android 2.3 e mais tarde
* [iOS 8.0 e posterior](ios.md)

> [!TIP]
> Para verificar qual plataforma seu projeto usa, adicione um ponto de interrupção ao seu código (por exemplo, em um script), execute o projeto e verifique o [Platform. Tipo](xref:Stride.Core.Platform.Type) variável.

## Plataformas gráficas suportadas

* Direct3D 9 (apoio limitado), 10, 11, 12
* OpenGL 3, 4
* OpenGL ES 2 (apoio limitado), 3
* Vulc

> [!Note]
> Stride só suporta MSAA (multisample anti-aliasing) para Direct3D 11 e mais tarde.
> Dependendo do compilador de shader OpenGL do seu dispositivo, Stride pode não ser executado com OpenGL ES2.

> [!Warning]
> Direct3D 9 não suporta texturas HDR. Usando texturas HDR com DirextX 9 vai bater seu jogo.

## Defina a plataforma gráfica

Você define a plataforma gráfica nas configurações **Game** asset em **Rendering settings > Plataforma gráfica de destino**.

![ Selecione a plataforma gráfica](media/change-graphics-platform.png)

Para obter mais informações, consulte [Defina a plataforma gráfica](set-the-graphics-platform.md).

## Variáveis de pré-processamento

Stride define variáveis pré-processadoras se você quiser escrever código que compila somente sob uma plataforma específica. Para mais informações, consulte as variáveis [Preprocessor](../scripts/preprocessor-variables.md).

## Nesta secção

* [Linux](linux/index.md)
* [UWP](uwp/index.md)
   * [Xbox Live](uwp/xbox-live.md)
* [iOS](ios.md)
* [Adicionar ou remover uma plataforma](add-or-remove-a-platform.md)
* [Defina a plataforma gráfica](set-the-graphics-platform.md)
* [Definições do jogo](../game-studio/game-settings.md)