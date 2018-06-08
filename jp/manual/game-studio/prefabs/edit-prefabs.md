# プレハブを編集する

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

プレハブは **プレハブ エディター**で編集できます。

## プレハブ エディターを開く ##

［Asset view］からプレハブ エディターを開くには:

* 編集するプレハブを右クリックして、［Edit asset］を選択します。

    ![Right-click prefab](media/edit-prefab-with-edit-asset-button.png)

* または、編集するプレハブをダブルクリックします。

    ![Double-click prefab](media/open-prefab-editor.gif)

**シーン エディター**からプレハブ エディターを開くには、プレハブ インスタンスの任意の子を右クリックして、［Open prefab in editor］を選択します。

![Open prefab in editor](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)

## プレハブ エディターを使用する ##

![Edit prefabs](media/prefab-editor.png)

プレハブ エディターの機能はシーン エディターと似ています。たとえば、以下のことを実行できます。

* エンティティを追加および削除します
* 変換ギズモを使用して、エンティティを平行移動、回転、拡大縮小します
* エンティティの間に親子関係を作成します
* エンティティのコンポーネント (スクリプト、マテリアル、モデル、アニメーションなど) を追加および変更します

エンティティの管理の詳細については、「[シーンを設定する](../add-entities.md)」を参照してください。

![Prefab editor](media/prefab-editor.png)

プレハブ エディターでプレハブを編集すると、シーン内のプレハブのインスタンスに変更が**リアルタイム**で適用されます。

このビデオでは、プレハブを変更したときに起きることを示しています。左側はシーン エディターで、右側はプレハブ エディターです。

<p>
<video autoplay loop class="responsive-video" poster="media/edit-prefab-and-update-instances.jpg">
   <source src="media/edit-prefab-and-update-instances.mp4" type="video/mp4">
</video>
</p>

## 関連項目

* [プレハブの索引](index.md)
* [プレハブを作成する](create-a-prefab.md)
* [プレハブを使用する](index.md)
* [入れ子になったプレハブ](nested-prefabs.md)
* [プレハブのプロパティをオーバーライドする](override-prefab-properties.md)
* [プレハブ モデル](prefab-models.md)
