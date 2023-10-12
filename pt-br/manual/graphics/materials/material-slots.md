# Slots de material

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Os modelos podem usar vários materiais. Você pode definir os materiais nos slots de material ** do modelo**.

![ slots de série](media/material-slots.png)

Por exemplo, o segundo slot de material neste modelo especifica o material para a viseira e as listras de placa de ombro e peito. Ao mudar o material neste slot, mudamos o material usado nessas partes do modelo.

![materiais](media/model-materials-both.png)

Os próprios slots de material — seu número e posição — são definidos no arquivo de origem do modelo (por exemplo `.fbx`, `.obj`, etc). Você não pode editar slots de material no Game Studio; você só pode alterar quais materiais são usados em cada slot.

## Definir materiais em um modelo

Você pode alterar os materiais que um modelo usa em dois lugares:

* Sob as propriedades **Materials** do próprio modelo:

   ![Materiais móveis](media/model-materials.png)

   > [!Note]
   > Isso afeta cada instância deste modelo.

* No componente **model** de uma entidade ou [prefab](../../game-studio/prefabs/index.md):

   ![ Materiais móveis em entidade](media/model-materials-in-entity.png)

   Isso só afeta **this** instância ou pré-fabricado.

## Malhas e slots de material

Modelos importados do software de modelagem podem conter malhas. As malhas podem compartilhar materiais através de slots de material.

![Mesh](media/material-slot-diagram-1.png)

A associação entre uma malha e um slot de material é definida no arquivo de origem do modelo. Você não pode alterar essas associações no Game Studio, mas você pode alterá-las em código no tempo de execução.

Para alterar a associação entre uma malha e um material, use:

```cs
MyModelComponent.Model.Meshes[submeshIndex].MaterialIndex = materialIndex;
```

Para alterar ou adicionar um material à lista de materiais:

```cs
MyModelComponent.Materials[ExistingOrNewMaterialIndex] = myMaterial;
```

### Malhas de fusão

Quando Stride desenha um modelo com malhas, ele executa uma chamada de desenho GPU para cada malha. Por padrão, para melhorar o desempenho, no tempo de compilação, a Stride mescla malhas que compartilham materiais.

![Mesh](media/material-slot-diagram-2.png)

No exemplo acima, há cinco malhas e cinco chamadas de sorteio. Após a fusão, há três malhas e três chamadas de sorteio.

> [!Note]
> Quando o Stride mescla malhas, ele mescla o vértice e os buffers de índice. Isso significa que você não pode desenhar as malhas separadamente no tempo de execução, e você não pode alterar a posição de malha original (matriz de transformação). As malhas se tornam uma única malha com um único material e uma única matriz de transformação (relativa ao modelo).

> [!Note]
> Quando Stride mescla malhas, ele muda a ordem do sorteio de elementos. No caso de materiais transparentes, isso pode produzir resultados diferentes.

> [!Note]
> Quando você cria um [física colide de um modelo](../../physics/collider-shapes.md), Stride constrói cascos convexos separados para cada malha no modelo. Se as malhas são fundidas, apenas uma malha permanece por material, então cascos convexos também são construídos a partir de malhas mescladas.

### Desativar a fusão de malha

Você pode querer desativar a fusão de malha se você quiser:

* animar uma malha

* mudar o material de uma malha no tempo de execução

Para desativar a fusão de malha em um modelo:

1. Selecione o modelo para o qual deseja desativar a fusão de malha.

2. No **Property Grid**, desative **Merge meshes**.

   ![ Desativar malhas mesclas](media/disable-merge-meshes.png)

#### Desativar a fusão para malhas específicas

Para desativar a fusão apenas para malhas específicas, ative seus **nodes** correspondentes.

1. Selecione o modelo que contém as malhas.

2. No **Property Grid**, sob **Skeleton**, certifique-se de que o modelo tem um esqueleto associado a ele.

   ![Esqueleto padrão ](media/model-skeleton.png)

   Para mais informações sobre esqueletos, veja [Animação](../../animation/index.md).

3. No **Asset View**, selecione o esqueleto.

   ![Selecione o esqueleto do modelo](media/select-model-skeleton.png)

4. No **Property Grid**, sob **Nodes**, selecione os nós que correspondem às malhas que você não quer mesclar.

   ![Nodes](media/select-model-skeleton-nodes.png)

   > [!Tip]
   > Para ver quais nós correspondem a qual malha, abra o arquivo de origem do modelo em uma aplicação de modelagem como Maya.

   > [!Note]
   > Certifique-se de que você não desabilite nós que são animados em tempo de execução.

## Ver também

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
* [Slots de material](material-slots.md)