# スカイボックスと背景
<!--
# Skyboxes and backgrounds
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">デザイナー</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>
-->

**スカイボックス（Skybox）** とは、空間や距離を感じさせる背景のことです。典型的なスカイボックスの背景には、空、雲、山、その他の風景があります。スカイボックスは事前にレンダリング済みの画像であるため、GPU や CPU の使用量が少なくて済みます。
<!--
**Skyboxes** are backgrounds that create the illusion of space and distance. Typical skybox backgrounds include skies, clouds, mountains, and other scenery. As skyboxes are prerendered, they require little GPU and CPU.
-->

スカイボックスとして、**キューブマップ** や **360°パノラマテクスチャー** を使用することができます。また、[シーンの照明に使用する](../lights-and-shadows/skybox-lights.md)ことも可能です。
<!--
You can use **cubemaps** or **360° panoramic textures** as skyboxes. You can also [use them to light the scene](../lights-and-shadows/skybox-lights.md).
-->

> [!Note]
> 今のところ、Stride はスカイドームやローカルスカイボックスはサポートしていません。

<!--
> [!Note]
> Currently, Stride doesn't support skydomes or local skyboxes.
-->

また、2D ゲームでよく使われる **2D 背景** を表示することもできます。
<!--
Alternatively, you can display a **2D background**, which is often useful for 2D games.
-->

## キューブマップ
<!--
## Cubemaps
-->

**キューブマップ（Cubemap）** は、六面体のテクスチャーです。これらのテクスチャーをシーンの周りに立方体として組み立てれば、キューブマップは広々とした 3D 環境をシミュレートします。
<!--
A **cubemap** is a six-sided texture. When these textures are assembled in a cube around the scene, the cubemap simulates spacious 3D surroundings.
-->

![Distant planet skybox](media/cubemap-cross.jpg)

![Merged skybox](media/skybox-assembled.jpg)

今のところ、Game Studio で画像ファイルをキューブマップ（`.dds` ファイル）に変換することはできません。以下のような別のアプリケーションを使用して、個別の画像ファイルからキューブマップを作成してください。
<!--
Currently, Game Studio can't convert image files to cubemaps (`.dds` files). Use another application to create a cubemap from separate image files, such as:
-->

* [NVIDIA Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter)
* [AMD CubeMapGen](https://gpuopen.com/archived/cubemapgen/)

<!--
* [Nvidia conversion tool](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)
* [ATI conversion tool](http://developer.amd.com/tools-and-sdks/archive/games-cgi/cubemapgen)
-->

### Game Studio でキューブマップを作る
<!--
### Create a cubemap in Game Studio
-->

シーン内の任意の位置からキューブマップをキャプチャーすることができます。
<!--
You can capture a cubemap from a position in your scene.
-->

1. **シーンエディター**で、キューブマップを撮影したい場所にカメラを配置します。カメラの向きは問題ではなく、位置だけが重要です。

    一般的には、最高の全方位ビューを作成するために、シーンの中心でキューブマップをキャプチャーします。

2. シーンエディターのツールバーで、[**Light probes and cubumaps**] をクリックします。

    ![Lighting options](../lights-and-shadows/media/lighting-options-menu.png)

3. **Cubemap** の下にある [**Capture**] をクリックします。

4. キューブマップを保存する場所を参照し、ファイル名を指定して [**保存**] をクリックします。

<!--
1. In the **scene editor**, position the camera at the point where you want to capture the cubemap. The direction the camera faces doesn't matter, only the position.

    Typically, you should capture cubemaps at the center of your scene to create the best all-round view.

2. In the scene editor toolbar, open the **Lighting options** menu.

    ![Lighting options](../lights-and-shadows/media/lighting-options-menu.png)

3. Under **Cubemap**, click **Generate**.

4. Browse to the location on disk you want to save the cubemap, specify a name, and click **Save**.
-->

>[!Tip]
>キューブマップは、プロジェクトの **Resources** フォルダに保存することをお勧めします。詳しくは[バージョン管理でファイルを編成する](../../files-and-folders/version-control.md)をご覧ください。

<!--
>[!Tip]
>We recommend you save the cubemap in your project **Resources** folder. For more information, see [Organize your files in version control](../../files-and-folders/version-control.md).
-->

Game Studio は、指定した場所にキューブマップファイル（`.dds`）を作成します。
<!--
Game Studio creates a cubemap `.dds` file in the location you specified.
-->

## 360° パノラマテクスチャー
<!--
## 360° panoramic textures
-->

キューブマップを使用する代わりに、**360°パノラマテクスチャー** を 3D 背景として使用することができます。
<!--
Instead of using a cubemap, you can use a **360° panoramic texture** as a 3D background.
-->

| 360° パノラマ   | ゲームでの見た目
|----------------|-------------
| ![Panorama texture](media/MyPanorama.jpg)  | ![Panorama in game](media/panorama-in-game.jpg)
*画像提供： [Texturify](http://texturify.com)*

<!--
| 360° panorama  | Appearance in game
|----------------|-------------
| ![Panorama texture](media/MyPanorama.jpg)  | ![Panorama in game](media/panorama-in-game.jpg)
*Image courtesy of [Texturify](http://texturify.com)*
-->

>[!Note]
>[ポストエフェクト](../post-effects/index.md)は、スカイボックスの外観にも影響を与えることを覚えておいてください。思ったようにならない場合は、ポストエフェクトの設定を変更してみてください。

<!--
>[!Note]
>Remember that [post effects](../post-effects/index.md) affect the appearance of your skybox. If it doesn't look how you expect, try changing your post effect settings.
-->

## キューブマップまたは 360° パノラマテクスチャーをプロジェクトに追加する
<!--
## Add a cubemap or 360° panoramic texture to the project
-->

他の色のテクスチャーと同じように追加していきます。
<!--
You add these like other color textures.
-->

* **アセットビュー**で、![Add asset](../lights-and-shadows/media/engine-skybox-add-new-asset-button.png) をクリックし、[**Texture**] > [**Color**] を選択してファイルを参照します。

    ![Select texture as asset type](media/engine-skybox-select-asset-type.png)

* または、**Windows エクスプローラー**から**アセットビュー**にファイルをドラッグ＆ドロップして、[**Color**] を選択します。

    ![Drag and drop background texture](media/drag-texture.gif)

<!--
* In the **Asset View**, click ![Add asset](../lights-and-shadows/media/engine-skybox-add-new-asset-button.png), select **Textures** > **Color texture**, and browse to the file.

    ![Select texture as asset type](media/engine-skybox-select-asset-type.png)

* Alternatively, drag and drop the file from **Windows Explorer** to the **Asset View**, then select **Color texture**.

    ![Drag and drop background texture](media/drag-texture.gif)
-->

### スカイボックスを作る
<!--
### Create a skybox
-->

スカイボックスを作成するには、キューブマップまたは360°パノラマのテクスチャーを **背景（Background）コンポーネント** に追加します。
<!--
To create a skybox, add a cubemap or 360° panoramic texture to a **background component**.
-->

Stride では、プロジェクトに背景コンポーネントを持つエンティティが最初から含まれています。シーン内で同時にアクティブにできる背景は 1 つだけです。複数の背景がある場合、Stride は最初の背景のみを読込みます。
<!--
Stride includes an entity with a background component in the project by default. Only one background can be active in a scene at a time. If there are multiple backgrounds, Stride only loads the first.
-->

必要な数のエンティティに背景コンポーネントを追加することができます。例えば、実行時にスカイボックスを切り替えたい場合などに、複数の背景を含めることができます。
<!--
You can add background components to as many entities as you need. You might want to include more than one background, for example, if you want to switch skyboxes at runtime.
-->

#### 背景エンティティを追加する
<!--
#### Add a background entity
-->

1. **シーンビュー**で、背景コンポーネントを追加したいエンティティを選択します。

    これは空のエンティティでも構いません。また、シーン内での位置は重要ではありません。

2. **プロパティグリッド**で、[**Add component**] をクリックし、[**Miscellaneous**] > [**Background**] を選択します。

    ![Add background component](media/engine-skybox-add-background-component.png)

3. **Texture** で、 スカイボックスに使用したいキューブマップまたは360°パノラマテクスチャーを選択します。
 
    ![Background component properties](media/engine-skybox-background-component-properties.png)

<!--
1. In the **Scene view**, select the entity you want to add the component to.

    This can be an empty entity. Its position in the scene doesn't matter.

2. In the **Property Grid** (on the right by default), click **Add component** and select **Background**.

    ![Add background component](media/engine-skybox-add-background-component.png)

3. Under **Texture**, select the cubemap or 360° panoramic texture you want to use in the skybox.

    ![Background component properties](media/engine-skybox-background-component-properties.png)
-->

## スカイボックスを光源として使う
<!--
## Use a skybox as a light source
-->

スカイボックスを使ってシーンを照らすこともできます。Stride は、スカイボックスのテクスチャーを解析し、[イメージベースドライティング](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%83%99%E3%83%BC%E3%82%B9%E3%83%89%E3%83%A9%E3%82%A4%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)を使ってライトを生成します。詳しくは、[スカイボックス ライト](../lights-and-shadows/skybox-lights.md)を参照してください。
<!--
You can use a skybox to light the scene. Stride analyzes the skybox texture and generates lighting using [image-based lighting (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting). For more information, see [Skybox lights](../lights-and-shadows/skybox-lights.md).
-->

## スカイボックスを実行時に変更する
<!--
## Change the skybox at runtime
-->

次のコードは、バックグラウンドでキューブマップを変更します。
<!--
The following code changes the cubemap in a background:
-->

```cs
public Texture cubemapTexture;
public void ChangeBackgroundParameters()
{
    // エンティティから背景コンポーネントを取得
    // Get the background component from an entity
	var background = directionalLight.Get<BackgroundComponent>();

    // 背景を置き換え
	// Replace the existing background
	background.Texture = cubemapTexture;

    // 背景色の強さを変更
	// Change the background intensity
	background.Intensity = 1.5f;
}
```

### キューブマップからパノラマへの変換ならびに逆変換
<!--
### Convert cubemaps to panoramas and vice versa
-->

パノラマをキューブマップに変換したり逆変換したりするための、様々なツールが存在します。
<!--
Various tools exist to convert a panoramas to cubemaps and vice versa, including: 
-->

- [Panorama to Cubemap](https://jaxry.github.io/panorama-to-cubemap/)
- [360Toolkit](https://360toolkit.co/)

<!--
- [Panorama Converter](http://gonchar.me/blog/goncharposts/2150)  
- [Panorama to Cubemap](https://jaxry.github.io/panorama-to-cubemap/)
- [Convert Cubemap to Equirectangular](https://www.360toolkit.co/convert-cubemap-to-spherical-equirectangular.html)
-->

## 2D 背景を設定する
<!--
## Set a 2D background
-->

3D スカイボックスを使用する代わりに、テクスチャーを静的な背景として表示することができます。テクスチャーは、カメラをどのように動かしても静止したままのフラットな画像として表示されます。これは 2D ゲームでよく使われます。
<!--
Instead of using a 3D skybox, you can display the texture as a static background. This displays the texture as a flat image that stays static no matter how you move the camera. This is often useful for 2D games.
-->

そのためには、**背景（Background）** コンポーネントのプロパティで、**2D background** を選択します。
<!--
To do this, in the **Background** component properties, select **2D background**.
-->

![Background component properties](media/is-2d.png)

キューブマップでこれを行った場合は、Stride はキューブマップの最初の面を背景として使用します。
<!--
If you enable this with a cubemap, Stride uses the first face of the cubemap as the background.
-->

## ビデオをスカイボックスとして使う
<!--
## Use a video as a skybox
-->

詳細については、[ビデオをスカイボックスとして使用](../../video/use-a-video-as-a-skybox.md)を参照してください。
<!--
For details, see [Videos - Use a video as a skybox](../../video/use-a-video-as-a-skybox.md).
-->

## 関連項目
<!--
## See also
-->

* [スカイボックス ライト](../lights-and-shadows/skybox-lights.md)
* [ライトとシャドウ](../lights-and-shadows/index.md)

<!--
* [Skybox lights](../lights-and-shadows/skybox-lights.md)
* [Lights and shadows](../lights-and-shadows/index.md)
-->
