# Install Stride (Wine)

<span class="badge text-bg-primary">Intermediate</span>

> [!IMPORTANT]
> While Stride Engine offers support for running game projects on Linux (runtime), GameStudio is a WPF application that is currently only officially supported on Windows. The experience when running it via Wine may vary, and the performance, stability and functionality of the emulated application **are not guaranteed.**


This guide outlines a robust process for setting up the Stride development environment on Linux, utilizing Wine to run the Windows-based game editor - GameStudio.


# Prerequisites and Preparation

Before getting started, ensure your Linux system is ready.

1.  **Install Wine:** Ensure Wine is properly installed on your Linux distribution. We'll need it to launch the [GameStudio](../game-studio/index.md) app.
2.  **Install .NET 10 SDK for Linux:** Download and install the latest Long-Term Support (LTS) version of .NET (currently .NET 10). See [Install .NET on Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux?WT.mc_id=dotnet-35129-website) for more information.
3.  **Install Stride.CLI:** This tool allows you to download Stride NuGet packages on any operating system. 
```bash 
    dotnet tool install --global Stride.Cli;
    stride sdk install --prerelease; # Installs the latest Stride nuget packages (at least 4.4.0-beta5 is required)
```
Once Stride.CLI is fully installed, you'll be able to create and run your games **from the terminal**.

## Install Stride.Launcher using Wine

We will install the necessary components within a specific Wine prefix to keep the environment organized.

1. Download the Stride Installer from the [Stride website](http://stride3d.net/download/) and use Wine to install `StrideSetup.exe` into your designated Wine prefix.
```bash
    wine StrideSetup.exe
```

2.  **Install the latest LTS .NET SDK for [Windows](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-10.0.400-windows-x64-installer):** Crucially, the .NET 10 SDK must be installed within the **exact same Wine prefix** that the `Stride.Launcher.exe` is using.
```bash
    wine <path_to_dotnet_windows_installer.exe>
```

## Resolve NuGet-related Certificate Errors

> [!IMPORTANT]
> 
> Due to unknown package validation, the initial installation of Stride components via the launcher is almost guaranteed to fail with an "unknown NuGet CA certificate validation error."
> ![](media/stride-wine-error.webp)


The following steps are the necessary manual workaround to force the required dependencies into the Wine environment.


### Download Required Packages

1. On your native Linux machine, create a new Console Application.
2. Add the following packages to the project's .csproj file:
    *(Note: These packages are required to satisfy the dependencies of the Stride.GameStudio within the Wine prefix.)*

```xaml
<ItemGroup>
    <PackageReference Include="runtime.any.System.Runtime" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.IO" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.Diagnostics.Debug" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Reflection.Primitives" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Diagnostics.Tools" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Text.Encoding.Extensions" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Globalization.Calendars" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Globalization" Version="4.3.0" />
    <PackageReference Include="runtime.win.Microsoft.Win32.Primitives" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.Net.Primitives" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.Console" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Reflection.Extensions" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.Runtime.Extensions" Version="4.3.0" />
    <PackageReference Include="System.Security.Principal.Windows" Version="4.3.0" />
    <PackageReference Include="System.Private.Uri" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Text.Encoding" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Runtime.Handles" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Reflection" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Resources.ResourceManager" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.Net.Sockets" Version="4.3.0" />
    <PackageReference Include="System.Net.NameResolution" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Threading.Timer" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Threading.Tasks" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Diagnostics.Tracing" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Collections" Version="4.3.0" />
    <PackageReference Include="runtime.any.System.Runtime.InteropServices" Version="4.3.0" />
    <PackageReference Include="System.Security.Claims" Version="4.3.0" />
    <PackageReference Include="runtime.win.System.IO.FileSystem" Version="4.3.0" />
</ItemGroup>
```

3. Restore Packages by building the test application (`dotnet build`). This process forces NuGet to download all listed dependencies into your local Linux `.nuget/packages` folder.

### Link Packages into Wine

Symbolic links allows the Wine application to access the packages directly from your Linux system without having to duplicate massive directories. Imagine this as an advanced shortcut for accessing files.

1. Navigate to the expected NuGet location within your Wine prefix and remove the existing `.nuget/packages` directory (if it exists and is empty, this is safe).

2. Run the following command in your Linux terminal, ensuring the source path (your actual cache) is the target of the link, and the Wine path is where the link is placed
```bash
ln -s ~/.nuget/packages ~/.wine/drive_c/users/<your_user>/.nuget/packages
```


After this process is complete, try to open the Stride.Launcher.exe via Wine. The launcher should now be able to resolve dependencies locally within the prefix and the Stride components should appear and be runnable.
