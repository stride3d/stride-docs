# プレハブ モデル

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

**プレハブ モデル**は、プレハブを単一の描画呼び出しに変換します。Stride はプレハブの個別のエンティティではなく最終的なモデルだけをレンダリングするので、これは最適化に役立ちます。プレハブを変更すると、プレハブ モデルが再生成されます。

## 欠点

プレハブ モデルはライト、コライダー、他のコンポーネントなどの要素を継承しません。単なるモデルであり、他のモデルと同じように使用する必要があります。たとえば、物理特性コンポーネントを含む 2 つのモデルで構成されるプレハブがある場合、プレハブ モデルは 2 つのモデルから単一のモデルを作成し、物理特性コンポーネントを無視します。プレハブ モデルにコンポーネントを追加する必要がある場合は、プレハブ モデル自体に追加します。

プレハブ モデルではマテリアルが公開されません。つまり、プレハブ モデル アセットまたはプレハブ モデルを使用するモデル コンポーネントでは、マテリアルを表示または編集できません。

## プレハブ モデルを作成する

1. ［Asset view］で［Add asset］>［Model］>［Prefab model］の順に選択します。

    ![Add prefab model](media/add-prefab-model.png)

2. ［Property grid］(既定では右側) で、［Prefab］の隣の ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select asset］) をクリックします。

    ![Prefab properties](media/prefab-model-properties.png)

   ［Select an asset］ウィンドウが開きます。

    ![Select prefab for model](media/select-prefab-for-model.png)

3. モデルを作成するプレハブを選択し、［OK］をクリックします。

    プレハブ モデルが［Asset view］に追加されます。

    ![Prefab model added](media/prefab-model-added.png)

## 関連項目

* [プレハブを作成する](create-a-prefab.md)
* [プレハブを使用する](use-prefabs.md)
* [プレハブを編集する](edit-prefabs.md)
* [入れ子になったプレハブ](nested-prefabs.md)
* [プレハブのプロパティをオーバーライドする](override-prefab-properties.md)
* [アーキタイプ](../archetypes.md)
