# Criar um script

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Você pode criar scripts usando Game Studio ou um IDE, como Visual Studio.

## Criar um script no Game Studio

1. No **Asset View**, clique em **Add asset > Scripts** e selecione um tipo de script.

   ![Select script type window](media/create-a-script-script-asset-selection.png)

   > [!Note]
   > Para obter informações sobre diferentes tipos de script, consulte [Típes de script](types-of-script.md).

   A caixa de diálogo **New script** abre.

   ![ Novo script](media/script-wizard.png)

2. Especifique uma classe e namespace para o script e clique em **Create script**.

3. Para usar o script, você precisa salvá-lo. Por padrão, Game Studio solicita que você salve o script agora.

Depois de salvar o script, você pode vê-lo no **Asset View**.

> [!Note]
> Embora os scripts sejam um tipo de ativo, eles não são salvos na pasta Ativos. Em vez disso, eles são salvos na pasta de montagem relevante. Para mais informações, consulte [Projeto estrutura](../files-and-folders/project-structure.md).

Você também pode ver o novo script no Visual Studio.

![ Novo script no Asset View tab](media/create-a-script-new-script-asset-view.png)

> [!Tip]
> Para abrir sua solução no Visual Studio do Game Studio, clique no ícone ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) na barra de ferramentas Game Studio.

```cs
usando o sistema;
usando o Sistema. Texto;
usando o Sistema. Threading. Tarefas;
usando Stride. Core.Matemática;
usando Stride. Entrada;
usando Stride. Motor;

namespace MyGame
(
	classe pública BasicAsyncScript : AsyncScript
	(	
		override público async Task Execute()
		(
			enquanto (Game.IsRunning)
			(
				// Faça algumas coisas cada quadro
				await Script.NextFrame();
			}
		}
	}
}
```

## Criar um script no Visual Studio

1. Open Visual Studio.

   > [!Tip]
   > Para abrir sua solução no Visual Studio do Game Studio, clique no ícone ![Open in IDE](media/create-a-script-ide-icon.png) (**Open in IDE**) na barra de ferramentas Game Studio.

   A solução do jogo é composta por vários projetos:

   * O projeto que termina *.Game* é o projeto principal, e deve conter toda a lógica do jogo e scripts.

   * Outros projetos (por exemplo *MyGame.Windows*, *MyGame.Android* etc) contêm código específico da plataforma.

   Para mais informações, consulte [Projeto estrutura](../files-and-folders/project-structure.md).

2. Adicione um novo arquivo de classe ao projeto `.Game`. Para fazer isso, clique com o botão direito do mouse no projeto e selecione **Add > New Item**.

   A caixa de diálogo **Add New Item** abre.

3. Selecione **Class**, digite um nome para seu script e clique em **Add**.

   Visual Studio adiciona uma nova classe ao seu projeto.

4. No arquivo que você criou, certifique-se de que o script é público e deriva de **AsyncScript** ou **SyncScript**.

5. Implementar os métodos abstratos necessários.

   Por exemplo:

   ```cs
   	usando o sistema;
   	usando o Sistema. Texto;
   	usando o Sistema. Threading. Tarefas;
   	usando Stride. Core.Matemática;
   	usando Stride. Entrada;
   	usando Stride. Motor;
   
   	namespace MyGame
   	(
   		classe pública SampleSyncScript : Sincronização
   		(			
   			atualização()
   			(
   				se (Game.IsRunning)
   				(
   					// Faça algo cada quadro
   				}
   			}
   		}
   	}
   ```

6. Salve os arquivos de projeto e script.

7. Porque você modificou o script, Game Studio precisa recarregar o conjunto para mostrar as mudanças.

   ![ Confirmação mensagem ](media/create-a-script-confirmation-message.png)

   Clique em ** Sim**.

Você pode ver o script no **Asset View**.

![ Novo script no Asset View tab](media/create-a-script-new-script-asset-view.png)

> [!Note]
> Embora os scripts sejam um tipo de ativo, eles não são salvos na pasta Ativos. Em vez disso, eles são salvos na pasta de montagem relevante. Para mais informações, consulte [Projeto estrutura](../files-and-folders/project-structure.md).

## Ver também

* [Tipos de script](types-of-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)