# Pacotes de consumo

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

## Abra seu projeto no Visual Studio

> [!Note]
> Game Studio irá mais tarde apoiar adicionar pacotes NuGet diretamente.

Primeiro de tudo, depois de salvar todas as suas mudanças, abra seu projeto com Visual Studio. Você pode facilmente fazer isso clicando no botão apropriado na barra de ferramentas:

![ Projeto aberto em Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

## Adicionar uma referência

1. No **Solution Explorer**, clique com o botão direito do mouse no projeto e clique em **Manage NuGet Packages...**

   ![Visual Studio Iniciar botão](media/manage-nuget-packages.png)

2. Por nosso exemplo, vamos usar `Stride.AssetPack.BuildingBlocks` pacote:
   * Escolha "nuget.org" ou "All" como a fonte **Package**
   * Certifique-se de **Incluir pré-lançamento** é verificado (se necessário)
   * Vá para a guia **Browse**
   * ** Pesquisa ** para um pacote de ativos Stride (i.e. **Stride.AssetPack.BuildingBlocks**) e selecione **Install**

   ![Install package](media/install-package.png)

3. Salve o projeto Visual Studio.

## Use ativos no Game Studio

1. Em **Game Studio**, vá para o menu **File** e selecione **Reload project**

2. Agora você deve ser capaz de ver o projeto referenciado e seus ativos em **Solution explorer**

   ![Use pacote](media/use-package-from-game-studio.png)

> [!Note]
> Esses ativos são somente leitura e, como tal, não podem ser arrastados e deixados cair na cena. Isto será corrigido em breve.
> Entretanto, você ainda pode usar o seletor de ativos para alterar um modelo ou referência de material existente para um do pacote de ativos.