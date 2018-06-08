# 入れ子になったプレハブ

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

プレハブを他のプレハブに追加できます。これは**入れ子になったプレハブ**と呼ばれます。

たとえば、テーブル プレハブ、椅子プレハブ、テレビ プレハブがあるものとします。次に、リビング ルーム プレハブを作成します。それには、テーブル、椅子、テレビ プレハブが含まれます。さらに、家プレハブを作成します。それにはリビング ルーム プレハブが含まれ、さらにテーブル、椅子、テレビ プレハブが含まれます。入れ子にできるプレハブの数に制限はありません。

入れ子になったプレハブを変更した場合、すべての依存するプレハブが変更を自動的に継承します。たとえば、テーブル プレハブの形状を変更すると、リビング ルーム プレハブや家プレハブでも変更されます。

次のビデオでは、入れ子になったプレハブの例を示します。

<p>
<video autoplay loop class="responsive-video" poster="media/create-nested-prefab.jpg">
   <source src="media/create-nested-prefab.mp4" type="video/mp4">
</video>
</p>

中央のペインには、**Lamp** という名前のプレハブが既にあります。右側のペインで、まとめて配置された複数の箱エンティティから成る **Boxes** という名前の新しいプレハブを作成します。Boxes プレハブを Lamp プレハブに追加します。Boxes プレハブに対する変更は、Lamp プレハブにも反映されます。これらは、シーン内の Lamp プレハブのインスタンスに順次反映されます (左のペイン)。

## 関連項目

* [プレハブの索引](index.md)
* [プレハブを作成する](create-a-prefab.md)
* [プレハブを使用する](index.md)
* [プレハブを編集する](edit-prefabs.md)
* [プレハブのプロパティをオーバーライドする](override-prefab-properties.md)
* [プレハブ モデル](prefab-models.md)
