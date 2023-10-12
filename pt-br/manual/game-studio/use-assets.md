# Utilizar activos

<span class="badge text-bg-primary">Introdução</span>

Existem quatro maneiras de usar ativos:

* referenciá-los em componentes da entidade
* referenciá-los em outros ativos
* carregá-los do código como conteúdo
* carregá-los do código como conteúdo usando `UrlReference`

## Activos de referência em componentes

Muitos tipos de ativos de uso de componentes. Por exemplo, os componentes do modelo usam ativos do modelo.

Componentes que usam ativos têm **asset docks** no **property grid**.

![ Selecione um ativo](media/use-assets-asset-picker-dock.png)

Para adicionar um ativo a um componente de entidade, arraste o ativo para a doca de ativos nas propriedades do componente (na grade **property**). Você pode soltar ativos no campo de texto ou na miniatura vazia.

![Drag e drop a asset](media/use-assets-drag-and-drop.png)

Em alternativa, clique em ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

![ Selecione um ativo](media/use-assets-asset-picker.png)

A janela **Selecione um ativo** abre.

> [!NOTE]
> A janela **Selecione um ativo** só exibe ativos de tipos esperados pelo componente. Por exemplo, se o componente é um receptor de áudio, a janela só exibe ativos de áudio.

Depois de adicionar um ativo a um componente, a doca de ativos exibe seu nome e uma imagem de miniatura.

![ Aset exibido](media/asset-displayed.png)

## Activos de referência em outros activos

Os ativos podem referenciar outros ativos. Por exemplo, um ativo modelo pode usar ativos materiais.

Você pode adicionar referências de ativos da mesma forma que você os adiciona aos componentes da entidade (veja acima).

## Limpar uma referência

Para limpar uma referência a um ativo, no **asset dock**, clique em ![eraser](media/use-assets-eraser.png) (**Clear reference**).

![Usar eraser](media/use-eraser.png)

## Referências examinadas

Você pode ver as referências em um ativo selecionado na aba **References**. Por padrão, isso está na parte inferior direita do Game Studio.

![Referências tab](media/use-assets-references-tab.png)

* A aba **References** exibe os ativos referenciados pelo ativo selecionado.
* A aba **Referenced by** exibe os ativos que referem o ativo selecionado.

> [!Tip]
> Se você não consegue ver a guia Referências, certifique-se de que ela é exibida em **View > Referências**.

## Carga de ativos de código

Ao carregar em ativos no tempo de execução, falamos de "Conteúdo" em vez de ativos. O conteúdo carregado refere-se ao ativo e pode ser usado em seu script.

```cs
// Carregar um modelo (substituir URL com URL válida)
var model = Content.Load<Model>("AssetFolder/MyModel");

// Criar uma nova entidade para adicionar à cena
Entidade entidade = nova Entidade (posição, "Entidade Adicionado por Script") { new ModelComponent { Model = model } };

// Adicionar uma nova entidade à cena
SceneSystem.SceneInstance.RootScene.Entities.Add (entidade);
```

> [!TIP]
> Para encontrar a URL de ativos, no Game Studio, mova o mouse sobre o ativo. Game Studio exibe a URL de ativos em uma ponta de ferramenta.  URLs normalmente têm o formato * AssetFolder/AssetName*.
> []
> Ao carregar ativos de scripts, certifique-se de:
>
> * incluir o ativo na compilação como descrito em [Gerenciar ativos](manage-assets.md)
> * certifique-se de adicionar o script como um componente a uma entidade na cena

### Descarga de ativos desnecessários

Ao carregar conteúdo do código, você deve descarregar o conteúdo quando você não precisa mais deles. Se você não o fizer, o conteúdo fica na memória, desperdiçando GPU.

Para descarregar um ativo, use ``Content.Unload(myAsset)``.

## Carga de ativos de código usando UrlReference

`UrlReference` permite que você referencie ativos em seus scripts da mesma maneira que você faria com ativos normais, mas eles são carregados dinamicamente no código. A referência a um ativo com um `UrlReference` faz com que o ativo seja incluído na compilação.

Você pode referenciar ativos em seus scripts usando propriedades/campos do tipo `UrlReference` ou `UrlReference<T>`:

* `UrlReference` pode ser usado para referenciar qualquer ativo. Isso é mais útil para o "Ativo Raw".
* `UrlReference<T>` pode ser usado para especificar o tipo desejado. i.e. `UrlReference<Scene>`. Isso dá ao Game Studio uma dica sobre que tipo de ativo este `UrlReference` pode ser usado para.

## Exemplos

### Carregando uma cena

Usando `UrlReference<Scene>` para carregar a próxima cena.

```cs
usando o Sistema. Threading. Tarefas;
//Incluir o Stride. Core.Serialization namespace para usar UrlReference
usando Stride. Core.Serialização;
usando Stride. Motor;

exemplos de namespace
(
    classe pública UrlReference Exemplo : AsyncScript
    (
        público UrlReference<Scene> NextScene Url { get; set; }

        override público async Task Execute()
        (
            //...
        }

        async privado Task LoadNextScene()
        (
            // Carga dinamicamente próxima cena assíncrona
            var nextScene = await Content.LoadAsync (NextSceneUrl);
            SceneSystem.SceneInstance.RootScene = nextScene;
        }
    }
}
```

### Carregar dados de um arquivo JSON de ativos crus

Use um ativo Raw para armazenar dados em um arquivo JSON e carregar usando [Newtonsoft. Json](https://www.newtonsoft.com/json). Para usar `Newtonsoft.Json` você também precisa adicionar o `Newtonsoft.Json` NuGet pacote para o projeto.

```cs
//Incluir o Newtonsoft. Espaço de nomes Json.
usando Newtonsoft. Json;
usando o Sistema. IO;
usando o Sistema. Threading. Tarefas;
//Incluir o Stride. Core.Serialization namespace para usar UrlReference
usando Stride. Core.Serialização;
usando Stride. Motor;

exemplos de namespace
(
    classe pública UrlReference Exemplo : AsyncScript
    (
        ulReference RawAset Url { get; set; }

        override público async Task Execute()
        (
            //...
        }

        async privado Task<MyDataClass> LoadMyData()
        (
            //Abra um StreamReader para ler o conteúdo
            using (var stream = Content.OpenAsStream (RawAssetUrl))
            usando (varRead streamer = novo StreamReader (stream)
            (
                //leia o conteúdo de ativos crus
                string json = await streamReader.ReadToEndAsync();
                //Deserialize o JSON para o seu tipo personalizado MyDataClass.
                retorno JsonConvert.DeserializeObject<MyDataClass>(json);
            }
        }
    }
}
```

## Ver também

* [Criar ativos](create-assets.md)
* [Gerenciar ativos](manage-assets.md)
