# グラフィックス プラットフォームの設定
<!--
# Set the graphics platform
-->

<span class="label label-doc-level">初級</span>
<!--
<span class="label label-doc-level">Beginner</span>
-->
**グラフィックス プラットフォーム**は、プロジェクトを実行するデバイスのグラフィックスハードウェアをコントロールします。例えば、iOS は OpenGL ES グラフィックスプラットフォームをサポートしていますが、デバイスによってサポートするグラフィックスプラットフォームは異なります。ゲームが使用するグラフィックプラットフォームを選択したり、異なるプラットフォーム（Windows や Android など）用のオーバーライドを追加することができます。
<!--
The **graphics platform** controls the graphics hardware in the device you run your project on. Different devices support different graphics platforms; for example, iOS supports the OpenGL ES graphics platform. You can select which graphics platform your game uses, and add overrides for different platforms (eg Windows, Android, etc).
-->

>[!Warning]
>Direct3D から旧バージョンの Direct3D に移行すると、問題が発生することがあります。例えば、ゲームに HDR テクスチャーが含まれている場合、これは Direct3D 9 ではサポートされていないため、クラッシュしてしまいます。

<!--
>[!Warning]
>Moving from Direct3D to an earlier Direct3D version can create problems. For example, if your game contains HDR textures, it will crash, as Direct3D 9 doesn't support them.
-->

グラフィックスプラットフォームの設定は、[ゲーム設定](../game-studio/game-settings.md)アセットで行います。
<!--
You set the graphics platform in the [game settings](../game-studio/game-settings.md) asset.
-->

> [!Note]
> 使用するグラフィックスプラットフォームの最新のドライバーがインストールされていることを確認してください。

<!--
> [!Note]
> Make sure you have the latest drivers for the graphics platforms you want to use.
-->

1. **アセットビュー**で、**Game Settings** アセットを選択します。

    ![Game settings asset](media/games-settings-asset.png)

2. プロパティグリッドで、[**Rendering Settings**] > [}}Target graphics platform**] を選択し、使用したいグラフィックスプラットフォームを選択します。

    ![Select graphics platform](media/change-graphics-platform.png)

    [**Default**] を選択した場合は、ビルド時に、プラットフォーム（Windows, Android など）に適したグラフィックスプラットフォームが使用されます。

<!--
1. In the **Asset View**, select the **Game Settings** asset.

    ![Game settings asset](media/games-settings-asset.png)

2. In the Property Grid, under **Rendering Settings > Target graphics platform**, select the graphics platform you want to use.

    ![Select graphics platform](media/change-graphics-platform.png)

    If you select **Default**, Stride uses the graphics platform appropriate for your platform (eg Windows, Android) when you build.
-->

| プラットフォーム| 既定のグラフィックスプラットフォーム
|---------------|-------------
| Windows, UWP  | Direct3D 11
| Linux, Mac OS | OpenGL
| その他         | OpenGL ES

<!--
| Platform      | Default graphics platform 
|---------------|-------------
| Windows, UWP  | Direct3D11  
| Linux, Mac OS | OpenGL    
| Other         | OpenGL ES  
-->

## グラフィックスプラットフォームのオーバーライド
<!--
## Override the graphics platform
-->

特定のプラットフォームで使用するグラフィックプラットフォームを、オーバーライド（上書き指定）することができます。例えば、Linux では Vulkan を、他のプラットフォームでは既定のものを使うように指定することができます。
<!--
You can override the graphics platform Stride uses for specific platforms. For example, you can have Linux use Vulkan while other platforms use the default.
-->

1. **Game Settings** アセットが選択された状態で、プロパティグリッドで [**Overrides**] の横にある ![Green plus button](../game-studio/media/green-plus-icon.png)（**追加**）をクリックします。

    ![Select graphics platform](media/add-override.png)

    すると、Game Studio がオーバーライドを追加します。

2. 新しく追加されたオーバーライドの [**Platforms**] で、このオーバーライドに適用したいプラットフォームを選択します。

    ![Select graphics platform override](media/select-override-platform.png)

3. **Configuration** ドロップダウンメニューで、[**Rendering Settings**] を選択します。

    ![Select graphics platform override](media/select-override-configuration.png)

4. [**Rendering Settings**] の下の [**Preferred Graphics Platform**] ドロップダウンメニューで、使用したいグラフィックスプラットフォームを選択します。

    ![Select graphics platform override](media/select-override-graphics-platform.png)

<!--
1. With the **GameSettings** asset selected, in the Property Grid, under **Overrides**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Select graphics platform](media/add-override.png)

    Game Studio adds an override.

2. In the new override, next to **Platforms**, select the platforms you want this override to apply to.

    ![Select graphics platform override](media/select-override-platform.png)

3. In the **Configuration** drop-down menu, select **Rendering Settings**.

    ![Select graphics platform override](media/select-override-configuration.png)

4. Under **Rendering Settings**, in the **Preferred Graphics Platform** drop-down menu, select the graphics platform you want to use.

    ![Select graphics platform override](media/select-override-graphics-platform.png)
-->

Stride は、そのプラットフォーム用のグラフィックスプラットフォームを、選択されたものに上書きします。
<!--
Stride overrides the graphics platform for the platforms you selected.
-->

## プロジェクトで使用しているグラフィックスプラットフォームを確認する
<!--
## Check which graphics platform your project uses
-->

1. ゲームコード（スクリプト内など）に、ブレークポイントを追加します。

2. プロジェクトを実行します。

3. [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) 変数の値を確認します。

    例えば、このプロジェクトでは Vulkan が使われていることが分かります。

    ![Select graphics platform](media/check-platform-at-runtime.png)

<!--
1. Add a break point to your game code (eg in a script).

2. Run the project. 

3. Check the value of the [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) variable.

    For example, this project is using Vulkan:

    ![Select graphics platform](media/check-platform-at-runtime.png)
-->

## 関連項目
<!--
## See also
-->

* [プラットフォーム](index.md)
* [ゲームの設定](../game-studio/game-settings.md)

<!--
* [Platforms index](index.md)
* [Game settings](../game-studio/game-settings.md)
-->
