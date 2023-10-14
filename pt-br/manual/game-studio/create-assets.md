# Criar ativos

<span class="badge text-bg-primary">Introdução</span>

Existem duas formas de criar ativos:

* Use o botão **Adicionar asset** no botão **Asset View**
* Arraste e solte **asset arquivos** (como imagem ou arquivos de áudio) para a aba **Asset View**

## Use o botão **Add asset**

1. No *Asset View*, clique em ![](media/create-and-add-assets-add-new-asset-button.png)

2. Selecione o tipo de ativo que deseja criar.

   ![Select asset type](../get-started/media/asset-creation-create-new-asset-asset-view-tab.png)

   Game Studio exibe uma lista de modelos de ativos. Estes são ativos configurados para um uso específico.

3. Selecione o modelo certo para o seu ativo.

   Game Studio adiciona o ativo para o Asset View:

   ![ Ajustar adicionado ao Asset View' tab](../get-started/media/asset-creation-asset-view-tab-procedural-model.png)

> [!Note]
> Alguns ativos, como texturas, exigem um arquivo de assets. Quando você adiciona esses ativos, o Game Studio solicita um arquivo de assets.

## Arraste e solte arquivos de assets

Você pode arrastar arquivos de assets compatíveis diretamente no Game Studio para criar ativos deles. Game Studio é compatível com formatos de arquivo comuns.

> [!NOTE]
> * Você não pode usar este método para criar ativos que não usam arquivos de assets (por exemplo, pré-fabricados, materiais ou cenas).

| Tipo de asset | Formatos de arquivo de assets compatíveis |
|-------------------------------|----------------------------------
| Modelos, animações, esqueletos | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx |
| Sprites, texturas, caixas de céu | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff |
| Áudio | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc |

Para criar um ativo arrastando e soltando um arquivo de assets:

1. (Opcional) Se já não estiver lá, mova o arquivo de assets que você deseja usar na pasta **Resources** do seu projeto. Você não precisa fazer isso, mas é uma boa prática manter os arquivos de assets organizados e tornar os projetos mais fáceis de compartilhar. Para mais informações, consulte [Projeto estrutura](../files-and-folders/project-structure.md).

2. Arraste o arquivo de assets do Explorer para o Asset View:

   ![Drap e solte um arquivo de assets para o Asset View](media/create-assets-drop-resource.png)

3. Selecione o tipo de ativo que deseja criar:

   ![Lista de modelos de ativos](media/create-assets-drag-drop-select-asset-template.png)

   Game Studio adiciona o ativo para o Asset View:

   ![ Ativo de extensão criado ](media/create-assets-drag-drop-asset-created.png)

Game Studio importa automaticamente todas as dependências nos arquivos de assets e cria ativos correspondentes. Por exemplo, você pode adicionar um arquivo de asset de modelo ou animação e Game Studio lida com tudo o resto.

> [!TIP]
> Você pode arrastar vários arquivos simultaneamente. Se você soltar vários arquivos de diferentes tipos ao mesmo tempo, Game Studio só adiciona arquivos que correspondem à sua seleção de modelos. Por exemplo, se você adicionar um arquivo de imagem e um arquivo de som, selecione o modelo de ativo de áudio, apenas o arquivo de som é adicionado.

## Ver também

* [Gerenciar ativos](manage-assets.md)
* [Utilizar activos](use-assets.md)