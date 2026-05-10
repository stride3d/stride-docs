In the **Asset view**, you can see a dot in the top left corner of every asset that signifies how it will be compiled.

![](media/asset-view-indicators.webp)

Each color represents something:

* 🔵 **Blue** (will be compiled) - this asset is marked as root, meaning that it will always be compiled in the game no matter if it's referenced or not.
* 🟢 **Green** (will be compiled) - this asset is referenced by another asset that is used in the game, meaning that it will be compiled.
* ⚫ **Gray** (won't be compiled) - this asset isn't referenced by any other asset that's used in the game, meaning that it won't be compiled.
