# Accessing in code

You can access game settings using `((Game)Game).Settings` or alternatively, by using the service system.

```csharp
var gameSettings = ((Game)Game).Settings;

// Alternative method
var gameSettings = Services.GetService<IGameSettingsService>().Settings;
```

## Access a configuration

To access a configuration, use [`gameSettings.Configurations.Get<T>`](xref:Stride.Data.PlatformConfigurations.Get*), where `T` is the type of configuration that you want to get ahold of.

```csharp
var audioConfiguration = gameSettings.Configurations.Get<AudioConfiguration>();
```

> [!NOTE]
> If a configuration doesn't exist (hasn't been added to the list in **Game Studio**), the method will return a new instance of that class.
