# Função de Transferência Relacionada à Cabeça (áudio HRTF) 

A **função de transferência relacionada à cabeça, do inglês  *Head-related transfer function* (HRTF)** é um método avançado de renderização de áudio que faz com que os sons pareçam vir de um ponto específico no espaço 3D, sintetizando o áudio binaural,  tornando o áudio mais realista do que o [áudio espacial](spatialized-audio.md). Por exemplo, com a HRTF, o jogador pode ouvir se um personagem está acima ou abaixo deles,  sendo particularmente útil em aplicativos de [realidade virtual (VR)](../virtual-reality/index.md), contribuindo para uma experiência mais imersiva.

Os jogadores não precisam de um hardware especial para usar a HRTF. No entanto, o efeito funciona muito melhor com fones de ouvido do que com alto-falantes.

Este vídeo demonstra o efeito da HRTF:

<p>
<video class="embed-responsive-item" poster="media/hrtf-first-frame.jpg" controls>
   <source src="media/hrtf.mp4" type="video/mp4">
</video>
</p>

> [!Note]
> Por enquanto, você só pode usar a HRTF no Windows 10.

## Habilitar a HRTF

Para utilizar a HRTF, primeiro ative-a globalmente no recurso **Configurações de Jogo**. Em seguida, habilite a HRTF nas entidades com as quais você deseja utilizá-la.

### 1. Habilitar a HRTF globalmente

1. No **Gerenciador de Soluções** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Selecionar Recurso para a pasta asset](../game-studio/media/select-asset-folder.png)

2. No **Visualizador de Recursos** (o painel inferior por padrão), selecione o recurso **GameSettings**.

   ![Selecionar recurso GameSettings](../game-studio/media/select-game-settings-asset.png)

3. No **Editor de Propriedades** (o painel direito por padrão), abaixo de **Configurações de áudio**, selecione **HRTF**.

   ![ Configurações de áudio ](../game-studio/media/audio-settings.png)

Para obter mais informações sobre o ativo Configurações de Jogo, consulte as configurações [Game](../game-studio/game-settings.md).

### 2. Habilitar HRTF nas entidades

1. Selecione a entidade com o [audio emitter](audio-emitters.md) que contém o som que deseja ativar para HRTF.

2. No **Property Grid** (à direita por padrão), sob **Audio emitter**, selecione **Use HRTF**.

   ![Audio emitter properties](media/audio-emitter-properties.png)

   Os sons emitidos por esta entidade usarão HRTF.

   > [!Note]
   > A opção HRTF se aplica a cada som emitido a partir deste emissor de áudio.

Para mais informações sobre emissoras de áudio, incluindo as propriedades que você pode mudar, consulte [Audio emitters](audio-emitters.md).

### Ver também

* [Função de transferência relacionada com a cabeça (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [Áudio espacial](spatialized-audio.md)
* [Emissores de áudio](audio-emitters.md)
* [Receptores de áudio](audio-listeners.md)
* [Configurações de jogo](../game-studio/game-settings.md)