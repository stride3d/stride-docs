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
### ⚙️ Physics
* docs: fix incorrect documentation from pr #2930 by @Eideren in https://github.com/stride3d/stride/pull/2943
* fix: Removal of self while running OnSimulationUpdate by @Eideren in https://github.com/stride3d/stride/pull/2954
### 🔄 Serialization
* fix: Instantiate() behavior for Prefab and Entity references by @Eideren in https://github.com/stride3d/stride/pull/2914
### 💪 Other changes
* Adds touch support to Winforms based GameForm by @joreg in https://github.com/stride3d/stride/pull/1664

## Contributors

A heartfelt thank you to all the contributors who have played a significant role in this release.

## New contributors

We are especially excited to welcome the following new contributors to Stride with the 4.3 release. Your contributions are greatly appreciated!

* @ModxVoldHunter made their first contribution in https://github.com/stride3d/stride/pull/2961

[TODO] add all new contributors from 4.2

## Stride 4.3 feature overview

[TODO]

## Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:

[TODO]

## Also good to know

[TODO]

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.