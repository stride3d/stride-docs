# Requirements
# Требования

![Requirements](media/requirements.png)
![Требования](media/requirements.png)

To develop projects with Stride, you need:
Для разработки проектов со Stride вам необходимо:

| Requirement     | Specifications 
|  Требование |  Характеристики
|-----------------|----------------
|-----------------|----------------
|Hard drive space | 5GB
|Место на жестком диске |  5 ГБ
| Operating system | Windows 7, 8.1, 10 
|  Операционная система |  Виндовс 7, 8.1, 10
| IDE for writing code | Visual Studio 2019
|  IDE для написания кода |  Визуальная студия 2019
| CPU | x64
|  процессор |  x64
| GPU | Direct3D 10+ compatible GPU
|  графический процессор |  Графический процессор, совместимый с Direct3D 10+
| RAM | 4GB (minimum), 8GB (recommended) 
|  ОЗУ |  4 ГБ (минимум), 8 ГБ (рекомендуется)

RAM requirements vary depending on your project:
Требования к оперативной памяти зависят от вашего проекта:

* Developing simple 2D applications doesn't require much RAM.
* Для разработки простых 2D-приложений не требуется много оперативной памяти.
* Developing 3D games with lots of assets requires larger amounts of RAM.
* Для разработки 3D-игр с большим количеством ресурсов требуется больший объем оперативной памяти.

## Mobile development
## Мобильная разработка

To develop for mobile platforms, you also need:
Для разработки под мобильные платформы также необходимо:

| Platform | Requirements
|  Платформа |  Требования
|----------|-------
|----------|-------
| Android  | Xamarin* 
|  Андроид |  Ксамарин*
| iOS      | Mac computer, Xamarin* 
|  iOS |  Компьютер Mac, Xamarin*

> [!Note]
> [!Примечание]
> * Xamarin is included with Visual Studio licenses. For instructions about how to install Xamarin with Visual Studio 201, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).
> * Xamarin включен в лицензии Visual Studio.  Инструкции по установке Xamarin с Visual Studio 201 см. на [этой странице MSDN](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

For information about platforms Stride supports, see [Platforms](../platforms/index.md).
Для получения информации о поддерживаемых Stride платформах см. [Платформы](../platforms/index.md).

## Run games made with Stride
## Запускать игры, созданные с помощью Stride

To run games made with Stride, you need:
Для запуска игр, созданных с помощью Stride, вам необходимо:

- .NET 4.6.1
- .NET 4.6.1
- DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan
- DirectX11 (входит в состав Windows 10 и более поздних версий), OpenGL или Vulkan
- Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)
- Среды выполнения Visual C++ 2015 (x86 и/или x64, в зависимости от того, что вы установили в свойствах проекта в Visual Studio)
