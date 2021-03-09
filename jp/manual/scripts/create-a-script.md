# スクリプトの作成

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">プログラマー</span>

Game Studio または Visual Studio などの IDE を使用して、スクリプトを作成できます。

## Game Studio でスクリプトを作成する

1. ［Asset view］で、［Add asset］>［Scripts］の順にクリックし、スクリプトの種類を選択します。

	![Select script type window](media/create-a-script-script-asset-selection.png)

	>[!NOTE]
	>スクリプトの種類については、「[スクリプトの種類](types-of-script.md)」を参照してください。

	［New script］ダイアログが開きます。

	![New script](media/script-wizard.png)

2. スクリプトのクラスと名前空間を指定して、［Ok］をクリックします。

3. スクリプトを使用するには、スクリプトを保存する必要があります。既定では、スクリプトの保存を求めるメッセージが表示されます。

スクリプトが作成されます。［Asset view］で、作成されたスクリプトを確認できます。

>[!NOTE]
> スクリプトはアセットの一種ですが、［Assets］フォルダーには保存されません。代わりに、関連するアセンブリ フォルダーに保存されます。詳細については、「[プロジェクトの構造](../files-and-folders/project-structure.md)」を参照してください。

Visual Studio で新しいスクリプトを確認することもできます。

![New script on Asset view tab](media/create-a-script-new-script-asset-view.png)

> [!TIP]
> Game Studio から Visual Studio でソリューションを開くには、Game Studio ツールバーの ![Open in IDE](media/create-a-script-ide-icon.png) (［Open in IDE］) アイコンをクリックします。

```cs
using System;
using System.Text;
using System.Threading.Tasks;
using Stride.Core.Mathematics;
using Stride.Input;
using Stride.Engine;

namespace MyGame
{
	public class BasicAsyncScript : AsyncScript
	{
		public override async Task Execute()
		{
			while(Game.IsRunning)
			{
				// フレームごとに何かを行う
				await Script.NextFrame();
			}
		}
	}
}
```

## Visual Studio でスクリプトを作成する

1. Visual Studio を開きます。

	> [!TIP]
	> Game Studio から Visual Studio でソリューションを開くには、Game Studio ツールバーの ![Open in IDE](media/create-a-script-ide-icon.png) (［Open in IDE］) アイコンをクリックします。

	ゲーム ソリューションは複数のプロジェクトで構成されます。

	* 最後が *.Game* のプロジェクトはメイン プロジェクトで、ゲームのロジックとスクリプトがすべて含まれています。

	* 他のプロジェクト (*MyGame.Windows*、*MyGame.Android* など) には、プラットフォーム固有のコードが含まれます。

	詳細については、「[プロジェクトの構造](../files-and-folders/project-structure.md)」を参照してください。

2. `.Game` プロジェクトに新しいクラス ファイルを追加します。そのためには、プロジェクトを右クリックし、［追加］>［新しいアイテム］を選択します。

	［新しい項目の追加］ダイアログが開きます。

3. ［クラス］を選択し、スクリプトの名前を入力して、［追加］をクリックします。

   新しいクラスがプロジェクトに追加されます。

4. 作成したファイルで、スクリプトがパブリックであること、および **AsyncScript** または **SyncScript** から派生していることを確認します。

5. 必要な抽象メソッドを実装します。

	次に例を示します。

	```cs
	using System;
	using System.Text;
	using System.Threading.Tasks;
	using Stride.Core.Mathematics;
	using Stride.Input;
	using Stride.Engine;

	namespace MyGame
	{
		public class SampleSyncScript : SyncScript
		{			
			public override void Update()
			{
				if (Game.IsRunning)
				{
					// フレームごとに何かを行う
				}
			}
		}
	}
	```

6. プロジェクト ファイルとスクリプト ファイルを保存します。

7. スクリプトを変更したので、変更を表示するにはアセンブリを再ロードする必要があります。

	![Confirmation message](media/create-a-script-confirmation-message.png)

	［Yes］をクリックします。

［Asset view］にスクリプトが表示されます。

![New script on Asset view tab](media/create-a-script-new-script-asset-view.png)

>[!NOTE]
> スクリプトはアセットの一種ですが、［Assets］フォルダーには保存されません。代わりに、関連するアセンブリ フォルダーに保存されます。詳細については、「[プロジェクトの構造](../files-and-folders/project-structure.md)」を参照してください。

## 関連項目

* [スクリプトの種類](types-of-script.md)
* [スクリプトを使用する](use-a-script.md)
* [パブリック プロパティとフィールド](public-properties-and-fields.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
