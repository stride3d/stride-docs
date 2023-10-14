# Use prefabs

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

Para instanciar uma pré-fabricada, arraste e solte-a a partir do **Asset View** para a cena.

Você pode reorganizar entidades na instância pré-fabricada como você faz com outras entidades:

* criar entidades de filhos e pais
* arrastar entidades para adicioná-los à instância prefab
* arrastar entidades da instância pré-fabricada para torná-los entidades independentes

## Gerenciar entidades pai pré-fabricadas

Por padrão, Game Studio cria uma entidade pai vazia com as entidades do pré-fabricado como seus filhos. A Entidade Árvore exibe o nome pai pré-fabricado em verde ao lado das entidades da criança.

![ Prefab pai e crianças em Entity Tree](media/prefabs-in-scene-editor.png)

Isso é útil porque você pode gerenciar as entidades pré-fabricadas como um grupo e manter suas posições relativas. Por exemplo, imagine que você tem um carro pré-fabricada montado de várias entidades (um corpo, assentos, quatro rodas, etc). Você quer que suas entidades componentes permaneçam agrupadas enquanto você move o carro ao redor da cena. Você pode fazer isso movendo a entidade pai pré-fabricada.

Se você não quiser criar uma entidade parente com o pré-fabricado, segure **Alt** quando você deixar a pré-fabricada na cena. Isso é útil se você não se importa com as posições relativas das entidades do pré-fabricado e não precisa movê-las juntas como um grupo. Por exemplo, imagine que você tem uma pré-fabricada composta de várias entidades de caixa dispostas de forma aleatória. Não é importante que os caixotes mantenham sua posição relativa depois de colocá-los; na verdade, várias pilhas idênticas de caixas dispostas "aleatoriamente" parece artificial.

Neste caso, uma entidade parental é desnecessária. Em vez disso, você pode criar várias instâncias do prefab, em seguida, reorganizar suas entidades de caixa individual para criar o efeito que você precisa.

| Posições relativas mantidas | Posições relativas ignoradas |
|-------------------------------------------------|---------------------------------------------|
| ![ Caixas duplicadas](media/boxes-duplicated.jpg) | ![ Caixas duplicadas](media/boxes-random.jpg) |

## Ligação de ruptura para pré-fabricada

Depois de adicionar uma instância pré-fabricada, você pode quebrar a ligação entre o pré-fabricado e qualquer uma de suas entidades menores. Isso significa que a entidade infantil não é mais afetada pelas mudanças que você faz para a pré-fabricada.

Para fazer isso, no **Scene Editor**, clique com o botão direito do mouse em uma entidade ou entidades da criança e selecione **Break link para prefab**.

![ Ligação rápida entre a criança e o pré-fab](media/use-prefabs-break-link-to-prefab.gif)

## Instantiate e adicionar prefabs no tempo de execução

Para usar prefabs no tempo de execução, você precisa instanciá-los e, em seguida, adicioná-los à cena no código.

```cs
classe pública SpawnPrefabOnStart : StartupScript
(
    public Prefab MyPrefab { get; init; } // init aqui impede que outros scripts mudem esta propriedade
    
    anula de sobreposição pública Start()
    (
        // Um prefab pode conter várias entidades
        var entidades = MyPrefab.Instantiate();
        // Adicionando-os à cena em que esta entidade está
        Entity.Scene.Entities.AddRange (entidades);
    }
}
```

> [!Note]
> `Instantiate()` por si só não é suficiente adicionar uma instância pré-fabricada à cena. Você também precisa `Add()` ou `AddRange()` them to a scene . Por exemplo, se o seu prefab contém um modelo, o modelo é invisível até adicionar a instância pré-fabricada. Da mesma forma, se seu prefab contém um script, o script não funcionará até que você adicione a instância prefab.

Se você tiver um pré-fabricado chamado *MyBulletPrefab* na pasta raiz do seu projeto, você pode instanciar e adicioná-lo com o seguinte código:

```cs
privado void InstantiateBulletPrefab()
(
    // No entanto, é importante ressaltar que "MyBulletPrefab" refere-se ao nome e localização do seu ativo pré-fabricado
    var myBulletPrefab = Content.Load<Prefab>("MyBulletPrefab");

    // Instantiate a prefab
    var instance = myBulletPrefab.Instantiate();
    var bullet = instance[0];

    // Alterar a coordenada X
    bala.Transform.Position.X = 20.0f;

    // Adicionando apenas a bala à cena raiz
    SceneSystem.SceneInstance.RootScene.Entities.Add(bullet);
}
```

> [!Note]
> No tempo de execução, as mudanças feitas em pré-fabs (*myBulletPrefab* no exemplo acima) não afetam as instâncias pré-fabricadas existentes (*bullet* no exemplo acima). Chamadas subsequentes para ``Instantiate(Prefab)`` incluem novas mudanças.
> Por exemplo, imagine que você tem uma árvore pré-fabricada que contém um script para mudar a cor da árvore de verde para vermelho no tempo de execução. O script não afetará instâncias existentes do prefab; ele só pode alterar a cor de instâncias **future**. Isso significa que os pré-fabs instantâneos após o código correr terão a nova cor, mas os pré-fabs existentes não vão.

## Ver também

* [Índice de pré-fabricada](index.md)
* [Criar uma pré-fabricada](create-a-prefab.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Pré-fabricadas aninhadas](nested-prefabs.md)
* [Sobrepor propriedades pré-fabricadas](override-prefab-properties.md)
* [Modelos pré-fabricadas](prefab-models.md)
