# Game settings

You can configure the global settings of your game in the **game settings** asset. It stores the configurations of Stride systems and additional properties.

![](media/property-grid-game-settings.webp)

## Location

The game settings asset is located at the **root of the asset folder** under the name "Game Settings".

> [!WARNING]
> **This asset cannot be moved or renamed!** Stride looks for it specifically in that location. If it's missing, your game won't be able to even render anything.

## Projects without game settings

In case the game settings asset is missing, Stride will continue to run using the default settings. This is what happens when developing games using the [code-only](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html) approach.

In order to have a playable game, you will have to manually create a graphics compositor and construct your default scene.

## Accessing game settings in code

You can access game settings using `((Game)Game).Settings` or alternatively, by using the service system.

```csharp
var gameSettings = ((Game)Game).Settings;

// Alternative method
var gameSettings = Services.GetService<IGameSettingsService>().Settings;
```

## In this sectoin

* [Basic properties](basic-properties.md)
* [Configurations](configurations.md)
* [Splash screen](splash-screen.md)
