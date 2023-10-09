# パブリック プロパティとフィールド

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">プログラマー</span>

スクリプトでパブリック プロパティまたはパブリック フィールドを宣言すると、そのプロパティは Game Studio 内でスクリプト コンポーネント プロパティからアクセスできるようになります。

![Property in Game Studio](media/property-shown-in-game-studio.png)

同じスクリプトを複数のエンティティにアタッチし、エンティティごとに異なるプロパティ値を設定できます。

> [!NOTE]
> パブリック プロパティまたはフィールドを Game Studio で使用するには、シリアル化可能である必要があります。

## パブリック プロパティまたはフィールドを追加する

次のスクリプトにはパブリック プロパティ (`DelayTimeOut`) があります。

```cs
public class SampleSyncScript : StartupScript
{
	// このパブリック メンバーは Game Studio に表示される
	public float DelayTimeOut { get; set; }
}
```

`DelayTimeOut` プロパティはスクリプト コンポーネントのプロパティに表示されます。

![Public property appears in the property grid](media/scripts-in-stride-change-value-public-property.png)

>[!NOTE]
>原則として、Game Studio でプロパティまたはフィールドを表示したい場合、ゲッターおよびセッターは可能な限り何も行わないようにする必要があります。たとえば、メソッドを呼び出したり、Stride のランタイム API にアクセスしたりしないようにする必要があります。

>たとえば、以下のコードは、実行時にのみ使用できる `Entity.Components` にアクセスしようとしているため、問題になります。

>```cs
>public class SampleSyncScript : StartupScript
>{
>	private float delayTimeOut;
>	// このパブリック メンバーは Game Studio に表示される
>	public float DelayTimeOut
>	{
>		get { return delayTimeOut; }
>		set
>		{
>			delayTimeOut = value;
>			Entity.Components.Add(new SkyboxComponent());
>		}
>	}
>}
>```
>このようなコードをプロパティまたはフィールドに組み込む場合は、Game Studio がそれを表示しないように非表示にします (後述を参照)。

## プロパティ グリッドでプロパティまたはフィールドを非表示にする

プロパティ グリッドにプロパティを表示したくない場合は、次の方法でできます。

* メンバーを内部またはプライベートとして宣言します
* または、[DataMemberIgnore](xref:Stride.Core.DataMemberIgnoreAttribute) 属性を次のように使用します。

```cs

	// このパブリック プロパティは Game Studio では使用できない
	[DataMemberIgnore]
	public float DelayTimeOut { get; set; }

```

プロパティが表示されなくなります。

![パブリック プロパティは ```［DataMemberIgnore］``` で非表示になっている](media/scripts-in-stride-public-property-with-datamemberignore.png)

## 関連項目

* [スクリプトの種類](types-of-script.md)
* [スクリプトを作成する](create-a-script.md)
* [スクリプトを使用する](use-a-script.md)
* [スケジュール設定と優先順位](scheduling-and-priorities.md)
* [イベント](events.md)
* [デバッグ](debugging.md)
* [プリプロセッサ変数](preprocessor-variables.md)
