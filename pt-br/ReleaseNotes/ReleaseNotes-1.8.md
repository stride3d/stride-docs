# Notas de lançamento do Xenko 1.8

## Destaques

O Xenko release 1.8 apresenta três principais novos recursos, juntamente com vários aprimoramentos relevantes para recursos existentes.

Estamos orgulhosos de poder oferecer-lhe o nosso novo **UI Editor**, desempenho aprimorado através do nosso motor multithreaded recentemente ** com suporte Vulkan e nosso novo **Prefab Model**.**

Além disso, para suas necessidades de renderização de borda de corte, agora apoiamos <g id="1">SSAO</g>cel (toon) shading</g>!<g id="2">

### Editor de interface

Esta versão apresenta novos ativos de interface do usuário junto com um novo editor de interface do usuário, para que você possa criar incrível interface do usuário diretamente do Game Studio!

[![UI Editor](https://img.youtube.com/vi/YlCViinxviI/0.jpg)](https://www.youtube.com/watch?v=YlCViinxviI "UI Editor")

O editor UI fornece uma experiência WYSIWYG completa. Você pode autorizar toda a árvore visual de sua interface de usuário, editar as propriedades de cada elemento UI (como layout, cor de fundo, etc) e visualizar sua renderização.

Estão disponíveis dois novos activos:
* **UI Page asset**: representa uma árvore típica de elementos UI que podem ser atribuídos ao Componente UI de uma entidade na cena ou editor prefab.
* **UI Biblioteca asset**: representa uma coleção de árvores de interface do usuário (semelhante a pré-fabs) que podem ser reutilizadas por outras páginas de interface do usuário.
* Ambos têm equivalentes de tempo de execução. UIComponent agora espera uma UI Page. Uma Biblioteca UI é útil para criar ou editar UI em tempo de execução.

E uma vez que ele é construído no mesmo sistema que arquétipos e prefabs, você pode facilmente criar partes de interface do usuário compartilhadas, substituir algumas propriedades e ter alterações propagando automaticamente.

### Desempenho

#### Multithreading

Muitos sistemas computacionalmente intensivos foram multithreaded. Espere um grande aumento no desempenho e melhor escala para corresponder com o tamanho do seu jogo! Observamos até 6 vezes maiores taxas de quadros para cenas fortemente vinculadas à CPU até agora (em uma CPU de 4 núcleos típica).

[![Multithreading demo](https://img.youtube.com/vi/sJ2p982cZFc/0.jpg)](https://www.youtube.com/watch?v=sJ2p982cZFc "Moltithread demo")

O código paralelizado inclui muitos `EntityProcessors` e quase todas as partes do nosso recentemente reescrito **rendering pipeline**. Em **Vulkan** e **Direct3D12** isso inclui também a gravação de listas de comando de desenho, dando-lhes uma borda sobre as outras APIs.

![Multithread ](media/ReleaseNotes-1.8/multithreading.jpg)

Os desenvolvedores podem encontrar classes e utilitários para programação simultânea no `SiliconStudio.Core.Threading` namespace, por exemplo, `Dispatcher.For()`, que se assemelham à Biblioteca Paralela Tarefa, mas são mais leves e adaptados para o trabalho realizado cada quadro no loop de atualização de um jogo.

Com o tempo, vamos olhar para multithreading mais partes do motor, incluindo subsistemas independentes, tais como diferentes fases do `RenderSystem` e `Scripts`.

#### Modelo de pré-fabricada

O Modelo Prefab é um novo tipo de Ativo Modelo que gera um modelo único assado e mesclado otimizado a partir de uma pré-fabricada.

Ele mescla malhas juntas por material e layout de vértice. Você pode facilmente ir de milhares de chamadas de empate para uma ou duas chamadas de empate.

Para usá-lo, basta criar um novo recurso Modelo Prefab do Game Studio e atribuir uma pré-fabricada para ele.
Certifique-se de que o prefab base está apenas contendo entidades estáticas como apenas `ModelComponent` tipos são mesclados.

### Renderização

#### SSAO

Oclusão ambiente foi adicionado à lista de efeitos pós-processamento. A técnica atual implementa [Scalable Ambient Obscurance](https://graphics.cs.williams.edu/papers/SAOHPG12/). Ele expõe uma variedade de opções, incluindo o número de amostras de torneira, intensidade, raio de torneira e tamanho do amortecedor traseiro.

![SAO comparação tiros](media/ReleaseNotes-1.8/SAO.jpg)

Atualmente é parte do pipeline de pós-efeito, mas mais tarde vai se mover para o pipeline de iluminação para renderização mais realista.

#### Cel Shading

Shading Cel (ou Shading Toon) está agora disponível como um modelo de renderização com opções de renderização Diffuse e Specular. A implementação padrão limita o produto leve a níveis binários ou 3 cortes discretos. Você também pode referenciar uma textura de rampa para melhor controle artístico.

[![Cel Shading](https://img.youtube.com/vi/RJDrG1QR3Uo/0.jpg)](https://www.youtube.com/watch?v=RJDrG1QR3Uo "Cel Shading")

## Como atualizar

### UI

A propriedade UIComponent `RootElement` foi substituída pela propriedade `Page`. Agora espera uma instância do tipo `UIPage`. Os scripts que estavam definindo a propriedade `RootElement` precisam ser atualizados:

```
// código anterior (não compilar)
var grid = novo Grid();
var component = Entity.Get<UIComponent>();
componente. RootElement = grade;

// novo código
var grid = novo Grid();
var component = Entity.Get<UIComponent>();
componente. Página = nova UIPage
(
    RootElement = grade
};
```

Devido às ligeiras alterações de API e comportamento feitas no sistema UI, você pode ter que adaptar outra parte do seu código. Por exemplo:

```
var text = novo TextBlock();
var canvas = novo Canvas();
lona.Crianças.Adicionar (texto);

var position = novo Vector3(0.0f, 1.0f, 0,0f);
// anteriormente definir esta propriedade anexada também irá definir Canvas. UsoPosições Absolutas Propriedade Chave para false automaticamente
text.DependencyProperties.Set(Canvas.PositionRelativePropertyKey, position);
// agora você precisa configurá-lo explicitamente
text.DependencyProperties.Set (Canvas.UseAbsolutePosition PropertyKey, false);
// note que usar métodos de extensão é a maneira recomendada, e faz tudo isso de uma forma mais concisa:
text.SetCanvasRelativePosition(position);
```

## Mudança

### Versão 1.8.0-Beta

Data de lançamento: 2016/08/31

#### Melhorias

##### Geral

- Adicionado um `DebugConsoleSystem` para ser capaz de imprimir informações básicas de depuração no jogo.
- Adicionados métodos utilitários `FindChild` e `FindRoot` para `Entity`.
- As árvores de mistura de animação agora podem ser criadas no script. O script pré-construído `AnimationBlend` mostra como fazê-lo facilmente
- Roslyn atualizado para 1.3.2

##### Activos

- Arquivos de cena Yaml agora codificar referências de entidades e componentes de uma forma muito mais compacta
- A ordem de serialização do Yaml está agora seguindo a ordem de declaração de classe

##### Áudio

- Lado do estúdio do jogo: adicionado limites duros na relação de compressão, também agora está usando um controle deslizante.
- Adicionado `SetRange` em `SoundInstance` para ser capaz de definir o intervalo de jogo, ele também permite a busca.
- Adicionado `Position` propriedade em `SoundInstance` para ser capaz de saber a posição em tempo de sua instância de jogo.
- Adicionado `PlayAndForget` a `AudioEmitterSoundController` para tocar muitas instâncias do mesmo som rapidamente.
- Adicionado Pedida AudioDevice em AudioSystem para permitir que o código do jogo selecione dispositivos de áudio (Windows apenas por agora).
- `AudioEmitterComponent` agora contém um dicionário de sons que podem ser usados a partir do emissor, aqueles podem ser definidos a partir do Game Studio diretamente!
- A visualização de som do Game Studio agora usa o motor interno, isso significa que você pode visualizar diretamente a taxa de compressão!

##### Gráficos

- Comando Lista agora pode compilar e executar
- Os buffers constantes agora são carregados em um único buffer de GPU e definidos com deslocamentos na plataforma/API que suportam este modo
- D3D12: número reduzido de chamadas de API

##### Game Studio

- Sobre Página acessível a partir de Menu-> Ajuda--->About.

##### Entrada

- Adicionado suporte de vibração de controle preliminar com `Input.SetGamePadVibration`

##### Partes

- A renderização de partículas agora usa o pipeline multithreaded melhorado, acelerando significativamente o edifício do amortecedor de vértice.

##### Amostras

- Várias amostras foram removidas. As amostras de partículas e física foram muito reduzidas e fundidas em apenas dois, o que permite ao usuário verificar mais recursos com uma única amostra.

#### Questões corrigidas

##### Física

- Modelos processuais agora podem ser usados como uma fonte para gerar formas de casco convexo.
- Agora estamos usando a versão github da Bullet Physics e cooperando ativamente com o projeto.
- Collider fixo Computação de matrizes em cache.

##### Game Studio
- A caixa de diálogo Credenciais salvará agora as configurações de credenciais ao fechar.
- A caixa de diálogo credível não aparecerá se você verificar "Não pergunte novamente".
- Fix hang ao lançar um jogo Linux remotamente.

#### Alterações de ruptura

##### UI

- O UIComponent espera um UI Page no lugar da propriedade anterior Root Element.
- A maioria das propriedades de dependência foram alteradas para regular Propriedades C#, exceto as que são propriedades anexadas (como a coluna e a linha anexada propriedade de uma grade).
- Na área de trabalho, o evento TouchMove também é levantado quando nenhum botão do mouse é pressionado.
- O estilo padrão da interface do usuário foi removido.

##### Áudio

- Remover Jogar com argumento booleano de `SoundInstance`, em vez disso o mesmo comportamento será alcançado usando PlayExtended ou Play.
- Renomear `IsLooped` em `IsLooping`.
- Desprezado: `GetSoundController`, `AttachSound`, `AttachSounds`, `DetachSound`, `DetachSounds`. Adicione sons agora do `AudioEmitterComponent`

##### Física

- `Collision.Contacts` é agora um `HashSet` assim o acesso por índice não é mais possível, use `foreach` ou iterá-los em vez disso.

##### RV

- Adicione suporte de áudio, status e recentro para Oculus Rift.

##### Linux

- Corrigir problema Mono com o novo compilador de efeitos (introduzido em 1.7.5-Beta). Não há necessidade de ativar o "compilador remoto" mais nas "propriedades do pacote".


### Versão 1.8.1-Beta

Data de lançamento: 2016/09/2009

#### Melhorias

##### Game Studio

- A seleção atual no editor UI pode ser alterada no menu de contexto. Isso é especialmente útil para selecionar um elemento coberto por outro.
- Adicione snapping ao mover ou redimensionar um elemento no editor de interface do usuário.

#### Questões corrigidas

- Corrigir um problema de compilação com modelos pré-fabricados usando outros modelos pré-fabricados para ser compilado
- Corrigir e melhorar a edição de Genéricos e Nodos de Composição para nós de classe Shader em materiais

##### Game Studio

- Corrigir um potencial NullReferenceException ao validar um valor de intervalo na grade de propriedade.
- A criação de ativos derivados (ArcheType) para a página UI ou biblioteca UI não são suportados, mas ainda eram permitidos.
- Corrigir um problema com caixa de mensagem que devolveu um valor errado quando o usuário escolheu fechá-lo em vez de clicar em um de seu botão. Isso pode resultar em perda de dados quando solicitado para salvar o projeto ao fechar o Game Studio.
- Remover incorreta Cabeçalhos GPL em modelos de script, por exemplo. BasicCameraController ([#457](https://github.com/SiliconStudio/xenko/issues/457)).
- Exibir mensagem de erro na caixa de diálogo credencial quando a localização remota não existe em vez de relatar credenciais inválidas.

##### Linux
- Corrigir falha ao compilar shaders para o backend Vulkan no host remoto.

##### Partes

- Materiais de partículas refactored, melhorando significativamente o desempenho da memória.

##### Amostras

- As amostras fixas estavam dependendo da versão errada de Xenko.


### Versão 1.8.2-Beta

Data de lançamento: 2016/09/21

#### Melhorias

##### Game Studio

- Melhore o encaixe ao mover ou redimensionar um elemento no editor de interface do usuário: elemento movido será "atraído" pelos limites do recipiente pai ou irmãos como ímãs. Isso deve facilitar o alinhamento de elementos uns com os outros.
- Ajuste automaticamente a propriedade de alinhamento ao mover-se para a borda esquerda/direita (resp. top/bottom) do recipiente pai.
- A única raiz de uma página de interface do usuário pode ser removida e uma nova pode ser adicionada.
- Melhore a capacidade de resposta do Game Studio.

#### Questões corrigidas

##### Game Studio

- Corrigir ferramenta de varinha mágica não trabalhando dentro da região de sprite.
- Corrigir um problema ao remover a única raiz de uma página de interface do usuário.
- Corrigir algumas operações de usuário que estavam levando muito tempo para ser executado.
- Corrigir um acidente ao definir materiais em um componente de modelo.

##### Física

- Corrigir alguns vazamentos de memória.

##### Amostras

- Corrigir alguns scripts que estavam dependendo dos recursos do nível 6 do C#.


### Versão 1.8.3-Beta

Data de lançamento: 2016/10/07

#### Melhorias

##### Editor
- Criar um Prefab de um grupo de entidades o nomeará após a primeira entidade
- Mensagens mais relevantes exibidas agora quando os ativos não são encontrados

##### Física

- Adicione um novo método de salto que suporta um vetor de salto arbitrário.
- Adicionar Normalizado Distância para HitResult.
- Adicione uma versão do RaycastPenetrating ( e shape varre) que aceita um grupo e filtros de acordo.
- Adicione deslocamentos opcionais para formas de casco convexo.
- Tornar o método Move obsoleto, o novo método a ser usado a partir de agora é SetVelocity que aplica internamente a etapa de tempo fixo da simulação.
- Alterar o valor padrão de inclinação máximo do controlador de caracteres para 45 graus

#### Questões corrigidas

##### Motor

- Corrigir o cálculo de caixas de amarração de malhas de pele.
- Corrigir modo de encolhimento para malhas com escala negativa.
- Desativar flor, manchas de luz e chamas de lente quando a passagem brilhante é desativada.
- Corrigir um problema com o sistema de eventos e agendamento.

##### Física

- Corrigir a renderização da forma de depuração de colisões estáticos quando esses colisões são forçados a se mover
- Corrigir renderização de forma de depuração de entidades habilitadas/desativadas.
- Corrigir problemas com salto
- Corrigir a propagação de transformação de corpos dinâmicos quando em um esqueleto.

##### Serialização

- Corrigir um problema no SharpYaml impedindo que tipos genéricos sejam devidamente serializados. Por exemplo Lista<string> agora pode ser usado a partir de um script.


## Questões conhecidas

- No Linux, ao alternar a plataforma gráfica subjacente, a renderização não ocorrerá ou falhará. Excluir o cache, local e roaming pasta no host Linux e reiniciar o jogo deve corrigir o problema.
