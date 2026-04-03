# Build file structure

This page explains in detail how a built Stride game's files are structured.

## Overview

All builds are located in the `Bin` directory. It contains multiple sub-directories that categorize builds based on their configuration and platform.

When building the Release version of the game, the actual published files are located in the typical build location under the directory ``publish``.

TODO: VISUALIZATION

## Contents of the build folder

The build folder contains the following files:

* **MyGame.PlatformName** - the executable. It's file extension depends on the platform (eg. `.exe` on Windows).
* **data** - folder containing asset bundles.
* **`.dll` and `.so` files** - libraries used by the game. They can be embedded in the executable itself, in order to declutter the folder.
* **`.json` files** - contain information needed to launch the game. Depending on the configuration, they might not be needed and won't be generated.

Additionally, there are also these files, that don't need to be included with the game.

* **createdump.exe** - application for capturing information about a crash.
* **`.pdb` files** - files containing debug information, used for attaching a debugger (using breakpoints). These files can be used by players to create mods more easily.
* **`.xml` files** - files containing the generated code API for every package in your project.

## See also:

* [Cleaning up](cleaning-up.md)
