# Teclados

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

O **keyboard** é o dispositivo de entrada mais comum para jogos de desktop. Existem duas maneiras de lidar com a entrada do teclado em Stride:

* query **key states**
* use [KeyEvent](xref:Stride.Input.KeyEvent) listas

Você pode acessar ambos da classe base [input](xref:Stride.Input.InputManager). Para obter mais informações sobre essas opções, consulte o índice de entrada [](index.md)

## Verifique a disponibilidade do teclado

Antes de lidar com a entrada do teclado, verifique se um teclado está conectado usando [Input.HasKeyboard](xref:Stride.Input.InputManager.HasKeyboard).

## Obter estados-chave

Você pode consultar **key states** e **state changes** com os seguintes métodos:

| Método | Descrição |
| --- | --- |
| [IsKeyDown (Keys)](xref:Stride.Input.InputManager.IsKeyDown\(Stride.Input.Keys\)) | Verifica se uma chave especificada está no estado **down**. |
| [IsKeyPressed (Keys)](xref:Stride.Input.InputManager.IsKeyPressed\(Stride.Input.Keys\)) | Verifica se uma chave especificada foi **pressed** desde a última atualização. |
| [IsKeyReleased (Keys)](xref:Stride.Input.InputManager.IsKeyReleased\(Stride.Input.Keys\)) | Verifica se uma chave especificada foi **released** desde a última atualização. |

> [!Note]
> Stride não suporta recuperar chaves interpretadas, como caracteres especiais e letras maiúsculas.

## Obter eventos chave

Em alguns casos, você quer saber todas as chaves que estão atualmente _ Down_, ou todas as chaves que foram _Pressed_ desde a última atualização. A API estadual chave não é boa para esta situação, pois você tem que consultar cada chave disponível separadamente.

Em vez disso, use as coleções **key events** disponíveis na classe base [Input](xref:Stride.Input.InputManager).

| Lista pública | Descrição l |
| ----------- | --- 
| [InputManager.DownKeys](xref:Stride.Input.InputManager.DownKeys) | Recebe uma lista das chaves que estavam na última actualização. |
| [InputManager.PressedKeys](xref:Stride.Input.InputManager.PressedKeys) | Obtém uma lista das chaves pressionadas na última atualização. |
| [InputManager.ReleasedKeys](xref:Stride.Input.InputManager.ReleasedKeys) | Recebe uma lista das chaves lançadas na última atualização. |
| [InputManager.KeyEvents](xref:Stride.Input.InputManager.KeyEvents) | Obtém uma lista dos principais eventos na última atualização (chaves pressionadas ou liberadas). |

Cada @'Stride.Input.KeyEvent' tem duas propriedades: @'Stride.Input.KeyEvent. Key' (a chave afetada) e @'Stride.Input.ButtonEvent. IsDown' (o novo estado da chave).

## Exemplo de código

```cs
classe pública Teclado EventosScript : Sincronização
(
	//As variáveis e propriedades declaradas do membro público mostram no Game Studio.

	atualização()
	(
		//Perform uma ação em cada atualização.
		se (Game.IsRunning)
		(
			se (Input.IsKeyDown (Keys.Left))
			(
				this.Entity.Transform.Position.X -= 0.1f;
			}
			se (Input.IsKeyDown (Keys.Right))
			(
				this.Entity.Transform.Position.X += 0,1f;
			}
		}
	}
}
```

## Ver também

* [Gamepads](gamepads.md)
* [Mouse](mouse.md)
* [Botões virtuais](virtual-buttons.md)
* [Visão geral da entrada](index.md)