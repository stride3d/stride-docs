# Modelos

Shader templating está disponível no SDSL. Ao contrário de muitos sistemas templating, sdsl requer modelos digitados fortes. Os tipos disponíveis são:

- tipos de valor de HLSL (float, int, float2, float3, float4)
- Texturas 2D
- estados amostrais
- semântica (usado para substituir a semântica em variáveis)
- tipos de link (usado para substituir anotações de link)

Um shader instantâneo comporta-se da mesma maneira que qualquer outro shader. Os parâmetros do modelo de valor, textura e sampler são acessíveis como qualquer outra variável. No entanto, é impossível modificar seu valor; tentar fazê-lo resulta em um erro de compilação. Se uma variável de modelo é incorretamente utilizada (por exemplo, usando um sampler como um semântico), ele deve resultar em um erro de compilação. No entanto, o comportamento é oficialmente desconhecido.

** Código:** Templating

```cs
shader TemplateShader<float speed, Texture2D myTexture, SamplerState mySampler, Semantic mySemantic, LinkType myLink>
(
	[Cor]
	[Link("myLink")]
	float4 myColor;
 
	fluxo float2 texcoord : mySemantic;
 
	flutuante4 GetValue()
	(
		velocidade de retorno * myColor * myTexture.Sample (mySampler, streams.texcoord);
	}
};
 
// Para instanciar o shader, use:
TemplateShader<1.0f, Texturing.Texture0, Texturing.Sampler0, TEXCOORD0, MyColorLink>
```

## Ver também

* [Efeito da linguagem](../effect-language.md)
* [Índice de linguagem de sombra](index.md)
   - [Shader classes, misturas e herança](shader-classes-mixins-and-inheritance.md)
   - [Composição](composition.md)
   - [Shader fase de entrada / saída gestão automática](automatic-shader-stage-input-output.md)
