# パッケージの使用
<!--
# Consume packages
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>
-->

## プロジェクトを Visual Studio で開く
<!--
## Open your project in Visual Studio
-->

> [!Note]
> Game Studio は将来、NuGet パッケージの追加を直接サポートする予定です。

<!--
> [!Note]
> Game Studio will later support adding NuGet packages directly.
-->

はじめに、すべての変更を保存した後、Visual Studio でプロジェクトを開きます。これは、ツールバーの適切なボタンをクリックすることで簡単に行うことができます。
<!--
First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:
-->

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

## 参照を追加する
<!--
## Add a reference
-->

1. **ソリューションエクスプローラー**で、プロジェクトを右クリックして [**NuGet パッケージの管理**] を選択します。

   ![Visual Studio Start button](media/manage-nuget-packages.png)

2. ここでは、`Stride.AssetPack.BuildingBlocks` パッケージを使うものとしましょう。
   * [**パッケージ ソース**] で `nuget.org` または `すべて` を選択します。
   * [**プレリリースを含める**] がオンになっていることを確認してください。
   * [**参照**] タブに移動します。
   * Stride アセットパッケージ（ここでは **Stride.AssetPack.BuildingBlocks**）を [**検索**] し、[**インストール**] を選択します。

   ![Install package](media/install-package.png)

3. Visual Studio プロジェクトを保存します。

<!--
1. In the **Solution Explorer**, right-click on the project and click on **Manage NuGet Packages...**

   ![Visual Studio Start button](media/manage-nuget-packages.png)

2. For our example, let's use `Stride.AssetPack.BuildingBlocks` package:
   * Choose "nuget.org" or "All" as the **Package source**
   * Make sure **Include prerelease** is checked (if necessary)
   * Go to the **Browse** tab
   * **Search** for a Stride asset package (i.e. **Stride.AssetPack.BuildingBlocks**) and select **Install**

   ![Install package](media/install-package.png)

3. Save the Visual Studio project.
-->

## Game Studio でアセットを使う
<!--
## Use assets in Game Studio
-->

1. **Game Studio**で、[**File**] > [**Reload project**] を選択します。

2. これで、参照されているプロジェクトとそのアセットが **ソリューションエクスプローラー** に表示されるようになります。

   ![Use package](media/use-package-from-game-studio.png)

<!--
1. In **Game Studio**, go to the **File** menu and select **Reload project**

2. You should now be able to see the referenced project and its assets in **Solution explorer**

   ![Use package](media/use-package-from-game-studio.png)
-->

> [!Note]
> これらのアセットは読み取り専用なので、シーンにドラッグ＆ドロップすることはできません。これは近日中に修正される予定です。
> その間も、アセットセレクターを使って、既存のモデルやマテリアルの参照をアセットパックのものに変更することができます。

<!--
> [!Note]
> Those assets are readonly and as such can't be dragged and dropped into the scene. This will be fixed soon.
> In the meantime, you can still use the asset selector to change an existing model or material reference to one from the asset pack.
-->
