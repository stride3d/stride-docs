# Notas de lançamento do Xenko 2.1

12 de setembro de 2017

## Destaques

### Reflexões locais

Xenko 2.1 introduz reflexões **local**. Quando você ativa este efeito pós, a cena se reflete em materiais brilhantes.

![ Reflexões locais](media/ReleaseNotes-2.1/local-reflections.jpg)

Você pode ativar e personalizar reflexões locais no compositor gráfico sobre as propriedades **post effects**.

![ Ativar reflexões locais](media/ReleaseNotes-2.1/enable-local-reflections.png)

Para detalhes, veja [Reflexões locais](../manual/graphics/post-effects/local-reflections.md).

### Sombreamento de casaco claro

Xenko 2.1 inclui um modelo **clear-coat material** que usa renderização física para simular a pintura do veículo.

![ Revestimento da orelha](media/ReleaseNotes-2.1/clear-coat-2.jpg)

Sombreamento de capa clara tem várias vantagens sobre a criação do efeito manualmente com camadas de material:

* camadas são misturadas com base na distância
* aumento do desempenho
* visualização melhorada

Você pode adicionar um material **clear coat** do **Asset view** sob **Add asset > Material**.

![ Adicionar casaco claro](media/ReleaseNotes-2.1/add-clear-coat.png)

Para detalhes, veja [Clear coat shading](../manual/graphics/materials/clear-coat-shading.md).

### Materiais de vidro finos

Agora você pode renderizar materiais de vidro finos, como pára-brisas. A cor difusa controla a tonalidade do vidro e quanto a luz é bloqueada (cor escura bloqueia mais luz).

![Glass materials](media/ReleaseNotes-2.1/glass-materials.webp)

Você pode adicionar um material **Glass** do **Asset view** sob **Add asset > Material**.

![Selecione material de vidro fino](media/ReleaseNotes-2.1/select-thin-glass-material.png)

### Eixos de luz melhorados

Agora você pode usar eixos **light** com qualquer tipo de luz que lança sombras (ou seja, luzes de ponto, luzes direcionais ou luzes de ponto). Você também pode usá-los com várias cascatas de sombra.

Além disso, Game Studio agora exibe volumes de ligação de eixo de luz no editor de cena, para que você possa facilmente ver as áreas onde os eixos de luz são criados. Para mostrar ou ocultar volumes de ligação do eixo de luz de navegação, na barra de ferramentas do editor **scene**, abra o menu **gizmo opções** e use a caixa de seleção **Light shaft limiting volumes**.

![Mostrar volumes limitados de eixo de luz](media/ReleaseNotes-2.1/show-or-hide-light-shaft-bounding-volume.png)

As configurações `LightShaftComponent` foram simplificadas e agora têm configurações para controlar a qualidade e o desempenho.

Para obter detalhes, consulte [ eixos de luz](../manual/graphics/lights-and-shadows/light-shafts.md).

### Transmissão de texto

Xenko agora suporta streaming para texturas. Isso diminui significativamente o tempo necessário para carregar um jogo ou cena, usa menos memória e torna o seu jogo mais fácil de escalar.

Streaming é ativado para texturas por padrão. Você pode encontrar a opção nas propriedades de textura em **Format**.

![ Ativar streaming](media/ReleaseNotes-2.1/enable-streaming.png)

Você também pode definir as configurações globais **Streaming** em configurações **Game**.

![Streaming settings](media/ReleaseNotes-2.1/streaming-settings.png)

Para detalhes, veja [Streaming](../manual/graphics/textures/streaming.md).

### Render máscaras

Agora você pode definir quais grupos renderizam uma câmera renderiza sob **Graphics Compositor > Pontos de entrada > Render máscaras**. Por exemplo, você pode ter um modelo ser visível para a câmera A, mas invisível para a câmera B.

![Render mask](media/ReleaseNotes-2.1/change-render-mask.png)

Para detalhes, veja [Render grupos e máscaras](../manual/graphics/graphics-compositor/render-groups-and-masks.md).

### Perfil melhorado

O script **Game Profiler** agora exibe mais informações e é mais fácil de usar.

![ Perfil em tempo de execução](media/ReleaseNotes-2.1/profiling-profiler-at-runtime.jpg)

Agora você pode:

* perfil GPU informação
* alternar entre CPU, GPU e FPS apenas resulta com **F1**
* classificar as páginas de resultados por **Nome** ou **Time** com **F2**
* mudar com que frequência o profiler recebe e exibe novos resultados com **- / +**
* saltar para uma página de resultados com as teclas **number**, ou mover para a frente e para trás com **F3** e **F4**
* definir parâmetros no Game Studio:

   ![Profiler properties](media/ReleaseNotes-2.1/profiler-properties.png)

Para detalhes, veja [Profiling](../manual/troubleshooting/profiling.md).

### Texto de depuração

Agora você pode exibir o texto de depuração no tempo de execução. Para obter mais informações, consulte [Debug text](../manual/troubleshooting/debug-text.md).

![Debug text](media/ReleaseNotes-2.1/my-debug-text.jpg)

### Sistema de entrada reescrito

O sistema de entrada foi reescrito para rastrear diferentes dispositivos de entrada e permitir uma melhor extensibilidade.

* Permite a detecção de dispositivos adicionados/removed através de eventos no InputManager
* Novas interfaces de dispositivo, como `IMouseDevice`, `IKeyboardDevice`, `IGameController`
* Alto nível `IGamePadDevice` substitui a funcionalidade do gamepad, com suporte para XInput
* Nível inferior `IGameControllerDevice` permite o acesso a botões / eixos numerados
* Detecção automática de controladores plugados/removed
* Suporte para diferentes layouts de teclado e IME para entrada de texto
* Acesso à resolução e coordenadas absolutas para dispositivos de mouse/pointer
* `KeyEvent` agora tem um membro `RepeatCount`, indicando quantas vezes a chave foi repetida ao ser mantida

Para obter detalhes, consulte [Input](../manual/input/index.md).

### Melhor suporte Direct3D 12

Para apoiar funcionalidades gráficas em cada plataforma, implementamos recursos ausentes para o backend de renderização DirectX 12:

* computa e tessellation shaders
* vistas de acesso não ordenada para texturas e buffers
* buffers estruturados

Para mais detalhes, consulte o **Changelog** abaixo.

### Melhoria do ambiente fresnel

Fresnel descreve como a luz é refletida dependendo do ângulo do material é visto. Tipicamente, ângulos altos são mais reflexivos.

Anteriormente, Xenko usou uma aproximação polinomial imprecisa para computar o fresnel para iluminação ambiente (como cubemaps), resultando em um contorno branco maior do que esperado. Xenko agora padrão para uma textura de pesquisa ambiente BRDF pré-computada que combina com nossas equações de iluminação padrão (GGX Schlick). Isso produz renderização muito mais precisa.

### Documentação japonesa

A documentação está agora disponível em japonês. Para alternar idiomas, use o botão **Language** no canto superior direito do site de documentação.

![Switch language](media/ReleaseNotes-2.1/switch-language.png)

## Alterações de ruptura

### Sistema de entrada

* Renamed `PointerState` para `PointerEventType`
* Alterou os membros de `PointerEventType`:
   * `Down` foi renomeado para `Pressed`
   * `Move` foi renomeado para `Moved`
   * `Up` foi renomeado para `Released`
   * `Cancel` foi renomeado para `Cancelado`
   * `Out` foi removido; use `Cancelado` em vez disso
* Renamed `InputManager.ActivatedGestures` to `InputManager.Gestures`
* Suporte de verificação alterado para sensores usando `Sensor.IsSupported` para `InputManager.Sensor != null` (onde `Sensor` é o nome do sensor que você está verificando)
* As funções `HasDown/Pressed/ReleasedMouseButtons()` nas funções `InputManager` são agora propriedades
* Remover `GetGamePad()`; use `IGamePadDevice.State` para adquirir um estado de gamepad
   > Para obter um gamepad, use `InputManager.GamePads`, `InputManager.GetGamePadByIndex(index)` ou use o `InputManager. Eventos do DeviceAdd/Removed`
* Removedo `GamePadState.IsConnected`; use o `InputManager. DeviceAdded/Removed` eventos ou verificar o valor retornado por `InputManager.GetGamePadByIndex(index) != null`
* Movedo `IsPadButtonDown/Pressed/Released()` para o `IGamePadDevice` como `IGamePadDevice.IsButtonDown/Pressed/Released()`
* Moveu a função `SetGamePadVibration()` para a função `IGamePadDevice`
* Bloquear o mouse com `InputManager.LockMousePosition()` não esconde mais automaticamente o cursor; use `IGame.IsMouseVisible` para este
* Removedo `PointerEvent.PointerType`; use `Pointer Event.Device é IMouseDevice` para verificar se o evento veio de um mouse
* Remover `PointerEvent.IsPrimary`
* Renomeado `PointerId` em `PointerEvent` para `Id`
* Renamed `State` em `PointerEvent` para `EventType` e seu tipo para `PointerEventType`
* Removedo `KeyEvent.Type`; para verificar se este foi um evento pressionado ou lançado, use o booleano `KeyEvent. IsDown`
* `MouseWheelDelta` é agora `-1` ou `1` por unidade de rolagem em vez de `-120` ou ``
* Removedo `MultiTouch Activado` no `InputManager`; multi-toque é sempre activado

### Eixos de luz

* Removedo `ExtinctionFactor` e `ExtinctionRatio` para simplificar o componente do eixo de luz

### Motor

* Renomeado `DebugConsoleSystem` para `DebugTextSystem`
* Agora default `RenderStageSelector` selecione todos os grupos de entidades

## Questões conhecidas

* No Linux, ao alternar a plataforma gráfica subjacente, a renderização não ocorre ou falha. Para corrigir o problema, excluir o cache, local e roaming pastas no host Linux e reiniciar o jogo
* 
   * No iOS, se ` Ativar compilações específicas do dispositivo` está ativado (ajustado nas propriedades do projeto), não é possível depurar o código do jogo. Para acelerar o desenvolvimento, selecione manualmente a arquitetura do seu dispositivo no separador Avançado
* Problemas de desempenho em dispositivos móveis (ser trabalhado)
* O scripting ao vivo foi temporariamente desativado

## Mudança

### Versão 2.1.0.3 - 12 de setembro de 2017

#### Melhorias

##### Geral

* Actualizado o [list de bibliotecas de terceiros](https://git.xenko.com/xenko/Xenko-Runtime/blob/master/THIRD%20PARTY.md) e classificado por dependências de editor e tempo de execução

##### Game Studio

* Revisado e reescrito texto editor (menus, rótulos de botão, dicas de ferramentas e assim por diante)
* Caixas de diálogo redundantes removidas
* Melhoria direcional luz gizmo visuais
* Melhoria do projeto do gizmo da tradução. Os planos de tradução agora sempre enfrentam a câmera
* Deslizes gráficos reduzidos e renderização otimizada de sobreposição de malha de navegação
* Limitação de caracteres especial removido em chaves de cadeia de caracteres para dicionários
* Alterou a cor padrão do quadro claro para melhor edição pré-fabricada
* Adicionado uma marca para a origem na cena e prefab editor
* Volume de amarração de wireframe adicionado para eixos de luz
* Adicionado uma entrada de menu de contexto na vista de ativos para copiar a URL de um ativo
* Permitido *mixed* orientação do documento no painel da doca

##### Activos

* Atualizado para a versão mais recente do DirectXTex
* Melhorou a computação de dependências entre ativos que levam a uma compilação mais rápida e geração de miniaturas
* Alterado como as partes raiz de ativos hierárquicos (prefab, cena, UI) são referenciadas e serializadas (referências diretas em vez de Guids)

##### Motor

* Adicionada máscara de grupo de renderização no `SceneCameraRenderer` para entidades de sinalização por câmera
* Melhorou o perfil do jogo (impacto de desempenho reduzido, melhorou UX & visual, etc)
* Adicionado uma chave de perfilamento para o componente de script para o perfil de script de usuário
* Adicionado suporte de streaming para texturas.
* Adicionado suporte para consultas GPU.

##### Gráficos

* FXAA A qualidade caiu em muitos casos, porque o valor não funciona com todos os números entre 10 e 39. Agora está exposto como dois controles: a `Dithering` combobox e a `Quality` slider
* Resolução melhorada do amortecedor de profundidade MSAA
* Pequenas correções de shader
* Opção adicionada para amostragem de textura aleatória a mapas de textura
* Fundição de sombra habilitado para materiais transparentes
* Adicionado `IsAlphaCutoff` opção em sprite componente
* Adicionada função de troca para `Textura` para trocar o conteúdo de duas texturas

##### Direct3D 12

* Implementações da Lista de Comandos para Despacho, ClearReadWrite, Copiar, CopyMultisample, CopyCount
* Correções de transição de estado de recurso
* Recurso barreiras loteamento
* Adicionado configuração de ClearValue adequada para render alvos e profundidade buffers stencil
* Adicionado DX12 Filtro Debug Layer para avisos irrelevantes
* Adicionado suporte para:
   * suporte de pipeline de computação
   * infra-estruturas
   * shaders de computação, casco, domínio e geometria
   * vistas de acesso não ordenada para texturas e buffers
   * buffers estruturados
   * texturas de estadiamento e buffers

##### Entrada

* Adicionado `AbsoluteMousePosition` informação para o `InputManger`.
* Melhor suporte ao gamepad (novos dispositivos suportados, API melhorada, detecção de tempo de execução, etc.)
* Adicionar chave interpretada e suporte de entrada IME

##### Navegação

* Alterou o tamanho padrão de novos volumes de amarração de malha de navegação para `(1,1)`

##### Android

* Modifique a criação de contexto de aplicação para permitir o uso de exibição externa

##### UWP

* Suporte implementado para CoreWindow. Desabilitado para o momento

#### Bugs corrigidos

##### Game Studio

* A atualização ao vivo da cor gizmo direcional, ponto e ponto luz não estava funcionando
* Ativar/desativar componentes de volume de ligação do eixo de luz agora funciona como pretendido
* Adicionado diálogo "Referências de arquivo" ao remover diretórios com ativos
* Muitos erros em inglês
* Corrigido muitos problemas com cópia e pasta (e substituir). Notavelmente agora é possível copiar entidades de uma cena e cena infantil ao mesmo tempo.
* Corrigido problemas com "Criar biblioteca da seleção" no editor da UI
* Fez o acidente GameStudio em alguns casos raros onde exceções poderiam deixar um projeto em um estado corrompido
* Corrigido várias isues no editor de interface do usuário ao mover elementos na hierarquia
* Problemas corrigidos com a geração de miniaturas
* Problemas fixos com a âncora de uma cena infantil

##### Activos

* Compilação de ativos de FBX enorme às vezes estava terminando no timeout
* Valores fixos normais, tangentes e bitangentes NaN acontecendo durante a importação de modelos

##### Motor

* Corrigido vários vazamentos de memória, especialmente quando destruir um jogo
* O código de iluminação foi buggy ao renderizar várias visualizações
* Caixa de amarração de sprite fixa e cálculo de culling frustum
* Cálculos de memória de textura e buffer fixos acessíveis a partir de `GraphicsDevice`
* Removed obsolete `ChildSceneComponent` class

##### Gráficos

* Corrigido o erro com a grade ignorando a profundidade com MSAA habilitado
* Adicionado suporte para nointerpolation/noperspective em Xenko shaders
* Corrigido vários problemas com artefatos pretos nos shaders (NaNs e normais inválidos)
* Os eixos de luz agora funcionam como esperado ao usar volumes de amarração auto-superposição
* Sondas de luz fixas aplicando luz ambiente anterior duas vezes quando não há sondas de luz
* Material mapa especular `IsEnergyConservative` agora devidamente tomado em consideração
* Sombras de materiais transparentes fixas
* Corrigido transparente e alfa corte sombras materiais
* Fixo de dois lados e fliped material shading
* Contagem de mipmap fixa

##### Física

* Orientação fixa da forma da cápsula
