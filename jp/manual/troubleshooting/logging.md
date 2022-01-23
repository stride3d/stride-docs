# ロギング
<!--
# Logging
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>
-->

[Log](xref:Stride.Engine.ScriptComponent.Log) クラスを使うと、ゲームの実行中に、ゲームに関する情報を**ログ**に記録することができます。
<!--
You can **log** information about your game while it runs using [Log](xref:Stride.Engine.ScriptComponent.Log).
-->

自動的に情報を取得する[プロファイリング](profiling.md)とは異なり、独自のログメッセージを作成し、それをいつトリガーするかを決めるのはあなた自身です。例えば、キャラクターが特定のアクションを行ったときにトリガーされるログメッセージを作成することができます。これは、ゲームのパフォーマンスを調査するのに役立ちます。
<!--
Unlike [profiling](profiling.md), which retrieves information automatically, it's up to you to create your own log messages and define when they're triggered. For example, you can create a log message that triggers when a character performs a certain action. This is useful to investigate how your game is performing.
-->

>[!Note]
>リリースモードでゲームをビルドすると、ログの記録が無効になります。
<!--
>[!Note]
>Logging is disabled when you build the game in release mode.
-->

ロギングを使用し、デバッグモードでゲームを実行すると、Stride は、ロギング情報を表示する 2 つ目のウィンドウでコンソールを開きます。メッセージは、レベルごとに色分けされます。
モジュールの名前（ログメッセージを含むスクリプトなど）が、かっこ内に表示されます。続いてログレベル（**Warning**, **Error** など）、そしてログメッセージが表示されます。
<!--
When you use logging and run your game in debug mode, Stride opens a console in a second window to display logging information. The messages are color-coded by level. 
The name of the module (such as the script containing the log message) is displayed in brackets. This is followed by the log level (eg **Warning**, **Error**, etc), then the log message.
-->

![Logging in console](media/logging-in-console.png)

コンソールには、自分のスクリプトだけでなく、すべてのモジュールからのログメッセージが表示されます。例えば、@'Stride.Core.Serialization.Contents.ContentManager' からのメッセージも表示されます。
<!--
The console displays log messages from all modules, not just your own scripts. For example, it also displays messages from the @'Stride.Core.Serialization.Contents.ContentManager'.
-->

Visual Studio からゲームを実行した場合、ログメッセージは、代わりに Visual Studio の**出力**ウィンドウに表示されます。
<!--
If you run your game from Visual Studio, log messages are shown in the Visual Studio **Output** window instead.
-->

![Log output window](media/log-output-in-visual-studio.png)

## ログレベル
<!--
## Log levels
-->

ログメッセージには 6 つのレベルがあり、重大度に応じて使い分けられます。
<!--
There are six levels of log message, used for different levels of severity.
-->

| ログレベル | 色    | 説明
|-----------|-------|-----
| Debug     | 灰    | 高度なデバッグを目的としたステップバイステップの情報
| Verbose   | 白    | 詳細情報
| Info      | 緑    | 一般的な情報
| Warning   | 黄    | 問題を引き起こすかもしれないマイナーなエラー
| Error     | 赤    | エラー
| Fatal     | 赤    | ゲームをクラッシュさせる深刻なエラー

<!--
| Log level | Color | Description
|-----------|-------|-----
| Debug | Gray | Step-by-step information for advanced debugging purposes
| Verbose | White | Detailed information
| Info | Green | General information
| Warning | Yellow | Minor errors that might cause problems
| Error | Red |Errors
| Fatal | Red | Serious errors that crash the game
-->

既定では、ログは **Info** レベル以上のメッセージを表示します。つまり、既定では **Debug**, **Verbose** のメッセージは表示されません。これを変更するには、後述する **最小レベルの設定** を参照してください。
<!--
By default, the log displays messages for the level **Info** and higher. This means it doesn't display **Debug** or **Verbose** messages. To change this, see **Set the minimum level** below.
-->

## ログメッセージを出力する
<!--
## Write a log message
-->

ログを出力したいコードが含まれるスクリプトで、次のように記述します。
<!--
In the script containing code you want to log, write:
-->

```cs
Log.Debug("My log message");
```

`Debug` の部分を、ログメッセージに使用するレベルで置き換えることができます（先述の **ログレベル** を参照）。
<!--
You can replace `Debug` with the level you want to use for the log message (see **Log levels** above).
-->

これを `if` 文と組み合わせることで、特定の条件を満たしたときにメッセージをログに残すことができます（後述する **サンプルスクリプト** を参照）。
<!--
You can combine this with `if` statements to log this message under certain conditions (see **Example script** below).
-->

## ログレベルを設定する
<!--
## Set the log level
-->

ログに出力する最小のレベルを設定することができます。例えば、**Warning** 以上の厳しいメッセージだけを表示したい場合は、次のようにします。
<!--
You can set a minimum log level to display. For example, if you only want to see messages as severe as **Warning** or higher, use:
-->

```cs
Log.ActivateLog(LogMessageType.Warning);
```

>[!Note]
>これはグローバルな設定ではありません。設定したログレベルは、設定したスクリプトでのみ適用されます。

<!--
>[!Note]
>This isn't a global setting. The log level you set only applies to the script you set it in.
-->

### 実行時にログレベルを変更する
<!--
### Change the log level at runtime
-->

```cs
((Game)Game).ConsoleLogLevel = LogMessageType.myLogLevel;
```

### 特定のログを無効にする
<!--
### Disable a specific log
-->

```cs
GlobalLogger.GetLogger("RouterClient").ActivateLog(LogMessageType.Debug, LogMessageType.Fatal, false); 
// RouterClient モジュールのロギングを無効化
// Disables logging of the RouterClient module
```

### コンソールでのロギングを無効化する
<!--
### Disable logging in the console
-->

```cs
((Game)Game).ConsoleLogMode = ConsoleLogMode.None;
```

### ログファイルを作成する
<!--
### Create a log file
-->

ログ出力をテキストファイルに保存するには、`Start` メソッドに以下のコードを追加します。
<!--
To save the log output to a text file, add this code to the `Start` method:
-->

```cs
var fileWriter = new TextWriterLogListener(new FileStream("myLogFile.txt", FileMode.Create));
GlobalLogger.GlobalMessageLogged += fileWriter;
```

これにより、プロジェクトの Debug フォルダにファイルが作成されます。（例：*MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*）
<!--
This creates a file in the Debug folder of your project (eg *MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*).
-->

## サンプルスクリプト
<!--
## Example script
-->

次のスクリプトは、`MyTexture` テクスチャーが読み込まれたかどうかを確認する例です。
テクスチャーが読み込まれたとき、ログはデバッグメッセージ（`Log.Error`）を表示します。
読み込まれなかったときは、ログはエラーメッセージ（`Log.Debug`）を記録します。
<!--
The following script checks that the texture `MyTexture` is loaded. When the texture loads, the log displays a debug message (`Log.Error`). If it doesn't load, the log records an error message (`Log.Debug`).
-->

```cs
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Stride.Core.Diagnostics;
using Stride.Core.Mathematics;
using Stride.Input;
using Stride.Engine;
using Stride.Graphics;

namespace MyGame
{
    public class Script : SyncScript
    {
		public Texture myTexture;

        public override void Start()
        {
            // Initialization of the script.
            Log.ActivateLog(LogMessageType.Debug);
            Log.Debug("Start loading MyTexture");

            myTexture = Content.Load<Texture>("MyTexture");
            if (myTexture == null)
            {
                Log.Error("MyTexture not loaded");
            }
            else
            {
                Log.Debug("MyTexture loaded successfully");
            }
        }
    }
}
```

## 関連項目
<!--
## See also
-->

* [デバッグ テキスト](debug-text.md)
* [プロファイリング](profiling.md)
* [スクリプト](../scripts/index.md)

<!--
* [Debug text](debug-text.md)
* [Profiling](profiling.md)
* [Scripts](../scripts/index.md)
-->
