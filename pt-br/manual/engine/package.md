# Pacote

[! INCLUÍDO [stride-studio-note](../../includes/under-construction-note.md)]

Stride usa um sistema de pacotes, em que cada jogo está contido em um pacote; um jogo também pode usar conteúdo de outros pacotes. Assim, compartilhar recursos em vários jogos torna-se possível.

Um pacote é um recipiente para:

* Activos de jogo
* Bibliotecas de código
* Dependências

Uma dependência é uma referência de um pacote para outro pacote, o que permite que outro pacote use o conteúdo deste pacote. Quando um pacote é um jogo, ele também contém executáveis de código (uma por plataforma) juntamente com ativos de jogo, bibliotecas de código e dependências.

Os pacotes são salvos em seu disco rígido com a extensão ```.sdpkg```.