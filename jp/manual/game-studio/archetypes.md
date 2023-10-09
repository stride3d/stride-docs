# アーキタイプ

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">デザイナー</span>

**アーキタイプ**とは、自身から**派生**するアセットのプロパティを制御するマスター アセットです。派生アセットは、アセットの「リミックス」バージョンを作成するときに便利です。

たとえば、*Metal* という名前のマテリアル アセットを共有する 3 つの球体エンティティがあるものとします。Metal アセットには、色や光沢度などのプロパティがあります。

![Three metal spheres](media/archetypes-three-spheres-metal.png)

**Metal** アセットのプロパティを変更すると、3 つの球体すべてに適用されます。たとえば、色プロパティを変更すると、3 つの球体すべての色が変わります。

![Three gold spheres](media/archetypes-three-spheres-gold.png)

次に、*1 つ*の球体だけの色を変更し、他のプロパティは同じままにしたいものとします。その場合は、マテリアル アセットを複製し、その色を変更して、新しいアセットを 1 つの球体だけに適用することで実現できます。しかし、後で*すべての*球体の別のプロパティを変更しようとすると、両方のアセットを変更する必要があります。これでは時間がかかり、間違うおそれもあります。

もっとよい方法は、アーキタイプから新しいアセットを派生することです。派生アセットはアーキタイプからプロパティを継承し、必要に応じて個別のプロパティをオーバーライドできます。たとえば、球体のマテリアル アセットを派生して、その色をオーバーライドできます。その後、アーキタイプの光沢度を変更すると、3 つの球体すべての光沢度が変わります。

![Create derived asset](media/archetypes-three-spheres.png)

アーキタイプからアセットを派生し、さらにその派生アセットから別のアセットを派生することができます。このようにすると、アセットのさまざまなレイヤーを作成して、プロジェクトを整理することができます。

```cs
Archetype
    Derived asset
        Derived asset
```

## アーキタイプからアセットを派生する

［Asset view］で、新しいアセットの派生元にするアセットを右クリックし、［Create derived asset］を選択します。

![Create derived asset](media/archetypes-create-derived-asset.png)

新しい**派生アセット**がプロジェクトに追加されます。このアセットは、プロパティを**アーキタイプ**アセットから派生しています。

派生アセットのプロパティでは、アーキタイプ アセットが［Archetype］に表示されます。

![Derived asset in Property Grid](media/archetypes-archetype-in-property-grid.png)

［Property grid］でアーキタイプ アセットを右クリックし、［Select the referenced asset］を選択して、アーキタイプ アセットをすばやく選択できます。

![Select referenced asset](media/archetypes-select-the-referenced-asset.png)

### オーバーライドされたプロパティ

［Property grid］では、派生アセットのプロパティのうち、アーキタイプと異なるものがわかるように表示されます。**オーバーライド**された**固有**のプロパティは**白**で、**継承**されている (同じ) プロパティは**グレー**で表示されます。

次のスクリーンショットでは、［Diffuse Map］プロパティはオーバーライドされています。それ以外のプロパティは継承されています。

![Overridden properties are white](media/archetypes-overriden-properties-appear-white.png)

### プロパティをアーキタイプの値にリセットする

派生アセットのオーバーライドされた固有のプロパティを、アーキタイプの値にリセットできます。そのためには、オーバーライドされたプロパティを右クリックして、［Reset to base value］を選択します。

![Reset to base value](media/archetypes-reset-property-to-base-value.png)

### アーキタイプをクリアする

アーキタイプと派生アセットの間のリンクは削除できます。つまり、派生アセットはアーキタイプに対する変更を継承しなくなり、完全に独立したアセットになります。

そのためには、［Asset view］で派生アセットを右クリックし、［Clear archetype］を選択します。

![Clear archetype](media/archetypes-clear-archetypes.png)

## 関連項目

* [アセット](../game-studio/assets.md)
* [プレハブ](prefabs/index.md)
