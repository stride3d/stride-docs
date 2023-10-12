# Tutorial: Lasers e raios

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Este tutorial explica como criar lasers e relâmpagos usando partículas e materiais personalizados.

Imagine que queremos criar um arco relâmpago como este:

![media/particles-tutorials-lasers-1.gif](media/particles-tutorials-lasers-1.gif)

Este efeito é uma tira que:

* conecta dois pontos fixos

* muda posições muito rapidamente

* pode ser renderizado como uma única tira

Como o relâmpago é uma faixa de linha única, podemos renderizá-lo usando o construtor de forma de fita, mas com algumas volumosos diferenças. As partículas:

* spawn ao mesmo tempo, em vez de em sequência

* aparecem em uma única linha ou arco, mas com posições semi-aleaudiadas para dar a ilusão de relâmpago

* deve reaparecer muito rapidamente

## Desova simultânea

Nós podemos criar um Spawner looping por quadro que gera um certo número de partículas (deixe dizer 50) ** cada quadro**.

Porque só precisamos de um conjunto visível de cada vez que limitamos as Partículas Maxmimum na emissora a 50 e lhes damos a mesma vida (por exemplo, 0,2 segundos).

Isso significa que o Spawner vai tentar emitir 50 partículas cada quadro, mas porque nós os limitamos ele só terá 50 partículas o primeiro quadro.

Todos eles têm a mesma vida, então quando eles morrem ao mesmo tempo um novo lote de 50 partículas será gerado.

#### Conecte dois pontos

Vamos usar o inicializador **Position (Arc)**. Ele escolhe um segundo ponto de outra Entidade e define as posições das partículas em um arco entre o Emitter e o Entity alvo.

Ao clicar na caixa de seleção ordenada, podemos forçar as partículas a serem colocadas em distâncias iguais a partir do emissor e movendo-se para a Entidade alvo.
Isso é importante quando os tornamos usando um construtor de forma de fita porque se eles aparecem em posições aleatórias (não ordenadas) ao longo do arco será uma bagunça.
Nós também temos que adicionar inicializador de ordem de espawn e classificar as partículas por ordem (isso é verdade para todas as fitas, não apenas relâmpago.)

A posição de arco inicialzier também permite um deslocamento aleatório que nós definir para algum pequeno número.

#### Mudança de posições rápidas

Podemos definir a vida útil das partículas para um pequeno número (por exemplo, 0,2 segundos). Com o parâmetro Escala do Tempo, podemos adicionalmente controlar a velocidade de todo o sistema de partículas.

Para ilustrar melhor o que está acontecendo aqui é o mesmo efeito com o construtor de forma Billboard em vez de Ribbon, e diminuiu 30 vezes:

![media/particles-tutorials-lasers-2.gif](media/particles-tutorials-lasers-2.gif)

#### Relâmpago em movimento

Há uma maneira de fazer o arco relâmpago se mover do ponto A ao ponto B em vez de ser estático.

![media/particles-tutorials-lasers-3.gif](media/particles-tutorials-lasers-3.gif)

Há alguns ajustes que precisamos fazer:

* Mude a taxa de desova para uma mais baixa. O exemplo acima usa 600/segundo e é jogado a 0,1 escala de tempo, o que significa em torno de 1 partícula por quadro.

* Defina uma contagem fixa com o posicionador de arco (50). Porque ele interpola as distâncias com base no número de partículas desova *each* frame, se nós os desovamos sequencialmente eles ficarão todos no início do arco. Ao definir a contagem para 50, dizemos ao posicionador de arco para esperar 50 partículas no total.

* Defina um atraso para o proprietário para permitir que o arco velho desapareça completamente antes de começar de novo. Caso contrário, a fita ligará erradamente as partículas antigas e novas, pois não pode saber como dividi-las.

## Lasers usando partículas

Criar lasers com partículas é muito semelhante a fazer raios. Na verdade, precisamos de menos partículas, porque os lasers são retos e não se desviam.
Ao definir a altura do arco do posicionador para 0 e deslocamento aleatório para (0, 0, 0) podemos gerar as partículas em uma linha reta. Se você quiser, você pode dar-lhes tamanhos ligeiramente diferentes para fazer o feixe de laser parecer brilhante.

Uma coisa para ser consciente sobre lasers é que geralmente quando o alvo se move você quer que o laser se mova com ele. Como o posicionador de arco é um inicializador e não um atualizador, ele não tem efeito sobre as partículas já geradas, que e ficar para trás. Há três maneiras de combater isto.

* Espalhar as partículas muito rápido. Se eles apenas vivem por 1-2 quadros o laser será recriado muito rápido para o usuário notar quaisquer diferenças visuais.

* Partículas em espaço local. Isso significa que eles vão se mover junto com o emissor, mas então você terá que girar e escalar o emissor para sempre apontar para o Entity alvo.

* Criar um atualizador personalizado. Se você criar um post-updater personalizado semelhante (ou mais simples) para o posicionador de arco, você pode forçá-lo a atualizar as posições de partículas cada quadro, colocando-os corretamente entre os dois pontos, mesmo se eles se moverem.

Dependendo do tipo de jogo que você deseja fazer cada uma dessas opções pode ter benefícios ou desvantagens. Spawning as partículas cada quadro é a maneira mais fácil e mais simples de fazê-lo e será suficiente para a maioria das necessidades.

## Lasers usando materiais personalizados

Criar lasers usando materiais personalizados é semelhante ao uso de partículas no espaço local. Precisamos girar manualmente a escala do emissor para sempre enfrentar uma entidade alvo.

Podemos designar um eixo que aponta para o alvo para ser o nosso comprimento, deixando os outros dois eixos para a largura do laser.

Renderização de um cilindro com altura de 1 que é colocado sob a entidade rotativa fará com que ele estique e alcance o ponto de destino.

O material personalizado é necessário para colocar uma textura de rolagem no cilindro. Ou você pode usar um mapa Emissivo regular sem rolagem em que caso você não vai precisar de um material personalizado.

A amostra de partículas já contém um exemplo de como criar lasers dessa forma. A orientação a laser O script gira e dimensiona a entidade para um ponto de destino e o shader ComputeColorTextureScroll amostras uma textura de rolagem.

## Projeto de amostra

Para ver algumas das técnicas descritas nesta página implementadas em um projeto, crie um novo **Sample: Partículas** projeto e abrir a cena **Lasers**.

![Particles sample project](media/select-particles-sample-project.png)

## Ver também

* [Tutorial: Criar uma trilha](create-a-trail.md)
* [Tutorial: Partículas personalizadas](custom-particles.md)
* [Tutorial: Herança](inheritance.md)
* [Partes](../index.md)
* [Criar partículas](../create-particles.md)