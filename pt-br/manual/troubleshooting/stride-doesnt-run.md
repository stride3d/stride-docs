# O Stride não funciona

## Pré-requisitos

Se você está tendo problemas em executar Stride, certifique-se de ter instalado todos os pré-requisitos:

* .NET Framework 4.7.2
* Visual C++ Redistributável 2019
* Ferramentas de construção para Visual Studio

Alternativamente, desinstale Stride, reinicie o instalador Stride e instale os pré-requisitos quando solicitado.

### .NET Framework 4.7.2

Para verificar se isso é instalado, consulte **Control Panel > Programas > Programas e Assets** e procure uma entrada contendo **. NET 4.7.2**.

![Programas e características](media/programs-and-features.png)

Se não estiver instalado, você pode baixá-lo do [Microsoft Download Center](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer).

> [!Note]
> Se você instalar o Visual Studio, certifique-se de instalar também o suporte .Net Framework. Apenas a instalação da base do Visual Studio não é suficiente.

### Visual C++ Redistributável 2019

Para verificar se isso é instalado, consulte **Control Panel > Programas > Programas e Assets** e procure **2015-2019 Redistributável**.

![Programas e características](media/programs-and-features-redistributable.png)

Se não estiver instalado, você pode baixar o Redistributable 2019 de [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (em **Outras ferramentas e quadros**).


### Visual Studio (apenas para versão .NET Framework)

Se você tiver o Visual Studio 2019 instalado, você precisa ter as seguintes cargas de trabalho e / ou componentes instalados:
* **. Desenvolvimento de desktop NET**
* **.NET core cross-platform development**, com **.NET Core 2.1 Runtime (LTS)** componente opcional habilitado.

Além disso, se ainda tiver o Visual Studio 2017 instalado, deve ser a versão 15.9+.

### Ferramentas de compilação para Visual Studio (apenas para versão .NET Framework)

Se você **don't** tiver Visual Studio instalado e não quiser instalá-lo, você precisa instalar **Build Tools for Visual Studio**. Você pode baixar isso de [Visual Studio Downloads](https://www.visualstudio.com/downloads/) (em **Outras ferramentas e quadros**).

> [!Note]
> O Windows usa o instalador do Visual Studio para instalar o Visual C++ Redistributable e Ferramentas de Construção para pré-requisitos do Visual Studio. Se você não precisa do Visual Studio, não se preocupe – ele não o instala.
> ![Instalando ferramentas de construção VS](../get-started/media/installing-vs-build-tools.png)

### .NET SDK 5.0 (apenas para versão .NET)

.NET SDK 5.0 deve ter sido instalado pelo instalador pré-requisito Stride, se o Visual Studio 2019 não o fez anteriormente.

Se por alguma razão você precisa instalá-lo manualmente, você pode usar [this link](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-5.0.101-windows-x64-installer).

## Ver também

* [Instalar o Stride](../get-started/install-stride.md)