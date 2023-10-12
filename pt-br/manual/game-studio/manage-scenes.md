# Gerenciar cenas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

As cenas e entidades são organizadas em uma hierarquia, com a cena **root** no topo. Esta hierarquia é exibida no **Entity Tree** no Editor de cenas à esquerda.

![Cerca de hierarquia cene](media/scene-hierarchy-tree.png)

A cena raiz contém todas as cenas e entidades em seu jogo. Deve conter entidades comuns que as outras cenas e entidades usam, como scripts de lógica do jogo.

![Esquema hierarquizado ](media/scene-hierarchy-diagram.png)

As cenas são mantidas em pastas diferentes. Isso significa que pessoas diferentes podem trabalhar nelas sem sobrescrever o trabalho um do outro.

> [!Note]
> Quando as cenas são carregadas no tempo de execução, suas cenas de **child não são carregadas automaticamente demais**. Você tem que carregar cenas de crianças em código. Para obter mais informações, consulte as cenas [Load](load-scenes.md).

## Definir cenas de pais e filhos

A relação entre os pais e as cenas infantis é definida na criança, não no pai. Em outras palavras, as cenas infantis sabem sobre suas cenas parentais, mas as cenas parentais não sabem sobre suas cenas infantis.

Há várias maneiras de fazer uma cena uma criança de outra cena:

* No Editor de cena **Entity Tree** (esquerda por padrão), arraste a cena para a cena que você quer fazer seu pai.

* Arraste a cena do **Asset View** (bottom by default) para a cena que você deseja fazer seu pai no **Entity Tree**.

* Na cena **Property Grid** (à direita por padrão), ao lado de **Parent**, especifique a cena que deseja ser o pai da cena.

   ![Propriedades cena pai](media/properties-parent-scene.png)

## Defina a cena padrão

O **default cena** é a cena Stride carrega no tempo de execução. Você pode definir isso no ativo [Game Settings](game-settings.md).

1. No **Solution Explorer** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Select Assets pasta asset](media/select-asset-folder.png)

2. No **Asset View** (o painel inferior por padrão), selecione o ativo **GameSettings**.

   ![Selecionar configurações de jogo asset](media/select-game-settings-asset.png)

3. No **Property Grid** (o painel direito por padrão), ao lado de **Default Scene**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![ Definir a cena padrão](media/game-settings-default-scene.png)

   A janela **Selecione um ativo** abre.

2. Selecione a cena padrão e clique em **OK**.

Stride carrega esta cena em tempo de execução.

Para obter mais informações sobre o ativo Configurações de Jogo, consulte [Configurações de Jogo](game-settings.md).

## Defina a cena ativa

A cena **active** é que as entidades de cena são adicionadas quando você as deixa cair no Editor de cena. Game Studio adiciona as entidades como crianças à cena ativa.

Para definir a cena ativa, **Entity Tree** (esquerda por padrão), clique com o botão direito do mouse na cena e selecione ** cena ativa**.

![ Set active cena](media/set-active-scene.png)

A cena ativa não tem efeito no tempo de execução.

## Bloquear cenas e entidades

Você pode bloquear cenas e entidades para que eles não possam ser selecionados na janela principal. Isso é útil quando você tem muitas coisas em sua cena. Você ainda pode selecionar cenas e entidades na Entity Tree.

Para bloquear ou desbloquear uma cena ou entidade, na Árvore de Entidade, clique no ícone **padlock**.

![Padlock icon](media/lock-scene-or-entity.png)

> [!Tip]
> Quando você bloqueia uma cena, todas as cenas de crianças e entidades também estão bloqueadas. Para bloquear uma entidade junto com suas entidades de criança, segure **Ctrl** e clique no ícone do cadeado.

Os itens bloqueados têm um ícone ** dourado bloqueado padlock** na Árvore da Entidade.

![Entendimento linchado](media/locked-entity.png)

## Carregar e descarregar cenas no Editor de cenas

Você pode carregar e descarregar cenas (com todas as cenas e entidades de crianças) no Editor de cenas. Descarregamento de cenas no editor é útil se, por exemplo, você quiser remover a desordem da sua visualização de edição ou melhorar o desempenho do editor.

As capturas de tela abaixo mostram uma cena raiz com cenas de crianças carregadas e descarregadas. A cena raiz contém entidades que todas as cenas usam, incluindo o [skybox](../graphics/textures/skyboxes-and-backgrounds.md), [scripts](../scripts/index.md), asteroides e o personagem do jogador. As cenas infantis são seções de nível.

![ cenas carregadas e carregadas](media/scenes-unloaded.jpg)

Para carregar ou descarregar uma cena, no **Scene Editor**, no **Entity Tree** à esquerda, ao lado da cena que pretende carregar ou descarregar, clique no ícone **eye**.

![Load cena icon](media/load-unload-scene-icon.png)

## Mover uma cena

Como as cenas não são entidades, elas não têm componentes de transformação. No entanto, você pode mover uma cena usando sua propriedade **offset**.

![Scene offset property](media/scene-offset.png)

Para mover uma cena no tempo de execução, use:

`myScene.Offset = novo Vector3(x, y, z);`

Substitua `myScene` com o nome da cena, e `x,y,z` com as coordenadas XYZ que você deseja mover a cena para.

## Ver também

* [Criar e abrir uma cena](create-a-scene.md)
* [Navegue no Editor de Cena](navigate-in-the-scene-editor.md)
* [Cenas de carga](load-scenes.md)
* [Adicionar entidades](add-entities.md)
* [Gerenciar entidades](manage-entities.md)