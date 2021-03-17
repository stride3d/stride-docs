# パーティクルの作成
<!--
# Create particles
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

[パーティクルシステム](https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%82%AF%E3%83%AB%E3%83%BB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)を作成するには、シーンまたはエンティティツリーを右クリックして、[**Particle system**] の配下の希望のプリセット（**Empty**, **Simple**, **Fountain**, **Ribbon** のいずれか）を選択します。

![media/particles-reference-editor-1.png](media/particles-reference-editor-1.png)

Game Studio は、選択されたプリセットから、**Transform** コンポーネントと **Particle System** コンポーネントを持つエンティティを作成します。
<!--
Game Studio creates an entity with a **Transform** component and a **Particle System** component with your chosen preset. Particle entities are represented with a flame icon.
-->

![media/particles-reference-editor-2.png](media/particles-reference-editor-2.png) 

あるいは、既存のエンティティに Particle system コンポーネントを追加することもできます。エンティティを選択した状態で、**プロパティグリッド**で [**Add component**] をクリックし、[**Particles**] > [**Particle system**] を選択します。
<!--
Alternatively, you can add a particle component to an existing entity. With the entity selected, in the **Property Grid**, click **Add component** and select **Particle System**.
-->

![Add Particle System](tutorials/media/add-particle-system.png)

Game Studio は、エンティティに空のパーティクルシステムを追加します。
<!--
Game Studio adds an empty particle system to the entity.
-->

## Transform コンポーネント
<!--
## Transform component
-->

すべてのエンティティは、Transform コンポーネントを持っています。パーティクル要素の中には、回転やスケーリングなど、Transform コンポーネントの一部を無視するものもあります。例えば、重力はパーティクルシステムの回転に依存すべきものではないため、常に回転は無視されます。しかし、噴水パーティクルシステムでは、パーティクルの初期速度を計算するために、パーティクルシステムの位置を継承します。
<!--
All entities have a transform component. Some particle elements ignore some elements of the transform component, such as rotation or scaling. For example, the gravity force shouldn't depend on the rotation of the particle system, and always ignores rotation; however, fountain particle systems inherit the location for the purposes of initial particle velocity.
-->

均等なスケーリングのみがサポートされています。Transform コンポーネントに不均等な（同一でない）スケール値を設定した場合は、X 軸のスケール値だけが使用されます。
<!--
Only uniform scaling is supported. If you have a non-uniform scale on the transform component, only the X axis is used.
-->

2 つのパーティクルシステムで Transform コンポーネントを共有したい場合は、2 つのパーティクルシステムエンティティを作成し、一方をもう一方の子とします。
<!--
If you want two particle systems to share a transform component, create two particle system entities and make one a child of the other.
-->

## Particle system コンポーネントのプロパティ
<!--
## Particle component properties
-->

他のエンティティと同様に、パーティクルシステムエンティティを選択した状態で、**プロパティグリッド**でプロパティを編集することができます。
<!--
With a particle system entity selected, you can edit its properties in the **Property Grid**, just like any other entity.
-->

![media/particles-reference-editor-3.png](media/particles-reference-editor-3.png)

| プロパティ        | 説明
| ---------------- | -------------
| Editor control | シーンでの作業中に、Game Studio がエディタ上でパーティクルをどのように表示するかを設定します。**Control** で、パーティクルシステムを再生、一時停止、停止することができます。また、パーティクルエフェクトを一定の間隔でリセットすることもできるので、ワンショットのエフェクトをプレビューするのに便利です。Editor control プロパティは、実行時のパーティクルの表示には影響を与えません。
| Thembnail Warm-up  | ウォームアップタイムを 0 より大きい値に設定すると、パーティクルが表示されたときに、すでにアクティブであるかのように表示されます。秒単位で指定します。例えば、ウォームアップタイムを 1 に設定すると、パーティクルエフェクトは、表示されるときにすでに 1 秒間アクティブであるかのように表示されます。これは便利な機能で、例えば火のエフェクトのウォームアップタイムを 0 に設定すると、火はレンダリングの開始と同時にすぐ発火するように見えます。レンダリングの開始時にすでに着火しているように見せたい場合は、ウォームアップタイムを増やします。
| Speed scale  | パーティクルエフェクトのスピードをコントロールします。
| Culling AABB | パーティクルエフェクトの周囲に、[軸並行境界ボックス（axis-aligned bounding box; AABB）](https://ja.wikipedia.org/wiki/%E8%A1%9D%E7%AA%81%E5%88%A4%E5%AE%9A#%E8%BB%B8%E4%B8%A6%E8%A1%8C%E5%A2%83%E7%95%8C%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E6%96%B9%E5%BC%8F%EF%BC%88AABB%E6%96%B9%E5%BC%8F%EF%BC%89)が作成されます。ボックスがカメラビューに入っていない場合、Stride はパーティクルエフェクトのレンダリングを行いません。これは、カリングや最適化に役立ちます。**Rotated AABB** は、ボックスの形状を XYZ 座標で指定します。**Uniform AABB** は、指定したスケール（[ワールド単位](../game-studio/world-units.md)）の立方体を指定します。シーンエディターで AABB を表示するには、**Debug Draw** をオンにします。
| Emitters | パーティクルシステムに含まれるエミッター（emitter; 放出器）です。エミッターはリストに表示された順に更新されて描画されますが、その順番を変えることもできます。詳細については[エミッター](emitters.md)を参照してください。

<!--
| Property         | Description |
| ---------------- | -------------
| Editor control | This changes how Game Studio displays particles while you work on the scene. You can play, pause, and stop the particle system. You can also reset the particle effect at set intervals, which is useful for previewing one-shot effects. The editor controls don't affect how particles are displayed at runtime.
| Warm-up time  | If you set the warm-up time to a value greater than 0, the particle appears as if it's already active when it appears. This value is in seconds. For example, if you set the warm-up time to 1, the particle effect appears as if it has already been active for 1 second when it appears. This is useful, for example, if you set a fire effect warm-up time to 0, the fire appears to ignite as soon as it's rendered. If you want the fire to appear as if it's already ignited when it's rendered, increase the warm-up time.
| Speed scale  | Controls the speed of the particle effect.
| Culling AABB | This creates an axis-aligned bounding box (AABB) around the particle effect. If the bounding box isn't in the camera view, Stride doesn't render the particle effect. This is useful for culling and optimization. **Rotated AABB** sets box shape in XYZ co-ordinates. **Uniform AABB** creates a cube of the scale you specify (in [world units](../game-studio/world-units.md)). To view the AABB in the Scene Editor, select **Debug Draw**.
| Emitters | The emitters the particle system contains. The emitters are updated and drawn in the order they appear in the list, and can be re-ordered. For more information, see [Emitters](emitters.md).
-->

## 関連項目
<!--
## See also
-->

* [エミッター](emitters.md)
* [シェイプ](shapes.md)
* [マテリアル](materials.md)
* [スポナー](spawners.md)
* [イニシャライザー](initializers.md)
* [アップデーター](updaters.md)

<!--
* [Emitters](emitters.md)
* [Shapes](shapes.md)
* [Materials](materials.md)
* [Spawners](spawners.md)
* [Initializers](initializers.md)
* [Updaters](updaters.md)
-->
