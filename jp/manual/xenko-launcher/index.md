# Xenko Launcher

<span class="label label-doc-level">初級</span>

**Xenko Launcher** を使用すると、異なるバージョンの Xenko をインストール、管理、実行できます。

![Xenko launcher](media/xenko-launcher-interface.png)

## 最新バージョンの Xenko をインストールする

Xenko がまだインストールされていない場合は、Xenko Launcher で最新バージョンのインストールを促されます。

![No version installed](../get-started/media/xenko-launcher-install-last-version.png)

［Switch/update version］セクション (**B**) で、他のバージョンの Xenko をインストールできます。そのためには、リストのバージョンの横にある［install］アイコンをクリックします。

## Xenko の Visual Studio 拡張機能をインストールする

最新バージョンの Xenko のインストールを選択すると、Visual Studio 拡張機能をインストールするかどうかの確認を求められます。

![Install Visual Studio integration](../get-started/media/install-VS-plug-in-prompt.png)

Visual Studio 拡張機能を使用すると、Visual Studio から直接シェーダーを編集でき、構文の強調表示、検証でのライブ コード分析、エラー チェック、ナビゲーション (定義へのジャンプ) などが提供されます。拡張機能のインストールは必須ではありませんが、お勧めします。

必要に応じて Visual Studio 拡張機能をインストールまたは再インストールするには、Xenko Launcher の［Reinstall］ボタンをクリックします。

![Visual Studio extension](media/xenko-launcher-visual-studio-plugin.png)

## Xenko のバージョンを切り替える

実行する Xenko のバージョンを選択するには、［Switch/update version］の一覧で選択します。

## さまざまなバージョンの Xenko を管理する

［Switch/update version］セクションで、複数のバージョンの Xenko をインストールおよびアンインストールできます。

![Manage versions of Xenko](../get-started/media/xenko-launcher-various-versions.png)

古いプロジェクトの作業には、古いバージョンの Xenko の使用が必要になる場合があります。新しいバージョンの Xenko には、古いプロジェクトをアップグレードする必要がある変更が含まれる可能性があります。

バージョン番号は、2 つの値で構成されています。最初の番号は**メジャー** バージョンで、次の番号は**マイナー** バージョンです。

メジャー更新では大きな変更が追加され、使用するにはプロジェクトの更新が必要になる場合があります。マイナー更新には互換性がなくなるような変更は含まれないので、既存のプロジェクトで使用しても安全です。

* 特定のバージョンのリリース ノートを見るには、バージョン名の隣にある**ノート アイコン**をクリックします (**A**)。

* 特定のバージョンをインストールするには、バージョン名の隣の［Download and install］アイコンを
クリックします (**D**)。

>[!NOTE]
>前のマイナー バージョンに戻すことはできません。たとえば、Xenko 1.9 と 1.8 の両方を同じ環境にインストールすることはできますが、Xenko 1.9.2 を Xenko 1.9.1 に戻すことはできません。

## Game Studio を開始する

1. ［Switch/update version］で、使用する Xenko のバージョンを選択します。

  ［Start］ボタンでバージョン番号が更新されます。

   ![Start button](media/xenko-launcher-start-button.png)

2. ［Start］をクリックして Game Studio を起動します。

## 最近使用したプロジェクト

![Projects section](media/xenko-launcher-projects-section.png)

［Projects］セクションには、最近使用したプロジェクトが表示されます。プロジェクトを開くには、クリックします。

### 新しいバージョンの Xenko でプロジェクトを開く

各プロジェクト ボタンの右上には、そのプロジェクトが作成された Xenko のバージョンが表示されます (**B**)。

プロジェクトをさらに新しいバージョンの Xenko で開くには:

1. プロジェクト ボタンで、右下の**アップグレード** アイコンをクリックします (**D**)。

2. プロジェクトを開く Xenko のバージョンを選択します。開くときに、プロジェクトのアップグレードの確認を求められます。

>[!NOTE]
>新しいバージョンの Xenko を使用するようにプロジェクトを更新すると、プロジェクトを動作させるために手動での変更が必要になる場合があります。**アップグレードする前に、プロジェクトとそのすべての関連ファイルのバックアップを必ず行ってください。**
