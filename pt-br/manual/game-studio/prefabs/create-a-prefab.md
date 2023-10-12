# Criar uma pré-fabricada

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

No **Asset View**, clique em **Add asset** e selecione **Prefabs** > **Prefab**.

![Criar uma prefab do Asset View](media/create-prefab-from-asset-view.png)

Game Studio cria um ativo pré-fabricado vazio com o nome padrão *Prefab*. Clique duas vezes no ativo para abrir o **Prefab Editor** e adicionar entidades.

## Criar uma pré-fabricada de uma entidade

Você também pode criar uma pré-fabricada de uma entidade ou entidades existentes.

1. No **Scene Editor**, selecione a entidade ou entidades de que deseja criar uma pré-fabricada.
> [!Tip]
> Segure Ctrl para selecionar vários itens.

2. Clique com o botão direito do mouse na seleção e selecione **Create prefab da seleção**:

![Criar uma pré-fabricada da seleção](media/create-prefab-from-selection.gif)

Game Studio cria um ativo pré-fabricado da entidade ou entidades selecionadas. Você pode acessar a nova pré-fabricada do **Asset View**.

![Prefab em Visualização de ativos](media/prefab-asset.png)

> [!Note]
> Depois de criar um pré-fabricado de uma seleção, a seleção original em si **comes a prefab**.

### Criar uma pré-fabricada de uma pré-fabricada modificada existente

Você pode criar novas pré-fabricadas de pré-fabricadas modificadas. Por exemplo, você pode instanciar um pré-fabricado, [ substituir uma de suas propriedades](override-prefab-properties.md), em seguida, usar esta instância pré-fabricada modificada para criar uma nova pré-fabricada.

## Ver também

* [Índice de pré-fabricada](index.md)
* [Use prefabs](use-prefabs.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Pré-fabricadas aninhadas](nested-prefabs.md)
* [Sobrepor propriedades pré-fabricadas](override-prefab-properties.md)
* [Modelos pré-fabricadas](prefab-models.md)