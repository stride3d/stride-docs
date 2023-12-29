# コライダー

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">デザイナー</span>

プロジェクトで物理特性を使用するには、**コライダー** コンポーネントをエンティティに追加します。

コライダーは、物理オブジェクトの形状とルールを定義します。コライダーには 3 つの種類があります。

* [静的コライダー](static-colliders.md)は動きません (壁、床、重いオブジェクトなど)
* [剛体](rigid-bodies.md)は、衝突や重力などの力によって動き回ります (ボール、銃身など)
* [キャラクター](characters.md)は、ユーザーの入力によって制御されます (プレイヤー キャラクター)

また、以下のことが可能です。

* [コライダー コンポーネントの形状](collider-shapes.md)を設定します
* [トリガー](triggers.md)を作成し、オブジェクトがそれを通り抜けたことを検出します
* [制約](constraints.md)によってコライダーの動きを制限します

## コライダーが相互作用する方法

コライダーは次の表に従って相互作用します。

|   | 運動学的オブジェクト   | 運動学的トリガー   | 剛体コライダー   | 剛体トリガー   | 静的コライダー        | 静的トリガー   
|---|-------------|---------------------|-------------|---------------------|----------|------------------
| 運動学的オブジェクト        | 衝突           | 衝突  | 衝突および動的 | 衝突   | 衝突    | 衝突     
| 運動学的トリガー | 衝突           | 衝突   | 衝突           | 衝突     | 衝突     | 衝突   
| 剛体コライダー          | 衝突および動的     | 衝突     | 衝突および動的     | 衝突     | 衝突および動的 | 衝突
| 剛体トリガー | 衝突         | 衝突  | 衝突 | 衝突     | 衝突     | 衝突
| 静的コライダー | 衝突 | 衝突 | 衝突および動的 | 衝突   | なし   | なし
|静的トリガー     | 衝突     | 衝突     | 衝突     | 衝突    | なし    | なし

* 「衝突」は、衝突情報とイベントのみを示します。つまり、衝突はコードで検出されますが、オブジェクトが相互に衝突することはありません (動的な反応はなし)。

* 「動的」とは、衝突情報とイベントに加えて動的な反応の両方を意味します (つまり、コライダーは通過するのではなく相互に衝突します)。

たとえば、剛体コライダーは静的コライダーと動的に衝突します (つまり相互に衝突する)。ただし、オブジェクトがトリガーと動的に衝突することはありません。コードで衝突が検出されますが、オブジェクトは通過するだけです。

## シーン エディターでコライダーを表示する

既定では、コライダーはシーン エディターには表示されません。表示するには次のようにします。

1. Game Studio ツールバーの右上にある［Display gizmo options］アイコンを表示します。

   ![Display gizmo options](media/display-gizmo-options.png)

2. ［Physics］を選択します。

    ![Display physics option](media/display-physics-option.png)

シーン エディターにコライダーの形状が表示されます。

![Display physics](media/display-physics.png)

## 実行時にコライダーを表示する

実行時にコライダーを表示できます。これは、物理特性に関する問題のデバッグに便利です。そのためには、次のようにします。

``
this.GetSimulation().ColliderShapesRendering = true;
``

> [!NOTE]
> 無限平面に対するコライダーの形状は常に表示されません。

### キーボード ショートカット

キーボード ショートカットで実行時にコライダーの形状の表示/非表示を切り替えるには、**Debug physics shapes** スクリプトを使用します。

1. ［Asset view］で［Add asset］をクリックします。

2. ［Scripts］>［Debug physics shapes］の順に選択します。

    ![Add debug physics shape script](media/add-debug-physics-shapes-script.png)

3. Game Studio のツールバーで、［Reload game assemblies and update scripts］をクリックします。

    ![Reload assemblies](../platforms/media/reload-assemblies.png)

4. **Debug physics shapes** スクリプトをコンポーネントとしてシーン内のエンティティに追加します。どのエンティティでもかまいません。

    ![Add debug physics shapes script component](media/add-debug-physics-shapes-component.png)

スクリプトがコライダーの形状の可視性を**左 Shift + 左 Ctrl + P** にバインドするので、実行時にオン/オフを切り替えられるようになります。スクリプトを編集して、別のキーの組み合わせにバインドできます。

## 関連項目

* [コライダーの形状](collider-shapes.md)
* [静的コライダー](static-colliders.md)
* [剛体](rigid-bodies.md)
* [運動学的剛体](kinematic-rigid-bodies.md)
* [シミュレーション](simulation.md)
* [物理特性のチュートリアル](tutorials.md)
