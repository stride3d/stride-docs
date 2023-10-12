# Compressão de textura

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

** Texturas compactas** usam até 50% menos espaço e são mais rápidos para carregar. A compressão produz resultados semelhantes à compressão JPEG. A animação abaixo foi gravada com a câmera posicionada extremamente perto da textura; a distâncias normais, a diferença não é notável.

![ Compressão de tensão](media/texture-compression.gif)

Para texturas coloridas, a compressão é melhor usada para imagens visualmente ocupadas, onde os efeitos são menos perceptíveis. Você provavelmente não quer comprimir texturas com bordas finas, como logotipos usados em telas [splash](../../game-studio/splash-screen.md).

A compressão converte a textura em um múltiplo de 4. Se a textura já não é um múltiplo de 4, Stride expande-a.

A compressão remove dados da imagem com base no tipo de textura:

| Tipo de textura | Compressão |
|--------------|----------
| Cor | Abrange todos os canais RGBA. Se a propriedade `Alpha` é definida para `None` nas propriedades da textura, o canal alfa é removido |
| Escala de cinza | Remove todos os canais RGBA exceto vermelho |
| Mapa normal | Remove os canais azul e alfa (alfa não é usado em mapas normais de qualquer maneira). O canal azul é reconstruído a partir dos canais vermelho e verde (assumindo um pixel tem um comprimento vetorial de 1) |

* [Índice de texturas](index.md)
* [Mapas normais](normal-maps.md)
* [Materiais](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Render texturas](../graphics-compositor/render-textures.md)
