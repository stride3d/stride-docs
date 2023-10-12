# Solução

[! INCLUÍDO [stride-studio-note](../../includes/under-construction-note.md)]

No Stride Studio, o **Solution Explorer** exibe a hierarquia do seu jogo.

O conteúdo de cada pacote é agrupado em duas categorias: Pacotes locais e pacotes externos. Os pacotes locais são os que você criou. Pacotes externos são aqueles que você baixou da Internet; por exemplo, o pacote padrão Stride. Se você abrir um arquivo de pacote (```.sdpkg```), um único pacote da categoria de pacote local é visível. Se você abrir um arquivo de solução (```.sln```) e a solução contém mais que um pacote, você pode ver vários pacotes.

Cada pacote contém os seguintes três elementos base:

* Ativos: O elemento de ativos compreende todos os ativos contidos em um pacote. Você pode expandir o elemento Ativos para ver a mesma hierarquia entre os ativos que está no sistema de arquivos. Quando você seleciona a pasta **Assets**, a **Asset View** exibe os ativos contidos nesta pasta.

* Código: O elemento de código contém as bibliotecas de código e executáveis no pacote. Cada um deles corresponde a um único arquivo ```.csproj```. Ao clicar com o botão direito do mouse em um executável, você pode configurá-lo como o projeto atual. Esta ação permite compilar os ativos para a plataforma relacionada e lançar o jogo.

* Dependências: O elemento de dependências lista todos os outros pacotes que são referenciados por um pacote. Os pacotes na lista **Dependencies** possuem seus ativos acessíveis a este pacote.

> [!Note]
> Você pode alterar a hierarquia no **Solution Explorer** criando pastas e renomeando ou apagando objetos.

Stride usa arquivos de solução Visual Studio para listar todos os pacotes e projeto de código relacionados a um jogo. Assim, você pode facilmente integrar Stride Studio e Visual Studio para o seu projeto porque eles usam o mesmo arquivo raiz. Por padrão, o Stride Studio cria um novo arquivo de solução quando você cria um novo projeto e gerencia referências a projetos e pacotes C#.