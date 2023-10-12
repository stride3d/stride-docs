# Skyboxes e fundos

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programação</span>

**Skyboxes** são fundos que criam a ilusão de espaço e distância. Os cenários típicos incluem céus, nuvens, montanhas e outras paisagens. Como as caixas de céu são pré-renderizadas, eles exigem pouca GPU e CPU.

Você pode usar **cubemaps** ou **360° texturas panorâmicas** como skyboxes. Você também pode [usá-los para iluminar a cena](../lights-and-shadows/skybox-lights.md).

> [!Note]
> Atualmente, Stride não suporta skydomes ou skyboxes locais.

Alternativamente, você pode exibir um fundo **2D**, que é frequentemente útil para jogos 2D.

## Produtos de plástico

A **cubemap** é uma textura de seis lados. Quando estas texturas são montadas em um cubo ao redor da cena, o cubemap simula espaçoso ambiente 3D.

![ Desatual planeta skybox](media/cubemap-cross.jpg)

![Merged skybox](media/skybox-assembled.jpg)

Atualmente, Game Studio não pode converter arquivos de imagem para cubemaps (`.dds` arquivos). Use outra aplicação para criar um cubemap de arquivos de imagem separados, como:

* [Ferramenta de conversão de Nvidia](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [Ferramenta de conversão ATI](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)

### Criar um cubemap no Game Studio

Você pode capturar um cubemap de uma posição em sua cena.

1. No editor **scene**, posicione a câmera no ponto onde você deseja capturar o cubemap. A direção que a câmera enfrenta não importa, apenas a posição.

   Tipicamente, você deve capturar cubemaps no centro de sua cena para criar a melhor visão completa.

2. Na barra de ferramentas do editor de cena, abra o menu **Lighting**.

   ![Opções de iluminação](../lights-and-shadows/media/lighting-options-menu.png)

3. Sob **Cubemap**, clique em **Generate**.

4. Navegue para o local no disco que deseja salvar o cubemap, especifique um nome e clique em **Salve**.

> [!Tip]
> Recomendamos que você salve o cubemap em seu projeto **Resources** pasta. Para obter mais informações, consulte [Organize seus arquivos no controle de versão](../../files-and-folders/version-control.md).

Game Studio cria um arquivo cubemap `.dds` no local especificado.

## 360° texturas panorâmicas

Em vez de usar um cubemap, você pode usar uma textura panorâmica **360°** como um fundo 3D.

| panorama 360° | Aparência no jogo |
|----------------|-------------
| ![Panorama texture](media/MyPanorama.jpg) | ![Panorama no jogo](media/panorama-in-game.jpg) |
*Imagem cortesia de [Texturify](http://texturify.com)*

> [!Note]
> Lembre-se de que os efeitos postais [](../post-effects/index.md) afetam a aparência de sua caixa de céu. Se não olhar como você espera, tente alterar suas configurações de efeito pós.

## Adicione um cubemap ou textura panorâmica de 360° ao projeto

Você adiciona estes como outras texturas de cor.

* No **Asset View**, clique em ![Add asset](../lights-and-shadows/media/engine-skybox-add-new-asset-button.png), selecione **Textures** > ** Textura de cor** e navegue para o arquivo.

   ![Selecione textura como tipo de ativo](media/engine-skybox-select-asset-type.png)

* Alternativamente, arraste e solte o arquivo de ** Windows Explorer** para o **Asset View**, em seguida, selecione **Cor textura**.

   ![Drag e drop background texture](media/drag-texture.gif)

### Criar uma caixa de céu

Para criar uma caixa de céu, adicione um cubemap ou 360° textura panorâmica a um componente **background**.

O Stride inclui uma entidade com um componente de fundo no projeto por padrão. Apenas um fundo pode ser ativo em uma cena de cada vez. Se houver vários fundos, Stride carrega apenas o primeiro.

Você pode adicionar componentes de fundo para quantas entidades precisar. Você pode querer incluir mais de um fundo, por exemplo, se você quiser mudar caixas de céu no tempo de execução.

#### Adicionar uma entidade de fundo

1. Na view **Scene**, selecione a entidade a que deseja adicionar o componente.

   Isto pode ser uma entidade vazia. Sua posição na cena não importa.

2. No **Property Grid** (à direita por padrão), clique em **Add component** e selecione **Background**.

   ![ Adicionar componente de fundo](media/engine-skybox-add-background-component.png)

3. Sob **Textura**, selecione o cubemap ou 360° textura panorâmica que você deseja usar na caixa do céu.

   ![ Propriedades do componente de fundo](media/engine-skybox-background-component-properties.png)

## Use uma caixa de céu como uma fonte de luz

Você pode usar uma caixa de céu para iluminar a cena. Stride analisa a textura da caixa do céu e gera iluminação usando iluminação baseada em imagem [ (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting). Para mais informações, consulte [Skybox lights](../lights-and-shadows/skybox-lights.md).

## Mude a caixa do céu no tempo de execução

O seguinte código muda o cubemap em um fundo:

```cs
public Texture cubemapTextura;
void público ChangeBackgroundParameters()
(
    // Obter o componente de fundo de uma entidade
	var background = direcionalLight.Get<BackgroundComponent>();

	// Substituir o fundo existente
	fundo. Textura = cubemapTextura;

	// Alterar a intensidade de fundo
	fundo. Intensidade = 1,5f;
}
```

### Converter cubemaps para panoramas e vice-versa

Existem várias ferramentas para converter um panorama para cubemaps e vice-versa, incluindo:

- [Conversor de imagens](http://gonchar.me/blog/goncharposts/2150)
- [Panorama para Cubemap](https://jaxry.github.io/panorama-to-cubemap/)
- [Converter Cubemap para Equirectangular](https://www.360toolkit.co/convert-cubemap-to-spherical-equirectangular.html)

## Definir um fundo 2D

Em vez de usar uma Skybox 3D, você pode exibir a textura como um fundo estático. Isso exibe a textura como uma imagem plana que permanece estática, não importa como você move a câmera. Isso é muitas vezes útil para jogos 2D.

Para fazer isso, no **Background** propriedades do componente, selecione **2D background**.

![ Propriedades do componente de fundo](media/is-2d.png)

Se você habilitar isso com um cubemap, Stride usa a primeira face do cubemap como fundo.

## Use um vídeo como uma caixa de céu

Para detalhes, veja [Vídeos - Use um vídeo como um skybox](../../video/use-a-video-as-a-skybox.md).

## Ver também

* [Luzes Skybox](../lights-and-shadows/skybox-lights.md)
* [Luzes e sombras](../lights-and-shadows/index.md)
