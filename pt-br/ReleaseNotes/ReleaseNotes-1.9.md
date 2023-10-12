# Notas de versão beta do Xenko 1.9

## Destaques

Xenko 1.9 A Beta apresenta vários novos recursos importantes, juntamente com vários aprimoramentos relevantes para recursos existentes.

Estamos animados para oferecer três novos modelos de jogo para acelerar o seu tempo de design de jogo, um novo editor de script, bem como funcionalidade de cópia-paste expandida.

O último grande novo recurso é o nosso novo sistema de malha de navegação.

### Modelos de jogo

Nós adicionamos vários modelos embalados com muita funcionalidade para ajudá-lo a iniciar seus jogos. Escolha entre:

* Primeira pessoa Shooter
* Plataforma de terceira pessoa
* RPG de topo

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/game_templates.jpg">
   <source src="media/ReleaseNotes-1.9/game_templates.mp4" type="video/mp4">
</video>

Todos eles vêm com câmera básica e funcionalidade de jogador encontrados na maioria dos jogos de seus respectivos gêneros. Eles também têm muitos ativos de qualidade de produção para que você possa facilmente experimentar diferentes recursos por conta própria.

Além dos modelos de jogo, o projeto **New Game** agora inclui pacotes opcionais com todos os ativos que usamos para construir as amostras. Ao contrário dos modelos de jogo que são aparados, os pacotes opcionais incluem TODOS os ativos, incluindo alguns que não são usados por qualquer amostra Xenko.

### Editor de texto

Para facilitar o atrito de mudar para trás e para a frente entre o Game Studio e seu IDE, construímos um novo Editor de Script.  Baseando-se totalmente no Visual Studio não é mais necessário porque agora você pode editar seu código diretamente dentro do próprio Game Studio. Você terá destaque de sintaxe completa, auto-compleção, diagnósticos ao vivo e até mesmo a capacidade de recarregar automaticamente arquivos C# e projetos que mudaram em seu disco rígido devido a alterações em seu editor externo (por exemplo, Visual Studio).

Na verdade, espere:
* Destaque, auto-compleção e diagnósticos ao vivo está disponível na API Xenko, seu próprio código de jogo e bibliotecas que você usa
* Recarregar automaticamente scripts C# e alterações de projeto C# que aconteceram em segundo plano
* Um Visual Studio como experiência para toda a sua edição de código!

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/code_completion.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/code_completion.mp4" type="video/mp4">
</video>

Tivemos alguma ajuda do compilador .NET da Microsoft, [Roslyn](https://github.com/dotnet/roslyn), então os usuários do Xenko também receberão o benefício completo de todas as funcionalidades mais recentes do .NET. Adicionar um Editor de Script baseado em Rosyln torna mais fácil manter-se com as atualizações C# mais recentes.

Usar o Xenko Script Editor é bastante simples. Basta seguir estes passos:

* Criar um novo projeto/jogo no Game Studio
* Adicionar um script no Game Studio
* Editar o script no Game Studio

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/create_script_gamestudio.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/create_script_gamestudio.mp4" type="video/mp4">
</video>

Scripts C# salvos no lado do Visual Studio (ou qualquer editor de texto, para esse assunto) será automaticamente atualizado no Game Studio sem recarregar. O mesmo vale para as mudanças do projeto (.csproj): novos scripts aparecerão automaticamente ao salvar. GameStudio irá automaticamente ouvir alterações de arquivo no disco rígido e atualizá-los ao vivo, ou perguntar-lhe o que fazer em caso de conflitos.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/external_changes.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/external_changes.mp4" type="video/mp4">
</video>

Sob o capô, [Rosyln](https://github.com/dotnet/roslyn) é a tecnologia subjacente que pode processar seu código fonte Xenko. Mas nós não paramos lá! Tivemos sorte em encontrar [AvalonEdit](http://avalonedit.net/), o que nos forneceu o que que queríamos para a aparência visual do aspecto UI do editor de script Xenko. Também [RoslynPad](https://roslynpad.net/), que conecta Roslyn e AvalonEdit juntos.

### Malhas de navegação

Em Xenko 1.9β, você pode criar um **navigation mesh** alimentado por [Recast e Detour](https://github.com/recastnavigation/recastnavigation) com ** real-time feedback** diretamente no **Xenko GameStudio!** A malha de navegação é especialmente útil para RPGs ou jogos de estratégia de cima para baixo, pois você pode usá-lo para caracteres de guia ** através de cenas complexas**. O feedback em tempo real torna mais fácil ajustar e convenientemente personalizar o movimento AI e as dimensões da própria malha de navegação. O contorno verde da malha de navegação de Xenko mostra onde a IA entra em jogo e onde os colisões são definidos.


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/navmeshes/withOutlineAE.jpg">
   <source src="media/ReleaseNotes-1.9/navmeshes/withOutlineAE.mp4" type="video/mp4">
</video>

Nos vídeos, você pode ver como a AI navega no nível usando a lógica dentro da malha de navegação e como os colisões serão automaticamente definidos em tempo real. Claro, você pode script AI movimento manualmente, também.


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/navmeshes/NoOutlineAE.jpg">
   <source src="media/ReleaseNotes-1.9/navmeshes/NoOutlineAE.mp4" type="video/mp4">
</video>

### Função de cópia e pasta Expansão

No passado só suportamos cópia e colar de ativos, mas agora você pode **copy-paste praticamente qualquer coisa** no Game Studio.

Quaisquer entidades em uma cena agora são copiáveis, bem como quaisquer sprites de uma folha de sprite, elementos de interface do usuário, ou até mesmo uma única propriedade na grade da propriedade! Por exemplo, você pode copiar uma lista e executar qualquer uma das seguintes operações.

* Insira-o em outra lista em várias posições, por exemplo:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_InsertIntoList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_InsertIntoList.mp4" type="video/mp4">
</video>

* Copie e insira na lista (passando em um nível de item de lista). *


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_AppendToList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_AppendToList.mp4" type="video/mp4">
</video>

* Copie e acrescente a uma lista, por exemplo, anexá-la ao final da lista.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceList.mp4" type="video/mp4">
</video>

* Copie e substitua toda a lista.

Um pouco mais difícil de explicar, mas talvez mais fácil de mostrar do que escrever sobre é **copy e substituir em um nível de item**. Esta ação (mostrada no vídeo abaixo) irá remover o item (na sua posição na lista) e inserir os copiados começando na mesma posição do item na lista. Em nosso exemplo abaixo, a cópia substituir começa a partir do item 2 na Lista 2:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceIntoList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceIntoList.mp4" type="video/mp4">
</video>


Algumas informações sobre copiar entidades e pré-fabricados:

** Uma hierarquia inteira de entidades pode ser copiada de uma cena ou prefab para outra cena ou pré-fab**. A instância prefab manterá sua referência ao prefab de origem como ilustrado no seguinte exemplo:


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/CopyPaste_BetweenScenes2.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/CopyPaste_BetweenScenes2.mp4" type="video/mp4">
</video>

*O pré-fabricado “MyHero” é copiado para a cena. Links para a pré-fabricada são mantidos.*


Também é possível **copiar um componente de uma entidade e colá-lo em outra entidade**.


** Qualquer propriedade que possa ser serializada pode ser copiada**. Você pode copiar algo de uma cena para outra cena, de um subelemento em uma cena para outra cena e até mesmo de uma cena para um arquivo de texto, para trás e para a frente, conforme necessário. Você também pode copiar valores simples na grade de propriedade (por exemplo, primitivos como int, vector3, string..) entre instâncias separadas Game Studio se isso é algo que você encontra prático e útil.


Aqui está um exemplo de copiar entre scripts e transformar entidades no GameStudio Property Grid:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/CopyPaste_PropertyGrid.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/CopyPaste_PropertyGrid.mp4" type="video/mp4">
</video>

### . Padrão de NET

Começando com Xenko 1.9, conjuntos de jogos compartilhados serão criados usando [.NET Standard](https://docs.microsoft.com/en-us/dotnet/articles/standard/library) em vez de PCL.

Ele oferece [ muitas vantagens](https://blogs.msdn.microsoft.com/dotnet/2016/09/26/introducing-net-standard/): superfície API muito melhor para o desenvolvedor, melhor compatibilidade para a frente e para trás, fragmentação reduzida, modularidade mais fina do framework, mais fácil de escrever aplicativos multi-plataforma, atualizações mais frequentes, etc.

As aplicações recém-criadas visam o .NET Standard 1.4, mas os usuários são naturalmente livres para segmentar uma versão diferente. Além disso, seus projetos PCL existentes ainda funcionarão como é, mas recomendamos que você atualize seus projetos para . NET Standard!

### Recarga de montagem

Iterar no código é muito importante. Até agora, Xenko estava apoiando mudanças nos scripts: assim que você salvou qualquer arquivo C#, Game Studio estava oferecendo para recarregar o conjunto com os scripts atualizados. Se houver um erro carregando o tipo, você ainda pode editar outra parte do ativo, salvá-lo de volta, preservando as partes que não poderiam ser carregadas.

Nesta versão, generalizamos a abordagem para que qualquer tipo incorporado em seus ativos possa ser recarregado! Como resultado, você agora pode implementar suas próprias aulas para qualquer coisa que você quer diretamente em seu jogo ou plugin assemblies, e continuar editando-os sem reiniciar o Game Studio.

Isso inclui renderizadores, características materiais e em breve será amplamente utilizado em novos ativos.

## Alterações de ruptura

### Windows Phone e Windows Store Remover

As plataformas Windows Phone e Windows Store são removidas.
Por favor, use o mais recente `Universal Windows Apps (UWP)` em vez disso. Esta plataforma foi anteriormente conhecida como `Windows 10`.
Os projetos serão atualizados automaticamente para refletir essa mudança.

Além disso, renomeamos a definição de pré-processador `SILICONSTUDIO_PLATFORM_WINDOWS_RUNTIME` em `SILICONSTUDIO_PLATFORM_UWP`.

### . Padrão de NET

O interruptor para . NET Standard para projetos recém-criados implica que:

* O requisito de framework Runtime .NET ao distribuir seus projetos é colhido de .NET 4.5 para .NET 4.6.1.
* Você precisa do Visual Studio 2015 para abrir e compilar projetos recém-criados
* Você pode atualizar projetos mais antigos para usar . NET Standard usando Visual Studio 2015 Update 3 (em propriedades do projeto)
* A partir da versão 1.9, já não instalamos pré-requisitos para compilar projetos PCL. Se você tem alguém em sua equipe ainda trabalhando em um projeto criado com uma versão anterior de Xenko em um PC fresco, faça com que eles instalem Xenko 1.8 para que ele instale os pré-requisitos adequados (mesmo que o projeto tenha sido atualizado para uma versão mais recente do Xenko).


### Serialização de ativos

Nós mudamos como serializamos o ativo em YAML. Introduzimos novos conceitos que melhoram a forma como podemos rastrear sobreposições entre um arquétipo ou uma prefab e ativos/entidades herdadas dele. Embora tudo aconteça "sob o capô", esta é uma mudança realmente pesada que pode afetar a atualização do seu projeto.

Removemos a atualização de ativos para projetos feitos com a versão 1.3 e abaixo (lançado há mais de um ano). É possível que você experimente alguns problemas ao atualizar um projeto feito com versões 1.4 a 1.7, mas você deve ser capaz de atualizar qualquer projeto que use a versão 1.8. No entanto, alguns casos não são suportados:
* Propriedades de dependência de elementos de interface do usuário que são substituídos de uma biblioteca de interface do usuário será redefinido durante a atualização. Portanto, propriedades como a coluna de grade e a linha terão de ser restauradas manualmente.
* Algum caso de materiais sobrepostos na lista de materiais do ModelComponent pode ser incorretamente atualizado.

### Suporte de Dropping para Windows Store 8.1 e Windows Phone 8.1

Para apoiar corretamente o .NET Standard 1.4 e oferecer aos nossos desenvolvedores uma API mais atualizada e robusta, decidimos deixar o suporte para as plataformas Windows Store 8.1 e Windows Phone 8.1.

Como a Microsoft parece estar focando na Plataforma Universal do Windows (UWP), também decidimos que era melhor focar em plataformas mais pertinentes e relevantes para os usuários do Xenko. UWP foi introduzido com o Windows 10, e toda uma gama de dispositivos já o suportam.

Claro, você está livre para ficar com Xenko 1.8 no caso de você ter um projeto que visa uma dessas duas plataformas - sabemos que esta é uma grande mudança, e vamos fazer todo esforço para ajudar nossos desenvolvedores com esta transição. Pedimos desculpas pelo inconveniente, e visamos trazer-lhe uma experiência de usuário .NET de alto nível!

Assim como um lembrete, já apoiamos a Plataforma Universal do Windows (UWP) em x86, x64 e ARM como de Xenko 1.8, o que significa que jogos e aplicativos desenvolvidos com Xenko podem ser implantados em toda uma gama de dispositivos da Microsoft, incluindo [Xbox One](https://msdn.microsoft.com/en-us/windows/uwp/xbox-apps/index). Até 1.9, esta plataforma foi nomeada Windows10 em Xenko, mas tomamos a liberdade de renomeá-la UWP para melhor corresponder ao nome oficial.

## Mudança

### Versão 1.9.0-beta

Data de lançamento 2016/11/24

#### Melhorias

##### Geral

* A partir de agora, novos projetos são criados como . NET Projetos padrão em vez de projetos PCL.
* `NuGet restore` é executado automaticamente em projetos com um arquivo `project.json`
* Bumped FBX SDK para 2017.0.1
* A importação de malha agora suporta o alisamento *ByEdge* que foi anteriormente ignorado. Se você notar qualquer diferença com o vértice normal para seus modelos, verifique suas configurações de exportação FBX.
* O instalador pré-requisitos solicitará UAC uma vez em vez de muitas vezes, e realizará uma instalação silenciosa para todos os pré-requisitos.

##### Game Studio

* Anteriormente, quando um `EntityComponent` (ou seja, script) não poderia ser carregado porque o jogo ou o conjunto do plugin não compilaram corretamente, mantivemos uma representação Yaml dele para que ele pudesse ser salvo ou recarregado após uma correção de código. Agora permitimos que isso aconteça em qualquer lugar, para que você possa usar e/ou implementar classes personalizadas para qualquer tipo do motor em seu jogo/plugin.
* Melhore os logs de ativos e erros para exibir corretamente o ícone de falha / aviso em todos os ativos, incluindo aquele com miniaturas de estilo de ícone.
* Melhore o carregamento/refresamento de ativos no editor de cena.
* Os editores de ativos exibirão um * no nome da guia quando um ativo estiver sujo.
* Adicionar editor para código fonte C#.
* Arquivos C# e arquivos .csproj são automaticamente recarregados como eles são modificados no disco rígido (usando um Sim, Sim para Todos, Não, Não para Todos diálogo).
* Arquivos C# têm sua própria pilha de desfazer/refazer
* Adicionar um Salvar Todo o botão que salva ambos os ativos e arquivos de código fonte.
* O Game Studio agora usa _AvalonDock_ como sistema de ancoragem
* Melhorar o suporte DPI ([#454](https://github.com/SiliconStudio/xenko/issues/454) e [#470](https://github.com/SiliconStudio/xenko/issues/470))

##### Activos

* A serialização do ativo YAML foi alterada para lidar com sobreposições na coleção de uma forma melhor. Mais cenário de sobreposições agora são suportados.
* `SharpYaml` foi integrado em nossa base de código como `SiliconStudio.Core.Yaml`. A maioria dos tipos duplicados foram fundidos no `SiliconStudio.Core.Reflection`.
* Os ativos não usam uma seção ~Base nem um ~BasePart.
* Alterar `Aset.Id` para ser de um tipo `AssetId` em vez de `Guid`, para evitar comparações inválidas com outro tipo de ids.
* Remova o membro `Properties` do Pacote.
* Introduza um novo conjunto de ativos. Quantum
* As sobreposições de propriedades agora são tratadas usando _Quantum_ em vez de `ShadowObject`.
* Remova as classes diff/merge de ativos.

##### Motor

* Os DataSerializers agora são gerados em um arquivo com informações .pdb, para que o usuário possa depurá-los.
* Adicionar deslocamentos locais a modelos processuais.
* `EntityComponent` agora implementa `IIdentifiable` e possui uma propriedade `Id`.

##### Áudio

* Adicionar `SetRange` suporte a `AudioEmitterSoundController`
* Melhorar a velocidade de compilação de arquivos de áudio

##### Materiais

* Mapas normais agora têm a opção de `Invert Y`, suportando ambas as texturas onde o componente verde está virado para cima ou para baixo

##### Partes

* Otimizações menores em torno do edifício do amortecedor de vértice
* Adicionar método StopEmitters() ao sistema de partículas, o que impede que novas partículas desova sem pausar todo o sistema

##### Física

* Adicione Cone collider forma.
* Substituir flutuador com `AngleSingle` para `MaxSlope` de controladores de caracteres.

#### Questões corrigidas

##### Geral

* A plataforma UWP agora usa o UniversalWindowsPlatform 5.2.2 (era anteriormente 5.0.0).

##### Game Studio

* Corrigir muitos problemas com substituições de propriedade.
* Corrigir muitos problemas ao definir / substituir materiais no ModelComponent.
* Os registros de ativos não foram enviados corretamente para o editor, resultando em um log vazio para todos os ativos.
* Às vezes houve um deadlock ao compilar efeitos devido à forma como estávamos usando o pool de threads e continuações de tarefa.
* Corrigir problema de desempenho que pode ocorrer quando duplicar entidades com o mesmo nome muitas vezes.
* Corrigir a entrada do menu "Renomear" ao clicar com o botão direito em uma pasta do editor de cena.
* Corrigir falhas no editor de interface do usuário que podem ocorrer ao excluir ou mover um elemento.
* Corrigir falhas no editor de folhas de sprite que podem ocorrer ao excluir, duplicar ou mover sprites.
* Corrigir a ordem de tipo de ativos na vista de ativos.

##### Activos

* Corrigir tangentes de malhas importadas, quando as transformações são negativas ao longo de alguns eixos

##### Motor

* Várias questões com luzes exatas foram corrigidas, incluindo mapas de sombra
* Corrigir cintilação de alguns materiais quando nenhuma luz ambiente está presente
* Corrigir um problema no OpenGL que causou baixas taxas de quadros ao usar efeitos postais, devido ao bloqueio de GPU-readback

##### Animação

* Corrigir um bug onde um clipe de animação vazio causou um acidente


### Versão 1.9.1-beta

Data de lançamento 2016/11/29

#### Questões corrigidas

#### Game Studio

* Mover ou renomear um ativo que tenha propriedades sobrepostas (por exemplo, uma cena usando prefabs) estava saqueando informações sobrepostas uma vez salvas.

##### Motor

* Número normal de mapas fixos onde z-componente foi presumido erradamente para ser 1 (é agora igual a sqrt(1 - x^2 - y^2))
* Profundidade de halo de campo em torno de objetos de primeiro plano questão resolvido

##### Amostras

* Mapas normais perdidos em algumas amostras foram restaurados


### Versão 1.9.2-beta

Data de lançamento 2016/12/13

#### Melhorias

##### Game Studio

* Manter a chave ALT para baixo quando deixar um pré-fabricado em uma cena não criará uma entidade recipiente para a instância pré-fabricada.
* A criação de prefabs de entidades que já são instâncias de outras pré-fabricas e contém propriedades sobrepostas manterá links pré-fabricados e substituições no pré-fabricado recém-criado.

#### Questões corrigidas

##### Game Studio

* Duplicar uma entidade ligada a um pré-fabricado não foi manter o link pré-fabricado para a cópia em alguns cenários.
* Adicionar um pacote novo ou existente a uma solução estava causando um acidente.
* Corrigir hashing de arquivos de origem para detectar se um arquivo de origem mudou.
* Adicionar um componente que requer unicidade a um pré-fabricado quando uma das instâncias já teve uma instância desta pré-fabricada estava quebrando.
* Corrigir um acidente que poderia ocorrer ao remover uma animação ou um som de um Componente de Animação ou um Componente de emissor de áudio enquanto o Game Studio ainda estava compilando o ativo.
* As fases do render agora são devidamente reavaliadas quando uma propriedade que afeta a renderização é modificada (por exemplo, sombras de fundição, adicionando transparência a um material...)
* Corrigir a posição de inserção ao soltar vários ativos em uma cena ao mesmo tempo
* Corrigir abrir uma cena de um projeto de pacote que não é um jogo estava caindo.
* Corrigir um acidente que estava ocorrendo ao adicionar um novo Override no ativo GameSettings
* Corrigir um problema ao copiar / colar um componente que requer unicidade a uma entidade que já tem um. Agora o usuário será solicitado corretamente se este componente deve ser substituído pela cópia.
* Corrigir lista de filtros incorreta de tipos de ativos na visualização de ativos.

##### Motor

* Corrigir um problema no código detectando quando um segundo componente do mesmo tipo é adicionado a uma entidade que deve aceitar apenas um componente desse tipo.
* Holofotes com sombras correção de bugs onde vários holofotes referenciaria o sabonete errado.
* Mapas normais nomes de propriedade alterados e alguns sombreador trava fixo.
* Corrigir mapas normais comprimidos com diferentes significâncias em diferentes plataformas; eles agora são sempre não assinados
* Fixação Z componente de mapas normais quando Scale & Offset está habilitado
* Corrigir valores de NaN no mapeamento normal que causou falhas nos efeitos pós
* Corrigir computação da faixa de mapas sombra que fez com que partes da cena não fossem iluminadas
* Combinação em cascata de sombra reativa quando a computação automática da faixa de profundidade é ativada e reduz a região da mistura
* Corrigir IL inválido que impediu a construção de aplicativos UWP no modo de lançamento


### Versão 1.9.3-beta

Data de lançamento 2017/1/11

#### Melhoria

#### Game Studio

* Manter a chave ALT para baixo ao mover uma entidade para um pai diferente agora manterá sua posição absoluta / orientação / escala
* Exibir a versão atual do Xenko na janela Seleção de Projetos
* Adicionar mais mensagens de registro ao criar um novo projeto
* Melhore a apresentação do cabeçalho da guia, permita ver todos os editores abertos ao mesmo tempo

##### Motor

* Animação: O UpdateEngine (usado pelo sistema de animação para atualizar valores) irá pular os valores de atualização se o alvo for um array ou lista (ou seja, lista de ossos) cujo tamanho não é grande o suficiente. Isso estava anteriormente levando à corrupção da memória.

#### Questões corrigidas

##### Game Studio

* Corrigir problemas com propriedades de coleta na grade da propriedade.
* Corrigir um problema em que os fundos da miniatura ficam escuros quando em Gamma rendering pipeline.
* Corrigir alguns casos quebrados ao limpar o arquétipo de um ativo
* Corrigir um acidente ao soltar um objeto no viewport
* Corrigir muitas falhas e problemas que ocorrem ao mover ou duplicar entidades e pastas na árvore de entidade de uma cena ou uma pré-fabricada
* Corrigir alguns problemas com a seleção de entidades
* Corrigir problemas com algum painel do editor não sendo visível enquanto eles foram verificados como visíveis no menu Ver
* Impedir TreeViews para alterar a posição de rolagem ao selecionar um item se eles foram rolados para outra posição enquanto eles não tinham o foco
* Corrigir propriedades que foram todas acinzentadas ao selecionar vários objetos.
* Corrigir um caso em que os ativos de script não abririam no editor de texto externo.

##### Partes

* Corrigir um bug onde as definições de Edge e Center para renderizador de forma de trilha foram trocadas
* Corrigir um bug onde nenhum material de partícula ainda exibe cor

##### Física

* Corrigir caixas 2D formas colisões.
* Corrigir o desenho das formas de depuração de caracteres no tempo de execução.
* Atirando se a massa é negativa.
* Corrigido um problema com escalas e formas únicas de colisão

##### Áudio

* Fix XAudio áudio clipping quando os sons não foram looped.
* Corrigir OpenSLES jogo múltiplo de som não looped.

#### Melhorias

##### Game Studio

* Mapas normais e texturas Grayscale agora aparecerão como texturas de 3 canais nas miniaturas e na visualização.

##### Roteador de conexão

* Devido à forma como o adb estava gerando um processo de daemon, a porta do roteador de conexão foi bloqueada devido à herabilidade do identificador de soquete. Isto agora está devidamente desactivado.

## Questões conhecidas

* No Linux, ao alternar a plataforma gráfica subjacente, a renderização não ocorrerá ou falhará. Excluir o cache, local e roaming pasta no host Linux e reiniciar o jogo deve corrigir o problema.
* Problemas de desempenho em dispositivos móveis (ser trabalhado)
* No iOS se ` Habilitar compilações específicas do dispositivo` é alternado (a partir das propriedades do projeto) não será possível depurar o código do jogo. Selecione manualmente a arquitetura do seu dispositivo a partir da guia Avançada para acelerar o seu desenvolvimento.
