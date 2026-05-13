# Graphics API

Graphics APIs are responsible for performing basic rendering operations. They differ in platform availability and have their own benefits and drawbacks.

## Changing Graphics API

To change the Graphics API that your project is using, add the following line to the `PropertyGroup` of a [platform package's](../files-and-folders/project-packages/index.md#platform-packages) `.csproj` file:

`<StrideGraphicsApi>NameOfGraphicsAPIHere</StrideGraphicsApi>`

![image](https://user-images.githubusercontent.com/5742236/155832596-48165499-51ac-4026-9140-30b35dfa4f0b.png)

Stride supports the following values:

* Direct3D11
* Direct3D12
* Vulkan
* OpenGLES
* Null

## Supported Graphics APIs

### Direct3D11

**Available on platforms:** Windows

Direct3D is a graphics API developed by Microsoft for Windows. Stride's implementation for version 11 is the most mature one out of all, which is why it's used as the default.

### Direct3D12

**Available on platforms:** Windows

Version 12 of Direct3D is the newest version of the API. Currently, Stride's implementation for it isn't as stable as the one for 11, which is why it isn't used as default.

### Vulkan

**Available on platforms:** Windows, Linux, Android

Vulkan is a modern graphics API that provides great performance benefits and control over how rendering is done. It's the most recommended choice for **Linux**.

### OpenGLES

**Available on platforms:** Windows, Linux, Android

OpenGLES is a subset of OpenGL designed for embedded systems (such as smartphones).

## Checking the API at runtime

You can check which API your project is using from [`GraphicsDevice.Platform`](xref:Stride.Graphics.GraphicsDevice.Platform).

## Building the engine with a different Graphics API

When building the engine from source code, it will be built with support for only `Direct3D11`. You can change that using build parameters by setting `StrideGraphicsApiDependentBuildAll` to true.

```bash
dotnet build ./build/Stride.sln /p:StrideGraphicsApiDependentBuildAll=true
```

## See also

* [Platforms](../platforms/index.md)
* [Project structure](../files-and-folders/project-structure.md)
* [Project packages](../files-and-folders/project-packages/index.md)
