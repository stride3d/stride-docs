# プレハブの作成

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

［Asset view］で［Add asset］をクリックし、［Prefabs］ >［Prefab］をクリックします。

![Create a prefab from the Asset View](media/create-prefab-from-asset-view.png)

既定の名前 *Prefab* で、空のプレハブ アセットが作成されます。アセットをダブルクリックして［Prefab Editor］を開き、エンティティを追加します。

## エンティティからプレハブを作成する

既存の 1 つまたは複数のエンティティからプレハブを作成することもできます。

1. **シーンエディター**で、プレハブ作成の基にするエンティティ (1 つまたは複数) を選択します。
>[!TIP]
> 複数の項目を選択するには、Ctrl キーを押しながらクリックします。

2. 選択したエンティティを右クリックして、［Create prefab from selection］を選択します。

![Create a prefab from selection](media/create-prefab-from-selection.gif)

選択したエンティティからプレハブ アセットが作成されます。［Asset view］から新しいプレハブにアクセスできます。

![Prefab in asset view](media/prefab-asset.png)

>[!NOTE]
>選択したエンティティからプレハブを作成すると、最初に選択したエンティティ自体が**プレハブになります**。

### 既存の変更されたプレハブからプレハブを作成する

変更されたプレハブから新しいプレハブを作成できます。たとえば、プレハブをインスタンス化し、[そのプロパティの 1 つをオーバーライド](override-prefab-properties.md)した後、この変更されたプレハブ インスタンスを使用して新しいプレハブを作成します。

## 関連項目

* [プレハブの索引](index.md)
* [プレハブを使用する](index.md)
* [プレハブを編集する](edit-prefabs.md)
* [入れ子になったプレハブ](nested-prefabs.md)
* [プレハブのプロパティをオーバーライドする](override-prefab-properties.md)
* [プレハブ モデル](prefab-models.md)
