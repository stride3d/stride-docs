# Criar pacotes

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

## Abra seu projeto no Visual Studio

> [!Note]
> Game Studio irá mais tarde apoiar a criação de pacotes NuGet diretamente.

Primeiro de tudo, depois de salvar todas as suas mudanças, abra seu projeto com Visual Studio. Você pode facilmente fazer isso clicando no botão apropriado na barra de ferramentas:

![ Projeto aberto em Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

Algumas coisas para cuidar:
* Excluir ativos não-ecessários (i.e. GameSettings, etc...)
* Excluir não-ecessário `PackageReference`

## Opcional: Propriedades do pacote de configuração

1. No **Solution Explorer**, clique com o botão direito do mouse no projeto e clique em **Properties**.

2. Vá para a guia **Package** e edite versão do pacote, descrição, URL, etc.

   ![ Propriedades do pacote de configuração](media/setup-package-properties.png)

## Pacote

1. No **Solution Explorer**, clique com o botão direito do mouse no projeto e clique em **Pack**.

   ![Pack project](media/pack-project.png)

2. Visual Studio irá construir e embalar o projeto. O resultado `.nupkg` deve estar em `bin\Debug` ou `bin\Release` pasta, dependendo da sua configuração.

## Publicar

Agora você pode publicar o arquivo `.nupkg` em um repositório NuGet, como [nuget.org](https://nuget.org).

Há várias maneiras de fazer isso: `nuget.exe` client, `dotnet.exe` client ou [nuget.org Upload Package](https://www.nuget.org/packages/manage/upload)

Para obter informações adicionais, consulte [Publishing pacotes](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package) na documentação NuGet.

Uma vez que seu pacote está devidamente listado, ele agora pode ser [consumed](consume-packages.md) por outros usuários Stride!
