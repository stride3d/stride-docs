# Asset compilation

Assets are compiled into **bundles**.

## Which assets are compiled

Stride only compiles assets which are used in the game. This means that if an asset is unreferenced by other assets that are needed by the game, they will be ignored and won't be available to load from code.

TODO: VISUALIZATION

## Blue, green and gray dots

In the **Asset view** panel, you can see a dot in the top left corner that signifies how an asset will be compiled.

TODO: IMAGE

Each color represents something:

* 🔵 **Blue** (will be compiled) - this asset is marked as root, meaning that it will always be compiled in the game no matter if it's referenced or not.
* 🟢 **Green** (will be compiled) - this asset is referenced by another asset that is used in the game, meaning that it will be compiled.
* ⚫ **Gray** (won't be compiled) - this asset isn't referenced by any other asset that's used in the game, meaning that it won't be compiled.

## Root assets

🔵 **Root assets** are assets that will always be compiled no matter if they are referenced or not.

A few remarks:

* Root assets are defined **per platform**. When marking as root, you have to make sure to do that for every platform your project is targeting.
    TODO: CHECK THAT WHEN YOU MARK SOMETHING IT'S ONLY MARKED FOR THAT ONE PLATFORM
* TODO: CHECK IF YOU CAN ADD ROOT ASSETS TO THE MAIN GAME PROJECT PACKAGE
* You can only mark individual assets as root, not folders.

### How to mark an asset as root

You can mark an asset as root by right clicking on it in the **Asset view** panel and selecting **Mark as root**.

TODO: IMAGE
