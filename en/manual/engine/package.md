# Package

<div class="doc-incomplete"/>

Stride uses a package system, wherein each game is contained in a package; a game can also use content from other packages. Thus, sharing resources across multiple games becomes possible.

A package is a container for:

* Game assets
* Code libraries
* Dependencies

A dependency is a reference from one package to another package, which allows another package to use the contents from this package. When a package is a game, it also contains code executables (one per platform) along with game assets, code libraries, and dependencies.

Packages are saved on your hard-disk with the ```.sdpkg``` extension.