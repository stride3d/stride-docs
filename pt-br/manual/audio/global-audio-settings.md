# Configurações globais de áudio

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

As configurações globais de áudio aplicam-se a todos os áudios em seu projeto.

Você pode controlar as configurações de áudio globais acessando as **propriedades** da classe [AudioEngine](xref:Stride.Audio.AudioEngine):

| Propriedade | Função |
|--- | --- |
| [MasterVolume](xref:Stride.Audio.AudioEngine.MasterVolume) | Define o volume mestre. |
| [PauseAudio](xref:Stride.Audio.AudioEngine.PauseAudio) | Pausa todos os áudios. |
| [ResumeAudio](xref:Stride.Audio.AudioEngine.ResumeAudio) | Retoma a reprodução de todos os áudios. |

Você também pode controlar sons individualmente utilizando a API [SoundInstance](xref:Stride.Audio.SoundInstance).

## Veja também
* [Áudio espacial](spatialized-audio.md)
* [Áudio não espacial](non-spatialized-audio.md)
* [Documentação da API SoundInstance](xref:Stride.Audio.SoundInstance)