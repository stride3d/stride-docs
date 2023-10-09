# ナビゲーション コンポーネント

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">レベル デザイナー</span>
<span class="badge text-bg-success">プログラマー</span>

**ナビゲーション コンポーネント**により、エンティティは[Navigation mesh](navigation-meshes.md)を使用してシーン内を通るパスを検索できます。または、Game Settings で[動的ナビゲーション](dynamic-navigation.md)を有効にすると、エンティティは独自のナビゲーション メッシュを生成できます。

# ナビゲーション コンポーネントを追加する

1. ナビゲーションを使用するエンティティを選択します。

2. ［Property grid］で［Add component］をクリックして、［Navigation］を選択します。

    ![Add navigation component](media/add-navigation-component.png)

    ナビゲーション コンポーネントがエンティティに追加されます。

3. ［Navigation］コンポーネントのプロパティで、［Navigation Mesh］の隣の ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

    ![Select an asset](../game-studio/media/open-asset-picker.png)

	［Select an asset］ウィンドウが開きます。

4. エンティティで使用する［[Navigation Mesh］](navigation-meshes.md)を選択し、［OK］をクリックします。

    ![Choose navigation mesh](media/choose-navigation-mesh.png)

    または、このエンティティで独自のナビゲーション メッシュを生成して動的にナビゲートする場合は、［Navigation mesh］フィールドを空のままにします。詳細については、「[動的ナビゲーション](dynamic-navigation.md)」を参照してください。

5. ［Group］で、エンティティが属するナビゲーション グループを選択します。エンティティは、このグループで設定されているナビゲーションのプロパティを使用します。

    ![Choose navigation group](media/choose-navigation-group.png)

## スクリプトでナビゲーション コンポーネントを使用する

次に例を示します。

```cs
void Move(Vector3 from, Vector3 to)
{
	var navigationComponent = Entity.Get<NavigationComponent>();
	List<Vector3> path = new List<Vector3>();
	if(navigationComponent.TryFindPath(from, to, path))
	{
		// パス内のポイントに従う
	}
	else
	{
		// このナビゲーション メッシュを使用してパスを探すことはできない
	}
}
```

詳細については、[NavigationComponent API のドキュメント](xref:Stride.Navigation.NavigationComponent)を参照してください。

## 関連項目

* [ナビゲーション グループ](navigation-groups.md)
* [ナビゲーション メッシュ](navigation-meshes.md)
* [ナビゲーション境界ボックス](navigation-bounding-boxes.md)
* [動的ナビゲーション](dynamic-navigation.md)
