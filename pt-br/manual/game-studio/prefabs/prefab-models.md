# Modelos pré-fabricadas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

** Modelos pré-fabricados** convertem pré-fabricas em apenas drawcalls. Isso é útil para otimização, pois a Stride apenas torna o modelo final em vez das entidades separadas no pré-fabricado. Quando você faz alterações na pré-fabricada, Game Studio regenera o modelo pré-fabricado.

## Retornos

Os modelos pré-fabricados não herdam elementos como luzes, colisões ou outros componentes — são apenas modelos e têm de ser usados como outros modelos. Por exemplo, se você tem um pré-fabricado composto por dois modelos com componentes de física, o modelo pré-fabricado cria um único modelo dos dois modelos e ignora os componentes da física. Se você precisar adicionar componentes a um modelo pré-fabricado, adicione-os ao próprio modelo pré-fabricado.

Os modelos pré-fabricadas não expõem materiais. Isso significa que você não pode visualizá-los ou editá-los no ativo do modelo pré-fabricado, ou em componentes do modelo que usam o modelo pré-fabricado.

## Criar um modelo pré-fabricada

1. No **Asset View**, selecione **Add asset > Model > Prefab model**.

   ![ Adicionar modelo pré-fabricado](media/add-prefab-model.png)

2. Na Grade de Propriedade (à direita por padrão), ao lado de **Prefab**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select asset**).

   ![ Propriedades pré-fabricadas](media/prefab-model-properties.png)

   A janela **Selecione um ativo** abre.

   ![Selecionar pré-fabricada para modelo](media/select-prefab-for-model.png)

3. Selecione a pré-fabricada que deseja criar um modelo de e clique em **OK**.

   Game Studio adiciona o modelo pré-fabricada para o Asset View.

   ![Prefab modelo adicionado ](media/prefab-model-added.png)

## Ver também

* [Criar uma pré-fabricada](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Pré-fabricadas aninhadas](nested-prefabs.md)
* [Sobrepor propriedades pré-fabricadas](override-prefab-properties.md)
* [Arquétipos](../archetypes.md)