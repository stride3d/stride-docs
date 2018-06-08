# Xenko をインストールする

<span class="label label-doc-level">初級</span>

1. Xenko インストーラー (**XenkoSetup.exe**) を [Xenko の Web サイト](http://xenko.com/download/)からダウンロードします。

2. **XenkoSetup.exe** ファイルをダブルクリックします。

    **Xenko セットアップ ウィザード**が開きます。

3. Xenko には .NET Framework 4.6.2 が必要です。ない場合は、インストールを求めるメッセージが表示されます。

    ![Prerequisites installer](media/prerequisites-installer.png)

   ［Next］をクリックしてプロンプトに従います。

    > [!NOTE]
    > または、[.NET Framework を Microsoft ダウンロード センターからダウンロード](https://www.microsoft.com/ja-jp/download/details.aspx?id=53345)して、Xenko インストーラーを再実行してもかまいません。

4. **Xenko セットアップ ウィザード**が開きます。

    ![Xenko Setup Wizard](media/install-xenko-setup-wizard.png)

    ［Next］をクリックします。

   ［Xenko License Agreement］ウィンドウが開きます。

    ![Xenko license agreement window](media/install-xenko-license-agreement.png)

   ［Accept］をクリックします。

5. ［Xenko installation type］ウィンドウが開きます。

    ![Xenko installation type window](media/install-xenko-installation-type.png)

    インストールの種類を選択し、［Next］をクリックします。

6. ［Select installation folder］ウィンドウが開きます。

    ![Select installation folder window](media/install-xenko-select-installation-folder.png)

    Xenko をインストールするフォルダーを選択し、［Next］をクリックします。

7. ［Create application shortcuts］ウィンドウが開きます。

    ![Create application shortcuts window](media/install-xenko-create-application-shortcuts.png)

    作成するショートカットを選択し、［Next］をクリックします。

8. ［Ready to Install］ウィンドウが開きます。

    ![Ready to install window](media/install-xenko-ready-to-install.png)

   ［Install］をクリックします。

9. インストールが開始します。

    ![Installation status](media/install-xenko-installation-status.png)

    インストーラーが閉じた後、選択した場所にショートカットが作成されて、**Xenko Launcher** が開きます。

    ![Xenko Launcher](media/xenko-launcher.png)

    最新バージョンの Xenko のインストールを求めるメッセージが表示されます。

    ![No version installed](media/xenko-launcher-install-last-version.png)

   ［Yes］をクリックします。

10. Visual Studio 統合をインストールするかどうかの確認を求めるメッセージが表示されます。Visual Studio 統合機能を使用すると、Visual Studio から直接シェーダーを編集でき、構文の強調表示、検証でのライブ コード分析、エラー チェック、ナビゲーションなどが提供されます。統合機能のインストールは必須ではありませんが、インストールすることをお勧めします。

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

11. Xenko によるコンピューターの変更の許可を求めるメッセージが表示されます。

    ![Prerequisites installer](media/prerequsites-installer2.png)

   ［Yes］をクリックします。

12. 前提条件である **Visual C++ 再頒布可能パッケージ**がインストールされているかどうかがチェックされます。インストールされていない場合は、メッセージに従ってインストールします。

13. 前提条件である **Visual Studio Build Tools** がインストールされているかどうかがチェックされます。Visual Studio がある場合は、既にインストールされています。インストールされていない場合は、メッセージに従ってインストールします。

    ![Installing VS build tools](media/installing-vs-build-tools.png)

    >[!NOTE]
    > Windows は Visual Studio インストーラーを使用して **Visual Studio Build Tools** をインストールしますが、Visual Studio はインストールしません。

Xenko がインストールされて使用できる状態になります。

>[!NOTE]

> 前提条件をインストールしないと、Xenko は動きません。その場合は、前提条件を個別にダウンロードしてインストールできます。方法については、「[トラブルシューティング — Xenko が実行しない](../troubleshooting/xenko-doesnt-run.md)」を参照してください。

> または、Xenko をアンインストールし、Xenko インストーラーを再実行して、メッセージが表示されたら前提条件をインストールします。

## 次に学習すること

* [Xenko を起動する](launch-xenko.md)
