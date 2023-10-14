# Stride para desenvolvedores Unity®

O Stride e o Unity® usam o C# e compartilham muitos conceitos, com algumas volumosos diferenças.

![Stride para desenvolvedores Unity®](media/stride-vs-unity-opening-image.png)

## Editor

O editor Stride é **Game Studio**. Este é o equivalente ao Editor Unity®.

![Stride e Unity® interface comparação](media/stride-vs-unity-interface-comparison.png)

*Unity® captura de tela tirada de [ Chamando um serviço web de uma cena Unity3D](http://through-the-interface.typepad.com/through_the_interface/2012/04/calling-a-web-service-from-a-unity3d-scene.html) por Kean Walmsley.*

Você pode personalizar o layout Game Studio arrastando abas, semelhante ao Visual Studio.

Para obter mais informações sobre Game Studio, consulte a página [Game Studio](../game-studio/index.md).

## Terminologia

Unity® e Stride usam termos mais comuns, com algumas diferenças:

| Unity® | Stride |
|-----------------|----------------------------------------|
| Painel de Hierarquia | Árvore de Entidade |
| Inspector | Grade de imóveis |
| Navegador de projeto | Visualização de ativos |
| Vista da cena | Editor de cenas |
| GameObject | Entidade |
| MonoBehaviour | SyncScript, AsyncScript, StartupScript |

## Pastas e arquivos

Como Unity®, os projetos Stride são armazenados em um diretório que contém:

* O projeto ``.sln`` arquivo de solução, que você pode abrir com Game Studio ou qualquer IDE, como Visual Studio

* a **MyGame.Game** pasta com arquivos de origem do projeto, dependências, recursos, configurações e binários

   ![Package folder structure](../files-and-folders/media/folder-structure.png)

* **Ativos** contém arquivos de configuração de ativos.

* **Bin** contém os binários e dados compilados. Stride cria a pasta quando você constrói o projeto, com um subdiretório para cada plataforma.

* **MyPackage.Game** contém seu código fonte.

* **MyPackage.Platform** contém código adicional para as plataformas suportadas pelo seu projeto. Game Studio cria pastas para cada plataforma (por exemplo, *MyPackage. Windows*, *MyPackage.Linux*, etc.). Estas pastas são geralmente pequenas e apenas contêm o ponto de entrada do programa.

* **obj** contém arquivos em cache. Game Studio cria esta pasta quando você construir seu projeto. Para forçar um ativo completo e reconstruir código, excluir esta pasta e construir o projeto novamente.

* **Assets** é o local recomendado para armazenar arquivos de origem para o seu projeto, como texturas, modelos e arquivos de áudio.

Stride e Unity® diferem das seguintes formas:

* O Stride não copia automaticamente arquivos de assets para sua pasta de projeto quando você os importa em ativos. Tens de fazer isto sozinho. Recomendamos que você os salve na pasta **Resources**.

* O Stride não requer arquivos de assets e arquivos de ativos para estar na mesma pasta. Você pode salvar arquivos de assets na pasta Ativos se quiser, mas em vez disso, recomendamos salvá-los na pasta **Resources**. Isso facilita o compartilhamento de seu projeto via controle de versão.

Para obter mais informações sobre a estrutura do projeto em Stride, incluindo conselhos sobre como organizar e compartilhar seus arquivos, consulte a página [Projeto estrutura](../files-and-folders/project-structure.md).

### Abra o diretório do projeto do Game Studio

Você pode abrir o diretório do projeto de **Project > Mostrar no explorer** no Game Studio.

![ Abra o diretório do projeto do Game Studio](media/stride-vs-unity-open-project-in-windows-explorer.png)

## Definições do jogo

Unity® salva configurações globais em ativos separados (i.e. Configurações gráficas, Configurações de qualidade, Gerenciador de áudio e assim por diante).

O Stride salva configurações globais em um único ativo, o ativo **Game Settings**. Você pode configurar:

* A cena padrão **default**
* **Configurações de renderização**
* **Definições do editor**
* **Definições de textura**
* **Configurações de física**
* **Substituições**

Para usar o ativo Configurações de Jogo, no **Asset View**, selecione **GameSettings** e veja suas propriedades no **Property Grid**.

![ Configurações do jogo ](media/game-settings.png)

## Cenas

Como Unity®, em Stride, coloca todos os objectos numa cena. Game Studio armazena cenas como ativos separados ``.sdscene`` em seu diretório de projeto.

### Defina a cena padrão

Você pode ter várias cenas em seu projeto. A cena que carrega assim que seu jogo começa é chamada de *Default Scene*.

Para definir a cena padrão:

1. Nas propriedades **GameSettings**, ao lado de **Default Scene**, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

   ![ Definir a cena padrão](media/stride-vs-unity-game-settings-default-scene.png)

   A janela **Selecione um ativo** abre.

2. Selecione a cena padrão e clique em **OK**.

Para mais informações sobre cenas, veja [Scenes](../game-studio/scenes.md).

## Entidades vs GameObjects

Em Unity®, os objetos na cena são chamados **GameObjects**. Em Stride, eles são chamados de **entities**.

![ Entidades em Stride](media/stride-vs-unity-entities.jpg)

Como GameObjects, as entidades são transportadoras para componentes como componentes de transformação, componentes de modelo, componentes de áudio e assim por diante. Se você está acostumado a trabalhar com GameObjects em Unity®, você não deve ter nenhum problema usando entidades no Game Studio.

## Componentes de Entidade

No Stride, você adiciona componentes a entidades como você adiciona componentes ao GameObjects no Unity®.

Para adicionar um componente a uma entidade no Game Studio:

1. Selecione a entidade a que deseja adicionar o componente.
2. No **Property Grid** (à direita por padrão), clique em ** Adicionar componente** e selecione o componente da lista suspensa.

   ![ Adicionar componente](media/stride-vs-unity-add-component-to-entity.png)

### Componente de transformação

Como GameObjects in Unity®, cada entidade em Stride tem um componente [Transform](xref:Stride.Engine.TransformComponent) que define sua posição, rotação e escala no mundo.

![ Componente de transferência](media/stride-vs-unity-entity-transform-component.png)

Todas as entidades são criadas com um componente Transform por padrão.

No Stride, os componentes Transform contêm um LocalMatrix e um WorldMatrix que são atualizados em cada frame de Atualização. Se você precisa forçar uma atualização mais cedo do que isso você pode usar `TranformComponent.UpdateLocalMatrix()`, `Transform.UpdateWorldMatrix()`, ou `Transform.UpdateLocalFromWorld()` para fazer isso, dependendo de como você precisa atualizar a matriz.

#### Posição local/Rotação/Scale
Stride usa posição, rotação e escala para se referir à posição local, rotação e escala.

| Unity® | Stride |
|------------------------------|------------------------------|
| `transform.localPosition` | `Transformação.Posição` |
| `transformação.localRotation` | `Transformação.Rotação` |
| `transform.localScale` | `Transformar. Escala` |
| `transform.localEulerAngles` | `Transformação.RotationEulerXYZ` |

#### Posição Mundial/Rotação/Scale
Em comparação com a Unity, muitas das propriedades do componente Transform relacionadas à sua localização no mundo foram transferidas para o [WorldMatrix](xref:Stride.Engine.TransformComponent.WorldMatrix).

| Unity® | Stride |
|-------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `transform.position` | `Transform.WorldMatrix.TranslationVector` |
| `transformação.rotação` | N/A |
| `transformação.scale` | N/A |
| `transform.eulerAngles` | `Transform.WorldMatrix.DecomposeXYZ (out Vector3 rotação)` |
| `transform.scale` e `transform.position` | `Transform.WorldMatrix.Decompose (out Vector3 scale, out Vector3 translation)` |
| `transform.scale`, `transform.rotation` e `transform.position` | `Transform.WorldMatrix.Decompose (fora a escala Vector3, rotação de Quaternion, fora a tradução Vector3)` |

> [!Note]
> `WorldMatrix` só é atualizado depois que todo o loop de Atualização é executado, o que significa que você pode estar lendo dados desatualizados se a posição do objeto ou de seu pai mudou entre o quadro anterior e agora.
> Para garantir que você esteja lendo a última posição e rotação, você deve forçar a matriz a atualizar chamando `Transform.UpdateWorldMatrix()` antes de ler a partir dele.

#### Transformar direções
Ao contrário da Unity, Stride fornece uma propriedade Backward, Left e Down.
No entanto, é importante ressaltar que essas são propriedades de matriz, então definir uma dessas não é suficiente para girar adequadamente a matriz.

| Unity® | Stride |
|--------------------------|----------------------------------|
| `transform.forward` | `Transform.WorldMatrix` |
| `transform.forward * -1` | `Transform.WorldMatrix` |
| `transformação.right` | `Transformar. WorldMatrix. Certo` |
| `transform.right * -1` | `Transformar. WorldMatrix. Esquerda` |
| `transformação.up` | `Transformar. WorldMatrix.Up` |
| `transform.up * -1` | `Transform.WorldMatrix. Para baixo` |

> [!Note]
> Ver nota em [ Posição Mundial/Rotação/Scale](#world-positionrotationscale)

## Activos

No Unity®, você seleciona um ativo no navegador **project** e edita suas propriedades na aba **Inspector**.

Stride é semelhante. Você seleciona um ativo no **Asset View** e edita suas propriedades no **Property Grid**.

![Ativos e propriedades](media/asset-and-properties.png)

Para certos tipos de ativos, Game Studio também tem editores dedicados:

* pré-fabricados
* cenas
* folhas de sprite
* Páginas de interface
* Bibliotecas de interface
* scripts

Para abrir o editor dedicado para esses tipos de ativos:

* clique duas vezes no ativo, ou
* clique com o botão direito do mouse no ativo e selecione Editar ativos, ou
* selecione o ativo e digite Ctrl + Entrar

O editor abre em uma nova aba. Você pode organizar as guias como você gosta, ou flutuar como janelas separadas, assim como guias em navegadores da web.

![Dedicated Stride editores](media/stride-vs-unity-different-editors.png)

> [!Note]
> Quando você modifica arquivos de assets fora do Game Studio, os ativos correspondentes atualizam automaticamente no Game Studio.

### Activos de importação

Para importar um ativo, arraste-o do Explorer para o **Asset View**. Você também pode clicar em um botão **Add asset**, navegar para o arquivo desejado e especificar o tipo de ativo que deseja importar.

Assim que você adicionar um ativo ao seu projeto, você pode editar suas propriedades no **Property Grid**.

![ Adicionar asset](media/stride-vs-unity-add-asset.png)

> [!Note]
> Ao contrário do Unity®, a Stride não copia automaticamente arquivos de assets para o diretório do projeto quando você os importa para projetos.

### Formatos de arquivo suportados

Como Unity®, o Stride suporta formatos de arquivo, incluindo:

| Tipo de asset | Formatos suportados |
|-------------------------------|--------------------------------------------------------------|
| Modelos, animações, esqueletos | .dae, .3ds, obj, .blend, .x, .md2, .md3, .dxf, .fbx |
| Sprites, texturas, caixas de céu | .dds, .jpg, .jpeg, .png, .gif, .bmp, .tga, .psd, .tif, .tiff |
| Áudio | .wav, .mp3, .ogg, .aac, .aiff, .flac, .m4a, .wma, .mpc |
| Fontes | .ttf, .otf |
| Vídeo | .mp4 |

Para obter mais informações sobre ativos, consulte [Ativos](../game-studio/assets.md).

## Pré-fabricados

Como Unity®, a Stride usa pré-fabricados. Prefabs são versões "master" de objetos que você pode reutilizar onde quiser. Quando você muda uma pré-fabricada, cada instância do prefab também muda.

![Prefabs em Stride](media/stride-vs-unity-prefabs.webp)

Assim como com Unity®, em Stride, você pode adicionar prefabs a outras pré-fabricadas. Estes são chamados **nested prefabs**. Se você modificar uma pré-fabricada aninhada, todas as pré-fabricas dependentes herdam a mudança automaticamente.

Por exemplo, imagine que você crie uma pré-fabricada *Vehicle* com aceleração, travagem, direção e assim por diante. Então você aninha o *Vehicle* pré-fabricada dentro de pré-fabricas de diferentes tipos de veículos: um táxi, ônibus, caminhão, etc. Se você ajustar uma propriedade na pré-fabricada *Vehicle*, as alterações são herdadas por todas as outras pré-fabricadas. Por exemplo, se você aumentar a propriedade Acceleration no pré-fabricado *Vehicle*, a propriedade de aceleração nos pré-fabricados de táxi, ônibus e caminhão também aumentar.

Para obter mais informações sobre o uso de pré-fabricadas em Stride, consulte [Prefabs](../game-studio/prefabs/index.md).

## Arquétipos

**Arquétipos** são ativos mestre que controlam as propriedades de ativos que você **derive** deles. Os ativos derivados são úteis quando você quer criar uma versão "remixada" de um ativo. Isto é semelhante a prefabs.

Por exemplo, imagine que temos três entidades de esferas que compartilham um ativo material chamado *Metal*. Agora imagine que queremos mudar a cor de apenas *one* esfera, mas mantenha suas outras propriedades iguais. Podemos duplicar o ativo material, mudar sua cor e, em seguida, aplicar o novo ativo a apenas uma esfera. Mas se mais tarde queremos mudar uma propriedade diferente em *all* as esferas, temos que modificar ambos os ativos. Isso é demorado e deixa espaço para erros.

A melhor abordagem é derivar um novo ativo do arquétipo. O ativo derivado herda propriedades do arquétipo e permite que você substitua propriedades individuais onde você precisa delas. Por exemplo, podemos derivar o ativo material da esfera e substituir sua cor. Então, se mudarmos o brilho do arquétipo, o brilho de todas as três esferas muda.

![Create derivado asset](../game-studio/media/archetypes-three-spheres.png)

Você pode derivar um ativo de um arquétipo, então, por sua vez, deriva outro ativo daquele ativo derivado. Desta forma, você pode criar diferentes camadas de ativos para manter seu projeto organizado:

```cs
Arquétipo
    Activo derivado
        Activo derivado
```

Para obter mais informações sobre arquétipos, consulte [Arquétipos](../game-studio/archetypes.md).

## Tempo de vida do objeto

Entidades e componentes não são destruídos em Stride, eles são removidos da cena em que eles existem e então liberados pelo [Garbage Collector](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/).

Esta diferença aparentemente pequena muda significativamente como os objetos são gerenciados dentro do motor.
Por exemplo, as entidades podem ser removidas de uma cena, mantidas como uma referência em um componente, e adicionadas de volta a outra cena mais tarde.
Os componentes podem ser removidos de uma entidade e adicionados para outra sem perder seu estado interno.

## Entrada

Stride suporta uma variedade de entradas. As amostras de código abaixo demonstram a diferença no código de entrada entre Stride e Unity®.

Para obter mais informações sobre a entrada em Stride, consulte [Input](../input/index.md).

#### Unity®
```cs
void Update()
(
    // verdadeiro para um quadro em que a barra de espaço foi pressionada
    if(Input.GetKeyDown(KeyCode.Space))))
    (
        // Faz alguma coisa.
    }

    // verdadeiro enquanto este botão de joystick está para baixo
    se (Input.GetButton("joystick botão 0")))
    (
        // Faz alguma coisa.
    }

    flutuar Horiz = Entrada.GetAxis("Horizontal");
    float Vert = Input.GetAxis("Vertical");
    //Faz outra coisa.
}
```
#### Stride
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

## Tempo

| Unity® | Stride |
|-----------------------------|-------------------------------------------------|
| `Tempo.deltaTime` | `Game.UpdateTime.WarpElapsed.TotalSeconds` |
| `Tempo.unscaledDeltaTime` | `Game.UpdateTime.Elapsed.TotalSeconds` |
| `Time.realtimeInício` | `Game.UpdateTime.Total.Conds` |
| `Tempo.timeScale` | `Game.UpdateTime.Factor` |
| `Tempo. fixoDeltaTime` | `myRigidbodyComponent.Simulation.FixedTimeStep` |

## Física

Assim como Unity®, a Stride tem três tipos de colisões:

* coleiras estáticas
* rígidos
* caracteres

Eles são controlados por scripts de maneiras ligeiramente diferentes.

### Rígidos caninemáticos

#### Unity®

```cs
público Rigidbody rigidBody;
void Start()
(
    rigidBody = GetComponent<Rigidbody>();
}

anular Ativar()
(
    rigidBody.isKinematic = false;
    rigidBody.detectCollisions = true;
}

void DisableRagdoll()
(
    rigidBody.isKinematic = true;
    rigidBody.detectCollisions = false;
}
```

#### Stride

```cs
classe pública KinematicX: Sincronização
(
    public RigidbodyComponent component;

    anula de sobreposição pública Start()
    (
        // Inicialização do script.
        component = Entity.Get<RigidbodyComponent>();
    }

    atualização()
    (
    }

    anula pública Ativar()
    (
        componente. IsKinematic = false;
        componente.ProcessCollisions = true;
    }

    vazio público DisableRagdoll()
    (
        componente. IsKinematic = true;
        componente.ProcessCollisions = false;
    }
}
```

Para obter mais informações sobre corpos rígidos em Stride, consulte [Rigidbodies](../physics/rigid-bodies.md).

### Triggers

#### Unity®

```cs
// Ocorre quando os objetos do jogo passam por este gatilho.
void OnTriggerEnter (Collider Other)
(
    Outros.transform.localScale = novo Vector3(2.0f, 2.0f, 2.0f);
}

// Ocorre quando os objetos do jogo se movem para fora deste gatilho.
void OnTriggerExit (Collider Other)
(
    Outros.transform.localScale = novo Vector3(1.0f, 1.0f, 1.0f);
}
```

#### Stride

```cs
var trigger = Entity.Get<PhysicsComponent>();
gatilho. Cores de processo = verdadeira;

// Iniciar máquina estatal.
enquanto (Game.IsRunning)
(
    // 1. Aguarde que uma entidade colide com o gatilho.
    Collision firstCollision = await trigger. NewCollision();

    PhysicsComponent otherCollider = trigger == firstCollision. ColliderA
        ? Primeira Colisão. ColliderB
        : primeira Colisão. ColliderA;
    otherCollider.Entity.Transform.Scale = novo Vector3(2.0f, 2.0f, 2.0f);

    // 2. Espere que a entidade saia do gatilho.
    Colisão;

    do
    (
        colisão = esperar gatilho. ColisãoEnded();
    }
    enquanto (colisão = primeira Colisão);

    outrosCollider.Entity.Transform.Scale = novo Vector3(1.0f, 1.0f, 1.0f);
}
```

Para obter mais informações sobre gatilhos em Stride, consulte [Triggers](../physics/triggers.md)

### Raycasting

#### Unity®

```cs
Camisola de gola com aparência()
(
    distância int = 50;

    // Elevar um raio e defini-lo para a posição do cursor do mouse no jogo
    Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    Raycast Acertar;
    se (Physics. Raycast (ray, out hit, distância))
    (
        // Desenhe o elenco/vector de raio invisível
        Debug.DrawLine (ray.origin, hit.point);
        // Log hit area to console
        Debug.Log (hit.point);
        retorno hit.collider;
    }
    retornar null;
}
```

#### Stride

```cs
bool estático público ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent câmera, Simulação)
(
    Matrix invViewProj = Matrix.Invert (camera.ViewProjectionMatrix);

    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    sPos.Z = 0f;
    Vector4 vetorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    sPos.Z = 1f;
    Vetor Vector4 Far = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    Resultado do HitResult = simulação. Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    resultado de retorno. Sucedida;
}
```
Para obter mais informações sobre Raycasting em Stride, consulte [Raycasting](../physics/raycasting.md).

## Scripts

Stride salva scripts em uma subpasta na pasta **MyGame.Game** no diretório do projeto.

Para abrir um script no editor de scripts Game Studio, clique duas vezes no **Asset View**. O editor de scripts tem destaque de sintaxe, auto-compleção e diagnósticos ao vivo.

![Stride script editor](media/stride-vs-unity-script-editor.png)

Você também pode editar scripts em outros IDEs, como o Visual Studio. Quando você edita um script em um IDE externo, Stride o recarrega automaticamente.

Se você instalar o plug-in Visual Studio durante a instalação Stride, você pode abrir seu projeto no Visual Studio do Game Studio. Para fazer isso, na barra de ferramentas Game Studio, clique em **Open in IDE**.

![ Projeto aberto em Visual Studio](media/stride-vs-unity-open-project-in-visual-studio.png)

Alternativamente, clique com o botão direito do mouse no script **Asset View** e clique em **Open asset file**:

![Open asset file](media/stride-vs-unity-open-asset-file.png)

### Funções do evento (Iniciar, atualizar, executar, etc)

No Unity®, você trabalha com MonoBehaviours com Start(), Update(), e outros métodos.

Em vez de MonoBehaviours, Stride tem três tipos de scripts: SyncScript, AsyncScript e StartupScript. Para mais informações, consulte [Típes de script](../scripts/types-of-script.md).

### Unity® MonoBehaviour

```cs
classe pública BasicMethods: MonoBehaviour
(
    void Start() { }
    anular OnDestroy() {
    void Update() { }
}
```

### Sincronização de caracteres

```cs
classe pública BasicMethods: Sincronização
(
    anulado público Start() { }
    público anulado Cancelar() { }        
    atualização() { }
}
```

### Stride AsyncScript

```cs
classe pública BasicMethods: AsyncScript
(
    // Campos de membros públicos declarados e propriedades que aparecerão no estúdio de jogos
    override público async Task Execute()
    (
        enquanto (Game.IsRunning)
        (
            // Fazer coisas cada novo quadro
            await Script.NextFrame();
        }
    }

    sobreposição pública cancel()
    (
        // Limpeza do script
    }     
}
```

### Stride StartupScript

```cs
classe pública BasicMethods: StartupScript
(
    // Campos de membros públicos declarados e propriedades que aparecerão no estúdio de jogos
    anula de sobreposição pública Start()
    (
        // Inicialização do script
    }

    sobreposição pública cancel()
    (
        // Limpeza do script
    }     
}
```

## Componentes de script

Como Unity®, em Stride, você anexa scripts a entidades adicionando-as como componentes de script.

### Criar um script

Para criar um script, clique no botão **Add asset** e selecione **Scripts**.

![Criar script em Stride](media/stride-vs-unity-create-script.png)

Em Unity®, quando você cria um `MonoBehaviour` script, tem duas funções básicas: `Start()` e `Update()`. Stride tem um [SyncScript](xref:Stride.Engine.SyncScript) que funciona de forma semelhante. Como `MonoBehaviour`, [SyncScript](xref:Stride.Engine.SyncScript) tem dois métodos:

* [Start()](xref:Stride.Engine.StartupScript.Start) é chamado quando o script é carregado.

* [Update()](xref:Stride.Engine.SyncScript.Update) é chamado cada atualização.

Ao contrário de `MonoBehaviour`, você tem que usar o método [Update()](xref:Stride.Engine.SyncScript.Update) em cada [SyncScript](xref:Stride.Engine.SyncScript), ou seu código não funcionará corretamente.

Se você quiser que seu script seja uma startup ou assíncrona, use os tipos de script correspondentes:

* [StartupScript](xref:Stride.Engine.StartupScript): este script tem um único método [Start()](xref:Stride.Engine.StartupScript.Start). Ele inicializa a cena e seu conteúdo na inicialização.

* [AsyncScript](xref:Stride.Engine.AsyncScript): um script assíncrono com um único método [Execute()](xref:Stride.Engine.AsyncScript.Execute) e você pode usar async/await dentro desse método. Os scripts assíncronos não são carregados um por um como scripts síncronos. Em vez disso, estão todos carregados em paralelo.

### Conjuntos de recarga

Depois de criar um script, você pode ter que recarregar os conjuntos manualmente. Para fazer isso, clique em **Reload assemblies** na barra de ferramentas Game Studio.

![Reload assemblies](../platforms/media/reload-assemblies.png)

### Adicionar scripts a entidades

1. No **Entity Tree** (à esquerda por padrão), ou na cena, selecione a entidade a que deseja adicionar o script.

   ![Selecione uma entidade](../scripts/media/select-entity.png)

2. No **Property Grid** (à direita por padrão), clique em **Add component** e selecione o script que deseja adicionar.

![ Adicionar componente de script](../scripts/media/add-script-component.png)

Em Unity®, os componentes de script são agrupados sob **Componentes > Scripts**. Em Stride, os scripts não são agrupados. Em vez disso, Game Studio lista-os alfabeticamente com outros componentes.

Para obter mais informações sobre como adicionar scripts no Stride, consulte [Use um script](../scripts/use-a-script.md).

## Jogabilidade de scripting

Unity® e Stride usam C#. No entanto, a jogabilidade de scripting no Stride é um pouco diferente do Unity®.

### Entidade instantânea / GameObject

No Unity®, você usa `Instantiate` para criar novas instâncias de objetos. Esta função faz uma cópia de `UnityEngine. Objeto ` e a entrega à cena.

#### Unity®

```cs
público GameObject CarPrefab;
público Vector3 SpawnPosition;
público Quaternion SpawnRotation;

void Start()
(
    GameObject NewGO = (GameObject)Instancialte(CarPrefab, SpawnPosition, SpawnRotation);
    NewGO.name = "NewGameObject1";
}
```

#### Stride

Em Stride, você pode instanciar ** Entidades** de forma semelhante ao Unity® GameObjects:

```cs
// Campos e propriedades de membros públicos declarados exibidos no Game Studio Property Grid.
público pré-fabricada CarPrefab;
público Vector3 SpawnPosition;
público Quaternion SpawnRotation;

anula de sobreposição pública Start()
(
    // Inicialização do script.
    List<Entity> car = CarPrefab.Instantiate();
    SceneSystem.SceneInstance.RootScene.Entities.AddRange(carro);
    car[0]. Transform.Position = SpawnPosition;
    car[0]. Transformar. Rotação = SpawnRotation;
    car[0]. Nome = "MyNewEntity";
}
```

### Use os valores padrão

Cada classe em Unity® tem certos valores padrão. Se você não substituir essas propriedades no script, os valores padrão serão usados. Isso funciona o mesmo em Stride:

#### Unity®

```cs
int público NewProp = 30;
public Light MyLightComp = null;

void Start()
(
    // Crie o componente de luz se já não tivermos um.
    se (MyLightComp == null)
    (
        MyLightComp = gameObject.AddComponent<Light>();
        MyLightComp.intensity = 3;
    }
}
```

#### Stride

```cs
// Campos e propriedades de membros públicos declarados exibidos no Game Studio Property Grid.
int público NewProp = 30;
public LightComponent MyLightComponent = null;

anula de sobreposição pública Start()
(
    // Crie o componente de luz se já não tivermos um.
    if (MyLightComponent == null)
    (
        MyLightComponent = new LightComponent();
        MyLightComponent.Intensidade = 3;
        Entity.Add(MyLightComponent);
    }
}
```

### Jogo de desabilitar Objeto/entidade

#### Unity®

```cs
MyGameObject.SetActive (false);
```

#### Stride

```cs
Entity.EnableAll (false, true);
```

### Componente de acesso da GameObject/entidade

#### Unity®

```cs
Luz de luz Componente = GetComponent<Light>();
```

#### Stride

```cs
LightComponent light Componente = Entity.Get<LightComponent>();
```

### Acesso GameObject/entidade do componente

#### Unity®

```cs
GameObject ParentGO = lightComponent.game Objeto;
```

#### Stride

```cs
Entity ParentEntity = lightComponent. Entidade;
```

## Saída de log

Para ver a saída, na barra de ferramentas Game Studio, sob **View**, enable **Output**.

![ Activar saída](media/enable-output.png)

Game Studio exibe na aba **Output** (na parte inferior do Game Studio por padrão).

![Output tab](media/output-tab.png)


### Imprimir mensagens de depuração

Logging from a ScriptComponent:
```cs
anula de sobreposição pública Start()
(
    // Permite registro. Ele também terá uma janela de console se nenhum depurador estiver preso.
    // O argumento dita os tipos de mensagem que serão filtrados, neste caso, qualquer coisa com menos prioridade do que o aviso não aparecerá
    Log.ActivateLog (LogMessageType.Warning);
    // Registe esta mensagem para o console ou janela de saída IDE
    Log.Warning("olá");
}
```

```cs
System.Diagnostics.Debug.WriteLine("hello");
```

> [!Note]
> Para imprimir mensagens de depuração, você tem que executar o jogo do seu IDE, não Game Studio. Os jogos em execução não podem imprimir na janela de saída do Game Studio.

## Atributos

| Unity® | Stride |
|---------------------------|-------------------------------------|
| `[Serializável]` | `[Contrato de Dados]` |
| `[SerializeField]` | `[DataMember]` |
| `[Inspetor Hide]` | `[DataMemberIgnore]` |
| `[Range]` | `[DataMemberRange]` |
| `[Header]` | `[Display]` |
| `[Tooltip("My tooltip")]` | `/// <userdoc> Minha ponta da ferramenta</userdoc>` |

> [!Note]
> Você não pode serializar campos privados no Stride, se você quiser definir um campo no editor, mas evitar que outros scripts escrevam para esse campo, você deve usar uma propriedade [init](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init)

```cs
public float MyProperty { get; init; }
```

---

Unity® é uma marca comercial da Unity Technologies.
