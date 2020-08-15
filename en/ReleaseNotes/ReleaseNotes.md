# Stride 4.0 Release Notes

July 17, 2020

## Highlights

### Xenko is now Stride!

The Xenko game engine has been renamed to Stride. From now on, all source code, blogs and tutorials will use the name ‘Stride’ instead of ‘Xenko’.

Here is the new logo:

![Stride Logo](media/ReleaseNotes-4.0/stride-logo.png)

More details available on the [dedicated blog post](https://stride3d.net/blog/xenko-has-been-renamed-to-stride/)

### Voxel Cone Tracing GI

Thanks to a substantial contribution from Sean Boettger and sponsored by David Jeske, Stride now supports Voxel Cone Tracing GI!

Here it is in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/AZytf15FRks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As you can see, there's many customization and settings available in the editor:

![Voxel Cone Tracing GI](media/ReleaseNotes-4.0/voxelgi.jpg)

There's a documentation page explaining [how to set up the project with Voxel Cone Tracing GI](../manual/graphics/lights-and-shadows/voxel-cone-tracing-gi.html).

Here's the original [forum post](https://forums.stride3d.net/t/voxel-gi-implementation/1947) and [pull request](https://github.com/stride3d/stride/pull/583). Thanks again for this great contribution!

### .NET Core

As a first step toward .NET 5, Stride editor and toolchain is now running with .NET Core! Runtime has been working with .NET Core for a few versions already.

This allows to have scripts and custom assets in a project targetting `.NET Standard 2.1` or `.NET Core`.

If you have scripts or custom assets in a .NET Framework project rather than a .NET Standard project, you can still choose between `.NET Core` and `.NET Framework` within the launcher:

![Framework selection in launcher](media/ReleaseNotes-4.0/launcher-netcore.jpg)

Framework will also be displayed in Game Studio toolbar for easier identification while both coexist.

.NET Framework version can be considered deprecated and will likely be removed in future release (likely 4.1) to allow us to take full advantage of [C# 8.0](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8) and soon-to-come [C# 9.0](https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/).

We also expect dropping .NET Framework and supporting only .NET Core will greatly simplify our installation process since we won't depend on specific workloads or packages of Visual Studio being installed anymore. This was a recurring issue with our users.

Later down the road, we plan to switch to .NET 5 once it's in good enough shape.

### GPU Instancing the smart way

Aka geometry instancing. Thanks to another big community contribution, Stride now supports GPU instancing per model. The nice thing about it is, that it plays together with the entity-component system. Simply add an Instancing component to a entity with a model. Now you can choose between 3 ways of how to generate the instances:

* EntityTransform, uses the transformation of other entities with an Instance component. This allows to add components like physics, audio, etc. to each instance.
* UserArray, for providing an array of matrices via script
* UserBuffer, for providing a structured buffer (GPU resource) of matrices via script

New component Instancing that controls the instancing of a "Master" entity with a model
New component Instance that represents a single instance and references an Instancing component
Instancing has 3 strategies for collecting the instance transformations:

UserArray and UserBuffer allow specifying how the world transformation of the "Master" entity is used:
Ignore, only the instance transformation is used
PreMultiply, World is multiplied before the instance transformation
PostMultiply, World is multiplied after the instance transformation
EntityTransform mode has support in Game Studio and always uses Ignore mode so the gizmos match
Picking individual instances in Game Studio works as well and selects the entity with the respective Instance component

### Graphics API: different selection mechanism + Vulkan improvements

There's been a big overhaul on Stride build system to make Graphics API selection work in a more future-proof way.

It was previously relying on custom `RuntimeIdentifier` being set in the solution. This didn't work very well because it was completely orthogonal to existing `RuntimeIdentifier`, and sometimes not having good fallbacks.

From now on, user project will use `StrideGraphicsApi` in the `.csproj` project file to specify the graphics API. We hope to expose this in the editor later.

We also took the opportunity to improve state of Vulkan renderer (thanks to a switch to [Vortice.Vulkan bindings](https://github.com/amerkoleci/Vortice.Vulkan) from [Amer Koleci](https://github.com/amerkoleci)) and automatize graphics unit tests, currently running for D3D11 and Vulkan. 

It's still a work in progress so expect more in future releases.

### Documentation & Tutorials

The first 10 C# beginner tutorials are recorded and uploaded to the official Stride Youtube channel. You check out [the playlist here](https://www.youtube.com/playlist?list=PLRZx2y7uC8mNySUMfOQf-TLNVnnHkLfPi). 

![Youtube Playlist](media/ReleaseNotes-4.0/doc-playlist.jpg)

These videos are the video equivalent of the existing [online documentation](../tutorials/csharpbeginner/index.html) for the C# beginner template tutorials and the 'new project' template when creating a new project from the Stride launcher.

The C# beginner series should be fully recorded by the end of July 2020. 
After those videos are done, Jorn will put his focus on the C# Intermediate project template. Here a is work in progress screenshot on the raycasting tutorial:

![Raycast tutorial](media/ReleaseNotes-4.0/doc-raycast-tutorial.jpg)
