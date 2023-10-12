# Efeitos e shaders

Stride usa um pipeline de sombreamento programável. Você pode escrever [ shaders](custom-shaders.md), criar @'Stride. Gráficos. Efeito é deles, e usá-los para desenhar. A classe @'Stride.Rendering.EffectSystem' fornece uma maneira fácil de carregar um efeito.

## Carregar um efeito

Uso:

```cs
var myEffect = EffectSystem.LoadEffect("MyEffect").WaitForResult();
```

Você pode então ligar o efeito como [pipeline state](../low-level-api/pipeline-state.md).

Um efeito também muitas vezes define um conjunto de parâmetros. Para definir estes, você precisa [ recursos combinados](../low-level-api/resources.md) antes de desenhar.

## Shaders

Os Shaders são escritos na linguagem de sombreamento [Stride](shading-language/index.md), que é uma extensão de `HLSL`. Eles fornecem a verdadeira composição de shaders modulares através de [heritance](shading-language/shader-classes-mixins-and-inheritance.md), shader [mixins](shading-language/composition.md) e [ tecelagem automática de atributos in-out shader](shading-language/automatic-shader-stage-input-output.md).

## Efeitos

[ Efeitos](effect-language.md) em Stride usar sintaxe tipo C# para combinar ainda mais shaders. Eles fornecem composição condicional de shaders para gerar permutações de efeito.

Como algumas plataformas não podem compilar shaders em tempo de execução (por exemplo, iOS, Android, etc), arquivos de permutação de efeitos (`.sdeffectlog`) são usados para enumerar todas as permutações antes do tempo.

## Alvo tudo

Os shaders Stride são convertidos automaticamente para a plataforma gráfica de destino — ou HLSL simples para Direct3D, `GLSL` para OpenGL, ou `SPIR-V` para plataformas Vulkan.

Para plataformas móveis, os shaders são otimizados por um otimizador GLSL para melhorar o desempenho.

## Nesta secção

* [Efeito da linguagem](effect-language.md)
* [Língua de Shading](shading-language/index.md)
   - [Shader classes, misturas e herança](shading-language/shader-classes-mixins-and-inheritance.md)
   - [Composição](shading-language/composition.md)
   - [Sombreadores computacionais](compile-shaders.md)
   - [Modelos](shading-language/templates.md)
   - [Shader fase de entrada / saída gestão automática](shading-language/automatic-shader-stage-input-output.md)
* [Sombreadores personalizados](custom-shaders.md)