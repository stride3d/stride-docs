# Graphics API
To run your projects through a different API than the default one, add the following line to the `PropertyGroup` of your executable's `.csproj` file:

`<StrideGraphicsApi>Vulkan</StrideGraphicsApi>`

![image](https://user-images.githubusercontent.com/5742236/155832596-48165499-51ac-4026-9140-30b35dfa4f0b.png)

Supported values are as follows:
```
Null
Direct3D11
Direct3D12
OpenGL
OpenGLES
Vulkan
```

You *may* also have to add `<PackageReference Include="Stride.Shaders.Compiler" Version="x.x.x.x" />` to your *main* `.csproj`, and don't forget to replace `Version` appropriately.

![image](https://github.com/stride3d/stride/assets/5742236/fbe35875-fb07-4f2f-ae8a-e9ea34eed471)

## Engine
If you are using a local build of the engine you should run the build again with the following command:

`msbuild /t:Build /p:StrideGraphicsApiDependentBuildAll=true Stride.sln`
