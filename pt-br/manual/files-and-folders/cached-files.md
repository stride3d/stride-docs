# Arquivos de Cached

Quando você constrói seu projeto, o Stride armazena os ativos e o código em pastas dentro do projeto.

Você pode querer limpar o cache se:

* o cache está ocupando muito espaço no disco

* ativos não atualizam no jogo depois de editá-los ou excluí-los

## Limpe o cache do Visual Studio

1. Para limpar o cache de código, em **Build**, selecione **Clean Solution**.

   ![Solução limpa ](media/clean-solution.png)

2. Se você tiver a extensão [Stride Visual Studio](../get-started/visual-studio-extension.md) instalada, você também pode limpar o cache de ativos. Para fazer isso, abaixo de **Stride**, selecione ** Activos intermediários limpos para Solution**.

   ![Solução limpa ](media/clean-assets.png)

3. Reconstrua o projeto para reconstruir o cache do zero.

## Limpe manualmente o cache

Se limpar o cache do Visual Studio não funciona, tente apagar os arquivos manualmente.

1. Excluir as seguintes pastas:

   * o cache binário: *~/MyGame/MyGame/Bin*

   * o cache de ativos: *~/MyGame/MyGame/Cache*

   * as pastas **obj** nas pastas da plataforma para o seu jogo (por exemplo *~/MyGame.iOS/obj*)

2. Se você estiver desenvolvendo para iOS, no Mac, também exclua: *~/Library/Caches/Xamarin/mtbs/builds/MyGame*

3. Reconstrua o projeto para reconstruir o cache do zero.

## Limpar os caches do Game Studio

Além dos caches que Stride cria para o seu projeto, Game Studio mantém caches para o editor.

### Cache de ativos

Para acelerar o carregamento de ativos no editor, Game Studio salva um cache de referências de ativos. Ele contém dados sobre cada ativo já carregado em cada projeto. Isso significa que pode crescer muito grande ao longo do tempo.

Por padrão, a pasta está em: *%temp%/Stride*

> [!Tip]
> Para verificar ou alterar onde o Game Studio salva o cache, consulte **Edit > Settings > Environment > Criar diretório de cache.**
> ![Configurações ](media/settings-window.png)

Para limpar o cache, exclua a pasta e execute Game Studio novamente.

### Configurações de cache

Game Studio salva informações do editor (como posições de janela e projetos recentemente abertos) em: *%Dados de App%/Stride*

O Game Studio também salva informações sobre abas abertas e a posição da câmera do editor no arquivo `.sdpkg.user` na pasta do projeto (por exemplo *~/MyGame/MyGame/MyGame/MyGame.sdpkg.user*).

Estes arquivos são pequenos, mas você pode querer excluí-los se você obter Game Studio em um estado ruim. Excluí-los não afeta nada no seu projeto.

Depois de excluir arquivos de cache, quando você iniciar o Game Studio, ele constrói um novo cache usando as configurações padrão.

> [!Tip]
> Você também pode redefinir o layout do Game Studio sem limpar o cache em **Edit > Configurações > Interface > Reset Game Studio layout**.
> ![Reset Game Studio layout](media/game-studio-layout-reset-button.png)

## Ver também

* [Estrutura do projecto](project-structure.md)
* [Controle de versão](version-control.md)