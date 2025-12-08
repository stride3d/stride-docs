# Assets

<span class="badge text-bg-primary">Beginner</span>

## Green, blue and gray dots

[IMAGE OF 3 DIFFERENT ASSETS WITH 3 DIFFERENT COLORED DOTS HERE]

Every asset has a little dot in the top left corner of their icon. This dot signifies if an asset is going to be included when building the project:
* Green - the asset will be included in the build, because a different asset needs it.
* Blue - the asset will be included in the build no matter if it's needed or not.
* Gray - the asset will not be included in the build.

Stride doesn't include assets which aren't used anywhere, meaning that **the cannot be accessed when running the game**.

In order to ensure, that an asset will be included in the build no matter what, right click on it and select **Mark as root asset** (TODO: change this text to whatever it says in Game Studio).

[IMAGE OF THE CONTEXT MENU HERE]
