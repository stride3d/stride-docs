# Composição

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Além do sistema de herança, o SDSL introduz o conceito de **composition**. Uma composição é um membro cujo tipo é outra classe shader. É definido da mesma forma que as variáveis.

Você pode compor com uma instância da classe shader desejada ou uma instância de uma classe shader que herda do desejado.

## Exemplo de código

```cs
composição do shader Base
(
	flutuante4 Compute()
	(
		retornar float4(0.0);
	}
};
 
shader CompositionShaderA : Composição Base
(
	float4 myColor;
 
	override float4 Compute()
	(
		voltar myColor;
	}
};
 
shader CompositionShaderB : Composição Base
(
	float4 myColor;

	override float4 Compute()
	(
		retorno 0,5 * myColor;
	}
};
 
sombreador BaseShader
(
	ComposiçãoBase Comp0;
	ComposiçãoBase Comp1;
 
	flutuante4 GetColor()
	(
		return Comp0.Compute() + Comp1.Compute();
	}
};
```

As composições são compiladas em seu próprio contexto, o que significa que as variáveis não-estágio só são acessíveis dentro da composição. Também é possível ter composições dentro de composições.

## Exemplo de código: access root context

Se você quiser acessar o contexto de compilação de raiz, você pode usar o seguinte formato:

```cs
shader CompositionShaderC : Composição Base
(
	Raiz de BaseShader Shader = estágio;
 
	flutuante4 GetColor()
	(
		retornar rootShader.GetColor();
	}
};
```

Isso é propenso a erros, já que `CompositionShaderC` espera que `BaseShader` esteja disponível no contexto raiz.

## Exemplo de código: array de composições

Você também pode criar uma matriz de composições da mesma maneira que você usa um array de valores. Como não há nenhuma maneira de saber antecipadamente quantas composições existem, você deve iterar usando uma instrução `foreach`.

```cs
sombreador BaseShader Array
(
	CompositionBase Comps[];
	
	flutuante4 GetColor()
	(
		float4 resultColor = float4(0.0);
 
		foreach (var comp em Comps)
		(
			resultColor += comp.Compute();
		}
 
		resultado de retorno Cor;
	}
};
```

## Exemplo de código: behavior

O comportamento da palavra-chave `stage` é simples: apenas uma instância da variável ou método é produzida.

```cs
sombreador BaseShader
(
	fase float BaseStageValue;
	não Padrão de flutuação Valor;
};
 
testShader : Base de dados
(
	BaseShader comp0;
	BaseShader comp1;
};
 
// shader resultante (representação)
teste de sombreador
(
	baseStage flutuante Valor;
	não Padrão de flutuação Valor;
	flutuar comp0_NonStage Valor;
	flutuar comp1_NonStage Valor;
};
```

### Código de exemplo: stage member behavior

```cs
sombreador BaseShader
(
	fase float BaseStageMethod()
	(
		retorno 1.0;
	}

	flutuar NonStageMethod()
	(
		retorno 2.0;
	}
};
 
testShader : Base de dados
(
	BaseShader comp0;
	BaseShader comp1;
};
 
// shader resultante (representação)
teste de sombreador
(
	flutuar BaseStageMethod()
	(
		retorno 1.0;
	}

	flutuar NonStageMethod()
	(
		retorno 2.0;
	}
	flutuar comp0_NonStageMethod()
	(
		retorno 2.0;
	}
	flutuar comp1_NonStageMethod()
	(
		retorno 2.0;
	}
};
```

Tenha em mente que mesmo na composição, você pode chamar para métodos de base, substituí-los, e assim por diante. Overriding acontece na mesma ordem que as composições.

Este comportamento é útil quando você precisa de um valor em composição múltipla, mas você só precisa computá-lo uma vez (por exemplo, o espaço normal em vista).

## Comportamento de clones

A palavra-chave `clone` tem um comportamento menos trivial. Impede a palavra-chave `stage` para produzir um método único.

```cs
sombreador BaseShader
(
	fase float BaseStageMethod()
	(
		retorno 1.0;
	}
 
	fase float BaseStageMethodNotCloned()
	(
		retorno 1.0;
	}
};
 
shader CompShader : Base de dados
(
	override clone float BaseStageMethod()
	(
		retorno 1.0 + base.BaseStageMethod();
	}
 
	override float BaseStageMethodNotCloned()
	(
		retorno 1.0f + base.BaseStageMethodNotCloned();
	}
};
 
testShader : Base de dados
(
	CompShader comp0;
	CompShadercomp1;
};
 
// shader resultante (representação)
teste de sombreador
(
	// método clonado
	flutuar base_BaseStageMethod()
	(
		retorno 1.0;
	}
 
	flutuar comp0_BaseStageMethod()
	(
		retorno 1.0 + base_BaseStageMethod();
	}
 
	float BaseStageMethod() // in fact comp1_BaseStageMethod
	(
		return 1.0 + comp0_BaseStageMethod; // 3.0f
	}
 
	// não método clonado
	flutuar base_BaseStageMethodNotCloned()
	(
		retorno 1.0f;
	}
 
	flutuar BaseStageMethodNotCloned()
	(
		retorno 1.0f + base_BaseStageMethodNotCloned(); // 2.0f
	}
};
```

Este comportamento é útil quando você quer repetir uma função simples, mas com diferentes parâmetros (por exemplo, adicionar cor em cima de outro).

## Ver também

* [Efeito da linguagem](../effect-language.md)
* [Índice de linguagem de sombra](index.md)
   - [Shader classes, misturas e herança](shader-classes-mixins-and-inheritance.md)
   - [Modelos](templates.md)
   - [Shader fase de entrada / saída gestão automática](automatic-shader-stage-input-output.md)
   - [Etapas de Shader](shader-stages.md)