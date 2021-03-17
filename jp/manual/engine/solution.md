# ソリューション
<!--
# Solution
-->

<div class="doc-incomplete"/>

Stride Studio では、**ソリューションエクスプローラー**にゲームの階層が表示されます。
<!--
In Stride Studio, the **Solution Explorer** displays the hierarchy of your game.
-->

各パッケージの内容は、2つのカテゴリに分類されています。ローカルパッケージと外部パッケージです。ローカルパッケージはユーザーが作成したものであり、外部パッケージはインターネットからダウンロードしたものです。パッケージファイル（```.sdpkg```）を開くと、ローカルパッケージのカテゴリのパッケージが1つだけ表示されます。ソリューションファイル（```.sln```）を開くと、そのソリューションに複数のパッケージが含まれている場合、それらを見ることができます。
<!--
The content of each package is grouped into two categories: Local packages and External packages. Local packages are the ones that you have created. External packages are the one that you have downloaded from the Internet; for example, the default Stride package. If you open a package file (```.sdpkg```), a single package of the local package category is visible. If you open a solution file (```.sln```) and the solution contains more that one package, you can see several packages.
-->

各パッケージには、次の3つの基本要素が含まれています。
<!--
Each package contains the following three base elements:
-->

* Assets: Assets 要素には、パッケージ内のすべてのアセットが含まれています。Assets 要素を展開すると、ファイルシステム上にあるアセットに沿って同じ階層を表示することができます。**Assets** フォルダを選択すると、**アセットビュー**には、このフォルダに含まれているアセットが表示されます。

* Code: Code 要素には、パッケージ内のコードライブラリと実行ファイルが含まれています。それぞれが1つの ```.csproj``` ファイルに対応しています。実行ファイルを右クリックすることで、その実行ファイルを現在のプロジェクトとして選択することができます。これにより、関連するプラットフォーム用のアセットをコンパイルし、ゲームを起動することができます。

* Dependencies: Dependencies 要素には、パッケージによって参照される他のすべてのパッケージが含まれています。**依存関係**リストにあるパッケージは、このパッケージからアクセス可能なアセットを持っています。


<!--
* Assets: The assets element comprises all the assets contained in a package. You can expand the Assets element to see the same hierarchy among the assets that is on the file system. When you select the **Assets** folder, the **Asset View** displays the assets contained in this folder.

* Code: The code element contains the code libraries and executables in the package. Each of them corresponds to a single ```.csproj``` file. By right-clicking an executable, you can set it as the current project. This action enables you to compile the assets for the related platform and launch the game.

* Dependencies: The dependencies element lists all the other packages that are referenced by a package. The packages in the **Dependencies** list have their assets accessible to this package.
-->

>[!Note]
>**ソリューションエクスプローラ**では、フォルダを作成したり、オブジェクトの名前を変更したり削除したりすることで、階層を変更することができます。

<!--
>[!Note]
>You can change the hierarchy in the **Solution Explorer** by creating folders and renaming or deleting objects.
-->

Stride は、Visual Studio のソリューションファイルを使って、ゲームに関連するすべてのパッケージとコードプロジェクトをリストアップします。このように、Stride Studio と Visual Studio は同じルートファイルを使用するため、両者は簡単に統合することができます。既定では、Stride Studio は新しいプロジェクトを作成する際に新しいソリューションファイルを作成し、C# プロジェクトとパッケージの両方への参照を管理します。
<!--
Stride uses Visual Studio solution files to list all the packages and code project related to a game. Thus, you can easily integrate Stride Studio and Visual Studio for your project because they use the same root file. By default, Stride Studio creates a new solution file when you create a new project, and manages references to both C# projects and packages.
-->
