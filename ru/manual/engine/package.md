# Package
# Упаковка

<div class="doc-incomplete"/>
<div class=

Stride uses a package system, wherein each game is contained in a package; a game can also use content from other packages. Thus, sharing resources across multiple games becomes possible.
Stride использует систему пакетов, в которой каждая игра содержится в пакете;  игра также может использовать контент из других пакетов.  Таким образом, становится возможным совместное использование ресурсов в нескольких играх.

A package is a container for:
Пакет представляет собой контейнер для:

* Game assets
* Игровые активы
* Code libraries
* Библиотеки кода
* Dependencies
* Зависимости

A dependency is a reference from one package to another package, which allows another package to use the contents from this package. When a package is a game, it also contains code executables (one per platform) along with game assets, code libraries, and dependencies.
Зависимость — это ссылка из одного пакета на другой пакет, которая позволяет другому пакету использовать содержимое этого пакета.  Когда пакет представляет собой игру, он также содержит исполняемые файлы кода (по одному на каждую платформу), а также игровые активы, библиотеки кода и зависимости.

Packages are saved on your hard-disk with the ```.sdpkg``` extension.
Пакеты сохраняются на вашем жестком диске с расширением ```.sdpkg```.
