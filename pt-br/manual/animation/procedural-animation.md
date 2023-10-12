# Animação procedural

<span class="badge text-bg-primary">Intermediário</span>
<span class="badge text-bg-success">Programação</span>

A **animação procedural** é um método alternativo de animação. Em vez de criar animações manualmente, você pode usar componentes do motor para animar modelos 3D em tempo de execução.

Em alguns casos, isso resulta em animações mais eficazes e eficientes. Por exemplo, imagine um efeito de encolhimento que ocorre quando o jogador atira em um monstro com uma arma de encolhimento. Em vez de criar uma animação de encolhimento complexa, você pode acessar o [TransformComponent](xref:Stride.Engine.TransformComponent) da entidade e simplesmente dimensionar o inimigo até o tamanho necessário.

A animação pode abranger uma ampla variedade de componentes além dos ossos do esqueleto, incluindo:

* [TransformComponent](xref:Stride.Engine.TransformComponent)
* [LightComponent](xref:Stride.Engine.LightComponent)
* [RigidBodyComponent](xref:Stride.Physics.RigidbodyComponent)
* [Componentes personalizados](xref:Stride.Engine.EntityComponent)

O sistema de animação do Stride funciona da mesma maneira que o editor de animação de curvas do Blender ou do Maya. Cada osso/valor é atribuído a uma [curva](xref:Stride.Animations.AnimationCurve) composta por vários [pontos](xref:Stride.Animations.KeyFrameData`1) que são interpolados de forma linear, cúbica ou constante.

## Exemplo de código

### Componente de transformação

```cs
public class AnimationScript : StartupScript
{
    public override void Start()
    {
        // Cria um AnimationClip. Certifique-se de definir sua duração corretamente.
        var animationClip = new AnimationClip { Duration = TimeSpan.FromSeconds(1) };

        // Adicione curvas especificando o caminho para a propriedade de transformação.
        // - Você pode indexar componentes usando uma sintaxe especial para suas chaves.
        // - As propriedades podem ser qualificadas com o nome do tipo entre parênteses.
        // - Se um tipo não for serializável, deve ser usado o nome completo qualificado dele.

        animationClip.AddCurve("[TransformComponent.Key].Rotation", CreateRotationCurve());

        // Opcional: compacte todos os canais de animação em um formato otimizado intercalado.
        animationClip.Optimize();

        / Adiciona um AnimationComponent à entidade atual e registra nosso clipe personalizado.
        const string animationName = "MyCustomAnimation";
        var animationComponent = Entity.GetOrCreate<AnimationComponent>();
        animationComponent.Animations.Add(animationName, animationClip);

        // Inicia imediatamente a animação em loop.
        var playingAnimation = animationComponent.Play(animationName);
        playingAnimation.RepeatMode = AnimationRepeatMode.LoopInfinite;
        playingAnimation.TimeFactor = 0.1f; // desacelera
        playingAnimation.CurrentTime = TimeSpan.FromSeconds(0.6f); // Inicia em momentos diferentes
    }

    // Define uma curva de rotação linear personalizada.
    private AnimationCurve CreateRotationCurve()
    {
        return new AnimationCurve<Quaternion>
        {
            InterpolationType = AnimationCurveInterpolationType.Linear,
            KeyFrames =
            {
                CreateKeyFrame(0.00f, Quaternion.RotationX(0)),
                CreateKeyFrame(0.25f, Quaternion.RotationX(MathUtil.PiOverTwo)),
                CreateKeyFrame(0.50f, Quaternion.RotationX(MathUtil.Pi)),
                CreateKeyFrame(0.75f, Quaternion.RotationX(-MathUtil.PiOverTwo)),
                CreateKeyFrame(1.00f, Quaternion.RotationX(MathUtil.TwoPi))
            }
        };
    }

    private static KeyFrameData<T> CreateKeyFrame<T>(float keyTime, T value)
    {
        return new KeyFrameData<T>((CompressedTimeSpan)TimeSpan.FromSeconds(keyTime), value);
    }
}
```


### Cor do componente de luz

```csharp
public class AnimationLight : StartupScript
{
    public override void Start()
    {
        // Nossa entidade deve ter um componente de luz
        var lightC = Entity.Get<LightComponent>();

        // Cria um AnimationClip e armazena os tipos não serializáveis. Certifique-se de a duração corretamente.
        var clip = new AnimationClip { Duration = TimeSpan.FromSeconds(1) };
        var colorLightBaseName = typeof(ColorLightBase).AssemblyQualifiedName;
        var colorRgbProviderName = typeof(ColorRgbProvider).AssemblyQualifiedName;

        // Aponta para o caminho da propriedade de cor do componente de luz
        clip.AddCurve(
            $"[LightComponent.Key].Type.({colorLightBaseName})Color.({colorRgbProviderName})Value", 
            CreateLightColorCurve()
        );

        // Inicia imediatamente a animação em loop.
        clip.RepeatMode = AnimationRepeatMode.LoopInfinite;
        var animC = Entity.GetOrCreate<AnimationComponent>();
        animC.Animations.Add("LightCurve",clip);
        animC.Play("LightCurve");
    }
    private AnimationCurve CreateLightColorCurve()
    {
        return new AnimationCurve<Vector3>
        {
            InterpolationType = AnimationCurveInterpolationType.Linear,
            KeyFrames =
            {
                CreateKeyFrame(0.00f, Vector3.UnitX), // Defina o primeiro quadro-chave com a cor vermelha

                CreateKeyFrame(0.50f, Vector3.UnitZ), // depois azul

                CreateKeyFrame(1.00f, Vector3.UnitX), // e vermelho novamente
            }
        };
    }

    private static KeyFrameData<T> CreateKeyFrame<T>(float keyTime, T value)
    {
        return new KeyFrameData<T>((CompressedTimeSpan)TimeSpan.FromSeconds(keyTime), value);
    }
}
```

> [!Note]
> Se precisar animar um osso proceduralmente, você deve usar o campo `NodeTransformations` do `Esqueleto`.

## Veja também

* [Índice de animação](index.md)
* [Importar animações](import-animations.md)
* [Propriedades de animação](animation-properties.md)
* [Configurar animações](set-up-animations.md)
* [Visualizar animações](preview-animations.md)
* [Scripts de animação](animation-scripts.md)
* [Animação aditiva](additive-animation.md)
* [Árvores de transição personalizadas](custom-blend-trees.md)
* [Links de nó de modelo](model-node-links.md)
* [Atributos personalizados](custom-attributes.md)