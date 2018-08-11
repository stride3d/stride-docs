# アニメーションのインポート

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>

モデルをアニメーション化するには、次の 3 種類のアセットを使用する必要があります。

* モデル
* スケルトン
* アニメーション

これらのアセットは、3D モデル ファイルからインポートできます。Xenko でサポートされているモデル ファイルの種類は、``.3ds``、``.blend``、``.dae``、``.dxf``、``.fbx``、``.md2``、``.md3``、``.obj``、``.x`` です。

## モデル、スケルトン、アニメーションをモデル ファイルからインポートする

1. モデル ファイルをエクスプローラーから［Asset view］ (既定では下部のペイン) にドラッグします。

    ![Choose asset type](media/create-and-add-assets-drag-and-drop-model.png)

    * または、［Asset view］で次のようにします。

        1a. ![Add asset](media/create-and-add-assets-add-new-asset-button.png) をクリックし、［Import directly from files］を選択します。

        ![Choose asset type](media/create-and-add-assets-add-new1.png)

        2b. ファイルを参照して、［Open］をクリックします。

2. モデル ファイルから［3D model]、［Animation］、[Skelton］のどれをインポートするかを指定します。

    ![Choose asset type](media/create-and-add-assets-choose-asset-type.png)

    *［3D model］を選択した場合、Xenko はモデル ファイル内で見つかった追加のマテリアル、テクスチャ、スケルトンをインポートできます。また、モデルからスケルトンをインポートすること (［Import new skeleton］)、スケルトンをインポートしないこと (［Don't use skeleton］)、または下のフィールドで異なるスケルトンを指定すること (［Use existing skeleton］) もできます。

    ![Choose asset type](media/create-and-add-assets-model-import-parameters.png)

    *［Skeleton］を選択した場合は、スケルトンだけがモデル ファイルからインポートされます。たとえば、ノードのサブセットを使用する新しいスケルトンに使用する場合に、これを行うことがあります。

    *［Animation］を選択した場合は、アニメーションだけがモデル ファイルからインポートされます。通常のアニメーションの場合はこれで十分です。加算アニメーションの場合は、いくつか追加手順があります。詳細については、「[加算アニメーション](additive-animation.md)」を参照してください。

インポートしたモデル、アニメーション、スケルトン アセットは、［Asset view］に追加されます。

![Assets in asset view](media/assets-in-asset-view1.png)

![Assets in asset view](media/assets-in-asset-view2.png)

［Property grid］ (既定では右側) で、アセットのプロパティを表示して編集できます。詳細については、「[アニメーションのプロパティ](animation-properties.md)」を参照してください。

![Properties](media/animations-properties.png)

## アニメーション アセットを使用する

アニメーション アセットを使用するには、[AnimationComponent](xref:Xenko.Engine.AnimationComponent) をエンティティに追加した後、アニメーション アセットをアニメーション コンポーネントに追加します。詳細については、「[アニメーションのセットアップ](set-up-animations.md)」を参照してください。

>[!NOTE]
>スケルトンにメッシュを正しくスキニングしていることを確認してください。していない場合は、モデルを正しくアニメーション化できません。

## 関連項目

* [アニメーション](index.md)
* [アニメーションのプロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーションのスクリプト](animation-scripts.md)
* [加算アニメーション](additive-animation.md)
* [プロシージャル アニメーション](procedural-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
