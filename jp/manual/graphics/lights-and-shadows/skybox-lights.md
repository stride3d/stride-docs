# スカイボックス ライト

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">デザイナー</span>
<span class="badge text-bg-success">プログラマー</span>

スカイボックス ライトは、[スカイボックス](../textures/skyboxes-and-backgrounds.md)によって放射される[アンビエント ライト](ambient-lights.md)です。Stride は、スカイボックスのキューブマップを分析し、[イメージベースのライティング (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting) を使用してライティングを生成します。

![media/SkyboxLightOverview.png](media/SkyboxLightOverview.png)

スカイボックスを光源として使用するために、シーンにスカイボックスを実際に表示する必要はありません。たとえば、屋内の場所から空が一部分しか見えない場合 (部屋の窓を通して見る場合など)、スカイボックスを使用してシーンをライティングするのが望ましくないことがあります。アンビエント ライトはシャドウの影響を受けないので、屋内のスペースを含む、シーンのすべての部分をライティングします。

## スカイボックスによるシーンのライティング方法

次の画像では、2 つの純粋な拡散[マテリアル](../materials/index.md)に対するアンビエント ライティングとスカイボックス ライティングの違いを示します。

| アンビエント ライティング                                     | スカイボックス ライティング     
| ---------------------------------------------------- | -------------------------------
| ![Ambient lighting](media/AmbientLight.png)  | ![Skybox lighting.png](media/SkyboxLight-MaterialPureDiffuse.png)  |                                                           |                        
次の図では、金属プロパティと光沢プロパティが異なるマテリアルに対するスカイボックス ライティングの効果を示します。

 マテリアル プラスティック    | 金属 100% 光沢 50%     | 金属 100% 光沢 100%   
--------- | -------- | --- | -------- |
 ![Material plastic](media/SkyboxLight-MaterialPlastic.png)  | ![Material 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss50.png)  | ![Metal 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss100.png)  

スカイボックス テクスチャの色の反映に注目してください。

## スカイボックス ライトをセットアップする

スカイボックスをライトとして使用するには、スカイボックス アセットを追加した後、[ライト コンポーネント](xref:Stride.Engine.LightComponent)でそれを選択する必要があります。

1. ［Asset view］で ![Add asset](media/engine-skybox-add-new-asset-button.png) をクリックします。

2. ［Miscellaneous］ >［Skybox］の順に選択します。

    ![Choose asset type](media/engine-skybox-choose-asset-type.png)

    **アセット ピッカー**が開きます。

3. プロジェクト アセットからスカイボックス テクスチャ (`.dds` ファイル) を選択し、［Ok］をクリックします。

    ![Choose texture](media/engine-skybox-select-skybox-texture.png)

	指定したテクスチャでスカイボックス アセットが追加されます。

4. スカイボックス ライトにするエンティティを選択します。

5. ［Properties grid］ (既定では右側) で、［Add component］をクリックし、[[Light](xref:Stride.Engine.LightComponent)] を選択します。

    ![Background component properties](media/skybox-add-light-component.png)

6. ［Light］コンポーネントのプロパティで、［Light］の［Skybox］を選択します。

    ![Light component property](media/light-component-property.png)

7. 手のアイコンをクリックして、**アセット ピッカー**を開きます。

	![No skybox asset selected](media/no-skybox-asset-selected.png)

8. 光源として使用するスカイボックス アセットを選択し、［OK］をクリックします。

	![Asset picker](media/select-skybox-asset.png)

[ライト コンポーネント](xref:Stride.Engine.LightComponent)は、スカイボックス アセットを使用してシーンをライティングします。

## スカイボックス アセットのプロパティ

スカイボックスをライトとして使用すると、Stride はそれを、圧縮形式 ([球面調和 (Wikipedia)](https://en.wikipedia.org/wiki/Spherical_harmonics)) と、異なる種類のマテリアルをライティングするためのテクスチャの両方として使用します。両方の詳細を、スカイボックス アセットのプロパティで制御できます。

![Skybox lighting properties](media/skybox-asset-properties.png)

| プロパティ     | 説明                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CubeMap |  スカイボックスに対して使用されるキューブマップ アセットです
| Specular Only      |  スカイボックスを鏡面反射ライティングに対してのみ使用します
| Diffuse SH Order  | 圧縮されたスカイボックスの詳細のレベルです。拡散ライティング (光沢のないマテリアル) に対して使用されます。`Order5` は `Order3` より詳細です |
| Specular CubeMap Size | 鏡面反射ライティングに使用されるテクスチャのサイズです。テクスチャが大きいほど詳細になります。 |

## スカイボックス ライトのプロパティ

![media/SkyboxLightProperties.png](media/SkyboxLightProperties.png)

| プロパティ     | 説明   
| ------------ | --------
| Intensity    | ライトの強度です。
| Culling Mask | ライトによって影響を受けるエンティティ グループです。既定では、すべてのグループが影響を受けます。

## コード例

次のコードは、スカイボックス ライトとその強度を変更します。

```cs
public Skybox skybox;
public void ChangeSkyboxParameters()
{
    // エンティティからライト コンポーネントを取得する
	var light = Entity.Get<LightComponent>();

	// ライト コンポーネントからスカイボックス ライトの設定を取得する
	var skyboxLight = light.Type as LightSkybox;

	// 既存のスカイボックスを置き換える
	skyboxLight.Skybox = skybox;

	// スカイボックス ライトの強度を変更する
	light.Intensity = 1.5f;
}
```

## 関連項目

* [スカイボックス](../textures/skyboxes-and-backgrounds.md)
