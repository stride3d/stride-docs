# Depuração

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Se o seu script não estiver produzindo o resultado esperado no tempo de execução, você pode depurá-lo em um IDE, como o Visual Studio.

> [!Note]
> [Há muitas maneiras de depurar o código. Esta página sugere um método, usando o Visual Studio.]

1. Abra o script no Visual Studio.

   > [!Tip]
   > Para abrir seu projeto no Visual Studio do Game Studio, na barra de ferramentas Game Studio, clique em ![Open in IDE](media/launch-your-game-ide-icon.png) (**Open in IDE**).

2. Pressione **F9** para adicionar um ponto de interrupção nos lugares necessários.

3. No Visual Studio, pressione **F5** ou clique em **Start** na barra de ferramentas para executar o jogo no modo de depuração.

   ![Visual Studio Iniciar botão](media/visual-studio-start-button.png)

   O jogo começa numa nova janela. No Visual Studio, na página de script, o primeiro ponto de interrupção destaca e pára a execução.

4. Verifique o estado de suas variáveis.

5. Pressione **F10** (passo) se você quiser executar a linha de código por linha, ou pressione **F5** para continuar a execução de código.

> [!Note]
> Se o Visual Studio não parar no ponto de interrupção, certifique-se de anexar o script a uma entidade na cena ativa.

Para obter mais informações sobre depuração no Visual Studio, consulte a documentação [MSDN](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx).

## Ver também

* [Depuração no Visual Studio (documentação MSDN)](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx)
* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)