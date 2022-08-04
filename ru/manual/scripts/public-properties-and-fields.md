# Public properties and fields
# Общедоступные свойства и поля

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

When you declare a public property or field in a script, the property becomes accessible in Game Studio from the script component properties.
Когда вы объявляете общедоступное свойство или поле в скрипте, это свойство становится доступным в Game Studio из свойств компонента скрипта.

![Property in Game Studio](media/property-shown-in-game-studio.png)
![Собственность в Game Studio](media/property-show-in-game-studio.png)

You can attach the same script to multiple entities and set different property values on each entity.
Вы можете прикрепить один и тот же сценарий к нескольким объектам и установить разные значения свойств для каждого объекта.

> [!Note] 
> [!Примечание]
> Public properties or fields must be serializable to be used in Game Studio. 
> Общедоступные свойства или поля должны быть сериализуемыми для использования в Game Studio.

## Add a public property or field
## Добавить общедоступное свойство или поле

This script has a public property (`DelayTimeOut`):
Этот скрипт имеет общедоступное свойство (`DelayTimeOut`):

```cs
```CS
public class SampleSyncScript : StartupScript
открытый класс SampleSyncScript: StartupScript
{
{
	// This public member will appear in Game Studio
// Этот публичный член появится в Game Studio
	public float DelayTimeOut { get; set; }
общественный поплавок DelayTimeOut { получить;  установлен;  }
}
}
```
```

Game Studio shows the `DelayTimeOut` property in the script component properties:
Game Studio показывает свойство `DelayTimeOut` в свойствах компонента скрипта:

![Public property appears in the Property Grid](media/scripts-in-stride-change-value-public-property.png)
![Общедоступное свойство отображается в сетке свойств](media/scripts-in-stride-change-value-public-property.png)

>[!Note]
>[!Примечание]
>As a general rule, if you want to display the property or field in Game Studio, getters and setters should do as little as possible. For example, they shouldn't try to call methods or access Stride runtime API.
>Как правило, если вы хотите отобразить свойство или поле в Game Studio, геттеры и сеттеры должны делать как можно меньше.  Например, им не следует пытаться вызывать методы или обращаться к API среды выполнения Stride.

>For example, the following code will create problems, as it tries to access `Entity.Components`, which is only available at runtime:
>Например, следующий код создаст проблемы, поскольку он пытается получить доступ к `Entity.Components`, который доступен только во время выполнения:

>```cs
>```CS
>public class SampleSyncScript : StartupScript
> открытый класс SampleSyncScript : StartupScript
>{
>{
>	private float delayTimeOut;
> частный поплавок delayTimeOut;
>	// This public member will appear in Game Studio
> // Этот публичный член появится в Game Studio
>	public float DelayTimeOut
> публичный поплавок DelayTimeOut
>	{
> {
>		get { return delayTimeOut; }
> получить { вернуть delayTimeOut;  }
>		set
> установить
>		{ 
> {
>			delayTimeOut = value;
> delayTimeOut = значение;
>			Entity.Components.Add(new SkyboxComponent());
> Entity.Components.Add(new SkyboxComponent());
>		}
> }
>	}
> }
>}
>}
>```
>```
>If you want to include code like this in a property or field, hide it so Game Studio doesn't display it (see below). 
>Если вы хотите включить подобный код в свойство или поле, скройте его, чтобы Game Studio не отображала его (см. ниже).

## Hide properties or fields in the Property Grid
## Скрыть свойства или поля в сетке свойств

If you don't want Game Studio to show a property in the Property Grid, you can:
Если вы не хотите, чтобы Game Studio отображала свойство в сетке свойств, вы можете:

* declare your member internal or private, or
* объявить вашего члена внутренним или частным, или
* use the [DataMemberIgnore](xref:Stride.Core.DataMemberIgnoreAttribute) attribute like this:
* используйте атрибут [DataMemberIgnore](xref:Stride.Core.DataMemberIgnoreAttribute) следующим образом:

```cs
```CS

	// This public property isn't available in Game Studio
// Это общедоступное свойство недоступно в Game Studio
	[DataMemberIgnore]
[DataMemberIgnore]
	public float DelayTimeOut { get; set; }
общественный поплавок DelayTimeOut { получить;  установлен;  }
	
```
```

Game Studio no longer shows the property:
Game Studio больше не показывает свойство:

![Public property been hidden with ```[DataMemberIgnore]```](media/scripts-in-stride-public-property-with-datamemberignore.png)
![Общедоступное свойство было скрыто с помощью ```[DataMemberIgnore]```](media/scripts-in-stride-public-property-with-datamemberignore.png)

## See also
## Смотрите также

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
