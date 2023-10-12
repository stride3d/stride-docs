# Pontos

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

**Pointers** são pontos na tela do dispositivo correspondente a **finger touches**. Dispositivos com funcionalidade multi-toque suportam vários ponteiros simultâneos.

Em plataformas de desktop, o botão esquerdo do mouse pode ser usado para simular ponteiros. Para obter mais informações sobre a entrada do mouse, consulte [Mouse](mouse.md).

## Como Stride processa entrada de ponteiro

1. O usuário toca na tela ou clica no botão esquerdo do mouse.

2. Stride cria um ponteiro.

3. Stride atribui **pointer ID** a esse ponteiro correspondente a um determinado dedo.

4. Cada vez que o ponteiro é modificado, Stride cria um novo evento **pointer** com esse ponteiro.

5. Para cada novo dedo, Stride cria um novo ponteiro com um novo ID de ponteiro.

> [!Note]
> Cada evento de ponteiro contém informações sobre apenas um ponteiro. Se vários ponteiros forem modificados simultaneamente na mesma atualização, a Stride cria um evento separado para cada ponteiro.

> [!Warning]
> Cada sistema operacional lida com modificações de ponteiro de forma diferente. Isso significa que o mesmo gesto de dedo pode gerar sequências de eventos de ponteiro ligeiramente diferentes em diferentes plataformas. Por exemplo, o Android não cria um novo evento de ponteiro quando um dedo toca na tela, mas não se move. Para obter mais informações, verifique sua documentação do sistema operacional.

Você pode permitir o reconhecimento de gestos para detectar gestos como prensas longas e torneiras. Para mais informações, consulte [Gestures](gestures.md).

## A classe PointerEvent

[PointerEvent](xref:Stride.Input.PointerEvent) relata eventos de ponteiro. Ele contém o status atual **pointer** e informações de tempo. É jogado cada vez que o **pointer** é modificado.

Você pode acessar a lista de eventos **pointer** desde a última atualização usando [InputManager.PointerEvents](xref:Stride.Input.InputManager.PointerEvents). Stride lista eventos de ponteiro em ordem cronológica. A lista é limpa em cada atualização, então você não precisa limpá-la manualmente.

### Obtenha informações do ponteiro

Você pode usar as seguintes propriedades para obter informações sobre o ponteiro que acionou o evento:

| Propriedade | Descrição |
|--------|-----------
| [PointerEvent.PointerId](xref:Stride.Input.PointerEvent.PointerId) | Indica o ID do ponteiro que desencadeou o evento. |

> [!Warning]
> O ID de um ponteiro é válido apenas durante um único _Pressed->Moved->Released_ sequência de eventos de ponteiro.
> Um dedo pode ter diferentes IDs cada vez que toca a tela (mesmo que isso aconteça muito rapidamente).

> [!Warning]
> Cada sistema operacional tem sua própria maneira de atribuir IDs aos ponteiros.
> Não há relação entre os valores de ID do ponteiro e os dedos correspondentes.

Para verificar se um evento de ponteiro foi acionado por um mouse ou toque, use:

```cs
bool é triggered ByMouse = evento. O ponteiro é IMouseDevice
```

### Obter a posição do ponteiro

Você pode obter a posição do ponteiro em coordenadas normalizadas ou absolutas.

#### Coordenadas normalizadas

@'Stride.Input.PointerEvent.Position' retorna a posição do ponteiro em **normalizado** X e Y coordena em vez de tamanhos de tela reais em pixels. Isso significa que a posição do ponteiro se ajusta a qualquer resolução e você não precisa escrever código separado para diferentes resoluções.

* (0,0): o ponteiro está no canto superior esquerdo da tela
* (1,1): o ponteiro está no canto inferior direito da tela

#### Coordenadas absolutas

[PointerEvent.AbsolutePosition](xref:Stride.Input.PointerEvent.AbsolutePosition) retorna a posição do ponteiro em coordenadas X e Y absolutas (o tamanho real da tela em pixels). Por exemplo, se o ponteiro estiver no canto superior esquerdo da tela, os valores são (0,0). Se o ponteiro estiver no canto inferior direito, os valores dependem da resolução da tela (por exemplo 1280, 720).

> [!Tip]
> Para obter o tamanho real da tela, acesse [IPointerDevice. SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). Por exemplo:
> ```cs
> superfície da vareta Tamanho = Input.Pointer.SurfaceSize;
> ```

### Obter eventos de ponteiro

Use o [PointerEvent.EventType](xref:Stride.Input.PointerEvent.EventType) para verificar os eventos do ponteiro.

Existem cinco tipos de evento de ponteiro:

* **Pressed**: O dedo tocou na tela.
* ** Modificado **: O dedo moveu-se ao longo da tela.
* **Released**: O dedo deixou a tela.
* **Cancelado**: A sequência de ponteiro foi cancelada. Isso pode acontecer quando o aplicativo é interrompido; por exemplo, um aplicativo de telefone pode ser interrompido por uma chamada de telefone recebida.

> [!Note]
> Uma sequência de eventos de ponteiro para um ponteiro sempre começa com um evento **Pressed**. Isso pode ser seguido por um ou mais eventos **Moved** e sempre termina com um evento **Released** ou **Canceled**.>.

### Obter valores delta

[Pointer Event.DeltaTime](xref:Stride.Input.PointerEvent.DeltaTime) recebe o tempo decorrido do anterior @'Stride.Input.Pointer Evento.

Você pode obter a posição delta em coordenadas normalizadas ou absolutas.

### Valores delta normalizados

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.DeltaPosition) recebe a mudança na posição desde o anterior @'Stride.Input.PointerEvent' em **normalized** X,Y coordena.

> [!Note]
> Os valores Delta são sempre nulos no início da sequência de eventos de ponteiro (ou seja, quando o **pointer estado** é **down**).

### Valores absolutos delta

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.AbsoluteDeltaPosition) obtém a mudança na posição desde as coordenadas anteriores @'Stride.Input.PointerEvent' em **absolute** (X,Y).

## Exemplo de código

Este script rastreia o movimento de ponteiro e imprime suas posições:

```cs
usando o sistema;
usando o Sistema. Colecções. Genéricos;
usando o Sistema. Linq;
usando o Sistema. Threading. Tarefas;
usando Stride. Core.Matemática;
usando Stride. Motor;

namespace Stride. Input.Tests
(
    classe pública Pointer TestScript: AsyncScript
    (
        override público async Task Execute()
        (
            var pointerPositions = new Dictionary<int, Vector2>();
            (verdade)
            (
                await Script.NextFrame();
                foreach (ponto de venda) Evento em Input.PointerEvents)
                (
                    switch (pointerEvent.EventType)
                    (
                    caso Pointer EventType. Pressionado:
                        pointerPositions[pointerEvent.Pointer Id] = pointerEvent.Position;
                        quebrar;
                    caso Pointer EventType.Moved:
                        pointerPositions[pointerEvent.Pointer Id] = pointerEvent.Position;
                        quebrar;
                    caso Pointer EventType.Released:
                    caso Pointer EventType.Canceled:
                        pointerPositions.Remover(pointerEvent.Pointer Id);
                        quebrar;
                    padrão:
                        jogar novo ArgumentOutOfRangeException();
                    }
                }
                posições de var Str = pointerPositions.Values.Aggregate("", (current, pointer) => atual + (pointer. ToString() + ", "));
                Log.Info("Há ponteiros {0} atualmente na tela localizada em {1}", pointerPositions. Contagem, posiçõesStr);
            }
        }
    }
}
```

## Ver também
* [Gestos](gestures.md)
* [Mouse](mouse.md)
* [Botões virtuais](virtual-buttons.md)
* [Visão geral da entrada](index.md)