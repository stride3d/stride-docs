# Transmitir áudio (Streaming)

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programação</span>

Por padrão, o Stride reproduz áudio diretamente da memória. Isso é prático para efeitos sonoros curtos, como tiros ou passos.

![Áudio pré-carregado](media/audio-index-non-streamed-audio.png)

O Stride também tem a capacidade de armazenar áudio em buffer e reproduzi-lo sequencialmente. Assim que a primeira sequência é carregada em buffer, o Stride a reproduz enquanto carrega em buffer as sequências subsequentes em paralelo. Isso economiza muita memória quando aplicado a arquivos de áudio maiores, como músicas de fundo e diálogos de personagens.

> [!Note]
> A transmissão de áudio pode aumentar a latência, a menos que você pré-carregue utilizando a função ReadyToPlay (mais informações abaixo).

![Áudio transmitido](media/audio-index-streamed-audio.png)

Para transmitir um recurso de áudio:

1. No **Visualizador de Recursos**, selecione o recursos de audio.

2. No **Editor de Propriedades**, selecione **Transmitir a partir do disco**:

   ![Propriedades de recurso de áudio](media/audio-asset-properties-property-grid.png)

No script do recurso, você pode configurar um arquivo de áudio para começar a reproduzir assim que o motor de áudio carregar amostras de áudio suficientes. Para isso, use esta tarefa:

```cs
SoundInstance music = musicSound.CreateInstance();
await music.ReadyToPlay();
music.Play();
```

## Veja também
* [Configurações globais de áudio](global-audio-settings.md)
* [Propriedades de recurso de áudio](audio-asset-properties.md)
* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)
