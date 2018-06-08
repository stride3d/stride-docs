# トリガー

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

コライダーを**トリガー**として設定すると、他のコライダーはそのコライダーに衝突しなくなります。代わりに、そのコライダーを通り抜けます。

トリガーはコライダーが中に入ったことを検出するので、それを使用してイベントをスクリプト化できます。たとえば、プレイヤー キャラクターが部屋に入ったことを検出し、スクリプトでそれを使用してイベントをトリガーできます。詳細については、「[イベント](../scripts/events.md)」を参照してください。

>[!NOTE]
>[キャラクター コライダー](characters.md)をトリガーとして使用することはできません。

## トリガーを作成する

1. [コライダー](colliders.md)を作成します。

2. ［Property grid］で、コライダー コンポーネントのプロパティの［Is Trigger］を選択します。

![Select 'Is trigger'](media/triggers-select-is-trigger-checkbox.png)

## トリガーの衝突を検出する

トリガーに何かが入ったことは、次のコードを使用して認識できます。

```cs
// エンティティがトリガーと衝突するのを待つ
                var firstCollision = await trigger.NewCollision();

                var otherCollider = trigger == firstCollision.ColliderA ? firstCollision.ColliderB : firstCollision.ColliderA;
```

または、`TrackingHashSet` に直接アクセスします。

```cs
var trigger = Entity.Get<PhysicsComponent>();
foreach (var collision in trigger.Collisions)
{
    // 衝突したときの処理を行う
}
```

または、`TrackingHashSet` イベントを使用します。

```cs
var trigger = Entity.Get<PhysicsComponent>();
trigger.Collisions.CollectionChanged += (sender, args) =>
{
    if (args.Action == NotifyCollectionChangedAction.Add)
    {
        // 新しい衝突
        var collision = (Collision) args.Item;
        // 処理を行う
    }
    else if (args.Action == NotifyCollectionChangedAction.Remove)
    {
        // 古い衝突
        var collision = (Collision)args.Item;
        // 処理を行う
    }
};
```

トリガーの使用方法の例については、「[トリガーをスクリプトにする](script-a-trigger.md)」チュートリアルを参照してください。

## 関連項目

* [チュートリアル: トリガーをスクリプトにする](script-a-trigger.md)
* [コライダー](colliders.md)
* [コライダーの形状](collider-shapes.md)
* [イベント](../scripts/events.md)
