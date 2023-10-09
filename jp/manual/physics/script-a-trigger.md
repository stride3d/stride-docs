# チュートリアル: トリガーをスクリプトにする

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">デザイナー</span>

このチュートリアルでは、通過するボールのサイズを 2 倍にする[トリガー](../physics/triggers.md)を作成します。

>[!NOTE]
>このチュートリアルのスクリーンショットとビデオは、前のバージョンの Stride を使用して作成されました。そのため、UI の一部および既定のスカイボックスと球体は、お使いのバージョンと異なる場合があります。

## 1. 跳ね返るボールを作成する

「[跳ね返るボールを作成する](create-a-bouncing-ball.md)」チュートリアルの説明に従います。空中からボールが落下し、地面にぶつかって跳ね返る、簡単なシーンが作成されます。

## 2. 反発を設定する

このチュートリアルでは、地面と球体の反発係数を両方とも 0.9 に設定します。したがって、ボールはとてもよく跳ね返ります。このようにすると、ボールがトリガー領域に何度も出入りするので、トリガーの効果がよくわかります。

1. **球体**エンティティを選択します。

2. ［Property grid］の［Rigidbody］で、［Restitution］を *0.9* に設定します。

    ![Set restitution for a sphere](media/physics-tutorials-rigidbody-restitution.png)

3. **地面**エンティティを選択します。

4. ［Property grid］の［Static Collider］で、［Restitution］を *0.9* に設定します。

    ![Set restitution for the ground](media/physics-tutorials-static-collider-restitution.png)

## 3. トリガーを追加する

次に、ボールと地面の間にトリガーを追加し、ボールがそこを通過するようにします。

1. **シーン エディター**で、白いプラス ボタン (［Create new entity］) をクリックして、［Empty entity］を選択します。

    ![Create new entity](media/physics-tutorials-create-a-trigger-add-new-entity.png)

    既定の **Entity** という名前のエンティティがシーンに追加されます。

2. このエンティティをトリガーにするので、わかりやすいように名前を［Trigger］に変更します。

3. このトリガーは動く必要がないので、静的コライダーにします。［Property grid］で［Add component］をクリックして、［Static Collider］を選択します。

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

4. ［Property grid］で［Static Collider］コンポーネントを展開してプロパティを表示します。

5. ［Is Trigger］チェックボックスをオンにします。

    ![Check 'Is trigger'](media/physics-tutorials-create-a-trigger-is-trigger-checkbox.png)

    これにより、コライダーがトリガーになります。つまり、オブジェクトはそれを通り抜けることができますが、その場合でもコードはオブジェクトを検出します。

6. トリガーに形状を与える必要があります。［Collider Shapes］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックして、［Box］を選択します。

    ![Add collider shape](media/physics-tutorials-create-a-trigger-add-box-shape-to-a-trigger.png)

    トリガーの形状がボックスになります。

    ![Added trigger](media/physics-tutorials-added-trigger-area.png)

7. トリガーの領域を大きくします。［Property grid］の［Transform］コンポーネントのプロパティで、［Scale］を *X:2, Y:2, Z:2 に設定します。*

    ![Scale a trigger](media/physics-tutorials-create-a-trigger-scale-trigger.png)

    トリガーのサイズが 2 倍になります。

    ![Added trigger](media/physics-tutorials-added-trigger-doubled-area.png)

## 4. トリガーにモデルを設定する

現状では、トリガーは実行時には目に見えません。トリガーの動作がよくわかるように、トリガーを透明なボックスにします。このようにしてもトリガーの動作に影響はありません。実行時にトリガーの場所がはっきりわかるようになるだけです。

1. 新しい手続き型モデル アセットを作成します。そのためには、［Asset view］で［Add asset］をクリックし、［Models］>［Cube］を選択します。

    ![Add a model asset](media/physics-tutorials-create-a-trigger-add-a-model.png)

2. 新しい空のマテリアル アセットを作成します。そのためには、［Asset view］で［Add asset］をクリックし、［Materials］>［Material］を選択します。

    ![Add a material asset](media/physics-tutorials-create-a-trigger-add-a-material-asset.png)

3. マテリアルの名前を変更して見分けやすくします。右クリックして［Rename］を選択し、新しい名前 (たとえば *Transparent*) を入力します。

4. **トリガー** エンティティを選択します。［Property grid］で［Add component］をクリックして、［Model］を選択します。

    ![Add a model component](media/physics-tutorials-create-a-trigger-add-a-model-component.png)

    モデル コンポーネントがエンティティに追加されます。

5. ［Model］で ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Pick an asset up］) をクリックします。

    ![Pick an asset up](media/physics-tutorials-pick-an-asset-up.png)

6. ステップ 1 で作成した［Cube］モデルを選択し、［OK］をクリックします。

    ![Select Cube model](media/physics-tutorials-select-cube-model.png)

7. ［Property grid］の［Model］>［Materials］で、![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Pick an asset up］) をクリックします。

    ![Select material](media/physics-tutorials-material-asset-picker.png)

8. ステップ 2 で作成した **Transparent** マテリアルを選択し、［OK］をクリックします。

    ![Select material](media/physics-tutorials-select-transparent-material.png)

9. ［Asset view］で、**Transparent** マテリアル アセットを選択します。

    ![Select material in Asset View](media/physics-tutorials-select-material-asset.png)

10. ［Property grid］の［Misc］>［Transparency］で、［Blend］を選択します。

    ![Select Blend](media/physics-tutorials-set-blend.png)

11. 既定では、［Alpha］は 1 に設定されています。これではマテリアルは完全に不透明になります。不透明度を 50% にするため、［Alpha］を 0.5 に設定します。

    ![Select Blend](media/physics-tutorials-set-blend-alpha.png)

    これで、実行時にトリガー領域が表示されるようになります。

## 5. トリガーを配置する

落下するボールが通過するように、地面と球体の間にトリガーを配置する必要があります。

［Property grid］の［Transform］で、［Position］を *X:0, Y:3, Z:0 に設定します。*

トリガー エンティティが地面と球体の間に配置されました。

![Trigger between ground and sphere](media/physics-tutorials-create-a-trigger-trigger-between-ground-and-sphere.png)

## 6. スクリプトで球体のサイズを変更する

この状態でプロジェクトを実行すると (**F5** キー)、ボールはトリガーを通過して落下しますが、何も起こりません。

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-no-effect.png">
   <source src="media/bouncing-ball-with-trigger-no-effect.mp4" type="video/mp4">
</video>
</p>

トリガーに入ったらボールのサイズを変更するスクリプトを記述します。

>[!NOTE]
>スクリプトの詳細については、「[スクリプト](../scripts/index.md)」を参照してください。

1. ［Asset view］で［Add asset］をクリックし、［Scripts］ >［Async Script］の順に選択します。

    ![Use a script](media/physics-tutorials-create-a-trigger-add-async-script.png)

2. ［Create a script］ダイアログで、スクリプトの名前を「*Trigger*」に設定して、［Create script］をクリックします。

    2a.スクリプトを保存するかどうかを確認するメッセージが表示されたら、［Save］をクリックします。

    2b.アセンブリを再ロードするかどうかを確認するメッセージが表示されたら、［Reload］をクリックします。

3. スクリプトを開き、内容を以下のコードに置き換えて、ファイルを保存します。

    ```cs
    using Stride.Engine;
    using Stride.Physics;
    using System.Threading.Tasks;
    using Stride.Core.Mathematics;

    namespace TransformTrigger
    // このスクリプトには好みで任意の名前空間を使用できる。
    {
        public class Trigger : AsyncScript
        {
            public override async Task Execute()
            {
                var trigger = Entity.Get<PhysicsComponent>();
                trigger.ProcessCollisions = true;

                // 状態マシンを開始する
                while (Game.IsRunning)
                {
                    // 1.エンティティがトリガーと衝突するのを待つ
                    var firstCollision = await trigger.NewCollision();

                    var otherCollider = trigger == firstCollision.ColliderA
                        ? firstCollision.ColliderB
                        : firstCollision.ColliderA;
                    otherCollider.Entity.Transform.Scale = new Vector3(2.0f, 2.0f, 2.0f);

                    // 2.エンティティがトリガーから出るのを待つ
                    Collision collision;

                    do
                    {
                        collision = await trigger.CollisionEnded();
                    }
                    while (collision != firstCollision);

                    otherCollider.Entity.Transform.Scale= new Vector3(1.0f, 1.0f, 1.0f);
                }
            }
        }
    }
    ```

    このコードは、トリガーに入ってきたすべてのエンティティのサイズ (スケール) を 2 倍にします。エンティティがトリガーから出るときには、元のサイズに戻します。

4. アセンブリを再ロードします。

## 7. スクリプトを追加する

最後に、このスクリプトをコンポーネントとしてトリガー エンティティに追加します。

1. **Game Studio** で **Trigger** エンティティを選択します。

2. ［Property grid］で［Add component］をクリックして、**Trigger** スクリプトを選択します。

    ![Add script component to entity](media/physics-tutorials-create-a-trigger-add-script-component-to-entity.png)

## 8. プロジェクトを実行する

プロジェクトを実行して (**F5** キー)、トリガーの動作を確認します。

ボールが落下し、トリガーを通過するときに 2 倍のサイズになり、トリガーを抜けると、通常のサイズに戻ります。

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-scaled_first_frame.png">
   <source src="media/bouncing-ball-with-trigger-scaled.mp4" type="video/mp4">
</video>
</p>

## その他のアイデア

スクリプトを変更して、球体がトリガーに入ったときに他の処理を行うことができます。

たとえば、球体エンティティのマテリアルを切り替えることができます。次のスクリプトは、Sphere エンティティのマテリアルを **Sphere Material** から **Ground Material** に切り替えて、元に戻します。

```cs
using Stride.Engine;
using Stride.Physics;
using System.Threading.Tasks;
using Stride.Core.Mathematics;
using Stride.Rendering;

namespace TransformTrigger
// このスクリプトには好みで任意の名前空間を使用できる。
{
    public class Trigger : AsyncScript
    {
        private Material material1;
        private Material material2;

        public override async Task Execute()
        {
            var trigger = Entity.Get<PhysicsComponent>();
            trigger.ProcessCollisions = true;

            // マテリアルがロードされていることを確認する
            material1 = Content.Load<Material>("Sphere Material");
            material2 = Content.Load<Material>("Ground Material");

            // 状態マシンを開始する
            while (Game.IsRunning)
            {
                // 1. エンティティがトリガーと衝突するのを待つ
                var firstCollision = await trigger.NewCollision();

                var otherCollider = trigger == firstCollision.ColliderA ? firstCollision.ColliderB : firstCollision.ColliderA;

                // 2. エンティティのマテリアルを変更する
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material2;

                // 3. エンティティがトリガーから出るのを待つ
                Collision collision;

                do
                {
                    collision = await trigger.CollisionEnded();
                }
                while (collision != firstCollision);

                // 4. マテリアルを元のものに戻す
                otherCollider.Entity.Get<ModelComponent>().Materials[0] = material1;
            }
        }

        public override void Cancel()
        {
            Content.Unload(material1);
            Content.Unload(material2);
        }
    }
}
```

<p>
<video autoplay loop class="responsive-video" poster="media/bouncing-ball-with-trigger-material_first_frame.png">
   <source src="media/bouncing-ball-with-trigger-material.mp4" type="video/mp4">
</video>
</p>

## 関連項目

* [チュートリアル: 跳ね返るボールを作成する](create-a-bouncing-ball.md)
* [コライダー](colliders.md)
* [コライダーの形状](collider-shapes.md)
* [スクリプト](../scripts/index.md)
