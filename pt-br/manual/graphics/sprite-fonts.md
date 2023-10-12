# Fontes Sprite

<span class="badge text-bg-primary">Intermediário</span>

**Sprite fontes** tomar uma fonte TrueType como uma entrada (quer uma fonte do sistema ou um arquivo que você atribui) e, em seguida, criar todas as imagens (prites) de caracteres (glifos) para o seu jogo.

Muitas vezes é ineficiente renderizar fontes diretamente. Nós geralmente queremos criar (rasterizar) eles apenas uma vez, então apenas renderizar a imagem de um caractere de letra (por exemplo A, a, B, C etc) cada vez que precisamos dele. Isso envolve a criação de um sprite (imagem retangular biculada) do personagem, que é exibido na tela como uma imagem regular. Um bloco de texto seria uma coleção de sprites renderizados como quads para que todos os personagens estejam alinhados e espaçados corretamente.

## Fontes sprite off-line-rasterizadas

**Offline-rasterized** fontes sprite criar (rasterizar) um número fixo de caracteres (glifos) de um determinado tamanho, e assá-los em uma textura atlas ao construir os ativos para o seu jogo.

No jogo, eles só podem ser desenhados com este tamanho. Somente os caracteres que você especificar podem ser exibidos.

### Quando usar fontes off-rasterizadas

Use fontes off-rasterizadas quando:

- você usa uma fonte de tamanho conhecido com um personagem conhecido definido em seu jogo

- você precisa anti-aliasing em suas fontes

- sua interface de usuário é usada apenas no modo de tela cheia

Faça **not** use fontes offline-rasterizadas quando:

- sua interface de usuário é renderizada como parte da cena mundial 3D

- você tem um número variado ou desconhecido de tamanhos de fontes e conjuntos de caracteres

### Propriedades de fonte sprite off-line-rasterizada

![media/fonts-1.png](media/fonts-1.png)

| Propriedade | Descrição |
|-----------------------------|-------------------
| Fonte | Sistema (instalado nesta máquina) ou de arquivo. As fontes do sistema também podem tomar **Bold** e *Italic* opções. |
| Tipo de fonte | Rasterizado offline |
| Tamanho (em pixels) | A fonte é assada com este tamanho. Nenhum outro tamanho da fonte pode ser exibido. |
| Conjunto de caracteres | (Opcional) Um arquivo de texto contendo todos os caracteres que precisam ser assados. |
| Regiões de carácter | Código para regiões de caracteres que precisam ser assados. Por exemplo, (32 - 127) é uma região suficiente para conjuntos de caracteres ASCII. |
| Anti alias | Nenhum, escala de cinza ou [ClearType](http://alienryderflex.com/sub_pixel/) |
| Premultiplicar | Se o alfa deve ser pré-multiplicado. O padrão é sim para corresponder ao resto do pipeline do motor. |
| Personagem padrão | Personagens perdidos padrão para isso quando renderizado. O código padrão é 32 que é espaço. |

## Runtime-rasterized sprite fontes

**Runtime-rasterized** fontes sprite criar (rasterizar) um número variado de caracteres (glifos) de qualquer tamanho e assá-los em uma textura atlas **on demand**.

Esta função é invocada no tempo de execução quando você altera o tamanho da fonte ou solicita caracteres que não foram desenhados antes.

Sob o capô, as fontes de runtime-rasterized usam texturas de atlas semelhantes às fontes off-line-rasterized. Isso significa que se você tiver três tamanhos diferentes de fontes, eles levam cerca de três vezes mais memória do que um único tamanho de fonte. Os tamanhos de fonte também são levados em conta.

### Quando usar fontes de runtime-rasterized

Use fontes de runtime-rasterized quando:

- você precisa de vários tamanhos para sua fonte ou não sabe quais caracteres você precisa

- o número de caracteres possíveis na fonte supera muito o número de caracteres que você precisa para exibir no tempo de execução (por exemplo, japonês ou chinês, que usam milhares de caracteres)

- você precisa anti-aliasing em suas fontes

- sua interface de usuário é usada apenas no modo de tela cheia

Faça **not** use fontes de runtime-rasterized quando:

- sua interface de usuário é renderizada como parte da cena mundial 3D

- você só precisa de um ou dois tamanhos conhecidos para um pequeno conjunto de caracteres

- você tem um texto escalonado (como fontes de runtime-rasterized irá recriar cada tamanho de fonte única)

### Runtime-rasterized sprite propriedades de fonte

![media/fonts-2.png](media/fonts-2.png)

| Propriedade | Descrição |
|-----------------------------|-------------
| Fonte | Sistema (instalado nesta máquina) ou de arquivo. As fontes do sistema também podem tomar **Bold** e *Italic* opções. |
| Tipo de fonte | Runtime Rasterized |
| Tamanho padrão (em pixels) | Se o tamanho não for especificado, o texto é renderizado com este. |
| Anti alias | Nenhum, escala de cinza ou [ClearType](http://alienryderflex.com/sub_pixel/) |
| Personagem padrão | Os caracteres perdidos serão padrão para este quando renderizado. O código padrão é 32, que é espaço. |

## Signed distance field sprite fontes

**Signed distance field** (SDF) fontes usam uma técnica totalmente diferente para renderizar fontes. Em vez de rasterizar a cor do personagem no sprite, eles produzem a distância do pixel atual para a borda mais próxima do glifo.

A distância é positiva se o pixel é **inside** os limites do glifo e negativo se o pixel é **outside** o glifo (daí o nome assinado).

Ao renderizar, verifique a distância e saída de um pixel branco se for positivo ou `0` e um pixel preto se for negativo. Isso permite que bordas muito nítidas e limpas sejam renderizadas mesmo sob ampliação (que de outra forma faz com que os sprites tradicionais pareçam pixelados).

A imagem abaixo compara fontes SDF e as fontes off-line-rasterizadas sob ampliação:

![media/fonts-5.png](media/fonts-5.png)

### Quando usar fontes SDF

Use fontes SDF quando:

- sua IU é renderizada como parte da cena mundial 3D ou tela cheia (SDF funciona bem para ambos os casos)

- você tem um texto escalonado ou esperar que o usuário seja capaz de ampliar

- você precisa de vários tamanhos para sua fonte

- você tem tamanhos de fonte muito grandes (SDF consome menos memória do que fontes de runtime-rasterized)

Faça **not** use fontes SDF quando:

- você precisa anti-aliasing em suas fontes (fontes SDF atualmente não suportam)

- você só precisa de um ou dois tamanhos conhecidos para um pequeno conjunto de caracteres (melhor usar fonte off-rasterizada)

- o número de caracteres possíveis na fonte supera muito o número de caracteres que você precisa para exibir no tempo de execução (por exemplo, japonês ou chinês, que usam milhares de caracteres). Se uma fonte de runtime-rasterized não é uma opção (por exemplo, por causa do escalonamento), certifique-se de assar cada personagem que você precisa, ou eles não serão exibidos.

### Propriedades do SDF

![media/fonts-3.png](media/fonts-3.png)

| Propriedade | Descrição |
|-----------------------------|--------------
| Fonte | Sistema (instalado nesta máquina) ou de arquivo. As fontes do sistema também podem escolher opções **Bold** e *Italic*. |
| Tipo de fonte | Rasterizado offline |
| Tamanho (em pixels) | A fonte será assada com este tamanho. Todos os tamanhos de fonte ainda podem ser exibidos. Tamanho maior geralmente resulta em melhor qualidade, e geralmente você quer manter isso em 20 ou mais para evitar falhas visuais. |
| Conjunto de caracteres | (Opcional) Um arquivo de texto contendo todos os caracteres que precisam ser assados. |
| Regiões de carácter | Código para regiões de caracteres que precisam ser assados. Por exemplo (32 - 127) é uma região suficiente para conjuntos de caracteres ASCII. |
| Personagem padrão | Os caracteres perdidos serão padrão para este quando renderizado. O código padrão é 32 que é espaço. |

## Atlas de textura para diferentes fontes sprite

### Rasterizada offline

![media/fonts-6.png](media/fonts-6.png)

A fonte de sprite offline-rasterizada asse todos os caracteres solicitados uma vez em uma textura de tons de cinza. Se você fizer zoom, verá que eles são pixelados. A fonte tem um tamanho fixo e não funciona bem para escalonar texto.

### Corrida rasterizada

![media/fonts-8.png](media/fonts-8.png)

A fonte de sprite de tempo de execução apenas asse (rasteriza) os caracteres que são desenhados no jogo. A textura inicial do atlas é intencionalmente maior para que possa ter mais caracteres de tamanhos potencialmente diferentes antes de precisar de redimensionamento.

### Campo de distância assinado

![media/fonts-7.png](media/fonts-7.png)

Como a fonte sprite off-line-rasterizada, a fonte sprite de campo de distância assinado asse todos os caracteres solicitados uma vez. A principal diferença é que codifica distâncias das linhas de caracteres em vez de cor real, e usa RGB de todos os três canais. Você ainda pode reconhecer cada personagem, mas um shader especial é necessário para torná-los corretamente. A parte de cima é que as bordas permanecem afiadas, mesmo sob ampliação.

## Leitura adicional

* [Documento sobre como campos de distância e campos de distância multicanal em particular trabalho](https://dspace.cvut.cz/bitstream/handle/10467/62770/F8-DP-2015-Chlumsky-Viktor-thesis.pdf)

* [Stack Exchange thread delineando as diferenças entre fontes SDF monocanal e SDF multicanal](https://computergraphics.stackexchange.com/questions/306/sharp-corners-with-signed-distance-fields-fonts)