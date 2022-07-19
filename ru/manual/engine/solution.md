# Solution

<div class="doc-incomplete"/>

In Stride Studio, the **Solution Explorer** displays the hierarchy of your game.

The content of each package is grouped into two categories: Local packages and External packages. Local packages are the ones that you have created. External packages are the one that you have downloaded from the Internet; for example, the default Stride package. If you open a package file (```.sdpkg```), a single package of the local package category is visible. If you open a solution file (```.sln```) and the solution contains more that one package, you can see several packages.

Each package contains the following three base elements:

* Assets: The assets element comprises all the assets contained in a package. You can expand the Assets element to see the same hierarchy among the assets that is on the file system. When you select the **Assets** folder, the **Asset View** displays the assets contained in this folder.

* Code: The code element contains the code libraries and executables in the package. Each of them corresponds to a single ```.csproj``` file. By right-clicking an executable, you can set it as the current project. This action enables you to compile the assets for the related platform and launch the game.

* Dependencies: The dependencies element lists all the other packages that are referenced by a package. The packages in the **Dependencies** list have their assets accessible to this package.

>[!Note]
>You can change the hierarchy in the **Solution Explorer** by creating folders and renaming or deleting objects.

Stride uses Visual Studio solution files to list all the packages and code project related to a game. Thus, you can easily integrate Stride Studio and Visual Studio for your project because they use the same root file. By default, Stride Studio creates a new solution file when you create a new project, and manages references to both C# projects and packages.