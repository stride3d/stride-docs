# Entrada/saída automática do palco do shader

<span class="badge text-bg-primary">Avançado</span>
<span class="badge text-bg-success">Programação</span>

Quando você escreve um shader HLSL, você tem que definir precisamente seus atributos de vértice e passá-los cuidadosamente através do estágio do seu shader final.

Aqui está um exemplo de um shader HLSL simples que usa a cor do vértice.

```cs
estranho VS_IN
(
	: POSIÇÃO;
	flutuante4 col : COR;
};

pS_IN
(
	: SV_POSITION;
	flutuante4 col : COR;
};

PS_IN VS( Entrada VS_IN )
(
	Saída PS_IN = (PS_IN)0;

	output.pos = input.pos;
	output.col = input.col;

	saída de retorno;
}

float4 PS( PS_IN input) : SV_Target
(
	retornar input.col;
}

técnica10 Renderização
(
	passe P0
	(
		SetGeometryShader( 0 );
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
```

Imagine que você deseja adicionar um normal ao seu modelo e modificar a cor resultante de acordo. Você tem que modificar o código que computa a cor e ajustar as estruturas intermediárias para passar o atributo do vértice ao shader do pixel. Você também tem que ter cuidado com a semântica que você usa.

** Código:** Modificado HLSL shader

```cs
estranho VS_IN
(
	: POSIÇÃO;
	flutuante4 col : COR;
	float3 normal : NORMAL;
};

pS_IN
(
	: SV_POSITION;
	flutuante4 col : COR;
	float3 normal : TEXCOORD0;
};

PS_IN VS( Entrada VS_IN )
(
	Saída PS_IN = (PS_IN)0;

	output.pos = input.pos;
	output.col = input.col;
	output.normal = input.normal;

	saída de retorno;
}

float4 PS( PS_IN input) : SV_Target
(
	retorno input.col * max (input.normal.z, 0,0);
}

técnica10 Renderização
(
	passe P0
	(
		SetGeometryShader( 0 );
		SetVertexShader( CompileShader( vs_4_0, VS() ) );
		SetPixelShader( CompileShader( ps_4_0, PS() ) );
	}
}
```

Este exemplo é simples. Projetos reais têm muitos mais shaders, então uma única mudança pode significar reescrever muitos shaders, estruturas, e assim por diante.

Esquematicamente, adicionar um novo atributo requer que você atualize todas as etapas e estruturas intermediárias da entrada do vértice para a última etapa em que você deseja usar o atributo.

![media/hlsl_add_normal.png](media/hlsl_add_normal.png)

## SDSL

SDSL tem uma maneira conveniente de passar parâmetros através das diferentes etapas do seu shader. As variáveis de fluxo são:

- variáveis
- definido como qualquer membro shader, com a palavra-chave stream
- usado com o prefixo de fluxo (omitindo-o resulta em um erro de compilação). Quando o fluxo é ambíguo (mesmo nome), você deve fornecer o nome do shader na frente da variável (ou seja, `stream.<my_shader>.<my_variable>`)

Os fluxos reagrupam os conceitos de atributos, variações e saídas em um único conceito.

- Um atributo é um fluxo lido em um shader vértice antes de ser escrito.
- Uma variação é um fluxo presente através de fases de shader.
- Uma saída é um fluxo atribuído antes de ser lido.

Pense em fluxos como objetos globais que você pode acessar em todos os lugares sem especificar como um parâmetro de suas funções.

> [!Note]
> Você não precisa criar um semântico para essas variáveis; o compilador os cria automaticamente. No entanto, tenha em mente que ** as variáveis que compartilham a mesma semântica serão fundidas no shader final**. Este comportamento pode ser útil quando você deseja usar uma variável de fluxo localmente sem herdar do shader onde foi declarado.

Depois de declarar um fluxo, você pode acessá-lo em qualquer estágio do seu shader. O compilador de shader cuida de tudo. As variáveis precisam ser visíveis do código de chamada (ou seja, na hierarquia de herança) como qualquer outra variável.

** Código:** Definição e uso do fluxo:

```cs
sombreador BaseShader
(
	stream float3 myVar;
 
	flutuante3 Compute()
	(
		retorno de fluxos. myVar;
	}
};
```

** Código:** Especificação de fluxo

```cs
córrego StreamShader
(
	stream float3 myVar;
};

shaderA: BaseShader, StreamShader
(
	teste de flutuação3()
	(
		retorno streams.BaseShader.myVar + streams.StreamShader.myVar;
	}
}
```

### Exemplo de shader SDSL

Vamos olhar para o mesmo shader HLSL como o primeiro exemplo, mas no SDSL.

** Código:** O mesmo shader em SDSL

```cs
shader MyShader: ShaderBase
(
	stream float4 pos : POSIÇÃO;
	fluxo float4 col: COR;

	anular VSMain()
	(
		streams.ShadingPosition = streams.pos;
	}

	anular PSMain()
	(
		fluxos. ColorTarget = streams.col;
	}
};
```

Agora vamos adicionar a computação normal.

** Código:** Modificado shader em SDSL

```cs
shader MyShader: ShaderBase
(
	stream float4 pos : POSIÇÃO;
	fluxo float4 col: COR;
	fluxo float3 normal : NORMAL;

	anular VSMain()
	(
		streams.ShadingPosition = streams.pos;
	}

	anular PSMain()
	(
		streams.ColorTarget = streams.col * max(streams.normal.z, 0,0);
	}
};
```

No SDSL, adicionar um novo atributo é tão simples como adicioná-lo ao conjunto de fluxos e usá-lo onde quiser.

![media/sdsl_add_normal.png](media/sdsl_add_normal.png)

## Ver também

* [Efeito da linguagem](../effect-language.md)
* [Índice de linguagem de sombra](index.md)
   - [Shader classes, misturas e herança](shader-classes-mixins-and-inheritance.md)
   - [Composição](composition.md)
   - [Modelos](templates.md)
   - [Etapas de Shader](shader-stages.md)