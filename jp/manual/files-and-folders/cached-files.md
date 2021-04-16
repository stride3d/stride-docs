# キャッシュされたファイル
<!--
# Cached files
-->

プロジェクトをビルドすると、Stride はプロジェクト内のいくつかのフォルダにアセットとコードをキャッシュします。
<!--
When you build your project, Stride caches the assets and code in folders inside the project.
-->

次のような場合は、キャッシュを削除した方がいいかもしれません。

* キャッシュがディスクの容量を使いすぎている。

* アセットを編集または削除してもゲーム内でアセットが更新されない。

<!--
You might want to clean the cache if:

* the cache is taking up too much space on disk

* assets don't update in-game after you edit or delete them
-->

## Visual Studio でキャッシュを削除する
<!--
## Clean the cache from Visual Studio
-->

1. コードキャッシュを削除するには、[**ビルド**] > [**ソリューションのクリーン**] を選択します。

    ![Clean solution](media/clean-solution.png)

2. [Stride の Visual Studio 拡張機能](../get-started/visual-studio-extension.md)がインストールしてあれば、アセットキャッシュも削除することができます。[**拡張機能**] > [**Stride**] > [**Clean intermediate assets for Solution**] を選択します。

    ![Clean solution](media/clean-assets.png)

3. キャッシュをゼロから再構築するには、プロジェクトをリビルドします。

<!--
1. To clean the code cache, under **Build**, select **Clean Solution**.

    ![Clean solution](media/clean-solution.png)

2. If you have the [Stride Visual Studio extension](../get-started/visual-studio-extension.md) installed, you can also clean the asset cache. To do this, under **Stride**, select **Clean intermediate assets for Solution**.

    ![Clean solution](media/clean-assets.png)

3. Rebuild the project to rebuild the cache from scratch.
-->

## 手動でキャッシュを削除する
<!--
## Clean the cache manually
-->

Visual Studio でのキャッシュの削除がうまくいかない場合は、手動でファイルを削除してみてください。
<!--
If cleaning the cache from Visual Studio doesn't work, try deleting the files manually.
-->

1. 以下のフォルダを削除します。

    * バイナリキャッシュ： *~/MyGame/MyGame/Bin*

    * アセットキャッシュ： *~/MyGame/MyGame/Cache*

    * ゲームのプラットフォームフォルダーの中にある **obj** フォルダー（例：*~/MyGame.iOS/obj*）

2. Mac を使って iOS 向けに開発している場合は、*~/Library/Caches/Xamarin/mtbs/builds/MyGame* も削除してください。

3. キャッシュをゼロから再構築するには、プロジェクトをリビルドします。

<!--
1. Delete the following folders:

    * the binary cache: *~/MyGame/MyGame/Bin*

    * the asset cache: *~/MyGame/MyGame/Cache*

    * the **obj** folders in the platform folders for your game (eg *~/MyGame.iOS/obj*)

2. If you're developing for iOS, on your Mac, also delete: *~/Library/Caches/Xamarin/mtbs/builds/MyGame*

3. Rebuild the project to rebuild the cache from scratch.
-->

## Game Studio のキャッシュを削除する
<!--
## Clear the Game Studio caches
-->

Stride は、プロジェクト用のキャッシュの他に、Game Studio のエディター用のキャッシュも保持しています。
<!--
In addition to the caches Stride creates for your project, Game Studio keeps caches for the editor.
-->

### アセットキャッシュ
<!--
### Asset cache
-->

エディターでのアセットの読み込みを高速化するために、Game Studio はアセット参照のキャッシュを保持します。このキャッシュには、すべてのプロジェクトで読み込まれたすべてのアセットに関するデータが含まれます。これはすなわち、時間の経過とともに非常に大きくなる可能性があることを意味しています。
<!--
To speed up asset loading in the editor, Game Studio saves a cache of asset references. It contains data about every asset ever loaded in every project. This means it can grow very large over time.
-->

既定では、そのフォルダーは *%temp%/Stride* の中にあります。
<!--
By default, the folder is in: *%temp%/Stride*
-->

>[!Tip]
>Game Studio のキャッシュの保存先を確認または変更するには、[**Edit**] > [**Settings**] > [**Environment**] > [**Build cache directory**] を参照してください。
>
>![Settings](media/settings-window.png)

<!--
>[!Tip]
>To check or change where Game Studio saves the cache, see **Edit > Settings > Environment > Build cache directory.**
>![Settings](media/settings-window.png)
-->

キャッシュを削除するには、このフォルダーを削除して Game Studio を再起動してください。
<!--
To clean the cache, delete the folder and run Game Studio again.
-->

### セッティングキャッシュ
<!--
### Settings cache
-->

Game Studio は、エディターの情報（ウィンドウの位置や最近開いたプロジェクトなど）を、*%AppData%/Stride* の中に保存します。
<!--
Game Studio saves editor information (such as window positions and recently-opened projects) in: *%AppData%/Stride*
-->

また、Game Studio は、開いているタブやエディターのカメラ位置の情報を、プロジェクトフォルダ内の `.sdpkg.user` ファイルに保存します（例：*~/MyGame/MyGame/MyGame.sdpkg.user*）。
<!--
Game Studio also saves information about open tabs and the editor camera position in the `.sdpkg.user` file in the project folder (eg *~/MyGame/MyGame/MyGame.sdpkg.user*).
-->

これらのファイルは小さいですが、Game Studio の状態が悪くなったら削除した方がいいかもしれません。これらのファイルを削除しても、プロジェクトには何の影響もありません。
<!--
These files are small, but you might want to delete them if you get Game Studio into a bad state. Deleting them doesn't affect anything in your project.
-->

キャッシュファイルを削除した後に Game Studio を起動すると、既定の設定で新しいキャッシュが作成されます。
<!--
After you delete cache files, when you start Game Studio, it builds a new cache using the default settings.
-->

>[!Tip]
>[**Edit**] > [**Settings**] > [**Interface**] > [**Reset Game Studio layout**] で、キャッシュをクリアせずに Game Studio のレイアウトをリセットすることもできます。
>
>![Reset Game Studio layout](media/game-studio-layout-reset-button.png)

<!--
>[!Tip]
>You can also reset the Game Studio layout without clearing the cache in **Edit > Settings > Interface > Reset Game Studio layout**.
>![Reset Game Studio layout](media/game-studio-layout-reset-button.png)
-->

## 関連項目
<!--
## See also
-->

* [プロジェクトの構造](project-structure.md)
* [バージョン管理](version-control.md)

<!--
* [Project structure](project-structure.md)
* [Version control](version-control.md)
-->
