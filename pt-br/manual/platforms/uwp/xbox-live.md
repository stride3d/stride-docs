# Xbox Live

Esta página explica como configurar seu projeto para trabalhar com o Xbox Live.

## 1. Antes de começar

1. Certifique-se de que seu projeto usa UWP como uma plataforma. Para fazer isso, você pode:

   * [criar um projeto](../../get-started/create-a-project.md) e selecionar **UWP** como uma plataforma, ou
   * [adicionar **UWP** como uma plataforma para um projeto existente](../add-or-remove-a-platform.md)

   > [!Tip]
   > Para este tutorial, você pode achar útil criar um novo projeto para testar o processo e, em seguida, aplicar o conhecimento aos seus projetos existentes.

2. Certifique-se de que você pode executar o projeto da UWP. Para fazer isso, no Visual Studio, selecione a plataforma que você deseja (UWP-64, UWP-32 ou UWP-ARM) na lista drop-down **Solution Platform** e execute o projeto.

3. Baixe o Xbox Live SDK.

   Para escrever esta página, usamos o XboxLiveSDK-1612-20170114-002. A amostra é vagamente baseada na amostra Achievements no Xbox Live SDK.

4. Altere o ambiente Xbox Live. Na pasta **SDK**, abaixo de **Ferramentas**, execute:

   ```
   InterruptorSandbox.cmd XDKS.1
   ```

   XDKS.1 é a caixa de areia usada para as amostras da Microsoft.

   > [!Warning]
   > Isso bloqueia contas regulares do Xbox e só permite contas de desenvolvedor. Para voltar, execute:

   > ```
   > InterruptorSandbox.cmd RETADOS
   > ```

5. Certifique-se de que você pode executar a amostra Achievements com sua conta de desenvolvedor.

## 2. Adicione o Xbox Live SDK à sua solução

1. No Visual Studio, abra sua solução de jogo.

2. Abra o Console do Gestor de Pacotes (**Tools > NuGet Package Manager > Package Manager Console**).

3. No campo **Default project**, selecione seu projeto UWP (por exemplo *MyGame.UWP*).

   ![MyGame.UWP](media/xboxlive01.png)

4. No console, digite:

   ```
   PM > Instalar-Pacote Microsoft.Xbox.Live.SDK.WinRT.UWP
   ```

   O Visual Studio adiciona o pacote NuGet ao seu projeto.

5. Certifique-se de que o pacote aparece na lista **References**.

   ![Pacote na lista](media/xboxlive02.png)

## 3. Configurar o projeto UWP

1. Excluir *MyGame.UWP.TemporaryKey.pfx*.

2. Adicione *xboxservices.config* ao seu projeto.

   Você pode obter este arquivo de qualquer amostra do Xbox Live SDK (por exemplo, a amostra de Conquistas) para fins de teste. Quando você quiser publicar o jogo, altere o **TitleId** e **Service config Id** com os fornecidos para o seu projeto. Para obter detalhes, consulte a documentação do Xbox Live.

3. No *xboxservices.config* propriedades, sob **Build Action**, selecione **Content**, e em **Copy to Output Directory** Selecione ** Sempre**.

   ![Propriedades ](media/xboxlive03.png)

4. Editar *Package.appxmanifest* com detalhes relevantes para o seu projeto.

   Novamente, você pode usar o arquivo de manifesto de qualquer amostra do Xbox Live SDK (por exemplo, a amostra de Achievements) para fins de teste. Se você associar seu jogo com um aplicativo de loja, use o arquivo de manifesto gerado. Para obter detalhes, consulte a documentação do Xbox Live.

5. Certifique-se de que a capacidade *InternetClientServer* está ativada.

## 4. Adicione scripts de conta de usuário ao seu jogo

Você precisa ativar a capacidade do Xbox Live em seu projeto de jogo sem expor o Xbox Live SDK. Como *MyGame.UWP* já referências *MyGame.Game*, não podemos referenciar isso. Em vez disso, podemos criar uma interface e implementá-la do lado do projeto UWP.

> [!Note]
> Há várias maneiras de fazer isso. Esta página explica um método.

1. Adicione duas interfaces ao seu jogo, `IAccountManager` e `IConnectedAccount`.

2. No seu projeto UWP (por exemplo *MyGame.UWP*), implemente as interfaces ` classe pública XboxAccount : IConnectedAccount` e ` classe pública XboxLiveAccountManager: IAccountManager`.

3. Adicione a fábrica de contas ao seu jogo para que você possa acessá-lo mais tarde a partir de um script de jogo. No `MyGameMainPage.xaml.cs`, adicione a seguinte linha:

   ```
   Game.Services.AddService(typeof(IAccountManager), novo XboxLiveAccountManager());
   ```

   ![Referências](media/xboxlive04.png)

   O script final deve olhar como este no mínimo:

   ```
       classe pública LoginScript : AsyncScript
       (
           iConnected privado Conta de conta;
   
           override público async Task Execute()
           (
               conta var Mgr = Serviços.GetServiceAs<IAccountManager>();
               conta = contaMgr?.CreateConnectedAccount();
   			    se (conta == null)
   				    voltar;
   
               var result = conta. LoginAsync();
   
   	    		// TODO Adicione seu código aqui!
           }
       }
   ```

Agora você pode expor a funcionalidade `xbox_live_user` e outras classes em seu jogo.

![Property Grid](media/xboxlive05.png)

## Projeto de amostra

* [Baixe um projeto de amostra](media/XboxLiveSample.zip) com Xbox Funcionalidade de login ao vivo

   ![ Projeto de amostra ](media/xboxlive08.png)

## Ver também

* [Plataformas](../index.md)