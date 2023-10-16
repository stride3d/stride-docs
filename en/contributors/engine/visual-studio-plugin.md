The Stride Visual Studio Plugin adds:
* syntax highlighting for Stride `.sdsl` shaders  (formerly `.xlsl`)
* generates shader key files (`.sdsl.cs`) which create type definitions and ParameterKey values for the shader parameters
* generates shader effect files (`.sdfx.cs`)

Whenever you edit a shader file, the plug-in recompiles the C# key and effect files, so your C# code can reference elements necessary for your shader.

The code generation happens by looking at your game version
loading the Shader Compiler dependency in the game build, and running the shader compiler.


The Visual Studio Plugin Code lives in: https://github.com/stride3d/stride/tree/master/sources/tools/Stride.VisualStudio.Package


Install the Stride Visual Studio extension by using the button in the Stride Launcher:

<img src="../media/visualstudio-plugin.jpg" alt="Stride.Core methods">

You can check that the Stride Visual Studio plugin is installed in Visual Studio by going to Extensions-> Manage Extensions, and looking for the Stride Extension.

<img src="../media/vsplugin-manage-extensions.jpg" alt="Stride.Core methods">

<img src="../media/vsplugin-install.jpg" alt="Stride.Core methods">
