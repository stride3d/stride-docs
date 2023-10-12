# Áudio espacial

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Design</span>
<span class="badge text-bg-success">Programação</span>

**Áudio espacial**, também conhecido como **áudio 3D**, simula o som tridimensional, 
criando um áudio mais realista do que o [áudio não espacial](non-spatialized-audio.md).

No dia a dia, nossa experiência de som é afetada por fatores como o volume, o ambiente que nos circunda (como uma caverna ou um pequeno quarto) e a posição e movimento da fonte de som. Geralmente, conseguimos determinar aproximadamente de onde um som está vindo e se ele está se movendo.

![Áudio espacial](media/audio-index-spatialized-audio.png)

Por exemplo, o tom (frequência) do som que vem de um objeto em movimento varia dependendo da posição do observador o [efeito Doppler](https://en.wikipedia.org/wiki/Doppler_effect)). O som de uma fonte se aproximando tem uma frequência mais alta do que o som de uma fonte que está se afastando.

![Efeito Doppler](media/audio-index-play-audio-doppler-effect.png)

Para simular um áudio 3D realista, o Stride rastreia as posições de duas entidades na cena:

* **[emissores de áudio](audio-emitters.md)**, que emitem áudio
* **[receptores de áudio](audio-listeners.md)**, que recebem o som emitido pelos emissores de áudio

Você deve ter ambos emissores de áudio e receptores de áudio para ouvir som espacializado em uma cena.

O áudio espacial é amplamente utilizado em efeitos sonoros em jogos de plataforma, desktop e realidade virtual (VR). Por exemplo, uma arma pode emitir um som de tiro quando disparada, ou um personagem pode fazer um som de passos ao dar um passo.

> [!Note]
> O áudio espacial utiliza mais CPU do que áudio não espacial.

## Habilitar áudio espacial

Quando você [importar seu áudio](import-audio.md), selecione *Espacial* como o tipo do recurso.

Você também pode configurar o áudio como espacial no **Editor de Propriedades** do recurso:

1. No **Visualizador de Recursos**, selecione _Recurso de áudio_.

2. No **Editor de Propriedades**, selecione a caixa de seleção **Espacial**:

   ![Selecionar som espacializado](media/audio-asset-properties-property-grid-spatialized-sound.png)

> [!Note]
> O Stride processa áudio espacial como áudio mono (um único canal). O arquivo de origem não é afetado.

## Veja também

* [Emissores de áudio](audio-emitters.md)
* [Receptores de áudio](audio-listeners.md)
* [HRTF](hrtf.md)
* [Configurações globais de áudio](global-audio-settings.md)