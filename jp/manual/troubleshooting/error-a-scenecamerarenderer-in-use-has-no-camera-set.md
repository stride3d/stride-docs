# エラー: "A SceneCameraRenderer in use has no camera assigned to its ［Slot］. Make sure a camera is enabled and assigned to the ［Slot］."

>[!NOTE]
>前のバージョン Xenko では、このエラー メッセージは "A SceneCameraRenderer in use has no camera set. Make sure the camera component to use is enabled and has its［Slot］property correctly set." でした。

このエラーは、シーン レンダラーで使用できるカメラがないことを意味します。これには複数の原因が考えられます。

* 有効な[カメラ](../graphics/cameras/index.md)がありません
* カメラが正しくない[カメラ スロット](../graphics/cameras/camera-slots.md)に設定されています
* 同じカメラ スロットに複数の有効なカメラが割り当てられています

## 修正方法

Game Studio でカメラ コンポーネントを作成している場合、次のことを確認します。

* カメラ スロットが**メイン** スロットに設定されている (「[グラフィックス - カメラ スロット](../graphics/cameras/camera-slots.md)」を参照)
* 初期カメラだけが有効になっている

コードでカメラ コンポーネントを作成している場合は、Graphics Compositor から正しいスロットを取得していることを確認します。次のようにします。

```cs
var camera = new CameraComponent();
camera.Slot = SceneSystem.GraphicsCompositor.Cameras[0].ToSlotId();
```

実行時にカメラを変更するには、``Enabled`` プロパティを切り替えます。

> [!NOTE]
> 次のことを確認します。
>
> * 常に少なくとも 1 つの有効なカメラがある
>
> * 複数のカメラを有効にして同じスロットに同時に割り当てない

## 関連項目

* [グラフィックス - カメラ スロット](../graphics/cameras/camera-slots.md)
* [グラフィックス - カメラ](../graphics/cameras/index.md)