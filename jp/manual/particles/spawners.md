# パーティクル スポナー
<!--
# Particle spawners
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

**パーティクルスポナー（particle spawner）** は、パーティクルをいつ、どれだけ、どんな早さで放出するかをコントロールします。エミッターには少なくとも 1 つのスポナーが必要ですが、異なる設定を持つ複数のスポナーを含めることもできます。
<!--
**Particle spawners** control when, how many, and how quickly particles are emitted. Emitters need at least one spawner, but can contain multiple spawners with different settings.
-->

## 秒ごと（Per second）
<!--
## Per second
-->

1 秒間に決まった数のパーティクルを放出します。フレームレートが変化したり低下したりしてもバランスよく補間され、安定しています。例えば、1 秒間に 20 個のパーティクルを放出する場合、60 fps のゲームでは 3 フレームに 1 個、30 fps のゲームでは 3 フレームに 2 個のパーティクルを放出します（いずれも 3 つめのフレームではスキップされます）。
<!--
Emits a fixed number of particles per second. It balances and interpolates them and is stable even if the framerate changes or drops. For example, at a rate of 20 particles per second, the spawner spawns one particle every three frames for 60fps games and two particles for every three frames (skipping every third frame) for 30fps games.
-->

![media/particles-reference-spawners-1.png](media/particles-reference-spawners-1.png) 

| プロパティ               | 説明
|-------------------------|----------------------------------------------------
| Loop                    | 放出をループさせるには、**Looping** を指定します（既定）。ループする際に待ち時間が発生ないようにするには、**Looping, no delay** を指定します。スポナーを一度だけ起動して停止させるには、**One shot** を指定します。
| Delay                   | 放出が始まるまでの待ち時間（秒）。X（最小値）とY（最大値）の間のランダムな値になります。
| Duration                | 放出の持続時間（秒）。持続時間が終了すると、Loop プロパティに応じて、スポナーは再び開始するか停止します。
| Particles               | 1 秒間に生成されるパーティクルの数です。浮動小数点数で指定できます（例：36.875）。

<!--
| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
| Duration                | How long (in seconds) the spawner spawns particles for. At the end of the duration, the spawner either starts again or stops, depending on the Loop property.|
| Particles               | The number of particles the spawned per second. This can be a floating value (eg 36.875).                       |
-->

## フレームごと（Per frame）
<!--
## Per frame
-->

フレームごとに決まった数のパーティクルを放出します。フレームレートは関係ありません。これは、固定数のパーティクルが必要になる場合に便利です。例えば、1 フレームごとに正しく 1 個ずつパーティクルが生まれる設定は、軌跡やリボンなどで便利です。
<!--
Emits a fixed number of particles per frame, regardless of framerate. This can be useful if you require a fixed number of particles - for example, exactly one every frame, which is useful for trails and ribbons.
-->

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-2.png) 

| プロパティ               | 説明
|-------------------------|---------------------------------
| Loop                    | 放出をループさせるには、**Looping** を指定します（既定）。ループする際に待ち時間が発生ないようにするには、**Looping, no delay** を指定します。スポナーを一度だけ起動して停止させるには、**One shot** を指定します。
| Delay                   | 放出が始まるまでの待ち時間（秒）。X（最小値）とY（最大値）の間のランダムな値になります。
| Duration                | 放出の持続時間（秒）。持続時間が終了すると、Loop プロパティに応じて、スポナーは再び開始するか停止します。
| Particles               | フレームごとに生成されるパーティクルの数です。値は浮動小数値であり、1 より小さい数も指定できます。その場合、パーティクルを数フレームごとに生成されます。
| Framerate               | このフレームレートは、エンジンがパーティクルの最大個数を計算するためだけに使用する推定値です。

<!--
| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                                 |
| Particles               | The number of particles spawned per frame. The value can be a floating value, including values less than 1, in which case a new particle is spawned every few frames.                                                                              |
| Framerate               | This is for estimation purposes only when the engine calculates the maximum number of particles.|
-->

## バースト（Burst）
<!--
## Burst
-->

すべてのパーティクルを一度の爆発で放出します。
<!--
Emits all particles in one burst.
-->

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-3.png) 

| プロパティ               | 説明
|-------------------------|-------------------------------------------
| Loop                    | 放出をループさせるには、**Looping** を指定します（既定）。ループする際に待ち時間が発生ないようにするには、**Looping, no delay** を指定します。スポナーを一度だけ起動して停止させるには、**One shot** を指定します。
| Delay                   | 放出が始まるまでの待ち時間（秒）。X（最小値）とY（最大値）の間のランダムな値になります。
| Duration                | 放出の持続時間（秒）。持続時間が終了すると、Loop プロパティに応じて、スポナーは再び開始するか停止します。
| Particles/burst         | 1 回のバーストごとに放出されるパーティクルの数。

<!--
| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                             |
| Particles/burst         | The number of particles spawned in each burst. |
-->

## Distance
<!--
## Distance
-->

エミッターの移動した距離に応じてパーティクルを放出します。エミッターが動かない場合はパーティクルを生成しません。
<!--
Emits particles based on the distance traveled by the emitter. If the emitter doesn't move, it spawns no particles.
-->

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-4.png) 

| プロパティ               | 説明
|-------------------------|-------------------------------------------
| Loop                    | 放出をループさせるには、**Looping** を指定します（既定）。ループする際に待ち時間が発生ないようにするには、**Looping, no delay** を指定します。スポナーを一度だけ起動して停止させるには、**One shot** を指定します。
| Delay                   | 放出が始まるまでの待ち時間（秒）。X（最小値）とY（最大値）の間のランダムな値になります。
| Duration                | 放出の持続時間（秒）。持続時間が終了すると、Loop プロパティに応じて、スポナーは再び開始するか停止します。
| Particles/unit          | スポナーが距離単位を移動するごとに生成されるパーティクルの数です。距離単位あたりのパーティクル数が少ない場合には、分数を使用できます。レートはスケーリングで調整されます。

<!--
| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                              |
| Particles/unit          | The number of particles spawned for every distance unit the spawner moves. You can use fractions if you need fewer than one particle per distance unit. The rate adjusts with scaling. |
-->

## 親から（From parent）
<!--
## From parent
-->

他のパーティクル（親）に基づいてパーティクルを放出します。親パーティクルの特定の条件が満たされた際に、スポナーはパーティクルを放出します。
<!--
Emits particles based on other particles (parents). When certain conditions in a parent particle are met, the spawner spawns particles.
-->

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-5.png) 

| プロパティ               | 説明
|-------------------------|-------------------------------------------
| Loop                    | 放出をループさせるには、**Looping** を指定します（既定）。ループする際に待ち時間が発生ないようにするには、**Looping, no delay** を指定します。スポナーを一度だけ起動して停止させるには、**One shot** を指定します。
| Delay                   | 放出が始まるまでの待ち時間（秒）。X（最小値）とY（最大値）の間のランダムな値になります。
| Duration                | 放出の持続時間（秒）。持続時間が終了すると、Loop プロパティに応じて、スポナーは再び開始するか停止します。
| Parent emitter          | 親となるエミッターの名前を指定します。
| Spawn Control Group     | このフィールドは親パーティクルに追加され、どの親パーティクルが何個の子パーティクルを生成するかをより正確にコントロールできるようになります。4 つのグループから選ぶことができ、イニシャライザーの制御が必要な場合は、イニシャライザーのグループと一致させる必要があります。
| Particles/trigger       | トリガー条件が満たされるたびに、親から生成されるパーティクルの最小個数と最大個数を指定します。
| Particle Spawn Trigger  | どのような条件（トリガー）で子パーティクルが発生するのかを指定します（詳細は以下）。

<!--
| Property                | Description                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                                    |
| Parent emitter          | The parent emitter, which should match the emitter's name set on that emitter. |
| Spawn Control Group     | This field will be added to the parent particles for more precise control over which parent particle spawns how many children. There are 4 groups you can choose from and they should match the initializers' groups, if initializers require control. |
| Particles/trigger       | How many particles (min and max) are spawned from a parent each time the triggering condition is met. |
| Particle Spawn Trigger  | What condition triggers child particles spawning (detailed below) |
-->

### パーティクル放出トリガー（Particle Spawn Trigger）
<!--
### Particle Spawn Trigger
-->

| トリガー  | 説明
|----------|---------------------------------------
| On Birth | 子パーティクルは、親パーティクルが生まれたときに 1 度だけ生成されます（それぞれの親ごとに 1 回）。
| On Death | 子パーティクルは、親パーティクルが死んだときに 1 度だけ生成されます（それぞれの親ごとに 1 回）。
| Distance | 親パーティクルの移動距離に応じて子パーティクルが生成されます。
| On Hit   | 親パーティクルは *衝突アップデーター（Collision Updater）* を実装している必要があります。子パーティクルは、親パーティクルがサーフェスに衝突したときに生成されます。
| Lifetime | 親パーティクルのライフタイムを、全ライフタイムの長さを 1 として正規化して表した場合に、それが 2 つの値 A と B の間にあるときに子パーティクルが生成されます。A < B の場合、期間は 0...(A..B)...1 となり、B > A の場合、期間は逆に (0..B)...(A..1) となります。この方法は、On Birth/On Death よりも精度は低くなります。

<!--
- On Birth - Child particles are spawned once when a parent particle is born (once per parent)
 - On Death - Child particles are spawned once when a parent particle dies (once per parent)
 - Distance - Child particles are spawned per distance traveled as the parent particle moves
 - On Hit - Parent particles need to implement *Collision Updater*. Child particles are spawned when a parent particle hits the surface.
 - Lifetime - Child particles are spawned when the parent particle's lifetime is between two limits, A and B, expressed as normalized values (0 to 1) over the particle's lifetime. If A < B, the period is 0..(A..B)..1, if B > A the period is reversed to (0..B)..(A..1). This method is less precise than the On Birth/On Death conditions.
-->

## 関連項目
<!--
## See also
-->

* [パーティクルの作成](create-particles.md)
* [エミッター](emitters.md)
* [シェイプ](shapes.md)
* [マテリアル](materials.md)
* [イニシャライザー](initializers.md)
* [アップデーター](updaters.md)

<!--
* [Create particles](create-particles.md)
* [Emitters](emitters.md)
* [Shapes](shapes.md)
* [Materials](materials.md)
* [Initializers](initializers.md)
* [Updaters](updaters.md)
-->
