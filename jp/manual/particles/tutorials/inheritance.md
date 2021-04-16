# チュートリアル: 継承
<!--
# Tutorial: Inheritance
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

このチュートリアルでは、他のパーティクルから位置や色などの属性を **継承（inheritance）** したパーティクルを作成する方法を説明します。
<!--
This tutorial explains how to create particles which inherit one or more attributes, such as position or color, from other particles.
-->

## サンプル
<!--
## Sample
-->

これからテクニックを紹介していくに当たって、新しい **Sample.Particles** プロジェクトを作成し、**ChildParticles** シーンを開いてください。
<!--
To see some of the techniques described on this page implemented in a project, create a new **Sample: Particles** project and open the **ChildParticles** scene.
-->

![Particles sample project](media/select-particles-sample-project.png)

## 継承元
<!--
## Inheriting position
-->

継承を、親と子のパーティクルで考えてみると分かりやすいでしょう。
<!--
It helps if you think about inheritance in terms of parent and child particles. 
-->

例えば、**Sample.Particles** プロジェクトの **ChildParticles** シーンで、**Fireworks** エンティティを確認してみましょう。
<!--
For example, in the **ChildParticles** scene in the **Sample: Particles** project, check out the **Fireworks** entity.
-->

2 つのエミッターが含まれています。パーティクルは親エミッターを名前で参照するので、最初のエミッターには **Emitter Name** プロパティが設定されています。名前は任意ですが、他のエミッターがこのエミッターのパーティクルを参照できるようにするためには必須です。
<!--
It contains two emitters. Particles reference parent emitters by name, so in the first emitter you can see we've set the **Emitter Name** property. It's an optional name, but it's required if you want other emitters to be able to reference this emitter's particles.
-->

2 つ目のエミッターでは、新しいイニシャライザー **Position from parent** を作成します。これにより、最初のエミッターのパーティクルを参照し、その位置を使って子パーティクルを初期化することができます。**Parent emitter** 属性には、最初のエミッターの名前（*Parent*）を記載します。この結果、生成されたそれぞれの子パーティクルに対して親パーティクルがランダムに割り当てられ、その位置が子パーティクルにコピーされます。
<!--
In the second emitter we create a new initializer, **Position from parent**. This lets us reference the first emitter's particles and use their position to initialize the child particles. In the **Parent emitter** attribute we put the first emitter's name (*Parent*). This randomly assigns a parent particle for each child particle spawned and copy its position to the child particle. 
-->

**Parent Offset** シードは、複数の属性を継承する場合に、フィールドにマッチします。例えば、（ランダムに選ばれた）同一の親パーティクルから **Position** と **Color** の両方を継承したい場合には、*Parent Offset* シードを同じ値に設定しておく必要があります。また、両方のイニシャライザーの *Parent Offset* シードを異なる値にすることもできます。この場合、ある親パーティクルの位置から生成された子パーティクルで、別のランダムな親パーティクルから色を継承することができます。通常は同じにしておきたいところですが、場合によっては混ぜた方がいいかもしれません。
<!--
The **Parent Offset** seed matches fields when more than one attributes are inherited. For example, if you want to inherit both **Position** and **Color** from the same parent particle (chosen at random) you should make the *Parent Offset* seed the same. Alternatively, you can make the *Parent Offset* seed for both initializers different, in which case particles spawning from one parent's position can inherit their color from a different random particle. Usually, you want to keep them the same, but in some cases you might want to mix them.
-->

![media/particles-tutorials-inheritance-1.png](media/particles-tutorials-inheritance-1.png)

ご覧のように、この種の継承では生成数や最大パーティクル数などのパラメータを制御できず、非常にランダムになります。ほとんどのエフェクトはこれで十分ですが、パーティクルをもっと直接コントロールしたい場合もあります。
<!--
As you can see, this kind of inheritance doesn't control spawn count, maximum particles, or any other parameters, and is very random. For most effects it's sufficient, but sometimes you want more direct control over the particles.
-->

## コントロールされた継承（Controlled inheritance）
<!--
## Controlled inheritance
-->

特定の親パーティクルから一定数のパーティクルを産み出すとき、それらのパーティクルは産み出した親パーティクルの属性だけを継承するようにしたい場合があります。
<!--
On occasion you will want to spawn a certain number of particles from a specific parent and have those particles only inherit attributes from the parent particle that spawned them.
-->

これを行うには、子エミッターのスポナーとして **From parent** タイプを選択します。そして、親エミッターの名前を **Parent emitter** 欄に記入します。
<!--
To do this, choose a spawner for the child emitter from type **From parent**. Fill in the parent emitter's name in the **Parent emitter** field.
-->

**Spawn Control Group** フィールドは、パーティクルがコントロール情報を保存する方法を決定します。スポーン情報を取得するためには、後ですべてのイニシャライザーに同じコントロールグループを割り当てる必要があります。
<!--
The **Spawn Control Group** determines how the particles save their control information. You need to assign the same control group on all initializers later in order to retrieve the spawning information.
-->

コントロールグループは 4 つまで設定できます。異なる条件でパーティクルを生成する場合や、同じ親から 2 つ以上の異なる子パーティクルを生成する場合は、それらが混ざらないように、異なるコントロールグループを割り当ててください。
<!--
There can be up to 4 control groups. If you spawn particles based on different conditions, or spawn more than two different child particles from the same parent, assign them different control groups so they don't get mixed up.
-->

**Particle Spawn Trigger** フィールドは、親側のトリガー条件であり、パーティクルを生み出すかどうかの条件を指定します。**None** のままだとパーティクルが生成されないので、**On Hit** または **Lifetime** を指定します。
<!--
The **Particle Spawn Trigger** is the triggering condition on the parent side, which determines if particles should be spawned. If you leave it as **None**, no particles are spawned, so set it to **On Hit** or **Lifetime**.
-->

**On hit** は、[コライダー](../../physics/colliders.md)が割り当てられた親パーティクルに対して機能し、サーフェスに当たるたびにトリガーされます。
<!--
**On hit** works for parent particles with a [collider](../../physics/colliders.md) assigned, and triggers every time they hit the surface.
-->

**Lifetime** は親パーティクルの相対的なライフタイムに基づいており、ライフタイムが制限内であれば、フレームごとにトリガーされます。2 つのスライダーがあり、どのポイントからどのポイントまでパーティクルを生み出すかをコントロールできます。また、それらを逆にすることで、生成条件を逆にすることもできます。例えば、ライフタイムの条件が (0.9 - 1.0) のパーティクルは、ライフタイムの最後の 10 % でのみ子パーティクルを生成します。
<!--
**Lifetime** is based on the parent particle's relative lifetime, and triggers every frame the lifetime is within the limits. There are two sliders to control from which point to which point particles should be spawned. Alternatively, you can reverse them to reverse the spawning condition. For example, a particle with lifetime condition (0.9 - 1.0) only spawns child particles in the last 10% of its lifetime.
-->

最後に、**Particles/trigger** フィールドは、条件が満たされるたびにいくつのパーティクルが生成されるかを指定します。
<!--
Finally, the **Particles/trigger** determines how many particles are spawned each time the condition is met.
-->

子エミッターの場合、エミッターが放てるパーティクルの最大数をコントロールするのは良い方法です。特に、コリジョンヒットなどの非決定論的なケースで有効です。
<!--
For child emitters, it's good practice to control the maximum number of particles the emitter can have, especially for non-deterministic cases, such as the collision hit.
-->

### 決定論（Determinism）

イニシャライザーでは、スポナーのコントロールグループに対応する **Spawn Control Group** 値を選択します。これにより、イニシャライザーはトリガーによって生成されたパーティクルのみを強制的に動作させ、その他のパーティクルはスキップさせることができます（複数のスポナーが割り当てられている場合）。
<!--
On the initializers, choose a **Spawn Control Group** corresponding to the spawner's control group. This forces the initializers to only work for particles spawned with the triggering condition, skipping the rest (if more than one spawner is assigned).
-->

## リボンと軌跡
<!--
## Ribbons and trails
-->

[リボンと軌跡](../ribbons-and-trails.md)の描画は、パーティクルの生成順序に依存しているため、最初のうちは設定が少し難しいです。親パーティクルの場合は、親パーティクルの生成順序にも依存するようになります。

1. 親パーティクルに **Spawn Order** タイプのイニシャライザーを追加します。これは、子パーティクルで使用されます。

2. 子エミッターでは、すべてのスポナーを削除し、[**From parent**] タイプのスポナーを 1 つだけ追加します。子パーティクルの生成をコントロールして、すべての子パーティクルが親パーティクルの後ろのリボンに適切にグループ化されるようにします。システムにランダムな動作を追加する別のスポナーを追加すると、リボンが間違った方法で接続されてしまいます。トリガー条件は **Lifetime** に設定します。

3. 再び**子エミッター**側に戻り、**Order from parent** タイプのイニシャライザーを追加します。これは、パーティクルに生成順序を割り当てるだけでなく、親によって子をグループ化します。この順序を使用するように **Sort** を設定し、リボンのシェイプビルダーを割り当てると、各軌跡がそれを生成した親パーティクルの後ろに適切にグループ化されているのがわかるでしょう。

<!--
1. Add a **Spawn Order** initializer to the parent. It will be used in the children particles.

2. On the child emitter, remove all spawners and add only one, **From parent**. You want to control the spawning of the children particles so all particles can be properly grouped in a ribbon behind the parent particle. If you add another spawner that adds random behavior to the system, the ribbons will connect in the wrong way. Set the triggering condition to **Lifetime**.

3. On the **child emitter** side again, add an **Order from parent** initializer. This assigns a spawning order to the particles, but also groups them by parent. If you set the **Sort** to use this order and assign a ribbon shape builder, you'll see how each trail is properly grouped behind the parent particle that spawned it.
-->

## 円運動（Circular behavior）
<!--
## Circular behavior
-->

パーティクルのエミッターは、互いに輪状に属性を継承したり、同じエミッターのパーティクルから属性を継承したりすることがあります。これにより、ランダムな効果や「揺れ」のある効果が現れ、興味深いものとなります。
<!--
Particle emitters can inherit attributes circularly from each other, or even inherit attributes from particles in the same emitter. This can produce random or "swingy" effects, but can be interesting.
-->

**Colliding Particles** パーティクル エンティティ（**Sample: Particles** プロジェクトの **MainScene** 内にあります）では、パーティクルは衝突時に生成されますが、親エミッターは同じです。つまり、パーティクルがサーフェスに衝突するたびに、同じ種類のパーティクルが増えるということです。これを実現するには、2 つの重要な要素があります。
<!--
In the **Colliding Particles** particle entity (in the **MainScene** of the **Sample: Particles** project), you can see that particles are spawned on hit, but the parent emitter is the same. This means that each time a particle hits the surface, it produces more of the same kind. There are two important elements which allow this to happen. 
-->

まず、2 つのスパナーを使います。1 つは 1 秒間に数個のパーティクルを生成し、これがシステムを構成する初期要素となります。もう 1 つのスポナーでは、衝突時により多くのパーティクルを生成し、コントロールグループを使用します。
<!--
First, we have two spawners. One spawns a small number of particles per second, which give us the initial elements to populate the system. The other spawner spawns more particles on hit and uses a control group.
-->

次に、2 つの **Position** タイプのイニシャライザーを使います。最初のものは、パーティクルを出現させたい位置を割り当てます。これはすべてのパーティクル（親から生成されたものも含む）に適用されるので、このままにしておくと、パーティクルがサーフェスに衝突するたびに、初期位置からさらなるパーティクルが発射されます。
<!--
Second, we have two **Position** initializers. The first assigns a position where we want the particles to appear. It works over all particles (even those spawned from parents), so if you leave it like this, it will fire more particles from the initial position every time they hit the surface. 
-->

2 つ目のイニシャライザーは **Position from parent** タイプで、パーティクルの位置を **On hit** スポナーと同じコントロールグループを使って初期化します。**Position from parent** はパーティクルの位置をコントロールグループにより上書きし、**Per second** タイプのスポナーから生成されたパーティクルはそのままにしておきます。これにより、1 つの射出点から常に少数のパーティクルが発生し、サーフェスに当たるたびに雪崩のように増殖していきます。
<!--
The second initializer is **Position from parent** and initializes the particle positions using the same control group as the **On hit** spawner. The **Position from parent** overwrites the positions for the particles with control group, leaving the particles spawned from the **Per second** spawner untouched. This creates a small number of particles constantly coming from a single entry point and multiplying like an avalanche every time they hit the surface.
-->

## 関連項目
<!--
## See also
-->

* [チュートリアル: 軌跡の作詞](create-a-trail.md)
* [チュートリアル: カスタムパーティクル](custom-particles.md)
* [チュートリアル: レーザーと稲光](lasers-and-lightning.md)
* [パーティクル](../index.md)
* [パーティクルの作成](../create-particles.md)

<!--
* [Tutorial: Create a trail](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Particles](../index.md)
* [Create particles](../create-particles.md)
-->
