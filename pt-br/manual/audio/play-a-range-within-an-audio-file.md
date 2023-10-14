# Reproduzir um intervalo dentro de um asset de áudio

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Você pode fazer o Stride reproduzir apenas partes específicas de um asset de áudio. Isso significa, por exemplo, que você pode criar várias amostras de um único asset de áudio especificando diferentes intervalos em diferentes objetos [SoundInstance](xref:Stride.Audio.SoundInstance).

![Pontos de repetição](media/audio-advanced-features-loop-points.png)

Você pode usar as seguintes propriedades, métodos e estruturas:

| Propriedade, método ou estrutura | Função |
|---------|-----------|
| [TotalLength](xref:Stride.Audio.SoundBase.TotalLength) | O comprimento total do [som](xref:Stride.Audio.Sound). |
| [SoundInstance.SetRange(PlayRange)](xref:Stride.Audio.SoundInstance.SetRange(Stride.Media.PlayRange)) | Define o intervalo de tempo para reprodução dentro do asset de áudio. |
| [PlayRange](xref:Stride.Media.PlayRange) | Fornece informações de tempo, incluindo o ponto de início e a duração do intervalo. |
| [SoundInstance.Position](xref:Stride.Audio.SoundInstance.Position) | Obtém o **TimeSpan** da posição atual da reprodução. |

Por exemplo:

```cs
// Assumindo que o comprimento da amostra é de 5 segundos.
var length = mySound.TotalLength;
var begin = TimeSpan.FromSeconds(2);
var duration = TimeSpan.FromSeconds(2);
mySoundInstance.SetRange(new PlayRange(begin, duration));
```

## Veja também
* [Configurações globais de áudio](global-audio-settings.md)
* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)