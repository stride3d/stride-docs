# Splash screen

<span class="label label-doc-level">Beginner</span>

The **splash screen** is the image (usually a logo) displayed when your game starts. It fades in over the color you specify, then fades out.

> [!Note]
> The splash screen is only displayed when the game is built in release mode.

The default splash screen is the Stride logo.

![Default splash screen](media/StrideDefaultSplashScreen.png)

You can only specify one splash screen in Game Settings. If you want to add more, you need to implement them manually.

## Edit the splash screen

The splash screen settings are part of the **Game settings** asset.

1. In the **solution explorer** (the bottom-left pane by default), select the **Assets folder**.

    ![Select Assets folder asset](media/select-asset-folder.png)

2. In the **asset view** (the bottom pane by default), select the **GameSettings** asset.

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. In the **property grid** (the right-hand pane by default), expand **Splash screen**.

    ![Settings](media/splash-screen.png)

### Splash screen properties

| Property | Description
|----------|------------
| Texture  | The image (eg company logo) displayed as the splash screen. By default, this is *StrideDefaultSplashScreen*. 
| Color    | The color the splash screen fades in on top of. By default, this is black (*#FF000000*).

>[!Tip]
>Additionally, you might want to **disable streaming** on the properties of the splash screen texture itself. This makes sure the texture is always loaded and displayed at the highest quality. For more information, see [Textures > Streaming](../graphics/textures/streaming.md).

## See also

* [Assets](../game-studio/game-settings.md)
* [Textures](../graphics/textures/index.md)
