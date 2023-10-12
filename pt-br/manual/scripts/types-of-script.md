# Tipos de script

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Existem três tipos principais de script em Stride: **startup scripts**, **synchronous scripts**, e **asynchronous scripts**.

Quando você escreve seu script, herda do tipo de script com o comportamento que melhor se adapta às suas necessidades.

## Scripts de inicialização

Os scripts de inicialização só rodam quando são adicionados ou removidos no tempo de execução. Eles são usados principalmente para inicializar elementos do jogo (por exemplo, personagens de desova) e destruí-los quando a cena é descarregada. Eles têm um método [Start](xref:Stride.Engine.StartupScript.Start) para inicialização e um método [Cancel](xref:Stride.Engine.ScriptComponent.Cancel). Você pode substituir qualquer método se precisar.

Exemplo:

```cs
classe pública StartUpScriptExample : StartupScript
(
	anula de sobreposição pública Start()
	(
		// Faça algumas coisas durante a inicialização
	}
}
```

## Scripts síncronos

Os scripts síncronos são inicializados e, em seguida, atualizados cada frame, e finalmente cancelados (quando o script é removido).

* O código de inicialização, se houver, vai no método [Start](xref:Stride.Engine.StartupScript.Start).
* O código que executa a atualização vai no método [Update](xref:Stride.Engine.SyncScript.Update).
* O código que executa o cancelamento vai no método [Cancel](xref:Stride.Engine.ScriptComponent.Cancel).

O seguinte script executa atualizações cada frame, não importa o que:

```cs
classe pública SampleSyncScript : Sincronização
(        
	atualização()
	(
		// Executa a atualização na entidade — este código é executado cada quadro
	}
}
```

## Scripts assíncronos

Os scripts assíncronos são inicializados apenas uma vez, depois cancelados quando removidos da cena.

* O código assíncrono entra na função [Execute](xref:Stride.Engine.AsyncScript.Execute).

* Código que executa o cancelamento vai no método [Cancel](xref:Stride.Engine.ScriptComponent.Cancel).

O seguinte script executa ações que dependem de eventos e gatilhos:

```cs
classe pública SampleAsyncScript : AsyncScript
(        
	override público async Task Execute() 
	(
		// O código de inicialização deve vir aqui, se necessário
		
		enquanto (Game.IsRunning) // loop até que o jogo termina (opcional dependendo do script)
		(
			aguarde MyEvent;

			// Faz alguma coisa
			
			await Script.NextFrame(); // esperar pelo próximo frame (opcional dependendo do script)
		}
	}
}
```

## Ver também

* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)