# Stride をインストールする

<span class="label label-doc-level">初級</span>

1. Stride インストーラー (**StrideSetup.exe**) を [Stride の Web サイト](http://stride3d.net/download/)からダウンロードします。

2. **StrideSetup.exe** ファイルをダブルクリックします。

    **Stride セットアップ ウィザード**が開きます。

3. Stride には .NET Framework 4.7.2 が必要です。ない場合は、インストールを求めるメッセージが表示されます。

    ![Prerequisites installer](media/prerequisites-installer.png)

   ［Next］をクリックしてプロンプトに従います。

    > [!NOTE]
    > または、[.NET Framework を Microsoft ダウンロード センターからダウンロード](https://www.microsoft.com/ja-jp/download/details.aspx?id=53345)して、Stride インストーラーを再実行してもかまいません。

4. **Stride セットアップ ウィザード**が開きます。

    ![Stride Setup Wizard](media/install-stride-setup-wizard.png)

    ［Next］をクリックします。

   ［Stride License Agreement］ウィンドウが開きます。

    ![Stride license agreement window](media/install-stride-license-agreement.png)

   ［Accept］をクリックします。

5. ［Stride installation type］ウィンドウが開きます。

    ![Stride installation type window](media/install-stride-installation-type.png)

    インストールの種類を選択し、［Next］をクリックします。

6. ［Select installation folder］ウィンドウが開きます。

    ![Select installation folder window](media/install-stride-select-installation-folder.png)

    Stride をインストールするフォルダーを選択し、［Next］をクリックします。

7. ［Create application shortcuts］ウィンドウが開きます。

    ![Create application shortcuts window](media/install-stride-create-application-shortcuts.png)

    作成するショートカットを選択し、［Next］をクリックします。

8. ［Ready to Install］ウィンドウが開きます。

    ![Ready to install window](media/install-stride-ready-to-install.png)

   ［Install］をクリックします。

9. インストールが開始します。

    ![Installation status](media/install-stride-installation-status.png)

    インストーラーが閉じた後、選択した場所にショートカットが作成されて、**Stride Launcher** が開きます。

    ![Stride Launcher](media/stride-launcher.png)

    最新バージョンの Stride のインストールを求めるメッセージが表示されます。

    ![No version installed](media/stride-launcher-install-last-version.png)

   ［Yes］をクリックします。

10. Visual Studio 統合をインストールするかどうかの確認を求めるメッセージが表示されます。Visual Studio 統合機能を使用すると、Visual Studio から直接シェーダーを編集でき、構文の強調表示、検証でのライブ コード分析、エラー チェック、ナビゲーションなどが提供されます。統合機能のインストールは必須ではありませんが、インストールすることをお勧めします。

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

11. Stride によるコンピューターの変更の許可を求めるメッセージが表示されます。

    ![Prerequisites installer](media/prerequsites-installer2.png)

   ［Yes］をクリックします。

12. 前提条件である **Visual C++ 再頒布可能パッケージ**がインストールされているかどうかがチェックされます。インストールされていない場合は、メッセージに従ってインストールします。

13. 前提条件である **Visual Studio Build Tools** がインストールされているかどうかがチェックされます。Visual Studio がある場合は、既にインストールされています。インストールされていない場合は、メッセージに従ってインストールします。

    ![Installing VS build tools](media/installing-vs-build-tools.png)

    >[!NOTE]
    > Windows は Visual Studio インストーラーを使用して **Visual Studio Build Tools** をインストールしますが、Visual Studio はインストールしません。

Stride がインストールされて使用できる状態になります。

>[!NOTE]

> 前提条件をインストールしないと、Stride は動きません。その場合は、前提条件を個別にダウンロードしてインストールできます。方法については、「[トラブルシューティング — Stride が実行しない](../troubleshooting/stride-doesnt-run.md)」を参照してください。

> または、Stride をアンインストールし、Stride インストーラーを再実行して、メッセージが表示されたら前提条件をインストールします。

## 次に学習すること

* [Stride を起動する](launch-stride.md)
