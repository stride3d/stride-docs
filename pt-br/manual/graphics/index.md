# Gráficos

Esta seção explica como usar o Game Studio e a API Stride para gráficos e renderização.

## Shaders

Os Shaders são escritos na linguagem de sombreamento [Stride](effects-and-shaders/shading-language/index.md), uma extensão de `HLSL`. Eles fornecem a verdadeira composição de shaders modulares através do uso de [heritance](effects-and-shaders/shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](effects-and-shaders/shading-language/composition.md), e [ tecelagem automática de atributos shader in-out](effects-and-shaders/shading-language/automatic-shader-stage-input-output.md).

## Efeitos

[ Efeitos](effects-and-shaders/effect-language.md) em Stride usar sintaxe tipo C# para combinar shaders. Eles fornecem composição condicional de shaders para gerar permutações de efeito.

## Alvo tudo

Os shaders Stride são convertidos automaticamente para a plataforma gráfica de destino, ou HLSL simples para Direct3D, `GLSL` para OpenGL, ou `SPIR-V` para plataformas Vulkan.

## Gráficos avançados

O módulo gráfico fornece um conjunto de métodos para exibir o jogo. Embora Stride esteja disponível em várias plataformas, todo o sistema se comporta como Direct3D 11 na perspectiva do usuário. Você precisa de um conhecimento básico do pipeline de renderização para usá-lo.

## Nesta secção

* [Câmeras](cameras/index.md)
* [Materiais](materials/index.md)
* [Texturas](textures/index.md)
* [Luzes e sombras](lights-and-shadows/index.md)
* [Efeitos postais](post-effects/index.md)
* [Compositor gráfico](graphics-compositor/index.md)
* [Efeitos e shaders](effects-and-shaders/index.md)
* [API de baixo nível](low-level-api/index.md)
* [Oleoduto de renderização](rendering-pipeline/index.md)
* [Fontes Sprite](sprite-fonts.md)
* [Travessia de cone de Voxel GI](lights-and-shadows/voxel-cone-tracing-gi.md)