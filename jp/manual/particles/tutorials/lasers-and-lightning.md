# チュートリアル: レーザーと稲光
<!--
# Tutorial: Lasers and lightning
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

このチュートリアルでは、パーティクルやカスタムマテリアルを使ってレーザーや稲光を生成する方法を説明します。
<!--
This tutorial explains how to create lasers and lightnings using particles and custom materials.
-->

このような稲光のアーチを作ることを想像してみてください。
<!--
Imagine we want to create a lightning arc like this one:
-->

![media/particles-tutorials-lasers-1.gif](media/particles-tutorials-lasers-1.gif)

このエフェクトは、次のような特性を持った 1 本のひもです。
<!--
This effect is a strip which:
-->

* 固定された 2 点間を結ぶ

* 素早く位置が変わる

* 1 本のひもとして描画できる

<!--
* connects two fixed points

* changes positions very quickly

* can be rendered as a single strip
--> 

稲光は一本の線状の帯なので、リボン シェイプビルダーを使ってレンダリングすることもできますが、いくつか大きな違いがあります。パーティクルです。
<!--
Because the lightning is a single-line strip, we can render it using the ribbon shape builder, but with a few major differences. The particles:
-->

* パーティクルは、順番ではなく、同時に生成されます。

* パーティクルは一本の線または円弧のうえに現れますが、若干ランダムな位置を持つことで、稲光のような視覚を与えます。

* パーティクルは、とても迅速に再出現します。

<!--
* spawn at the same time, rather than in sequence

* appear on a single line or arc, but with semi-randomized positions to give the illusion of lightning

* should reappear very quickly
-->

## 同時生成（Simultaneous spawning）
<!--
## Simultaneous spawning
-->

フレームごとにループするスポナーを作ります。このスポナーは、**毎**フレームごとに一定数（50 個とします）のパーティクルを産み出すものとします。
<!--
We can create a looping Spawner by frame which spawns a certain number of particles (lets say 50) **every** frame.
-->

一度に表示されるのは 1 つのセットだけなので、エミッターの最大パーティクル数を 50 に制限し、同じライフスパンを与えます（例えば、0.2 秒）。
<!--
Because we only need one set visible at a time we limit the Maxmimum Particles on the emitter to 50 and give them the same lifespan (for example 0.2 seconds).
-->

つまり、スポナーは毎フレーム 50 個のパーティクルを放出しようとしますが、パーティクルの数を制限しているため、最初のフレームでは 50 個のパーティクルが生成されます。
<!--
This means the Spawner will try to emit 50 particles every frame, but because we have limited them it will only spawn 50 particles the first frame.
-->

これらのパーティクルはすべて同じライフスパンを持っているので、50 個のパーティクルはすべて同時に消滅し、新たに 50 個のパーティクルが生成されることになります。
<!--
They all have the same lifespan, so when they die at the same time a new batch of 50 particles will be spawned.
-->

#### 2 点を結ぶ
<!--
#### Connect two points
-->

ここでは、**Position (Arc)** タイプのイニシャライザーを使用します。このイニシャライザーは、他のエンティティ（ターゲットエンティティ）の位置を円弧のもう一方の端として選び、自身のエミッターとターゲットエンティティとの間に引かれた円弧の上にパーティクルが出現させます。
<!--
We are going to use the **Position (Arc)** initializer. It picks a second point from another Entity and sets the particles' positions to lie on an arc between the Emitter and the target Entity.
-->

Ordered チェックボックスをオンにすると、パーティクルをエミッターからターゲットエンティティに向かって等間隔で配置することができます。
これは、リボン シェイプビルダーを使ってレンダリングするときには重要です。なぜなら、パーティクルが円弧に沿ってランダムな（順序付けされていない）位置に表示されると、描画の順番や前後関係が混乱してしまうからです。
よって、Spawn Order タイプのイニシャライザーを追加して、パーティクルを順番に並べ替えなければなりません（これは稲光だけでなく、すべてのリボンに当てはまります）。
<!--
By clicking the Ordered checkbox we can force the particles to be placed at equal distances starting from the emitter and moving towards the target Entity.
This is important when we render them using a Ribbon shape builder because if they appear at random (unordered) positions along the arc it will be a mess. 
We also have to add Spawn Order initializer and sort the particles by Order (this is true for all ribbons, not just lightning.)
-->

**Position (Arc)** イニシャライザーの初期設定ではランダムなオフセットを設定することも可能で、その際にはオフセットとしていくつかの小さな数値を設定します。
<!--
The arc position initialzier also allows for a random offset which we set to some small number.
-->

#### 素早く位置を変える
<!--
#### Change positions fast
-->

パーティクルのライフスパンを、小さな数値（例：0.2 秒）に設定します。Time scale パラメータを使うと、さらにパーティクルシステム全体の速度をコントロールすることができます。
<!--
We can set the particles' lifespan to a small number (eg 0.2 seconds). With the Time scale parameter, we can additionally control the speed of the entire particle system.
-->

ここでは、何が起こっているのかをより分かりやすくするために、リボンの代わりにビルボード シェイプビルダーを使って、同じエフェクトを 30 倍にスローダウンしてみます。
<!--
To illustrate better what's going on here is the same effect with Billboard shape builder instead of Ribbon, and slowed down 30 times:
-->

![media/particles-tutorials-lasers-2.gif](media/particles-tutorials-lasers-2.gif)

#### 稲光を移動する
<!--
#### Moving lightning
-->

稲光のアーチを静止させるのではなく、ポイント A からポイント B へと移動させる方法があります。
<!--
There is a way to make the lightning arc move from point A to point B instead of being static.
-->

![media/particles-tutorials-lasers-3.gif](media/particles-tutorials-lasers-3.gif)

そのためには、いくつかの調整が必要です。
<!--
There are a few adjustments we need to make:
-->

* 生成レートを下げます。上の例では 600 / 秒として 0.1 の時間スケールで再生していますが、これは 1 フレームあたり約 1 個のパーティクルを生成することを意味しています。

* アークポジショナーに、固定カウント（50）を設定します。フレームごとに生成されたパーティクルの総数に基づいて距離を補間するため、あまりに大量に連続してパーティクルを生成すると、すべてのパーティクルが円弧の始まりに留まってしまいます。そこで、カウントを 50 に設定することで、アークポジショナーにパーティクルの総数が 50 であることを通知することができます。

* 稲光が歳出減する前に古い稲光が完全に消えるように、スポナーに遅延（delay）を設定します。そうしないと、リボンは古いパーティクルと新しいパーティクルをどのように分割してよいかわからなくなり、誤って接続してしまいます。

<!--
* Change the spawn rate to a lower one. The example above uses 600/second and is played at 0.1 time scale, which means around 1 particle per frame.

* Set a fixed count on the arc positioner (50). Because it interpolates the distances based on the number of particles spawned *each* frame, if we spawn them sequentially they'll all stay in the beginning of the arc. By setting the count to 50 we tell the arc positioner to expect 50 particles in total.

* Set a delay to the spawner to allow the old arc to completely disappear before starting again. Otherwise the Ribbon will wrongly connect the old and the new particles, as it can't know how to split them.
-->

## パーティクルを使ったレーザー
<!--
## Lasers using particles
-->

パーティクルでレーザーを作ることは、稲光を作ることとよく似ています。レーザーはまっすぐかつ逸れることがないので、パーティクルの数は少なくて済みます。
アークポジショナーの矢高（arc hight）を 0 にして、さらにランダムオフセットを (0, 0, 0) に設定することで、パーティクルを一直線に配置することができます。必要に応じてパーティクルの大きさを少しずつ変え、レーザービームが揺らいでいるように見せることもできます。
<!--
Creating lasers with particles is very similar to making lightning. We actually need less particles, because the lasers are straight and do not deviate. 
By setting the arc positioner's arc height to 0 and random offset to (0, 0, 0) we can spawn the particles in a straight line. If you want you can give them slightly different sizes to make the laser beam appear shimmering.
-->

レーザーの注意点としては、通常は、ターゲットが動くとそれに合わせてレーザーも動くということです。アークポジショナーはアップデーターではなくイニシャライザーなので、すでに生成済みのパーティクルには影響を与えられず、後ろに残ってしまいます。これに対処するには 3 つの方法があります。
<!--
One thing to be mindful about lasers is that usually when the target moves you want the laser to move with it. Because the arc positioner is an initializer and not an updater, it has no effect on particles already spawned, which and stay behind. There are three ways to counter this.
-->

* パーティクルを非常に高速に生成します。パーティクルのライフスパンが 1 〜 2 フレームであれば、レーザーの再出現が早すぎて、ユーザーが視覚的な違いに気づかなくなります。

* ローカル空間にパーティクルを生成します。つまり、パーティクルはエミッターと一緒に動きます。ただし、エミッターを回転させたり、スケールしたりして、常にターゲットエンティティの方を向くようにしなければなりません。

* カスタムアップデーターを作成します。アークポジショナーと似たような（あるいはもっと単純な）カスタムポストアップデーターを作成すれば、パーティクルの位置を毎フレーム更新させ、パーティクルが動いても 2 点間に正しく配置することができます。

<!--
* Spawn the particles very fast. If they only live for 1-2 frames the laser will be recreated too fast for the user to notice any visual differences.

* Spawn particles in Local space. This means they will move together with the emitter, but then you will have to rotate and scale the emitter to always point to the target Entity.

* Create a custom Updater. If you create a custom post-updater similar (or simpler) to the arc positioner you can force it to update the particle positions every frame, correctly placing them between the two points even if they move.
-->

これらの選択肢は、作りたいゲームのタイプによって、それぞれメリットとデメリットがあります。毎フレームごとにパーティクルを生成する方法は最も簡単でシンプルな方法であり、ほとんどのニーズに応えることができます。
<!--
Depending on the type of game you want to make each of these options can have benefits or drawbacks. Spawning the particles every frame is the easiest and simplest way to do it and will be sufficient for most needs.
-->

## カスタムマテリアルを使ったレーザー
<!--
## Lasers using custom materials
-->

カスタムマテリアルを使ってレーザーを作る方法は、ローカル空間でパーティクルを扱う方法と似ています。エミッターを手動で回転させたりスケールを変えたりして、常にターゲットエンティティと向かい合わせる必要があります。
<!--
Creating lasers using custom materials is similar to using particles in Local space. We need to manually rotate the scale the emitter to always face a target entity.
-->

ターゲットに向けた 1 つの軸を長さと呼び、残り 2 つの軸をレーザーの幅と呼ぶことにします。
<!--
We can designate one axis which points towards the target to be our length, leaving the other two axes for width of the laser.
-->

回転したエンティティの下に配置された高さ 1 の円柱をレンダリングし、その円柱が伸びてターゲットポイントに到達することになります。
<!--
Rendering a cylinder with height of 1 which is placed under the rotated entity will cause it to stretch and reach the target point.
-->

カスタムマテリアルは、スクロールするテクスチャーを円柱に貼り付けるために必要です。また、スクロールのない通常の発光マップを使用することもできます。その場合には、カスタムマテリアルは必要ありません。
<!--
The custom material is required to place a scrolling texture on the cylinder. Or you can use a regular Emissive map with no scrolling in which case you won't need a custom material.
-->

パーティクルサンプルには、この方法でレーザーを作成する例がすでにあります。LaserOrientationScript　では、ターゲットポイントに向かってエンティティを回転・スケーリングし、ComputeColorTextureScroll シェーダーではスクロールするテクスチャーをサンプリングしています。
<!--
The particles sample already contains an example of how to create lasers this way. The LaserOrientationScript rotates and scales the entity towards a target point and the ComputeColorTextureScroll shader samples a scrolling texture.
-->

## サンプルプロジェクト
<!--
## Sample project
-->

このページで紹介されているテクニックをプロジェクトに実装する場合は、新しい **Sample: Particles** プロジェクトを新規に作成して、**Lasers** シーンを開いてください。
<!--
To see some of the techniques described on this page implemented in a project, create a new **Sample: Particles** project and open the **Lasers** scene.
-->

![Particles sample project](media/select-particles-sample-project.png)

## 関連項目
<!--
## See also
-->

* [チュートリアル: 軌跡の作成](create-a-trail.md)
* [チュートリアル: カスタム パーティクル](custom-particles.md)
* [チュートリアル: 継承](inheritance.md)
* [パーティクル](../index.md)
* [パーティクルの作成](../create-particles.md)

<!--
* [Tutorial: Create a trail](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Tutorial: Inheritance](inheritance.md)
* [Particles](../index.md)
* [Create particles](../create-particles.md)
-->
