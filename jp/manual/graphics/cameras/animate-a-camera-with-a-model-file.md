# モデルファイルを使ったカメラのアニメーション
<!--
# Animate a camera with a model file
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
-->

他のエンティティと同様に、`.3ds`、`.fbx`、`.obj` などの3Dモデルファイルからアニメーションをインポートして、カメラを[アニメーション](../../animation/index.md)させることができます。
<!--
Like other entities, you can [animate](../../animation/index.md) cameras using animations imported from 3D model files such as `.3ds`, `.fbx`, and `.obj`.
-->

>[!Note]
>モデルファイルを使ってカメラをアニメーションさせるには、まず、モデリングツール（Maya、3ds Max、Blenderなど）を使ってアニメーションを[ベイク](https://entry.cgworld.jp/terms/%E3%83%99%E3%82%A4%E3%82%AF%E5%87%A6%E7%90%86.html)する必要があります。
>Stride は、ターゲットカメラを使ったカメラアニメーションには対応していません。

<!--
>[!Note]
>To animate a camera using a model file, you first need to bake the animation using your modeling tool (eg Maya, 3ds Max or Blender).
>Stride doesn't support cameras animated using target cameras.
-->

カメラが独立して移動する場合、最も簡単な方法は、カメラアニメーションを別ファイルとしてエクスポートし、アニメーションの **Root Motion** オプションを有効にしてから、カメラ、アニメーション、アニメーションスクリプトを同じエンティティに追加することです。アニメーションに FOV アニメーション、近・遠平面アニメーションが含まれている場合、Stride カメラはそれに応じて更新されます。この方法では、モデルやスケルトンは必要ありません。
<!--
If the camera moves independently, the simplest method is to export the camera animation as a separate file, enable the **root motion** option on the animation, then add the camera, animation, and animation script to the same entity. If the animations include FOV or near or far plane animations, the Stride camera updates accordingly. With this method, you don't need a model or a skeleton.
-->

他のアニメーションと連動してカメラを動かしたい場合、例えば、独自のモデル、スケルトン、アニメーションを持つカメラマンがカメラを持っている場合は、[モデルノードリンク](../../animation/model-node-links.md)コンポーネントを使って、カメラのエンティティをカメラマンの動きに連動させます。
<!--
If you want the camera to move in tandem with another animation — for example, if the camera is held by a cameraman character with its own model, skeleton and animation — use a [model node link](../../animation/model-node-links.md) component to link the camera entity to the cameraman's movements.
-->

## カメラを個別にアニメーションさせる
<!--
## Animate a camera independently
-->

これを行うには、プロジェクトに以下のアセットが必要です。

* アニメーションさせるカメラを表す[カメラ エンティティ](index.md)
* モデリングツールから個別にエクスポートされた、カメラの[アニメーション](../../animation/import-animations.md)
* アニメーションを再生するための[アニメーション スクリプト](../../animation/animation-scripts.md)

<!--
To do this, you need the following assets in your project:

* a [camera entity](../index.md), the camera to be animated
* an [animation](../../animation/import-animations.md), to animate the camera (exported separately in your modeling tool)
* an [animation script](../../animation/animation-scripts.md), to play the animation
--->

1. **アセットビュー**で、カメラ用のアニメーションアセットを選択します。

    ![Select animation asset](media/select-animation1.png)

    >[!Note]
    >アニメーションのインポート方法については、[アニメーションのインポート](../../animation/import-animations.md)を参照してください。

2. **プロパティグリッド**で、**Root Motion** を有効にします。

    ![Enable root motion](media/enable-root-motion.png)

    Root Motion を有効にすると、Stride は **ルート ノード アニメーション** をスケルトンに適用する代わりに、アニメーションの追加先エンティティの [TransformComponent](xref:Stride.Engine.TransformComponent) に適用します。

    >[!Note]
    > **Skelton** にスケルトンが指定されていない場合は、**Root Motion** が無効になっていても、Stride は常に [TransformComponent](xref:Stride.Engine.TransformComponent)にアニメーションを適用します。

3. **シーンエディター**で、カメラを持っているエンティティを選択します。

    >[!Note]
    >カメラを追加する方法については、[カメラ](index.md)を参照してください。

4. **プロパティグリッド**で [**Add component**] をクリックし、**Animations** を選択します。

    ![Select an entity](media/add-animations-component-to-camera.png)

    Game Studio は、エンティティにアニメーションコンポーネントを追加します。

    ![Animation component](media/animation-component-added-to-camera.png)

5. **Animations** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**Add**）をクリックして、名前を入力します。

    ![Add animation](media/animation-name.png)

    Game Studio はリストにアニメーションを追加します。

    ![Animation added](media/animation-added.png)

6. 追加したアニメーションの横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**Select an asset**）をクリックします。

    すると、**Select an asset** ウィンドウが開きます。

    ![Select an asset](media/select-mycamera-animation.png)

7. カメラに適用したいアニメーションを選択して、[**OK**] をクリックします。

8. [**Add component**] をクリックして、カメラアニメーションに使用するアニメーションスクリプトを選択します。

    ![Add animation script](media/add-animation-script.png)

    Game Studio は、エンティティにコンポーネントを追加します。

    >[!Note]
    >アニメーションスクリプトを追加する方法については、[アニメーション スクリプト](../../animation/animation-scripts.md)を参照してください。

9. スクリプトコンポーネントで、**Animations** の横にある ![Green plus button](../../game-studio/media/green-plus-icon.png)（**Add**）をクリックします。

    ![Add animation to the list](../../animation/media/add-animation-to-list.png)

10. [**Clip**] の横にある ![Hand icon](../../game-studio/media/hand-icon.png)（**Select an asset**）をクリックします。

    すると、**Select an asset** ウィンドウが開きます。

    ![Select an asset](media/select-mycamera-animation.png)

11. カメラに適用したいアニメーションアセットを選択して、[**OK**] をクリックします。

<!--
1. In the **Asset View**, select the animation asset you want to use to animate the camera.

    ![Select animation asset](media/select-animation1.png)

    >[!Note]
    >For instructions about how import animations, see [Import animations](../../animation/import-animations.md).

2. In the **Property Grid**, enable **Root motion**.

    ![Enable root motion](media/enable-root-motion.png)

    When root motion is enabled, Stride applies the **root node animation** to the [TransformComponent](xref:Stride.Engine.TransformComponent) of the entity you add the animation to, instead of applying it to the skeleton.

    >[!Note]
    >If there is no skeleton specified in **Skeleton**, Stride always applies the animation to [TransformComponent](xref:Stride.Engine.TransformComponent), even if **root motion** is disabled.

3. In the **Scene Editor**, select the entity that contains the camera you want to animate.

    >[!Note]
    >For instructions about how add cameras, see [Cameras](index.md).

4. In the **Property Grid**, click **Add component** and select **Animations**.

    ![Select an entity](media/add-animations-component-to-camera.png)

    Game Studio adds an animation component to the entity.

    ![Animation component](media/animation-component-added-to-camera.png)

5. Next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and type a name.

    ![Add animation](media/animation-name.png)

    Game Studio adds an animation to the list.

    ![Animation added](media/animation-added.png)

6. Next to the animation you added, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/select-mycamera-animation.png)

7. Select the animation you want to use to animate the camera and click **OK**.

8. Click **Add component** and select the animation script you want to use to animate the camera.

    ![Add animation script](media/add-animation-script.png)

    Game Studio adds the script to the entity as a component.

    >[!Note]
    >For instructions about how to add animation scripts, see [Animation scripts](../../animation/animation-scripts.md).

9. Under the script component, next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Add animation to the list](../../animation/media/add-animation-to-list.png)

10. Next to **Clip**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/select-mycamera-animation.png)

11. Select the animation asset you want to use to animate the camera and click **OK**.
-->

実行時に、カメラはアニメーションを使用します。アニメーションに FOV アニメーションや近・遠平面アニメーションが含まれている場合、Stride はカメラをそれらに応じて更新します。
<!--
At runtime, the camera uses the animation. If the animation includes FOV or near or far plane animations, the Stride camera updates accordingly.
-->

## カメラを別のモデルのノードにアタッチする
<!--
## Attach the camera to a node on another model
-->

カメラを他のモデルと一緒に動かすには、カメラ用のエンティティを別途作成し、**モデルノードリンク**コンポーネントを使ってエンティティを適切なノードにリンクします。
<!--
To move a camera in tandem with another model, create a separate entity for the camera, then use a **model node link** component to link the entity to the correct node.
-->

これを行うには、プロジェクトに以下のアセットを追加する必要があります。

* アニメーションさせたいカメラを表す[カメラエンティティ](../index.md)
* カメラをアタッチする[モデル](../../animation/index.md)
* モデルに適合する[スケルトン](../../animation/index.md)
* モデルに適用する[アニメーション](../../animation/index.md)
* アニメーションを再生するための[アニメーション スクリプト](../../animation/animation-scripts.md)

<!--
To do this, you need the following assets in your project:

* a [camera entity](../index.md), the camera you want to animate
* a [model](../../animation/index.md), to attach the camera to
* a [skeleton](../../animation/index.md) that matches the model
* an [animation](../../animation/index.md), to animate the model
* an [animation script](../../animation/animation-scripts.md), to play the animation
-->

>[!Note]
>この方法を使用すると、FOV および近・遠平面アニメーションは無視されます。
<!--
>>[!Note]
>FOV and near or far plane animations are ignored if you use this method.
-->

1. **アセットビュー**で、カメラをリンクしたいモデルを選択します。**Skeleton** の横にモデルと適合したスケルトンが指定されていることを確認してください。

2. カメラをアタッチするエンティティに、アニメーションに必要なモデル、アニメーションクリップ、アニメーションスクリプトのコンポーネントがあることを確認します。

    >[!Note]
    >これらを追加する方法については、[アニメーション](../../animation/index.md)を参照してください。

3. カメラエンティティを選択した状態で、**プロパティグリッド**で [**Add component**] をクリックし、**Model Node Link** を選択します。

    ![Add component](../../particles/tutorials/media/add-model-node-link.png)

    >[!Note]
    >[TransformComponent](xref:Stride.Engine.TransformComponent) は、モデルノードの位置にオフセットを追加します。オフセットを追加したくない場合は、[TransformComponent](xref:Stride.Engine.TransformComponent) が `0,0,0` に設定されていることを確認してください。

    Game Studio は、エンティティにモデルノードリンクコンポーネントを追加します。

    ![Model node link component](../../animation/media/model-node-component.png)

4. **Target** の横にある ![Hand icon](../../game-studio/media/hand-icon.png) をクリックし、カメラをリンクするモデルを持つエンティティを選択してください。

    ![Select an entity](../../animation/media/select-an-entity-window.png)

    または、**Target** フィールドを空白にしておきます。**エンティティツリー**で、アニメーションさせたい**カメラエンティティ**を、モデルを含むエンティティにドラッグします。Stride は、エンティティを親エンティティのモデルにリンクします。

    ![Parent and child](media/parent-and-child.png)

5. **Node Name** フィールドで、カメラをリンクしたいノードを選択してください。

    ![Node link](media/select-node.png)

    >[!Note]
    >リンク先のエンティティは、モデルが実行時に表示されない場合ても、スケルトンを持つモデルを持っている必要があります。

<!--
1. In the **Asset View**, select the model you want to link the camera to. Next to **Skeleton**, make sure a skeleton is specified that matches the model.

2. Make sure the entity you want to attach the camera to has the model, animation clip, and animation script components needed to animate it.

    >[!Note]
    >For instructions about how to add these, see [Animation](../../animation/index.md).

3. With the camera entity selected, in the **Property Grid**, click **Add component** and select **Model node link**.

    ![Add component](../../particles/tutorials/media/add-model-node-link.png)

    >[!Note]
    >The [TransformComponent](xref:Stride.Engine.TransformComponent) applies an offset to the model node position. If you don't want to add an offset, make sure the [TransformComponent](xref:Stride.Engine.TransformComponent) is set to `0,0,0`.

    Game Studio adds a model link component to the entity.

    ![Model node link component](../../animation/media/model-node-component.png)

4. Next to **Target**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) and select the entity that has the model you want to link the camera to.

    ![Select an entity](../../animation/media/select-an-entity-window.png)

    Alternatively, leave the **Target** field blank. In the **Entity Tree**, drag the **camera entity** you want to animate to the entity that contains the model. Stride links the entity to the model on the parent entity.

    ![Parent and child](media/parent-and-child.png)

5. In **Node name**, select the node you want to link the camera to.

    ![Node link](media/select-node.png)

    >[!Note]
    >The entity you link to must have a model with a skeleton, even if the model isn't visible at runtime.
-->

実行時に、カメラはアニメーションを使用します。
<!--
At runtime, the camera uses the animation.
-->

## 関連項目
<!--
## See also
-->

* [カメラ](index.md)
* [モデルノードリンク](../../animation/model-node-links.md)
* [アニメーション](../../animation/index.md)
* [アニメーション スクリプト](../../animation/animation-scripts.md)

<!--
* [Cameras](index.md)
* [Model node links](../../animation/model-node-links.md)
* [Animation](../../animation/index.md)
* [Animation scripts](../../animation/animation-scripts.md)
-->