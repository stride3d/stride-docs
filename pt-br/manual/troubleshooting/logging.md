# Logging

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

Você pode **log** informações sobre o seu jogo enquanto ele é executado usando [Log](xref:Stride.Engine.ScriptComponent.Log).

Ao contrário de [profiling](profiling.md), que recupera informações automaticamente, cabe a você criar suas próprias mensagens de log e definir quando elas são acionadas. Por exemplo, você pode criar uma mensagem de log que dispara quando um personagem executa uma determinada ação. Isso é útil para investigar como seu jogo está executando.

> [!Note]
> Logging é desativado quando você construir o jogo no modo de lançamento.

Quando você usa o registro e executa seu jogo no modo de depuração, o Stride abre um console em uma segunda janela para exibir informações de registro. As mensagens são codificadas por nível.
O nome do módulo (como o script contendo a mensagem de log) é exibido em suportes. Isso é seguido pelo nível de log (por exemplo **Warning**, **Error**, etc), então a mensagem de log.

![Logging em console](media/logging-in-console.png)

O console exibe mensagens de log de todos os módulos, não apenas seus próprios scripts. Por exemplo, também exibe mensagens do @'Stride.Core.Serialization.Contents.ContentManager'.

Se você executar seu jogo do Visual Studio, as mensagens de log são mostradas na janela Visual Studio **Output** em vez disso.

![Log janela de saída](media/log-output-in-visual-studio.png)

## Níveis de registo

Existem seis níveis de mensagem de log, usados para diferentes níveis de gravidade.

| Nível de log | Cor | Descrição |
|-----------|-------|-----
| Depuração | Cinza | InformaÃ§Ãμes passo a passo para fins avançados de depuração |
| Verbo | Branco | InformaÃ§Ãμes detalhadas |
| Info | Verde | InformaÃ§Ãμes gerais |
| Aviso | Amarelo | Erros menores que podem causar problemas |
| Erro | Vermelho | Erros |
| Fatal | Vermelho | Erros graves que travam o jogo |

Por padrão, o log exibe mensagens para o nível **Info** e superior. Isso significa que não exibe **Debug** ou **Verbose** mensagens. Para mudar isso, veja **Defina o nível mínimo** abaixo.

## Escrever uma mensagem de log

No script contendo o código que você deseja registrar, escreva:

```cs
Log.Debug("Minha mensagem de log");
```

Você pode substituir `Debug` com o nível que deseja usar para a mensagem de log (ver **Log level** acima).

Você pode combinar isso com as afirmações `if` para registrar esta mensagem em determinadas condições (ver **Example script** abaixo).

## Definir o nível de log

Você pode definir um nível mínimo de log para exibir. Por exemplo, se você quiser ver mensagens tão severas como **Warning** ou superiores, use:

```cs
Log.ActivateLog (LogMessageType.Warning);
```

> [!Note]
> Isto não é um cenário global. O nível de log que você definiu só se aplica ao script que você configurou.

### Alterar o nível de log no tempo de execução

```cs
((Game)Game).ConsoleLogLevel = LogMessageType.myLogLevel;
```

### Desativar um log específico

```cs
GlobalLogger.GetLogger("RouterClient"). ActivateLog (LogMessageType.Debug, LogMessageType.Fatal, false); 
// Desativa o registro do módulo RouterClient
```

### Desativar o registro no console

```cs
((Game)Game).ConsoleLogMode = ConsoleLogMode.None;
```

### Criar um arquivo de log

Para salvar a saída de log em um arquivo de texto, adicione esse código ao método `Start`:

```cs
var fileWriter = novo TextWriterLogListener(new FileStream("myLogFile.txt", FileMode.Create));
GlobalLogger.GlobalMessageLogged += fileWriter;
```

Isso cria um arquivo na pasta Debug do seu projeto (por exemplo *MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*).

## Exemplo de script

O seguinte script verifica que a textura `MyTexture` está carregada. Quando a textura carrega, o log exibe uma mensagem de depuração (`Log.Error`). Se não carregar, o log registra uma mensagem de erro (`Log.Debug`).

```cs
usando o Sistema. Linq;
usando o Sistema. Texto;
usando o Sistema. Threading. Tarefas;
usando Stride.Core.Diagnostics;
usando Stride. Core.Matemática;
usando Stride. Entrada;
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
            Log.ActivateLog (LogMessageType.Debug);
            Log.Debug("Start loading MyTexture");

            myTexture = Content.Load<Texture>("MyTexture");
            se (myTexture == null)
            (
                Log.Error("MyTexture não carregado");
            }
            mais
            (
                Log.Debug("MyTexture carregado com sucesso");
            }
        }
    }
}
```

## Ver também

* [Texto de depuração](debug-text.md)
* [Perfil](profiling.md)
* [Scripts](../scripts/index.md)