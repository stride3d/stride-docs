# C# Libraries

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

If you want to share code between multiple projects or create reusable components, you can create a C# library and reference it in your Stride project.

If your library uses the @Stride.Core.DataContractAttribute and you want to reference it through a **NuGet** package, there are additional steps required to make it compatible with Stride.

## Adding a Module Initializer

First, add a module initializer to your library. This ensures your library is properly registered with Stride's serialization system.

Example `Module.cs`:

```csharp
using Stride.Core.Reflection;
using System.Reflection;

namespace MyProjectName;

internal class Module
{
    [ModuleInitializer]
    public static void Initialize()
    {
        AssemblyRegistry.Register(typeof(Module).GetTypeInfo().Assembly, AssemblyCommonCategories.Assets);
    }
}
```

## Updating to the Latest Stride NuGet Packages

If your library references any Stride NuGet packages, you must recompile it with the latest version of those packages. This ensures compatibility with the current Stride ecosystem.

## About the Module Initializer Attribute

The `ModuleInitializer` attribute is now generated using a Roslyn source generator. This means the file `sources/core/Stride.Core.CompilerServices/Generators/ModuleInitializerGenerator.cs` must run during your code's compilation. Otherwise, the module initializer and potentially other source generators added in the future will not function correctly.