# Espawners de partículas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

** Espalhadores de partículas** control quando, quantos, e quão rapidamente as partículas são emitidas. Os emissores precisam de pelo menos um spawner, mas podem conter vários spawners com configurações diferentes.

## Por segundo

Emite um número fixo de partículas por segundo. Ele equilibra e interpola-los e é estável, mesmo se o framerate muda ou cai. Por exemplo, a uma taxa de 20 partículas por segundo, o spawner gera uma partícula a cada três quadros para 60fps jogos e duas partículas para cada três frames (skipping cada terceiro frame) para 30fps jogos.

![media/particles-reference-spawners-1.png](media/particles-reference-spawners-1.png)

| Propriedade | Descrição |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop | Para ter o loop de spawner quando atingir o final de sua duração, selecione **Looping** (padrão). Para ter o loop de spawner sem espera entre cada loop, selecione **Looping, sem delay**. Para ter o spawner gerado uma vez e depois parar, selecione **One shot**. |
| Delay | Quanto tempo (em segundos) o proprietário espera antes de desova. Este é um valor aleatório entre os valores X (mínimo) e Y (máximo). |
| Duração | Quanto tempo (em segundos) o spawner gera partículas para. No final da duração, o spawner começa novamente ou pára, dependendo da propriedade Loop. |
| Partes | O número de partículas desovadas por segundo. Este pode ser um valor flutuante (por exemplo 36.875). |

## Por quadro

Emite um número fixo de partículas por quadro, independentemente de framerate. Isso pode ser útil se você precisar de um número fixo de partículas - por exemplo, exatamente um cada quadro, que é útil para trilhas e fitas.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-2.png)

| Propriedade | Descrição |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop | Para ter o loop de spawner quando atingir o final de sua duração, selecione **Looping** (padrão). Para ter o loop de spawner sem espera entre cada loop, selecione **Looping, sem delay**. Para ter o spawner gerado uma vez e depois parar, selecione **One shot**. |
| Delay | Quanto tempo (em segundos) o proprietário espera antes de desova. Este é um valor aleatório entre os valores X (mínimo) e Y (máximo). |
| Duração | Quanto tempo (em segundos) o spawner gera partículas para. |
| Partes | O número de partículas geradas por quadro. O valor pode ser um valor flutuante, incluindo valores inferiores a 1, caso em que uma nova partícula é gerada a cada poucos quadros. |
| Taxa de quadros | Isto é para fins de estimativa somente quando o motor calcula o número máximo de partículas. |

## Burst

Emite todas as partículas em uma explosão.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-3.png)

| Propriedade | Descrição |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop | Para ter o loop de spawner quando atingir o final de sua duração, selecione **Looping** (padrão). Para ter o loop de spawner sem espera entre cada loop, selecione **Looping, sem delay**. Para ter o spawner gerado uma vez e depois parar, selecione **One shot**. |
| Delay | Quanto tempo (em segundos) o proprietário espera antes de desova. Este é um valor aleatório entre os valores X (mínimo) e Y (máximo). |
| Duração | Quanto tempo (em segundos) o spawner gera partículas para. |
| Partículas/burst | O número de partículas geradas em cada explosão. |

## Distância

Emite partículas com base na distância percorrida pelo emissor. Se a emissora não se mexer, não gera partículas.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-4.png)

| Propriedade | Descrição |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop | Para ter o loop de spawner quando atingir o final de sua duração, selecione **Looping** (padrão). Para ter o loop de spawner sem espera entre cada loop, selecione **Looping, sem delay**. Para ter o spawner gerado uma vez e depois parar, selecione **One shot**. |
| Delay | Quanto tempo (em segundos) o proprietário espera antes de desova. Este é um valor aleatório entre os valores X (mínimo) e Y (máximo). |
| Duração | Quanto tempo (em segundos) o spawner gera partículas para. |
| Partículas/unidade | O número de partículas geradas para cada unidade de distância que o proprietário se move. Você pode usar frações se precisar de menos de uma partícula por unidade de distância. A taxa ajusta-se com escalonamento. |

## Do pai

Emite partículas baseadas em outras partículas (pais). Quando certas condições em uma partícula pai são atendidas, o spawner gera partículas.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-5.png)

| Propriedade | Descrição |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop | Para ter o loop de spawner quando atingir o final de sua duração, selecione **Looping** (padrão). Para ter o loop de spawner sem espera entre cada loop, selecione **Looping, sem delay**. Para ter o spawner gerado uma vez e depois parar, selecione **One shot**. |
| Delay | Quanto tempo (em segundos) o proprietário espera antes de desova. Este é um valor aleatório entre os valores X (mínimo) e Y (máximo). |
| Duração | Quanto tempo (em segundos) o spawner gera partículas para. |
| Emitter dos pais | O emissor-mãe, que deve corresponder ao nome do emissor definido nessa emissora. |
| Grupo de controle de spam | Este campo será adicionado às partículas-mãe para um controle mais preciso sobre o qual a partícula pai gera quantas crianças. Existem 4 grupos que você pode escolher e eles devem combinar os grupos de inicializadores, se os inicializadores exigem controle. |
| Partículas / gatilho | Quantas partículas (min e max) são geradas a partir de um pai cada vez que a condição de gatilho é satisfeita. |
| Particle Spawn Trigger | Que condição desencadeia desova de partículas de crianças (detalhado abaixo) |

### Particle Spawn Trigger
- Sobre o nascimento - Partículas infantis são geradas uma vez quando uma partícula pai nasce (uma vez por pai)
- Na Morte - As partículas de criança são geradas uma vez quando uma partícula pai morre (uma vez por pai)
- Distância - Partículas de crianças são geradas por distância percorrida como a partícula pai se move
- Em Hit - As partículas pai precisam implementar *Collision Updater*. As partículas de crianças são geradas quando uma partícula pai atinge a superfície.
- Vida - Partículas de crianças são geradas quando a vida da partícula pai está entre dois limites, A e B, expressos como valores normalizados (0 a 1) ao longo da vida da partícula. Se A < B, o período é 0..(A..B)..1, se B > O período é revertido para (0..B).( A..1).< B, the period is 0..(A..B)..1, if B > Este método é menos preciso do que as condições Sobre o Nascimento / Sobre a Morte.

## Ver também

* [Criar partículas](create-particles.md)
* [Emitters](emitters.md)
* [Formas](shapes.md)
* [Materiais](materials.md)
* [Iniciantes](initializers.md)
* [Atualizações](updaters.md)