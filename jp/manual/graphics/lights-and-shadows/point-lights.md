# ポイント ライト

**ポイント ライト**は、球体内のすべての方向にライトを放射します。ランプや電球などのローカル ライトの光源とシャドウのキャストをシミュレートするのに便利です。

![media/PointLightOverview.png](media/PointLightOverview.png)

Game Studio では、ポイント ライトは次のアイコンで表されます。

![media/PointLight.png](media/PointLight.png)

選択すると、ポイント ライト ギズモがライトを投影する球体が表示されます。

![media/PointLightSelected.png](media/PointLightSelected.png)

## プロパティ

![media/PointLightProperties.png](media/PointLightProperties.png)

| プロパティ            | 説明                                                        
| ------------------- | ------------------
| Color               | ポイント ライトの色です。現在、このライトは RGB カラーをサポートしています。
| Radius              | 球体の影響半径です (メートル単位)。この範囲を超えると、ライトはモデルに影響を与えません。
| Shadow             | <br>シャドウが有効になっている場合、ライトはシャドウをキャストします。</br><br>［Filter］: PCF (Percentage Closer Filtering) を使用して、ハード シャドウではなくソフト シャドウを生成します</br> <br>［Size］: シャドウ マッピングに使用するテクスチャのサイズです。テクスチャが大きいほど、よいシャドウ エッジが生成されますが、コストははるかに大きくなります。詳細については、「[シャドウ](shadows.md)」を参照してください</br>
| Bias Parameters     | <br>これらのパラメーターは、シャドウ マップ技法の一部のアーティファクトを防ぐために使用されます。</br> <br>［Depth Bias］: シャドウ アクネを防ぐためにサンプリング深度に追加する深度の量です</br> <br>［Normal Offset Scale］: 法線方向の深度バイアスに乗算する係数です </br>
| Intensity           | ライトの強度です。シェーダーに送られる前に、色にこの値が乗算されます
| Culling Mask        | このライトによって影響を受けるエンティティ グループです。既定では、すべてのグループが影響を受けます。

## 関連項目

* [ライトを追加する](add-a-light.md)
* [ポイント ライト](point-lights.md)
* [アンビエント ライト](ambient-lights.md)
* [スカイボックス ライト](skybox-lights.md)
* [スポット ライト](spot-lights.md)
* [シャドウ](shadows.md)
