# シーン エディターでの移動

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">レベル デザイナー</span>

シーン内を移動し、エディター カメラの視点を変えることができます。左下にある XYZ 軸が、3D 空間内での向きを示します。

   ![Scene orientation gizmo](media/navigate-in-a-scene-scene-orientation-gizmo.png)

## シーン内を動き回る

シーン エディター内でエディター カメラを移動させるには複数の方法があります。

> [!TIP]
> **Shift** キーを押したまま操作すると移動の速度が上がります。

### 飛ぶ

<video controls autoplay loop height="240" width="320">
                <source src="media/navigate-in-scene-fly-in-the-scene.mp4" type="video/mp4">
</video>

カメラの向きを変えるには、**右マウス ボタン**を押したまま**マウスを動かし**ます。カメラを移動するには、**右マウス ボタン**を押したまま **WASD キー**を使用します。これは、多くのアクション ゲームのコントロールと似ています。

### パン

**右マウス ボタン**と**中央マウス ボタン**を押したまま、マウスを動かします。

<video controls autoplay loop height="240" width="320">
                <source src="media/navigate-in-scene-walk-in-the-scene.mp4" type="video/mp4">
</video>

### ドリー

ドリーする (カメラを前後に動かす) には、**マウス ホイール**を使用します。

### 周回

**Alt** キーと**左マウス ボタン**を押したまま、**マウス**を動かします。

回転の中心は、常に画面の中心です。中心点までの距離を調整するには、**マウス ホイール**を使用します。

![Rotation](media/navigate-in-scene-orbital-rotation-schema.png)

<video controls autoplay loop height="240" width="320">
                <source src="media/navigate-in-scene-orbital-rotation.mp4" type="video/mp4">
</video>

### エンティティに焦点を合わせる

エンティティを選択した後、**F** キーを押します。エンティティにズームインし、エンティティがカメラ エディターの中央に配置されます。

また、エンティティ ツリーのエンティティの隣にある**虫眼鏡アイコン**をクリックすることで、エンティティに焦点を合わせることもできます。

![Focus icon](media/focus-icon.png)

<video controls autoplay loop height="240" width="320">
                <source src="media/navigate-in-scene-focus-on-entity-using-f-key.mp4" type="video/mp4">
</video>

> [!TIP]
> エンティティに焦点を合わせた後、**Alt キーと左マウス ボタン**を使用して周回させると、エンティティを調べることができます。

### コントロールの表

操作                 | コントロール
-----------------------|--------------
移動                    | 方向キー + 右マウス ボタン <br>WASDQE キー + 右マウス ボタン </br>
見回す             | 右マウス ボタン + マウスを移動
パン                     | 中央マウス ボタン + 右マウス ボタン + マウスを移動
周回                   | Alt キー + 左マウス ボタン
ズーム                    | マウス ホイール <br>Alt キー + 右マウス ボタン + マウスを移動</br>
パン                    | 中央マウス ボタン + マウスを移動
フォーカス                  | F (エンティティを選択して)

> [!TIP]
> シーン ナビゲーターのコントロールは、［Edit］>［Settings］の［Scene editor］>［Key bindings］で変更できます。
> ![Key bindings](media/settings-key-bindings.png)

## カメラ エディターの視点を変更する

シーン エディターの右上にある**ビュー カメラ ギズモ**を使用して、カメラ エディターの視点を変更できます。

![View camera gizmo](media/navigate-in-a-scene-view-camera-gizmo.png)

### カメラを位置にスナップする

エディター カメラの角度を変更するには、**ビュー カメラ ギズモ**の対応する面、辺、または頂点をクリックします。

クリック    | カメラの位置
---------|--------------
面     | 選択した面を向きます
辺     | 隣接する 2 つの面に対して 45° の方向を向きます
頂点  | 隣接する 3 つの面に対して 45° の方向を向きます

<video controls autoplay loop height="240" width="320">
                <source src="media/navigate-in-scene-change-view-angle.mp4" type="video/mp4">
</video>

## カメラの位置

> [!NOTE]
> このページでは、シーン エディターのカメラを使用する方法について説明します。ゲームでカメラを使用する方法については、「[グラフィックス - カメラ](../graphics/cameras/index.md)」を参照してください。

シーン エディター カメラのオプションを表示するには、シーン エディターの右上にある**カメラ アイコン**をクリックします。

![Switch to orthographic](../get-started/media/switch-to-orthographic.png)

### 透視投影ビューと正投影ビュー

**透視投影ビュー**は、シーン内のオブジェクトの「現実世界」の遠近法です。このビューでは、カメラに近いオブジェクトほど大きく表示され、同じ長さの線が、実際と同じように、短縮遠近のために異なる長さで表示されます。

**正投影ビュー**では、カメラからの距離に関係なく、オブジェクトは常に同じサイズで表示されます。平行線は交わることがなく、消失点はありません。正投影ビューでは、オブジェクトが正確に整列されているかどうかを簡単に確認できます。

![Perspective and orthographic diagram](media/perspective-orthographic-diagram.png)

![Perspective and orthographic views](media/perspective-and-orthographic-views.png)

また、カメラが自分を向いているときに**ビュー カメラ ギズモ**をクリックすることによって、透視投影ビューと正投影ビューを切り替えることもできます。

<video controls autoplay loop height="240" width="320">
              <source src="media/navigate-in-scene-switch-projection-mode.mp4" type="video/mp4">
</video>

#### 視野

カメラの視野を変更できます。カメラの錐台が変化し、シーンのズームインとズームアウトの効果があります。高い値 (90 以上) に設定すると、引き延ばされた「魚眼レンズ」ビューになります。既定の設定は 45 です。

#### 近平面と遠平面

近平面と遠平面により、カメラのビューが開始および終了する位置が決まります。

* **近平面**は、カメラが表示できる最も近いポイントです。既定の設定は 0.1 です。このポイントより手前にあるオブジェクトは描画されません。

* **遠平面**は、描画距離とも呼ばれ、カメラが表示できる最も遠いポイントです。このポイントより遠くにあるオブジェクトは描画されません。既定の設定は 1000 です。

Game Studio は、近平面と円平面の間の領域をレンダリングします。

![Camera position](../get-started/media/camera-position.png)

#### カメラ速度

**カメラ速度**の設定は、エディター内をカメラが移動する速さを変更します。

## 関連項目

* [シーンを作成して開く](create-a-scene.md)
* [シーンをロードする](load-scenes.md)
* [エンティティを追加する](add-entities.md)
* [エンティティを管理する](manage-entities.md)
