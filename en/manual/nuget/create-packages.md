# Create packages

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

## Open your project in Visual Studio

First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

A few things to look out for:
* Delete unnecessary assets (i.e. GameSettings, etc...)
* Delete unnecessary `PackageReference`

## Optional: Setup Package properties

1. In the **Solution Explorer**, right-click on the project and click on **Properties**.

2. Go to the **Package** tab and edit Package version, description, URL, etc.

   ![Setup package properties](media/setup-package-properties.png)

## Pack

1. In the **Solution Explorer**, right-click on the project and click on **Pack**.

   ![Pack project](media/pack-project.png)

2. Visual Studio will build and pack the project. The resulting `.nupkg` should be in `bin\Debug` or `bin\Release` folder, depending on your configuration.

## Publish

You can now publish the `.nupkg` file on a NuGet repository such as [nuget.org](https://nuget.org).

There is several ways to do that: `nuget.exe` client, `dotnet.exe` client or [nuget.org Upload Package](https://www.nuget.org/packages/manage/upload)

For additional information, please reference to [Publishing packages](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package) in NuGet documentation.

Once your package is properly listed, it can now be [consumed](consume-packages.md) by other Stride users!
