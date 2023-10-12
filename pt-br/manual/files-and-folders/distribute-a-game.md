# Distribuir um jogo

Quando estiver pronto para publicar o seu jogo, crie uma versão do Visual Studio e depois distribua-a.

## 1. Criar uma compilação de lançamento

1. Se você construiu seu jogo no modo de lançamento antes, em sua pasta de projeto (por exemplo *MyGame/Bin/MyPlatform/Release/*), exclua a pasta *Data*. Esta pasta pode conter arquivos desnecessários, como versões antigas de ativos, então é mais simples construí-lo novamente do zero.

2. Abra seu projeto no Game Studio.

3. Na barra de ferramentas, clique no menu suspenso e selecione **Visual Studio**.

   ![ Abra em VS](media/open-in-visual-studio.png)

   Seu projeto abre no Visual Studio.

4. No Visual Studio, no menu suspenso **Solution Configurations**, selecione **Release**.

   ![Select release](media/select-release.png)

5. No menu drop-down **Solution plataformas**, selecione a plataforma para a qual você deseja criar uma compilação.

   ![Selecione a plataforma](media/select-platform.png)

   > [!Note]
   >
   > Você só pode construir para plataformas que você adicionou ao seu projeto Stride. Para obter instruções sobre como fazer isso, consulte [Adicionar ou remover uma plataforma](../platforms/add-or-remove-a-platform.md).
   >
   > Para construir para Android ou iOS, você precisa de Xamarin, que está incluído com licenças Visual Studio. Para obter instruções sobre como instalar Xamarin com Visual Studio 2017, consulte [esta página MSDN](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

6. Sob **Construir **, selecione **Construir solução**.

   ![ Solução de construção](media/build-solution.png)

   Visual Studio cria uma compilação de lançamento em sua pasta bin projeto (por exemplo *MyGame/Bin/MyPlatform/Release*).

> [!Tip]
> Você pode querer renomear a pasta **Release** para algo mais descritivo (como o título do seu jogo).

### Para construir usando terminal em vez de Visual Studio

1. Você precisa instalar o Visual Studio para obter **Developer Command Prompt for Visual Studio (Version)**
2. Em Developer Command Prompt for Visual Studio
3. 
   ```console
   C:\User> msbuild PathToSln\NameOfProject.sln /p:Configuração=Release /p:OutputPath=YourPreferredPath
   ```

## 2. Excluir arquivos desnecessários

Na pasta de lançamento em sua pasta bin projeto (por exemplo *MyGame/Bin/MyPlatform/Release*), você pode excluir os seguintes arquivos desnecessários:

* `.pdb` arquivos (informações de depuração)

* `.xml` arquivos (documentação API)

* arquivos que contêm `vshost` em seus nomes de arquivo (por exemplo `MyGame.vshost.exe` e `MyGame5.vshost.exe.manifest`)

* pastas diferentes do `x64`, `x86`, ou `data` pastas

* outros arquivos desnecessários, como arquivos de configuração personalizados (ou seja, arquivos não criados com Stride)

## 3. Distribuir seu jogo

Depois de criar uma compilação de lançamento, como você distribui isso é até você.

Para executar jogos feitos com Stride no Windows, os usuários precisam:

* .NET 4.6.1

* DirectX11 (incluído com Windows 10 e posterior), OpenGL, ou Vulkan

* Tempos de execução Visual C++ 2015 (x86 e/ou x64, dependendo do que você estabeleceu em suas propriedades do projeto no Visual Studio)

## Ver também

* [Adicionar ou remover uma plataforma](../platforms/add-or-remove-a-platform.md)
* [Controle de versão](version-control.md)
* [Estrutura do projecto](project-structure.md)
