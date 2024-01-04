# Stride 4.2 Release Notes

January 5th, 2024

Stride contributors are thrilled to announce the release of Stride 4.2, now fully compatible with .NET 8 and leveraging the latest enhancements in C# 12. This release brings significant improvements in performance, stability, and developer experience.

A massive thank you to the open-source Stride community for your dedicated contributions. This release saw X contributions from over Y amazing contributors, each playing a crucial role in making Stride 4.2 a reality.

## What's new in Stride 4.2
Stride 4.2 includes numerous enhancements and improvements.

- [.NET 8 Integration](https://devblogs.microsoft.com/dotnet/announcing-dotnet-8/): Experience the power and efficiency of the latest .NET version in your game development. 
  - Full compatibility with .NET 8, taking advantage of [improved runtime performance](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/)
  - [C# 12 features](https://devblogs.microsoft.com/dotnet/announcing-csharp-12/): Utilize cutting-edge language features to write more concise and maintainable code, enhancing coding efficiency and reducing boilerplate code
- [Changed Assimp binding to Silk.Net.Assimp](https://github.com/stride3d/stride/pull/1158)
  - This change allows us to remove much of the C++/CLR code used by the asset compiler and brings us one step closer to running the asset compiler on non-windows systems.
- [Migration NET6+ and more gettextnet#2](https://github.com/stride3d/gettextnet/pull/2)
  - Updated all of gettext.NET to the latest stable version of NET
- [Enable multiple profiler consumers and add a timeline/tracing profiler #1788](https://github.com/stride3d/stride/pull/1788)
  - This feature adds a profiler outputting data in chrome://tracing format and changes Profiler to make that possible.
- [Feature: Add Support for F# and VB Project Types #1821](https://github.com/stride3d/stride/pull/1821)
  - Currently only for code-only projects
    - [F# examples](https://stride3d.github.io/stride-community-toolkit/manual/code-only/examples/basic-examples-fs.html)
    - [Visual Basic examples](https://stride3d.github.io/stride-community-toolkit/manual/code-only/examples/basic-examples-vb.html)
- [Stride Diagnostics Analyzer #1864](https://github.com/stride3d/stride/pull/1864)
  - Implements a code analyzer to show helpful warnings in your IDE and at compilation when any of your members or structures are incompatible with the serialization system.
- [OpenVR Handle custom resolution specified by the user through VR settings #2000](https://github.com/stride3d/stride/pull/2000)
- [Editor - Add dynamic snapping for selected objects #1801](https://github.com/stride3d/stride/pull/1801)
  - Implements a dynamic snapping used while holding down a key (default: Left Shift) on manipulating (rotating/moving/scaling) an object/entity. 
  - Adds a new Hotkey Setting for dynamic snapping
  - Adds a Method to handle dynamic snapping
- [Editor - Let the user pick which animation stack to import in an fbx #1977](https://github.com/stride3d/stride/pull/1977)
  - This change introduces a field that users can edit to control which animation the engine should import from the source FBX.
- [Editor - Added the ability to copy imported assets automatically to the Resources dir #1827](https://github.com/stride3d/stride/pull/1827)
  - We recommend storing assets within your project's resource directory to avoid issues that may arise when sharing the project or moving files around.
  - Whenever users import assets that are located outside of the resource directory, they will now be presented with a dialog box asking them whether the file should be copied to that directory.

## What's Changed in Details

* Fixed Exception Caused By Privacy Policy URL in Crash Reporter by @MeharDT in https://github.com/stride3d/stride/pull/1878
* docs: add acastrodev as a contributor for code by @allcontributors in https://github.com/stride3d/stride/pull/1886
* docs: add SVNMLR as a contributor for design by @allcontributors in https://github.com/stride3d/stride/pull/1887
* docs: add JeromyWalsh as a contributor for code by @allcontributors in https://github.com/stride3d/stride/pull/1888
* docs: add parhamgholami as a contributor for design by @allcontributors in https://github.com/stride3d/stride/pull/1889
* Fix missing OpenGLES texture formats. by @Basewq in https://github.com/stride3d/stride/pull/1898
* field typo by @IXLLEGACYIXL in https://github.com/stride3d/stride/pull/1900
* [Editor] Improve Cameracontrol in Editor by @SVNMLR in https://github.com/stride3d/stride/pull/1879
* [XML Comment] Minor updates on EFlags in CollisionFilterGroups.cs by @VaclavElias in https://github.com/stride3d/stride/pull/1910
* Fixes the issue where projects were disappearing from the launcher by @acastrodev in https://github.com/stride3d/stride/pull/1880
* Fix typo in translations generation by @Ethereal77 in https://github.com/stride3d/stride/pull/1916
* Handle importing meshes with duplicate material names by @adrsch in https://github.com/stride3d/stride/pull/1920
* [Native] - Implement some existing C++ methods in C# by @Jklawreszuk in https://github.com/stride3d/stride/pull/1896
* [Launcher] Prevent launcher automatically closing when offline by @Eideren in https://github.com/stride3d/stride/pull/1912
* Small refactoring changes in Stride.GameStudio by @Jklawreszuk in https://github.com/stride3d/stride/pull/1741
* Remove MSBuild.Extras from project by @Jklawreszuk in https://github.com/stride3d/stride/pull/1895
* [Editor] Allow drag and drop of EntityComponent by @Eideren in https://github.com/stride3d/stride/pull/1921
* Add editor settings for the camera speed increase/decrease hotkeys by @adrsch in https://github.com/stride3d/stride/pull/1927
* docs: add adrsch as a contributor for code by @allcontributors in https://github.com/stride3d/stride/pull/1930
* Let the user set the default Bullet gravity vector in PhysicsSettings by @adrsch in https://github.com/stride3d/stride/pull/1928
* Migrate Irony.GrammarExplorer to net 6.0 by @Jklawreszuk in https://github.com/stride3d/stride/pull/1932
* [Core] Enable multiple profiler consumers and add a timeline/tracing profiler by @froce in https://github.com/stride3d/stride/pull/1788
* [Build] Fixed an errors in the build pipeline associated with having a space in the user name by @Fydar in https://github.com/stride3d/stride/pull/1941
* fix(graphics): Stop FastTextRenderer VB clobbering by @froce in https://github.com/stride3d/stride/pull/1954
* Update SSH.NET to 2023.0.0 by @WojciechNagorski in https://github.com/stride3d/stride/pull/1951
* [Build] Fix Android build error by @froce in https://github.com/stride3d/stride/pull/1949
* [Docs] Use XML documentation lists by @Fydar in https://github.com/stride3d/stride/pull/1948
* [Editor] Remove some windows dependencies in editor libraries by @Kryptos-FR in https://github.com/stride3d/stride/pull/1908
* parse numbers in NumericTextBox using CurrentCulture by @Schossi in https://github.com/stride3d/stride/pull/1811
* Xml comments fixing 1 by @VaclavElias in https://github.com/stride3d/stride/pull/1918
* [Presentation] Reduce allocations when parsing number in NumericTextBox by @Kryptos-FR in https://github.com/stride3d/stride/pull/1955
* [Sample] Replace deprecated GetServiceAs calls by @Eideren in https://github.com/stride3d/stride/pull/1943
* Fix compiling assets in Android build by @Basewq in https://github.com/stride3d/stride/pull/1905
* Removed all references to $(SolutionDir) from build artifacts by @JeromyWalsh in https://github.com/stride3d/stride/pull/1894
* [Serialization] Fix diverging rules for editor and runtime serialization of fields and properties by @Eideren in https://github.com/stride3d/stride/pull/1875
* feat(extension): Rename launcher buttons for clarity by @acastrodev in https://github.com/stride3d/stride/pull/1872
* Stride Diagnostics Analyzer by @IXLLEGACYIXL in https://github.com/stride3d/stride/pull/1864
* Fix Building by @MaximilianEmel in https://github.com/stride3d/stride/pull/1956
* [Math] Add a couple of helpers for Vectors by @ch3mbot in https://github.com/stride3d/stride/pull/1769
* Fix #1769 and introduce an optional argument to specify a different r… by @Kryptos-FR in https://github.com/stride3d/stride/pull/1964
* [Github] Update pull request template to ensure users tried out their changes by @Eideren in https://github.com/stride3d/stride/pull/1965
* Fixed small xml docs mistake by @Doprez in https://github.com/stride3d/stride/pull/1976
* Revert "[Editor] Remove some windows dependencies in editor libraries (#1908)" by @Eideren in https://github.com/stride3d/stride/pull/1980
* [AssemblyProcessor] Fixed packing path. by @Basewq in https://github.com/stride3d/stride/pull/1987
* [Core] Make object id more performant by @IXLLEGACYIXL in https://github.com/stride3d/stride/pull/1957
* [Docs] Move bounty paragraph to a more prominent spot by @Eideren in https://github.com/stride3d/stride/pull/1984
* [Readme] Some additional info for building Stride from source by @tebjan in https://github.com/stride3d/stride/pull/1988
* [Docs] Update PropertiesDemo.cs by @Eideren in https://github.com/stride3d/stride/pull/1991
* Fix failing to load data/db/index file on non-Win desktop platforms by @Jklawreszuk in https://github.com/stride3d/stride/pull/1995
* [Shaders] Fixes `EffectValueDescription.DefaultValue` for negative values by @azeno in https://github.com/stride3d/stride/pull/1990
* [Editor] Re-introduce workaround for missing input while navigating by @Eideren in https://github.com/stride3d/stride/pull/1897
* [Build] Fix native library loading picking up invalid files by @Basewq in https://github.com/stride3d/stride/pull/1999
* Fixes OpenXR by @MaximilianEmel in https://github.com/stride3d/stride/pull/1911
* [Breaking] Scoping generic extension methods by @Fydar in https://github.com/stride3d/stride/pull/1959
* Add information about Irony.GrammarExplorer project by @Jklawreszuk in https://github.com/stride3d/stride/pull/2007
* [VR] Remove framecap from VR sample by @Eideren in https://github.com/stride3d/stride/pull/2002
* Bump Newtonsoft.Json from 12.0.3 to 13.0.1 in /sources/metrics/Stride.Metrics by @dependabot in https://github.com/stride3d/stride/pull/1539
* [OpenVR] Handle custom resolution specified by the user through VR settings by @Eideren in https://github.com/stride3d/stride/pull/2000
* Update NuGet libraries to 6.4.2 by @manio143 in https://github.com/stride3d/stride/pull/2017
* Let the user pick which animation stack to import in an fbx by @adrsch in https://github.com/stride3d/stride/pull/1977
* Fixes OpenGL by @MaximilianEmel in https://github.com/stride3d/stride/pull/2023
* Update dotnet 8 by @Doprez in https://github.com/stride3d/stride/pull/1616

## New Contributors
* @adrsch made their first contribution in https://github.com/stride3d/stride/pull/1920
* @froce made their first contribution in https://github.com/stride3d/stride/pull/1788
* @Fydar made their first contribution in https://github.com/stride3d/stride/pull/1941
* @WojciechNagorski made their first contribution in https://github.com/stride3d/stride/pull/1951
* @Schossi made their first contribution in https://github.com/stride3d/stride/pull/1811
* @MaximilianEmel made their first contribution in https://github.com/stride3d/stride/pull/1956
* @ch3mbot made their first contribution in https://github.com/stride3d/stride/pull/1769

## Stride 4.2 Feature Overview

### F# and Visual Basic Integration

A pivotal PR has enabled **F#** and **Visual Basic** support for game development in Stride. This feature is currently limited to a code-only approach. Detailed insights and tutorials will be provided in upcoming blog posts.

We will use the [Stride Community Toolkit [WIP]](https://stride3d.github.io/stride-community-toolkit/), with further details to be covered in a separate post.

Below is a simple example of rendering a capsule using F#:

```fsharp
open Stride.CommunityToolkit.Engine;
open Stride.CommunityToolkit.ProceduralModels;
open Stride.Core.Mathematics;
open Stride.Engine;

let game = new Game()

let Start rootScene =
    game.SetupBase3DScene()
    game.AddProfiler() |> ignore

    let firstBox = game.CreatePrimitive(PrimitiveModelType.Capsule);
    firstBox.Transform.Position <- new Vector3(0f, 2.5f, 0f)
    firstBox.Scene <- rootScene

[<EntryPoint>]
let main argv =
    game.Run(start = Start)
    0
```

![Example basic 3d scene with a capsule](media/ReleaseNotes-4.2/stride-game-engine-example01-basic-3d-scene.webp)

The equivalent Visual Basic example:

```vb
Imports Stride.CommunityToolkit.Engine
Imports Stride.CommunityToolkit.ProceduralModels
Imports Stride.Core.Mathematics
Imports Stride.Engine

Module Program
    Private game As New Game()

    Sub Main()
        GameExtensions.Run(game, Nothing, AddressOf StartGame)
    End Sub

    Private Sub StartGame(rootScene As Scene)
        game.SetupBase3DScene()
        game.AddProfiler()

        Dim entity = game.CreatePrimitive(PrimitiveModelType.Capsule)
        entity.Transform.Position = New Vector3(0, 8, 0)
        entity.Scene = rootScene
    End Sub
End Module

```

These examples showcase how F# and Visual Basic can be utilized in Stride. The Stride Community Toolkit provides a set of helpers and extensions designed to enhance your experience with the Stride Game Engine.

## Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we like to point out some of them out:
- [Runtime rasterized fonts are broken #1750](https://github.com/stride3d/stride/issues/1750)
- [Game Studio doesnt reload sub projects after changes #1703](https://github.com/stride3d/stride/issues/1703)
- [Changing the comparison project related and not UPath related #1704](https://github.com/stride3d/stride/pull/1704)
- [Translations fix #1717](https://github.com/stride3d/stride/pull/1717)
- [C# Beginner Tutorial Build Errors #1652](https://github.com/stride3d/stride/issues/1652)
- [Can not create "C# Beginner" project #1650](https://github.com/stride3d/stride/issues/1650)

## Also good to know
Although not directly tied to Release 4.2, we have made some other big changes. For instance to our website and documentation. We also had another community meeting to address all those new members.
- [Website and documentation revamped and build process updated](https://www.stride3d.net/blog/announcing-website-update/)
- [Contributor section moved to docs](https://doc.stride3d.net/latest/en/contributors/index.html)
- [Community meeting October 2023](https://www.stride3d.net/blog/community-meeting-october-2023/)

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations that have been made. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.