# モデルノードリンク
<!--
# Model node links
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
-->

>[!Note]
> Stride の一部のバージョンでは、**モデルノードリンク**を**ボーンリンク**と呼ぶこともあります。
<!--
>>[!Note]
>In some versions of Stride, **Model node links** are called **Bone links**.
-->

**モデルノードリンク**コンポーネントは、あるエンティティを別のエンティティ上のスケルトンのノードにアタッチします。
<!--
The **model node link** component attaches an entity to a node of a skeleton on another entity.
-->

例えば、騎士と剣という2つのモデルがあるとします。騎士は、剣を振るアニメーションを持っています。モデルリンクノードを使って剣を騎士にリンクし、騎士のスケルトンの手のノードにアタッチすることで、騎士のアニメーションにあわせて剣を振ることができるようになります。
<!--
For example, imagine you have two models: a knight, and a sword. The character has a sword swinging animation. You can use a model link node to place the sword in the knight's hand and attach it to the correct node in the knight skeleton, so the sword swings with the knight animation.
-->

<p>
<video autoplay loop class="responsive-video" poster="../particles/tutorials/media/sword-slash-1.jpg">
   <source src="../particles/tutorials/media/sword-slash-1.mp4" type="video/mp4">
</video>
</p>

## モデルノードリンクのセットアップ
<!--
## Set up a model node link component
-->

1. **シーンエディター**で、別のエンティティにリンクしたいエンティティ（先述の例で言えば剣）を選択します。
2. **プロパティグリッド**で、**[Add component]** をクリックし、[**Model Node Link**] を選択します。

    ![Add component](../particles/tutorials/media/add-model-node-link.png)

    Game Studio は、モデルノードリンクコンポーネントをこのエンティティに追加します。

    ![Model node link component](media/model-node-component.png)

    このコンポーネントには、**Node Name** と **Target** という2つのプロパティがあります。
3. **Target** の横にある ![Hand icon](../game-studio/media/hand-icon.png) をクリックします。

    すると、**Select an entity** ウィンドウが開きます。

    ![Select an entity](media/select-an-entity-window.png)
4. エンティティをリンクしたいモデル（先述の例で言えば剣士）を選択して、**[OK]** をクリックします。

    >[!Note]
    >このエンティティは、実行時には表示されない場合でも、スケルトンを持つモデルを持っている必要があります。

    >[!Tip]
    >モデルを指定しない場合、Stride はエンティティをその親のエンティティのモデルにリンクします。
5. **Node Name** で、このエンティティをアタッチしたいモデルの中のノード（先述の例で言えば、剣士モデルの中の手ノード）を選択します。

    ![Select node](media/select-node.png)

    ノードにリンクした後は、Entity Tree で、エンティティ名の横に青い色でリンクが表示されます。

    ![Model node link](media/model-node-link-sword-added.png)


<!--
1. In the **Scene Editor**, select the entity you want to link to a node in another entity.

2. In the **Property Grid**, click **Add component** and select **Model node link**.

    ![Add component](../particles/tutorials/media/add-model-node-link.png)

    Game Studio adds a model node link component to the entity.

    ![Model node link component](media/model-node-component.png)

    The component only has two properties: **Node name** and **Target**.

3. Next to **Target**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png).

    The **Select an entity** window opens.

    ![Select an entity](media/select-an-entity-window.png)

4. Select the model you want to link the entity to and click **OK**.

    >[!Note]
    >The entity you link to must have a model with a skeleton, even if the model isn't visible at runtime.

    >[!Tip]
    >If you don't specify a model, Stride links the entity to the model on the parent entity.

5. In **Node name**, select the node in the model you want to attach this entity to.

    ![Select node](media/select-node.png)

    After you link the node, the Entity Tree shows the link in blue next to the entity name.
    
    ![Model node link](media/model-node-link-sword-added.png)
-->

## オフセット
<!--
## Offset
-->

リンクしたエンティティにオフセットを追加するには、エンティティの [TransformComponent](xref:Stride.Engine.TransformComponent) を使います。
<!--
To add an offset to the linked entity, use the entity's [TransformComponent](xref:Stride.Engine.TransformComponent).
-->

![Transform](media/transform-component.png)

>[!Note]
>オフセットを追加したくない場合は、値がすべて `0,0,0` に設定されていることを確認してください。
<!--
>[!Note]
>If you don't want to add an offset, make sure the values are all set to `0,0,0`.
-->

## 関連項目
<!--
## See also
-->

* [アニメーションのインポート](import-animations.md)
* [アニメーション プロパティ](animation-properties.md)
* [アニメーションのセットアップ](set-up-animations.md)
* [アニメーションのプレビュー](preview-animations.md)
* [アニメーション スクリプト](animation-scripts.md)
* [加算アニメーション](additive-animation.md)
* [プロシージャル アニメーション](procedural-animation.md)
* [カスタム ブレンド ツリー](custom-blend-trees.md)
* [カスタム属性](custom-attributes.md)

<!--
* [Import animations](import-animations.md)
* [Animation properties](animation-properties.md)
* [Set up animations](set-up-animations.md)
* [Preview animations](preview-animations.md)
* [Animation scripts](animation-scripts.md)
* [Additive animation](additive-animation.md)
* [Procedural animation](procedural-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [custom attributes](custom-attributes.md)
-->

モデルノードリンクの使用例については、以下を参照してください。

* [チュートリアル：軌跡の作成](../particles/tutorials/create-a-trail.md)
* [カメラ：モデルファイルを使ったカメラのアニメーション](../graphics/cameras/animate-a-camera-with-a-model-file.md)

<!--
For examples of how model node links are used, see:

* [Particles — Create a trail](../particles/tutorials/create-a-trail.md)
* [Cameras — Animate a camera with a model file](../graphics/cameras/animate-a-camera-with-a-model-file.md)
-->
