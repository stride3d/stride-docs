# スクリプト

**スクリプト**は、ゲームのイベントを処理し、ユーザーの入力に対応し、エンティティを制御する、コードの単位です。一言で言えば、スクリプトはゲームプレイを追加することによってゲームを対話形式にします。

スクリプトを使用するには、シーン内のエンティティにコンポーネントとしてスクリプトを追加します。スクリプトが追加されているエンティティがシーンでロードされると、スクリプトがロードされます。

Stride のスクリプトは **C#** で記述します。Game Studio または別の IDE (Visual Studio など) でスクリプトを編集できます。スクリプトのデバッグは Visual Studio で行います。

![Scripts](media/scripting_intro.png)

> [!NOTE]
> このドキュメントでは C# については説明しません。

スクリプトは [IScriptContext](xref:Stride.Engine.IScriptContext) にアクセスでき、IScriptContext は Stride エンジンの以下のメイン モジュールにアクセスします。

* [Audio](xref:Stride.Engine.ScriptComponent.Audio): オーディオ システムです
* [Content](xref:Stride.Engine.ScriptComponent.Content): アセットからコンテンツをロードして保存します
* [EffectSystem](xref:Stride.Engine.ScriptComponent.EffectSystem): エフェクトとシェーダーをロードしてコンパイルします
* [Game](xref:Stride.Engine.ScriptComponent.Game): ゲームに関するすべての情報にアクセスします
* [GraphicsDevice](xref:Stride.Engine.ScriptComponent.GraphicsDevice): GPU リソースを作成するための低レベルのグラフィックス デバイスです
* [Input](xref:Stride.Engine.ScriptComponent.Input): キーボード、マウス、ゲームパッドの状態とイベントです
* [Services](xref:Stride.Engine.ScriptComponent.Services): 独自のサービスの登録に使用できるサービスのレジストリです
* [SceneSystem](xref:Stride.Engine.ScriptComponent.SceneSystem): 現在表示されているシーンです
* [Script](xref:Stride.Engine.ScriptComponent.Script): スクリプト マネージャーにアクセスして、スクリプトの終了をスケジュールまたは待機します
* [SpriteAnimation](xref:Stride.Engine.ScriptComponent.SpriteAnimation): スプライトをアニメーション化します
* [Log](xref:Stride.Engine.ScriptComponent.Log): スクリプトからのメッセージとエラーをログに記録します

Stride で C# の標準クラスを使用することもできますが、これらはスクリプトとは呼ばれず、Game Studio でエンティティにアタッチすることはできません。

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
