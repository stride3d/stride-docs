# Tutorial: Partículas personalizadas

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Artista </span>
<span class="badge text-bg-success">Programação</span>

Este passo mostra como você pode criar extensões personalizadas para o sistema de partículas, fornecendo funcionalidade não disponível no motor central.

Se você não estiver familiarizado com as partículas de edição, veja as partículas [Create](../create-particles.md).

Comece criando um novo **Sample: Particles** projeto.

![Particles sample project](media/select-particles-sample-project.png)

Este projeto contém diferentes cenas que demonstram diferentes formas de usar partículas. Abra a cena **CustomParticles**.

Há três entidades de partículas no local: **ConeEmitter15**, **ConeEmitter30** e **ConeEmitter45**.

Selecione uma das entidades de partículas. Na Grade de Propriedade, navegue até seu sistema de partículas de origem e expanda a emissora.

![media/particles-samples-custom-1.png](media/particles-samples-custom-1.png)

Há quatro elementos personalizados neste emissor:

* O personalizado [spawner](../spawners.md) é semelhante ao spawner-por-segundo, mas também emite uma explosão de partículas cada vez que ele loops.

* O personalizado [inicializador](../initializers.md) inicialmente posiciona as partículas em uma forma de cone e define sua velocidade de acordo.

* O personalizado [updater](../updaters.md) opera em um novo campo de partículas chamado **RactangleXY**, permitindo que o construtor de formas use tamanhos não uniformes ao construir os outdoors.

* O custom [shape builder](../shapes.md) é semelhante ao outdoor com duas adições. Ele pode criar retângulos não uniformes, em vez dos quadrados padrão, e pode alinhar (fixar) o eixo Y do retângulo para o eixo Y do mundo em vez do espaço da câmera.

## Spawner

Vamos criar um spawner que emite partículas por segundo ** e** em rajadas a cada poucos segundos. Podemos fazer isso adicionando dois spawners diferentes, mas para esta amostra vamos combiná-los.

```cs
  [DataContract("CustomParticleSpawner")] // Usado para serialização, uma boa prática é ter o contrato de dados tem o mesmo nome que a classe
  [Display("CustomParticleSpawner")]
  classe selada pública CustomParticleSpawner : ParticleSpawner
  (
      [DataMemberIgnore]
      carro flutuante privado Sobre; // Os membros privados não aparecem na Grade de Propriedade

      [DataMember(100)] // Quando os dados são serializados, este atributo decide sua prioridade
      [Display("Número de partículas")] // Este é o nome que será exibido na Grade de Propriedade
      público float SpawnCount { get; set; }

      [DataMemberIgnore]
      float in privadaTimer; // Os membros privados não aparecem na Grade de Propriedade

      [DataMember(200)] // Quando os dados são serializados, este atributo decide sua prioridade
      [Display("Burst partículas")] // Este é o nome que será exibido na Grade de Propriedade
      float público BurstCount {get;set;}

		...

      substituição pública no GetMaxParticlesPerSecond()
      (
          retorno (int)Math.Ceiling(SpawnCount) + (int)Math.Ceiling(BurstCount);
      }

      override público void SpawnNew (float dt, ParticleEmitter emitter)
      (
          // O estado é tratado pela classe base. Geralmente você só quer gerar partículas quando em estado ativo
          var spawnerState = GetUpdatedState(dt, emitter);
          se (espawnerState!= SpawnerState.Active)
              voltar;

          // Calcular partículas por segundo
          var toSpawn = spawnCount * dt + carry Over;
          linha de produção Parte = (int)Math.Floor(paraSpawn);
          transporte Sobre = paraSpawn - inteiro Parte;

          // Calcular partículas de explosão
          estourarTimer -= dt;
          se (burstTimer < 0)
          (
              explosão Temporizador += 1f;
              integerPart += (int)Math.Floor(BurstCount);
          }

          // Por fim, diga ao emissor quantas novas partículas queremos gerar este quadro
          emitter.EmitParticles (Partido inteiro);
      }
  }
```

Esta classe imita o @'Stride.Particles.Spawners.ParticleSpawner', com a adição de um `BurstCount` e um `burstTimer` para controlar com que frequência e quantas partículas são geradas em explosões.

O método `SpawnNew` é chamado cada quadro para permitir que o proprietário calcule quantas novas partículas devem ser emitidas na emissora com base no tempo decorrido.

Como exercício, tente implementar as seguintes alterações:

- Em vez de um segundo rajadas, criar uma propriedade e ter o usuário control o tempo.
- Remova os campos espawn-per-second e torná-lo um spawner de explosão puro.

Nosso spawner apenas emite partículas, mas não define nenhum campo. Isso é feito pelo inicializador.

## Inicialização

Queremos colocar as partículas em um cone e atirar neles para fora quando eles desovam.

```cs
  [DataContract("CustomParticleInitializer")]
  [Display("Cone Initializer")]
  classe pública CustomParticleInitializer : ParticleInitializer
  (
      [DataMember(100)]
      [DataMemberRange(0, 120, 0.01, 0.1)]
      [Display("Arc")]
      angle de flutuador público = 20f;

      [DataMember(200)]
      [Display("Velocity")]
      flutuador público Força = 1f;

      personalizado()Iniciante()
      (
          Requisitos.Adicionar (Fields de Partículas.Posição);
          Fields.Add (Fields de Partículas.Velocidade);
          RequeridasFields.Add (Fields de Partículas.RandomSeed);
      }

      anula de sobreposição inseguro público Inicialize(PartePool pool, int startIdx, int endIdx, int maxCapacity)
      (
			...
      }
  }
```

Nosso inicializador simplesmente define um ângulo para o cone e força para a velocidade. Qualquer escala e rotação do cone vêm da herança de localização e deslocamento, que são comuns para todos os inicializadores e atualizadores e estão prontos para usar. Para obter mais informações, consulte o @'Stride.Particles.Initializers.ParticleInitializer'.

O construtor para o inicializador é importante, pois define a lista de campos necessários que usaremos. O inicializador define a posição e a velocidade da partícula, então adicionamos esses, e precisa gerar alguma aleatoriedade, então também adicionamos a semente aleatória que vamos usar. Todas as partículas têm campos `Life` e `RandomSeed` quando elas surgiram.

```cs
// Este método é chamado para todas as novas partículas uma vez que o inicializador é adicionado a um emissor. Em vez de atualizar todos eles, temos um índice inicial e final e só devemos usar partículas no intervalo definido.
anula de sobreposição inseguro público Inicialize(PartePool pool, int startIdx, int endIdx, int maxCapacity)
(
  // Certifique-se de que os campos existem e evite o acesso à memória ilegal
	if (!pool.FieldExists(ParticleFields.Position) | !pool.FieldExists(ParticleFields.Velocity) | !pool.FieldExists(ParticleFields.RandomSeed)))))
		voltar;

	var posField = pool.GetField (ParticleFields.Position);
	var velField = pool.GetField (ParticleFields.Velocity);
	var rndField = pool.GetField (ParticleFields.RandomSeed);

	var range = (float) (Angle*Math.PI/180f);
	var magnitude = WorldScale. X;

	var i = começar Idx;
	(i!= endIdx)
	(
		var partícula = pool.FromIndex(i);
		var randSeed = partícula.Get (rndField);

		var x = (randSeed.GetFloat (RandomOffset.Offset2A + SeedOffset) - 0.5f)*range;
		var z = (randSeed.GetFloat (RandomOffset.Offset2B + SeedOffset) - 0.5f) * intervalo;

		var u = (randSeed.GetFloat (RandomOffset.Offset2A + SeedOffset) - 0.5f) * intervalo;
		var v = (randSeed.GetFloat (RandomOffset.Offset2B + SeedOffset) - 0.5f) * Math.PI;

		var xz = (float) Math.Sin(u);
		var partícula RandPos = novo Vector3((float) Math.Cos(v) * xz, (float)Math.Sqrt(1 - u*u), (float)Math.Sin(v) * xz);
		partículaRandPos.Normalize();

		partículas de partículas RandPos *= magnitude;
		WorldRotation. Rotate(ref partículaRandPos); // WorldRotation é a rotação atual do nosso inicializador. Podemos usá-lo como é, uma vez que herança e deslocamento já são tomados em consideração.

		(*((Vector3*) partícula[posField])) = partículaRandPos + WorldPosition; // WorldPosition é a posição atual do nosso inicializador. Podemos usá-lo como é, uma vez que herança e deslocamento já são tomados em consideração.

		(*((Vector3*) partícula[velField])) = partículaRandPos * Força;

		i = (i + 1) % maxCapacity;
	}
}
```

## Atualização

Queremos que nosso atualizador altere a largura e a altura de uma partícula cada quadro com base em uma função sine simples sobre a vida da partícula.

Porque ainda não há tal campo, comece criando um novo campo de partículas. Vamos nomeá-lo `RactangleXY`:

```cs
  classe estática pública CustomParticle Campos
  (
      public static readonly ParticleFieldDescription<Vector2> RectangleXY = new ParticleFieldDescription<Vector2>("RectangleXY", novo Vector2(1, 1));
  }
```

O campo tem tipo @'Stride.Core.Mathematics. Vector2', uma vez que só precisamos de dois valores para a largura e a altura. Nenhum campo é adicionado automaticamente às partículas, por isso mesmo que você tenha muitas declarações, o tamanho da partícula não mudará. Os campos só são adicionados quando conectamos um módulo que os requer, como o atualizador personalizado abaixo.

Para referência de API, consulte @'Stride.Particles.Modules.ParticleUpdater'.

```cs
  [DataContract("CustomParticleUpdater")] // Usado para serialização para que nosso objeto personalizado possa ser salvo. Uma boa prática é ter o contrato de dados tem o mesmo nome que o nome da classe.
  [Display("CustomUpdater")] // A menos que um nome de exibição seja especificado, o nome do contrato de dados será usado. Às vezes queremos escondê-lo e exibir algo mais simples.
  classe pública Personalizado ParticleUpdater : ParticleUpdater
  (
      [DataMemberIgnore] // Campos públicos e propriedades são serializados. Queremos evitar isso em alguns casos e podemos usar o atributo DataMemberIgnore.
      public override bool IsPostUpdater => true; // Ao fazer este atualizador um pós-updater podemos garantir que ele será chamado para partículas recém-sombradas e antigas (1 quadro ou mais)

      [DataMember(10)] // Este campo público será serializado. Com o atributo DataMember podemos especificar a serialização e a ordem de exibição.
      animação públicaCurveEnum Curva; // Consulte o código de amostra real para AnimatedCurveEnum

		// No construtor temos que especificar todos os campos que precisamos para este atualizador.
		// Ele calcula nosso campo recém-criado usando a vida útil da partícula, então precisamos de "RectangleXY" e "Life"
      anúncio()
      (
          // Este vai ser o nosso campo de "input"
          RequeridasFields.Add (Fields de Partículas.Life);

          // Este é o campo que queremos atualizar
          // Não faz parte dos campos básicos - criamos apenas para este atualizador
          RequeridasFields.Add (CustomParticleFields.RectangleXY);
      }

		// O método de atualização é chamado uma vez cada quadro e requer o atualizador para iterar sobre todas as partículas no pool e atualizar seus campos.
		// Se o atualizador é um pós-updater ele vai se chamar **depois * ** gerando novas partículas para este quadro e pode substituir seus valores iniciais no mesmo quadro
		// Se o atualizador não for um pós-updater ele será chamado **antes** de gerar novas partículas para este quadro e não pode substituir seus valores iniciais para o primeiro quadro
      override público void Update (float dt, ParticlePool pool)
      (
			...
      }
  }
```

Vamos dar uma olhada no método `Update`. O código da amostra é mais longo, mas aqui aparamos para a simplicidade.

```cs
override público void Update (float dt, ParticlePool pool)
(
  // Certifique-se de que os campos existem e evite o acesso à memória ilegal
  if (!pool.FieldExists (ParticleFields.Life) | !pool.FieldExists (CustomParticleFields.RectangleXY)))
      voltar;

  vida selvagem Campo = piscina.GetField (Fields de Partícula.Life);
  var retangular Campo = piscina.GetField (CustomParticleFields.RectangleXY);

  // Os lados X e Y dependem do pecado (tempo) e do cos(tempo)
  foreach (partícula var em piscina)
  (
      // A partícula continua a viver. Já está normalizado entre 0 e 1
      vida selvagem Pi = partícula.Get (lifeField) * MathUtil. Pi;

      // Defina o retângulo como uma função simples ao longo do tempo
      partícula. Set(rectangleField, novo Vector2((float)Math.Sin(lifePi), (float)Math.Cos (lifePi)));
  }
}
```

O atualizador irá animar todos os campos RectangleXY de partículas com um simples sine e funções cosinas ao longo de sua vida.

No próximo passo, vamos demonstrar como exibir os valores criados.

## Construtor de forma

O construtor de formato ` é a classe que leva todos os campos de partículas e cria a forma real que vamos renderizar.` É um pouco longo, por isso vamos acabar com isto.

```cs
	override público int QuadsPerParticle { get; protected set; } = 1;
```

O motor desenha quads usando 1 quad = 4 vértices = 6 índices, mas só podemos especificar o número de quads que precisamos. Para um retângulo precisamos apenas de um.

> [!Note]
> O número de quads é importante porque o buffer de vértice é alocado e mapeado antes de escrever os dados do vértice. Se alocarmos um buffer menor pode resultar em acesso ilegal de memória e corrupção.

```cs
substituição não segura pública int BuildVertexBuffer (ParticleVertexBuilder vtxBuilder, Vector3 inverseViewX, Vector3 inverseViewY,
  ref Vector3 spaceTranslation, ref Quaternion spaceRotation, float spaceScale, ParticleSorter classificador)
```

Este método é chamado quando precisa de nosso construtor de forma para iterar sobre todas as partículas e construir a forma. O @'Stride.Particles.VertexLayouts.ParticleVertexBuilder' é o wrapper em torno de nosso fluxo de vértice. Vamos usá-lo para escrever os dados do vértice para as partículas.

`inverseViewX` e `inverseViewY` são vetores unitários no espaço da câmera passados para o construtor de forma, se precisamos gerar formas voltadas para a câmera.

```cs
  foreach (partícula var no classificador)
  (
      var central Pos = partícula.Get (posiçãoField);

      var partícula Tamanho = tamanhoField.IsValid() ? partícula. Get(sizeField) : 1f;
      var rectangleSize = retangleField.IsValid() ? partícula.Get (rectangleField) : novo Vector2(1, 1);
      var unitX = invViewX * (particleSize * 0.5f) * rectangleSize.X;
      var unitY = invViewY * (particleSize * 0.5f) * retangleSize.Y;

      // Rotação de partículas. Valor positivo significa rotação no sentido horário.
      se (tem Ângulo) { ... }

      var partícula Pos = central Pos - unitX + unitY;
      var uvCoord = novo Vector2(0, 0);

      // 0f 0f
      vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
      vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
      vtxBuilder.NextVertex();

      // 1f 0f
      partículas de partículas Pos += unitX * 2;
      uvCoord.X = 1;
      vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
      vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
      vtxBuilder.NextVertex();

      // 1f 1f
      partículas de partículas Pos -= unitY * 2;
      uvCoord.Y = 1;
      vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
      vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
      vtxBuilder.NextVertex();

      // 0f 1f
      partículas de partículas Pos -= unitX * 2;
      uvCoord.X = 0;
      vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
      vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
      vtxBuilder.NextVertex();

      renderedParticles++;
  }
```

A largura e a altura das nossas partículas dependem tanto do campo de tamanho uniforme `Size` e do campo que criamos anteriormente neste avanço, `RectangleXY`. A partir daí, precisamos definir as posições e coordenadas de textura para os quatro vértices de canto do nosso quad. O número de vértices que temos de definir é por partícula quatro vezes o número de quads que pedimos.

Você pode adicionar formas ou atributos mais complicados aqui se o seu jogo requerê-los.

## Conclusão

Com esses 4 módulos personalizados, você pode adicionar muita funcionalidade ao mecanismo de partículas e adaptar o comportamento às suas necessidades. Porque todos eles são serializados e carregados no Game Studio, uma vez que você os cria, você pode usá-los diretamente no Game Studio, juntamente com os módulos principais.

Se você quiser experimentar os módulos, tente adicionar um novo arquivo `.cs` para o `CustomParticles. Projeto Game`. Você pode duplicar uma das classes existentes, mas não se esqueça de alterar o nome da classe e o contrato de dados para evitar colisões.

Você pode então recarregar os scripts no Game Studio. Se eles não carregarem, relança o seu projeto. Se não houver erros de compilação em seu código, você deve ver os novos módulos nas listas de proprietários, inicializadores, atualizadores e construtores de formas.

## Ver também

* [Tutorial: Criar uma trilha](create-a-trail.md)
* [Tutorial: Materiais de partículas](particle-materials.md)
* [Tutorial: Herança](inheritance.md)
* [Tutorial: Lasers e raios](lasers-and-lightning.md)
* [Partes](../index.md)
* [Criar partículas](../create-particles.md)