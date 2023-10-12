# Propriedades de recurso de áudio

Após selecionar um recurso de áudio no **Visualizador de Recursos**, você pode configurar suas propriedades no **Editor de Propriedades**.

![Propriedades de recursos de áudio](media/audio-asset-properties.png)

| Propriedade | Descrição |
|----------|----------
| **Origem** | O arquivo de áudio de origem (Lembre-se que o Stride não modifica os arquivos de origem). |
| **Taxa de compressão** | A taxa de compressão varia de `1` (sem compressão) a `40` (máxima compressão). Quanto maior a compressão, menor o uso de memória, porém a qualidade do áudio é reduzida. O Stride comprime arquivos de áudio usando o codec de código aberto [Opus/Celt](https://en.wikipedia.org/wiki/CELT). |
| **Taxa de amostragem** | Esta é a taxa na qual o Stride ajusta a [amostragem](https://en.wikipedia.org/wiki/Sampling_(signal_processing)#Sampling_rate) do arquivo de origem. Quanto maior a taxa de amostragem, melhor a qualidade do áudio. As taxas de amostragem comuns são 44,1 kHz (44.100 Hz), 48 kHz, 88,2 kHz e 96 kHz. No entanto, é importante ressaltar que taxas de amostragem mais altas não melhorarão a qualidade do áudio que sejam de baixa qualidade. |
| **Áudio Espacial** | Simula áudio 3D (consulte [áudio espacial](spatialized-audio.md)) |
| **Transmitir do disco** | A transmissão (streaming) é útil para arquivos volumosos de áudio, economizando memória. Para mais informações, consulte [Transmitir áudio](stream-audio.md) |

## Veja também

* [Importar áudio](import-audio.md)
* [Configurações globais de áudio](global-audio-settings.md)
* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)