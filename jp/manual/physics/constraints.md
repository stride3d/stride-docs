# 制約

<div class="doc-incomplete"/>

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>

**制約**は、剛体を特定の移動パターンに制限します。たとえば、実際の膝関節は 1 つの軸に沿ってのみ動き、前方には曲がりません。

制約は、2 つの剛体をリンクすること、または1 つの剛体をワールドの 1 点にリンクすることができます。剛体間の相互作用と依存関係を実現します。

[制約の種類](xref:Xenko.Physics.ConstraintTypes) は次の 6 つです。

* ヒンジ
* ギア
* スライダー
* コーン (ねじりと回転)
* ポイント ツー ポイント (2 つのコライダー間の固定距離)
* 6 自由度

さまざまな制約のデモを見るには、**PhysicsSample** サンプル プロジェクトをロードしてください。

## 制約を作成する

> [!NOTE]
> 現在、制約を使用できるのはスクリプトからだけです。

制約を作成するには、[Simulation](xref:Xenko.Physics.Simulation) の静的メソッド [CreateConstraint](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) を使用します。

```cs
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, Matrix frameA, bool useReferenceFrameA);
```

これは、[RigidBodyA](xref:Xenko.Physics.Constraint.RigidBodyA) を現在の位置でワールドにリンクします。
ブール値 [useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は、制限が適用される座標系を指定します ([RigidBodyA](xref:Xenko.Physics.Constraint.RigidBodyA) またはワールド)。

> [!NOTE]
> * [ConstraintTypes.Point2Point](xref:Xenko.Physics.ConstraintTypes) の場合、フレームは A のピボットを表します。平行移動ベクトルのみが考慮されます。[useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は無視されます。
> * [ConstraintTypes.Hinge](xref:Xenko.Physics.ConstraintTypes) の場合は、フレームは A のピボットと A の軸を表します。これは、ヒンジでは剛体とワールドの間で制限された角度の回転のみが許可されるためです。
> * [ConstraintTypes.ConeTwist](xref:Xenko.Physics.ConstraintTypes) の場合は、[useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は無視されます。
> * [ConstraintTypes.Gear](xref:Xenko.Physics.ConstraintTypes) では、2 つの剛体を作成する必要があります。この関数は例外をスローします。

```cs
CreateConstraint(ConstraintTypes type, RigidbodyComponent rigidBodyA, RigidbodyComponent rigidBodyB, Matrix frameA, Matrix frameB, bool useReferenceFrameA)
```

このメソッドは、[RigidBodyA](xref:Xenko.Physics.Constraint.RigidBodyA) を [RigidBodyB](xref:Xenko.Physics.Constraint.RigidBodyB) にリンクします。

> [!NOTE]
> * [ConstraintTypes.Point2Point](xref:Xenko.Physics.ConstraintTypes) の場合、フレームは A または B のピボットを表します。平行移動ベクトルのみが考慮されます。[useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は無視されます。
> * [ConstraintTypes.Hinge](xref:Xenko.Physics.ConstraintTypes) の場合、フレームは A/B のピボットと A/B の軸を表します。これは、この場合のヒンジでは、剛体とワールドの間に制限された角度の回転だけが許可されるためです。
> * [ConstraintTypes.ConeTwist](xref:Xenko.Physics.ConstraintTypes) の場合は、[useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は無視されます。
> * [ConstraintTypes.Gear](xref:Xenko.Physics.ConstraintTypes) の場合は、[useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は無視されます。フレームは A または B の軸だけを表します。平行移動ベクトル (軸を含む必要があります) だけが使用されます。

ブール値 [useReferenceFrameA](xref:Xenko.Physics.Simulation.CreateConstraint\(Xenko.Physics.ConstraintTypes,Xenko.Physics.RigidbodyComponent,Xenko.Core.Mathematics.Matrix,System.Boolean\)) は、制限が適用される座標系 ([RigidBodyA](xref:Xenko.Physics.Constraint.RigidBodyA) または [RigidBodyB](xref:Xenko.Physics.Constraint.RigidBodyB)) を決定します。

## 制約をシミュレーションに追加する

制約を作成した後は、以下のメソッドを呼び出してスクリプトからシミュレーションに制約を追加します。

```cs
this.GetSimulation().AddConstraint(constraint);
```

または

```cs
var disableCollisionsBetweenLinkedBodies = true;
this.GetSimulation().AddConstraint(constraint, disableCollisionsBetweenLinkedBodies);
```

パラメーター [disableCollisionsBetweenLinkedBodies](xref:Xenko.Physics.Simulation.AddConstraint\(Xenko.Physics.Constraint,System.Boolean\)) は、
 リンクされたボディが相互に衝突するのを停止します。

同様に、シミュレーションから制約を削除するには、次のメソッドを使用します。

```cs
this.GetSimulation().RemoveConstraint(constraint);
```

## 関連項目

* [コライダー](colliders.md)
