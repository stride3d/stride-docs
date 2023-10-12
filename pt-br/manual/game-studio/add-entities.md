# Adicionar entidades

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Level Designer</span>

Depois de criar uma cena, você precisa adicionar entidades à sua cena para construir seu nível.

## Criar uma entidade do Editor de Cena

1. Acima do **Entity Tree**, clique no ícone ![Plus](media/add-entities-to-a-scene-plus-icon.png).

   O menu **Create** abre:

   ![Scene Editor Criar menu](media/add-entities-to-a-scene-context-menu.png)

   Alternativamente, clique com o botão direito do mouse no **Entity Tree** ou em qualquer lugar no **scene**. Se você criar uma entidade no local, o Game Studio adiciona uma entidade no local que você clica.

   ![Right-click Entidade Árvore ou cena](media/create-entity-in-scene.png)

2. Selecione **Empty entity** ou selecione um modelo de entidade.

   Game Studio adiciona uma entidade à cena ativa e a exibe na Entity Tree:

   ![ Nova Entidade em MainScen](media/add-entities-to-a-scene-empty-entity.png)

> [!Tip]
> A cena **active** é adicionada às entidades de cena. Para definir a cena ativa, **Entity Tree** (esquerda por padrão), clique com o botão direito do mouse na cena e selecione ** cena ativa**.

> ![ Set active cena](media/set-active-scene.png)

> A cena ativa não tem efeito no tempo de execução.

## Criar uma entidade de um ativo

Você pode adicionar uma entidade arrastando e soltando um ativo do **Asset View** para a cena.

<video controls autoplay loop height="360" width="480">
   <source src="media/add-entities-to-scene-drag-and-place-entity.mp4" type="video/mp4">
</video>

O Game Studio cria automaticamente uma entidade e adiciona o componente e referência necessários com base no ativo que você usou. Por exemplo, se você arrastar um ativo modelo para a cena, Game Studio cria uma entidade com um componente modelo com o ativo do modelo como sua referência.

> [!NOTE]
> Você só pode criar entidades arrastando ativos com componentes correspondentes. Por exemplo, os componentes do modelo usam ativos do modelo, assim pode ser arrastado; as animações não têm componente correspondente, então não podem ser arrastadas.

## Configurar um componente

**Componentes** adicionam propriedades especiais a entidades que definem o seu propósito no seu projeto. Por exemplo, você adiciona luzes à sua cena adicionando componentes de luz a entidades, adiciona modelos adicionando componentes de modelo e assim por diante. Uma entidade sem componente não tem nenhum propósito.

Acrescentar um componente a uma entidade:

1. Selecione a entidade.

2. Na Grade de Propriedade, clique em **Adicionar componente** e adicione componente que você deseja.

   ![ Adicionar um componente no Property Grid](media/add-entities-to-a-scene-add-model-component.png)

   Game Studio adiciona o componente.

   ![ Novo componente em Propriedade Grid](media/add-entities-to-a-scene-add-model-component-added.png)

3. **Defina as propriedades** do seu novo componente.

## Duplicar uma entidade

Você pode duplicar uma entidade junto com todas as suas propriedades. Duplicar uma entidade e, em seguida, modificar as propriedades da nova entidade é muitas vezes mais rápido do que criar uma entidade do zero.

1. Selecione a entidade que deseja duplicar.
2. Segure **Ctrl** e mova a entidade com o mouse.

   A entidade e todas as suas propriedades são duplicadas.

<video controls autoplay loop height="360" width="480">
	   <source src="../get-started/media/populate-scene-duplicate-entity.mp4" type="video/mp4">
	</video>

Alternativamente, clique com o botão direito do mouse na entidade e selecione ** Duplicar entidades selecionadas**.

![ Duplicar entidades selecionadas](../get-started/media/duplicate-selected-entities.png)

## Renomear uma entidade

1. Selecione a entidade e pressione **F2**.
2. Digite um nome para a entidade e, em seguida, pressione **Enter**.

![ entidade nomeada em uma cena](media/add-entities-to-a-scene-renamed-entity.png)

## Ver também

* [Gerenciar cenas](manage-scenes.md)