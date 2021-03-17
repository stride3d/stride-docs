# カスタム属性
<!--
# Custom attributes
-->

<span class="label label-doc-level">中級</span>
<!--
<span class="label label-doc-level">Intermediate</span>
-->

Maya などのモデリング ツールで作成したカスタム属性をインポートすることができます。
<!--
You can import custom attributes created in modeling tools such as Maya. 
-->

現状では、カスタム**アニメーション**属性だけをインポートすることができます。それ以外のカスタム属性はインポートできません。
<!--
Currently, you can only import custom **animated** attributes. Attributes that aren't animated can't be imported.
-->

![Maya properties](media/custom-attributes-in-maya.png)

## 1. カスタム属性をインポートする
<!--
## 1. Import custom attributes
-->

1. アニメーションをインポートします。手順については、[アニメーションのインポート](import-animations.md)をご覧ください。

2. **アセットビュー**で、アニメーションアセットを選択します。

    ![Assets in Asset View](media/assets-in-asset-view1.png)

2. **プロパティグリッド**で、**[Import custom attributes]** を選択します。

    ![Custom attributes](media/import-custom-attributes.png)

    アセットが構築され、Stride は FBX ファイルからカスタム属性をインポートします。

<!--
1. Import the animation. For instructions, see [Import animations](import-animations.md).

2. In the **Asset View**, select the animation asset.

    ![Assets in Asset View](media/assets-in-asset-view1.png)

2. In the **Property Grid**, select **Import custom attributes**.

    ![Custom attributes](media/import-custom-attributes.png)

    When the assets are built, Stride imports the custom attributes from the FBX file.
-->

## 2. スクリプトでカスタム属性のインポートを制御する
<!--
## 2. Control custom attributes with a script
-->

カスタム属性を読み取り、その値を別のプロパティにコピーするスクリプトを追加してみます。これは、独立したスクリプトでも、他の[アニメーションスクリプト](animation-scripts.md)の一部でも構いません。
<!--
Add a script to read the custom attributes and copy their value to another property. This can be a separate script, or part of another [animation script](animation-scripts.md).
-->

属性は、`NodeName_AttributeName` という形の名前で検索します。例えば、`myNode` にカスタム属性 `myAttribute` を設定している場合は、`myNode_myAttribute` という名前で検索します。
<!--
To look up an attribute, use `NodeName_AttributeName`. For example, if you have the node `myNode` with the custom attribute `myAttribute`, use `myNode_myAttribute`.
-->

### スクリプトの例
<!--
### Example script
-->

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

            // アニメーションがまだ再生されていない場合、結果が Null になることがあります。
            // Animation result may be Null if animation hasn't been played yet.
            var animResult = animationProcessor.GetAnimationClipResult(animationComponent);
            if (animResult == null)
                return;

            // カスタムアニメーション属性の値を読み取ります。
            // Read the value of the animated custom attribute:
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

            // 読み取った値をマテリアルパラメーターに割り当てます。
            // Bind the material parameter:

            MyMaterial.Passes[0].Parameters.Set(MaterialKeys.EmissiveIntensity, emissiveIntensity);
        }
    }
}
```
