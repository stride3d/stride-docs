# ライトがシャドウをキャストしない

シーン内のライトでシャドウを有効にしたにも関わらず、シャドウがキャストされない場合は、シャドウ アトラスに十分なスペースがあることを確認します。ライト コンポーネントのプロパティでシャドウのサイズを小さくしてスペースを作ることが必要な場合があります。

シャドウとシャドウ アトラスの詳細については、「[グラフィックス - シャドウ](../graphics/lights-and-shadows/shadows.md)」を参照してください。

## シャドウ アトラスの比較

| サイズ: 2x     | サイズ: 1x
| ---------------------------------------------------------------- | -------------------------------------------------------------
| ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-2x.png)               | ![FPS scene shadow map](../graphics/lights-and-shadows/media/shadow-atlas-1x.png)
| この光源は、シャドウ アトラスの全体を使用します。これは、アトラスにスペースが残っていないので、他のライトがシャドウをキャストしないことを意味します。| このライトはシャドウ アトラスの 4 分の 1 を使用します。残りは他の光源に割り当てることができます。

## シャドウのサイズを小さくする

1. シーン エディターで、シャドウをキャストするライトのエンティティを選択します。

2. ［Light］コンポーネントのプロパティの［Shadow］>［Size］で、ドロップダウン メニューを使用してシャドウのサイズを小さくします。

    ![media/DirectionalLightProperties.png](../graphics/lights-and-shadows/media/DirectionalLightProperties-size.png)

    または、［Shadows］チェックボックスをオフにして、ライトのシャドウを完全に無効にします。

以上の手順を必要なすべてのライト エンティティに繰り返して、シャドウ アトラスにスペースを作成します。

## 関連項目

* [グラフィックス - シャドウ](../graphics/lights-and-shadows/shadows.md)
* [グラフィックス - ディレクショナル ライト](../graphics/lights-and-shadows/directional-lights.md)
