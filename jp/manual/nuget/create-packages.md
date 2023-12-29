# パッケージの作成
<!--
# Create packages
-->

<span class="badge text-bg-primary">中級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
-->

## プロジェクトを Visual Studio で開く
<!--
## Open your project in Visual Studio
-->

> [!Note]
> Game Studio は将来、NuGet パッケージの作成を直接サポートする予定です。

<!--
> [!Note]
> Game Studio will later support creating NuGet packages directly.
-->

はじめに、すべての変更を保存した後、Visual Studio でプロジェクトを開きます。これは、ツールバーの適切なボタンをクリックすることで簡単に行うことができます。
<!--
First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:
-->

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

いくつかの注意点があります。
* 不必要なアセットは削除してください。（例えば、GameSettings など)
* 不必要な `PackageReference` は削除してください。

<!--
A few things to look out for:
* Delete unecessary assets (i.e. GameSettings, etc...)
* Delete unecessary `PackageReference`
-->

## オプション： パッケージプロパティのセットアップ
<!--
## Optional: Setup Package properties
-->

1. **ソリューションエクスプローラー**で、プロジェクトを右クリックして [**プロパティ**] をクリックします。

2. [**パッケージ**] タブに移動して、パッケージ バージョン、説明、プロジェクト URL 等々を編集します。

   ![Setup package properties](media/setup-package-properties.png)

<!--
1. In the **Solution Explorer**, right-click on the project and click on **Properties**.

2. Go to the **Package** tab and edit Package version, description, URL, etc.

   ![Setup package properties](media/setup-package-properties.png)
-->

## パックする
<!--
## Pack
-->

1. **ソリューションエクスプローラー**で、プロジェクトを右クリックして [**パック**] をクリックします。

   ![Pack project](media/pack-project.png)

2. Visual Studio は、プロジェクトのビルドとパックを行います。生成される `.nupkg` は、`bin\Debug` か `bin\Release`、あるいはあなたの環境に依存した場所に出力されます。

<!--
1. In the **Solution Explorer**, right-click on the project and click on **Pack**.

   ![Pack project](media/pack-project.png)

2. Visual Studio will build and pack the project. The resulting `.nupkg` should be in `bin\Debug` or `bin\Release` folder, depending on your configuration.
-->

## 発行する
<!--
## Publish
-->

これで、[nuget.org](https://nuget.org) などの NuGet リポジトリで `.nupkg` ファイルを公開することができます。
<!--
You can now publish the `.nupkg` file on a NuGet repository such as [nuget.org](https://nuget.org).
-->

これを行う方法はいくつかあります。`nuget.exe` クライアントや `dotnet.exe` クライアント、[nuget.org Upload Package](https://www.nuget.org/packages/manage/upload) サイトです。
<!--
There is several ways to do that: `nuget.exe` client, `dotnet.exe` client or [nuget.org Upload Package](https://www.nuget.org/packages/manage/upload)
-->

詳細については、NuGet ドキュメントの [Publishing packages](https://docs.microsoft.com/ja-jp/nuget/nuget-org/publish-a-package)を参照してください。
<!--
For additional information, please reference to [Publishing packages](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package) in NuGet documentation.
-->

あなたのパッケージが適切にリストアップされると、他の Stride ユーザーがそのパッケージを[使用](consume-packages.md)することができるようになります！
<!--
Once your package is properly listed, it can now be [consumed](consume-packages.md) by other Stride users!
-->
