# Áudio não espacial

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

O <g id="1">áudio não espacial</g> é estéreo e se desloca ao longo de um único eixo, geralmente o eixo X. Isso significa que a percepção sonora permanece constante ao longo da cena, independentemente da posição das entidades, incluindo a câmera do jogador. Ao contrário do <g id="2">áudio espacial</g>, o áudio não espacial mantém o mesmo <g id="3">volume<g id="3">, <g id="4">tom</g> (<g id="5">frequência</g>) e outros parâmetros em toda a cena.</g> Isso é útil, por exemplo, para efeitos sonoros de música de fundo e em menus.

![Áudio não espacial](media/audio-index-non-spatialized-audio.png)

O áudio não espacial não requer [emissores de áudio](audio-emitters.md) ou [receptores de áudio](audio-listeners.md).

## 1. Importar áudio e adicioná-lo à compilação

1. [Importe o áudio como um recurso de áudio](import-audio.md).

2. Certifique-se de que o recurso de áudio é um **recurso raiz**. Os recursos raiz são recursos que o Stride inclui na compilação para que possam ser usados em tempo de execução.

   No **Visualizador de Recursos**, clique com o botão direito do mouse no recurso e selecione **Incluir na compilação como recurso raiz**:

   ![Incluir na compilação como recurso](media/audio-include-in-build-as-root-asset.png)

   Se a opção de menu mostrar **Não incluir na compilação como recurso raiz**, a opção já está selecionada e você não precisa alterá-la.

## 2. Criar um script para reproduzir áudio

Para reproduzir áudio não espacial durante a execução, é necessário criar uma instância e definir seu comportamento no código.

A API [SoundInstance](xref:Stride.Audio.SoundInstance) gerencia o áudio em tempo de execução e oferece as seguintes propriedades:

| Propriedade | Função |
|-------    |-------|
| [IsLooping](xref:Stride.Audio.SoundInstance.IsLooping) | Obtém ou define a repetição do áudio. |
| [Pan](xref:Stride.Audio.SoundInstance.Pan) | Controla o equilíbrio entre os alto-falantes esquerdo e direito. O valor padrão para cada alto-falante é 0,5. |
| [Pitch](xref:Stride.Audio.SoundInstance.Pitch) | Obtém ou define o tom do áudio (frequência). |
| [PlayState](xref:Stride.Audio.SoundInstance.PlayState) | Obtém o estado de [SoundInstance](xref:Stride.Audio.SoundInstance). |
| [Position](xref:Stride.Audio.SoundInstance.Position) | Obtém a posição atual de reprodução do áudio. |
| [Volume](xref:Stride.Audio.SoundInstance.Volume) | Define o volume de áudio. |

Para mais informações, consulte a documentação da [API SoundInstance](xref:Stride.Audio.SoundInstance).

> [!Note]
> Quando um som já está sendo reproduzido, o Stride ignora todas as chamadas adicionais à [SoundInstance.Play](xref:Stride.Audio.SoundInstance.Play).
> O mesmo vale para [SoundInstance.Pause](xref:Stride.Audio.SoundInstance.Pause) (quando um som já está pausado) e [SoundInstance.Stop](xref:Stride.Audio.SoundInstance.Stop) (quando um som já está parado).

Por exemplo, o seguinte código:

* cria uma instância de um áudio não espacial
* define a reprodução do áudio em repetição
* define o volume
* reproduz o áudio

```cs
public override async Task Execute()
{
    // Carrega o som
    Sound musicSound = Content.Load<Sound>("MySound");
            
    // Cria uma instância do som
    SoundInstance music = musicSound.CreateInstance();
            
    // Repetição
    music.IsLooping = true;

    // Define o volume
    music.Volume = 0.25f;

    // Reproduz a música
    music.Play();
}
```

### Alternativa: crie um script com variáveis públicas

Crie uma variável pública para cada recurso de áudio que você deseja usar. Você pode usar as mesmas propriedades listadas acima.

Por exemplo:

```cs
public class MySoundScript : SyncScript
{
    public Sound MyMusic;

    private SoundInstance musicInstance;
    public bool PlayMusic;

    public override void Start()
    {
        musicInstance = MyMusic.CreateInstance();
    }

    public override void Update()
    {
        // Se a música não estiver reproduzindo, mas deveria, reproduz a música.
        if (PlayMusic & musicInstance.PlayState != PlayState.Playing)
        {
            musicInstance.Play();
        }

        // Se a música está reproduzindo, mas não deveria, pare a música.
        else if (!PlayMusic)
        {
            musicInstance.Stop();
        }
    }
}
```
## Adicionar o script à entidade

1. No **Visualizador de cenas**, selecione a entidade a qual deseja adicionar o script:

   ![Selecione uma entidade](media/audio-add-audiolistener-component-select-entity.png)

2. No **Editor de Propriedades**, clique em **Adicionar componente** e selecione o seu script:

   ![Clicar Adicionar componente](media/audio-emitters-add-script-component.png)

   O script é adicionado à entidade.

3. Se você adicionou variáveis **públicas** ao script, é preciso vinculá-las aos recursos de áudio.

   Arraste e solte um recurso do **Visualizador de Recursos** para cada variável:

   ![Arraste e solte um recurso de áudio](media/entity-audio-drag-and-drop-audio-asset-to-script-component.gif)

   Você também pode clicar no ![Ícone de mão](~/manual/game-studio/media/hand-icon.png) (**Selecionar um recurso**):

   ![Selecionar um recurso](media/audio-play-script-component-pick-an-asset.png)

   Em seguida, escolha o recurso de áudio que você deseja usar:

   ![Selecionar um recurso de áudio](media/audio-play-audioemitter-component-add-select-audio-asset.png)

## Veja também

* [Importar áudio](import-audio.md)
* [Configurações globais de áudio](global-audio-settings.md)
* [Áudio espacial](spatialized-audio.md)