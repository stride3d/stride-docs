# Requirements

![Requirements](media/requirements.png)

To develop projects with Stride, you need:

| Requirement     | Specifications 
|-----------------|----------------
|Hard drive space | 5GB
| Operating system | Windows 10, 11 *[see (1)]*
| IDE for writing code | Visual Studio 2022
| CPU | x64
| GPU | Direct3D 10+ compatible GPU
| RAM | 4GB (minimum), 8GB (recommended) *[see (2)]*

(1) Earlier versions of Windows _may_ work but are untested.

(2) RAM requirements vary depending on your project:
* Developing simple 2D applications doesn't require much RAM.
* Developing 3D games with lots of assets requires larger amounts of RAM.


## Mobile development

To develop for mobile platforms, you also need:

| Platform | Requirements
|----------|-------
| Android  | Xamarin *[see (3)]*
| iOS      | Mac computer, Xamarin *[see (3)]*

(3) Xamarin is included with Visual Studio installations. For instructions about how to install Xamarin with Visual Studio, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

For information about platforms Stride supports, see [Platforms](../platforms/index.md).

## Run games made with Stride

To run games made with Stride, you need:

- .NET 6
- DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan
- Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)
