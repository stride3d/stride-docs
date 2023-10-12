# Full call stack não disponível

Dependendo de suas configurações do Visual Studio, quando uma exceção é jogada em Stride, o Visual Studio pode mostrar apenas a pilha de chamadas do tempo de execução Stride . arquivos DLL ou . NET conjuntos de estruturas, não código de usuário.

Para quebrar assim que uma exceção for lançada, adicione condições adicionais ao Visual Studio **Exception Settings**.

1. Na barra de ferramentas do Visual Studio, sob o menu **Debug**, selecione **Windows > Configurações de exceção**.

   ![ Configurações de percepção ](media/exception-settings.png)

2. Expandir ** Common Language Runtime Exceções** e selecione ** Todas as Exceções de tempo de execução de linguagem comum não nesta lista**. Você pode precisar selecionar outras condições também.

   ![ Todas as exceções de tempo de execução de linguagem comum não nesta lista](media/all-common-language-runtime-exceptions.png)

> [!Tip]
> Para restaurar a lista padrão de exceções, clique com o botão direito do mouse e selecione **Restore Defaults**.

Para obter mais informações sobre como gerenciar exceções no Visual Studio, consulte exceções [Manage com o depurador no Visual Studio](https://docs.microsoft.com/en-us/visualstudio/debugger/managing-exceptions-with-the-debugger) na documentação do Microsoft Visual Studio.