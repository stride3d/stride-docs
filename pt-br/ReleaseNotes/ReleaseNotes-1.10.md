
# Notas de lançamento do Xenko 1.10

## Destaques

Xenko 1.10β melhora a estabilidade e o desempenho e introduz alterações na serialização de ativos.

### Desempenho da ferramenta

Esta versão vem repleta de várias melhorias de desempenho, especialmente no Game Studio e Asset Compiler.

Reescritamos como os ativos são carregados no editor de cena, resultando em um carregamento mais rápido e mais suave no fundo, bem como o uso de memória reduzido.

Fizemos várias melhorias no tempo de inicialização do Asset Compiler (importante desde que começamos vários compiladores de ativos para processar arquivos FBX). Também vários importadores-chave, como os importadores FBX, não estavam escalonando bem com muitos polígonos.

A embalagem do Pacote de Conteúdo (correr no final do Compilador de Ativos) agora pode funcionar de forma incremental. Antes, se você tinha vários gigabytes de dados, mas apenas mudou um pequeno ativo, a compilação foi rápida, mas salvar o novo pacote levou um longo tempo no final da compilação. Esta operação deve ser quase instantânea agora.

### GUID único dentro de um ativo

Embora não seja uma mudança de ruptura, introduzimos um novo paradigma em nossa infraestrutura de ativos, implicando que qualquer objeto _identifiável_ (ou seja, qualquer objeto que implemente a interface `IIdentifiable`) deve ter um identificador único no ativo que o contém.

Esta restrição torna mais fácil lidar com referências internas dentro de um ativo. Uma vez que não foi aplicada antes, **a primeira vez que você abre um projeto existente com a versão 1.10, você pode ver avisos afirmando que os identificadores de alguns objetos foram reescritos** (especialmente componentes de entidades e scripts). Isso é esperado e deve ser inofensivo. Os avisos não devem aparecer da próxima vez que abrir o projeto.

## Mudança

### Versão 1.10.0-beta

Data de lançamento 2017/3/9

#### Melhorias

##### Animação

* O ativo de animação aditiva foi removido. Os ativos de animação agora suportam clipes regulares e aditivos. Verifique a documentação de animação para detalhes
* Agora você pode especificar quadros de início e fim para clipes de animação. O framerate de animação pode ser alterado no ativo Configurações do jogo. Dados reais ainda são salvos e usados em segundos
* PlayingAnimations não é mais visível no tempo de design
* A API para o componente de animação mudou. Veja a documentação ou crie um script pré-construído do AnimationStart para um olhar rápido
* Várias correções de bugs

##### Geral

* A embalagem de conteúdo em pacotes agora é incremental em Debug e Release. Ele melhora drasticamente o tempo de iteração ao fazer pequenas mudanças, em seguida, reiniciando um jogo com muitos ou grandes ativos. A configuração do AppStore fará uma reconstrução completa
* A compilação de ativos deve ter melhor tempo de inicialização e ser mais rápido ao gerar subprocessos (usado pelo FBX)
* A importação de FBX para malhas com muitos triângulos foi extremamente lenta devido ao acesso não otimizado aos dados de borda
* Compilação de ativos FBX às vezes falharia porque o limite de dados no WCF era muito baixo
* Abertura desprevenida de conjuntos quando a construção de ativos
* Ativos (YAML) agora suporta strings multiline corretamente

##### Game Studio

* Nos editores Scene e Prefab, o carregamento de ativos é agora async, muito mais rápido e mais amigável à memória
* Agora você pode clicar com o botão direito do mouse em uma instância pré-fabricada e selecionar "Selecionar pré-fabricada na visualização de ativos"
* Navegação de teclado melhorada em vistas de árvores (por exemplo, explorador de soluções, hierarquia de cena): a seta esquerda vai para o nó pai, a seta direita vai para a primeira criança (quando em um nó)
* Os nós da árvore da entidade nos editores cena/prefab expandem automaticamente quando as crianças são adicionadas

##### Gráficos

* SetViewport melhorado (que tem uma contagem separada da contagem de destino de renderização)
* Adicionado SetScissorRectangle (note: viewport and scissors only work well for first viewport) [#521](https://github.com/SiliconStudio/xenko/issues/521)
* Vulkan: SwapChain compensação não estava passando camada de validação
* Em frente + luz culling não estava funcionando bem se a matriz de projeção estava fora do centro (ie VR)
* O conjunto RenderDocPlugin permite carregar automaticamente o RenderDoc e capturar o editor interno (usando a bandeira /RenderDoc) ou o jogo
* Iluminação de cluster não estava funcionando em OpenGL e OpenGL ES devido a `UpdateSubresource` para texturas 3D

##### Navegação

* Sobreposição de depuração dentro do Game Studio é agora ligeiramente transparente

##### Partes

* Construtor de forma API foi atualizada. Implementações personalizadas do construtor de forma têm de ser atualizadas em conformidade

#### Bugs corrigidos

##### Geral

* Os arrays C# "fixed" não funcionaram devido a alterações de IL
* Roteador de conexão às vezes não poderia reiniciar corretamente devido ao processo de criança adb mantendo a porta de processo pai aberta

##### Game Studio

* Ao importar um log de efeito, muitas vezes acabou no pacote errado. Agora é criado no pacote ativo atualmente
* Entrada de teclado muitas vezes ficou preso no Game Studio (especialmente irritante quando se move)
* Editor de script muitas vezes caiu na economia ou criação. Várias questões relacionadas corrigidas
* O cursor do mouse poderia desaparecer durante as operações de arrastar e soltar [#385](https://github.com/SiliconStudio/xenko/issues/385) e [#546](https://github.com/SiliconStudio/xenko/issues/546)
* Alterar o tipo de layout no editor UI poderia fazer Game Studio falhar [#547](https://github.com/SiliconStudio/xenko/issues/547)
* Corrigir vários problemas relacionados a pastas em Cena e editores Prefab (renaming, copy/paste, undo/redo)
* Corrigir um acidente raro com a área de transferência quando outra aplicação está usando-a
* Corrigir um acidente que poderia ocorrer ao remover um item de certos tipos de coleções
* Corrigir a entrada do nome do dispositivo do Windows (CON, NUL, COM1) como nomes de pasta

##### Activos

* Os ativos que contêm múltiplos objetos identificáveis com o mesmo `Id` agora passam por um passe de correção na carga para re-generar ids únicos
* Certifique-se de que geramos novos Ids para tais objetos após manipulações, tais como cópia / colar, duplicação, etc
* Quando uma propriedade de um ativo foi substituída (do arquétipo ou de um pré-fabricado) a um valor equivalente ao valor padrão da propriedade, a informação de substituição foi perdida após a recarga
* A deserialização de alguns tipos de um arquivo de ativos pode falhar devido à resolução de tipo e montagem imprópria
* As animações não importaria quando o esqueleto usado para a animação tinha ossos ausentes ou extras
* Alguns pares de compressão de textura que falharam antes agora tentar uma conversão de duas etapas para criar o formato de saída de destino
* O importador FBX agora ignora nomes de string vazios durante a importação de malha
* Vários problemas de acidente corrigidos no importador Assimp
* Fontes SDF e msdfgen foram atualizados para lidar com contornos sobrepostos

##### Gráficos

* O material não foi aplicado corretamente
* Renderização multi A informação de destino não foi mantida ao fazer renderização multithread com várias listas de comando
* A iluminação ambiente não atualizou após a última luz ambiente ter sido removida da cena
* Corrigir possível buraco de mapa de sombra entre cascatas, em ângulos de visão específicos ao usar a mistura

##### Navegação

* TryFindPath retornaria um caminho válido mesmo que o ponto de partida e fim não estivesse conectado

### Versão 1.10.1-beta

Data de lançamento 2017/3/13

#### Bugs corrigidos

##### Game Studio

* Corrigir um problema de confiança que poderia fazer o Game Studio falhar ao carregar ou atualizar ativos no Editor de cenas

### Versão 1.10.2-beta

Data de lançamento 2017/3/14

#### Bugs corrigidos

##### Game Studio

* Corrigir problemas adicionais de confiança que poderiam fazer o Game Studio falhar ao carregar ou atualizar ativos no Editor de cenas
