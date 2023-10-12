# Pré-fabricadas aninhadas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>

Você pode adicionar prefabs a outras pré-fabricadas. Estes são chamados **nested prefabs**.

Por exemplo, imagine que você tem uma pré-fabricada de mesa, uma cadeira pré-fabricada e uma pré-fabricada de televisão. Então você cria uma sala de estar pré-fabricada, que por sua vez contém a mesa, cadeira e pré-fabricadas de televisão. Você pode então criar uma casa pré-fabricada, que por sua vez contém a sala de estar pré-fabricada, que por sua vez contém a mesa, cadeira e pré-fabricadas de televisão. Não há limite para quantos prefabs você pode aninhar.

Se você modificar uma pré-fabricada aninhada, todas as pré-fabricas dependentes herdam a mudança automaticamente. Por exemplo, se você mudar a forma da tabela pré-fabricada, ele muda na sala de estar e casa pré-fabricadas também.

Este vídeo demonstra um exemplo de prefabs aninhadas:

<p>
<video autoplay loop class="responsive-video" poster="media/create-nested-prefab.jpg">
   <source src="media/create-nested-prefab.mp4" type="video/mp4">
</video>
</p>

No painel central, já temos um pré-fabricado chamado **Lamp**. No painel direito, criamos uma nova pré-fabricada chamada **Boxes**, compreendendo várias entidades de caixa posicionadas juntas. Acrescentamos o pré-fabricado Boxes à lâmpada pré-fabricada. Mudanças feitas no pré-fabricado Boxes são refletidas no pré-fabricado Lâmpada. Estes são, por sua vez, refletidos nas instâncias da lâmpada pré-fabricada na cena (painel esquerdo).

## Ver também

* [Índice de pré-fabricada](index.md)
* [Criar uma pré-fabricada](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Sobrepor propriedades pré-fabricadas](override-prefab-properties.md)
* [Modelos pré-fabricadas](prefab-models.md)