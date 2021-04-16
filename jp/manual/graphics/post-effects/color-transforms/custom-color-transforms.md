# カスタム色変換
<!--
# Custom color transforms
-->

<span class="label label-doc-level">上級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>
-->

Stride では、独自の**カスタム色変換**エフェクトを書くことができます。例えば、以下のものが作成できます。<!--
You can write your own **custom color transform** effects. For example, you can create:
-->

* カメラに付着した水滴
* 画面遷移（フェードイン、フェードアウトなど）
* 苦痛や酔いを感じさせるエフェクト（例：色合いやその他のエフェクトの適用）
* オブジェクトの輪郭

<!--
* water droplets on the camera
* screen transitions (such as fade-ins and fade-outs)
* effects simulating pain or intoxication (eg by applying tints or other effects)
* object outlines
-->

カスタム色変換を作成するには、2 つのファイルを記述する必要があります。エフェクトシェーダー（エフェクト自体を含む）と、C# クラス（Game Studio でエフェクトにアクセスできるようにするスクリプト）です。
<!--
To create a custom color transform, you need to write two files: an effect shader (containing the effect itself), and a C# class (to make the effect accessible in Game Studio).
-->

## 1. シェーダーを作成する
<!--
## 1. Create a shader
-->

1. [Stride Visual Studio 拡張機能](../../../get-started/visual-studio-extension.md)がインストールされていることを確認してください。この拡張機能は、シェーダーファイルを SDSL（[Stride シェーディング言語](../../effects-and-shaders/index.md)）から `.cs` ファイルに変換するために必要です。

2. Game Studio のツールバーで、![Open in IDE](../../../get-started/media/launch-your-game-ide-icon.png)（**Open in IDE**）をクリックし、Visual Studio でプロジェクトを開きます。

3. Visual Studio の**ソリューションエクスプローラー**で、プロジェクト（例：*MyGame.Game*）を右クリックし、[**追加**] > [**新しい項目**] を選択します。

    ![New item](../../effects-and-shaders/media/new-item.png)

4. [**クラス**] を選択します。

    ![Select class](../../effects-and-shaders/media/select-class.png)

5. [**名前**] 欄に、拡張子 **".sdsl"** を持つファイル名（例えば *MyColorTransformShader.sdsl*）を記述し、[**追加**] をクリックします。

    ![Create post effect](media/create-post-effect.png)

    Stride Visual Studio 拡張機能では、`.sdsl` ファイルから `.cs` ファイルを自動的に生成します。ソリューションエクスプローラーでは、`.sdsl` ファイルの子としてリストアップされます。

    ![My post effect](media/my-post-effect.png)

6. `.sdsl` ファイルを開いて、既存の行を削除し、シェーダーを記述します。

    シェーダーは、HLSL をベースにした Stride シェーディング言語（SDSL）で記述します。詳しくは[シェーディング言語](../../effects-and-shaders/effect-language.md)をご覧ください。
    
    例えば、以下のシェーダーは、画像の色に `MyColor` パラメータを乗算します。

    ```cs
    shader MyColorTransformShader : ColorTransformShader
    {
        [Color]
        float4 MyColor;

        override float4 Compute(float4 color)
        {
            return color * MyColor;
        }
    };
    ```
    >[!Note]
    >ファイル内のシェーダー名（上のコードでは `MyColorTransformShader`）と、ファイル名（例：*MyColorTransformShader.sdsl*）が同じであることを確認してください。

<!--
1. Make sure you have the [Stride Visual Studio extension](../../../get-started/visual-studio-extension.md) installed. This is necessary to convert the shader files from XSL ([Stride shading language](../../effects-and-shaders/index.md)) to `.cs` files.

2. In Game Studio, in the toolbar, click ![Open in IDE](../../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) to open your project in Visual Studio.

3. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **New item**.

    ![New item](../../effects-and-shaders/media/new-item.png)

4. Select **Class**.

    ![Select class](../../effects-and-shaders/media/select-class.png)

5. In the **Name** field, specify a name with the extension **.sdsl** (eg *MyColorTransformShader.sdsl*), and click **Add**.

    ![Create post effect](media/create-post-effect.png)

    The Stride Visual Studio extension automatically generates a `.cs` file from the `.sdsl` file. The Solution Explorer lists it as a child of the `.xskl` file.

    ![My post effect](media/my-post-effect.png)

6. Open the `.sdsl` file, remove the existing lines, and write your shader.

    Shaders are written in Stride Shading Language (XSL), which is based on HLSL. For more information, see [Shading language](index.md).

    For example, the shader below multiplies the image color by the `MyColor` parameter:

    ```cs
    shader MyColorTransformShader : ColorTransformShader
    {
        [Color]
        float4 MyColor;

        override float4 Compute(float4 color)
        {
            return color * MyColor;
        }
    };
    ```
    >[!Note]
    >Make sure the shader name in the file (eg `MyColorTransformShader` in the code above) is the same as the filename (eg *MyColorTransformShader.sdsl*).
-->

## 2. C# クラスを作成する
<!--
## 2. Create a C# class
-->

1. Visual Studio の**ソリューションエクスプローラー**で、プロジェクト（例：*MyGame.Game*）を右クリックし、[**追加**] > [**新しい項目**] を選択します。

    ![New item](../../effects-and-shaders/media/new-item.png)

2. [**クラス**] を選択し、[**名前**] を記述して（例：*MyColorTransform.cs*）、[**追加**]をクリックします。

    ![Add script](media/add-script.png)

    ファイルを開いて、クラスを書きます。

    例えば、以下のコードでは、シェーダーを使用して、色 `MyColor` （シェーダーで定義されている）の値を供給する `MyColorTransform` クラスを定義しています。
    
    ```cs
    using Stride.Core;
    using Stride.Core.Mathematics;
    using Stride.Rendering;
    using Stride.Rendering.Images;

    namespace MyGame
    {
        [DataContract("MyColorTransform")]
        public class MyColorTransform : ColorTransform
        {
            /// <inheritdoc />
            public MyColorTransform() 
                : base("MyColorTransformShader")
            {
            }

            public Color4 MyColor { get; set; }

            public override void UpdateParameters(ColorTransformContext context)
            {
                Parameters.Set(MyColorTransformShaderKeys.MyColor, MyColor);

                // Copy parameters to parent
                base.UpdateParameters(context);
            }
        }
    }
    ```
    >[!Note]
    >ファイル内のクラス名（上のクラスの例では `MyColorTransform`）が、ファイル名（例：*MyColorTransform.cs*）と同じであることを確認してください。

3. ソリューションエクスプローラーで [**ファイル**] > [**すべて保存**] を選択して、すべてのファイルを保存します。

4. Game Studio でアセンブリを再読み込みします。

    ![Reload assemblies](../../../particles/tutorials/media/reload-assemblies.png)

    **アセットビュー** で、スクリプトと同じディレクトリに、先ほどのクラスと、エフェクトシェーダーが表示されます。

    ![Shader in Asset View](media/post-effect-shader.png)

    >[!Note]
    >以下のスクリーンショットのように、Game Studio がシェーダーをスクリプトとして誤って検出してしまう場合があります。

    >![Shader as script](media/broken-script-icon.png)
    
    >これが発生した場合は、Game Studio を再起動してください（[**File**] > [**Reload project**]）。

<!--
1. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **Add > New item**.

    ![New item](../../effects-and-shaders/media/new-item.png)

2. Select **Class**, specify a **name** (eg *MyColorTransform.cs*), and click **Add**.

    ![Add script](media/add-script.png)

    Open the file and write the class.

    For example, the code below creates the class `MyColorTransform`, which uses the shader and supplies a value for the color `MyColor` (defined in the shader).

    ```cs
    using Stride.Core;
    using Stride.Core.Mathematics;
    using Stride.Rendering;
    using Stride.Rendering.Images;

    namespace MyGame
    {
        [DataContract("MyColorTransform")]
        public class MyColorTransform : ColorTransform
        {
            /// <inheritdoc />
            public MyColorTransform() 
                : base("MyColorTransformShader")
            {
            }

            public Color4 MyColor { get; set; }

            public override void UpdateParameters(ColorTransformContext context)
            {
                Parameters.Set(MyColorTransformShaderKeys.MyColor, MyColor);

                // Copy parameters to parent
                base.UpdateParameters(context);
            }
        }
    }
    ```
    >[!Note]
    >Make sure the class name in the file (eg `MyColorTransform` in the class above) is the same as the filename (eg *MyColorTransform.cs*).

3. Save all the files in the solution (**File > Save All**).

4. In Game Studio, reload the assemblies.

    ![Reload assemblies](../../../particles/tutorials/media/reload-assemblies.png)

    The **Asset View** lists the class and effect shader in the same directory as your scripts (eg **MyGame.Game**).

    ![Shader in Asset View](media/post-effect-shader.png)

    >[!Note]
    >In some situations, Game Studio incorrectly detects the shader as a script, as in the screenshot below:

    >![Shader as script](media/broken-script-icon.png)
    
    >If this happens, restart Game Studio (**File > Reload project**).
-->

## 3. カスタム色変換を使用する
<!--
## 3. Use a custom color transform
-->

1. **アセットビュー**で、**グラフィックスコンポジター**アセットをダブルクリックします。

    ![Graphics Compositor asset](../../graphics-compositor/media/graphics-compositor-asset.png)

    すると、**グラフィックスコンポジターエディター**が開きます。

    ![Graphics Compositor editor](../../graphics-compositor/media/graphics-compositor-editor.png)

2. **Post-processing effects** ノードを選択します。

3. **プロパティグリッド**で、**Color transforms** の下部にある ![Green plus button](../../../game-studio/media/green-plus-icon.png)（**追加**）をクリックし、先ほど作成した色変換（例：**MyColorTransform**）を選択します。

    ![Add script](media/add-script-in-properties.png)

<!--
1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../../graphics-compositor/media/graphics-compositor-asset.png)

    The **graphics compositor editor** opens.

    ![Graphics Compositor editor](../../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **Post-processing effects** node.

3. In the **Property Grid**, under **Color transforms**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Change**) and select your color transform (eg **MyColorTransform**).

    ![Add script](media/add-script-in-properties.png)
-->

* エフェクトを有効または無効にするには、Item の横にあるチェックボックスを使います。

    ![Enable and disable custom post effect](media/enable-disable-custom-post-effect.png)

* 指定したクラスの public プロパティを編集するには、Item を展開します。

    ![Expand item](media/view-custom-post-fx-properties.png)

    プロパティを修正すると、Game Studio がそのエフェクトを自動的に更新します。

<!--
* To enable and disable the effect, use the check box next to the item.

    ![Enable and disable custom post effect](media/enable-disable-custom-post-effect.png)

* To edit the public properties you specified in the class, expand the item.

    ![Expand item](media/view-custom-post-fx-properties.png)

    When you adjust the properties, Game Studio updates the effect automatically.
-->

>[!Warning]
>残念ながら、Game Studio にはこの部分にメモリーリークの問題があります。グラフィックスコンポジターで値を変更するたびに、60MB のメモリを消費します。Game Studio がメモリを使いすぎないように、プロパティを何度か変更した後は Game Studio を再起動することをお勧めします。これは既知の問題です。

<!--
>[!Warning]
>Unfortunately, this part of Game Studio has a memory leak problem. Every time you change a value in the graphics compositor, it uses 60MB of memory. To prevent Game Studio using too much memory, we recommend you restart it after you change a property a few times. This is a known issue.
-->

## 関連項目
<!--
## See also
-->

* [シェーディング言語](../../effects-and-shaders/effect-language.md)
* [カスタムシェーダー](../../effects-and-shaders/custom-shaders.md)
* [グラフィックス コンポジター](../../graphics-compositor/index.md)
* [ポストエフェクト](../index.md)
* [色変換](index.md)
* [Stride Visual Studio 拡張機能](../../../get-started/visual-studio-extension.md)

<!--
* [Shading language](../../effects-and-shaders/index.md)
* [Custom shaders](../../effects-and-shaders/custom-shaders.md)
* [Graphics compositor](../../graphics-compositor/index.md)
* [Post effects](../index.md)
* [Color transforms](index.md)
* [Stride Visual Studio extension](../../../get-started/visual-studio-extension.md)
-->
