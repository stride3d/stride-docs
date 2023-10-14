# Animação

<span class="badge text-bg-success">Design</span>
<span class="badge text-bg-success">Programação</span>

Modelos 3D são animados adicionando-se três tipos de asset:

* um esqueleto
* um modelo articulado
* um clipe de animação

> [!Note]
> Para mais informações sobre animação 2D, consulte [Sprites](../sprites/index.md).

## Equeletos

**Esqueletos** são estruturas digitais que descrevem padrões de deformação de um modelos 3D. Esqueletos são compostos por ossos que formam uma hierarquia. Quando os ossos pais mudam de posição, eles também afetam as posições dos ossos filhos. Por exemplo, um osso da mão pode ter cinco ossos filhos; quando a mão se move para cima e para baixo, os dedos também se movem com ela.

Esqueletos não precisam se assemelhar aos esqueletos de seres humanos ou animais reais. Você pode criar esqueletos para animar qualquer modelo 3D.

> [!Note]
> Atualmente, não há maneira de visualizar esqueletos no Game Studio.

## Modelo articulado

**Esqueletização** é o processo de atribuir pesos aos vértices e aos ossos dos quais eles dependem. Cada vértice geralmente depende de um a quatro ossos.

**Malhas articuladas** são modelos que foram esqueletizados para corresponder a um esqueleto. A **articulação da malha** descreve como os vértices dela se transformam quando os ossos se movem.

> [!Note]
> No Game Studio, só é possível criar modelos 3D simples, como esferas e cubos. Para mais informações sobre como fazer isso, consulte [Criar assets](../game-studio/create-assets.md). Para criar modelos mais complexos, utilize software dedicado como 3DS Max, Maya ou Blender e, em seguida, [importe o modelo para o Game Studio](import-animations.md).

## Clipes de animação

**Clipes de animação** descrevem a pose de um **esqueleto** em um momento específico. O esqueleto se move de acordo com a animação. Os vértices da malha se transformam (articulação da malha) para corresponder à pose atual.

## Amostras de animação

Para um exemplo de como as animações funcionam no Stride, carregue o projeto de exemplo **Exemplo: animação**.

![Animações](media/animations-index1.png)

Os modelos **Tiro em primeira pessoa**, **Plataforma em terceira pessoa** e **RPG de visão superior**, também incluem algumas técnicas avançadas de animação.

## Nesta seção

* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)
* [Atributos personalizados](custom-attributes.md)