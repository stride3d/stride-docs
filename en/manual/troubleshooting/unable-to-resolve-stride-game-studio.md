# NuGet.Config misconfiguration

## Unable to resolve Stride.GameStudio

If you encounter the error:

```
Error: Unable to resolve 'Stride.GameStudio (>= 4.2.0.2381)' for 'net8.0-windows7.0'.

Exception

Could not restore package Stride.GameStudio
at Stride.Core.Packages.NugetStore.InstallPackage(String packageId, PackageVersion version, IEnumerable`1 targetFrameworks, ProgressReport progress)
at Stride.LauncherApp.ViewModels.PackageVersionViewModel.<>c__DisplayClass55_0.<b__0>d.MoveNext()
```

This usually means your NuGet package sources are misconfigured.

## How to fix

1. Locate your NuGet configuration file:
   - `C:\Users\YourUserName\AppData\Roaming\NuGet\NuGet.Config`
2. Make a backup of the file before editing.
3. Open the file and ensure it contains the following lines:
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
        <add key="Stride Dev" value="C:\Users\YourUserName\AppData\Local\Stride\NugetDev" />
      </packageSources>
    </configuration>
    ```
4. Save the file and try restoring packages again.

## The launcher only finds 3.x versions, not 4.x

If the install program (Launcher) only shows Stride 3.x versions and not 4.x, your `NuGet.Config` file is likely missing the `nuget.org` package source.

### How to fix

1. Open your NuGet configuration file:
   - `C:\Users\YourUserName\AppData\Roaming\NuGet\NuGet.Config`
2. Make a backup before editing.
3. Ensure your `NuGet.Config` contains at least the following:
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
      </packageSources>
    </configuration>
    ```
4. Save the file and restart the Launcher.

You should now see the latest Stride 4.x versions available for installation.