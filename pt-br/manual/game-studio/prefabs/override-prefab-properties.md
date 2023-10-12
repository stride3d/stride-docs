# Sobrepor propriedades pré-fabricadas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>
<span class="badge text-bg-success">Designer</span>

Se você modificar uma propriedade em uma instância pré-fabricada, a instância não herda mais alterações do pré-fabricado para essa propriedade. Isso é chamado de **override**.

![ Como pré-fabricados funcionam](media/create-manage-prefabs-how-prefabs-work.png)

No vídeo seguinte, o pré-fabricado **Lamp** contém várias entidades de caixa que pertencem ao pai **Boxes**. Quando eliminamos as caixas da instância, apenas essa instância é afetada. O prefab (mostrado à direita) é inalterado.

Se adicionarmos outra caixa ao pai **Boxes** no pré-fabricado, não aparece na instância sobreposta. Isso porque eliminamos o pai **Boxes** da instância.

<p>
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</p>

## View overridden properties

No **Property Grid**, você pode ver quais propriedades da instância pré-fabricada diferem dos valores de base na pré-fabricada.

* **Overridden** e **unique** propriedades são **branco e negrito**:

   ![ Propriedades anteriores são brancas](media/use-prefabs-overriden-properties-appear-white.png)

* **Identical** propriedades são **gray**:

   ![ Propriedades idênticas são cinza](media/use-prefabs-identical-properties-appear-gray.png)

### Repor uma propriedade ao valor pré-fabricado

Para redefinir uma propriedade sobreposta ao valor no pré-fabricado pai, clique com o botão direito do mouse na propriedade e clique em **Reset para o valor base**.

![ Repor ao valor de base](media/use-prefabs-reset-property-to-base-value.png)

## Exemplo

Neste exemplo, temos uma pré-fabricada de um poste futurista.

![Lamppost](media/lamppost-prefab.jpg)

O pré-fabricado é composto por três entidades: uma coluna, um pilar e uma luz de ponto. Estes são listados na Árvore da Entidade no Editor Prefab.

![ Adicionar entidades](media/lamppost-prefab-entities.png)

Vamos adicionar cinco instâncias do poste pré-fabricada para a nossa cena.

![Arquivar postes de lâmpadas](media/lamppost-prefab-instances.jpg)

Agora vamos modificar uma das instâncias. No Editor de cena, selecionamos uma entidade **spot light** e, nas propriedades de componente de luz de ponto, mudamos sua cor para vermelho. A Grade de Propriedade exibe a propriedade modificada **Color** em **bold white**. Isto significa que está a substituir a propriedade pré-fabricada.

![ Propriedade média ](media/override-prefab-property.png)

Podemos ver isto na vista da cena.

![Pink spotlight](media/pink-lamppost-prefab.jpg)

Agora vamos ver o que acontece quando voltamos ao Editor Prefab e mudamos a cor da luz exata na pré-fabricada para verde.

![ Alterar a cor para verde](media/change-prefab-color-to-green.png)

Quatro dos postes agora têm uma luz verde. O quinto ainda é vermelho, pois as propriedades sobrepostas não mudam quando você modifica o pré-fabricado.

![Changed cores](media/lamppost-prefab-instances-with-override.jpg)

## Ver também

* [Índice de pré-fabricada](index.md)
* [Criar uma pré-fabricada](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Editar pré-fabricados](edit-prefabs.md)
* [Pré-fabricadas aninhadas](nested-prefabs.md)
* [Modelos pré-fabricadas](prefab-models.md)