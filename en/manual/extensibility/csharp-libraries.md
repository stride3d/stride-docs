# C# Libraries

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

If you want to share code between multiple projects, or create reusable components, you can create a C# library and reference it in your Stride project.

If your library is utilising @Stride.Core.DataContractAttribute, you need to follow additional steps to make it work with Stride.

1. Add a Module initializer to your library. This will register your library with Stride's serialization system. Example `Module.cs`:

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
1. If you are creating also NuGet packages for your library, these NuGet packages have to be re-compiled with latest version of Stride NuGet packages. 