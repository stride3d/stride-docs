# Scripts de animação

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

As animações são controladas por meio de scripts.

Você pode adicionar um [AnimationComponent](xref:Stride.Engine.AnimationComponent) a uma entidade e [configurar seus parâmetros](set-up-animations.md) no Game Studio. A classe [AnimationComponent](xref:Stride.Engine.AnimationComponent) foi projetada para ser usada a partir de um script.

As propriedades mais úteis incluem:

| Propriedade | Descrição |
| -------- | -----------
| [Animações](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_Animations) | Obtém os clipes de animação associados a este [AnimationComponent](xref:Stride.Engine.AnimationComponent) |
| [BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder) | Obtém ou define o builder de árvore de transições de animação. Tenha em mente que você pode criar Scripts de animação; para mais informações, consulte [Árvore de transição personalizada](custom-blend-trees.md). |
| [PlayingAnimations](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_PlayingAnimations) | Obtém a lista de animações ativas. Use para personalizar a inicialização das suas animações. As animações em execução são atualizadas automaticamente pelo processador de animação, portanto, tome cuidado ao alterar a lista ou manter uma referência a uma animação em execução. |

> [!Note]
> Os clipes de animação aos quais você faz referência em scripts devem ser adicionados à mesma entidade no [AnimationComponent](xref:Stride.Engine.AnimationComponent).

> ![Animações adicionadas ao componente](media/animations-added-to-component.png)

> Para mais informações, consulte [Configurar animações](set-up-animations.md)

## Use o script pré-definido **AnimationStart**

O Stride inclui um script **AnimationStart** pré-definido.
 Você pode usar este script como um modelo para escrever seus próprios scripts de animação.

Para usar o script **AnimationStart**:

1. No **Visualizador de Assets** (na parte inferior, por padrão), clique em **Adicionar asset**.

2. Escolha **Adicionar asset > Scripts > Animation start**.

   ![Adicionar script de animação](media/animations-additive-animations-animation-start.png)

3. Especifique um nome para o script e clique em **Criar script**.

   ![Criar script](media/name-animation-script.png)

   3a. Se o Game Studio perguntar se você deseja salvar seu script, clique em **Salvar script**.

   3b. Se o Game Studio perguntar se você deseja recarregar os assemblies, clique em **Recarregar assemblies**.

4. Edite o script conforme necessário e salve-o.

## Exemplo de script de animação

Este script de exemplo atribui uma animação simples a um personagem com base em sua velocidade de caminhada.

```cs
using Stride.Engine;

namespace AdditiveAnimation
{
    public class AnimationClipExample : SyncScript
    {
        public float MovementSpeed { get; set; } = 0f;

        private float walkingSpeedLimit = 1.0f;

        // Assumindo que o script está anexado a uma entidade que possui um componente de animação
        private AnimationComponent animationComponent;

        public override void Start()
        {
            // Armazena em cache algumas variáveis que serão necessárias posteriormente
            animationComponent = Entity.Get<AnimationComponent>();
            animationComponent.Play("Idle");
        }

        protected void PlayAnimation(string name)
        {
            if (!animationComponent.IsPlaying(name))
                animationComponent.Play(name);
        }

        public override void Update()
        {
            if (MovementSpeed <= 0)
            {
                PlayAnimation("Idle");
            }
            else if (MovementSpeed <= walkingSpeedLimit)
            {
                PlayAnimation("Walk");
            }
            else 
            {
                PlayAnimation("Run");
            }
        }
    }
}
```

## Sobrescrever a árvore de  de animação

Você também pode sobrescrever a árvore de transição de animação e executar todas as transição de animação no script. Os modelos *Tiro em primeira pessoa*, *Plataforma em terceira pessoa* e *RPG de visão superior*, utilizam algumas técnicas avançadas, e são exemplos de como sobrescrever a árvore de transição de animação e executar todas as transição de animação no script. Para mais informações, consulte [Árvores de transição personalizadas](custom-blend-trees.md).

## Veja também

* [Scripts](../scripts/index.md)
* [Índice de animação](index.md)
* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Animação aditiva](additive-animation.md)
* [Animação procedural](procedural-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)
* [Atributos personalizados](custom-attributes.md)
