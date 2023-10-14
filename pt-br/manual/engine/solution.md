# Solução

[!INCLUDE [stride-studio-note](../../includes/under-construction-note.md)]

No Stride Studio, o **Gerenciador de Soluções** exibe a hierarquia do seu jogo.

O conteúdo de cada pacote é agrupado em duas categorias: Pacotes locais e pacotes externos. Os pacotes locais são os que você criou. Pacotes externos são aqueles que você baixou da Internet, como o pacote padrão do Stride. Se você abrir um arquivo de pacote (```.sdpkg```), verá um único pacote da categoria de pacotes locais. Se você abrir um arquivo de solução (```.sln```) e a solução contiver mais de um pacote, você poderá ver vários pacotes.

Cada pacote contém os seguintes três elementos base:

* Assets: O elemento assets inclui todos os recursos contidos em um pacote. Você pode expandir o elemento Assets para visualizar a mesma hierarquia dos assets que está no sistema de arquivos. Quando você seleciona a pasta **Assets**, o **Visualizador de Assets** exibe os items contidos nesta pasta.

* Código: O elemento de código contém as bibliotecas de código e executáveis no pacote. Cada um deles corresponde a um único arquivo ```.csproj```. Ao clicar com o botão direito em um executável, você pode defini-lo como projeto atual. Essa ação permite que você compile os recursos para a plataforma relacionada e inicie o jogo.

* Dependências: O elemento de dependências lista todos os outros pacotes que são referenciados por um pacote. Os pacotes na lista **Dependencies** têm seus assets acessíveis a este pacote.

> [!Note]
> Você pode alterar a hierarquia no **Gerenciador de Soluções** criando pastas e renomeando ou excluindo objetos.

O Stride utiliza arquivos de solução do Visual Studio para listar todos os pacotes e projetos de código relacionados a um jogo. Assim, você pode integrar facilmente o Stride Studio e o Visual Studio em seu projeto, porque eles utilizam o mesmo arquivo raiz. Por padrão, o Stride Studio cria um novo arquivo de solução quando você cria um novo projeto e gerencia as referências a projetos em C# e pacotes.