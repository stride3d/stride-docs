# Mouse

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

O **mouse** é um dispositivo de entrada comum para jogos de desktop.

Existem duas maneiras de lidar com a entrada do mouse em Stride:

* Consulta **Mouse botão estados**.
* Para jogos de plataforma cruzada que segmentam dispositivos móveis, você pode usar listas [PointerEvent](xref:Stride.Input.PointerEvent).
   Para mais informações, consulte [Pointers](pointers.md).

Você pode acessar os estados do botão **mouse** e **pointer lista de eventos** a partir do [ Gerenciador de entrada](xref:Stride.Input.InputManager).

| Classe | Tipo de projeto | Quando usar |
| --- | --- | --- |
| [InputManager](xref:Stride.Input.InputManager) | Apenas Desktop | Para jogos de desktop, você geralmente lida com entrada com vários botões do mouse. Isso significa que você deve usar **mouse estados do botão**. |
| [Evitação de pontos](xref:Stride.Input.PointerEvent) | Plataforma transversal | Para jogos móveis, você geralmente simula ponteiros com apenas o botão esquerdo do mouse. Isso significa que você pode tratar a entrada do mouse como ponteiros. Não há necessidade de criar controles específicos do mouse separados. Para mais informações, consulte [Pointers](pointers.md). |

Para obter mais informações sobre essas opções, consulte o [Input index](index.md).

## Verificar disponibilidade do mouse

Antes de manusear a entrada do mouse, use [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse) para verificar se um mouse está conectado.

## Obter a posição do mouse

Você pode obter a posição do mouse em coordenadas normalizadas ou absolutas.

### Coordenadas normalizadas

@'Stride.Input.InputManager.MousePosition' retorna a posição do ponteiro do mouse em **normalized** X, Y coordena em vez de tamanhos de tela reais em pixels. Isso significa que a posição do ponteiro se ajusta a qualquer resolução e você não precisa escrever código separado para diferentes resoluções.

* (0,0): o ponteiro está no canto superior esquerdo da tela
* (1,1): o ponteiro está no canto inferior direito da tela

### Coordenadas absolutas

[InputManager.AbsoluteMousePosition](xref:Stride.Input.InputManager.AbsoluteMousePosition) retorna a posição do ponteiro do mouse em coordenadas X e Y absolutas (o tamanho real da tela em pixels). Por exemplo, se o ponteiro estiver no canto superior esquerdo da tela, os valores são (0,0). Se o ponteiro estiver no canto inferior direito, os valores dependem da resolução da tela (por exemplo 1280, 720).

> [!Tip]
> Para obter o tamanho real da tela, acesse [IPointerDevice. SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). Por exemplo:
> ```cs
> superfície da vareta Tamanho = Entrada.Mouse.SurfaceSize;
> ```

## Consultar alterações de estado do botão do mouse

Você pode usar os botões do mouse para ativar ações em um projeto. Por exemplo, em jogos de tiro em primeira pessoa, o botão esquerdo do mouse é comumente usado para atirar.

O [Input manager](xref:Stride.Input.InputManager) tem vários métodos que verificam os estados do botão do mouse (_Pressed_, _Down_, ou _Released_):

| Método | Descrição |
| ------ | --- 
| [Botões de uso HasDownMouse](xref:Stride.Input.InputManager.HasDownMouseButtons) | Verifica se um ou mais botões do mouse estão pressionados atualmente. |
| [Botões de uso rápido](xref:Stride.Input.InputManager.HasPressedMouseButtons) | Verifica se um ou mais botões do mouse foram pressionados na última atualização. |
| [HasReleasedMouseButtons](xref:Stride.Input.InputManager.HasReleasedMouseButtons) | Verifica se um ou mais botões do mouse foram liberados na última atualização. |
| [IsMouseButtonDown (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonDown\(Stride.Input.MouseButton\)) | Verifica se um botão do mouse especificado é pressionado atualmente. |
| [IsMouse Button Pressionado (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonPressed\(Stride.Input.MouseButton\)) | Verifica se um botão do mouse especificado foi pressionado na última atualização. |
| [IsMouseButtonReleased (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonReleased\(Stride.Input.MouseButton\)) | Verifica se um botão do mouse especificado foi liberado na última atualização. |

### Rato delta

Use [InputManager.MouseDelta](xref:Stride.Input.InputManager.MouseDelta) para obter a mudança na posição do mouse em coordenadas normalizadas desde a última atualização. Você pode usar isso para analisar a velocidade e direção do movimento do mouse.

### Mouse wheel delta

Você pode usar a roda do mouse para ativar ações em um projeto. Por exemplo, em um jogo de tiro em primeira pessoa, mover a roda do mouse pode mudar armas ou ampliar uma câmera.

O [InputManager.MouseWheelDelta](xref:Stride.Input.InputManager.MouseWheelDelta) retorna um valor positivo quando o usuário rola para a frente e um valor negativo quando o usuário rola para trás. Um valor de `0` indica nenhum movimento.

## Bloquear a posição do mouse

Para alguns projetos, o usuário precisa mover o cursor do mouse além das fronteiras da tela. Por exemplo, jogos de tiro em primeira pessoa geralmente precisam de rotação de câmera de 360 graus. Nestes casos, você também provavelmente quer que o cursor do mouse seja oculto.

Você pode bloquear a posição do mouse e ocultar o cursor com as seguintes propriedades e métodos:

| Método ou propriedade | Descrição |
| --- | --- |
| [LockMousePosition (Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) | Bloqueia a posição do mouse até a próxima chamada para o evento [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition). |
| [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) | Desbloqueia a posição do mouse bloqueada pelo evento [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)). |
| [IsMousePositionLocked](xref:Stride.Input.InputManager.IsMousePositionLocked) | Verifica se a posição do mouse está bloqueada. |

> [!Tip]
> Você pode obter ou definir a visibilidade do mouse com [GameWindow.IsMouseVisible](xref:Stride.Games.GameWindow.IsMouseVisible).

## Exemplo de código

```cs
classe pública MouseInputScript : Sincronização
(
	atualização()
	(
		//Se o botão esquerdo do mouse for pressionado nesta atualização, faça alguma coisa.
		se (Input.IsMouseButtonDown (MouseButton.Left))
		(   
		}
		//Se o botão do meio do mouse foi pressionado desde a última atualização, faça alguma coisa.
		se (Input.IsMouseButtonPressed (MouseButton.Middle))
		(  
		}

		//Se o mouse moveu mais de 0,2 unidades do tamanho da tela na direção X, faça algo.
		se (Input.MouseDelta.X > 0,2f)
		(
		}
		
	}
}
```

## Ver também

* [Pontos](pointers.md)
* [Botões virtuais](virtual-buttons.md)
* [Teclado](keyboards.md)
* [Gamepads](gamepads.md)
* [Visão geral da entrada](index.md)