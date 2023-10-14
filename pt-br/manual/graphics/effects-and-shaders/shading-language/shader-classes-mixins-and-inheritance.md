# Shader classes, misturas e herança

Stride Shading Language (SDSL) é uma extensão de HLSL, o que torna mais perto da sintaxe C# e conceitos. A linguagem é orientada para o objeto:

- classes shader são a base do código
- classes shader contêm métodos e membros
- classes de shader podem ser herdadas, métodos podem ser substituídos
- tipos de membros podem ser classes de shader

SDSL usa uma maneira original de lidar com múltiplas heranças. A herança é realizada através de misturas, de modo que a ordem da herança é crucial:

- a ordem de herança define a implementação real de um método (a última substituição)
- se uma mistura aparece várias vezes na herança, apenas a primeira ocorrência é levada em conta (assim como seus membros e métodos)
- para pode chamar a implementação anterior de um método, use `base.<method name>(<arguments>)`

## Palavras-chave

O SDSL usa as palavras-chave como HLSL e adiciona novas:

- `stage`: método e palavra-chave de membro. Esta palavra-chave garante que o método ou membro só é definido uma vez e é o mesmo nas composições.
- `stream`: palavra-chave de membro. O membro é acessível em cada fase do shader. Para mais informações, veja [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `streams`: tipo de estrutura global que armazena variáveis necessárias em várias etapas do shader. Para mais informações, veja [Automatic shader stage input/out](automatic-shader-stage-input-output.md).
- `override`: palavra-chave do método. Se esta palavra-chave está faltando, a compilação retorna um erro.
- `abstract`: usado na frente de uma declaração de método (sem um corpo).
- `clone`: palavra-chave do método. Quando um método aparece várias vezes na árvore de herança de uma classe shader, esta palavra-chave força a criação de múltiplas instâncias do método em cada nível da herança em vez de uma. Para mais informações, consulte [Composition](composition.md).
- `Input`: para geometria e tessellation shaders. Para obter mais informações, consulte as etapas [Shader](shader-stages.md).
- ` Saída`: para geometria e tessellation shaders. Para obter mais informações, consulte as etapas [Shader](shader-stages.md).
- `Input2`: para shaders de tessellation. Para obter mais informações, consulte as etapas [Shader](shader-stages.md).
- `Constants`: para shaders de tessellation. Para obter mais informações, consulte as etapas [Shader](shader-stages.md).

## Métodos abstratos

Métodos abstratos estão disponíveis no SDSL. Eles devem ser prefixados com a palavra-chave `abstract`. Você pode herdar de uma classe shader com métodos abstratos sem ter que implementá-los; o compilador simplesmente produzirá um aviso inofensivo. No entanto, você deve implementá-lo em seu shader final para evitar um erro de compilação.

## Notas

Como HLSL, as anotações estão disponíveis no SDSL. Alguns dos mais úteis são:

- `[Color]` para variáveis float4. O parâmetro A chave terá o tipo `Color4` em vez de `Vector4`. Ele também especifica para Game Studio que esta variável deve ser tratada como uma cor, para que você possa editá-la no Game Studio.
- `[Link(...)]` especifica qual Parâmetro Chave para usar para definir esse valor. No entanto, uma chave padrão independente ainda é criada.
- `[Map(...)]` especifica qual Parâmetro Chave para usar para definir esse valor. Nenhum novo parâmetro A chave é criada.
- `[RenameLink]` impede a criação de um ParâmetroKey. Deve ser usado com `[Link()]`.

### Exemplo de código: anotações

```cs
sombreador BaseShader
(
	[Cor] flutuar4 myColor;
 
	[Link("ProjectKeys.MyTextureKey")]
	[RenameLink]
	Texture2D textura;
 
	[Mapa("Texturing. Texture0") Texture2D defaultTexture;
};
```

## Exemplo de código: herança

```cs
shader BaseInterface
(
	abstrato flutuador Compute();
};
 
shader BaseShader : Base Interface
(
	flutuador Compute()
	(
		retorno 1.0f;
	}
};
 
shaderA: Base de dados
(
	anulado ()
	(
		retorno 2.0f;
	}
};
 
shaderB: Base de dados
(
	anulado ()
	(
		float prevValue = base.Compute();
		retorno (5.0f + prevValue);
	}
};
```

### Exemplo de código: a importância da ordem de herança

Observe o que acontece quando mudamos a ordem de herança entre `ShaderA` e `ShaderB`.

```cs
shader MixAB : ShaderA, ShaderB
(
};
 
shader MixBA : ShaderB, ShaderA
(
};
 
// Código resultante (representação)

shader MixAB : BaseInterface, BaseShader, ShaderA, ShaderB
(
	flutuador Compute()
	(
		// código de BaseShader
		flutuar v0 = 1.0f;
 
		// código de ShaderA
		flutuar v1 = 2.0f;
 
		// código de Shader B
		flutuar prevValue = v1;
		float v2 = 5.0f + prevValue;
 
		retornar v2; // = 7.0f
	}
};

shader MixBA : BaseInterface, BaseShader, ShaderA, ShaderB
(
	flutuador Compute()
	(
		// código de BaseShader
		flutuar v0 = 1.0f;

		// código de Shader B
		float prevValue = v0;
		float v1 = 5.0f + prevValue;
		
		// código de ShaderA
		flutuar v2 = 2.0f;

		retornar v2; // = 2.0f
	}
};
```

## Chamadas estáticas

Você também pode usar uma variável ou chamar um método de um shader sem ter que herdar dele. Para fazer isso, use `<shader_name>.<variable or method_name>`. Ele se comporta da mesma maneira que uma chamada estática.

No entanto, é importante ressaltar que se você chamar estaticamente um método que usa variáveis de classe shader, o shader não compilará. Esta é uma maneira conveniente de usar apenas uma parte de um shader, mas isso não é uma otimização. O compilador de shader já remove automaticamente quaisquer variáveis desnecessárias.

### Exemplo de código: chamadas estáticas

```cs
acessório de corte
(
	flutuar StaticValue;
	flutuar StaticMethod (float a)
	(
		retorno 2.0f * a;
	}
 
	// este método usa
	float NonStaticMethod()
	(
		retorno 2.0f * Valor estático;
	}
};
 
// esta classe de shader está bem
correctStaticCallClass
(
	flutuador Compute()
	(
		retornar StaticClass.StaticValue * StaticMethod(5.0f);
	}
};
 
// esta classe de shader não compila desde que a chamada não é estática
shader IncorrectStaticCallClass 
(
	flutuador Compute()
	(
		retornar StaticClass.NonStaticMethod();
	}
};
 
// uma maneira de corrigir isso
shader IncorrectStaticCallClassFixed : Códigos estáticos
(
	flutuador Compute()
	(
		retornar NonStaticMethod();
	}
};
```

## Ver também

* [Efeito da linguagem](../effect-language.md)
* [Índice de linguagem de sombra](index.md)
   - [Composição](composition.md)
   - [Modelos](templates.md)
   - [Shader fase de entrada / saída gestão automática](automatic-shader-stage-input-output.md)
   - [Etapas de Shader](shader-stages.md)