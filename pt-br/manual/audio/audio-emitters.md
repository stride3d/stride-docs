# Emissores de áudio

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>
<x id="1"/>Design<x id="2"/><span class="badge text-bg-success"></span>

Os [componentes emissores de áudio](xref:Stride.Audio.AudioEmitter) têm a função de criar [áudio espacial](spatialized-audio.md)  e podem ser incluídos em qualquer entidade.

O tom e o volume do som variam à medida que o [receptor de áudio](audio-listeners.md) se aproxima ou se afasta do emissor de áudio.

> [!Note]
> Você precisa de pelo menos um [AudioListenerComponent](xref:Stride.Audio.AudioListener) na cena para captar o áudio dos emissores de áudio.

## 1. Configurar um asset emissor de áudio

1. No **Visualizador de Cenas**, selecione a entidade que você deseja configurar como emissor de áudio.

   ![Selecionar uma entidade](media/audio-add-audiolistener-component-select-entity.png)

2. No **Editor de Propriedades**, clique em **Adicionar componente** e selecione **Emissor de áudio**.

   ![Adicionar componente AudioEmitter](media/audio-add-audioemitter-component-select-entity.png)

   Agora precisamos adicionar um áudio ao emissor.

3. No **Emissor de áudio**, clique no ![botão verde](~/manual/game-studio/media/green-plus-icon.png) com o sinal de mais (**Adicionar**) e especifique um nome para o áudio.

   ![Adicionar nova entrada de som](media/audio-play-audioemitter-component-add-new-entry.png)

4. No **Visualizador de Assets**, arraste e solte um asset de áudio no áudio que você acabou de adicionar:

   ![Arrastar e soltar um asset de áudio](media/audio-play-drag-and-drop-audio-asset.gif)

   Você também pode clicar no ![Ícone de mão](~/manual/game-studio/media/hand-icon.png) (**Selecionar um asset**).

   ![Selecionar um asset](media/audio-play-audioemitter-component-pick-an-asset.png)

   Em seguida, escolha um asset de áudio:

   ![Selecionar um asset de áudio](media/audio-play-audioemitter-component-add-select-audio-asset.png)

5. Repita os passos 3 e 4 para adicionar quantos assets de áudio forem necessários.

6. Configure as propriedades para este emissor de áudio.

   ![Propriedades do emissor de áudio](media/audio-emitter-properties.png)

| Propriedade | Descrição |
|--------------------|-------------
| Usar HRTF | Ative a Função de Transferência Relacionada à Cabeça (HRTF). Quando habilitada, essa funcionalidade cria a sensação de que os sons provêm de pontos específicos no espaço 3D, produzindo áudio binaural. Para mais informações, consulte [HRTF](hrtf.md). |
| Fator Directional | Define o grau de direcionalidade do áudio, variando de 0 (mínimo) a 1 (máximo). Quando ajustado para 0, o áudio é emitido de todas as direções. O fator direcional pode ser ajustado através do controle deslizante ou inserindo um valor numérico. |
| Ambiente | Escolha o tipo de reverberação para o áudio, simulando as características de reverberação em ambientes reais (pequeno, médio, grande ou ao ar livre). |

## 2. Criar um script para reproduzir o áudio

Agora precisamos criar um script para reproduzir e configurar o asset de áudio.

1. Dentro do seu script, crie uma instância de um [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) para cada som que você deseja utilizar.

   Por exemplo, digamos que temos dois sons, **MySound1** e **MySound2**:

   ```cs
   	AudioEmitterComponent audioEmitterComponent = Entity.Get<AudioEmitterComponent>();
   	AudioEmitterSoundController mySound1Controller = audioEmitterComponent["MySound1"];
   	AudioEmitterSoundController mySound2Controller = audioEmitterComponent["MySound2"];
   ```

2. Use as seguintes propriedades e métodos de [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController) para reproduzir e configurar o áudio:

| Propriedade / método | Descrição |
|-------    |-------|
| [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping) | Define se o áudio será reproduzido em repetição.  Isso não tem efeito se [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget) estiver ativado. |
| [Pitch](xref:Stride.Audio.AudioEmitterSoundController.Pitch) | Obtém ou define o tom do som (frequência). Use com cuidado em áudio espacial. |
| [PlayState](xref:Stride.Audio.AudioEmitterSoundController.PlayState) | Obtém o estado atual do controlador de som do emissor de áudio. |
| [Volume](xref:Stride.Audio.AudioEmitterSoundController.Volume) | Controla o volume do áudio. |
| [Pause()](xref:Stride.Audio.AudioEmitterSoundController.Pause) | Pausa a reprodução do áudio. |
| [Play()](xref:Stride.Audio.AudioEmitterSoundController.Play) | Inicia a reprodução do áudio. |
| [PlayAndForget()](xref:Stride.Audio.AudioEmitterSoundController.PlayAndForget) | Reproduz o áudio uma vez e, em seguida, libera os recursos da memória.  É útil para sons curtos, como tiros,  substituindo a opção [IsLooping](xref:Stride.Audio.AudioEmitterSoundController.IsLooping). |
| [Stop()](xref:Stride.Audio.AudioEmitterSoundController.Stop) | Interrompe a reprodução do áudio. |

Por exemplo:

```cs
mySound1Controller.IsLooping = true;
mySound1Controller.Pitch = 2.0f;
mySound1Controller.Volume = 0.5f;
mySound1Controller.Play();
```

Este som será repetido com o dobro do tom original e metade do volume original. Para mais informações, consulte a documentação da API do Stride sobre [AudioEmitterSoundController](xref:Stride.Audio.AudioEmitterSoundController).

## 3. Adicionar o script à entidade emissor de áudio

O Game Studio lista o script como um componente em **Adicionar componente**. Adicione o script à entidade emissor de áudio.

1. No **Visualizador de cenas**, selecione uma entidade que você deseja que seja um emissor de áudio.

   ![Selecionar uma entidade](media/audio-add-audiolistener-component-select-entity.png)

2. Clique em **Adicionar componente** e selecione o script.

   ![Adicionar script de áudio](media/add-sound-script.png)

## Veja também
* [Áudio espacial](spatialized-audio.md)
* [Receptores de áudio](audio-listeners.md)
* [Configurações globais de áudio](global-audio-settings.md)