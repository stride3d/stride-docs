# Formas de partículas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Como as partículas são essencialmente apenas pontos no espaço, elas não têm forma definida. Em vez disso, Stride desenha formas ** entre** os pontos.

A maior diferença entre as formas de partículas é se eles sempre enfrentam a câmera, ou se eles podem girar livremente no espaço 3D.

Atualmente, os emissores só podem emitir um tipo de forma de cada vez.

## Billboards

**Billboards** sempre enfrentam a câmera. Eles aparecem **fixados no espaço 3D**, então eles não mudam com a posição da câmera.

Porque eles sempre enfrentam a câmera, outdoors suportam rotação angular apenas. Isso significa que eles apenas giram no sentido horário ou no sentido anti-horário.

## Hexagonal

**Hexagons** são idênticos aos outdoors, mas são hexagonais em forma. Como outdoors, eles sempre enfrentam a câmera e suportam rotação angular apenas.

## Quads

Quads são idênticos a outdoors, mas não girar para enfrentar a câmera, e assim apoiar a orientação e rotação 3D.

Stride atrai partículas de outdoor para o valor **Size** nas propriedades de efeito de partícula. Se você não especificar um tamanho, Stride expande os quads para 1m x 1m.

![media/particles-reference-shapebuilders-1.png](media/particles-reference-shapebuilders-1.png)

## Espirito alinhado à direção

Este sprite é nivelado e esticado na direção da partícula. Você pode definir uma direção inicial para as partículas com um inicializador, ou adicionar um atualizador que escreve velocidade de partícula como direção.

## Fitas e trilhas

Veja [ Ribbons e trilhas](ribbons-and-trails.md).

## Ver também

* [Criar partículas](create-particles.md)
* [Emitters](emitters.md)
* [Materiais](materials.md)
* [Spawners](spawners.md)
* [Iniciantes](initializers.md)
* [Atualizações](updaters.md)