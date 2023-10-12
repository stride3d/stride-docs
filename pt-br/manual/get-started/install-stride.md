# Instalar o Stride

<span class="badge text-bg-primary">Introdução</span>

1. Baixe o instalador Stride (**StrideSetup.exe**) do [Stride website](http://stride3d.net/download/).

2. Clique duas vezes no arquivo **StrideSetup.exe**.

   O **Stride Setup Wizard** abre.

3. Stride depende do tempo de execução .NET. Se você não tem a versão em particular que precisa, Stride solicita que você a instale.

   ![ Pré-requisitos instalador](media/prerequisites-installer.png)

   Clique em **Next** e siga as instruções.

   > [!Note]
   > Alternativamente, você pode [ baixar o .NET Framework do Microsoft Download Center](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer) e reiniciar o instalador Stride.

4. O **Stride Setup Wizard** abre.

   ![Stride Setup Wizard](media/install-stride-setup-wizard.png)

   Clique em **Next**.

   A janela **Stride License Agreement** é aberta.

   ![Stride licença concordância janela](media/install-stride-license-agreement.png)

   Clique em **Accept**.

5. A janela **Stride installation type** é aberta.

   ![Stride tipo de instalação janela](media/install-stride-installation-type.png)

   Selecione um tipo de instalação e clique em **Next**.

6. A pasta de instalação **Select** abre a janela.

   ![Select installation folder window](media/install-stride-select-installation-folder.png)

   Selecione uma pasta para instalar o Stride e clique em **Next**.

7. A janela **Criar atalhos de aplicação** abre.

   ![Criar atalhos de aplicação janela](media/install-stride-create-application-shortcuts.png)

   Escolha quais atalhos você deseja que o Stride crie e clique em **Next**.

8. A janela **Ready to Install** abre.

   ![ Pronto para instalar janela](media/install-stride-ready-to-install.png)

   Clique em **Install**.

9. A instalação começa.

   ![ estado de integração](media/install-stride-installation-status.png)

   Depois que o instalador fecha, Stride cria atalhos em locais selecionados e o **Stride Launcher** abre.

   ![Stride Launcher](media/stride-launcher.png)

   O Stride Launcher solicita que você instale a versão mais recente do Stride.

   ![ Nenhuma versão instalada ](media/stride-launcher-install-last-version.png)

   Clique em ** Sim**.

10. O Stride Launcher pergunta se você quer instalar a integração Visual Studio. Isso permite editar shaders diretamente do Visual Studio e fornece destaque sintaxe, análise de código ao vivo com validação, verificação de erros e navegação. Instalar a integração não é obrigatório, mas recomendamos.

   ![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

11. O Windows confirma que o Stride pode fazer alterações no seu computador.

   ![ Pré-requisitos instalador](media/prerequsites-installer2.png)

   Clique em ** Sim**.

12. O Stride Launcher verifica se o pré-requisito **Visual C++ Redistributable** está instalado. Se não estiver instalado, siga as instruções para instalá-lo.

13. O Stride Launcher verifica se o pré-requisito **Build Tools for Visual Studio** está instalado. Se você tem Visual Studio, então isso já está instalado. Se não estiver instalado, siga as instruções para instalá-lo.

   ![Instalando ferramentas de compilação VS](media/installing-vs-build-tools.png)

   > [!Note]
   > O Windows usa o instalador do Visual Studio para instalar **Build Tools for Visual Studio**, mas não instala o Visual Studio.

Stride agora está instalado e pronto para usar.

> [!Note]

> Se você não instalar os pré-requisitos, Stride não funcionará. Neste caso, você pode baixar e instalar os pré-requisitos separadamente. Para obter instruções, veja [Troubleshooting — Stride não executa](../troubleshooting/stride-doesnt-run.md).

> Alternativamente, desinstale Stride, reinicie o instalador Stride e instale os pré-requisitos quando solicitado.

## O que se segue?

* [Stride de lançamento](launch-stride.md)
