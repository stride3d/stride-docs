# Texto de depuração

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Você pode imprimir texto de depuração em tempo de execução com [DebugText](xref:Stride.Engine.ScriptComponent.DebugText). Por exemplo, você pode usar isso para exibir uma mensagem quando ocorre um problema.

> [!Note]
> O texto de depuração é automaticamente desativado quando você constrói o jogo no modo de lançamento.

No método `Update` do seu script, adicione:

```cs
DebugText.Print("Meu texto de depuração", novo Int2(x: 50, y: 50));
```

Onde `x` e `y` são as coordenadas de pixel para exibir o texto em.

A mensagem de depuração é exibida quando você executar o jogo.

![Debug text](media/my-debug-text.jpg)

Para ocultar o texto de depuração, use:

```cs
DebugText. Visível = falso;
```

## Exemplo de script

O seguinte script verifica que a textura `MyTexture` está carregada. Se não estiver carregado, o jogo exibe o texto de depuração "MyTexture not loaded".

```cs
usando Stride. Core.Matemática;
usando Stride. Motor;
usando Stride. Gráficos;

namespace MyGame
(
    classe pública Script : Sincronização
    (
		public Texture myTexture;

        anula de sobreposição pública Start()
        (
            // Inicialização do script.
            myTexture = Content.Load<Texture>("MyTexture");
        }

        atualização()
        (
			se (myTexture == null)
                DebugText.Print("MyTexture não carregado", novo Int2(x: 50, y: 50));
        }
    }
}
```

## Ver também

* [Logging](logging.md)
* [Scripts](../scripts/index.md)