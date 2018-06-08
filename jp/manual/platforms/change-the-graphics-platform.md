# グラフィックス プラットフォームを変更する

<span class="label label-doc-level">初級</span>

**グラフィックス プラットフォーム**は、プロジェクトを実行するデバイスのグラフィックス ハードウェアを制御します。デバイスが異なると、サポートされるグラフィックス プラットフォームも異なります。たとえば、iOS は OpenGL ES グラフィックス プラットフォームをサポートします。ゲームで使用するグラフィックス プラットフォームを選択し、異なるプラットフォーム (Windows、Android など) に対するオーバーライドを追加できます。

グラフィックス プラットフォームは [Game Settings](../game-studio/game-settings.md) アセットで設定します。

> [!NOTE]
> 使用するグラフィックス プラットフォーム用の最新のドライバーがあることを確認してください。

1. ［Asset view］で **Game Settings** アセットを選択します。

    ![Game settings asset](media/games-settings-asset.png)

2. ［Property grid］の［Rendering Settings］>［Target graphics platform］で、使用するグラフィックス プラットフォームを選択します。

    ![Select graphics platform](media/change-graphics-platform.png)

   ［Default］を選択すると、ビルド時にプラットフォーム (Windows、Android など) に適したグラフィックス プラットフォームが使用されます。

| プラットフォーム      | 既定のグラフィックス プラットフォーム |
|---------------|---------------------------|
| Windows、UWP  | Direct3D11                |
| Linux、Mac OS | OpenGL                    |
| その他         | OpenGL ES                 |

## グラフィックス プラットフォームをオーバーライドする

特定のプラットフォームに対して使用されるグラフィックス プラットフォームをオーバーライドできます。たとえば、Linux では Vulkan を使用し、他のプラットフォームでは既定のグラフィックス プラットフォームを使用するといったことができます。

1. **GameSettings** アセットを選択し、［Property grid］の［Overrides］で ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (［Add a new item to the list］) をクリックします。

    ![Select graphics platform](media/add-override.png)

    オーバーライドが追加されます。

2. 新しいオーバーライドの［Platforms］で、そのオーバーライドを適用するプラットフォームを選択します。

    ![Select graphics platform override](media/select-override-platform.png)

3. ［Configuration］ドロップダウン メニューで、［Rendering Settings］を選択します。

    ![Select graphics platform override](media/select-override-configuration.png)

4. ［Rendering Settings］の［Preferred Graphics Platform］ドロップダウン メニューで、使用するグラフィックス プラットフォームを選択します。

    ![Select graphics platform override](media/select-override-graphics-platform.png)

選択したプラットフォームのグラフィックス プラットフォームがオーバーライドされます。

## プロジェクトが使用するグラフィックス プラットフォームを確認する

1. ゲームのコード (スクリプト内など) にブレーク ポイントを追加します。
2. プロジェクトを実行します。
3. [GraphicsDevice.Platform](xref:SiliconStudio.Xenko.Graphics.GraphicsDevice.Platform) 変数の値を調べます。

    たとえば、このプロジェクトは Vulkan を使用しています。

    ![Select graphics platform](media/check-platform-at-runtime.png)

## 関連項目

* [プラットフォームの索引](index.md)
* [ゲームの設定](../game-studio/game-settings.md)
