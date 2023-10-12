# Variáveis de pré-processamento

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Se você está desenvolvendo para várias plataformas, muitas vezes você precisa escrever código personalizado para cada plataforma. Na maioria dos casos, a melhor maneira de fazer isso é usar [Platform.Type](xref:Stride.Core.Platform.Type) e [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). Alternativamente, você pode usar variáveis **preprocessor**.

> [!Warning]
> Recomendamos que você evite usar variáveis de pré-processador sempre que possível, e em vez disso use [Platform.Type](xref:Stride.Core.Platform.Type) e [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform). Isso é porque você pode perder erros em seu código, pois apenas o código para sua plataforma de destino é verificado no tempo de compilação.

## Plataformas

| Variável | Valor |
| -------------------------------------- | ------------------------------ |
| STRIDE_PLATFORM_WINDOWS | Windows (padrão e RT) |
| STRIDE_PLATFORM_WINDOWS_DESKTOP | Windows (não-RT) |
| STRIDE_PLATFORM_WINDOWS_RT | NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT1 NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT1 NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT1 NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT NT |
| STRIDE_PLATFORM_WINDOWS_PHONE | Telefone do Windows |
| STRIDE_PLATFORM_MONO_MOBILE | Xamarin.iOS ou Xamarin.Android |
| STRIDE_PLATFORM_ANDROID | Xamarin. Android |
| STRIDE_PLATFORM_IOS | Xamarin.iOS |

## APIs de gráficos

| Variável | Valor |
| --------------------------------------------- | --------------------- |
| STRIDE_GRAPHICS_API_DIRECT3D | Direct3D 11 |
| STRIDE_GRAPHICS_API_OPENGL | OpenGL (Core e ES) |
| STRIDE_GRAPHICS_API_OPENGLCORE | Núcleo de OpenGL (Desktop) |
| STRIDE_GRAPHICS_API_OPENGLES | OpenGL ES |
| STRIDE_GRAPHICS_API_VULKAN | Vulc |

## Exemplo

```cs

#if STRIDE_PLATFORM_WINDOWS
    // Código específico do Windows vai aqui...

#elif STRIDE_PLATFORM_MONO_MOBILE
    // iOS e Android código específico vai aqui...

#else
    // Outro código de plataforma vai aqui...

#endif
```

## Ver também

* [Plataformas](../platforms/index.md)
* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Use um script](use-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
