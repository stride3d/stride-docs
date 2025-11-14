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
 
### Bepu Physics Integration
Adding support for [Bepu Physics](https://github.com/bepu/bepuphysics2), a ridiculously fast physics engine written entirely in c#.

Having both a game and physics engine in the same ecosystem reduces the cost of maintaining and improving it, the overhead that we may incur when communicating between the two APIs, and the barrier to entry for contributors.

Bullet is still the default physics engine, and we welcome any contribution towards it, but our efforts will be focused on Bepu from now.

The integration is effectively done, with Bepu's feature set now being slightly ahead of Bullet's.

Have a look at [this page](https://doc.stride3d.net/latest/en/manual/physics/configuration.html) if you want to migrate to Bepu.

### User-defined Assets

Introducing [Custom Assets](https://doc.stride3d.net/latest/en/manual/scripts/custom-assets.html), a way to define and store data which can be referenced across multiple components, scenes and through other assets.

The asset compiler also gives you the ability to build more complex systems like custom file importers.

### Efficient High-Level API to read and manipulate meshes
Vertex buffers do not have a standardized layout, each mesh may have its own specific layout and data type it uses for its vertices. Some have blend weights, or tangents, while others only have positions - they may also use different data types, for example Half4 positions, 4byte color ...

We added in two helpers in [VertexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.VertexBufferHelper.html) and [IndexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.IndexBufferHelper.html) to provide a standardized way to read and write to those buffers.

### Vulkan Compute Shader Support
Vulkan graphics backend has been modified to support compute shaders, the shader compiler has also been modified to support computer shader generation for GLSL.

### Interface processor
Stride has a [component processors](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/usage.html), a user-defined class which can collect and process all components of a given type in the running game. It is also known as the `System` part of the `ECS` acronym. 

The new [Flexible processing system](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/flexible-processing.html) provides more type safety, and the ability to process components by their interfaces. You could, for example, implement a custom update callback any component could receive through this API.

### Ongoing efforts to build projects *from* Linux and Apple desktops

Stride can build games under Windows to target the different devices we support, but building directly from those devices was not supported up till now.

We've introduced a couple of changes to improve on that front:
- Replacing our custom C++/CLI FBX importer with [Assimp](https://github.com/assimp/assimp)
- Fixing the asset compiler to run on all desktop OSes.
- Many build-system refactors to move toward fully cross-platform development.
- Building VHACD for Linux
- Adjust FreeImage and DirectXTex for all platforms

Some work is still required on this front, but simpler projects can now be built from those platforms.

### Open project with Rider and VSCode from the GameStudio

While any IDE can open and build Stride projects, the editor button to open said project only had special handling for Visual Studio. @Jklawreszuk added support for Rider and VSCode.

### 

- [User-defined gizmos](https://doc.stride3d.net/latest/en/manual/scripts/gizmos.html)
- HDR Rendering Support for D3d/Windows
- Haptic feedback integration for VR runtimes

## Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:

[WIP]
- Major performance improvements, particularly for graphics and UI
- Vulkan: concurrency fixes, resizing fixes, compute support.
- OpenGL: fixes for resizing, UIPage crash, updated libraries.
- OpenXR: stability improvements, passthrough API additions.
- Silk.NET updates
- Assembly reloading

## Also good to know

[WIP]
Mention breaking changes between major versions
Ongoing work for building the game from other platforms
Ongoing work for running the editor on other platforms
Ongoing work to improve the Shader system
Ongoing work to improve D3d12 and Vulkan, and deprecate D3d11 and OpenGL

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.