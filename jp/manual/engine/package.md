# パッケージ
<!--
# Package
-->

<div class="doc-incomplete"/>

Stride はパッケージシステムを採用しており、各ゲームはパッケージの中に入っています。ゲームは、他のパッケージのコンテンツを利用することもできます。そのため、複数のゲーム間でリソースを共有することが可能になります。
<!--
Stride uses a package system, wherein each game is contained in a package; a game can also use content from other packages. Thus, sharing resources across multiple games becomes possible.
-->

パッケージは、以下に対するコンテナです。

* ゲーム アセット
* コード ライブラリ
* 依存関係

<!--
A package is a container for:

* Game assets
* Code libraries
* Dependencies
-->

依存関係とは、あるパッケージから別のパッケージへの参照のことで、別のパッケージがこのパッケージのコンテンツを使用できるようにします。パッケージがゲームである場合、ゲームアセット、コードライブラリ、依存関係に加えて、コード実行ファイル（プラットフォームごとに1つ）も含まれます。
<!--
A dependency is a reference from one package to another package, which allows another package to use the contents from this package. When a package is a game, it also contains code executables (one per platform) along with game assets, code libraries, and dependencies.
-->

パッケージは、ハードディスクに ``.sdpkg``` という拡張子で保存されます。
<!--
Packages are saved on your hard-disk with the ```.sdpkg``` extension.
-->