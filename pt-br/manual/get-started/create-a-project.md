# Criar um projeto

<span class="badge text-bg-primary">Introdução</span>

Esta página explica como:

* criar um novo projeto vazio
* criar um projeto baseado em um modelo ou amostra

**Templates** são projetos que contêm apenas os elementos necessários para começar a trabalhar em um jogo.

**Samples** são jogos completos, que você pode aprender ou basear um novo jogo em.

## Criar um projeto vazio

Um projeto **empty** é projeto que contém apenas o mínimo nu para fazer um jogo: uma cena simples com uma luz, câmera e script para mover a câmera, além de um pipeline de renderização pré-configurado. Isso é bom quando você quer começar o seu jogo do zero sem elementos que você não precisa.

Para criar um projeto vazio:

1. No **Stride Launcher**, clique em **Start** para iniciar o Game Studio.

   A caixa de diálogo **New/open project** é aberta.

   ![ Novo Projeto diálogo](media/create-project-new-open-project-window.png)

   Você também pode abrir um novo projeto no Game Studio de **File > New**.

2. Selecione ** Novo Jogo **.

3. Nos campos **Name** e **Location**, especifique um nome para o projeto e a pasta para salvá-lo.

4. Clique em **Select**.

   O **Criar um novo jogo ** diálogo abre.

   ![Criar um novo jogo diálogo](media/create-project-create-new-game.png)

5. No campo **Namespace**, especifique o namespace que você deseja usar. Se você não sabe qual deve ser o seu namespace, deixe-o como padrão.

6. Em **Platforms**, selecione as plataformas que você deseja que seu jogo suporte.

   > [!Note]
   > > Para suportar iOS e Android, você precisa instalar <a href="https://www.xamarin.com/studio" target="_blank">Xamarin</a> (livre se você tem Visual Studio).

   Se o seu sistema de desenvolvimento está faltando pré-requisitos para qualquer uma das plataformas que você selecionar, Stride exibe um aviso.

7. Em **Asset Packs**, você pode selecionar ativos adicionais para incluir em seu projeto. Estes incluem ativos como animações e materiais. Os pacotes de ativos são divertidos para brincar quando você está aprendendo a usar Stride, mas eles não são necessários.

8. Em **Rendering**, selecione as opções que deseja.

   **Gráficos API:** Os recursos gráficos que você pode usar em seu projeto dependem da API selecionada. Para recursos gráficos avançados, selecione a versão mais recente das APIs gráficas.

   > [!Warning]
   > Algumas placas gráficas não suportam as últimas APIs. Para alguns dispositivos móveis, apenas Direct3D 9.3 / OpenGL ES 2.0 e Direct3D 10.0 / OpenGL ES 3.0 estão disponíveis.

   **High ou Low Dynamic Range (HDR / LDR):** Isso define como a cor é computada em seu projeto. No modo LDR, as cores variam de 0 a 1. Em cores de modo HDR pode tomar qualquer valor flutuante. HDR fornece renderização mais avançada e realista, mas requer mais poder de processamento e perfil Direct3D 10.0 / OpenGL ES 3.0 ou posterior.

9. Sob **Orientação**, escolha a orientação para o seu projeto. Para jogos de PC, use paisagem. O retrato geralmente deve ser usado apenas para jogos móveis.

10. Clique em **OK**.

Stride cria o projeto e o abre no Game Studio. Para mais informações, consulte [Game Studio](../game-studio/index.md).

## Criar um projeto de uma amostra ou modelo

Stride inclui vários projetos de amostra demonstrando cada parte do motor (2D, 3D, sprites, fontes, UI, áudio, entrada, etc). Ele também inclui jogos de modelo para ajudá-lo a fazer o seu próprio jogo.

Para criar um projeto de uma amostra ou modelo:

1. Abra a caixa de diálogo **New Project**.

2. À esquerda, navegue até **Novo projeto > Amostras**.

3. **Selecione a amostra** que deseja criar um projeto.

![Nova janela do projeto — amostras](media/create-project-new-open-project-samples.png)

4. Clique em **Select**.

   A janela **Select Platforms** abre.

   ![Selecionar Plataformas janela](media/create-project-select-platform.png)

5. Selecione as plataformas que você deseja que seu jogo suporte e clique em **OK**.

Stride cria o projeto e o abre no Game Studio.

## O que se segue?

* [Familiarize-se com Game Studio](../game-studio/index.md)