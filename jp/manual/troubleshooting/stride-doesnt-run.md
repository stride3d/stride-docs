# Stride が実行しない

Stride の実行で問題がある場合は、すべての前提条件がインストールされていることを確認します。

* .NET Framework 4.6.2
* Visual C++ 再頒布可能パッケージ 2015 または 2017
* Visual Studio Build Tools

または、Stride をアンインストールし、Stride インストーラーを再実行して、メッセージが表示されたら前提条件をインストールします。

## .NET Framework 4.6.2

.NET Framework 4.6.2 がインストールされているかどうか確認するには、［コントロール パネル］>［プログラム］>［プログラムと機能］で、**.NET 4.6.2** を含むエントリを探します。

![Programs and features](media/programs-and-features.png)

インストールされていない場合は、[Microsoft ダウンロード センター](https://www.microsoft.com/ja-jp/download/details.aspx?id=53345)からダウンロードできます。

> [!NOTE]
> Visual Studio をインストールする場合は、.Net Framework のサポートも忘れずにインストールします。Visual Studio の基本インストールだけでは十分ではありません。

## Visual C++ 再頒布可能パッケージ 2015 または 2017

Visual C++ 再頒布可能パッケージがインストールされているかどうか確認するには、［コントロール パネル］>［プログラム］>［プログラムと機能］で、**2015 Redistributable** または **2017 Redistributable** を探します。

![Programs and features](media/programs-and-features-redistributable.png)

インストールされていない場合は、［Visual Studio のダウンロード](https://www.visualstudio.com/downloads/) ([その他ツール及びフレームワーク］の下) から 2017 再頒布可能パッケージをダウンロードできます。

## Visual Studio Build Tools

Visual Studio がインストールされていない場合は、**Visual Studio Build Tools** をインストールする必要があります。［Visual Studio のダウンロード](https://www.visualstudio.com/downloads/) ([その他ツール及びフレームワーク］の下) からダウンロードできます。

> [!NOTE]
> Windows は、Visual Studio インストーラーを使用して、前提条件の Visual C++ 再頒布可能パッケージと Visual Studio Build Tools をインストールします。Visual Studio が必要ない場合はインストールされません。
>![Installing VS build tools](../get-started/media/installing-vs-build-tools.png)

## 関連項目

* [Stride をインストールする](../get-started/install-stride.md)
