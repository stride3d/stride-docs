# Propriedades de recurso de áudio

Após selecionar um recurso de áudio no **Visualizador de Recursos**, você pode configurar suas propriedades no **Editor de Propriedades**.

![Propriedades de recursos de áudio](media/audio-asset-properties.png)

| Propriedade | Descrição |
|----------|----------
| **Origem** | O arquivo de áudio de origem (observe que o Stride nunca altera os arquivos de origem). |
| **Taxa de compressão** | Define a taxa de compressão de `1` (sem compressão) a `40` (máxima compressão). Maior compressão otimiza o uso de memória, mas diminui a qualidade do áudio. O Stride comprime arquivos de áudio com o codec de código aberto [Opus/Celt](https://en.wikipedia.org/wiki/CELT). |
| **Taxa de amostragem** | A taxa na qual o Stride [reamostra](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate) o arquivo de origem. Quanto maior a taxa de amostragem, melhor a qualidade do áudio. As taxas de amostragem típicas são 44,1 kHz (44.100 Hz), 48 kHz, 88,2 kHz e 96 kHz. Tenha em mente que taxas de amostragem altas não melhoram arquivos de áudio de baixa qualidade. |
| **Espacializado** | Simula áudio 3D (consulte [áudio espacial](spatialized-audio.md)) |
| **Transmitir do disco** | O streaming é útil para arquivos grandes de áudio, economizando memória. Para mais informações, consulte [Transmitir áudio](stream-audio.md) |

## Veja também

* [Importar áudio](import-audio.md)
* [Configurações globais de áudio](global-audio-settings.md)
* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)