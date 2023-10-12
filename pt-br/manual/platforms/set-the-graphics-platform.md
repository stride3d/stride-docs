# Defina a plataforma gráfica

<span class="badge text-bg-primary">Introdução</span>

A plataforma **graphics** controla o hardware gráfico no dispositivo em que você roda seu projeto. Diferentes dispositivos suportam diferentes plataformas gráficas; por exemplo, o iOS suporta a plataforma gráfica OpenGL ES. Você pode selecionar qual plataforma gráfica seu jogo usa e adicionar substituições para diferentes plataformas (por exemplo, Windows, Android, etc).

> [!Warning]
> Mudar de Direct3D para uma versão anterior do Direct3D pode criar problemas. Por exemplo, se o seu jogo contém texturas HDR, ele vai falhar, como Direct3D 9 não os suporta.

Você define a plataforma gráfica no ativo [game settings](../game-studio/game-settings.md).

> [!Note]
> Certifique-se de ter os drivers mais recentes para as plataformas gráficas que você deseja usar.

1. No **Asset View**, selecione o ativo **Game Settings**.

   ![ Configurações do jogo asset](media/games-settings-asset.png)

2. Na Grade de Propriedade, em **Configurações de Correção > Plataforma gráfica de destino**, selecione a plataforma gráfica que você deseja usar.

   ![ Selecione a plataforma gráfica](media/change-graphics-platform.png)

   Se você selecionar **Default**, Stride usa a plataforma gráfica apropriada para sua plataforma (por exemplo, Windows, Android) quando você construir.

| Plataforma | Plataforma gráfica padrão |
|---------------|-------------
| Windows, UWP | Direct3D11 |
| Linux, Mac OS | OpenGL |
| Outros | OpenGL ES |

## Substituir a plataforma gráfica

Você pode substituir a plataforma gráfica que a Stride usa para plataformas específicas. Por exemplo, você pode usar o Linux Vulkan enquanto outras plataformas usam o padrão.

1. Com o ativo **GameSettings** selecionado, na Grade de Propriedade, abaixo de **Overrides**, clique em ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

   ![ Selecione a plataforma gráfica](media/add-override.png)

   Game Studio adiciona uma substituição.

2. Na nova substituição, ao lado de **Platforms**, selecione as plataformas às quais você deseja que essa substituição seja aplicada.

   ![Selecione a plataforma de gráficos sobrescrevendo](media/select-override-platform.png)

3. No menu suspenso **Configuration**, selecione **Rendering Settings**.

   ![Selecione a plataforma de gráficos sobrescrevendo](media/select-override-configuration.png)

4. Em **Rendering Settings**, no menu suspenso **Preferred Graphics Platform**, selecione a plataforma gráfica que deseja usar.

   ![Selecione a plataforma de gráficos sobrescrevendo](media/select-override-graphics-platform.png)

Stride substitui a plataforma gráfica para as plataformas selecionadas.

## Verifique qual plataforma gráfica seu projeto usa

1. Adicione um ponto de interrupção ao seu código de jogo (por exemplo, em um script).

2. Execute o projeto.

3. Verifique o valor da variável [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform).

   Por exemplo, este projeto está usando Vulkan:

   ![ Selecione a plataforma gráfica](media/check-platform-at-runtime.png)

## Ver também

* [Índice de plataformas](index.md)
* [Definições do jogo](../game-studio/game-settings.md)