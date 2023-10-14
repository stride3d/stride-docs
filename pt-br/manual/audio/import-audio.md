# Importar áudio

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>

Você pode importar arquivos de áudio para usar como  **assets de audio** em seu projeto,  incluindo formatos como .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma e .mpc.

1. Arraste e solte um arquivo de áudio do gerenciador de arquivos para o **Visualizador de Assets**:

   ![Arrastar e soltar](media/import-setup-drag-and-drop-audio-to-asset-view.gif)

   No **Visualizador de Assets**, você também pode:

   1. Clicar em ![](media/index-audio-add-new-asset-button.png)

   2. Clicar em ![](media/index-audio-import-audio-directly-from-file.png) (**Importar audio diretamente do arquivo**) e selecionar o arquivo de áudio.

2. Para atribuir algumas configurações padrão ao asset de áudio, escolha um preset. (Você pode ajustar depois as propriedades no [Editor de Propriedades](audio-asset-properties.md).)

   ![Escolher o tipo de asset](media/import-audio-choose-asset-type.png)

   * **Efeito sonoro**: Ideal para arquivos de áudio pequenos que você deseja reproduzir diretamente da memória.

   * **Áudio espacial**: Configura o asset de áudio como [áudio espacial.](spatialized-audio.md) No entanto, é importante ressaltar que o Stride processa os arquivos de áudio como áudio mono (um único canal)  e o arquivo de origem não é alterado.

   * **Música**: Recomendado para arquivos de áudio volumosos que você deseja reproduzir a partir do disco para economizar memória.

Depois de importar um arquivo de áudio, você pode selecioná-lo como um asset no **Visualizador de Assets**.

## Importar áudio de um arquivo de vídeo

Também é possível importar um arquivo de [vídeo](../video/index.md) e escolher importar apenas as suas faixas de áudio.

1. No **Visualizador de Assets**, clique em **Adicionar asset** e selecione **Mídia > Vídeo**.

   ![Adicionar um asset de vídeo](../video/media/add-video-asset.png)

2. Navegue até o vídeo que deseja importar o áudio e clique em **Abrir**.

   Você também pode arrastar o arquivo diretamente do **gerenciador de arquivos** para o **Visualizador de Assets**.

3. Remova a opção **Importar vídeo** e clique em **OK**.

   ![Importar vídeo](media/import-audio-only.png)

   O Stride adiciona as faixas de áudio do vídeo ao **Visualizador de Assets**.

## Veja também

* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)
* [Configurações globais de áudio](global-audio-settings.md)
* [Vídeo](../video/index.md)