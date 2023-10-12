# Etapas de Shader

A função para cada etapa tem um nome predefinido, por isso recomendamos que você não altere.

- `HSMain` para shader de casco
- `HSConstantMain` para função constante de patch
- `DSMain` para shader de domínio
- `VSMain` para o shader de vértice (não tem argumentos)
- `GSMain` para o shader de geometria
- `PSMain` para pixel shader (não tem argumentos)
- `CSMain` para o shader de computação (não tem argumentos)

Estes são todos métodos vazios.

Os shaders de geometria e tessellation precisam de algum tipo de estrutura predefinida como entrada e saída. No entanto, uma vez que os shaders Stride são genéricos, é impossível saber de antemão qual será a estrutura. Como resultado, esses shaders usam `Input` e `Output` estruturas que são geradas automaticamente para caber o shader final.

## Vertex shader

Um shader de vértice tem de definir a variável com a semântica `SV_Position`. Em `ShaderBase`, é `ShadingPosition`.

Por exemplo:

```cs
anular fase VSMain()
(
	...
	streams.ShadingPosition = ...;
	...
}
```

## Pixel shader

Um shader de pixel tem de definir a variável com o semântico `SV_Target`. Em `ShaderBase`, é `ColorTarget`.

Por exemplo:

```cs
anular fase PSMain()
(
	...
	fluxos. ColorTarget = ...;
	...
}
```

## Sombreador de geometria

Um exemplo de geometria shader:

```cs
[conta máxima(1)]
void GSMain (entrada de entrada de triângulo[3], inout PointStream<Output> pointStream)
(
	...
	// preencher o objeto streams
	fluxos = entrada[0];
 	...
 
	// sempre apêndice fluxos
	pointStream.Anexar(streams);
	...
}
```

`Input` pode ser usado no corpo do método. Ele se comporta como o objeto de fluxos e contém os mesmos membros.

`Output` só é usado na declaração do método. Você deve anexar os fluxos objeto ao fluxo de saída do shader geometria.

## Sombra de Tessellation

Um exemplo de um shader de tessellation:

```cs
[domain("tri")]
[partitioning("fractional_odd]]
[outputtopology("triangle_cw")]
[outputcontrolpoints(3)]
[patchconstantfunc("HSConstantMain")]
[maxtessfactor(48.0)]
void HSMain (InputPatch<Input, 3> input, out Output, uint uCPID : SV_OutputControlPointID)
(
	...
	saída = fluxos;
}
 
vazio HSConstant Principal (InputPatch<Input, entrada 3>, const OutputPatch<Input2, saída 3>, fora constantes Constantes)<Input, 3><Input2, 3>
(
	...
	saída = fluxos;
	...
}
 
[domain("tri")]
void DSMain(const OutputPatch<Input, 3> input, out Output, in Constantes constantes, float3 f3BarycentricCoords : SV_DomainLocation)
(
	...
	saída = fluxos;
	...
}
```

`Input` e `Input2` ambos se comportam como fluxos.

> [!Note]
> Não se esqueça de atribuir `output` a `streams` no final do seu estágio.

## Shader computado

Um exemplo de um shader de computação:

```cs
[numeração(2, 3, 5)]
anular CSMain()
(
	...
}
```

Você pode herdar de `ComputeShaderBase` e substituir o método `Compute`.

## Ver também

* [Efeito da linguagem](../effect-language.md)
* [Índice de linguagem de sombra](index.md)
   - [Shader classes, misturas e herança](shader-classes-mixins-and-inheritance.md)
   - [Composição](composition.md)
   - [Modelos](templates.md)
   - [Shader fase de entrada / saída gestão automática](automatic-shader-stage-input-output.md)