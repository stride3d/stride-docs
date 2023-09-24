# 物理特性のシミュレーション

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>

Stride の物理特性は、[Simulation](xref:Stride.Physics.Simulation) クラスによって制御されます。
Stride による [Simulation](xref:Stride.Physics.Simulation) の初期化方法は、**GameSettings** アセットのプロパティでアクセスする [PhysicsSettings](xref:Stride.Physics.PhysicsSettings) のフラグを修正することによって変更できます。

![Physics Settings](media/simulation-physics-settings.png)

* `CollisionsOnly` は、衝突検出を有効にして [Simulation](xref:Stride.Physics.Simulation) を初期化しますが、他の物理特性はありません。オブジェクトは物理的な力に反応しません。

* `ContinuousCollisionDetection` は、連続衝突検出 (CCD) を有効にして [Simulation](xref:Stride.Physics.Simulation) を初期化します。CCD は、高速で移動するエンティティ (弾丸など) が誤って他のエンティティを通り抜けないようにします。

> [!NOTE]
> ``SoftBodySupport``、``MultiThreaded``、``UseHardwareWhenPossible`` の各フラグは、現在は無効になっています。

実行時に、[Simulation](xref:Stride.Physics.Simulation) の一部のパラメーターを変更できます。

* `Gravity` — グローバル重力 ([ワールド単位](../game-studio/world-units.md)毎秒毎秒単位)
* `FixedTimeStep` — シミュレーションの時間ステップの長さ (秒単位)
* `MaxSubSteps` — エンジンが更新ごとに取得する固定時間ステップの最大数

## 関連項目
* [コライダー](colliders.md)
* [コライダーの形状](collider-shapes.md)
