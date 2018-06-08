# Linux 用ゲームを作成する

>[!NOTE]
>以下の説明を読む前に、「[Linux - セットアップと要件](setup-and-requirements.md)」の説明に従ってください。

1. Xenko Launcher で、新しいゲームを作成し、ターゲット プラットフォームとして Linux を選択します。

    ![New Game](media/platform_choice.png)

2. Game Studio のプラットフォーム メニューで［Linux］を選択します。

    ![Platform Selector](media/platform_selector.png)

3. **F5** キーを押し、プロジェクトをビルドして実行します。

4. プロジェクトを初めて実行するときは、Linux ホストに関する情報を入力します。

    ![Credential Dialog](media/default_credential_dialog.png)

    次のように情報を入力します。

    ![Filled Credential Dialog](media/filled_credential_dialog.png)

5. ［Test settings］をクリックして資格情報をテストします。

    エラーが発生した場合は、次のように表示されます。

    ![Invalid Settings](media/unreachable_host.png)

    資格情報が正しい場合は、次のように表示されます。

    ![Success](media/successful_login.png)

   ［OK］ボタンをクリックして続行します。

    Linux ホストの指定した場所のサブディレクトリに、ファイルがコピーされます。サブディレクトリの名前は、ゲームの名前です。

    問題がある場合は、［Output］ペインで詳細を確認します。

## 設定

資格情報は［Settings］ダイアログで保存されます。

![Settings Dialog](media/remote_settings.png)

パスワードは、現在のユーザーに対して Microsoft *System.Security.Cryptograph.ProtectedData.Protect* メソッドを使用して暗号化され、［Settings］には Base64 で保存されたものが表示されます。［Settings］ダイアログでパスワードを変更することはできません。

ゲームの実行を制御する 2 つの追加設定があります。

* ［Use CoreCLR］: .NET Core を使用して強制的に実行します。

* ［X Display］: Linux ホストの特定の X ディスプレイで強制的に実行します。

## Game Studio の外でコンパイルする

他の Xenko プロジェクトと同様に、Visual Studio またはコマンド ラインから直接プロジェクトをコンパイルすることもできます。どちらの場合も、有効な構成を選択する必要があります。

* Debug
* Release
* CoreCLR_Debug
* CoreCLR_Release

Debug と Release のターゲットは Mono です。他のターゲットは .NET Core です。

### Visual Studio

プロジェクトを Visual Studio にロードした後、Linux プロジェクトを選択します。［Solution Configurations］ドロップダウン メニューで、有効な Linux の構成を選択します。

![Configuration selection](media/vs_configuration_selection.png)

### MSBuild

Linux 用にコンパイルするには、コマンド ラインから次のコマンドを使用します。

```
msbuild /p:Platform=Linux /p:Configuration=CONFIG YourGame.sln
```

**CONFIG** は有効な Linux の構成です。

## 制限事項

* ファシリティのデバッグはまだできません

* レンダリング グラフィックス プラットフォームを切り替えると、ゲームが起動時にハングする可能性があります。これを回避するには、Linux ホストのゲームが展開されているディレクトリで、次のディレクトリを削除します。

    * `cache`
    * `local`
    * `roaming`

## 関連項目

* [Linux - セットアップと要件](setup-and-requirements.md)
