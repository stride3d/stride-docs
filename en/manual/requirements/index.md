# Requirements

![Requirements](media/requirements.png)

To develop projects with Stride, you need:

| Requirement     | Specifications 
|-----------------|----------------
|Hard drive space | 5GB
| Operating system | Windows 7, 8.1, 10 
| IDE for writing code | Visual Studio 2019
| CPU | x64
| GPU | Direct3D 10+ compatible GPU
| RAM | 4GB (minimum), 8GB (recommended) 

RAM requirements vary depending on your project:

* Developing simple 2D applications doesn't require much RAM.
* Developing 3D games with lots of assets requires larger amounts of RAM.

## Mobile development

To develop for mobile platforms, you also need:

| Platform | Requirements
|----------|-------
| Android  | Xamarin* 
| iOS      | Mac computer, Xamarin* 

> [!Note]
> * Xamarin is included with Visual Studio licenses. For instructions about how to install Xamarin with Visual Studio 201, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

For information about platforms Stride supports, see [Platforms](../platforms/index.md).

## Run games made with Stride

To run games made with Stride, you need:

- .NET 4.6.1
- DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan
- Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)
