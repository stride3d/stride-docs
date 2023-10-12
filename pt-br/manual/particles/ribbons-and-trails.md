# Fitas e trilhas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Para criar **ribbons** e **trails**, Stride constrói os dados de malha como uma faixa que liga as partículas, em vez de quads individuais. As fitas e as trilhas são frequentemente usadas para criar efeitos visuais, como escórias de espada.

![media/particles-tutorials-ribbons-0.jpg](media/ribbons-and-trails.jpg)

No diagrama abaixo, várias partículas (representadas como pontos vermelhos) são renderizadas como quads individuais (quadrados azuis):

![Diagrama: quads individuais](media/particles-diagram-quads.png)

No diagrama abaixo, uma tira é criada conectando as partículas e tornando quads entre as partículas adjacentes:

![Diagrama: fita de partículas](media/particles-diagram-strip.png)

## Ribbons vs trilhas

Ambas as fitas e trilhas geram uma superfície plana que segue um eixo conectando partículas adjacentes em uma linha. Esta linha define um dos eixos da superfície. A diferença é que as fitas sempre enfrentam a câmera, e as trilhas não.

O gif abaixo mostra o comportamento diferente de fitas (vermelho) e trilhas (amarelo) quando visto de diferentes ângulos de câmera. Observe como a fita não muda à medida que a câmera se move; ela é fixa no espaço.

![ Ribbons vs trails](media/ribbons-vs-trails.gif)

## Ordenar partículas

Para criar fitas e trilhas, você geralmente precisa classificar as partículas em uma ordem. Se você não classificar as partículas, elas se conectam erraticamente, como neste diagrama:

![Diagrama: partículas não ordenadas/particles-tutoriais-ribbons-2.png](media/particles-diagram-unordered.png)

Aqui está um exemplo de como as partículas não ousadas olham para o tempo de execução:

<p>
<video autoplay loop class="responsive-video" poster="tutorials/media/sword-slash-2.jpg">
   <source src="tutorials/media/sword-slash-2.mp4" type="video/mp4">
</video>
</p>

Em vez das partículas que se conectam em ordem, a tira erraticamente salta entre partículas. (Este é o mesmo problema que os quads alfa-blended têm quando eles não são classificados corretamente.)

Para classificar as partículas, sob **Particle System > Source > Emitters**, altere a propriedade **Sorting**.

![Partículas de fragmento](tutorials/media/sort-by-order.png)

Se suas partículas têm a mesma propriedade **lifespan**, e são emitidas não mais do que uma vez por quadro (geralmente o caso em 30 partículas por segundo ou menos), você pode classificá-las por idade.

No entanto, se você gerou várias partículas por segundo ou suas partículas variam em vida útil, a classificação por idade não fornece uma ordem consistente, pois o parâmetro de classificação muda entre quadros. Neste caso, você deve classificar as partículas por ordem. Para fazer isso, você precisa adicionar um inicializador de ordem <g id="1">spawn</g>. Para fazer isso, nas propriedades da entidade, sob <g id="2">Particle System > Source > Emitters</g>, ao lado de <g id="3">Initializers</g>, clique em <x id="4"/>Green plus button<x id="5"/> (<g id="6">Add</g>Spawn Order</g>.<g id="7">

![Adicionar inicializador de ordem desova](tutorials/media/add-spawn-order-initializer.png)

Isso adiciona um inicializador de ordem espawn ao emissor. Não tem propriedades, mas dá às partículas um SpawnID que podemos classificá-las.

> [!Note]
> A classificação por profundidade pode funcionar em casos de nicho, mas isso não preserva a ordem entre diferentes quadros. Não o recomendamos para a maioria das situações.

## Coordenadas de textura

Ao contrário de outdoors, que são quads individuais, fitas e trilhas têm uma única superfície em todas as partículas. Para definir como as texturas são mapeadas através da superfície, abaixo de **Particle System > Source > Emitters > Shape**, altere a propriedade **UV Coords**.

![UV coordena propriedade](media/uv-coords.png)

* **AsIs**: A textura é mapeada por segmento, copiando o mesmo quad esticado entre cada duas partículas. Isso às vezes é útil com animações flipbook (nas configurações [Material](materials.md)).

   ![As-is texture mapping](media/particles-diagram-asis.png)

* **Stretched**: A textura é esticada entre a primeira e última partícula da trilha ou fita. O **UV Factor** define quantas vezes a textura aparece em toda a trilha ou fita (1 = uma vez).

   ![ Mapeamento de textura padrão](media/particles-diagram-stretched.png)

* **DistanceBased**: A textura é repetida com base no comprimento do mundo real da fita ou da trilha em vez do número de partículas. O **UV Factor** define a distância em unidades [world](../game-studio/world-units.md) após o qual a textura repete

   ![ Mapeamento de textura baseado em resistência](media/particles-diagram-distancebased.png)

## Fitas e trilhas suaves

Você pode adicionar segmentos extras entre partículas adjacentes para alisar as linhas entre partículas. Para fazer isso, sob **Particle System > Source > Emitters > Shape**, altere a propriedade **Smoothing**.

* **None** — Nenhum alisamento cria apenas um segmento juntando duas partículas. Isso cria trilhas e fitas com ângulos afiados.

   ![Diagrama: alisamento de partículas](media/diagram-smoothing-none.png)

* **Fast** — Isso usa a interpolação [Catmull-Rom (Wikipedia)](https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline) para adicionar segmentos extras entre partículas, criando um efeito mais suave. Você pode definir o número de segmentos com a propriedade **Segmentos**.

   ![Diagrama: alisamento de partículas](media/diagram-smoothing-fast.png)

* **Best** — Isso geralmente cria o efeito mais suave, mas requer mais CPU. Ele calcula um círculo em torno de cada três partículas sequenciais ao longo do eixo de controle, em seguida, adiciona pontos de controle extras no círculo, mantendo os segmentos em um arco. Para o primeiro e último segmento, há apenas um arco a ser seguido, mas para as secções médias, dois arcos diferentes de dois círculos diferentes se sobrepõem; Stride interpola os pontos de controle do primeiro arco e o segundo como o ponto aproxima a segunda partícula. Você pode definir o número de segmentos entre cada duas partículas com a propriedade **Segmentos**.

   ![Diagrama: alisamento de partículas](media/diagram-smoothing-best.png)

Este vídeo mostra a diferença entre os três métodos de alisamento. Note que a trilha mais correta (usando o método **Best**) é ligeiramente mais circular, mais próxima do caminho real do balanço da espada.

![media/particles-tutorials-ribbons-6.gif](media/smoothing-comparison.gif)

## Projeto de amostra

Para um exemplo de um projeto que usa fitas e trilhas, experimente o **Ribbon Particles Sample** incluído com Stride.

## Ver também

* [Formas](shapes.md)
* [Tutorial: Criar uma trilha](tutorials/create-a-trail.md)
* [Tutorial: Lasers e raios](tutorials/lasers-and-lightning.md)