# Solution contains packages with vulnerabilities

Sometimes, especially when using an older version of Stride, you might notice warnings in Visual Studio that look like this:

![This solution contains packages with vulnerabilities.](media/visual-studio-vulnerable-packages-warning.webp)

![Warnings in the Error List, saying that a package has a known high severity vulnerability.](media/visual-studio-error-list-vulnerable-packages-warnings.webp)

...or when building your project:

![The terminal displaying multiple warnings, saying that a package has a known high severity vulnerability.](media/terminal-vulnerable-packages-warnings.webp)

## What does it mean?

This means that one of the **external packages** your project is using has been marked as vulnerable and **could be exploited by bad actors in your released game**.

## Why does it happen?

Stride depends on **other libraries** in order to work and sometimes, those libraries are **marked as vulnerable on [nuget.org](https://nuget.org)**.

## How to fix it?

1. Update your project to the latest version of Stride. See [Update Stride](../install-and-update/update-stride.md).
2. Check in the engine's [source code](https://github.com/stride3d/stride) if the warning is limited to Game Studio, in which case it can be safely ignored.
3. Ignore the warning while you work on your game and wait for the next release of the engine.

This warning **does not impact your ability to develop and build**. You are still able to use the editor, test your game and even release it (see the note below).

> [!NOTE]
> If you want to release a game with vulnerable packages, make sure to **check how the vulnerability would impact your users** and decide if the warnings can be ignored. If you can't wait, you will have to **build the engine from source**. 

## See also

* [Update stride](../install-and-update/update-stride.md)
