# Unable to resolve Stride.GameStudio

You might have misconfigured your `NuGet.Config` file.

1. Locate the file `C:\Users\YourUserName\AppData\Roaming\NuGet\NuGet.Config`
1. Backup the file
1. Update or check that it contains the following lines:
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
        <add key="Stride Dev" value="C:\Users\YourUserName\AppData\Local\Stride\NugetDev" />
      </packageSources>
    </configuration>
    ```

The error:

```
Error: Unable to resolve 'Stride.GameStudio (>= 4.2.0.2381)' for 'net8.0-windows7.0'.

Exception

Could not restore package Stride.GameStudio
at Stride.Core.Packages.NugetStore.InstallPackage(String packageId, PackageVersion version, IEnumerable`1 targetFrameworks, ProgressReport progress)
at Stride.LauncherApp.ViewModels.PackageVersionViewModel.<>c__DisplayClass55_0.<b__0>d.MoveNext()
```
