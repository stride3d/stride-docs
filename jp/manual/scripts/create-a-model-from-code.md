# コードからモデルを作成する

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

実行時にスクリプトでモデルを作成できます。次のように複数の方法で行うことができます。

* アセットからモデルを作成します

* 手続き型モデルを作成します

* モデルを含むプレハブをインスタンス化します (「[プレハブを使用する](../game-studio/prefabs/use-prefabs.md)」を参照)

## アセットからモデルを作成する

1. 新しい空の同期スクリプトを作成します。詳細については、「[スクリプトを作成する](../scripts/create-a-script.md)」を参照してください。

    ![Create a script](media/create-a-script-script-asset-selection.png)

2. スクリプトで、アセットの URL を使用してモデルをロードします。次に例を示します。

    ```cs
    // 新しいエンティティを作成してシーンに追加する。
	var entity = new Entity();
	SceneSystem.SceneInstance.RootScene.Entities.Add(entity);

    // ゲーム ファイルに含まれるモデルを追加する。
	var modelComponent = entity.GetOrCreate<ModelComponent>();
	modelComponent.Model = Content.Load<Model>("MyFolder/MyModel");
    ```

    >[!TIP]
    >モデルのアセット URL を調べるには、［Asset view］でモデルをポイントします。
    >![(Get asset URL](media/get-asset-url.png)

3. スクリプトを**スクリプト コンポーネント**としてシーンのエンティティに追加します。使用するエンティティはどれでもかまいません。方法については、「[スクリプトを使用する](use-a-script.md)」を参照してください。

    ![Add script component to entity](media/create-model-from-code-add-script-component.png)

4. ［Asset view］で、実行時に作成するモデルを右クリックして、［Include in build as root asset］を選択します。

    ![Include in build as root asset](media/create-model-from-code-include-in-build-as-root-asset.png)

    これで、実行時にスクリプトでアセットを使用できるようになります。詳細については、「[アセットを管理する](../game-studio/manage-assets.md)」を参照してください。

## 手続き型モデルを作成する

1. 新しい空の同期スクリプトを作成します。詳細については、「[スクリプトを作成する](create-a-script.md)」を参照してください。

    ![Add new script](media/create-model-from-code-add-new-script.gif)

2. スクリプトを**スクリプト コンポーネント**としてシーンのエンティティに追加します。使用するエンティティはどれでもかまいません。方法については、「[スクリプトを使用する](use-a-script.md)」を参照してください。

    ![Add script component to entity](media/create-model-from-code-add-script-component.png)

3. スクリプトで、空のエンティティと空のモデルをインスタンス化します。次に例を示します。

    ```cs
    // エンティティを作成してシーンに追加する。
    var entity = new Entity();
    SceneSystem.SceneInstance.RootScene.Entities.Add(entity);

    // モデルを作成し、モデル コンポーネントに割り当てる。
    var model = new Model();
    entity.GetOrCreate<ModelComponent>().Model = model;  
    ```

4. スクリプトで、組み込みの幾何学的プリミティブ (球や立方体など) を使用して手続き型モデルを作成します。次に例を示します。

    ```cs
    // 幾何学的プリミティブ (球や立方体など) を使用してメッシュを 1 つ以上追加する。
    var meshDraw = GeometricPrimitive.Sphere.New(GraphicsDevice).ToMeshDraw();

    var mesh = new Mesh { Draw = meshDraw };
    model.Meshes.Add(mesh);
    ```

    または、独自の頂点バッファーとインデックス バッファーを使用してメッシュを作成します。次に例を示します。

    ```cs
    // または、独自の頂点バッファーとインデックス バッファーを使用してメッシュを作成する。
    mesh = new Mesh { Draw = new MeshDraw { /* 頂点バッファーとインデックス バッファーのセットアップ */ } };
    model.Meshes.Add(mesh);
    ```

    >[!NOTE]
    >頂点バッファーとインデックス バッファーをセットアップする方法については、「[頂点の描画](../graphics/low-level-api/draw-vertices.md)」を参照してください。

最後に、モデルに 1 つ以上のマテリアルを指定する必要があります。これを行うには 2 つの方法があります。

### オプション 1: コードでマテリアルをロードする

1. コードで 1 つ以上のマテリアルをロードして、モデルに追加します。モデルは複数のマテリアルを使用できるので (モデル内のメッシュごとに 1 つ)、[Mesh.MaterialIndex](xref:Xenko.Rendering.Mesh.MaterialIndex) を使用して、リストのどのマテリアルをどのメッシュに使用するかを指定します。

    次に例を示します。

    ```cs
    // 1 つ以上のマテリアルを追加する。モデルで複数のマテリアルが使用されている場合は (メッシュごとに 1 つ)、Mesh.MaterialIndex でリストのマテリアルとメッシュの対応を指定する。
    Material material = Content.Load<Material>("MyFolder/MyMaterial");
    model.Materials.Add(material);
    ```

2. ［Asset view］で、スクリプトで使用するすべてのマテリアル アセットを右クリックし、［`Include in build as root asset`］を選択する。

    ![Include in build as root asset](media/create-model-from-code-include-material-in-build-as-root-asset.png)

    これで、実行時にスクリプトでアセットを使用できるようになります。詳細については、「[アセットを管理する](../game-studio/manage-assets.md)」を参照してください。

### オプション 2: コードで新しいマテリアルを作成する

次に例を示します。

```cs
    // マテリアルを作成する (赤い拡散色など)。
    var materialDescription = new MaterialDescriptor
    {
        Attributes =
	    {
	        DiffuseModel = new MaterialDiffuseLambertModelFeature(),
	        Diffuse = new MaterialDiffuseMapFeature(new ComputeColor { Key = MaterialKeys.DiffuseValue })
	    }
    };
    var material = Material.New(GraphicsDevice, materialDescription);
    material.Parameters.Set(MaterialKeys.DiffuseValue, Color.Red);
    model.Materials.Add(material);
```

## 関連項目

* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [プレハブを使用する](../game-studio/prefabs/use-prefabs.md)
