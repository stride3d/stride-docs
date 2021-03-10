# カメラ スロット
<!--
# Camera slots
-->

**カメラスロット**は、[グラフィックスコンポジター](../graphics-compositor/index.md)をシーンのカメラにリンクします。各カメラをスロットに割り当てて、それからコンポジターが使用するスロットを定義します。これは、毎回新しいカメラを割り当てなくても、[ルートシーン](../../game-studio/manage-scenes.md)やグラフィックスコンポジターを変更することができるということを意味しています。
<!--
**Camera slots** link the [graphics compositor](../graphics-compositor/index.md) to the cameras in your scene. You bind each camera to a slot, then define which slot the compositor uses. This means you can change the [root scene](../../game-studio/manage-scenes.md) or graphics compositor without having to assign new cameras each time.
-->

カメラごとに異なるカメラスロットを作成する必要はありません。代わりに、スロットを使用するカメラを切り替えます。最良の方法は、必要のないカメラのカメラコンポーネントを無効にすることです。
<!--
You don't have to create a different camera slot for each camera. Instead, you can just change which cameras use each slot. The best practice is to disable the camera components on cameras you don't need.
-->

> [!Note]
> カメラスロットには、カメラが割り当てられている必要があります。使用していないカメラスロットがある場合は、削除してください。
>
> 1つのカメラを複数のスロットに割り当てることはできません。必要な場合は、カメラのエンティティを複製して別のスロットに割り当ててください。
>
> シーン内の複数の有効なカメラが同じカメラスロットを使用している場合、結果は未定義です。

<!--
> [!Note]
> Each camera slot must have a camera assigned to it. If you have an unused camera slot, delete it.
>
> You can't assign a single camera to more than one slot. If you need to do this, duplicate the camera entity and assign it to a different slot.

> If multiple enabled cameras in your scene use the same camera slot, the result is undefined.
-->

## カメラスロットを作成する
<!--
## Create a camera slot
-->

1. **アセットビュー**で、**Graphics Compositor** アセットをダブルクリックします。

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    すると、グラフィックスコンポジターエディターが開きます。

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

    グラフィックスコンポジターの詳細については、[グラフィックス コンポジター](../graphics-compositor/index.md)を参照してください。

2. グラフィックスコンポジターエディターで、**Camera slots** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**Add**）をクリックします。

    ![Camera slots](../graphics-compositor/media/graphics-compositor-camera-slots.png)

    Game Studio は、新しいカメラスロットをリストに追加します。

    ![Camera slot added](../graphics-compositor/media/camera-slot-added.png)

    > [!Tip]
    > カメラスロットに名前を付けるには、リスト上でダブルクリックして新しい名前を入力します。

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

    For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.

2. In the graphics compositor editor, on the left, under **Camera slots**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Camera slots](../graphics-compositor/media/graphics-compositor-camera-slots.png)

    Game Studio adds a new camera slot to the list:

    ![Camera slot added](../graphics-compositor/media/camera-slot-added.png)

    > [!Tip]
    > To name a camera slot, double-click it in the list and type a new name.
-->

## カメラをカメラスロットに割り当てる
<!--
## Bind a camera to a camera slot
-->

1. シーンで、カメラコンポーネントを持つ**エンティティ**を選択します。

2. **プロパティグリッド**の**カメラ**コンポーネントのプロパティの **Slot** で、カメラを割り当てたいスロットを選択します。

    > [!Note]
    > ドロップダウンメニューには、[ゲームの設定](../../game-studio/game-settings.md)で選択したグラフィックコンポジターのカメラスロットがリストアップされます。

    ![media/graphics-compositor-overview-2.png](../graphics-compositor/media/graphics-compositor-overview-2.png)

グラフィックスコンポジターは、有効なカメラを、各フレームの適切なスロットにマッチングさせます。
<!--
The graphics compositor matches enabled cameras to their appropriate slots each frame.
-->

## スクリプトから、カメラを作成してカメラスロットに割り当てる
<!--
## Create a camera and assign a camera slot from a script
-->

以下の通りです。
<!--
Use:
-->

```cs
var camera = new CameraComponent();
camera.Slot = SceneSystem.GraphicsCompositor.Cameras[0].ToSlotId();
```

実行時にカメラを変更するには、``Enabled``プロパティを切り替えます。
<!--
To change the camera at runtime, toggle the ``Enabled`` property.
-->

> [!Note]
> 以下を確認してください。
>
> * 少なくとも1台のカメラを有効にしておく。
>
> * 複数のカメラを有効にして同じスロットに同時に割り当てていないこと。

<!--
> [!Note]
> Make sure you:
>
> * always have at least one enabled camera
>
> * don't have multiple cameras enabled and assigned to the same slot at the same time
-->

## 関連項目
<!--
## See also
-->

* [カメラ](index.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)
* [Game Studio：ゲームの設定](../../game-studio/game-settings.md)
* [Game Studio：シーンの管理](../../game-studio/manage-scenes.md)

<!--
* [Cameras](index.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Game Studio — Game settings](../../game-studio/game-settings.md)
* [Game Studio — Manage scenes](../../game-studio/manage-scenes.md)
-->
