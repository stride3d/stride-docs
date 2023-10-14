# Notas de lançamento do Xenko 1.6

## Destaques

### Pré-fabricados

Prefabs permitem que você monte entidades em blocos de construção e facilmente reutilizá-los em qualquer uma das suas cenas. As mudanças nas suas pré-fabricadas serão refletidas em todas as instâncias (desde que as propriedades não sejam substituídas).

Nós até tomamos o conceito um passo além para capacitar nossos usuários, tendo prefabs dentro pré-fabricadas, bem como a possibilidade de usar apenas parte de uma pré-fabricada quando você instancia-lo. E, claro, remover ou reorganizar algumas entidades não quebrará sua sincronização pré-fabricada!

<img src="media/ReleaseNotes-1.6/prefabs.gif" align="center" />

### Arquétipos

Agora você pode usar qualquer ativo como um arquétipo para outro ativo. Quando você mudar uma propriedade do arquétipo, o novo valor será automaticamente propagado para todos os ativos derivados, a menos que você os substitua especificamente. Os arquétipos podem ser usados com a maioria dos tipos de ativos.

<img src="media/ReleaseNotes-1.6/assset-templating.gif" align="center" />

### Partes

Agora você pode criar e editar sistemas de partículas diretamente no Xenko Game Studio. As partículas são profundamente integradas no motor de jogo e aproveitam o poderoso sistema de efeito e seu alto nível de personalização.

Embora ainda haja vários recursos no roteiro, a implementação atual é suficiente para a maioria dos jogos. A capacidade de personalizar quase todos os aspectos do motor de partículas permite adicionar recursos adaptados às necessidades específicas do seu jogo.

<img src="media/ReleaseNotes-1.6/particle1.gif" align="center" />

Sinta-se livre para visitar nossa documentação [particle](../manual/particles/index.md).

#### Características

O motor de partículas suporta muitos recursos fora da caixa:

- Render partículas como formas diferentes como outdoors, quads 3D orientado ou sua própria implementação personalizada
- Campos de força poderosos que oferecem mais controle do que simples atratores e repulsores
- Colisões
- Atributos animados como tamanho, cor, rotação
- Flip livros, animação UV e suporte para o Xenko Shading Language
- Ribbons e trilhos renderizadores adicionados ao motor. Confira nosso [tutorial](../manual/particles/ribbons-and-trails.md) para mais detalhes.

#### Sistema modular

Todos os aspectos dos sistemas de partículas são divididos em módulos individuais, como spawners, inicializadores e atualizadores, e cada um desses módulos é facilmente adaptável e personalizável. Confira as amostras e a documentação do Xenko para um passeio detalhado.

#### Editor de Curve

O Game Studio agora também vem com um editor de curva embutido. Por enquanto, apenas o motor de partículas usa a animação da curva. No futuro, também irá alimentar nosso sistema de animação de propriedade e nosso sistema de storyboard.

<img src="media/ReleaseNotes-1.6/particle2.gif" align="center" />

### Novo motor de gráficos

A maior parte do nosso pipeline de gráficos, baixo, médio e alto nível, foi quase completamente reescrito, e deve estar pronto para o futuro.

A API de baixo nível foi alterada para se assemelhar mais de perto a DirectX 12 e Vulkan. Para uma lista de alterações de ruptura, consulte abaixo.

O pipeline de alto nível foi completamente retrabalhado, para alcançar os seguintes objetivos, a maioria dos quais vamos enfrentar nas próximas versões:

- Introduza uma arquitetura limpa e extensível para construir facilmente novos recursos gráficos em (chegando para em breve adicionar um renderizador Forward+, sondas de luz IBL, RLR, etc.)
- Nova camada de nível médio: RenderFeature leve, RenderStage, RenderObject, etc.
- Fácil para os usuários escrever pequenas personalizações (através da implementação RenderFeatures)
- Permitir multi-threading de todas as partes do pipeline
- Faça o uso ideal de APIs gráficas de última geração
- Reduza a quantidade de "mágica" feita pelo sistema de efeito para aumentar o desempenho
- Minimize o trabalho aproveitando melhor as diferentes frequências de atualização (PerView, PerMaterial, PerLighting, etc.)
- Aproveite a nova API (Suporte de primeira classe para Objetos de Estado Pipeline, Conjuntos de Descritores, etc.)

Fique atento para detalhes técnicos e avaliação de desempenho em um futuro próximo!

### Direct3D 12

Direct3D 12 foi adicionado como um novo alvo de compilação. Embora ainda experimental, ele já suporta todas as partes do nosso pipeline de renderização.

Você pode experimentá-lo alterando a ‘Plataforma de Gráficos Preferidas’ no ‘Configurações de Correção’ do seu ativo ‘Configurações de Jogo’.

### Melhor suporte ao OpenGL

Nosso renderizador OpenGL foi melhorado e deve se comportar muito melhor (sombras, PBR, etc.). Além disso, agora entregamos OpenGL e OpenGL ES no Windows como alvos de compilação.

Você também pode experimentá-los alterando a ‘Plataforma de Gráficos Preferidas’ no ‘Configurações de Correção’ do seu ativo ‘Configurações de Jogo’.

### Os scripts agora são componentes

Até agora, só pode haver um componente por tipo em uma Entidade. Isso foi bastante complicado, especialmente para scripts, que tinham que ser armazenados dentro da lista `ScriptComponent.Scripts`. Também resultou em muitos casos especiais para fazê-los trabalhar no editor (ou seja, referências entre scripts, recarregamento de montagem, etc.).

Agora vários componentes de um tipo são permitidos. Isso afeta scripts e componentes de física, e pode ser usado para componentes personalizados para os quais mais de uma instância é sensível.

Esperamos que isso facilite sua vida!


### Sistema de eventos

Adicionamos um sistema de eventos simples que permitirá que seu script se comunique facilmente uns com os outros.
Confira as classes `EventKey<>` e `EventReceiver<>`.
Você pode criar um Evento Chave de seus scripts de remetente e consumir eventos usando `EventReceiver` de outros scripts.

### Configurações do jogo substitui

O ativo Configurações de Jogo foi melhorado: Agora você pode ter configurações diferentes dependendo da plataforma ou GPU.

Por exemplo, você pode querer definir diferentes resoluções off-screen para o seu jogo no Android dependendo do modelo GPU. Ou você pode usar um dos nossos novos renderizadores Direct3D12, OpenGL ou OpenGL ES no Windows.

## Versão 1.6.7-beta

Data de lançamento: 2016/2009

### Melhorias

#### Game Studio
- Não espere pela inicialização do editor antes de mostrar a janela do editor. Isso deve evitar que os layouts do editor mudem repentinamente sem aviso prévio, especialmente quando abrem uma cena grande.
- Salve a lista de editores abertos mais frequentemente (a cada vez que um novo editor é aberto). Antes de ser salvo apenas quando editar o Game Studio corretamente e, portanto, a lista não seria salva quando um acidente ocorreu.

### Questões corrigidas

#### Gráficos
- D3D12: O sampler estático não definiu corretamente o func de comparação e a fronteira, resultando em mapas de sombra quebrados
- OpenGL ES: Formato de textura melhorado suporta dependendo da versão e extensão do OpenGL ES (esp. para textura flutuante em ES2)
- OpenGL ES: EXT_sRGB não parece funcionar corretamente no Adreno 4xx, mas como geralmente está disponível através do contexto ES3, usamos isso primeiro quando disponível
- OpenGL: O driver AMD GPU não gostou do fato de não haver #versão no shader Copy GLSL
- OpenGL: Mesmo que usemos SDL, o carregamento de imagem agora usa o mesmo código que WinForms/WPF (desde que o código de carregamento SDL_image ainda não seja implementado)

#### Activos
- A AssetCompiler era um conjunto de cache para que eles pudessem ser modificados durante a execução. Esse asset é útil apenas no desenvolvimento e estava fazendo algo mais lento e causando problemas de caminho muito longos, portanto, foi desativado para a instalação do usuário final ([#410](https://github.com/SiliconStudio/xenko/issues/410))

#### Motor
- Adicionado falta XenkoDefault O asset raiz da fonte no pacote padrão, isso faz o sistema profiler funcionar novamente fora da caixa.

#### Game Studio
- Corrigir um acidente que pode ocorrer ao carregar um projeto que contenha caminhos quebrados para arquivos de assets
- Impedir que o processo Game Studio continue funcionando quando um problema fatal ocorre durante o carregamento

#### Partes
- Correção de bugs onde duas ou mais entidades de crianças simultaneamente tentam atualizar a matriz de transformação da entidade-mãe.

## Versão 1.6.6-beta

Data de lançamento: 2016/05/27

### Melhorias

#### Game Studio

- Não force a abertura da cena padrão toda vez que o Game Studio é iniciado (exceto para o novo projeto). A cena padrão só será aberta se for o caso durante a última sessão (mesmo comportamento como qualquer outro editor).

### Questões corrigidas

#### Game Studio

- Corrigir um problema impedindo salvar o layout do editor quando o histórico de projetos atingir o tamanho máximo (atualmente 20 projetos).
- O modo Seleção de Materiais (que permite que você escolha um material clicando diretamente na área de malha) foi quebrado.

#### Motor

- Alterado como OpenGL ES esperado vs versão real é tratada; isso deve corrigir vários problemas relacionados com a criação de contexto no Android e também código direcionando OpenGL mais antigo deve ser mais consistente em todos os dispositivos.
- Houve alguns problemas para a eliminação de assets da GPU que podem ter levado a estado incorreto (pode corrigir alguns problemas ao fechar cenas no editor).
- Sombra Mapas em vários RenderViews não estavam funcionando corretamente (mesmo sombra mapa textura pode ser reutilizado, mas na verdade não foi).
- Melhorou o comportamento do motor quando os aplicativos móveis precisam lidar com várias orientações.

#### Partes

- Corrigido um problema em que o dimensionamento e rotação não uniformes nas entidades resultaram na rotação errada do sistema de partículas. Atualmente, apenas o dimensionamento uniforme é suportado.

## Versão 1.6.5-beta

Data de lançamento: 2016/05/17

### Melhorias

#### Game Studio

- Quando uma imagem é adicionada a uma folha de sprite, a região de textura é agora dimensionada para toda a imagem por padrão.
- A caixa de diálogo pedindo recarga de montagem só aparece quando o Game Studio tem foco.
- A caixa de diálogo pedindo para salvar script só aparece para um script criado de dentro do Game Studio.

### Questões corrigidas

#### Motor

- Corrigir parâmetro índice negativo de SpriteFromSheet. GetSprite jogando uma exceção. Índice negativo agora círculos em torno da coleção de sprites (por exemplo -1 retornar o último sprite).
- Se um componente de fundo foi ativado e, em seguida, desativado, ele ainda renderizaria.
- O estado do rasterizador MSAA foi ativado mesmo quando não necessário (com nível 0, por isso não afetou muito, exceto diferenças sutis nos testes de tesselação).
- Removeu um ThrowNotImplemented Exceção em OnSoundControllerListChanged, re-implementou a parte ausente.
- Feito não genérico EventKey e EventReceiver consumir bool em vez de byte
- Corrigir um possível acidente em Física Colher Composição de forma
- Fix culling de casters sombras quando nenhum receptor sombra está presente

#### Game Studio

- Corrigir problemas no cache do editor de sprite mantendo a versão antiga de imagens após o seu arquivo de origem ter sido alterado.
- Corrigir problemas na ferramenta editor sprite que tamanhou incorretamente a região de textura, fronteiras ou centro.
- Ao fechar o editor, houve uma NullReferenceException no Sistema Gizmo.
- Corrigir um acidente ao usar ativos de áudio e som.
- Corrigir um acidente ao tentar copiar o próprio relatório de acidente.
- Corrigir um acidente ao adicionar scripts a entidades

## Versão 1.6.4-beta

Data de lançamento: 2016/04/28

### Questões corrigidas

- Corrigir um problema no editor de rotação ao decompor a matriz de rotação em ângulos Euler.
- Algumas informações estavam faltando no novo relatório de acidente da GPU

## Versão 1.6.3-beta

Data de lançamento: 2016/04/27

### Melhorias

#### Game Studio

- Algumas manipulações com uma multi-seleção de entidades agora são mais rápidas.
- Melhorar miniaturas pré-fabricadas
- Exibir uma mensagem auxiliar no editor de curva sobre como adicionar um keyframe quando a curva está vazia
- Relatório de acidente melhorado para que tenhamos mais informações sobre exceções anteriores quando a GPU falha

#### Android

- Permitir comutação de orientação dinâmica do dispositivo (orientações desejadas devem ser selecionadas do Visual Studio)

#### iOS

- Permitir comutação de orientação dinâmica do dispositivo (orientações desejadas devem ser selecionadas do Visual Studio)
- Requisito mínimo de versão iOS de 6.0 a 7.0
- Fez algumas aulas internas públicas para permitir o controle fino do start-up do jogo, substituindo-as (experimental)

### Questões corrigidas

#### Game Studio

- Corrigir um problema no editor sprite impedindo editar corretamente quadros recém adicionados
- Corrigir um problema de cache no editor de sprite impedindo que a varinha mágica funcione corretamente depois de modificar uma imagem de origem externamente ([#389](https://github.com/SiliconStudio/xenko/issues/389))
- Corrigir um acidente que poderia ocorrer ao manipular os Materiais de um componente modelo no editor de cena
- Corrigir um acidente ao carregar projetos com componentes/assets relacionados a áudio
- Corrigir um acidente que pode ocorrer ao fechar um editor
- Corrigir um problema quando o compilador de ativos estava falhando, mas não retornando corretamente o erro. Como resultado, foi fácil correr em questão como executar o jogo uma vez e mantê-lo em segundo plano (arquivos de bloqueio), edição, e quando executá-lo novamente ele ainda usaria os ativos compilados mais antigos.
- Luzes e gizmo câmera foram impróprias escaladas

#### Renderização

- Câmera agora ignora escala quando a visualização da matriz de computação
- Tornado vários tipos públicos em vez de internos, para que o usuário possa facilmente estender o pipeline de renderização por si mesmo
- EffectValidator estava falhando em efeitos sem quaisquer valores de permutação ([#378](https://github.com/SiliconStudio/xenko/issues/378))
- Adicionado um proxy de depurador para o novo ParameterCollection
- Os parâmetros MSAA agora são devidamente encaminhados para a cadeia de swap principal. No entanto, é importante ressaltar que ainda não pode ser usado no Render Quadro até que os alvos MSAA sejam devidamente resolvidos.

#### Partes

- Corrigir um problema com partículas ignorando grupos de câmera ao renderizar ([#380](https://github.com/SiliconStudio/xenko/issues/380)).
- Corrigir um acidente quando a duração e o atraso de Spawner foram ambos 0 ([#384](https://github.com/SiliconStudio/xenko/issues/384)).

#### Android

- A Atividade não é mais destruída ao mudar a orientação do dispositivo

#### iOS

- Corrigido um problema de dependência de biblioteca nativa que impediu Xamarin Incremental construir para funcionar corretamente (Há ainda um possivelmente Xamarin lado bug impedindo que este asset para funcionar corretamente)
- O código IL personalizado do motor de animação não estava funcionando com o mais recente Xamarin AOT, agora está fixo

#### Scripts incorporados

- Script Fixed PlayerController para refletir alterações de componentes de física

## Versão 1.6.2-beta

Data de lançamento: 2016/04/04

### Questões corrigidas

#### Game Studio
- O editor Sprite não estava funcionando corretamente devido a uma regressão em 1.6.1-beta
- Árbitro de uma entidade dentro de seu próprio script estava quebrando o Game Studio
- Corrigir um problema de confiança que poderia fazer o Game Studio falhar ocasionalmente
- Dica de ferramenta sem texto foram exibidas acima de algumas propriedades

#### Gráficos

- Corrigir um problema potencial no código de iluminação

## Versão 1.6.1-beta

Data de lançamento: 2016/03/30

### Melhorias

#### Partes

- Ribbons e trilhos renderizadores adicionados ao motor. Confira nosso [tutorial](/manual/particles/particles-tutorials/particles-tutorials-ribbons/index.md) para mais detalhes.

#### Game Studio

- Adicione estatísticas sobre o uso de ativos no painel de referências.
- A edição de uma chave de corda (por exemplo, nome da chave de animação) pode ser feita em linha.
- Melhore o desempenho do editor de curvas.
- Para facilitar a edição de uma curva de computação vetorial no editor de curvas, outros componentes também são exibidos.
- Caixas de texto em grade de propriedade exibem seu conteúdo na ponta da ferramenta.
- Permitir ver a propriedade de um ativo enquanto ele está aberto em seu editor
- As amostras e novos jogos agora têm arquivos de assets em uma pasta "Assets" em vez de "RawAssets"

#### Física

- Adicionado o deslocamento de entidade adequada em CharacterComponent Teleport.
- Adicionado método utilitário terminado em Collision, para evitar escrever do / enquanto construtos.

### Questões corrigidas

#### Game Studio

- Corrigir vazamentos de memória acontecendo ao abrir e fechar o editor de cena repetidamente
- Corrigir acidente frequente na inicialização do GameStudio por causa de uma condição de corrida de thread ao configurar sistemas de arquivos
- Corrigir problema em vistas de árvores que às vezes selecionou o mesmo item mais que uma vez, resultando em exibição de propriedade incorreta na grade de propriedade.
- Corrigir problema com tamanho de janela maximizado no sistema multimonitor ([#361](https://github.com/SiliconStudio/xenko/issues/361))
- Corrigir o valor de redefinição de uma rotação na grade de propriedade.
- Corrigir salvar, desfazer e refazer não trabalhando no editor da curva quando a janela está no modo flutuante (já estava funcionando quando acoplado).
- Corrigir problema de zoom no editor de curvas.
- Corrigir partículas não sendo renderizadas em miniaturas e visualização de ativos.
- Corrigir shaders não sendo recarregados dinamicamente no arquivo de código shader salvar.
- Fix desaparecendo Física Gizmos
- Corrigir configurações em falta no NewGame
- Cor diferente restaurada para formas de colisão de gatilho no renderizador de depuração.
- Corrigir um acidente ocorrendo ao fechar uma cena ou editor prefab, ou fechar o próprio GameStudio
- Corrigir um problema ao modificar membros de estruturas na grade de propriedade
- Impedir que a rede de propriedade seja limpa quando mudar de uma seleção de ativos para uma seleção de entidades

#### Gráficos

- As estruturas podem agora ser usadas em shaders. Sombreadores de luz comutados para usá-los
- Melhorar ` EffectReflection` API
- Corrigir muitos problemas relacionados à comutação de tela cheia e o alt-enter agora é totalmente suportado.
- Corrigir a reflexão dos tipos de textura de array ([#369](https://github.com/SiliconStudio/xenko/issues/369))
- Adicionar método CommandList.SetBlendFactor() ausente

#### Motor

- Vários vazamentos de memória fixos
- Compilação de efeito remoto foi quebrado quando feito com outro computador o jogo foi construído com
- Notificação de efeito usado estava falhando quando os shaders estavam usando chaves de permutação personalizadas
- Fix Entity. Habilite todo o argumento ignorado, você agora pode usar este método corretamente.

#### Física

- Cilindro fixo Colher Problemas de forma com Scaling.

## Versão 1.6.0-beta

Data de lançamento: 2016/03/15

### Como atualizar

Basta abrir seus projetos mais antigos com a nova versão do GameStudio. Provavelmente não irá compilar suas assembléias desde que a API mudou pouco, mas você ainda pode continuar.

Então, salve seu projeto no GameStudio. Agora você pode abrir seu projeto com Visual Studio e tentar corrigir seu código de jogo com as últimas alterações de API.

### Melhorias

#### Activos

#### Motor

- O KeyedSorted Lista agora implementos ICollecção<T> em vez de IList<T> e é mais consistente com o CollectionDescriptor.

#### Game Studio

- Suporte para pré-fabs, adicione um editor prefab
- Criar ativos derivados e herança de propriedade de suporte
- Adicionado um editor de curva para editar a curva de animação
- Layout é salvo em uma base de solução. Ao recarregar um projeto, o Game Studio tentará apresentar o mesmo layout e reabrir todos os ativos que foram editados (isso inclui cenas, prefabs e folhas de sprite).
- Adicione uma caixa de diálogo de confirmação para permitir salvar script recém-criado automaticamente.
- Adicione uma caixa de diálogo de confirmação para ativar automaticamente a recarga de conjuntos modificados. Isso é necessário para que o script apareça na lista de componentes que podem ser adicionados a uma entidade.
- Os gizmos de física são mostrados por padrão.
- A visualização de um ativo pode ser exibida mesmo que este ativo esteja sendo editado.
- A pasta do projeto pode ser aberta no explorador do Windows do lançador com o botão direito do mouse.
- Propriedades de ativos derivados são exibidos em cinza, a menos que eles sejam substituídos. Neste caso, eles são exibidos em negrito.
- Inicialização da cena de retrabalho no editor da cena: a cena estará disponível quase imediatamente, e o conteúdo (modelo, etc.) será transmitido assim que estiverem (assíncrono) carregados.
- O assistente de correção da entidade foi removido. Agora, quando uma entidade é excluída, todas as referências a ela ou a um de seu componente são redefinidas para null.
- Os menus gizmo e câmera agora são exibidos no canto superior direito.
- A hierarquia da entidade é sincronizada (automáticamente expandida) com a entidade selecionada na cena.

#### Gráficos

- Novo renderizador D3D12 (experimental)
- Novos renderizadores OpenGL e OpenGL ES (experimental)
- Reescrever a maioria do código de gráficos de baixo e alto nível para ter melhor desempenho e aproveitar melhor novas APIs gráficas
- Renderização apropriadamente separada em 4 fases: Colete (colete & cull), Extrair (cópia de dados de cena para renderizadores), Prepare (prepare dados cbuffer & computações pesadas), Desenhe (emit draw calls)
- Conceitos introduzidos de RenderFeature (ponto de entrada para a extensão da renderização), RenderStage (eleção de efeitos), RenderView e RenderObject
- Render classificação lógica agora pode ser personalizado (culling será em breve também)
- API de baixo nível foi reescrita para combinar melhor nova API: CommandList, DescritorSet, DescritorHeap, PipelineState, etc.
- Conceito introduzido de RendererProcessor que são responsáveis por empurrar dados de componentes para renderização
- Muitas outras mudanças, que em breve serão cobertas pela documentação

#### Entrada

- Jogo melhorado Pad gerenciamento de eventos para se assemelhar à API do teclado.

### Questões corrigidas

#### Game Studio

- Corrigir scripts geração de miniatura durante o lançamento do projeto.
- Corrigir configurações janela compartilhando layout de colunas com grade de propriedade ([#341](https://github.com/SiliconStudio/xenko/issues/341)).
- Corrigir configurações IDE padrão incorretamente redefinir para null.
- Corrigir um acidente ocorrendo ao duplicar um objeto rapidamente após a seleção.
- Corrigir um problema com a caixa de mensagem incorretamente redimensionando.
- Dicas de ferramentas são sempre visíveis mesmo se o controle (menu, botão..) está desativado.
- Corrigir vários problemas com desfazer/refazer.
- Fix arrastar e soltar componentes em propriedades
- Às vezes, o Game Studio não estava pedindo para salvar quando fechado com algumas mudanças em um projeto.
- Corrigir alguns problemas relacionados a pastas no editor de cena.
- Redo não reabrir mais o selecionador de ativos.

#### Gráficos

- A geração de Tangents foi inválida e pode ter resultado em várias swaps

#### Física

- Melhor confiabilidade na detecção de colisão
- Grupos de filtro de colisão fixa
- Comportamento de componente fixo/desativado

### Alterações de ruptura

#### Gráficos

- Renderização prolongada é bastante diferente de antes. Por favor, verifique SpaceEscape e outras amostras para ter uma ideia melhor enquanto preparamos a documentação.
- Muitos métodos de GraphicsDevice foram divididos em uma segunda classe: Comando
- Objetos adicionados como PipelineState, DescritorSet e DescritorHeap para melhor combinar nova API gráfica
- O jogo agora contém um GraphicsContext que dá acesso ao atual CommandList
- GraphicsDevice.BackBuffer e GraphicsDevice.DepthStencilBuffer desapareceram. Use o GraphicsDevice.Presenter.BackBuffer para acessar o backbuffer real.
- Além do RenderContext, há agora um RenderDrawContext. Alguns métodos foram alterados para esperar este último.
- ParameterCollection foi reescrito para ser muito mais eficiente em memória e desempenho (os dados agora são armazenados diretamente em buffers).
- Transferência de valores da aplicação para shaders e computação de permutações de efeito usados para ser feito através de várias substituições ineficientes da ParameterCollection. Isso agora deve ser feito usando RenderFeatures.

#### Física

- Física Os componentes agora são divididos em 3 tipos diferentes (Rigidbody, Character, StaticCollider) que podem ser adicionados várias vezes em uma entidade.
- Física Os elementos agora são removidos, incluindo as classes Collider, Rigidbody e Character. Eles agora são fundidos nos novos componentes.

## Questões conhecidas
- Às vezes os contatos duplicados são detectados pelo motor de física
