# パーティクル イニシャライザー
<!--
# Particle initializers
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**イニシャライザー（initializer）** は、パーティクルが最初に放出されたときの、位置、速度、サイズなどの状態をコントロールします。前のフレームで放出されたパーティクルには影響しません。
<!--
**Initializers** control the states of particles such as position, velocity, size, and so on when the particles are first spawned. They have no effect on particles spawned on previous frames.
-->

> [!Note] 
> [アップデーター](updaters.md)には、フレームの**最後**にパーティクルの値を変更することで、イニシャライザーが設定した初期値を効果的に上書きするものもあります。これはすべてのアニメーションに当てはまります。これらはパーティクルの寿命に作用し、色アニメーションアップデーターは、色イニシャライザーが設定した初期値を上書きするでしょう。

<!--
> [!Note] 
Some [updaters](updaters.md) act change the particle's value at the *end* of the frame. They effectively overwrite any initial values set by a similar initializer. Such is the case with all animations. They operate on the particle's lifetime and a color animation updater will overwrite any initial values from a color initializer.
-->

同様に、同じフィールドに作用するイニシャライザーは排他的かつ順番に実行されるので、一番下（最後）のものだけが有効になります。例えば、2 つの色イニシャライザーを割り当てた場合、2 番目のイニシャライザーのみが有効です。
<!--
Similarly, initializers which operate on the same field are exclusive and only the bottom one will have any effect, since they are executed in order. For example if you assign two color initializer, only the second one will have any effect.]
-->

## 共通プロパティ
<!--
## Common properties
-->

いくつかのプロパティは、多くのイニシャライザーに共通しています。
<!--
Several properties are common across many initializers.
-->

![media/particles-reference-initializers-1.png](media/particles-reference-initializers-1.png) 

| プロパティ                   | 説明
|-----------------------------|-------------
| Debug draw                  | デバッグ用に、イニシャライザーの境界を示すワイヤーフレームを描画します。これはシーンエディターでのみ表示され、実行時には表示されません。
| Position inheritance        | パーティクルシステムコンポーネントの位置を継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Position プロパティを継承します。
| Position offset             | 追加のモジュール移動。親の位置を継承している場合は、継承した位置の上に適用されます。
| Rotation inheritance        | パーティクルシステムコンポーネントの回転を継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Rotaion プロパティを継承します。
| Rotation offset             | 追加のモジュール回転。親の回転を継承している場合は、継承した回転の上に適用されます。
| Scale inheritance           | パーティクルシステムコンポーネントの均等スケールを継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Scale プロパティを継承します。
| Scale offset                | 追加のモジュールスケーリング。親のスケーリングを継承している場合は、継承したスケールの上に適用されます。

<!--
| Property                    | Description
|-----------------------------|-------------
| Debug draw                  | Draws a debug wireframe in the scene to show the boundaries of the initializer. This is only visible in the Scene Editor, not at runtime.
| Position inheritance        | Inherit the particle system component position, as defined in the particle entity's Transform component
| Position offset             | Additional translation of the module. If it inherits the parent position, this is applied on top of the inherited position.
| Rotation inheritance        | Inherit the particle system component's rotation, as defined in the Transform component
| Rotation offset             | Additional rotation of the module. If it inherits the parent's rotation, this is applied on top of the inherited rotation.
| Scale inheritance           | Inherit the particle system component's uniform scale, as defined in the Transform component
| Scale offset                | Additional scaling of the module. If it inherits the parent's scale, this is applied on top of the inherited scale.
-->

例えば、速度（velocity）のイニシャライザーは、親の回転に応じて向きを変えたり、あるいはそれを無視して常に一定の方向にパーティクルを発射することができます。
<!--
For example, a velocity initializer can change its direction depending on the parent's rotation or decide to ignore it and always shoot particles in a fixed direction.
-->

一方で、サイズのイニシャライザーが親の回転に応じて変化することはないため、回転フィールドは全く表示されません。
<!--
On the other hand, size initializers don't change based on the parent's rotation, so the rotation fields won't appear at all.
-->

## 位置（Position）
<!--
## Position
-->

パーティクルは、左下奥の角と右上前の角で定義される軸並行境界ボックス（AABB）内に放出されます。
<!--
Particles are spawned in an axis-aligned bounding box, defined by its left lower back corner and its right upper front corner.
-->

![media/particles-reference-initializers-2.png](media/particles-reference-initializers-2.png) 

| プロパティ                   | 説明
|-----------------------------|-------------
| Random Seed                 | 乱数で使用されます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド；速度など）と強制的に結合するには、これを同じ値にします。異なる値にすると、位置は他のフィールドから独立した一意なものになります。
| Position min                | ボックスの左下奥の角
| Position max                | ボックスの右下前の角

<!--
| Property                    | Description
|-----------------------------|-------------
| Seed offset                 | Used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have three properties (X, Y, Z), eg velocity. Make them different to force the position to be unique and independent from other fields
| Position min                | Left lower back corner for the box
| Position max                | Right upper front corner for the box
-->

この画像は、エミッターでパーティクルが最初に現れる境界ボックスを表示しています。角 (-1, 0.8, -1)～(1, 1, 1) に加えて、Rotation Offset の指定により、ボックスはさらに 45 度回転しています。
<!--
This image shows the bounding box where particles initially appear for this emitter. In addition to the corners (-1, 0.8, -1) ~ (1, 1, 1), the box is further rotated by 45 degrees as seen from the offset rotation.
-->

![media/particles-reference-initializers-3.png](media/particles-reference-initializers-3.png) 

## 速度（Velocity）
<!--
## Velocity
-->

パーティクルは、定められた範囲の値を初期速度として放出されます。この範囲は、X, Y, Z の 3 方向を独立して指定できます。
<!--
Particles spawn with initial velocity which ranges between the defined values. The velocity is independent in all three directions between X, Y and Z.
-->

![media/particles-reference-initializers-4.png](media/particles-reference-initializers-4.png) 

| プロパティ                   | 説明
|-----------------------------|-------------
| Random Seed                 | 乱数で使用されます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド；位置など）と強制的に結合するには、これを同じ値にします。異なる値にすると、速度は他のフィールドから独立した一意なものになります。
| Velocity min                | ボックスの左下奥の角
| Velocity max                | ボックスの右上前の角

<!--
| Property                    | Description
|-----------------------------|-------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the velocity to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
| Velocity min                | Left lower back corner for the box
| Velocity max                | Right upper front corner for the box
-->

## サイズ（Size）
<!--
## Size
-->

パーティクルが最初に放出されたときの均等サイズを設定します。サイズが 1 であれば、レンダリング時には 1 メートル × 1 メートルのビルボードまたは四角形になります。
<!--
Initial size sets the particle's uniform size when it's spawned for the first time. A size of 1 will result in a 1 meter by 1 meter billboard or quad when rendered.
-->

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-5.png) 

| プロパティ                   | 説明
|-----------------------------|--------------
| Random Seed                 | 乱数で使用されます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、サイズは他のフィールドから独立した一意なものになります。
| Random size                 | 放出時のパーティクルのサイズが取り得る範囲の最小値と最大値です。

<!--
| Property                    | Description
|-----------------------------|--------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the size to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the size to be unique and independent from other fields
| Random size                 | Shows the minimum and maximum size a particle can have at spawn time
-->

## 回転（Rotation）
<!--
## Rotation
-->

カメラ方向を回転軸とするパーティクルの回転角度を設定します。正の値が時計回りです。このフィールドは、ビルボードなどのカメラ向きのパーティクルにのみ意味があります。方向性のある四角形やモデルには影響しません。
<!--
Initial rotation sets the particle's angular rotation when facing the camera. Positive values are clockwise rotations. The field only has meaning for camera-facing particles, such as billboards. It has no effect on oriented quads and models.
-->

![media/particles-reference-initializers-6.png](media/particles-reference-initializers-6.png) 

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使用されます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、回転角度は他のフィールドから独立した一意なものになります。
| Angle (degrees)             | 初期回転角度（単位：度）が取り得る範囲の最小値と最大値です。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the angle to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the angle to be unique and independent from other fields
| Angle (degrees)             | The minimum and maximum value, in degrees, for the initial rotation
-->

## 色（Color）
<!--
## Color
-->

放出時のパーティクルの初期色を設定します。パーティクルを構築する際に頂点バッファに入り、マテリアルで使用することができますが、マテリアルの設定によっては使用できないことがあります。色を設定しても効果がない場合について、[マテリアル](materials.md)のページで詳しく説明しています。
<!--
Initial color sets the particle's initial color at spawn time. It goes into the vertex buffer when building the particles and can be used by the material, but might not if the option is not set in the material itself. If setting the color has no effect please refer to the [Material](materials.md) page for further discussion.
-->

![media/particles-reference-initializers-7.png](media/particles-reference-initializers-7.png) 

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、色は他のフィールドから独立した一意なものになります。
| Color A                     | 最初の値を 16 進法で表したもの。パーティクルの色は、この色と 2 番目の色の間のランダムな色になります。
| Color B                     | 2 番値の値を 16 進法で表したもの。パーティクルの色は、この色と最初の色の間のランダムな色になります。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the color to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the color to be unique and independent from other fields
| Color A                     | The first value, in hexadecimal code. The color will be a random tint between this and the second color.
| Color B                     | The second value, in hexadecimal code. The color will be a random tint between this and the first color.
-->

## 3D 方向（3D Orientation）
<!--
## 3D Orientation
-->

3D 対応パーティクルが最初に放出されるときの向きを設定します。設定したユークリッド空間での各方向は、エンジンによってクォータニオンに詰められます。補間値は、各方向の値を個別に補間したものではなく、2 つの向きの間の最短経路上に存在しています。
<!--
Initial 3D orientation sets the orientation for 3D-aware particles when they first spawn. The editable fields use euclidean rotation which is packed into a quaternion orientation by the engine. The interpolated value is on the shortest path  between the two orientations, rather than interpolating each value separately.
-->

![media/particles-reference-initializers-8.png](media/particles-reference-initializers-8.png) 

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、方向は他のフィールドから独立した一意なものになります。
| Orientation A               | 最初の方向。
| Orientation B               | 2 番目の方向。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the orientation to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the orientation to be unique and independent from other fields.
| Orientation A               | The first oriented position
| Orientation B               | The second oriented position
-->

## 方向（Direction）
<!--
## Direction
-->

イニシャライザーは、パーティクルのプロパティに **Direction** フィールドを作成し、その初期値を設定します。Trail シェイプや Direction Aligned Sprite シェイプなどのシェイプビルダーでは、パーティクルを適切に表示するためにパーティクルの Direction を利用します。
<!--
This initializer creates the **Direction** field in the particle properties and sets its initial value. Some shape builders, like the Trail shape or the Direction Aligned Sprite shape use the particle's direction to properly display it.
-->

| プロパティ                   | 説明
|-----------------------------|-------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、方向は他のフィールドから独立した一意なものになります。
| Direction min               | ボックスの左下奥の角
| Direction max               | ボックスの右上前の角

<!--
| Property                    | Description
|-----------------------------|-------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the direction to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
| Direction min               | Left lower back corner for the box
| Direction max               | Right upper front corner for the box
-->

## 放出順序（Spawn Order）
<!--
## Spawn Order
-->

このイニシャライザーには、プロパティはありません。このイニシャライザーは、エミッターから放出されるそれぞれのパーティクルに 0 から始まる単純増加数を割り当てるだけです。放出の順序は、並び替えやカスタム計算などで利用されます。
<!--
This initializer has no properties. It simply sets an increasing number to each particle spawned from this emitter, starting from 0. The spawn order can be used for sorting or some custom calculations.
-->

## 位置（円弧型）（Position（Arc））
<!--
## Position (Arc)
-->

円弧型位置イニシャライザーは、エミッターの位置とターゲット（に指定したエンティティの Transform コンポーネントの）位置という 2 点間の円弧（円弧の矢高が 0 の場合は直線）に沿って、パーティクルを配置します。位置のランダムオフセットを指定して、パーティクルを円弧上の位置から少しずらすこともできます。
<!--
The arc position initializer positions the particles in an arc (or a straight line if the arc's height is 0) between two point, the emitter's position and a target transform component. With random position offset you can cause the particles to deviate a little from their original location on the arc.
-->

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-9.png) 

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、位置は他のフィールドから独立した一意なものになります。
| Position min                | ボックスの左下奥の角
| Position max                | ボックスの右上前の角
| Target                      | 円弧の終点を示すエンティティを指定します。設定されていない場合は、Fallback Target プロパティがエミッターの位置からのオフセットとして使用されます。
| Fallback Target             | Target プロパティが設定されていない場合に円弧の終点として使用される位置。エミッターを原点としたオフセットです。
| Arc Height                  | 円弧の矢高（最高点の高さ；2 点間の距離の真ん中）です。既定では Y-up ベクトルですが、オフセットや継承を使って回転させることができます。
| Ordered                     | これをオンにすると、新しいパーティクルはエミッターからターゲットに向かって順番に現れます。オフである場合は、円弧上にランダムに現れます。パーティクルをリボンや軌跡のように表現したい場合にオンにします。
| Fixed count                 | 既定では、最大個数のパーティクルが円弧上にぴったり収まる程度の間隔で現れます。放出の速度や距離をコントロールしたい場合は、円弧上に固定された「位置」の数を設定します。例えば、Fixed count 10 で Ordered がオンであれば、まず 10 個のパーティクルが順番に現れ、次に 11 個目のパーティクルが最初のパーティクルと同じ位置に最初から現れ、というようになります。
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、位置は他のフィールドから独立した一意なものになります。
| Position min                | ボックスの左下奥の角。これは、円弧上の位置に加算されるオフセットです。
| Position max                | ボックスの右上前の角。これは、円弧上の位置に加算されるオフセットです。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
| Position min                | Left lower back corner for the box
| Position max                | Right upper front corner for the box
| Target                      | Allows you to pick up an Entity for the end of the arc. If no Entity is set, Fallback Target will be used, which is an offset from the emitter's location.
| Fallback Target             | Offset from the emitter's location used as the end point in case Target is not set
| Arc Height                  | The height of the arc at its highest point (middle of the distance between the two points). By default it's the Y-up vector, but can be rotated with rotation offset and rotation inheritance
| Ordered                     | If checked, new particles will appear in order from the emitter towards the target. If unchecked, new particles will appear randomly on the arc anywhere between the emitter and the target. If you plan to visualize the particles as a ribbon or a trail you should set this box to checked.
| Fixed count                 | By default particles will appear on the arc at distances enough for the maximum number of particles to fit exactly on the line. If you want to control spawn rate and distance, you can set how many fixed "positions" are there on the arc. For example, with a fixed count of 10 and Ordered spawning, the first 10 particles will appear in order, then the 11th particle will appear from the beginning, at the same position as the first, and so on.
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
| Position min                | Left lower back corner for the box. This is an offset in addition to the arc position.
| Position max                | Right upper front corner for the box. This is an offset in addition to the arc position.
-->

## 位置（親）（Position（parent））
<!--
## Position (parent)
-->

| プロパティ                   | 説明
|-----------------------------|-------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、位置は他のフィールドから独立した一意なものになります。
| Position min                | ボックスの左下奥の角
| Position max                | ボックスの右上前の角
| Parent emitter              | 親エミッターの名前を指定します。パーティクルの位置は、その親エミッターのパーティクルの位置と同じになります。
| Parent Offset               | 親パーティクルの選択方法を接続または分離するために使用されるランダムシードです。例えば、一見ランダムに見えるパーティクルから位置**と**色を選びたい場合には、同じオフセットを使用できます。このような接続を避けたい場合は、位置と色のイニシャライザーに対して異なるオフセットを使用することができます。
| Spawn Control Group         | None の場合、親はランダムに選ばれます。Group 0～3 の 4 つのグループのいずれかを指定すると、特定の親を持つパーティクルのみが初期化されます。**from Parent** 型のスポナーのコントロールグループと一致する必要があります。

<!--
| Property                    | Description
|-----------------------------|-------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
| Position min                | Left lower back corner for the box
| Position max                | Right upper front corner for the box
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the **Spawn from Parent** spawner to work properly.
-->

## 速度（親）（Velocity（parent））
<!--
## Velocity (parent)
-->

| プロパティ                   | 説明
|-----------------------------|-------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（3 つのプロパティ (X, Y, Z) を持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、速度は他のフィールドから独立した一意なものになります。
| Velocity min                | ボックスの左下奥の角。
| Velocity max                | ボックスの右上前の角。
| Parent emitter              | 親エミッターの名前を指定します。パーティクルの位置は、その親エミッターのパーティクルの位置と同じになります。
| Parent Offset               | 親パーティクルの選択方法を接続または分離するために使用されるランダムシードです。例えば、一見ランダムに見えるパーティクルから位置**と**色を選びたい場合には、同じオフセットを使用できます。このような接続を避けたい場合は、位置と色のイニシャライザーに対して異なるオフセットを使用することができます。
| Spawn Control Group         | None の場合、親はランダムに選ばれます。Group 0～3 の 4 つのグループのいずれかを指定すると、特定の親を持つパーティクルのみが初期化されます。**from Parent** 型のスポナーのコントロールグループと一致する必要があります。

<!--
| Property                    | Description
|-----------------------------|-------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the velocity to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
| Velocity min                | Left lower back corner for the box
| Velocity max                | Right upper front corner for the box
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
-->

## サイズ（親）（Size（parent））
<!--
## Size (parent)
-->

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、サイズは他のフィールドから独立した一意なものになります。
| Random size                 | 放出時のパーティクルのサイズの最小値と最大値です。
| Parent emitter              | 親エミッターの名前を指定します。パーティクルの位置は、その親エミッターのパーティクルの位置と同じになります。
| Parent Offset               | 親パーティクルの選択方法を接続または分離するために使用されるランダムシードです。例えば、一見ランダムに見えるパーティクルから位置**と**色を選びたい場合には、同じオフセットを使用できます。このような接続を避けたい場合は、位置と色のイニシャライザーに対して異なるオフセットを使用することができます。
| Spawn Control Group         | None の場合、親はランダムに選ばれます。Group 0～3 の 4 つのグループのいずれかを指定すると、特定の親を持つパーティクルのみが初期化されます。**from Parent** 型のスポナーのコントロールグループと一致する必要があります。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the size to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the size to be unique and independent from other fields.
| Random size                 | Shows the minimum and maximum size a particle can have at spawn time
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
-->

## 色（親）（（Color（parent））
<!--
## Color (parent)
-->

| プロパティ                   | 説明
|-----------------------------|------------
| Random Seed                 | 乱数で使われます。他のパーティクルフィールド（1 つのプロパティを持つフィールド）と強制的に結合するには、これを同じ値にします。異なる値にすると、色は他のフィールドから独立した一意なものになります。
| Color A                     | 最初の値を 16 進法で表したもの。パーティクルの色は、この色と 2 番目の色の間のランダムな色になります。
| Color B                     | 2 番値の値を 16 進法で表したもの。パーティクルの色は、この色と最初の色の間のランダムな色になります。
| Parent emitter              | 親エミッターの名前を指定します。パーティクルの位置は、その親エミッターのパーティクルの位置と同じになります。
| Parent Offset               | 親パーティクルの選択方法を接続または分離するために使用されるランダムシードです。例えば、一見ランダムに見えるパーティクルから位置**と**色を選びたい場合には、同じオフセットを使用できます。このような接続を避けたい場合は、位置と色のイニシャライザーに対して異なるオフセットを使用することができます。
| Spawn Control Group         | None の場合、親はランダムに選ばれます。Group 0～3 の 4 つのグループのいずれかを指定すると、特定の親を持つパーティクルのみが初期化されます。**from Parent** 型のスポナーのコントロールグループと一致する必要があります。

<!--
| Property                    | Description
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the color to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the color to be unique and independent from other fields.
| Color A                     | The first value, in hexadecimal code. The color will be a random tint between this and the second color.
| Color B                     | The second value, in hexadecimal code. The color will be a random tint between this and the first color.
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
-->

## 放出順序（親）（（Spawn Order（parent））
<!--
## Spawn Order (parent)
-->

このイニシャライザーを使う際には、親エミッターが放出順序（Spawn Order）イニシャライザーを持っている必要があります。これは親の放出番号を子のものと組み合わせて、子の中にパーティクルのグループを効果的に作成します。このイニシャライザーは、子リボンパーティクルを適切に並べ替えてレンダリングするために必要です。
<!--
This initializer requires the parent emitter to also have a Spawn Order initializer. It combines the parent's spawn number with its own, effectively creating groups of particles among the children. This initializer is required to properly sort and render child ribbon particles.
-->

| プロパティ                   | 説明
|-----------------------------|------------
| Parent emitter              | 親エミッターの名前を指定します。パーティクルの位置は、その親エミッターのパーティクルの位置と同じになります。
| Parent Offset               | 親パーティクルの選択方法を接続または分離するために使用されるランダムシードです。例えば、一見ランダムに見えるパーティクルから位置**と**色を選びたい場合には、同じオフセットを使用できます。このような接続を避けたい場合は、位置と色のイニシャライザーに対して異なるオフセットを使用することができます。
| Spawn Control Group         | None の場合、親はランダムに選ばれます。Group 0～3 の 4 つのグループのいずれかを指定すると、特定の親を持つパーティクルのみが初期化されます。**from Parent** 型のスポナーのコントロールグループと一致する必要があります。

<!--
| Property                    | Description
|-----------------------------|------------
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
-->

## 関連項目
<!--
## See also
-->

* [パーティクルの作成](create-particles.md)
* [エミッター](emitters.md)
* [シェイプ](shapes.md)
* [マテリアル](materials.md)
* [スポナー](spawners.md)
* [アップデーター](updaters.md)

<!--
* [Create particles](create-particles.md)

* [Emitters](emitters.md)

* [Shapes](shapes.md)

* [Materials](materials.md)

* [Spawners](spawners.md)

* [Updaters](updaters.md)
-->
