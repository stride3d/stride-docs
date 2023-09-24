# ナビゲーション境界ボックス

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">レベル デザイナー</span>
<span class="badge text-bg-success">プログラマー</span>

**ナビゲーション境界ボックス**は、[ナビゲーション メッシュ](navigation-meshes.md)がカバーする領域を定義します。ナビゲーション境界ボックスを使用すると、シーン全体をカバーするメッシュを使用する代わりに、シーン内に小さいナビゲーション領域を作成できます。

シーン エディターでは、境界ボックスは青い輪郭で表示されます。

![Bounding box shown](media/navigation-bounding-box-on.jpg)

## ナビゲーション境界ボックスを作成する

ナビゲーション境界ボックスを作成するには、ナビゲーション境界ボックス コンポーネントをエンティティに追加します。

1. シーン内で、境界ボックスを追加するエンティティを選択するか、新しいエンティティを作成します。

2. エンティティを選択し、［Property grid］で［Add component］をクリックして［Navigation bounding box］を選択します。

    ![Add navigation bounding box](media/add-navigation-bounding-box.png)

    ナビゲーション境界ボックスがエンティティに追加されます。

3. ［Navigation bounding box］コンポーネントのプロパティで、**XYZ** の値を使用して境界ボックスのサイズを設定します。

    ![Navigation bounding box properties](media/navigation-bounding-box-properties.png)

4. エンティティの **Transform コンポーネント**を使用して、境界ボックスをシーン内に配置します。

## シーン エディターで境界ボックスの表示と非表示を切り替える

シーン エディターのツールバーで**ギズモ オプション** メニューを開き、［Navigation bounding box］チェックボックスを使用します。

![Navigation bounding box checkbox](media/navigation-bounding-box-checkbox.png)

| 境界ボックス非表示 | 境界ボックス表示 (ボックスの青い輪郭に注意)
|----------------------|------------
|![Bounding box hidden](media/navigation-bounding-box-off.jpg)| ![Bounding box shown](media/navigation-bounding-box-on.jpg)

## 関連項目

* [ナビゲーション グループ](navigation-groups.md)
* [ナビゲーション メッシュ](navigation-meshes.md)
* [ナビゲーション コンポーネント](navigation-components.md)
* [動的ナビゲーション](dynamic-navigation.md)
