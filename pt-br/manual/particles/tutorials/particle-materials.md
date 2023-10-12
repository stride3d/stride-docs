# Tutorial: Materiais de partículas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Este tutorial demonstra como criar shaders personalizados e materiais para um sistema de partículas, fornecendo funcionalidade não disponível no motor central. Ele se concentra em shaders e renderização. Para a simulação, veja o tutorial [custom partículas](custom-particles.md).

Se você não estiver familiarizado com as partículas de edição, veja as partículas [Create](../create-particles.md).

Comece criando um novo **Sample: Particles** projeto.

![Particles sample project](media/select-particles-sample-project.png)

Este projeto contém quatro cenas, cada uma demonstrando uma maneira diferente de usar partículas: **Partículas Animadas**, **Partículas de Crianças**, **Materiais personalizados**, e **Partículas personalizadas**.

Abra a cena **CustomMaterials**.

Há três entidades de partículas no local: **Rad Particle System**, **Radial Particle System** e **Dois Textures Particle System**.

![media/particles-samples-material-1.png](media/particles-samples-material-1.png)

Selecione uma das entidades de partículas e navegue até seu sistema de partículas de origem, expandindo a emissora nela e seu material.

## Sistema de partículas vermelhas

O sistema de partículas **red** tem uma personalização muito simples. Como os mapas materiais [](../../graphics/materials/material-maps.md) já fornecem uma opção para usar shaders como uma entrada de nó de folha, podemos criar um shader personalizado e atribuí-lo a esse nó.

Primeiro, crie um shader (`ComputeColorRed.sdsl`) com uma classe derivada para `ComputeColor`:

```cs
classe ComputeColorRed : Cor da composição
(
  override float4 Compute()
  (
      retorno flutua4(1, 0, 0, 1);
  }
};
```

A única coisa que este shader faz é retornar a cor vermelha para pixel shading cada vez `Compute` é chamado. Vamos tentar algo mais difícil mais tarde, mas por agora vamos mantê-lo simples.

Salve o arquivo e recarregue os scripts no Game Studio. Você deve ver o novo shader em **Asset View**.

![media/particles-samples-material-2.png](media/particles-samples-material-2.png)

Se o shader não estiver lá, recarregue o projeto.

Uma vez que o shader é carregado, você pode acessá-lo no **Property Grid** sob o material emissivo dinâmico ** para as partículas.** Escolha um tipo de shader e, no menu suspenso, selecione o shader que você acabou de adicionar à cena.

![media/particles-samples-material-3.png](media/particles-samples-material-3.png)

As partículas são vermelhas. Com Game Studio executando, edite e salve `ComputeColorRed.sdsl` para torná-los amarelos.

```cs
classe ComputeColorRed : Cor da composição
(
  override float4 Compute()
  (
      retorno flutua4(1, 1, 0, 1);
  }
};
```

Porque Stride suporta compilação de shader dinâmico, as partículas imediatamente ficam amarelas.

### Sistema de partículas radiais

Para o próximo shader vamos usar coordenadas de textura expor valores arbitrários ao editor.

Verifique `ComputeColorRadial.sdsl`.

```cs
classe ComputeColorRadial<float4 ColorCenter, float4 ColorEdge> : ComputeColor, Texturing
(
  override float4 Compute()
  (
      radial flutuante Distância = comprimento (streams. TexCoord - float2(0.5, 0.5)) * 2;

      float4 unclamped = lerp(ColorCenter, ColorEdge, radialDistance);

      // Queremos permitir que a intensidade cresça muito, mas cap o alfa para 1
      float4 branqueado = braçadeira (inclampado, flutuador4(0, 0, 0, 0), flutuador4(1000, 1000, 1000, 1));

      // Lembre-se de que usamos um pipeline alfa pré-multiplicado para que todos os valores de cor devem ser pré-multiplicados
      braçada.rgb *= braçada.a;

      voltar fixado;
  }
};
```

Isso é semelhante a `ComputeColorRed` e pode ser compilado e carregado da mesma maneira.

Existem várias diferenças importantes. O shader agora herda do `Texturing` classe base shader também. Isso permite que ele use coordenadas de textura nas correntes. No lado material do Game Studio, podemos forçar as coordenadas de textura a serem transmitidas caso não usemos animação de textura.

Os valores de entrada `float4 ColorCenter` e `float4 ColorEdge` em nosso shader são permutações. Quando carregamos o shader, o Property Grid os exibe sob o dicionário **Generics**.

![media/particles-samples-material-4.png](media/particles-samples-material-4.png)

Os valores que estabelecemos aqui serão usados pelo shader `ComputeColorRadial` para as partículas. O resto do shader simplesmente calcula uma cor gradiente com base na distância do pixel sombreado do centro do outdoor.

## Sistema de partículas de duas texturas

Isso demonstra como criar materiais e efeitos personalizados para as partículas. O material `DynamicColor` suporta um canal RGBA. Para a nossa amostra, separaremos os canais RGB e A, permitindo-lhes usar diferentes animações de coordenadas de textura e diferentes texturas e árvores binárias para calcular a cor.

### Chaves do parâmetro

As chaves do parâmetro são usadas para mapear dados e passá-lo para o shader. Alguns deles são gerados, e podemos definir o nosso próprio também.

Se definirmos mais fluxos em nosso shader (`ParticleCustomShader`), eles são exportados para uma classe gerada automaticamente. Tente adicionar o seguinte a `ParticleCustomShader.sdsl`:

```cs
  // -----------------------------------------
  // fluxos
  // -----------------------------------------
  flutuador de palco4 Alguns passos Chave;
```

O arquivo .cs gerado deve agora conter:

```cs
namespace Stride. Renderização
(
  classe parcial estática pública Shader Chaves
  (
      público estático somente leitura ParâmetroKey<Vector4> Alguns passos Chave = ParameterKeys.New<Vector4>();
  }
}
```

Não precisamos deste fluxo por agora, então podemos excluí-lo.

Vamos definir algumas chaves extras em `ParticleCustomMaterialKeys.cs` para usar em nosso material e efeitos.

```cs
namespace Stride. Renderização
(
  classe parcial pública ParticleCustomShaderKeys
  (
      partícula estáticaCustomShaderKeys()
      (

      }

      leitura estática pública ParâmetroKey<ShaderSource> BaseColor = ParâmetroKeys.New<ShaderSource>();

      público estático somente leitura ParâmetroKey<Textura> EmissiveMap = ParameterKeys.New<Texture>();<Texture>
      public static readonly ParâmetroKey<Color4> EmissiveValue = ParâmetroKeys.New<Color4>();



      leitura estática pública ParâmetroKey<ShaderSource> BaseIntensity = ParâmetroKeys.New<ShaderSource>();

      público estático somente leitura ParâmetroKey<Textura> Intensidade Mapa = ParameterKeys.New<Texture>();<Texture>
      público estático somente leitura ParâmetroKey<float> IntensityValue = ParâmetroKeys.New<float>();
  }
}
```

Como vimos acima, a classe gerada tem o mesmo nome e o namespace é `Stride.Rendering`, então temos que fazer nossa classe parcial e combinar o namespace. Isso não tem efeito nesta amostra específica, mas resultará em erro de compilação se o seu código shader auto-genera algumas chaves.

O resto do código é auto-explicativo. Precisamos do mapa e chaves de valor para a geração de shader mais tarde, e vamos definir nosso código gerado para o `BaseColor` e `BaseIntensity` chaves respectivamente para que o shader possa usá-lo.

#### Shader personalizado

Vamos ver `ParticleCustomShader.sdsl`:

```cs

classe ParticleCustom Shader.. Base de partículas
(
  // Este shader pode ser definido pelo usuário, e é uma árvore binária composta de shaders menores
  compor base de cores compostasCor;

  // Este shader pode ser definido pelo usuário, e é uma árvore binária composta de shaders menores
  compor ComputeColor baseIntensidade;

  // Shading of the sprite — nós substituímos o Shading( da classe base), que só retorna ColorScale
  sobreposição de palco float4 Shading()
  (
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // Cor da partícula base RGB
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      float4 finalColor = base.Shading() * baseColor.Compute();

      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // Partícula base alfa
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      finalColor.a = baseIntensity.Compute();

      // Não se esqueça de multiplicar o alfa
      finalColor.rgb *= finalColor.aaa;

      final de retorno Cor;
  }
};
```

Ele define dois shaders compostos, `baseColor` e `abseIntensity`, onde vamos conectar nossos shaders gerados para RGB e A respectivamente. Ele herda `ParticleBase` que já define `VSMain`, `PSMain` e texturing, e usa método muito simples `Shading()`.

Ao substituir o método `Shading()` podemos definir nosso comportamento personalizado. Como os shaders compostos que usamos são derivados de `ComputeColor`, podemos facilmente avaliá-los usando `Compute()`, o que nos dá a raiz da árvore de computação para cor e intensidade.

#### Efeito aduaneiro

Nosso efeito descreve como misturar e compor os shaders. Está em `ParticleCustomEffect.sdfx`:

```cs
namespace Stride. Renderização
(
  particleCustomEffect
  (
      // Use o ParticleBaseKeys para atributos constantes, definidos no motor de jogo
      usando params ParticleBaseKeys;

      // Use o ParticleCustom Shader Chaves para atributos constantes, definidas neste projeto
      usando params Teste de partículas Shader Chaves;

      // Herda do ParticleBaseEffect.sdfx, definido no motor do jogo
      mixin ParticleBaseEffect;

      // Use o ParticleCustomShader.sdsl, definido neste projeto
      misturador de partículas Shader;

      // Se o shader definido pelo usuário para a baseColor não é nulo usá-lo
      se (ParticleCustomShaderKeys.BaseColor!= null)
      (
          mixin compose baseCor = ParticleCustomShaderKeys.BaseColor;
      }

      // Se o shader definido pelo usuário para a baseIntensidade (alpha) não é nulo usá-lo
      se (ParticleCustomShaderKeys.BaseIntensity!= null)
      (
          base de composição da misturaIntensidade = ParticleCustomShaderKeys.BaseIntensidade;
      }

 };

}
```

`ParticleBaseKeys` e `ParticleBaseEffect` são exigidos pelo shader base que herdamos.

`ParticleCustomShaderKeys` fornece as chaves definidas anteriormente, onde vamos ligar nossos shaders.

Finalmente, para ambos os shaders só precisamos verificar se há código definido pelo usuário para ele e conectá-lo. Os parâmetros `baseColor` e `baseIntensity` são do shader que criamos anteriormente.

Por último, precisamos de um material que define todas as chaves e usa o efeito recém-criado.

#### Material de partícula personalizado

Vamos copiar @'Stride.Particles.Materials.ParticleMaterialComputeColor' em `ParticleCustomMaterial.cs` em nosso projeto e personalizá-lo para usar dois shaders para árvores binárias de cor.

```cs
      [DataMemberIgnore]
      protegido override string EffectName { get; set; } = "ParticleCustomEffect";
```

A classe base tenta carregar automaticamente o efeito especificado com `EffectName`. Damos-lhe o nome do efeito que crated anteriormente.

```cs
      [DataMember(300)]
      [Display("Alpha")]
      public IComputeScalar ComputeScalar { get; set; } = new ComputeTextureScalar();

      [DataMember(400)]
      [Display("TexCoord1")]
      construção UV pública1;
      atributo privadoDescrição texCoord1 = nova AtributeDescription("TEXCOORD1");
```

Além do já existente @'Stride.Rendering. Materials.IComputeColor', vamos usar @'Stride.Rendering. Materials.IComputeScalar' para intensidade, que retorna um flutuador, em vez de um flutuador4. Também adicionaremos outro @'Stride.Particles. Materials.UVBuilder' para uma segunda textura coordena animação.

```cs
  var shaderBaseColor = ComputeColor.GenerateShaderSource (shaderGeneratorContext, novo MaterialColorKeysCompute (ParticleCustomShaderKeys.EmissiveMap, ParticleCustomShaderKeys.EmissiveValue, Color.White));
  shaderGeneratorContext.Parameters.Set (ParticleCustomShaderKeys.BaseColor, shaderBaseColor);

  var shader BaseScalar = ComputeScalar.GenerateShaderSource(shaderGeneratorContext, new MaterialComputeColorKeys (ParticleCustomShaderKeys.IntensityMap, ParticleCustomShaderKeys.IntensityValue, Color.White));
  shaderGeneratorContext.Parameters.Set (ParticleCustomShaderKeys.BaseIntensity, shaderBaseScalar);
```

Nós carregamos os dois shaders: um para a cor principal e um para a intensidade. Estes são semelhantes aos shaders que escrevemos manualmente nos dois últimos exemplos, exceto que os geramos na mosca diretamente das propriedades `ComputeColor` e `ComputeScalar`, que você pode editar na Grade de Propriedade. O código gerado é semelhante ao código do shader que escrevemos da maneira que ele chama `Compute()` e retorna o resultado final de nossa árvore de computação de cor ou escalar.

Depois de gerar o código do shader, definimo-lo para a respectiva chave que precisamos. Verifique como `ParticleCustomShaderKeys.BaseColor` é definido em `ParticleCustomShaderKeys.cs`. No arquivo de efeito verificamos se esta chave é definida, e se sim, passamos para o fluxo definido em nosso código de shader.

## Ver também

* [Tutorial: Criar uma trilha](create-a-trail.md)
* [Tutorial: Partículas personalizadas](custom-particles.md)
* [Tutorial: Herança](inheritance.md)
* [Tutorial: Lasers e raios](lasers-and-lightning.md)
* [Partes](../index.md)
* [Criar partículas](../create-particles.md)