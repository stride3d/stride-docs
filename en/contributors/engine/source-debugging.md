#Setting Up Source Debugging in VS
First, make sure source debugging external dependencies is enabled:

* Make sure ["Debug Just My Code" is disabled](https://docs.microsoft.com/en-us/visualstudio/debugger/just-my-code?view=vs-2019), in Tools -> Options -> Debugging.


Stride builds the PDB files right into the normal `.nupkg` files. When debugging a public release, SourceLink should cause Visual Studio to download source files right from github when stepping into them.

Because of the way Visual Studio tracks down source files while stepping, [one can't Goto-Definition for types in dependencies in VS Community](https://stackoverflow.com/questions/13203346/go-to-definition-in-visual-studio-only-brings-up-the-metadata-for-non-project). The workaround is to first step into the dependency to get the source loaded. Alternatively, one can pay for .NET Reflector, VSPro, or Resharper, which fix this in Visual Studio.

* [Set symbol (.pdb) and source files in the debugger - Visual Studio | Microsoft Docs](https://docs.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger?view=vs-2019)


One day it might be nice to support `.snupkg` or `.source.nupkg` files, so the base packages could be smaller. However, it's not a big deal.
* [Creating SourceLens symbol packages](https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg)
* [Source Link and .NET libraries | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/library-guidance/sourcelink)
* [How to Debug a .NET Core NuGet Package](https://geeklearning.io/how-to-debug-a-net-core-nuget-package/)



## Related Discussions
- https://github.com/stride3d/stride/discussions/1116




