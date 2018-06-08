# アニメーションのセットアップ

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<span class="label label-doc-audience">プログラマー</span>

[アニメーション アセットをインポート](import-animations.md)した後は、それをエンティティに追加し、スクリプトで再生する必要があります。

## 1. アニメーション アセットをエンティティに追加する

1. **シーン エディター**で、アニメーション化するエンティティを選択します。

    ![Select an entity](media/select-entity.png)

    >[!NOTE]
    >エンティティをアニメーション化するには、エンティティにモデル コンポーネントが含まれる必要があります。

2. ［Property grid］で、［Add component］をクリックし、［Animations］を選択します。

    ![Select an entity](media/select-animation-component.png)

    アニメーション コンポーネントがエンティティに追加されます。

3. アニメーション コンポーネントのプロパティで、［Animations］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックして、新しいアニメーションをライブラリに追加します。

4. アニメーションの名前を入力して、Enter キーを押します。

    ![Add animation](media/add-animation.png)

    >[!TIP]
    >後でスクリプトを使用してアニメーションを再生するときは、アニメーション アセットの名前では**なく**、この名前を使用します。識別しやすくするため、アニメーションにはアニメーション アセットと同じ名前を付けることをお勧めします。

5. ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

    ![Pick asset up](media/pick-asset-up.png)

   ［Select an asset］ウィンドウが開きます。

6. 追加するアニメーション アセットを参照し、［Ok］をクリックします。

    ![Select an asset](media/asset-picker.png)

    アニメーション アセットがエンティティに追加されます。

    ![Animation asset added](media/animation-asset-added.png)

必要なだけいくつでもアニメーションをアニメーション コンポーネントに追加できます。［Property grid］にはアニメーションがアルファベット順に一覧表示されます。

![Animations list](media/animations-list.png)

## 2. アニメーションを再生するスクリプトを作成する

エンティティにアニメーションを追加した後は、[スクリプト](../scripts/index.md)でアニメーションを再生する必要があります。

### サンプル スクリプト

```cs
    public class SimpleAnimationScript : StartupScript
    {
        public override void Start()
        {
            Entity.Get<AnimationComponent>().Play("Walk");
        }
    }
```

このスクリプトは、エンティティのアニメーション コンポーネントで［Walk］という名前のアニメーションを探します。

アニメーション スクリプトの作成の詳細については、「[アニメーションのスクリプト](animation-scripts.md)」を参照してください。

## 3. スクリプトをエンティティに追加する

1. **シーン エディター**で、アニメーション化するエンティティを選択します。

    ![Select an entity](media/select-entity.png)

2. ［Property grid］で［Add component］をクリックして、追加するアニメーション スクリプトを選択します。

    ![Select an entity](media/add-animation-script-component.png)

コンポーネントとしてスクリプトが追加されます。［Property grid］のスクリプト コンポーネントのプロパティで、[スクリプトで定義したパブリック変数](../scripts/public-properties-and-fields.md)を調整できます。

![Select an entity](media/animations-setup3.png)

## 関連項目

* [アニメーション](index.md)
* [アニメーションのインポート](import-animations.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーションのスクリプト](animation-scripts.md)
* [加算アニメーション](additive-animation.md)
* [プロシージャル アニメーション](procedural-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
