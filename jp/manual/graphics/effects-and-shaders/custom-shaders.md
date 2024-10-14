# カスタムシェーダー
<!--
# Custom shaders
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
-->

Visual Studio で独自のシェーダーを書いて、[マテリアル属性](../materials/material-attributes.md)で使うことができます。例えば、オブジェクトのワールド位置に基づいてマテリアルにテクスチャーを追加するシェーダーを書いたり、ノイズを生成してマテリアルのプロパティをランダム化することに使ったりすることができます。
<!--
You can write your own shaders in Visual Studio and use them in [material attributes](../materials/material-attributes.md). For example, you can write a shader to add textures to materials based on the objects' world positions, or generate noise and use it to randomize material properties.
-->

シェーダーはテキストファイルなので、他のコードファイルと同じようにコメントを追加したり、コードの行を有効にしたり無効にしたりと、編集することができます。そのため、メンテナンスや作業の繰り返しが容易です。
<!--
As shaders are text files, you can add comments, enable and disable lines of code, and edit them like any other code file. This makes them easy to maintain and iterate.
-->

また、カスタムシェーダーを使用して、カスタムポストエフェクトを作成することもできます。詳しくは、[カスタム色変換](../post-effects/color-transforms/custom-color-transforms.md)をご覧ください。
<!--
You can also use custom shaders to create custom post effects. For more information, see [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md).
-->

## シェーダーを作成する
<!--
## Create a shader
-->

1. [Stride Visual Studio 拡張機能](../../get-started/visual-studio-extension.md)がインストールされていることを確認してください。SDSL（[Stride シェーディング言語](index.md)）のシェーダーファイルを`.cs`ファイルに変換するために必要です。

2. Game Studio のツールバーの ![Open in IDE](../../get-started/media/launch-your-game-ide-icon.png)（**Open in IDE**）をクリックして、プロジェクトを Visual Studio で開きます。

3. Visual Studio の **ソリューション エクスプローラー**で、プロジェクト（例：*MyGame.Game*）を右クリックし、[**追加**] > [**新しい項目**] を選択します。

    ![New item](media/new-item.png)

4. **クラス** を選択します。

    ![Select class](media/select-class.png)

5. **名前**を指定します。拡張子を `.cs` から `.sdsl` に変更して（例：*MyShader.sdsl*）、[**追加**] をクリックします。

    ![Select class](media/rename-file.png)

    すると、Stride Visual Studio 拡張機能が、`.sdsl` ファイルから `.cs` ファイルを自動生成します。ソリューション エクスプローラーでは、生成された `.cs` ファイルが `.sdsl` ファイルの子として追加されているのを確認することができます。

    ![My shader](media/my-shader.png)

6. `.sdsl` ファイルを開き、既存の内容を消去し、あなたのシェーダーを記述します。

    シェーダーは、HLSL をベースにした Stride Shading Language（SDSL）で記述します。詳しくは[シェーディング言語](shading-language/index.md)をご覧ください。

    例として、緑色（`RGBA 0;1;0;1`）を生成するシェーダーを次に示します。
    
    ```cs
    namespace MyGame
    {
        shader MyShader : ComputeColor
        {
            override float4 Compute()
            {
                return float4(0, 1, 0, 1);
            }
        };
    }
    ```

    >[!Note]
    >シェーダーの名前（例：上記の `MyShader` の部分）がファイル名と同じであることを確認してください。

    >[!Note]
    >Game Studio のプロパティグリッドからアクセスできるように、シェーダーは `ComputeColor` を継承する必要があります。
    >`ComputeColor` は常に float4 の値を返すので、float の値が必要なプロパティ（metalnessやgloss マップなど）は、`ComputeColor` が返す float4 値の第一成分（赤の成分）を使用します。
    
7. ソリューションのすべてのファイルを保存します（[**ファイル**] > [**すべて保存**]）。

8. Game Studio で次のようなメッセージが表示されるので、[**Reload**] をクリックして、ファイルを再読み込みします。

    ![Reload assemblies](../../particles/tutorials/media/reload-assemblies.png)

    **アセットビュー**に、スクリプトと同じディレクトリ（例：**MyGame.Game**）にあるシェーダーが表示されます。

    ![Shader in Asset View](media/shader-in-asset-view.png)

    >[!Note]
    >下のスクリーンショットのように、Game Studio がシェーダーを誤ってスクリプトと認識してしまう場合があります。
    
    >![Shader as script](media/shader-as-script-in-asset-view.png) 
    
    >この場合、Game Studio を再起動してください（[**File**] > [**Reload project**]).

<!--
1. Make sure you have the [Stride Visual Studio extension](../../get-started/visual-studio-extension.md) installed. This is necessary to convert the shader files from SDSL ([Stride shading language](index.md)) to `.cs` files.

2. In Game Studio, in the toolbar, click ![Open in IDE](../../get-started/media/launch-your-game-ide-icon.png) (**Open in IDE**) to open your project in Visual Studio.

3. In the Visual Studio **Solution Explorer**, right-click the project (eg *MyGame.Game*) and select **Add > New item**.

    ![New item](media/new-item.png)

4. Select **Class**.

    ![Select class](media/select-class.png)

5. In the **Name** field, specify a name with the extension **.sdsl** (eg *MyShader.sdsl*), and click **Add**.

    ![Select class](media/rename-file.png)

    The Stride Visual Studio extension automatically generates a `.cs` file from the `.sdsl` file. The Solution Explorer lists it as a child of the `.xskl` file.

    ![My shader](media/my-shader.png)

6. Open the `.sdsl` file, remove the existing lines, and write your shader.

    Shaders are written in Stride Shading Language (SDSL), which is based on HLSL. For more information, see [Shading language](index.md).

    For example, this shader creates a green color (`RGBA 0;1;0;1`):

    ```cs
    namespace MyGame
    {
        shader MyShader : ComputeColor
        {
            override float4 Compute()
            {
                return float4(0, 1, 0, 1);
            }
        };
    }
    ```

    >[!Note]
    >Make sure the shader name in the file (eg `MyShader` above) is the same as the filename.

    >[!Note]
    >To be accessible from the Game Studio Property Grid, the shader must inherit from `ComputeColor`.
    >As '`ComputeColor` always returns a float4 value, properties that take float values (eg metalness and gloss maps) use the first component (the red component) of the value returned by `ComputeColor`. 

7. Save all the files in the solution (**File > Save All**).

8. In Game Studio, reload the assemblies.

    ![Reload assemblies](../../particles/tutorials/media/reload-assemblies.png)

    The **Asset View** lists the shader in the same directory as your scripts (eg **MyGame.Game**).

    ![Shader in Asset View](media/shader-in-asset-view.png)

    >[!Note]
    >In some situations, Game Studio incorrectly identifies the shader as a script, as in the screenshot below:
    
    >![Shader as script](media/shader-as-script-in-asset-view.png) 
    
    >If this happens, restart Game Studio (**File > Reload project**).
-->

## カスタムシェーダーを使う
<!--
## Use a custom shader
-->

カスタムシェーダーは、任意の[マテリアル属性](../materials/material-attributes.md)で使用することができます。
<!--
You can use custom shaders in any [material attribute](../materials/material-attributes.md).
-->

1. **アセットビュー**で、シェーダーを適用したいマテリアルを選択します。

2. **プロパティグリッド**で、シェーダーを適用したいプロパティの横にある ![Blue arrow button](../../game-studio/media/blue-arrow-icon.png)（**Change**）をクリックし、**Shader** を選択します。

    ![Select Shader](media/select-shader.png)

3. フィールド欄に、カスタムシェーダーの名前（*MyShader* など）を入力します。

    ![Type shader](media/type-shader.png)

    そのプロパティは、指定したシェーダーを使用します。

<!--
1. In the **Asset View**, select the material you want to use the shader in.

2. In the **Property Grid**, next to the property you want to control with the shader, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Change**) and select **Shader**.

    ![Select Shader](media/select-shader.png)

3. In the field, type the name of your shader (eg *MyShader*).

    ![Type shader](media/type-shader.png)

    The property uses the shader you specify.
-->

> [!Tip]
> Visual Studioで `.sdsl` ファイルに変更を加えて保存すると、Game Studio は自動的にプロジェクトを変更して更新します。これが起こらない場合は、Game Studio を再起動してください（[**File**] > [**Reload project**]）。

<!--
> [!Tip]
> When you make a change to the `.sdsl` file in Visual Studio and save it, Game Studio automatically updates the project with your changes. If this doesn't happen, restart Game Studio (**File > Reload project**).
-->

> [!Note]
> プロジェクトのアセットからシェーダーを削除した場合、エラーを防ぐために、シェーダーを使用するマテリアルのプロパティからもシェーダーを削除してください。

<!--
> [!Note]
> If you delete a shader from the project assets, to prevent errors, make sure you also remove it from the properties of materials that use it.
-->

## 引数とパラメーター
<!--
## Arguments and parameters
-->

### テンプレート引数
<!--
### Template arguments
-->

[テンプレート引数](shading-language/templates.md)（ジェネリック）は、実行時には変更されません。ただし、異なるマテリアルは、異なるシェーダーのインスタンスを異なる値で使用することができます。
<!--
[Template arguments](shading-language/templates.md) (generics) don't change at runtime. However, different materials can use different instances of the shader with different values.
-->

シェーダーがコンパイルされる際に、Stride は、テンプレートの引数に対応してプロパティグリッドで設定されている値を使用します。
<!--
When the shaders are compiled, Stride substitutes template arguments with the value you set in the Property Grid.
-->

例えば、次のコードでは、テンプレート引数 `Frequency` を定義し、使用しています。
<!--
For example, the code below defines and uses the template argument `Frequency`:
-->

```cs
shader ComputeColorWave<float Frequency> : ComputeColor, Texturing
{
    override float4 Compute()
   {           
        return sin((Global.Time) * 2 * 3.14 * Frequency);
    }
};
```

![Template argument](media/template-argument.png)

### パラメーター
<!--
### Parameters
-->

パラメーターは、実行時の変更が可能です。
<!--
Parameters can be changed at runtime.
-->

例えば，次のコードでは，動的パラメータ `Frequency` を定義し、使用しています。
<!--
For example, the code below defines and uses the dynamic parameter `Frequency`:
-->

```cs
shader ComputeColorWave: ComputeColor, Texturing
{
    cbuffer PerMaterial
    {
        stage float Frequency = 1.0f;
    }

    override float4 Compute()
    {
        return sin(( Global.Time ) * 2 * 3.14 * Frequency);
    }
};
```

実行時に値を変更するために、マテリアルのパラメーターコレクションにアクセスしてそこに設定します。例えば、`Frequency` を変更する場合は、次のようにします。
<!--
To modify the value at runtime, access and set it in the material parameter collection. For example, to change the `Frequency`, use:
-->

```cs
myMaterial.Passes[myPassIndex].Parameters.Set(ComputeColorWaveKeys.Frequency, MyFrequency);
```

> [!Note]
> `ComputeColorWaveKeys.Frequency` は、Stride Visual Studio 拡張機能によってシェーダーファイルから生成されます。

<!--
> [!Note]
> `ComputeColorWaveKeys.Frequency` is generated by the Stride Visual Studio extension from the shader file.
-->

### コンポジション
<!--
### Compositions
-->

この[コンポジション](shading-language/composition.md)では、Game Studio のプロパティグリッドから `Frequency` を設定することができます。
<!--
This [composition](shading-language/composition.md) lets you set the `Frequency` in the Game Studio Property Grid:
-->

```cs
shader ComputeColorWave : ComputeColor, Texturing
{
    compose ComputeColor Frequency;

    override float4 Compute()
    {
        return sin(( Global.Time ) * 2 * 3.14 * Frequency.Compute().r);
    }
};
```

これで、マテリアルのプロパティに値を設定できます。
<!--
Then you can set the value in the material properties:
-->

![Select shader](media/use-computecolorwave-shader.png)

## カスタムシェーダーの例
<!--
## Custom shader sample
-->

カスタムシェーダーの例として、Stride に同梱されている **custom material shader** サンプルプロジェクトを参照してみてください。
<!--
For an example of a custom shader, see the **custom material shader** sample project included with Stride.
-->

![Sample project](media/custom-shader-sample-project.png)

このプロジェクトでは、**ComputeColorWaveNormal** シェーダが**ディスプレイスメントマップ**と**サーフェス**のマテリアルプロパティに使用されています。
<!--
In the project, the **ComputeColorWaveNormal** shader is used in the **displacement map** and **surface** material properties.
-->

## 関連項目
<!--
## See also
-->

* [シェーディング言語](shading-language/index.md)
* [カスタム色変換](../post-effects/color-transforms/custom-color-transforms.md)
* [マテリアル属性](../materials/material-attributes.md)
* [Stride Visual Studio 拡張機能](../../get-started/visual-studio-extension.md)

<!--
* [Shading language](shading-language/index.md)
* [Custom color transforms](../post-effects/color-transforms/custom-color-transforms.md)
* [Material attributes](../materials/material-attributes.md)
* [Stride Visual Studio extension](../../get-started/visual-studio-extension.md)
-->