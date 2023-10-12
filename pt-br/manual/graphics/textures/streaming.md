# Streaming

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Quando você **stream** texturas, O Stride só os carrega quando são necessários. Isso diminui significativamente o tempo necessário para carregar um jogo ou cena, usa menos memória e torna o seu jogo mais fácil de escalar.

> [!Note]
> Atualmente, apenas texturas podem ser transmitidas.

## Como Stride transmite texturas

Em vez de carregar uma textura quando Stride carrega a cena (com todos os seus mipmaps), Stride apenas carrega quando é usado (por exemplo, um modelo usando a textura está na tela).

Quando a textura não é mais necessária (ou seja, nenhum objeto que use a textura está na tela), Stride descarrega-a.

Atualmente, não há prioridade de carregamento para texturas. Por exemplo, o Stride não carrega texturas baseadas na distância; em vez disso, o Stride carrega todos em sequência.

### Usando streaming com mipmaps

Se os mipmaps (versões de resolução diferente de texturas exibidas a diferentes distâncias) são habilitados nas propriedades [texture](index.md), os mipmaps de baixa resolução carregam primeiro, pois são menores em tamanho. O gif abaixo mostra este processo acontecendo em câmera lenta.

![Textura de carga](media/loading-texture.gif)

Na maioria das situações, o processo é muito rápido. Recomendamos que você habilitar mipmaps para streaming, pois significa que versões de baixa resolução de texturas atuam como placeholders até que as versões de maior qualidade possam carregar, reduzindo o pop-in.

## Quando **not** usar streaming

Streaming é ativado por padrão para todas as texturas. Você pode querer desativar a transmissão em texturas importantes que você sempre deseja exibir imediatamente e em alta qualidade, como:

* [telas de respingo](../../game-studio/splash-screen.md)

* texturas em modelos de jogadores

* texturas usadas em [partcles](../../particles/index.md) (as partículas muitas vezes têm uma vida útil curta, então pode desaparecer antes das cargas de textura)

## Ativar ou desativar a transmissão em uma textura

1. No **Asset View**, selecione a textura.

   ![Selecione a textura normal do mapa](media/select-texture.png)

2. No **Property Grid**, sob **Format**, use o **Stream** caixa de verificação.

   ![ Ativar streaming](media/enable-streaming.png)

## Configurações de streaming globais

Você pode acessar as configurações de streaming globais no ativo Configurações do jogo. Essas configurações se aplicam a todas as texturas que possuem streaming ativado.

Para obter instruções sobre como acessar as configurações de streaming globais, consulte a página [Game Settings](../../game-studio/game-settings.md).

### Propriedades

![Streaming settings](../../game-studio/media/streaming-settings.png)

| Propriedade | Descrição |
|----------------------|------------
| Streaming | Activar streaming |
| Intervalo de atualização | Com que frequência Stride atualiza o streaming. Intervalos menores significam que o sistema de streaming reage mais rápido, mas use mais CPU e cause mais flutuações de memória. |
| Recursos máximos por atualização | O número máximo de texturas carregadas ou descarregadas por atualização de streaming. Números mais elevados reduzem o pop-in, mas podem retardar o framerate. |
| Tempo de recurso (ms) | Quanto tempo os recursos permanecem carregados após não serem mais utilizados (quando o orçamento de memória **** é excedido) |
| Orçamento de memória (em MB) | Quando a memória usada por streaming excede este orçamento, Stride descarrega texturas não utilizadas. Você pode aumentar isso para manter mais texturas carregadas quando você tem memória para poupar, e vice-versa. |

## Acesse o gerenciador de streaming em código

Use [Streaming](xref:Stride.Streaming).

Por exemplo, para desativar o streaming globalmente, use:

```cs
A transmitir. EnableStreaming = false;
```

Para começar a transmitir uma textura:

```cs
Streaming.StreamResources(myTexture);
```

Para desativar a transmissão no tempo de carga:

```cs
var texture = Content.Load<Texture>("myTexture", ContentManagerLoaderSettings.StreamingDisabled);
```

### Opções

Existem três [StreamingOptions](xref:Stride.Streaming.StreamingOptions):

* A opção `KeepLoaded` mantém a textura em memória mesmo quando o orçamento de memória é excedido.

* Se os mipmaps estiverem habilitados, a opção `ForceHighestQuality` carrega apenas a versão de alta qualidade da textura.

* A opção `KeepLoaded` mantém a textura em memória mesmo quando não é usada.

Por exemplo:

```cs
var myOptions = new StreamingOptions() { KeepLoaded = true };
Streaming.StreamResources(myTexture, myOptions);
```

Para alterar o `StreamingOptions` no tempo de execução, use `SetResourceStreamingOptions`. Por exemplo:

```cs
var myNewOptions = new StreamingOptions() { KeepLoaded = false };
Streaming.SetResourceStreamingOptions (myTexture, myNewOptions);
```

## Ver também

* [StreamingManager API](xref:Stride.Streaming.StreamingManager)
* [Índice de texturas](index.md)
* [Compressão de textura](compression.md)
* [Configurações do jogo](../../game-studio/game-settings.md)