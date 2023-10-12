# Stride para desenvolvedores Godot

## Editor

## Terminologia

| Deus | Stride |
|-------|--------|
| Cena | Árvore de Entidade |
| Inspector | Grade de imóveis |
| Sistema de arquivos | Solução / Visualização de ativos |
| Vista da cena | Editor de cenas |
| Node | Entidade |
| Script de nó | SyncScript, AsyncScript, StartupScript |
| Exportação | Serialize/DataMember |
| GlobalClass | Contrato de Dados |

## Pastas e arquivos

- **Activos**
   - Em Godot você pode armazenar ativos em todos os lugares.
   - No Stride Assets estão na pasta de ativos
- Stride e Godot usam a Estrutura de Solução C# padrão. A principal diferença aqui é que a Stride usa a arquitetura multiProjeto que leva aos seguintes Projetos
   - `MyPackage.Game` contém seu código fonte.
   - `MyPackage.Platform` contém código adicional para as plataformas suportadas pelo seu projeto. Game Studio cria pastas para cada plataforma (por exemplo `MyPackage. Windows`, `MyPackage.Linux`, etc.). Essas pastas são geralmente pequenas e contêm apenas o ponto de entrada do programa.
   - E qualquer outro Subprojeto. Stride irá analisar os Subprojetos também como o projeto principal para obter classes e recursos DataContract no Editor/Game (não importa se o seu em um subprojeto ou não
- **Bin:** contém os binários e dados compilados. Stride cria a pasta quando você constrói o projeto, com um subdiretório para cada plataforma.
- **obj:** contém arquivos em cache. Game Studio cria esta pasta quando você construir seu projeto. Para forçar um ativo completo e reconstruir código, excluir esta pasta e construir o projeto novamente.
- **Recursos:** é um local sugerido para arquivos como imagens e arquivos de áudio usados por seus ativos, não confundi-los com recursos Godot, estes não existem no Stride. Stride tem no Scene Folders (estes podem ser usados de qualquer forma) onde você pode colocar classes que normalmente seriam Godot Recursos

### Abra o diretório do projeto do Game Studio

Você pode abrir o diretório do projeto de **Project > Mostrar no explorer** no Game Studio.

![ Abra o diretório do projeto do Game Studio](../stride-for-unity-developers/media/stride-vs-unity-open-project-in-windows-explorer.png)

## Definições do jogo
Godot salva configurações globais no [Project Settings](https://docs.godotengine.org/cs/stable/classes/class_projectsettings.html) .

~~A localização não é conhecida por me~~

Stride salva configurações globais em um único ativo, o ativo Configurações de Jogo. Você pode configurar:

- A cena padrão
- Configurações de renderização
- Definições do editor
- Definições de textura
- Configurações de física
- Substituições
- 
Para usar o ativo Configurações de Jogo, no **Asset View**, selecione **GameSettings** e veja suas propriedades no **Property Grid**.

## Cenas

Defina a cena padrão
Você pode ter várias cenas em seu projeto. Stride carrega a cena padrão no tempo de execução.

Para definir a cena padrão:

## Entidades vs Nodes

### Instruções

## Activos

## Recursos

O Stride não tem recursos como o Godot. Em Stride você pode adicionar pastas à sua cena e adicionar lá Entidades com seus dados. Outra abordagem seria salvar seus antigos Recursos em um Prefab separado e carregá-lo nas cenas que precisam dos Dados.

## Formatos de arquivo suportados

Como Godot, Stride suporta formatos de arquivo, incluindo:

| Tipo de recurso | Formatos suportados |
|---|---|
| Modelos, animações, esqueletos | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx |
| Sprites, texturas, caixas de céu | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff |
| Áudio | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc |
| Fontes | .ttf, .otf |
| Vídeo | .mp4 |

Para obter mais informações sobre ativos, consulte [Ativos](../game-studio/assets.md).

## Herança pré-fabricada

O equivalente à cena herdadada de Godot seria ArcheTypes. Os arquétipos são ativos mestres que controlam as propriedades dos ativos derivados deles. Os ativos derivados são úteis quando você quer criar uma versão "remixada" de um ativo. Isto é semelhante a prefabs.

Por exemplo, imagine que temos três entidades de esferas que compartilham um ativo material chamado Metal. Agora imagine que queremos mudar a cor de apenas uma esfera, mas mantenha suas outras propriedades iguais. Podemos duplicar o ativo material, mudar sua cor e, em seguida, aplicar o novo ativo a apenas uma esfera. Mas se mais tarde queremos mudar uma propriedade diferente em todas as esferas, temos que modificar ambos os ativos. Isso é demorado e deixa espaço para erros.

A melhor abordagem é derivar um novo ativo do arquétipo. O ativo derivado herda propriedades do arquétipo e permite que você substitua propriedades individuais onde você precisa delas. Por exemplo, podemos derivar o ativo material da esfera e substituir sua cor. Então, se mudarmos o brilho do arquétipo, o brilho de todas as três esferas muda.

## Entrada

Em Stride você tem a opção de obter a entrada através de traços chave como em Godot ou através de botões virtuais, que é semelhante ao mapeamento chave de Godot

```cs
atualização()
(
    // verdadeiro para um quadro em que a barra de espaço foi pressionada
    if(Input.IsKeyDown(Keys.Space))))
    (
        // Faz alguma coisa.
    }

    // verdadeiro enquanto este botão de joystick está para baixo
    se (Input.GameControllers[0].IsButtonDown(0))
    (
        // Faz alguma coisa.
    }

    flutuar Horiz = (Input.IsKeyDown (Keys.Left) ? - 1f 0) + (Input.IsKeyDown (Keys.Right)? 1f 0);
    float Vert = (Input.IsKeyDown (Keys.Down) ? - 1f 0) + (Input.IsKeyDown (Keys.Up)? 1f 0);
    //Faz outra coisa.
}
```

## Física

Tanto Stride quanto Godot oferecem motores de física abrangentes, mas sua abordagem para lidar com colisões e interações físicas diferem. Abaixo está uma comparação de suas características e funcionalidades.

### Stride

Em Stride, existem três tipos principais de colisões:

- ** Colliders estáticos:** Fixo no lugar e não se mova, tipicamente usado para elementos de ambiente como paredes ou pisos.
- **Rigidbodies:** Colliders dinâmicos que estão sujeitos a simulações físicas, como gravidade ou força.
- **Characters:** Colliders especiais projetados para trabalhar com controladores de caracteres.
- 
Para lidar com colisões no Stride, você pode adicionar métodos para um delegado dentro do método `Start()` do seu script. Esses métodos serão acionados quando ocorrer uma colisão. Para um tutorial abrangente sobre manipulação de colisão em Stride, você pode se referir a este tutorial [YouTube Stride - Collision triggers](https://www.youtube.com/watch?v=SIy3pfoXfoQ&ab_channel=Stride).

### Deus

Em Godot, você pode usar um sistema baseado em sinal para reagir a colisões. Sinais são emitidos quando eventos específicos ocorrem, como dois objetos colidindo, e você pode conectar esses sinais a métodos personalizados para executar sua própria lógica.

## Edição de Estúdio de Jogo

Tanto Stride quanto Godot oferecem editores de código integrados, mas suas capacidades e uso recomendado diferem.

### Stride

Stride vem com um editor de código C# integrado no Game Studio. Embora funcional, este editor não é um recurso de alta prioridade e pode não receber atualizações frequentes. Como tal, é geralmente recomendado usar IDEs dedicados para edição de código. Algumas escolhas populares incluem:

- Visual Studio Código: Livre, open-source e altamente extensível.
- Rider: Pago, mas oferece um conjunto robusto de recursos adaptados para . Desenvolvimento de NET.
- Comunidade Visual Studio: Livre para equipes pequenas e desenvolvedores individuais.
- Visual Studio Professional e Enterprise: Versões pagas com recursos e serviços adicionais.

### Deus

Godot fornece um editor de código integrado que suporta sua própria linguagem de scripting, GDScript, bem como C# e VisualScript. O editor Godot é mais firmemente integrado com o motor e geralmente é mantido up-to-date com novos recursos.

Em resumo, enquanto Stride e Godot oferecem editores de código integrados, o editor de Stride é melhor considerado uma ferramenta complementar em vez de um IDE completo. Recomenda-se usar IDEs especializados para tarefas de desenvolvimento mais complexas em Stride. O editor de Godot, por outro lado, é robusto o suficiente para o desenvolvimento em larga escala se você estiver usando GDScript ou C#.

## Scripts

### Diferentes abordagens para scripting

Em Stride, existem três tipos de scripts, oferecendo um paradigma diferente em comparação com Godot. Enquanto Godot exige que você herda de uma classe específica para criar um nó desse tipo, Stride permite que você estender entidades adicionando scripts e, em seguida, procurando entidades específicas para interagir com.

### Entidades pendentes em Stride

Por exemplo, em vez de herdar de `CharacterBody3D` em Godot, em Stride você anexaria um `CharacterComponent` a uma entidade. Não se esqueça de também anexar uma forma de colisão para torná-la interagiável. Em seus scripts, você pode então procurar esses componentes para manipulá-los.


#### Exemplo de Stride

```csharp
// Exemplo de pesquisa para um CharacterComponent em Stride
classe pública MyScript : Sincronização
(
    atualização()
    (
        personagem Componente = Entity.Get<CharacterComponent>();

        if (characterComponent!= null)
        (
            // Executar ações no caracterComponent
        }
    }
}
```

### Delegação Sobre a Herança

Esta abordagem em Stride incorpora o princípio de "Delegação sobre a Herança", proporcionando-lhe maior flexibilidade ao projetar a arquitetura do seu jogo.

### StartupScript

`StartupScript` em Stride tem um método `Start`, que é equivalente ao método `_Ready`. A `StartupScript` foca principalmente em tarefas de inicialização e não oferece muita funcionalidade além disso.

#### Exemplo de Stride
```csharp
classe pública BasicMethods: StartupScript
(
    // Campos e propriedades de membros públicos que serão visíveis no Game Studio
    anula de sobreposição pública Start()
    (
        // Código de inicialização para o script
    }

    sobreposição pública cancel()
    (
        // Código de limpeza para o script
    }     
}
```

#### Exemplo de Godot

```csharp
classe pública BasicMethods: Node
(
    // Este método é equivalente a Stride's Start in StartupScript
    sobreposição pública vazio _Ready()
    (
        // Código de inicialização para o script
    }

    // Godot não tem um equivalente direto a Stride's Cancel,
    // mas você poderia usar _ExitTree para limpeza
    anula de sobreposição pública _ExitTree()
    (
        // Código de limpeza para o script
    }
}
```

### Sincronização

Tanto Stride quanto Godot oferecem métodos que são repetidamente chamados para atualizações do jogo. Em Stride, este método é chamado de `Update()` e faz parte da classe `SyncScript`. Em Godot, o equivalente é `_Process(double delta)`.

**Principais diferenças**
1. **Delta Tempo:** Stride's `Update()` não inclui um parâmetro de tempo delta. Em contraste, Godot fornece o tempo desde o último quadro como um argumento (delta) em `_Process(double delta)`.
2. **Acesso ao Tempo Delta:** Em Stride, você ainda pode acessar o tempo delta através da propriedade Game, `usando Game.UpdateTime.Elapsed.TotalSeconds`.

#### Exemplo de Stride


```csharp
classe pública BasicMethods: Sincronização
(
    anulado público Start() { }
    público anulado Cancelar() { }        
    atualização()
    (
        // Acesso delta tempo em Stride
        double deltaTime = Game.UpdateTime.Elapsed.TotalSeconds;

        // Realizar ações com base no delta Tempo
    }
}
```

#### Exemplo de Godot

```csharp
classe pública BasicMethods: Node
(
    anulado público _Ready() { }
    anulado público _ExitTree() { }        
    anula de sobreposição pública _Process(double delta)
    (
        // Realizar ações com base no delta
    }
}

```

### AsyncScripts

Tanto Stride quanto Godot fornecem maneiras de executar o código assíncrono, mas eles usam diferentes abordagens.

#### Exemplo de Stride

Stride oferece uma classe especializada `AsyncScript` que permite executar o código assíncrono usando a sintaxe `async`/`await`. O método `Execute()` pode ser aguardado, permitindo que seu código seja executado sem bloquear o loop principal do jogo.


```csharp
classe pública BasicMethods: AsyncScript
(
    // Campos e propriedades de membros públicos serão visíveis no Game Studio
    override público async Task Execute()
    (
        // O código de inicialização deve vir aqui, se necessário

        // Loop até o fim do jogo (opcional dependendo do script)
        enquanto (Game.IsRunning)
        (
            aguarde MyEvent;

            // Faz alguma coisa

            // Aguarde o próximo quadro (opcional dependendo do script)
            await Script.NextFrame();
        }
    }

    sobreposição pública cancel()
    (
        // Código de limpeza para o script
    }     
}

```

#### Exemplo de Godot

Godot não oferece uma classe dedicada <g id="1">AsyncScript</g> como Stride. No entanto, você ainda pode escrever código assíncrono em C# usando o padrão <g id="2">async</g>await</g> sintaxe.<g id="3">

```csharp
classe pública BasicMethods: Node
(
    público async anulado _Ready()
    (
        esperar ToSignal (GetTree().CreateTimer(1.0f), "timeout");
        // Executar código após 1 segundo timer elapses
    }

    // Godot não tem um equivalente direto ao método Stride's Cancel
    anula de sobreposição pública _ExitTree()
    (
        // Código de limpeza para o script
    }
}
```

Em resumo, tanto Stride quanto Godot oferecem mecanismos para executar o código assíncrono, mas eles conseguem isso de maneiras diferentes. Stride fornece uma classe `AsyncScript`, enquanto Godot permite o código assíncrono através de mecanismos C# padrão.

## Componentes de script

Em Stride e Godot, os scripts são usados para definir comportamento e lógica para entidades do jogo. No entanto, a forma como você anexa e gerencia esses scripts difere entre os dois motores.

### Criar um script

#### Stride

Para criar um script, clique em ** Adicionar asset** e selecione **Scripts**.

![Criar script em Stride](../stride-for-unity-developers/media/stride-vs-unity-create-script.png)

Stride tem uma classe [SyncScript](xref:Stride.Engine.SyncScript) que vem com métodos como:

* [Start()](xref:Stride.Engine.StartupScript.Start) é chamado quando o script é carregado.
* [Update()](xref:Stride.Engine.SyncScript.Update) é chamado cada quadro.


Se você precisar de lógica assíncrona ou específica de inicialização, você pode usar:

* [StartupScript](xref:Stride.Engine.StartupScript): este script tem um único método [Start()](xref:Stride.Engine.StartupScript.Start). Ele inicializa a cena e seu conteúdo na inicialização.
* [AsyncScript](xref:Stride.Engine.AsyncScript): um script assíncrono com um único método [Execute()](xref:Stride.Engine.AsyncScript.Execute) e você pode usar `async`/>/`await` dentro desse método. Os scripts assíncronos não são carregados um por um como scripts síncronos. Em vez disso, estão todos carregados em paralelo.

#### Deus

Em Godot, você pode criar um script do editor ou anexar um script existente a um nó através do Inspector.

Em Godot, você usa métodos como `_Ready()` para inicialização e `_Process(delta)` para atualizações frame-by-frame. Godot também suporta a sintaxe `async`/`await` em C#.


### Conjuntos de recarga

#### Stride

Depois de criar ou editar um script, você deve recarregar manualmente as assembléias clicando **Reload assemblies** na barra de ferramentas Game Studio.

![Reload assemblies](../platforms/media/reload-assemblies.png)

#### Deus

Godot automaticamente recarrega scripts quando eles são salvos, nenhuma recarga manual é necessária.

### Adicionar scripts a entidades

#### Stride

1. No **Entity Tree** (à esquerda por padrão), ou na cena, selecione a entidade a que deseja adicionar o script.

   ![Selecione uma entidade](../scripts/media/select-entity.png)
2. No **Property Grid** (à direita por padrão), clique em **Add component** e selecione o script que deseja adicionar.

   ![ Adicionar componente de script](../scripts/media/add-script-component.png)

#### Deus

1. Selecione o nó no **Scene Tree**.
1. No **Inspector**, clique no botão **Attach Script** ou prenda um script existente.

Em Stride, os scripts são listados alfabeticamente junto com outros componentes. Em Godot, os scripts são anexados diretamente aos nós e aparecem como sub-recursos no **Inspector**.

Para obter mais informações sobre como adicionar scripts no Stride, consulte [Use um script](../scripts/use-a-script.md).

## Pré-fabricados instantâneos

Em Stride, você pode instanciar entidades usando prefabs como assim:

```cs
// Campos e propriedades de membros públicos exibidos no Game Studio Property Grid
público pré-fabricada CarPrefab;
público Vector3 SpawnPosition;
público Quaternion SpawnRotation;

anula de sobreposição pública Start()
(
    // Inicialização do script
    List<Entity> carEntidades = CarPrefab.Instantiate();
    
    // Adicione as entidades instantâneas à cena raiz
    SceneSystem.SceneInstance.RootScene.Entities.AddRange(carEntities);
    
    // Defina a posição e a rotação da primeira entidade na lista
    carEntities[0].Transform.Position = SpawnPosition;
    carEntities[0]. Transform.Rotation = SpawnRotation;
    
    // Opcionalmente, você pode definir um nome para a entidade
    carEntities[0]. Nome = "MyNewEntity";
}
```

## Serialização

### Deus

Em Godot, você precisa herdar de uma classe de motor para que ele seja visível no editor. Além disso, apenas tipos conhecidos para o motor Godot podem ser exportados.

### Stride

Stride toma uma abordagem diferente, visando uma integração mais estreita com C#.

#### Atributo de Contrato de Dados

Para tornar sua classe serializável dentro do Game Studio, adicione o atributo `[DataContract]` à sua classe. Por padrão, todos os membros públicos serão serializados.

```csharp
[Contrato de Dados]
classe pública MyClass
(
    public int MyProperty { get; set; }
}
```


#### Atributo de membro de dados

Se você quiser ser explícito sobre o que é serializado, você pode usar o atributo `[DataMember]`. Isso é semelhante ao atributo `[Export]` de Godot.

```csharp
[Contrato de Dados]
classe pública MyClass
(
    [DataMember]
    public int MyProperty { get; set; }
}
```

#### Excluindo os membros

Para excluir um membro da serialização, use o atributo `[DataMemberIgnore]`.

```csharp
[Contrato de Dados]
classe pública MyClass
(
    [DataMemberIgnore]
    public int MyProperty { get; set; }
}
```

#### Coleções e dicionários

Stride suporta classes `ICollection` e `IDictionary` para serialização. Note que apenas primitivos e enums podem ser usados como chaves em dicionários.

Em Godot você tem que exportar coleções Godot para ser visível no Editor.

#### Serialização aninhada

Você pode serializar qualquer classe marcada com `[DataContract]` no editor, incluindo classes abstratas ou interfaces. O **Stride Editor** procurará tipos que correspondam às interfaces ou classes abstratas, tornando-os elegíveis para serialização.

## Saída de log

Em Godot você pode GD. Imprima sua mensagem. //TODO O que significa?

Para visualizar a saída de log, vá para a barra de ferramentas **Game Studio** e clique em **View**, então ative a opção **Output**.

![ Activar saída](../stride-for-unity-developers/media/enable-output.png)

Uma vez habilitado, a aba **Output** aparecerá, tipicamente localizada na parte inferior da interface **Game Studio**.

![Output tab](../stride-for-unity-developers/media/output-tab.png)


### Imprimir mensagens de depuração

Para imprimir na saída Visual Studio, use:

```cs
System.Diagnostics.Debug.WriteLine("hello");
```

> [!Note]
> Para imprimir mensagens de depuração, você tem que executar o jogo do Visual Studio, não Game Studio. Não há como imprimir na janela de saída do Game Studio.