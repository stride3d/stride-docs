# Shading language

This section of the documentation will take you through many concepts present in SDSL.

SDSL is based on [HLSL](https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl) — Microsoft's proprietary shading language. While HLSL is meant to resemble the C syntax, SDSL brings many additions in order to be more similar to C#.

Here are the key benefits of SDSL over HLSL:

* **Extensibility** - SDSL lets you extend shaders by using object-oriented programming concepts such as classes, inheritance, and composition.
* **Modularity** - instead of creating large and complex shaders that do many things, you can create small easily-manageble bits and combine them.
* **Reusability** - you are able to reuse code between shaders, just like you could with C# scripts.
* **Smaller size** - SDSL removes a lot of the boilerplate that is typically required when writing HLSL code.
