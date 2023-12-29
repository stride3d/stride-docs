# Development Requirements

## General requirements 

To develop projects with Stride, you need:

| Requirement     | Specifications 
|-----------------|----------------
| Hard drive space | 5GB
| Operating system | Windows 10, 11 <small class="text-secondary">[see (1)]</small>
| CPU | x64
| GPU | Direct3D 10+ compatible GPU
| RAM | 4GB (minimum), 8GB (recommended) <small class="text-secondary">[see (2)]</small>

(1) Earlier versions of Windows _may_ work but are untested.

(2) RAM requirements vary depending on your project:
* Developing simple 2D applications doesn't require much RAM.
* Developing 3D games with lots of assets requires larger amounts of RAM.


## Mobile development requirements 

To develop for mobile platforms, you also need:

| Platform | Requirements
|----------|-------
| Android  | Xamarin <small class="text-secondary">[see (3)]</small>
| iOS      | Mac computer, Xamarin <small class="text-secondary">[see (3)]</small>

(3) Xamarin is included with Visual Studio installations. For instructions about how to install Xamarin with Visual Studio, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

## Running Stride Games

To run games made with Stride, you need:

- .NET 6 if your application is not [self-contained](https://learn.microsoft.com/en-us/dotnet/core/deploying/#publish-self-contained)
- DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan depending on the platform, and the graphics API override set in your `.csproj`
- Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)

## Supported Platforms

For information about platforms Stride supports, see [Platforms](../platforms/index.md).
