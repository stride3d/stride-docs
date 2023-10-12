# Texturas

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

**Texturas** são imagens usadas principalmente em [materiais](../materials/index.md). Stride mapeia texturas para as superfícies que o material cobre.

Texturas podem adicionar informações de cor a um material — por exemplo, para adicionar um padrão de tijolo a uma parede ou um padrão de madeira a uma mesa. Os valores dos pixels em uma textura (**texels**) também podem ser usados para outros cálculos, tais como em mapas especulares, mapas de metalidade, ou [ mapas normais](normal-maps.md).

Os materiais normalmente contêm texturas múltiplas; por exemplo, um material pode conter uma textura de cor, uma textura de mapa normal e uma textura de rugosidade.

As texturas também podem ser usadas fora de materiais; por exemplo, você pode atraí-las diretamente para a interface do usuário, ou usá-las em [sprites](../../sprites/index.md).

## Tipos de arquivo suportados

Você pode usar os seguintes tipos de arquivo como texturas:

* `.dds`
* `.jpg`
* `.jpeg`
* `.png`
* `.gif`
* `.bmp`
* `.tga`
* `.psd`
* `.tif`
* `.tiff`

> [!Note]
> * Stride só importa o primeiro quadro de arquivos de imagem animados, como gifs animados ou PNGs. Eles não animam em Stride; eles aparecem como imagens estáticas.
> * Stride atualmente não suporta arquivos de filme.

## Adicionar uma textura

No **Asset View**, clique em **Add asset** > **Texture**, em seguida, selecione um modelo para a textura (**color**, **grayscale** ou **normal map**):

![ Adicionar textura](media/add-texture.png)

> [!Note]
> Os alvos do remetente são um tipo diferente de textura, e não usam imagens. Em vez disso, eles renderizam a saída de um [camera](../cameras/index.md). Para mais informações, consulte [Render target](../graphics-compositor/render-textures.md).

Alternativamente, arraste o arquivo de textura do Explorer para o Asset View:

![Drap e solte um arquivo de recursos para o Asset View](../../get-started/media/create-assets-drop-resource.png)

Em seguida, selecione um modelo de textura (**color**, **grayscale** ou **normal map**):

![Lista de modelos de ativos](media/create-assets-drag-drop-select-asset-template.png)

Game Studio adiciona a textura para o Asset View:

![ Ativo de extensão criado ](../../get-started/media/create-assets-drag-drop-asset-created.png)

## Propriedades de textura

As seguintes propriedades são comuns a todas as texturas.

![ Propriedades de exposição](media/texture-properties.png)

| Propriedade | Descrição |
|------------------|---------
| Largura | A largura da textura no jogo |
| Altura | A altura da textura no jogo |
| Percentagens de uso | Use percentagens de largura e altura em vez do tamanho real do pixel |
| Largura | A largura da textura no jogo |
| Altura | A altura da textura no jogo |
| Tipo | Use **Color** para texturas que você deseja exibir como imagens, **Normal map** para mapas normais, e **Grayscale** para fornecer valores para outras coisas (eg especular maps, mapas de metalness, mapas de rugosidade). Texturas de cor e mapas normais têm propriedades adicionais (veja abaixo). |
| Gerar mipmaps | Gerar diferentes versões da textura em diferentes resoluções a serem exibidas a diferentes distâncias. Melhora o desempenho, remove artefatos visuais e reduz o pop-in ao usar **streaming**, mas usa mais memória. Desnecessário para texturas sempre à mesma distância da câmera (como UIs). |
| Compressa | Comprimir a textura final para um formato baseado na plataforma de destino e uso. A textura final é um múltiplo de 4. Para obter mais informações, consulte a compressão [Textura](compression.md). |
| Fluxo de corrente | Transfira a textura dinamicamente no tempo de execução. Isso melhora o desempenho e o tempo de carregamento da cena. Não recomendado para texturas importantes que você sempre quer ser carregado, como telas de respingo. Para mais informações, consulte [Streaming](streaming.md). |

### Propriedades de textura de cor

As seguintes propriedades se aplicam se você definir a textura **type** para **color**.

![ Propriedades de textura de cor](media/color-texture-properties.png)

| Propriedade | Descrição |
|----------|---------
| amostragem sRGB | Armazene a textura no formato sRGB e converta-se em espaço linear quando amostrado. Recomendado para todas as texturas coloridas, a menos que estejam explicitamente no espaço linear. |
| Chave de cor habilitada | Use o conjunto de cores na propriedade **Color key color** para transparência no tempo de execução. Se desativado, o projeto usa áreas transparentes da textura em vez |
| Cor da cor da cor | A cor utilizada para transparência no tempo de execução. Apenas aplicado se a chave **Color habilitada** for selecionada. |
| Alfa | O formato alfa textura (**None**, **Mask**, **Explicit**, **Interpolated**, ou **Auto**) |
| Premultiplicação alfa | Premultiplicar todos os componentes de cor das imagens por seu componente alfa |

### Propriedades do mapa normal

A seguinte propriedade aplica-se se você definir a textura **type** para **rmágrafo normal**.

![Normal map textures](media/normal-map-texture-properties.png)

| Propriedade | Descrição |
|----------|---------
| Inversão Y | Tenha positivo Y-componente (verde) enfrentar no espaço tangente. Isso depende das ferramentas que você usa para criar mapas normais. |

Para obter mais informações sobre mapas normais, consulte a página [Normal maps](normal-maps.md).

## Texturas em tons de cinza

A textura em tons de cinza usa apenas o canal R da imagem (finalRGBA = originalRRRR).

> [!Note]
> Se você adicionar uma textura a uma cena (como um componente sprite), e definir o tipo de textura a tons de cinza, parece vermelho, não monocromático. Isso porque a imagem usa o canal R (vermelho).

> Para fazer o canal monocromático, nas propriedades componentes **Sprite**, defina o **Type** como **Grayscale**. Para obter mais informações sobre as propriedades do componente sprite, consulte [Use sprites](../../sprites/use-sprites.md).

Você pode usar texturas em tons de cinza para fornecer valores em mapas materiais [](../materials/material-maps.md). Por exemplo, você pode usar uma textura como um **blend map** para misturar duas camadas de material:

![ Diagrama de mapas ampliados](../materials/media/blend-map-diagram.png)

![ Diagrama de mapas ampliados](../materials/media/blend-map-diagram2.png)

Note como a textura do mapa de mistura corresponde à modelagem no resultado.

Para obter mais informações, consulte [Mapas importantes](../materials/material-maps.md).

### Configurações de textura global

Para obter instruções sobre como acessar as configurações de textura global, consulte a página [Game Settings](../../game-studio/game-settings.md).

![ Configurações de exposição](../../game-studio/media/texture-settings.png)

| Propriedade | Descrição |
|-----------------|--------------
| Qualidade da textura | A qualidade da textura ao codificar texturas. **Fast** usa o menor CPU, mas tem a menor qualidade. As configurações mais altas podem resultar em compilações mais lentas, dependendo da plataforma de destino. |

## Ver também

* [Mapas normais](normal-maps.md)
* [Compressão de textura](compression.md)
* [Transmissão de texto](streaming.md)
* [Materiais](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Render texturas](../graphics-compositor/render-textures.md)
* [Skyboxes e fundos](skyboxes-and-backgrounds.md)