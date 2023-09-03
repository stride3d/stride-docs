# スクリプトの使用

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>

スクリプトを使用するには、エンティティにコンポーネントとしてスクリプトを追加します。スクリプトの追加は、Game Studio またはコードで行うことができます。アタッチされているエンティティがロードされると、スクリプトが実行されます。

1 つのスクリプトを、必要な数のエンティティに追加できます。また、複数のスクリプトを 1 つのエンティティに追加できます。この場合は、スクリプトの複数のインスタンスが作成されます。つまり、同じスクリプトが[パブリック プロパティとフィールド](public-properties-and-fields.md)に異なる値を持つことができます。

## Game Studio でスクリプトを追加する

Game Studio でエンティティにスクリプトを追加するには 2 つの方法があります。

*［Asset view］からエンティティのプロパティにスクリプトをドラッグします
*［Property grid］でスクリプトを追加します

### ドラッグ アンド ドロップ

1. **エンティティ ツリー** (既定では左側) またはシーンで、スクリプトを追加するエンティティを選択します。

2. ［Solution explorer］(既定では左下) で、スクリプトが含まれるアセンブリを選択します。［Asset view］にスクリプトが表示されます。

    >[!NOTE]
    >スクリプトはアセットの一種ですが、［Assets］フォルダーには保存されません。代わりに、［.Game］フォルダーに保存されます。詳細については、「[プロジェクトの構造](../files-and-folders/project-structure.md)」を参照してください。

3. ［Asset view］から［Property grid］にスクリプトをドラッグします。

   スクリプトがエンティティに追加されます。

###［Property grid］でスクリプトを追加する

1. **シーン エディター** で、スクリプトを追加するエンティティを選択します。

    ![Select an entity](media/select-entity.png)

2. ［Property grid］(既定では右側) で、［Add component］をクリックし、追加するスクリプトを選択します。

    ![Add script component](media/add-script-component.png)

    スクリプトがエンティティに追加されます。

## コードからスクリプトを追加する

次のコードは、スクリプトをエンティティに追加します。

```cs
// myEntity はシーン内の既存のエンティティ、myAsyncScript はエンティティに追加するスクリプト
myEntity.Add(new myAsyncScript());
```

## 関連項目

* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
