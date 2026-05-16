# Graphics API

**Graphics APIs** are responsible for performing basic rendering operations. They differ in platform availability and have their own benefits and drawbacks.

## Supported graphics APIs

Stride has support for the following APIs:

### Direct3D11

**Available on platforms:** Windows

Direct3D is a graphics API developed by Microsoft. Stride's implementation for version 11 is the most mature, which is why it's used as the default on Windows.

### Direct3D12

**Available on platforms:** Windows

Version 12 of Direct3D is the newest release of the API. Currently, Stride's implementation for it isn't as stable as the one for 11, which is why it isn't used by default.

### Vulkan

**Available on platforms:** Windows, Linux, MacOS, Android, iOS

Vulkan is a modern graphics API that provides great performance benefits and control over how rendering is performed. It's used as the default on non-Windows platforms.

## Changing the graphics API

To change the graphics API used by your project, add the following line to the `PropertyGroup` of a [platform package's](../files-and-folders/project-packages/index.md#platform-packages) `.csproj` file:

```xml
<StrideGraphicsApi>NameOfGraphicsAPIHere</StrideGraphicsApi>
```

![](media/graphics-api-xml-property.webp)

Stride supports the following values:

* Direct3D11
* Direct3D12
* Vulkan
* Null

## Checking the API at runtime

You can check which API your project is using from [`GraphicsDevice.Platform`](xref:Stride.Graphics.GraphicsDevice.Platform).

```csharp
public override void Update()
{
    DebugText.Print($"Graphics API: {GraphicsDevice.Platform}", new(50, 50));
}
```

## Building the engine with a different API

When building the engine from source code, it will be built with support only for the default API for your OS. You can change that by setting `StrideGraphicsApiDependentBuildAll` to `true` in build parameters.

```bash
msbuild -p:StrideGraphicsApiDependentBuildAll=true ./build/Stride.sln
```

To only build selected api's, set the `StrideGraphicsApis` property to your desired value.

### [Powershell](#tab/powershell)

```powershell
msbuild -p:StrideGraphicsApis=`"Api1`;Api2`" ./build/Stride.sln
```

### [Bash](#tab/bash)

```bash
msbuild -p:StrideGraphicsApis=\"Api1\;Api2\" ./build/Stride.sln
```

---

## See also

* [Platforms](../platforms/index.md)
* [Project structure](../files-and-folders/project-structure.md)
* [Project packages](../files-and-folders/project-packages/index.md)
