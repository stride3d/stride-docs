# キャラクター

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

**キャラクター** コライダーは、プレイヤーおよび NPC などのスクリプトで制御されたキャラクターに使用されます。[キャラクター コンポーネント](xref:Stride.Physics.CharacterComponent)であるエンティティは、[SetVelocity](xref:Stride.Physics.CharacterComponent.SetVelocity\(Stride.Core.Mathematics.Vector3\))、[Jump](xref:Stride.Physics.CharacterComponent.Jump)、[Teleport](xref:Stride.Physics.CharacterComponent.Teleport\(Stride.Core.Mathematics.Vector3\)) によってのみ移動できます。

## キャラクター コンポーネントをエンティティに追加する

1. **シーン エディター** で、コンポーネントを追加するエンティティを選択します。

2. ［Property grid］で［Add component］をクリックして、［Character］を選択します。

    ![Add character component](media/add-character-component.png)

>[!NOTE]
> キャラクター コライダーが他の物理オブジェクトと相互作用するには、コライダー コンポーネントのプロパティでコライダーの形状を設定する必要もあります。ほとんどのキャラクター コライダーには、カプセル形状が適しています。詳細については、「[コライダーの形状](collider-shapes.md)」を参照してください。

## コンポーネントのプロパティ

キャラクター コンポーネントのプロパティは［Property grid］で調整できます。

プロパティ              |   説明
----------------------|-----------------------
Collision Group       | オブジェクトが属している衝突グループを設定します。
Can Collide With      | オブジェクトが衝突するグループを設定します。
Collision events      | これを有効にすると、オブジェクトは衝突イベントを報告します。それをスクリプトで使用できます。物理特性には影響ありません。オブジェクトに対する衝突イベントを使用するスクリプトがない場合は、このオプションを無効にして CPU を節約します。
Can Sleep             | これを有効にすると、物理オブジェクトが動いていないときは、物理エンジンは物理オブジェクトを処理しません。それによって CPU を節約できます。
Restitution           | 衝突の後で失う、または獲得する運動エネルギーの大きさを設定します。一般的な値は 0 ～ 1 の範囲です。衝突するエンティティの反発プロパティが 0 の場合、エンティティはすべてのエネルギーを失い、衝突と同時に動かなくなります。反発が 1 の場合は、エネルギーを失わず、衝突したときと同じ速さで跳ね返ります。このプロパティを使用して、剛体の「跳ね返り方」を変更します。
Friction              | 表面の摩擦を設定します。
Rolling Friction              | 転がり摩擦を設定します。
Ccd Motion Threshold  | 連続衝突検出 (CCD) を引き継ぐ速度を設定します。CCD は、高速で移動するエンティティ (弾丸など) が誤って他のエンティティを通り抜けないようにします。
Ccd Swept Sphere Radius | 連続衝突検出の間に 2 つの物理フレームの間の位置を含む境界球面の半径を設定します。
Gravity               | 剛体について、［Override Gravity］が選択されている場合に適用されるカスタム重力ベクトルを設定します。キャラクターの場合は、キャラクターに影響する重力の大きさを指定します。
Step Height           | キャラクターが一歩で上がることのできる最大の高さです。
Fall Speed            | 最大落下速度です。
Max Slope             | キャラクターが登ることのできる最大斜度です (度単位)。
Jump Speed            | 跳躍力の大きさです。

## 関連項目

* [静的コライダー](static-colliders.md)
* [剛体](rigid-bodies.md)
* [コライダーの形状](collider-shapes.md)
