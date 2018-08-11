# アニメーションのスクリプト

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

アニメーションは、スクリプトを使用して制御します。

[AnimationComponent](xref:Xenko.Engine.AnimationComponent) をエンティティに追加し、Game Studio で[そのパラメーターを設定](set-up-animations.md)できます。[AnimationComponent](xref:Xenko.Engine.AnimationComponent) クラスは、主としてスクリプトから使用するように設計されています。

他にも次のような便利なプロパティがあります。

| プロパティ | 説明
| -------- | -----------
| [Animations](xref:Xenko.Engine.AnimationComponent#Xenko_Engine_AnimationComponent_Animations) | この [AnimationComponent](xref:Xenko.Engine.AnimationComponent) に関連付けられているアニメーション クリップを取得します
| [BlendTreeBuilder](xref:Xenko.Engine.AnimationComponent#Xenko_Engine_AnimationComponent_BlendTreeBuilder) | アニメーション ブレンド ツリー ビルダーを取得または設定します。カスタム ブレンド ツリーを作成できることに注意してください。詳細については、「[カスタム ブレンド ツリー](custom-blend-trees.md)」を参照してください
| [PlayingAnimations](xref:Xenko.Engine.AnimationComponent#Xenko_Engine_AnimationComponent_PlayingAnimations) | アクティブなアニメーションのリストを取得します。それを使用して、スタートアップ アニメーションをカスタマイズします。再生中のアニメーションはアニメーション プロセッサによって自動的に更新されるので、リストを変更するとき、または再生中のアニメーションに対する参照を保持するときは、注意してください

>[!NOTE]
>スクリプトで参照しているアニメーション クリップは、[AnimationComponent](xref:Xenko.Engine.AnimationComponent) の下の同じエンティティに追加する必要があります。

>![Animations added to component](media/animations-added-to-component.png)

>詳細については、「[アニメーションのセットアップ](set-up-animations.md)」を参照してください。

## 作成済みの **AnimationStart** スクリプトを使用する

Xenko にはあらかじめ作成されている **AnimationStart** スクリプトが含まれます。このスクリプトをテンプレートとして使用し、独自のアニメーション スクリプトを作成できます。

**AnimationStart** スクリプトを使用するには:

1. ［Asset view］(既定では下部のペイン) で、［Add asset］をクリックします。

2. ［Add asset］>［Scripts］>［Animation start］を選択します。

    ![Add animation script](media/animations-additive-animations-animation-start.png)

3. スクリプトの名前を指定して、［Create script］をクリックします。

    ![Create script](media/name-animation-script.png)

    3a. スクリプトを保存するかどうかを確認するメッセージが表示されたら、［Yes］をクリックします。

    3b. アセンブリを再ロードするかどうかを確認するメッセージが表示されたら、［Yes］をクリックします。

4. 必要に応じてスクリプトを編集し、保存します。

## アニメーション スクリプトの例

次のサンプル スクリプトは、キャラクターが歩く速さに合わせて簡単なアニメーションを割り当てます。

```cs
using Xenko.Engine;

namespace AdditiveAnimation
{
    public class AnimationClipExample : SyncScript
    {
        public float MovementSpeed { get; set; } = 0f;

        private float walkingSpeedLimit = 1.0f;

        // スクリプトはアニメーション コンポーネントを持つエンティティにアタッチされているものとする
        private AnimationComponent animationComponent;

        public override void Start()
        {
            // 後で必要になる変数をキャッシュする
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

## アニメーション ブレンド ツリーをオーバーライドする

アニメーション ブレンド ツリーをオーバーライドして、すべてのアニメーション ブレンディングをスクリプトで行うこともできます。テンプレート ［First-person shooter］、［Third-person platformer］、[Top-down RPG］は、これを行う方法の例であり、いくつかの高度な技法を使用しています。詳細については、「[カスタム ブレンド ツリー](custom-blend-trees.md)」を参照してください。

## 関連項目

* [スクリプト](../scripts/index.md)
* [アニメーション](index.md)
* [アニメーションのインポート](import-animations.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [加算アニメーション](additive-animation.md)
* [プロシージャル アニメーション](procedural-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
