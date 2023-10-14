# Notas de versão do Xenko 1.5

## Destaques

#### Asset de esqueleto

Foi introduzido um novo activo Skeleton (*.xkskel). Ambos os modelos e animações agora têm uma referência a um esqueleto. Isso permite reutilizar a mesma definição de esqueleto em vários ativos e retardar modelos e animações para diferentes esqueletos.

Esqueletos podem ser criados ao lado de outros ativos, ao importar um arquivo FBX ou outro formato de modelo.

<img src="media/ReleaseNotes-1.5/SkeletonThumbnail.png" align="center" />

#### Suporte de movimento de raiz para modelos, câmeras, luzes, etc.

As animações agora aplicam o movimento raiz se não tiverem esqueleto, ou a propriedade ‘Root Motion’ está ativada no ativo de animação. A animação irá então mover a própria entidade, em vez do osso raiz do esqueleto.
Isso é especialmente útil para importar animações de luzes, câmeras ou modelos sem pele, sem a necessidade de acoplá-los aos ossos de um esqueleto.

O importador FBX agora também importar animações de vários parâmetros da câmera (near-plane, long-plane, campo de visão) e aplicá-los à CameraComponent da entidade animada. Mais propriedades podem ser suportadas no futuro.

<img src="media/ReleaseNotes-1.5/RootMotionProperty.png" align="center" />

#### Novo sistema de atualização de animação

O sistema de animação agora internamente usa um novo UpdateEngine para atualizar objetos. Isso nos permite animar propriedades arbitrárias de entidades, ao acessá-las de forma altamente eficiente.
Será a base para um futuro editor de curva de animação dentro do GameStudio.

A nova amostra ‘Animated Properties’ demonstra como criar animações de qualquer propriedade a partir de um script.


#### Sistema de perfis simples
Agora é possível visualizar informações de perfil de todos os sistemas de jogo e perfis personalizados diretamente dentro de seus jogos em execução.
Para começar, use o script integrado do Game Profiler, anexá-lo a uma entidade e quando o jogo estiver executando a imprensa LCtrl-LShift-P.

<img src="media/ReleaseNotes-1.5/profiler.png" align="center" />

#### Formas de depuração física no tempo de execução
Agora é possível permitir a renderização de formas de colisão de física durante o tempo de execução.
As formas de depuração são entidades normais e devem ser habilitadas para cada forma física que o requer.
A melhor maneira de começar com esse asset é usar o script embutido do Physics Shapes Render e anexar o script a qualquer entidade que tenha um Componente de Física e quando o jogo estiver executando a imprensa LCtrl-LShift-P.

<img src="media/ReleaseNotes-1.5/phys-debug.png" align="center" />

#### Visualização de ativos
A visualização de ativos foi melhorada para ajudá-lo a organizar e gerenciar seus ativos.

###### Novo menu ‘ver opções’
As opções de visualização são reunidas em um único menu acessível a partir da barra de ferramentas de visualização de ativos.

<img src="media/ReleaseNotes-1.5/AssetViewOptions.png" align="center" />

Você pode exibir todos os ativos na pasta atual apenas, na pasta atual e sua subpasta. A terceira opção permite exibir os ativos e as sub pastas.

Você também pode classificar seus ativos por nome, ordem, tipo ou data de modificação.

###### Nova barra de filtro de ativos
Com a nova barra de filtro de ativos, você pode filtrar seus ativos por nome, tag, tipo ou uma combinação desses. Cada ‘filtro tag’ pode ser desativado por um único clique ou removido dos filtros ativos.
<img src="media/ReleaseNotes-1.5/AssetFilterBar.png" align="center" />


Para adicionar um filtro, digite na barra de filtro e os filtros de correspondência serão exibidos. Clique no que deseja adicioná-lo à lista de filtros ativos.
<img src="media/ReleaseNotes-1.5/AddingAssetFilter.png" align="center" />

Apenas os ativos correspondentes aos filtros ativos serão exibidos na visualização de ativos. No entanto, é importante ressaltar que os filtros de tipo são inclusivos, enquanto os filtros de nome e etiqueta são exclusivos.

###### Suporte de pasta na visualização de ativos
Se as opções "Ativos e pasta na pasta selecionada" forem selecionadas, o primeiro nível de subpasta será exibido na visualização de ativos. Você pode arrastar e soltar ativos dentro deles. Você também pode copiar / colar a estrutura completa da pasta.
<img src="media/ReleaseNotes-1.5/FolderSupport.png" align="center" />

#### Os ativos de cópia paga com suas dependências
Agora você tem a capacidade de copiar ativos com suas dependências. Para fazer isso, use a nova entrada ‘Copiar com dependências’ no menu de contexto de visualização de ativos ou pressione Ctrl+Shift+C.
<img src="media/ReleaseNotes-1.5/CopyAssetWithDependencies.png" align="center" />
Por exemplo, se você copiar / colar um modelo com suas dependências, você receberá uma cópia deste modelo junto com uma cópia de todas as suas dependências (skeleton, materiais, texturas)

#### Suporte de fronteira e centro no editor de folhas de sprite
Para sprites ‘Sprite2D’, você pode mover a posição do centro selecionando o <img src="media/ReleaseNotes-1.5/SpriteCenterIcon.png" style="display: inline"/> ícone na barra de ferramentas do editor de sprite. Pegue e mova a cruz para a posição desejada.

Para sprites ‘UI’, você pode mudar as fronteiras selecionando o <img src="media/ReleaseNotes-1.5/SpriteBorderIcon.png" style="display: inline" /> ícone na barra de ferramentas do editor de sprite. Você pode então redimensionar cada borda (esquerda, superior, direita e inferior) separadamente da mesma forma que a região da textura, agarrando e movendo um deles. No entanto, é importante ressaltar que o <img src="media/ReleaseNotes-1.5/SpriteBorderLockIcon.png" style="display: inline" /> ícone permite que você ‘bloquear’ ou ‘desbloquear’ as bordas de sprite enquanto redimensiona a região de textura.

#### Novos scripts embutidos
Adicionamos mais alguns scripts integrados com esta versão, como um script de câmera FPS e o script de controlador de primeiro jogador. Para usá-los, basta clicar em “New Asset”, “Script source code”, selecionar o script desejado e anexá-lo a uma entidade adequada.

<img src="media/ReleaseNotes-1.5/built-in_Scripts.png" />

#### Fontes Sprite pré-compiladas
Os direitos da fonte são bastante restritivos e é bastante comum que apenas algumas pessoas do projeto tenham acesso aos arquivos de fonte. Isso estava impedindo que algumas pessoas construíssem o jogo.
Para resolver este problema, criamos um novo tipo de ativo, as fontes sprite pré-compiladas. É um ativo tomando como entrada uma imagem e contendo todas as informações do glifo necessárias para renderizar o conjunto de caracteres especificado. Dentro de seus jogos você pode usá-lo exatamente como uma fonte sprite padrão.
Para gerar uma fonte sprite pré-compilada, o proprietário do arquivo de fonte original só tem que clicar com o botão direito em uma fonte estática existente e escolher “Generate Precompiled Font”.

<img src="media/ReleaseNotes-1.5/PrecompiledSpriteFont.png" />

## Versão 1.5.4-beta
Data de lançamento: 2016/03/03

#### Questões corrigidas
- Corrigir um problema de certificação restante para o Windows Universal Apps.
- Corrigir um problema com a seleção do Perfil Gráfico em placas gráficas INTEL.

## Versão 1.5.3-beta
Data de lançamento: 2016/02/18

#### Questões corrigidas
- Corrigir um problema na atualização do pacote apagando o conteúdo do shader e arquivos de efeito.
- Corrigir um acidente na resolução de caminhos relativos inválidos impedindo carregar o projeto no editor.
- Não adicione caixas de pilares ao redimensionar a janela de um jogo de paisagem no Windows 10, mas reajuste o tamanho do buffer.
- Substituir a fonte `MS Mincho` por uma fonte gratuita incorporada em amostras (A fonte não está disponível em todos os sistemas)

## Versão 1.5.2-beta
Data de lançamento: 2016/01/15

#### Questões corrigidas

###### Activos

- Adicionado o falta XenkoDefault Fonte exigida pelo sistema de profiler.
- A geração de casco convexo agora está trabalhando junto com o novo Skeleton Asset.

###### Motor

- Corrigir problema ocorrendo com a depuração de funções async (variável local ido, namespace ignorado, passo sobre quebrado).
- Corrigir os problemas que impedem de passar a certificação de loja Windows 10.
- Adicione suporte para redimensionamento adequado no Windows Universal Apps.

###### Game Studio

- Corrigir problemas com os valores exibidos de rotações mudando após a validação.

###### iOS

- O script Connection Router necessário para compilar shaders em dispositivos iOS foi corrigido.


#### Melhorias

###### Activos

- A compilação Skybox não requer mais uma GPU DX11. Nós adicionamos suporte DX10 para garantir que GameStudio funciona bem com GPUs menos recentes também.

###### Motor

- Adicione suporte para dispositivos OpenGLES que não suportam formatos de profundidade embalados.

###### Game Studio

- Adicione a possibilidade de editar os 3 componentes de um vetor simultaneamente.

## Versão 1.5.1-beta
Data de lançamento: 2015/12/22

#### Questões corrigidas

###### Motor

- Corrigir compilação LLVM AOT na configuração de lançamento para iOS

###### Game Studio

- Corrigir um possível acidente ao usar tipos sem tipo de base em scripts ([#342](https://github.com/SiliconStudio/paradox/issues/342))
- Corrigir duplo clique na pasta na janela do selecionador de ativos
- Corrigir configurações de padrão IDE redefinir para null quando não deve.
- Corrigir o problema da miniatura de textura não atualizando quando modificar o conteúdo do arquivo de origem.
- Criar um ativo com um modelo pode ser devidamente desfeito. ([#343](https://github.com/SiliconStudio/paradox/issues/343))


## Versão 1.5.0-beta
Data de lançamento: 2015/12/17

#### Melhorias

###### Lançador

- Adicione um botão ‘reconectar’, caso o lançador tenha sido iniciado em modo offline.

###### Game Studio

- O menu de criação de ativos sempre exibe todos os ativos possíveis para criar e muda para um local adequado quando o local selecionado atualmente é inválido para o tipo de ativo escolhido.
- Melhore a miniatura de animação e a visualização. Detecte e use automaticamente o modelo correspondente.
- Melhore a filtragem de ativos na visualização de ativos. A tag do filtro pode ser adicionada, desativada ou removida a qualquer momento.
- As pastas são exibidas na visualização de ativos.
- Os ativos podem ser classificados pela última data de modificação.
- Adicione a capacidade de copiar / colar ativos com suas dependências.
- Melhore o editor de folhas de sprite. Redimensionar fronteiras ou mover a região da textura comporta-se corretamente, especialmente quando se chega às fronteiras da imagem. O fundo fora da região de textura selecionada pode ser escurecido.
- A visualização da folha de Sprite pode ser exibida enquanto a folha de sprite está sendo editada.
- Alterar o estilo de diálogo da mensagem. Algumas caixas de diálogo de confirmação (por exemplo, a exclusão de um ativo) podem ser desativadas nas configurações (sob a confirmação Interface /..).

###### Jogos de Jogos

- Use os ícones de aplicação como ícone de janela nas janelas
- Use AssamblyProductAttribute. Produto como título de janela nas janelas

###### Gráficos

- Adicionar suporte para Gif carregar e jpeg salvar para Android
- Adicione a possibilidade de carregar imagens e texturas como sRGB
- Adicionar um campo estático no GraphicDevice para conseguir a plataforma gráfica atual
- Adicionar código nativo otimizado em SpriteBatch

###### Motor

- Use Color4 em vez de Cor em componentes sprite.
- Adicionar suporte para o movimento demasiado no TransformComponent
- Expose AnimationComponent. PlayingAnimations ao editor para ser capaz de definir a animação inicial da entidade facilmente.
- Faça a conexão com o editor para a compilação do shader falhar se não houver conexão dentro de 5 segundos

###### UI

- Adicione uma cor de tint ao UI ImageElement.

#### Questões corrigidas

###### Activos

- Regressão do compilador fixo que estava levando mais de 5s para completar a compilação de ativos
- Corrigir a mensagem de log mostrando o nome dos ativos referenciados ausentes durante a compilação de ativos
- Corrigir acidente na compilação de ativos quando o caminho de instalação Xenko contém um caracter '#'.
- Corrigir a sombra restante após resolver a colisão de nome de ativos.

###### Motor

- Impedir uma exceção a ser jogado em cada quadro quando a propriedade Modelo de um ModelComponent é nulo.
- Use o ShaderProfile do GameSettings em vez do nível de dispositivo gráfico, pois é provável que o perfil usado para compilar shaders no tempo de compilação.

###### Game Studio

- Corrigir um acidente ao tentar buscar o ativo alvo de uma referência que é nulo.
- Corrigir um bug na edição de propriedades SpriteFont que estava impedindo de usar corretamente a fonte do sistema
- Corrigir miniaturas de SpriteFont ao usar a fonte do sistema.
- Corrigir um acidente ao duplicar uma entidade no editor de cena.
- Corrigir problema de renomeação quando duplicar uma entidade no editor de cena.
- Corrigir o problema miniaturas escuras para texturas no modo HDR.
- Corrigir configurações de gizmo não salvo / recarregado corretamente.
- Corrigir cópia/paste de pastas no explorador de soluções.
- Corrigir um acidente no editor de folhas de sprite quando uma imagem de origem foi modificada em um editor externo.
- Corrigir um potencial acidente quando a região de textura está fora da imagem.
- Corrigir um erro impedindo criar um quadro no editor de sprite ao deixar cair um arquivo.
- Corrigir um erro impedindo cair o ativo em uma pasta vazia.
- Corrigir erro ao tentar importar animação de um modelo que não tem nenhum.
- Corrigir o tamanho incorreta da janela de tela cheia quando a resolução de tela mudou.
- Corrigir problema de dependência de pacotes ao remover um pacote dependente.

###### Renderização

- Sombras desaparecendo fixas devido ao cálculo errado da distância da cascata

## Questões conhecidas

- iOS tem um problema de acidente excelente após um segundo em ARM64 iPhones. Isto está sob investigação.
