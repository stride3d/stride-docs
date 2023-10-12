# Estrutura do projecto

Stride salva seus projetos como arquivos de solução [Visual Studio](https://msdn.microsoft.com/en-us/library/bb165951.aspx?f=255&MSPPError=-2147217396). Você pode abrir os projetos com Stride Game Studio ou qualquer IDE como Visual Studio.

Stride organiza arquivos de projeto em **packages**. Cada pacote compreende várias pastas e um arquivo *.sdpkg que descreve o pacote.

Um projeto pode conter um pacote ou vários. Você pode compartilhar pacotes entre projetos.

## Estrutura da pasta do pacote

![ Estrutura de base](media/folder-structure.png)

* **Ativos** contém os arquivos [asset](../game-studio/assets.md) que representam elementos no seu jogo.

* **Bin** contém os binários e dados compilados. Stride cria a pasta quando você constrói o projeto, com um subdiretório para cada plataforma.

* **MyGame.Game** contém o código fonte do seu jogo como um projeto Visual Studio multiplataforma (.csproj). Você pode adicionar vários projetos ao mesmo jogo.

* **MyGame.Platform** contém código adicional para as plataformas suportadas pelo seu projeto. Game Studio cria pastas para cada plataforma (por exemplo *MyPackage. Windows*, *MyPackage.Linux*, etc.). Essas pastas são geralmente pequenas e contêm apenas o ponto de entrada do programa.

* **obj** contém arquivos em cache. Game Studio cria esta pasta quando você construir seu projeto.

* **Recursos** é um local sugerido para arquivos como imagens e arquivos de áudio usados por seus ativos.

## Estrutura de projeto recomendada

Para conselhos sobre a melhor maneira de organizar seu projeto, consulte a página [Version control](version-control.md).

## Ver também

* [Controle de versão](version-control.md)
* [Distribuir um jogo](distribute-a-game.md)