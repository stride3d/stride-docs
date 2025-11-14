# Stride 4.3 release notes

November 14th, 2025

Stride contributors are thrilled to announce the release of Stride 4.3, now fully compatible with .NET 10 and leveraging the latest enhancements in C# 14. This release brings significant improvements in performance, stability, and developer experience.

Read the full blog post here: [Announcing Stride 4.3](https://www.stride3d.net/blog/announcing-stride-4-3-in-dotnet-10/)

A massive thank you to the open-source Stride community for your dedicated contributions. This release saw over 75 contributions from more than 22 amazing contributors, each playing a crucial role in making Stride 4.3 a reality.

## What's new in Stride 4.3
Stride 4.3 includes numerous enhancements and improvements. Here’s what to expect:

- **.NET 10 Integration**: Stride 4.3 is now fully aligned with .NET 10, harnessing its performance improvements and efficiency gains for game development. This means faster execution times, reduced memory footprint, and access to the latest C# features, making your development smoother and more efficient. [Learn more](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/)

- **C# 14 Features**: With C# 14, Stride users can write cleaner, more concise code thanks to new language features. These improvements reduce boilerplate and enhance readability. [Discover C# 14](https://devblogs.microsoft.com/dotnet/announcing-csharp-12/)


## What's changed in details

### 🎉 New features
* fix: Add mouse wheel delta to virtual button by @Acissathar in https://github.com/stride3d/stride/pull/2946
### 🧠 Core
* chore: Update to dotnet 10 by @Eideren in https://github.com/stride3d/stride/pull/2888
* refactor: Use CollectionsMarshal.SetCount to resize lists by @azeno in https://github.com/stride3d/stride/pull/2945
### 🔨 Build
* chore: Move bepu asset compilation to Stride.Assets by @Eideren in https://github.com/stride3d/stride/pull/2963
* chore: Update dependencies to .Net10 by @Eideren in https://github.com/stride3d/stride/pull/2966
### 📄 Docs
* fix: Typo in InstancingEntiyTransform by @Acissathar in https://github.com/stride3d/stride/pull/2951
* fix: Update MSBuild path for Visual Studio 2026 by @ModxVoldHunter in https://github.com/stride3d/stride/pull/2961
* chore: Change disk space requirement from 14 GB to 19 GB by @VaclavElias in https://github.com/stride3d/stride/pull/2968
### 🎨 Graphics
* fix: Rollback regression introduced through #2798 wrt lightprobes by @Eideren in https://github.com/stride3d/stride/pull/2949
* fix: Regression in mesh bounds calculation introduced through #2858 by @johang88 in https://github.com/stride3d/stride/pull/2952
* fix: Ensure cached data is up to date when models are mutated by @Eideren in https://github.com/stride3d/stride/pull/2936
* feat: Match constructors between Index and VertexBufferHelper and improve documentation by @Eideren in https://github.com/stride3d/stride/pull/2941
### ⌨️ Input
* fix: Adds touch support to Winforms based GameForm by @joreg in https://github.com/stride3d/stride/pull/1664
### ⚙️ Physics
* docs: fix incorrect documentation from pr #2930 by @Eideren in https://github.com/stride3d/stride/pull/2943
* fix: Removal of self while running OnSimulationUpdate by @Eideren in https://github.com/stride3d/stride/pull/2954
### 🔄 Serialization
* fix: Instantiate() behavior for Prefab and Entity references by @Eideren in https://github.com/stride3d/stride/pull/2914

## Contributors

A heartfelt thank you to all the contributors who have played a significant role in this release.

## New contributors

We are especially excited to welcome the following new contributors to Stride with the 4.3 release. Your contributions are greatly appreciated!

* @ModxVoldHunter made their first contribution in https://github.com/stride3d/stride/pull/2961

### New contributors since 4.2

* @C0dingSteve made their first contribution in https://github.com/stride3d/stride/pull/2847
* @MEEMexe made their first contribution in https://github.com/stride3d/stride/pull/2871
* @ferafiks made their first contribution in https://github.com/stride3d/stride/pull/2845
* @Kreblc3428 made their first contribution in https://github.com/stride3d/stride/pull/2873
* @Acissathar made their first contribution in https://github.com/stride3d/stride/pull/2902
* @rmtttt made their first contribution in https://github.com/stride3d/stride/pull/2925
* @laske185 made their first contribution in https://github.com/stride3d/stride/pull/2674
* @MikhailArsentevTheSecond made their first contribution in https://github.com/stride3d/stride/pull/2728
* @hoelzl made their first contribution in https://github.com/stride3d/stride/pull/2755
* @kutal10 made their first contribution in https://github.com/stride3d/stride/pull/2792
* @ClamEater14 made their first contribution in https://github.com/stride3d/stride/pull/2593
* @net2cn made their first contribution in https://github.com/stride3d/stride/pull/2598
* @Nicogo1705 made their first contribution in https://github.com/stride3d/stride/pull/2571
* @ourabigdev made their first contribution in https://github.com/stride3d/stride/pull/2582
* @kopffarben made their first contribution in https://github.com/stride3d/stride/pull/2482
* @Feralnex made their first contribution in https://github.com/stride3d/stride/pull/2494
* @TranquilAbyss made their first contribution in https://github.com/stride3d/stride/pull/2518
* @levifmorais made their first contribution in https://github.com/stride3d/stride/pull/2546
* @tymokvo made their first contribution in https://github.com/stride3d/stride/pull/2339
* @Arc-huangjingtong made their first contribution in https://github.com/stride3d/stride/pull/2357
* @minktusk made their first contribution in https://github.com/stride3d/stride/pull/2345
* @timcassell made their first contribution in https://github.com/stride3d/stride/pull/2373
* @dloe made their first contribution in https://github.com/stride3d/stride/pull/2257
* @wrshield made their first contribution in https://github.com/stride3d/stride/pull/2272
* @soorMSWE made their first contribution in https://github.com/stride3d/stride/pull/2280
* @MechWarrior99 made their first contribution in https://github.com/stride3d/stride/pull/2258
* @kristian15959 made their first contribution in https://github.com/stride3d/stride/pull/2294
* @YerkoAndrei made their first contribution in https://github.com/stride3d/stride/pull/2307
* @ComputerSmoke made their first contribution in https://github.com/stride3d/stride/pull/2169
* @timconner made their first contribution in https://github.com/stride3d/stride/pull/2183

## Stride 4.3 feature overview

[WIP]
- Bepu Physics Integration
    - Bullet Physics is being phased out
- ScriptableObject-like custom data assets
- Efficient High-Level API to read and manipulate meshes
- Major performance improvements, particularly for graphics and UI
- Vulkan Compute Shader Support
- Flexible processing system
- Unified 3D Asset Importer
- UI layout gap property
    - Similar to CSS gap
- GameStudio can detect and work with multiple installed IDEs
- User-defined gizmos
- HDR Rendering Support for D3d/Windows
- Haptic feedback integration for VR runtimes

## Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:

[WIP]
- Vulkan: concurrency fixes, resizing fixes, compute support.
- OpenGL: fixes for resizing, UIPage crash, updated libraries.
- OpenXR: stability improvements, passthrough API additions.
- Asset compiler can now run on all desktop OSes.
- Increasing number of assets can be compiled on Linux/macOS.
- Many build-system refactors to move toward fully cross-platform development.
- Linux VHACD
- FreeImage modernization
- DirectXTex portability work
- Silk.NET updates
- Assembly reloading

## Also good to know

[WIP]
Mention breaking changes between major versions

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.