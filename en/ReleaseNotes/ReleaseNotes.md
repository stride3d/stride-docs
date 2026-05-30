# Stride 4.4 release notes - Draft

July 14th, 2026

Stride contributors are thrilled to announce the release of Stride 4.4, this release is special, we stay fully compatible with .NET 10, leveraging C# 14 and bringing numerous significant enhancements in performance, stability, and developer experience.

Read the full blog post here: [Announcing Stride 4.4](https://www.stride3d.net/blog/announcing-stride-4-4-in-dotnet-10/)

A massive thank you to the open-source Stride community for your dedicated contributions.

## What's new in this release

Stride 4.4 includes numerous enhancements and improvements. Here's what to expect:

### Highlights

- **CI/CD Improvements**: The build pipeline was moved further toward GitHub Actions, improving transparency, automation, and contributor visibility across supported platforms.
- **Graphics Cleanup**: The obsolete Null graphics backend was removed, simplifying maintenance and reducing legacy surface area.
- **Rendering & Asset Pipeline**: Vertex and index buffer handling was updated across rendering, import, and asset compilation code to improve correctness and consistency.
- **Performance Improvements**: Several internal optimizations reduced allocations and improved data processing, including updates to geometric primitive generation and light probe tetrahedralization.
- **Platform Reliability**: Executable-path handling was improved across desktop/runtime code paths, helping Stride behave more reliably in modern hosting and launch scenarios.
- **Samples & Templates**: Small fixes were made to sample and template projects, including VR startup adjustments.

### Other improvements

- Rendering and mesh utility cleanup
- Asset compiler and importer fixes
- Internal API simplifications
- Test updates and maintenance work
- Contributor workflow and repository housekeeping

### Breaking changes

- **Removed Null graphics backend**: Projects or integrations depending on `STRIDE_GRAPHICS_API_NULL` or related null-backend code paths may require migration.


## What has changed since Stride 4.3

### CI/CD and project infrastructure

One of the most significant themes in 2026 was the continued modernization of the project’s infrastructure. The repository moved more of its workflow toward **GitHub Actions**, improving transparency and making CI easier for contributors to follow and reproduce. This is a meaningful project-level improvement because it affects every contributor and every pull request, not just a single engine subsystem.

This is also one of the most release-worthy changes because it reduces friction for maintenance, makes failures more visible, and supports broader platform validation directly in the open.

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

## Contributors

A heartfelt thank you to all the contributors who have played a significant role in this release.

## New contributors

We are especially excited to welcome the following new contributors to Stride with the 4.3 release. Your contributions are greatly appreciated!

### New contributors since 4.3

* [C0dingSteve](https://github.com/C0dingSteve) in [#2847](https://github.com/stride3d/stride/pull/2847)

## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.