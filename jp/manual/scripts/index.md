# スクリプト

**スクリプト**は、ゲームのイベントを処理し、ユーザーの入力に対応し、エンティティを制御する、コードの単位です。一言で言えば、スクリプトはゲームプレイを追加することによってゲームを対話形式にします。

スクリプトを使用するには、シーン内のエンティティにコンポーネントとしてスクリプトを追加します。スクリプトが追加されているエンティティがシーンでロードされると、スクリプトがロードされます。

Xenko のスクリプトは **C#** で記述します。Game Studio または別の IDE (Visual Studio など) でスクリプトを編集できます。スクリプトのデバッグは Visual Studio で行います。

![Scripts](media/scripting_intro.png)

> [!NOTE]
> このドキュメントでは C# については説明しません。

スクリプトは [IScriptContext](xref:Xenko.Engine.IScriptContext) にアクセスでき、IScriptContext は Xenko エンジンの以下のメイン モジュールにアクセスします。

* [Audio](xref:Xenko.Engine.ScriptComponent.Audio): オーディオ システムです
* [Content](xref:Xenko.Engine.ScriptComponent.Content): アセットからコンテンツをロードして保存します
* [EffectSystem](xref:Xenko.Engine.ScriptComponent.EffectSystem): エフェクトとシェーダーをロードしてコンパイルします
* [Game](xref:Xenko.Engine.ScriptComponent.Game): ゲームに関するすべての情報にアクセスします
* [GraphicsDevice](xref:Xenko.Engine.ScriptComponent.GraphicsDevice): GPU リソースを作成するための低レベルのグラフィックス デバイスです
* [Input](xref:Xenko.Engine.ScriptComponent.Input): キーボード、マウス、ゲームパッドの状態とイベントです
* [Services](xref:Xenko.Engine.ScriptComponent.Services): 独自のサービスの登録に使用できるサービスのレジストリです
* [SceneSystem](xref:Xenko.Engine.ScriptComponent.SceneSystem): 現在表示されているシーンです
* [Script](xref:Xenko.Engine.ScriptComponent.Script): スクリプト マネージャーにアクセスして、スクリプトの終了をスケジュールまたは待機します
* [SpriteAnimation](xref:Xenko.Engine.ScriptComponent.SpriteAnimation): スプライトをアニメーション化します
* [Log](xref:Xenko.Engine.ScriptComponent.Log): スクリプトからのメッセージとエラーをログに記録します

Xenko で C# の標準クラスを使用することもできますが、これらはスクリプトとは呼ばれず、Game Studio でエンティティにアタッチすることはできません。

## このセクションの内容

* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
* [コードからモデルを作成する](create-a-model-from-code.md)
