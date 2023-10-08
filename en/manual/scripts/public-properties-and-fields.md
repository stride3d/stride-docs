# Public properties and fields

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

When you declare a public property or field in a script, the property becomes accessible in Game Studio from the script component properties.

![Property in Game Studio](media/property-shown-in-game-studio.png)

You can attach the same script to multiple entities and set different property values on each entity.

> [!Note] 
> Properties and fields must be [serializable](serialization.md) to be used in Game Studio. 

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

For example, the following code will create problems, as it tries to access `Entity.Components`, which is only available at runtime:

```cs
public class SampleSyncScript : StartupScript
{
	private float delayTimeOut;
	// This public member will appear in Game Studio
	public float DelayTimeOut
	{
		get { return delayTimeOut; }
		set
		{ 
			delayTimeOut = value;
			Entity.Components.Add(new SkyboxComponent());
		}
	}
}
```

If you want to include code like this in a property or field, hide it so Game Studio doesn't display it (see below). 

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

## Adding property descriptions

When you add a `<userdoc>` comment block above your public property in code, Game Studio will display it in the description field.

```cs
///<summary>
/// This summary won't show in Game Studio
///</summary>
///<userdoc>
/// This description will show in Game Studio
///</userdoc>
public float DelayTimeOut { get; set; }

```

Enable documentation file generation:
```xml
<PropertyGroup>
  <TargetFrameworks>net6.0</TargetFrameworks>
  <DocumentationFile>bin\$(Configuration)\$(TargetFramework)\$(AssemblyName).xml</DocumentationFile>
</PropertyGroup>
```

> [!NOTE]
> Game Studio will only look in your build output directory for each assembly. Using the above path is recommended.

On next reload, the Game Studio should display the documentation:

![The description now shows in the Property Grid](media/userdoc-example.png)

## MemberRequiredAttribute
The [`MemberRequiredAttribute`](xref:Stride.Core.Annotations.MemberRequiredAttribute) is used to specify if a field or property should not be left null in the editor. If no values are set for this member, a warning or error will be logged when building your game.


```cs
[Stride.Core.Annotations.MemberRequired(MemberRequiredReportType.Error)] public CharacterComponent MyCharacter;
```

## Additional Serialization Attributes

- [`DataMemberRangeAttribute`](xref:Stride.Core.Annotations.DataMemberRangeAttribute)
- [`InlinePropertyAttribute`](xref:Stride.Core.Annotations.InlinePropertyAttribute)
- [`ItemCanBeNullAttribute`](xref:Stride.Core.Annotations.ItemCanBeNullAttribute)
- [`ItemNotNullAttribute`](xref:Stride.Core.Annotations.ItemNotNullAttribute)
- [`MemberCollectionAttribute`](xref:Stride.Core.Annotations.MemberCollectionAttribute)
- [`DataStyleAttribute`](xref:Stride.Core.DataStyleAttribute)
- [`DisplayAttribute`](xref:Stride.Core.DisplayAttribute)

## See also

* [Serialization](serialization.md)
* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)