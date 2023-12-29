# Xbox Live

このページでは、Xbox Live で動作するようにプロジェクトを構成する方法について説明します。

## 1. 始める前に

1. プロジェクトがプラットフォームとして UWP を使用するように設定します。そのためには、次のいずれかのようにします。

    * [プロジェクトを作成](../../get-started/create-a-project.md)し、プラットフォームとして **UWP** を選択します
    * または、[既存のプロジェクトにプラットフォームとして **UWP** を追加](../add-or-remove-a-platform.md)します

    >[!TIP]
    >このチュートリアルでは、新しいプロジェクトを作成してプロセスをテストした後、その知識を既存のプロジェクトに応用することをお勧めします。

2. UWP からプロジェクトを実行できることを確認します。そのためには、［ソリューション プラットフォーム］ドロップダウン リストで目的のプラットフォーム (UWP-64、UWP-32、または UWP-ARM) を選択して、プロジェクトを実行します。

3. Xbox Live SDK をダウンロードします。

    このページを書くときは、XboxLiveSDK-1612-20170114-002 を使用しました。サンプルは、Xbox Live SDK の Achievements サンプルに基づいていますが、厳密ではありません。

4. Xbox Live の環境を変更します。［SDK］フォルダーの［Tools］で以下を実行します。

    ```
    SwitchSandbox.cmd XDKS.1
    ```

    XDKS.1 は、Microsoft のサンプルに使用されるサンドボックスです。

    >[!WARNING]
    >これを行うと、Xbox の通常のアカウントはブロックされて、開発者のアカウントだけが許可されるようになります。元に戻すには、次のコマンドを実行します。

    >```
    >SwitchSandbox.cmd RETAIL
    >```

5. 開発者アカウントで Achievements サンプルを実行できることを確認します。

## 2. Xbox Live SDK をソリューションに追加する

1. Visual Studio で、ゲームのソリューションを開きます。

2. ［パッケージ マネージャー コンソール］を開きます (［ツール］>［NuGet パッケージ マネージャー］> [パッケージ マネージャー コンソール］)。

3. ［既定のプロジェクト］フィールドで、UWP プロジェクト (*MyGame.UWP* など) を選択します。

	![MyGame.UWP](media/xboxlive01.png)

4. コンソールで次のように入力します。

    ```
    PM > Install-Package Microsoft.Xbox.Live.SDK.WinRT.UWP
    ```

    NuGet パッケージがプロジェクトに追加されます。

5. パッケージが［参照］の一覧に表示されることを確認します。

	![Package in list](media/xboxlive02.png)

## 3. UWP プロジェクトを構成する

1. *MyGame.UWP.TemporaryKey.pfx* を削除します。

2. *xboxservices.config* をプロジェクトに追加します。

    このファイルは、テスト用に Xbox Live SDK サンプル (Achievements サンプルなど) から入手できます。ゲームを公開するときは、**タイトル ID** と**サービス構成 ID** を実際のプロジェクトのものに変更します。詳細については、Xbox Live のドキュメントを参照してください。

3. *xboxservices.config* のプロパティで、［ビルド アクション］の［コンテンツ］を選択し、［出力ディレクトリにコピー］の［常にコピーする］を選択します。

	![Properties](media/xboxlive03.png)

4. *Package.appxmanifest* をプロジェクトの詳細に合わせて編集します。

    マニフェスト ファイルは、テスト用に Xbox Live SDK サンプル (Achievements サンプルなど) から使用できます。ゲームをストア アプリと関連付ける場合は、生成されたマニフェスト ファイルを使用します。詳細については、Xbox Live のドキュメントを参照してください。

5. *InternetClientServer* の機能が有効になっていることを確認します。

## 4. ユーザー アカウント スクリプトをゲームに追加する

Xbox Live SDK を公開することなく、ゲーム プロジェクトで Xbox Live の機能を有効にする必要があります。既に *MyGame.UWP* が *MyGame.Game* を参照しているので、ここで参照することはできません。代わりに、インターフェイスを作成し、UWP プロジェクト側から実装することができます。

>[!NOTE]
>これを行うには複数の方法があります。ここでは 1 つの方法について説明します。

1. 2 つのインターフェイス `IAccountManager` と `IConnectedAccount` をゲームに追加します。

2. UWP プロジェクト (*MyGame.UWP* など) で、インターフェイス `public class XboxAccount : IConnectedAccount` および `public class XboxLiveAccountManager : IAccountManager` を実装します。

3. 後でゲーム スクリプトからアクセスできるように、アカウント ファクトリをゲームに追加します。`MyGameMainPage.xaml.cs` に次の行を追加します。

    ```
    Game.Services.AddService(typeof(IAccountManager), new XboxLiveAccountManager());
    ```

    ![References](media/xboxlive04.png)

    最終的に、スクリプトは少なくとも次のような内容になります。

    ```
        public class LoginScript : AsyncScript
        {
            private IConnectedAccount account;

            public override async Task Execute()
            {
                var accountMgr = Services.GetServiceAs<IAccountManager>();
                account = accountMgr?.CreateConnectedAccount();
			    if (account == null)
				    return;

                var result = account.LoginAsync();

	    		// TODO ここにコードを追加する!
            }
        }
    ```

`xbox_live_user` 機能および他のクラスをゲームで公開できるようになります。

![Property grid](media/xboxlive05.png)

## サンプル プロジェクト

* Xbox Live のログイン機能で[サンプル プロジェクトをダウンロード](media/XboxLiveSample.zip)します

    ![Sample project](media/xboxlive08.png)

## 関連項目

* [プラットフォーム](../index.md)
