# ゲームの配布

ゲームを公開する準備ができたら、Visual Studio でリリース ビルドを作成して、それを配布します。

## 1. リリース ビルドを作成する

1. 以前にリリース モードでゲームをビルドしてある場合は、プロジェクト フォルダー (例：*MyGame/Bin/MyPlatform/Release/*) で、*Data* フォルダーを削除します。このフォルダーには、古いバージョンのアセットなど、必要のないファイルが含まれていることがあるので、最初から再度ビルドするのが最も簡単な方法です。

2. Game Studio でプロジェクトを開きます。

3. ツール バーのドロップダウン メニューをクリックして、［Visual Studio］を選択します。

    ![Open in VS](media/open-in-visual-studio.png)

    プロジェクトが Visual Studio で開きます。

4. Visual Studio で、［ソリューション構成］ドロップダウン メニューから［リリース］を選択します。

    ![Select release](media/select-release.png)

5. ［ソリューション プラットフォーム］ドロップダウン メニューから、ビルドを作成する対象のプラットフォームを選択します。

    ![Select platform](media/select-platform.png)

    >[!NOTE]
    >
    >Stride プロジェクトに追加したプラットフォームに対してのみ、ビルドを作成できます。これを行う方法については、「[プラットフォームを追加または削除する](../platforms/add-or-remove-a-platform.md)」を参照してください。
    >
    >Android または iOS 用にビルドするには、Xamarin が必要です。Xamarin は Visual Studio のライセンスに含まれます。Visual Studio 2017 で Xamarin をインストールする方法については、[この MSDN ページ](https://docs.microsoft.com/ja-jp/visualstudio/cross-platform/setup-and-install)を参照してください。

6. ［ビルド］で［ソリューションのビルド］を選択します。

    ![Build solution](media/build-solution.png)

    プロジェクトのバイナリ フォルダー (例：*MyGame/Bin/MyPlatform/Release*) に、リリース ビルドが作成されます。

> [!TIP]
>［リリース］フォルダーをさらにわかりやすい名前 (ゲームのタイトルなど) に変更してもかまいません。

## 2. 不要なファイルを削除する

プロジェクトの bin フォルダーのリリース フォルダー (*MyGame/Bin/MyPlatform/Release* など) では、以下の不要なファイルを削除できます。

* `.pdb` ファイル (デバッグ情報)

* `.xml` ファイル (API ドキュメント)

* ファイル名に `vshost` が含まれるファイル (例: `MyGame.vshost.exe`、`MyGame5.vshost.exe.manifest`)

* `x64`、`x86`、`data` 以外のフォルダー

* カスタム構成ファイル (つまり、Stride で作成されないファイル) など、他の必要のないファイル

## 3. ゲームを配布する

リリース ビルドを作成した後は、目的に最も適した方法で配布します。

Stride で作成されたゲームを Windows で実行するには、次のものが必要です。

* .NET 4.6.1

* DirectX11 (Windows 10 以降に含まれます)、OpenGL、または Vulkan

* Visual C++ 2015 ランタイム (Visual Studio でのプロジェクトのプロパティの設定に応じて、x86 および x64 のどちらか一方または両方)

## 関連項目

* [プラットフォームを追加または削除する](../platforms/add-or-remove-a-platform.md)
* [バージョン管理](version-control.md)
* [プロジェクトの構造](project-structure.md)
