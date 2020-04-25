# Public properties and fields

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

When you declare a public property or field in a script, the property becomes accessible in Game Studio from the script component properties.

![Property in Game Studio](media/property-shown-in-game-studio.png)

You can attach the same script to multiple entities and set different property values on each entity.

> [!Note] 
> Public properties or fields must be serializable to be used in Game Studio. 

## Add a public property or field

This script has a public property (`DelayTimeOut`):

```cs
public class SampleSyncScript : StartupScript
{
	// This public member will appear in Game Studio
	public float DelayTimeOut { get; set; }
}
```

Game Studio shows the `DelayTimeOut` property in the script component properties:

![Public property appears in the Property Grid](media/scripts-in-stride-change-value-public-property.png)

>[!Note]
>As a general rule, if you want to display the property or field in Game Studio, getters and setters should do as little as possible. For example, they shouldn't try to call methods or access Stride runtime API.

>For example, the following code will create problems, as it tries to access `Entity.Components`, which is only available at runtime:

>```cs
>public class SampleSyncScript : StartupScript
>{
>	private float delayTimeOut;
>	// This public member will appear in Game Studio
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
>If you want to include code like this in a property or field, hide it so Game Studio doesn't display it (see below). 

## Hide properties or fields in the Property Grid

If you don't want Game Studio to show a property in the Property Grid, you can:

* declare your member internal or private, or
* use the [DataMemberIgnore](xref:Stride.Core.DataMemberIgnoreAttribute) attribute like this:

```cs

	// This public property isn't available in Game Studio
	[DataMemberIgnore]
	public float DelayTimeOut { get; set; }
	
```

Game Studio no longer shows the property:

![Public property been hidden with ```[DataMemberIgnore]```](media/scripts-in-stride-public-property-with-datamemberignore.png)

## See also

* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)