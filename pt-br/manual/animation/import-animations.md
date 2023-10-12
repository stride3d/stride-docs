# Importar animações

<span class="badge text-bg-primary">Iniciante</span>
<span class="badge text-bg-success">Design</span>

Para animar um modelo, você precisa usar três tipos de recursos juntos:

* modelos
* equeletos
* animações

Você pode importar esses recursos de arquivos de modelo 3D. O Stride oferece suporte aos seguintes tipos de arquivo de modelo 3D: ``.3ds``, ``.blend``, ``.dae``, ``.dxf``, ``.fbx``, ``.md2``, ``.md3``, ``.obj``, ``.x``

## Importar um modelo, esqueleto ou animação de um arquivo de modelo

1. Arraste o arquivo de modelo do gerenciador de arquivos para o **Visualizador de Recursos** (na parte inferior da janela, por padrão).

   ![Escolher tipo de recurso](media/create-and-add-assets-drag-and-drop-model.png)

   Alternativamente, no **Visualizador de Recursos**:

   1a. Clique em ![Adicionar recurso](media/create-and-add-assets-add-new-asset-button.png) e selecione **Importar diretamente dos arquivos**.

   ![Escolher tipo de recurso](media/create-and-add-assets-add-new1.png)

   2b. Navegue até o arquivo e clique em **Abrir**.

2. Especifique se deseja importar o **modelo 3D**, **animação** ou **esqueleto** do arquivo de modelo.

   ![Escolher tipo de recurso](media/create-and-add-assets-choose-asset-type.png)

   * Se você escolher **modelo 3D**, o Stride pode importar quaisquer materiais adicionais, texturas e esqueletos que ele encontrar no arquivo do modelo. Você também pode importar o esqueleto do modelo (**Importar novo esqueleto**), não importar o esqueleto (**Não usar esqueleto**), ou especificar um esqueleto diferente (**Usar um esqueleto existente**) no campo inferior.

   ![Escolher tipo de recurso](media/create-and-add-assets-model-import-parameters.png)

   * Se você escolher **Esqueleto**, o Stride importará apenas o esqueleto do arquivo do modelo. Isso pode ser útil, por exemplo, se você desejar usá-lo para criar um novo esqueleto que utilize apenas um subconjunto de seus nós.

   * Se você escolher **Animação**, o Stride importará apenas a animação do arquivo do modelo. Isso é suficiente para animações regulares; para animações aditivas, existem alguns passos extras. Para mais informações, consulte [Animação aditiva](additive-animation.md).

Depois de importar os recursos, o Game Studio os adiciona ao **Visualizador de Recursos**.

![Recursos no Visualizador de Recursos](media/assets-in-asset-view1.png)

Você pode visualizar e editar suas propriedades no **Editor de Propriedades** (à direita, por padrão). Para mais informações, consulte [Propriedades de animação](animation-properties.md).

![Propriedades](media/animations-properties.png)

## Use um recurso de animação

Para usar um recurso de animação, adicione um [AnimationComponent](xref:Stride.Engine.AnimationComponent) a uma entidade e, em seguida, adicione o recurso de animação ao componente de animação. Para mais informações, consulte [Configurar animações](set-up-animations.md).

> [!Note]
> Certifique-se de ajustar corretamente a malha ao esqueleto. Se isso não for feito, você não consiguirá animar seu modelo corretamente.

## Veja também

* [Índice de animação](index.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)
* [Atributos personalizados](custom-attributes.md)