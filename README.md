Stride documentation
=======

Welcome to the Stride documentation repository. This repository contains all the source files for the Stride documentation (http://doc.stride3d.net/). 

Anyone is welcome to contribute! Before you start, please take the time to read the [guidelines](GUIDELINES.md). 

You can find basic information about editing the documentation in [Getting Started](GETTINGSTARTED.md).

Happy editing!

# Manage multiple Stride versions

Each Stride minor version (i.e. 4.0, 4.1, etc.) should have its own branch, named in the fashion `master-<version>`. The only exception is latest version, which should be `master`.

Don't forget to change `$version` in [deploy.ps1](build/deploy.ps1) when branching before first deployment.