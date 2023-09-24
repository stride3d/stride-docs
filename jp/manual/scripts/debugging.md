# デバッグ

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>

実行時にスクリプトで期待される結果が得られない場合は、Visual Studio などの IDE でデバッグできます。

>[!NOTE]
>コードをデバッグするにはさまざまな方法があります。ここでは、Visual Studio を使用する方法について説明します。

1. Visual Studio でスクリプトを開きます。

    >[!TIP]
    >Game Studio からプロジェクトを Visual Studio で開くには、Game Studio のツールバーで ![Open in IDE](media/launch-your-game-ide-icon.png) (［Open in IDE］) をクリックします。

2. **F9** キーを押して、必要な箇所にブレーク ポイントを追加します。

3. Visual Studio で、**F5** キーを押すか、ツールバーの［開始］をクリックして、デバッグ モードでゲームを実行します。

   ![Visual Studio Start button](media/visual-studio-start-button.png)

   ゲームが新しいウィンドウで開始します。Visual Studio のスクリプト ページで、最初のブレーク ポイントが強調表示されて、実行が止まります。

4. 変数の状態を確認します。

5. コードを 1 行ずつ実行する場合は **F10** キー (ステップ オーバー) を押し、コードの実行を続けるには **F5** キーを押します。

> [!NOTE]
> ブレーク ポイントで止まらない場合は、アクティブなシーンのエンティティにスクリプトをアタッチしてあることを確認してください。

Visual Studio でのデバッグの詳細については、[MSDN のドキュメント](https://msdn.microsoft.com/ja-jp/library/sc65sadd.aspx)を参照してください。

## 関連項目

* [Visual Studio でのデバッグ (MSDN ドキュメント)](https://msdn.microsoft.com/ja-jp/library/sc65sadd.aspx)
* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [プリプロセッサ変数](preprocessor-variables.md)
