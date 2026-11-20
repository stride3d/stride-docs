# Compile shaders

TODO: Update this page

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

Before a shader can become usable in your game, it first **has to be compiled** to a format that the given [graphics API](../graphics/graphics-api.md) can understand. This can be done in two ways:

* [Compiling shaders at run-time](#compiling-at-run-time)
* [Compiling shaders at build-time](#compiling-at-build-time)

Once a shader gets compiled, it gets saved in the `data/` folder and **remains usable even after you restart your game.**

## Compiling at run-time

Shaders get **automatically compiled** whenever they are **needed by the game** and haven't been previously compiled. As the developer, you don't have to do anything, but there are some **drawbacks** that you should keep in mind:

* <span class="negative"/> Compiling shaders can cause **stutters**
* <span class="negative"/> A game that compiles all shaders at run-time takes **longer to launch** when opening for the first time
* <span class="negative"/> Runtime shader compilation **isn't available on some platforms** (e.g. iOS)

Typically, it's a good idea to precompile as many shaders as you can during build-time to ensure smooth performance.

## Compiling at build-time

You can compile shaders while building the application, removing all drawbacks of doing it at run-time. This is also known as **precompiling shaders**.

The problem with this approach is that games often create new shader permutations that are hard to predict ahead of time. To solve this, Stride allows you to **record which effects (bundles of shaders) appear in your game while you are testing it,** so that they can be precompiled during the build process.

### Recording effects

Effect recording is enabled per-platform.

1. In the **Solution explorer**, select a [platform package](../files-and-folders/project-packages/index.md#platform-packages) (the one that ends with `.NameOfPlatform`) for which you want to enable effect recording.

    TODO: IMAGE

2. In the **Property grid**, find **Record used effects** and enable it.

    TODO: IMAGE

3. Now when you run into an unrecorded shader permutation while playing your game, you should receive a notification in **Game Studio** that new effects have been found.

    TODO: CHECK IF YOU NEED TO LAUNCH THE GAME FROM GAME STUDIO FOR THIS TO WORK

    TODO: IMAGE

    To import them, click the **🫖 Import effects** button that's available in the **Asset view** toolbar.

    TODO: IMAGE

Recorded effects are saved in the **Effect Compile Log asset** that gets automatically created and updated whenever new effects get imported.

TODO: IMAGE

## Compiling shaders remotely

If you are developing your game for a slower device, or one that can't compile shaders on its own (e.g. iOS), you can set it up to relay those tasks to a different device running Game Studio.

TODO: CHECK IF IOS STILL CAN'T COMPILE

The setting for this can be found in the properties of a [platform package](../files-and-folders/project-packages/index.md#platform-packages) under **Effect compiler**.

TODO: IMAGE

The behavior is as follows:

1. Stride first tries to compile shaders remotely, if that option is enabled.
2. If remote compilation fails or is disabled, Stride then tries to compile shaders locally.
3. If both options are disabled, your game will crash.
