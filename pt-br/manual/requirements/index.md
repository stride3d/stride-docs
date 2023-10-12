# Requisitos de Desenvolvimento

## Requisitos gerais

Para desenvolver projetos com a Stride, você precisa:

| Exigência | Especificações |
|-----------------|----------------
| Espaço de disco rígido | 5 GB |
| Sistema operacional | Windows 10, 11 <small class="text-secondary">[see (1)]</small> |
| CPU | x64 |
| GPU | GPU compatível Direct3D 10+ |
| RAM | 4GB (mínimo), 8GB (recomendado) <small class="text-secondary">[see (2)]</small> |

(1) As versões anteriores do Windows _may_ funcionam mas não são testadas.

(2) Os requisitos de RAM variam dependendo do seu projeto:
* Desenvolver aplicações 2D simples não requer muita RAM.
* Desenvolver jogos 3D com muitos ativos requer grandes quantidades de RAM.


## Requisitos de desenvolvimento móvel

Para desenvolver para plataformas móveis, você também precisa:

| Plataforma | Requisitos |
|----------|-------
| Android | Xamarin <small class="text-secondary">[see (3)]</small> |
| iOS | Computador Mac, Xamarin <small class="text-secondary">[see (3)]</small> |

(3) Xamarin está incluído nas instalações do Visual Studio. Para obter instruções sobre como instalar Xamarin com Visual Studio, consulte [esta página MSDN](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

## Jogos de corrida

Para executar jogos feitos com Stride, você precisa:

- . NET 6 se a sua aplicação não for [auto-suficiente](https://learn.microsoft.com/en-us/dotnet/core/deploying/#publish-self-contained)
- DirectX11 (incluído com Windows 10 e posterior), OpenGL, ou Vulkan dependendo da plataforma, e a substituição da API gráfica definida em seu `.csproj`
- Tempos de execução Visual C++ 2015 (x86 e/ou x64, dependendo do que você estabeleceu em suas propriedades do projeto no Visual Studio)

## Plataformas suportadas

Para obter informações sobre plataformas Stride suporta, veja [Platforms](../platforms/index.md).
