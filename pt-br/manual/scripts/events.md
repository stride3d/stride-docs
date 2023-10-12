# Eventos

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

**Eventos** facilitam a comunicação entre scripts. Eles trabalham de uma forma, transmitido de **casters** para **receivers**. Eventos vêm em dois sabores, uma versão não-genérica para a transmissão de eventos básicos, e uma versão genérica para quando os dados precisam ser passados para receptores.

Por exemplo, imagine seu jogo tem um estado "Game Over" que ocorre quando o jogador morre. Para lidar com isso, você pode criar um evento "Game Over", que é transmitido a todos os scripts com receptores ouvindo para o evento. Quando o evento é transmitido, os receptores executam scripts apropriados para lidar com o evento Game Over (por exemplo, redefinir inimigos, substituir objetos de nível, iniciar um novo temporizador, etc). Você também pode enviar informações relacionadas ao estado "Game Over" (por exemplo, estatísticas de jogo, que ganhou, etc).

> [!Note]
> Os eventos são tratados inteiramente em scripts. Você não pode configurá-los no Game Studio.

## Criar e transmitir um evento

Os transmissores na API Stride são do tipo [EventKey](xref:Stride.Engine.Events.EventKey) ou [EventKey<T>](xref:Stride.Engine.Events.EventKey`1). Eles usam o método [Broadcast](xref:Stride.Engine.Events.EventKey#Stride_Engine_Events_EventKey_Broadcast) ou [Broadcast(T)](xref:Stride.Engine.Events.EventKey`1#Stride_Engine_Events_EventKey_1_Broadcast__0_) para transmitir eventos aos receptores.

Por exemplo, este código cria dois eventos "Game Over". Um com um não-genérico e outro com uma versão genérica do EventKey:

```cs
classe estática pública Global Eventos
(
    estática pública Evento Key GameOverEventKey = novo EventKey("Global", "Game Over");
    estática pública EventKey<string> GameOverWithDataEventKey = novo EventKey<string>("Global", "Game Over With Data");

    vazio estático público SendGameOverEvent()
    (
        GameOverEventKey.Broadcast();
        GameOverWithDataEventKey.Broadcast("Player 1");
    }
}
```

## Criar um receptor

Os receptores na API Stride são do tipo [EventReceiver](xref:Stride.Engine.Events.EventReceiver) ou [EventReceiver<T>](xref:Stride.Engine.Events.EventReceiver`1).

Para receber os eventos "Game Over" descritos acima, use:

```cs
jogo de var OverListener = novo EventReceiver (GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();

jogo de var OverListenerWithData = novo EventReceiver<string> (GlobalEvents.GameOverWithDataEventKey);
if(gameOverListenerWithData.TryReceive (out string data)))
(
	- Sim. "Player 1"
}

//Or em Async
await gameOverListener.ReceiveAsync();
string asyncData = await gameOverListenerWithData.ReceiveAsync();
//asyncData == "Player 1"
```

## Ver também

* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)
