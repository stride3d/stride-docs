# ナビゲーション グループ

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">レベル デザイナー</span>
<span class="badge text-bg-success">プログラマー</span>

**ナビゲーション グループ**は、ナビゲーション グループに追加されたエンティティのさまざまなプロパティを定義します。ナビゲーション グループはプロジェクトの **Game Settings** で定義します。

異なる種類のエンティティに対して異なるナビゲーション グループを作成できます。たとえば、ゲームにスクリプトで制御される乗り物がある場合、異なるサイズの乗り物に対して異なるナビゲーション グループを作成し、それぞれに異なるプロパティを設定できます (自動車グループ、バス グループ、バイク グループなど)。

## ナビゲーション グループを作成する

1. ［Solution explorer］(既定では左下のペイン) で、［Assets］フォルダーを選択します。

    ![Select Assets folder asset](media/select-asset-folder.png)

2. ［Asset view］(既定では下部のペイン) で、［Game Settings］アセットを選択します。

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. ［Property grid］(既定では右側のペイン) で、［Navigation Settings］を展開します。

   ![Game settings](media/navigation-settings.png)

4. ［Groups］の隣の ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

    新しい項目がナビゲーション グループのリストに追加されます。

    ![Navigation group properties](media/navigation-group-properties.png)

5. ナビゲーション グループのプロパティを設定します。このグループに追加したエンティティはこれらのプロパティを使用します。

## ナビゲーション グループのプロパティ

通常、ナビゲーション グループのプロパティは、グループ内のエンティティの[キャラクター コンポーネント](../physics/characters.md)のプロパティとほぼ一致している必要があります (ある場合)。

| プロパティ             | 説明
|----------------------|------------
| Item                 | グループの名前です。
| Height               | このグループ内のエンティティの高さです。エンティティは、天井がこの値より低いエリアには入ることができません。
| Maximum climb height | このグループのエンティティが登ることのできる最大の高さです。
| Maximum slope        | このグループのエンティティが登ることのできる最大の斜度 (度単位) です。エンティティは、この値より急なスロープを登り降りできません。通常、この値は、グループ内のエンティティの[キャラクター コンポーネント](../physics/characters.md)の［Maximum Slope］プロパティとほぼ同じ値である必要があります (ある場合)。
| Radius               | この値が大きいほど、エンティティが使用するナビゲーション メッシュの面積が大きくなります。エンティティは Radius の 2 倍より小さいギャップを通り抜けることはできません。

## 関連項目

* [ナビゲーション メッシュ](navigation-meshes.md)
* [ナビゲーション境界ボックス](navigation-bounding-boxes.md)
* [ナビゲーション コンポーネント](navigation-components.md)
* [動的ナビゲーション](dynamic-navigation.md)
* [物理特性 - キャラクター](../physics/characters.md)
