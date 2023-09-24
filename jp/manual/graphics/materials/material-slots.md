# マテリアルスロット
<!--
# Material slots
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

モデルは、複数のマテリアルを持つことができます。マテリアルは、モデルの**マテリアルスロット**に設定します。
<!--
Models can use multiple materials. You can set the materials in the model's **material slots**.
-->

![Material slots](media/material-slots.png)

例えば、このモデルの 2 番目のマテリアルスロットは、バイザーならびに肩と胸のプレートのストライプ部分のマテリアルを指定する場所です。このスロットのマテリアルを変更することで、モデルのこれらの部分で使用されるマテリアルを変更することができます。
<!--
For example, the second material slot in this model specifies the material for the visor and the shoulder and chest plate stripes. By changing the material in this slot, we change the material used in these parts of the model.
-->

![Materials](media/model-materials-both.png)

マテリアルスロット自体（の数と位置）は、モデルのソースファイル（`.fbx`、`.obj` など）で定義されています。Game Studio でマテリアルスロット自体を編集することはできません。変更できるのは各スロットで使用するマテリアルだけです。
<!--
The material slots themselves — their number and position — are defined in the model source file (eg  `.fbx`, `.obj`, etc). You can't edit material slots in Game Studio; you can only change which materials are used in each slot.
-->

## モデルにマテリアルを設定する
<!--
## Set materials on a model
-->

モデルが使うマテリアルは、次の 2 ヶ所で変更することが可能です。
<!--
You can change the materials a model uses in two places:
-->

* モデル自体の **Materials** プロパティ：

    ![Model materials](media/model-materials.png)

    >[!Note]
    >この設定は、このモデルのすべてのインスタンスに影響します。
 
* エンティティの**モデルコンポーネント**または[プレハブ](../../game-studio/prefabs/index.md)の **Materials** プロパティ：

    ![Model materials on entity](media/model-materials-in-entity.png)

     この設定は、設定したインスタンスまたはプレハブ**だけ**に適用されます。

<!--
* Under the **Materials** properties of the model itself:

    ![Model materials](media/model-materials.png)

    >[!Note]
    >This affects every instance of this model.
 
* In the **model component** of an entity or [prefab](../../game-studio/prefabs/index.md):

    ![Model materials on entity](media/model-materials-in-entity.png)

     This only affects **this** instance or prefab.
-->

## メッシュとマテリアルスロット
<!--
## Meshes and material slots
-->

モデリングソフトから取り込んだモデルにはメッシュが含まれています。このとき、マテリアルスロットを介して、メッシュ間でマテリアルを共有することができます。
<!--
Models imported from modeling software can contain meshes. Meshes can share materials via material slots.
-->

![Mesh](media/material-slot-diagram-1.png)

メッシュとマテリアルスロットの関連付けは、モデルのソースファイルで定義します。これらの関連付けは Game Studio では変更できませんが、実行時にコードから変更することができます。
<!--
The association between a mesh and a material slot is defined in the model source file. You can't change these associations in Game Studio, but you can change them in code at runtime.
-->

メッシュとマテリアルの関連付けを変更する方法：
<!--
To change the association between a mesh and a material, use:
-->

```cs
MyModelComponent.Model.Meshes[submeshIndex].MaterialIndex = materialIndex;
```

マテリアルのリストにマテリアルを追加または変更する方法：
<!--
To change or add a material to the list of materials:
-->

```cs
MyModelComponent.Materials[ExistingOrNewMaterialIndex] = myMaterial;
```

### メッシュをマージする
<!--
### Merging meshes
-->

Stride は、メッシュを持つモデルを描画するとき、各メッシュに対して 1 回ずつ GPU の描画呼び出しを行います。既定では、パフォーマンスを上げるために、ビルド時にマテリアルを共有しているメッシュをマージします。
<!--
When Stride draws a model with meshes, it performs one GPU draw call for each mesh. By default, to improve performance, at build time, Stride merges meshes that share materials.
-->

![Mesh](media/material-slot-diagram-2.png)

上の例では、5 つのメッシュと 5 回の描画呼び出しがあります。マージ後は、3 つのメッシュと 3 回の描画呼び出しになります。
<!--
In the example above, there are five meshes and five draw calls. After merging, there are three meshes and three draw calls.
-->

>[!Note]
>Stride は、メッシュをマージする際に、頂点バッファとインデックスバッファをマージします。つまり、実行時にマージ済みメッシュをバラバラに描画することはできず、元のメッシュの位置（変換行列）を変更することもできません。メッシュは、単一のマテリアルと単一の（モデルに対する相対的な）変換行列を持つ単一のメッシュになります。

<!--
>[!Note]
>When Stride merges meshes, it merges the vertex and index buffers. This means you can't draw the meshes separately at runtime, and you can't change the original mesh position (transformation matrix). The meshes become a single mesh with a single material and a single transformation matrix (relative to the model).
-->

>[!Note]
>Stride は、メッシュをマージする際に、マテリアルの描画順序を変更します。透明なマテリアルがあると、これにより異なった結果になることがあります。

<!--
>[!Note]
>When Stride merges meshes, it changes the draw order of elements. In the case of transparent materials, this can produce different results.
-->

>[!Note]
>[モデルから物理コライダーを作成する](../../physics/collider-shapes.md)と、Stride は、モデルの各メッシュに対して別々の[凸開包](https://ja.wikipedia.org/wiki/%E5%87%B8%E5%8C%85)を構築します。メッシュがマージされた場合はマテリアルごとに 1 つのメッシュしか残らないので、凸開包もマージ後のメッシュに対して構築されます。

<!--
>[!Note]
>When you create a [physics collider from a model](../../physics/collider-shapes.md), Stride builds separate convex hulls for each mesh in the model. If the meshes are merged, only one mesh remains per material, so convex hulls are also built from merged meshes.
-->

### メッシュのマージを無効化する
<!--
### Disable mesh merging
-->

場合によっては、メッシュのマージを無効にした方がいいかもしれません。
<!--
You might want to disable mesh merging if you want to:
-->

* メッシュをアニメーションする場合

* 実行時にメッシュのマテリアルを変更する場合

<!--
* animate a mesh

* change the material of a mesh at runtime
-->

モデル上でメッシュのマージを無効化する方法は、次の通りです。
<!--
To disable mesh merging on a model:
-->

1. メッシュのマージを無効にしたいモデルを選択します。

2. **プロパティグリッド**で、**Merge meshes** を無効化します。

    ![Disable merge meshes](media/disable-merge-meshes.png)

<!--
1. Select the model you want to disable mesh merging for.

2. In the **Property Grid**, disable **Merge meshes**.

    ![Disable merge meshes](media/disable-merge-meshes.png)
-->

#### 特定のメッシュのマージを無効化する
<!--
#### Disable merging for specific meshes
-->

特定のメッシュに対してのみマージを無効化するには、それに対応する**ノード**プロパティを指定します。
<!--
To disable merging only for specific meshes, enable their corresponding **nodes**.
-->

1. 無効化したいメッシュを持つモデルを選択します。

2.  **プロパティグリッド**の **Skeleton** プロパティで、モデルに関連付けられているスケルトンを確認します。

    ![Model skeleton](media/model-skeleton.png)

    スケルトンに関する詳細については、[アニメーション](../../animation/index.md)を参照してください。

3. **アセットビュー**で、そのスケルトンを選択します。

    ![Select model skeleton](media/select-model-skeleton.png)

4. **プロパティグリッド**の **Nodes** プロパティで、マージしたくないメッシュに対応するノードを選択します。

    ![Nodes](media/select-model-skeleton-nodes.png)

    >[!Tip]
    >どのノードがどのメッシュに対応しているかを確認するには、Maya などのモデリングアプリケーションで、モデルのソースファイルを開いてください。

    >[!Note]
    >実行時にアニメーションする予定のノードを無効にしないようにしてください。

<!--
1. Select the model that contains the meshes.

2. In the **Property Grid**, under **Skeleton**, make sure the model has a skeleton associated with it.

    ![Model skeleton](media/model-skeleton.png)

    For more information about skeletons, see [Animation](../../animation/index.md).

3. In the **Asset View**, select the skeleton.

    ![Select model skeleton](media/select-model-skeleton.png)

4. In the **Property Grid**, under **Nodes**, select the nodes that correspond to the meshes you don't want to merge.

    ![Nodes](media/select-model-skeleton-nodes.png)

    >[!Tip]
    >To see which nodes correspond to which mesh, open the model source file in a modeling application such as Maya.

    >[!Note]
    >Make sure you don't disable nodes that are animated at runtime.
-->

## 関連項目
<!--
## See also
-->

* [マテリアルマップ](material-maps.md)
* [マテリアル属性](material-attributes.md)
* [マテリアルスロット](material-slots.md)

<!--
* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
* [Material slots](material-slots.md)
-->
