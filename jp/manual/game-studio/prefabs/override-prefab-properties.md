# プレハブ プロパティのオーバーライド

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>
<span class="badge text-bg-success">デザイナー</span>

プレハブのインスタンスでプロパティを変更した場合、そのインスタンスはプレハブからそのプロパティに対する変更を継承しなくなります。これは**オーバーライド**と呼ばれます。

![How prefabs work](media/create-manage-prefabs-how-prefabs-work.png)

次のビデオで、**Lamp** プレハブには、**Boxes** の親に属する複数の箱エンティティが含まれます。インスタンスから箱を削除すると、そのインスタンスのみが影響を受けます。右側に表示されているプレハブは変更されません。

プレハブで **Boxes** の親に別の箱を追加しても、オーバーライドされたインスタンスには表示されません。これは、**Boxes** の親をインスタンスから削除したためです。

<p>
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</p>

## オーバーライドされたプロパティを表示する

［Property grid］では、プレハブのインスタンスのどのプロパティが、プレハブの元の値と異なるかを確認できます。

* **オーバーライド**された**固有**のプロパティは**白と太字**で表示されます。

    ![Overridden properties are white](media/use-prefabs-overriden-properties-appear-white.png)

* **同じ**プロパティは**グレー**で表示されます。

    ![Identical properties are gray](media/use-prefabs-identical-properties-appear-gray.png)

### プロパティをプレハブの値にリセットする

オーバーライドされたプロパティを親プレハブの値にリセットするには、プロパティを右クリックして［Reset to base value］をクリックします。

![Reset to base value](media/use-prefabs-reset-property-to-base-value.png)

## 例

この例では、未来風の街灯柱のプレハブを使用します。

![Lamppost](media/lamppost-prefab.jpg)

この街灯柱プレハブは、主柱、支柱、スポット ライトの 3 つのエンティティで構成されます。これらは、プレハブ エディターのエンティティ ツリーに一覧表示されます。

![Add entities](media/lamppost-prefab-entities.png)

街灯柱プレハブの 5 つのインスタンスをシーンに追加してみましょう。

![Five lampposts](media/lamppost-prefab-instances.jpg)

そして、インスタンスの 1 つを変更します。シーン エディターで、1 つの**スポット ライト** エンティティを選択し、スポット ライト コンポーネントのプロパティで、色を赤に変更します。［Properties grid］に、変更された［Color］プロパティが**太字の白**で表示されます。これは、そのプロパティがプレハブのプロパティをオーバーライドしていることを意味します。

![Overridden property](media/override-prefab-property.png)

これを［Scene view］で確認できます。

![Pink spotlight](media/pink-lamppost-prefab.jpg)

次に、プレハブ エディターに戻ってプレハブのスポット ライトの色を緑に変更するとどうなるか見てみましょう。

![Change color to green](media/change-prefab-color-to-green.png)

街灯柱のうち 4 つは緑のライトになります。オーバーライドされたプロパティはプレハブを変更しても変わらないので、5 番目は赤のままです。

![Changed colors](media/lamppost-prefab-instances-with-override.jpg)

## 関連項目

* [プレハブの索引](index.md)
* [プレハブを作成する](create-a-prefab.md)
* [プレハブを使用する](index.md)
* [プレハブを編集する](edit-prefabs.md)
* [入れ子になったプレハブ](nested-prefabs.md)
* [プレハブ モデル](prefab-models.md)
