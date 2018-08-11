# プロシージャル アニメーション

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

**プロシージャル アニメーション**とは、アニメーションの代替となる方法です。アニメーションを自分で作成する代わりに、エンジン コンポーネントを使用して実行時に 3D モデルをアニメーション化できます。

場合によっては、これによって一段と効率的で効果的なアニメーションを作成できます。たとえば、プレイヤーが収縮銃でモンスターを撃ったときに発生する収縮効果を考えてみましょう。複雑な収縮アニメーションを作成する代わりに、エンティティ [TransformComponent](xref:Xenko.Engine.TransformComponent) にアクセスし、敵のスケールを必要なサイズまで減らすだけで効果を実現できます。

次のような複数のコンポーネントにアクセスして、モデルを実行時にアニメーション化できます。

* [TransformComponent](xref:Xenko.Engine.TransformComponent)
* [LightComponent](xref:Xenko.Engine.LightComponent)
* [RigidBodyComponent](xref:Xenko.Physics.RigidbodyComponent)

## コード サンプル

```cs
public class AnimationScript : StartupScript
{
    public override void Start()
    {
        // アニメーション クリップを作成する。期間を適切に設定したことを確認する。
        var animationClip = new AnimationClip { Duration = TimeSpan.FromSeconds(1) };

        // 変形プロパティまでのパスを指定する曲線を追加する。
        // - キーに対する特別な構文を使用して、コンポーネントにインデックスを設定できる。
        // - プロパティは、括弧で囲んだ型名で修飾できる。
        // - 型がシリアル化可能ではない場合、完全修飾名を使用する必要がある。

        animationClip.AddCurve("［TransformComponent.Key］.Rotation", CreateRotationCurve());

        // オプション: すべてのアニメーション チャネルを、最適化されてインターリーブされた形式にパックする。
        animationClip.Optimize();

        // AnimationComponent を現在のエンティティに追加し、カスタム クリップを登録する。
        const string animationName = "MyCustomAnimation";
        var animationComponent = Entity.GetOrCreate<AnimationComponent>();
        animationComponent.Animations.Add(animationName, animationClip);

        // すぐにアニメーションを再生してループする。
        var playingAnimation = animationComponent.Play(animationName);
        playingAnimation.RepeatMode = AnimationRepeatMode.LoopInfinite;
        playingAnimation.TimeFactor = 0.1f; // 遅くする
        playingAnimation.CurrentTime = TimeSpan.FromSeconds(0.6f); // 異なる時間に開始する
    }

    // カスタム リニア回転曲線を設定する。
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

## 関連項目

* [アニメーション](index.md)
* [アニメーションのインポート](import-animations.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーションのスクリプト](animation-scripts.md)
* [加算アニメーション](additive-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
