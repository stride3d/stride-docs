# Efeito da linguagem

## Criar shaders em C#

Você pode criar um shader em tempo de execução com objetos @'Stride.Shaders.ShaderSource'. Shaders vêm em três tipos:

- @'Stride.Shaders.ShaderClassSource' corresponde a uma classe de shader único
- @'Stride.Shaders.ShaderMixinSource' mistura vários @'Stride.Shaders.ShaderSource', definir valores de pré-processador, definir composições
- @'Stride.Shaders.ShaderArraySource' são usados para matrizes de composições

Este método produz shaders em tempo de execução. No entanto, muitas plataformas não suportam HLSL e não têm capacidade de compilar shaders em tempo de execução. Além disso, a abordagem não se beneficia da reutilização de mixinas.

## Efeitos Stride (SDFX)

Muitos shaders são variações ou combinações de shaders pré-existentes. Por exemplo, algumas malhas moldam sombras, outras as recebem, e outras precisam de esfolar. Para reutilizar o código, é uma boa ideia selecionar quais partes usar através de condições (por exemplo, "Pequeno necessário"). Isso é frequentemente resolvido por " shaders": shaders monolíticos configurados por um conjunto de parâmetros pré-processadores.

A Stride oferece o mesmo tipo de controle, mantendo a extensibilidade e a reutilização em mente. Os blocos de código simples definidos por classes de shader podem ser misturados juntos por um mixer shader. Este processo pode usar lógica mais complexa, descrita em arquivos Stride Effect (*.sdfx).

### Sintaxe geral

Um arquivo .sdfx é um pequeno programa usado para gerar permutações de shader. Ele leva um conjunto de parâmetros (chave e valor em uma coleção) e produz um `ShaderMixinSource` pronto para ser compilado.

Um arquivo .sdfx exemplo:

```cs
usando Stride. Efeitos. Dados;

namespace StrideEffects
(
	params MyParameters
	(
		bool EnableSpecular = true;
	};
	
	efeito básico
	(
		usando params Material Parâmetros;
		usando params MyParameters;

		mixin ShaderBase;
		transformação da misturaWAndVP;
		mixin NormalVSStream;
		mixin PositionVSStream;
		mixagem BRDFDiffuse Base;
		mixin BRDFSpecularBase;
		mistura LightMultiDirectionalShadingPerPixel<2>;
		mistura transparente Shading;
		mixin DiscardTransparent;

		se (Parameters de Material.AlbedoDiffuse!= null)
		(
			mixin compose DiffuseColor = ComputeBRDFDiffuseLambert;
			mistura de compor albedo Diffuse = MaterialParameters.AlbedoDiffuse;
		}

		se (Parameters de Material.AlbedoSpecular != null)
		(
			mixin compose SpecularColor = ComputeBRDFColorSpecularBlinnPhong;
			mistura de compor albedo Specular = MaterialParameters.AlbedoSpecular;
		}
	};
}
```

### Adicionar um mixin

Para adicionar uma mistura, use `mixin <mixin_name>`.

### Usar parâmetros

A sintaxe é semelhante ao C#. As seguintes regras são adicionadas:

- Quando você usa chaves de parâmetro, adicione-as usando `params <shader_name>`. Se não o fizer, as chaves são tratadas como variáveis.

- Você não precisa dizer ao programa onde verificar os valores por trás das chaves. Usa a chave.

```cs
usando params Material Parâmetros;
 
se (Parameters de Material.AlbedoDiffuse!= null)
(
	mixin MaterialParameters.AlbedoDiffuse;
}
```

Os parâmetros comportam-se como qualquer variável. Você pode ler e escrever seu valor, comparar seus valores e definir parâmetros de modelo. Uma vez que alguns parâmetros armazenam misturas, eles podem ser usados para composição e herança, também.

### Parâmetros personalizados

Você pode criar seu próprio conjunto de parâmetros usando uma sintaxe de definição de estrutura.

> [!Note]
> Mesmo que eles sejam definidos no arquivo XKFX, não se esqueça da declaração `using` quando você deseja usá-los.

```cs
params MyParameters
(
	bool EnableSpecular = true; // true é o valor padrão
}
```

### Composições

Para adicionar uma composição, atribuir a variável de composição à mistura com a sintaxe abaixo.

```cs
// albedoSpecular é o nome da variável composição no mixin
mistura de compor albedo Specular = ComputeColorTexture;
 
ou
 
mistura de compor albedo Specular = MaterialParameters.AlbedoSpecular;
```

### Efeitos parciais

Você também pode quebrar o código em sub-mixinas para reutilizar em outro lugar com a sintaxe abaixo.

```cs
efeito parcial MyPartialEffect
(
	mixin ComputeColorMultiply;
	mixin compose color1 = ComputeColorStream;
	mixin compose color2 = ComputeColorFixed;
}
 
// para usá-lo
mixin MyPartialEffect;
mixin compor myComposition = MyPartialEffect;
```

Você pode usar a mistura `MyPartialEffect` como qualquer outra mistura no código.

## Ver também

* [Língua de Shading](shading-language/index.md)
