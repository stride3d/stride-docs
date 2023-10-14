# Atualizadores de partículas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Depois que uma partícula aparece, ela pode mudar ao longo do tempo antes de desaparecer. **Updaters** agem em todas as partículas vivas ao longo do tempo, alterando atributos como posição, velocidade, cor e assim por diante. Por exemplo, uma força de gravidade atualiza a velocidade da partícula a uma taxa constante, acelerando-a para o chão.

Stride apresenta vários atualizadores embutidos. A amostra [custom partículas](tutorials/custom-particles.md) demonstra como você pode adicionar atualizadores ao motor.

## Propriedades comuns

Várias propriedades são comuns em muitos atualizadores.

![media/particles-reference-updaters-11.png](media/particles-reference-updaters-11.png)

| Property | Descrição
|-----------------
| Debug draw | Desenha uma forma de wireframe de depuração para mostrar os limites para o atualizador. Este asset só funciona para o editor e é ignorado quando você executar o seu jogo.
| Posição herança | Herdar a posição do componente do sistema de partículas, conforme definido no campo Transform |
| Posição offset | Tradução adicional do módulo. Se herda a posição do pai, isso é aplicado em cima do herdado. |
| Rotação herança | Herda a rotação do componente do sistema de partículas, conforme definido no campo Transform |
| Rotation offset | Rotação adicional do módulo. Se herda a rotação do pai, isso é aplicado em cima do herdado. |
| Herança de escala | Herda a escala uniforme do componente do sistema de partículas, conforme definido no campo Transform. |
| Escala de deslocamento | Escala de módulo adicional. Se herda a escala pai, isso é aplicado em cima do herdado. |

## Colher

![media/particles-reference-updaters-5.gif](media/particles-reference-updaters-5.gif)

A **collider** é um atualizador que muda a posição e a velocidade da partícula quando colide com uma forma predefinida.

![media/particles-reference-updaters-3.png](media/particles-reference-updaters-3.png)

| Propriedade | Descrição |
| -------- |--------
| Forma | A forma que as partículas colidem com (esfera, cilindro, caixa ou torus) |
| É oco | Se desativado, a forma é sólida e as partículas saltam. Se ativado, a forma é oca como um recipiente, e as partículas permanecem dentro do volume. |
| Mate partículas | Se ativado, as partículas são mortas imediatamente quando colidem com a forma. |
| Restituição | O coeficiente de restituição é a velocidade que a partícula mantém em comparação com sua velocidade antes da colisão. Neste atualizador usamos a restituição como uma velocidade *vertical somente*. Não afeta a velocidade ao longo da superfície. |
| Fricção | A quantidade de velocidade horizontal a partícula perde em colisão com a forma. Ele afeta apenas a velocidade ao longo da superfície, e não muda a altura em que a partícula salta. |

## Campo de força

![media/particles-reference-updaters-6.gif](media/particles-reference-updaters-6.gif)

O campo **force** é definido por uma forma delimitadora e vários vetores de força que operam nas partículas com base na sua posição relativa à forma de ligação.

![media/particles-reference-updaters-1.png](media/particles-reference-updaters-1.png)

| Property | Descrição
| --------- | -
| Forma | A forma de amarração (esférica, cilindro, caixa ou torus)
| Falloff | A queda é uma função linear simples que dita a intensidade da força aplicada em partículas. É baseado na distância da partícula do seu centro. A força dentro é o quanto da magnitude se aplica quando a partícula está dentro da distância *falloff start* do centro. A força externa é o quanto da magnitude se aplica quando a partícula é mais do que *falloff end* longe do centro. Ambos os valores são relativos ao tamanho de forma vinculante; os valores entre eles são interpolados entre as duas magnitudes. Valores no centro ainda podem ser 0, fazendo a força apenas funcionar *outside* a forma limitante.
| Conservação da energia | Que parte da energia da força conservada pelas partículas. A energia preservada é armazenada como velocidade de partículas e resulta em um aumento gradual da velocidade. A energia não conservada aplica-se diretamente à posição da partícula e é perdida quando a força desaparece.
| Força direcionada | A força vetorial que move a partícula ao longo do eixo central do campo (normalmente para cima)
| Força de vórtice | A força que move a partícula em torno do eixo central do campo usando a regra da direita para rotação
| Força repulsiva | A força que move a partícula do centro do campo ou para ela, se negativo
| Força fixa | A força que move a partícula ao longo de um eixo fixo não rotativo e não dimensionamento

### Queda

O **falloff** é a mudança na força das forças baseada na distância da partícula do centro da forma. A queda é uma função da distância relativa, onde a distância de `0` é o centro, 1 é os limites da forma, e mais de 1 significa que a partícula está fora da forma.

Partículas mais próximas do que o início de queda são sempre afetadas com o coeficiente Força interior. As partículas mais distantes do que a extremidade de queda são sempre afetadas com o coeficiente Força Fora.

Coeficiente para partículas entre mudanças linearmente:

![media/particles-reference-updaters-2.png](media/particles-reference-updaters-2.png)

Por exemplo, se a forma delimitação é uma esfera com um raio de 10m, as partículas dentro de 1m de seu centro (0,1 x 10m) serão movidas com força total. Após a distância de 1m a força diminui linearmente até atingir zero a 9m de distância (0,9 x 10m). Depois disso, as forças não afetam a partícula.

### Formas de nivelamento

#### Esfera

![media/particles-reference-updaters-7.png](media/particles-reference-updaters-7.png)

<sub>Licença de imagem: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, imagem de esfera da <a href="https://commons.wikimedia.org/wiki/File:Sphere_wireframe_10deg_6r.svg">"Sphere wireframe" work</a> por <a href="https://commons.wikimedia.org/wiki/User:Geek3">Geek3</a> abaixo <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>

Quando a forma de amarração é uma esfera, a distância de decadência é baseada na distância radial da partícula do centro da esfera. Se a esfera é dimensionada para um elipsoide, esta distância também é dimensionada. A distância é relativa ao raio, sendo 1.0 a superfície da esfera.

O vetor de força direcionada é paralelo ao eixo Y local da esfera. O vetor de força repulsiva aponta do centro para a partícula. O vetor da força do vórtice vai ao redor do eixo Y da esfera na posição da partícula (usando a regra da direita para rotação).

#### Caixa

![media/particles-reference-updaters-8.png](media/particles-reference-updaters-8.png)

Quando a forma de amarração é uma caixa, a distância de escoamento é a mais longa das três distâncias nos eixos X, Y e Z. A distância é relativa aos tamanhos da caixa, sendo 1.0 a superfície da caixa.

O vetor de força direcionado é paralelo ao eixo Y local da caixa. O vetor de força repulsiva aponta do centro para a partícula. O vetor de força de vórtice vai ao redor do eixo Y da caixa na posição da partícula (usando a regra da direita para rotação).

#### Cilindro

![media/particles-reference-updaters-9.png](media/particles-reference-updaters-9.png)

Quando a forma de amarração é um cilindro, a distância de escoamento é baseada na distância radial da partícula do eixo Y local do cilindro. A altura da partícula (posição no eixo Y) é ignorada a menos que a partícula esteja fora do cilindro, caso em que a distância é sempre 1.

O vetor de força direcionado é paralelo ao eixo Y local do cilindro. O vetor de força repulsiva aponta do eixo Y local do cilindro para a partícula, de modo que a força repulsiva é sempre horizontal. O vetor de força de vórtice vai ao redor do eixo Y do cilindro na posição de partícula (usando a regra da direita para rotação).

#### Torus

![media/particles-reference-updaters-10.png](media/particles-reference-updaters-10.png)

<sub>Licença de imagem: <a href="https://gnu.org/licenses/fdl.html">GFDL</a>, <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, torus imagem da <a href="https://commons.wikimedia.org/wiki/File:Simple_Torus.svg"> "A simple Torus" work</a> by Yassine Mrabet under GFDL, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>

Quando a forma delimitação é um toro, a natureza do campo muda completamente. A distância de queda é baseada na distância radial da partícula do círculo interno do torus (eixo de revolução, mostrado em vermelho), escolhendo um ponto no círculo mais próximo da partícula.

O vetor de força direcionada é tangente ao eixo da revolução no ponto mais próximo da partícula. O vetor de força repulsiva aponta do eixo para a partícula. O vetor de força de vórtice vai ao redor do vetor de força direcionado usando a posição da partícula relativa ao eixo (usando a regra da mão direita para rotação).

Enquanto a matemática é um pouco complicada, usar o campo de força torus não é. Experimente!

## Gravidade

O **gravity updater** é uma força simplificada que afeta todas as partículas, independentemente de sua posição, com um vetor de força constante que não escala ou gira. É editável, então você pode usá-lo em projetos com diferentes escalas e comportamentos.

![media/particles-reference-updaters-4.png](media/particles-reference-updaters-4.png)

A força de gravidade ignora a maioria das propriedades, como deslocamento e herança, e só usa os seguintes atributos:

| Property | Descrição  
| ----------- | --
| Aceleração gravitacional | O vetor da força gravitacional que define a aceleração para todas as partículas afetadas. O valor padrão corresponde à gravidade média na Terra.

## Direção da velocidade

**Direção da velocidade** é um post-updater, o que significa que ele resolve após os atualizadores que não são pós-updaters, mesmo que eles apareçam mais tarde na lista.

Não tem propriedades e simplesmente atualiza a direção da partícula para corresponder à sua velocidade. Ele usa a diferença entre as posições da partícula do último quadro e não é diretamente dependente da velocidade. Isso significa que mesmo se a própria velocidade da partícula é 0 e é apenas movida por forças externas, a direção da velocidade resolve corretamente.

A direção não é um vetor normalizado e muda sua magnitude para corresponder à distância delta. Ele substitui quaisquer parâmetros de direção anteriores, como de um inicializador.

## Animação de cores

**A animação da cor** é um pós-updater, o que significa que resolve após os atualizadores que não são pós-updaters, mesmo que apareçam mais tarde na lista.

A animação colorida atualiza o campo de cor da partícula através da amostragem de uma curva sobre a vida normalizada da partícula (0 a 1). Você pode definir uma curva secundária em que caso as partículas terão cores ligeiramente variadas. A animação de cor substitui quaisquer parâmetros de cor anteriores, como a cor inicial.

Os valores da curva são dados como Vector4, correspondentes a RGBA com valores padrão entre 0 e 1. Os valores acima de 1 são válidos apenas para RGB (não Alpha) e podem ser usados para renderização HDR.

## Animação de rotação

**A animação de rotação ** é um post-updater, o que significa que resolve após os atualizadores que não são pós-updaters, mesmo que eles apareçam mais tarde na lista. É estritamente uma rotação de eixo único, usada para partículas de papelão.

A animação de rotação atualiza o campo de rotação da partícula através da amostragem de uma curva sobre a vida normalizada da partícula (0 a 1). Você pode definir uma curva secundária em que caso as partículas terão rotações ligeiramente variadas.

A animação de rotação substitui quaisquer parâmetros de rotação anteriores, como a Rotação Inicial. Se você precisar de um tipo aditivo de animação, verifique se o Construtor de Forma o suporta (encontrado nas propriedades do Construtor de Forma). As animações aditivas não são preservadas em campos de partículas e não persistem, mas podem ser aplicadas além de quaisquer campos que as partículas já possuem.

## Animação de tamanho

**A animação tamanho** é um post-updater, o que significa que ele resolve após os atualizadores que não são pós-updaters, mesmo que eles apareçam mais tarde na lista.

Este é estritamente um tamanho uniforme. A animação de tamanho atualiza o campo Tamanho da partícula, amostrando uma curva sobre a vida normalizada da partícula (0 a 1). Você pode definir uma curva secundária, nesse caso as partículas têm tamanhos ligeiramente variados.

A animação de tamanho substitui quaisquer parâmetros do tamanho anterior, como o tamanho inicial. Se você precisar de animação aditiva, verifique se o Construtor de Formas o suporta (nas propriedades do Construtor de Forma). As animações aditivas não são preservadas em campos de partículas e não persistem, mas podem ser aplicadas além de quaisquer campos que as partículas já possuem.

* [Criar partículas](create-particles.md)
* [Emitters](emitters.md)
* [Formas](shapes.md)
* [Materiais](materials.md)
* [Spawners](spawners.md)
* [Iniciantes](initializers.md)