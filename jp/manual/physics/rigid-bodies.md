# 剛体

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

**剛体**は、それに加えられた力 (重力や衝突など) に基づいて動きます。一般的な剛体は、箱、ボール、家具などのように、押されたり、引かれたり、叩かれたりして動き回るオブジェクトであり、衝突することによって他の剛体に影響を与えることもあります。

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)


## 剛体コライダーを追加する

1. 剛体コライダーにするエンティティを選択します。

2. ［Property grid］で［Add component］をクリックして、［Rigidbody］を選択します。

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)

3. エンティティと一致するように[コライダーの形状](collider-shapes.md)を設定します。そのためには、［Property grid］で［Rigidbody］コンポーネントを展開してプロパティを表示します。

4. ［Collider Shapes］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックして、目的の形状を選択します。

     ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)

## コンポーネントのプロパティ

剛体のプロパティは［Property grid］で調整できます。

![Rigidbody properties](media/rigid-body-properties.png)

プロパティ              | 説明
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
Is Trigger            | 剛体が[トリガー](triggers.md)かどうかを切り替えます。
Is Kinematic          | 剛体が[運動学的](kinematic-rigid-bodies.md)であり、したがってその Transform プロパティによってのみ動くかどうかを切り替えます。
Mass                  | コライダーの質量を設定します。大きな違いを表すには、小数点値を使用します。たとえば、*1* や *100000* ではなく、*0.1* や *10* と記述します。
Linear Damping        | 指向性の力の減衰の量です。
Angular Damping        | 回転力の減衰の量です。
Override Gravity      |［Gravity］で指定されているベクトルで重力をオーバーライドします。
Gravity               |［Override Gravity］が選択されている場合に適用されるカスタム重力ベクトルを設定します。
Node Name             | コライダー エンティティにボーン構造が含まれる場合、ノード名はその特定のボーンにリンクされるボーン ノードの名前を参照できます。
Collider Shapes       | [コライダーの形状](collider-shapes.md)を追加します。

## 関連項目

* [運動学的剛体](kinematic-rigid-bodies.md)
* [静的コライダー](static-colliders.md)
* [キャラクター](characters.md)
* [コライダーの形状](collider-shapes.md)
* [トリガー](triggers.md)
