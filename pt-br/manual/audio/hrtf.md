# Função de transferência relacionada à cabeça (áudio HRTF) 

A **Função de transferência relacionada à cabeça, conhecida como Head-Related Transfer Function (HRTF)** em inglês, é um método avançado de renderização de áudio que cria a sensação de que os sons vêm de um ponto específico no espaço 3D. Ela sintetiza o áudio binaural,  resultando em uma experiência sonora mais realista do que o [áudio espacial](spatialized-audio.md) tradicional. Com a HRTF, os jogadores podem perceber a posição vertical dos sons, ou seja, se um personagem está acima ou abaixo deles. Esse efeito é particularmente valioso em aplicações de [realidade virtual (VR)](../virtual-reality/index.md), proporcionando uma imersão sonora mais profunda.

É importante observar que os jogadores não precisam de hardware especial para usufruir da HRTF,  mas o efeito é muito mais eficaz quando se utiliza fones de ouvido em vez de alto-falantes.

No seguinte vídeo, você pode ver uma demonstração do efeito da HRTF:

<p>
<video class="embed-responsive-item" poster="media/hrtf-first-frame.jpg" controls>
   <source src="media/hrtf.mp4" type="video/mp4">
</video>
</p>

> [!Note]
> Por enquanto, você só pode usar a HRTF no Windows 10.

## Ativar a HRTF

Para utilizar a HRTF, comece ativando-a globalmente nas **Configurações de Jogo**. Depois, ative a HRTF nas entidades com as quais deseja aplicá-la.

### 1. Ativar globalmente a HRTF

1. No **Gerenciador de Soluções** (o painel inferior esquerdo por padrão), selecione a pasta **Assets**.

   ![Selecionar Recurso para a pasta asset](../game-studio/media/select-asset-folder.png)

2. No **Visualizador de Recursos** (o painel inferior por padrão), selecione o recurso **GameSettings**.

   ![Selecionar recurso GameSettings](../game-studio/media/select-game-settings-asset.png)

3. No **Editor de Propriedades** (o painel direito por padrão), abaixo de **Configurações de áudio**, selecione **HRTF**.

   ![ Configurações de áudio ](../game-studio/media/audio-settings.png)

Para obter mais informações sobre o recurso Configurações de Jogo, consulte [Configurações de jogo](../game-studio/game-settings.md).

### 2. Habilitar HRTF nas entidades

1. Selecione a entidade que possui o [emissor de áudio](audio-emitters.md) contendo o som para o qual deseja ativar a HRTF.

2. No **Editor de Propriedades** (à direita por padrão), em **Emissor de áudio**, selecione **Usar HRTF**.

   ![Propriedades do emissor de áudio](media/audio-emitter-properties.png)

   Os sons emitidos por esta entidade usarão HRTF.

   > [!Note]
   > A opção HRTF se aplica a todos os sons emitidos por este emissor de áudio.

Para mais informações sobre os emissores de áudio, incluindo as propriedades que podem ser modificadas, consulte a seção [Emissores de Áudio](audio-emitters.md).

### Veja também

* [Função de transferência relacionada com a cabeça (Wikipedia)](https://en.wikipedia.org/wiki/Head-related_transfer_function)
* [Áudio espacial](spatialized-audio.md)
* [Emissores de áudio](audio-emitters.md)
* [Receptores de áudio](audio-listeners.md)
* [Configurações de jogo](../game-studio/game-settings.md)