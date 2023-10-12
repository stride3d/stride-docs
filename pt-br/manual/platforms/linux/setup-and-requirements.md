# Configuração e requisitos

Para desenvolver para Linux usando Stride, você precisa de um PC Linux com uma placa gráfica que suporta pelo menos OpenGL 4.2 ou Vulkan 1.0. A distribuição Linux preferida para Stride é Ubuntu 16.04 ou posterior, pois essa foi a configuração que usamos para desenvolver a versão Linux do Stride.

As instruções abaixo assumem que você tem Ubuntu 16.04 instalado. Você pode precisar adaptá-los de acordo com sua distribuição Linux.

Você também precisará de um PC com Windows para construir seus projetos para Linux usando o Game Studio.

## Configuração

Você precisa dos seguintes pacotes:

* [FreeType](#freetype)

* [Abertura](#openal)

* [SDL2](#sdl2)

* ou Mono ou .NET Core (é OK para instalar ambos)

## FreeType

Para renderizar fontes, usamos a biblioteca [FreeType](https://www.freetype.org/). A versão mínima necessária é 2.6 e pode ser instalada através de:

```
sudo apt-get instalar libfreetype6-dev
```

## Abertura

Para tocar sons e música, usamos a biblioteca [OpenAL](https://www.openal.org/). Pode ser instalado através de:

```
sudo apt-get instalar libopenal-dev
```

## SDL2

Para executar jogos no Linux, usamos a biblioteca [SDL2](https://www.libsdl.org/) que fornece a capacidade de criar janelas, lidar com eventos de mouse, teclado e joystick. A versão mínima exigida é 2.0.4 e pode ser instalada via:

```
sudo apt-get install libsdl2-dev
```

### . Núcleo de NET

Para obter informações sobre como instalar . NET Core, veja o [. NET Instruções principais para Debian/Ubuntu](https://docs.microsoft.com/en-us/dotnet/core/linux-prerequisites?tabs=netcore2x).

Certifique-se de que a versão 2.1.300+ e o tempo de execução 2.1+ estejam instalados. Para verificar qual versão você instalou, digite:

```
dotnet --info
```

## Ver também

* 
   * [Criar um jogo Linux](create-a-linux-game.md)
