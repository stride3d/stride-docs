# ゲームの起動

<span class="label label-doc-level">初級</span>

このページでは、Game Studio または Visual Studio を使用してゲームを起動する方法を説明します。

## Game Studio からゲームを起動する

> [!NOTE]
> Game Studio では、Windows ストア プラットフォーム用または UWP (ユニバーサル Windows プラットフォーム) プラットフォーム用のゲームは起動できません。これらのプラットフォーム用のゲームを起動するには、Visual Studio を使用します (後述)。

  1. **ツールバー**で、対象のプラットフォームを選択します。

      ![Platform selection](media/launch-your-game-game-studio-profiles.png)

      > [!NOTE]
      > プロジェクトを作成するときに［Create a new game］ダイアログで選択したプラットフォームだけを選択できます。プロジェクトに新しいプラットフォームを追加する方法については、「[プラットフォームを追加または削除する](../platforms/add-or-remove-a-platform.md)」を参照してください。

  2. ゲームを実行するには、ツールバーの ![Play icon](media/launch-your-game-play-icon.png) をクリックするか、または **F5** キーを押します。

      ![Game Studio play button](media/game-studio-toolbar-build-button.png)

 ［Output］ウィンドウに、ビルドの進行状況が表示されます。

  ![Output window](media/output-window.png)

  ビルドが完了すると、選択したプラットフォームでゲームが開始します。

## Visual Studio からゲームを起動する

1. Game Studio のツールバーで ![Open in IDE](media/launch-your-game-ide-icon.png) (［Open in IDE］) をクリックして、Visual Studio を起動します。

2. Visual Studio のツールバーで、スタートアップ プロジェクトとして適切なプロジェクトを設定します。

	![Select build profile in Visual Studio](media/launch-your-game-visual-studio-profiles.png)

   スタートアップ プロジェクトの構成が自動的に更新されます。

   > [!TIP]
   > 右側の［ソリューション エクスプローラー］で、プロジェクトを確認できます。プロジェクトのファイル名の拡張子が、プラットフォームを示します (例：*.Android*、*.iOS* など)。

3. 構成とプラットフォームが適切に対応していることを確認します。

4. * デバッグなしでゲームを開始するには、**Ctrl + F5** キーを押します。

   * デバッグありでゲームを開始するには、［スタート］をクリックするか、**F5** キーを押します。

      ![Visual Studio Start button](media/visual-studio-start-button.png)

## 境界を削除する

既定では、ゲームを実行するとウィンドウの境界が表示されます。

| 境界がある場合              | 境界がない場合
|---------------------------|-----------------
| ![With borders](media/with-borders.jpg)   | ![Without borders](media/without-borders.jpg)

境界なしでゲームを実行するには、次のコマンドを使用します。

```cs
Game.Window.IsBorderLess = true;
```

次に例を示します。

```cs
using Stride.Engine;

namespace MyGame
{
    public class MyScript : StartupScript
    {
        public override void Start()
        {
            base.Start();
            Game.Window.IsBorderLess = true;
        }
    }
}
```
