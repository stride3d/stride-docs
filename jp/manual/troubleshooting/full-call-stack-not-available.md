# 完全な呼び出し履歴を使用できない

Visual Studio の設定によっては、Stride で例外がスローされたときに、Visual Studio で Stride ランタイム .DLL ファイルまたは .NET Framework アセンブリからの呼び出し履歴のみが表示され、ユーザー コードの呼び出し履歴が表示されないことがあります。

例外がスローされたときにすぐに中断するには、追加の条件を Visual Studio の［例外設定］に追加します。

1. Visual Studio ツールバーの［デバッグ］メニューで、［ウィンドウ］>［例外設定］を選択します。

    ![Exception settings](media/exception-settings.png)

2. ［共通言語ランタイム例外］を展開し、［この一覧にないすべての共通言語ランタイム例外］を選択します。他の条件も選択することが必要な場合があります。

    ![All common language runtime exceptions not in this list](media/all-common-language-runtime-exceptions.png)

>[!TIP]
>例外の規定のリストに戻すには、右クリックして［既定値に戻す］を選択します。

Visual Studio での例外管理の詳細については、Microsoft Visual Studio のドキュメントの「[デバッガーでの例外の管理](https://msdn.microsoft.com/ja-jp/library/x85tt0dd.aspx)」を参照してください。
