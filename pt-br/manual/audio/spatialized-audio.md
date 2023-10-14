# Áudio espacial

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>
<span class="badge text-bg-success">Programação</span>

**Áudio espacial**, também conhecido como **áudio 3D**, simula o som tridimensional, 
criando um áudio mais realista do que o [áudio não espacial](non-spatialized-audio.md).

No cotidiano, nossa percepção sonora é influenciada por diversos fatores, como o volume, o ambiente ao nosso redor (seja uma caverna ou um pequeno quarto) e a posição e movimento da fonte sonora. Em geral, somos capazes de estimar aproximadamente a origem de um som e se ele está em movimento.

![Áudio espacial](media/audio-index-spatialized-audio.png)

Por exemplo, o tom (frequência) do som proveniente de um objeto em movimento varia conforme a posição do observador, seguindo o [efeito Doppler](https://en.wikipedia.org/wiki/Doppler_effect). Quando uma fonte sonora se aproxima, o som apresenta uma frequência mais alta do que quando a fonte se afasta.

![Efeito Doppler](media/audio-index-play-audio-doppler-effect.png)

Para simular áudio 3D realista, o Stride monitora as posições de duas entidades na cena:

* **[Emissores de áudio](audio-emitters.md)**, que emitem o som.
* **[Receptores de áudio](audio-listeners.md)**, que recebem o som emitido pelos emissores de áudio.

Para experimentar áudio espacial em uma cena, é necessário ter tanto emissores de áudio quanto receptores de áudio.

O áudio espacial é amplamente utilizado em efeitos sonoros para jogos em plataformas, desktop e realidade virtual (VR).  Por exemplo, ao disparar uma arma, o som de um tiro é reproduzido, ou um personagem emite sons de passos ao caminhar.

> [!Note]
> O áudio espacial demanda mais processamento da CPU do que o áudio não espacial.

## Ativar áudio espacial

Quando você [importar seu áudio](import-audio.md), selecione *Espacial* como o tipo do asset.

Você também pode configurar o áudio como espacial no **Editor de Propriedades** do asset:

1. No **Visualizador de Assets**, selecione _Asset de áudio_.

2. No **Editor de Propriedades**, selecione a caixa de seleção **Espacial**:

   ![Selecionar som espacializado](media/audio-asset-properties-property-grid-spatialized-sound.png)

> [!Note]
> O Stride processa áudio espacial como áudio mono (um único canal). O arquivo de áudio de origem (Lembre-se que o Stride não modifica os arquivos de origem).

## Veja também

* [Emissores de áudio](audio-emitters.md)
* [Receptores de áudio](audio-listeners.md)
* [HRTF](hrtf.md)
* [Configurações globais de áudio](global-audio-settings.md)