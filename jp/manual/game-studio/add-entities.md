# エンティティを追加する

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">レベル デザイナー</span>

シーンを作成した後は、シーンにエンティティを追加して、レベルを構築する必要があります。

## シーン エディターからエンティティを作成する

1. **エンティティ ツリー**の上にある ![Plus](media/add-entities-to-a-scene-plus-icon.png) アイコンをクリックします。

   ［Create］メニューが開きます。

   ![Scene editor Create menu](media/add-entities-to-a-scene-context-menu.png)

   あるいは、**エンティティ ツリー**または**シーン**内のどこかを右クリックします。エンティティをシーンに作成する場合は、クリックした場所にエンティティが追加されます。

    ![Right-click entity tree or scene](media/create-entity-in-scene.png)

2. ［Empty entity］を選択するか、またはエンティティ テンプレートを選択します。

   エンティティがアクティブなシーンに追加されて、エンティティ ツリーに表示されます。

    ![New Entity in MainScen](media/add-entities-to-a-scene-empty-entity.png)

>[!TIP]
>**アクティブなシーン**とは、エンティティが追加されるシーンです。アクティブなシーンを設定するには、**エンティティ ツリー** (既定では左側) でシーンを右クリックして［Set as active scene］を選択します。

> ![Set active scene](media/set-active-scene.png)

> アクティブなシーンは実行時にはどのような影響もありません。

## アセットからエンティティを作成する

［Asset view］からシーンにアセットをドラッグ アンド ドロップして、エンティティを追加できます。

<video controls autoplay loop height="360" width="480">
   <source src="media/add-entities-to-scene-drag-and-place-entity.mp4" type="video/mp4">
</video>

エンティティが自動的に作成され、使用したアセットに基づいて必要なコンポーネントと参照が追加されます。たとえば、モデル アセットをシーンにドラッグした場合、そのモデル アセットを参照とするモデル コンポーネントを含むエンティティが作成されます。

> [!NOTE]
> 対応するコンポーネントのあるアセットをドラッグすることによってのみ、エンティティを作成できます。たとえば、モデル コンポーネントはモデル アセットを使用するので、ドラッグできます。アニメーションには対応するコンポーネントがないので、ドラッグできません。

## コンポーネントをセットアップする

**コンポーネント**は、プロジェクトの目的を定義する特別なプロパティをエンティティに追加します。たとえば、ライト コンポーネントをエンティティに追加することによってライトをシーンに追加し、モデル コンポーネントを追加することによってモデルを追加する、といった方法です。コンポーネントのないエンティティに目的はありません。

コンポーネントをエンティティに追加するには:

1. エンティティを選択します。

2. ［Property grid］で、［Add component］をクリックして、必要なコンポーネントを追加します。

   ![Add a component in the property grid](media/add-entities-to-a-scene-add-model-component.png)

   コンポーネントが追加されます。

   ![New component in property grid](media/add-entities-to-a-scene-add-model-component-added.png)

3. 新しいコンポーネントの**プロパティを設定**します。

## エンティティを複製する

エンティティをすべてのプロパティと共に複製できます。エンティティを複製し、新しいエンティティのプロパティを変更する方が、最初からエンティティを作成するより時間がかからないことがよくあります。

1. 複製するエンティティを選択します。
2. **Ctrl** キーを押しながら、マウスでエンティティを移動します。

   エンティティとそのすべてのプロパティが複製されます。

	<video controls autoplay loop height="360" width="480">
	   <source src="../get-started/media/populate-scene-duplicate-entity.mp4" type="video/mp4">
	</video>

または、エンティティを右クリックして、［Duplicate selected entities］を選択します。

   ![Duplicate selected entities](../get-started/media/duplicate-selected-entities.png)

## エンティティの名前を変更する

1.	エンティティを選択し、**F2** キーを押します。
2.	エンティティの名前を入力して、**Enter** キーを押します。

   ![Renamed entity in a scene](media/add-entities-to-a-scene-renamed-entity.png)

## 関連項目

* [シーンを管理する](manage-scenes.md)
