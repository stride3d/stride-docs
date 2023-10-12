# Pré-fabricados

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

A **prefab** é uma versão "master" de um objeto que você pode reutilizar onde quiser. Quando você muda o prefab, cada instância do prefab também muda.

Por exemplo, imagine que façamos um objeto de árvore simples reunindo várias entidades. As entidades contêm componentes como modelos, materiais, colisões de física, e assim por diante, que por sua vez os ativos de referência.

Agora imagine que queremos colocar várias árvores ao redor da cena. Podemos simplesmente duplicar a árvore, mas se quisermos modificá-la mais tarde, temos que editar cada uma individualmente. Isso é demorado e deixa espaço para erros.

A melhor abordagem é fazer a árvore pré-fabricada. Então podemos colocar tantas árvores como nós gostamos, e quando modificamos o prefab, cada árvore é instantaneamente atualizada para combinar. Isso economiza muito tempo.

![Criando árvores com prefabs](media/create-prefab-trees.gif)

O uso mais comum para prefabs é criar uma pequena parte de sua cena — como um carro, NPC, ou item de mobiliário — e duplica-lo quantas vezes você precisar. Quando você precisa modificá-lo — por exemplo, se você quiser mudar seu modelo — você pode alterá-lo em um lugar e aplicar a mudança em todos os lugares ao mesmo tempo.

Você pode fazer qualquer entidade ou combinação de entidades de um pré-fabricado; eles podem ser tão simples ou tão complexos quanto você precisa. As pré-fabricadas podem até conter outras pré-fabricadas (conhecidas como [nested prefabs](nested-prefabs.md)).

Você pode [ substituir propriedades específicas](override-prefab-properties.md) em cada instância pré-fabricada.

## Ver também

* [Criar uma pré-fabricada](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Pré-fabricadas aninhadas](nested-prefabs.md)
* [Sobrepor propriedades pré-fabricadas](override-prefab-properties.md)
* [Modelos pré-fabricadas](prefab-models.md)
* [Arquétipos](../archetypes.md)