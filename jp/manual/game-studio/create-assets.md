# アセットを作成する

<span class="label label-doc-level">初級</span>

アセットを作成するには 2 つの方法があります。

 *［Add asset］ボタンを使用します (［Asset view］)
 * **リソース ファイル** (画像ファイルやオーディオ ファイルなど) を［Asset view］タブにドラッグ アンド ドロップします

##［Add Asset］ボタンを使用する

 1. ［Asset view］で ![](media/create-and-add-assets-add-new-asset-button.png) をクリックします。

 2. 作成するアセットの種類を選択します。

	![Select asset type](../get-started/media/asset-creation-create-new-asset-asset-view-tab.png)

	アセット テンプレートの一覧が表示されます。これらは、特定の用途のために構成されているアセットです。

 3. アセットに適したテンプレートを選択します。

    アセットが［Asset view］に追加されます。

	![Asset added to asset view' tab](../get-started/media/asset-creation-asset-view-tab-procedural-model.png)

> [!NOTE]
> テクスチャなどの一部のアセットにはリソース ファイルが必要です。そのようなアセットを追加すると、リソース ファイルの指定を求められます。

## リソース ファイルをドラッグ アンド ドロップする

互換性のあるリソース ファイルを Game Studio に直接ドラッグし、リソース ファイルからアセットを作成できます。Game Studio は、よく使用されるファイル形式と互換性があります。

> [!NOTE]
> * リソース ファイルを使用しないアセット (プレハブ、マテリアル、シーンなど) は、この方法では作成できません。

| アセットの種類                    | 互換性のあるリソース ファイル形式    
|-------------------------------|----------------------------------
| モデル、アニメーション、スケルトン | .dae、.3ds、.obj、.blend、.x、.md2、.md3、.dxf、.fbx
| スプライト、テクスチャ、スカイボックス   | .dds、.jpg、.jpeg、.png、.gif、.bmp、.tga、.psd、.tif、.tiff
| オーディオ  	                 | .wav、.mp3、.ogg、.aac、.aiff、.flac、.m4a、.wma、.mpc

リソース ファイルをドラッグ アンド ドロップしてアセットを作成するには:

1. (オプション) 使用するリソース ファイルがプロジェクトの［Resources］フォルダーにまだない場合は、ファイルをフォルダーに移動します。必須の操作ではありませんが、リソース ファイルを整理し、プロジェクトを共有しやすくするため、移動することをお勧めします。詳細については、「[プロジェクトの構造](../files-and-folders/project-structure.md)」を参照してください。

2. エクスプローラーから［Asset view］にリソース ファイルをドラッグします。

	![Drap and drop a resource file to the asset view](media/create-assets-drop-resource.png)

3. 作成するアセットの種類を選択します。

	![List of asset templates](media/create-assets-drag-drop-select-asset-template.png)

	アセットが［Asset view］に追加されます。

	![Texture asset created](media/create-assets-drag-drop-asset-created.png)

リソース ファイルのすべての依存関係が自動的にインポートされて、対応するアセットが作成されます。たとえば、モデルまたはアニメーションのリソース ファイルを追加すると、Game Studio が他のすべての処理を行います。

> [!TIP]
> 複数のファイルを同時にドラッグできます。異なる種類の複数のファイルを同時にドロップすると、選択されたテンプレートと一致するファイルだけが追加されます。たとえば、画像ファイルとサウンド ファイルを追加した後、Sound アセット テンプレートを選択すると、サウンド ファイルだけが追加されます。

## 関連項目

* [アセットを管理する](manage-assets.md)
* [アセットを使用する](use-assets.md)
