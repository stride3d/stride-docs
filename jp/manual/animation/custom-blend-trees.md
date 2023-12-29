# カスタム ブレンド ツリー

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>

[AnimationComponent](xref:Stride.Engine.AnimationComponent) には、[AnimationComponent.BlendTreeBuilder](xref:Stride.Engine.AnimationComponent#Stride_Engine_AnimationComponent_BlendTreeBuilder) プロパティがあります。再生されるアニメーション、アニメーションのブレンド方法、アニメーションの重みを全面的に制御したい場合は、`IBlendTreeBuilder` から継承するスクリプトを作成し、アニメーション コンポーネントの BlendTreeBuilder に割り当てます。

アニメーション コンポーネントは、更新されるときに、アニメーション自体を更新するのではなく、スクリプトで `void BuildBlendTree(FastList<AnimationOperation> animationList)` を呼び出します。これにより、アニメーション クリップ、速度、ブレンドの任意の組み合わせを選択できますが、重労働をすべてスクリプト側で行う必要があるため、困難さも増します。

Stride に含まれるテンプレート ［First-person shooter］、［Third-person platformer］、[Top-down RPG］は、カスタム ブレンド ツリーを使用する方法の例です。

## コード サンプル

```cs
public class AnimationBlendTree : SyncScript, IBlendTreeBuilder
{
    /// <summary>
    /// アニメーション コンポーネントが必要
    /// </summary>
    [Display("Animation Component")]
    public AnimationComponent AnimationComponent { get; set; }

    [Display("Walk")]
    public AnimationClip AnimationWalk { get; set; }

    [Display("Run")]
    public AnimationClip AnimationRun { get; set; }

    [Display("Lerp Factor")]
    public float LerpFactor = 0.5f;

    private AnimationClipEvaluator animEvaluatorWalk;
    private AnimationClipEvaluator animEvaluatorRun;
    private double currentTime = 0;

    public override void Start()
    {
        base.Start();

        // 重要なステップ
        // カスタム ブレンド ツリー ビルダーを設定することにより、アニメーション システムの既定の動作を上書きできる。
        // 代わりに、BuildBlendTree(FastList<AnimationOperation> blendStack) がフレームごとに呼び出される。
        // Update() でアニメーションの状態を更新した後、
        // 新しいアニメーションの状態 (スタック = ブレンド ツリー) をアニメーション システムに渡す必要がある。
        AnimationComponent.BlendTreeBuilder = this;

        // アニメーション システムを上書きするときは、使用するクリップごとに AnimationClipEvaluator を作成する必要がある。
        animEvaluatorWalk = AnimationComponent.Blender.CreateEvaluator(AnimationWalk);
        animEvaluatorRun = AnimationComponent.Blender.CreateEvaluator(AnimationRun);
    }

    public override void Cancel()
    {
        // スクリプトをキャンセルするときは、Start() - AnimationClipEvaluators で作成されたすべてのアニメーション リソースを忘れずに解放する。
        AnimationComponent.Blender.ReleaseEvaluator(animEvaluatorWalk);
        AnimationComponent.Blender.ReleaseEvaluator(animEvaluatorRun);
    }

    public override void Update()
    {
        // アニメーションは描画されるときにのみ更新されるので、UpdateTime ではなく DrawTime を使用する。
        var time = Game.DrawTime;

        // この更新関数は、異なる期間のアニメーションを考慮し、
        // ブレンドされた最大期間を基準にして現在時間を維持する。
        long blendedMaxDuration = (long)MathUtil.Lerp(AnimationWalk.Duration.Ticks, AnimationRun.Duration.Ticks, LerpFactor);

        var currentTicks = TimeSpan.FromTicks((long)(currentTime * blendedMaxDuration));

        currentTicks = blendedMaxDuration == 0
            ? TimeSpan.Zero
            : TimeSpan.FromTicks((currentTicks.Ticks + (long)(time.Elapsed.Ticks)) % blendedMaxDuration);

        currentTime = ((double)currentTicks.Ticks / (double)blendedMaxDuration);
    }

    /// AnimationComponent を評価する必要があるときは、フレームごとに BuildBlendTree がアニメーション システムから呼び出される。
    /// この関数は、カスタム ブレンド ツリーを設定することで、AnimationComponent の既定の動作を上書きする。
    public void BuildBlendTree(FastList<AnimationOperation> blendStack)
    {
        var timeWalk = TimeSpan.FromTicks((long) (currentTime * AnimationWalk.Duration.Ticks));
        var timeRun  = TimeSpan.FromTicks((long) (currentTime * AnimationRun.Duration.Ticks));

        // アニメーション ブレンド ツリーを作成する (スタック)
        blendStack.Add(AnimationOperation.NewPush(animEvaluatorWalk, timeWalk));    // 指定された時間に評価されるようにアニメーションの状態をプッシュする。
        blendStack.Add(AnimationOperation.NewPush(animEvaluatorRun, timeRun));      // 指定された時間に評価されるように別のアニメーションの状態をプッシュする。
        blendStack.Add(AnimationOperation.NewBlend(AnimationBlendOperation.LinearBlend, LerpFactor));   // 最後の 2 つの状態をポップして、係数とブレンドし、結果をプッシュして戻す。

        // 注意
        // ブレンディング操作はスタック内にレイアウトされるので、この方法で操作をパックする必要がある。
        // 一般に、深度優先でバイナリ ツリーをトラバースし、処理済みのノードを*離れる*ときに操作を追加することで十分である。
        // 非バイナリ ツリーの場合、ブレンディング係数に適切に重みを付ける必要もある。

        // 終了
        // スタックの先頭には、アニメーション化されたモデルに使用される最終的な状態が含まれるようになっている。
    }
}
```

## 関連項目

* [アニメーション](index.md)
* [アニメーションのインポート](import-animations.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーションのスクリプト](animation-scripts.md)
* [加算アニメーション](additive-animation.md)
* [プロシージャル アニメーション](procedural-animation.md)
