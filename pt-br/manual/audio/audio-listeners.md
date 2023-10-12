# Receptores de áudio

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>

Um **receptor de áudio** é uma entidade que capta o áudio emitido pelos [emissores de áudio](audio-emitters.md) para criar um ambiente de [áudio espacial](spatialized-audio.md).  Em uma cena, é possível ter vários receptores de áudio. Isso é especialmente comum em jogos multijogador, onde cada câmera de jogador atua como um receptor de áudio.

Não é necessário configurar os receptores de áudio. Todas as configurações relacionadas aos efeitos sonoros, como _volume_ e _tom_ (_frequência_), são definidas nos emissores de áudio.

Lembre-se de que, na ausência de receptores de áudio na cena, você não conseguirá ouvir o áudio dos emissores de áudio.

## Adicionar um componente receptor de áudio a uma entidade

Para criar um receptor de áudio, adicione um componente **receptor de áudio** a uma entidade. Isso pode ser feito em qualquer entidade.

1. No **Visualizador de Cenas**, selecione a entidade à qual você deseja adicionar o receptor de áudio:

   ![Selecione uma entidade](media/audio-add-audiolistener-component-select-entity.png)

2. No **Editor de Propriedades**, clique em _Adicionar componente_ e selecione o componente [receptor de áudio](xref:Stride.Audio.AudioListener):

   ![ Adicionar o Componente AudioListener](media/audio-add-audiolistener-component.png)

   A entidade é agora um receptor de áudio.

> [!Warning]
> No iOS, você pode criar vários objetos usando o componente [receptor de áudio](xref:Stride.Audio.AudioListener) em uma cena, mas apenas um será utilizado em tempo de execução.

## Veja também
* [Áudio espacial](spatialized-audio.md)
* [Emissores de áudio](audio-emitters.md)
* [Configurações globais de áudio](global-audio-settings.md)