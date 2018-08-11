# スプライトを使用する

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>

スプライトをシーンに追加するには、**スプライト コンポーネント**をエンティティに追加します。その後は、スクリプトでスプライトを制御できます。

## スプライト コンポーネントを追加する

1. **シーン エディター**で、スプライトを追加するエンティティを選択します。

    >[!TIP]
    >エンティティを作成するには、シーンまたはエンティティ ツリーを右クリックして、［Empty entity］を選択します。

2. ［Property grid］で［Add component］をクリックして、［Sprite］を選択します。

    ![Sprite sheet](media/SpriteEntity.png)

    スプライト コンポーネントがエンティティに追加されます。

3. ［Asset view］からスプライト コンポーネントの［Source］フィールドに、スプライト シートをドラッグします。

    <p>
        <video autoplay loop class="responsive-video" poster="media\drag-sprite-sheet-to-asset-picker.png">
        <source src="media\drag-sprite-sheet-to-asset-picker.mp4" type="video/mp4">
        </video>
    </p>

    または、![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Pick an asset up］) をクリックします。

    ![Pick asset up](media/pick-asset-up.png)

    そこで、スプライト シートを選択します。

    ![Select an asset](media/asset-picker.png)

スプライトがエンティティに追加されます。

## スクリプトでスプライトを使用する

実行時にスクリプトを使用してスプライトをレンダリングできます。そのためには、スプライト コンポーネントを含むエンティティにスクリプトをアタッチします。

スクリプトをエンティティに追加する方法については、「[スクリプトを使用する](../scripts/use-a-script.md)」を参照してください。

### コード サンプル

このスクリプトは、1 秒ごとにインデックスの順序でスプライトを順番に表示します。スプライトのインデックスの最後に達すると、ループします。

```cs
using Xenko.Rendering.Sprites;

public class Animation : SyncScript
{
   // 宣言されたパブリック メンバー フィールドとプロパティが Game Studio に表示される。
   private SpriteFromSheet sprite;
   private DateTime lastFrame;

   public override void Start()
   {
       // スクリプトを初期化する。
       sprite = Entity.Get<SpriteComponent>().SpriteProvider as SpriteFromSheet;
       lastFrame = DateTime.Now;
   }

   public override void Update()
   {
      // 新しいフレームのたびに処理を行う。
      if ((DateTime.Now - lastFrame) > new TimeSpan(0, 0, 1))
      {
         sprite.CurrentFrame += 1;
         lastFrame = DateTime.Now;
      }
   }
}
```

## 関連項目

* [スプライト シートをインポートする](import-sprite-sheets.md)
* [スプライトを編集する](edit-sprites.md)
