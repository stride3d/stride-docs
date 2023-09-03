# アセットの制御
<!--
# Asset control
-->

>[!Warning]
>このセクションの内容はもう古いので、参考程度に使ってください。
<!--
>>[!Warning]
>This section is out of date. For now, you should only use it for reference.
-->

これまでは、ゲームパッケージのアセットとその依存関係は、すべてがゲームの一部としてコンパイルされていました。
<!--
Until now, all assets of a game package, and its dependencies, were compiled as part of your game.
-->

1.3からは、ゲームに必要なアセットだけがコンパイルされます。
<!--
Starting with 1.3, we compile only the assets required by your game.
-->

ご心配なく、作業の大半は自動的に行われます。Stride は、新しいゲームセッティングアセットから依存関係を収集します。ゲームセッティングアセットは既定のシーンを参照しているので、必要なアセット参照（スクリプトから参照したいモデル、マテリアル、アセットなど）を、簡単に探することができます。
<!--
Don’t worry, most of it is done automatically for you! We do that by starting to collect dependencies from the new Game Setting asset: it references the Default Scene, and we can easily detect all the required asset references (Models, Materials, Asset referenced by your scripts and so on).
-->

スクリプトで Content.Load を使って何かをロードしていた場合でも、これらのアセットには、エディターで "Mark as Root" というタグを付けることができます。
<!--
In case you were loading anything in your script using Content.Load, you can still tag those assets specifically with “Mark as Root” in the editor.
-->

しかし今では、代わりに、スクリプトでフィールドを作成し、エディターで直接記入するという方法を推奨しています。すべてのサンプルコードはこの新しい方法に更新されていますので、ぜひチェックしてみてください。
<!--
However, we now recommend to instead create a field in your script and fill it directly in the editor. All the samples have been updated to this new practice, so please check them out.
-->

## どのアセットがコンパイルされる？
<!--
## Which assets are compiled?
-->

プロジェクトでコンパイルされてパッケージ化されるアセットは、以下の通りです。

- **ルートアセット（青）**
  - いくつかのアセット（ゲームセッティング、シェーダーなど）では**自動**
  - "**Mark as Root**" が明示的に指定されたアセット
- **ルートアセットの依存関係（緑）**
  - ゲームセッティングが収集されるということは、既定のシーンとその依存関係も同じようにコンパイルされるということを意味します（モデルや、他のアセットを指すスクリプトフィールドメンバーなども含まれます）。
  - また、スクリプトは、（"Mark as Root" を必要とする）Content.Loadから、エディター内でドラッグ＆ドロップで設定することができるフィールドメンバーに切り替えることをお勧めします。これにより、暗黙の依存関係が作られ、そのアセットも強制的にコンパイルされるようになります。
- **その他すべて（白）**（ルートとしてマークされていないオブジェクトで、かつ、ルートから直接または間接的に参照されていないもの）は、**パッケージ化されません**。

<!--
Assets that will be compiled and packaged in your project are:

- **Root assets (blue)**
  - **Automatic** for a few asset types (i.e. Game Settings, Shaders)
  - Explicit (using "**Mark as Root**" on the asset)
- **Dependencies of root assets (green)**
  - Since Game Settings is collected, that means that Default Scene and all its dependencies will be compiled as well (includes Model, Script field members pointing to other assets, etc...)
  - Also, we encourage our users to switch your script from Content.Load (which require "Mark as Root") to a field member that you can set within the editor using drag and drop. That will create an implicit dependency that will force that asset to be compiled as well.
- **Everything else (white)** (objects not marked as root and not referenced directly or indirectly by a root) **won't be packaged**
-->

![media/26968245.png](media/26968245.png) 

## "Mark as root"
<!--
## "Mark as root"
-->

覚えておくべき重要なことは、"Mark as root" は、アセットの一部ではなく、「現在の」パッケージ（ソリューションエクスプローラーで太字になっているもの）に格納されている、ということです。
<!--
One important thing to understand is that "Mark as root" is not part of the asset, it is stored in the "current" package (the one that is in bold in the Solution Explorer).
-->

つまり、現在のパッケージが "MyGame" のとき、シルバーマテリアル（SharedPackage の一部）上で "Mark as Root" にチェックを入れると、その情報が SharedPackage への参照のひとつとして MyGame.sdpkg に格納されるということです。
<!--
It means that if "MyGame" is current package, if you check "Mark as Root" on Silver Material (part of SharedPackage), this information will be stored in MyGame.sdpkg as part of the reference to SharedPackage.
-->

その結果、複数のゲームから、それぞれが異なる明示的なルートを持っている場合でも、共有パッケージを利用することができます。
<!--
As a result, you can use a shared package from multiple games even if you have different explicit roots.
-->

## 関連項目
<!--
## See also
-->

アセット管理についての詳細は、[アセットの管理](../../game-studio/manage-assets.md)を参照してください。
<!--
For additional information about asset management, see [Manage Assets](../../game-studio/manage-assets.md)
-->
