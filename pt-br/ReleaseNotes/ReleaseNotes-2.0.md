# Notas de versão do Xenko 2.0

## Destaques

### Hierarquia de cena e streaming de cena

Trabalhar com cenas tornou-se mais flexível. Em vez de uma única cena, seu jogo agora pode usar uma hierarquia de cenas para organizar entidades em níveis, áreas ou camadas, e deixar as equipes colaborar sobre eles de forma mais eficiente.

Game Studio exibe cenas de crianças junto com seus pais. As cenas individuais podem ser carregadas, descarregadas, bloqueadas e movimentadas.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/scene_editor_640.jpg">
   <source src="media/ReleaseNotes-2.0/scene_editor_640.mp4" type="video/mp4">
</video>

Ao executar seu jogo, a cena **default** definida em suas configurações **game** é carregada como a cena **root** e pode ser usada para armazenar entidades persistentes. Mais cenas podem ser carregadas dinamicamente e descarregadas de scripts e adicionadas como cenas **child**.

```cs
var childScene = Content.Load<Scene>("myChildScene");
SceneSystem.SceneInstance.RootScene.Children.Add (childScene);
```

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/scene_streaming_640.jpg">
   <source src="media/ReleaseNotes-2.0/scene_streaming_640.mp4" type="video/mp4">
</video>

Para começar, dê uma olhada no novo built-in `SceneStreamingScript`. Ele demonstra o carregamento de cena de fundo ao passar por volumes de gatilho.

Agora você pode usar o `Offset` de uma cena para mover suas entidades tanto no tempo de design quanto no tempo de execução.

O `ChildSceneComponent` foi removido. Encorajamos todas as entidades a serem geridas por um único gerenciador **entity** e renderizadas por um único compositor **graphics**.

### Realidade virtual

Ganhar VR agora é tão simples como um único clique!

A renderização em cluster do Xenko, com seu multisample anti-aliasing, o torna ideal para VR. Xenko usa uma única API para cada dispositivo, com suporte nativo para Oculus e HTV Vive (mais dispositivos vêm muito em breve).

Xenko vem com uma amostra de jogo VR que mostra como implementar a jogabilidade VR, incluindo interação ambiente e teletransporte:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/vr_template_640.jpg">
   <source src="media/ReleaseNotes-2.0/vr_template_640.mp4" type="video/mp4">
</video>

Economize tempo valioso visualizando e testando VR diretamente do editor de cena:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/vr_editor_640.jpg">
   <source src="media/ReleaseNotes-2.0/vr_editor_640.mp4" type="video/mp4">
</video>

### Iluminação global com sondas de luz

Sondas de luz capturam a iluminação na posição que você coloca-los. Eles simulam a luz indireta, o efeito da luz saltando de superfícies e iluminando outras superfícies.

Eles podem fazer uma diferença dramática ao humor e aparência de sua cena.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/light_probes_640.jpg">
   <source src="media/ReleaseNotes-2.0/light_probes_640.mp4" type="video/mp4">
</video>

Sondas de luz podem ser ** colocadas livremente** e são processadas ** por pixel**. Isso significa que você pode usá-los não apenas em pequenos objetos dinâmicos, mas também objetos volumosos ou estáticos (até que tenhamos mapas de luz para aqueles!).

Por último, mas não menos importante, agora você pode facilmente capturar um cubemap DDS da posição atual da câmera no editor, para uso como uma luz de caixa de céu difusa ou especular.

### Eixos de luz

Xenko agora suporta eixos de luz baseados em mapas de sombra para luzes direcionais.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/lightshaft_CoS_640.jpg">
   <source src="media/ReleaseNotes-2.0/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Nossa implementação usa raios-marching em vez de efeitos postais, tornando o eixo visível e arrefecer, mesmo que a fonte de luz não seja visível.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-2.0/lightshaft_640.jpg">
   <source src="media/ReleaseNotes-2.0/lightshaft_640.mp4" type="video/mp4">
</video>

### Compositor gráfico

O compositor gráfico é agora um ativo separado.

Parâmetros de renderização (como VR) e parâmetros de efeito pós podem ser ajustados em apenas alguns cliques.

![Graphics compositor](media/ReleaseNotes-2.0/graphics_compositor.jpg)

Este é apenas o primeiro passo para tornar o compositor gráfico fácil de personalizar e estender. Fique atento para mais mudanças em versões futuras!

### Melhor experiência Visual Studio

Agora temos suporte completo para **Visual Studio 2017**!

* A extensão do Xenko Visual Studio agora suporta Visual Studio 2017
* Game Studio reconhece Estúdio Visual 2017
* Jogos podem usar C# 7.0, e nosso editor de scripts pode reconhecer C# 7.0 e oferecer C# 7.0 refactoring graças a Roslyn (você precisa fazer sua solução VS2017+ para que funcione)
* Nosso interno `AssemblyProcessor` que executa várias operações em conjuntos gerados agora pode trabalhar com PDB portátil (como gerado por projetos padrão .NET)

Os programadores que trabalham com Xenko muitas vezes vão para trás e para a frente entre Game Studio e Visual Studio. Para facilitar suas vidas, fizemos algumas melhorias importantes para a extensão do Xenko Visual Studio:

* Agora você pode abrir a solução atual no Game Studio diretamente do Visual Studio.
* O destaque da sintaxe não se comportou bem ao mudar de tema.
* Anteriormente, quando os ativos estão compilando, a MSBuild não relatou nenhum progresso até terminar. Agora exibe informações, avisos e erros enquanto compila.

Além disso, toda a nossa infraestrutura de compilação e editor de scripts agora é baseada na versão mais recente do MSBuild 2017 e Roslyn. Apoiando o novo sistema de projeto VS2017 com .NET O padrão está a poucos passos de distância!

### Mais rápido e mais leve

Para proporcionar uma melhor experiência para os usuários, temos trabalhado duro em várias frentes para tornar o editor mais suave e mais responsivo. Este ainda é um trabalho em andamento e espera melhorias regulares.

Além disso, o tamanho do pacote é quase três vezes menor, resultando em muito mais rápido download e tempo de instalação.

## Alterações de ruptura

### Compatibilidade de retrocesso

Xenko 2.0 suporta atualizações de projeto apenas para projetos criados com Xenko 1.10 Beta. Se você quiser atualizar um projeto feito com uma versão mais antiga, atualize-o para Xenko 1.10 primeiro.

### Suporte Visual Studio

Xenko 2.0 suporta Visual Studio 2015 e Visual Studio 2017 como IDEs. Visual Studio 2013 e versões anteriores não são mais suportadas.

Ao atualizar um projeto da versão anterior, em seu arquivo `.csproj`, configure `ToolsVersion="14.0"` como a versão mínima exigida.

### Navegação

Todos os componentes relacionados à navegação foram movidos para o seu próprio `SiliconStudio.Xenko.Navigation` montagem e namespace.

### Compositor de gráficos

Anteriormente, o pipeline de renderização foi personalizado por magia `IPipelinePlugin` no tempo de execução. Isto foi muito difícil de controlar. Agora, a maioria da configuração do pipeline acontece no momento do projeto no novo ativo do Compositor Gráfico.

`RenderFrame` desapareceu. Renderador são tipicamente declarando e alocando alvos de renderização.

## Questões conhecidas

* No Linux, ao alternar a plataforma gráfica subjacente, a renderização não ocorre ou falha. Para corrigir o problema, excluir o cache, local e roaming pastas no host Linux e reiniciar o jogo.
* Problemas de desempenho em dispositivos móveis (ser trabalhado)
* No iOS, se `Ativar compilações específicas do dispositivo` é alternada (a partir das propriedades do projeto), não é possível depurar o código do jogo. Para acelerar o seu desenvolvimento selecione manualmente a arquitetura do seu dispositivo a partir da aba Avançada.
* O scripting ao vivo foi temporariamente desativado

## Mudança

### Versão 2.0.0.2 — 25 Abril 2017

#### Melhorias

##### Geral

* Adicionado modelo de jogo VR
* Game Studio e jogo de tempo de execução real agora compartilhar o mesmo cache de compilação. Isto deve acelerar os tempos de construção.
* As dependências de construção são gerenciadas por um novo sistema que simplifica muito a cópia e implementação. Isso deve mais tarde beneficiar plugins e projetos de usuário quando exposto ao usuário

##### Game Studio

* Melhorado como objetos internos de um ativo podem ser referenciados
* Navegação de teclado aprimorada em vistas de árvores (por exemplo, hierarquia de entidades em cena e editores pré-fabricados)
* Rolagem melhorada em vistas de árvores
* Melhor desempenho de arrastar e soltar
* As entidades podem agora ser arrastadas e retiradas de uma cena para outra
* Exceções no jogo incorporado de um editor de cena já não travar Game Studio e pode ser recuperável
* Componentes de vetores podem agora ser editados de forma independente ao usar multi-seleção
* A navegação da câmera agora usa um conjunto de chaves diferente:
   * Alt + botão esquerdo do mouse - órbita
   * Roda do mouse - zoom
   * Botão direito do mouse - câmera giratória
   * Botão do mouse médio - pan
   * Direita + botões do mouse do meio - hover da câmera
* Adicionado controle deslizante de velocidade da câmera
* O modelo "Novo Jogo" foi tocado
* "Save" e "Save all" foram fundidos em apenas "Save"
* A visibilidade de sobreposição de malha de navegação agora pode ser alternada por grupo
* Os scripts agora podem ser fechados sem salvar e abrir novamente mais tarde
* O histórico de desfazer de script agora persiste após fechar um script
* Adicionado capacidade de capturar um cubemap DDS da posição atual da câmera do editor.
* Ao visualizar fluxos de vértices, os normais estão agora na faixa 0..1 em vez de -1..1. Além disso, agora é possível ver os normais no mundo e no espaço tangente

##### Activos

* Os ativos de textura são agora divididos em subtipos de cor, normal e de tons de cinza
* Substituido `SkyboxUsage` enum em `SkyboxAsset` com um booleano `IsSpecularOnly`
* Aumento da robustez e notificação de erros no Yaml inválido ao abrir ativos

##### Motor

* Adicionado suporte para telas de respingo (eles mostram apenas em release builds)

##### Áudio

* Adicionado suporte de áudio binaural HRTF para Windows (10+)

##### Gráficos

* Adicionado suporte MSAA
* Adicionados filtros personalizados de resolução MSAA
* Cálculo de cascata sombra é agora mais estável
* Vários alvos de renderização agora têm melhor suporte
* Luzes de ponto agora podem lançar sombras
* `SkyboxComponent` foi removido e a funcionalidade mudou-se para o `LightComponent` e `BackgroundComponent`
* `BackgroundComponent` agora aceita texturas cubemap como uma entrada
* D3D11: Shaders compatíveis compartilha o mesmo bytecode, evitando mudanças de estado extra.
* OpenGL: Implementado UpdateSubresource para texturas 3D

##### Partes

* A rotação aditiva não tem mais um valor padrão de 1 radiano; agora é 0
* Inicializadores e atualizadores já não adicionam campos de partículas quando desativados

#### Física

* Colisões retrabalhadas filtrando para melhorar o desempenho

##### Navegação

* As caixas de som agora podem ser colocadas na cena
* As malhas de navegação podem agora ser geradas / atualizadas no tempo de execução
* `TryFindPath` agora retorna falso em vez de falhar se nenhuma malha de navegação é carregada
* Índices de camada de malha de navegação foram substituídos por grupos

##### RV

* Dispositivo único-agnóstico API
* Oculus Rift suporte (HMD e controladores)
* Suporte Vive (HMD e controladores)

#### Correções de bugs

##### Game Studio

* Nomear bibliotecas de projeto agora evita colisões
* Personagens inválidos no nome do projeto agora são filtrados corretamente e não impedem a compilação do projeto
* Mudar tamanhos de gizmo já não faz com que o controle deslizante pular
* Mudar entre gizmos já não trava o editor de cena
* Asset copy/paste agora funciona melhor
* O comportamento de Thumbnail é agora mais estável
* Vazamento fixo de ativos ou entidades excluídos ao navegar pelo histórico de seleção
* Renomear ativos fixos undo/redo
* Renaming an asset longer closes its editor
* Activos reparentados fixos com Alt key (mantém a posição mundial)
* Corrigido muitos problemas relacionados à manipulação de entidades de prefabs
* Corrigido muitos problemas relacionados a entidades em movimento na hierarquia de cena
* A grade de propriedade agora lida corretamente com multi-seleção
* Corrigido muitos problemas relacionados a propriedades sobrepostas de Prefabs ou de Arquétipos
* Corrigido muitos problemas relacionados com copiar / colar na grade da propriedade
* Corrigido alguns casos em que *Create prefab da seleção* não foi corretamente vinculando as entidades selecionadas para o pré-fab recém-criado
* Corrigido vários problemas ao manipular o modelo ou materiais em um `ModelComponent`, especialmente quando a entidade é herdada de um prefab
* O botão de destaque do material agora funciona corretamente
* Os ativos que não conseguiram salvar agora impedem Game Studio de fechar e perder suas mudanças
* Sprites podem ser selecionados novamente no editor de cena
* Desfazer/refazer criação ou remoção de ativos de script agora funciona corretamente
* Definir um snap de tradução de 0 agora funciona como esperado
* Gizmos de luz atualizar corretamente ao alterar o tipo de luz
* Digitar a URL para uma referência em um ativo escolhido agora funciona como esperado
* As chaves eram muitas vezes presas (especialmente irritantes quando se deslocam), isto é fixo

##### Activos

* Corrigido um problema quando a compilação de ativos estava falhando devido ao tamanho da mensagem WCF entre o construtor de ativos escravos ser muito grande

##### Motor

* Direito fixo Detecção de teclas Shift em WinForms
* O método `Start` dos scripts é agora sempre chamado antes do método `Update`G2> de qualquer `Script` no mesmo quadro
* `SyncScripts` não causa mais falhas quando programado de uma linha diferente
* Os scripts não são mais iniciados ou atualizados se outro script os remover da cena no mesmo quadro
* <g1Image> Elements</g> agora são exibidos corretamente ao usar um <g id="2">SpriteFromTexture</g><g id="1">

##### Gráficos

* As vistas ortográficos já não exibem sombras quebradas
* As sombras não desaparecem mais quando vistas exatamente verticalmente
* A mistura de cascata não causa mais buracos nas sombras
* Objetos Tesselated agora lançam sombras
* Iluminação de objeto normal é agora correta quando o dimensionamento não uniforme é aplicado
* Usando fluxos de vértices inbound em shaders não causa mais acidentes
* Efeitos de post brilhantes agora são mais estáveis
* VR agora compartilha sombras e inclinações para cada olho
* Iluminação embutida agora funciona com várias visualizações de renderização
* Conversões de cores RGB / HSV fixas
* Saída do motor fixo ao usar o perfil RenderDoc
* Multisample fixo Nível de qualidade para texturas MSAA
* Tesselation e mapeamento de deslocamento não causam mais erros de renderização no editor
* Renamed MSAA Nível em MultisampleCount

##### Física

* Remover e re-adicionar entidades não causa mais acidentes em determinadas situações

### Versão 2.0.1.1 — 28 de abril de 2017

#### Correções de bugs

##### Game Studio

* Corrigido um potencial acidente ao ativar o VR no editor e abrir várias cenas/prefabs
* Impede arrastar e soltar uma entidade que depende de um prefab nele (ou um antepassado prefab) que teria criado uma referência cíclica e caiu o editor
* Corrigido um problema com recarga de montagem automática

##### Motor

* Corrigido um acidente quando a computação sondas de luz

##### Construa

* Corrigido um problema possível ao compilar um jogo que visa iOS e a versão Xamarin direita não pode ser encontrada

### Versão 2.0.2.1 — 8 Junho 2017

#### Melhorias

##### Game Studio

* Visual Studio versão picker agora mostra o apelido de instalação para facilmente diferenciar quando várias instâncias são instaladas lado a lado
* Adicione o conceito de cena _active_ no editor de cena. Deixar um ativo para a visão de cena uma entidade adicionará à cena atualmente ativa em vez da cena raiz

##### Gráficos

* RV: Adicionado uma opção CopyMirror para controlar se a renderização VR é copiada de volta para o destino de renderização atual
* Shaders: EstruturadoBuffer estavam sendo declarados antes de seu tipo de struct; ordem agora deve ser correta

#### Correções de bugs

##### Game Studio

* Color Picker estava se comportando estranhamente devido a alguns problemas de conversão RGB para HSV
* Loja global. config estava impedindo Game Studio para encontrar a instalação Xenko [#576](https://github.com/SiliconStudio/xenko/issues/576)
* Corrigir um acidente que ocorre ao substituir um sprite na grade de propriedade de uma spritesheet
* Corrigir alguma comparação de cadeia de caracteres que estavam usando o local atual do sistema, causando problemas com algum idioma, como o turco
* Impedir que as janelas modais sejam minimizadas
* Restaurar alguns controles deslizantes em falta na grade da propriedade (que foram substituídos por uma caixa de texto simples), intervalos de revisão e valores de passo para a maioria deles
* Corrigir uma falha potencial na serialização quando um script tinha uma referência nula a outro `Entidade` ou `EntidadeComponente` (e alguns outros cenários semelhantes)
* Correção parcial do modelo de grade de propriedade para referências de componentes da entidade
* Corrigir um problema com o modelo de rede de propriedade usado para editar propriedades `char`

##### RV

* Corrigir falhas de tempo de execução ao adicionar duas vezes a mesma API de dispositivo VR na lista de APIs exigida
* OpenVR: câmera estava girando em torno do centro mundial em vez do centro da câmera quando uma rotação foi aplicada na entidade

##### Gráficos

* Luzes de ponto fixo não lançando sombras de objetos que têm tessellation habilitado
* Corrigido um bug onde algumas luzes não renderiam [#586](https://github.com/SiliconStudio/xenko/issues/586)

##### Android

* Corrigir uma alocação de memória que poderia fazer um acidente de jogo na inicialização em certos dispositivos.

##### Outros

* Connection Router não estava funcionando corretamente se o Game Studio dessa versão Xenko não foi executado primeiro
* Adicionar `*.lock.json` padrão para gerar `.gitignore` arquivo (quando criar um projeto)

### Versão 2.0.3.1 — 24 Julho 2017

* Estenda o tempo de fechamento da promoção para as 11:30h, 1 de janeiro de 2018 (UTC+09:00).

### Versão 2.0.4.1 — 23 de agosto de 2017

* Corrigir um problema com o mais recente Visual Studio e MSBuild (15.3) [#617](https://github.com/SiliconStudio/xenko/issues/617) relacionado a [msbuild #2369](https://github.com/Microsoft/msbuild/issues/2369).