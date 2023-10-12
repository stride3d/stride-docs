# Inicializadores de partículas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Initializadores** controlam os estados de partículas como posição, velocidade, tamanho e assim por diante quando as partículas são primeiro desovadas. Eles não têm efeito sobre partículas geradas em quadros anteriores.

> [!Note]
> Alguns atos [updaters](updaters.md) alteram o valor da partícula no *end* do quadro. Eles efetivamente sobrescrevem quaisquer valores iniciais definidos por um inicializador semelhante. Tal é o caso com todas as animações. Eles operam na vida da partícula e um atualizador de animação de cor substituirá quaisquer valores iniciais de um inicializador de cor.

Da mesma forma, inicializadores que operam no mesmo campo são exclusivos e apenas o inferior terá qualquer efeito, uma vez que são executados em ordem. Por exemplo, se você atribuir dois inicializador de cor, apenas o segundo terá qualquer efeito.]

## Propriedades comuns

Várias propriedades são comuns em muitos inicializadores.

![media/particles-reference-initializers-1.png](media/particles-reference-initializers-1.png)

| Propriedade | Descrição |
|-----------------------------|-------------
| Desenho de depuração | Desenha um wireframe de depuração na cena para mostrar os limites do inicializador. Isso só é visível no Editor de Cena, não no tempo de execução. |
| Herança de posição | Inerir a posição do componente do sistema de partículas, conforme definido no componente Transform da entidade de partículas |
| Posição de deslocamento | Tradução adicional do módulo. Se herda a posição pai, isso é aplicado em cima da posição herdadada. |
| Rotação herança | Inerir a rotação do componente do sistema de partículas, conforme definido no componente Transform |
| Offset rotativo | Rotação adicional do módulo. Se herda a rotação do pai, isso é aplicado em cima da rotação herdadada. |
| Escala de herança | Inerir a escala uniforme do componente do sistema de partículas, conforme definido no componente Transform |
| Escala de deslocamento | Escala adicional do módulo. Se herda a escala do pai, isso é aplicado em cima da escala herdada. |

Por exemplo, um inicializador de velocidade pode mudar sua direção dependendo da rotação do pai ou decidir ignorá-lo e sempre atirar partículas em uma direção fixa.

Por outro lado, os inicializadores de tamanho não mudam com base na rotação dos pais, para que os campos de rotação não apareçam.

## Posição

As partículas são geradas em uma caixa de ligação alinhada ao eixo, definida por seu canto inferior esquerdo e seu canto superior direito.

![media/particles-reference-initializers-2.png](media/particles-reference-initializers-2.png)

| Propriedade | Descrição |
|-----------------------------|-------------
| Offset de sementes | Usado para números aleatórios. Defina-o ao mesmo valor para forçar a posição a ser acoplada com outros campos de partículas que têm três propriedades (X, Y, Z), por exemplo, velocidade. Faça-os diferentes para forçar a posição de ser único e independente de outros campos |
| Posição min | Canto inferior esquerdo para a caixa |
| Posição máxima | Canto frontal superior direito para a caixa |

Esta imagem mostra a caixa de ligação onde as partículas aparecem inicialmente para esta emissora. Além dos cantos (-1, 0.8, -1) ~ (1, 1, 1), a caixa é mais girada por 45 graus como visto a partir da rotação de deslocamento.

![media/particles-reference-initializers-3.png](media/particles-reference-initializers-3.png)

## Velocidade

As partículas surgiram com velocidade inicial que varia entre os valores definidos. A velocidade é independente em todas as três direções entre X, Y e Z.

![media/particles-reference-initializers-4.png](media/particles-reference-initializers-4.png)

| Propriedade | Descrição |
|-----------------------------|-------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a velocidade a ser acoplada com outros campos de partículas que têm 3 propriedades (x, Y, Z), como a posição, por exemplo. Faça-os diferentes para forçar a velocidade a ser único e independente de outros campos. |
| Velocidade min | Canto inferior esquerdo para a caixa |
| Velocidade máxima | Canto frontal superior direito para a caixa |

## Tamanho

O tamanho inicial define o tamanho uniforme da partícula quando é gerado pela primeira vez. Um tamanho de 1 resultará em um 1 metro por 1 metro de outdoor ou quad quando renderizado.

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-5.png)

| Propriedade | Descrição |
|-----------------------------|--------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar o tamanho a ser acoplado com outros campos de partículas que têm 1 propriedade, como cor, por exemplo. Faça-os diferentes para forçar o tamanho a ser único e independente de outros campos |
| Tamanho aleatório | Mostra o tamanho mínimo e máximo que uma partícula pode ter no tempo livre |

## Rotação

A rotação inicial define a rotação angular da partícula quando enfrenta a câmera. Os valores positivos são rotações no sentido horário. O campo só tem significado para partículas voltadas para câmera, como outdoors. Não tem efeito sobre quads e modelos orientados.

![media/particles-reference-initializers-6.png](media/particles-reference-initializers-6.png)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar o ângulo a ser acoplado com outros campos de partículas que têm 1 propriedade, como cor, por exemplo. Faça-os diferentes para forçar o ângulo a ser único e independente de outros campos |
| Ângulo (graus) | O valor mínimo e máximo, em graus, para a rotação inicial |

## Cor

A cor inicial define a cor inicial da partícula no tempo livre. Ele entra no buffer de vértice ao construir as partículas e pode ser usado pelo material, mas pode não se a opção não estiver definida no próprio material. Se definir a cor não tem efeito, consulte a página [Material](materials.md) para mais discussão.

![media/particles-reference-initializers-7.png](media/particles-reference-initializers-7.png)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a cor a ser acoplada com outros campos de partículas que têm 1 propriedade, como o tamanho, por exemplo. Faça-os diferentes para forçar a cor a ser única e independente de outros campos |
| Cor A | O primeiro valor, no código hexadecimal. A cor será uma tonalidade aleatória entre esta e a segunda cor. |
| Cor B | O segundo valor, no código hexadecimal. A cor será uma tonalidade aleatória entre esta e a primeira cor. |

## Orientação 3D

A orientação 3D inicial define a orientação para partículas 3D-aware quando elas primeiro desovam. Os campos editáveis usam rotação euclidiana que é embalado em uma orientação quaternion pelo motor. O valor interpolado está no caminho mais curto entre as duas orientações, em vez de interpolar cada valor separadamente.

![media/particles-reference-initializers-8.png](media/particles-reference-initializers-8.png)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a orientação a ser acoplada com outros campos de partículas que têm 1 propriedade, como o tamanho, por exemplo. Faça-os diferentes para forçar a orientação a ser única e independente de outros campos. |
| Orientação A | A primeira posição orientada |
| Orientação B | A segunda posição orientada |

## Direcção

Este inicializador cria o campo **Direction** nas propriedades de partículas e define o seu valor inicial. Alguns construtores de forma, como a forma de Trilha ou a forma de Sprite Alinhada de Direção usam a direção da partícula para exibi-la corretamente.

| Propriedade | Descrição |
|-----------------------------|-------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a direção a ser acoplada com outros campos de partículas que têm 3 propriedades (x, Y, Z), como a posição, por exemplo. Faça-os diferentes para forçar a velocidade a ser único e independente de outros campos. |
| Direcção min | Canto inferior esquerdo para a caixa |
| Direcção máxima | Canto frontal superior direito para a caixa |

## Ordem de Spawn

Este inicializador não tem propriedades. Ele simplesmente define um número crescente para cada partícula gerada a partir deste emissor, a partir de 0. A ordem desova pode ser usada para classificação ou alguns cálculos personalizados.

## Posição (Arc)

O inicializador de posição de arco posiciona as partículas em um arco (ou uma linha reta se a altura do arco é 0) entre dois pontos, a posição do emissor e um componente de transformação de alvo. Com deslocamento de posição aleatória, você pode fazer com que as partículas se desviam um pouco de sua localização original no arco.

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-9.png)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a posição a ser acoplada com outros campos de partículas que têm 3 propriedades (X, Y, Z), como a velocidade, por exemplo. Faça-os diferentes para forçar a posição de ser único e independente de outros campos. |
| Posição min | Canto inferior esquerdo para a caixa |
| Posição máxima | Canto frontal superior direito para a caixa |
| Alvo | Permite-lhe apanhar uma Entidade para o fim do arco. Se nenhum Entity for definido, o Fallback Target será usado, que é um deslocamento da localização do emissor. |
| Destino de recuperação | Offset da localização do emissor usado como ponto final no caso Target não é definido |
| Altura do arco | A altura do arco em seu ponto mais alto (meio da distância entre os dois pontos). Por padrão é o vetor Y-up, mas pode ser girado com deslocamento de rotação e herança de rotação |
| Pedido | Se verificado, novas partículas aparecerão em ordem do emissor para o alvo. Se desmarcado, novas partículas aparecerão aleatoriamente no arco em qualquer lugar entre a emissora e o alvo. Se você planeja visualizar as partículas como uma fita ou uma trilha, você deve definir esta caixa para verificar. |
| Contagem fixa | Por partículas padrão aparecerá no arco a distâncias suficientes para que o número máximo de partículas se ajuste exatamente na linha. Se você quiser controlar a taxa de desova e a distância, você pode definir quantas "posições" fixas estão lá no arco. Por exemplo, com uma contagem fixa de 10 e desova ordenada, as primeiras 10 partículas aparecerão em ordem, então a 11a partícula aparecerá do início, na mesma posição que a primeira, e assim por diante. |
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a posição a ser acoplada com outros campos de partículas que têm 3 propriedades (X, Y, Z), como a velocidade, por exemplo. Faça-os diferentes para forçar a posição de ser único e independente de outros campos. |
| Posição min | Canto inferior esquerdo para a caixa. Este é um deslocamento, além da posição do arco. |
| Posição máxima | Canto superior direito para a caixa. Este é um deslocamento, além da posição do arco. |

## Posição (pai)

| Propriedade | Descrição |
|-----------------------------|-------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a posição a ser acoplada com outros campos de partículas que têm 3 propriedades (X, Y, Z), como a velocidade, por exemplo. Faça-os diferentes para forçar a posição de ser único e independente de outros campos. |
| Posição min | Canto inferior esquerdo para a caixa |
| Posição máxima | Canto frontal superior direito para a caixa |
| Emitter dos pais | Você tem que digitar o nome do emissor pai. As posições das partículas da criança correspondem às posições das partículas do emissor. |
| Desativação dos pais | Semente aleatória usada para acasalar ou desconectar a forma como uma partícula pai é escolhida. Por exemplo, se você quiser escolher a posição * e* cor de partículas aparentemente aleatórias, você pode usar o mesmo deslocamento. Se você quiser evitar tal conexão, você pode usar diferentes compensações para inicializadores de posição e cor. |
| Grupo de controle de spam | Quando Nenhum, os pais serão escolhidos aleatoriamente. Quando definido para um dos quatro grupos, apenas partículas de um pai específico serão inicializadas. Ele deve corresponder a um grupo de controle do **Spawn de Parent** spawner para trabalhar corretamente. |

## Velocidade (pai)

| Propriedade | Descrição |
|-----------------------------|-------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a velocidade a ser acoplada com outros campos de partículas que têm 3 propriedades (x, Y, Z), como a posição, por exemplo. Faça-os diferentes para forçar a velocidade a ser único e independente de outros campos. |
| Velocidade min | Canto inferior esquerdo para a caixa |
| Velocidade máxima | Canto frontal superior direito para a caixa |
| Emitter dos pais | Você tem que digitar o nome do emissor pai. As posições das partículas da criança correspondem às posições das partículas do emissor. |
| Desativação dos pais | Semente aleatória usada para acasalar ou desconectar a forma como uma partícula pai é escolhida. Por exemplo, se você quiser escolher a posição * e* cor de partículas aparentemente aleatórias, você pode usar o mesmo deslocamento. Se você quiser evitar tal conexão, você pode usar diferentes compensações para inicializadores de posição e cor. |
| Grupo de controle de spam | Quando Nenhum, os pais serão escolhidos aleatoriamente. Quando definido para um dos quatro grupos, apenas partículas de um pai específico serão inicializadas. Ele deve corresponder a um grupo de controle do *Spawn de Parent* spawner para trabalhar corretamente. |

## Tamanho (pai)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar o tamanho a ser acoplado com outros campos de partículas que têm 1 propriedade, como cor, por exemplo. Faça-os diferentes para forçar o tamanho a ser único e independente de outros campos. |
| Tamanho aleatório | Mostra o tamanho mínimo e máximo que uma partícula pode ter no tempo livre |
| Emitter dos pais | Você tem que digitar o nome do emissor pai. As posições das partículas da criança correspondem às posições das partículas do emissor. |
| Desativação dos pais | Semente aleatória usada para acasalar ou desconectar a forma como uma partícula pai é escolhida. Por exemplo, se você quiser escolher a posição * e* cor de partículas aparentemente aleatórias, você pode usar o mesmo deslocamento. Se você quiser evitar tal conexão, você pode usar diferentes compensações para inicializadores de posição e cor. |
| Grupo de controle de spam | Quando Nenhum, os pais serão escolhidos aleatoriamente. Quando definido para um dos quatro grupos, apenas partículas de um pai específico serão inicializadas. Ele deve corresponder a um grupo de controle do *Spawn de Parent* spawner para trabalhar corretamente. |

## Cor (pai)

| Propriedade | Descrição |
|-----------------------------|------------
| Offset de sementes | Isso é usado para números aleatórios. Defina-o ao mesmo valor para forçar a cor a ser acoplada com outros campos de partículas que têm 1 propriedade, como o tamanho, por exemplo. Faça-os diferentes para forçar a cor a ser única e independente de outros campos. |
| Cor A | O primeiro valor, no código hexadecimal. A cor será uma tonalidade aleatória entre esta e a segunda cor. |
| Cor B | O segundo valor, no código hexadecimal. A cor será uma tonalidade aleatória entre esta e a primeira cor. |
| Emitter dos pais | Você tem que digitar o nome do emissor pai. As posições das partículas da criança correspondem às posições das partículas do emissor. |
| Desativação dos pais | Semente aleatória usada para acasalar ou desconectar a forma como uma partícula pai é escolhida. Por exemplo, se você quiser escolher a posição * e* cor de partículas aparentemente aleatórias, você pode usar o mesmo deslocamento. Se você quiser evitar tal conexão, você pode usar diferentes compensações para inicializadores de posição e cor. |
| Grupo de controle de spam | Quando Nenhum, os pais serão escolhidos aleatoriamente. Quando definido para um dos quatro grupos, apenas partículas de um pai específico serão inicializadas. Ele deve corresponder a um grupo de controle do *Spawn de Parent* spawner para trabalhar corretamente. |

## Ordem de Spawn (pai)

Este inicializador requer que o emissor de pais também tenha um inicializador de Ordem de Spawn. Ele combina o número desova do pai com seu próprio, efetivamente criando grupos de partículas entre as crianças. Este inicializador é necessário para classificar corretamente e renderizar partículas de fita de criança.

| Propriedade | Descrição |
|-----------------------------|------------
| Emitter dos pais | Você tem que digitar o nome do emissor pai. As posições das partículas da criança correspondem às posições das partículas do emissor. |
| Desativação dos pais | Semente aleatória usada para acasalar ou desconectar a forma como uma partícula pai é escolhida. Por exemplo, se você quiser escolher a posição * e* cor de partículas aparentemente aleatórias, você pode usar o mesmo deslocamento. Se você quiser evitar tal conexão, você pode usar diferentes compensações para inicializadores de posição e cor. |
| Grupo de controle de spam | Quando Nenhum, os pais serão escolhidos aleatoriamente. Quando definido para um dos quatro grupos, apenas partículas de um pai específico serão inicializadas. Ele deve corresponder a um grupo de controle do *Spawn de Parent* spawner para trabalhar corretamente. |

## Ver também

* [Criar partículas](create-particles.md)

* [Emitters](emitters.md)

* [Formas](shapes.md)

* [Materiais](materials.md)

* [Spawners](spawners.md)

* [Atualizações](updaters.md)