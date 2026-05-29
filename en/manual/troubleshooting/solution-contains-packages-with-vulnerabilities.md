# Solution contains packages with vulnerabilities

Sometimes, especially when using an older version of Stride, you might notice a warning in Visual Studio that looks like this:

![This solution contains packages with vulnerabilities.](media/visual-studio-vulnerable-packages-warning.webp)

![Warnings in the Error List, saying that a package has a known high severity vulnerability.](media/visual-studio-error-list-vulnerable-packages-warnings.webp)

...or when building your project:

![The terminal displaying multiple warnings, saying that a package has a known high severity vulnerability.](media/terminal-vulnerable-packages-warnings.webp)

## What does it mean?

This means that one of the **external packages** your project is using has been marked as vulnerable and **could be exploited by bad actors in your exported game**.

## Why does it happen?

Stride depends on **other libraries** in order to work and sometimes, those libraries are **marked as vulnerable on [nuget.org](https://nuget.org)**.

## How to fix it?

Either **update to the latest version of Stride**, or if you are already on it, **ignore the warning and wait for the next release of the engine**.

This warning **does not impact your ability to develop and build**. You are still able to use the editor, test your game and even release it, although it is recommended to **update the engine as soon as a new update comes out**.

## See also

* [Update stride](../install-and-update/update-stride.md)
