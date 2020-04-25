# Stride を起動する

<span class="label label-doc-level">初級</span>

**Stride Launcher** を使用すると、異なるバージョンの Stride をインストール、管理、実行できます。

![Stride launcher](media/stride-launcher-interface.png)

## 最新バージョンの Stride をインストールする

Stride がまだインストールされていない場合は、Stride Launcher で最新バージョンのインストールを促されます。

![No version installed](media/stride-launcher-install-last-version.png)

最新バージョンのインストールを選択すると、Stride Visual Studio 拡張機能をインストールするかどうかの確認を求められます。

![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

Stride Visual Studio 拡張機能では、構文の強調表示、ライブ コード検証、エラー チェック、およびナビゲーションが追加されます。また、[Visual Studio から直接シェーダーを編集する](../graphics/effects-and-shaders/custom-shaders.md)こともできます。拡張機能をインストールしなくても Stride を使用できますが、プログラマーの場合は特に、インストールすることをお勧めします。

## さまざまなバージョンの Stride を管理する

複数のバージョンの Stride をインストールし、Stride Launcher からそれらを起動することができます。

![Manage versions of Stride](media/stride-launcher-various-versions.png)

古いプロジェクトの作業には、古いバージョンの Stride の使用が必要になる場合があります。新しいバージョンの Stride には、古いプロジェクトをアップグレードする必要がある変更が含まれる可能性があります。

マイナー バージョンでは、バージョン番号の最後の数字だけが変化します (1.9.0、1.9.1、1.9.2 など)。マイナー バージョンには互換性がなくなるような変更は含まれないので、インストールして既存のプロジェクトで使用しても安全です。

>[!NOTE]
>前のマイナー バージョンに戻すことはできません。たとえば、Stride 1.9 と 1.8 の両方を同じ環境にインストールすることはできますが、Stride 1.9.2 を Stride 1.9.1 に戻すことはできません。

* 特定のバージョンのリリース ノートを見るには、バージョン名の隣にある［Note］アイコンをクリックします。

* 特定のバージョンをインストールするには、バージョン名の隣の［Download and install］アイコンを
クリックします。

## Game Studio を開始する

Stride のインストールが済んだら、Game Studio を開始してプロジェクトをビルドします。

1. ［Switch/update version］で、使用する Stride のバージョンを選択します。

  ［Start］ボタンでバージョン番号が更新されます。

   ![Start button](media/stride-launcher-start-button.png)

2. ［Start］をクリックして Game Studio を起動します。

## 次に学習すること

* [Game Studio で初めてのプロジェクトを作成する](create-a-project.md)

## 関連項目

Stride Launcher の詳細については、「[Stride Launcher](../stride-launcher/index.md)」のページを参照してください。
