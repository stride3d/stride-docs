# アンビエント ライト

**アンビエント ライト**とは、シーン全体を照らす均一なライトです。アンビエント ライトは、特定の方向または光源からのライトではないので、シャドウ内のオブジェクトや他のオブジェクトによって隠されているオブジェクトも含めて、すべてのものを等しく照明します。シャドウをキャストすることはできません。

アンビエント ライトは、実世界の光源ではありません。代わりに、シーンの全体的な明るさや美観に寄与します。

![media/AmbientLightOverview.png](media/AmbientLightOverview.png)

アンビエント ライトによって一様に照明されているオブジェクトの例 (純粋な拡散マテリアルの場合):

![media/AmbientLight.png](media/AmbientLight.png)

## プロパティ

![media/AmbientLightProperties.png](media/AmbientLightProperties.png)

| プロパティ     | 説明                                                               
| ------------ | --------------------
| Color        | ライトの色です。NOTE: 現在、このライトは RGB カラーをサポートしています。将来のバージョンの Stride では、温度カラーもサポートされます。
| Intensity    | ライトの強度です。現在、この値には単位がないことに注意してください。  
| Culling Mask | ライトによって影響を受けるエンティティ グループを定義します。既定では、すべてのグループが影響を受けます。

## 関連項目

* [ライトを追加する](add-a-light.md)
* [ポイント ライト](point-lights.md)
* [ディレクショナル ライト](directional-lights.md)
* [スカイボックス ライト](skybox-lights.md)
* [スポット ライト](spot-lights.md)
* [シャドウ](shadows.md)
