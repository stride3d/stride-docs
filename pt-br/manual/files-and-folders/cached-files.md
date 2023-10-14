# Arquivos em cache

Quando você compila o seu projeto, o Stride armazena em cache os assets e o código em pastas dentro do projeto.

Você pode querer limpar o cache se:

* o cache estiver ocupando muito espaço no disco

* os assets não estão atualizando no jogo depois de editá-los ou excluí-los

## Limpar o cache do Visual Studio

1. Para limpar o cache de código, selecine o item de menu **Criar**, e então selecione **Limpar Solução**.

   ![Limpar Solução](media/clean-solution.png)

2. Se você tiver a extensão [Stride Visual Studio](../get-started/visual-studio-extension.md) instalada, você também poderá limpar o cache de assets. Para fazer isso, acesse o item de menu **Extensões > Stride** e selecione **Limpar assets intermediários para a Solução**.

   ![Limpar Solução](media/clean-assets.png)

3. Recompilar o projeto para refazer o cache do zero.

## Limpe manualmente o cache

Se limpar o cache do Visual Studio não funcionar, tente apagar os arquivos manualmente.

1. Excluir as seguintes pastas:

   * o cache binário: *~/MeuJogo/MeuJogo/Bin*

   * o cache de assets: *~/MeuJogo/MeuJogo/Cache*

   * as pastas **obj** nas pastas de plataforma do seu jogo (por exemplo, *~/MeuJogo.iOS/obj*)

2. Se você estiver desenvolvendo para iOS, no seu Mac, também exclua: *~/Library/Caches/Xamarin/mtbs/builds/MeuJogo*

3. Recompile o projeto para criar o cache do zero.

## Limpar os caches do Game Studio

Além dos caches que o Stride cria para o seu projeto, o Game Studio mantém caches para o editor.

### Cache de asset

Para acelerar o carregamento de assets no editor, o Game Studio salva um cache de referências aos assets. Ele contém dados sobre todos os assets já carregados em todos os projetos. Podendo crescer muito ao decorrer do tempo.

Por padrão, a pasta está em: *%temp%/Stride*

> [!Tip]
> Para verificar ou alterar onde o Game Studio salva o cache, acesse **Editar > Configurações > Ambientes > Compilar diretório de cache.**
> ![Configurações](media/settings-window.png)

Para limpar o cache, exclua a pasta e execute o Game Studio novamente.

### Cache de configurações

O Game Studio salva informações do editor (como posições de janela e projetos recentemente abertos) em: *%AppData%/Stride*

O Game Studio também salva informações sobre guias abertas e a posição da câmera do editor no arquivo `.sdpkg.user` no projeto (ex.: *~/MeuJogo/MeuJogo/MeuJogo.sdpkg.user)*.

Esses arquivos são pequenos, mas você pode querer excluí-los se o Game Studio não estiver funcionando. A exclusão deles não afeta nada no seu projeto.

Depois de excluir os arquivos de cache, quando iniciar o Game Studio, ele criará um novo cache usando as configurações padrão.

> [!Tip]
> Você também pode redefinir o layout do Game Studio sem limpar o cache em **Editar > Configurações > Interface > Redefinir o layout do Game Studio**.
> ![Redefinir o layout do Game Studio](media/game-studio-layout-reset-button.png)

## Veja também

* [Estrutura do projecto](project-structure.md)
* [Controle de versão](version-control.md)