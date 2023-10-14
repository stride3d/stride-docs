# Pacote

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

O Stride utiliza um sistema de pacotes, no qual cada jogo é contido em um pacote; um jogo também pode usar conteúdo de outros pacotes. Isso permite o compartilhamento de recursos entre vários jogos.

Um pacote é um recipiente para:

* Assets do jogo
* Bibliotecas de código
* Dependências

Uma dependência é uma referência de um pacote para outro, o que permite que o outro pacote utilize o conteúdo deste. Quando um pacote é um jogo, ele também contém executáveis de código (um por plataforma) juntamente com os assets do jogo, bibliotecas de código e dependências.

Os pacotes são salvos em seu disco rígido com a extensão ```.sdpkg```.