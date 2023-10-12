# Emitters

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Particle emitters** gerenciar quantas partículas estão em um efeito, como elas aparecem, se movem e desaparecem, e como elas são desenhadas. Por exemplo, um efeito de fogo pode ser composto por três efeitos de partículas separados: chamas, embres e fumaça. Cada um desses efeitos é gerido por um emissor de partículas separadas.

Os emissores contêm mais controles como [spawners](spawners.md), [initializers](initializers.md) e [updaters](updaters.md).

![media/particles-reference-emitters-1.png](media/particles-reference-emitters-1.png)

| Propriedade | Descrição |
| ---------------- | -----------
| Nome do emissor | Um identificador único para o emissor de partículas |
| Max partículas | O número máximo de partículas ativas que o emissor pode gerenciar em um determinado momento, com base na taxa de desova das partículas e na vida útil. Se você deixar isso em 0, Stride usa sua própria estimativa. |
| Tempo de vida | Novas partículas têm uma vida útil entre estes dois valores |
| Espaço | Partículas no espaço **world** permanecem no espaço mundial quando a emissora se afasta deles. Partículas no espaço **local** sempre existem no sistema de coordenadas local do emissor; se o emissor se move, gira ou escala, as partículas se movem com ele. |
| Randomize | As partículas usam valores pseudo-aleatórios para tudo o que requer aleatoriedade. Se você definir isso para **Time**, diferentes emissores geram diferentes números aleatórios. Se você configurá-lo para **Fixed**, diferentes instâncias do mesmo efeito comportam-se de forma idêntica. **Position** age como Fixed mas é diferente para posições diferentes. |
| Prioridade do desenho | Isso controla a ordem em que as partículas são desenhadas. Números mais elevados têm maior prioridade. Por exemplo, se este efeito de partícula tiver uma prioridade de empate de 2, será desenhado após um efeito de partícula com uma prioridade de empate de 1. |
| Classificação | Escolha se os artigos devem ser desenhados por **profundidade** (fora da câmera), **age** (as partículas geradas primeiro são desenhadas em cima), **order**, ou em nenhuma ordem **none** (bom para partículas aditivas, que não necessitam de classificação). |
| Forma | Especifica o [shape](shapes.md) usado para desenhar as partículas |
| Material | Especifica o [material](materials.md) usado para renderizar as partículas |
| Spawners | [Spawners](spawners.md) control quão rapidamente novas partículas são emitidas. Para emitir partículas, os emissores devem ter pelo menos um spawner. |
| Iniciantes | [Iniciantes](initializers.md) definem os valores iniciais de novas partículas |
| Atualizações | [Updaters](updaters.md) atualize partículas vivas cada quadro, alterando seus atributos. Os atualizadores executam na ordem em que aparecem na lista. |

## Ver também

* [Criar partículas](create-particles.md)

* [Formas](shapes.md)

* [Materiais](materials.md)

* [Spawners](spawners.md)

* [Iniciantes](initializers.md)

* [Atualizações](updaters.md)