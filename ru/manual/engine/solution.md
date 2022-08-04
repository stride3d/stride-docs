# Solution
# Решение

<div class="doc-incomplete"/>
<div class=

In Stride Studio, the **Solution Explorer** displays the hierarchy of your game.
В Stride Studio **Solution Explorer** отображает иерархию вашей игры.

The content of each package is grouped into two categories: Local packages and External packages. Local packages are the ones that you have created. External packages are the one that you have downloaded from the Internet; for example, the default Stride package. If you open a package file (```.sdpkg```), a single package of the local package category is visible. If you open a solution file (```.sln```) and the solution contains more that one package, you can see several packages.
Содержимое каждого пакета сгруппировано в две категории: локальные пакеты и внешние пакеты.  Локальные пакеты — это те, которые вы создали.  Внешние пакеты — это те, которые вы скачали из Интернета;  например, пакет Stride по умолчанию.  Если вы откроете файл пакета (```.sdpkg```), будет виден один пакет локальной категории пакетов.  Если вы откроете файл решения (```.sln```) и решение содержит более одного пакета, вы увидите несколько пакетов.

Each package contains the following three base elements:
Каждый пакет содержит следующие три базовых элемента:

* Assets: The assets element comprises all the assets contained in a package. You can expand the Assets element to see the same hierarchy among the assets that is on the file system. When you select the **Assets** folder, the **Asset View** displays the assets contained in this folder.
* Активы: Элемент активов включает все активы, содержащиеся в пакете.  Вы можете развернуть элемент «Активы», чтобы увидеть ту же иерархию среди активов, которая находится в файловой системе.  Когда вы выбираете папку **Assets**, **Asset View** отображает активы, содержащиеся в этой папке.

* Code: The code element contains the code libraries and executables in the package. Each of them corresponds to a single ```.csproj``` file. By right-clicking an executable, you can set it as the current project. This action enables you to compile the assets for the related platform and launch the game.
* Код: элемент кода содержит библиотеки кода и исполняемые файлы в пакете.  Каждый из них соответствует одному файлу ```.csproj```.  Щелкнув правой кнопкой мыши исполняемый файл, вы можете установить его в качестве текущего проекта.  Это действие позволяет скомпилировать ресурсы для соответствующей платформы и запустить игру.

* Dependencies: The dependencies element lists all the other packages that are referenced by a package. The packages in the **Dependencies** list have their assets accessible to this package.
* Зависимости: Элемент зависимостей перечисляет все другие пакеты, на которые ссылается пакет.  Активы пакетов в списке **Зависимости** доступны для этого пакета.

>[!Note]
>[!Примечание]
>You can change the hierarchy in the **Solution Explorer** by creating folders and renaming or deleting objects.
>Вы можете изменить иерархию в **Solution Explorer**, создав папки и переименовав или удалив объекты.

Stride uses Visual Studio solution files to list all the packages and code project related to a game. Thus, you can easily integrate Stride Studio and Visual Studio for your project because they use the same root file. By default, Stride Studio creates a new solution file when you create a new project, and manages references to both C# projects and packages.
Stride использует файлы решений Visual Studio для перечисления всех пакетов и проектов кода, связанных с игрой.  Таким образом, вы можете легко интегрировать Stride Studio и Visual Studio в свой проект, поскольку они используют один и тот же корневой файл.  По умолчанию Stride Studio создает новый файл решения при создании нового проекта и управляет ссылками как на проекты, так и на пакеты C#.
