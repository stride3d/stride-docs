# Stride 4.3 release notes

November 14th, 2025

Stride contributors are thrilled to announce the release of Stride 4.3, now fully compatible with .NET 10 and leveraging the latest enhancements in C# 14. This release brings significant improvements in performance, stability, and developer experience.

Read the full blog post here: [Announcing Stride 4.3](https://www.stride3d.net/blog/announcing-stride-4-3-in-dotnet-10/)

A massive thank you to the open-source Stride community for your dedicated contributions. This release saw over 75 contributions from more than 22 amazing contributors, each playing a crucial role in making Stride 4.3 a reality.

## What's new in this release
Stride 4.3 includes numerous enhancements and improvements. Here’s what to expect:

- **.NET 10 Integration**: Stride 4.3 is now fully aligned with .NET 10, harnessing its performance improvements and efficiency gains for game development. This means faster execution times, reduced memory footprint, and access to the latest C# features, making your development smoother and more efficient. [Learn more](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-10/)
 
- **C# 14 Features**: With C# 14, Stride users can write cleaner, more concise code thanks to new language features. These improvements reduce boilerplate and enhance readability. [Discover C# 14](https://devblogs.microsoft.com/dotnet/introducing-csharp-14/)

## What has changed since Stride 4.2

### Bepu physics integration

Adding support for [Bepu Physics](https://github.com/bepu/bepuphysics2), a ridiculously fast physics engine written entirely in C#.

Having both a game and physics engine in the same ecosystem reduces the cost of maintaining and improving it, the overhead that we may incur when communicating between the two APIs, and the barrier to entry for contributors.

Bullet is still the default physics engine, and we welcome any contribution towards it, but our efforts will be focused on Bepu from now.

The integration is effectively done, with Bepu's feature set now being slightly ahead of Bullet's. Have a look at [this page](https://doc.stride3d.net/latest/en/manual/physics/configuration.html) if you want to migrate to Bepu.

### Vulkan compute shader support

Vulkan graphics backend has been modified to support compute shaders, the shader compiler has also been modified to support computer shader generation for GLSL.

### User-defined Assets

Introducing [Custom Assets](https://doc.stride3d.net/latest/en/manual/scripts/custom-assets.html), a way to define and store data which can be referenced across multiple components, scenes and through other assets.

The asset compiler also gives you the ability to build more complex systems like custom file importers.

### Ongoing efforts to build projects *from* Linux and Apple desktops

Stride can build games under Windows to target the different devices we support, but building directly from those devices was not supported up till now.

We've introduced a couple of changes to improve on that front:
- Replacing our custom C++/CLI FBX importer with [Assimp](https://github.com/assimp/assimp)
- Fixing the asset compiler to run on all desktop OSes
- Many build-system refactors to move toward fully cross-platform development
- Building VHACD for Linux
- Adjust FreeImage and DirectXTex for all platforms

Some work is still required on this front, but simpler projects can now be built from those platforms.

### Efficient API to manipulate meshes

Vertex buffers do not have a standardized layout, each mesh may have its own specific layout and data type it uses for its vertices. Some have blend weights, or tangents, while others only have positions - they may also use different data types, for example Half4 positions, 4byte color ...

We added in two helpers in [VertexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.VertexBufferHelper.html) and [IndexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.IndexBufferHelper.html) to provide a standardized way to read and write to those buffers.

### Open project with Rider and VSCode from the GameStudio

While any IDE can open and build Stride projects, the editor button to open said project only had special handling for Visual Studio. [Jklawreszuk](https://github.com/Jklawreszuk) added support for Rider and VSCode.

### Interface processor

Stride has a [component processors](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/usage.html), a user-defined class which can collect and process all components of a given type in the running game. It is also known as the `System` part of the `ECS` acronym.

The new [flexible processing system](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/flexible-processing.html) provides more type safety, and the ability to process components by their interfaces. You could, for example, implement a custom update callback any component could receive through this API.

### And more minor changes

- [HDR Rendering Support for D3d/Windows](https://github.com/stride3d/stride/pull/2711)
- [User-defined gizmos](https://doc.stride3d.net/latest/en/manual/scripts/gizmos.html)
- [Haptic feedback integration for VR runtimes](https://github.com/stride3d/stride/pull/2169)
- [API for OpenXR Passthrough](https://github.com/stride3d/stride/pull/2141)

### Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:

- Major performance improvements, particularly for graphics and UI
- Multiple fixes improving Vulkan, OpenGL, games under Linux and OpenXR stability
- And fixes for edge cases when reloading assemblies in the game studio

### Also good to know

We are already hard at work on a bunch of ongoing projects for version 4.4 and beyond;
- Continuing work to allow for building games *from* other platforms
- Converting our Windows-only GameStudio to cross-platform through Avalonia
  We welcome anyone willing to contribute to this project over [Here](https://github.com/orgs/stride3d/projects/6) - just have to make sure to add a comment to one of the unassigned issues you want to work on
- Improvements to shader compilation, reducing in-game hangs while building shader permutations. [Here](https://github.com/stride3d/SDSL)
- More work on D3d12 and Vulkan as we slowly transition away from D3d11

## Changelog for this release

### 🎉 New features
* fix: Add mouse wheel delta to virtual button by [Acissathar](https://github.com/Acissathar) in [#2946](https://github.com/stride3d/stride/pull/2946)
### 🧠 Core
* chore: Update to dotnet 10 by [Eideren](https://github.com/Eideren) in [#2888](https://github.com/stride3d/stride/pull/2888)
* refactor: Use CollectionsMarshal.SetCount to resize lists by [azeno](https://github.com/azeno) in [#2945](https://github.com/stride3d/stride/pull/2945)
### 🔨 Build
* chore: Move bepu asset compilation to Stride.Assets by [Eideren](https://github.com/Eideren) in [#2963](https://github.com/stride3d/stride/pull/2963)
* chore: Update dependencies to .Net10 by [Eideren](https://github.com/Eideren) in [#2966](https://github.com/stride3d/stride/pull/2966)
### 📄 Docs
* fix: Typo in InstancingEntiyTransform by [Acissathar](https://github.com/Acissathar) in [#2951](https://github.com/stride3d/stride/pull/2951)
* fix: Update MSBuild path for Visual Studio 2026 by [ModxVoldHunter](https://github.com/ModxVoldHunter) in [#2961](https://github.com/stride3d/stride/pull/2961)
* chore: Change disk space requirement from 14 GB to 19 GB by [VaclavElias](https://github.com/VaclavElias) in [#2968](https://github.com/stride3d/stride/pull/2968)
### 🎨 Graphics
* fix: Rollback regression introduced through #2798 wrt lightprobes by [Eideren](https://github.com/Eideren) in [#2949](https://github.com/stride3d/stride/pull/2949)
* fix: Regression in mesh bounds calculation introduced through #2858 by [johang88](https://github.com/johang88) in [#2952](https://github.com/stride3d/stride/pull/2952)
* fix: Ensure cached data is up to date when models are mutated by [Eideren](https://github.com/Eideren) in [#2936](https://github.com/stride3d/stride/pull/2936)
* feat: Match constructors between Index and VertexBufferHelper and improve documentation by [Eideren](https://github.com/Eideren) in [#2941](https://github.com/stride3d/stride/pull/2941)
### ⌨️ Input
* fix: Adds touch support to Winforms based GameForm by [joreg](https://github.com/joreg) in [#1664](https://github.com/stride3d/stride/pull/1664)
### ⚙️ Physics
* docs: fix incorrect documentation from pr #2930 by [Eideren](https://github.com/Eideren) in [#2943](https://github.com/stride3d/stride/pull/2943)
* fix: Removal of self while running OnSimulationUpdate by [Eideren](https://github.com/Eideren) in [#2954](https://github.com/stride3d/stride/pull/2954)
### 🔄 Serialization
* fix: Instantiate() behavior for Prefab and Entity references by [Eideren](https://github.com/Eideren) in [#2914](https://github.com/stride3d/stride/pull/2914)

## Contributors

A heartfelt thank you to all the contributors who have played a significant role in this release.

## New contributors

We are especially excited to welcome the following new contributors to Stride with the 4.3 release. Your contributions are greatly appreciated!

* [ModxVoldHunter](https://github.com/ModxVoldHunter) in [#2961](https://github.com/stride3d/stride/pull/2961)

### New contributors since 4.2

* [C0dingSteve](https://github.com/C0dingSteve) in [#2847](https://github.com/stride3d/stride/pull/2847)
* [MEEMexe](https://github.com/MEEMexe) in [#2871](https://github.com/stride3d/stride/pull/2871)
* [ferafiks](https://github.com/ferafiks) in [#2845](https://github.com/stride3d/stride/pull/2845)
* [Kreblc3428](https://github.com/Kreblc3428) in [#2873](https://github.com/stride3d/stride/pull/2873)
* [Acissathar](https://github.com/Acissathar) in [#2902](https://github.com/stride3d/stride/pull/2902)
* [rmtttt](https://github.com/rmtttt) in [#2925](https://github.com/stride3d/stride/pull/2925)
* [laske185](https://github.com/laske185) in [#2674](https://github.com/stride3d/stride/pull/2674)
* [MikhailArsentevTheSecond](https://github.com/MikhailArsentevTheSecond) in [#2728](https://github.com/stride3d/stride/pull/2728)
* [hoelzl](https://github.com/hoelzl) in [#2755](https://github.com/stride3d/stride/pull/2755)
* [kutal10](https://github.com/kutal10) in [#2792](https://github.com/stride3d/stride/pull/2792)
* [ClamEater14](https://github.com/ClamEater14) in [#2593](https://github.com/stride3d/stride/pull/2593)
* [net2cn](https://github.com/net2cn) in [#2598](https://github.com/stride3d/stride/pull/2598)
* [Nicogo1705](https://github.com/Nicogo1705) in [#2571](https://github.com/stride3d/stride/pull/2571)
* [ourabigdev](https://github.com/ourabigdev) in [#2582](https://github.com/stride3d/stride/pull/2582)
* [kopffarben](https://github.com/kopffarben) in [#2482](https://github.com/stride3d/stride/pull/2482)
* [Feralnex](https://github.com/Feralnex) in [#2494](https://github.com/stride3d/stride/pull/2494)
* [TranquilAbyss](https://github.com/TranquilAbyss) in [#2518](https://github.com/stride3d/stride/pull/2518)
* [levifmorais](https://github.com/levifmorais) in [#2546](https://github.com/stride3d/stride/pull/2546)
* [tymokvo](https://github.com/tymokvo) in [#2339](https://github.com/stride3d/stride/pull/2339)
* [Arc-huangjingtong](https://github.com/Arc-huangjingtong) in [#2357](https://github.com/stride3d/stride/pull/2357)
* [minktusk](https://github.com/minktusk) in [#2345](https://github.com/stride3d/stride/pull/2345)
* [timcassell](https://github.com/timcassell) in [#2373](https://github.com/stride3d/stride/pull/2373)
* [dloe](https://github.com/dloe) in [#2257](https://github.com/stride3d/stride/pull/2257)
* [wrshield](https://github.com/wrshield) in [#2272](https://github.com/stride3d/stride/pull/2272)
* [soorMSWE](https://github.com/soorMSWE) in [#2280](https://github.com/stride3d/stride/pull/2280)
* [MechWarrior99](https://github.com/MechWarrior99) in [#2258](https://github.com/stride3d/stride/pull/2258)
* [kristian15959](https://github.com/kristian15959) in [#2294](https://github.com/stride3d/stride/pull/2294)
* [YerkoAndrei](https://github.com/YerkoAndrei) in [#2307](https://github.com/stride3d/stride/pull/2307)
* [ComputerSmoke](https://github.com/ComputerSmoke) in [#2169](https://github.com/stride3d/stride/pull/2169)
* [timconner](https://github.com/timconner) in [#2183](https://github.com/stride3d/stride/pull/2183)

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.
