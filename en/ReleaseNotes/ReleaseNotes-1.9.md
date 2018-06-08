# Xenko 1.9 beta release notes

## Highlights

Xenko 1.9 Beta introduces several major new features along with several relevant enhancements to existing features.

We are excited to offer three new game templates to speed up your game design time, a brand new script editor as well as expanded copy-paste functionality.

The last major new feature is our new Navigation Mesh system.

### Game Templates

We have added several templates packed with a lot of functionality to help you kickstart your games. Choose from:

* First Person Shooter
* Third Person Platformer
* Top-View RPG

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/game_templates.jpg">
   <source src="media/ReleaseNotes-1.9/game_templates.mp4" type="video/mp4">
</video>

All of them come with basic camera and player functionality found in most games of their respective genres. They also have many production-quality assets so you can easily try different features on your own.

In addition to the game templates, the **New Game** project now includes optional packages with all the assets we used to build the samples. Unlike the game templates which are trimmed down, the optional packages include ALL assets, including some which are not used by any Xenko sample.

### Script Editor

To ease friction from switching back and forth between the Game Studio and your IDE, we’ve built a new Script Editor.  Relying fully on Visual Studio is no longer necessary because you can now edit your code directly within the Game Studio itself. You’ll get full syntax highlighting, auto-completion, live diagnostics and even the ability to auto-reload C# files and projects that changed on your hard drive due to changes in your external editor (e.g., Visual Studio).

In fact, expect:
* Highlight, auto-completion and live diagnostics is available in the Xenko API, your own game code and libraries that you use
* Auto-reload C# scripts and C# project changes that happened in the background
* A Visual Studio like experience for all your code editing!

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/code_completion.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/code_completion.mp4" type="video/mp4">
</video>

We had some help from Microsoft’s .NET compiler, [Roslyn](https://github.com/dotnet/roslyn), so Xenko users will also receive the full benefit of all the latest features of .NET. Adding a Rosyln-based Script Editor makes it easier to keep up with the latest C# updates.

Using the Xenko Script Editor is fairly straightforward. Just follow these steps:

* Create a new project/game in Game Studio
* Add a script in Game Studio
* Edit the script in Game Studio

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/create_script_gamestudio.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/create_script_gamestudio.mp4" type="video/mp4">
</video>

C# scripts saved on Visual Studio side (or any text editor, for that matter) will automatically be updated in Game Studio without reloading. Same goes for project changes (.csproj): new scripts will appear automatically upon saving. GameStudio will automatically listen for file changes on the hard drive and update them live, or ask you what to do in case of conflicts.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/script_editor/external_changes.jpg">
   <source src="media/ReleaseNotes-1.9/script_editor/external_changes.mp4" type="video/mp4">
</video>

Under the hood, [Rosyln](https://github.com/dotnet/roslyn) is the underlying technology that can process your Xenko source code. But we didn’t stop there! We were fortunate to find [AvalonEdit](http://avalonedit.net/), which provided us what we wanted for the visual appearance of the UI aspect of the Xenko script editor. We also integrated [RoslynPad](https://roslynpad.net/), which connects Roslyn and AvalonEdit together.

### Navigation Meshes

In Xenko 1.9β, you can create a **navigation mesh** powered by [Recast and Detour](https://github.com/recastnavigation/recastnavigation) with **real-time feedback** directly in the **Xenko GameStudio!** The navigation mesh is especially useful for RPGs or top-down strategy games, as you can use it to **guide characters through complex scenes**. The real-time feedback makes it easy to adjust and conveniently customize AI movement and the dimensions of the navigation mesh itself. The green outline of Xenko’s Navigation Mesh shows where the AI comes into play and where the colliders are set.


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/navmeshes/withOutlineAE.jpg">
   <source src="media/ReleaseNotes-1.9/navmeshes/withOutlineAE.mp4" type="video/mp4">
</video>

In the videos, you can see how the AI navigates the level using the logic within the navigation mesh, and how the colliders will automatically be set in real-time. Of course, you can script AI movement manually, too.


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/navmeshes/NoOutlineAE.jpg">
   <source src="media/ReleaseNotes-1.9/navmeshes/NoOutlineAE.mp4" type="video/mp4">
</video>

### Copy & Paste Functionality Expanded

In the past we only supported copy and pasting of assets, but now you can **copy-paste pretty much anything** in the Game Studio.

Any entities in a scene are now copyable, as well as any sprites of a sprite sheet, UI elements, or even a single property in the property grid! For instance, you can copy a list and perform any of the following operations.

* Insert it into another list at various positions, for example:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_InsertIntoList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_InsertIntoList.mp4" type="video/mp4">
</video>

* Copy and insert into the list (by pasting at a list item level).*


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_AppendToList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_AppendToList.mp4" type="video/mp4">
</video>

* Copy and append to a list, for example, append it to the end of the list.

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceList.mp4" type="video/mp4">
</video>

* Copy and replace the whole list.

A bit more difficult to explain, but perhaps easier to show than write about is **copy and replace at an item level**. This action (shown in the video below) will remove the item (at its position in the list) and insert the copied ones starting at the same position of the item in the list. In our example below, the copy replace starts from Item 2 in List 2:

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceIntoList.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/Copy_ReplaceIntoList.mp4" type="video/mp4">
</video>


Some information about copying entities and prefabs:

**An entire hierarchy of entities can be copied from one scene or prefab to another scene or prefab**. Prefab instance will keep their reference to the source prefab as illustrated in the following example:


<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/CopyPaste_BetweenScenes2.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/CopyPaste_BetweenScenes2.mp4" type="video/mp4">
</video>

*The prefab “MyHero” is copied into the scene. Links to the prefab are maintained.*


It is also possible to **copy a component from an entity and paste it into another entity**.


**Any absolutely any property that can be serialized can be copied**. You can copy something from one scene to another scene, from a sub-element in one scene to another scene and even from a scene to a text file, back and forth as needed. You can also copy simple values in the property grid (e.g., primitives such as int, vector3, string…) between separate Game Studio instances if that is something you find practical and useful.


Here’s an example of copying between scripts and transform entities in the GameStudio Property Grid: 

<video autoplay loop class="responsive-video" poster="media/ReleaseNotes-1.9/copy_paste/CopyPaste_PropertyGrid.jpg">
   <source src="media/ReleaseNotes-1.9/copy_paste/CopyPaste_PropertyGrid.mp4" type="video/mp4">
</video>

### .NET Standard

Starting with Xenko 1.9, shared Game assemblies will be created using [.NET Standard](https://docs.microsoft.com/en-us/dotnet/articles/standard/library) rather than PCL.

It offers [many advantages](https://blogs.msdn.microsoft.com/dotnet/2016/09/26/introducing-net-standard/): much better API surface for the developer, improved forward and backward compatibility, reduced fragmentation, finer-grained modularity of the framework, easier to write cross-platform apps, more frequent updates, etc.

Newly created applications will target .NET Standard 1.4, but users are of course free to target a different version. Also, your existing PCL projects will still work as is, but we recommend you to update your projects to .NET Standard!

### Assembly Reloading

Iterating on code is very important. So far, Xenko was supporting changes in scripts: as soon as you saved any C# file, Game Studio was offering to recompile and reload the assembly with the updated scripts. If there is an error loading the type, you can still edit other part of the asset, save it back while preserving the parts that could not be loaded.

In this version, we generalized the approach so that any type embedded in your assets can be reloaded! As a result, you can now implement your own classes for anything you want directly in your game or plugin assemblies, and keep editing them without restarting the Game Studio.

This includes renderers, material features, and will soon be extensively used in new assets.

## Breaking changes

### Windows Phone and Windows Store Removed

Windows Phone and Windows Store platforms are both removed.
Please use the newer `Universal Windows Apps (UWP)` instead. This platform was previously known as `Windows 10`.
Projects will be automatically upgraded to reflect this change.

Also, we renamed preprocessor definition `SILICONSTUDIO_PLATFORM_WINDOWS_RUNTIME` into `SILICONSTUDIO_PLATFORM_UWP`.

### .NET Standard

The switch to .NET Standard for newly created projects implies that:

* Runtime .NET framework requirement when distributing your projects is bumped from .NET 4.5 to .NET 4.6.1.
* You need Visual Studio 2015 to open and compile newly created projects
* You can upgrade older projects to use .NET Standard using Visual Studio 2015 Update 3 (in project properties)
* From version 1.9, we don't install prerequisites to compile PCL projects anymore. If you have somebody in your team still working on a project created with a previous version of Xenko on a fresh PC, please make them install Xenko 1.8 so that it installs the proper prerequisites (even if the project has been updated to a newer version of Xenko).


### Asset Serialization

We changed how we serialize asset in YAML. We introduced new concepts that improve how we can track overrides between an archetype or a prefab and assets/entities inheriting from it. Although everything happens "under the hood", this is a actually a heavy change that might impact the upgrading of your project.

We removed asset upgrading for projects made with version 1.3 and below (released more than a year ago). It is possible that you experience some issues when upgrading a project made with versions 1.4 to 1.7, but you should properly be able to upgrade any project that uses version 1.8. However a few cases are not supported:
* Dependency Properties of UI elements that are overridden from an UI library will be reset during upgrade. Therefore, properties such as Grid Column and Row will have to be manually restored.
* Some case of overriden materials in the material list of ModelComponent might be improperly upgraded.

### Dropping Support for Windows Store 8.1 and Windows Phone 8.1 

To properly support the .NET Standard 1.4 and offer our developers a more up-to-date and robust API, we decided to drop support for Windows Store 8.1 and Windows Phone 8.1 platforms.

As Microsoft seems to be focusing on Universal Windows Platform (UWP), we’ve also decided it was best to refocus on more pertinent and relevant platforms for Xenko users. UWP was introduced with Windows 10, and a whole range of devices already support it.

Of course, you are free to stick with Xenko 1.8 in case you have a project targeting one of those two platforms -- we know this is a big change, and we will make every effort to help our developers with this transition. We apologize for the inconvenience, and aim to bring you a top-notch .NET user experience!

Just as a reminder, we already support Universal Windows Platform (UWP) on x86, x64 and ARM as of Xenko 1.8, which means games and apps developed with Xenko can be deployed on a whole range of Microsoft devices, including [Xbox One](https://msdn.microsoft.com/en-us/windows/uwp/xbox-apps/index). Until 1.9, this platform was named Windows10 in Xenko, but we took the liberty to rename it UWP to better match the official naming.

## Changelog

### Version 1.9.0-beta

Release date 2016/11/24

#### Enhancements

##### General

* From now on, new projects are created as .NET Standard projects rather than PCL projects.
* `NuGet restore` is automatically run on projects having a `project.json` file
* Bumped FBX SDK to 2017.0.1
* Mesh importing now supports *ByEdge* smoothing which was previously ignored. If you notice any difference with vertex normals for your models please check your FBX export settings.
* Prerequisites installer will ask for UAC once instead of many times, and perform a silent installation for all of the prerequisites.

##### Game Studio

* Previously, when an `EntityComponent` (i.e. script) couldn't be loaded because game or plugin assembly didn't compile properly, we kept a Yaml representation of it so that it could be saved or reloaded after a code fix. Now we allow it to happen anywhere, so that you can use and/or implement custom classes for any type of the engine in your game/plugin.
* Improve asset logs and errors to properly display failure/warning icon on all assets, including the one with icon-style thumbnails.
* Improve loading/refreshing of assets in the scene editor.
* Asset editors will display a * in the tab name when an asset is dirty.
* Add editor for C# source code.
* C# files and .csproj files are automatically reloaded as they are modified on hard drive (using a Yes, Yes to All, No, No to All dialog).
* C# files have their own undo/redo stack
* Add a Save All button that saves both assets and source code files.
* The Game Studio now uses _AvalonDock_ as docking system
* Improve DPI support ([#454](https://github.com/SiliconStudio/xenko/issues/454) and [#470](https://github.com/SiliconStudio/xenko/issues/470))

##### Assets

* Asset YAML serialization has been changed to handle overrides in collection in a better way. More scenario of overrides are now supported.
* `SharpYaml` has been integrated into our codebase as `SiliconStudio.Core.Yaml`. Most of the duplicated types have been merged back in the `SiliconStudio.Core.Reflection`.
* Assets don't use a ~Base section nor a ~BasePart.
* Change `Asset.Id` to be of an `AssetId` type rather than `Guid`, to avoid invalid comparisons with other kind of ids.
* Remove the `Properties` member of Package.
* Introduce a new assembly Assets.Quantum 
* Overrides of properties is now handled using _Quantum_ instead of `ShadowObject`.
* Remove the asset diff/merge classes.

##### Engine

* DataSerializers are now generated in a file with .pdb information, so that the user can debug them.
* Add Local offsets to procedural models.
* `EntityComponent` now implements `IIdentifiable` and has an `Id` property.

##### Audio

* Add `SetRange` support to `AudioEmitterSoundController`
* Improve compilation speed of audio files

##### Materials

* Normal maps now have the option to `Invert Y`, supporting both textures where the green component is facing up or down

##### Particles

* Minor optimizations around vertex buffer building
* Add StopEmitters() method to the particle system, which prevents new particles from spawning without pausing the entire system

##### Physics

* Add Cone collider shape.
* Replace float with `AngleSingle` for `MaxSlope` of character controllers.

#### Issues Fixed

##### General

* UWP platform now uses UniversalWindowsPlatform 5.2.2 (was previously 5.0.0).

##### Game Studio

* Fix many issues with property overrides.
* Fix many issues when setting/overriding materials in ModelComponent.
* Asset logs were not properly sent forward to editor, resulting in an empty log for all assets.
* Sometimes there was a deadlock when compiling effects due to the way we were using the thread pool and task continuations.
* Fix performance issue that could occur when duplicating entities with the same name many times.
* Fix 'Rename' menu entry when right-clicking a folder of the scene editor.
* Fix crashes in the UI editor that could occur when deleting or moving an element.
* Fix crashes in sprite sheet editor that could occur when deleting, duplicating or moving sprites.
* Fix sort order of assets in the asset view.

##### Assets

* Fix tangents of imported meshes, when transforms are negative along some axes

##### Engine

* Several issues with spot lights were fixed, including shadow maps
* Fix flickering of some materials when no ambient light is present
* Fix an issue on OpenGL that caused low frame rates when using post effects, due to blocking GPU-readback

##### Animation

* Fix a bug where an empty animation clip caused a crash


### Version 1.9.1-beta

Release date 2016/11/29

#### Issues fixed

#### Game Studio

* Moving or renaming an asset that has overridden properties (eg. a scene using prefabs) was loosing override information once saved.

##### Engine

* Normal maps issue fixed where z-component was wrongly assumed to be 1 (it's now equal to sqrt(1 - x^2 - y^2))
* Depth of Field halo around foreground objects issue resolved

##### Samples

* Missing normal maps on some samples have been restored


### Version 1.9.2-beta

Release date 2016/12/13

#### Enhancements

##### Game Studio

* Maintaining ALT key down when dropping a prefab into a scene won't create a container entity for the prefab instance.
* Creation of prefabs from entities that are already instances of other prefabs and contains overridden properties will maintain prefab links and overrides in the newly created prefab.

#### Issues fixed

##### Game Studio

* Duplicating an entity that was linked to a prefab was not maintaining the prefab link to the copy in some scenarios.
* Adding a new or existing package to a solution was causing a crash.
* Fix hashing of source files to detect if an source file has changed.
* Adding a component that requires unicity to a prefab when one of the instance already had an instance of this prefab was crashing.
* Fix a crash that could occurs when removing an animation or a sound from an Animation Component or an Audio Emitter Component while the Game Studio was still compiling the asset.
* Render stages are now properly re-evaluated when a property affecting rendering is modified (eg. casting shadows, adding transparency to a material...)
* Fix insert position when dropping multiple assets into a scene at the same time
* Fix opening a scene from a package project that is not a game was crashing.
* Fix a crash that was occurring when adding a new Override in the GameSettings asset
* Fix an issue when copy/pasting a component that requires unicity to an entity that already has one. Now the user will be correctly prompted whether this component should be replaced by the copy.
* Fix incorrect filter list of asset types in the asset view.

##### Engine

* Fix an issue in the code detecting when a second component of the same type is added to an entity that should accept only one component of that type.
* Spotlights with shadows bug fix where multiple spotlights would reference the wrong shadowmap.
* Normal maps property names changed and some shader crashes fixed.
* Fix compressed normal maps having different signedness on different platforms; they are now always unsigned
* Fix Z component of normal maps when Scale & Offset is enabled
* Fix NaN values in normal mapping which caused glitches in post effects
* Fix shadow map range computation that caused parts of the scene not to be lit
* Reenable shadow cascade blending when automatic depth range computation is enabled and reduce the region of blending
* Fix invalid IL that prevented building UWP apps in release mode


### Version 1.9.3-beta

Release date 2017/1/11

#### Enhancement

#### Game Studio

* Maintaining ALT key down while moving an entity to a different parent will now keep its absolute position/orientation/scale
* Display the current version of Xenko in the Project Selection window
* Add more logging messages when creating a new project
* Improve tab header presentation, allow to see all open editors at once

##### Engine

* Animation: UpdateEngine (used by animation system to update values) will skip updating values if target is an array or list (i.e. list of bones) whose size is not big enough. This was previously leading to memory corruption.

#### Issues fixed

##### Game Studio

* Fix issues with collection properties in the property grid.
* Fix an issue where thumbnail backgrounds get dark when in Gamma rendering pipeline.
* Fix some broken cases when clearing the archetype of an asset
* Fix a crash when dropping an object into the viewport
* Fix many crashes and issues occurring when moving or duplicating entities and folders in the entity tree of a scene or a prefab
* Fix some issues with selection of entities
* Fix issues with some pane of the editor not being visible while they were checked as visible in the View menu
* Prevent TreeViews to change scroll position when selecting an item if they were scrolled to another position while they didn't have the focus
* Fix properties that were all grayed when selecting multiple objects.
* Fix a case where Script assets would not open in the external text editor.

##### Particles

* Fix a bug where Edge and Center definitions for trail shape renderer were swapped
* Fix a bug where None for particle material still displays color

##### Physics

* Fix 2D boxes shapes collisions.
* Fix drawing of Characters debug shapes at run-time.
* Throwing if mass is negative.
* Fixed an issue with scaling and single collider shapes

##### Audio

* Fix XAudio audio clipping when sounds were not looped.
* Fix OpenSLES multiple play of non looped sound.

#### Improvements

##### Game Studio

* Normal maps and Grayscale textures will now appear as 3-channel textures in the thumbnails and the preview.

##### Connection Router

* Due to the way adb was spawning a daemon process, connection router port was locked due to socket handle inheritability. This is now properly disabled.

## Known Issues

* On Linux, when switching the underlying Graphics Platform, rendering will not occur or fail. Delete the cache, local and roaming folder on the Linux host and restarting the game should fix the issue.
* Performance issues on mobile (being worked on)
* On iOS if `Enable device-specific builds` is toggled on (from the project properties) it won't be possible to debug game code. Please manually select the architecture of your device from the Advanced tab to speed up your development.
