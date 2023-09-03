# スポット ライト

**スポット ライト**は、特定の方向にライトのコーンを生成します。街灯や懐中電灯などのオブジェクトからのライトをシミュレートするのに便利です。スポット ライトはシャドウをキャストします。スクリプトまたはアニメーションでスポット ライトを制御して、劇的なライティング効果を作成できます。

![media/SpotLightOverview.png](media/SpotLightOverview.png)

Game Studio では、スポット ライトは次のアイコンで表されます。

![media/SpotLight.png](media/SpotLight.png)

スポット ライトを選択すると、スポット ライトのギズモに、主方向、範囲、外側コーンが表示されます。

![media/SpotLightSelected.png](media/SpotLightSelected.png)

## プロパティ

![media/SpotLightProperties.png](media/SpotLightProperties.png)

| プロパティ            | 説明      |
| ------------------- | ------- |
| Color               | ライトの色です。現在、このライトは RGB カラーをサポートしています。     
| Range               | メートル単位の範囲です。この範囲を超えると、ライトはモデルに影響を与えません。
| Angle Inner         | ライト強度の影響が 1 であるスポット コーンの内角です。
| Angle Outer         | ライト強度の影響が 0 であるスポット コーンの外角です。
| Shadow             | <br>有効になっている場合、ライトはシャドウをキャストします</br><br>［Filter］: PCF (Percentage Closer Filtering) を使用して、ハード シャドウではなくソフト シャドウを生成します</br> <br>［Size］: シャドウ マッピングに使用するテクスチャのサイズです。テクスチャが大きいほど、よいシャドウ エッジが生成されますが、コストははるかに大きくなります。詳細については、「[シャドウ](shadows.md)」を参照してください</br> <br>通常、スポット ライトは中程度の視覚的インパクトがあるので、既定値は［medium］です</br>  
| Bias Parameters     | <br>これらのパラメーターは、シャドウ マップ技法の一部のアーティファクトを防ぐために使用されます。</br> <br>［Depth Bias］: シャドウ アクネを防ぐためにサンプリング深度に追加する深度の量です</br> <br>［Normal Offset Scale］: 法線方向の深度バイアスに乗算する係数です </br>
| Intensity           | ライトの強度です。シェーダーに送られる前に、色にこの値が乗算されます
| Culling Mask        | このライトによって影響を受けるエンティティ グループを定義します。既定では、すべてのグループが影響を受けます。

## 関連項目

* [ライトを追加する](add-a-light.md)
* [ポイント ライト](point-lights.md)
* [アンビエント ライト](ambient-lights.md)
* [ディレクショナル ライト](directional-lights.md)
* [スカイボックス ライト](skybox-lights.md)
* [シャドウ](shadows.md)
