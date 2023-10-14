# Pacote

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

O Stride utiliza um sistema de pacotes, onde cada jogo está contido e pode também usar conteúdo de outros pacotes. Isso permite o compartilhamento de assets entre vários jogos.

Um pacote é um recipiente para:

* Activos de jogo
* Bibliotecas de código
* Dependências

Uma dependência é uma referência de um pacote para outro pacote, o que permite que outro pacote utilize o conteúdo deste pacote. Quando um pacote é um jogo, ele também contém executáveis de código (um por plataforma), juntamente com ativos de jogo, bibliotecas de código e dependências.

Os pacotes são salvos em seu disco rígido com a extensão ```.sdpkg```.