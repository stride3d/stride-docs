# Use um script

<span class="badge text-bg-primary">Introdução</span>
<span class="badge text-bg-success">Programação</span>

Para usar um script, adicione-o a uma entidade como um componente. Você pode fazer isso no Game Studio ou no código. Stride executa scripts quando a entidade que eles estão ligados a cargas.

Você pode adicionar um único script para quantas entidades precisar. Você também pode adicionar vários scripts a entidades únicas; neste caso, Stride cria várias instâncias do script. Isso significa que o mesmo script pode ter valores diferentes em suas propriedades e campos [public](public-properties-and-fields.md).

## Adicionar um script no Game Studio

Existem três maneiras de adicionar scripts a entidades no Game Studio:

* arraste o script da vista de ativos para a **entidade árvore**
* arraste o script da view de ativos para as propriedades de **entidade**
* adicionar o script na grade **property**

### Arraste para a árvore da entidade

Este método cria automaticamente uma nova entidade que contém o script.

1. No **solution explorer** (na parte inferior esquerda por padrão), selecione o conjunto que contém seu script. Game Studio mostra seu script no **asset view**.

   ![Scrito na pasta de ativos](../get-started/media/create-a-script-new-script-asset-view.png)

2. Arraste o script a partir da vista de ativos para a árvore **entity**.

Game Studio adiciona uma entidade à sua cena, com o script como um componente na entidade.

![ Árvore de entrada ](../troubleshooting/media/game-profiler-in-entity-tree.png)

### Arraste para a rede da propriedade

1. Na árvore **entidade** (à esquerda por padrão), ou na cena, selecione a entidade a que deseja adicionar o script.

2. No **solution explorer** (na parte inferior esquerda por padrão), selecione o conjunto que contém seu script. Game Studio mostra seu script no **asset view**.

   ![Scrito na pasta de ativos](../get-started/media/create-a-script-new-script-asset-view.png)

3. Arraste o script do **asset view** para o **property grid**.

   Game Studio adiciona o script à entidade.

### Adicione o script na grade da propriedade

1. No editor **scene**, selecione a entidade a que deseja adicionar o script.

   ![Selecione uma entidade](media/select-entity.png)

2. No **property grid** (à direita por padrão), clique em **Add component** e selecione o script que você deseja adicionar.

   ![ Adicionar componente de script](media/add-script-component.png)

   Game Studio adiciona o script à entidade.

> [!Note]
> Você pode personalizar onde os scripts aparecem no dropdown usando o `ComponentCategoryAttribute`:

> ```cs
> [ComponentCategory("Meus scripts de inicialização")]
> classe pública SampleStartupScript : StartupScript
> (
>    anula de sobreposição pública Start()
>    (
>        // Faça algumas coisas durante a inicialização
>    }
> }
> ```

## Adicionar um script do código

O código abaixo adiciona um script a uma entidade.

```cs
// myEntity é uma entidade existente na cena; myAsyncScript é o script que você deseja adicionar à entidade
myEntity.Add(new myAsyncScript());
```

## Ver também

* [Tipos de script](types-of-script.md)
* [Criar um script](create-a-script.md)
* [Propriedades e campos públicos](public-properties-and-fields.md)
* [Programação e prioridades](scheduling-and-priorities.md)
* [Eventos](events.md)
* [Depuração](debugging.md)
* [Variáveis de pré-processamento](preprocessor-variables.md)
