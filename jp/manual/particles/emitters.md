# エミッター
<!--
# Emitters
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**パーティクル エミッター（Perticle emitter）** は、エフェクトに含まれるパーティクルの数、表示・移動・消滅方法、描画方法を管理します。例えば、炎のエフェクトは、炎、余炎、煙の 3 つのパーティクルエフェクトで構成されています。これらのエフェクトは、別々のパーティクルエミッターで管理されます。
<!--
**Particle emitters** manage how many particles are in an effect, how they appear, move, and disappear, and how they are drawn. For example, a fire effect might be composed of three separate particle effects: flames, embers, and smoke. Each of these effects is managed by a separate particle emitter.
-->

エミッターには、[スポナー（spawners）](spawners.md)、[イニシャライザー（initializers）](initializers.md)、[アップデーター（updaters）](updaters.md)などのコントロールが含まれています。
<!--
Emitters contain further controls such as [spawners](spawners.md), [initializers](initializers.md), and [updaters](updaters.md).
-->

![media/particles-reference-emitters-1.png](media/particles-reference-emitters-1.png) 

| プロパティ        | 説明
| ---------------- | -----------
| Emitter Name     | パーティクルエミッターの一意な識別子。
| Max particles    | パーティクルのスポーンレートと寿命に基づいて、エミッターが所定の時間に管理できるアクティブなパーティクルの最大数です。これを 0 にしておくと、Stride は独自の推定値を使用します。
| Lifespan         | 新しいパーティクルは、X 値と Y 値の間のライフスパンを持ちます。
| Space            | **World** 空間にあるパーティクルは、エミッターが遠ざかってもワールド空間に留まります。**Local** 空間にあるパーティクルは、常にエミッターのローカル座標系に存在します（エミッターが移動、回転、拡大縮小すると、パーティクルもそれに合わせて移動します）。
| Randomize        | パーティクルは、ランダム性を要求するすべての値に疑似乱数を使用します。**Time** を指定すると、様々なエミッターが様々な乱数を生成します。**Fixed** を指定すると、同じエフェクトの異なるインスタンスは同じように動作します。**Position** は Fixed と同じように動作しますが、位置によって動作が異なります。
| Draw priority    | パーティクルの描画の順番をコントロールします。数字が大きいほど優先順位が高くなります。例えば、このパーティクルエフェクトの描画優先度が 2 である場合には、描画優先度が 1 のパーティクルエフェクトの後に描画されます。
| Sorting          | パーティクルの描画の順番を並び替えます。**ByDepth**（カメラから遠ざかる）、**ByAge**（最初に生成されたパーティクルが上に描画される）、**ByOrder**、**None**（ソートの必要がない加算パーティクルに適しています）のいずれかを指定します。
| Shape            | パーティクルの描画に使用する[シェイプ](shapes.md)を指定します。
| Material         | パーティクルのレンダリングに使用する[マテリアル](material.md)を指定します。
| Spawners         | [スポナー](spawners.md)は、新しいパーティクルの放出速度をコントロールします。パーティクルを放出するには、エミッターには少なくとも 1 つのスポナーが必要です。
| Initializers     | [イニシャライザー](initializers.md) は、新しいパーティクルの初期値を設定します。
| Updaters         | [アップデーター](updaters.md)は、フレームごとに生きているパーティクルを更新し、その属性を変更します。アップデーターは、リストに表示されている順に実行されます。

<!--
| Property         | Description
| ---------------- | -----------
| Emitter name     | A unique identifier for the particle emitter
| Max particles    | The maximum number of active particles the emitter can manage at a given time, based on the particles' spawn rate and lifespan. If you leave this at 0, Stride uses its own estimate.
| Lifespan         | New particles have a lifespan between these two values
| Space            | Particles in **world** space remain in the world space when the emitter moves away from them. Particles in **local** space always exist in the emitter's local coordinate system; if the emitter moves, rotates, or scales, the particles move with it.
| Randomize        | Particles use pseudo-random values for everything which requires randomness. If you set this to **Time**, different emitters generate different random numbers. If you set it to **Fixed**, different instances of the same effect behave identically. **Position** acts as Fixed but is different for different positions.
| Draw priority    |  This controls the order in which particles are drawn. Higher numbers have higher priority. For example, if this particle effect has a draw priority of 2, it will be drawn after a particle effect with a draw priority of 1.
| Sorting          | Choose if the articles should be drawn by **depth** (away from the camera), **age** (particles spawned first are drawn on top), **order**, or in no order **none** (good for additive particles, which need no sorting). |
| Shape            | Specifies the [shape](shapes.md) used to draw the particles
| Material         | Specifies the [material](materials.md) used to render the particles
| Spawners         | [Spawners](spawners.md) control how quickly new particles are emitted. To emit particles, emitters must have at least one spawner.
| Initializers     | [Initializers](initializers.md) set the initial values of new particles
| Updaters         | [Updaters](updaters.md) update living particles every frame, changing their attributes. Updaters execute in the order in which they appear on the list.
-->

## 関連項目
<!--
## See also
-->

* [パーティクルの作成](create-particles.md)
* [シェイプ](shapes.md)
* [マテリアル](materials.md)
* [スポナー](spawners.md)
* [イニシャライザー](initializers.md)
* [アップデーター](updaters.md)

<!--
* [Create particles](create-particles.md)

* [Shapes](shapes.md)

* [Materials](materials.md)

* [Spawners](spawners.md)

* [Initializers](initializers.md)

* [Updaters](updaters.md)
-->