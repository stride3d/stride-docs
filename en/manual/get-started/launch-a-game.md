# Launch a game

<span class="badge text-bg-primary">Beginner</span>

This page explains how to launch your game using Game Studio or Visual Studio.

## Launch a game from Game Studio

> [!Note]
> Game Studio can't launch games for the Windows Store or UWP (Universal Windows Platform) platforms. To launch a game for those platforms, use Visual Studio (see below).

  1. In the **Solution Explorer**, right-click in your target platform, then choice **Set as current project**.

      ![Platform selection](media/launch-your-game-game-studio-profiles.webp)

      > [!Note]
      > You can only select platforms you selected in the **Create a new game** dialog when you created the project. To add additional platforms to the project, see [Add or remove a platform](../platforms/add-or-remove-a-platform.md).

  2. To run the game, click ![Play icon](media/launch-your-game-play-icon.webp) in the toolbar or press **F5**.

      ![Game Studio play button](media/game-studio-toolbar-build-button.webp)

  The **Output window** shows the build progress. 

  ![Output window](media/output-window.webp)

  When the build is complete, your game starts on the selected platform.

## Launch a game from Visual Studio

1. In Game Studio, in the toolbar, click ![Open in IDE](media/launch-your-game-ide-icon.webp) (**Open in IDE**) to launch Visual Studio.

2. In the Visual Studio toolbar, set the appropriate project as the startup project.
         
	![Select build profile in Visual Studio](media/launch-your-game-visual-studio-profiles.webp)
   
   The startup project configuration is updated automatically.
 
   > [!TIP]
   > You can see your projects in the Solution Explorer on the right. The project filename extensions identify the platform (eg *.Android*, *.iOS*, etc).

3. Check that the configuration and platform properly matches what you are expected.
  
4. * To start the game without debugging, press **Ctrl + F5**.
   
   * To start the game with debugging, click **Start** or press **F5**.

      ![Visual Studio Start button](media/visual-studio-start-button.webp)

## Remove borders

By default, the game runs with window borders.

| With borders              | Without borders 
|---------------------------|-----------------
| ![With borders](media/with-borders.webp)   | ![Without borders](media/without-borders.webp) 

To run the game without borders, use:

```cs
Game.Window.IsBorderLess = true;
```

For example:

```cs
using Stride.Engine;

namespace MyGame
{
    public class MyScript : StartupScript
    {
        public override void Start()
        {
            base.Start();
            Game.Window.IsBorderLess = true;
        }
    }
}
```