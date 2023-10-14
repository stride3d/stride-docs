# Atributos personalizados

<span class="badge text-bg-primary">Intermediário</span>

Você pode importar atributos personalizados criados em ferramentas de modelagem, como o Maya.

Atualmente, você só pode importar atributos **animados**  personalizados. Atributos que não são animados não podem ser importados.

![Propriedades do Maya](media/custom-attributes-in-maya.png)

## 1. Importar atributos personalizados

1. Importe a animação. Para mais informações, consulte [Importar animações](import-animations.md)

2. No **Visualizador de Assets**, selecione o asset de animação.

   ![Assets no Visualizador de Assets](media/assets-in-asset-view1.png)

2. No **Editor de Propriedades**, selecione **Importar atributos personalizados**.

   Atributos personalizados![](media/import-custom-attributes.png)

   Quando os assets são criados, o Stride importa os atributos personalizados do arquivo FBX.

## 2. Controlar atributos personalizados através de um script.

Adicione um script para ler os atributos personalizados e copie os seus valores para outra propriedade. Isso pode ser feito em um script separado ou como parte de outro [script de animação](animation-scripts.md).

Para buscar um atributo, utilize `NodeName_AttributeName`. Por exemplo, se você tiver o nó `myNode` com o atributo personalizado `myAttribute`, utilize `myNode_myAttribute`.

### Exemplo de script

```cs
using Stride.Animations;
using Stride.Engine;
using Stride.Rendering;
using Stride.Audio;
using Stride.Rendering.Materials;
using System.Linq;

namespace Sample
{
    public class HologramScript : SyncScript
    {
        public Material MyMaterial;

        private AnimationComponent animationComponent;
        private AnimationProcessor animationProcessor;

        public override void Start()
        {
            base.Start();

            animationComponent = Entity.GetOrCreate<AnimationComponent>();
            animationProcessor = SceneSystem.SceneInstance.Processors.OfType<AnimationProcessor>().FirstOrDefault();
        }

        public override void Update()
        {
            if (animationProcessor == null || MyMaterial == null)
                return;

            // O resultado da animação pode ser nulo se a animação ainda não tiver sido reproduzida.
            var animResult = animationProcessor.GetAnimationClipResult(animationComponent);
            if (animResult == null)
                return;

            // Lê o valor do atributo animado personalizado:
            float emissiveIntensity = 0;
            unsafe
            {
                fixed (byte* structures = animResult.Data)
                {
                    foreach (var channel in animResult.Channels)
                    {
                        if (!channel.IsUserCustomProperty)
                            continue;

                        var structureData = (float*)(structures + channel.Offset);
                        var factor = *structureData++;
                        if (factor == 0.0f)
                            continue;

                        var value = *structureData;
                        if (channel.PropertyName == "myNode_myProperty")
                            emissiveIntensity = value;
                    }
                }
            }

            // Vincula o parâmetro do material:

            MyMaterial.Passes[0].Parameters.Set(MaterialKeys.EmissiveIntensity, emissiveIntensity);
        }
    }
}
```
