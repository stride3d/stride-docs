# Carregar e descarregar cenas no tempo de execução

## Cenas de carregamento

Você pode usar `UrlReference<Scene>` propriedades em seus scripts para atribuir **Scene** os ativos então carregam o código via:

```cs
público UrlReference<Scene> ChildScene Url { get; set; }

//...
var childScene = Content.Load (ChildSceneUrl);

parentScene.Children.Add (childScene);
```

Alternativamente, você pode carregar cenas por nome. O código a seguir carrega três cenas e os adiciona como crianças:

```cs
var myChildScene0 = Content.Load<Scene>(url0);
var myChildScene1 = Content.Load<Scene>(url1);
var myChildScene2 = Content.Load<Scene>(url2);

myParentScene.Children.Add(myChildScene0);
myParentScene.Children.Add(myChildScene1);
myChildScene1.Add(myChildScene2);
```

> [!Note]
> Se você não estiver usando `UrlReference` certifique-se de que todas as cenas que você deseja carregar estão incluídas na compilação como **root assets** (indicado com ícones azuis no **Asset View**).

> ![ Cenas incluídas no root](media/scenes-included-in-root.png)

> Para incluir uma cena na compilação, no **Asset View**, clique com o botão direito do mouse no ativo da cena e selecione **Incluir na compilação como root asset**.

> Para obter mais informações sobre incluir ativos na compilação, consulte [Gerenciar ativos](manage-assets.md).

Para obter mais informações sobre hierarquias de cena, consulte [Gerenciar cenas](manage-scenes.md).

## Descarregar cenas

Antes que uma cena seja descarregada, remova-a da hierarquia da cena:

```cs
parentScene.Children.Remove(childScene);

// Alternativamente
criança Ceno. Pai = nulo;
```

Uma vez que o ativo da cena não é mais necessário certifique-se de descarregá-lo:

```cs
Content.Unload (childScene);
```

## Script de streaming de cenas

Stride também inclui um script de streaming de cena que usa um [trigger](../physics/triggers.md) para carregar cenas.

> [!Note]
> O script de streaming de cena é incluído como um exemplo. Nem sempre é a maneira mais apropriada de carregar cenas. Sinta-se livre para modificá-lo tanto quanto você precisa.

### Adicionar um script de streaming de cena

Para adicionar um script de streaming de cena, no **Asset View** (pane inferior por padrão), clique em ** Adicionar asset** e selecione **Scripts > Cena streaming**.

![Scene streaming script](media/scene-streaming-script.png)

Game Studio adiciona um script de streaming de cena para seus ativos de projeto.

### Use o script de streaming de cena

1. Criar uma entidade gatilho. Quando isso é disparado no tempo de execução, Stride carrega a cena. Para obter mais informações sobre a criação de gatilhos, consulte [Triggers](../physics/triggers.md).

   Como a entidade é ativada é definida nas propriedades do colisor. Para mais informações, consulte [Colliders](../physics/colliders.md).

2. Crie uma entidade e posicione-a onde você deseja que a cena carregue.

3. Com a entidade selecionada, no **Property Grid** (no righy por padrão), clique em **Adicionar componente** e selecione o script **scene streaming**.

   ![ Adicionar script](media/add-scene-streaming-script.png)

   > [!Note]
   > Se o script de streaming de cena não aparecer na lista de componentes, recarregue os conjuntos.

   Game Studio adiciona o script à entidade como um componente.

   ![ Propriedades de streaming de faixa](media/scene-streaming-script-properties.png)

4. Sob **Url**, especifique o ativo de cena que deseja carregar.

5. Sob **Trigger**, especifique a entidade criada na etapa 1.

No tempo de execução, quando o gatilho que você criou na etapa 1 é acionado, Stride carrega a cena que você especificou na etapa 4.

### Propriedades do script de streaming de cenas

![ Propriedades de streaming de faixa](media/scene-streaming-script-properties.png)

| Propriedade | Descrição |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profundidade de carga | O ponto (em unidades [world](world-units.md)) em que a cena começa a carregar. Por exemplo, se *2.5*, a cena começa a carregar quando o jogador é 2,5 unidades na área de gatilho |
| Profundidade de carga | O ponto (em unidades [world](world-units.md)) no qual o jogo congela para terminar de carregar a cena se ainda não tiver carregado. Por exemplo, se *5*, o jogo congela quando o jogador é 5 unidades na área de gatilho |
| Prioridade | A prioridade do guião. Para mais informações, consulte [Scheduling e prioridades](../scripts/scheduling-and-priorities.md) |
## Ver também

* [Coleiras](../physics/colliders.md)
* [Triggers](../physics/triggers.md)
* [Criar e abrir uma cena](create-a-scene.md)
* [Navegue no Editor de Cena](navigate-in-the-scene-editor.md)
* [Gerenciar cenas](manage-scenes.md)
* [Adicionar entidades](add-entities.md)
* [Gerenciar entidades](manage-entities.md)