# アセット バンドル
<!--
# Asset bundles
-->

>[!Warning]
>このセクションの内容はもう古いので、参考程度に使ってください。
<!--
>[!Warning]
>This section is out of date. For now, you should only use it for reference.
-->

アセットのバンドルとは、特定のタイミングでゲームにダウンロードすることができる単一のアーカイブにアセットをパッケージ化したものです。
<!--
A bundle of assets allows to package assets into a single archive that can be downloaded into the game at a specific time.
-->

これにより、**ダウンロードコンテンツ（DLC）** を作ることができます。
<!--
It allows creation of **Downloadable Content (DLC)**.
-->

基本ルール：

- プロジェクトは複数のバンドルを生成することができます。
- 複数の**アセットセレクター**からバンドルを作成できます（現在は `PathSelector` と `TagSelector` だけがサポートされています）。
- バンドルは、他のバンドルに依存することができます。
- すべてのバンドルは `default` バンドルを暗黙的に参照します。このバンドルには、個別のバンドルに入れるべきではないアセットがすべてパッケージ化されています。
- バンドルがゲーム内にデプロイされると、そのバンドルのすべてのアセットとすべての依存関係がアクセス可能になります。
- バンドルの解決はバンドルのダウンロードを行う非同期コールバックを介して行われます。コールバックは、依存関係ごとに一度だけ呼び出されます（AssemblyResolveイベントに似ています）。

<!--
Basic rules:

- A project can generate several bundle.
- A bundle is created from several **assets selectors**  (Currently, only the `PathSelector` and `TagSelector` are supported)
- A bundle can have dependencies to others bundles
- Every bundle implicitly references `default` bundle, where every asset which shouldn't go in a specific bundle will be packaged
- Once a bundle is deployed into the game, all assets from this bundle and all its dependencies are accessible
- Bundle resolution is done through an asynchronous callback that allows you to download bundle, and will be called once per dependency (similar to AssemblyResolve event).
-->

# バンドルを作成する
<!--
# Create a bundle
-->

> [!Note]
> 現在のところ、作成にはいくつかの手作業が必要です（言い換えれば、`sdpkg` を手で編集する必要があります）。
<!--
>> [!Note]
> Creating currently requires some manual steps (i.e. editing `sdpkg` by hand).
-->

ゲーム実行ファイルの `sdprj` ファイルを開き、以下の設定を追加します。
<!--
Open the `sdprj` file of the game executable and add the following configuration:
-->

例：

- `MyBundleName` という名前のバンドルは、`MyTag1` と `MyTag2` というタグを持つアセットを持っています。
- `MyBundleName2` という名前のバンドルは、`MyTag3` と `MyTag4` というタグを持つアセットを持っています。このバンドルは、`MyBundleName` に依存しています。

<!--
Example:

- A bundle named `MyBundleName` will embed assets with tags `MyTag1` and `MyTag2`
- A bundle named `MyBundleName2` will embed assets with tags `MyTag3` and `MyTag4`. This bundle has a dependency to `MyBundleName`
- There is also a `PathSelector` which follow the `.gitignore` filtering convention.
-->
 

```cs
Bundles:
 - Name: MyBundleName
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag1
        - MyTag2
 - Name: MyBundleName2
   Dependencies:
    - MyBundleName
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag3
        - MyTag4
    - !PathSelector
      Paths:
        - folder1/
        - /folder2/
        - *.bin
        - folder3/*.xml
```

> [!Note]
> 
> アセットの依存関係は、最も適切なバンドルの中に自動的に配置されます。
> 
> 現在のプロセスは以下のように機能します。
> 
> - 特定のタグセレクタ（バンドルアセットの "roots"）に一致するアセットを検索します。
> - それらの "roots" バンドルアセットに依存しているアセットを列挙して、"roots" アセットと同じバンドルに入れます。
>   - パッケージの依存関係のいずれかから既にアクセス可能である場合を除きます（例：共有依存パッケージやデフォルトパッケージ）。
> - 他のすべてのものを `default` バンドルに配置します。
> 
> 注意：
> 
> - 共有アセットは、特に共通パッケージやデフォルトパッケージに配置されていない場合に複製されることがありますが、それは意図された動作です（例えば、共通アセットを使用するユーザーが、自己完結する必要がある2つの別個の DLC を配布したい場合など）。
> - すべてのバンドルは、暗黙のうちに `default` バンドルに依存しています。
> 
>      

<!--
> [!Note]
> 
> Asset dependencies are automatically placed in the most appropriate bundle.
> 
> Current process works that way:
> 
> - Find assets that matches specific Tag Selectors ("roots" of bundle assets).
> - Enumerate assets that are dependent on those "roots" bundle assets and put them in the same bundle than their "roots" asset.
>   - Except if already accessible through one of package dependencies (i.e. a shared dependent package or default package).
> - Place everything else in default bundle.
> 
> Note that:
> 
> - Shared assets might be duplicated if not specifically placed in common or default package, but that is intended (i.e. if user wishes to distribute 2 separate DLC that need common assets but need to be self-contained).
> - Every bundle implicitly depends on default bundle.
> 
>      
-->

# 実行時にバンドルを読み込む
<!--
# Load a bundle at runtime
-->

バンドルの読み込みは、`ObjectDatabase.LoadBundle(string bundleName) (ref:{Stride.Core.Storage.ObjectDatabase.LoadBundle})` で行います。
<!--
Loading bundle is done through `ObjectDatabase.LoadBundle(string bundleName) (ref:{Stride.Core.Storage.ObjectDatabase.LoadBundle})`:
-->

```cs
// バンドルを読み込む
Assets.DatabaseFileProvider.ObjectDatabase.LoadBundle("MyBundleName2");
 
// 特定のアセットを読み込む
var texture = Assets.Load<Texture2D>("AssetContainedInMyBundleName2");
```

<!--
```cs
// Load bundle
Assets.DatabaseFileProvider.ObjectDatabase.LoadBundle("MyBundleName2");
 
// Load specified asset
var texture = Assets.Load<Texture2D>("AssetContainedInMyBundleName2");
```
-->

# セレクター
<!--
# Selectors
-->

セレクターは、バンドルに格納されているアセットを選択することに役立ちます。
<!--
Selectors help deciding which assets are stored in a specific bundle.
-->

## タグセレクター
<!--
## Tag selector
-->

アセットにアタッチされているタグのリストをもとに、アセットを選択します。

プロパティ：

- Tags: タグのリスト。1つ以上のタグを含むアセットが選択されます。

<!--
Select assets based on a list of tag attached on each asset.

Properties:

- Tags: List of Tags. Any asset that contains at least one of the tag will be included.
-->

## パスセレクター
<!--
## Path selector
-->

パスをもとに、アセットを選択します。

標準的な .gitignore パターンがサポートされています（ただし、!（否定）、#（コメント）、\[0-9]（グループ）は除きます）。

プロパティ：

- Paths: フィルターのリスト。1つ以上のフィルタに適合するURLを持つアセットが選択されます。

<!--
Select assets based on their path.

Standard .gitignore patterns are supported (except ! (negate), # (comments) and \[0-9\] (groups)).

Properties:

- Paths: List of filters. Any asset whose URL matches one of the filter will be included.
-->
