# パーティクル アップデーター
<!--
# Particle updaters
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

パーティクルは、放出されてから消滅するまで時間をかけて変化していきます。**アップデーター（updator）** は、生きているすべてのパーティクルに時間の経過とともに作用し、位置、速度、色などの属性を変化させます。例えば、重力によってパーティクルの速度が一定の割合で更新され、地面に向かって加速していきます。
<!--
After a particle spawns, it can change over time before it disappears. **Updaters** act on all living particles over time, changing attributes such as position, velocity, color, and so on. For example, a gravity force updates the particle's velocity at a constant rate, accelerating it toward the ground.
-->

Stride にはいくつかのアップデーターが組み込まれています。[カスタムパーティクル](tutorials/custom-particles.md)サンプルでは、エンジンにアップデーターを追加する方法について紹介しています。
<!--
Stride features several built-in updaters. The [custom particles](tutorials/custom-particles.md) sample demonstrates how you can add updaters to the engine.
-->

## 共通プロパティ
<!--
## Common properties
-->

いくつかのプロパティは、多くのアップデーターに共通しています。
<!--
Several properties are common across many updaters.
-->

![media/particles-reference-updaters-11.png](media/particles-reference-updaters-11.png) 

| プロパティ    | 説明
|--------------|-
| Debug draw     | デバッグ用に、アップデーターの境界を示すワイヤーフレームを描画します。これはシーンエディターでのみ表示され、実行時には表示されません。
| Position inheritance        | パーティクルシステムコンポーネントの位置を継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Position プロパティを継承します。
| Position offset | 追加のモジュール移動。親の位置を継承している場合は、継承した位置の上に適用されます。
| Rotation inheritance | パーティクルシステムコンポーネントの回転を継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Rotaion プロパティを継承します。
| Rotation offset | 追加のモジュール回転。親の回転を継承している場合は、継承した回転の上に適用されます。
| Scale inheritance | パーティクルシステムコンポーネントの均等スケールを継承します。具体的には、パーティクルエンティティの Transform コンポーネントの Scale プロパティを継承します。
| Scale offset | 追加のモジュールスケーリング。親のスケーリングを継承している場合は、継承したスケールの上に適用されます。

<!--
| Property     | Description
|--------------|-
| Debug draw     | Draws a debug wireframe shape to show the boundaries for the updater. This feature only works for the editor and is ignored when you run your game.
| Position inheritance        | Inherit the particle system component position, as defined in the Transform field |
| Position offset | Additional translation of the module. If it inherits the parent's position, this is applied on top of the inherited one. |
| Rotation inheritance | Inherits the particle system component rotation, as defined in the Transform field |
| Rotation offset | Additional rotation of the module. If it inherits the parent's rotation, this is applied on top of the inherited one. |
| Scale inheritance | Inherits the particle system component's uniform scale, as defined in the Transform field. |
| Scale offset | Additional module scaling. If it inherits the parent scale, this is applied on top of the inherited one. |
-->

## コライダー（Collider）
<!--
## Collider
-->

![media/particles-reference-updaters-5.gif](media/particles-reference-updaters-5.gif) 

**コライダー（collider; 衝突器）** は、あらかじめ定義した形状に衝突したときに、パーティクルの位置と速度を変化させるアップデータです。
<!--
A **collider** is an updater that changes the particle position and velocity when it collides with a predefined shape.
-->

![media/particles-reference-updaters-3.png](media/particles-reference-updaters-3.png) 

| プロパティ | 説明
| -------- |--------
| Shape    | コライダーの形状（球体（Sphere）、円柱（Cylinder）、箱（Box）、円環体（Torus）のいずれか）。
| Is hollow | 無効の場合、コライダーは固体であり、パーティクルはそれに跳ね返ります。有効にすると、コライダーは中空になり、パーティクルはコンテナの中に閉じ込められたかのように、コライダーの内部に留まります。
| Kill particles | 有効にすると、パーティクルは、コライダーに衝突したときに直ちに殺されます。
| Restitution  | [反発係数](https://ja.wikipedia.org/wiki/%E5%8F%8D%E7%99%BA%E4%BF%82%E6%95%B0)は、パーティクルが、衝突前の速度と比較して衝突後に維持できる速度の割合ことです。アップデーターでは、反発係数を速度の**垂直方向成分のみ**に適用します。水平方向の速度成分には影響を与えません。
| Friction | [摩擦係数](https://ja.wikipedia.org/wiki/%E6%91%A9%E6%93%A6#%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0)は、パーティクルがコライダーに衝突した際に失う、水平方向の速度の割合です。水平方向の速度成分にのみ影響し、垂直方向の速度成分には影響を与えません（パーティクルが跳ね返る高さは変わりません）。

<!--
| Property | Description
| -------- |--------
| Shape | The shape the particles collide with (sphere, cylinder, box, or torus)
| Is hollow | If disabled, the shape is solid and the particles bounce off it. If enabled, the shape is hollow like a container, and the particles stay inside the volume.
| Kill particles | If enabled, the particles are killed immediately when they collide with the shape.
| Restitution  | The coefficient of restitution is the speed the particle retains in comparison to its speed before the collision. In this updater we use restitution as a *vertical only* speed. It doesn't affect the speed along the surface.                    |
| Friction | The amount of horizontal speed the particle loses on collision with the shape. It only affects the speed along the surface, and doesn't change the height at which the particle bounces.
-->

## 力場（Force field）
<!--
## Force field
-->

![media/particles-reference-updaters-6.gif](media/particles-reference-updaters-6.gif) 

**力場（force field）** は、境界シェイプといくつかの力ベクトルで定義されます。力ベクトルは、境界シェイプへの相対位置に基づいてパーティクルに作用します。
<!--
The **force field** is defined by a bounding shape and several force vectors that operate on the particles based on their relative position to the bounding shape.
-->

![media/particles-reference-updaters-1.png](media/particles-reference-updaters-1.png) 

| プロパティ | 説明
| -------- | -
| Shape | 境界シェイプの種類（球体（sphere）、円筒（sylinder）、箱（box）、円環体（torus）のいずれか）。
| Falloff | 減衰（falloff）は、パーティクルにかかる力の強さを決めるシンプルな線形関数です。これは、中心からパーティクルまでの距離に基づきます。内側の力（strength inside）とは、パーティクルが中心から*Falloff start* 以内にあるときに適用される力の大きさのことです。外側の力（strength outside）とは、パーティクルが中心から *Falloff end* 以上離れているときに適用される力の大きさのことです。どちらの値も境界シェイプのサイズを基準にしており、Falloff start と Falloff end の間では、内外 2 つの力が線形に補間されます。中心地点での力を 0 にすることも可能で、その場合は境界シェイプの*外側*でのみ力が作用します。
| Energy conservation   | 運動量保存（energy conservation）の値は、パーティクルに保存されるエネルギーの割合です。保存されたエネルギーはパーティクルの速度として格納され、結果として速度が徐々に増加します。保存されないエネルギーは、パーティクルの位置に直接適用され、力が消滅すると失われます。
| Directed force | パーティクルを力場の中心軸に沿って（通常は上向きに）移動させる力。
| Vortex force | パーティクルを力場の中心軸を中心にして回転させる力。[右手回りの法則](https://ja.wikipedia.org/wiki/%E5%8F%B3%E6%89%8B%E3%81%AE%E6%B3%95%E5%89%87#%E5%9B%9E%E8%BB%A2%E6%96%B9%E5%90%91)が用いられます。
| Repulsive force | 反発力（repulsive force）は、パーティクルを力場の中心から遠ざける（負の場合は中心に向かって移動させる）力の強さです。
| Fixed force | 非回転・非スケーリングの固定軸に沿ってパーティクルを移動させる力です。

<!--
| Property | Description
| -------- | -
| Shape | The bounding shape (sphere, cylinder, box or torus)
| Falloff | The falloff is a simple linear function which dictates the intensity of the force applied on particles. It is based on the particle's distance from its center. Strength inside is how much of the magnitude applies when the particle is within *falloff start* distance from the center. Strength outside is how much of the magnitude applies when the particle is more than *falloff end* away from the center. Both values are relative to the bounding shape size; values inbetween are interpolated between the two magnitudes. Values in the center can still be 0, making the force only work *outside* the bounding shape.
| Energy conservation   | Which part of the force energy conserved by the particles. Conserved energy is stored as particle velocity and results in gradually increasing speed. Energy not conserved directly applies to the particle's position and is lost when the force vanishes.
| Directed force | The vector force that moves the particle along the field's central axis (normally upwards)
| Vortex force | The force that moves the particle around the field's central axis using the right-hand rule for rotation
| Repulsive force | The force that moves the particle away from the field's center or towards it, if negative
| Fixed force | The force that moves the particle along a fixed non-rotating and non-scaling axis
-->

### 減衰（Falloff）
<!--
### Falloff
-->

**減衰（falloff）** とは、境界シェイプの中心からの距離に応じてパーティクルへの力の強さを変化させることです。減衰は相対的な距離の関数であり、距離が 0 であれば境界シェイプの中心、1 であれば境界シェイプのふち、1 以上であれば境界シェイプの外側にいることを意味します。
<!--
The **falloff** is the change in the forces' strength based on the distance of the particle from the shape's center. The falloff is a function of the relative distance, where distance of `0` is the center, 1 is the shape's boundaries, and more than 1 means the particle is outside the shape.
-->

減衰開始距離（falloff start）よりも近いパーティクルは、常に内側の力（strength inside）の影響を受けます。減衰終了距離（falloff end）よりも遠いパーティクルは、常に外側の力（strength outside）の影響を受けます。
<!--
Particles closer than the falloff start are always affected with the coefficient Strength Inside. Particles farther than falloff end are always affected with the coefficient Strength Outside.
-->

その中間にあるパーティクルへの影響は、直線的に変化します。
<!--
Coefficient for particles in between changes linearly:
-->

![media/particles-reference-updaters-2.png](media/particles-reference-updaters-2.png) 

例えば、境界シェイプが半径 10 m の球体である場合、中心から 1 m 以内のパーティクル（0.1 × 10 m）は最大の力で移動します。1 m を過ぎると力は直線的に減少し、9 m の距離（0.9 × 10 m）でゼロになります。それ以降は、力はパーティクルに影響を与えません。
<!--
For example, if the bounding shape is a sphere with a radius of 10m, particles within 1m from its center (0.1 x 10m) will be moved with full strength. After the 1m distance the strength linearly decreases until it reaches zero at 9m distance (0.9 x 10m). After that point, the forces don't affect the particle.
-->

### 境界シェイプ（Bounding shapes）
<!--
### Bounding shapes
-->

#### 球（Sphere）
<!--
#### Sphere
-->

![media/particles-reference-updaters-7.png](media/particles-reference-updaters-7.png) 

<sub>画像ライセンス：<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, 球体画像は <a href="https://commons.wikimedia.org/wiki/File:Sphere_wireframe_10deg_6r.svg">"Sphere wireframe" work</a> の <a href="https://commons.wikimedia.org/wiki/User:Geek3">Geek3</a> 氏によるもの（<a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a> ライセンス）。</sub>

<!--
<sub>Image license: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, sphere image from the <a href="https://commons.wikimedia.org/wiki/File:Sphere_wireframe_10deg_6r.svg">"Sphere wireframe" work</a> by <a href="https://commons.wikimedia.org/wiki/User:Geek3">Geek3</a> under <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>
-->

境界シェイプが球体の場合は、減衰（falloff）距離は球体の中心からパーティクルの半径方向の距離に基づきます。球体が楕円体にスケーリングされた場合、この距離もスケーリングされます。この距離は半径に対して相対的であり、1.0 が球体の表面を表します。
<!--
When the bounding shape is a sphere, the falloff distance is based on the radial distance of the particle from the sphere's center. If the sphere is scaled to an ellipsoid, this distance is also scaled. The distance is relative to the radius, with 1.0 being the sphere's surface.
-->

指向性力（directed force）ベクトルは、球体のローカル Y 軸に対して平行です。反発力（repulsive force）ベクトルは、中心からパーティクルへ向けられます。渦力（vortex force）ベクトルは、パーティクルの位置で球体の Y 軸の周りを回ります（右手回りの法則に従います）。
<!--
The directed force vector is parallel to the sphere's local Y axis. The repulsive force vector points from the center to the particle. The vortex force vector goes around the sphere's Y axis at the particle's position (using the right-hand rule for rotation).
-->

#### 箱（Box）
<!--
#### Box
-->

![media/particles-reference-updaters-8.png](media/particles-reference-updaters-8.png) 

境界シェイプが箱の場合は、X、Y、Z 軸方向の 3 つの距離のうち最も長い距離が減衰（falloff）距離になります。この距離は箱のサイズを基準として、1.0 が箱の表面を表します。
<!--
When the bounding shape is a box, the falloff distance is the longest of the three distances on the X, Y and Z axes. The distance is relative to the box's sizes, with 1.0 being the box's surface.
-->

指向性力（directed force）ベクトルは、箱のローカル Y 軸に対して平行です。反発力（repulsive force）ベクトルは、中心からパーティクルへ向けられています。渦力（vortex force）ベクトルは、パーティクルの位置で箱の Y 軸を回ります（右手回りの法則に従います）。
<!--
The directed force vector is parallel to the box's local Y axis. The repulsive force vector points from the center to the particle. The vortex force vector goes around the box's Y axis at the particle's position (using the right-hand rule for rotation).
-->

#### 円筒（Cylinder）
<!--
#### Cylinder
-->

![media/particles-reference-updaters-9.png](media/particles-reference-updaters-9.png) 

境界シェイプが円柱の場合は、減衰（falloff）距離は、円柱のローカル Y 軸からのパーティクルの半径方向の距離に基づきます。パーティクルの高さ（Y 軸上の位置）はパーティクルが円柱の外に出ていない限り無視されます（その場合、距離は常に 1 となります）。
<!--
When the bounding shape is a cylinder, the falloff distance is based on the radial distance of the particle from the cylinder's local Y axis. The particle height (position on the Y axis) is ignored unless the particle is outside the cylinder, in which case the distance is always 1.
-->

指向性力（directed force）ベクトルは、円筒のローカル Y 軸に対して平行です。反発力（repulsive force）ベクトルは、円柱のローカル Y 軸から粒子へ向けられています（そのため、反発力ベクトルは常に水平になります）。渦力（vortex force）ベクトルは、パーティクルの位置で円柱の Y 軸の周りを回ります（右手回りの法則に従います）。
<!--
The directed force vector is parallel to the cylinder's local Y axis. The repulsive force vector points from the cylinder's local Y axis to the particle, so the repulsive force is always horizontal. The vortex force vector goes around the cylinder's Y axis at the particle position (using the right-hand rule for rotation).
-->

#### 円環体（Torus）
<!--
#### Torus
-->

![media/particles-reference-updaters-10.png](media/particles-reference-updaters-10.png) 

<sub>画像ライセンス：<a href="https://gnu.org/licenses/fdl.html">GFDL</a>, <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, 円環体画像は <a href="https://commons.wikimedia.org/wiki/File:Simple_Torus.svg">"A simple Torus" work</a> の Yassine Mrabet 氏によるもの（GFDL, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a> ライセンス）。</sub>
<!--
<sub>Image license: <a href="https://gnu.org/licenses/fdl.html">GFDL</a>, <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, torus image from the <a href="https://commons.wikimedia.org/wiki/File:Simple_Torus.svg">"A simple Torus" work</a> by Yassine Mrabet under GFDL, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>
-->

境界シェイプが円環体の場合は、減衰（falloff）の性質が全く変わります。減衰距離は、円環体の内円（赤で示した回転軸）からパーティクルの半径方向の距離に基づいてパーティクルに最も近い円上の点までの距離を表します。
<!--
When the bounding shape is a torus, the field's nature changes completely. The falloff distance is based on the radial distance of the particle from the torus's inner circle (axis of revolution, shown in red), choosing a point on the circle closest to the particle.
-->

指向性力（directed force）ベクトルは、パーティクルに最も近い点で回転軸に接します。反発力（repulsive force）ベクトルは、軸からパーティクルへ向けられています。渦力（vortex force）ベクトルは、軸に対するパーティクルの相対位置に基づいて、指向性力ベクトルの周りを回ります（右手回りの法則に従います）。
<!--
The directed force vector is tangent to the axis of revolution at the point closest to the particle. The repulsive force vector points from the axis to the particle. The vortex force vector goes around the directed force vector using the particle's position relative to the axis (using the right-hand rule for rotation).
-->

計算は少し複雑ですが、トーラス力場を扱うのは簡単です。ぜひ試してみてください。
<!--
While the math is a little complicated, using the torus force field isn't. Try it out!
-->

## 重力（Gravity）
<!--
## Gravity
-->

**重力（gravity）アップデーター**は、位置に関係なくすべてのパーティクルに影響を与えるシンプルな力で、スケーリングも回転もしない一定の力ベクトルを持っています。これは編集可能なので、異なるスケールや動作のプロジェクトでも使用できます。
<!--
The **gravity updater** is a simplified force which affects all particles regardless of their position, with a constant force vector which doesn't scale or rotate. It's editable, so you can use it in projects with different scales and behavior.
-->

![media/particles-reference-updaters-4.png](media/particles-reference-updaters-4.png) 

重力は、オフセットや継承などのほとんどのプロパティを無視し、以下のプロパティのみを使用します。
<!--
The gravity force ignores most properties such as offset and inheritance, and only uses the following attributes:
-->

| プロパティ | 説明
| --------- | -- 
| Gravitational acceleration | 影響を受けるすべてのパーティクルの加速度を定義する重力ベクトルです。既定値は地球上の平均重力です。

<!--
| Property  | Description  
| --------- | -- 
| Gravitational acceleration | The gravity force vector that defines the acceleration for all affected particles. The default value matches the average gravity on Earth.
-->

## 速度による方向修正（Direction from Speed）
<!--
## Direction from speed
-->

**速度による方向修正（Direction from Speed）** は、ポストアップデーターです。つまり、ポストアップデーター以外のアップデーターの後に適用されます。これは、ポストアップデーター以外のアップデーターのほうが先にリストアップされていても同様です。
<!--
**Direction from speed** is a post-updater, meaning it resolves after updaters which are not post-updaters, even if they appear later in the list.
-->

このアップデーターはプロパティを持たず、単に、パーティクルの速度（speed）に合わせてパーティクルの方向（direction）を更新します。速度（speed）は最後のフレームからのパーティクルの位置の差から計算し、パーティクルの速度（velocity）には依存しません。つまり、パーティクル自身の速度（velocity）が 0 で、外力によってのみ動かされている場合でも、速度による方向修正は行われます。
<!--
It has no properties and simply updates the particle's direction to match its speed. It uses the difference between the positions of the particle from the last frame and isn't directly dependent on velocity. This means even if the particle's own velocity is 0 and it's only moved by external forces, direction from speed resolves correctly.
-->

パーティクルの方向（direction）は正規化されたベクトルではなく、距離の差に合わせて大きさを変えます。このアップデーターは、イニシャライザーのように、Direction パラメータを上書きします。
<!--
Direction isn't a normalized vector and changes its magnitude to match the delta distance. It overwrites any previous direction parameters, such as from an initializer.
-->

## 色アニメーション（Color animation）
<!--
## Color animation
-->

**色アニメーション（color animation）** は、ポストアップデーターです。つまり、ポストアップデーター以外のアップデーターの後に適用されます。これは、ポストアップデーター以外のアップデーターのほうが先にリストアップされていても同様です。
<!--
**Color animation** is a post-updater, meaning it resolves after updaters which aren't post-updaters, even if they appear later in the list.
-->

色アニメーションは、パーティクルの正規化されたライフタイム（0～1）にまたがる曲線をサンプリングして、パーティクルの Color フィールドを更新します。パーティクルの色が微妙に変化するような二次曲線を設定することもできます。色アニメーションは、初期色など設定済みの Color パラメータを上書きします。
<!--
Color animation updates the particle Color field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve in which case the particles will have slightly varied colors. Color animation overwrites any previous Color parameters, such as Initial Color.
-->

曲線の値は 0 ～ 1 間で基準値を持つ RGBA に対応した Vector4 型です。1 を越える値は RGB のみに有効で（アルファは不可）、HDR レンダリングに使います。
<!--
The curve values are given as Vector4, corresponding to RGBA with standard values between 0 and 1. Values above 1 are valid for RGB only (not Alpha) and can be used for HDR rendering.
-->

## 回転アニメーション（Rotation animation）
<!--
## Rotation animation
-->

**回転アニメーション（rotation animation）** は、ポストアップデーターです。つまり、ポストアップデーター以外のアップデーターの後に適用されます。これは、ポストアップデーター以外のアップデーターのほうが先にリストアップされていても同様です。
これは厳密には 1 軸の回転で、ビルボード型のパーティクルに使用されます。
<!--
**Rotation animation** is a post-updater, meaning it resolves after updaters which are not post-updaters, even if they appear later in the list. It's strictly a single axis rotation, used for billboarded particles.
-->

回転アニメーションは、パーティクルの正規化されたライフタイム（0～1）にまたがる曲線をサンプリングして、パーティクルの Rotation フィールドを更新します。パーティクルの回転が微妙に変化するような二次曲線を設定することもできます。
<!--
Rotation animation updates the particle's Rotation field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve in which case the particles will have slightly varied rotations.
-->

回転アニメーションは、初期回転など設定済みの回転パラメータを上書きします。加算タイプのアニメーションが必要な場合は、シェイプビルダーがそれをサポートしているかどうか確認してください（シェイプビルダーのプロパティにあります）。加算タイプのアニメーションはパーティクルのフィールドには保存されず、ずっと使い続けることはできませんが、パーティクルがすでに持っているフィールドへ加算することができます。
<!--
Rotation animation overwrites any previous Rotation parameters, such as Initial Rotation. If you need additive kind of animation check if the Shape Builder supports it (found in the Shape Builder's properties). Additive animations are not preserved in particle fields and do not persist, but can be applied in addition to any fields the particles already have.
-->

## サイズアニメーション（Size animation）
<!--
## Size animation
-->

**サイズアニメーション（size animation）** は、ポストアップデーターです。つまり、ポストアップデーター以外のアップデーターの後に適用されます。これは、ポストアップデーター以外のアップデーターのほうが先にリストアップされていても同様です。
<!--
**Size animation** is a post-updater, meaning it resolves after updaters which aren't post-updaters, even if they appear later in the list. 
-->

サイズは、厳密には均等なサイズです。サイズアニメーションは、パーティクルの正規化されたライフタイム（0～1）にまたがる曲線をサンプリングして、パーティクルの Size フィールドを更新します。パーティクルのサイズが微妙に変化するような二次曲線を設定することもできます。
<!--
This is strictly a uniform size. Size animation updates the particle's Size field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve, in which case the particles have slightly varied sizes.
-->

サイズアニメーションは、初期サイズなど設定済みのサイズパラメータを上書きします。加算タイプのアニメーションが必要な場合は、シェイプビルダーがそれをサポートしているかどうか確認してください（シェイプビルダーのプロパティにあります）。加算タイプのアニメーションはパーティクルのフィールドには保存されず、ずっと使い続けることはできませんが、パーティクルがすでに持っているフィールドへ加算することができます。
<!--
Size animation overwrites any previous Size parameters, such as Initial Size. If you need additive kind of animation, check if the Shape Builder supports it (in the Shape Builder properties). Additive animations aren't preserved in particle fields and don't persist, but can be applied in addition to any fields the particles already have.
-->

## 関連項目

* [パーティクルの作成](create-particles.md)
* [エミッター](emitters.md)
* [シェイプ](shapes.md)
* [マテリアル](materials.md)
* [スポナー](spawners.md)
* [イニシャライザー](initializers.md)

<!--
* [Create particles](create-particles.md)
* [Emitters](emitters.md)
* [Shapes](shapes.md)
* [Materials](materials.md)
* [Spawners](spawners.md)
* [Initializers](initializers.md)
-->
