# Install the editor using Wine

<span class="badge text-bg-primary">Intermediate</span>

Even though you can compile and run Stride games on Linux, the editor remains Windows-exclusive, due to using WPF as its UI framework. However, starting with version `4.4.0-beta5`, it is now possible to use the editor on Linux using a compatibility layer, such as Proton.

> [!NOTE]
> The editor is being rewritten to be cross-platform.

> [!WARNING]
> Running **Game Studio** through a compatibility layer is **not supported!** Expect to run into issues along the way.

## Limitations

* You may experience **graphical glitches** in the editor.
* An **update** to the engine **may break your setup**.
* **Building from the editor doesn't work.** You will have to test your game by building it natively.
* The command `stride studio` won't be able to open the editor.

## Preamble

Although it is possible to run **Game Studio** using **Wine**, the experience is far better on **Proton**. In this guide, we will be using `ge-proton11-5` which is the latest version of **GE-Proton** as of writing.

Additionally, this guide will provide **detailed instructions for [Bottles](https://usebottles.com/)** — a Wine/Proton manager. If you wish to use a **different application** such as [UMU Launcher](https://github.com/Open-Wine-Components/umu-launcher) or [Heroic Game's Launcher](https://heroicgameslauncher.com/), **the general steps should still apply**.

## Prerequisites and preparation

Before getting started, ensure your Linux system is ready.

1. **Install *Bottles*.** You can download it from [flathub](https://flathub.org/en/apps/com.usebottles.bottles).
2. **Install Linux prerequisetes.** To learn more, visit [Setup and requirements](setup-and-requirements.md).
3. **Install .NET 10 SDK for Linux.** Download and install the latest Long-Term Support (LTS) version of .NET (currently .NET 10). See [Install .NET on Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux?WT.mc_id=dotnet-35129-website) for more information.
4. **Install Stride.CLI.** This tool will allow you to manage different versions of the engine on your Linux machine, without the use of a launcher.
    
    ```bash
    dotnet tool install -g stride.cli # Install the CLI tool
    ```
    
    For more information about the Stride CLI tool, visit [Stride CLI](../../get-started/stride-cli.md)

Additionally, you will have to download a few **Windows** applications.

1. **Download the .NET 10 SDK installer for Windows.** We will have to install it using the compatibility layer in order for Game Studio to work. You can get it from [this page](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-10.0.400-windows-x64-installer).
2. **Download the Stride installer.** We only actually need it for installing Stride's Windows prerequiseties. You can get it from [the official website](http://stride3d.net/download/).

## Installation steps

1. **Install a Proton runner.** Open *Bottles* and install *Proton* by going to **Menu (located in the top right corner) > Preferences > Runners**. In this guide, we will be using `ge-proton11-5`, but we generally recommend sticking with the latest version.
    
    ![](media/bottles-download-proton.webp)
    
    > [!NOTE]
    > You can always change the version of Proton/Wine later.

2. **Create a new prefix.** You can do this in *Bottles* by pressing the **➕ button** in the top left corner.

    ![](media/bottles-create-bottle.webp)

    Give your bottle (prefix) a **name** and make sure to **select the correct Proton runner**.

    ![](media/bottles-create-bottle-properties.webp)

    After the bottle finishes being created, click it to enter it.

    ![](media/bottles-enter-bottle.webp)

3. **Run the .NET 10 SDK installer for Windows using Proton.** In *Bottles*, click **▶️ Run Executable...** and select the `.exe` file for the SDK installer. If you missed this step in [prerequiseties](#prerequisites-and-preparation), you can get the installer from [this page](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-10.0.400-windows-x64-installer).

    ![](media/bottles-run-executable.webp)

    Follow the on-screen instructions to complete the installation.

    ![](media/proton-dotnet-installer.webp)

4. **Run the Stride installer.** In *Bottles*, click **▶️ Run Executable...** and select the `StrideSetup.exe` file. If you missed this step in [prerequiseties](#prerequisites-and-preparation), you can get the installer from [this page](http://stride3d.net/download/).

    ![](media/bottles-run-executable.webp) 

    Follow the on-screen instructions until the installation **succeeds or crashes** (it should be okay as long as it managed to install the prerequiseties).

    ![](media/proton-stride-installer.webp)

5. **Install the engine on your system.** [Stride CLI](../../get-started/stride-cli.md) lets you manage installations of the engine directly through the command line. We will use it in order to download the editor application.

    ```bash
    # Install the latest version (including betas)
    stride sdk install --prerelease
    ```

6. **Create a symlink with the system nuget cache.** The editor needs access to the nuget cache folder. In most Linux distributions, its located in `~/.nuget`.

    For *Bottles*, click the button next to **Browse C:/ drive** and locate your user folder (should be in `drive_c/users/<nameOfUser>`).

    ![](media/bottles-find-user-folder.webp)

    Open the terminal in your user folder and create a symlink with the following command:

    ```bash
    ln -s ../../../path/to/system/user/folder/.nuget .nuget
    ```

    > [!WARNING]
    > For *bottles* and all *flatpak* applications, the symlink needs to be **relative!**

7. **Install required nuget packages.** We will also have to download a few packages to the cache. The easiest way of doing this is to:

    * Create a new C# project
    
        ```bash
        dotnet new classlib -n StrideProtonFix && cd StrideProtonFix
        ```

    * Edit the `.csproj` file and add references to the packages

        ```xml
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

    * Build the project

        ```bash
        dotnet build StrideProtonFix.csproj
        ```

8. **Make sure `icu.dll` and `icuuc.dll` are using Windows versions.** While making this guide, we noticed that our prefix would try using Linux versions of the afformentioned DLLs, which would crash **Game Studio** on launch. This problem **may be exclusive to the version of Proton we were using**, so this step might not be necessary for you.

    In *Bottles*, go to **Settings > Compatibility > DLL Overrides** and add `icu.dll` and `icuuc.dll` to the list. You can now set their overrides to **Native (Windows)**.

    ![](media/bottles-dll-overrides.webp)

9. **Launch Game Studio.** Finally, we can launch the editor using our prefix.

    In *Bottles*, click the **➕ Add shortcuts...** button and **select the Game Studio executable** from `drive_c/users/<nameOfUser>/.nuget/packages/stride.gamestudio/<engineVersion>/tools/net10.0-windows7.0/Stride.GameStudio.exe`.

    > [!TIP]
    > Change the name of the shortcut to include the engine version in order to not loose track.

You should now be up-and-running. If the editor is still not working for you, go check out [Troubleshooting](#troubleshooting).

## Troubleshooting

As stated previously, **this way of using the engine isn't supported**, so you might run into some problems. Here are a few of them with solutions/workarounds:

### There is a hidden window

You might encounter this problem when using multiple displays with different scalling. As a workaround, you can **enable virtual desktop**, which will create a fake desktop environment for the window.

In *Botles*, you can do this by going to **Settings > Display > Advanced Display Settings > Virtual Desktop**. This can also be adjusted per-shortcut.

### `StrideSetup.exe` crashed before finishing

As mentioned in the [installation steps](#installation-steps), **this shouldn't cause any issues**, as long as it managed to install the prerequiseties.

### Game Studio says to install the `.NET Runtime`

This might mean that either:
* You **missed a step** during [installation](#installation-steps) and **didn't run the .NET SDK setup**.
* You need to **run the setup for a newer version of .NET**
* Game Studio **isn't detecting .NET due to the version of Proton/Wine** you are using.

To fix this, you will have to either **re-run the Windows .NET SDK installer**, **try installing a newer version of the Windows .NET SDK** or **try changing the runner your prefix is using**.

### Game Studio crashes on launch

There could be a lot of reasons to why this happens, so it's better to try running Game Studio from the command line.

In *Bottles*, go to **Tools > Command Line** and try launching Game Studio with the following command.

```powershell
dotnet drive_c\users\<nameOfUser>\.nuget\packages\stride.gamestudio\<engineVersion>\tools\net10.0-windows7.0\Stride.GameStudio.dll
```

#### `Can't recognize 'dotnet' as an internal or external command`

This means that your prefix doesn't have the .NET 10 runtime installer.

To fix this, try re-running the **Windows .NET SDK installer** as shown in the [installation steps](#installation-steps).

#### Errors related to `.dll` files

This might be caused by Game Studio trying to use native Linux versions of some libraries, instead of the Windows ones. You will have to **override those DLLs and set them to explicitly use the Windows version**.

In *Bottles*, go to **Settings > Compatibility > DLL Overrides** and add the broken DLLs to the list. You can now set their overrides to **Native (Windows)**.

![](media/bottles-dll-overrides.webp)

> [!NOTE]
> Make sure to restart the terminal before trying again!

#### It magically works!

This means that Game Studio can't detect the .NET runtime, likely caused by the runner your prefix is using. Try changing to a different version and retry.

### My problem isn't listed here

In that case, you can do the following:
* Try changing the runner your prefix is using.
* Try asking on the [Stride discord](https://discord.gg/f6aerfE) for help — someone might have experienced the same problem.
* Retry the guide with a fresh prefix.
