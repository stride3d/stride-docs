# Receptores de áudio

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>

Um **receptor de áudio** é uma entidade que recepta o áudio emitido pelos [emissores de áudio](audio-emitters.md) para criar um [áudio espacial](spatialized-audio.md). Em uma cena, pode haver vários receptores de áudio. Isso é comum, por exemplo, em jogos multijogador, onde cada câmera de cada jogador é um receptor de áudio.

Você não precisa configurar os receptores de áudio. Todas as configurações para efeitos sonoros, incluindo _Volume_ e _Tom_ (_Frequência_), são configuradas no emissor de áudio.

Se não houver nenhum receptor de áudio na cena, você não ouvirá nenhum áudio dos emissores de áudio.

## Adicionar um componente de receptor de áudio a uma entidade

Para criar um receptor de áudio, adicione um componente **receptor de áudio** a uma entidade. Você pode adicional este componente a qualquer entidade.

1. Em **Visualizador de cenas**, selecione a entidade que você deseja que seja o receptor de áudio:

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