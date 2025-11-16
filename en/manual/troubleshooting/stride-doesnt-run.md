# Stride doesn't run

## Prerequisites

If you're having trouble running Stride, make sure you've installed all the prerequisites:

* .NET SDK 10.0
* Visual C++ Redistributable 2022 (or later)
* .NET Framework 4.7.2 (required for the Visual Studio plugin)
* Visual Studio or Build Tools (optional but recommended)

Alternatively, uninstall Stride, restart the Stride installer, and install the prerequisites when prompted.

### .NET SDK 10.0

.NET SDK 10.0 should have been installed by Stride prerequisite installer, if Visual Studio 2026 didn't do it previously.

If for some reason you need to install it manually, you can use [this link](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) and select the latest .NET SDK 10.0 for Windows.

### Visual C++ Redistributable 2019 (or later)

To check if this is installed, see **Control Panel > Programs > Programs and Features** and look for **2015-2019 Redistributable**.

![Programs and features](media/programs-and-features-redistributable.webp)

If it's not installed, you can download the Redistributable from [Visual Studio Downloads](https://visualstudio.microsoft.com/downloads/) (under **Other Tools, Frameworks, and Redistributables**). Make sure to install both **x86** and **x64** versions.

> [!NOTE]
> If you see **2015-2022 Redistributable** instead, it's ok. Since 2015, they are cumulative. Just make sure the last year is at least 2019.

### .NET Framework 4.7.2 (or later)

To check if this is installed, follow the instructions on [this page](https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/how-to-determine-which-versions-are-installed).

If it's not installed, you can download it from the [Microsoft Download Center](https://dotnet.microsoft.com/en-us/download/dotnet-framework).

> [!NOTE]
> If you have .NET 4.8 installed, you don't need to install .NET 4.7.2. Each 4.x version is cumulative.

### Visual Studio 2026 (optional)

If you have Visual Studio 2026 (or later) installed, you need to have the following workloads and/or components installed:
* **.NET desktop development** with **Development tools for .NET** optional component enabled.

> [!NOTE]
> Earlier versions might work with older version of Stride. However, for Stride 4.3 and later you only need to have .NET SDK 10.0 installed.

### Build Tools for Visual Studio 2026 (optional)

If you **don't** have Visual Studio installed and don't want to install it, you can install **Build Tools for Visual Studio** instead. You can download this from [Visual Studio Downloads](https://visualstudio.microsoft.com/downloads/) (under **Tools for Visual Studio**).

You need to have the following workloads and/or components installed:
* **.NET desktop build tools** with **.NET SDK** optional component enabled.

> [!NOTE]
> If you don't need Visual Studio, don't worry – it doesn't install it.
> ![Installing VS build tools](../get-started/media/installing-vs-build-tools.webp)

## See also

* [Install Stride](../get-started/install-stride.md)
