# Tutorial: Herança

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Este tutorial explica como criar partículas que herdam um ou mais atributos, como posição ou cor, de outras partículas.

## Amostra

Para ver algumas das técnicas descritas nesta página implementadas em um projeto, crie um novo **Sample: Partículas** projeto e abrir a cena **ChildParticles**.

![Particles sample project](media/select-particles-sample-project.png)

## Posição de entrada

Ajuda se você pensar em herança em termos de partículas pai e criança.

Por exemplo, na cena **ChildParticles** na cena **Sample: Particles** projeto, confira a entidade **Fireworks**.

Contém dois emissores. Partículas referências pai emissoras por nome, então na primeira emissora você pode ver que estabelecemos a propriedade **Emitter Name**. É um nome opcional, mas é necessário se você quiser que outros emissores possam fazer referência às partículas deste emissor.

No segundo emissor criamos um novo inicializador, **Position de parent**. Isso nos permite referenciar as partículas do primeiro emissor e usar sua posição para inicializar as partículas da criança. No atributo **Parent emitter** colocamos o nome do primeiro emissor (*Parent*). Isso atribui aleatoriamente uma partícula pai para cada partícula da criança gerada e copiar sua posição para a partícula da criança.

A semente **Parent Offset** corresponde a campos quando mais de um atributos são herdados. Por exemplo, se você quiser herdar tanto **Position** e **Color** da mesma partícula pai (escolhida ao acaso) você deve fazer a semente *Parent Offset* da mesma forma. Alternativamente, você pode fazer a semente *Parent Offset* para ambos os inicializadores diferentes, em que as partículas de um pai podem herdar sua cor de uma partícula aleatória diferente. Normalmente, você quer mantê-los o mesmo, mas em alguns casos você pode querer misturá-los.

![media/particles-tutorials-heritance-1.png](media/particles-tutorials-inheritance-1.png)

Como você pode ver, este tipo de herança não controla a contagem desova, partículas máximas, ou quaisquer outros parâmetros, e é muito aleatório. Para a maioria dos efeitos é suficiente, mas às vezes você quer mais controle direto sobre as partículas.

## Herança controlada

Na ocasião você vai querer gerar um certo número de partículas de um pai específico e ter essas partículas apenas herdam atributos da partícula pai que as gerou.

Para fazer isso, escolha um spawner para a criança emitter do tipo **Do pai**. Preencha o nome do emissor pai no campo **Parent emitter**.

O **Spawn Control Group** determina como as partículas salvam suas informações de controle. Você precisa atribuir o mesmo grupo de controle em todos os inicializadores mais tarde, a fim de recuperar as informações de desova.

Pode haver até 4 grupos de controle. Se você gerou partículas com base em condições diferentes, ou gerou mais de duas partículas de crianças diferentes do mesmo pai, atribuindo-lhes diferentes grupos de controle para que eles não se misturem.

O **Particle Spawn Trigger** é a condição de gatilho no lado pai, que determina se as partículas devem ser geradas. Se você deixá-lo como **None**, nenhuma partícula é gerada, então defina-a para **On Hit** ou **Lifetime**.

**On hit** funciona para partículas-mãe com um [collider](../../physics/colliders.md) atribuído, e dispara cada vez que atingem a superfície.

** O tempo de vida** é baseado na vida relativa da partícula-mãe, e desencadeia cada quadro que a vida está dentro dos limites. Há dois controles deslizantes para controlar de que ponto para que ponto as partículas devem ser desova. Alternativamente, você pode revertê-los para reverter a condição de desova. Por exemplo, uma partícula com condição de vida (0,9 - 1.0) apenas gera partículas de crianças nos últimos 10% de sua vida.

Finalmente, o **Particles/trigger** determina quantas partículas são geradas cada vez que a condição é satisfeita.

Para emissoras de crianças, é uma boa prática controlar o número máximo de partículas que a emissora pode ter, especialmente para casos não determinísticos, como o golpe de colisão.

### Determinação

Nos inicializadores, escolha um **Spawn Control Group** correspondente ao grupo de controle do proprietário. Isso força os inicializadores a apenas trabalhar para partículas geradas com a condição de detonação, pulando o resto (se mais de um spawner é atribuído).

## Fitas e trilhas

[ Os renderizadores de rasto e ribbon ](../ribbons-and-trails.md) são um pouco mais difíceis de configurar no início, pois são dependentes da ordem desova. Em caso de pais, eles também se tornam dependentes da ordem do pai.

1. Adicione um inicializador **Spawn Order** ao pai. Ele será usado nas partículas de crianças.

2. Na criança emitter, remover todos os spawners e adicionar apenas um, ** Do pai**. Você quer controlar o desova das partículas de crianças para que todas as partículas possam ser adequadamente agrupadas em uma fita atrás da partícula pai. Se você adicionar outro spawner que adiciona comportamento aleatório ao sistema, as fitas se conectarão da maneira errada. Defina a condição de gatilho para **Lifetime**.

3. No lado **child emitter** novamente, adicione um **Order do inicializador parent**. Isso atribui uma ordem de desova às partículas, mas também as agrupa pelos pais. Se você definir o **Sort** para usar esta ordem e atribuir um construtor de forma de fita, você verá como cada trilha é adequadamente agrupada por trás da partícula pai que a gerou.

## Comportamento circular

Os emissores de partículas podem herdar atributos circularmente um do outro, ou até herdar atributos de partículas no mesmo emissor. Isso pode produzir efeitos aleatórios ou "swingy", mas pode ser interessante.

Na entidade de partícula **Colliding Particles** (no **MainScene** do **Sample: Partículas** projeto), você pode ver que as partículas são geradas no hit, mas o emissor pai é o mesmo. Isso significa que cada vez que uma partícula atinge a superfície, ela produz mais do mesmo tipo. Há dois elementos importantes que permitem que isso aconteça.

Primeiro, temos dois filhos. Um gera um pequeno número de partículas por segundo, o que nos dá os elementos iniciais para preencher o sistema. O outro spawner gera mais partículas no hit e usa um grupo de controle.

Segundo, temos dois inicializadores **Position**. O primeiro atribui uma posição onde queremos que as partículas apareçam. Ele funciona sobre todas as partículas (mesmo aqueles desova dos pais), então se você deixá-lo assim, ele vai disparar mais partículas da posição inicial cada vez que eles atingem a superfície.

O segundo inicializador é **Posição de pai** e inicializa as posições de partícula usando o mesmo grupo de controle que o **On hit** spawner. O **Position de parent** substitui as posições para as partículas com grupo de controle, deixando as partículas geradas a partir do **Per segundo** spawner intocado. Isso cria um pequeno número de partículas constantemente vindo de um único ponto de entrada e multiplicando-se como uma avalanche cada vez que atingem a superfície.

## Ver também

* [Tutorial: Criar uma trilha](create-a-trail.md)
* [Tutorial: Partículas personalizadas](custom-particles.md)
* [Tutorial: Lasers e raios](lasers-and-lightning.md)
* [Partes](../index.md)
* [Criar partículas](../create-particles.md)