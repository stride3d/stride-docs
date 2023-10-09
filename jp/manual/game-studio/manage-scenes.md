# シーンの管理

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>
<span class="badge text-bg-success">デザイナー</span>

シーンとエンティティは階層状になっており、先頭に**ルート シーン**があります。この階層は、シーン エディターの左側にある**エンティティ ツリー**に表示されます。

![Scene hierarchy tree](media/scene-hierarchy-tree.png)

ルート シーンには、ゲームのすべてのシーンとエンティティが含まれます。他のシーンやエンティティが使用する共通エンティティも含まれます (［game logic］スクリプトなど)。

![Scene hierarchy diagram](media/scene-hierarchy-diagram.png)

シーンはそれぞれ異なるフォルダーに保持されます。つまり、複数の開発者が他の開発者の作業を上書きすることなく共同作業できます。

> [!NOTE]
> シーンを実行時にロードすると、**子シーンは自動的にロードされません**。コードで子シーンをロードする必要があります。詳細については、「[シーンをロードする](load-scenes.md)」を参照してください。

## 親シーンと子シーンを設定する

親シーンと子シーンの間の関係は、親ではなく子で設定されます。つまり、子シーンは親シーンについて知っていますが、親シーンは子シーンについて知りません。

シーンを別のシーンの子にするには複数の方法があります。

* シーン エディターの**エンティティ ツリー** (既定では左) で、シーンをそれの親にするシーンにドラッグします。

*［Asset view］(既定では下部) のシーンを、**エンティティ ツリー**内にある親にするシーンにドラッグします。

* シーンの［Property grid］(既定では右) の［Parent］で、そのシーンの親にするシーンを指定します。

    ![Properties parent scene](media/properties-parent-scene.png)

## 既定のシーンを設定する

**既定のシーン**は、Stride が実行時にロードするシーンです。既定のシーンは、[ゲーム設定](game-settings.md)アセットで設定できます。

1. ［Solution explorer］(既定では左下のペイン) で、［Assets］フォルダーを選択します。

    ![Select Assets folder asset](media/select-asset-folder.png)

2. ［Asset view］(既定では下部のペイン) で、［GameSettings］アセットを選択します。

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. ［Property grid］(既定では右側のペイン) で、［Default Scene］の隣の ![Hand icon](~/manual/game-studio/media/hand-icon.png) (［Select an asset］) をクリックします。

    ![Set default scene](media/game-settings-default-scene.png)

   ［Select an asset］ウィンドウが開きます。

2. 既定のシーンを選択し、［OK］をクリックします。

このシーンが実行時にロードされます。

ゲーム設定アセットの詳細については、「[ゲームの設定](game-settings.md)」を参照してください。

## アクティブなシーンを設定する

**アクティブなシーン**は、エンティティをシーン エディターにドロップしたときにエンティティが追加されるシーンです。エンティティは子としてアクティブなシーンに追加されます。

アクティブなシーンを設定するには、**エンティティ ツリー** (既定では左側) でシーンを右クリックして［Set as active scene］を選択します。

![Set active scene](media/set-active-scene.png)

アクティブなシーンは実行時にどのような影響も及ぼしません。

## シーンとエンティティをロックする

メイン ウィンドウで選択できないように、シーンとエンティティをロックできます。これは、シーンに多くのものが含まれるときに便利です。その場合でも、エンティティ ツリーではシーンとエンティティを選択できます。

シーンまたはエンティティをロックまたはロック解除するには、エンティティ ツリーで**南京錠**アイコンをクリックします。

![Padlock item](media/lock-scene-or-entity.png)

>[!TIP]
>シーンをロックすると、そのすべての子シーンとエンティティもロックされます。エンティティと共にをその子エンティティをロックするには、**Ctrl** キーを押しながら南京錠アイコンをクリックします。

ロックされている項目には、**金色の施錠された南京錠**のアイコンがエンティティ ツリーに表示されます。

![Locked entity](media/locked-entity.png)    

## シーン エディターでシーンをロードおよびアンロードする

シーン エディターで、シーンを (そのすべての子シーンおよびエンティティと共に) ロードおよびアンロードできます。エディターでのシーンのアンロードは、たとえば、編集ビューから不要なものを取り除いたり、エディターのパフォーマンスをよくしたりする場合に役に立ちます。

次のスクリーンショットでは、子シーンをロードした状態とアンロードした状態のルート シーンを示します。ルート シーンには、[スカイボックス](../graphics/textures/skyboxes-and-backgrounds.md)、[スクリプト](../scripts/index.md)、アステロイド、プレイヤー キャラクターなど、すべてのシーンで使用されるエンティティが含まれます。子シーンは、レベルのセクションです。

![Unloaded and loaded scenes](media/scenes-unloaded.jpg)

シーンをロードまたはアンロードするには、**シーン エディター**の左側にある**エンティティ ツリー**で、ロードまたはアンロードするシーンの隣にある**目のアイコン**をクリックします。

![Load scene icon](media/load-unload-scene-icon.png)

## シーンを移動する

シーンはエンティティではないので、変換コンポーネントを持っていません。ただし、［Offset］プロパティを使用して、シーンを移動できます。

![Scene offset property](media/scene-offset.png)

実行時にシーンを移動するには、以下を使用します。

`myScene.Offset = new Vector3(x, y, z);`

`myScene` はシーンの名前に、`x,y,z` はシーンの移動先の XYZ 座標に置き換えます。

## 関連項目

* [シーンを作成して開く](create-a-scene.md)
* [シーン エディター内を移動する](navigate-in-the-scene-editor.md)
* [シーンをロードする](load-scenes.md)
* [エンティティを追加する](add-entities.md)
* [エンティティを管理する](manage-entities.md)
