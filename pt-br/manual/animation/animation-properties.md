# Propriedades de animação

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>

Após [importar uma animação](import-animations.md), você pode selecioná-la no **Visualizador de Assets** (na parte inferior, por padrão) e visualizar e editar suas propriedades no **Editor de Propriedades** (à direita, por padrão).

![Assets no Visualizador de Assets](media/assets-in-asset-view1.png)

![Propriedades](media/animations-properties.png)

## Origem

O arquivo de origem usado pelo asset de animação. Se você alterá-lo, o Game Studio reimportará a animação.

## Duração do Clipe

Por padrão, a duração do clipe está desativada. Isso significa que a animação começa no quadro 0 e vai até o último quadro-chave registrado no arquivo.

No entanto, em alguns casos, uma única faixa de animação pode conter várias animações diferentes. Nessas situações, é necessário dividir a faixa. Para fazer isso, ative a opção **Duração do clipe** e ajuste os quadros de **início** e **fim** para corresponder à duração de cada animação.

É importante ressaltar que os quadros de início e fim ainda devem estar dentro dos quadros-chave exportados no arquivo. Por exemplo, se originalmente você exportou os quadros de 20 a 40 usando a ferramenta de animação, o quadro de início não pode ser menor que 20 e o quadro de fim não pode ser maior que 40.

Por padrão, o Game Studio assume uma taxa 30 de quadros. Você pode alterar essa configuração nas propriedades do asset **Configurações do jogo** em **Configurações do editor > Taxa de quadros da animação**.

## Posição de pivô

O Game Studio pressupõe que o pivô é a origem do sistema de coordenadas local à animação e  deve ser configurado como `(0, 0, 0)`. Se a sua animação estiver deslocada da origem quando for exportada, você pode utilizar esta propriedade para realizar o ajuste necessário.

## Escala de importação

A escala de importação deve ser definida como `1`. O Stride detecta automaticamente as unidades nas quais seus dados foram exportados e faz os ajustes necessários. Caso não haja configurações de exportação no seu arquivo de animação e a escala pareça incorreta, você pode utilizar a propriedade de escala de importação para realizar o reajuste necessário.

## Modo de repetição

Você pode escolher entre **Reproduzir Uma Vez**, **Loop Infinito** ou **Reproduzir Uma Vez e Manter**. Isso é apenas uma *dica* para o motor. Quando você vincula um asset de animação ao modelo, você pode especificar de diferentes maneiras. Se você não especificar o modo posteriormente, o Stride usará o atributo que você definiu aqui como padrão.

## Tipo

O Stride suporta dois tipos de clipes de animação. As animações regulares são definidas como **Clipes de animação** por padrão e são usadas de forma linear quando mescladas. No caso dos **clipes de variação**, existem algumas configurações adicionais. Para mais informações, consulte <g id="2">Animação aditiva</g>.[](additive-animation.md)

## Esqueleto

Se você deseja animar ossos/articulações, a animação precisa de um esqueleto.

Esqueletos são compostos por ossos que formam uma hierarquia. Quando os ossos pais mudam de posição, eles também afetam as posições dos ossos filhos. Por exemplo, um osso da mão pode ter cinco ossos filhos; quando a mão se move para cima e para baixo, os dedos também se movem com ela.

Certifique-se de referenciar o mesmo esqueleto usado pelo modelo que você deseja animar. Se houver ossos faltando ou outras diferenças entre a hierarquia de ossos/articulações do esqueleto em seu arquivo de animação e o esqueleto de destino, o Stride redefine a animação da forma mais próxima possível.

> [!Note]
> Atualmente, não há maneira de visualizar esqueletos no Game Studio.

## Root motion

Quando o root motion está ativado, o Stride aplica a animação do **nó raiz** ao [TransformComponent](xref:Stride.Engine.TransformComponent) da entidade à qual você adicionou a animação, em vez de aplicá-la ao esqueleto.

Isso é útil, por exemplo, para animar entidades que não requerem esqueletos, como uma [luz focal](../graphics/lights-and-shadows/spot-lights.md) movendo-se de um lado para o outro.

> [!Note]
> Se a animação não tiver um esqueleto selecionado em **Esqueleto**, o Stride sempre aplicará a animação ao [TransformComponent](xref:Stride.Engine.TransformComponent), mesmo se **root motion** estiver desativado.

> [!Note]
> O [TransformComponent](xref:Stride.Engine.TransformComponent) aplica um deslocamento à posição do nó do modelo. Se você não deseja adicionar um deslocamento, certifique-se de que o [TransformComponent](xref:Stride.Engine.TransformComponent) esteja configurado em `0,0,0`.

## Importar atributos personalizados

Se você tiver um atributo personalizado no arquivo de animação...

## Veja também

* [Índice de animação](index.md)
* [Importar animações](import-animations.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)