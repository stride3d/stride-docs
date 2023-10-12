# Configurar animações

<span class="badge text-bg-primary">Iniciante</span>
<span class="badge text-bg-success">Design</span>
<x id="3"/>Programação<x id="4"/><span class="badge text-bg-success"></span>

Depois de [importar recursos de animação](import-animations.md), você precisa adicioná-los a uma entidade e reproduzi-los com um script.

## 1. Adicionar recursos de animação a uma entidade

1. No **Editor de cenas**, selecione a entidade que você deseja animar.

   ![Selecionar uma entidade](media/select-entity.png)

   > [!Note]
   > Para animar uma entidade, a entidade deve ter um componente do tipo modelo.

2. No **Editor de Propriedades**, clique em **Adicionar componente** e escolha **Animações**.

   ![Selecionar uma entidade](media/select-animation-component.png)

   O Game Studio adicionará um componente de animação à entidade.

3. Nas propriedades do componente de animação, ao lado de **Animações**, clique no ![botão verde](~/manual/game-studio/media/green-plus-icon.png) com o sinal de mais (**Adicionar**) para adicionar uma nova animação à biblioteca.

4. Digite um nome para a animação e pressione Enter.

   ![Adicionar animação](media/add-animation.png)

   > [!Tip]
   > Posteriormente, ao reproduzir animações usando scripts, você utilizará esse nome, **não** o nome do recurso de animação. Para facilitar a identificação, recomendamos que você dê à sua animação o mesmo nome do recurso de animação.

5. Clique no ![Ícone de mão](~/manual/game-studio/media/hand-icon.png) (**Selecionar um recurso**).

   ![Selecione o recurso](media/pick-asset-up.png)

   A janela **Selecionar um recurso** é exibida.

6. Navegue até o recurso de animação que você deseja adicionar e clique em **OK**.

   ![Selecionar recurso](media/asset-picker.png)

   O Game Studio adicionará o recurso de animação à entidade.

   ![Recurso de animação adicionado](media/animation-asset-added.png)

Você pode adicionar quantas animações forem necessárias ao componente de animação. O Editor de Propriedades lista as animações em ordem alfabética.

![Lista de animações](media/animations-list.png)

## 2. Criar um script para reproduzir as animações

Após adicionar animações a uma entidade, você precisa reproduzi-las com um [script](../scripts/index.md).

### Exemplo de script

```cs
    public class SimpleAnimationScript : StartupScript
    {
        public override void Start()
        {
            Entity.Get<AnimationComponent>().Play("Caminhar");
        }
    }
```

Este script procura por uma animação com o nome *Caminhar* sob o componente de animação na entidade.

Para mais informações sobre a criação de scripts de animação, consulte [Scripts de Animação](animation-scripts.md).

## 3. Adicionar o script à entidade

1. No **Editor de cenas**, selecione a entidade que você deseja animar.

   ![Selecionar uma entidade](media/select-entity.png)

2. No **Editor de Propriedades**, clique em **Adicionar componente** e selecione o script de animação que deseja adicionar.

   ![Selecionar uma entidade](media/add-animation-script-component.png)

O Game Studio adicionará o script como um componente. Você pode ajustar as [variáveis públicas que definiu no script](../scripts/public-properties-and-fields.md) no **Editor de Propriedades**, abaixo de propriedades do componente de script.

![Selecionar uma entidade](media/animations-setup3.png)

## Veja também

* [Índice de animação](index.md)
* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)
* [Atributos personalizados](custom-attributes.md)